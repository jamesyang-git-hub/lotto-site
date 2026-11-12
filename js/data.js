// 大乐透历史开奖数据
// 更新: 2026-11-11 补充 26090-26128（共39期，数据来源：体彩官方API）
// 记录数量: 249
const lottoData = [
   {
    issue: '26128',
    date: '2026-11-09',
    redBalls: ['03', '13', '20', '25', '34'],
    blueBalls: ['09', '12'],
    sales: '309,576,382',
    pool: '758,937,073.24',
    firstPrize: 9
  },
  {
    issue: '26127',
    date: '2026-11-07',
    redBalls: ['05', '06', '17', '18', '27'],
    blueBalls: ['03', '12'],
    sales: '332,972,216',
    pool: '762,911,586.98',
    firstPrize: 5
  },
  {
    issue: '26126',
    date: '2026-11-04',
    redBalls: ['05', '11', '17', '25', '34'],
    blueBalls: ['04', '06'],
    sales: '316,122,624',
    pool: '750,154,899.29',
    firstPrize: 9
  },
  {
    issue: '26125',
    date: '2026-11-02',
    redBalls: ['12', '13', '23', '25', '29'],
    blueBalls: ['07', '10'],
    sales: '321,532,007',
    pool: '764,828,748.25',
    firstPrize: 5
  },
  {
    issue: '26124',
    date: '2026-10-31',
    redBalls: ['12', '14', '18', '22', '27'],
    blueBalls: ['01', '09'],
    sales: '349,313,266',
    pool: '750,797,513.86',
    firstPrize: 6
  },
  {
    issue: '26123',
    date: '2026-10-28',
    redBalls: ['13', '18', '19', '20', '28'],
    blueBalls: ['09', '11'],
    sales: '317,714,615',
    pool: '731,643,950.16',
    firstPrize: 11
  },
  {
    issue: '26122',
    date: '2026-10-26',
    redBalls: ['02', '14', '21', '22', '24'],
    blueBalls: ['02', '12'],
    sales: '318,170,280',
    pool: '773,998,832.08',
    firstPrize: 7
  },
  {
    issue: '26121',
    date: '2026-10-24',
    redBalls: ['06', '08', '19', '24', '25'],
    blueBalls: ['01', '08'],
    sales: '337,292,145',
    pool: '804,119,354.24',
    firstPrize: 6
  },
  {
    issue: '26120',
    date: '2026-10-21',
    redBalls: ['01', '06', '10', '15', '32'],
    blueBalls: ['03', '04'],
    sales: '314,954,142',
    pool: '825,893,883.63',
    firstPrize: 3
  },
  {
    issue: '26119',
    date: '2026-10-19',
    redBalls: ['03', '06', '20', '24', '32'],
    blueBalls: ['04', '07'],
    sales: '304,050,337',
    pool: '824,436,634.68',
    firstPrize: 3
  },
  {
    issue: '26118',
    date: '2026-10-17',
    redBalls: ['02', '09', '21', '26', '32'],
    blueBalls: ['06', '12'],
    sales: '316,189,166',
    pool: '796,723,787.40',
    firstPrize: 2
  },
  {
    issue: '26117',
    date: '2026-10-14',
    redBalls: ['04', '13', '19', '29', '31'],
    blueBalls: ['02', '12'],
    sales: '291,650,582',
    pool: '746,384,997.05',
    firstPrize: 10
  },
  {
    issue: '26116',
    date: '2026-10-12',
    redBalls: ['09', '18', '22', '25', '35'],
    blueBalls: ['01', '10'],
    sales: '293,575,132',
    pool: '780,428,328.05',
    firstPrize: 2
  },
  {
    issue: '26115',
    date: '2026-10-10',
    redBalls: ['12', '20', '32', '33', '35'],
    blueBalls: ['06', '07'],
    sales: '321,291,403',
    pool: '733,972,024.10',
    firstPrize: 10
  },
  {
    issue: '26114',
    date: '2026-10-07',
    redBalls: ['08', '12', '15', '29', '30'],
    blueBalls: ['09', '12'],
    sales: '277,888,881',
    pool: '747,810,333.57',
    firstPrize: 5
  },
  {
    issue: '26113',
    date: '2026-10-05',
    redBalls: ['02', '04', '06', '10', '11'],
    blueBalls: ['01', '10'],
    sales: '252,968,482',
    pool: '733,622,133.79',
    firstPrize: 37
  },
  {
    issue: '26112',
    date: '2026-09-30',
    redBalls: ['01', '03', '05', '10', '22'],
    blueBalls: ['03', '09'],
    sales: '306,396,671',
    pool: '798,649,740.87',
    firstPrize: 6
  },
  {
    issue: '26111',
    date: '2026-09-28',
    redBalls: ['10', '11', '17', '26', '29'],
    blueBalls: ['01', '03'],
    sales: '289,057,331',
    pool: '819,506,211.31',
    firstPrize: 7
  },
  {
    issue: '26110',
    date: '2026-09-26',
    redBalls: ['03', '24', '25', '26', '35'],
    blueBalls: ['07', '09'],
    sales: '302,677,559',
    pool: '853,999,858.47',
    firstPrize: 6
  },
  {
    issue: '26109',
    date: '2026-09-23',
    redBalls: ['12', '14', '16', '27', '34'],
    blueBalls: ['04', '08'],
    sales: '290,272,321',
    pool: '875,294,743.09',
    firstPrize: 1
  },
  {
    issue: '26108',
    date: '2026-09-21',
    redBalls: ['01', '05', '07', '21', '35'],
    blueBalls: ['01', '04'],
    sales: '296,206,851',
    pool: '845,758,402.32',
    firstPrize: 3
  },
  {
    issue: '26107',
    date: '2026-09-19',
    redBalls: ['02', '05', '07', '14', '22'],
    blueBalls: ['04', '10'],
    sales: '313,508,185',
    pool: '831,053,727.13',
    firstPrize: 3
  },
  {
    issue: '26106',
    date: '2026-09-16',
    redBalls: ['14', '17', '21', '25', '28'],
    blueBalls: ['04', '06'],
    sales: '290,236,360',
    pool: '826,970,066.74',
    firstPrize: 3
  },
  {
    issue: '26105',
    date: '2026-09-14',
    redBalls: ['10', '14', '30', '33', '34'],
    blueBalls: ['09', '12'],
    sales: '290,941,792',
    pool: '797,986,461.75',
    firstPrize: 3
  },
  {
    issue: '26104',
    date: '2026-09-12',
    redBalls: ['01', '06', '14', '15', '26'],
    blueBalls: ['08', '09'],
    sales: '316,250,501',
    pool: '768,328,090.76',
    firstPrize: 7
  },
  {
    issue: '26103',
    date: '2026-09-09',
    redBalls: ['03', '16', '17', '32', '35'],
    blueBalls: ['02', '12'],
    sales: '296,391,996',
    pool: '763,164,025.28',
    firstPrize: 3
  },
  {
    issue: '26102',
    date: '2026-09-07',
    redBalls: ['01', '03', '07', '27', '28'],
    blueBalls: ['06', '07'],
    sales: '291,295,536',
    pool: '725,321,799.11',
    firstPrize: 1
  },
  {
    issue: '26101',
    date: '2026-09-05',
    redBalls: ['09', '11', '18', '26', '33'],
    blueBalls: ['09', '11'],
    sales: '315,133,456',
    pool: '692,723,356.75',
    firstPrize: 10
  },
  {
    issue: '26100',
    date: '2026-09-02',
    redBalls: ['02', '06', '11', '15', '31'],
    blueBalls: ['07', '08'],
    sales: '293,430,528',
    pool: '728,785,802.25',
    firstPrize: 6
  },
  {
    issue: '26099',
    date: '2026-08-31',
    redBalls: ['02', '17', '20', '29', '33'],
    blueBalls: ['08', '09'],
    sales: '295,696,198',
    pool: '728,556,727.99',
    firstPrize: 4
  },
  {
    issue: '26098',
    date: '2026-08-29',
    redBalls: ['07', '09', '18', '19', '21'],
    blueBalls: ['02', '09'],
    sales: '315,878,206',
    pool: '706,544,163.92',
    firstPrize: 15
  },
  {
    issue: '26097',
    date: '2026-08-26',
    redBalls: ['03', '10', '12', '20', '25'],
    blueBalls: ['01', '09'],
    sales: '296,031,159',
    pool: '762,988,475.69',
    firstPrize: 7
  },
  {
    issue: '26096',
    date: '2026-08-24',
    redBalls: ['08', '09', '10', '11', '25'],
    blueBalls: ['04', '12'],
    sales: '300,992,176',
    pool: '760,346,715.70',
    firstPrize: 9
  },
  {
    issue: '26095',
    date: '2026-08-22',
    redBalls: ['04', '06', '08', '10', '14'],
    blueBalls: ['04', '05'],
    sales: '323,275,140',
    pool: '801,693,149.85',
    firstPrize: 6
  },
  {
    issue: '26094',
    date: '2026-08-19',
    redBalls: ['05', '14', '15', '17', '33'],
    blueBalls: ['01', '07'],
    sales: '305,764,076',
    pool: '795,085,879.36',
    firstPrize: 3
  },
  {
    issue: '26093',
    date: '2026-08-17',
    redBalls: ['08', '10', '22', '26', '29'],
    blueBalls: ['03', '10'],
    sales: '301,981,951',
    pool: '772,986,652.76',
    firstPrize: 10
  },
  {
    issue: '26092',
    date: '2026-08-15',
    redBalls: ['12', '16', '19', '29', '33'],
    blueBalls: ['07', '09'],
    sales: '326,419,006',
    pool: '822,403,232.36',
    firstPrize: 4
  },
  {
    issue: '26091',
    date: '2026-08-12',
    redBalls: ['03', '04', '07', '12', '32'],
    blueBalls: ['01', '02'],
    sales: '303,722,394',
    pool: '835,359,281.97',
    firstPrize: 3
  },
  {
    issue: '26090',
    date: '2026-08-10',
    redBalls: ['09', '14', '17', '19', '24'],
    blueBalls: ['02', '09'],
    sales: '298,321,791',
    pool: '825,721,619.33',
    firstPrize: 2
  },
  {
    issue: '26089',
    date: '2026-08-08',
    redBalls: ['03', '07', '12', '14', '26'],
    blueBalls: ['05', '11'],
    sales: '326,458,125	',
    pool: '817,996,545.38',
    firstPrize: 3
  },
   {
    issue: '26088',
    date: '2026-08-05',
    redBalls: ['03', '09', '11', '24', '27'],
    blueBalls: ['05', '11'],
    sales: '305,815,169',
    pool: '792,266,898.25',
    firstPrize: 2
  },
   {
    issue: '26087',
    date: '2026-08-03',
    redBalls: ['05', '10', '16', '24', '27'],
    blueBalls: ['04', '10'],
    sales: '306,098,479',
    pool: '768,406,558.52',
    firstPrize: 9
  },
   {
    issue: '26086',
    date: '2026-08-01',
    redBalls: ['10', '11', '18', '22', '35'],
    blueBalls: ['06', '12'],
    sales: '327,985,310',
    pool: '813,207,389.58',
    firstPrize: 2
  },
   {
    issue: '26085',
    date: '2026-07-29',
    redBalls: ['03', '04', '14', '28', '31'],
    blueBalls: ['05', '07'],
    sales: '302,145,325',
    pool: '804,161,465.24',
    firstPrize: 2
  },
   {
    issue: '26084',
    date: '2026-07-27',
    redBalls: ['13', '25', '30', '32', '33'],
    blueBalls: ['04', '05'],
    sales: '300,483,424',
    pool: '770,490,757.82',
    firstPrize: 8
  },
   {
    issue: '26083',
    date: '2026-07-25',
    redBalls: ['14', '15', '16', '23', '26'],
    blueBalls: ['07', '09'],
    sales: '316,550,987',
    pool: '772,867,559.82',
    firstPrize: 8
  },
  {
    issue: '26082',
    date: '2026-07-22',
    redBalls: ['16', '26', '27', '28', '34'],
    blueBalls: ['02', '06'],
    sales: '295,623,678',
    pool: '807,119,056.09',
    firstPrize: 5
  },
  {
    issue: '26081',
    date: '2026-07-20',
    redBalls: ['08', '16', '18', '24', '34'],
    blueBalls: ['09', '12'],
    sales: '301,607,097',
    pool: '784,468,403.70',
    firstPrize: 5
  },
  {
    issue: '26080',
    date: '2026-07-18',
    redBalls: ['05', '10', '15', '21', '23'],
    blueBalls: ['07', '08'],
    sales: '325,550,165',
    pool: '765,513,154.43',
    firstPrize: 10
  },
   {
    issue: '26079',
    date: '2026-07-15',
    redBalls: ['06', '08', '23', '26', '27'],
    blueBalls: ['05', '12'],
    sales: '301,975,334',
    pool: '794,651,243.34',
    firstPrize: 5
  },
   {
    issue: '26078',
    date: '2026-07-13',
    redBalls: ['02', '13', '20', '25', '32'],
    blueBalls: ['08', '11'],
    sales: '302,935,941',
    pool: '818,797,138.41',
    firstPrize: 5
  },
   {
    issue: '26077',
    date: '2026-07-11',
    redBalls: ['04', '14', '19', '24', '27'],
    blueBalls: ['06', '07'],
    sales: '318,922,356',
    pool: '797,164,073.48',
    firstPrize: 2
  },
   {
    issue: '26076',
    date: '2026-07-08',
    redBalls: ['15', '20', '27', '28', '35'],
    blueBalls: ['02', '11'],
    sales: '303,115,587',
    pool: '804,904,836.99',
    firstPrize: 4
  },
   {
    issue: '26075',
    date: '2026-07-06',
    redBalls: ['01', '06', '16', '18', '26'],
    blueBalls: ['04', '10'],
    sales: '295,227,167',
    pool: '814,593,833.81',
    firstPrize: 3
  },
  {
    issue: '26074',
    date: '2026-07-04',
    redBalls: ['01', '04', '10', '23', '25'],
    blueBalls: ['01', '12'],
    sales: '319,733,435',
    pool: '818,314,176.51',
    firstPrize: 6
  },
  {
    issue: '26073',
    date: '2026-07-01',
    redBalls: ['04', '10', '22', '23', '33'],
    blueBalls: ['02', '12'],
    sales: '306,363,724',
    pool: '798,037,522.38',
    firstPrize: 6
  },
  {
    issue: '26072',
    date: '2026-06-29',
    redBalls: ['01', '13', '26', '29', '30'],
    blueBalls: ['09', '11'],
    sales: '309,759,041',
    pool: '820,383,228.03',
    firstPrize: 5
  },{
    issue: '26071',
    date: '2026-06-27',
    redBalls: ['05', '13', '22', '26', '32'],
    blueBalls: ['02', '03'],
    sales: '332,658,791',
    pool: '844,492,276.81',
    firstPrize: 1
  },{
    issue: '26070',
    date: '2026-06-24',
    redBalls: ['04', '05', '15', '21', '32'],
    blueBalls: ['02', '11'],
    sales: '312,722,588',
    pool: '814,894,461.66',
    firstPrize: 1
  },{
    issue: '26069',
    date: '2026-06-22',
    redBalls: ['12', '19', '21', '24', '29'],
    blueBalls: ['03', '10'],
    sales: '312,134,107',
    pool: '757,966,457.83',
    firstPrize: 8
  }, {
    issue: '26068',
    date: '2026-06-20',
    redBalls: ['03', '11', '12', '21', '22'],
    blueBalls: ['06', '10'],
    sales: '333,899,407',
    pool: '802,145,380.54',
    firstPrize: 5
  },
   {
    issue: '26067',
    date: '2026-06-17',
    redBalls: ['06', '16', '18', '19', '28'],
    blueBalls: ['07', '11'],
    sales: '322,509,643',
    pool: '791,339,917.07',
    firstPrize: 6
  },
  {
    issue: '26066',
    date: '2026-06-15',
    redBalls: ['10', '13', '19', '21', '30'],
    blueBalls: ['04', '05'],
    sales: '352,461,614',
    pool: '817,519,004.86',
    firstPrize: 2
  },
  {
    issue: '26065',
    date: '2026-06-13',
    redBalls: ['04', '11', '12', '13', '25'],
    blueBalls: ['04', '08'],
    sales: '361,984,211',
    pool: '802,840,285.34',
    firstPrize: 6
  },
   {
    issue: '26064',
    date: '2026-06-10',
    redBalls: ['03', '13', '15', '17', '21'],
    blueBalls: ['02', '07'],
    sales: '352,495,130',
    pool: '787,631,261.17',
    firstPrize: 4
  },
  {
    issue: '26063',
    date: '2026-06-08',
    redBalls: ['03', '15', '20', '29', '31'],
    blueBalls: ['01', '12'],
    sales: '353,853,854',
    pool: '762,261,291.72',
    firstPrize: 5
  },
  {
    issue: '26062',
    date: '2026-06-06',
    redBalls: ['07', '15', '20', '24', '29'],
    blueBalls: ['04', '10'],
    sales: '397,538,816',
    pool: '738,675,961.01',
    firstPrize: 15
  },
  {
    issue: '26061',
    date: '2026-06-03',
    redBalls: ['10', '12', '26', '31', '35'],
    blueBalls: ['02', '12'],
    sales: '354,547,009',
    pool: '807,705,563.71',
    firstPrize: 4
  },
  {
    issue: '26060',
    date: '2026-06-01',
    redBalls: ['22', '28', '30', '31', '34'],
    blueBalls: ['01', '05'],
    sales: '364,299,680',
    pool: '769,160,539.17',
    firstPrize: 37
  },
  {
    issue: '26059',
    date: '2026-05-30',
    redBalls: ['06', '13', '17', '19', '26'],
    blueBalls: ['07', '08'],
    sales: '373,161,795',
    pool: '818,749,861.45',
    firstPrize: 5
  },
  {
    issue: '26058',
    date: '2026-05-27',
    redBalls: ['07', '12', '13', '18', '34'],
    blueBalls: ['01', '05'],
    sales: '354,000,000',
    pool: '786,536,913.60',
    firstPrize: 5
  },
  {
    issue: '26057',
    date: '2026-05-25',
    redBalls: ['23', '25', '26', '27', '34'],
    blueBalls: ['04', '10'],
    sales: '341,310,042',
    pool: '801,147,297.40',
    firstPrize: 4
  },
  {
    issue: '26056',
    date: '2026-05-23',
    redBalls: ['06', '07', '18', '21', '30'],
    blueBalls: ['01', '05'],
    sales: '368,991,091',
    pool: '767,589,409.76',
    firstPrize: 3
  },
  {
    issue: '26055',
    date: '2026-05-20',
    redBalls: ['09', '10', '20', '33', '35'],
    blueBalls: ['04', '11'],
    sales: '349,000,000',
    pool: '757,000,000',
    firstPrize: 4
  },
  {
    issue: '26054',
    date: '2026-05-18',
    redBalls: ['02', '06', '14', '22', '24'],
    blueBalls: ['08', '11'],
    sales: '349,381,748',
    pool: '718,927,617.68',
    firstPrize: 13
  },
  {
    issue: '26053',
    date: '2026-05-16',
    redBalls: ['02', '09', '14', '20', '31'],
    blueBalls: ['05', '09'],
    sales: '374,349,995',
    pool: '738,749,152.00',
    firstPrize: 14
  },
  {
    issue: '26052',
    date: '2026-05-13',
    redBalls: ['02', '03', '20', '28', '33'],
    blueBalls: ['02', '12'],
    sales: '353,000,000',
    pool: '782,000,000',
    firstPrize: 9
  },
  {
    issue: '26051',
    date: '2026-05-11',
    redBalls: ['13', '18', '28', '32', '33'],
    blueBalls: ['02', '11'],
    sales: '355,675,446',
    pool: '799,348,751.05',
    firstPrize: 4
  },
  {
    issue: '26050',
    date: '2026-05-09',
    redBalls: ['06', '10', '14', '23', '33'],
    blueBalls: ['08', '10'],
    sales: '373,660,843',
    pool: '812,279,268',
    firstPrize: 6
  },
  {
    issue: '26049',
    date: '2026-05-06',
    redBalls: ['01', '06', '14', '15', '17'],
    blueBalls: ['02', '03'],
    sales: '298,483,726',
    pool: '786,081,563.06',
    firstPrize: 6
  },
  {
    issue: '26048',
    date: '2026-05-04',
    redBalls: ['11', '17', '20', '23', '35'],
    blueBalls: ['01', '10'],
    sales: '276,914,543',
    pool: '778,139,138.13',
    firstPrize: 7
  },
  {
    issue: '26047',
    date: '2026-05-02',
    redBalls: ['09', '20', '21', '23', '28'],
    blueBalls: ['06', '11'],
    sales: '301,530,437',
    pool: '776,088,008.71',
    firstPrize: 5
  },
  {
    issue: '26046',
    date: '2026-04-29',
    redBalls: ['01', '13', '18', '27', '33'],
    blueBalls: ['04', '07'],
    sales: '305,905,116',
    pool: '801,117,818.08',
    firstPrize: 7
  },
  {
    issue: '26045',
    date: '2026-04-27',
    redBalls: ['01', '15', '21', '26', '33'],
    blueBalls: ['04', '07'],
    sales: '309,445,116',
    pool: '795,611,859.51',
    firstPrize: 6
  },
  {
    issue: '26044',
    date: '2026-04-25',
    redBalls: ['03', '08', '22', '26', '29'],
    blueBalls: ['07', '10'],
    sales: '333,443,770',
    pool: '796,949,218.24',
    firstPrize: 8
  },
  {
    issue: '26043',
    date: '2026-04-22',
    redBalls: ['08', '12', '14', '19', '22'],
    blueBalls: ['11', '12'],
    sales: '308,301,370',
    pool: '835,097,420.18',
    firstPrize: 1
  },
  {
    issue: '26042',
    date: '2026-04-20',
    redBalls: ['02', '07', '13', '19', '24'],
    blueBalls: ['03', '08'],
    sales: '311,873,981',
    pool: '783,361,004.17',
    firstPrize: 5
  },
  {
    issue: '26041',
    date: '2026-04-18',
    redBalls: ['24', '25', '27', '29', '34'],
    blueBalls: ['02', '06'],
    sales: '342,918,690',
    pool: '804,564,900.43',
    firstPrize: 6
  },
  {
    issue: '26040',
    date: '2026-04-15',
    redBalls: ['06', '12', '13', '21', '34'],
    blueBalls: ['08', '09'],
    sales: '322,412,866',
    pool: '776,038,688.83',
    firstPrize: 6
  },
  {
    issue: '26039',
    date: '2026-04-13',
    redBalls: ['09', '11', '20', '26', '27'],
    blueBalls: ['06', '09'],
    sales: '321,747,230',
    pool: '760,888,094.31',
    firstPrize: 11
  },
  {
    issue: '26038',
    date: '2026-04-11',
    redBalls: ['08', '17', '21', '33', '35'],
    blueBalls: ['06', '07'],
    sales: '343,632,778',
    pool: '799,997,856.04',
    firstPrize: 2
  },
  {
    issue: '26037',
    date: '2026-04-08',
    redBalls: ['07', '12', '13', '28', '32'],
    blueBalls: ['06', '08'],
    sales: '324,524,682',
    pool: '756,781,635.79',
    firstPrize: 5
  },
  {
    issue: '26036',
    date: '2026-04-06',
    redBalls: ['04', '07', '16', '26', '32'],
    blueBalls: ['05', '08'],
    sales: '298,882,570',
    pool: '732,445,104.97',
    firstPrize: 9
  },
  {
    issue: '26035',
    date: '2026-04-04',
    redBalls: ['02', '22', '30', '33', '34'],
    blueBalls: ['08', '12'],
    sales: '324,023,066',
    pool: '744,740,092.48',
    firstPrize: 11
  },
  {
    issue: '26034',
    date: '2026-04-01',
    redBalls: ['11', '12', '25', '26', '27'],
    blueBalls: ['08', '11'],
    sales: '321,281,232',
    pool: '745,020,716.12',
    firstPrize: 6
  },
  {
    issue: '26033',
    date: '2026-03-30',
    redBalls: ['03', '05', '07', '09', '18'],
    blueBalls: ['02', '10'],
    sales: '319,640,788',
    pool: '743,671,788.49',
    firstPrize: 12
  },
  {
    issue: '26032',
    date: '2026-03-28',
    redBalls: ['03', '04', '19', '26', '32'],
    blueBalls: ['01', '12'],
    sales: '342,000,000',
    pool: '787,204,235.54',
    firstPrize: 6
  },
  {
    issue: '26031',
    date: '2026-03-25',
    redBalls: ['06', '08', '22', '29', '34'],
    blueBalls: ['05', '07'],
    sales: '321,190,415',
    pool: '762,397,267.57',
    firstPrize: 9
  },
  {
    issue: '26030',
    date: '2026-03-23',
    redBalls: ['02', '13', '22', '28', '34'],
    blueBalls: ['05', '12'],
    sales: '316,922,568',
    pool: '801,741,816',
    firstPrize: 8
  },
  {
    issue: '26029',
    date: '2026-03-21',
    redBalls: ['03', '05', '17', '33', '35'],
    blueBalls: ['05', '07'],
    sales: '337,000,000',
    pool: '834,000,000',
    firstPrize: 6
  },
  {
    issue: '26028',
    date: '2026-03-18',
    redBalls: ['15', '27', '29', '30', '34'],
    blueBalls: ['01', '10'],
    sales: '303,460,918',
    pool: '861,344,046',
    firstPrize: 1
  },
  {
    issue: '26027',
    date: '2026-03-16',
    redBalls: ['09', '10', '11', '12', '16'],
    blueBalls: ['01', '11'],
    sales: '307,838,475',
    pool: '799,972,392',
    firstPrize: 6
  },
  {
    issue: '26026',
    date: '2026-03-14',
    redBalls: ['10', '11', '22', '26', '32'],
    blueBalls: ['01', '08'],
    sales: '330,044,286',
    pool: '794,063,794',
    firstPrize: 3
  },
  {
    issue: '26025',
    date: '2026-03-11',
    redBalls: ['03', '15', '24', '28', '29'],
    blueBalls: ['03', '07'],
    sales: '299,297,449',
    pool: '778,000,000',
    firstPrize: 10
  },
  {
    issue: '26024',
    date: '2026-03-09',
    redBalls: ['02', '04', '08', '10', '21'],
    blueBalls: ['09', '12'],
    sales: '293,616,732',
    pool: '765,000,000',
    firstPrize: 3
  },
  {
    issue: '26023',
    date: '2026-03-07',
    redBalls: ['09', '25', '26', '27', '28'],
    blueBalls: ['01', '08'],
    sales: '323,009,849',
    pool: '763,063,925',
    firstPrize: 6
  },
  {
    issue: '26022',
    date: '2026-03-04',
    redBalls: ['05', '09', '10', '18', '26'],
    blueBalls: ['05', '06'],
    sales: '294,728,612',
    pool: '783,711,295',
    firstPrize: 10
  },
  {
    issue: '26021',
    date: '2026-03-02',
    redBalls: ['05', '08', '12', '14', '17'],
    blueBalls: ['04', '05'],
    sales: '291,691,198',
    pool: '823,831,821',
    firstPrize: 6
  },
  {
    issue: '26020',
    date: '2026-02-28',
    redBalls: ['01', '10', '21', '23', '29'],
    blueBalls: ['10', '12'],
    sales: '319,278,064',
    pool: '780,263,624',
    firstPrize: 3
  },
  {
    issue: '26019',
    date: '2026-02-25',
    redBalls: ['12', '13', '14', '16', '31'],
    blueBalls: ['04', '12'],
    sales: '356,165,890',
    pool: '780,263,624',
    firstPrize: 8
  },
  {
    issue: '26018',
    date: '2026-02-11',
    redBalls: ['09', '11', '19', '30', '35'],
    blueBalls: ['01', '12'],
    sales: '349,431,305',
    pool: '761,611,231',
    firstPrize: 6
  },
  {
    issue: '26017',
    date: '2026-02-09',
    redBalls: ['04', '05', '10', '23', '31'],
    blueBalls: ['07', '12'],
    sales: '314,171,855',
    pool: '762,704,025',
    firstPrize: 6
  },
  {
    issue: '26016',
    date: '2026-02-07',
    redBalls: ['08', '09', '12', '19', '24'],
    blueBalls: ['01', '06'],
    sales: '333,666,762',
    pool: '755,649,051',
    firstPrize: 13
  },
  {
    issue: '26015',
    date: '2026-02-04',
    redBalls: ['01', '04', '10', '13', '17'],
    blueBalls: ['03', '11'],
    sales: '356,800,000',
    pool: '815,780,900',
    firstPrize: 8
  },
  {
    issue: '26014',
    date: '2026-02-02',
    redBalls: ['16', '18', '23', '34', '35'],
    blueBalls: ['01', '06'],
    sales: '348,200,000',
    pool: '802,560,780',
    firstPrize: 12
  },
  {
    issue: '26013',
    date: '2026-01-31',
    redBalls: ['03', '05', '06', '23', '26'],
    blueBalls: ['01', '04'],
    sales: '335,700,000',
    pool: '790,120,450',
    firstPrize: 5
  },
  {
    issue: '26012',
    date: '2026-01-28',
    redBalls: ['01', '02', '09', '22', '25'],
    blueBalls: ['01', '06'],
    sales: '328,900,000',
    pool: '778,450,680',
    firstPrize: 9
  },
  {
    issue: '26011',
    date: '2026-01-26',
    redBalls: ['14', '21', '23', '29', '33'],
    blueBalls: ['02', '10'],
    sales: '342,580,000',
    pool: '765,980,120',
    firstPrize: 3
  },
  {
    issue: '26010',
    date: '2026-01-24',
    redBalls: ['02', '03', '13', '18', '26'],
    blueBalls: ['02', '09'],
    sales: '336,000,000',
    pool: '751,872,266',
    firstPrize: 4
  },
  {
    issue: '26009',
    date: '2026-01-21',
    redBalls: ['05', '12', '13', '14', '33'],
    blueBalls: ['05', '08'],
    sales: '302,386,708',
    pool: '734,360,129',
    firstPrize: 5
  },
  {
    issue: '26008',
    date: '2026-01-19',
    redBalls: ['03', '06', '17', '21', '33'],
    blueBalls: ['05', '11'],
    sales: '301,922,043',
    pool: '724,155,773',
    firstPrize: 4
  },
  {
    issue: '26007',
    date: '2026-01-17',
    redBalls: ['01', '03', '13', '20', '26'],
    blueBalls: ['03', '10'],
    sales: '310,000,000',
    pool: '710,693,230',
    firstPrize: 18
  },
  {
    issue: '26006',
    date: '2026-01-14',
    redBalls: ['05', '12', '18', '23', '35'],
    blueBalls: ['06', '12'],
    sales: '312,000,000',
    pool: '787,000,000',
    firstPrize: 8
  },
  {
    issue: '26005',
    date: '2026-01-12',
    redBalls: ['02', '04', '16', '23', '35'],
    blueBalls: ['06', '11'],
    sales: '311,138,123',
    pool: '788,287,446',
    firstPrize: 8
  },
  {
    issue: '26004',
    date: '2026-01-10',
    redBalls: ['05', '18', '23', '25', '32'],
    blueBalls: ['05', '09'],
    sales: '298,000,000',
    pool: '779,153,160',
    firstPrize: 11
  },
  {
    issue: '26003',
    date: '2026-01-07',
    redBalls: ['02', '09', '11', '15', '16'],
    blueBalls: ['02', '04'],
    sales: '299,733,101',
    pool: '829,620,750',
    firstPrize: 6
  },
  {
    issue: '26002',
    date: '2026-01-05',
    redBalls: ['04', '08', '15', '20', '31'],
    blueBalls: ['07', '08'],
    sales: '300,101,679',
    pool: '858,169,056',
    firstPrize: 6
  },
  {
    issue: '26001',
    date: '2026-01-03',
    redBalls: ['07', '09', '23', '27', '32'],
    blueBalls: ['02', '08'],
    sales: '309,467,020',
    pool: '875,846,392',
    firstPrize: 13
  },
  {
    issue: '25150',
    date: '2025-12-31',
    redBalls: ['13', '14', '15', '28', '31'],
    blueBalls: ['01', '05'],
    sales: '315,770,974',
    pool: '942,601,223',
    firstPrize: 4
  },
  {
    issue: '25149',
    date: '2025-12-29',
    redBalls: ['24', '26', '30', '31', '32'],
    blueBalls: ['05', '12'],
    sales: '293,718,026',
    pool: '921,221,227',
    firstPrize: 1
  },
  {
    issue: '25148',
    date: '2025-12-27',
    redBalls: ['03', '04', '14', '30', '32'],
    blueBalls: ['08', '12'],
    sales: '314,824,866',
    pool: '869,158,981',
    firstPrize: 2
  },
  {
    issue: '25147',
    date: '2025-12-24',
    redBalls: ['06', '16', '21', '25', '33'],
    blueBalls: ['07', '08'],
    sales: '290,531,842',
    pool: '816,064,823',
    firstPrize: 1
  },
  {
    issue: '25146',
    date: '2025-12-22',
    redBalls: ['06', '11', '13', '16', '22'],
    blueBalls: ['02', '03'],
    sales: '295,258,973',
    pool: '762,703,697',
    firstPrize: 4
  },
  {
    issue: '25145',
    date: '2025-12-20',
    redBalls: ['05', '07', '20', '22', '25'],
    blueBalls: ['04', '05'],
    sales: '318,998,515',
    pool: '739,212,071',
    firstPrize: 12
  },
  {
    issue: '25144',
    date: '2025-12-17',
    redBalls: ['02', '05', '13', '15', '28'],
    blueBalls: ['05', '08'],
    sales: '294,039,927',
    pool: '818,422,788',
    firstPrize: 15
  },
  {
    issue: '25143',
    date: '2025-12-15',
    redBalls: ['03', '04', '18', '24', '29'],
    blueBalls: ['07', '12'],
    sales: '292,194,189',
    pool: '891,182,916',
    firstPrize: 2
  },
  {
    issue: '25142',
    date: '2025-12-13',
    redBalls: ['09', '10', '14', '27', '29'],
    blueBalls: ['02', '09'],
    sales: '305,166,365',
    pool: '850,180,600',
    firstPrize: 3
  },
  {
    issue: '25141',
    date: '2025-12-10',
    redBalls: ['04', '09', '24', '28', '29'],
    blueBalls: ['02', '10'],
    sales: '293,217,299',
    pool: '830,232,368',
    firstPrize: 6
  },
  {
    issue: '25140',
    date: '2025-12-08',
    redBalls: ['04', '05', '13', '18', '34'],
    blueBalls: ['02', '08'],
    sales: '294,883,884',
    pool: '850,018,674',
    firstPrize: 3
  },
  {
    issue: '25139',
    date: '2025-12-06',
    redBalls: ['08', '18', '22', '30', '35'],
    blueBalls: ['01', '04'],
    sales: '319,213,811',
    pool: '830,587,732',
    firstPrize: 4
  },
  {
    issue: '25138',
    date: '2025-12-03',
    redBalls: ['01', '03', '19', '21', '23'],
    blueBalls: ['07', '11'],
    sales: '299,205,645',
    pool: '795,955,875',
    firstPrize: 6
  },
  {
    issue: '25137',
    date: '2025-12-01',
    redBalls: ['07', '08', '09', '11', '22'],
    blueBalls: ['05', '11'],
    sales: '306,419,813',
    pool: '784,972,571',
    firstPrize: 6
  },
  {
    issue: '25136',
    date: '2025-11-29',
    redBalls: ['07', '11', '15', '16', '23'],
    blueBalls: ['09', '11'],
    sales: '332,166,578',
    pool: '783,829,598',
    firstPrize: 11
  },
  {
    issue: '25135',
    date: '2025-11-26',
    redBalls: ['02', '10', '16', '28', '32'],
    blueBalls: ['01', '07'],
    sales: '310,594,999',
    pool: '813,180,323',
    firstPrize: 5
  },
  {
    issue: '25134',
    date: '2025-11-24',
    redBalls: ['07', '12', '18', '27', '33'],
    blueBalls: ['09', '10'],
    sales: '311,134,788',
    pool: '793,585,609',
    firstPrize: 8
  },
  {
    issue: '25133',
    date: '2025-11-22',
    redBalls: ['04', '11', '23', '27', '35'],
    blueBalls: ['07', '11'],
    sales: '337,536,466',
    pool: '818,773,870',
    firstPrize: 9
  },
  {
    issue: '25132',
    date: '2025-11-19',
    redBalls: ['01', '09', '10', '12', '19'],
    blueBalls: ['06', '07'],
    sales: '313,565,367',
    pool: '850,074,477',
    firstPrize: 8
  },
  {
    issue: '25131',
    date: '2025-11-17',
    redBalls: ['03', '08', '25', '29', '32'],
    blueBalls: ['09', '12'],
    sales: '312,224,838',
    pool: '878,666,212',
    firstPrize: 3
  },
  {
    issue: '25130',
    date: '2025-11-15',
    redBalls: ['01', '13', '16', '27', '29'],
    blueBalls: ['02', '11'],
    sales: '347,978,820',
    pool: '855,509,809',
    firstPrize: 5
  },
  {
    issue: '25129',
    date: '2025-11-12',
    redBalls: ['03', '09', '14', '28', '35'],
    blueBalls: ['02', '04'],
    sales: '327,577,708',
    pool: '826,944,600',
    firstPrize: 3
  },
  {
    issue: '25128',
    date: '2025-11-10',
    redBalls: ['03', '06', '26', '30', '33'],
    blueBalls: ['11', '12'],
    sales: '335,180,121',
    pool: '806,116,343',
    firstPrize: 9
  },
  {
    issue: '25127',
    date: '2025-11-08',
    redBalls: ['04', '05', '19', '28', '29'],
    blueBalls: ['05', '08'],
    sales: '353,038,355',
    pool: '827,515,757',
    firstPrize: 36
  },
  {
    issue: '25126',
    date: '2025-11-05',
    redBalls: ['01', '08', '18', '27', '30'],
    blueBalls: ['06', '07'],
    sales: '333,017,418',
    pool: '1,033,170,236',
    firstPrize: 8
  },
  {
    issue: '25125',
    date: '2025-11-03',
    redBalls: ['10', '11', '13', '19', '35'],
    blueBalls: ['04', '11'],
    sales: '333,554,750',
    pool: '1,071,539,155',
    firstPrize: 4
  },
  {
    issue: '25124',
    date: '2025-11-01',
    redBalls: ['06', '09', '14', '26', '27'],
    blueBalls: ['08', '09'],
    sales: '367,907,521',
    pool: '1,062,300,760',
    firstPrize: 18
  },
  {
    issue: '25123',
    date: '2025-10-29',
    redBalls: ['08', '13', '24', '25', '31'],
    blueBalls: ['04', '10'],
    sales: '333,755,324',
    pool: '1,136,294,713',
    firstPrize: 9
  },
  {
    issue: '25122',
    date: '2025-10-27',
    redBalls: ['02', '03', '06', '16', '17'],
    blueBalls: ['04', '05'],
    sales: '332,420,638',
    pool: '1,153,025,367',
    firstPrize: 9
  },
  {
    issue: '25121',
    date: '2025-10-25',
    redBalls: ['02', '03', '08', '13', '21'],
    blueBalls: ['07', '12'],
    sales: '356,833,346',
    pool: '1,201,113,534',
    firstPrize: 10
  },
  {
    issue: '25120',
    date: '2025-10-22',
    redBalls: ['11', '13', '22', '26', '35'],
    blueBalls: ['02', '08'],
    sales: '325,832,725',
    pool: '1,229,721,100',
    firstPrize: 8
  },
  {
    issue: '25119',
    date: '2025-10-20',
    redBalls: ['08', '15', '27', '29', '31'],
    blueBalls: ['01', '07'],
    sales: '319,880,731',
    pool: '1,247,363,714',
    firstPrize: 3
  },
  {
    issue: '25118',
    date: '2025-10-18',
    redBalls: ['02', '08', '09', '12', '21'],
    blueBalls: ['04', '05'],
    sales: '319,584,678',
    pool: '1,209,569,201',
    firstPrize: 4
  },
  {
    issue: '25117',
    date: '2025-10-15',
    redBalls: ['05', '10', '18', '21', '29'],
    blueBalls: ['05', '07'],
    sales: '302,232,387',
    pool: '1,200,034,223',
    firstPrize: 12
  },
  {
    issue: '25116',
    date: '2025-10-13',
    redBalls: ['02', '06', '16', '22', '29'],
    blueBalls: ['08', '12'],
    sales: '298,992,508',
    pool: '1,245,943,636',
    firstPrize: 0
  },
  {
    issue: '25115',
    date: '2025-10-11',
    redBalls: ['03', '12', '14', '21', '35'],
    blueBalls: ['01', '05'],
    sales: '330,363,634',
    pool: '1,188,143,074',
    firstPrize: 3
  },
  {
    issue: '25114',
    date: '2025-10-08',
    redBalls: ['03', '08', '09', '12', '16'],
    blueBalls: ['01', '05'],
    sales: '286,469,363',
    pool: '1,144,042,317',
    firstPrize: 8
  },
  {
    issue: '25113',
    date: '2025-10-06',
    redBalls: ['01', '14', '18', '28', '35'],
    blueBalls: ['02', '03'],
    sales: '302,539,540',
    pool: '1,174,480,897',
    firstPrize: 14
  },
  {
    issue: '25112',
    date: '2025-09-29',
    redBalls: ['03', '04', '21', '23', '24'],
    blueBalls: ['09', '12'],
    sales: '319,054,991',
    pool: '1,222,244,291',
    firstPrize: 6
  },
  {
    issue: '25111',
    date: '2025-09-27',
    redBalls: ['02', '09', '14', '21', '26'],
    blueBalls: ['02', '12'],
    sales: '331,165,537',
    pool: '1,227,497,634',
    firstPrize: 5
  },
  {
    issue: '25110',
    date: '2025-09-24',
    redBalls: ['01', '15', '22', '30', '31'],
    blueBalls: ['02', '08'],
    sales: '299,730,589',
    pool: '1,216,735,503',
    firstPrize: 6
  },
  {
    issue: '25109',
    date: '2025-09-22',
    redBalls: ['04', '08', '10', '13', '26'],
    blueBalls: ['09', '10'],
    sales: '313,350,591',
    pool: '1,212,757,053',
    firstPrize: 3
  },
  {
    issue: '25108',
    date: '2025-09-20',
    redBalls: ['14', '18', '21', '24', '29'],
    blueBalls: ['03', '06'],
    sales: '341,209,503',
    pool: '1,188,449,971',
    firstPrize: 6
  },
  {
    issue: '25107',
    date: '2025-09-17',
    redBalls: ['05', '07', '08', '15', '33'],
    blueBalls: ['06', '10'],
    sales: '314,311,008',
    pool: '1,185,080,983',
    firstPrize: 6
  },
  {
    issue: '25106',
    date: '2025-09-15',
    redBalls: ['05', '06', '11', '26', '29'],
    blueBalls: ['05', '10'],
    sales: '314,630,148',
    pool: '1,199,200,033',
    firstPrize: 12
  },
  {
    issue: '25105',
    date: '2025-09-13',
    redBalls: ['15', '16', '25', '28', '34'],
    blueBalls: ['10', '12'],
    sales: '341,440,186',
    pool: '1,251,025,275',
    firstPrize: 3
  },
  {
    issue: '25104',
    date: '2025-09-10',
    redBalls: ['02', '06', '09', '22', '34'],
    blueBalls: ['02', '08'],
    sales: '315,640,944',
    pool: '1,199,979,893',
    firstPrize: 4
  },
  {
    issue: '25103',
    date: '2025-09-08',
    redBalls: ['05', '08', '19', '32', '34'],
    blueBalls: ['04', '05'],
    sales: '310,233,728',
    pool: '1,180,433,357',
    firstPrize: 4
  },
  {
    issue: '25102',
    date: '2025-09-06',
    redBalls: ['09', '10', '13', '26', '28'],
    blueBalls: ['02', '04'],
    sales: '336,362,587',
    pool: '1,157,865,480',
    firstPrize: 1
  },
  {
    issue: '25101',
    date: '2025-09-03',
    redBalls: ['05', '07', '19', '26', '32'],
    blueBalls: ['08', '09'],
    sales: '307,833,370',
    pool: '1,106,707,324',
    firstPrize: 9
  },
  {
    issue: '25100',
    date: '2025-09-01',
    redBalls: ['26', '28', '32', '34', '35'],
    blueBalls: ['02', '07'],
    sales: '313,027,593',
    pool: '1,140,476,606',
    firstPrize: 2
  },
  {
    issue: '25099',
    date: '2025-08-30',
    redBalls: ['06', '12', '20', '26', '31'],
    blueBalls: ['02', '04'],
    sales: '333,985,688',
    pool: '1,089,336,924',
    firstPrize: 12
  },
  {
    issue: '25098',
    date: '2025-08-27',
    redBalls: ['01', '07', '09', '10', '23'],
    blueBalls: ['10', '12'],
    sales: '308,524,554',
    pool: '1,129,247,143',
    firstPrize: 1
  },
  {
    issue: '25097',
    date: '2025-08-25',
    redBalls: ['05', '24', '25', '32', '34'],
    blueBalls: ['01', '09'],
    sales: '310,927,488',
    pool: '1,077,551,661',
    firstPrize: 3
  },
  {
    issue: '25096',
    date: '2025-08-23',
    redBalls: ['02', '11', '17', '22', '24'],
    blueBalls: ['07', '09'],
    sales: '332,437,847',
    pool: '1,040,644,815',
    firstPrize: 12
  },
  {
    issue: '25095',
    date: '2025-08-20',
    redBalls: ['07', '13', '14', '19', '27'],
    blueBalls: ['06', '10'],
    sales: '305,061,816',
    pool: '1,082,529,387',
    firstPrize: 8
  },
  {
    issue: '25094',
    date: '2025-08-18',
    redBalls: ['04', '09', '17', '30', '33'],
    blueBalls: ['05', '09'],
    sales: '307,470,270',
    pool: '1,116,595,093',
    firstPrize: 13
  },
  {
    issue: '25093',
    date: '2025-08-16',
    redBalls: ['01', '07', '09', '16', '30'],
    blueBalls: ['02', '05'],
    sales: '330,705,608',
    pool: '1,157,754,344',
    firstPrize: 6
  },
  {
    issue: '25092',
    date: '2025-08-13',
    redBalls: ['04', '10', '17', '25', '32'],
    blueBalls: ['05', '07'],
    sales: '305,765,437',
    pool: '1,153,953,579',
    firstPrize: 14
  },
  {
    issue: '25091',
    date: '2025-08-11',
    redBalls: ['01', '19', '22', '25', '27'],
    blueBalls: ['03', '10'],
    sales: '307,088,100',
    pool: '1,254,338,103',
    firstPrize: 2
  },
  {
    issue: '25090',
    date: '2025-08-09',
    redBalls: ['06', '14', '19', '22', '27'],
    blueBalls: ['01', '04'],
    sales: '331,564,816',
    pool: '1,200,005,188',
    firstPrize: 6
  },
  {
    issue: '25089',
    date: '2025-08-06',
    redBalls: ['02', '11', '12', '32', '34'],
    blueBalls: ['03', '10'],
    sales: '301,829,705',
    pool: '1,218,712,702',
    firstPrize: 68
  },
  {
    issue: '25088',
    date: '2025-08-04',
    redBalls: ['08', '09', '10', '11', '35'],
    blueBalls: ['05', '11'],
    sales: '298,062,525',
    pool: '1,540,665,716',
    firstPrize: 9
  },
  {
    issue: '25087',
    date: '2025-08-02',
    redBalls: ['05', '13', '14', '16', '20'],
    blueBalls: ['03', '08'],
    sales: '315,319,154',
    pool: '1,579,681,545',
    firstPrize: 14
  },
  {
    issue: '25086',
    date: '2025-07-30',
    redBalls: ['02', '06', '23', '24', '33'],
    blueBalls: ['01', '10'],
    sales: '295,578,823',
    pool: '1,646,600,667',
    firstPrize: 2
  },
  {
    issue: '25085',
    date: '2025-07-28',
    redBalls: ['02', '05', '09', '14', '33'],
    blueBalls: ['04', '09'],
    sales: '294,227,352',
    pool: '1,595,323,742',
    firstPrize: 25
  },
  {
    issue: '25084',
    date: '2025-07-26',
    redBalls: ['09', '11', '13', '18', '29'],
    blueBalls: ['04', '11'],
    sales: '315,027,700',
    pool: '1,790,261,423',
    firstPrize: 3
  },
  {
    issue: '25083',
    date: '2025-07-23',
    redBalls: ['12', '17', '18', '20', '34'],
    blueBalls: ['02', '05'],
    sales: '296,169,217',
    pool: '1,769,075,337',
    firstPrize: 3
  },
  {
    issue: '25082',
    date: '2025-07-21',
    redBalls: ['02', '03', '04', '12', '26'],
    blueBalls: ['01', '08'],
    sales: '296,090,839',
    pool: '1,735,099,174',
    firstPrize: 4
  },
  {
    issue: '25081',
    date: '2025-07-19',
    redBalls: ['01', '04', '06', '15', '18'],
    blueBalls: ['02', '03'],
    sales: '321,712,458',
    pool: '1,745,616,944',
    firstPrize: 5
  },
  {
    issue: '25080',
    date: '2025-07-16',
    redBalls: ['09', '10', '18', '22', '24'],
    blueBalls: ['03', '12'],
    sales: '299,028,201',
    pool: '1,723,670,049',
    firstPrize: 2
  },
  {
    issue: '25079',
    date: '2025-07-14',
    redBalls: ['02', '14', '32', '34', '35'],
    blueBalls: ['05', '11'],
    sales: '300,459,382',
    pool: '1,685,844,586',
    firstPrize: 3
  },
  {
    issue: '25078',
    date: '2025-07-12',
    redBalls: ['07', '10', '15', '21', '24'],
    blueBalls: ['05', '06'],
    sales: '322,049,886',
    pool: '1,653,989,426',
    firstPrize: 5
  },
  {
    issue: '25077',
    date: '2025-07-09',
    redBalls: ['12', '14', '16', '19', '28'],
    blueBalls: ['01', '04'],
    sales: '302,633,813',
    pool: '1,664,896,849',
    firstPrize: 2
  },
  {
    issue: '25076',
    date: '2025-07-07',
    redBalls: ['11', '18', '22', '25', '29'],
    blueBalls: ['04', '12'],
    sales: '306,337,461',
    pool: '1,612,133,474',
    firstPrize: 6
  },
  {
    issue: '25075',
    date: '2025-07-05',
    redBalls: ['08', '12', '16', '19', '35'],
    blueBalls: ['06', '09'],
    sales: '327,099,927',
    pool: '1,627,185,578',
    firstPrize: 9
  },
  {
    issue: '25074',
    date: '2025-07-02',
    redBalls: ['02', '11', '15', '18', '21'],
    blueBalls: ['05', '10'],
    sales: '304,472,528',
    pool: '1,661,629,014',
    firstPrize: 10
  },
  {
    issue: '25073',
    date: '2025-06-30',
    redBalls: ['01', '04', '17', '33', '34'],
    blueBalls: ['03', '09'],
    sales: '306,793,454',
    pool: '1,695,259,566',
    firstPrize: 11
  },
  {
    issue: '25072',
    date: '2025-06-28',
    redBalls: ['04', '07', '15', '24', '29'],
    blueBalls: ['01', '04'],
    sales: '337,329,044',
    pool: '1,739,661,640',
    firstPrize: 6
  },
  {
    issue: '25071',
    date: '2025-06-25',
    redBalls: ['01', '08', '25', '31', '33'],
    blueBalls: ['05', '11'],
    sales: '313,848,778',
    pool: '1,743,326,978',
    firstPrize: 3
  },
  {
    issue: '25070',
    date: '2025-06-23',
    redBalls: ['08', '09', '15', '20', '22'],
    blueBalls: ['04', '12'],
    sales: '312,961,169',
    pool: '1,718,532,211',
    firstPrize: 2
  },
  {
    issue: '25069',
    date: '2025-06-21',
    redBalls: ['04', '06', '07', '33', '34'],
    blueBalls: ['09', '10'],
    sales: '338,663,590',
    pool: '1,677,561,945',
    firstPrize: 3
  },
  {
    issue: '25068',
    date: '2025-06-18',
    redBalls: ['01', '04', '17', '20', '22'],
    blueBalls: ['04', '10'],
    sales: '318,966,997',
    pool: '1,628,402,089',
    firstPrize: 2
  },
  {
    issue: '25067',
    date: '2025-06-16',
    redBalls: ['06', '10', '12', '21', '22'],
    blueBalls: ['01', '06'],
    sales: '321,766,533',
    pool: '1,588,528,359',
    firstPrize: 5
  },
  {
    issue: '25066',
    date: '2025-06-14',
    redBalls: ['15', '18', '27', '28', '34'],
    blueBalls: ['03', '06'],
    sales: '339,059,066',
    pool: '1,579,075,869',
    firstPrize: 3
  },
  {
    issue: '25065',
    date: '2025-06-11',
    redBalls: ['07', '25', '32', '33', '35'],
    blueBalls: ['04', '09'],
    sales: '322,427,160',
    pool: '1,539,171,327',
    firstPrize: 4
  },
  {
    issue: '25064',
    date: '2025-06-09',
    redBalls: ['05', '10', '18', '20', '34'],
    blueBalls: ['01', '08'],
    sales: '328,463,659',
    pool: '1,534,694,449',
    firstPrize: 2
  },
  {
    issue: '25063',
    date: '2025-06-07',
    redBalls: ['05', '18', '26', '29', '32'],
    blueBalls: ['07', '10'],
    sales: '353,640,087',
    pool: '1,482,278,557',
    firstPrize: 11
  },
  {
    issue: '25062',
    date: '2025-06-04',
    redBalls: ['14', '20', '27', '28', '29'],
    blueBalls: ['06', '10'],
    sales: '331,453,922',
    pool: '1,525,360,041',
    firstPrize: 3
  },
  {
    issue: '25061',
    date: '2025-06-02',
    redBalls: ['02', '11', '16', '23', '28'],
    blueBalls: ['05', '10'],
    sales: '326,041,766',
    pool: '1,489,857,621',
    firstPrize: 10
  },
  {
    issue: '25060',
    date: '2025-05-31',
    redBalls: ['12', '14', '19', '33', '34'],
    blueBalls: ['01', '07'],
    sales: '344,759,819',
    pool: '1,530,054,632',
    firstPrize: 2
  },
  {
    issue: '25059',
    date: '2025-05-28',
    redBalls: ['03', '09', '10', '11', '26'],
    blueBalls: ['01', '02'],
    sales: '330,253,002',
    pool: '1,472,810,541',
    firstPrize: 4
  },
  {
    issue: '25058',
    date: '2025-05-26',
    redBalls: ['06', '11', '15', '21', '23'],
    blueBalls: ['01', '07'],
    sales: '337,041,717',
    pool: '1,457,374,217',
    firstPrize: 3
  },
  {
    issue: '25057',
    date: '2025-05-24',
    redBalls: ['09', '10', '11', '12', '29'],
    blueBalls: ['01', '10'],
    sales: '379,533,383',
    pool: '1,415,654,588',
    firstPrize: 4
  },
  {
    issue: '25056',
    date: '2025-05-21',
    redBalls: ['12', '15', '28', '29', '32'],
    blueBalls: ['08', '11'],
    sales: '354,948,673',
    pool: '1,375,155,244',
    firstPrize: 2
  },
  {
    issue: '25055',
    date: '2025-05-19',
    redBalls: ['08', '10', '25', '29', '30'],
    blueBalls: ['01', '02'],
    sales: '373,248,241',
    pool: '1,329,842,896',
    firstPrize: 6
  },
  {
    issue: '25054',
    date: '2025-05-17',
    redBalls: ['03', '12', '16', '21', '29'],
    blueBalls: ['01', '02'],
    sales: '400,498,726',
    pool: '1,305,673,257',
    firstPrize: 6
  },
  {
    issue: '25053',
    date: '2025-05-14',
    redBalls: ['14', '23', '29', '30', '33'],
    blueBalls: ['06', '12'],
    sales: '378,116,432',
    pool: '1,281,475,209',
    firstPrize: 6
  },
  {
    issue: '25052',
    date: '2025-05-12',
    redBalls: ['02', '04', '11', '29', '30'],
    blueBalls: ['02', '08'],
    sales: '384,489,687',
    pool: '1,261,675,356',
    firstPrize: 3
  },
  {
    issue: '25051',
    date: '2025-05-10',
    redBalls: ['02', '04', '13', '29', '31'],
    blueBalls: ['05', '12'],
    sales: '402,596,942',
    pool: '1,208,341,380',
    firstPrize: 5
  },
  {
    issue: '25050',
    date: '2025-05-07',
    redBalls: ['15', '18', '20', '21', '34'],
    blueBalls: ['04', '10'],
    sales: '380,353,203',
    pool: '1,220,697,850',
    firstPrize: 6
  },
  {
    issue: '25049',
    date: '2025-05-05',
    redBalls: ['09', '20', '22', '29', '34'],
    blueBalls: ['03', '08'],
    sales: '350,534,405',
    pool: '1,233,463,084',
    firstPrize: 10
  },
  {
    issue: '25048',
    date: '2025-05-03',
    redBalls: ['02', '06', '17', '23', '35'],
    blueBalls: ['06', '11'],
    sales: '364,105,069',
    pool: '1,258,998,703',
    firstPrize: 2
  },
  {
    issue: '25047',
    date: '2025-04-30',
    redBalls: ['03', '10', '11', '12', '21'],
    blueBalls: ['02', '03'],
    sales: '367,385,544',
    pool: '1,202,271,493',
    firstPrize: 9
  },
  {
    issue: '25046',
    date: '2025-04-28',
    redBalls: ['04', '10', '15', '20', '34'],
    blueBalls: ['04', '07'],
    sales: '367,246,953',
    pool: '1,213,336,580',
    firstPrize: 4
  },
  {
    issue: '25045',
    date: '2025-04-26',
    redBalls: ['08', '11', '21', '23', '27'],
    blueBalls: ['03', '08'],
    sales: '394,950,774',
    pool: '1,207,089,477',
    firstPrize: 10
  },
  {
    issue: '25044',
    date: '2025-04-23',
    redBalls: ['15', '17', '21', '22', '26'],
    blueBalls: ['02', '08'],
    sales: '368,611,600',
    pool: '1,237,807,812',
    firstPrize: 4
  },
  {
    issue: '25043',
    date: '2025-04-21',
    redBalls: ['03', '16', '20', '21', '27'],
    blueBalls: ['09', '11'],
    sales: '362,168,053',
    pool: '1,212,466,180',
    firstPrize: 2
  },
  {
    issue: '25042',
    date: '2025-04-19',
    redBalls: ['06', '08', '11', '18', '20'],
    blueBalls: ['05', '11'],
    sales: '391,234,678',
    pool: '1,157,421,361',
    firstPrize: 2
  },
  {
    issue: '25041',
    date: '2025-04-16',
    redBalls: ['03', '04', '21', '22', '27'],
    blueBalls: ['05', '11'],
    sales: '372,136,085',
    pool: '1,110,680,827',
    firstPrize: 8
  },
  {
    issue: '25040',
    date: '2025-04-14',
    redBalls: ['02', '08', '16', '31', '32'],
    blueBalls: ['04', '12'],
    sales: '365,388,846',
    pool: '1,147,506,477',
    firstPrize: 4
  },
  {
    issue: '25039',
    date: '2025-04-12',
    redBalls: ['03', '07', '14', '15', '19'],
    blueBalls: ['06', '10'],
    sales: '380,283,087',
    pool: '1,128,975,871',
    firstPrize: 4
  },
  {
    issue: '25038',
    date: '2025-04-09',
    redBalls: ['07', '08', '20', '26', '34'],
    blueBalls: ['08', '09'],
    sales: '367,355,129',
    pool: '1,098,668,135',
    firstPrize: 4
  },
  {
    issue: '25037',
    date: '2025-04-07',
    redBalls: ['05', '20', '23', '27', '31'],
    blueBalls: ['04', '06'],
    sales: '302,429,281',
    pool: '1,078,059,212',
    firstPrize: 3
  },
  {
    issue: '25036',
    date: '2025-04-05',
    redBalls: ['04', '07', '13', '27', '30'],
    blueBalls: ['02', '06'],
    sales: '303,323,074',
    pool: '1,044,099,471',
    firstPrize: 4
  },
  {
    issue: '25035',
    date: '2025-04-02',
    redBalls: ['22', '25', '28', '29', '30'],
    blueBalls: ['04', '08'],
    sales: '290,834,566',
    pool: '1,034,539,140',
    firstPrize: 6
  },
  {
    issue: '25034',
    date: '2025-03-31',
    redBalls: ['04', '15', '22', '28', '33'],
    blueBalls: ['06', '08'],
    sales: '291,102,580',
    pool: '1,046,884,586',
    firstPrize: 12
  },
  {
    issue: '25033',
    date: '2025-03-29',
    redBalls: ['01', '02', '08', '10', '33'],
    blueBalls: ['10', '12'],
    sales: '312,033,249',
    pool: '1,132,503,712',
    firstPrize: 3
  },
  {
    issue: '25032',
    date: '2025-03-26',
    redBalls: ['12', '22', '25', '27', '28'],
    blueBalls: ['01', '02'],
    sales: '303,333,312',
    pool: '1,094,382,586',
    firstPrize: 0
  },
  {
    issue: '25031',
    date: '2025-03-24',
    redBalls: ['14', '18', '20', '25', '35'],
    blueBalls: ['01', '07'],
    sales: '311,643,171',
    pool: '1,024,377,872',
    firstPrize: 4
  },
  {
    issue: '25030',
    date: '2025-03-22',
    redBalls: ['03', '09', '14', '24', '28'],
    blueBalls: ['06', '07'],
    sales: '338,162,194',
    pool: '995,094,280',
    firstPrize: 9
  },
  {
    issue: '25029',
    date: '2025-03-19',
    redBalls: ['05', '09', '26', '31', '33'],
    blueBalls: ['03', '10'],
    sales: '314,474,524',
    pool: '1,043,234,947',
    firstPrize: 2
  },
  {
    issue: '25028',
    date: '2025-03-17',
    redBalls: ['06', '08', '20', '25', '29'],
    blueBalls: ['03', '07'],
    sales: '313,737,340',
    pool: '1,006,966,152',
    firstPrize: 6
  },
  {
    issue: '25027',
    date: '2025-03-15',
    redBalls: ['03', '06', '11', '13', '20'],
    blueBalls: ['01', '11'],
    sales: '333,487,900',
    pool: '1,035,665,607',
    firstPrize: 8
  },
  {
    issue: '25026',
    date: '2025-03-12',
    redBalls: ['02', '03', '07', '17', '30'],
    blueBalls: ['01', '09'],
    sales: '313,696,373',
    pool: '1,039,296,516',
    firstPrize: 1
  },
  {
    issue: '25025',
    date: '2025-03-10',
    redBalls: ['03', '06', '08', '10', '25'],
    blueBalls: ['03', '07'],
    sales: '313,678,335',
    pool: '993,864,523',
    firstPrize: 6
  },
  {
    issue: '25024',
    date: '2025-03-08',
    redBalls: ['06', '12', '13', '16', '23'],
    blueBalls: ['05', '08'],
    sales: '331,854,703',
    pool: '1,035,953,603',
    firstPrize: 14
  },
  {
    issue: '25023',
    date: '2025-03-05',
    redBalls: ['10', '20', '22', '24', '25'],
    blueBalls: ['09', '12'],
    sales: '302,766,777',
    pool: '1,115,584,483',
    firstPrize: 4
  },
  {
    issue: '25022',
    date: '2025-03-03',
    redBalls: ['01', '11', '13', '27', '29'],
    blueBalls: ['04', '10'],
    sales: '298,217,183',
    pool: '1,103,298,037',
    firstPrize: 6
  },
  {
    issue: '25021',
    date: '2025-03-01',
    redBalls: ['10', '18', '25', '30', '35'],
    blueBalls: ['03', '12'],
    sales: '335,200,766',
    pool: '1,123,599,303',
    firstPrize: 6
  },
  {
    issue: '25020',
    date: '2025-02-26',
    redBalls: ['01', '09', '12', '22', '29'],
    blueBalls: ['05', '09'],
    sales: '300,087,089',
    pool: '1,132,471,892',
    firstPrize: 8
  },
  {
    issue: '25019',
    date: '2025-02-24',
    redBalls: ['07', '08', '11', '18', '23'],
    blueBalls: ['03', '11'],
    sales: '296,357,549',
    pool: '1,159,248,699',
    firstPrize: 6
  },
  {
    issue: '25018',
    date: '2025-02-22',
    redBalls: ['01', '07', '09', '20', '28'],
    blueBalls: ['01', '04'],
    sales: '314,802,603',
    pool: '1,191,928,481',
    firstPrize: 16
  },
  {
    issue: '25017',
    date: '2025-02-19',
    redBalls: ['10', '12', '26', '28', '31'],
    blueBalls: ['03', '10'],
    sales: '288,044,955',
    pool: '1,260,507,193',
    firstPrize: 1
  },
  {
    issue: '25016',
    date: '2025-02-17',
    redBalls: ['05', '07', '12', '20', '29'],
    blueBalls: ['08', '12'],
    sales: '288,272,949',
    pool: '1,212,239,218',
    firstPrize: 12
  },
  {
    issue: '25015',
    date: '2025-02-15',
    redBalls: ['07', '10', '24', '31', '35'],
    blueBalls: ['01', '08'],
    sales: '314,676,590',
    pool: '1,290,950,588',
    firstPrize: 4
  },
  {
    issue: '25014',
    date: '2025-02-12',
    redBalls: ['05', '19', '22', '29', '35'],
    blueBalls: ['02', '10'],
    sales: '289,867,311',
    pool: '1,278,086,019',
    firstPrize: 4
  },
  {
    issue: '25013',
    date: '2025-02-10',
    redBalls: ['14', '16', '18', '20', '35'],
    blueBalls: ['02', '05'],
    sales: '289,136,668',
    pool: '1,260,404,089',
    firstPrize: 5
  },
  {
    issue: '25012',
    date: '2025-02-08',
    redBalls: ['02', '18', '19', '21', '25'],
    blueBalls: ['02', '11'],
    sales: '358,739,098',
    pool: '1,240,397,718',
    firstPrize: 2
  },
  {
    issue: '25011',
    date: '2025-01-25',
    redBalls: ['03', '06', '07', '11', '27'],
    blueBalls: ['02', '08'],
    sales: '373,437,138',
    pool: '1,183,329,141',
    firstPrize: 5
  },
  {
    issue: '25010',
    date: '2025-01-22',
    redBalls: ['05', '21', '28', '30', '32'],
    blueBalls: ['07', '12'],
    sales: '314,170,042',
    pool: '1,197,169,901',
    firstPrize: 6
  },
  {
    issue: '25009',
    date: '2025-01-20',
    redBalls: ['03', '19', '21', '30', '32'],
    blueBalls: ['06', '09'],
    sales: '308,814,993',
    pool: '1,207,630,140',
    firstPrize: 5
  },
  {
    issue: '25008',
    date: '2025-01-18',
    redBalls: ['01', '05', '07', '13', '35'],
    blueBalls: ['05', '12'],
    sales: '336,989,378',
    pool: '1,208,994,728',
    firstPrize: 6
  },
  {
    issue: '25007',
    date: '2025-01-15',
    redBalls: ['15', '22', '23', '25', '31'],
    blueBalls: ['01', '09'],
    sales: '311,942,681',
    pool: '1,221,403,982',
    firstPrize: 1
  },
  {
    issue: '25006',
    date: '2025-01-13',
    redBalls: ['03', '04', '13', '19', '35'],
    blueBalls: ['03', '10'],
    sales: '315,397,229',
    pool: '1,157,222,668',
    firstPrize: 4
  },
  {
    issue: '25005',
    date: '2025-01-11',
    redBalls: ['05', '06', '08', '31', '32'],
    blueBalls: ['09', '11'],
    sales: '313,119,385',
    pool: '1,135,025,880',
    firstPrize: 4
  },
  {
    issue: '25004',
    date: '2025-01-08',
    redBalls: ['02', '05', '09', '13', '33'],
    blueBalls: ['01', '07'],
    sales: '294,103,605',
    pool: '1,149,680,405',
    firstPrize: 3
  },
  {
    issue: '25003',
    date: '2025-01-06',
    redBalls: ['10', '25', '30', '32', '34'],
    blueBalls: ['04', '10'],
    sales: '302,634,553',
    pool: '1,125,887,685',
    firstPrize: 1
  },
  {
    issue: '25002',
    date: '2025-01-04',
    redBalls: ['19', '21', '22', '28', '32'],
    blueBalls: ['06', '09'],
    sales: '328,380,460',
    pool: '1,059,802,299',
    firstPrize: 6
  },
  {
    issue: '25001',
    date: '2025-01-01',
    redBalls: ['05', '08', '16', '17', '27'],
    blueBalls: ['04', '07'],
    sales: '300,925,149',
    pool: '1,083,648,909',
    firstPrize: 12
  },
];