import React from "react";

const reportWeek = "2026-11-02 至 2026-11-06";
const reportDate = "2026-11-08";
const publishedAt =
  "香港時間 2026-11-08 09:20（週日版；數據截至美股 11/6 收市；週末無新現貨收盤）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Friday 11/6/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-806f71d95105bc7efbc760b194dd8cad",
  },
  {
    name: "CNBC - Stock market news for Nov. 6, 2026",
    url: "https://www.cnbc.com/2026/11/05/stock-market-today-live-updates.html",
  },
  {
    name: "Reuters via Euronext - Wall Street stocks rally after heavy AI-related selloff",
    url: "https://live.euronext.com/en/financial-news/wall-street-stocks-rally-after-heavy-ai-related-selloff",
  },
  {
    name: "Reuters via Investing.com - As tech swoon roils market, US inflation data on tap",
    url: "https://www.investing.com/news/stock-market-news/as-tech-swoon-roils-market-us-inflation-data-on-tap-5007256",
  },
  {
    name: "Morningstar - Market Wrap: Stocks Down After Big Losses in Energy and Tech",
    url: "https://www.morningstar.com/markets/weekly-market-update-stocks-down-after-big-losses-energy-tech",
  },
  {
    name: "Schwab Network - Week in Review: Bulls, Bears Battle as Tech Selloff Permeates Sectors",
    url: "https://schwabnetwork.com/articles/week-in-review-bulls-and-bears-battle-as-tech-selloff-permeates-sectors",
  },
  {
    name: "Reuters - Democrats' election win spooks AI investors, hammering stocks",
    url: "https://www.reuters.com/3fec1b0a85a0/legal/government/democrats-vow-rein-trump-he-shows-off-white-house-ballroom-2026-11-05/",
  },
  {
    name: "AP News - AI data centers took a beating in the midterm elections",
    url: "https://apnews.com/article/data-centers-artificial-intelligence-texas-tech-trump-63b33be8884d867d3ac831040d683a2c",
  },
  {
    name: "BLS - Employment Situation, October 2026",
    url: "https://www.bls.gov/news.release/empsit.htm",
  },
  {
    name: "BLS - Schedule of Selected Releases for November 2026",
    url: "https://www.bls.gov/schedule/2026/11_sched_list.htm",
  },
  {
    name: "CNBC - Dollar index jumps after U.S. payrolls beat forecasts",
    url: "https://www.cnbc.com/2026/11/06/dollar-holds-yen-gains-as-equity-rout-saps-risk-appetite-ahead-of-payrolls.html",
  },
  {
    name: "CNBC - Gold drops as strong U.S. payrolls boost dollar, yields",
    url: "https://www.cnbc.com/2026/11/06/gold-eases-on-inflation-worries-from-higher-oil-us-payrolls-data-in-focus.html",
  },
  {
    name: "Reuters via Investing.com - Caution over midterms and AI cash burn drives money-market inflows",
    url: "https://www.investing.com/news/stock-market-news/caution-over-midterms-and-ai-cash-burn-drives-surge-in-us-money-market-fund-inflows-5007303",
  },
  {
    name: "StockTitan - Earnings Calendar for the Week of November 9, 2026",
    url: "https://www.stocktitan.net/articles/earnings-calendar-week-of-november-9-2026",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
  {
    name: "Binance Vision public data",
    url: "https://data.binance.vision/",
  },
  {
    name: "Yahoo Finance chart data for indices, sector ETFs, rates and futures",
    url: "https://finance.yahoo.com/",
  },
];

const quickTakeaways = [
  "今期是週日版：美股週末無新現貨收盤，所以大市、板塊、技術位仍以 11/6 週五收市為準；Crypto 用 Binance Vision 20:00 UTC（4:00pm ET 附近）1m close。",
  "今週不是單純跌市，而是「AI 政策風險 + 半導體去槓桿 + 油價急跌 + 就業太強」同時出現。S&P 500 全週 -2.68%、Nasdaq -3.37%，Dow 相對硬淨但仍 -0.94%。",
  "週五有技術性反彈：CNBC / AP 口徑顯示 S&P 500 +0.31% 至 7,376.86、Nasdaq +1.09% 至 24,579.42；但 Dow -237.33 點至 51,285.73，代表反彈不是全面 risk-on。",
  "最大主線是 AI data center 政策風險：Reuters / AP 指民主黨中期選舉大勝後，市場擔心 data center 電力成本、審批、測試和 moratorium 風險，拖累 AI / chip trade。",
  "板塊分化好清楚：SOXX 全週約 -13.13%、XLE -12.00%、XLK -8.23%；但 XLC +4.89%、XLRE +1.92%、XLY +1.91%、XLF +1.15%，不是所有資產同步崩。",
  "宏觀訊號反而複雜：WTI 全週跌至 $90.83、Brent 跌至 $98.32，理論上紓緩通脹；但 10 月非農 +165k、失業率 4.1%，令 12 月加息機率重新升到約 75%-80%。",
  "資金流不是撤出美股：Reuters / LSEG Lipper 指截至 11/4 一週美股基金流入 $14.81bn，但 money market 吸走 $117.97bn，科技、工業、通訊服務基金錄流出。",
  "Crypto 跌幅小過半導體，但 SOL 明顯弱：Binance Vision 11/6 20:00 UTC 1m close，BTC $75,920.32、ETH $2,236.19、SOL $90.26；全週分別 -1.39%、-0.29%、-4.85%。",
];

const indexRows = [
  [
    "DJIA",
    "51,285.73",
    "週五 -237.33 / -0.46%；全週 -484.58 / -0.94%",
    "Dow 跌幅細過 Nasdaq，反映資金未有全面逃離股票，但價值/防守也被週四急跌拖住；週五反彈時 Dow 反而落後。",
  ],
  [
    "S&P 500",
    "7,376.86",
    "週五 +23.13 / +0.31%；全週 -203.21 / -2.68%",
    "指數仍未收復週四大陰燭，7,350-7,370 成為短線防線；如果 CPI / PPI 不友善，反彈容易再被沽。",
  ],
  [
    "Nasdaq Composite",
    "24,579.43",
    "週五 +264.43 / +1.09%；全週 -857.57 / -3.37%",
    "週五買盤回補 chip / AI，但 CNBC / Reuters 指 Nasdaq 已進入由高位回落超過 10% 的 correction 區域，短線仍是反彈測試。",
  ],
  [
    "Russell 2000",
    "2,754.11",
    "週五 +24.22 / +0.89%；全週 -57.73 / -2.05%",
    "小型股好過科技但仍跌，代表利率、信貸和增長不確定性仍限制 risk appetite；要轉強需先企回 2,800。",
  ],
  [
    "VIX",
    "25.64",
    "週五 -2.54 / -9.01%；全週 +6.22 / +32.03%",
    "波幅由 19.42 升至 25.64，週四曾升至七個月高位附近；市場仍有避險需求，但週五由高位回落說明恐慌未失控。",
  ],
];

const whyMarketMoved = [
  [
    "AI trade 被政策風險重新定價",
    "Reuters 指民主黨掌控國會並贏得多個 data-center-heavy 州份後，市場擔心 AI data center 電力成本、環境審批與新增 moratorium；高估值 AI hardware 最先被減倉。",
  ],
  [
    "半導體跌幅放大，然後週五短線回補",
    "Reuters / CNBC 指 PHLX Semiconductor Index 週四跌逾 12%，週五反彈 4.2%；Yahoo 口徑 SOXX 全週仍 -13.13%，即反彈只是收復少部分失地。",
  ],
  [
    "油價急跌，改變通脹與能源股敘事",
    "WTI 由 $104.12 跌至 $90.83，Brent 由 $117.64 跌至 $98.32；市場押美國選後伊朗戰事降溫，但油價太急跌亦令 XLE 全週約 -12%。",
  ],
  [
    "就業太強令 Fed 更難轉鴿",
    "BLS 10 月非農 +165k、失業率 4.1%；CNBC / Reuters 指 12 月加息機率升至約 75%-80%。油價跌幫通脹，但勞動市場強令短端利率仍有壓力。",
  ],
  [
    "資金選擇避開擠擁交易，不是全面離場",
    "LSEG Lipper 顯示美股基金仍有 $14.81bn 流入，但 money market 流入 $117.97bn，科技/通訊/工業基金流出；市場買流動性與可見度，少碰高 beta AI。",
  ],
];

const topNews = [
  [
    "1",
    "民主黨中期選舉大勝，AI data center 政策風險成市場焦點",
    "Reuters / AP：投資者憂慮 data center 電力成本、環境審批與地方限制拖慢 AI buildout；這是週四科技股急挫的核心觸發。",
  ],
  [
    "2",
    "Nasdaq 週四大跌後週五反彈，但全週仍錄第四週跌幅",
    "CNBC / Reuters：Nasdaq 週四 -5.5% 後週五 +1.09%，全週 -3.4%；S&P 500 全週 -2.7%，Dow -0.9%。",
  ],
  [
    "3",
    "半導體成震央：SOX / SOXX 全週雙位數下跌",
    "Reuters 指 SOX 週四跌逾 12%，Yahoo 口徑 SOXX 全週 -13.13%；NVDA、AMD、MU、MRVL、LITE 等 AI hardware beta 大幅回撤。",
  ],
  [
    "4",
    "油價急跌至 Brent $100 附近，能源板塊由通脹受益變成最大輸家",
    "Yahoo futures 口徑 Brent 全週 -16.42% 至 $98.32，WTI -12.76% 至 $90.83；Schwab / Morningstar 同樣列能源為最弱板塊。",
  ],
  [
    "5",
    "10 月非農大超預期，下週 CPI / PPI 成關鍵壓力測試",
    "BLS：非農 +165k、失業率 4.1%；BLS calendar 顯示 11/10 CPI、11/13 PPI，數據會決定 12 月 Fed 是否繼續加息。",
  ],
];

const heatMapRows = [
  [
    "Communication Services / XLC",
    "+4.89%（Yahoo ETF proxy）",
    "綠燈",
    "本週最硬淨，部分 mega-cap platform 撐住；但若 AI capex 疑慮擴散到廣告/雲端，升勢要再驗證。",
  ],
  [
    "Consumer Discretionary / XLY",
    "+1.91%；Schwab 亦列 SPX consumer discretionary +2.68%",
    "綠燈但要揀股",
    "TSLA 全週仍 -10.4%，但 ABNB +15.6%、APP +71.2% 等個股財報/題材拉動；不是整個消費板塊都強。",
  ],
  [
    "Real Estate / XLRE",
    "+1.92%",
    "中性偏綠",
    "10Y 由 4.93% 回落至 4.86% 幫到 rate-sensitive sector；但若就業/通脹迫 Fed 再鷹，反彈會受壓。",
  ],
  [
    "Financials / XLF",
    "+1.15%；LSEG 指金融基金流入 $1.3bn",
    "中性偏綠",
    "利率仍高、經濟數據不弱，金融股相對有承接；但 credit spread / small cap 壓力仍要觀察。",
  ],
  [
    "Consumer Staples / XLP",
    "+0.74%",
    "中性",
    "防守屬性有用，但今週不是最強；市場更偏向政策/利率受惠與特定財報贏家。",
  ],
  [
    "Health Care / XLV",
    "-0.04%；LSEG 指醫療基金流入 $1.09bn",
    "中性",
    "資金流支持，但價格表現平；仍可作低 beta 停泊位，不宜當 momentum trade。",
  ],
  [
    "Industrials / XLI",
    "-2.83%；工業基金流出 $624.67mn",
    "黃燈",
    "AI infrastructure、資本開支和政策不確定拖累工業鏈；需要下週財報確認訂單未受損。",
  ],
  [
    "Technology / XLK",
    "-8.23%；Morningstar technology -6.71%",
    "紅燈",
    "今週核心受壓板塊；估值、政策、capex ROI 同時被問，未見放量收復前不急於撈底。",
  ],
  [
    "Energy / XLE",
    "-12.00%；Morningstar energy -12.32%",
    "紅燈但可觀察",
    "油價跌太急令能源股受壓；若 Brent 守不住 $95，能源盈利預期要下修。若地緣消息反轉，波幅會很大。",
  ],
  [
    "Semiconductors / SOXX",
    "-13.13%；Reuters 指 SOX 週四單日跌逾 12%",
    "紅燈",
    "AI hardware beta 變成去槓桿震央。週五反彈未夠，至少要見 SOXX 企回 145-150 才算初步止血。",
  ],
];

const flowRows = [
  [
    "U.S. equity funds",
    "Reuters / LSEG Lipper：截至 11/4 一週淨流入 $14.81bn，扭轉前一週 $6.54bn 流出",
    "股票不是完全無人買；油價回落與長息離高位回落仍吸引資金。但流入未能阻止週四大跌，代表 price action 由高 beta 賣壓主導。",
  ],
  [
    "Money market funds",
    "美國 money market funds 淨流入 $117.97bn，為六個月最大",
    "這是風險控制訊號。投資者一邊保留股票 exposure，一邊大幅增加現金/短票停泊。",
  ],
  [
    "Sector funds",
    "Technology -$160.23mn、industrials -$624.67mn、communication services -$965.68mn；financials +$1.3bn、healthcare +$1.09bn",
    "資金由最擠擁的 AI / growth 方向流走，轉去金融與醫療；但 XLC 價格仍升，說明 ETF 價格與基金流有時間差。",
  ],
  [
    "Market-cap funds",
    "Large-cap +$10.35bn、multi-cap +$1.64bn、small-cap +$422.77mn、mid-cap -$1.07bn",
    "資金偏好流動性與大型股，仍未全面擁抱中小型股。Russell 2000 反彈要有持續性，需見 mid-cap flow 改善。",
  ],
  [
    "Bond funds / Treasuries",
    "美國 bond funds +$7.31bn，longer-maturity government/Treasury funds +$2.66bn",
    "長息由 10 月高位回落，令債券重新有吸引力；但強就業令 2Y / Fed path 仍有上行風險。",
  ],
  [
    "Crypto",
    "BTC -1.39%、ETH -0.29%、SOL -4.85%（Binance Vision 10/30 至 11/6 20:00 UTC）",
    "幣市跌幅不算恐慌，但 SOL beta 弱；如果 Nasdaq 再跌而 BTC 失 $75k，crypto risk-off 會更明顯。",
  ],
];

const macroRows = [
  [
    "Fed / FedWatch",
    "CNBC / Reuters-linked snapshots：強非農後 12 月加息機率由約 70%-73% 升向 75%-80%；Fed 10 月已維持 3.75%-4.00%",
    "白話講：油價跌本來應該幫 Fed，但就業太強令市場覺得 Fed 未必可以停。Growth stock 最怕這種「經濟未冷、利率未完」組合。",
  ],
  [
    "Jobs",
    "BLS：10 月非農 +165k，高於 Reuters 調查的 +65k；失業率 4.1%；專業商業服務 +70k、醫療 +42k、運輸倉儲 +25k",
    "勞動市場仍然有韌性，短線支持消費和盈利，但同時削弱減息幻想。市場下週會更敏感 CPI / PPI。",
  ],
  [
    "Treasury yields",
    "Yahoo / CNBC 口徑：10Y 週五約 4.86%，由 10/30 約 4.93% 回落；2Y 週五 CNBC 約 4.53%；30Y 約 5.26%",
    "長息回落幫到 real estate、bond funds 和 gold，但 2Y 被 Fed path 撐住，curve 仍反映政策風險。",
  ],
  [
    "USD",
    "DXY 週五升至約 102.30，全週 +0.41%；CNBC 指非農後美元創 10/29 以來高位",
    "美元強代表市場重新買高息美元；這會壓國際收入、商品和非美風險資產。",
  ],
  [
    "Oil",
    "WTI 週五 $90.83，全週 -12.76%；Brent $98.32，全週 -16.42%；Reuters 指中期選舉後市場押伊朗戰事降溫",
    "油跌可以紓緩 headline inflation，但跌得太急傷能源盈利，也反映地緣風險溢價被快速抽走。",
  ],
  [
    "Gold",
    "Gold futures 週五 $4,074.90，全週 +4.51%；CNBC 現貨金週五約 $4,059.90、全週 +4.8%",
    "金價受避險與長息回落支持；但強非農令週五回吐，若美元續強，金價上行會變慢。",
  ],
  [
    "Next macro",
    "BLS calendar：11/10 8:30 ET 公布 10 月 CPI / real earnings；11/13 8:30 ET 公布 10 月 PPI",
    "下週真正關鍵：如果 CPI / PPI 未見油價回落效果，Fed 加息預期會壓住科技反彈；若通脹降溫，市場才有喘息空間。",
  ],
];

const stockRows = [
  [
    "NVDA / AMD / INTC / MU",
    "Yahoo 週變動：NVDA -8.80%、AMD -11.05%、INTC -14.42%、MU -22.01%；Reuters 指週五 chip 有回補，SOX +4.2%",
    "AI chip 不是需求突然消失，而是估值和政策風險被重新折現。週五反彈不能當底，先看下週 AMAT / CSCO / CRWV guidance。",
  ],
  [
    "MRVL / LITE / AI optical chain",
    "MRVL 全週 -28.11%、LITE -35.94%；市場對 Marvell / Lumentum 相關 deal 與 AI optical capex 反應負面",
    "AI 供應鏈中最靠 capex 預期的名字被殺得最重。若 data center 審批放慢，這類股票估值彈性最大、風險也最大。",
  ],
  [
    "META / MSFT / AAPL",
    "META -0.79%、MSFT +1.67%、AAPL -0.66%",
    "Mega-cap platform 明顯好過硬件鏈；市場暫時更相信現金流與雲端/廣告韌性，但 AI capex ROI 問題仍會在財報會議被追問。",
  ],
  [
    "TSLA / SpaceX proxy",
    "TSLA 全週 -10.40%；Reuters / CNBC 指週五 Tesla 反彈約 4%，但仍受 AI / policy risk 和高估值拖累",
    "Tesla 是高 beta growth + policy trade。未能重上 $375-$385 前，仍只是跌後修復。",
  ],
  [
    "APP / ABNB / IDXX",
    "Yahoo 週變動：AppLovin +71.21%、Airbnb +15.57%、IDEXX +22.65%",
    "市場仍獎勵交到數或上調指引的公司。這說明今週不是所有 growth 都死，而是要用盈利證明故事。",
  ],
  [
    "TEAM / FIS",
    "Atlassian -19.84%；Fidelity National Information Services -25.47%",
    "軟件與金融科技中，任何指引或盈利質素不達標都會被重罰；高估值市場容錯率很低。",
  ],
  [
    "Energy complex",
    "XLE -12.00%；WTI -12.76%、Brent -16.42%",
    "能源由前幾週通脹 hedge 變成今週最大跌幅之一。若油價企不回 $95-$100，能源盈利修正壓力會增加。",
  ],
  [
    "CRWV / AMAT / CSCO（下週焦點）",
    "StockTitan：CoreWeave 11/10 盤後，Cisco / Applied Materials 11/12 盤後；AMAT guided revenue 約 $10.25bn +/- $500mn",
    "下週會直接驗證 AI compute、networking 與 wafer-equipment demand。這三份財報比單日反彈更重要。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$75,920.32",
    "-$1,070.16 / -1.39%",
    "Binance Vision BTCUSDT 2026-11-06 20:00 UTC 1m close；對比 10/30 20:00 UTC $76,990.48。",
  ],
  [
    "ETH",
    "$2,236.19",
    "-$6.42 / -0.29%",
    "Binance Vision ETHUSDT 2026-11-06 20:00 UTC 1m close；相對 BTC 跌幅較細，但未見明顯 leadership。",
  ],
  [
    "SOL",
    "$90.26",
    "-$4.60 / -4.85%",
    "Binance Vision SOLUSDT 2026-11-06 20:00 UTC 1m close；跌幅最明顯，alt beta 對 risk-off 較敏感。",
  ],
];

const earningsEvents = [
  "11/10（Tue）：BLS 公布 10 月 CPI / real earnings；CoreWeave（CRWV）盤後公布，市場會看 AI infrastructure demand、債務成本和 data center pipeline。",
  "11/12（Thu）：Cisco（CSCO）與 Applied Materials（AMAT）盤後公布。CSCO 反映 networking / enterprise IT，AMAT 是半導體設備與 AI supply chain 信心測試。",
  "11/13（Fri）：BLS 公布 10 月 PPI。若 PPI 未有跟油價回落，12 月加息定價可能進一步升溫。",
  "11/17-11/19（再下一週預告）：Nvidia、Home Depot、Disney、Palo Alto Networks、Walmart 等陸續公布；市場可能提前調倉。",
  "政策線：留意新一屆民主黨國會與州政府對 data center 電力成本、審批、AI system testing 和地方 moratorium 的口徑；任何溫和化聲明都可能令 AI trade 修復。",
  "能源線：若 Iran war / 航運消息令 Brent 重新上 $100-$105，能源股或有反彈，但也會重新推高通脹預期。",
];

const technicalRows = [
  [
    "S&P 500",
    "支撐 7,350 / 7,300 / 7,200；阻力 7,444 / 7,500 / 7,690",
    "週五收 7,376，守住週四低位但未收復 7,444。短線要先企回 7,444，否則仍是弱反彈。",
  ],
  [
    "Nasdaq Composite",
    "支撐 24,500 / 24,250 / 24,000；阻力 24,825 / 25,000 / 25,560",
    "週五收 24,579，剛離低位不遠。若失 24,500，市場會重新測試週五低位；上破 25,000 才算修復第一關。",
  ],
  [
    "Russell 2000",
    "支撐 2,721 / 2,700 / 2,650；阻力 2,762 / 2,800 / 2,856",
    "Small caps 需要企回 2,800 才有 risk-on 味道；否則仍是 range-bound 反彈。",
  ],
  [
    "VIX",
    "25.6 / 28.4 / 30；下方 23.5 / 21",
    "VIX 仍高過 25，代表市場未完全放低警戒。若下週 CPI 前後升穿 28-30，先減 beta。",
  ],
  [
    "10Y Treasury",
    "4.80% / 4.86% / 4.93% / 5.00%",
    "10Y 守在 4.80%-4.90% 區間。若強 CPI 推回 5.00%，科技估值壓力會再來；跌穿 4.80% 則有利防守與長久期資產。",
  ],
  [
    "WTI / Brent",
    "WTI $90 / $95 / $100；Brent $95 / $100 / $105",
    "油價短期主導能源股與通脹預期。Brent 失 $95 對能源股不利；重上 $100 則對 headline CPI 預期不利。",
  ],
  [
    "BTC / ETH / SOL",
    "BTC $75.9k / $75k / $73k；ETH $2,236 / $2,200 / $2,150；SOL $90 / $88 / $85",
    "Crypto 暫時未崩，但 SOL 已弱。BTC 守 $75k 仍可視為橫行；失守則 risk-off 會擴散到幣市。",
  ],
];

const watchPlan = [
  [
    "Bull case",
    "CPI / PPI 顯示油價回落開始壓低 headline；10Y 跌穿 4.80%；CSCO / AMAT / CRWV guidance 沒有確認 AI capex 放慢；Nasdaq 重上 25,000",
    "可分段買回 quality growth / semis，但只買現金流和訂單能見度較高的公司；避免高槓桿 AI infrastructure 名字過度集中。",
  ],
  [
    "Base case",
    "10Y 在 4.80%-5.00%、Brent $95-$105、CPI mixed、AI 財報有好有壞；S&P 500 在 7,300-7,500 區間震盪",
    "維持 barbell：一邊持有 healthcare / financials / selected defensives，另一邊小注 quality tech；保留現金等財報確認。",
  ],
  [
    "Bear case",
    "CPI / PPI 熱、12 月加息機率升穿 85%、VIX 重上 30、Nasdaq 失 24,250、data center 監管 headline 變硬",
    "先減 beta、semis、AI supply chain、小型股；提高現金和短債比重，等波幅回落後再揀股。",
  ],
  [
    "Crypto plan",
    "BTC 守 $75k 且 ETH 穩在 $2,200 上方，代表只是股票 risk-off 的輕微外溢；若 BTC 失 $73k / SOL 失 $85，槓桿風險會升一級",
    "不加槓桿追週末反彈；繼續固定用 Binance 20:00 UTC 定點價比較，避免被週末薄流動性噪音帶走。",
  ],
];

function Card({
  title,
  children,
  wide,
}: {
  title: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section className={wide ? "card wide" : "card"}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="tableWrap">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${row[0]}-${cellIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function USWeeklyBrief20261108() {
  return (
    <main className="page">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #eef2f7; color: #0f172a; }
        .page {
          min-height: 100vh;
          padding: 36px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif;
          background:
            radial-gradient(circle at top left, rgba(14, 165, 233, 0.18), transparent 32%),
            linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
        }
        .hero {
          border-radius: 28px;
          padding: 34px;
          color: #fff;
          background:
            linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 64, 175, 0.92)),
            radial-gradient(circle at 88% 18%, rgba(45, 212, 191, 0.35), transparent 28%);
          box-shadow: 0 24px 80px rgba(15, 23, 42, 0.22);
          margin-bottom: 24px;
        }
        .eyebrow {
          display: inline-flex;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        h1 {
          margin: 18px 0 12px;
          font-size: clamp(30px, 5vw, 56px);
          line-height: 1.03;
          letter-spacing: -0.04em;
        }
        .subtitle {
          max-width: 1120px;
          margin: 0;
          color: #dbeafe;
          font-size: 18px;
          line-height: 1.72;
        }
        .meta, .score {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }
        .pill {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 8px 12px;
          color: #e0f2fe;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 13px;
        }
        .score {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin-top: 24px;
        }
        .score div {
          border-radius: 18px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .score span { display: block; color: #bfdbfe; font-size: 13px; }
        .score strong { display: block; margin-top: 4px; font-size: 27px; }
        .grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }
        .card {
          border: 1px solid rgba(148, 163, 184, 0.28);
          border-radius: 24px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
          break-inside: avoid;
        }
        .wide { grid-column: 1 / -1; }
        h2 {
          margin: 0 0 16px;
          color: #0f172a;
          font-size: 23px;
          letter-spacing: -0.02em;
        }
        h3 {
          margin: 20px 0 10px;
          color: #1e40af;
          font-size: 18px;
        }
        ul { margin: 0; padding-left: 22px; }
        li { margin: 8px 0; line-height: 1.72; }
        .tableWrap { width: 100%; overflow-x: auto; }
        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
          line-height: 1.58;
        }
        th, td {
          border-bottom: 1px solid #e2e8f0;
          padding: 11px 10px;
          text-align: left;
          vertical-align: top;
        }
        th {
          color: #1e3a8a;
          background: #eff6ff;
          font-weight: 800;
        }
        tr:nth-child(even) td { background: #f8fafc; }
        a { color: #2563eb; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .callout {
          margin-top: 16px;
          padding: 16px;
          border-left: 5px solid #2563eb;
          border-radius: 16px;
          background: #eff6ff;
          color: #1e3a8a;
          line-height: 1.7;
          font-weight: 650;
        }
        .callout.warn {
          border-left-color: #f59e0b;
          background: #fffbeb;
          color: #92400e;
        }
        .small { color: #64748b; font-size: 13px; line-height: 1.65; }
        @media print {
          .page { padding: 18px; background: #fff; }
          .hero, .card { box-shadow: none; }
          .card { page-break-inside: avoid; }
        }
        @media (max-width: 900px) {
          .page { padding: 18px; }
          .grid, .score { grid-template-columns: 1fr; }
        }
      `}</style>

      <header className="hero">
        <div className="eyebrow">美股周報懶人包｜週日版</div>
        <h1>AI 政策風險引爆震倉，油價急跌；反彈有但未夠確認</h1>
        <p className="subtitle">
          今週美股表面是科技回調，核心其實是市場重新問：AI data center
          建設是否會被政策和社區阻力拖慢？同時，油價由高位急跌，幫通脹但重擊能源股；非農又強過預期，令
          Fed 未必可以轉鴿。白話講：大市未全面壞，但最擠擁的 AI / 半導體 trade
          需要財報和政策口徑重新贏回信任。
        </p>
        <div className="meta">
          <span className="pill">週期：{reportWeek}</span>
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">格式：週日版 / 繁體中文 / 廣東話語氣</span>
          <span className="pill">
            Crypto：Binance Vision 20:00 UTC 1m close
          </span>
        </div>
        <div className="score">
          <div>
            <span>S&amp;P 500 weekly</span>
            <strong>-2.68%</strong>
          </div>
          <div>
            <span>Nasdaq weekly</span>
            <strong>-3.37%</strong>
          </div>
          <div>
            <span>10Y Treasury</span>
            <strong>4.86%</strong>
          </div>
          <div>
            <span>BTC weekly</span>
            <strong>-1.39%</strong>
          </div>
        </div>
      </header>

      <div className="grid">
        <Card title="1｜30 秒重點" wide>
          <ul>
            {quickTakeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="callout">
            一句到尾：今週是「AI 政策折現 + 半導體去槓桿 + 油價急跌 + 強就業壓
            Fed」的組合。反彈可以有，但下週 CPI / PPI 與 AMAT / CSCO / CRWV
            才是真正確認位。
          </div>
        </Card>

        <Card title="2｜大市一眼睇" wide>
          <DataTable
            headers={["指標", "週五收市", "一週變動", "解讀"]}
            rows={indexRows}
          />
          <p className="small">
            指數點位以 AP News / CNBC / Reuters 交叉核對，週變動用 2026-10-30
            close 至 2026-11-06 close 計算；VIX 及 ETF proxy 採 Yahoo Finance
            chart data。週末沒有新現貨收盤，故 11/8 版沿用 11/6 close。
          </p>
        </Card>

        <Card title="3｜市場升跌原因">
          <DataTable headers={["驅動", "今週點解重要"]} rows={whyMarketMoved} />
        </Card>

        <Card title="4｜5 大新聞">
          <DataTable headers={["#", "新聞", "市場含義"]} rows={topNews} />
        </Card>

        <Card title="5｜熱度圖：邊度有錢追？" wide>
          <DataTable
            headers={["板塊 / 風格", "本週表現", "訊號", "一句講晒"]}
            rows={heatMapRows}
          />
        </Card>

        <Card title="6｜資金流向與板塊紅綠燈" wide>
          <DataTable
            headers={["項目", "最新可靠數據", "解讀"]}
            rows={flowRows}
          />
          <div className="callout warn">
            Flow 同 price 今週的訊息是：資金仍有買美股，但同步大幅泊入 money
            market。這種組合代表投資者不是完全看淡，而是降低最擠擁 AI beta
            的倉位，等待數據和財報確認。
          </div>
        </Card>

        <Card title="7｜宏觀白話版" wide>
          <DataTable headers={["項目", "數據", "白話解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：油價跌是好消息，但就業強是壞消息；兩者互相抵銷後，市場仍要看下週
            CPI / PPI。若通脹沒有降溫，Fed 風險會壓住科技股估值。
          </div>
        </Card>

        <Card title="8｜重點股票與 Crypto" wide>
          <DataTable
            headers={["股票 / 主題", "最新可靠數據", "點睇"]}
            rows={stockRows}
          />
          <h3>BTC / ETH / SOL</h3>
          <DataTable
            headers={["幣種", "11/6 4:00pm ET 附近價", "一週變動", "來源/備註"]}
            rows={cryptoRows}
          />
          <p className="small">
            Binance direct API 在此環境不可用；本文改用 Binance Vision public
            data 的 spot 1-minute kline。時間點為 2026-11-06 20:00:00 UTC，對比
            2026-10-30 同一時間，盡量貼近美股收市 4:00pm ET。
          </p>
        </Card>

        <Card title="9｜財報與事件焦點" wide>
          <ul>
            {earningsEvents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        <Card title="10｜技術位">
          <DataTable headers={["市場", "位置", "意義"]} rows={technicalRows} />
        </Card>

        <Card title="11｜下週交易計劃 / 觀察清單">
          <DataTable
            headers={["情景", "觸發條件", "操作思路"]}
            rows={watchPlan}
          />
        </Card>

        <Card title="12｜操作提示與最終觀點 / 來源與免責聲明" wide>
          <ul>
            <li>
              <strong>短線：</strong>
              S&amp;P 500 守 7,350，Nasdaq 守
              24,500，才可把週五反彈視為初步止血；未收復 7,500 / 25,000
              前，反彈仍要保守處理。
            </li>
            <li>
              <strong>中線：</strong>
              AI
              主線未死，但市場開始由「建得越多越好」轉向「政策、電力、回報率和融資成本是否支持」。估值要靠數字，不可以只靠敘事。
            </li>
            <li>
              <strong>風控：</strong>
              四個警報：VIX 30、Nasdaq 24,250、10Y 5.00%、BTC
              73k；兩個同時觸發，先減 beta，再慢慢揀股。
            </li>
            <li>
              <strong>最終觀點：</strong>
              今週是 leadership stress
              test，不是全市場崩盤。策略上維持現金、quality cash
              flow、金融/醫療/防守，加少量可驗證的 AI
              winner，等下週數據和財報確認。
            </li>
          </ul>

          <h3>主要來源</h3>
          <ul>
            {sources.map((source) => (
              <li key={source.url}>
                <a href={source.url}>{source.name}</a>
              </li>
            ))}
          </ul>

          <h3>數據差異處理</h3>
          <ul>
            <li>
              指數：AP / CNBC / Reuters 對 S&amp;P 500 7,376.86、Nasdaq
              24,579.42/24,579.43、Dow 51,285.73
              的口徑一致；小數尾差來自四捨五入。Russell 2000 採 Yahoo / Exa
              market data 2,754.11。
            </li>
            <li>
              Sector：本文熱度圖用 Yahoo Finance sector ETF proxy
              計算週變動；Morningstar / Schwab 使用自家 sector / index
              methodology，方向一致但百分比略有差異，已在相關行標明交叉口徑。
            </li>
            <li>
              FedWatch：CME FedWatch 是即時工具；本文採 CNBC / Reuters
              於非農後報道的約 75%-80% 12 月加息機率作快照，實際機率會隨 CPI /
              PPI、Fed speak 和油價快速變動。
            </li>
            <li>
              Oil / gold：Yahoo futures close、CNBC spot quote 與 Reuters
              intraday/settlement 因合約和時間點不同會有尾差；本文用 Yahoo
              futures 做週變動，CNBC / Reuters 做敘事交叉驗證。
            </li>
            <li>
              Crypto：Binance 直接 API 在環境中不可用；本文使用 Binance Vision
              public data 取得 1m kline，時間固定在 20:00 UTC，對應美股 4:00pm
              ET 附近。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
