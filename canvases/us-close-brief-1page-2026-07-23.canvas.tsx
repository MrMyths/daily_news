import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股急跌：Dow 51,711.65（-0.97%）、S&P 500 7,408.30（-1.21%）、Nasdaq 25,137.69（-2.15%）。",
  "今日主線係 oil + yields：Brent $100.69（約 +7%）、WTI $92.19（約 +6%），10Y 約 4.70%。",
  "Fed 壓力升：CNBC 指 9月加息機率逾 80%，initial jobless claims 187,000，低過預期。",
  "Big Tech 拖累：Alphabet -7.13%、Tesla -14.52%；市場開始追問 AI capex 同 free cash flow。",
  "紅綠燈：XLI +1.73%、XLV +1.26% 較強；XLY -4.61%、XLC -3.50%、XLK -1.01% 轉弱。",
  "Crypto（Binance 20:00 UTC）：BTC $64,887.99（-1.56%）、ETH $1,877.27（-2.56%）、SOL $75.81（-2.43%）。",
];

const sources = [
  [
    "CNBC close",
    "https://www.cnbc.com/2026/07/22/stock-market-today-live-updates.html",
  ],
  [
    "CNBC yields/oil",
    "https://www.cnbc.com/2026/07/23/treasury-yields-oil-prices-jobless-claims.html",
  ],
  [
    "Investopedia",
    "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-07232026-12025025",
  ],
  [
    "Kitco macro",
    "https://www.kitco.com/news/article/2026-07-23/gold-falls-oil-spike-higher-yields-pressure-metals-kitco-pm-report",
  ],
  [
    "AP claims",
    "https://apnews.com/article/unemployment-benefits-jobless-claims-layoffs-labor-097a210a86c0bebcba2b2625cd04c2dc",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260723() {
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
          background: linear-gradient(135deg, #111827 0%, #7f1d1d 54%, #0f766e 100%);
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
        .small { font-size: 10.6px; color: #64748b; line-height: 1.2; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-07-23 收市｜油價破百、債息升穿 4.7%，Big Tech 拖累大市急跌
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
            <span>S&P 500</span>
            <span className="red">7,408.30</span>
          </div>
          <div className="metric">
            <span>Nasdaq momentum</span>
            <span className="red">-2.15%</span>
          </div>
          <div className="metric">
            <span>VIX</span>
            <span className="amber">18.70</span>
          </div>
          <div className="metric">
            <span>10Y yield</span>
            <span className="red">約 4.70%</span>
          </div>
          <div className="metric">
            <span>Brent</span>
            <span className="red">$100.69</span>
          </div>
          <div className="metric">
            <span>Industrials / XLI</span>
            <span className="green">+1.73%</span>
          </div>
          <h2 style={{ marginTop: 10 }}>操作重點</h2>
          <ul>
            <li>Brent $100、10Y 4.70%、VIX 20 是三條即時風險線。</li>
            <li>GOOGL/TSLA 之後，市場會更嚴格審 AI capex 回報。</li>
            <li>未重上 S&P 7,500 / Nasdaq 25,500 前，high beta 先控制倉位。</li>
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
          。指數採 CNBC close 及 Yahoo chart API；板塊用 ETF/proxy；VIX 採
          Investing.com/Tallac/Yahoo historical quote 18.70 close。Crypto 採
          Binance Vision 2026-07-23 20:00 UTC 1m close，對比 2026-07-22 20:00
          UTC；Binance direct API 受地區限制，故使用 Binance Vision public
          data。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
