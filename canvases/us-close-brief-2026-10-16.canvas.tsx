import React from "react";

const reportDate = "2026-10-16";
const publishedAt =
  "香港時間 2026-10-19 09:00（週一更新；數據截至美股 10/16 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Friday 10/16/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-c27809783ae3230b44c26e5ee4bea056",
  },
  {
    name: "AP News - US markets weighed down by extended tech sell-off",
    url: "https://apnews.com/article/stocks-markets-us-ai-oil-tech-warsh-d2655f64db7ec8ae450525d58f97b628",
  },
  {
    name: "CNBC - Stock market today live updates Oct. 16 2026",
    url: "https://www.cnbc.com/2026/10/15/stock-market-today-live-updates.html",
  },
  {
    name: "Reuters via Investing.com - U.S. stocks lower at close",
    url: "https://www.investing.com/news/stock-market-news/us-stocks-lower-at-close-of-trade-dow-jones-industrial-average-down-034-4954815",
  },
  {
    name: "The Daily Tape - Stock Market Summary October 16, 2026",
    url: "https://stocks.pkladog.com/reports/2026-10-16/",
  },
  {
    name: "thetrading.tools - Sector Performance October 16, 2026",
    url: "https://www.thetrading.tools/sector-performance",
  },
  {
    name: "Cboe / Yahoo Finance - VIX historical close",
    url: "https://finance.yahoo.com/quote/%5EVIX/history/",
  },
  {
    name: "CNBC - U.S. Treasury yields waver as traders wrap up volatile week",
    url: "https://www.cnbc.com/2026/10/16/us-treasury-yields-investors-hot-inflation-data-.html",
  },
  {
    name: "BLS - Producer Price Indexes September 2026",
    url: "https://www.bls.gov/ppi/",
  },
  {
    name: "BLS - Schedule of Selected Releases October 2026",
    url: "https://www.bls.gov/schedule/2026/10_sched_list.htm",
  },
  {
    name: "U.S. Treasury - Final Monthly Treasury Statement FY2026",
    url: "https://fiscaldata.treasury.gov/static-data/published-reports/mts/MonthlyTreasuryStatement_202609.pdf",
  },
  {
    name: "TradingKey - US stocks close / semiconductors / CoreWeave",
    url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262221811-us-stock-market-close-nasdaq-drop-chip-stocks-fall-coreweave-micron-tradingkey",
  },
  {
    name: "StockAnalysis - SMH historical prices",
    url: "https://stockanalysis.com/etf/smh/history/",
  },
  {
    name: "Ausecure - Gold market close Oct. 16 2026",
    url: "https://www.ausecure.com/gold-market-close-oct-16-2026/",
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
  "美股週五正式 risk-off：S&P 500 7,659.44（-84.62 / -1.09%）、Nasdaq 26,140.03（-572.99 / -2.14%）、Dow 52,002.41（-175.28 / -0.34%），Russell 2000 2,721.37（-45.90 / -1.7%）。VIX 收 19.99（+21.45%），盤中曾升至 22.31。",
  "一句講晒：AI / 半導體延續沽壓，加上油價抽升令通脹風險再升溫；Dow 靠能源同防守股頂住，但 Nasdaq 明顯穿位，S&P 與 Nasdaq 都收低於 50 天線。",
  "板塊呈防守加能源輪動：XLE +2.52%、XLU +1.34%、XLP +1.08% 領先；XLK -3.02%、XLC -1.89%、SOXX -4.14% 拖累大市。",
  "焦點風險仍是 AI credit trade：CoreWeave -11.91%，本週約 -25%，CNBC 指總債務超過 $51B；半導體八連跌，SMH 全週跌約 10%。",
  "宏觀上油價與通脹是核心：WTI settlement $101.41（+3.51%）、Brent $109.86（+3.72%）；10Y yield 約 5.10%，FedWatch 引述顯示 10 月按兵不動機會仍逾八成。",
  "Crypto 以 Binance Vision 2026-10-16 20:00 UTC 1m close（美股 4:00pm ET 附近）計：BTC $81,656.01（-0.86%）、ETH $2,414.38（-1.56%）、SOL $103.68（-2.14%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "52,002.41",
    change: "-175.28 / -0.34%",
    read: "Dow 跌幅較細，因能源、consumer staples、防守與部分工業/防務股撐住；但仍未能完全避開 tech risk-off。",
  },
  {
    asset: "S&P 500",
    close: "7,659.44",
    change: "-84.62 / -1.09%",
    read: "AP / CNBC 終值一致顯示 S&P 跌約 1.1%，並收低於 50 天線；週線跌約 1.9%，抹去上週新高後升幅。",
  },
  {
    asset: "Nasdaq Composite",
    close: "26,140.03",
    change: "-572.99 / -2.14%",
    read: "AI、semis、software 高 beta 同跌，Nasdaq 週線跌逾 4%，是 6 月以來最差一週。",
  },
  {
    asset: "Russell 2000",
    close: "2,721.37",
    change: "-45.90 / -1.7%",
    read: "小型股跟住 risk-off 下跌，代表今日不是單純 mega-cap 科技調整，而是 breadth 都轉弱。",
  },
  {
    asset: "VIX",
    close: "19.99",
    change: "+3.53 / +21.45%",
    read: "Cboe/Yahoo 歷史數據顯示收市 19.99；CNBC 提到盤中曾升穿 22，是四個月高位附近，反映避險需求急升。",
  },
];

const sectorRows = [
  [
    "Energy / XLE",
    "$68.24 / +2.52%",
    "最強",
    "油價突破 $100 後資金追入能源，TRGP、FANG、KMI 等領升；是今日少數清晰綠色板塊。",
  ],
  [
    "Utilities / XLU",
    "$42.21 / +1.34%",
    "強",
    "風險胃納下降，資金買入防守收益型板塊；但 10Y 仍在 5% 上方，估值彈性不宜過分樂觀。",
  ],
  [
    "Consumer Staples / XLP",
    "$87.62 / +1.08%",
    "強",
    "防守輪動明顯，consumer staples 與 Dow 防守股幫大市止血。",
  ],
  [
    "Materials / XLB",
    "$50.92 / +0.71%",
    "偏強",
    "美元偏弱和資金離開科技，令 materials 有相對防守加 cyclicals 的支持。",
  ],
  [
    "Financials / XLF",
    "$55.52 / +0.45%",
    "中性偏強",
    "曲線偏陡對銀行有幫助，但 credit spread / AI debt 壓力升溫，金融股未算全面 risk-on。",
  ],
  [
    "Real Estate / XLRE",
    "$42.16 / +0.40%",
    "中性偏強",
    "避險輪動令 REIT 略升，但 10Y yield 仍高，升勢質素一般。",
  ],
  [
    "Industrials / XLI",
    "$167.76 / -0.08%",
    "中性",
    "防務股撐住，運輸與 cyclicals 受高油價和增長憂慮拖累，整體近乎持平。",
  ],
  [
    "Health Care / XLV",
    "$176.71 / -0.27%",
    "中性偏弱",
    "作為防守板塊本應跑贏，但 Moderna 大跌令 healthcare 未能成為避風港主角。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$112.46 / -0.84%",
    "弱",
    "高息和油價壓住消費 beta，TSLA 亦回落；雖然零售數據早前不差，但今日市場更怕 margin 壓力。",
  ],
  [
    "Communication Services / XLC",
    "$110.32 / -1.89%",
    "弱",
    "大型平台與高估值增長股同步降溫，資金明顯離開 long-duration equity。",
  ],
  [
    "Technology / XLK",
    "$183.47 / -3.02%",
    "最弱",
    "AI capex、半導體競爭和融資成本三重壓力集中在 technology；今日是大市主要拖累。",
  ],
  [
    "Semiconductors / SOXX",
    "$493.39 / -4.14%",
    "最弱",
    "SOXX / SMH 均大跌，CNBC 指 chipmakers 連跌八日；短線要先見半導體止跌，大市先有機會修復。",
  ],
];

const macroRows = [
  {
    topic: "Fed / 利率定價",
    data: "CNBC 引 CME FedWatch：10 月 27-28 日會議維持利率不變機會逾 80%；Warsh 表示不會預先判斷會議，也沒有明確釋出加息信號。",
    meaning:
      "Fed 未即時嚇市場，但熱 CPI/PPI + 油價急升令 12 月加息風險仍在；股市不能單靠 10 月 hold 去重建 risk-on。",
  },
  {
    topic: "通脹數據背景",
    data: "本週 CPI +0.6% m/m、+3.7% y/y；core CPI +0.3% / +2.6%。BLS PPI final demand +1.3% m/m、+6.3% y/y，energy goods +10.8%。",
    meaning:
      "通脹不是單一數據噪音，能源推升上游價格，會令市場重新計較 higher-for-longer 和企業 margin。",
  },
  {
    topic: "美債息",
    data: "Newsquawk：2Y 4.746%（-1.1bp）、10Y 5.102%（+2.3bp）、30Y 5.441%（+2.1bp）；CNBC / Yahoo 類報道亦指 10Y 約 5.09%-5.10%。",
    meaning:
      "曲線偏陡加劇 growth duration 壓力；10Y 企在 5% 上方，Nasdaq 估值修復空間有限。",
  },
  {
    topic: "原油",
    data: "CNBC：WTI $101.41（+3.51%），Brent $109.86（+3.72%）；地緣供應風險與能源基建受襲消息推高油價。",
    meaning:
      "油價是今日第二條主線：一方面撐 XLE，另一方面令通脹和 Fed 風險更難消退。",
  },
  {
    topic: "美元 / 黃金",
    data: "Ausecure：spot gold 約 $4,169.60（-0.1%），DXY 約 101.78（-0.20%）；GoldPrice.com close $4,165.42，兩者接近。",
    meaning:
      "美元偏弱但黃金未見明顯避險追入，反映油價和債息壓力抵消了部分避險需求。",
  },
  {
    topic: "經濟數據",
    data: "TD / calendar 彙總：September retail sales +0.8% m/m，industrial production +0.7%，capacity utilization 76.9%；import/export price 指數於 10/16 發布。",
    meaning: "實體數據仍有韌性，但需求未弱反而會令 Fed 更難快速轉鴿。",
  },
  {
    topic: "財政",
    data: "U.S. Treasury final MTS：FY2026 deficit $1.992T，receipts $5.403T，outlays $7.396T，net interest $1.052T。",
    meaning:
      "高赤字與高利息支出會令 long-end supply premium 更敏感，對 10Y/30Y 形成中期壓力。",
  },
  {
    topic: "市場廣度 / 波幅",
    data: "Investing.com：NYSE 跌股 1,566、升股 1,168；Nasdaq 跌股 2,553、升股 851。VIX 收 19.99，盤中高 22.31。",
    meaning:
      "今日不是少數巨企拖低指數，而是下跌股份明顯多於上升；波幅由低位急彈，要控制倉位波動。",
  },
  {
    topic: "Crypto / 流動性",
    data: "Binance Vision 20:00 UTC：BTC $81,656.01、ETH $2,414.38、SOL $103.68，較 10/15 20:00 UTC 分別 -0.86%、-1.56%、-2.14%。",
    meaning:
      "Crypto 同步走弱，顯示風險胃納不是只在股票市場降溫；SOL beta 最大，跌幅亦最大。",
  },
];

const stockRows = [
  [
    "CoreWeave / AI credit",
    "CRWV $61.39 / -11.91%；本週約 -25%",
    "CNBC 指總債務超過 $51B；TradingKey / Reuters 類報道指部分債券孳息升至 distressed levels。這是市場質疑 AI buildout 借貸回報的核心。",
  ],
  [
    "Semis：MU / AMD / INTC / NVDA",
    "MU -5.63%；AMD -5.95%；INTC -5.79%；NVDA -1.43%；SOXX -4.14%",
    "AP 指 Micron、AMD、Broadcom、Intel 等晶片股大跌；SMH 全週約 -10%，市場憂慮中國競爭與 AI 需求回本週期。",
  ],
  [
    "Oracle / AI infrastructure",
    "ORCL $128.23 / -4.64%",
    "Oracle 受 AI infra 融資成本、capex 回報與高估值壓力拖累，與 CoreWeave 同屬 AI debt trade 壓力範圍。",
  ],
  [
    "Energy winners",
    "TRGP $294.90 / +4.37%；FANG +4.28%；KMI $34.20 / +4.20%；CVX $224.99",
    "油價急升令 energy 成為今日最強防線；pipeline、E&P 和 integrated oil names 一齊跑贏。",
  ],
  [
    "Defense / 工業防守",
    "NOC +4.05%；RTX +3.73%；LMT +3.65%",
    "地緣風險升溫下，防務股跟隨避險主題跑出，幫 XLI 抵消其他 cyclicals 壓力。",
  ],
  [
    "High-beta losers",
    "TWLO -10.62%；SMCI -9.86%；FLEX -8.16%；DDOG -7.19%",
    "軟件、AI server、high beta growth 同時被沽，反映市場不是只賣半導體，而是全面降低 duration / AI beta。",
  ],
  [
    "Moderna / Healthcare",
    "MRNA $218.01 / -7.82%",
    "Healthcare 板塊未能全面受惠防守輪動，MRNA 單日急跌令 XLV 收低，顯示板塊內部仍有 idiosyncratic risk。",
  ],
  [
    "Tesla / Consumer discretionary",
    "TSLA $354.72 / -2.13%",
    "Tesla Roadster 消息未能抵消高息、油價與 growth beta 壓力，XLY 亦同步偏弱。",
  ],
  [
    "BTC / ETH / SOL",
    "BTC -0.86%；ETH -1.56%；SOL -2.14%",
    "Crypto 未有扮演避險資產角色，而是跟隨風險資產降低槓桿；SOL 對流動性變化最敏感。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$81,656.01",
    "-$708.00 / -0.86%",
    "仍守 $81k-$82k 區間，但未能重上前日 $82.4k；若跌穿 $81k，下一站看 $80k 心理位。",
  ],
  [
    "ETH",
    "$2,414.38",
    "-$38.34 / -1.56%",
    "$2,400 是短線風險線；若失守，ETH beta 會弱過 BTC，代表 risk appetite 未回來。",
  ],
  [
    "SOL",
    "$103.68",
    "-$2.27 / -2.14%",
    "SOL 跌幅最大，$102-$103 是近期支持；要重上 $106-$108 才算修復。",
  ],
];

const newsItems = [
  "AP / CNBC：S&P 500 -1.09%、Nasdaq -2.14%，兩者同收低於 50 天線；Dow 因能源和防守股支撐只跌 0.34%。",
  "CNBC：CoreWeave 再跌近 12%，本週約 -25%；AI infrastructure 借貸與債務成本成為市場核心疑慮。",
  "CNBC / StockAnalysis：SMH 週五 -3.41%、本週約 -10%，是 2025 年 4 月以來最大週跌幅；SOXX 週五 -4.14%。",
  "CNBC：WTI 升至 $101.41、Brent $109.86，能源價格急升令通脹與 Fed 風險重新被定價。",
  "BLS / TD：CPI、PPI、retail sales 和 industrial production 均顯示通脹與需求仍有韌性；Fed 不易快速轉鴿。",
  "U.S. Treasury：FY2026 deficit 近 $2T，net interest 超過 $1T，長端債息 supply premium 仍是中期風險。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,630 / 7,600 是即日低位附近支持；跌穿代表 50 天線失守後延伸調整。",
    "7,700 / 7,744 是 first resistance；重上前一日 close 才算短線止血。",
  ],
  [
    "Nasdaq",
    "26,000 是心理支持；下方看 25,800 / 25,600。",
    "26,500 / 26,700 是反彈壓力；要先見 SOXX / SMH 止跌才有力上穿。",
  ],
  [
    "Russell 2000",
    "2,700 / 2,680 是支持；跌穿代表 breadth 轉差擴散。",
    "2,760 / 2,800 是修復位；需要 10Y yield 回落配合。",
  ],
  [
    "10Y yield",
    "5.05% / 5.00% 是下方觀察；跌穿可紓緩 growth 估值壓力。",
    "5.15% / 5.20% 是壓力區；重上會繼續壓 Nasdaq、REIT、小型股。",
  ],
  [
    "WTI / Brent",
    "WTI $100 / Brent $108 是短線支持；跌穿可令通脹 premium 降溫。",
    "WTI $103-$105 / Brent $110-$112 是風險區；突破會令 Fed pricing 更 hawkish。",
  ],
  [
    "BTC",
    "$81,000 / $80,000 是支持；失守代表 crypto risk-off 擴大。",
    "$82,400 / $84,000 是修復位；要配合 DXY 和 10Y 回落。",
  ],
];

const planRows = [
  [
    "短線",
    "先當作 risk-off 未完，而不是普通 pullback；若 Nasdaq 和 SOXX 未企回 50 天線，不急於追 AI / semis 反彈。",
  ],
  [
    "板塊",
    "Energy、utilities、staples 相對強，但能源已受油價消息推高，追入要用細注和明確止蝕；technology / communication services 暫時降低倉位 beta。",
  ],
  [
    "Macro",
    "重點看油價是否守在 WTI $100 以上、10Y 是否升穿 5.15%，以及 FedWatch 10 月 hold 機會會否跌穿 75%。",
  ],
  [
    "個股",
    "AI infrastructure 要看 credit spreads / CoreWeave bonds，不只是看 NVDA 或 ORCL 股價；防務和能源 winners 可以留意回調承接。",
  ],
  [
    "Crypto",
    "BTC $81k、ETH $2,400、SOL $103 是短線風險線；若三者同步失守，代表風險資產去槓桿仍未完。",
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

export default function USCloseBrief20261016() {
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
          {reportDate} 收市｜AI / 半導體延續沽壓；油價升穿
          $100，能源與防守股跑贏
        </div>
        <div className="meta">
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">語言：繁體中文 / 自然廣東話</span>
          <span className="pill">
            Crypto：Binance Vision 20:00 UTC 1m close
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
                  <td>
                    <strong>{row.asset}</strong>
                  </td>
                  <td>{row.close}</td>
                  <td className={row.change.startsWith("+") ? "green" : "red"}>
                    {row.change}
                  </td>
                  <td>{row.read}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card wide">
          <h2>3. 今日升跌原因</h2>
          <h3>一句講晒</h3>
          <p>
            今日係「AI credit + 半導體估值 + 油價通脹」三件事同時壓住市場。
            CoreWeave 債務壓力令 AI buildout 回報期被重新質疑，晶片股連跌八日；
            另一邊廂油價升穿 $100，令通脹和 Fed 風險又返到枱面。
          </p>
          <h3>資金點諗</h3>
          <ul>
            <li>沽高 beta：SOXX -4.14%、XLK -3.02%、XLC -1.89%。</li>
            <li>買能源同防守：XLE +2.52%、XLU +1.34%、XLP +1.08%。</li>
            <li>避險需求升：VIX 收 19.99，盤中高 22.31。</li>
            <li>Fed 未必 10 月加息，但油價升令 12 月風險仍未消失。</li>
          </ul>
        </article>

        <article className="card wide">
          <h2>4. 板塊紅綠燈</h2>
          <table>
            <thead>
              <tr>
                <th>板塊 / ETF</th>
                <th>價格 / 變動</th>
                <th>狀態</th>
                <th>白話解讀</th>
              </tr>
            </thead>
            <tbody>
              {sectorRows.map(([name, move, state, read]) => (
                <tr key={name}>
                  <td>
                    <strong>{name}</strong>
                  </td>
                  <td>{move}</td>
                  <td>
                    <span
                      className={`tag ${
                        state === "最強" ||
                        state === "強" ||
                        state === "偏強" ||
                        state === "中性偏強"
                          ? "green"
                          : state === "中性" || state === "中性偏弱"
                            ? "amber"
                            : "red"
                      }`}
                    >
                      {state}
                    </span>
                  </td>
                  <td>{read}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            Sector 口徑：11 個 Select Sector SPDR ETF 採 thetrading.tools /
            StockAnalysis / StockTi 類 market close 表交叉核對；SOXX / SMH 採
            Yahoo / StockAnalysis 歷史價。Yahoo chart API 本次回傳
            429，未作主資料源。
          </p>
        </article>

        <article className="card">
          <h2>5. 五大新聞</h2>
          <ol>
            {newsItems.slice(0, 5).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>

        <article className="card">
          <h2>6. 市場熱度圖（文字版）</h2>
          <ul>
            <li>
              <span className="tag green">綠</span> Energy / defensives：XLE
              +2.52%、XLU +1.34%、XLP +1.08%。
            </li>
            <li>
              <span className="tag green">綠</span> Oil-linked stocks：TRGP /
              FANG / KMI 跑出。
            </li>
            <li>
              <span className="tag amber">黃</span> Dow：只跌 0.34%，但不是
              risk-on，而是 defensive mix 較好。
            </li>
            <li>
              <span className="tag amber">黃</span> Gold / DXY：美元跌但黃金
              幾乎持平，避險未算全面。
            </li>
            <li>
              <span className="tag red">紅</span> AI / Semis：CoreWeave、
              Oracle、MU、AMD、INTC 同跌。
            </li>
            <li>
              <span className="tag red">紅</span> Crypto：BTC / ETH / SOL
              跟隨風險資產回落。
            </li>
          </ul>
        </article>

        <article className="card wide">
          <h2>7. 宏觀白話版</h2>
          <table>
            <thead>
              <tr>
                <th>項目</th>
                <th>最新數據 / 來源口徑</th>
                <th>點解重要</th>
              </tr>
            </thead>
            <tbody>
              {macroRows.map((row) => (
                <tr key={row.topic}>
                  <td>
                    <strong>{row.topic}</strong>
                  </td>
                  <td>{row.data}</td>
                  <td>{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card wide">
          <h2>8. 重點股票</h2>
          <table>
            <thead>
              <tr>
                <th>股票</th>
                <th>收市 / 變動</th>
                <th>原因</th>
              </tr>
            </thead>
            <tbody>
              {stockRows.map(([name, move, reason]) => (
                <tr key={name}>
                  <td>
                    <strong>{name}</strong>
                  </td>
                  <td>{move}</td>
                  <td>{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card wide">
          <h2>9. Crypto：BTC / ETH / SOL</h2>
          <table>
            <thead>
              <tr>
                <th>幣種</th>
                <th>Binance 20:00 UTC close</th>
                <th>對 10/15 20:00 UTC</th>
                <th>解讀</th>
              </tr>
            </thead>
            <tbody>
              {cryptoRows.map(([name, close, change, read]) => (
                <tr key={name}>
                  <td>
                    <strong>{name}</strong>
                  </td>
                  <td>{close}</td>
                  <td className={change.startsWith("+") ? "green" : "red"}>
                    {change}
                  </td>
                  <td>{read}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            口徑：api.binance.com 在此環境受地區限制；採 Binance Vision data API
            klines 查 2026-10-16 20:00:00 UTC 1-minute kline
            close，時間點即美股正常收市 4:00pm ET 附近。對比基準為 2026-10-15
            20:00:00 UTC。
          </p>
        </article>

        <article className="card wide">
          <h2>10. 技術位</h2>
          <table>
            <thead>
              <tr>
                <th>市場</th>
                <th>支持 / 風險線</th>
                <th>阻力 / 觀察位</th>
              </tr>
            </thead>
            <tbody>
              {technicalRows.map(([name, support, resistance]) => (
                <tr key={name}>
                  <td>
                    <strong>{name}</strong>
                  </td>
                  <td>{support}</td>
                  <td>{resistance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card wide">
          <h2>11. 明日觀察清單與操作提示</h2>
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
          <p>
            最終觀點：今次不是健康輪動，而是「科技估值 + AI 融資 +
            油價通脹」一起迫市場降 beta。Dow 跌得少不代表風險解除；要見
            CoreWeave credit、SOXX、10Y yield 同時穩定，先可以提高進攻性。
          </p>
        </article>

        <article className="card wide">
          <h2>12. 來源、口徑與免責聲明</h2>
          <p className="note">
            數據衝突處理：主指數採 AP / CNBC 終值，Reuters / Investing.com
            作交叉核對； VIX 採 Cboe/Yahoo close 19.99，CNBC 提及的 22
            以上屬盤中高位；FedWatch 採 CNBC 引 CME 的逾八成 hold 概率。Sector /
            stocks 因 Yahoo chart API 本次 429，改用可核對的 market close
            表、AP/CNBC/Reuters/TradingKey/StockAnalysis 類來源。宏觀採
            BLS、U.S. Treasury、CNBC、Newsquawk、TD / calendar 類資料； Crypto
            採 Binance Vision data API 20:00 UTC 1-minute
            kline。若來源時間點不同， 文內已標示口徑；無可靠數據不作硬填。
          </p>
          <SourceLinks />
        </article>

        <article className="card wide disclaimer">
          <strong>{disclaimer}</strong>
        </article>
      </section>
    </main>
  );
}
