import React from "react";

const reportWeek = "2026-11-16 至 2026-11-20";
const reportDate = "2026-11-22";
const publishedAt =
  "香港時間 2026-11-22 09:05（週日版；數據截至美股 11/20 收市；Crypto 另補 11/21 21:00 UTC 週末快照）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market news for Nov. 20, 2026",
    url: "https://www.cnbc.com/2026/11/19/stock-market-today-live-updates.html",
  },
  {
    name: "AP News - How major US stock indexes fared Friday 11/20/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-c10b797a17c2acf37924d834efebe135",
  },
  {
    name: "Reuters via Investing.com - Nasdaq plunges 5% a day after Anthropic debut",
    url: "https://www.investing.com/news/stock-market-news/nasdaq-plunges-5-a-day-after-anthropic-debut-but-investors-still-believe-in-ai-5042641",
  },
  {
    name: "Reuters - Tech leads global stocks rout, Treasury yields fall",
    url: "https://www.reuters.com/5f374b32b07b/world/china/global-markets-global-markets-2026-11-20/",
  },
  {
    name: "Morningstar - Market Wrap: Stocks Lose 8.51% as Technology and Basic Materials Fall",
    url: "https://www.morningstar.com/markets/market-wrap-stocks-lose-851-technology-basic-materials-fall",
  },
  {
    name: "T. Rowe Price - Global Markets Weekly Update",
    url: "https://www.troweprice.com/en/us/insights/global-markets-weekly-update",
  },
  {
    name: "Reuters via Investing.com - US equity funds draw inflows for a third straight week",
    url: "https://www.investing.com/news/stock-market-news/us-equity-funds-draw-inflows-for-a-third-straight-week-5041601",
  },
  {
    name: "Federal Reserve - Minutes of the FOMC, October 27-28, 2026",
    url: "https://www.federalreserve.gov/monetarypolicy/fomcminutes20261028.htm",
  },
  {
    name: "CNBC - Fed minutes October 2026",
    url: "https://www.cnbc.com/2026/11/18/fed-minutes-october-2026.html",
  },
  {
    name: "CNBC - Waller says Fed may need to shock people with half-point hike",
    url: "https://www.cnbc.com/2026/11/18/federal-reserve-governor-christopher-waller.html",
  },
  {
    name: "MacroMicro - CME FedWatch probability snapshot",
    url: "https://en.macromicro.me/series/78112/probability-fed-rate-400-425-2026",
  },
  {
    name: "CNBC - Warsh wants Fed officials to talk less",
    url: "https://www.cnbc.com/2026/11/20/warsh-fed-forward-guidance-rate-hikes.html",
  },
  {
    name: "CNBC - Gold's slide deepens as AI rout, rate hike bets hurt bullion",
    url: "https://www.cnbc.com/2026/11/20/gold-federal-reserve-price-dollar-metals.html",
  },
  {
    name: "CNBC - Dollar falls as Fed-fueled rally stalls; lower U.S. yields help yen",
    url: "https://www.cnbc.com/2026/11/20/dollar-price-currency-euro-yen.html",
  },
  {
    name: "EnergyNow - Oil Prices Rebound Friday but Fall for Third Straight Week",
    url: "https://energynow.com/2026/11/oil-prices-rebound-friday-on-middle-east-tensions-but-fall-for-third-straight-week-wti-closes-at-83-98-brent-at-92-57/",
  },
  {
    name: "NVIDIA Investor Relations - Q3 FY2027 results",
    url: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Third-Quarter-Fiscal-2027/",
  },
  {
    name: "Reuters - Nvidia accounting focus of SEC investigation",
    url: "https://www.reuters.com/5f374b32b07b/world/us-secs-nvidia-probe-is-examining-potential-accounting-issues-sources-say-2026-11-20/",
  },
  {
    name: "Walmart - Q3 FY2027 earnings release",
    url: "https://corporate.walmart.com/content/dam/corporate/documents/newsroom/2026/11/q3-fy27-earnings/q3-fy27-earnings-release.pdf",
  },
  {
    name: "CNBC - Stock market next week outlook for Nov. 23-27, 2026",
    url: "https://www.cnbc.com/2026/11/20/stock-market-next-week-outlook-for-nov-23-27-2026.html",
  },
  {
    name: "BEA - Release Schedule",
    url: "https://www.bea.gov/news/schedule",
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
  "今週一句講晒：AI 交易由 crowded winner 變成全市場去槓桿核心，Nasdaq 全週 -10.02%、S&P 500 -8.61%，Dow 同 S&P 500 都正式跌入 correction 區域。",
  "週五是全週引爆點：CNBC / AP 指 Nasdaq -5.28%、S&P 500 -3.70%、Dow -1.93%；Reuters 指 SOX 單日 -10.7%、全週 -17.1%。",
  "恐慌指標急升：Yahoo / Cboe 口徑 VIX 收 35.89，全週 +85.96%；Reuters 指 Wall Street fear gauge 創 2025 年 4 月以來最高收市附近。",
  "Nvidia 成為風暴眼：公司 Q3 FY2027 收入 $115.8bn、Data Center $107.6bn，本身業績很強，但 Reuters 報道 SEC accounting probe 後，NVDA 週五約 -14%、全週約 -23%。",
  "宏觀不是救生圈：債券有避險買盤，10Y 跌至約 4.92%-4.95%，但 FedWatch 仍顯示 12 月 25bp 加息機率約 90%-93.5%、50bp tail risk 約 7.2%-10%，高估值股未真正鬆一口氣。",
  "板塊全面紅燈：Morningstar 指美股 total market -8.51%，科技 -11.98%、basic materials -8.39% 最弱；consumer defensives -2.03%、utilities -3.40% 相對硬淨。",
  "資金流數據有滯後但值得留意：LSEG Lipper / Reuters 指截至 11/18 美股基金反而流入 $45.71bn，科技基金 +$10.3bn；即價格已跌，但 fund flow 還未完全 capitulate。",
  "Crypto 同步 risk-off：Binance Vision 11/20 21:00 UTC 顯示 BTC $58,506.27、ETH $1,603.23、SOL $67.59，較 11/13 同時間分別 -15.07%、-17.68%、-15.43%。週末至 11/21 21:00 UTC 有技術反彈：BTC $60,473.15（較週五 +3.36%）、ETH $1,686.93（+5.22%）、SOL $70.58（+4.42%），但未改變週內 risk-off 訊號。",
  "下週是 Thanksgiving 短週，但 11/25 有 PCE、GDP 二次估算、durable goods、jobless claims、新屋銷售；數據如果唔降溫，反彈會好脆弱。",
];

const indexRows = [
  [
    "DJIA",
    "48,147.33",
    "週五 -949.73 / -1.93%；全週 -4,200.22 / -8.02%（T. Rowe / CNBC）",
    "藍籌都守唔住，Dow 與 S&P 500 同入 correction。非科技板塊相對好，但不足以抵銷 AI / growth 去槓桿。",
  ],
  [
    "S&P 500",
    "6,910.39",
    "週五 -265.41 / -3.70%；全週 -651.28 / -8.61%",
    "七連跌，跌穿 7,000 心理位；CNBC 指 RSI 低過 30，短線可能有 oversold bounce，但中期動能已受傷。",
  ],
  [
    "Nasdaq Composite",
    "22,617.73",
    "週五 -1,261.47 / -5.28%；全週 -2,518.54 / -10.02%",
    "今年升幅被抹走，AI / semis / mega-cap growth 是主要壓力。若未能快速收復 23,000，反彈可信度有限。",
  ],
  [
    "Russell 2000",
    "2,581.80",
    "週五 -2.76%；全週 -208.69 / -7.48%",
    "小型股同跌，代表這不是單一科技股事故，而是 risk appetite 全面收縮。高短息與信用風險仍壓住中小型股。",
  ],
  [
    "PHLX SOX",
    "8,408.59",
    "週五 -10.73%；全週 -17.13%（Yahoo / Reuters 方向一致）",
    "半導體是今週最大紅燈。AI supply chain 由估值重估變成信任危機，短線不宜用單日反彈判斷見底。",
  ],
  [
    "VIX",
    "35.89",
    "週五 +26.20%；全週 +85.96%",
    "恐慌已進入 stress zone。VIX 高過 30 代表倉位要先管風險；回落至 28-30 下方才算初步降溫。",
  ],
];

const whyMarketMoved = [
  [
    "Anthropic IPO 變成 sell-the-news",
    "CNBC / Reuters 指 Anthropic 首日曾高見 $115，但週五跌約 8%-9%，收近 $89，未能重燃 AI appetite。市場把它解讀成 AI 私募估值向公開市場轉移風險。",
  ],
  [
    "Nvidia 業績好，但 governance / SEC headline 更大聲",
    "NVDA 官方收入 $115.8bn、Data Center $107.6bn、Q4 指引約 $130bn；但 Reuters 報道 SEC 正研究 accounting issues，令市場由看增長轉去看信任與監管風險。",
  ],
  [
    "利率預期仍 hawkish",
    "Fed minutes 顯示 almost all participants 認為仍需進一步加息；Waller 更提到 12 月可能要 50bp。MacroMicro / CME 與 CNBC 口徑顯示 12 月 25bp 仍是 base case，但 50bp tail risk 已升至約 7.2%-10%，股市難靠降息敘事止血。",
  ],
  [
    "技術面觸發去風險",
    "CNBC 指 S&P 500 失守長期趨勢，Nasdaq-100 盤中入 bear-market territory；當 CTA / systematic strategy 被觸發，跌勢會由基本面變成 flow-driven。",
  ],
  [
    "避險買債但不買黃金",
    "Reuters 指 10Y yield 大跌約 10-12bp 至 4.93%-4.95%，但 CNBC 指金價全週跌約 9.5%。市場是降低風險資產，而不是單純轉買傳統避險。",
  ],
];

const topNews = [
  [
    "1",
    "Nasdaq 全週 -10%，S&P 500 / Dow 入 correction",
    "CNBC / AP：Nasdaq 週五 -5.28%，S&P 500 -3.70%，Dow -1.93%；全週 Nasdaq -10.02%、S&P 500 -8.61%、Dow -8.02%。這是 2020 / 2025 以來級別的大跌週。",
  ],
  [
    "2",
    "Nvidia 由 earnings beat 變成 SEC accounting probe 焦點",
    "NVIDIA IR：Q3 FY2027 收入 $115.8bn、Data Center $107.6bn；Reuters：SEC enforcement staff 正審視潛在會計問題。股價週五約 -14%。",
  ],
  [
    "3",
    "Fed minutes 與 Waller 言論維持加息壓力",
    "Fed 官方 minutes 指進一步加息 likely appropriate；CNBC 報道 Waller 指通脹方向不對，或需以 50bp shock markets。",
  ],
  [
    "4",
    "資金流入仍在，但可能是落後數據",
    "Reuters / LSEG Lipper：截至 11/18，美股基金 +$45.71bn，large-cap +$31.7bn，technology funds +$10.3bn；但價格在 11/19-11/20 明顯惡化，需下週 flow 數據確認是否逆轉。",
  ],
  [
    "5",
    "下週 PCE / GDP / durable goods 集中於 Thanksgiving 前",
    "BEA / CNBC：11/25 8:30am ET 有 October PCE、personal income/outlays、Q3 GDP second estimate、durable goods、jobless claims；11/26 休市、11/27 提早收市。",
  ],
];

const heatMapRows = [
  [
    "Consumer defensives / Staples",
    "Morningstar consumer defensives -2.03%；XLP 4pm proxy 全週 -2.05%",
    "相對綠燈",
    "不是升，而是跌得最少。Walmart 財報加上避險輪動支持防守消費；短線作 barbell 防守端比追 AI 更合理。",
  ],
  [
    "Utilities",
    "Morningstar -3.40%；XLU 4pm proxy -3.07%",
    "相對綠燈",
    "長息下跌有少少幫助，防守需求亦上升；但若 Fed 重新推高長端，utility valuation 仍會受壓。",
  ],
  [
    "Health Care",
    "XLV 4pm proxy 全週 -6.15%",
    "中性偏防守",
    "跌幅比大市細，但 UNH 全週仍 -16.59%，說明板塊內分化很大。只宜揀現金流和指引清晰公司。",
  ],
  [
    "Financials",
    "XLF 4pm proxy 全週 -7.00%",
    "黃燈",
    "避險買債令長息跌，銀行 beta 同時受風險資產拖累。JPM 全週 -10.30%，顯示金融無法完全避開去槓桿。",
  ],
  [
    "Industrials",
    "XLI 4pm proxy 全週 -7.35%",
    "黃燈",
    "跌幅接近 Russell 2000，反映經濟 beta 被拖累；若下週 durable goods 或 PMI 弱，工業未必即刻修復。",
  ],
  [
    "Energy",
    "XLE 4pm proxy 全週 -6.85%；WTI 全週約 -5.2% 至 -5.8%",
    "黃燈",
    "油價連跌三週，能源相對抗跌但缺乏上攻催化。地緣政治 headline 可支持短線，但基本面指向供應壓力。",
  ],
  [
    "Communication services",
    "XLC 4pm proxy 全週 -7.97%",
    "紅黃燈",
    "平台股受 mega-cap growth 和廣告/AI capex 疑慮拖累。若 Nasdaq 未止血，通訊服務難獨善其身。",
  ],
  [
    "Technology",
    "Morningstar technology -11.98%；XLK 4pm proxy -12.49%",
    "紅燈",
    "今週主震央。不是單純估值貴，而是 AI ROI、監管、融資與 governance 同時被重估。",
  ],
  [
    "Semiconductors",
    "SOXX 4pm proxy -17.35%；SOX -17.13%",
    "深紅燈",
    "NVDA -22.92%、AMD -20.54%、AVGO -12.28%。短線只有 oversold trade，不是趨勢修復。",
  ],
  [
    "Crypto beta",
    "BTC -15.07%、ETH -17.68%、SOL -15.43%（Binance Vision）",
    "紅燈",
    "加密貨幣已同步反映去槓桿。若週末反彈但 Nasdaq futures / 現貨未配合，不宜過度解讀。",
  ],
];

const flowRows = [
  [
    "U.S. equity funds",
    "Reuters / LSEG Lipper：截至 11/18 一週淨流入 $45.71bn，連續第三週流入，為 9/23 以來最大週買盤",
    "流入本身偏正面，但樣本截至週三，未完全包括週四/週五急跌。下週同一數據才是判斷是否真正 capitulation 的關鍵。",
  ],
  [
    "Large / mid / small cap funds",
    "Large-cap +$31.7bn；mid-cap -$1.15bn；small-cap -$535mn",
    "資金仍偏好流動性與 mega-cap。這解釋為何 Russell 跌時無承接；中小型股未有資金主動加倉。",
  ],
  [
    "Technology sector funds",
    "Technology funds +$10.3bn，為 6/16 以來最大流入",
    "這是最矛盾的位置：錢在跌前仍買科技，但價格在週四/週五崩。若下週見流出，會確認科技倉位開始被迫降風險。",
  ],
  [
    "Sector rotation",
    "Industrials -$1.23bn、financials -$884mn；sector flows 整體分化",
    "不是全面買風險，較似大額資金在大型股與 ETF 中調倉。板塊紅綠燈要看價格，而不是只看一週 flow。",
  ],
  [
    "Bond funds",
    "U.S. bond funds -$5.58bn；long-term government/Treasury -$2.64bn；high-yield -$2.31bn",
    "即使週五債券反彈，整週 fund flow 仍偏保守。投資者不願拉長 duration，也不想承擔 high-yield credit beta。",
  ],
  [
    "Money market funds",
    "Money market funds -$19.12bn，連續第二週流出",
    "現金流出未等於買股成功，可能只是月內資金調動。若股市再跌，現金收益率仍會吸引資金回流。",
  ],
  [
    "Crypto / listed proxies",
    "COIN 4pm proxy 全週 -20.12%；MSTR -30.30%；BTC -15.07%",
    "股票化 crypto beta 跌得比幣更急，代表槓桿與資產負債表疑慮被放大。這類倉位不適合當防守資產。",
  ],
];

const macroRows = [
  [
    "Fed minutes",
    "Fed 官方：almost all participants judged further action to raise the target range would likely be appropriate；部分官員提到若通脹不利，下一次會議或需考慮超過 25bp",
    "白話講：Fed put 暫時不在場。股市跌不代表 Fed 一定救，因通脹仍是政策主線。",
  ],
  [
    "FedWatch / December FOMC",
    "MacroMicro / CME 快照：12 月 4.00%-4.25%（即 +25bp）機率 93.5%；其他報道時間點約 90%-92.7%，50bp tail risk 約 7.2%-10%（不同截圖時間有尾差）",
    "市場仍將 25bp 視為 base case，但 50bp tail risk 已由低單位數升至高單位數附近。真正影響股市的是這個 tail risk 會否再升，以及 Fed 是否暗示 2027 繼續加。",
  ],
  [
    "Treasury yields",
    "Reuters：10Y 約 4.948%，2Y 約 4.647%，30Y 約 5.333%；Morningstar：10Y 全週由約 5.15% 跌至 4.92%，2Y 由 4.88% 跌至 4.63%",
    "避險買債令 yields 下跌，但仍是高息環境。10Y 未跌穿 4.75%，growth multiple 很難快速回到早前高位。",
  ],
  [
    "USD",
    "CNBC：DXY 週五跌約 0.1% 至 103.80，但仍接近前一日觸及的 103.9、為 2025 年 4 月以來高位附近；11 月以來約 +1.7%",
    "美元強壓 commodity、crypto 和海外收入換算。若 DXY 持續高位，risk assets 反彈會打折。",
  ],
  [
    "Oil",
    "EnergyNow / Reuters settlement：WTI $83.98，週五 +0.93%、全週約 -5.17%；Brent $92.57，週五 +0.64%、全週約 -3.41%",
    "油價回落本應幫 inflation fear，但仍高於舒適區。若中東 headline 重燃，Fed 與大市估值壓力會一起回來。",
  ],
  [
    "Gold / metals",
    "CNBC：spot gold 週五約 $3,518.50，盤中觸及 2025 年 9 月以來低位，週內約 -9.5%；gold futures 約 -4.5% 至 $3,519.10",
    "金價沒有扮演傳統避險，因美元強與加息預期壓住。這更像 liquidity squeeze，而不是單純 risk-off 買黃金。",
  ],
  [
    "Next data",
    "BEA / CNBC：11/25 8:30am ET 發布 October PCE / personal income & outlays、Q3 GDP second estimate；同時有 durable goods、jobless claims；10:00am 有 new home sales",
    "下週雖然交易日短，但宏觀濃度高。PCE 若比預期熱，50bp tail risk 會升；若明顯降溫，才有 relief rally 條件。",
  ],
];

const stockRows = [
  [
    "NVDA",
    "Yahoo 21:00 UTC proxy：$125.53，週五 -14.01%、全週 -22.92%；NVIDIA Q3 FY2027 revenue $115.8bn、Data Center $107.6bn、Q4 revenue outlook $130bn +/-3%",
    "業績強但市場不買帳，因 SEC / leadership / AI capex ROI 一起壓估值。短線要等 accounting headline 澄清和股價企回 $140 才算止血。",
  ],
  [
    "AMD / AVGO / SOXX",
    "AMD $424.39，週五 -13.25%、全週 -20.54%；AVGO $304.41，週五 -12.19%、全週 -12.28%；SOXX 全週 -17.35%",
    "AI chip beta 被一籃子沽。即使基本面有差異，風險控制上要當同一個 crowded trade 處理。",
  ],
  [
    "MSFT / AMZN / GOOGL / META",
    "MSFT 全週 -7.51%、AMZN -7.44%、GOOGL -10.31%、META -12.60%（Yahoo 4pm proxy）",
    "Hyperscalers 原本可能受惠 capex discipline，但今週市場先減 exposure。之後要看 AI spending guidance 會否從負面變正面。",
  ],
  [
    "TSLA / ORCL",
    "TSLA $345.82，全週 -11.38%；ORCL $101.19，全週 -19.27%",
    "高 beta growth 與 AI infrastructure / leverage 故事一齊被壓。未見資金回流前，反彈以 trading bounce 看待。",
  ],
  [
    "WMT / TGT",
    "WMT $127.95，週五 +1.52%、全週 -0.11%；Walmart Q3 revenue $188.8bn、adjusted EPS $0.65、提高 FY27 outlook。TGT 全週 +2.71%",
    "防守零售是少數相對贏家。市場願意買現金流、會員制、廣告與必需消費，比買高估值 AI 更舒服。",
  ],
  [
    "PANW / cybersecurity",
    "PANW $343.32，週五 -5.09% 但全週仍 +6.54%；Yahoo Finance 指季度收入 $3.44bn、NGS ARR +66%，並上調 FY2027 指引",
    "Cybersecurity 是 AI 風暴中少數仍有相對強勢的 software 主題；但估值仍高，追價要小心。",
  ],
  [
    "COIN / MSTR",
    "COIN $101.97，全週 -20.12%；MSTR $77.80，全週 -30.30%；BTC 同期 -15.07%",
    "Listed crypto beta 有槓桿折價。若 BTC 未能企回 $60k，這兩隻未必跟大市 relief rally。",
  ],
  [
    "UNH / Healthcare beta",
    "UNH $339.85，週五 +2.84% 但全週 -16.59%",
    "防守股不是全部安全。醫保個股仍有政策/盈利風險，不能只用 sector label 做風控。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$58,506.27",
    "-$10,377.74 / -15.07%",
    "Binance Vision BTCUSDT 2026-11-20 21:00 UTC 1m close；對比 2026-11-13 21:00 UTC $68,884.01。週末 2026-11-21 21:00 UTC 快照 $60,473.15（較週五 +3.36%）。",
  ],
  [
    "ETH",
    "$1,603.23",
    "-$344.36 / -17.68%",
    "Binance Vision ETHUSDT 2026-11-20 21:00 UTC 1m close；跌幅大過 BTC，反映高 beta 去槓桿。週末 2026-11-21 21:00 UTC 快照 $1,686.93（較週五 +5.22%）。",
  ],
  [
    "SOL",
    "$67.59",
    "-$12.33 / -15.43%",
    "Binance Vision SOLUSDT 2026-11-20 21:00 UTC 1m close；仍未見 alt beta 相對強勢。週末 2026-11-21 21:00 UTC 快照 $70.58（較週五 +4.42%）。",
  ],
];

const earningsEvents = [
  "11/23（Mon）：S&P Global flash manufacturing / services PMI。若服務業價格或 input costs 偏熱，Fed hawkish pricing 會被強化。",
  "11/24（Tue）：Consumer Confidence、Case-Shiller 房價。信心太弱會打擊盈利預期，太強又可能令 Fed 更難轉鴿。",
  "11/25（Wed）：PCE / core PCE、personal income & outlays、Q3 GDP second estimate、durable goods、initial jobless claims、新屋銷售同日發布，是下週最重要一日。",
  "11/26（Thu）：Thanksgiving，美股休市；11/27（Fri）：美股 1:00pm ET 提早收市，流動性較薄，波幅可能被放大。",
  "AI headline watch：Nvidia SEC probe、Anthropic IPO 後續表現、Nvidia / AMD / AVGO 是否有 insider / analyst / regulator 新消息，會直接影響半導體反彈成色。",
  "Crypto weekend watch：BTC 能否重上 $60k 並守住；若 BTC 跌穿 $56k，MSTR / COIN 下週開市可能繼續承壓。",
];

const technicalRows = [
  [
    "S&P 500",
    "支撐 6,900 / 6,800 / 6,650；阻力 7,000 / 7,175 / 7,300",
    "收 6,910.39，剛貼住 6,900。短線可有 technical bounce，但未收復 7,175（11/19 close 附近）前，反彈都屬修復而非轉勢。",
  ],
  [
    "Nasdaq Composite",
    "支撐 22,500 / 22,000 / 21,600；阻力 23,000 / 23,880 / 24,500",
    "收 22,617.73，離 22,500 很近。重上 23,000 才算止血；若跌穿 22,000，AI 去槓桿未完。",
  ],
  [
    "Russell 2000",
    "支撐 2,580 / 2,520 / 2,450；阻力 2,650 / 2,700 / 2,790",
    "收 2,581.80。小型股沒有獨立買盤，需先企回 2,650 才可說 risk appetite 回暖。",
  ],
  [
    "VIX",
    "上方 38 / 40 / 45；下方 32 / 30 / 28",
    "收 35.89。高過 35 代表市場處於 stress。若下週 VIX 回落低過 30，才可把反彈由 oversold bounce 升級。",
  ],
  [
    "10Y Treasury",
    "4.75% / 4.90% / 5.00%",
    "10Y 跌到約 4.92% 但仍高。跌穿 4.75% 才利好 growth valuation；重上 5.00% 則市場會重新殺估值。",
  ],
  [
    "WTI / Brent",
    "WTI $84 / $80；Brent $92.5 / $90 / $96",
    "油價下跌可紓緩通脹，但若 Brent 重上 $96-$100，Fed 與 consumer sentiment 又會受壓。",
  ],
  [
    "BTC / ETH / SOL",
    "BTC $58.5k / $60k / $56k；ETH $1,603 / $1,700 / $1,500；SOL $67.6 / $70 / $62；週末快照 BTC $60.5k、ETH $1,686.9、SOL $70.6",
    "Crypto 週末已重上 $60k / $70，但仍屬急跌後反彈；要連續守住 24-48 小時並見 Nasdaq futures 配合，才算止血。",
  ],
];

const watchPlan = [
  [
    "Bull case",
    "PCE / core PCE 低過預期；10Y 跌穿 4.75%；VIX 回落至 30 下方；S&P 500 收復 7,000 並企穩；NVDA 無新增負面 headline",
    "可以分段買回 quality mega-cap、cybersecurity、防守消費；semis 只買最強的、不要一次過滿倉。",
  ],
  [
    "Base case",
    "短週低流動性；PCE 不冷不熱；10Y 在 4.80%-5.00% 區間；S&P 500 在 6,800-7,100 震盪；VIX 仍在 30-38",
    "維持 barbell：現金 / 短債 / staples / healthcare 配 quality tech。反彈減弱股、保留子彈等 12 月 FOMC 前更清楚訊號。",
  ],
  [
    "Bear case",
    "PCE 熱過預期或 Waller / Fed speakers 推高 50bp tail；VIX 升穿 40；S&P 500 失 6,800；Nasdaq 失 22,000；NVDA / SEC headline 惡化",
    "先降 semis、AI infrastructure、crypto proxies、small caps；用現金和短久期工具保命，等 VIX 轉頭和 credit spreads 穩定。",
  ],
  [
    "Crypto plan",
    "BTC 重上 $60k 後能否守 24-48 小時；若再跌穿 $58.5k 或 $56k，COIN / MSTR premarket 可能繼續弱；美元維持 103.5 以上",
    "不接槓桿刀。若 BTC 守 $60k 並配合美股期貨轉穩，可小注做反彈；否則把週末升幅當作 short-covering。",
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

export default function USWeeklyBrief20261122() {
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
            radial-gradient(circle at top left, rgba(239, 68, 68, 0.16), transparent 32%),
            linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
        }
        .hero {
          border-radius: 28px;
          padding: 34px;
          color: #fff;
          background:
            linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(127, 29, 29, 0.92)),
            radial-gradient(circle at 88% 18%, rgba(248, 113, 113, 0.35), transparent 28%);
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
          color: #fee2e2;
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
          color: #fee2e2;
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
        .score span { display: block; color: #fecaca; font-size: 13px; }
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
          color: #991b1b;
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
          color: #7f1d1d;
          background: #fef2f2;
          font-weight: 800;
        }
        tr:nth-child(even) td { background: #f8fafc; }
        a { color: #b91c1c; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .callout {
          margin-top: 16px;
          padding: 16px;
          border-left: 5px solid #dc2626;
          border-radius: 16px;
          background: #fef2f2;
          color: #7f1d1d;
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
        <h1>AI 估值退潮：Nasdaq 跌 10%，恐慌指標急升</h1>
        <p className="subtitle">
          今週不是普通回調，而是 AI trade、半導體、crypto 與高估值 growth
          同步去槓桿。Nvidia 業績本身交到功課，但 SEC / governance / AI ROI
          headline 令市場不再只看收入增長；同時 Fed 仍然 hawkish，12
          月加息定價未消失。 白話講：短線 oversold bounce
          可以有，但未見真正風險解除。
        </p>
        <div className="meta">
          <span className="pill">週期：{reportWeek}</span>
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">格式：週日版 / 繁體中文 / 廣東話語氣</span>
          <span className="pill">
            Crypto：Binance Vision 21:00 UTC 1m close
          </span>
        </div>
        <div className="score">
          <div>
            <span>S&amp;P 500 weekly</span>
            <strong>-8.61%</strong>
          </div>
          <div>
            <span>Nasdaq weekly</span>
            <strong>-10.02%</strong>
          </div>
          <div>
            <span>VIX weekly</span>
            <strong>+85.96%</strong>
          </div>
          <div>
            <span>BTC weekly</span>
            <strong>-15.07%</strong>
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
            一句到尾：這是「AI 信任危機 + Fed 未轉鴿 + 技術面破位」的組合。
            下週不要急住估底，先看 6,900 / 22,500 / VIX 30-35 / 10Y 4.75%-5.00%
            四條線。
          </div>
        </Card>

        <Card title="2｜大市一眼睇" wide>
          <DataTable
            headers={["指標", "週五收市", "一週變動", "解讀"]}
            rows={indexRows}
          />
          <p className="small">
            指數收市以 CNBC / AP / T. Rowe Price / Yahoo chart 交叉。ETF
            與個股因 Yahoo 日線在本環境只更新至 11/19，本文使用 2026-11-20 21:00
            UTC 1-minute close 作美股 4:00pm ET proxy，並在相關欄位標明。
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
            Flow 最大盲點：LSEG Lipper 截至 11/18，未完整反映 11/19-11/20
            的暴跌。
            所以今週只能說「跌前資金仍買大型科技」，不能說跌後已見真買盤。
          </div>
        </Card>

        <Card title="7｜宏觀白話版" wide>
          <DataTable headers={["項目", "數據", "白話解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：債息週五跌是避險，不是 Fed pivot。真正要看下週 PCE
            有沒有降溫，和 Fed 官員會否繼續把 50bp tail risk 留在枱面。
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
              "11/20 4:00pm ET 附近價",
              "一週變動",
              "來源/備註",
            ]}
            rows={cryptoRows}
          />
          <p className="small">
            Binance direct API 在此環境不可用；本文使用 Binance Vision public
            data 的 spot 1-minute kline。美國冬令時間美股 4:00pm ET = 21:00
            UTC；週報主變動採 2026-11-20 21:00:00 UTC close，對比 2026-11-13
            同一時間；週日版另列 2026-11-21 21:00:00 UTC 週末快照。
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
              可以預期 oversold bounce，但不應把第一日反彈當見底。S&amp;P 500
              未收復 7,000、VIX 未跌回 30 下方前，倉位要細。
            </li>
            <li>
              <strong>中線：</strong>
              AI 主線未必結束，但估值框架由「需求無限」變成「現金流、監管、capex
              ROI、融資成本全部要交代」。
            </li>
            <li>
              <strong>風控：</strong>
              四個警報：S&amp;P 500 失 6,800、Nasdaq 失 22,000、VIX 升穿 40、BTC
              失 $56k；兩個同時出現，先減 beta。
            </li>
            <li>
              <strong>最終觀點：</strong>
              現階段策略是先保命、後揀股。用 staples / healthcare /
              現金短債平衡組合，quality tech 只分段買，semis 和 crypto proxies
              等 volatility 落返先加。
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
              指數：CNBC、AP 與 T. Rowe Price 對 Dow 48,147.33、S&amp;P 500
              6,910.39、Nasdaq 22,617.73 基本一致；Yahoo chart
              有細微尾差，本文採新聞 final close。
            </li>
            <li>
              ETF / 個股：Yahoo daily rows 在本環境截至
              11/19；為貼近週五收市，本文採 Yahoo 2026-11-20 21:00 UTC 1-minute
              close 作 4pm ET proxy，並以 11/13 daily close 計週變動。
            </li>
            <li>
              Sector：Morningstar 使用其 total market / sector methodology；ETF
              proxy 使用 XL 系列與 SOXX，口徑不同會有尾差，本文同時列出來源。
            </li>
            <li>
              FedWatch：CME FedWatch 是即時工具，不同報道時間機率有尾差；本文以
              MacroMicro 11/20 的 93.5%，並交叉 CNBC / 其他報道 25bp 約
              90%-92.7%、50bp 約 7.2%-10% 作區間。
            </li>
            <li>
              Oil / gold / USD：Reuters、CNBC、EnergyNow 因合約、spot/futures
              與時間點不同會有尾差；本文在表格內標示 settlement 或即時快照口徑。
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
