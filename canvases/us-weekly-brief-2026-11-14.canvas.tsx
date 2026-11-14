import React from "react";

const reportWeek = "2026-11-09 至 2026-11-13";
const reportDate = "2026-11-14";
const publishedAt =
  "香港時間 2026-11-14 09:00（週六版；數據截至美股 11/13 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - Stocks fall but Wall Street notches a winning week after several turbulent days",
    url: "https://apnews.com/article/stocks-markets-ai-us-oil-f8edd0eeb1494d4d2584715686c5e619",
  },
  {
    name: "AP News - How major US stock indexes fared Friday 11/13/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-12c1e8155fb85c3c7b09e058ed6d3c74",
  },
  {
    name: "CNBC - Stock market news for Nov. 13, 2026",
    url: "https://www.cnbc.com/2026/11/12/stock-market-today-live-updates.html",
  },
  {
    name: "Reuters via Euronext - Stocks fall with tech, Nvidia concerns; US dollar climbs",
    url: "https://live.euronext.com/en/financial-news/stocks-fall-tech-nvidia-concerns-us-dollar-climbs",
  },
  {
    name: "Morningstar - Market Wrap: Stocks Up 2.52%, Led by Energy and Industrials",
    url: "https://www.morningstar.com/markets/market-wrap-stocks-up-252-led-by-energy-industrials",
  },
  {
    name: "Morningstar / Dow Jones - S&P 500 Rises 2.51% This Week to 7561.67",
    url: "https://www.morningstar.com/news/dow-jones/2026111310378/sp-500-rises-251-this-week-to-756167-data-talk",
  },
  {
    name: "CNBC - PPI inflation report October 2026",
    url: "https://www.cnbc.com/2026/11/13/ppi-inflation-report-october-2026.html",
  },
  {
    name: "CNBC - 10-year Treasury yield moves to 5.17% as traders weigh producer price report",
    url: "https://www.cnbc.com/2026/11/13/treasury-yields-fed-rates.html",
  },
  {
    name: "Reuters via Economic Times - US equity funds draw inflows for second week",
    url: "https://economictimes.indiatimes.com/markets/us-stocks/wall-street-guide/us-equity-funds-draw-inflows-for-second-week-as-tech-concerns-ease/articleshow/135816268.cms",
  },
  {
    name: "Reuters via U.S. News - Demand for European Funds Boosts Global Equity Fund Inflows",
    url: "https://money.usnews.com/investing/news/articles/2026-11-13/demand-for-european-funds-boosts-global-equity-fund-inflows-to-seven-week-high",
  },
  {
    name: "Reuters via Investing.com - Nvidia results, Anthropic IPO pose tests for tumultuous AI trade",
    url: "https://www.investing.com/news/stock-market-news/nvidia-results-anthropic-ipo-pose-tests-for-tumultuous-ai-trade-5024815",
  },
  {
    name: "Investopedia - Nvidia options expected move after earnings",
    url: "https://www.investopedia.com/here-s-how-much-traders-expect-nvidia-stock-to-move-after-earnings-nvda-12245480",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
  {
    name: "Binance Vision data API klines",
    url: "https://data-api.binance.vision/",
  },
];

const quickTakeaways = [
  "今週美股先急彈、後回吐，但收官仍是贏家：AP / CNBC 指 S&P 500 全週 +2.5%、Nasdaq +2.3%、Dow +2.1%，三大指數都結束連跌週，屬 8 月以來最佳單週之一。",
  "週五不是全面 risk-on：Dow 收 52,347.55（+0.10%），但 S&P 500 跌 0.40% 至 7,561.67、Nasdaq 跌 0.91% 至 25,136.27；AI / chip 再次拖住大市。",
  "核心矛盾是「反彈有，但利率更高」：PPI 月增 0.3% 低過預期，惟年增 6.5% 是近四年高位；10Y 升到約 5.14%-5.15%，12 月加息被市場視為接近板上釘釘。",
  "板塊上，Morningstar 指能源 +5.53%、工業 +3.79% 最強；科技全週仍 +3.33%，但週五再被 Nvidia 事件、semis 回吐及高長息壓住。",
  "資金流不是撤出股票：LSEG Lipper / Reuters 指截至 11/11 一週美股基金流入 $6.6bn，連續第二週流入；但 sector funds 流出 $2.49bn，代表投資者更揀大型股和流動性。",
  "Crypto 明顯轉弱：Binance Vision 11/13 21:00 UTC（4:00pm ET）顯示 BTC $68,884.01、ETH $1,947.59、SOL $79.92；相對 11/6 同時間分別 -9.25%、-12.68%、-11.20%。",
  "下週焦點非常集中：11/17 Nvidia / Home Depot / Disney 與 10 月 retail sales，11/18 FOMC minutes / housing，11/19 Anthropic IPO / Walmart / Alibaba；AI trade 要交功課。",
  "操作上，S&P 500 要守 7,500、Nasdaq 要守 25,000、10Y 最好回落到 5.00% 下方，反彈才較健康；否則仍是高波幅區間市。",
];

const indexRows = [
  [
    "DJIA",
    "52,347.55",
    "週五 +50.46 / +0.10%；全週約 +2.1%",
    "Dow 週五守得最好，反映資金仍願意買防守、工業、金融等非 AI beta；但升幅不大，未算全面 risk-on。",
  ],
  [
    "S&P 500",
    "7,561.67",
    "週五 -30.73 / -0.40%；全週 +184.81 / +2.51%",
    "連跌四週後終於反彈，但仍較 10 月高位 7,818.93 低約 3.3%。7,500 是短線心理支撐，7,600-7,650 是第一阻力帶。",
  ],
  [
    "Nasdaq Composite",
    "25,136.27",
    "週五 -229.82 / -0.91%；全週約 +2.3%",
    "科技股一週仍升，但週五被 Nvidia / AI financing / semis 沽壓拖低；25,000 一帶是短線止血位。",
  ],
  [
    "Russell 2000",
    "2,790.49（WiseView close）",
    "全週約 +1.32%；日變動暫無可靠 AP / CNBC 收市數據",
    "小型股跟升但弱過大型股；高短息與信貸成本仍限制估值修復。要更 risk-on，需先企回 2,800-2,820。",
  ],
  [
    "VIX",
    "19.28-19.29",
    "全週約 -24.8%；週五約 +3.2%",
    "波幅由上週高位回落，但週五再升，說明市場未完全放低 AI / Fed 風險。低過 20 屬可控，高過 22 則要小心。",
  ],
];

const whyMarketMoved = [
  [
    "PPI 初看溫和，細節仍熱",
    "CNBC：10 月 PPI +0.3% m/m，低過 0.4% 預期；但年增 6.5% 是 2022 年 11 月以來最高，核心 PPI +0.3%，扣除食品能源及貿易服務 +0.5%。市場早段追升，之後重新定價 Fed 風險。",
  ],
  [
    "長息重上 5%，估值折現率更貴",
    "CNBC 指 10Y 收近 5.143%、日內高見 5.174%；Morningstar 指 10Y 由上週 4.86% 升到約 5.15%。白話講，盈利未必差，但折現率升會壓住高估值股票。",
  ],
  [
    "AI / Nvidia 事件令科技反彈打折",
    "CNBC / Reuters 指 Nvidia 週五再跌約 2%，全週約 -12% 至 -13%；市場等 11/17 業績和 CEO succession clarity。AI trade 未死，但信心需要重新建立。",
  ],
  [
    "資金流向大型股，但避開 sector beta",
    "Reuters / LSEG Lipper：美股基金 +$6.6bn，大型股基金 +$11.64bn；但 sector funds -$2.49bn，工業、通訊服務、公用事業流出較多。市場想留在場內，但不想過度押單一主題。",
  ],
  [
    "油價回落幫通脹預期，能源股反而跑贏",
    "WTI 約 $88.56-$88.99、Brent 約 $95.84；雖然油價連跌兩週，能源板塊全週仍 +5.5%，反映上週大跌後有均值回歸和 geopolitical risk premium 支撐。",
  ],
];

const topNews = [
  [
    "1",
    "三大指數全週反彈，但週五 Nasdaq / S&P 500 收低",
    "AP / CNBC：S&P 500 全週 +2.5%、Nasdaq +2.3%、Dow +2.1%；週五科技回吐令 S&P 500 -0.40%、Nasdaq -0.91%。",
  ],
  [
    "2",
    "10 月 PPI 月增低過預期，年增卻升至近四年高位",
    "CNBC / BLS 口徑：PPI +0.3% m/m、+6.5% y/y；市場仍完全定價 12 月至少加 25bp。",
  ],
  [
    "3",
    "10Y Treasury 收近 5.15%，2Y 約 4.86%-4.88%",
    "CNBC / Morningstar：10Y 全週升約 29bp，2Y 全週升約 35-37bp；利率急升是壓住長久期資產的主因。",
  ],
  [
    "4",
    "Nvidia 業績與 Anthropic IPO 成下週 AI trade 壓力測試",
    "Reuters：Nvidia 11/17 收市後公布，市場估收入約 $109bn、盈利增長約 90%；11/19 Anthropic IPO 會測試 AI sentiment。",
  ],
  [
    "5",
    "美股基金連續第二週流入，但 sector funds 流出",
    "Reuters / LSEG Lipper：截至 11/11 一週美股基金 +$6.6bn，大型股吸金；sector funds -$2.49bn，顯示買盤更集中、更審慎。",
  ],
];

const heatMapRows = [
  [
    "Energy",
    "+5.53%（Morningstar）；WiseView +5.34%",
    "綠燈",
    "上週急跌後反彈最強；油價連跌兩週理論上不利盈利，但 geopolitical premium 和低基數令能源股有承接。",
  ],
  [
    "Industrials",
    "+3.79%（Morningstar）；WiseView +3.74%",
    "綠燈",
    "工業跑贏代表反彈不是只靠 mega-cap tech；但 Reuters flow 指工業基金流出 $984mn，價格與資金流有分歧。",
  ],
  [
    "Communication Services",
    "+3.72%（WiseView）",
    "綠燈但要觀察",
    "平台股相對硬淨，但資金流顯示通訊服務基金仍流出 $811mn；若廣告/雲端指引轉弱，升勢會受考驗。",
  ],
  [
    "Technology",
    "+3.33%（WiseView）；週五科技為最弱 S&P sector",
    "黃燈",
    "全週反彈仍在，但週五 semis / Nvidia 沽壓重現。要由反彈變趨勢，需要 NVDA 業績與 succession update 幫手。",
  ],
  [
    "Financials",
    "+2.66%（WiseView）",
    "中性偏綠",
    "長短息上升利好部分息差敘事，但 curve / credit 仍要留意；金融可作非科技平衡倉。",
  ],
  [
    "Consumer Staples",
    "+2.52%（WiseView）；週五 sector +約 1.4% 領漲",
    "防守綠燈",
    "週五資金轉入防守，說明市場不是全面追 beta，而是在高利率下找可見度。",
  ],
  [
    "Health Care",
    "+2.22%（WiseView）",
    "中性",
    "Beta 較低，適合作防守平衡；但暫未有明顯 leadership，需要個別財報推動。",
  ],
  [
    "Utilities",
    "+2.11%（WiseView）",
    "中性偏黃",
    "高長息通常壓 utility valuation，但防守需求有支持；若 10Y 繼續升穿 5.20%，要減低期待。",
  ],
  [
    "Consumer Discretionary",
    "+2.04%（WiseView）",
    "中性",
    "AAPL 被視為相對 safe haven，但 AI capex / 高利率仍壓住高估值消費科技。留意 retail sales。",
  ],
  [
    "Real Estate / Materials",
    "Real Estate +0.70%；Materials +0.49%（Morningstar）",
    "黃燈",
    "兩者全週最弱。Real estate 怕長息，materials 受美元強及商品回落壓住。",
  ],
  [
    "Semiconductors",
    "PHLX SOX 週五約 -3.4%；NVDA 全週約 -12% 至 -13%",
    "紅燈但有催化",
    "Chip trade 是下週最大變數。NVDA 業績可救 sentiment，也可能放大波幅；不適合重倉賭單一方向。",
  ],
];

const flowRows = [
  [
    "U.S. equity funds",
    "Reuters / LSEG Lipper：截至 11/11 一週淨流入 $6.6bn，連續第二週流入，但較前一週 $14.97bn 低約 56%",
    "股票仍有人買，但力度下降。大市反彈背後不是 all-in risk-on，而是跌後修復加大型股吸金。",
  ],
  [
    "Large / mid / small cap funds",
    "Large-cap +$11.64bn；mid-cap -$2.44bn；small-cap -$1.02bn",
    "資金明顯偏好流動性和大型股。Russell 2000 反彈落後有原因：中小型股仍未有穩定流入。",
  ],
  [
    "Sector funds",
    "Sector funds -$2.49bn；industrials -$984mn、communication services -$811mn、utilities -$802mn",
    "價格升、基金流出並存，代表短線可能有 short-covering 或被動資金因素；主動資金仍審慎。",
  ],
  [
    "Bond funds",
    "美國 bond funds +$573mn，三週低位；taxable fixed-income +$2.13bn，短中期 IG -$950mn、長久期政府/美債 -$949mn",
    "長息抽升令長久期債券不再單邊吸金，投資者轉向較短存續期或更靈活的 fixed income。",
  ],
  [
    "Money market funds",
    "Money-market funds -$38.49bn，扭轉前一週 +$118.62bn 的大型流入",
    "現金部位有回流風險資產跡象，但幅度不算全面；若 10Y 維持 5% 上方，現金收益仍具吸引力。",
  ],
  [
    "Global equity funds",
    "Reuters：全球股票基金 +$50.99bn，七週高位；歐洲基金 +$35.13bn，為 2021 年 6 月以來最大",
    "全球資金不是只買美股，歐洲 earnings / 估值吸引力分流部分資金；美股需要靠盈利繼續證明 premium。",
  ],
  [
    "Crypto",
    "BTC -9.25%、ETH -12.68%、SOL -11.20%（Binance Vision 11/6 至 11/13 21:00 UTC）",
    "幣市今週比 Nasdaq 弱，代表 risk-off 已外溢到高 beta crypto；週末流動性薄，不宜用單日反彈判斷轉勢。",
  ],
];

const macroRows = [
  [
    "PPI / inflation",
    "10 月 PPI +0.3% m/m（預期 +0.4%）、+6.5% y/y；core PPI +0.3%；扣除食品、能源及貿易服務 +0.5%",
    "月度數字略好，但年度和核心細節太熱。市場不會因一個低於預期的 headline 就相信 Fed 可以停。",
  ],
  [
    "CPI backdrop",
    "CNBC 指本週較早 CPI headline +0.4% m/m、core +0.3%，均較預期高 0.1ppt；因 2025 年 shutdown 影響，BLS 未發布 12 個月 CPI 數字",
    "CPI + PPI 組合令通脹重新變成市場主線。Fed 不能只看油價回落，因核心服務/商品壓力仍在。",
  ],
  [
    "FedWatch / rates path",
    "CNBC：市場定價 12/9 FOMC 100% 加息；25bp 約 89%，50bp 約 14%（即時工具不同時間有尾差）",
    "白話講：25bp 幾乎是 base case，50bp 是 tail risk。若 retail sales / Fed speakers 更 hawkish，50bp 機率可再升。",
  ],
  [
    "Treasury yields",
    "CNBC：10Y 5.143%、高見 5.174%；2Y 4.859%；30Y 5.472%。Morningstar：10Y 全週由 4.86% 升至 5.15%、2Y 由 4.51% 升至 4.88%",
    "這是今週最重要的風險定價。10Y 在 5% 上方，科技和 real estate 的 valuation multiple 都會被壓。",
  ],
  [
    "USD",
    "Reuters / Market Briefer：DXY 約 103.35-103.41，創 2025 年 4 月以來高位附近，週線約 +0.9%",
    "美元強會壓商品、非美收入和 crypto liquidity；對跨國企業盈利翻譯亦不是好事。",
  ],
  [
    "Oil",
    "CNBC：WTI $88.56（-0.2%）、Brent $95.84（+0.02%）；Morningstar：WTI 全週 -1.49% 至 $88.99",
    "油價回落有助 headline inflation，但仍高於多數央行舒服區。若 Iran headline 反覆，油價和長息會再牽動大市。",
  ],
  [
    "Gold",
    "Market Briefer：gold futures 約 $3,875.90（-0.24%）；Morningstar：Comex gold 全週 -4.77% 至約 $3,872",
    "金價被高美元和高實質利率壓住。若 10Y 不跌，金價避險功能會打折。",
  ],
  [
    "Next macro",
    "11/17 retail sales / business inventories；11/18 housing starts / FOMC minutes；11/19 jobless claims",
    "下週如果 retail sales 太強，Fed 更難放慢；太弱則市場會擔心盈利。FOMC minutes 會幫市場校準 50bp tail risk。",
  ],
];

const stockRows = [
  [
    "NVDA",
    "週五約 -2% 至 $162.85；全週約 -12% 至 -13%；11/17 收市後公布業績，市場估收入約 $109bn、盈利增長約 90%",
    "Nvidia 是下週全市場 sentiment key。業績好但 succession / China / financing 問題答得差，股價仍可波動；Investopedia 指期權反映下週約 8% 單週波幅。",
  ],
  [
    "AMD / AVGO",
    "Morningstar：AMD 全週 +18.93% 至 $534.06；Broadcom +18.26% 至約 $346.63；但 Reuters / Market Briefer 指週五兩者明顯回吐",
    "資金曾把 NVDA 風險重新分配到競爭者，但週五證明 AI chain 是同一個 risk bucket。不能只看相對受惠，要看整個 AI capex 是否被市場質疑。",
  ],
  [
    "AAPL",
    "CNBC：Apple 週五盤中升近 1%、高見 $360.80，市值升穿 $5.2tn；被部分分析員視為避開 AI infrastructure capex 的 safe haven",
    "市場想買 mega-cap quality，但偏好低 capex uncertainty 的名字。AAPL 若守高位，有助 Dow / Nasdaq breadth。",
  ],
  [
    "CSCO / DELL / neoclouds",
    "CNBC：Cisco 週五跌約 6%；Market Briefer 指 Dell -7.18%；Reuters 指 CoreWeave / Nebius 等 neoclouds 週五再受壓",
    "AI infrastructure financing 和 networking demand 仍是痛點。下週要看 Nvidia call 會否安撫市場對 circular financing 的疑慮。",
  ],
  [
    "TTD / AMD / TNDM / AVGO",
    "Morningstar top gainers：Trade Desk +21.31%、AMD +18.93%、Tandem Diabetes +18.66%、Broadcom +18.26%",
    "市場仍獎勵能交數和有明確催化的股票。即使宏觀壓力大，個股盈利 surprise 仍可跑贏。",
  ],
  [
    "BZ / IONS / HIMS / CTVA / IREN",
    "Morningstar top losers：Kanzhun -26.55%、Ionis -26.31%、Hims & Hers -24.12%、Corteva -20.76%、IREN -16.00%",
    "弱勢股被懲罰好重，說明市場容錯率低。高估值、盈利質素或政策風險不清晰的公司要降低倉位。",
  ],
  [
    "DIS / HD / WMT / BABA",
    "Morningstar calendar：11/17 Disney、Home Depot、Nvidia；11/19 Alibaba、Walmart；11/19 Anthropic IPO 首日交易",
    "下週不只是 AI，還有消費與零售檢驗。若 retail earnings 轉弱，反彈 breadth 會受考驗。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$68,884.01",
    "-$7,018.99 / -9.25%",
    "Binance Vision BTCUSDT 2026-11-13 21:00 UTC 1m close；對比 2026-11-06 21:00 UTC $75,903.00。",
  ],
  [
    "ETH",
    "$1,947.59",
    "-$282.91 / -12.68%",
    "Binance Vision ETHUSDT 2026-11-13 21:00 UTC 1m close；失守 $2,000，beta 明顯高過 BTC。",
  ],
  [
    "SOL",
    "$79.92",
    "-$10.08 / -11.20%",
    "Binance Vision SOLUSDT 2026-11-13 21:00 UTC 1m close；跌穿 $80 附近，alt beta 仍弱。",
  ],
];

const earningsEvents = [
  "11/17（Tue）：Nvidia、Disney、Home Depot 公布；同日 10 月 retail sales 與 September business inventories。NVDA 是 AI trade 最重要壓力測試。",
  "11/18（Wed）：October New Residential Construction、October FOMC minutes、Target / Lowe's 財報。長息升穿 5% 後，房屋數據要特別留意。",
  "11/19（Thu）：Anthropic IPO 首日交易、weekly jobless claims、Alibaba / Walmart 財報。AI 私募估值能否被公開市場接受，會影響整條 AI sentiment chain。",
  "Fed speakers / rates：市場已把 12 月 25bp 視為 base case；任何支持 50bp 的言論都會先壓長久期股票。",
  "能源 / geopolitics：油價連跌兩週但仍高；若 Iran / 航運 headline 令 Brent 重上 $100，會再次推高通脹預期。",
  "Crypto：週末觀察 BTC 能否重上 $70k、ETH 能否重上 $2,000；若失敗，代表 risk-off 未完。",
];

const technicalRows = [
  [
    "S&P 500",
    "支撐 7,500 / 7,450 / 7,376；阻力 7,600 / 7,650 / 7,819",
    "收 7,561.67，仍在反彈區但週五失守 7,600。守 7,500 才算健康消化；跌穿 7,450 會重新測試上週反彈是否假突破。",
  ],
  [
    "Nasdaq Composite",
    "支撐 25,000 / 24,580 / 24,250；阻力 25,370 / 25,500 / 26,000",
    "收 25,136.27，剛好守在 25,000 上方。下週 NVDA 前後若失 25,000，要先減少半導體和高 beta 倉位。",
  ],
  [
    "Russell 2000",
    "支撐 2,754 / 2,730；阻力 2,800 / 2,820 / 2,850",
    "週變動落後大型股，代表 broad risk appetite 未全面打開。企回 2,800 才可確認中小型股改善。",
  ],
  [
    "VIX",
    "下方 18.5 / 17.5；上方 20 / 22 / 25",
    "VIX 低過 20 是大市喘息條件；若下週 NVDA / Anthropic 令 VIX 重上 22，反彈會變脆弱。",
  ],
  [
    "10Y Treasury",
    "5.00% / 5.15% / 5.25%",
    "10Y 留在 5.15% 附近，估值壓力未解除。跌穿 5.00% 才利好 growth multiple；升穿 5.25% 則要防範再度殺估值。",
  ],
  [
    "WTI / Brent",
    "WTI $88 / $85；Brent $96 / $100",
    "WTI 守 $88 代表油價仍高但未再爆；Brent 重上 $100 會令 inflation premium 回來，能源股可升但大市估值受壓。",
  ],
  [
    "BTC / ETH / SOL",
    "BTC $68.9k / $70k / $66k；ETH $1,948 / $2,000 / $1,850；SOL $79.9 / $82 / $75",
    "Crypto 已經先行轉弱。BTC 重上 $70k 才算初步止血；如果 BTC 失 $66k，週末槓桿清算風險升。",
  ],
];

const watchPlan = [
  [
    "Bull case",
    "NVDA 業績和電話會議穩住 AI demand；10Y 回落至 5.00% 下方；retail sales 不過熱；S&P 500 重上 7,650、Nasdaq 重上 25,500",
    "可分段加回 quality growth / semis，但只買 cash flow、訂單能見度和 balance sheet 較強的公司；避免追高 debt-funded AI infrastructure。",
  ],
  [
    "Base case",
    "10Y 在 5.00%-5.20% 高位震盪；NVDA 業績好壞參半；Anthropic IPO 有需求但估值有爭議；S&P 500 在 7,450-7,650 橫行",
    "維持 barbell：大型 quality tech + 防守 staples / healthcare / financials；保留現金，等 FOMC minutes 和 NVDA call 再決定方向。",
  ],
  [
    "Bear case",
    "NVDA 指引或 succession 答案令市場失望；10Y 升穿 5.25%；50bp 加息機率升；Nasdaq 失 25,000、VIX 上 22-25",
    "先減 semis、neoclouds、high beta software、small caps；轉去現金、短債、防守股，待 VIX 回落再揀股。",
  ],
  [
    "Crypto plan",
    "BTC 未能重上 $70k 或 ETH 失 $1,850；同時 Nasdaq 弱、美元強",
    "不加槓桿接刀。若 BTC 企回 $70k 並守 24 小時，可小注分段；否則當作風險資產去槓桿的一部分處理。",
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

export default function USWeeklyBrief20261114() {
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
        <div className="eyebrow">美股周報懶人包｜週六版</div>
        <h1>反彈週遇上高息牆：AI 未止震，長息重上 5%</h1>
        <p className="subtitle">
          今週大市終於由上週 AI / policy shock 中反彈，但不是無條件 risk-on。
          PPI 低過預期只救到早段情緒，年增 6.5% 和 10Y 重上 5.1%
          令市場重新計數；Nvidia 事件未完、下週業績和 Anthropic IPO 會直接測試
          AI trade 信心。白話講：反彈是真的，壓力也是真的。
        </p>
        <div className="meta">
          <span className="pill">週期：{reportWeek}</span>
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">格式：週六版 / 繁體中文 / 廣東話語氣</span>
          <span className="pill">
            Crypto：Binance Vision 21:00 UTC 1m close
          </span>
        </div>
        <div className="score">
          <div>
            <span>S&amp;P 500 weekly</span>
            <strong>+2.51%</strong>
          </div>
          <div>
            <span>Nasdaq weekly</span>
            <strong>+2.3%</strong>
          </div>
          <div>
            <span>10Y Treasury</span>
            <strong>5.14%</strong>
          </div>
          <div>
            <span>BTC weekly</span>
            <strong>-9.25%</strong>
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
            一句到尾：今週是「跌後反彈 + 高息重估 + AI
            信心測試」的組合。可以做反彈，但要用 7,500 / 25,000 / 5.00%
            三條線管理風險。
          </div>
        </Card>

        <Card title="2｜大市一眼睇" wide>
          <DataTable
            headers={["指標", "週五收市", "一週變動", "解讀"]}
            rows={indexRows}
          />
          <p className="small">
            指數點位以 AP News / CNBC / Reuters-linked pages 交叉；S&amp;P 500
            週變動採 Morningstar / Dow Jones 2.51%。Russell 2000 與 VIX 使用
            WiseView / Market Briefer 快照，因 AP / CNBC
            主文未提供完整日變動而已標明。
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
            Flow 同 price 今週訊息是：大型股有資金回流，但 sector funds
            流出，money market
            只是部分回吐。即是市場願意買反彈，但仍未全面擁抱高 beta。
          </div>
        </Card>

        <Card title="7｜宏觀白話版" wide>
          <DataTable headers={["項目", "數據", "白話解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：PPI 月度好少少，但年度和核心仍熱；10Y 在 5%
            上方，代表「估值上限」仍然存在。 下週數據只要不是明顯降溫，Fed
            hawkish pricing 就好難立即消失。
          </div>
        </Card>

        <Card title="8｜重點股票與 Crypto" wide>
          <DataTable
            headers={["股票 / 主題", "最新可靠數據", "點睇"]}
            rows={stockRows}
          />
          <h3>BTC / ETH / SOL</h3>
          <DataTable
            headers={[
              "幣種",
              "11/13 4:00pm ET 附近價",
              "一週變動",
              "來源/備註",
            ]}
            rows={cryptoRows}
          />
          <p className="small">
            Binance direct API 在此環境不可用；本文使用 Binance Vision public
            data 的 spot 1-minute kline。美國冬令時間美股 4:00pm ET = 21:00
            UTC；本次採 2026-11-13 21:00:00 UTC close，對比 2026-11-06
            同一時間。
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
              只要 S&amp;P 500 守 7,500、Nasdaq 守
              25,000，反彈仍可延續；若兩者同時失守，先減高 beta。
            </li>
            <li>
              <strong>中線：</strong>
              AI 主線未死，但由「需求無限」轉成「利率、融資、治理和 ROI
              都要交代」。NVDA 週二電話會議比單純 EPS 更重要。
            </li>
            <li>
              <strong>風控：</strong>
              四個警報：10Y 升穿 5.25%、VIX 升穿 22、Nasdaq 跌穿 25,000、BTC
              跌穿 $66k；兩個同時觸發，先減 beta。
            </li>
            <li>
              <strong>最終觀點：</strong>
              今週是健康反彈，但未完成趨勢修復。策略上維持 barbell：quality
              mega-cap / selected defensives / 現金短債，加少量可驗證 AI
              winner，等下週數據和 NVDA 確認。
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
              指數：AP / CNBC 對 Dow 52,347.55、S&amp;P 500 7,561.67、Nasdaq
              25,136.27 一致；Reuters-linked pages 有 preliminary data
              尾差，本文採 AP / CNBC final close。
            </li>
            <li>
              Sector：Morningstar 使用其 US market / sector
              methodology；WiseView 使用 sector fund proxy。
              方向大致一致，百分比有尾差，本文在表格內標明來源。
            </li>
            <li>
              FedWatch：CME FedWatch 是即時工具，不同報道時間有 25bp / 50bp
              機率尾差；本文採 CNBC 於 11/13 報道的 100% 加息、25bp 約 89%、50bp
              約 14% 作快照。
            </li>
            <li>
              Oil / gold / USD：CNBC、Reuters-linked pages、Morningstar
              因合約、時間點及 spot/futures 口徑不同有尾差；本文以 CNBC
              收市附近價作宏觀主口徑，Morningstar 做週變動交叉。
            </li>
            <li>
              Crypto：Binance 直接 API 在環境中不可用；本文使用 Binance Vision
              public data 取得 1m kline，時間固定在 21:00 UTC，對應美股 4:00pm
              ET 附近。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
