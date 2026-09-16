import React from "react";

const reportDate = "2026-09-15";
const publishedAt = "香港時間 2026-09-16 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP / WTOP - How major US stock indexes fared Tuesday 9/15/2026",
    url: "https://wtop.com/national/2026/09/how-major-us-stock-indexes-fared-tuesday-9-15-2026/",
  },
  {
    name: "CNBC - Stock market today live updates, September 15 2026",
    url: "https://www.cnbc.com/2026/09/15/stock-market-today-live-updates.html",
  },
  {
    name: "Reuters - Bond selloff drives US benchmark beyond 5%; stocks rattled",
    url: "https://www.reuters.com/world/asia-pacific/bond-selloff-drives-us-benchmark-beyond-5-stocks-rattled-2026-09-15/",
  },
  {
    name: "Reuters - Dollar higher as oil lifts yields and Fed hike looms",
    url: "https://www.reuters.com/world/africa/dollar-near-two-week-high-oil-surge-lifts-yields-fed-hike-bets-2026-09-15/",
  },
  {
    name: "Newsquawk - WTI and Brent settlement wrap",
    url: "https://www.newsquawk.com/headlines/crude-wrap-wti-v6-settles-usd-444-higher-at-10583bbl-brent-x6-settles-usd-307-higher-at-10875bbl",
  },
  {
    name: "Reuters via Euronext - Oil jumps as Saudi and Libya supply fears mount",
    url: "https://live.euronext.com/en/financial-news/oil-jumps-nearly-3-saudi-export-halt-libya-outages-stoke-supply-fears",
  },
  {
    name: "Federal Reserve - FOMC calendars and information",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Kitco / Reuters - Gold eases on stronger US rate hike odds",
    url: "http://www.kitco.com/news/off-the-wire/2026-09-15/gold-eases-stronger-us-rate-hike-odds",
  },
  {
    name: "Market quote snapshots - ETF and stock closes, dated 2026-09-15",
    url: "https://exa.ai/library/markets/stock/SPY?date=2026-09-15",
  },
  {
    name: "Cboe VIX historical data reference",
    url: "https://www.cboe.com/tradable_products/vix/vix_historical_data/",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const keyPoints = [
  "美股連跌第二日，但未見 panic：Dow 52,093.11（-328.09 / -0.63%）、S&P 500 7,585.73（-34.25 / -0.45%）、Nasdaq 25,981.57（-204.84 / -0.78%）、Russell 2000 2,870.29（-21.95 / -0.76%）。",
  "主線仍是油價 + 債息：Reuters 指 10Y yield 盤中高見 5.041%、尾段仍接近 5.00%；Newsquawk 報 WTI settle $105.83、Brent $108.75，通脹和融資成本一起壓估值。",
  "Fed 會議第一日開始，市場幾乎 price in 週三加 25bp：CNBC 報約 92%，Reuters 報 CME FedWatch 近 95%，Fox/Kiplinger 約 92%-93%；差異主要來自截數時間。",
  "板塊由昨日 cyber/防守跑出，變成今日 energy 獨強、consumer discretionary 最弱：XLE 約 +2.17%，XLY 約 -1.75%，XLU 約 -1.20%，SOXX 只是小幅反彈至約 +0.29%。",
  "個股不是同一方向：CRWD 再升至 $242.49（+3.02%），AMD +2.19%、GEV +0.92%；但 ORCL -3.07%、AMZN -2.02%、MSFT -1.64%、GOOGL -1.26%，growth/mega-cap 仍受 5% yield 壓住。",
  "Crypto 採 Binance Vision 2026-09-15 20:00 UTC 1m close（美股 4:00pm ET 附近）：BTC $76,240.04（較 9/14 20:00 UTC -3.47%）、ETH $2,418.04（-4.82%）、SOL $98.07（-5.01%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "52,093.11",
    change: "-328.09 / -0.63%",
    read: "AP/WTOP 給出精確收市，CNBC/Reuters 方向一致；跌幅由油價和長債息推高主導。",
  },
  {
    asset: "S&P 500",
    close: "7,585.73",
    change: "-34.25 / -0.45%",
    read: "跌約半個百分點，仍是有秩序減風險；接近 7,600 心理位但未能收上。",
  },
  {
    asset: "Nasdaq Composite",
    close: "25,981.57",
    change: "-204.84 / -0.78%",
    read: "科技和高估值股對 10Y 近 5% 最敏感，Nasdaq 表現落後。",
  },
  {
    asset: "Russell 2000",
    close: "2,870.29",
    change: "-21.95 / -0.76%",
    read: "小型股同樣受融資成本和風險胃納下降影響，breadth 無改善。",
  },
  {
    asset: "VIX",
    close: "17.20（WSJ / Cboe quote 口徑）",
    change: "+0.10 / +0.58%",
    read: "波動只小升，反映市場係慢性 tighten financial conditions，而不是突然恐慌。",
  },
];

const sectorRows = [
  [
    "Energy / XLE",
    "$65.93 / +2.17%",
    "最強",
    "油價急升令 energy 成為最清晰避風港；但要留意油升同時令通脹和 Fed 壓力更大。",
  ],
  [
    "Materials / XLB",
    "$50.73 / +0.48%",
    "強",
    "相對受惠 commodity/inflation beta，但升幅不大，代表不是全面追商品股。",
  ],
  [
    "Semiconductors / SOXX",
    "$498.85 / 約 +0.29%",
    "中性",
    "昨日急跌後有技術反彈，AMD/MU 回升，但仍未收復 $500-$505 壓力區。",
  ],
  [
    "Health Care / XLV",
    "$167.66 / -0.05%",
    "中性",
    "防守屬性幫手，但今日資金重點轉去 energy，醫療只是守得住。",
  ],
  [
    "Technology / XLK",
    "$183.74 / -0.29%",
    "偏弱",
    "半導體反彈不足以抵消 Microsoft、Oracle 等軟件/雲估值壓力。",
  ],
  [
    "Financials / XLF",
    "$56.85 / -0.32%",
    "偏弱",
    "高息有利息差，但長債急升也帶來信用、資產負債表與經濟放慢擔憂。",
  ],
  [
    "Communication Services / XLC",
    "$114.03 / -0.90%",
    "弱",
    "昨日跑出後回吐；Alphabet 下跌抵消 Meta 相對韌性。",
  ],
  [
    "Consumer Staples / XLP",
    "$83.73 / -0.82%",
    "弱",
    "油價推高成本，staples 今日未能延續昨日 defensive bid。",
  ],
  [
    "Industrials / XLI",
    "$168.85 / -0.64%",
    "弱",
    "資料中心電力鏈昨日大跌後只局部反彈，整體工業仍受長息和 capex 疑慮拖住。",
  ],
  [
    "Real Estate / XLRE",
    "$43.07 / -0.12%",
    "弱",
    "長端債息接近 5%，REITs 估值和融資成本仍未有喘息空間。",
  ],
  [
    "Utilities / XLU",
    "$41.32 / -1.20%",
    "更弱",
    "yield proxy 在債息急升時吸引力下降，防守資金未必選 utilities。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$110.88 / -1.75%",
    "最弱",
    "油價高、借貸成本升，直接壓消費和長久期消費股；Reuters 亦指 discretionary 是主要落後板塊。",
  ],
];

const macroRows = [
  {
    topic: "Fed / 利率定價",
    data: "FOMC 9/15-9/16 會議進行中；CNBC 報 25bp 加息機率約 92%，Reuters 報 CME FedWatch 近 95%，Fox/Kiplinger 約 92%-93%，目標區間預期升至 3.75%-4.00%。",
    meaning:
      "市場已經不是問『會不會加』，而是問 Warsh 會否暗示之後還有一串加息。",
  },
  {
    topic: "美債息",
    data: "Reuters：10Y yield 盤中高見 5.041%，尾段 just under 5.004%；AP/LA Times 指由 4.97% 升至約 5.00%，並曾觸 5.04%。2Y quote 約 4.66%-4.68%。",
    meaning:
      "5% 10Y 是估值重定價線；只要守在附近，growth、REITs、小型股都難有順風。",
  },
  {
    topic: "原油",
    data: "Newsquawk：WTI +$4.44 settle $105.83；Brent +$3.07 settle $108.75。Reuters 指 Saudi Yanbu loadings 暫停、歐洲 cargo 取消，Libya 三個油田停運。",
    meaning:
      "油價升不是單純利好能源股；它會把通脹、消費成本和 Fed 反應函數全部推硬。",
  },
  {
    topic: "美元",
    data: "Reuters：美元指數升 0.15% 至 99.631，接近兩星期高位；主要受油價推升債息和 Fed hike 預期支持。",
    meaning: "強美元令國際收入折算和風險資產估值更難受，亦壓住黃金和 crypto。",
  },
  {
    topic: "黃金",
    data: "Kitco / Reuters：spot gold 早段約 $4,266.49（-0.7%）；美國午後報 Comex gold settle 約 $4,291.60（-0.43%）。",
    meaning: "地緣風險有支持，但強美元、真實利率和加息預期蓋過避險需求。",
  },
  {
    topic: "經濟數據 / 明日焦點",
    data: "Fed calendar 顯示 9/16 2:00pm ET 公布 FOMC 決議與 SEP/dot plot；市場日曆顯示 9/16 8:30am ET 有 8 月 retail sales 及進出口價格。",
    meaning:
      "下一個交易日是 binary macro day；倉位應先控制 gap risk，再看債息與美元反應。",
  },
];

const stockRows = [
  [
    "Nvidia / SOXX",
    "NVDA $212.17 / +0.57%; SOXX $498.85 / 約 +0.29%",
    "晶片股在昨日 AI slowdown selloff 後小反彈，但 Nasdaq 仍跌，代表 semis 只是止血，未足以帶市。",
  ],
  [
    "AMD / Micron / Intel / Broadcom",
    "AMD +2.19%; MU +0.39%; INTC -0.05%; AVGO -1.58%",
    "AI hardware 內部分化：AMD 有買盤，Broadcom 仍受估值與 capex 節奏疑慮拖累。",
  ],
  [
    "CrowdStrike / Palo Alto",
    "CRWD $242.49 / +3.02%; PANW $375.09 / +0.31%",
    "Cybersecurity 延續昨日 relative strength，但 PANW 升幅明顯縮細，追價值博率下降。",
  ],
  [
    "GE Vernova / Eaton / Corning",
    "GEV $882.81 / +0.92%; ETN $392.40 / -0.19%; GLW $143.57 / -0.02%",
    "Data-center power/光纖鏈昨日急跌後企穩，但仍未修復 GLJ sell rating、稀釋和 AI capex 降溫的壓力。",
  ],
  [
    "Oracle / Microsoft",
    "ORCL $140.35 / -3.07%; MSFT $497.12 / -1.64%",
    "高長久期軟件/雲 capex 故事在 10Y 近 5% 時被重新折現，Oracle 仍是最弱一環。",
  ],
  [
    "Alphabet / Meta",
    "GOOGL $344.98 / -1.26%; META $670.24 / +0.70%",
    "平台股分化，Meta 守得較好；Alphabet 回吐令 XLC 由昨日最強變今日偏弱。",
  ],
  [
    "Apple / Tesla / Amazon",
    "AAPL $331.34 / -0.52%; TSLA $356.58 / -0.67%; AMZN $248.42 / -2.02%",
    "Consumer/growth beta 一起受油價、利率和消費壓力影響，Amazon 跌幅最明顯。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$76,240.04",
    "-3.47%",
    "由 $78,984.01 回落；股市 risk-off、美元和實質利率上行令 BTC 承接轉弱。",
  ],
  [
    "ETH",
    "$2,418.04",
    "-4.82%",
    "跌幅大過 BTC，smart-contract beta 在 Fed 前明顯減風險。",
  ],
  [
    "SOL",
    "$98.07",
    "-5.01%",
    "失守 $100 附近，high beta crypto 對宏觀壓力最敏感。",
  ],
];

const newsItems = [
  "10Y 美債息再觸 5%：Reuters 指 10Y 高見 5.041%，AP 指收市附近約 5.00%，市場把更高借貸成本重新折入股價。",
  "油價再急升：Saudi East-West pipeline/Yanbu、Libya 油田和 Hormuz 風險同時發酵，WTI settle $105.83、Brent $108.75。",
  "Fed 會議開始：9/16 將公布決議、SEP 和 dot plot；FedWatch/主流媒體顯示 25bp 加息幾乎成為 base case。",
  "板塊輪動由 cyber/defensive 變 energy：能源股升幅最清楚，consumer discretionary 因油價和利率成為最弱板塊。",
  "AI trade 進入第二日消化：晶片股局部止跌，但 megacap growth/雲軟件仍受長息壓住，投資者未急於全面買回風險。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,560-7,585 是今日收市/日低承接區；跌穿會先看 7,520，再看 7,500 心理位。",
    "7,600 是第一關；要收復 7,620-7,657，才算扭轉連跌兩日的弱勢。",
  ],
  [
    "Nasdaq",
    "25,900-26,000 是短線風險區，失守代表 growth beta 仍要降倉。",
    "26,186（9/14 close）是第一阻力；要突破需 10Y 回落和 semis 持續止跌。",
  ],
  [
    "SOXX",
    "$496-$499 是今日低位/收市區；跌穿代表昨日 selloff 未完成修復。",
    "$502-$505 是即市阻力，$520-$527 是真正修復區。",
  ],
  [
    "10Y yield",
    "4.95%-5.00% 是 equities 的估值壓力線；若低於 4.95%，Nasdaq 才較易喘息。",
    "5.04% 是今日高位；若突破並企穩，市場會 price 更鷹 Fed path。",
  ],
  [
    "WTI crude",
    "$103-$105 是通脹壓力區；跌回 $101-$102 以下才算油 shock 初步降溫。",
    "$106.75 附近是日內高位；突破會令 Fed/consumer pressure 再升級。",
  ],
];

const planRows = [
  [
    "短線",
    "FOMC 前不宜把單日跌幅當便宜；先睇 10Y 能否回落、油價是否跌穿 $103，以及 S&P 500 能否重上 7,600。",
  ],
  [
    "板塊",
    "Energy 有 momentum 但已帶來 macro side-effect；consumer discretionary、utilities、REITs 在高息下仍弱，防守不等於無風險。",
  ],
  [
    "個股",
    "Cybersecurity relative strength 仍在，但 CRWD 連升後要等回調；Oracle/Microsoft/Amazon 是觀察 growth multiple 壓力的溫度計。",
  ],
  [
    "Macro",
    "明日重點是 Fed statement、SEP/dot plot 和 Warsh press conference；市場最怕不是 25bp，而是『加息周期重開』語氣。",
  ],
  [
    "Crypto",
    "BTC/ETH/SOL 同步回落，說明 crypto 沒有避開美元/實質利率壓力；Fed 前倉位要預留波幅。",
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

export default function USCloseBrief20260915() {
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
          background: linear-gradient(135deg, #7f1d1d 0%, #b91c1c 52%, #111827 100%);
          color: white;
          border-radius: 26px;
          padding: 30px;
          box-shadow: 0 22px 45px rgba(127, 29, 29, 0.25);
        }
        .eyebrow { letter-spacing: 0.12em; text-transform: uppercase; font-size: 13px; opacity: 0.85; }
        h1 { margin: 8px 0 10px; font-size: 44px; line-height: 1.08; }
        .subtitle { font-size: 18px; opacity: 0.94; max-width: 940px; }
        .meta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 18px; }
        .pill { background: rgba(255,255,255,0.16); border: 1px solid rgba(255,255,255,0.32); padding: 8px 12px; border-radius: 999px; font-size: 13px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 18px; }
        .card { background: white; border: 1px solid #e2e8f0; border-radius: 22px; padding: 20px; box-shadow: 0 12px 30px rgba(15, 23, 42, 0.07); break-inside: avoid; }
        .wide { grid-column: 1 / -1; }
        h2 { margin: 0 0 12px; color: #991b1b; font-size: 23px; }
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
          {reportDate} 收市｜油價與 5% 美債息壓住風險胃納；Fed
          會議前連跌第二日，energy 獨強、growth 與 crypto 回落
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
            今晚是「oil shock + bond shock + Fed event risk」三件事一齊壓市。
            油價因 Saudi Yanbu、East-West pipeline、Libya 和 Hormuz
            供應風險再抽上，10Y 美債息貼住 5% 甚至一度升穿，令市場覺得 Fed
            不止明日加 25bp，之後還可能要 keep hiking。
            所以資金不是因單一盈利新聞走，而是先減長久期 growth、消費和
            rate-sensitive 倉位。
          </p>
          <h3>資金點諗</h3>
          <ul>
            <li>Energy 因油價上升而跑出，但它同時是大市壓力來源。</li>
            <li>
              Semis 由昨日急跌後小幅反彈，但 Nasdaq 仍跌，代表 AI trade
              未完成修復。
            </li>
            <li>VIX 只微升，說明不是恐慌式沽貨，而是 Fed 前慢慢收縮風險。</li>
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
                      className={`tag ${state === "最強" || state === "強" ? "green" : state === "中性" ? "amber" : "red"}`}
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
            Sector proxy 使用 2026-09-15 4:00pm ET 附近市場截數/quote
            snapshot；Yahoo chart endpoint 今次全數 HTTP 429，故以 公開 quote
            snapshots 與 Reuters/CNBC 板塊敘事交叉核對。部分來源報 20:00 UTC
            附近價而非官方 ETF 日線，差異已在第 12 部分說明。
          </p>
        </article>

        <article className="card">
          <h2>5. 五大新聞</h2>
          <ol>
            {newsItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>

        <article className="card">
          <h2>6. 市場熱度圖（文字版）</h2>
          <ul>
            <li>
              <span className="tag green">綠</span> Energy：XLE
              +2.17%，油價升直接推高 sector beta。
            </li>
            <li>
              <span className="tag green">綠</span> Cybersecurity：CRWD
              延續強勢，但 PANW 升幅收窄，屬 selective bid。
            </li>
            <li>
              <span className="tag amber">黃</span> Semis：SOXX
              小升，不過仍貼昨日低位 後的修復區。
            </li>
            <li>
              <span className="tag red">紅</span> Consumer discretionary：XLY
              -1.75%， 油價和利率直接壓消費。
            </li>
            <li>
              <span className="tag red">紅</span> Crypto：BTC/ETH/SOL 同步跌
              3%-5%， high beta 先行降風險。
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
                <th>Binance Vision 20:00 UTC close</th>
                <th>對 9/14 20:00 UTC</th>
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
            口徑：直接 Binance spot API 在此環境曾受地區限制，因此採 Binance
            Vision public data API 1-minute kline；時間點為 2026-09-15 20:00:00
            UTC，即美股正常收市 4:00pm ET 附近。對比基準為上一交易日 2026-09-14
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
          <h2>11. 明日 / 下週觀察清單與操作提示</h2>
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
            最終觀點：今晚跌市不是單純 AI headline，而是油價、債息和 Fed
            同時迫市場重新估值。若明日 Fed 只加 25bp 並成功壓住長端債息， S&P
            500 有機會在 7,560-7,600 附近企穩；相反若 Warsh 語氣偏向重啟
            加息周期、10Y 企穩 5% 以上，growth、consumer 和 crypto
            仍會是風險出口。
          </p>
        </article>

        <article className="card wide">
          <h2>12. 來源、口徑與免責聲明</h2>
          <p className="note">
            數據衝突處理：指數收市採 AP/WTOP 精確點數，並與 CNBC/Reuters
            百分比敘事核對；部分即時市場頁面顯示 S&P 500 約 7,580 或日內截數，
            主文不採用作官方 close。ETF/個股因 Yahoo chart 今次 HTTP 429，採公開
            quote snapshots 的 2026-09-15 close/previous close，並以
            Reuters/CNBC 板塊敘事確認方向；油價採 Newsquawk
            settlement，Reuters/Euronext 作供應背景；FedWatch 因截數時間由 92%
            至 95% 不等，主文寫範圍；VIX 採 WSJ/Cboe quote 17.20，FRED/Cboe
            公開歷史表可能滯後；Crypto 採 Binance Vision 20:00 UTC 1-minute
            kline。
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
