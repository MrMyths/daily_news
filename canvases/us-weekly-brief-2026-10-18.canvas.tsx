import React from "react";

const reportWeek = "2026-10-12 至 2026-10-16";
const reportDate = "2026-10-18";
const publishedAt =
  "香港時間 2026-10-18 09:10（週日複核版；數據截至美股 10/16 收市；週末無新現貨收盤）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Friday 10/16/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-c27809783ae3230b44c26e5ee4bea056",
  },
  {
    name: "AP News - US markets are weighed down by an extended sell-off in the tech sector",
    url: "https://apnews.com/article/stocks-markets-us-ai-oil-tech-warsh-d2655f64db7ec8ae450525d58f97b628",
  },
  {
    name: "Reuters via Kitco - Wall Street tumbles as worries about AI trade and high oil prices weigh",
    url: "https://www.kitco.com/news/off-the-wire/2026-10-16/wall-street-tumbles-worries-about-ai-trade-and-high-oil-prices-weigh",
  },
  {
    name: "Reuters via Euronext - Stocks slip as dollar heads for weekly loss",
    url: "https://live.euronext.com/en/financial-news/stocks-slip-dollar-heads-weekly-loss",
  },
  {
    name: "Reuters via Investing.com - As AI rally wobbles, stock market's spotlight turns to earnings",
    url: "https://www.investing.com/news/stock-market-news/as-ai-rally-wobbles-stock-markets-spotlight-turns-to-earnings-4953575",
  },
  {
    name: "Seeking Alpha - S&P 500 weekly sector performance 10/16/2026",
    url: "https://seekingalpha.com/news/4653966-sp-500-ends-the-week-lower-as-hot-inflation-and-ai-sell-off-weigh-on-stocks",
  },
  {
    name: "Morningstar - Weekly Market Update: Stocks Down as Consumer Defensives Climb and Technology Tumbles",
    url: "https://www.morningstar.com/markets/weekly-market-update-stocks-down-consumer-defensives-climb-technology-tumbles",
  },
  {
    name: "Reuters via Investing.com - US equity funds draw renewed inflows as Treasury yields ease",
    url: "https://ca.investing.com/news/economy-news/us-equity-funds-draw-renewed-inflows-as-treasury-yields-ease-4885164",
  },
  {
    name: "Reuters via Yahoo Finance - Hot September CPI sends rate-hike bets soaring",
    url: "https://finance.yahoo.com/economy/policy/articles/hot-september-cpi-sends-rate-131846678.html",
  },
  {
    name: "BLS - Producer Price Index News Release: September 2026",
    url: "https://www.bls.gov/news.release/archives/ppi_10152026.htm",
  },
  {
    name: "U.S. Census Bureau - Advance Monthly Retail Trade Report: September 2026",
    url: "https://www.census.gov/retail/sales.html",
  },
  {
    name: "BLS - U.S. Import and Export Price Indexes: September 2026",
    url: "https://www.bls.gov/news.release/archives/ximpim_10162026.htm",
  },
  {
    name: "CNBC - Gold set for a weekly drop as traders assess Fed signals",
    url: "https://www.cnbc.com/2026/10/16/gold-gains-on-softer-dollar-but-heads-for-weekly-fall.html",
  },
  {
    name: "CNBC - U.S. Treasury yields waver as traders wrap up volatile week",
    url: "https://www.cnbc.com/2026/10/16/us-treasury-yields-investors-hot-inflation-data-.html",
  },
  {
    name: "Invezz / CME FedWatch snapshot - Fed rate-hold odds jump to 85%",
    url: "https://invezz.com/news/2026/10/16/fed-rate-hold-odds-jump-to-85-even-as-warsh-offers-no-clues-on-policy-path/",
  },
  {
    name: "CNBC - CoreWeave credit default swaps hit distress levels",
    url: "https://www.cnbc.com/2026/10/15/coreweave-credit-default-swaps-hit-distress-levels-as-investors-sour-on-ai-debt.html",
  },
  {
    name: "Reuters via Investing.com - CoreWeave's slump spotlights growing burden of debt behind AI boom",
    url: "https://www.investing.com/news/stock-market-news/coreweave-shares-bonds-slide-further-as-ai-debt-fears-mount-4951350",
  },
  {
    name: "Johnson & Johnson - Q3 2026 results and raised guidance",
    url: "https://www.investor.jnj.com/investor-news/news-details/2026/Johnson--Johnson-reports-Q3-2026-results-raises-2026-guidance/default.aspx",
  },
  {
    name: "Earnings Whispers - Most Anticipated Earnings Releases: October 19-23, 2026",
    url: "https://www.earningswhispers.com/calweek/20261019",
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
  "今日是週日複核版：美股週末無新現貨收盤，所以大市、板塊與技術位仍以 10/16 週五收市為準；Crypto 同樣用 Binance Vision 20:00 UTC（4:00pm ET 附近）定點價。",
  "今週是典型高位震倉：S&P 500 全週 -1.9%、Nasdaq -4.5%，是 6 月以來最差一週；但 Dow +0.7%，反映資金不是全面撤走，而是由 AI beta 轉去防守與能源。",
  "週五收市 AP 口徑：S&P 500 跌 84.62 點至 7,659.44，Dow 跌 175.28 點至 52,002.41，Nasdaq 跌 572.99 點至 26,140.03，Russell 2000 跌 45.90 點至 2,721.37。",
  "最大壓力來自 AI financing：CoreWeave 週五再跌近 12%，本週約跌 25%；債券收益率升穿 15%，市場開始用信用風險去重新定價 AI infrastructure boom。",
  "通脹數據不幫手：9 月 CPI +0.6% m/m、+3.7% y/y；PPI +1.3% m/m、+6.3% y/y；retail sales +0.8%，即經濟仍有韌性但 Fed 更難轉鴿。",
  "油價重新成為估值壓力：Reuters 報 Brent 週五結算升 3.72% 至 $109.86，WTI 亦重上約 $101.41；油價高會同時推通脹預期、壓企業 margin。",
  "資金流有分化：LSEG Lipper 顯示截至 10/14 一週美股基金淨流入 $13.01bn，但科技基金淨流出 $5.21bn，說明買股票不等於買 AI。",
  "Crypto 未完全崩，但繼續跑輸：Binance Vision 10/16 20:00 UTC 1m close，BTC $81,656.01、ETH $2,414.38、SOL $103.68；全週分別 -0.88%、-2.62%、-4.61%。",
];

const indexRows = [
  [
    "DJIA",
    "52,002.41",
    "週五 -175.28 / -0.34%；全週 +347.46 / +0.7%",
    "Dow 靠能源、防守、醫療與部分價值股輪動守住升幅；這不是全面 risk-on，而是資金避開 high-duration AI 後的相對避風港。",
  ],
  [
    "S&P 500",
    "7,659.44",
    "週五 -84.62 / -1.1%；全週 -152.10 / -1.9%",
    "回吐上週 record-setting gains，距離本月高位約 2%；指數仍未失控，但 leadership 由集中 AI 變成防守輪動。",
  ],
  [
    "Nasdaq Composite",
    "26,140.03",
    "週五 -572.99 / -2.1%；全週 -1,226.14 / -4.5%",
    "科技權重令 Nasdaq 成為今週震央；AP 指是五週以來首次週跌，也是 6 月以來最差一週。",
  ],
  [
    "Russell 2000",
    "2,721.37",
    "週五 -45.90 / -1.7%；全週 -85.61 / -3.0%",
    "小型股跟跌，代表壓力不只是 mega-cap；高息與信貸成本仍是 small caps 的估值上限。",
  ],
  [
    "VIX",
    "19.99",
    "週五 +3.53 / +21.45%；全週約 +34.7%（10/9 14.84 起計）",
    "波幅由低位急升，反映市場開始買保險；但仍未到恐慌區，較像高位市的去槓桿。",
  ],
];

const whyMarketMoved = [
  [
    "AI 從敘事變成信用測試",
    "Reuters / CNBC 指 CoreWeave 債券收益率升至約 15%-16%、CDS 超過 1,000bp；市場不再只問 GPU demand，而是問借錢建 data center 的回報與還款能力。",
  ],
  [
    "熱通脹重新推高 Fed risk",
    "CPI、PPI、import prices 同 retail sales 全部偏熱或偏強，令 10 月加息雖未成 base case，但 12 月再加息預期更硬。高息環境最傷 high-duration tech。",
  ],
  [
    "油價升穿心理位",
    "Reuters 報 Brent 結算 $109.86，市場擔心中東供應與 Strait of Hormuz 風險。油升會壓 P/E multiple，同時支持能源股，所以大市內部變得好分裂。",
  ],
  [
    "防守板塊被重新追捧",
    "Seeking Alpha ETF 口徑顯示 XLP +5.02%、XLE +4.90%、XLV +3.29%；投資者不是完全離場，而是由最擠擁的科技交易轉去現金流與通脹受益板塊。",
  ],
  [
    "財報季進入真正考試週",
    "銀行財報開局 mixed，醫療股較穩；下週 Meta、Tesla、Netflix、Lam Research、Texas Instruments、P&G 會直接驗證 AI capex、消費與 margin。",
  ],
];

const topNews = [
  [
    "1",
    "Nasdaq 錄 6 月以來最差一週，S&P 500 亦抹走上週升幅",
    "AP / Reuters：Nasdaq 全週 -4.5%、S&P 500 -1.9%；Dow +0.7% 反映 rotation，但 growth leadership 明顯受壓。",
  ],
  [
    "2",
    "CoreWeave 信用壓力引爆 AI infrastructure 重新定價",
    "CoreWeave 週五跌近 12%、本週約跌 25%；CNBC / Reuters 指 2031 bond yield 升穿 15%，CDS implied default risk 大幅上升。",
  ],
  [
    "3",
    "通脹數據連環偏熱：CPI、PPI、import prices 同 retail sales 都指向高息更久",
    "9 月 CPI +3.7% y/y、PPI +6.3% y/y，import prices +8.1% y/y；市場仍偏向 10 月 hold，但 12 月 hike 機率高。",
  ],
  [
    "4",
    "油價升至高位，能源成少數贏家",
    "Brent 週五結算 $109.86，WTI 約 $101.41；能源股與部分國防/防守股撐住 Dow，但油價高本身亦是通脹與盈利風險。",
  ],
  [
    "5",
    "財報焦點由銀行轉向 mega-cap tech 與 AI capex",
    "Reuters 指下週 Meta、Tesla、Netflix、P&G、Lam Research、Texas Instruments 等公布；市場要看 hyperscalers 能否證明 AI spending 有回報。",
  ],
];

const heatMapRows = [
  [
    "Consumer Staples / XLP",
    "+5.02%（Seeking Alpha ETF 週變動）",
    "綠燈",
    "最清楚的防守輪動；如果油價與利率繼續高，staples 仍有相對承接。",
  ],
  [
    "Energy / XLE",
    "+4.90%",
    "綠燈但波動大",
    "油價升穿 $100 / $110 對能源是支持，但地緣 headline 會令日內波幅好大。",
  ],
  [
    "Health Care / XLV",
    "+3.29%",
    "綠燈",
    "J&J、UNH 類防守增長股受追捧；醫療成為今週從 AI 流出資金的主要停泊位之一。",
  ],
  [
    "Materials / XLB",
    "+2.93%",
    "中性偏綠",
    "通脹與商品價格高企提供支持，但若 growth shock 加深，materials 會受周期風險拖累。",
  ],
  [
    "Utilities / XLU",
    "+2.10%",
    "中性偏綠",
    "10Y 由高位回落一度幫到 utilities；但收益率仍高，追太高要小心。",
  ],
  [
    "Financials / XLF",
    "+1.30%",
    "黃燈",
    "大型銀行財報 mixed，equities trading 強但 FICC 弱；高息有利 NII，但 credit cost 與債市波動是暗湧。",
  ],
  [
    "Technology / XLK",
    "-7.65%",
    "紅燈",
    "今週最弱板塊；AI capex、CoreWeave 債務與高息三重壓力，短線不要急於撈底。",
  ],
  [
    "Semiconductors / SOX / SOXX",
    "PHLX chip index 週五 -2.5%，Reuters 指連跌第八日；SOXX 日內約 -1.8% 至 -4% 口徑不一",
    "紅燈",
    "TSMC / ASML 數字強都頂不住估值與 financing 憂慮，代表市場焦點由需求轉向回報率與資金成本。",
  ],
];

const flowRows = [
  [
    "U.S. equity funds",
    "Reuters / LSEG Lipper：截至 10/14 一週淨流入 $13.01bn，扭轉前一週 $5.1bn 流出",
    "不是全面撤出股票；資金仍願意買美股，但買的是大盤與防守，不是盲追 tech。",
  ],
  [
    "Technology funds",
    "同一份 LSEG Lipper：科技基金淨流出 $5.21bn，為 6/24 以來最大週流出",
    "AI trade 擁擠度開始出清。若下週 Meta / LRCX / TXN 不能交功課，科技基金流出可能延續。",
  ],
  [
    "Large / Mid / Small caps",
    "Large-cap funds +$16.55bn；multi-cap +$2.12bn；small-cap +$541mn；mid-cap -$651mn",
    "資金偏好仍集中在流動性與盈利可見度高的公司；中小型股未形成持續 leadership。",
  ],
  [
    "Bond funds / money market",
    "U.S. bond funds 連續第 26 週流入，最新 +$6.45bn；money market funds 流出 $45.93bn",
    "收益率高吸引 bond allocation；money market 流出部分轉去股票/債券，但不是純風險偏好。",
  ],
  [
    "Market breadth",
    "AP 指 S&P 500 稍多於一半成分股下跌，但科技板塊 75 隻中只有 7 隻上升；Nasdaq new lows 明顯增加",
    "跌勢焦點在科技/AI，但午後賣壓擴散。要確認企穩，先看 equal-weight S&P 能否繼續跑贏 cap-weighted。",
  ],
  [
    "Crypto",
    "BTC -0.88%、ETH -2.62%、SOL -4.61%（Binance Vision 10/9 至 10/16 20:00 UTC）",
    "幣市跌幅細過 Nasdaq，但 ETH/SOL beta 仍弱；暫時不是避險資產，只是槓桿風險資產中較慢調整的一塊。",
  ],
];

const macroRows = [
  [
    "Fed / FedWatch",
    "CME FedWatch 快照：10 月維持利率不變約 85.1%；12 月加 25bp 機率約 88.9%",
    "白話講：市場押 10 月先等，但年內再加一次幾乎變成 base case。Growth stock 最怕這種『唔即刻加，但遲早加』。",
  ],
  [
    "CPI",
    "9 月 CPI +0.6% m/m、+3.7% y/y；core CPI +0.3% m/m、+2.6% y/y",
    "汽油推高 headline，但 core 連續第二個月 +0.3%，代表壓力不只能源。Fed 很難因股市震盪就轉鴿。",
  ],
  [
    "PPI",
    "BLS：final demand PPI +1.3% m/m、+6.3% y/y，為 2022 年 3 月以來最大月升幅",
    "企業成本壓力重新升溫。若不能轉嫁，margin 會被壓；若能轉嫁，CPI 又會更硬。",
  ],
  [
    "Retail sales",
    "Census：9 月 retail and food services sales $745.0bn，+0.8% m/m、+6.3% y/y",
    "消費名義數字仍強，但部分是價格因素。對 Fed 來講，需求未冷即是加息風險未消失。",
  ],
  [
    "Import / export prices",
    "BLS：import prices +1.1% m/m、+8.1% y/y；fuel imports +4.8% m/m；export prices +2.2% m/m、+11.6% y/y",
    "外部價格壓力正在回來，尤其 fuel imports。這與高油價互相印證，是今週最麻煩的宏觀線索。",
  ],
  [
    "Treasury / USD",
    "Reuters：10Y yield 週五約 5.085%；AP 指 10Y 約 5.09%，由週四 5.10% 微跌，早前曾升穿 5.30%。DXY 週五 -0.26%，錄四週以來首個週跌。",
    "債息沒有跟股市一起大跌，代表債券避險 cushion 有限；美元轉弱則幫到黃金和部分海外風險資產。",
  ],
  [
    "Oil / Gold",
    "Brent 週五結算 $109.86（+3.72%），WTI 約 $101.41；Reuters 現貨金約 $4,167.14，CNBC near day-end spot $4,175.34，週跌約 0.4%",
    "油價升是股市估值壓力，金價靠弱美元/避險撐住但受加息預期限制。兩者同時高，代表宏觀不是舒適環境。",
  ],
];

const stockRows = [
  [
    "CoreWeave / AI credit",
    "CRWV 週五約 -11.9%，本週約 -25%；CNBC / Reuters 指 2031 bond yield 約 15%-16%、CDS 超過 1,000bp，債務約 $50bn-$51bn",
    "這是今週 AI selloff 的核心。股價問題背後是融資成本和 cash flow 能否支持 data center 擴張。",
  ],
  [
    "NVDA / AVGO / MU / INTC",
    "Investing 表：NVDA $214.13（-1.43%）、MU $878.84（-5.63%）；MarketScreener 顯示 AVGO -4.52%；AP 指 INTC -5.8%",
    "Chip selloff 已由估值調整變成整個供應鏈去 beta。下週 LRCX / TXN 會是半導體需求與庫存的測試。",
  ],
  [
    "META / MSFT / AAPL",
    "Investing 表：META $709.33（-3.72%）、MSFT $529.05（-1.93%）、AAPL $343.46（+0.43%）",
    "大型平台股分化。META 下週財報最重要，市場要聽 AI capex 回報；AAPL 相對穩但不是 leadership。",
  ],
  [
    "TSLA / SpaceX",
    "Investing 表：TSLA $354.72（-2.13%）、SPCX $146.03（-1.74%）；Tesla / SpaceX 下週為焦點之一",
    "市場會把 Tesla 需求、margin、Roadster headline 與 SpaceX AI/space spending 一併定價，波幅會高。",
  ],
  [
    "大型銀行",
    "JPM EPS 低於預期；GS equity trading 強；C、WFC headline 有亮點但股價反應差；Reuters 指 FICC 在多間銀行轉弱",
    "銀行財報顯示高息不是單向利好：equities trading 好，但債市波動、存款成本與 credit risk 仍在。",
  ],
  [
    "UNH / JNJ / Healthcare",
    "UNH 調整 EPS $4.69 並上調 2026 guidance；J&J Q3 revenue $25.4bn、adjusted EPS $2.59，亦上調全年 guidance",
    "醫療成為防守增長交易。若 AI 資金繼續流出，healthcare 可能繼續吸資。",
  ],
  [
    "Energy / Defense winners",
    "Reuters 表：TRGP +4.37%、FANG +4.28%、KMI +4.19%；NOC +4.05%、RTX +3.73%、LMT +3.65%",
    "油價與地緣風險同時支持 energy / defense；但若油價升太急，反而會傷整體市場風險偏好。",
  ],
  [
    "Consumer staples / PG",
    "XLP 全週 +5.02%；P&G 下週 10/22 盤前公布，會驗證定價能力與消費韌性",
    "今週防守股跑贏，不代表基本面無壓力。P&G 如果指引弱，staples rotation 會受考驗。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$81,656.01",
    "-$727.39 / -0.88%",
    "Binance Vision BTCUSDT 2026-10-16 20:00 UTC 1m close；對比 10/9 20:00 UTC $82,383.40。",
  ],
  [
    "ETH",
    "$2,414.38",
    "-$64.95 / -2.62%",
    "Binance Vision ETHUSDT 2026-10-16 20:00 UTC 1m close；跌幅大過 BTC，alt beta 較弱。",
  ],
  [
    "SOL",
    "$103.68",
    "-$5.01 / -4.61%",
    "Binance Vision SOLUSDT 2026-10-16 20:00 UTC 1m close；全週繼續跑輸 BTC / ETH。",
  ],
];

const earningsEvents = [
  "10/19：NAHB Housing Market Index；區域銀行如 Fifth Third、Zions 開始延續金融財報線索，留意 credit 與存款成本。",
  "10/20：Netflix、GE Aerospace、RTX、GM、Capital One 等；同日美國 housing starts / building permits，會影響 rate-sensitive sectors。",
  "10/21：Meta、Tesla、Lam Research、Texas Instruments、IBM、AT&T 等；這是下週最重要一日，直接測試 AI capex、EV demand、半導體訂單。",
  "10/22：Procter & Gamble、Lockheed Martin、American Airlines、Blackstone、Comcast 等；看消費品定價力、國防 backlog、航空 fuel cost。",
  "10/23：American Express、SLB，以及 October PMI 初值；若 PMI 仍強而通脹又熱，Fed 12 月加息定價會更硬。",
  "Fed path：10 月 FOMC 在 10/27-10/28；市場暫押 10 月 hold、12 月 hike。任何官員口徑或油價 shock 都會令短端利率重新波動。",
];

const technicalRows = [
  [
    "S&P 500",
    "支撐 7,630 / 7,600 / 7,510；阻力 7,744 / 7,812 / 7,845",
    "7,659 收近全日低位，短線先看能否收復 10/15 close 7,744；若失 7,600，代表 AI selloff 開始拖累大盤。",
  ],
  [
    "Nasdaq Composite",
    "支撐 26,140 / 26,000 / 25,700；阻力 26,713 / 27,000 / 27,366",
    "週五收在 26,140 附近，等於把風險留到週末。要改善，至少要重新站回 26,700-27,000。",
  ],
  [
    "Russell 2000",
    "支撐 2,721 / 2,700 / 2,650；阻力 2,767 / 2,807 / 2,850",
    "Small caps 全週 -3%，未能做價值避風港。若跌穿 2,700，會確認市場擔心信貸和經濟放慢。",
  ],
  [
    "10Y Treasury",
    "5.05% / 5.10% / 5.20% / 5.30%",
    "5.10% 附近暫時企穩；如果油價推通脹預期令 10Y 重返 5.20%-5.30%，growth multiple 會再被壓。",
  ],
  [
    "Brent / WTI",
    "Brent $105 / $110 / $115；WTI $100 / $101.4 / $105",
    "Brent 已接近 $110，這是大市 P/E 的壓力位；若升穿 $115，能源股受惠但大盤可能更弱。",
  ],
  [
    "BTC / ETH / SOL",
    "BTC $82.4k / $81.7k / $80k；ETH $2,480 / $2,414 / $2,350；SOL $108.7 / $103.7 / $100",
    "Crypto 要守住心理位才算只是慢跌；BTC 失 $80k 或 SOL 失 $100，會確認槓桿風險偏好轉弱。",
  ],
];

const watchPlan = [
  [
    "Bull case",
    "下週 Meta / Tesla / LRCX 財報能證明 AI capex 有回報；Brent 回落至 $105 以下；10Y 跌穿 5.05%；S&P 重上 7,812",
    "可逐步加回 quality growth，但仍以現金流強、負債低、估值能解釋的公司為先；半導體等確認再追。",
  ],
  [
    "Base case",
    "10Y 5.05%-5.20%、Brent $105-$112、財報 mixed、Nasdaq 在 26,000-27,000 區間震盪",
    "維持 barbell：defensives / healthcare / energy + 少量 mega-cap quality；避免高槓桿 AI infrastructure 和盈利未兌現公司。",
  ],
  [
    "Bear case",
    "CoreWeave / AI credit 壓力擴散、Brent 升穿 $115、10Y 回上 5.30%、Nasdaq 失 26,000、VIX 穩在 22 以上",
    "先減 beta、small caps、semis、high-duration software；保留現金與防守板塊，等信用市場穩定再部署。",
  ],
  [
    "Crypto plan",
    "BTC 守 $80k 但 ETH / SOL 繼續弱，代表只是 risk-off 降槓桿；若 BTC 同步跌穿 $80k，風險會升一級",
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

export default function USWeeklyBrief20261018() {
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
        <div className="eyebrow">美股周報懶人包｜週日複核版</div>
        <h1>AI 信仰震倉、油價再上；Nasdaq 急跌，週日複核維持防守策略</h1>
        <p className="subtitle">
          今期是週日複核版：因美股週末休市，主要市場數據與週六版一致，重點是整理可執行觀察清單。今週不是簡單的「跌市」，而是市場重新分辨邊啲盈利和現金流頂得住高息。AI
          infrastructure
          由增長故事變成信用測試，油價升穿高位令通脹壓力重臨；同時能源、醫療、staples
          仍有資金流入。白話講：大市未全面壞，但最擠擁的 AI / 半導體 trade
          要先消化。
        </p>
        <div className="meta">
          <span className="pill">週期：{reportWeek}</span>
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">格式：週日複核版 / 繁體中文 / 廣東話語氣</span>
          <span className="pill">
            Crypto：Binance Vision 20:00 UTC 1m close
          </span>
        </div>
        <div className="score">
          <div>
            <span>S&amp;P 500 weekly</span>
            <strong>-1.9%</strong>
          </div>
          <div>
            <span>Nasdaq weekly</span>
            <strong>-4.5%</strong>
          </div>
          <div>
            <span>10Y Treasury</span>
            <strong>5.09%</strong>
          </div>
          <div>
            <span>BTC weekly</span>
            <strong>-0.88%</strong>
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
            一句到尾：今週是「AI 去槓桿 + 防守輪動 +
            高油價高息」的組合。未必等於熊市開始，但下週財報如果未能證明 AI
            capex 有回報，Nasdaq 仍會先受壓。
          </div>
        </Card>

        <Card title="2｜大市一眼睇" wide>
          <DataTable
            headers={["指標", "週五收市", "一週變動", "解讀"]}
            rows={indexRows}
          />
          <p className="small">
            指數點位以 AP News / Reuters 交叉核對；週末沒有新現貨收盤，故沿用
            10/16 close。週變動用 2026-10-09 close 至 2026-10-16 close 計算。VIX
            採 Yahoo / Tallac Options 口徑；FRED VIX 在撰寫時仍只更新至
            8/26，未用作同日數據。
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
            Flow 同 price
            今週的重點是分化：美股基金有淨流入，但科技基金大幅流出。解讀上不是「所有人撤出美股」，而是「資金開始避開最擠擁的
            AI 風險」。
          </div>
        </Card>

        <Card title="7｜宏觀白話版" wide>
          <DataTable headers={["項目", "數據", "白話解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：數據越強、通脹越熱，Fed 越難救市；油價越高，企業 margin
            與消費信心越難舒服。股票要回穩，今次要靠財報質素，不可以只靠估值擴張。
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
              "10/16 4:00pm ET 附近價",
              "一週變動",
              "來源/備註",
            ]}
            rows={cryptoRows}
          />
          <p className="small">
            Binance direct API 在此環境不可用；本文改用 Binance Vision public
            data 的 spot 1-minute kline。時間點為 2026-10-16 20:00:00 UTC，對比
            2026-10-09 同一時間，盡量貼近美股收市 4:00pm ET。
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
              S&amp;P 500 仍在 7,600 上方，不用把一次 AI 去槓桿直接當熊市；但
              Nasdaq 未重上 26,700 前，反彈都要先當技術性修復。
            </li>
            <li>
              <strong>中線：</strong>
              AI 主線未死，但市場開始由 revenue dream 轉向 debt funding、capex
              ROI 和 free cash
              flow。未有數字證明前，不宜再用上半年估值倍數去追。
            </li>
            <li>
              <strong>風控：</strong>
              四個警報：Nasdaq 26,000、S&amp;P 7,600、10Y 5.30%、Brent
              $115；兩個同時觸發，先減 beta，再慢慢揀股。
            </li>
            <li>
              <strong>最終觀點：</strong>
              今週是 leadership
              rotation，不是全市場崩盤。策略上買防守與盈利可見度，等 AI / semis
              用財報重新贏回信任。
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
              指數：AP News table 列 S&amp;P 500 7,659.44、Dow 52,002.41、Nasdaq
              26,140.03、Russell 2000 2,721.37；Reuters / MarketScreener
              初稿曾列 S&amp;P 500 7,658.62、Dow 51,990.05、Nasdaq
              26,137.85，本文採更新後 AP News table
              作收市主口徑。週日無新現貨收盤，因此 10/18 版沿用 10/16 收市數據。
            </li>
            <li>
              Sector：Seeking Alpha ETF 表列 XLK -7.65%；Morningstar US sector
              methodology 列 technology -6.49%。兩者分類/ETF
              口徑不同，本文熱度圖以 Seeking Alpha ETF 表為主，並在敘事中標明
              Morningstar 為交叉參考。
            </li>
            <li>
              VIX：Yahoo Finance / Tallac Options 列 10/16 close
              19.99；部分交易桌 recap 有 20.07 / 20.16。本文採 Yahoo / Tallac
              歷史表 19.99，並標明 FRED 尚未更新。
            </li>
            <li>
              Oil / gold：Reuters 結算 Brent $109.86；WTI 來源有 $101.41
              及盤中約 $95-$98 差異，因合約與時間點不同。Gold 現貨 Reuters 約
              $4,167.14，CNBC near day-end $4,175.34；本文同時列出差異。
            </li>
            <li>
              FedWatch：CME FedWatch 是即時工具；本文採 10/16 搜尋快照（10 月
              hold 約 85.1%、12 月 hike 約 88.9%），實際機率會隨 Fed
              speak、油價與數據快速變動。
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
