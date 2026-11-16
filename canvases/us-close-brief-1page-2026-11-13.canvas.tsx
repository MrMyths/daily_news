import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股星期五分化：Dow 52,347.55（+0.10%）微升；S&P 500 7,561.67（-0.40%）、Nasdaq 25,136.27（-0.91%）下跌，Russell 2000 2,790.49（-0.31%）。",
  "主因仍是 AI / NVDA headline risk：NVDA -2.01%、SOXX -3.67%、AMD -8.75%、AVGO -4.76%，晶片鏈條明顯跑輸。",
  "PPI headline +0.3% m/m 低過預期，但 +6.5% y/y 仍熱；市場仍接近 fully price 12月加息，10Y 約 5.14%-5.15%。",
  "板塊輪動清楚：XLP +1.42%、XLC +1.05%、XLE +0.98%、XLF +0.81%；XLK -2.01% 最弱。",
  "全星期仍反彈：CNBC 指 S&P 500 +2.5%、Nasdaq +2.3%、Dow +2.1%，所以短線不是全面 panic，而是 AI beta 去槓桿。",
  "Crypto 用 Binance Vision 2026-11-13 21:00 UTC（4:00pm ET）：BTC $68,884.01（-3.66%）、ETH $1,947.59（-3.44%）、SOL $79.92（-1.83%）。",
];

const metrics = [
  [
    "S&P / Dow / Nasdaq",
    "7,561.67 -0.40% / 52,347.55 +0.10% / 25,136.27 -0.91%",
    "amber",
  ],
  ["Russell / VIX", "2,790.49 -0.31% / 19.30 +3.21%", "red"],
  ["10Y / 2Y / 30Y", "5.143% / 4.859% / 5.472%（CNBC）", "amber"],
  ["WTI / Brent", "$88.56 -0.2% / $95.84 +0.02%", "amber"],
  ["XLP / XLE / XLF", "+1.42% / +0.98% / +0.81%", "green"],
  ["XLK / SOXX", "-2.01% / -3.67%", "red"],
  ["NVDA / AMD / AVGO", "-2.01% / -8.75% / -4.76%", "red"],
  ["BTC / ETH / SOL", "-3.66% / -3.44% / -1.83%", "red"],
];

const sources = [
  [
    "AP close",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-12c1e8155fb85c3c7b09e058ed6d3c74",
  ],
  [
    "AP wrap",
    "https://apnews.com/article/stocks-markets-ai-us-oil-f8edd0eeb1494d4d2584715686c5e619",
  ],
  [
    "CNBC close",
    "https://www.cnbc.com/2026/11/12/stock-market-today-live-updates.html",
  ],
  [
    "Reuters/Yahoo",
    "https://finance.yahoo.com/markets/stocks/articles/stocks-recover-nvidia-whiplash-dollar-015858641.html",
  ],
  [
    "Treasury",
    "https://www.cnbc.com/2026/11/13/treasury-yields-fed-rates.html",
  ],
  ["BLS PPI", "https://www.bls.gov/ppi/latest-numbers.htm"],
  [
    "Newsquawk",
    "https://www.newsquawk.com/headlines/us-market-wrap-tech-leads-losses-hawkish-fed-bets-trimmed-on-soft-headline-ppi",
  ],
  ["Binance Vision", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261113() {
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
        .hero {
          background: #102a43;
          border-radius: 20px;
          padding: 20px;
          color: white;
          border: 1px solid #243b53;
        }
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
          2026-11-13 收市（香港時間 2026-11-16 週一更新）｜AI / 半導體降溫，PPI
          未足以改變加息定價；防守輪動撐住 Dow
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
              下週先睇 NVDA 11/17 earnings；SOXX 未止跌前，AI beta 不宜加槓桿。
            </li>
            <li>10Y 若企穩 5.10%-5.17%，Nasdaq 反彈空間會受壓。</li>
            <li>S&P 500 7,500 是短線防線；重上 7,600 先算修復。</li>
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
          。指數採 AP / CNBC / Reuters-Yahoo / Yahoo chart close
          口徑；板塊與重點股票以 Yahoo chart 11/13 close 對比 11/12
          close；美債與油價以 CNBC / Newsquawk 收市附近口徑；Crypto 採 Binance
          Vision 2026-11-13 21:00 UTC 1m close，對比 11/12 21:00 UTC。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
