import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股終止三連跌：Dow +385.38 / +0.74% 至 52,224.64；S&P 500 +0.89% 至 7,509.20；Nasdaq +1.29% 至 25,837.21。",
  "升市核心係半導體：SMH 約 +4.5%；CNBC 指 Micron +12%、Intel +8%、Marvell 逾 +6%，Nasdaq 領升。",
  "財報幫到 sentiment：3M 收 $170.76（+7.32%），GM 收 $79.52（+4.9%），兩者均 beat 並上調全年指引。",
  "宏觀未完全放鬆：WTI $84.91、Brent $91.01，10Y 約 4.63%、30Y 約 5.13%，油價債息仍壓住估值。",
  "Fed odds：Kalshi 7/29 hold 89%、+25bp 10%；CME-style 來源約 hold 84.5%、+25bp 15.5%，口徑有差異但 hold 仍是主線。",
  "Crypto（Binance 20:00 UTC）：BTC $66,360（+1.87%）、ETH $1,922.02（+1.25%）、SOL $77.86（+0.28%）。",
];

const sources = [
  [
    "CNBC close",
    "https://www.cnbc.com/2026/07/20/stock-market-today-live-updates.html",
  ],
  [
    "Yahoo live",
    "https://finance.yahoo.com/markets/live/stock-market-today-tuesday-july-21-dow-sp-500-nasdaq-084631499.html",
  ],
  [
    "Reuters oil",
    "https://live.euronext.com/en/financial-news/oil-prices-ease-mediators-propose-us-iran-ceasefire",
  ],
  [
    "CNBC yields",
    "https://www.cnbc.com/2026/07/21/treasury-yields-bonds-iran-us-politics.html",
  ],
  [
    "Kitco gold",
    "https://www.kitco.com/news/article/2026-07-21/gold-rallies-buyers-ignore-higher-yields-oil-shock-kitco-pm-report",
  ],
  ["Fed odds", "https://predictionmarketspicks.com/tools/fed-rate-tracker"],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260721() {
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
          background: linear-gradient(135deg, #111827 0%, #0f766e 52%, #1d4ed8 100%);
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
          2026-07-21 收市｜晶片股急彈，三大指數終止三連跌
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
            <span className="green">7,509.20</span>
          </div>
          <div className="metric">
            <span>Nasdaq momentum</span>
            <span className="green">+1.29%</span>
          </div>
          <div className="metric">
            <span>Semis / SMH</span>
            <span className="green">約 +4.5%</span>
          </div>
          <div className="metric">
            <span>10Y yield</span>
            <span className="red">4.63%</span>
          </div>
          <div className="metric">
            <span>Brent</span>
            <span className="red">$91.01</span>
          </div>
          <div className="metric">
            <span>VIX</span>
            <span className="green">16.93</span>
          </div>
          <h2 style={{ marginTop: 10 }}>操作重點</h2>
          <ul>
            <li>半導體要有第二日 follow-through，否則只屬 oversold bounce。</li>
            <li>Brent $91、10Y 4.63% 仍是估值壓力線。</li>
            <li>7/22 盤後 GOOGL、TSLA、IBM 財報會決定 AI trade 能否接力。</li>
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
          。指數採 CNBC/Yahoo 收市；VIX 採 historical close 16.93（即時頁有
          17.05 差異）；Yahoo chart API 本環境回 429，未能交叉核對的 ETF
          精確值不硬填。 Crypto 採 Binance Vision 2026-07-21 20:00 UTC 1m
          close，對比 2026-07-20 20:00 UTC。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
