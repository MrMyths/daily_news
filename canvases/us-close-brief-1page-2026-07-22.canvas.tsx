import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股小跌但未恐慌：Dow 52,218.58（-0.01%）、S&P 500 7,498.96（-0.14%）、Nasdaq 25,690.90（-0.57%）。",
  "今日主線係 oil + rates：Brent $94.07（約 +3.4%）、WTI $86.83（約 +3%），10Y 約 4.66%-4.67%。",
  "Fed 加息尾部風險升：CNBC/Investopedia/MarketWatch 對 7月 hike odds 報 24%-34% / 約 31.5%，時點不同但方向一致。",
  "盤後財報分化：Alphabet revenue/EPS beat 但 capex 指引升、Tesla EPS miss；ServiceNow beat 並上調 outlook。",
  "紅綠燈：Energy/XLE +0.70% 較強；科技/semis 偏弱但精確 ETF close 未能可靠交叉核對，保守列暫無可靠數據。",
  "Crypto（Binance 20:00 UTC）：BTC $65,916（-0.67%）、ETH $1,926.63（+0.24%）、SOL $77.70（-0.21%）。",
];

const sources = [
  [
    "CNBC close",
    "https://www.cnbc.com/2026/07/21/stock-market-today-live-updates.html",
  ],
  [
    "Yahoo live",
    "https://finance.yahoo.com/markets/live/stock-market-today-wednesday-july-22-dow-sp-500-nasdaq-alphabet-tesla-083644887.html",
  ],
  [
    "Kitco macro",
    "https://www.kitco.com/news/article/2026-07-22/gold-rallies-buyers-test-4160-oil-lifts-yields-kitco-pm-report",
  ],
  [
    "CNBC after-hours",
    "https://www.cnbc.com/2026/07/22/stocks-making-the-biggest-moves-after-hours-googl-tsla-ibm-lvs.html",
  ],
  [
    "Investopedia earnings",
    "https://www.investopedia.com/big-tech-earnings-live-q2-2026-googl-tsla-ibm-txn-now-12024335",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260722() {
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
        .small { font-size: 10.6px; color: #64748b; line-height: 1.2; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-07-22 收市｜油價債息升溫，Big Tech 財報前大市微跌
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
            <span className="red">7,498.96</span>
          </div>
          <div className="metric">
            <span>Nasdaq momentum</span>
            <span className="red">-0.57%</span>
          </div>
          <div className="metric">
            <span>Energy / XLE</span>
            <span className="green">+0.70%</span>
          </div>
          <div className="metric">
            <span>10Y yield</span>
            <span className="red">4.66%-4.67%</span>
          </div>
          <div className="metric">
            <span>Brent</span>
            <span className="red">$94.07</span>
          </div>
          <div className="metric">
            <span>VIX</span>
            <span className="green">16.64</span>
          </div>
          <h2 style={{ marginTop: 10 }}>操作重點</h2>
          <ul>
            <li>Brent $94-$95 同 10Y 4.70% 係今日最重要風險線。</li>
            <li>GOOGL/TSLA 盤後反應會決定 Nasdaq 能否重上 25,850。</li>
            <li>能源、黃金相對強；高估值 growth 要等 capex 回報故事講得通。</li>
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
          。指數採 CNBC/Yahoo 收市；VIX 採 Investing.com historical close；Kitco
          文中 S&P 點數方向有筆誤，本文只用其金、油、10Y、Russell 參考。Yahoo
          chart API 本環境回 429，未能交叉核對的 ETF 精確值不硬填。Crypto 採
          Binance Vision 2026-07-22 20:00 UTC 1m close，對比 2026-07-21 20:00 UTC。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
