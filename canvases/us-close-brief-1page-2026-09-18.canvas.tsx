import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "週一更新：美股週末休市；本版補 2026-09-18 收市。S&P 500 7,650.50（+0.17%）、Nasdaq 26,522.55（+0.40%）、Dow 51,682.64（-0.18%）、Russell 2,860.40（-0.50%）。",
  "主線係窄幅 AI / semis 撐市：Reuters 指半導體 rally 托住 S&P / Nasdaq，但 NYSE 跌股對升股約 1.78:1，廣度偏弱。",
  "Macro 未鬆：10Y yield 約 4.998%-5.00%，WTI $100.30、Brent $103.87；Fed 剛加息至 3.75%-4.00%，10 月再加息機率約 55.4%。",
  "板塊：SOXX +2.69%、XLK +0.82% 最強；XLB -1.42%、XLU -1.42%、XLC -1.37%、XLRE 約 -0.95% 受壓。",
  "重點股：NVDA +1.34%、AMD +2.70%、MU +3.92%；COIN +11.62%、HOOD +9.28%；NUE -6.28%、QCOM 約 -5.5%、GM -5.1%。",
  "Crypto（Binance Vision 9/18 20:00 UTC）：BTC $81,081.26（+5.93%）、ETH $2,630.67（+7.48%）、SOL $113.81（+12.81%）。",
];

const metrics = [
  ["S&P 500 / Nasdaq", "7,650.50 +0.17% / 26,522.55 +0.40%", "green"],
  ["Dow / Russell", "51,682.64 -0.18% / 2,860.40 -0.50%", "red"],
  ["VIX / breadth", "14.81 -4.08% / 跌股多過升股", "amber"],
  ["SOXX / XLK", "+2.69% / +0.82%", "green"],
  ["XLU / XLB / XLC", "-1.42% / -1.42% / -1.37%", "red"],
  ["10Y / 30Y yield", "~4.998%-5.00% / ~5.332%", "red"],
  ["WTI / Brent", "$100.30 / $103.87", "amber"],
  ["BTC / ETH / SOL", "+5.93% / +7.48% / +12.81%", "green"],
];

const sources = [
  [
    "AP close",
    "https://www.seattletimes.com/business/how-major-us-stock-indexes-fared-friday-9-18-2026/",
  ],
  [
    "Reuters close",
    "https://ca.marketscreener.com/news/s-p-500-nasdaq-advance-turning-the-page-on-a-tumultuous-week-ce785adadf88f526",
  ],
  [
    "Reuters oil",
    "https://www.reuters.com/business/energy/oil-prices-fall-1-hopes-limited-supply-disruptions-2026-09-18/",
  ],
  [
    "Reuters yields",
    "https://www.marketscreener.com/news/treasuries-us-yields-rise-as-investors-weigh-outlook-for-rate-hikes-ce785adadd8ef120",
  ],
  [
    "Fed statement",
    "https://www.federalreserve.gov/monetarypolicy/files/monetary20260916a1.pdf",
  ],
  ["Stooq sectors", "https://stooq.com/t/?d=20260918&f=1&i=551&u=1&v=0"],
  [
    "Schwab movers",
    "https://schwabnetwork.com/articles/closing-bell-stocks-end-mixed-on-triple-witching-friday",
  ],
  ["Binance Vision", "https://data.binance.vision/"],
];

export default function USCloseBriefOnePage20260918() {
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
          background: linear-gradient(135deg, #134e4a 0%, #0f766e 54%, #111827 100%);
          border-radius: 22px;
          padding: 20px;
          color: white;
        }
        h1 { margin: 0 0 8px; font-size: 36px; line-height: 1.04; }
        .sub { font-size: 15.5px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.25fr 0.75fr; gap: 11px; margin-top: 11px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 11px;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
        }
        h2 { margin: 0 0 6px; color: #0f766e; font-size: 17px; }
        ul { margin: 0; padding-left: 16px; }
        li { margin: 3.4px 0; }
        .metric { display: grid; grid-template-columns: 0.72fr 1fr; gap: 7px; padding: 4.4px 0; border-bottom: 1px solid #e5e7eb; font-size: 12px; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 9.45px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
        @media print { .sheet { width: auto; min-height: auto; box-shadow: none; } }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-09-18 收市（香港時間 2026-09-21 週一更新）｜S&P / Nasdaq
          微升但廣度偏弱；10Y 返 5%，semis 與 crypto beta 撐場
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
            <li>守 S&P 7,600 才算高位整固；失守要防 narrow rally 回吐。</li>
            <li>Semis 是最強主線，但要 XLF / XLC / Russell 跟上才算健康。</li>
            <li>10Y 5%、WTI $100、FedWatch 10 月加息機率是下週風控開關。</li>
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
          。指數採 AP 4:00pm ET 後 close；sector 採 Stooq / Yahoo chart / market
          summary 交叉核對；SOXX 採 Finviz / Stoculator；宏觀採 Reuters / Fed /
          CME；Crypto 採 Binance Vision 20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
