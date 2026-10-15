import React from "react";

const reportDate = "2026-10-14";
const publishedAt =
  "香港時間 2026-10-15 09:02（週四更新；數據截至美股 10/14 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Wednesday 10/14/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-224008b0bae0921d1e2867a4b1ecf511",
  },
  {
    name: "Reuters via Investing.com - Nasdaq ends sharply lower as hot inflation data stirs rate-hike worries",
    url: "https://www.investing.com/news/economy-news/sp-500-dow-futures-rise-ahead-of-big-bank-results-cpi-data-4948567",
  },
  {
    name: "Reuters Trading Day via Investing.com - Tech melt",
    url: "https://www.investing.com/news/economy-news/trading-day-tech-melt-4950122",
  },
  {
    name: "Investing.com - US stocks lower at close of trade / breadth",
    url: "https://www.investing.com/news/stock-market-news/us-stocks-lower-at-close-of-trade-dow-jones-industrial-average-down-009-4950017",
  },
  {
    name: "CNBC - CPI inflation report September 2026",
    url: "https://www.cnbc.com/2026/10/14/cpi-inflation-report-september-2026.html",
  },
  {
    name: "Federal Reserve - Beige Book October 2026 summary",
    url: "https://www.federalreserve.gov/monetarypolicy/beigebook202610-summary.htm",
  },
  {
    name: "Newsquawk - Treasury wrap Oct. 14 2026",
    url: "https://www.newsquawk.com/headlines/treasury-wrap-t-note-futures-z6-settle-4-ticks-higher-at-104-28",
  },
  {
    name: "CNBC - Gold drops as hot inflation boosts Fed hike bets",
    url: "https://www.cnbc.com/2026/10/14/gold-prices-hold-firm-ahead-of-us-inflation-data.html",
  },
  {
    name: "The Edge - Commodities wrap Oct. 14 2026",
    url: "https://edgeconsultancykw.com/commodities-wrap-14-october-2026/",
  },
  {
    name: "Yahoo Finance chart API / historical quotes",
    url: "https://finance.yahoo.com/quote/%5EGSPC/history/",
  },
  {
    name: "StockAnalysis - SOXX historical price data",
    url: "https://stockanalysis.com/etf/soxx/history/",
  },
  {
    name: "Smartkarma - US market movers Oct. 14 2026",
    url: "https://www.smartkarma.com/home/market-movers/us-market-movers-today-14-october-2026/",
  },
  {
    name: "CME FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
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
  "美股週三明顯轉弱：S&P 500 7,718.94（-86.51 / -1.11%）、Nasdaq 26,692.87（-511.51 / -1.88%）、Dow 51,621.48（-48.62 / -0.09%）；Russell 2000 2,729.53（-1.93%），VIX 升至 16.87（+10.48%）。",
  "主線好清楚：September CPI 熱過預期，headline +0.6% m/m、3.7% y/y，core +0.3% m/m、2.6% y/y；CME FedWatch 類口徑顯示 10 月加息機會由約 22% 升至約 37%。",
  "科技和 AI 基建鏈係最大壓力位：XLK -2.98%、SOXX -4.50%，Oracle -8.83%、Dell -11.27%、Marvell -8.73%、Nvidia -3.16%；Reuters 指市場重新計 AI buildout 融資成本。",
  "防守 rotation 明顯：XLV +2.53%、XLP +2.22%、XLE +0.64% 逆市升；UNH +4.73%、DLTR +4.71%、MRNA +4.65%、BMY +4.61% 成為 S&P 500 主要贏家。",
  "宏觀不是單純 risk-off：2Y yield 4.806%（+0.9bp），10Y 5.187%（-3.0bp），長端反而回落；DXY 約 102.55 升至 18 個月高位附近，gold 和 crypto 同步受壓。",
  "Crypto 以 Binance data API 2026-10-14 20:00 UTC 1m close（美股 4:00pm ET 附近）計：BTC $81,896.58（-1.69%）、ETH $2,434.89（-2.98%）、SOL $104.37（-2.99%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "51,621.48",
    change: "-48.62 / -0.09%",
    read: "Dow 只細跌，因 healthcare / staples 撐住；但 Caterpillar -3.08%、科技相關拖累令大市風險偏弱。",
  },
  {
    asset: "S&P 500",
    close: "7,718.94",
    change: "-86.51 / -1.11%",
    read: "AP / Reuters 終值一致，係 7 月底以來最大單日跌幅；距離上週高位回吐，市場由估值擴張轉為重新定價 inflation / Fed risk。",
  },
  {
    asset: "Nasdaq Composite",
    close: "26,692.87",
    change: "-511.51 / -1.88%",
    read: "三個月最大跌幅之一，AI infrastructure、semis、mega-cap tech 一齊受壓；融資成本上升是今日核心痛點。",
  },
  {
    asset: "Russell 2000",
    close: "2,729.53",
    change: "-53.84 / -1.93%",
    read: "小型股跌幅大過大市，反映高息和信用壓力對 broader market 更傷；breadth 明顯轉差。",
  },
  {
    asset: "VIX",
    close: "16.87",
    change: "+1.60 / +10.48%",
    read: "波幅由低位抽升，但仍未到恐慌區；比較似 event risk repricing，而不是全面去槓桿。",
  },
];

const sectorRows = [
  [
    "Health Care / XLV",
    "$173.96 / +2.53%",
    "最強",
    "防守和醫療股成為資金避風港；UNH、MRNA、BMY、MRK 等領升，抵消部分大市跌幅。",
  ],
  [
    "Consumer Staples / XLP",
    "$86.06 / +2.22%",
    "強",
    "CPI 熱、利率不確定性升，資金轉去必需消費；WMT +3.46%，Dollar Tree +4.71%。",
  ],
  [
    "Energy / XLE",
    "$67.63 / +0.64%",
    "偏強",
    "油價因中東供應風險上升，WTI 結算 $95.09；energy 仍是通脹受益板塊。",
  ],
  [
    "Materials / XLB",
    "$49.67 / -0.10%",
    "中性",
    "跌幅輕微，受美元轉強壓住，但未有科技般明顯沽壓。",
  ],
  [
    "Utilities / XLU",
    "$41.72 / -0.36%",
    "中性",
    "長端息回落幫少少，但 10Y 仍在 5.18% 附近，收益型資產未有強避險買盤。",
  ],
  [
    "Financials / XLF",
    "$54.52 / -0.55%",
    "中性偏弱",
    "大銀行表現混合，JPM / WFC 微升但 GS / Citi 下跌；市場更關心高息對 credit 與 funding cost 的壓力。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$111.50 / -0.77%",
    "偏弱",
    "熱 CPI 和利率預期升溫對可選消費估值不友善；beta 需求仍弱。",
  ],
  [
    "Real Estate / XLRE",
    "$41.49 / -0.81%",
    "偏弱",
    "10Y 雖由日高回落，但高息 regime 未變；REIT 估值仍受壓。",
  ],
  [
    "Industrials / XLI",
    "$167.04 / -0.97%",
    "偏弱",
    "CAT -3.08%，cyclical 股被長息與需求放慢憂慮拖低。",
  ],
  [
    "Communication Services / XLC",
    "$110.82 / -1.30%",
    "弱",
    "大型平台股跟隨 Nasdaq 回吐，防守性不足；資金今日更偏 healthcare / staples。",
  ],
  [
    "Technology / XLK",
    "$190.43 / -2.98%",
    "最弱",
    "AI / software / hardware 同步去估值；Oracle、Microsoft、Nvidia 令 sector 受壓。",
  ],
  [
    "Semiconductors / SOXX",
    "$519.42 / -4.50%",
    "最弱",
    "半導體連日弱勢加速，AI server / chip capex 回報期和融資成本成為市場重新定價焦點。",
  ],
];

const macroRows = [
  {
    topic: "CPI / 通脹",
    data: "CNBC 引 BLS：September CPI +0.6% m/m、3.7% y/y；core CPI +0.3% m/m、2.6% y/y，分別高過 Dow Jones consensus 的 core +0.2% / 2.5%。汽油升 9.1% 是 headline 主要推手。",
    meaning:
      "headline 熱可以歸因能源，但 core 同樣熱過預期，令市場擔心通脹擴散；這正正是科技估值被壓的導火線。",
  },
  {
    topic: "Fed / 利率路徑",
    data: "Reuters / CNBC / CME FedWatch 口徑：10 月 27-28 會議加息機會約 37%，高過週二約 22%；12 月加息概率接近 90%。Newsquawk 指盤中一度接近 50%。",
    meaning:
      "市場仍不是完全押 10 月必加，但已重新 price in 更長時間高利率；AI 和小型股最怕 financing cost 抽升。",
  },
  {
    topic: "美債息",
    data: "Newsquawk：2Y yield 4.806%（+0.9bp），10Y 5.187%（-3.0bp），30Y 5.524%（-3.9bp）；CPI 後前端先升，之後長端隨 risk-off 買盤回落。",
    meaning:
      "曲線 flatten，代表市場一方面怕 Fed 更 hawkish，另一方面又擔心再加息壓慢增長；對 high-duration growth 股不利。",
  },
  {
    topic: "美元 / 黃金",
    data: "CNBC / Ausecure：DXY 約 102.55，升約 0.35%-0.4% 至 18 個月高位附近；spot gold 約 $4,093（-1.5%），December gold settle $4,107.90（-1.66%）。",
    meaning:
      "美元強 + 實質利率預期上升，令黃金未能避險；通脹熱反而被市場理解為 Fed 壓力，而不是單純買 commodity hedge。",
  },
  {
    topic: "原油",
    data: "The Edge / CNBC：WTI settle $95.09（+$0.95 / +1.01%），Brent settle $106.06（+$0.37）；中東供應風險與沙特設施受襲消息支持油價。",
    meaning:
      "油價升令 CPI 故事更麻煩，也解釋 Energy 為何逆市升；但若油價再上，會加重 Fed 壓力。",
  },
  {
    topic: "Fed Beige Book",
    data: "Fed 10/14 Beige Book：3 個 District 指 price growth robust，8 個 moderate，其中 3 個說 input price pressures intensifying；燃油、運費、關稅、保險成本仍是壓力。",
    meaning:
      "這同 CPI 一齊強化『通脹未死』敘事；企業 margin 受擠壓，price-sensitive customers 抵抗加價。",
  },
  {
    topic: "市場廣度 / 波幅",
    data: "Investing.com：NYSE 跌股 2,097 隻、升股 656 隻；Nasdaq 跌股 2,633 隻、升股 784 隻。VIX 16.87，按日 +10.48%。",
    meaning:
      "不是得幾隻 AI 股跌，breadth 已轉差；但 VIX 未破 20，暫時仍是 repricing，不是 panic liquidation。",
  },
  {
    topic: "Crypto / 流動性",
    data: "Binance data API 20:00 UTC：BTC $81,896.58、ETH $2,434.89、SOL $104.37，較 10/13 20:00 UTC 分別 -1.69%、-2.98%、-2.99%。",
    meaning:
      "美元強、科技 beta 跌，crypto 同步受壓；ETH / SOL 跑輸 BTC，代表高 beta 風險胃納收縮。",
  },
];

const stockRows = [
  [
    "ORCL / AI debt trade",
    "ORCL $130.55 / -8.83%",
    "Reuters / CNBC 指投資者擔心 AI buildout 融資成本；Oracle 債券收益率上升，股價回吐前一日反彈。",
  ],
  [
    "DELL / HPE / AI servers",
    "DELL $507.93 / -11.27%；HPE 約 -8.2%（Reuters）",
    "Barclays 下調 AI server makers 評級，市場擔心 AI server demand、margin 和融資周期；Dell 是 S&P 500 最大跌幅之一。",
  ],
  [
    "NVDA / MRVL / SOXX",
    "NVDA $221.30 -3.16%；MRVL $245.28 -8.73%；SOXX $519.42 -4.50%",
    "半導體作為 AI trade 核心 beta，被 hot CPI + higher-for-longer 直接壓估值。",
  ],
  [
    "CoreWeave / Nebius",
    "CoreWeave 約 -15.5%；Nebius 約 -10%（Reuters / CNBC）",
    "neocloud / AI infrastructure 最受債務成本影響；CNBC 指 CoreWeave 2031/2032 債 yield 接近 15%。",
  ],
  [
    "UNH / Healthcare defensives",
    "UNH $395.62 +4.73%；MRNA $226.30 +4.65%；BMY $59.28 +4.61%",
    "Healthcare 逆市吸資，是今日最明顯 defensive rotation；UNH 成 S&P 500 top gainer。",
  ],
  [
    "DLTR / WMT / Staples",
    "DLTR $121.76 +4.71%；WMT $116.16 +3.46%",
    "必需消費受惠於 risk-off 和 consumer defensive flow；與科技股形成鮮明對比。",
  ],
  [
    "JPM / WFC / GS / C",
    "JPM $335.28 +1.16%；WFC $80.90 +0.20%；GS $878.72 -1.48%；C $122.27 -1.81%",
    "銀行股表現混合，C / GS 下跌反映投資者仍擔心 credit、funding cost 和高息下估值。",
  ],
  [
    "CAT / Industrials",
    "CAT $748.98 / -3.08%",
    "Cyclical / capex 股跟隨高息與增長憂慮回落，拖累 Dow 和 industrials。",
  ],
  [
    "MSFT / mega-cap quality",
    "MSFT $533.69 / -1.80%",
    "即使 quality mega-cap 亦要回吐，說明今次不是單一財報問題，而是 discount rate repricing。",
  ],
  [
    "BTC proxy / crypto beta",
    "BTC -1.69%，ETH -2.98%，SOL -2.99%",
    "crypto 與 Nasdaq 同步走弱；若 DXY 繼續升，alt beta 會比 BTC 更脆弱。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$81,896.58",
    "-$1,408.24 / -1.69%",
    "跌穿 $83k，守 $81k-$82k 區；若美元續強，$80k 心理位會是下一個防線。",
  ],
  [
    "ETH",
    "$2,434.89",
    "-$74.90 / -2.98%",
    "跑輸 BTC，$2,500 失守後短線轉弱；要重上 $2,500-$2,550 才算修復。",
  ],
  [
    "SOL",
    "$104.37",
    "-$3.22 / -2.99%",
    "高 beta alt 同樣受壓，$100-$102 是短線支持；重上 $108-$110 才改善。",
  ],
];

const newsItems = [
  "AP / Reuters：S&P 500 -1.11%、Nasdaq -1.88%，創 7 月底以來最差一日之一；Dow 因防守股支撐只跌 0.09%。",
  "CNBC / BLS：September CPI +0.6% m/m、3.7% y/y；core +0.3% m/m、2.6% y/y，高過核心預期，令 Fed hike odds 升溫。",
  "Reuters：AI infrastructure 和 debt-heavy tech 被 higher borrowing costs 打擊；Oracle、CoreWeave、Dell、Marvell 大跌。",
  "CNBC：CoreWeave 債券 yield 升近 15%，市場開始質疑 AI capex / circular financing 的資金成本。",
  "Fed Beige Book：燃油、運費、關稅、保險推高 input costs，多個 District 指 price pressure intensifying。",
  "Investing.com：NYSE / Nasdaq 跌股大幅多過升股，breadth 顯示沽壓已擴散。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,700 / 7,650 是短線支持；跌穿代表上週高位整固失守。",
    "7,800 / 7,850 是第一阻力；要重上才算 CPI shock 被消化。",
  ],
  [
    "Nasdaq",
    "26,600 / 26,400 是 immediate support；SOXX 再跌會測此區。",
    "27,000 / 27,200 是修復位；需要 AI 債券與 semis 停止下跌。",
  ],
  [
    "Russell 2000",
    "2,700 是心理位；失守代表高息壓力進一步打擊 breadth。",
    "2,765 / 2,785 是反彈阻力；重上才見小型股止血。",
  ],
  [
    "10Y yield",
    "5.15% 以下會幫 growth 稍為喘息。",
    "5.25%-5.30% 是壓力區；重上會再壓 Nasdaq、REIT、小型股。",
  ],
  [
    "WTI / Brent",
    "WTI $94 / Brent $104 是短線支持；跌穿可紓緩 CPI premium。",
    "WTI $96-$100 / Brent $107-$110 是風險區；突破會令 Fed trade 更 hawkish。",
  ],
  [
    "BTC",
    "$81,000 / $80,000 是短線支持；失守會拖累 ETH / SOL。",
    "$83,300 / $84,500 是修復位；要配合 DXY 回落。",
  ],
];

const planRows = [
  [
    "短線",
    "先當作 CPI shock + AI financing repricing，不急住撈科技 beta；等 10Y、DXY、SOXX、VIX 同步企穩。",
  ],
  [
    "板塊",
    "Healthcare / Staples 可作防守倉觀察；Energy 受油價支持但 headline risk 高，避免追太急。",
  ],
  [
    "Macro",
    "接下來關鍵是 Fed 官員對 CPI 的語氣、FedWatch 10 月 hike odds 有無突破 50%，以及 Beige Book 成本壓力會否延續。",
  ],
  [
    "個股",
    "AI infrastructure / server / semis 要看債券和 CDS 是否止跌；若 credit market 未穩，股價反彈都可能只是 short-cover。",
  ],
  [
    "Crypto",
    "BTC 相對仍比 ETH / SOL 穩，但全體受美元壓住；倉位要偏保守，等 BTC 重上 $83k 或 DXY 回落再加 beta。",
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

export default function USCloseBrief20261014() {
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
          {reportDate} 收市｜CPI 熱過預期，AI / 科技融資成本重估；Healthcare /
          Staples 防守輪動
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
            今日係「通脹熱過預期，市場重新計 Fed 同 AI 融資成本」。CPI
            公布後，Fed 10 月再加息機會急升，
            投資者即刻沽出最依賴平價資金和高估值敘事的 AI
            infrastructure、semis、mega-cap tech；同時資金轉入
            healthcare、staples 同部分 energy 防守。
          </p>
          <h3>資金點諗</h3>
          <ul>
            <li>
              賣高 duration growth：XLK -2.98%、SOXX -4.50%，Nasdaq 跌 1.88%。
            </li>
            <li>
              買防守現金流：XLV +2.53%、XLP +2.22%，UNH / DLTR / MRNA / BMY
              領先。
            </li>
            <li>
              AI credit market 變成股市焦點：CoreWeave 債息近 15%，Oracle / Dell
              / Marvell 股價大跌。
            </li>
            <li>
              宏觀訊號混合：2Y yield 升但 10Y 回落，反映 market 同時 price in
              Fed hawkish 和增長放慢。
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
            Sector 口徑：11 個 Select Sector SPDR ETF 及重點股票收盤採 Yahoo
            Finance chart / quote data 交叉核對；SOXX 採 Yahoo /
            StockAnalysis。XLC、XLRE、DELL、MRNA 日線 close 欄位有個別 API
            空值時，採 Yahoo chart meta regularMarketPrice。
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
              <span className="tag green">綠</span> Healthcare / Staples：XLV
              +2.53%、XLP +2.22%，明顯防守輪動。
            </li>
            <li>
              <span className="tag green">綠</span> Energy：XLE
              +0.64%，油價和地緣供應風險支撐。
            </li>
            <li>
              <span className="tag amber">黃</span> Dow：只跌
              0.09%，但內部由防守股撐住。
            </li>
            <li>
              <span className="tag amber">黃</span> VIX：16.87，升
              10.48%，但未破 20。
            </li>
            <li>
              <span className="tag red">紅</span> AI / Semis：SOXX
              -4.50%，Oracle / Dell / Marvell 急跌。
            </li>
            <li>
              <span className="tag red">紅</span> Crypto beta：BTC、ETH、SOL
              同步跌，alt 跑輸。
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
                <th>對 10/13 20:00 UTC</th>
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
            Binance data API klines 查 2026-10-14 20:00:00 UTC 1-minute kline
            close，時間點即美股正常收市 4:00pm ET 附近。對比基準為 2026-10-13
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
            最終觀點：今日不是普通回調，而是「hot CPI + AI financing
            stress」同時出現。最重要不是 Dow 跌得少，而是
            Nasdaq、SOXX、Russell、breadth 同 crypto 一齊轉弱。操作上要降低追
            beta
            的衝動，先等信用市場、10Y、美元和半導體止血；防守板塊可以留意，但都要避免在
            CPI shock 後第一日過度追高。
          </p>
        </article>

        <article className="card wide">
          <h2>12. 來源、口徑與免責聲明</h2>
          <p className="note">
            數據衝突處理：主指數採 AP / Reuters 終值，與 Yahoo chart close
            交叉核對；VIX、sector ETF、重點股票採 Yahoo Finance chart / quote
            data，SOXX 另與 StockAnalysis 交叉核對。宏觀數據採 CNBC/BLS、Fed
            Beige Book、Newsquawk、CME FedWatch、CNBC/The Edge 等；Crypto 採
            Binance data API 20:00 UTC 1-minute
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
