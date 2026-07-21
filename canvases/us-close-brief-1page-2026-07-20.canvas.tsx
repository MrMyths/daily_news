import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股早段反彈但尾市回落：Dow -0.59% 至 51,839.26；S&P 500 -0.19% 至 7,443.28；Nasdaq -0.05% 至 25,508.07。",
  "壓力來自油價同債息：WTI $83.23（+0.9%）、Brent $89.22（+1.3%）；10Y 升至 4.594%，30Y 約 5.115%。",
  "科技分化：MSFT +2.15%、GOOGL +1.51%、AMD +1.58%、INTC +2.13%；AAPL -2.14%、TSLA -2.96%。",
  "板塊：XLE +0.45%、SOXX +0.45%、XLK +0.07%；XLV -1.14%、XLB -0.99%、XLI/XLY 各約 -0.72%。",
  "FedWatch 7/29 hold 83.4%、+25bp 16.6%；VIX 18.65，市場未恐慌但風險溢價仍在。",
  "Crypto（Binance 20:00 UTC）：BTC $65,141.59（+1.68%）、ETH $1,898.22（+3.14%）、SOL $77.64（+3.42%）。",
];

const sources = [
  [
    "CNBC close",
    "https://www.cnbc.com/2026/07/19/stock-market-today-live-updates.html",
  ],
  [
    "CNBC yields",
    "https://www.cnbc.com/2026/07/20/treasury-yields-wall-street-iran-war-tensions.html",
  ],
  [
    "CNBC oil",
    "https://www.cnbc.com/2026/07/20/oil-prices-today-brent-wti-crude-us-iran-centcom-hormuz.html",
  ],
  [
    "Investing FedWatch",
    "https://www.investing.com/central-banks/fed-rate-monitor",
  ],
  [
    "Yahoo chart",
    "https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC?interval=1d",
  ],
  [
    "Morningstar gold",
    "https://www.morningstar.com/news/dow-jones/202607205754/comex-gold-settles-006-lower-at-401030-data-talk",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260720() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          min-height: 760px;
          margin: 0 auto;
          padding: 22px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.25;
        }
        .hero {
          background: linear-gradient(135deg, #111827 0%, #7f1d1d 52%, #0f766e 100%);
          border-radius: 22px;
          padding: 20px 24px;
          color: white;
        }
        h1 { margin: 0 0 6px; font-size: 35px; line-height: 1.05; }
        .sub { font-size: 16px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.38fr 0.62fr; gap: 12px; margin-top: 12px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 13px 15px;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
        }
        h2 { margin: 0 0 7px; color: #0f766e; font-size: 18px; }
        ul { margin: 0; padding-left: 19px; }
        li { margin: 4px 0; }
        .metric { display: grid; grid-template-columns: 1fr auto; gap: 9px; padding: 5px 0; border-bottom: 1px solid #e5e7eb; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 10.8px; color: #64748b; line-height: 1.22; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-07-20 收市｜油價債息升，早段反彈變尾市微跌
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
          <div className="metric">
            <span>大市 / S&P 500</span>
            <span className="amber">守 7,440</span>
          </div>
          <div className="metric">
            <span>Nasdaq momentum</span>
            <span className="amber">25,500 邊緣</span>
          </div>
          <div className="metric">
            <span>Energy / XLE</span>
            <span className="green">+0.45%</span>
          </div>
          <div className="metric">
            <span>Semis / SOXX</span>
            <span className="green">+0.45%</span>
          </div>
          <div className="metric">
            <span>10Y yield</span>
            <span className="red">4.594%</span>
          </div>
          <div className="metric">
            <span>VIX</span>
            <span className="amber">18.65</span>
          </div>
          <h2 style={{ marginTop: 10 }}>操作重點</h2>
          <ul>
            <li>S&P 500 7,440、Nasdaq 25,500 是短線防線。</li>
            <li>Brent $90、10Y 4.60% 是降風險警號。</li>
            <li>科技反彈要睇財報和 SOXX/SMH follow-through。</li>
          </ul>
        </div>
      </section>
      <section className="card" style={{ marginTop: 12 }}>
        <h2>來源與口徑</h2>
        <p className="small">
          主要來源：
          {sources.map(([name, url], index) => (
            <React.Fragment key={url}>
              {index > 0 ? " / " : ""}
              <a href={url}>{name}</a>
            </React.Fragment>
          ))}
          。指數採 CNBC 並以 Yahoo chart / InvestingLive 交叉核對；ETF/個股
          close 採 Yahoo chart；Crypto 採 Binance Vision 2026-07-20 20:00 UTC 1m
          close，對比 2026-07-17 20:00 UTC；FedWatch 採 Investing.com 2026-07-20
          13:25 EDT 更新。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
