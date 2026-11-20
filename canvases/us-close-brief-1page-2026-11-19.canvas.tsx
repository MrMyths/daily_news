import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股全面急跌：Dow 49,097.06（-2.19%，跌 1,101點並失守 50,000）、S&P 500 7,175.83（-2.02%，連跌第六日）、Nasdaq 23,879.20（-2.25%）。",
  "主線：Anthropic 史上最大 IPO 首日仍升約 17%，但未能救 AI trade；資金趁 clearing event 減倉，NVDA -3.30%、AMD -7.72%、SOX -2.41%。",
  "廣度轉差：Reuters 指 NYSE 跌股/升股約 4.37:1、Nasdaq 約 3.55:1；VIX 升 15.80% 至 28.44，接近 30 風險線。",
  "板塊全跌：XLE -0.65%、XLU -1.24%、XLP -1.45% 較抗跌；XLY -2.79%、SOXX -2.75%、XLC -2.67% 最弱。",
  "宏觀：10Y 約 5.046%、2Y 約 4.76%、30Y 約 5.402%；FedWatch 約 95%-96.4% pricing 12月 +25bp，Waller 50bp 風險仍壓估值。",
  "Crypto：Binance Vision 2026-11-19 21:00 UTC（4:00pm ET）BTC $62,058.01（-0.92%）、ETH $1,758.47（+0.14%）、SOL $72.92（-0.27%）。",
];

const metrics = [
  [
    "S&P / Dow / Nasdaq",
    "7,175.83 -2.02% / 49,097.06 -2.19% / 23,879.20 -2.25%",
    "red",
  ],
  ["Russell / VIX", "2,655.11 -2.18% / 28.44 +15.80%", "red"],
  ["10Y / 2Y / 30Y", "5.046% / 4.76% / 5.402%", "amber"],
  [
    "WTI / Brent / Gold",
    "$83.21 -0.06% / $91.98 +0.03% / $3,685.50 -1.51%",
    "amber",
  ],
  ["XLE / XLU / XLP", "-0.65% / -1.24% / -1.45%", "amber"],
  ["XLY / SOXX / XLC", "-2.79% / -2.75% / -2.67%", "red"],
  ["NVDA / AMD / PANW", "-3.30% / -7.72% / +6.42%", "amber"],
  ["BTC / ETH / SOL", "-0.92% / +0.14% / -0.27%", "amber"],
];

const sources = [
  [
    "CNBC close",
    "https://www.cnbc.com/2026/11/18/stock-market-today-live-updates.html",
  ],
  [
    "AP market",
    "https://apnews.com/article/stocks-markets-ai-us-anthropic-206c84045137824feabe052a29ff6140",
  ],
  [
    "Reuters market",
    "https://www.investing.com/news/stock-market-news/wall-street-ends-sharply-lower-asanthropics-debut-fails-to-revive-ai-fervor-5040108",
  ],
  [
    "CNBC yields",
    "https://www.cnbc.com/2026/11/19/us-treasury-yields-investors-us-economy.html",
  ],
  [
    "Fed minutes",
    "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261118a.htm",
  ],
  [
    "Reuters oil",
    "https://www.investing.com/news/commodities-news/oil-prices-steady-as-supply-surplus-softens-sentiment-though-gulf-war-supports-5037604",
  ],
  [
    "The Edge commodities",
    "https://edgeconsultancykw.com/commodities-wrap-19-november-2026/",
  ],
  ["Binance Vision", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261119() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          min-height: 760px;
          margin: 0 auto;
          padding: 24px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.2;
        }
        .hero { background: #102a43; border-radius: 20px; padding: 20px; color: white; border: 1px solid #243b53; }
        h1 { margin: 0 0 8px; font-size: 30px; line-height: 1.04; }
        .sub { font-size: 15px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.23fr 0.77fr; gap: 11px; margin-top: 11px; }
        .card { background: white; border: 1px solid #e2e8f0; border-radius: 18px; padding: 11px; }
        h2 { margin: 0 0 6px; color: #0f766e; font-size: 17px; }
        ul { margin: 0; padding-left: 16px; }
        li { margin: 3.4px 0; }
        .metric { display: grid; grid-template-columns: 0.64fr 1fr; gap: 7px; padding: 4.4px 0; border-bottom: 1px solid #e5e7eb; font-size: 12px; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 9.25px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
        @media print { .sheet { width: auto; min-height: auto; } }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-11-19 收市（香港時間 2026-11-20 週五更新）｜Dow 失守 50,000；S&P
          連跌第六日，Anthropic IPO 未能救 AI trade
        </div>
      </section>
      <section className="grid">
        <div className="card">
          <h2>今日六句講晒</h2>
          <ul>
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2>紅綠燈</h2>
          {metrics.map(([label, value, tone]) => (
            <div className="metric" key={label}>
              <span>{label}</span>
              <span className={tone}>{value}</span>
            </div>
          ))}
          <h2 style={{ marginTop: 7 }}>操作重點</h2>
          <ul>
            <li>
              S&P 先看 7,150 / 7,100 支持；重上 7,274 200日線前不急追反彈。
            </li>
            <li>
              VIX 30、Dow 50,000、NVDA $146、ANT 次日交易是短線風險溫度計。
            </li>
            <li>
              若要找相對強勢，優先留意 cybersecurity / cash-flow winners；AI
              beta 仍要等止跌訊號。
            </li>
          </ul>
        </div>
      </section>
      <section className="card" style={{ marginTop: 11 }}>
        <h2>來源與口徑</h2>
        <p className="small">
          主要來源：
          {sources.map(([name, url], index) => (
            <React.Fragment key={url}>
              {index > 0 ? " / " : ""}
              <a href={url}>{name}</a>
            </React.Fragment>
          ))}
          。指數採 CNBC / AP / Reuters / Yahoo chart close；ETF/個股因 Yahoo
          daily close 在生成時部分未寫入，採 Yahoo 21:00 UTC 1分鐘 close
          proxy；Crypto 採 Binance Vision 2026-11-19 21:00 UTC 1m close，對比
          2026-11-18 21:00 UTC。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
