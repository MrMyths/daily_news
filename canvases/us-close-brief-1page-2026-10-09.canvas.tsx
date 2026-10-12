import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股週五反彈收高：Dow 51,654.95（+0.83%）、S&P 500 7,811.54（+0.59%）、Nasdaq 27,366.17（+0.64%）、Russell 2,806.98（+0.46%）。",
  "主線係等下週 CPI + 銀行財報：Reuters 指 Q3 earnings season、CPI、PPI、retail sales 會決定 Fed 路徑同 rally 質素。",
  "板塊 9/11 上升但分化：XLRE +1.86%、XLV +1.58%、XLY +1.02% 領先；XLC -1.51% 最弱，SOXX -0.69% 未跟足反彈。",
  "SpaceX spectrum deal 打擊電訊：CNBC 指 VZ -8.75%、T -9.81%、TMUS -13.27%；tower owners 反升。",
  "高息仍是天花板：Reuters 10Y 約 5.261%，Yahoo 10Y close 5.244%；FedWatch 類口徑顯示 10 月 hold 約 82.3%、+25bp 約 17.7%。",
  "Crypto（Binance data API 10/09 20:00 UTC）：BTC $82,383.40（+0.70%）、ETH $2,479.33（+0.51%）、SOL $108.69（-0.49%）。",
];

const metrics = [
  ["S&P 500 / Nasdaq", "7,811.54 +0.59% / 27,366.17 +0.64%", "green"],
  ["Dow / Russell", "51,654.95 +0.83% / 2,806.98 +0.46%", "green"],
  ["VIX / 10Y", "14.84 / 5.244%", "amber"],
  ["XLRE / XLV / XLY", "+1.86% / +1.58% / +1.02%", "green"],
  ["XLC / SOXX", "-1.51% / -0.69%", "red"],
  ["WTI / Brent", "$91.85 +0.39% / $104.72 +0.42%", "amber"],
  ["Gold futures / DXY", "$4,216.30 +1.43% / 102.21 +0.07%", "amber"],
  ["BTC / ETH / SOL", "+0.70% / +0.51% / -0.49%", "amber"],
];

const sources = [
  [
    "AP close",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-dafbd0c4037ee10e2a9e305f3cfa8e70",
  ],
  [
    "Reuters close",
    "https://finance.yahoo.com/markets/stocks/articles/wall-st-futures-gain-oil-102454068.html",
  ],
  [
    "CNBC market",
    "https://www.cnbc.com/2026/10/08/stock-market-today-live-updates.html",
  ],
  [
    "Reuters macro",
    "https://live.euronext.com/en/financial-news/stocks-advance-ahead-earnings-navigating-still-high-treasury-yields-and-oil-prices",
  ],
  [
    "CNBC SpaceX",
    "https://www.cnbc.com/2026/10/09/verizon-att-tmobile-stocks-spacex-network.html",
  ],
  [
    "CME FedWatch",
    "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  ],
  [
    "Cboe VIX",
    "https://cdn.cboe.com/api/global/us_indices/daily_prices/VIX_History.csv",
  ],
  ["Binance data API", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261009() {
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
          background: linear-gradient(135deg, #1e3a8a 0%, #0f766e 54%, #111827 100%);
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
          2026-10-09 收市（香港時間 2026-10-12 週一更新）｜反彈收高但未全面
          risk-on；等 CPI / 銀行財報
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
            <li>核心倉可留，但追 AI / crypto beta 前先等 SOXX、BTC 確認。</li>
            <li>10Y 5.30% 係估值壓力線；再上會壓 Nasdaq、REIT、小型股。</li>
            <li>下週 CPI、PPI、retail sales 同大銀行財報會決定反彈質素。</li>
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
          。指數採 AP / CNBC 終值並以 Reuters / Yahoo chart 核對；sector 採
          Yahoo ETF close；10Y 採 Reuters / Yahoo；VIX 採 Cboe 官方 CSV；Crypto
          採 Binance data API 20:00 UTC 1m close。Russell 2000 少數來源有
          2,806.98 / 2,808.08 差異，本文以 Yahoo close 為準。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
