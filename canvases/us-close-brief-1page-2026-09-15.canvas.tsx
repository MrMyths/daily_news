import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股連跌第二日：Dow 52,093.11（-0.63%）、S&P 500 7,585.73（-0.45%）、Nasdaq 25,981.57（-0.78%）、Russell 2000 2,870.29（-0.76%）。",
  "主因係 oil shock + bond shock：10Y yield 盤中高見 5.041%、尾段近 5.00%；WTI $105.83、Brent $108.75。",
  "Fed 會議第一日，市場幾乎 price in 9/16 加 25bp；不同截數來源顯示約 92%-95%。",
  "板塊：XLE +2.17% 最強；XLY -1.75%、XLU -1.20% 最弱；SOXX 約 +0.29% 只是昨日急跌後止血。",
  "重點股：CRWD +3.02%、AMD +2.19%、GEV +0.92%；ORCL -3.07%、AMZN -2.02%、MSFT -1.64%、GOOGL -1.26%。",
  "Crypto（Binance Vision 9/15 20:00 UTC）：BTC $76,240.04（-3.47%）、ETH $2,418.04（-4.82%）、SOL $98.07（-5.01%）。",
];

const metrics = [
  ["S&P 500 / Nasdaq", "7,585.73 -0.45% / 25,981.57 -0.78%", "red"],
  ["Dow / Russell", "52,093.11 -0.63% / 2,870.29 -0.76%", "red"],
  ["VIX", "17.20（+0.58%）", "amber"],
  ["XLE / XLY", "+2.17% / -1.75%", "amber"],
  ["10Y yield", "高見 5.041%；尾段近 5.00%", "red"],
  ["WTI / Brent", "$105.83 / $108.75", "red"],
  ["Fed pricing", "9月 +25bp 約 92%-95%", "red"],
  ["BTC / ETH / SOL", "-3.47% / -4.82% / -5.01%", "red"],
];

const sources = [
  [
    "AP/WTOP close",
    "https://wtop.com/national/2026/09/how-major-us-stock-indexes-fared-tuesday-9-15-2026/",
  ],
  [
    "CNBC live",
    "https://www.cnbc.com/2026/09/15/stock-market-today-live-updates.html",
  ],
  [
    "Reuters yields/dollar",
    "https://www.reuters.com/world/africa/dollar-near-two-week-high-oil-surge-lifts-yields-fed-hike-bets-2026-09-15/",
  ],
  [
    "Reuters bond selloff",
    "https://www.reuters.com/world/asia-pacific/bond-selloff-drives-us-benchmark-beyond-5-stocks-rattled-2026-09-15/",
  ],
  [
    "Newsquawk oil settle",
    "https://www.newsquawk.com/headlines/crude-wrap-wti-v6-settles-usd-444-higher-at-10583bbl-brent-x6-settles-usd-307-higher-at-10875bbl",
  ],
  [
    "CME FedWatch",
    "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  ],
  [
    "Market snapshots",
    "https://exa.ai/library/markets/stock/SPY?date=2026-09-15",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260915() {
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
          background: linear-gradient(135deg, #7f1d1d 0%, #b91c1c 54%, #111827 100%);
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
        h2 { margin: 0 0 6px; color: #b91c1c; font-size: 17px; }
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
          2026-09-15 收市｜油價與 5% 美債息壓估值，Fed 前連跌第二日；energy
          獨強，growth / crypto 回落
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
              FOMC 前先控 gap risk；市場最怕不是 25bp，而是暗示重啟加息周期。
            </li>
            <li>只要 10Y 守在 5% 附近，growth、REITs、小型股難有順風。</li>
            <li>Energy 有 momentum，但油價越高越會反過來壓大市和消費。</li>
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
          。指數採 AP/WTOP，宏觀採 Reuters/CNBC/Newsquawk/CME/Fed；ETF/個股因
          Yahoo chart 今次 HTTP 429，採公開 quote snapshots
          並標示截數差異；Crypto 採 Binance Vision 20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
