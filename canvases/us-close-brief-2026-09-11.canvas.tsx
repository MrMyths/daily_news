import React from "react";

const reportDate = "2026-09-11";
const publishedAt = "香港時間 2026-09-14 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP / WTOP - How major US stock indexes fared Friday 9/11/2026",
    url: "https://wtop.com/national/2026/09/how-major-us-stock-indexes-fared-friday-9-11-2026/",
  },
  {
    name: "Reuters via MarketScreener - Wall Street rallies as oil retreats and CPI boosts hike bets",
    url: "https://uk.marketscreener.com/news/wall-street-rallies-as-strong-inflation-data-cements-rate-hike-bets-ce785bdfde8bf427",
  },
  {
    name: "Investing.com - US stocks higher at close of trade",
    url: "https://www.investing.com/news/stock-market-news/us-stocks-higher-at-close-of-trade-dow-jones-industrial-average-up-098-4898414",
  },
  {
    name: "Newsquawk - US Market Wrap after hot core CPI",
    url: "https://www.newsquawk.com/headlines/newsquawk-us-market-wrap-markets-chop-and-yields-flatten-after-hot-core-cpi-boosts-fed-rate-hike-bets",
  },
  {
    name: "Newsquawk - Treasury wrap",
    url: "https://www.newsquawk.com/headlines/treasury-wrap-t-note-futures-z6-settle-8-ticks-lower-at-106-03",
  },
  {
    name: "MarketScreener / Reuters - Treasury yields after CPI",
    url: "https://www.marketscreener.com/news/treasuries-us-yields-rise-after-inflation-data-fuels-rate-hike-bets-ce785bdfde8df620",
  },
  {
    name: "BLS - Consumer Price Index News Release, August 2026",
    url: "https://www.bls.gov/news.release/archives/cpi_09112026.htm",
  },
  {
    name: "CNBC - CPI inflation report August 2026",
    url: "https://www.cnbc.com/2026/09/11/cpi-inflation-report-august-2026.html",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Reuters - Oil slips but remains above $100 as Middle East risks persist",
    url: "https://www.reuters.com/business/energy/oil-prices-set-end-week-over-100-first-time-nearly-4-months-2026-09-11/",
  },
  {
    name: "InvestingLive - Americas FX news wrap 11 Sept",
    url: "https://investinglive.com/news/investinglive-americas-fx-news-wrap-11-sept-us-cpi-keeps-fed-raises-odds-for-fed-rate-hike/",
  },
  {
    name: "StockTitan - Oracle Q1 FY2027 8-K filing summary",
    url: "https://www.stocktitan.net/sec-filings/ORCL/8-k-oracle-corp-reports-material-event-f6fd400760ec.html",
  },
  {
    name: "TECHi - HPE/Dell rally on Oracle capex read-through",
    url: "https://www.techi.com/why-hpe-stock-jumped-oracle-capex-purchase-obligations/",
  },
  {
    name: "Swingfolio - September 11 market close and sector proxy snapshot",
    url: "https://swingfolio.com/daily/us/2026-09-11/afternoon",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const keyPoints = [
  "美股止跌反彈：Dow 52,573.29（+509.19 / +0.98%）、S&P 500 7,656.98（+65.28 / +0.86%）、Nasdaq 26,333.04（+251.31 / +0.96%）、Russell 2000 2,903.94（+13.00 / 約 +0.4%）。",
  "今日主線係「油價回落救風險胃納，但核心 CPI 偏熱令 Fed 加息機率升」；AP/Reuters/Newsquawk 均指美股由四連跌中反彈。",
  "CPI 不是全面爆雷：headline CPI +0.4% m/m、+3.4% y/y 符合預期；但 core CPI +0.3% m/m，高過 0.2% 預期，令 9 月加 25bp 機率升至約 86%。",
  "板塊以 Communication Services、Technology、Industrials、Consumer Discretionary 領先；Utilities、Health Care 為少數下跌板塊，反映不是單純 defensive rotation。",
  "AI 硬件鏈強：Oracle 指引與 capex 讀通帶動 HPE +12.44%、DELL +11.98%、NTAP +8.54%、ANET +5.61%；Oracle 本身則回落約 -1.7%。",
  "宏觀仍有壓力：2Y 約 4.63%、10Y 約 4.97%、30Y 約 5.36%，曲線 flattening；油雖跌但 WTI 仍約 $100，通脹風險未解除。",
  "Crypto 採 Binance Vision 2026-09-11 20:00 UTC 1m close（即美股 4:00pm ET 附近）：BTC $77,290.00（24h +0.14%）、ETH $2,539.47（+3.08%）、SOL $102.04（+2.21%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "52,573.29",
    change: "+509.19 / +0.98%",
    read: "藍籌由四連跌反彈，油價回落令市場暫時放低滯脹擔心。",
  },
  {
    asset: "S&P 500",
    close: "7,656.98",
    change: "+65.28 / +0.86%",
    read: "AP/WTOP、WSJ 搜尋摘要與 Reuters/MarketScreener 收市表方向一致；主升幅由科技、通訊服務及工業貢獻。",
  },
  {
    asset: "Nasdaq Composite",
    close: "26,333.04",
    change: "+251.31 / +0.96%",
    read: "AI 硬件與大型科技反彈抵消 core CPI 偏熱；但 10Y 接近 5%，估值上限仍在。",
  },
  {
    asset: "Russell 2000",
    close: "2,903.94",
    change: "+13.00 / 約 +0.4%",
    read: "小盤有反彈但跑輸大型股，因短端息升至約 4.63%，融資敏感股仍被壓住。",
  },
  {
    asset: "VIX",
    close:
      "15.84（第三方收市快照；FRED/Cboe 公開頁截數時只更新至 9/10 的 17.84）",
    change: "約 -11.2%",
    read: "油價回落令波動率降溫；但官方歷史頁有更新滯後，本文明確標示口徑，避免過度假精準。",
  },
];

const sectorRows = [
  [
    "Communication Services / XLC",
    "約 +0.99% 至 +1.35%",
    "最強",
    "Alphabet 等 mega-cap 帶動，Newsquawk/Gate 均指通訊服務跑贏。",
  ],
  [
    "Technology / XLK",
    "約 +1.1% 至 +1.32%",
    "最強",
    "Oracle capex 讀通推高 AI server、networking、storage 供應鏈；但 Oracle 本身未能守住升幅。",
  ],
  [
    "Industrials / XLI",
    "約 +1.07%",
    "強",
    "基建、電力設備、AI data-center buildout 相關名字受捧。",
  ],
  [
    "Consumer Discretionary / XLY",
    "約 +0.89% 至 +1.1%",
    "強",
    "油價回落紓緩消費成本壓力，Amazon 等大型權重反彈。",
  ],
  [
    "Financials / XLF",
    "約 +0.67%",
    "中性偏強",
    "收益率曲線 flattening 對銀行不是全然利好，但整體 risk-on 幫到金融股。",
  ],
  [
    "Semiconductors / SMH",
    "約 +1.47%",
    "強",
    "硬件鏈修復，惟 NVDA 收市近乎持平，升幅集中在伺服器/儲存/網絡設備。",
  ],
  [
    "Energy / XLE",
    "小幅正負不一；多數收市評論指 laggard",
    "偏弱",
    "油價由高位回落，能源股不像前一日般領漲；不同 ETF/板塊來源對 close-to-close 口徑有差異。",
  ],
  [
    "Health Care / XLV",
    "約 -0.14% 至 -0.18%",
    "弱",
    "防守板塊未受追捧，資金偏向回補高 beta 與 AI 基建鏈。",
  ],
  [
    "Utilities / XLU",
    "約 -0.31% 至 -0.34%",
    "最弱",
    "高息環境下，yield proxy 缺乏吸引力；今日是 risk rebound，不是傳統避險盤。",
  ],
];

const macroRows = [
  {
    topic: "CPI / 通脹",
    data: "BLS：8 月 CPI +0.4% m/m、+3.4% y/y；core CPI +0.3% m/m、+2.4% y/y。CNBC/Newsquawk 指 core m/m 高過 +0.2% 預期。",
    meaning:
      "Headline 合預期，但 core 黏住，Fed 下週不加息的理由變少；市場先跌後升，反映油價回落抵消部分壓力。",
  },
  {
    topic: "FedWatch / 利率定價",
    data: "CME FedWatch 引用口徑約 85%-86.5% 機率 9 月 16 日加 25bp，較前一日約 72% 明顯上升；部分收市評論寫接近 90%。",
    meaning:
      "市場 base case 已由 hold 轉向 hike；若真正加息，重點會變成點陣圖、Warsh 記者會及是否暗示連續加息。",
  },
  {
    topic: "美債息",
    data: "Newsquawk Treasury wrap：2Y 4.634%（+4.8bp）、10Y 4.975%（+1.4bp）、30Y 5.359%（-0.7bp）；MarketScreener/Reuters 顯示 10Y 約 4.973%。",
    meaning:
      "前端升、長端平至微跌，是典型 policy-hike flattening；growth multiple 暫時有天花板。",
  },
  {
    topic: "原油",
    data: "Reuters/InvestingLive：WTI 約 $100.05（-$2.43 / -2.37%）、Brent 約 $104.61（-$3.02 / -2.81%），但仍在 $100 以上。",
    meaning:
      "油價回落是今日股市反彈核心，但中東航運風險未完，能源通脹仍可隨時返嚟。",
  },
  {
    topic: "美元",
    data: "DXY 收市快照約 99.10-99.16，日內變化很細；不同外匯頁按截數時點略有差異。",
    meaning:
      "美元不是今日最大單一驅動；真正影響風險資產的是短端息與 Fed 定價。",
  },
  {
    topic: "黃金",
    data: "黃金來源有差異：InvestingLive 寫 spot gold +0.66% 至 $4,349.44；其他商品頁有 $4,390-$4,409 區間，取決於 spot / futures / 交易時段。",
    meaning:
      "黃金受地緣風險支持，但高實質利率預期限制單邊上行；本文不把單一金價當精準收市。",
  },
  {
    topic: "VIX",
    data: "第三方收市快照 VIX 15.84（-11.21%）；FRED/Cboe 公開歷史資料截數時只見 9/10 17.84。",
    meaning:
      "波動率有降溫，但官方數據滯後，應把 VIX 當風險溫度計而不是交易訊號。",
  },
];

const stockRows = [
  [
    "Hewlett Packard Enterprise",
    "$62.09 / +12.44%",
    "Oracle FY2027 capex 與 AI rack / networking 需求讀通；TECHi 指 HPE 創上市以來高收市，屬今日最大 S&P 500 亮點之一。",
  ],
  [
    "Dell Technologies",
    "$567.29 / +11.98%",
    "同受 Oracle AI infrastructure spend 帶動，伺服器 backlog 與 hyperscaler capex 能見度改善。",
  ],
  [
    "NetApp / Arista",
    "NTAP 約 +8.54%、ANET 約 +5.61%",
    "storage、networking 被視為 AI data center buildout 直接受惠者，升幅比半導體龍頭更集中。",
  ],
  [
    "Oracle",
    "$150.28 / 約 -1.7%",
    "Q1 FY27 revenue $19.3B、non-GAAP EPS $1.92、RPO $664B 很強，但 capex / FCF 壓力令自身股價高開低走。",
  ],
  [
    "Apple / Alphabet / Amazon",
    "AAPL 約 +1.75%、GOOGL 約 +1.77%、AMZN 約 +1.94%",
    "大型權重回補是 Nasdaq/S&P 500 反彈重要來源；但不是所有 mega-cap 都均勻上升。",
  ],
  [
    "Nvidia",
    "約 -0.03%",
    "AI hardware 鏈大升但 NVDA 接近平收，反映資金今日更偏向下游設備與估值較低的 read-through 名字。",
  ],
  [
    "Qualys / Tenable",
    "QLYS -6.99%、TENB -5.99%",
    "security software 無明顯公司消息下被沽，顯示 software 仍受利率與估值壓力影響。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$77,290.00",
    "+0.14%",
    "較 9/10 20:00 UTC 的 $77,180.01 微升；美股 risk-on 有幫助，但未見大 breakout。",
  ],
  [
    "ETH",
    "$2,539.47",
    "+3.08%",
    "跑贏 BTC，反映 beta 回補較強；但仍要睇下週 FOMC 對流動性的影響。",
  ],
  [
    "SOL",
    "$102.04",
    "+2.21%",
    "重上 $100 上方，短線情緒改善；若美債息再上，high beta crypto 仍易回吐。",
  ],
];

const newsItems = [
  "美股結束四連跌：AP 指 S&P 500、Dow、Nasdaq 均反彈約 0.9%-1.0%，Russell 2000 亦微升。",
  "August CPI：headline 合預期但 core m/m 偏熱，令 9 月 FOMC 加息 25bp 機率升至約 86%。",
  "油價回落：Reuters 指 WTI/Brent 回吐約 2%-3%，市場憧憬 Gulf states 與 Iran 透過 Oman 討論 Hormuz 航運安排。",
  "AI 硬件鏈爆升：Oracle capex 指引帶動 HPE、Dell、NetApp、Arista，市場追買 data-center 實物供應鏈。",
  "債息曲線 flattening：2Y 升幅大過 10Y/30Y，反映市場在押政策利率更緊，但長端開始反映增長壓力。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,590-7,600 是昨日跌市收市區；若再失守，反彈確認失敗。",
    "7,660-7,680 是即市阻力；收穩上方才有機會挑戰 7,700。",
  ],
  [
    "Nasdaq",
    "26,080-26,100 是前一日收市區，守住代表 AI beta 未轉弱。",
    "26,500 前可能有沽壓；真正突破要見 NVDA/semis 同步跟上。",
  ],
  [
    "10Y yield",
    "4.90% 以下才算解除一部分估值壓力。",
    "4.97%-5.00% 是高估值資產的壓力線；升穿 5% 會令反彈質素下降。",
  ],
  [
    "WTI crude",
    "$100 是市場心理線。",
    "若再上 $102-$104，通脹交易會重返主導；若跌穿 $98，股市 short squeeze 可延續。",
  ],
];

const planRows = [
  [
    "短線",
    "反彈可以跟，但不要把一日 rebound 當風險解除；先看 10Y 能否回落、VIX 是否繼續降、油價有無跌穿 $100。",
  ],
  [
    "板塊",
    "AI hardware / data-center supply chain 短線最有 momentum；utilities、health care 弱，代表資金暫不買防守。",
  ],
  [
    "個股",
    "HPE/DELL/NTAP 已大升，追入要留意 gap risk；ORCL 本身要等市場消化 capex/FCF 問題。",
  ],
  [
    "Crypto",
    "ETH/SOL 反彈力度比 BTC 好，但仍跟 liquidity trade；FOMC 前不宜用高槓桿追高。",
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

function toneClass(state: string) {
  if (state.includes("最強") || state === "強") return "green";
  if (state.includes("中性")) return "amber";
  return "red";
}

export default function USCloseBrief20260911() {
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
          background: linear-gradient(135deg, #064e3b 0%, #047857 50%, #111827 100%);
          color: white;
          border-radius: 26px;
          padding: 30px;
          box-shadow: 0 22px 45px rgba(4, 120, 87, 0.22);
        }
        .eyebrow { letter-spacing: 0.12em; text-transform: uppercase; font-size: 13px; opacity: 0.85; }
        h1 { margin: 8px 0 10px; font-size: 44px; line-height: 1.08; }
        .subtitle { font-size: 18px; opacity: 0.94; max-width: 940px; }
        .meta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 18px; }
        .pill { background: rgba(255,255,255,0.16); border: 1px solid rgba(255,255,255,0.32); padding: 8px 12px; border-radius: 999px; font-size: 13px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 18px; }
        .card { background: white; border: 1px solid #e2e8f0; border-radius: 22px; padding: 20px; box-shadow: 0 12px 30px rgba(15, 23, 42, 0.07); break-inside: avoid; }
        .wide { grid-column: 1 / -1; }
        h2 { margin: 0 0 12px; color: #065f46; font-size: 23px; }
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
          {reportDate} 收市｜油價回落帶動美股由四連跌反彈；但核心 CPI 偏熱， Fed
          加息機率升至約 86%，AI 硬件鏈跑出
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
            今日美股升，不是因為通脹問題消失，而是油價由高位急回落，令市場暫時鬆一口氣；
            同時 August CPI headline 符合預期，雖然 core CPI
            略熱，但投資者選擇先回補被連跌四日壓低的倉位。
          </p>
          <h3>資金點諗</h3>
          <ul>
            <li>
              油價跌 2%-3% 後，市場由「能源通脹失控」切換到「仍高但未再惡化」。
            </li>
            <li>
              Core CPI +0.3% m/m 令下週加息幾乎成為 base
              case，所以反彈仍有利率天花板。
            </li>
            <li>
              AI hardware 鏈有實質 capex 訊號，資金追買 HPE、Dell、NetApp，
              而不是全面無差別買 software。
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
                    <span className={`tag ${toneClass(state)}`}>{state}</span>
                  </td>
                  <td>{read}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            Sector proxy 以 Newsquawk、Swingfolio、Gate 與 ETF proxy
            收市快照交叉核對；部份板塊來源對 close-to-close / intraday
            口徑有差異，因此以「約」或區間表達。
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
              <span className="tag green">綠</span> AI 硬件 / data-center supply
              chain：HPE、DELL、NTAP、ANET 受捧。
            </li>
            <li>
              <span className="tag green">綠</span> 大型科技權重：AAPL、GOOGL、
              AMZN 回補，撐住 Nasdaq。
            </li>
            <li>
              <span className="tag amber">黃</span>{" "}
              Energy：油價跌令大市鬆一口氣， 但能源股 leadership 降溫。
            </li>
            <li>
              <span className="tag red">紅</span> Utilities / Health Care：
              防守板塊未見資金泊入。
            </li>
            <li>
              <span className="tag red">紅</span> Software losers：QLYS、TENB
              跌，顯示高估值 software 仍被挑剔。
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
                <th>24 小時（對 9/10 20:00 UTC）</th>
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
            Vision public data API 1-minute kline；時間點為 2026-09-11 20:00:00
            UTC，即美股正常收市 4:00pm ET 附近。抓取值：BTCUSDT
            77,290.00、ETHUSDT 2,539.47、SOLUSDT 102.04。
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
            最終觀點：今日反彈質素比昨日好，因為升幅有 breadth、有 AI hardware
            主題，也有油價回落配合。不過 core CPI 令下週 Fed
            加息機率升到高位，10Y 又貼近
            5%，所以仍是「可做短線反彈，但不宜盲目加槓桿」的市況。
          </p>
        </article>

        <article className="card wide">
          <h2>12. 來源、口徑與免責聲明</h2>
          <p className="note">
            數據衝突處理：指數主表採 AP/WTOP，與
            Investing.com、Reuters/MarketScreener 方向一致；VIX
            官方歷史頁在截數時更新滯後，故標示第三方收市快照與 FRED/Cboe
            滯後差異；sector exact moves 因 ETF
            proxy、板塊分類及截數時間不同而有小差異， 本文以
            Newsquawk/Swingfolio/Gate 共同方向為主。黃金 spot / futures
            來源分歧較大，故以區間與口徑說明，不作單一精準收市價。
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
