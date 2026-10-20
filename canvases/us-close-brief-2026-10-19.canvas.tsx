import React from "react";

const reportDate = "2026-10-19";
const publishedAt =
  "香港時間 2026-10-20 09:00（週二更新；數據截至美股 10/19 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - AI stocks lead a rebound on Wall Street",
    url: "https://apnews.com/article/stocks-markets-oil-us-ai-494fbe4361a0360b2f6368e7a6d8f058",
  },
  {
    name: "AP News - How major US stock indexes fared Monday 10/19/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-5aec11ee466841cc2a69b2d23ab77f0e",
  },
  {
    name: "CNBC - Stock market news for Oct. 19, 2026",
    url: "https://www.cnbc.com/2026/10/18/stock-market-today-live-updates.html",
  },
  {
    name: "Reuters via Investing.com - Nasdaq climbs as chip and AI-linked stocks bounce back",
    url: "https://www.investing.com/news/economy-news/wall-st-futures-climb-as-ai-stocks-rebound-oil-yields-fall-4956777",
  },
  {
    name: "MarketWatch - U.S. Stocks Mostly Higher as AI Credit Worries Abate",
    url: "https://www.marketwatch.com/story/u-s-stocks-mostly-higher-as-ai-credit-worries-abate-f4e363f0",
  },
  {
    name: "Yahoo Finance - VIX historical data",
    url: "https://finance.yahoo.com/quote/%5EVIX/history/",
  },
  {
    name: "Yahoo Finance - Russell 2000 historical data",
    url: "https://finance.yahoo.com/quote/%5ERUT/history/",
  },
  {
    name: "Wall Street Numbers - Sector SPDR ETFs close table",
    url: "https://wallstreetnumbers.com/watchlists/sector-spdr-etfs",
  },
  {
    name: "StockAnalysis - XLE historical prices",
    url: "https://stockanalysis.com/etf/xle/history/",
  },
  {
    name: "Ausecure - Gold closes down as Brent hits $110 and yields rise",
    url: "https://www.ausecure.com/gold-market-close-oct-19-2026/",
  },
  {
    name: "NAHB - Builder sentiment falls on rising rates",
    url: "https://www.nahb.org/news-and-economics/press-releases/2026/10/builder-sentiment-falls-on-rising-rates",
  },
  {
    name: "Cleveland-Cliffs - Third-quarter 2026 results",
    url: "https://www.clevelandcliffs.com/investors/news-events/press-releases/detail/705/cleveland-cliffs-reports-third-quarter-2026-results",
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
  "美股週一不是全面 risk-on，而是 AI / 半導體 oversold bounce：S&P 500 7,690.73（+31.29 / +0.41%）、Nasdaq 26,430.89（+290.85 / +1.11%），但 Dow 51,966.03（-36.38 / -0.07%）微跌，Russell 2000 2,728.30（+6.93 / +0.25%）。",
  "一句講晒：資金趁上週 AI trade 急跌後買返 mega-cap tech，同時繼續避開金融、公用、地產等對高息敏感板塊；所以指數升，但 breadth 未算靚。",
  "VIX 回落至 18.44（-1.55 / -7.75%），代表恐慌降溫；但 Reuters 指 NYSE 跌股仍多過升股 1.69:1，反映今次反彈主要靠大型股拉動。",
  "板塊分化：XLY +1.78%、XLK +1.36%、SOXX +1.73% 領先；XLU -2.01%、XLRE -1.16%、XLF -0.83% 明顯落後。",
  "宏觀仍偏緊：10Y yield 升至約 5.135%，2Y 約 4.759%；WTI 收 $103.66（+2.22%），Brent 約 $109.55（-0.28%），金價 $4,144.70（-0.6%），Fed 10/28 加息機率約 18%。",
  "Crypto 以 Binance Vision 2026-10-19 20:00 UTC 1m close（美股 4:00pm ET 附近）計：BTC $81,866.89（較 10/16 20:00 UTC +0.26%）、ETH $2,395.13（-0.80%）、SOL $104.02（+0.33%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "51,966.03",
    change: "-36.38 / -0.07%",
    read: "Dow 微跌，JPM 等金融股拖累；與 Nasdaq 拉升形成分歧，顯示今日升市集中在 growth / megacap，不是傳統 cyclicals 全面轉強。",
  },
  {
    asset: "S&P 500",
    close: "7,690.73",
    change: "+31.29 / +0.41%",
    read: "AP、CNBC、Reuters / Investing.com 終值一致；由上週近 2% 跌幅反彈，但收市仍低過即日高位，買盤未算一面倒。",
  },
  {
    asset: "Nasdaq Composite",
    close: "26,430.89",
    change: "+290.85 / +1.11%",
    read: "AI / semis 反彈帶動，費半指數升 1.6%，結束八日跌浪；但 Reuters 引交易員稱只是 oversold bounce，未證明風險完全解除。",
  },
  {
    asset: "Russell 2000",
    close: "2,728.30",
    change: "+6.93 / +0.25%",
    read: "小型股只微升，跑輸 Nasdaq；高息和信貸成本仍壓住 broader market，未見廣泛追風險。",
  },
  {
    asset: "VIX",
    close: "18.44",
    change: "-1.55 / -7.75%",
    read: "VIX 從週五 19.99 回落，恐慌退一步；但仍高過 10 月上旬 15 左右水平，代表市場仍留意 AI credit、油價和 Fed。",
  },
];

const sectorRows = [
  [
    "Consumer Discretionary / XLY",
    "$114.46 / +1.78%",
    "最強",
    "AMZN +4.98%、TSLA +3.76% 係最大推手；Morgan Stanley 把 Amazon 列為 top pick，帶動 discretionary 跑贏。",
  ],
  [
    "Semiconductors / SOXX",
    "$501.93 / +1.73%",
    "強",
    "SOXX / 費半反彈，終止連跌；MU、NVDA、AMD、INTC 全線回升，但仍只是修復上週急跌後的 oversold。",
  ],
  [
    "Technology / XLK",
    "$185.96 / +1.36%",
    "強",
    "大型科技股反彈，AI 交易未死；不過 Oracle / CoreWeave credit 壓力未消，科技股仍要靠本週業績驗證。",
  ],
  [
    "Materials / XLB",
    "$50.95 / +0.06%",
    "中性",
    "接近持平；CLF 因業績大升，但整個 materials 未有廣泛風險胃納。",
  ],
  [
    "Communication Services / XLC",
    "$110.09 / -0.21%",
    "中性偏弱",
    "Meta 跌約 0.5%，平台股未能完全跟 Nasdaq 反彈；市場等 Meta 週三業績。",
  ],
  [
    "Consumer Staples / XLP",
    "$87.21 / -0.47%",
    "弱",
    "上週避險資金轉入 staples，今日 tech bounce 下相對回吐；但跌幅不算失控。",
  ],
  [
    "Health Care / XLV",
    "$175.65 / -0.60%",
    "弱",
    "防守板塊未受追捧，資金更集中在大型科技反彈；healthcare alpha 不明顯。",
  ],
  [
    "Energy / XLE",
    "$67.80 / -0.64%",
    "弱",
    "雖然 WTI 再升至 $103.66，但 XLE 從上週急升後回吐；油價升對能源股不再等於即日全面受惠。",
  ],
  [
    "Industrials / XLI",
    "$166.68 / -0.64%",
    "弱",
    "工業股跟 broader cyclical 走弱；CLF 的鋼鐵利好未能擴散至整個 industrial complex。",
  ],
  [
    "Financials / XLF",
    "$55.06 / -0.83%",
    "偏弱",
    "CNBC 指金融股未有參與反彈，WFC、C、JPM、BAC 午後跌近 2%；高息不等於銀行股即時受惠，市場更擔心 credit / funding。",
  ],
  [
    "Real Estate / XLRE",
    "$41.67 / -1.16%",
    "弱",
    "10Y yield 升至約 5.14%，REIT 受壓；高息環境下地產仍是弱勢板塊。",
  ],
  [
    "Utilities / XLU",
    "$41.36 / -2.01%",
    "最弱",
    "公用股是最大 laggard，反映資金今日由 defensive income 轉去 growth bounce；同時長債息上升壓低高息代理資產。",
  ],
];

const macroRows = [
  {
    topic: "Fed / 利率定價",
    data: "Ausecure 引 fed funds futures：10 月 28 日加息 25bp 機率約 18%，按兵不動約 82%；12 月前至少一次加息機率約 92%。",
    meaning:
      "短線不是即將大幅加息，但市場仍在為能源推升通脹重估尾部風險；科技股反彈若遇 hawkish repricing 會好脆。",
  },
  {
    topic: "美債息",
    data: "MarketWatch / Dow Jones Market Data：2Y 4.759%（+2.5bp）、10Y 5.135%（+3.8bp）、30Y 5.472%（+3.5bp）；Ausecure 同步顯示 10Y 約 5.14%。",
    meaning:
      "10Y 再升令 growth duration 仍有壓力；今日 Nasdaq 升得起，是因上週跌得多，不是因宏觀條件明顯放鬆。",
  },
  {
    topic: "原油",
    data: "CNBC / Reuters：WTI settled $103.66（+2.22%）；Brent $109.55（-0.28%），盤中一度逼近 / 升穿 $110。",
    meaning:
      "油價仍是通脹風險源頭；WTI 強、Brent 小跌的口徑差異要標示，核心訊息是能源價格仍高企。",
  },
  {
    topic: "美元 / 黃金",
    data: "Ausecure：Gold ask $4,144.70（-$24.90 / -0.6%）；DXY 101.98（+0.20%）；10Y real yield 升至 2.80%。",
    meaning:
      "股市反彈、VIX 回落，加上實質利率上升，令黃金無避險買盤；美元偏強亦壓住金價。",
  },
  {
    topic: "房屋數據",
    data: "NAHB / Wells Fargo HMI 10 月跌 3 點至 29，為 2012 年 6 月以來最低；buyer traffic 跌至 18，43% 建築商減價。",
    meaning:
      "高按息開始明顯壓住 housing；XLRE、homebuilders 和 mortgage REIT 的弱勢不是偶然。",
  },
  {
    topic: "企業盈利節奏",
    data: "CNBC：本週 Meta、Tesla、SpaceX 等大型科技 / growth 業績登場；FactSet 口徑顯示早段已公布 S&P 500 公司多數 beat，整體盈利增長追蹤約 29%。",
    meaning:
      "市場焦點由估值恐慌轉去『業績能否證明 AI capex 有回報』；若 earnings 指引不夠硬，反彈容易變 bull trap。",
  },
  {
    topic: "市場廣度 / 成交",
    data: "Reuters：NYSE 跌股 / 升股約 1.69:1；Nasdaq 跌股 2,647、升股 2,258；全美交易所成交 15.27B 股，低於 20 日平均 17.26B。",
    meaning:
      "指數升但 breadth 弱，成交亦不算特別亢奮；今日更像大型股推升指數，而非資金全面回流風險資產。",
  },
  {
    topic: "Crypto / 流動性",
    data: "Binance Vision 20:00 UTC：BTC $81,866.89、ETH $2,395.13、SOL $104.02，較 10/16 20:00 UTC 分別 +0.26%、-0.80%、+0.33%。",
    meaning:
      "Crypto 未跟 Nasdaq 明顯彈，ETH 仍弱，代表流動性風險胃納只局部改善。",
  },
];

const stockRows = [
  [
    "Amazon / Tesla",
    "AMZN $262.45 / +4.98%；TSLA $368.06 / +3.76%",
    "Reuters 指 Amazon 因 Morgan Stanley 列為 top pick 成為 discretionary 最大推手；Tesla 亦是 XLY 第二大貢獻，支撐 Nasdaq / S&P 反彈。",
  ],
  [
    "Semis：MU / AMD / NVDA / INTC",
    "MU 約 +3.0%；AMD +1.76%；NVDA +1.38%；INTC 約 +2.4%；SOXX +1.73%",
    "半導體終止連跌，JPMorgan 上調 Intel 至 neutral；但 CNBC / Reuters 均提醒，這只是上週八日跌浪後的反彈。",
  ],
  [
    "CoreWeave / AI credit",
    "CRWV 約 $61.12 / -0.44%；上週跌逾 25%",
    "Goldman Sachs 雖上調評級，但股價由早段升轉跌；CDS / 債務成本仍是 AI neocloud 交易最敏感風險。",
  ],
  [
    "Oracle / AI infrastructure",
    "ORCL $129.59 / +1.06%",
    "AI infrastructure credit 壓力仍被市場盯實；Oracle 股價反彈，但債務評級和 capex 回報會是後續關鍵。",
  ],
  [
    "Cleveland-Cliffs",
    "CLF $14.10 / +16.34%",
    "公司公布 Q3 adjusted EPS $0.28、高於 FactSet $0.21；adjusted EBITDA $612M，並指 2027 adjusted EBITDA 有望超過 $4B。",
  ],
  [
    "Financials：JPM / WFC / C / BAC",
    "JPM -1.82%；WFC、C、BAC 午後約跌近 2%",
    "金融股沒有跟大市反彈，反映高息、credit risk 與資金成本仍壓住銀行板塊。",
  ],
  [
    "Meta / Apple",
    "META $705.44 / -0.55%；AAPL $342.94 / -0.15%",
    "不是所有 mega-cap 都升；Meta 週三業績前先跌，Apple 小跌，顯示市場對 AI / mega-cap 仍然挑剔。",
  ],
  [
    "Housing / REIT",
    "XLRE -1.16%；REM 盤中創 2020 年以來低位附近",
    "NAHB HMI 跌至 29、mortgage rates 高於 7%，令 homebuilders、mortgage REIT 和地產板塊受壓。",
  ],
  [
    "BTC / ETH / SOL",
    "BTC +0.26%；ETH -0.80%；SOL +0.33%（對 10/16 20:00 UTC）",
    "Crypto 只是窄幅上落，未確認風險胃納全面回暖；ETH 跑輸 BTC / SOL，短線要守 $2,380-$2,400。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$81,866.89",
    "+$210.88 / +0.26%",
    "BTC 在 $81k-$82k 區間拉鋸；若重上 $82,500-$83,000，先算跟返 Nasdaq 反彈。",
  ],
  [
    "ETH",
    "$2,395.13",
    "-$19.25 / -0.80%",
    "ETH 失守 $2,400 邊緣，反映 beta 未回來；若再跌穿 $2,380，會拖低 alt sentiment。",
  ],
  [
    "SOL",
    "$104.02",
    "+$0.34 / +0.33%",
    "SOL 守住 $103 附近支持但未有突破；要上穿 $106-$108，先可確認修復。",
  ],
];

const newsItems = [
  "AP / CNBC / Reuters：Nasdaq +1.11%、S&P 500 +0.41%，AI 與半導體由上週急跌後反彈；Dow -0.07%，升市不算全面。",
  "Reuters：費城半導體指數升 1.6%，終止八日跌浪；上週累跌約 15.7%，是 2008 年 10 月以來最長連跌。",
  "CNBC：CoreWeave 早段因 Goldman Sachs 升級而彈，但收市轉跌 0.4%；AI credit / neocloud 債務疑慮未散。",
  "CNBC / Reuters：WTI $103.66（+2.22%），Brent 約 $109.55（-0.28%）；能源供應風險仍令 Fed 通脹路徑更難估。",
  "NAHB：10 月 homebuilder sentiment 跌至 29，為 2012 年以來最低；高按息、高能源 / 材料成本與買家流量減弱同時施壓。",
  "Cleveland-Cliffs：Q3 adjusted EPS $0.28 beat，股價 +16.34%；同日金融、公用、地產等板塊明顯落後。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,650 / 7,620 是回踩支持；跌穿代表週一反彈無力延續。",
    "7,720 / 7,760 是 first resistance；要企穩才算擺脫上週 selloff 壓力。",
  ],
  [
    "Nasdaq",
    "26,250 / 26,000 是支持；失守 26,000 代表 tech bounce 失敗。",
    "26,600 / 26,750 是壓力；需要 SOXX 和 mega-cap earnings 配合突破。",
  ],
  [
    "Russell 2000",
    "2,700 / 2,680 是支持；跌穿代表 breadth 再轉差。",
    "2,760 / 2,800 是修復位；需要 10Y yield 回落才較可信。",
  ],
  [
    "10Y yield",
    "5.10% / 5.05% 是下方觀察；跌穿可舒緩 growth 估值壓力。",
    "5.15% / 5.20% 是壓力區；重上會壓 Nasdaq、REIT、小型股。",
  ],
  [
    "WTI / Brent",
    "WTI $101-$102 / Brent $108 是短線支持；跌穿可令通脹 premium 降溫。",
    "WTI $105 / Brent $110-$111 是風險區；突破會令 Fed pricing 更 hawkish。",
  ],
  [
    "BTC",
    "$81,000 / $80,000 是支持；失守代表 crypto risk appetite 轉弱。",
    "$82,500 / $84,000 是修復位；要配合 DXY 和 10Y 回落。",
  ],
];

const planRows = [
  [
    "短線",
    "可以承認 tech oversold bounce，但不要把它當成全面 risk-on。若 breadth、金融、Russell 仍弱，倉位 beta 不宜一下子拉滿。",
  ],
  [
    "板塊",
    "相對強勢在 XLY / XLK / semis，但追貨要等業績確認；XLU、XLRE、XLF 弱勢反映高息壓力，暫時避免硬撈落後板塊。",
  ],
  [
    "Macro",
    "重點看 10Y 是否升穿 5.15%、WTI 是否逼近 $105，以及 Fed 10 月加息機率會否由 18% 繼續上升。",
  ],
  [
    "個股",
    "AI infrastructure 不能只看 NVDA / AMD 股價，要同時看 CoreWeave、Oracle credit stress；本週 Meta、Tesla、SpaceX 業績是市場信心測試。",
  ],
  [
    "Crypto",
    "BTC 守 $81k、ETH 守 $2,380-$2,400、SOL 守 $103；若 ETH 繼續跑輸，代表高 beta 風險仍未真正回來。",
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

export default function USCloseBrief20261019() {
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
          {reportDate} 收市｜AI / 半導體 oversold bounce；指數靠大型科技反彈，
          但 breadth 同高息板塊仍偏弱
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
            今日係「上週 AI / semis 跌得太急，所以先彈一彈」多過「全市場重新
            risk-on」。Amazon、Tesla、NVDA、AMD、Micron 幫 Nasdaq 拉上去，
            但金融、公用、地產同好多中小型股份都無跟，NYSE 跌股仲多過升股。
          </p>
          <h3>資金點諗</h3>
          <ul>
            <li>買返 growth winners：XLY +1.78%、XLK +1.36%、SOXX +1.73%。</li>
            <li>沽高息敏感 / 防守收益股：XLU -2.01%、XLRE -1.16%。</li>
            <li>避險退一步：VIX 由 19.99 回落至 18.44，但仍未返到低波幅區。</li>
            <li>
              Macro 未放鬆：10Y 約 5.135%，WTI 升至 $103.66，Fed 尾部風險仍在。
            </li>
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
            Sector 口徑：11 個 Select Sector SPDR ETF 採 Wall Street Numbers /
            StockAnalysis / Yahoo quote 類收市表交叉核對；SOXX 採 Exa / market
            close quote。CNBC 午中板塊數據與收市 ETF
            數字有時間差，文內採收市口徑。
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
              <span className="tag green">綠</span> AI / semis bounce：SOXX
              +1.73%、費半 +1.6%，MU / AMD / NVDA / INTC 反彈。
            </li>
            <li>
              <span className="tag green">綠</span> Discretionary：AMZN、TSLA
              推高 XLY，是今日最強板塊。
            </li>
            <li>
              <span className="tag amber">黃</span> S&P 500：升
              0.41%，但升幅靠少數大型股。
            </li>
            <li>
              <span className="tag amber">黃</span> Crypto：BTC / SOL 微升、ETH
              微跌，未確認風險胃納全面回來。
            </li>
            <li>
              <span className="tag red">紅</span> Financials / REIT /
              utilities：高息壓力仍在。
            </li>
            <li>
              <span className="tag red">紅</span> Breadth：Reuters 指 NYSE
              跌股多過升股 1.69:1。
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
                <th>對 10/16 20:00 UTC</th>
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
            klines 查 2026-10-19 20:00:00 UTC 1-minute kline
            close，時間點即美股正常收市 4:00pm ET
            附近。對比基準為上一個美股交易日 2026-10-16 20:00:00 UTC。
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
            最終觀點：今日反彈值得尊重，但未值得盲目追。最好情況是 AI / semis
            用業績證明盈利可以 cover capex，10Y 不再升穿 5.15%；最差情況是
            earnings 未能交功課，而油價 / 債息繼續逼 Fed 定價轉
            hawkish。操作上先用 「確認先加倉」比「估底撈貨」更合理。
          </p>
        </article>

        <article className="card wide">
          <h2>12. 來源、口徑與免責聲明</h2>
          <p className="note">
            數據衝突處理：主指數採 AP / CNBC 終值，Reuters / Investing.com
            作交叉核對；Russell 2000 與 VIX 採 Yahoo / Portfolio Terminal
            close； sector ETF 採 Wall Street Numbers / StockAnalysis / Yahoo
            類收市表。油價方面，CNBC 報 WTI +2.22% 至 $103.66、Brent -0.28% 至
            $109.55，Ausecure 指 Brent 盤中曾觸及 $110.70、收市附近約
            $109.15，兩者因合約 / 時間點不同而有差異，文內已標示。FedWatch 採
            Ausecure 對 fed funds futures 的 5:00pm ET 口徑。Crypto 採 Binance
            Vision data API 20:00 UTC 1-minute
            kline。若來源時間點不同，文內已標示口徑；無可靠數據不作硬填。
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
