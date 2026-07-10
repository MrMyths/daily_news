import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股反彈：Dow +139.02 至 52,487.41；S&P 500 +0.81% 至 7,543.64；Nasdaq +1.30% 至 26,206.89。",
  "主線由昨日油價 shock 轉為今日油價回落、債息放鬆、VIX 跌至 15.84，市場暫時降 panic premium。",
  "半導體最強：SOX +3.06%、SOXX +3.50%、MU +4.52%；Micron 把美國投資計劃提高至超過 $250B。",
  "板塊：SOXX、XLK、XLY 跑出；XLP -1.41%、XLE -1.40%、XLU -0.51% 跑輸，資金由 defensives/energy 轉返 growth。",
  "宏觀：Brent settle $76.30、WTI $72.08；10Y 約 4.54%-4.56%；FedWatch 仍顯示 9 月 +25bp 機率約 50.4%。",
  "Crypto 採 Binance 2026-07-09 20:00 UTC 1m close：BTC $63,254.49、ETH $1,748.84、SOL $78.14。",
];

const sources = [
  [
    "AP",
    "https://apnews.com/article/wall-street-dow-nasdaq-stocks-0d013820a2ef2dacd3c28d4f23a63bb1",
  ],
  [
    "CNBC",
    "https://www.cnbc.com/2026/07/08/stock-market-today-live-updates.html",
  ],
  [
    "TradingKey",
    "https://www.tradingkey.com/analysis/stocks/us-stocks/262020983-us-stock-close-nasdaq-rise-meta-sk-hynix-openai-micron-tradingkey",
  ],
  [
    "Kitco",
    "https://www.kitco.com/news/article/2026-07-09/gold-rebounds-silver-soars-easing-oil-softer-dollar-lift-metals-kitco-pm",
  ],
  [
    "Investing FedWatch",
    "https://www.investing.com/central-banks/fed-rate-monitor",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260709() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          min-height: 760px;
          margin: 0 auto;
          padding: 34px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.38;
        }
        .hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 56%, #0f766e 100%);
          border-radius: 24px;
          padding: 28px;
          color: white;
        }
        h1 { margin: 0 0 8px; font-size: 42px; line-height: 1.08; }
        .sub { font-size: 18px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.35fr 0.65fr; gap: 16px; margin-top: 16px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 19px;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
        }
        h2 { margin: 0 0 10px; color: #0f766e; font-size: 21px; }
        ul { margin: 0; padding-left: 21px; }
        li { margin: 7px 0; }
        .metric { display: grid; grid-template-columns: 1fr auto; gap: 10px; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 12.5px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-07-09 收市｜油價回落、債息放鬆，半導體帶 Nasdaq 反攻
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
            <span className="green">重上 7,500</span>
          </div>
          <div className="metric">
            <span>Nasdaq / AI beta</span>
            <span className="green">領漲</span>
          </div>
          <div className="metric">
            <span>SOXX / semis</span>
            <span className="green">最強</span>
          </div>
          <div className="metric">
            <span>Energy / oil</span>
            <span className="red">回吐</span>
          </div>
          <div className="metric">
            <span>10Y / Fed pricing</span>
            <span className="amber">仍高</span>
          </div>
          <div className="metric">
            <span>Crypto</span>
            <span className="green">小反彈</span>
          </div>
          <h2 style={{ marginTop: 15 }}>操作重點</h2>
          <ul>
            <li>SOXX $580、Nasdaq 26,000、SPX 7,500 是短線防線。</li>
            <li>10Y 若重上 4.60%、Brent 重上 $80，高 beta 要降風險。</li>
            <li>買強不買弱：半導體/AI memory 優先，defensive 消費暫弱。</li>
          </ul>
        </div>
      </section>
      <section className="card" style={{ marginTop: 16 }}>
        <h2>來源與口徑</h2>
        <p className="small">
          主要來源：
          {sources.map(([name, url], index) => (
            <React.Fragment key={url}>
              {index > 0 ? " / " : ""}
              <a href={url}>{name}</a>
            </React.Fragment>
          ))}
          。指數採 AP/CNBC 一致收市口徑；ETF/個股以 Yahoo chart API 4:00pm ET
          close 交叉驗證；FedWatch 採 Investing.com 7:55am EDT；Crypto 採
          Binance data-api 2026-07-09 20:00 UTC 1m close。油價/黃金/美元因
          settle、spot 與 late-afternoon 時間不同，完整版已標示差異。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
