// 自动更新服务
// 数据源优先级：
//   1. Cloudflare Worker 代理（部署后自动生效）：通过 KV 缓存读取，前端无 CORS 问题，调用逻辑不可被前端回查
//   2. 直接调用体彩官方 API（本地/未配置 Worker 时降级，浏览器打开 HTTP 页面才可能成功）
// 配置方法：部署 Worker 后，将 WORKER_URL 替换为你的 Worker 地址
const WORKER_URL = ''; // 例: 'https://lotto-proxy.xxx.workers.dev'

const UPDATE_SERVICE = {
    // localStorage 键名
    storageKey: 'importedLottoData',

    /**
     * 从 Cloudflare Worker 代理获取数据（推荐，无 CORS 问题）
     * @returns {Promise<Array|null>} 记录数组，Worker 未配置或失败时返回 null
     */
    async fetchFromWorker() {
        if (!WORKER_URL) return null;
        try {
            const resp = await fetch(WORKER_URL, { method: 'GET' });
            if (!resp.ok) throw new Error(`Worker HTTP ${resp.status}`);
            const json = await resp.json();
            if (!json.ok || !Array.isArray(json.records)) throw new Error('Worker 返回格式异常');
            return json.records;
        } catch (e) {
            console.warn('[UPDATE] Worker 请求失败，尝试直连官方 API:', e.message);
            return null;
        }
    },

    /**
     * 直接调用体彩官方 API（降级方案）
     */
    async fetchFromDirectApi() {
        const url = 'https://webapi.sporttery.cn/gateway/lottery/getHistoryPageListV1.qry?gameNo=85&provinceId=0&pageSize=30&pageNo=1';
        const resp = await fetch(url, { method: 'GET', headers: { 'Accept': 'application/json' } });
        if (!resp.ok) throw new Error(`API 请求失败: HTTP ${resp.status}`);
        const json = await resp.json();
        if (!json.success) throw new Error(`API 返回错误: ${json.errorMessage}`);
        const list = (json.value && json.value.list) || [];
        return list.map(item => this.parseRecord(item));
    },

    /**
     * 将 API 单条记录转换为网站数据格式
     */
    parseRecord(item) {
        const parts = (item.lotteryDrawResult || '').split(' ').filter(Boolean);
        const redBalls = parts.slice(0, 5).map(n => String(n).padStart(2, '0'));
        const blueBalls = parts.slice(5, 7).map(n => String(n).padStart(2, '0'));

        let firstPrize = 0;
        const prizeLevels = item.prizeLevelList || [];
        const first = prizeLevels.find(p => p.prizeLevel === '一等奖');
        if (first) {
            firstPrize = parseInt(String(first.stakeCount).replace(/,/g, '')) || 0;
        }

        return {
            issue: item.lotteryDrawNum,
            date: item.lotteryDrawTime,
            redBalls,
            blueBalls,
            sales: item.totalSaleAmount || '0',
            pool: item.poolBalanceAfterdraw || item.poolBalance || '0',
            firstPrize
        };
    },

    /**
     * 获取本地最新期号
     */
    getLocalLatestIssue() {
        const all = loadData ? loadData() : [...lottoData];
        if (all.length === 0) return 0;
        return parseInt(all[0].issue);
    },

    /**
     * 检查并更新缺失期次
     * @returns {Promise<number>} 新增记录数
     */
    async checkForUpdates() {
        try {
            console.log('[UPDATE] 正在检查更新...');

            // 优先走 Worker 代理，失败则降级直连 API
            let records = await this.fetchFromWorker();
            if (records === null) {
                records = await this.fetchFromDirectApi();
            }

            if (!records || records.length === 0) {
                console.log('[UPDATE] 暂无新数据');
                return 0;
            }

            const existingIssues = new Set(loadData().map(r => r.issue));
            const missing = records.filter(r => !existingIssues.has(r.issue));
            console.log(`[UPDATE] 本地缺少 ${missing.length} 期`);

            if (missing.length > 0) {
                this.saveToLocalStorage(missing);
                this.showToast(`成功更新 ${missing.length} 期开奖数据！`);
            } else {
                console.log('[UPDATE] 数据已是最新');
            }
            return missing.length;

        } catch (error) {
            console.error('[UPDATE] 检查更新失败:', error);
            this.showToast('更新失败：' + (error.message || '未知错误'), 'error', 5000);
            return 0;
        }
    },

    /**
     * 将新记录存入 localStorage（与现有数据合并）
     */
    saveToLocalStorage(newRecords) {
        let imported = [];
        try {
            const raw = localStorage.getItem(this.storageKey);
            if (raw) imported = JSON.parse(raw);
        } catch (e) {
            imported = [];
        }

        const existingIssues = new Set(imported.map(r => r.issue));
        const toAdd = newRecords.filter(r => !existingIssues.has(r.issue));
        imported = [...toAdd, ...imported];

        localStorage.setItem(this.storageKey, JSON.stringify(imported));
    },

    /**
     * 显示提示消息
     */
    showToast(message, type = 'success', duration = 3000) {
        const toast = document.createElement('div');
        const bgClass = type === 'success' ? 'bg-green-600' : 'bg-red-600';
        const icon = type === 'success' ? 'check-circle' : 'x-circle';

        toast.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2 ${bgClass} text-white transform transition-all duration-300 translate-y-20 opacity-0`;
        toast.innerHTML = `<i data-lucide="${icon}"></i><span>${message}</span>`;
        document.body.appendChild(toast);

        if (typeof lucide !== 'undefined') lucide.createIcons();

        setTimeout(() => {
            toast.classList.remove('translate-y-20', 'opacity-0');
        }, 50);

        setTimeout(() => {
            toast.classList.add('translate-y-20', 'opacity-0');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }
};

/**
 * 全局：检查更新（手动点击"检查更新"按钮）
 */
async function checkForUpdates() {
    const count = await UPDATE_SERVICE.checkForUpdates();
    if (count > 0) {
        filteredData = loadData().slice(0, 20);
        if (typeof renderTable === 'function') renderTable();
        if (typeof updateStats === 'function') updateStats();
    }
}

/**
 * 手动应用（保留接口兼容）
 */
function applyUpdate() {
    filteredData = loadData().slice(0, 20);
    if (typeof renderTable === 'function') renderTable();
    if (typeof updateStats === 'function') updateStats();
}

/**
 * 自动更新调度器
 * 页面打开时立即检查一次；之后每天 7:00 若为开奖次日（周二/四/日）再检查
 */
const AutoUpdateScheduler = {
    NEXT_DAY_OF_DRAW: [2, 4, 0], // 周二、周四、周日

    init() {
        console.log('[SCHEDULER] 初始化自动更新调度器');
        this._maybeCheck(true);
        this._scheduleNext();
    },

    _msUntilNext7() {
        const now = new Date();
        const target = new Date(now);
        target.setHours(7, 0, 0, 0);
        if (target <= now) target.setDate(target.getDate() + 1);
        return target - now;
    },

    _scheduleNext() {
        const delay = this._msUntilNext7();
        console.log(`[SCHEDULER] 下次检查: ${new Date(Date.now() + delay).toLocaleString()}`);
        setTimeout(() => {
            this._maybeCheck(false);
            this._scheduleNext();
        }, delay);
    },

    async _maybeCheck(isFirst) {
        const now = new Date();
        const day = now.getDay();
        if (!isFirst && !this.NEXT_DAY_OF_DRAW.includes(day)) {
            console.log(`[SCHEDULER] 今天非开奖次日，跳过`);
            return;
        }

        console.log(`[SCHEDULER] 执行自动更新检查 (${now.toLocaleString()})`);
        try {
            const count = await UPDATE_SERVICE.checkForUpdates();
            if (count > 0) {
                filteredData = loadData().slice(0, 20);
                if (typeof renderTable === 'function') renderTable();
                if (typeof updateStats === 'function') updateStats();
            }
        } catch (e) {
            console.error('[SCHEDULER] 自动更新失败:', e);
        }
    }
};
