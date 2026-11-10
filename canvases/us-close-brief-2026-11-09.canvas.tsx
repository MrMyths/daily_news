import React from "react";

const reportDate = "2026-11-09";
const publishedAt =
  "香港時間 2026-11-10 09:00（週二更新；數據截至美股 11/09 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "Reuters via Euronext - Stocks jump as oil tumbles, Nvidia falls amid internal probe",
    url: "https://live.euronext.com/en/financial-news/stocks-jump-oil-tumbles-nvidia-falls-amid-internal-probe",
  },
  {
    name: "CNBC - Stock market news for Nov. 9, 2026",
    url: "https://www.cnbc.com/2026/11/08/stock-market-today-live-updates.html",
  },
  {
    name: "AP News - How major US stock indexes fared Monday 11/9/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-f7ec9680fc858e3c2505913e7b3a54e2",
  },
  {
    name: "CNBC quotes - Dow / S&P 500 / Nasdaq / Russell 2000 / VIX",
    url: "https://www.cnbc.com/quotes/.DJI,.INX,.IXIC,RUT,VIX",
  },
  {
    name: "Yahoo Finance historical - SOXX",
    url: "https://finance.yahoo.com/quote/SOXX/history/",
  },
  {
    name: "Reuters via Yahoo Finance - Wall St jumps as oil slide cools inflation worries",
    url: "https://finance.yahoo.com/markets/stocks/articles/wall-st-futures-rise-rough-103539344.html",
  },
  {
    name: "CNBC - Treasury yields rise ahead of CPI",
    url: "https://www.cnbc.com/2026/11/09/us-treasurys-bonds-yields.html",
  },
  {
    name: "Morningstar / Dow Jones Data Talk - 10-year Treasury yield close",
    url: "https://www.morningstar.com/news/dow-jones/202611099292/10-year-treasury-yield-rises-to-4863-data-talk",
  },
  {
    name: "CME FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Investing.com - Fed hike probability and CPI setup",
    url: "https://www.investing.com/news/economy-news/fed-going-to-have-little-patience-with-inflation-russell-investments-5012976",
  },
  {
    name: "Reuters via Euronext - Oil down as Trump signals restraint on Iran",
    url: "https://live.euronext.com/en/financial-news/oil-down-more-7-barrel-post-settlement-trade-trump-signals-restraint-iran",
  },
  {
    name: "CNBC - Gold climbs as softer oil eases inflation worries",
    url: "https://www.cnbc.com/2026/11/09/gold-gains-more-than-1percent-as-softer-oil-prices-ease-inflation-worries.html",
  },
  {
    name: "Reuters via Euronext - Dollar nudges lower as AI, Mideast worries ease",
    url: "https://live.euronext.com/en/financial-news/dollar-nudges-lower-ai-mideast-worries-ease",
  },
  {
    name: "CNBC - Dollar weakens against euro and yen",
    url: "https://www.cnbc.com/2026/11/09/us-dollar-holds-onto-payrolls-gains-nz-dollar-rises-after-election.html",
  },
  {
    name: "CNBC - Stocks making the biggest moves / AMD, Nvidia, Eli Lilly",
    url: "https://www.cnbc.com/2026/11/09/stock-market-movers-live-updates.html",
  },
  {
    name: "Investing.com - AMD, Applied Materials among market cap movers",
    url: "https://www.investing.com/news/stock-market-news/amd-applied-materials-among-market-cap-stock-movers-on-monday-93CH-5013028",
  },
  {
    name: "Reuters via Investing.com - FDA orders new GLP-1 eye-risk warnings",
    url: "https://www.investing.com/news/stock-market-news/us-fda-orders-new-eye-risk-warnings-for-ozempic-zepbound-5012770",
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

const keyPoints = [
  "美股星期一係廣泛 relief rally：Dow 52,389.75（+1,104.02 / +2.15%）、S&P 500 7,549.94（+173.08 / +2.35%）、Nasdaq 25,253.14（+673.71 / +2.74%），S&P 500 創 4月8日以來最大單日升幅。",
  "升市主因係油價急跌降溫通脹恐懼，加上市場低吸上週急跌的 AI / chip beta；Reuters 指 Philadelphia Semiconductor Index +6.9%，Broadcom +8.8%、AMD +13.3%。",
  "今次比上週五健康：11 個 S&P 500 板塊全升、9 個升逾 1%；Industrials、Technology、Consumer Discretionary 領先，VIX 跌至 19.92（-22.31%）。",
  "但 Nvidia 係例外：NVDA -4.27% 至 $178.67，因 CEO Jensen Huang 相關內部調查消息拖累；市場暫時將它視作公司特定風險，而非整個 AI trade 崩盤。",
  "宏觀仍有 Fed 風險：10Y yield 約 4.86%-4.88%，CME / 市場報道顯示 12月加息機率由約 78% 升至 84%-85%；11/10 CPI 係下一個大考。",
  "Crypto 以 Binance Vision 2026-11-09 21:00 UTC 1m close（美股 4:00pm ET）計：BTC $74,802.00（較 11/06 同時間 -1.45%）、ETH $2,127.41（-4.62%）、SOL $86.56（-3.82%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "52,389.75",
    change: "+1,104.02 / +2.15%",
    read: "Dow 大升逾千點，CNBC 指 Goldman Sachs、Caterpillar 等藍籌支持升勢；收復上週部分 election / AI regulation shock。",
  },
  {
    asset: "S&P 500",
    close: "7,549.94",
    change: "+173.08 / +2.35%",
    read: "S&P 500 創 4月8日以來最佳單日表現；油價跌、收益率未失控，令估值壓力短線舒緩。",
  },
  {
    asset: "Nasdaq Composite",
    close: "25,253.14",
    change: "+673.71 / +2.74%",
    read: "Nasdaq 由 AI / chip dip-buying 帶動，但升勢避開 Nvidia；代表資金仍想買 AI beta，只係更挑剔。",
  },
  {
    asset: "Russell 2000",
    close: "2,840.81",
    change: "+86.71 / +3.15%",
    read: "小型股跑贏大盤，反映 risk appetite 比上週五更闊；但高利率環境下仍要睇 10Y 能否停留在 4.75%-5.00% 區間。",
  },
  {
    asset: "VIX",
    close: "19.92",
    change: "-5.72 / -22.31%",
    read: "VIX 跌穿 20，恐慌明顯降溫；不過 CPI 前夕波動壓低，未必代表風險已完全消化。",
  },
];

const sectorRows = [
  [
    "Semiconductors / SOXX",
    "$146.76 / +7.49%",
    "最強",
    "SOXX 大幅反彈；Reuters 指 Philadelphia Semiconductor Index +6.9%，上週曾跌逾 12%。Broadcom、AMD 是最大推手，Nvidia 反而係少數拖累。",
  ],
  [
    "Industrials / XLI",
    "$168.89 / +3.82%",
    "最強",
    "工業股領先，反映升勢不止科技；資料中心電力、設備及 cyclicals 一齊受惠於 risk-on。",
  ],
  [
    "Technology / XLK",
    "$170.88 / +3.73%",
    "強",
    "科技整體大升，即使 Nvidia 下跌，Apple、Microsoft、AMD、Broadcom 等抵銷壓力。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$121.01 / +2.92%",
    "強",
    "Tesla、Amazon 等高 beta 消費科技跟升；低油價亦有助消費情緒。",
  ],
  [
    "Communication Services / XLC",
    "$107.36 / +2.45%",
    "偏強",
    "Alphabet、Meta 受益於 megacap risk-on；但板塊升幅略低於 chip / industrial beta。",
  ],
  [
    "Health Care / XLV",
    "$188.33 / +1.91%",
    "偏強",
    "Eli Lilly、J&J 因藥物數據消息向好；FDA GLP-1 眼疾警示未有明顯嚇退投資者。",
  ],
  [
    "Materials / XLB",
    "$52.94 / +1.91%",
    "偏強",
    "美元回落幫到材料股；同時 risk-on 擴散至 cyclicals。",
  ],
  [
    "Utilities / XLU",
    "$43.79 / +1.53%",
    "中性",
    "Utilities 跟市反彈，但收益率仍高，板塊不是今日主線。",
  ],
  [
    "Financials / XLF",
    "$57.99 / +1.45%",
    "中性",
    "銀行跟隨大市，但 Capital One 等信用卡 issuer 受 Warren 10% 利率上限議題壓住。",
  ],
  [
    "Real Estate / XLRE",
    "$44.64 / +1.45%",
    "中性",
    "REIT 受惠 VIX 回落，但 10Y 仍近 4.86%-4.88%，估值壓力未走。",
  ],
  [
    "Consumer Staples / XLP",
    "$90.89 / +0.90%",
    "偏弱",
    "防守消費係升市中相對落後，反映資金由 defensive 轉返 growth / cyclical beta。",
  ],
  [
    "Energy / XLE",
    "$61.94 / +0.52%",
    "最弱",
    "油價急跌，能源股只微升；市場將低油價視作大市利好，但能源盈利預期受壓。",
  ],
];

const macroRows = [
  {
    topic: "Fed / CPI 定價",
    data: "CNBC 指市場等 11/10 CPI，Dow Jones 預期 headline CPI +0.3% MoM、core +0.2% MoM；Investing.com / CME FedWatch 口徑顯示 12月加息機率約 84.5%，較前一日 76.3% 上升。另有即市來源在 11/09 早段報約 78%。",
    meaning:
      "股市今日靠油價跌與低吸反彈，但 Fed 定價未轉鴿。若 CPI 高過預期，今日反彈可能會被更高收益率重新測試。",
  },
  {
    topic: "美債息",
    data: "Morningstar / Dow Jones Data Talk：10Y yield 3pm ET 收 4.863%，日升 0.004pct；CNBC 即市報 2Y 約 4.561%、10Y 約 4.876%、30Y 約 5.264%。",
    meaning:
      "10Y 未大幅抽升，令 growth multiple 有喘息位；但 4.75%-5.00% 仍是高利率區間，長 duration 股票不能當作無風險追。",
  },
  {
    topic: "美元",
    data: "Reuters 匯市文報美元指數日內跌約 0.3% 至 101.88；CNBC 午間口徑報 DXY 跌 0.37% 至 101.84，因中東風險降溫與 risk appetite 改善。",
    meaning:
      "美元回落幫到黃金、材料及海外收入較多的 megacap；但上週強就業後美元仍未完全失去支撐。",
  },
  {
    topic: "原油",
    data: "Reuters：WTI settle $86.85（-$3.98 / -4.38%），Brent settle $92.57（-$5.75 / -5.85%），因特朗普稱只要談判有進展，不太可能再對伊朗發動新攻擊。",
    meaning:
      "油價急跌即時紓緩通脹與消費壓力，是今日股市上升的核心宏觀催化；但對能源股是負面。",
  },
  {
    topic: "黃金",
    data: "CNBC：spot gold 日內升約 1.6% 至 $4,129.28，December gold futures settle $4,114.50（+1%）；美元轉弱與油價降溫支持貴金屬。",
    meaning:
      "股市升、黃金亦升，顯示市場不是純粹 all-in risk-on，而是在 CPI 前同時買入美元走弱 / 通脹舒緩交易。",
  },
  {
    topic: "市場廣度 / 成交",
    data: "Reuters：11 個 S&P 500 板塊全升、9 個升逾 1%；S&P 500 有 16 個 52週新高 / 3 個新低，Nasdaq 有 103 個新高 / 164 個新低，成交約 18.98bn 股，略高於 20日均量 18.72bn。",
    meaning:
      "升勢比上週五闊，但 Nasdaq 新低仍多過新高，反映高 beta 裡面仍有受傷名單。",
  },
  {
    topic: "Crypto / 流動性",
    data: "Binance Vision 21:00 UTC：BTC $74,802.00、ETH $2,127.41、SOL $86.56，較 11/06 同時間分別 -1.45%、-4.62%、-3.82%。",
    meaning:
      "Crypto 無跟足 Nasdaq 反彈，甚至 ETH / SOL 明顯回落；這是今日 risk-on 的最大保留位。",
  },
];

const stockRows = [
  [
    "Semis：AMD / AVGO / SOXX",
    "AMD +13.26% 至 $508.58；AVGO +8.78% 至 $319.48；SOXX +7.49% 至 $146.76",
    "晶片股是今日升市火車頭。AMD 受 Oppenheimer 上調評級與 AI data-center 增長敘事支持；Broadcom、Applied Materials、Lam Research 等亦跟升。",
  ],
  [
    "Nvidia",
    "NVDA -4.27% 至 $178.67；盤中一度跌更深",
    "Nvidia 因 CEO Jensen Huang 相關內部調查消息逆市下跌，成為 chip index 少數拖累；今次市場暫未把事件擴散成全行業風險。",
  ],
  [
    "Megacap Tech",
    "CNBC：Amazon 約 +3%、Tesla 約 +5.5%、Alphabet 約 +1%、Microsoft 近 +3%",
    "Magnificent 7 除 Nvidia 外普遍反彈，反映資金認為上週 AI selloff 有過度沽售成分。",
  ],
  [
    "AI infrastructure / earnings watch",
    "CoreWeave、Cisco、Applied Materials 本週公布業績；CoreWeave 收 $48.98（+5.56%）",
    "市場焦點由政策風險轉向 AI capex 能否賺到錢，尤其 CoreWeave 的融資成本、訂單 backlog、客戶承諾。",
  ],
  [
    "Industrials / power equipment",
    "GE Vernova +6.65%、Caterpillar +6.39%；Constellation Energy 升逾 10%",
    "AI data-center 電力與基建供應鏈反彈，令 XLI 成為最強板塊之一。",
  ],
  [
    "Healthcare：LLY / JNJ / GLP-1",
    "CNBC：Eli Lilly 升逾 4%、J&J 升逾 2%；Reuters：FDA 要 GLP-1 加入罕見眼疾風險警示",
    "Lilly 口服減重藥 Foundayo 睡眠窒息 late-stage 數據正面；FDA 警示屬風險提示，但市場反應溫和。",
  ],
  [
    "Financial regulation：COF",
    "Capital One $198.58（-1.63%）",
    "Elizabeth Warren 準備接掌 Senate Banking Committee，10% 信用卡利率上限議題拖累信用卡 issuer。",
  ],
  [
    "BTC / ETH / SOL",
    "BTC -1.45%；ETH -4.62%；SOL -3.82%（對 11/06 21:00 UTC）",
    "Crypto 明顯跑輸 Nasdaq，代表股票市場的 short-covering 未完全傳導到鏈上 beta。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$74,802.00",
    "-$1,101.00 / -1.45%",
    "BTC 失守 $75k 附近，美股大升都未能帶動它回上週五 4pm ET 水平；短線要先重上 $75,900-$76,500 才算修復。",
  ],
  [
    "ETH",
    "$2,127.41",
    "-$103.09 / -4.62%",
    "ETH 跑輸 BTC，鏈上 beta 轉弱；$2,100 是近期心理支持，跌穿會令風險胃納訊號更差。",
  ],
  [
    "SOL",
    "$86.56",
    "-$3.44 / -3.82%",
    "SOL 跌穿 $90，與上週報告的心理位相反；要先收復 $89-$90，否則高 beta crypto 仍弱。",
  ],
];

const newsItems = [
  "Reuters / CNBC：三大指數全線升逾 2%，S&P 500 創 4月8日以來最佳單日；主因是油價急跌與上週 AI selloff 後低吸。",
  "Reuters：WTI -4.38%、Brent -5.85%，因特朗普稱只要與伊朗談判有進展，不太可能再下令新攻擊。",
  "Reuters：Philadelphia Semiconductor Index +6.9%，上週跌逾 12% 後大反彈；Broadcom +8.8%、AMD +13.3%，Nvidia 逆市 -4.2%。",
  "CNBC：11/10 CPI 前，市場預期 headline +0.3% MoM、core +0.2% MoM；FedWatch / 市場報道顯示 12月加息機率升至約 84%-85%。",
  "CNBC / Reuters：美元回落、黃金上升；spot gold 升逾 1%，DXY 約 101.8-101.9。",
  "CNBC：CoreWeave、Cisco、Applied Materials 本週業績會成為 AI capex / data-center demand 的新壓力測試。",
  "Reuters / CNBC：FDA 要 GLP-1 藥物加入罕見眼疾風險警示，但 Eli Lilly 同 J&J 仍因藥物數據及防守需求上升。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,450 / 7,400 是第一支持；跌穿代表今日 breakout 失敗。",
    "7,575 / 7,600 是短線阻力；企穩才可挑戰 10月高位區。",
  ],
  [
    "Dow",
    "52,000 / 51,700 是支持；守住代表藍籌升勢仍在。",
    "52,500 / 53,000 是阻力；要突破先確認 election shock 完全修復。",
  ],
  [
    "Nasdaq",
    "25,000 / 24,850 是支持；跌穿會令今日 chip bounce 變成單日 short-covering。",
    "25,500 / 25,750 是阻力；需要 SOXX 延續，同時 Nvidia 不再拖累。",
  ],
  [
    "Russell 2000",
    "2,800 / 2,780 是支持；守住代表 risk appetite 有廣度。",
    "2,850 / 2,900 是阻力；突破需要收益率不再抽升。",
  ],
  [
    "10Y yield",
    "4.75% / 4.70% 是舒緩線；跌回有利 growth multiple。",
    "4.90% / 5.00% 是估值壓力區；CPI 後若突破，Nasdaq 容易回吐。",
  ],
  [
    "BTC",
    "$74,000 / $73,000 是支持；跌穿代表 crypto risk appetite 轉差。",
    "$75,900 / $76,500 是阻力；重上才算跟返美股反彈。",
  ],
];

const planRows = [
  [
    "短線",
    "可以承認星期一是高質素 relief rally，因為升幅夠闊、VIX 跌穿 20、sector 全綠；但 CPI 前仍要保留風控。",
  ],
  [
    "板塊",
    "強勢在 SOXX、XLI、XLK、XLY；落後在 XLE、XLP、XLF、XLRE。若油價繼續跌，能源要小心，消費與工業反而可能續受惠。",
  ],
  [
    "AI / Tech",
    "AI trade 未死，但要避開單一 headline risk。留意 Nvidia 能否止跌、AMD / AVGO / SOXX 能否守住升幅，以及 CoreWeave 業績如何解答融資成本疑慮。",
  ],
  [
    "Macro",
    "11/10 CPI 是全局開關。低於預期會確認油價降溫交易；高於預期會推高 10Y / Fed hike odds，令今日升勢受考驗。",
  ],
  [
    "Crypto",
    "BTC、ETH、SOL 未跟美股，代表 risk-on 仍偏股票內部修復。Crypto 未重上關鍵位前，不宜用它確認全面風險胃納回歸。",
  ],
];

function SourceLinks() {
  return (
    <ol className="sources">
      {sources.map((source) => (
        <li key={source.url}>
          <a href={source.url}>{source.name}</a>
        </li>
      ))}
    </ol>
  );
}

export default function USCloseBrief20261109() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          margin: 0 auto;
          padding: 36px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.48;
        }
        .hero {
          background: #102a43;
          color: white;
          border-radius: 24px;
          padding: 30px;
          border: 1px solid #243b53;
        }
        .eyebrow { letter-spacing: 0.12em; text-transform: uppercase; font-size: 13px; opacity: 0.85; }
        h1 { margin: 8px 0 10px; font-size: 38px; line-height: 1.08; }
        .subtitle { font-size: 18px; opacity: 0.94; max-width: 940px; }
        .meta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 18px; }
        .pill { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.28); padding: 8px 12px; border-radius: 999px; font-size: 13px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 18px; }
        .card { background: white; border: 1px solid #e2e8f0; border-radius: 20px; padding: 20px; break-inside: avoid; }
        .wide { grid-column: 1 / -1; }
        h2 { margin: 0 0 12px; color: #0f766e; font-size: 23px; }
        h3 { margin: 12px 0 6px; color: #334155; font-size: 17px; }
        ul { margin: 0; padding-left: 20px; }
        li { margin: 7px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 14px; }
        th { text-align: left; color: #475569; background: #f1f5f9; }
        th, td { border-bottom: 1px solid #e5e7eb; padding: 9px 8px; vertical-align: top; }
        .tag { display: inline-block; padding: 3px 8px; border-radius: 999px; font-size: 12px; font-weight: 800; }
        .green { color: #047857; }
        .red { color: #b91c1c; }
        .amber { color: #b45309; }
        .tag.green { background: #dcfce7; }
        .tag.red { background: #fee2e2; }
        .tag.amber { background: #fef3c7; }
        .note { font-size: 13px; color: #64748b; }
        .sources { columns: 2; font-size: 12px; padding-left: 18px; }
        a { color: #1d4ed8; text-decoration: none; }
        .disclaimer { background: #fff7ed; border-color: #fed7aa; color: #7c2d12; font-size: 13px; }
        @media print {
          .sheet { width: auto; padding: 24px; }
          a { color: #1d4ed8; }
        }
      `}</style>

      <section className="hero">
        <div className="eyebrow">US Close Brief</div>
        <h1>美股收盤懶人包｜完整版</h1>
        <div className="subtitle">
          {reportDate} 收市｜油價急跌點火、AI / 晶片除 Nvidia 外大反彈； CPI
          前先當高質素 relief rally
        </div>
        <div className="meta">
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">語言：繁體中文 / 自然廣東話</span>
          <span className="pill">
            Crypto：Binance Vision 21:00 UTC 1m close
          </span>
        </div>
      </section>

      <section className="grid">
        <article className="card wide">
          <h2>1. 30 秒重點</h2>
          <ul>
            {keyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <article className="card wide">
          <h2>2. 大市一眼睇</h2>
          <table>
            <thead>
              <tr>
                <th>指標</th>
                <th>收市</th>
                <th>變動</th>
                <th>解讀</th>
              </tr>
            </thead>
            <tbody>
              {indexRows.map((row) => (
                <tr key={row.asset}>
                  <td>{row.asset}</td>
                  <td>{row.close}</td>
                  <td>{row.change}</td>
                  <td>{row.read}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            指數採 Reuters / CNBC close 口徑；Russell 2000 與 VIX 以 CNBC quote
            / Yahoo historical 交叉確認。
          </p>
        </article>

        <article className="card">
          <h2>3. 今日點解升</h2>
          <ul>
            <li>
              <strong>油價急跌：</strong>WTI -4.38%、Brent
              -5.85%，中東升級風險降溫， 市場即時下調通脹壓力假設。
            </li>
            <li>
              <strong>AI / chip 低吸：</strong>上週 AI regulation / data-center
              恐慌太急，資金買返半導體與高 beta tech。
            </li>
            <li>
              <strong>升勢夠闊：</strong>11 個 S&P 500 板塊全升，Russell 2000
              +3.15%，不是單靠 megacap 撐市。
            </li>
            <li>
              <strong>但有保留：</strong>Nvidia 逆市跌、Crypto 走弱、FedWatch
              加息機率上升，表示今日不是無條件 risk-on。
            </li>
          </ul>
        </article>

        <article className="card">
          <h2>4. 市場廣度與資金流</h2>
          <ul>
            <li>Reuters：11 個 S&P 500 sector 全升，9 個升逾 1%。</li>
            <li>
              成交約 18.98bn 股，高過 20日均量 18.72bn，反映不是淡靜反彈。
            </li>
            <li>
              Nasdaq 新高 103 個、新低 164 個，代表升市下仍有不少股票未修復。
            </li>
            <li>
              資金由能源 / defensive 轉向 semis、industrials、consumer
              discretionary 與 megacap tech。
            </li>
          </ul>
        </article>

        <article className="card wide">
          <h2>5. 板塊紅綠燈</h2>
          <table>
            <thead>
              <tr>
                <th>板塊 / ETF</th>
                <th>收市 / 日變動</th>
                <th>狀態</th>
                <th>解讀</th>
              </tr>
            </thead>
            <tbody>
              {sectorRows.map(([sector, move, status, read]) => (
                <tr key={sector}>
                  <td>{sector}</td>
                  <td>{move}</td>
                  <td>
                    <span
                      className={`tag ${
                        status.includes("弱")
                          ? "red"
                          : status.includes("中性")
                            ? "amber"
                            : "green"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                  <td>{read}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card wide">
          <h2>6. 宏觀白話版</h2>
          <table>
            <thead>
              <tr>
                <th>主題</th>
                <th>數據 / 來源口徑</th>
                <th>點解重要</th>
              </tr>
            </thead>
            <tbody>
              {macroRows.map((row) => (
                <tr key={row.topic}>
                  <td>{row.topic}</td>
                  <td>{row.data}</td>
                  <td>{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card">
          <h2>7. 5 大新聞 / 事件</h2>
          <ul>
            {newsItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h2>8. 重點股票</h2>
          <table>
            <tbody>
              {stockRows.map(([name, move, read]) => (
                <tr key={name}>
                  <td>
                    <strong>{name}</strong>
                    <br />
                    <span className="note">{move}</span>
                  </td>
                  <td>{read}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card">
          <h2>9. BTC / ETH / SOL</h2>
          <table>
            <thead>
              <tr>
                <th>幣種</th>
                <th>Binance 21:00 UTC</th>
                <th>較 11/06 21:00 UTC</th>
                <th>解讀</th>
              </tr>
            </thead>
            <tbody>
              {cryptoRows.map(([coin, price, change, read]) => (
                <tr key={coin}>
                  <td>{coin}</td>
                  <td>{price}</td>
                  <td>{change}</td>
                  <td>{read}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            Binance 直連 API 在此環境受限，今次採 Binance Vision public data API
            1-minute klines；時間點精準為 2026-11-09 21:00 UTC，即美股 4:00pm ET
            附近（11月紐約為 EST）。
          </p>
        </article>

        <article className="card">
          <h2>10. 技術位</h2>
          <table>
            <thead>
              <tr>
                <th>資產</th>
                <th>支持</th>
                <th>阻力</th>
              </tr>
            </thead>
            <tbody>
              {technicalRows.map(([asset, support, resistance]) => (
                <tr key={asset}>
                  <td>{asset}</td>
                  <td>{support}</td>
                  <td>{resistance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card">
          <h2>11. 下個交易日觀察清單</h2>
          <ul>
            <li>11/10 CPI：headline / core 是否低於市場預期。</li>
            <li>10Y yield 能否留在 4.90% 以下，避免壓住 Nasdaq multiple。</li>
            <li>SOXX / AMD / AVGO 是否延續，Nvidia 能否止跌。</li>
            <li>CoreWeave 業績及融資成本評論，是否再觸發 AI capex 擔憂。</li>
            <li>BTC 能否重上 $75.9k-$76.5k，否則 crypto 仍不確認 risk-on。</li>
          </ul>
        </article>

        <article className="card wide">
          <h2>12. 操作提示與最終觀點</h2>
          <table>
            <tbody>
              {planRows.map(([label, text]) => (
                <tr key={label}>
                  <td>
                    <strong>{label}</strong>
                  </td>
                  <td>{text}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>最終觀點</h3>
          <p>
            今日可以叫做「油價急跌 + AI 低吸」推動的高質素 relief
            rally：三大指數 全升逾 2%、Russell 2000 跑贏、VIX 跌穿 20、sector
            全綠，短線氣氛明顯 好過上週。不過，Nvidia 逆市跌、Fed
            加息機率升、Crypto 跑輸，提醒我哋
            這不是完全無風險轉牛。較合理做法是順勢承認反彈，但把 CPI、10Y
            4.90%、 SOXX 延續力與 BTC $75.9k-$76.5k
            作為四個確認點；任何一項轉差，都要收細 高 beta exposure。
          </p>
        </article>

        <article className="card wide">
          <h2>來源</h2>
          <SourceLinks />
          <p className="note">
            如同一數據有差異，本文優先採用 Reuters / CNBC / AP /
            交易所或官方發布； 即市資料則標明時間點。債息、美元、黃金、油價及
            FedWatch 因報價時間與合約口徑不同，文中已標示差異或採用區間。
          </p>
        </article>

        <article className="card wide disclaimer">
          <p>{disclaimer}</p>
        </article>
      </section>
    </main>
  );
}
