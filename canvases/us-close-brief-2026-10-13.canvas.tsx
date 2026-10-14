import React from "react";

const reportDate = "2026-10-13";
const publishedAt =
  "香港時間 2026-10-14 09:02（週三更新；數據截至美股 10/13 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Tuesday 10/13/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-a0a577dfd12f63ee6780a56ab02b55c4",
  },
  {
    name: "CNBC - Stock market today live updates, Oct. 13 2026",
    url: "https://www.cnbc.com/2026/10/13/stock-market-today-live-updates-.html",
  },
  {
    name: "Sharecast - US close: Stocks lower as traders digest Q3 banks earnings",
    url: "https://www.sharecast.com/news/market-report-us-close/us-close-stocks-lower-as-traders-digest-q3-banks-earnings--23841218.html",
  },
  {
    name: "thetrading.tools - Sector Performance, Oct. 13 2026 close",
    url: "https://www.thetrading.tools/sector-performance",
  },
  {
    name: "StockAnalysis - SOXX historical price data",
    url: "https://stockanalysis.com/etf/soxx/history/",
  },
  {
    name: "Morningstar / Dow Jones Data Talk - 10-year Treasury yield",
    url: "https://www.morningstar.com/news/dow-jones/202610137666/10-year-treasury-yield-falls-to-5216-data-talk",
  },
  {
    name: "Fazen Markets - Dollar slips ahead of CPI as 10Y eases",
    url: "https://fazen.markets/en/dollar-slips-ahead-of-cpi-10y-treasury-yield-eases-oil-rises",
  },
  {
    name: "FinancialMarkets.com - Treasuries rally, FedWatch odds",
    url: "https://www.financialmarkets.com/article/treasuries-rally-off-24-year-highs-but-a-december-fed-hike-is-still-priced-in",
  },
  {
    name: "investingLive - Americas FX news wrap, Oct. 13 2026",
    url: "https://investinglive.com/news/investinglive-americas-fx-news-wrap-13-oct-dollar-retreats-as-traders-await-cpi-oil-rises-and-stocks-slip/",
  },
  {
    name: "StockMinded - Oil prices hold above $100",
    url: "https://stockminded.com/2026/10/13/oil-price-today-brent-wti-investing/",
  },
  {
    name: "InvestmentNews - CPI preview",
    url: "https://www.investmentnews.com/equities/gas-prices-to-heat-up-cpi-but-core-inflation-holds-the-key-to-the-feds-october-call/268577",
  },
  {
    name: "Cboe - VIX historical data CSV",
    url: "https://cdn.cboe.com/api/global/us_indices/daily_prices/VIX_History.csv",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
  {
    name: "Binance data API klines",
    url: "https://data-api.binance.vision/",
  },
];

const keyPoints = [
  "美股週二第二日微跌，但不是恐慌式走低：Dow 51,670.10（-180.45 / -0.35%）、S&P 500 7,805.45（-1.79 / -0.02%）、Nasdaq 27,204.38（-41.52 / -0.15%）；Russell 2000 約 2,783.37（-0.40%）。",
  "表面跌幅好細，底層其實好分化：Energy +1.76% 領先，XLC +0.74%、XLU +0.58% 亦逆市升；Health Care -1.35%、Financials -0.42%、Industrials -0.28% 拖後腿。",
  "今日主線係「財報門檻高 + CPI 前觀望」：JPMorgan、Wells Fargo、Goldman、Citi 成績不算差，但股價多數倒跌；CNBC 指市場對 Q3 earnings，特別是晶片與 AI 相關估值，要求更高。",
  "大市跌得少，是因為部分 sector rotation 抵消大型拖累；但 JNJ -5.73%、Citigroup -5.60%、AMAT -6.45%、MU -4.35% 顯示 healthcare、banks、memory chips 都有壓力。",
  "宏觀上長端息稍為回落但仍高：Tradeweb / Morningstar 10Y yield 5.216%，跌 2.7bp；FedWatch 類口徑顯示 10 月 hold 約 81%，但 12 月加息仍約 74% 被定價。",
  "Crypto 以 Binance data API 2026-10-13 20:00 UTC 1m close（美股 4:00pm ET 附近）計：BTC $83,304.82（+0.50%）、ETH $2,509.79（-0.50%）、SOL $107.59（-0.71%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "51,670.10",
    change: "-180.45 / -0.35%",
    read: "早段曾升逾 460 點，但銀行、JNJ 和工業股拖累，最後由高位回落收跌；日內波幅比收市數字大。",
  },
  {
    asset: "S&P 500",
    close: "7,805.45",
    change: "-1.79 / -0.02%",
    read: "近乎平收，仍守在 7,800 附近；AP / CNBC / Sharecast 終值一致，反映大市只是高位整固而非全面撤退。",
  },
  {
    asset: "Nasdaq Composite",
    close: "27,204.38",
    change: "-41.52 / -0.15%",
    read: "晶片壓力令 Nasdaq 連續第二日偏弱；CNBC 指 SMH 連跌第六日，AI spending bubble / 中國競爭是市場焦點。",
  },
  {
    asset: "Russell 2000",
    close: "2,783.37（Google Finance / market snapshot）",
    change: "-0.40%",
    read: "小型股跌幅大過 S&P，但仍守 2,780 附近；高息環境下 breadth 不算乾淨。",
  },
  {
    asset: "VIX",
    close: "15.27（即時市場來源；Cboe 官方 CSV 暫至 10/12 close 15.21）",
    change: "+0.39%",
    read: "波幅只是輕微上升，市場更似是 CPI 前買保險，而不是急速去槓桿。",
  },
];

const sectorRows = [
  [
    "Energy / XLE",
    "$67.17 / +1.76%",
    "最強",
    "油價仍高、Middle East 風險未退，能源股成為最清晰的 inflation hedge；年初至今仍是最強 sector。",
  ],
  [
    "Communication Services / XLC",
    "$112.28 / +0.74%",
    "強",
    "上週被電訊事件拖低後反彈，CHTR +4.54%、META +2.71% 支撐；但 sector 1Y 仍跑輸 SPY。",
  ],
  [
    "Utilities / XLU",
    "$41.87 / +0.58%",
    "偏強",
    "防守資金回流，長端息回落少少幫到收益型資產；但 1Y 仍落後，未算趨勢反轉。",
  ],
  [
    "Materials / XLB",
    "$49.72 / +0.57%",
    "偏強",
    "在美元回軟與能源通脹背景下小幅領先；屬 rotation 多過單一強催化。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$112.36 / +0.08%",
    "中性",
    "近乎平收，消費股未有明顯方向；明日 CPI 與之後 retail sales 會影響估值。",
  ],
  [
    "Technology / XLK",
    "$196.28 / -0.04%",
    "中性",
    "XLK 只是微跌，但內部差異大：ORCL +4.23%、MSFT +0.43%，AMAT / MU 受壓。",
  ],
  [
    "Real Estate / XLRE",
    "$41.83 / -0.21%",
    "中性偏弱",
    "10Y 雖回落但仍在 5.2% 上方，REIT 估值仍有壓力。",
  ],
  [
    "Consumer Staples / XLP",
    "$84.19 / -0.26%",
    "中性偏弱",
    "防守股無明顯避險買盤，市場今日更偏向能源與部分通訊服務。",
  ],
  [
    "Industrials / XLI",
    "$168.67 / -0.28%",
    "偏弱",
    "Dow 成份如 CAT 受壓，油價與長息對 cyclical margin / demand 都是壓力。",
  ],
  [
    "Financials / XLF",
    "$54.82 / -0.42%",
    "偏弱",
    "大銀行財報開局不差但股價多數倒跌，反映估值已先行、投資者對 Q4 markets revenue 和 credit quality 更挑剔。",
  ],
  [
    "Health Care / XLV",
    "$169.66 / -1.35%",
    "最弱",
    "JNJ medtech revenue miss 拖累，道指與 healthcare 同步受壓；今日最大 sector laggard。",
  ],
  [
    "Semiconductors / SOXX",
    "$543.90 / -0.17%",
    "偏弱",
    "StockAnalysis 顯示 SOXX 小跌；CNBC 指 SMH 連跌第六日，市場仍擔心 AI capex 估值和中國 memory competition。",
  ],
];

const macroRows = [
  {
    topic: "Fed / 利率路徑",
    data: "FinancialMarkets.com 引 CME FedWatch 類口徑：10/27-28 會議 hold 約 81%，10 月加息機會仍低；但 12 月加息約 74% 被市場定價。",
    meaning:
      "即係市場不是押 Fed 轉鴿，只是押今個月先等數據。若明日 CPI core 熱過預期，10 月 hike odds 會即時升。",
  },
  {
    topic: "美債息",
    data: "Morningstar / Dow Jones Data Talk：10Y yield 以 Tradeweb 3pm ET close 計 5.216%，跌 2.7bp；Fazen 指 2Y 約 4.797%、30Y 約 5.566%。",
    meaning:
      "長息回落幫 S&P 守住 7,800，但 10Y 仍高過 5.2%，估值壓力未解除；5.30% 仍是科技股壓力線。",
  },
  {
    topic: "CPI / 經濟數據",
    data: "CNBC / InvestmentNews：市場等 10/14 8:30am ET September CPI；Dow Jones / WSJ consensus headline +0.6% m/m、約 3.6%-3.7% y/y，core +0.2% m/m、約 2.4%-2.5% y/y。NFIB 小企樂觀指數降至 97.9，不確定性指數 90。",
    meaning:
      "headline 受汽油推高未必最致命，真正關鍵是 core 會否擴散；如果 core 熱，Fed 12 月加息交易會再加速。",
  },
  {
    topic: "原油",
    data: "investingLive / StockMinded：WTI settle $94.14（+$0.40 / +0.43%），Brent settle $105.69（-$0.96 / -0.9%）；美國柴油仍緊張。",
    meaning:
      "油價高位是 inflation premium 來源，也是 Energy 領先的基本面；Brent 仍在 $100 以上，會令 CPI 交易保持敏感。",
  },
  {
    topic: "美元 / 黃金",
    data: "Fazen / investingLive：美元在 CPI 前回軟，DXY 約 102.26-102.39；spot gold 約 $4,159.65，跌 $12 / -0.29%；silver -1.93%。",
    meaning:
      "金價未受益於美元與長息同步回落，反映投資者等 CPI 後再決定是否加 safe-haven / inflation hedge。",
  },
  {
    topic: "市場廣度 / 波幅",
    data: "S&P 500 snapshot：約 271 隻成份股升、230 隻跌；較廣市場 breadth 偏混合。Cboe 官方 VIX CSV 執行時只更新至 10/12 close 15.21；10/13 即時來源約 15.27。",
    meaning:
      "市寬不是單邊差，但少數 mega / large-cap 的跌幅足以壓低指數；波幅仍低，代表市場暫時是觀望多過恐慌。",
  },
  {
    topic: "Crypto / 流動性",
    data: "Binance data API 20:00 UTC：BTC $83,304.82、ETH $2,509.79、SOL $107.59，較 10/12 20:00 UTC 分別 +0.50%、-0.50%、-0.71%。",
    meaning:
      "BTC 有少量避險 / risk-neutral 買盤，但 ETH、SOL 跑輸，反映 crypto beta 未全面轉強。",
  },
];

const stockRows = [
  [
    "JPM / WFC / GS / C",
    "JPM $331.43 -0.86%；WFC $80.74 -3.10%；GS $891.91 -0.23%；C $124.53 -5.60%",
    "銀行財報數字有 beat 亦有 miss，但市場反應偏負面；投資者更在意固定收益交易、Q4 markets revenue 季節性下滑、funding cost 與 credit quality。",
  ],
  [
    "JNJ",
    "$248.61 / -5.73%",
    "Q3 revenue / guidance 不差，但 MedTech revenue $8.6B 低過 consensus $8.71B，成為 healthcare 最大拖累之一。",
  ],
  [
    "AMAT / MU / SOXX",
    "AMAT $464.24 -6.45%；MU $953.19 -4.35%；SOXX $543.90 -0.17%",
    "memory / equipment 股受中國競爭與 AI spending valuation 憂慮拖累；CNBC 指半導體 ETF 連跌，科技內部仍未全面止血。",
  ],
  [
    "ORCL / MSFT / META",
    "ORCL $143.20 +4.23%；MSFT $543.45 +0.43%；META $762.50 +2.71%",
    "軟件、雲與平台股局部有買盤，抵消部分晶片壓力；反映 AI trade 不是全面崩，而是估值與盈利能見度重新排序。",
  ],
  [
    "VLO / XLE",
    "VLO $456.46 +4.69%；XLE +1.76%",
    "Energy 領先，Valero 是 S&P 500 領升股之一；油價高位與柴油供應風險令 refining / energy beta 繼續受追捧。",
  ],
  [
    "CHTR / XLC",
    "CHTR $106.95 +4.54%；XLC +0.74%",
    "通訊服務由上週電訊壓力中反彈，Charter 是 Nasdaq 100 / S&P 500 明顯贏家之一。",
  ],
  [
    "CDW",
    "$151.97 / +5.71%（Investing.com quote 口徑）",
    "成為 S&P 500 top performer 之一；但今日科技主線仍由晶片壓力主導，CDW 屬局部強勢。",
  ],
  [
    "BLK / alternative managers",
    "BLK $1,066.12 / -1.64%；BX 約 -4.2%",
    "長息高企與 analyst target cuts 令資產管理 / alternative manager 受壓，反映高估值金融股也有 duration 風險。",
  ],
  [
    "UNH / DPZ",
    "UNH $377.76 -0.20%；DPZ 財報 beat 但銷售增速放慢",
    "Sharecast 指 UnitedHealth 上調全年 profit outlook，Domino's EPS beat；但大市更集中看 JNJ、banks 和 semis。",
  ],
  [
    "BTC proxy / crypto beta",
    "BTC +0.50%，ETH -0.50%，SOL -0.71%",
    "BTC 相對硬淨，但 alt beta 未跟；如 CPI 後美元 / 長息反彈，crypto beta 仍可能回吐。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$83,304.82",
    "+$417.91 / +0.50%",
    "守在 $83k 附近，表現好過 ETH / SOL；若 CPI 後 10Y 不再抽升，短線可看 $84k-$85k。",
  ],
  [
    "ETH",
    "$2,509.79",
    "-$12.72 / -0.50%",
    "未能跟 BTC，$2,500 附近只是勉強守住；需要重上 $2,550 才算改善。",
  ],
  [
    "SOL",
    "$107.59",
    "-$0.77 / -0.71%",
    "高 beta alt 跑輸，$110 仍是短線阻力；反映市場未進入全面 risk-on。",
  ],
];

const newsItems = [
  "AP / CNBC / Sharecast：三大指數小跌，S&P 500 -0.02%、Nasdaq -0.15%、Dow -0.35%，市場在 CPI 前消化 Q3 財報。",
  "CNBC：SMH 連跌第六日，市場擔心 AI spending bubble 及中國競爭，半導體仍是 Nasdaq 壓力來源。",
  "Sharecast：JPMorgan fixed-income trading revenue 按年跌 4%，Wells Fargo revenue miss，Goldman / Citi 雖 beat 但股價回落，銀行財報門檻高。",
  "Sharecast / TipRanks：JNJ medtech revenue 未達預期拖低 Health Care；Energy +1.76% 成今日最強 sector。",
  "Morningstar / Fazen：10Y yield 回落至約 5.216%，美元回軟，但油價仍高；市場等明日 CPI 來重估 Fed 路徑。",
  "Sharecast：NFIB 小企樂觀指數跌至 97.9；existing home sales 9 月按月 +1.5% 至年率 3.99M，但按年仍跌 2.2%。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,800 / 7,765 是即市支持；跌穿 7,765 代表 CPI 前高位整固失守。",
    "7,845 是近期 record close 附近；重上才算恢復向上 momentum。",
  ],
  [
    "Nasdaq",
    "27,200 / 27,000 是短線支持帶；semis 再弱會先測此區。",
    "27,500 是修復位；要突破需要 SMH / SOXX 停止連跌。",
  ],
  [
    "Russell 2000",
    "2,780 是今日收市附近支持；失守代表 breadth 和小型股風險轉差。",
    "2,800 / 2,830 是第一阻力；突破才代表高息壓力暫時被消化。",
  ],
  [
    "10Y yield",
    "5.20% 以下會幫科技估值喘息。",
    "5.30%-5.36% 是壓力區；重上會壓 Nasdaq、REIT、小型股。",
  ],
  [
    "WTI / Brent",
    "WTI $92 / Brent $103 是短線支持；跌穿才可紓緩 inflation premium。",
    "WTI $95 / Brent $106-$107 是阻力；突破會令 CPI / Fed trade 再緊張。",
  ],
  [
    "BTC",
    "$82,500 / $82,000 是短線支持；失守會拖累 crypto beta。",
    "$84,000-$85,000 是反彈確認位；需要 ETH / SOL 跟升才算健康。",
  ],
];

const planRows = [
  [
    "短線",
    "今日不是大跌，但係「高位等 CPI」。核心倉可留，追高 beta 前要等 CPI 和 10Y yield 反應。",
  ],
  [
    "板塊",
    "Energy 有基本面支持但已強，要防油價 headline 反轉；Health Care / Financials 要等財報 call 後再判斷是否錯殺。",
  ],
  [
    "Macro",
    "明日 CPI 最重要是 core。如果 headline 熱但 core 溫和，市場可能接受；若 core 同步熱，Fed 10 月或 12 月 hike odds 會再升。",
  ],
  [
    "個股",
    "銀行股財報反應顯示好消息未必夠，短線不要只看 EPS beat；要看 revenue quality、NII guidance、交易收入季節性與 credit commentary。",
  ],
  [
    "Crypto",
    "BTC 比 ETH / SOL 硬淨，倉位可以偏 BTC；alt beta 要等 SOL 重上 $110、ETH 重上 $2,550 才加信心。",
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

export default function USCloseBrief20261013() {
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
          background: linear-gradient(135deg, #1e3a8a 0%, #0f766e 52%, #111827 100%);
          color: white;
          border-radius: 26px;
          padding: 30px;
          box-shadow: 0 22px 45px rgba(15, 118, 110, 0.24);
        }
        .eyebrow { letter-spacing: 0.12em; text-transform: uppercase; font-size: 13px; opacity: 0.85; }
        h1 { margin: 8px 0 10px; font-size: 44px; line-height: 1.08; }
        .subtitle { font-size: 18px; opacity: 0.94; max-width: 940px; }
        .meta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 18px; }
        .pill { background: rgba(255,255,255,0.16); border: 1px solid rgba(255,255,255,0.32); padding: 8px 12px; border-radius: 999px; font-size: 13px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 18px; }
        .card { background: white; border: 1px solid #e2e8f0; border-radius: 22px; padding: 20px; box-shadow: 0 12px 30px rgba(15, 23, 42, 0.07); break-inside: avoid; }
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
          .card { box-shadow: none; }
          a { color: #1d4ed8; }
        }
      `}</style>

      <section className="hero">
        <div className="eyebrow">US Close Brief</div>
        <h1>美股收盤懶人包｜完整版</h1>
        <div className="subtitle">
          {reportDate} 收市｜銀行財報門檻高，CPI 前大市微跌；Energy
          逆市強，Health Care / Banks / Semis 分化受壓
        </div>
        <div className="meta">
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">語言：繁體中文 / 自然廣東話</span>
          <span className="pill">
            Crypto：Binance data API 20:00 UTC 1m close
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
            今日係「財報不差但股價唔收貨，CPI 前資金唔敢太進取」。
            大銀行率先放榜，盈利有 beat 亦有 miss，但市場焦點放在 revenue
            quality、交易收入能否延續、以及高息環境下的 credit 風險；同時晶片股
            仍受 AI capex / 中國競爭疑慮影響。
          </p>
          <h3>資金點諗</h3>
          <ul>
            <li>買能源避通脹：XLE +1.76%，油價仍在高位。</li>
            <li>
              銀行財報門檻高：JPM / WFC / GS / C 多數收跌，即使部分數字 beat
              亦未能推高股價。
            </li>
            <li>
              晶片不是全面崩，但仍弱：SOXX 小跌，SMH 連跌，AMAT / MU
              受壓，市場繼續審視 AI spending 回報期。
            </li>
            <li>
              明日 CPI 是主菜：headline 受 gasoline 推高已被預期，core 才是決定
              Fed 路徑的關鍵。
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
            Sector 口徑：11 個 Select Sector SPDR ETF 採 thetrading.tools 10/13
            close 表；SOXX 採 StockAnalysis close；與 CNBC / Sharecast
            當日市場敘述交叉核對。
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
              <span className="tag green">綠</span> Energy：XLE +1.76%，VLO
              +4.69%，油價高位下仍是最清晰領袖。
            </li>
            <li>
              <span className="tag green">綠</span> Communication Services： XLC
              +0.74%，CHTR / META 撐住。
            </li>
            <li>
              <span className="tag amber">黃</span> 大市：S&P 500 -0.02%，
              高位橫行，未跌穿 7,800。
            </li>
            <li>
              <span className="tag amber">黃</span> Crypto：BTC 微升，但 ETH /
              SOL 跑輸，risk-on 不完整。
            </li>
            <li>
              <span className="tag red">紅</span> Banks：JPM / WFC / GS / C
              財報後多數下跌。
            </li>
            <li>
              <span className="tag red">紅</span> Health Care / Semis：XLV
              -1.35%，AMAT / MU 明顯受壓。
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
                <th>對 10/12 20:00 UTC</th>
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
            口徑：Binance spot API 在此環境對 api.binance.com 受地區限制；採
            Binance data API klines 查 2026-10-13 20:00:00 UTC 1-minute kline
            close，時間點即美股正常收市 4:00pm ET 附近。對比基準為 2026-10-12
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
            最終觀點：今日大市只是微跌，但「微跌」背後是明顯分化：Energy
            抗通脹、banks 財報被挑剔、health care 被 JNJ 拖低、semis 繼續消化 AI
            估值壓力。操作上唔需要因一日小跌而全面撤退，但要尊重 CPI event
            risk；等 CPI 後 10Y、美元、SOXX 和 BTC 的同步反應，再決定是否加
            beta。
          </p>
        </article>

        <article className="card wide">
          <h2>12. 來源、口徑與免責聲明</h2>
          <p className="note">
            數據衝突處理：主指數採 AP / CNBC / Sharecast 終值；Russell 2000、
            VIX 與 breadth 因官方/即時來源更新時間不同，列明口徑。Cboe 官方 VIX
            CSV 在本次執行時只更新至 10/12，故 10/13 VIX 用即時市場來源並註明。
            Yahoo chart API 本次回傳 HTTP 429，沒有用作即日行情主來源。板塊採
            thetrading.tools ETF close 表；SOXX 採 StockAnalysis。美債採
            Morningstar / Tradeweb 與 Fazen；油價採 investingLive /
            StockMinded； Crypto 採 Binance data API 20:00 UTC 1-minute kline。
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
