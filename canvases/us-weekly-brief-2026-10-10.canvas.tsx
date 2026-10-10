import React from "react";

const reportWeek = "2026-10-05 至 2026-10-09";
const reportDate = "2026-10-10";
const publishedAt =
  "香港時間 2026-10-10 09:15（週末更新版；美股週末休市，數據截至美股 10/9 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Friday 10/9/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-dafbd0c4037ee10e2a9e305f3cfa8e70",
  },
  {
    name: "Reuters via Yahoo Finance - Wall Street posts weekly gains with earnings, inflation data on tap",
    url: "https://finance.yahoo.com/markets/stocks/articles/wall-st-futures-gain-oil-102454068.html",
  },
  {
    name: "Reuters via MarketScreener - Stocks advance ahead of earnings, navigating still-high Treasury yields and oil prices",
    url: "https://ca.marketscreener.com/news/stocks-advance-ahead-of-earnings-navigating-still-high-treasury-yields-and-oil-prices-ce785ddcda89f322",
  },
  {
    name: "University of Michigan Surveys of Consumers - Preliminary Results for October 2026",
    url: "https://www.sca.isr.umich.edu/",
  },
  {
    name: "Federal Reserve - FOMC statement September 16, 2026",
    url: "https://www.federalreserve.gov/monetarypolicy/files/monetary20260916a1.pdf",
  },
  {
    name: "Federal Reserve - September 2026 Summary of Economic Projections",
    url: "https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260916.htm",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Reuters via StreetInsider - Fed may skip October but pull rate hike trigger in December",
    url: "https://www.streetinsider.com/Reuters/Fed+may+skip+October+but+pull+rate+hike+trigger+in+December/27139372.html",
  },
  {
    name: "Reuters via StreetInsider - US equity funds witness first weekly outflow in three weeks",
    url: "https://www.streetinsider.com/Reuters/US+equity+funds+witness+first+weekly+outflow+in+three+weeks/27168971.html",
  },
  {
    name: "Axios - SpaceX spectrum deal unsettles investors in AT&T, Verizon, T-Mobile",
    url: "https://www.axios.com/2026/10/09/spacex-elon-musk-spectrum",
  },
  {
    name: "CNBC - SpaceX deal to acquire spectrum license hammers shares of AT&T, Verizon and T-Mobile",
    url: "https://www.cnbc.com/2026/10/08/spacex-spectrum-license-att-verizon-tmobile.html",
  },
  {
    name: "Reuters via U.S. News - Delta cuts profit outlook as fuel costs outpace fare gains",
    url: "https://money.usnews.com/investing/news/articles/2026-10-09/delta-air-lines-cuts-profit-outlook-as-fuel-costs-outpace-fare-gains",
  },
  {
    name: "Delta Air Lines - September Quarter 2026 Financial Results",
    url: "https://news.delta.com/sites/default/files/2026-10/delta-air-lines-announces-september-quarter-2026-results.pdf",
  },
  {
    name: "Reuters via RTE - Oil falls as Trump comments on Iran talks ease supply concerns",
    url: "https://www.rte.ie/news/business/2026/1009/1594665-world-oil-prices/",
  },
  {
    name: "Reuters via Euronext - Oil falls as Trump comments on Iran talks ease supply concerns",
    url: "https://live.euronext.com/en/financial-news/oil-falls-trump-comments-iran-talks-ease-supply-concerns",
  },
  {
    name: "Reuters via StreetInsider - OpenAI annualized revenue $20 billion less than previously signaled",
    url: "https://www.streetinsider.com/Reuters/OpenAIs+annualized+revenue+%2420+billion+less+than+previously+signaled%2C+FT+reports/27167688.html",
  },
  {
    name: "Reuters via StreetInsider - Tech stocks struggle on AI spending worries, elevated yields",
    url: "https://www.streetinsider.com/Reuters/Tech+stocks+struggle+on+AI+spending+worries%2C+elevated+yields/27168101.html",
  },
  {
    name: "Newsquawk - Weekly US Earnings Estimates: 12-16th October 2026",
    url: "https://www.newsquawk.com/content/research_sheets/production/original/000/042/384/Weekly_US_Earnings_Estimates__12-16th_October_2026.pdf",
  },
  {
    name: "Earnings Whispers - Most Anticipated Earnings Releases: October 12-16, 2026",
    url: "https://beta.earningswhispers.com/calweek/20261012",
  },
  {
    name: "Yahoo Finance chart data - market, ETF, stock and futures closes",
    url: "https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC",
  },
  {
    name: "Cboe - VIX Volatility Products",
    url: "https://www.cboe.com/en/tradable-products/vix/",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
  {
    name: "Binance Vision public data",
    url: "https://data.binance.vision/",
  },
];

const quickTakeaways = [
  "美股今週收得幾靚：S&P 500 全週 +1.15%，Dow +0.93%，Nasdaq +0.64%；但 Russell 2000 -0.91%，即係大盤仍由大型股托住，小型股未跟。",
  "週五 AP / Reuters close：S&P 500 +0.6% 至 7,811.54、Dow +423.31 點至 51,654.95、Nasdaq +0.6% 至 27,366.17；Reuters 指三大指數全週錄得升幅。",
  "最重要的宏觀背景仍是高息：10Y Treasury 週五約 5.24%，雖較上週略低，但仍高到足以限制估值擴張；市場暫時更相信 10 月 pause、12 月仍有加息風險。",
  "油價仍高：Yahoo futures 顯示 Brent 10/9 close 約 $104.43、全週 +2.13%，WTI 約 $91.66；Reuters 指中東供應憂慮降溫令日內回落，但柴油/能源成本仍是通脹壓力。",
  "本週最大分化在 AI / 半導體：10/8 OpenAI revenue headline 觸發 AI selloff，SOXX（Yahoo 10/8）較 10/2 -4.35%，NVDA -1.48%、AMD -2.09%、INTC -10.27%。",
  "SpaceX 800MHz spectrum deal 令傳統電訊商急跌、tower stocks 急升；市場開始重新估 Starlink Mobile 對美國無線市場的長線威脅。",
  "Crypto 明顯跑輸股票：Binance Vision 10/9 20:00 UTC 1m close，BTC $82,383.40、ETH $2,479.33、SOL $108.69；較 10/2 同一時間分別 -2.36%、-7.09%、-7.91%。",
];

const indexRows = [
  [
    "DJIA",
    "51,654.95",
    "週五 +423.31 / +0.83%；全週 +477.99 / +0.93%",
    "藍籌週五反彈最明顯，受軟件、醫療與金融財報預期支持；但全年高息與油價仍限制 cyclicals 追升空間。",
  ],
  [
    "S&P 500",
    "7,811.54",
    "週五 +46.18 / +0.59%；全週 +88.82 / +1.15%",
    "接近歷史高位附近收市，代表大市仍有承接；但升勢不是全面風險偏好，而是對下週 CPI / 財報的押注。",
  ],
  [
    "Nasdaq Composite",
    "27,366.17",
    "週五 +172.83 / +0.64%；全週 +175.31 / +0.64%",
    "週四 AI selloff 後反彈，但全週升幅細過 S&P；半導體與 AI capex 質疑令 Nasdaq 由領漲變成波動來源。",
  ],
  [
    "Russell 2000",
    "2,806.98",
    "週五 +12.85 / +0.46%；全週 -25.92 / -0.91%",
    "小型股全週仍跌，廣度未確認大市新高；高融資成本環境下，small caps 仍是市場最脆弱一環。",
  ],
  [
    "VIX",
    "14.84",
    "週五 -0.57 / 約 -3.7%；全週 -0.47 / -3.07%",
    "表面波幅低，但 Nasdaq 內部波動不低；VIX 低位代表對沖便宜，不代表風險消失。",
  ],
];

const whyMarketMoved = [
  [
    "財報季前的 positioning",
    "Reuters 指第三季財報季下週正式展開，大型銀行 JPM / WFC / C / GS / BAC / MS 將公布。市場在 CPI 前先買入 earnings resilience，但仍會用實績驗證估值。",
  ],
  [
    "高息未散，但 10Y 未再失控",
    "Yahoo chart 顯示 10Y yield 由 10/2 約 5.277% 回到 10/9 約 5.244%；仍是高位，但沒有繼續急升，令股票有喘息空間。",
  ],
  [
    "AI 故事被重新審判",
    "Reuters 指 OpenAI annualized revenue 約比早前市場訊號少 $20bn，觸發投資者質疑 AI infrastructure spending 回報；週四 Nasdaq -1.25%、SOXX 明顯回吐。",
  ],
  [
    "油價與柴油仍是通脹開關",
    "Reuters 指 Trump 對 Iran 談判言論令供應憂慮降溫，但 Brent 仍在 $100 以上。Delta 下調全年 EPS 指引亦直接顯示 fuel cost 正壓住企業 margin。",
  ],
  [
    "消費信心差，但還未變成全面衰退交易",
    "University of Michigan 10 月初值跌至 46.3，current conditions 跌至 44.7；但市場更關注下週 CPI 與財報，暫未把消費疲弱解讀成即時 recession shock。",
  ],
];

const topNews = [
  [
    "1",
    "三大指數週五齊升，收出 record-setting week",
    "AP / Reuters：S&P 500 +0.6%、Dow +0.8%、Nasdaq +0.6%；Reuters 指全週三大指數上升，但 Russell 2000 仍低於上週五，反映 breadth 未完全跟上。",
  ],
  [
    "2",
    "AI / 半導體週四急震：OpenAI revenue 口徑引發估值質疑",
    "Reuters / FT 報導 OpenAI annualized revenue 約 $50bn，低於此前約 $70bn 訊號；市場即時減 AI infrastructure exposure，Intel / AMD / Nvidia / Oracle 等承壓。",
  ],
  [
    "3",
    "SpaceX spectrum deal 改寫電訊股定價",
    "Axios / CNBC：SpaceX 擬收購 Grain Management 的全國 800MHz spectrum portfolio；AT&T、Verizon、T-Mobile 急跌，Crown Castle / American Tower / SBA 等 tower stocks 反升。",
  ],
  [
    "4",
    "Delta 因燃油成本下調全年 profit outlook",
    "Reuters / Delta：全年 adjusted EPS 指引由 $6.50-$7.50 降至 $5.10-$5.60，全年燃油成本預計較去年多約 $6bn；能源成本開始更直接進入企業盈利。",
  ],
  [
    "5",
    "消費信心低迷、下週 CPI 成為 Fed path 關鍵",
    "University of Michigan：10 月 sentiment 46.3，1 年通脹預期 4.7%、長期 3.5%；市場現時傾向 10 月 pause，但 CPI 一熱，12 月加息定價會更硬。",
  ],
];

const heatMapRows = [
  [
    "Energy / XLE",
    "+3.85%（Yahoo ETF 10/2 至 10/8）",
    "綠燈但受 headline 牽動",
    "油價仍高、Brent 守 $100 以上，能源股有 beta；但中東/俄羅斯柴油 headline 會令日內波動好大。",
  ],
  [
    "Consumer Staples / XLP",
    "+3.59%（截至 10/8）",
    "綠燈",
    "市場在高息高油價環境下買防守現金流；不是最性感，但資金有避險需要。",
  ],
  [
    "Utilities / XLU",
    "+3.11%（截至 10/8）",
    "中性偏綠",
    "10Y 仍高但沒有再急升，令 rate-sensitive 防守股短線修復；若 10Y 回上 5.3%，要小心回吐。",
  ],
  [
    "Communication Services / XLC",
    "+1.59%（截至 10/8）",
    "黃燈",
    "大型平台股有支持，但週五 SpaceX spectrum news 對傳統電訊造成劇烈分化，板塊內部不能一概而論。",
  ],
  [
    "Consumer Discretionary / XLY",
    "+1.52%（截至 10/8）",
    "黃燈",
    "TSLA / AMZN 仍有承接，但 Michigan current conditions 跌到低位，消費股要等財報證明 pricing power。",
  ],
  [
    "Technology / XLK",
    "-1.02%（截至 10/8）",
    "黃燈偏紅",
    "OpenAI revenue headline 令市場重新問 AI capex 回報；quality software 週五有反彈，但硬件/半導體仍脆弱。",
  ],
  [
    "Semiconductors / SOXX",
    "-4.35%（截至 10/8）",
    "紅燈",
    "AI trade 暫時進入去槓桿與估值消化；要重拾 leadership，需要 NVDA / AMD / TSM 等財報或訂單重新確認需求。",
  ],
  [
    "Industrials / XLI",
    "-0.91%（截至 10/8）",
    "黃燈偏紅",
    "高油價、運輸成本、美元偏強都壓住工業鏈；Delta 指引下調亦提醒成本壓力不是紙上談兵。",
  ],
];

const flowRows = [
  [
    "U.S. equity funds",
    "Reuters / LSEG Lipper：截至 10/8 一週約流出 $3bn，三週以來首次週度流出",
    "價格升但基金流出，代表投資者不是無腦追高，而是在 CPI / 財報前降低 beta。",
  ],
  [
    "Index breadth",
    "NYSE advancing issues 1.65:1、Nasdaq 1.38:1；但 Nasdaq new lows 209 多於 new highs 41",
    "週五上升面不差，但 Nasdaq 新低數偏多，說明 AI / small growth 底層仍有壓力。",
  ],
  [
    "Sector leadership",
    "ETF 口徑截至 10/8：XLE +3.85%、XLP +3.59%、XLU +3.11%；SOXX -4.35%、XLK -1.02%",
    "資金由純 AI beta 轉去能源、防守與有盈利可見度板塊；不是全面 risk-on。",
  ],
  [
    "Bonds / USD",
    "10Y 約 5.24%，5Y 約 5.02%；DXY 102.23，全週 +0.30%",
    "美元與利率仍偏硬，對非美資產、黃金與 crypto 都是壓力；股票靠 earnings narrative 托住。",
  ],
  [
    "Crypto",
    "BTC -2.36%、ETH -7.09%、SOL -7.91%（Binance Vision 10/2 至 10/9 20:00 UTC）",
    "幣市沒有跟美股 risk appetite；ETH / SOL 跌得更深，反映槓桿資金更謹慎。",
  ],
];

const macroRows = [
  [
    "Fed / 利率路徑",
    "9/16 FOMC 已加息 25bp 至 3.75%-4.00%；SEP median 仍暗示 2026 年內或再加一次",
    "市場現時傾向 10 月先等數據，但 12 月仍是 live meeting；利率不是股票的朋友，只是今週暫時無再惡化。",
  ],
  [
    "FedWatch / prediction market",
    "搜尋到的 10/9 快照顯示 10 月 hold 約 82%-84%、加 25bp 約 16%-20%；12 月加息機率約 73%-81%",
    "白話講：10 月大機會 pause，但不是轉鴿；市場真正擔心的是 12 月和 2027 高息平台。",
  ],
  [
    "Consumer sentiment",
    "University of Michigan 初值：46.3（9 月 48.1）；current conditions 44.7；1 年通脹預期 4.7%、長期 3.5%",
    "家庭對現況好悲觀，且通脹預期抬頭；如果 CPI 再熱，Fed 好難用消費疲弱作轉鴿理由。",
  ],
  [
    "Treasury yields",
    "Yahoo chart：10Y 10/9 約 5.244%，較 10/2 5.277% 微跌；5Y 約 5.021%",
    "長息稍回落令股票可反彈，但 5.2% 以上仍是 valuation cap。S&P 要再擴 multiple，需要 10Y 明顯回落。",
  ],
  [
    "Oil",
    "Yahoo futures：Brent $104.43、WTI $91.66；Reuters 日內報導 Brent 約 $103.18、WTI $91.00，因 Iran headline 降溫",
    "不同口徑有日內/settlement 差異，但共同訊息是：油仍高，通脹與 margin 壓力未解除。",
  ],
  [
    "Gold / USD",
    "Gold futures $4,220.30，全週 +1.39%；DXY 102.23，全週 +0.30%",
    "金價同美元一齊企硬，反映市場同時買避險、通脹 hedge 和美元流動性。",
  ],
  [
    "下週 CPI / PPI / retail",
    "市場預期 9 月 CPI 10/14 公布，headline 受汽油影響偏熱，core 月率或約 0.2%-0.24%；PPI / retail sales 隨後登場",
    "這是下週最大風險：CPI 溫和，股票可鬆一口氣；CPI 熱，12 月加息與 10Y 上行會重新壓估值。",
  ],
];

const stockRows = [
  [
    "NVDA",
    "$230.48；10/2 至 10/8 -1.48%",
    "AI leader 仍是市場核心，但 OpenAI revenue 口徑令投資者開始問 capex ROI。未失 leadership，但不再是單邊追貨。",
  ],
  [
    "AMD / INTC",
    "AMD $620.68（-2.09%）；INTC $107.08（-10.27%），均截至 10/8",
    "半導體內部分化擴大；INTC 跌幅大，說明市場對 AI/CPU 供應鏈不是全面買入，而是更挑質素與盈利兌現。",
  ],
  [
    "AAPL / MSFT",
    "AAPL $340.42（+2.02%）；MSFT $522.61（+0.98%），截至 10/8",
    "大型 quality tech 比半導體穩，尤其現金流與 buyback 能提供估值底；但仍受 10Y 約 5.2% 壓住上限。",
  ],
  [
    "GOOGL / META",
    "GOOGL $348.29（+1.39%）；META $720.89（-0.99%），截至 10/8",
    "平台股未跟半導體大跌，但廣告、AI capex 和監管 headline 仍會令走勢分化。",
  ],
  [
    "TSLA / AMZN",
    "TSLA $375.00（+1.19%）；AMZN $254.06（+1.01%），截至 10/8",
    "消費 discretionary 仍有承接，但 University of Michigan current conditions 低迷，財報要證明需求未轉弱。",
  ],
  [
    "NFLX",
    "$71.57；10/2 至 10/8 +6.73%",
    "流媒體短線跑贏，市場提前看 10/20 Q3 結果；但下週不是 Netflix 財報週，注意不要太早押單一事件。",
  ],
  [
    "JPM / 大型銀行",
    "JPM $331.42；10/2 至 10/8 +0.21%",
    "銀行股真正考試在 10/13 起：NII、credit cost、capital market fees 會決定高息到底是利好還是信貸壓力。",
  ],
  [
    "ORCL",
    "$135.69；10/2 至 10/8 -4.65%",
    "AI infrastructure 故事之外，市場更關心 debt funding、capex 和 free cash flow；高息環境會放大這些疑問。",
  ],
  [
    "Telecom / Towers",
    "Axios 指 T / VZ / TMUS 週五急跌；CCI +15.6%、AMT +9.3%、SBAC +7.3%",
    "SpaceX spectrum deal 令市場重新估傳統無線 moat；但交易仍需 FCC approval，短線反應可能大過基本面落地速度。",
  ],
  [
    "Delta / Airlines",
    "Delta full-year adjusted EPS outlook 下調至 $5.10-$5.60",
    "即使 travel demand 強，fuel cost 仍足以吞 margin。這是高油價對實體企業盈利的最清晰警號。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$82,383.40",
    "-$1,987.66 / -2.36%",
    "Binance Vision BTCUSDT 2026-10-09 20:00 UTC 1m close；對比 10/2 20:00 UTC $84,371.06。",
  ],
  [
    "ETH",
    "$2,479.33",
    "-$189.13 / -7.09%",
    "Binance Vision ETHUSDT 2026-10-09 20:00 UTC 1m close；跌幅大過 BTC，alt beta 較弱。",
  ],
  [
    "SOL",
    "$108.69",
    "-$9.33 / -7.91%",
    "Binance Vision SOLUSDT 2026-10-09 20:00 UTC 1m close；未能跟美股週五反彈。",
  ],
];

const earningsEvents = [
  "10/13 盤前：JPMorgan、Wells Fargo、Citigroup、Goldman Sachs、UnitedHealth、Johnson & Johnson；銀行與醫療會先替 Q3 earnings season 定調。",
  "10/14：September CPI 是下週最大宏觀事件；若 headline 因汽油熱、core 又不降，12 月加息定價會升，10Y 可能再壓估值。",
  "10/14 盤前至 10/15：Bank of America、Morgan Stanley、BlackRock、ASML、TSMC、Charles Schwab、PNC 等，金融與半導體供應鏈同時受考驗。",
  "10/16：Travelers、Regions、Truist 等延續金融/保險財報；留意 credit、catastrophe losses、investment income。",
  "Fed speak / blackout：10/17 前官員講話仍會影響 10 月會議預期；市場現時認為 pause 為主，但任何熱 CPI 都會令口徑轉鷹。",
  "Oil / geopolitics：Brent $100 / $104 / $110 是下週通脹交易三個關鍵位；柴油價格和中東 headline 會直接影響航空、運輸、消費情緒。",
];

const technicalRows = [
  [
    "S&P 500",
    "支撐 7,765 / 7,720；阻力 7,820 / 7,850",
    "10/9 close 7,811.54，已貼近高位；突破要靠 CPI 不熱和財報開局好，失守 7,765 代表週五反彈被否定。",
  ],
  [
    "Nasdaq Composite",
    "支撐 27,190 / 27,000；阻力 27,600 / 27,800",
    "週四低位區 27,190 是短線關鍵；半導體若再跌，Nasdaq 會先測 27,000。",
  ],
  [
    "Russell 2000",
    "支撐 2,790 / 2,760；阻力 2,833 / 2,850",
    "全週仍跌，未能確認 risk-on。若 Russell 重新上 2,850，才代表廣度改善。",
  ],
  [
    "10Y Treasury",
    "5.20% / 5.30% / 5.40%",
    "5.20% 以上仍是 equity multiple 壓力；若 CPI 熱令 10Y 企上 5.30%，growth 會再受壓。",
  ],
  [
    "Brent / WTI",
    "Brent $100 / $104 / $110；WTI $90 / $92 / $95",
    "Brent 守 $100 代表通脹壓力未走；若再上 $110，能源與防守跑贏、航空/消費受壓機率升。",
  ],
  [
    "BTC / ETH",
    "BTC $82k / $80k / $77k；ETH $2,480 / $2,400 / $2,300",
    "BTC 未失 $80k 前只是回調；若 ETH 跌穿 $2,400 而 BTC 也失 $80k，代表 crypto beta 明顯轉弱。",
  ],
];

const watchPlan = [
  [
    "Bull case",
    "CPI core 溫和、10Y 跌回 5.15% 以下、銀行財報未見 credit deterioration、Brent 失守 $100",
    "可分段加回 S&P / Nasdaq quality exposure；優先現金流強、估值可解釋的 mega-cap tech 和金融龍頭。",
  ],
  [
    "Base case",
    "10Y 5.15%-5.30%、Brent $100-$105、CPI 不算熱但不夠冷、銀行財報 mixed",
    "維持 barbell：quality tech + staples/healthcare + 現金；不追 SOXX 反彈，等重新站穩後再加。",
  ],
  [
    "Bear case",
    "CPI 熱、10Y 上穿 5.30%、Brent 重上 $110、Fed 官員重提 10 月加息可能",
    "先減 small caps、high-duration software、半導體 beta；用 S&P 7,720、Nasdaq 27,190 作風控線。",
  ],
  [
    "Crypto plan",
    "BTC 守 $80k 且 ETH 守 $2,400 才算只是回調；若兩者同步失守，代表槓桿風險偏好下降",
    "不加槓桿追反彈；繼續用 Binance 20:00 UTC 定點價格做紀律化比較。",
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

export default function USWeeklyBrief20261010() {
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
        <div className="eyebrow">美股周報懶人包</div>
        <h1>
          三大指數收高，但 AI 震倉、油價高企；下週 CPI 同銀行財報先係真正考試
        </h1>
        <p className="subtitle">
          今週表面係 record-setting week，S&amp;P 500、Dow、Nasdaq
          都升；但細看就見到 Russell 2000 跌、半導體回吐、crypto
          跑輸。白話講：市場仍有承接，不過資金開始問兩個問題：AI
          投資回報係咪值咁貴？高油價同高息會唔會食落企業盈利？
        </p>
        <div className="meta">
          <span className="pill">週期：{reportWeek}</span>
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">格式：週末更新版 / 繁體中文 / 廣東話語氣</span>
          <span className="pill">
            Crypto：Binance Vision 20:00 UTC 1m close
          </span>
        </div>
        <div className="score">
          <div>
            <span>S&amp;P 500 weekly</span>
            <strong>+1.15%</strong>
          </div>
          <div>
            <span>Nasdaq weekly</span>
            <strong>+0.64%</strong>
          </div>
          <div>
            <span>10Y Treasury</span>
            <strong>5.24%</strong>
          </div>
          <div>
            <span>BTC weekly</span>
            <strong>-2.36%</strong>
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
            一句到尾：大市未壞，但市場由「買 AI 故事」進入「驗證 AI
            現金流」階段。下週 CPI 同銀行財報如果過關，S&amp;P 500
            可以繼續磨高；如果 CPI 熱、10Y 再升，今週的高位會變成壓力。
          </div>
        </Card>

        <Card title="2｜大市一眼睇" wide>
          <DataTable
            headers={["指標", "週五收市", "一週變動", "解讀"]}
            rows={indexRows}
          />
          <p className="small">
            指數點位以 AP / Reuters 報導及 Yahoo Finance chart
            交叉核對；週變動用 2026-10-02 close 至 2026-10-09 close 計算。ETF /
            個股 Yahoo 日線在撰寫時多數只更新至
            10/8，所以板塊與個股表格另行標示時點。
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
            Flow 數據同價格方向今週有少少背馳：指數升，但 U.S. equity funds
            流出。解讀上我會當作「投資者在高位先減風險」，不是全面 bearish。
          </div>
        </Card>

        <Card title="7｜宏觀白話版" wide>
          <DataTable headers={["項目", "數據", "白話解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：Fed 未轉鴿、油價未低、消費信心差但通脹預期高。股票要繼續升，
            要靠 earnings 兌現，而不是只靠估值擴張。
          </div>
        </Card>

        <Card title="8｜重點股票與 Crypto" wide>
          <DataTable
            headers={["股票 / 主題", "最新可靠數據", "點睇"]}
            rows={stockRows}
          />
          <h3>BTC / ETH / SOL</h3>
          <DataTable
            headers={["幣種", "10/9 4:00pm ET 附近價", "一週變動", "來源/備註"]}
            rows={cryptoRows}
          />
          <p className="small">
            Binance direct API 在此環境不可用；本文改用 Binance Vision public
            data 的 spot 1-minute kline。時間點為 2026-10-09 20:00:00 UTC，對比
            2026-10-02 同一時間，盡量貼近美股收市 4:00pm ET。
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
              S&amp;P 500 未失 7,765 前不用太悲觀，但 10Y 仍在 5.2%
              以上，不適合無差別追高 beta。做多要買有盈利可見度的領漲股。
            </li>
            <li>
              <strong>中線：</strong>
              AI 主線未死，但市場已開始問 cash flow、capex、debt funding
              和客戶回報。半導體要等重新企穩才加，避免在估值消化期太早 all-in。
            </li>
            <li>
              <strong>風控：</strong>
              用四個警報：S&amp;P 7,720、Nasdaq 27,190、10Y 5.30%、Brent
              $110；兩個同時觸發，先減 beta 再研究。
            </li>
            <li>
              <strong>最終觀點：</strong>
              今週不是熊市訊號，而是高位市的質素測試。升市可以延續，但下週開始要由
              CPI、銀行財報和 AI spending 數據交功課。
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
              指數：AP / Reuters / Yahoo chart 對 10/9 close 基本一致；S&amp;P
              500 Reuters 文章初稿列 7,811.51，AP / Yahoo chart 列
              7,811.54，本文採 AP / Yahoo 口徑。
            </li>
            <li>
              ETF / 個股：Yahoo chart 在撰寫時多數只更新至
              10/8，本文所有相關週變動均標示為 10/2 至 10/8；10/9
              個股如無可靠完整日線，不硬填。
            </li>
            <li>
              Oil：Reuters 日內報價（Brent 約 $103.18、WTI 約 $91.00）與 Yahoo
              futures close（Brent $104.43、WTI
              $91.66）因時間點/連續合約口徑不同而有差異；本文宏觀敘事採
              Reuters，收市表採 Yahoo futures。
            </li>
            <li>
              FedWatch：CME 是即時工具；本文列出的 10 月 / 12 月機率採 10/9
              搜尋快照與 Reuters/市場頁面口徑，之後可能快速變動。
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
