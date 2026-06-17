import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股分化：Dow +0.64% 至 51,999.67 再創收市新高；S&P 500 -0.57%、Nasdaq -1.15%。",
  "資金由晶片/mega-cap tech 輪入工業、金融和部分防守；今日是 rotation，不是全面 risk-off。",
  "油價繼續跌：CNBC 指 WTI $76.05（-5.82%）、Brent $78.96（-5.06%），Hormuz peace premium 仍主導。",
  "半導體急回：SOXX $591.24（-5.92%），AMD、MU、AVGO、NVDA 全線拖低 Nasdaq。",
  "SpaceX 仍強：SPCX 因 $60B Cursor deal 升近 5%，收 $201.80，是高增長風險胃納溫度計。",
  "Crypto 採 Binance Vision 2026-06-16 20:00 UTC 1m close：BTC $65,670.50、ETH $1,794.40、SOL $73.79。",
];

const sources = [
  [
    "CNBC stocks",
    "https://www.cnbc.com/2026/06/15/stock-market-today-live-updates.html",
  ],
  [
    "Investopedia",
    "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-06162026-11999070",
  ],
  ["CNBC SOXX", "https://www.cnbc.com/quotes/SOXX"],
  ["Federal Reserve H.15", "https://www.federalreserve.gov/releases/h15/"],
  ["BLS import prices", "https://www.bls.gov/news.release/ximpim.nr0.htm"],
  [
    "Census housing",
    "https://www.census.gov/construction/nrc/current/index.html",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260616() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          min-height: 760px;
          margin: 0 auto;
          padding: 38px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.42;
        }
        .hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 56%, #065f46 100%);
          border-radius: 24px;
          padding: 30px;
          color: white;
        }
        h1 { margin: 0 0 8px; font-size: 42px; line-height: 1.08; }
        .sub { font-size: 18px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.35fr 0.65fr; gap: 18px; margin-top: 18px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 22px;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
        }
        h2 { margin: 0 0 12px; color: #1d4ed8; font-size: 22px; }
        ul { margin: 0; padding-left: 21px; }
        li { margin: 8px 0; }
        .metric { display: grid; grid-template-columns: 1fr auto; gap: 10px; padding: 9px 0; border-bottom: 1px solid #e5e7eb; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 13px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-06-16 收市｜Dow 創高，但晶片回吐拖低 Nasdaq
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
            <span>Dow / value rotation</span>
            <span className="green">強</span>
          </div>
          <div className="metric">
            <span>S&P 500</span>
            <span className="amber">守 7,500</span>
          </div>
          <div className="metric">
            <span>Nasdaq / semis</span>
            <span className="red">弱</span>
          </div>
          <div className="metric">
            <span>油價/通脹壓力</span>
            <span className="green">降溫</span>
          </div>
          <div className="metric">
            <span>Fed / FOMC</span>
            <span className="amber">等語氣</span>
          </div>
          <div className="metric">
            <span>Crypto</span>
            <span className="amber">整固</span>
          </div>
          <h2 style={{ marginTop: 18 }}>操作重點</h2>
          <ul>
            <li>
              Dow 若企穩 52,000，rotation 可延續；但別用 Nasdaq 追高劇本硬做。
            </li>
            <li>SOXX 要重上 $600 才算 AI hardware momentum 修復。</li>
            <li>
              FOMC 後若 10Y 重上 4.50%、WTI 回 $80、VIX 更新後升穿 18，先減高
              beta。
            </li>
          </ul>
        </div>
      </section>
      <section className="card" style={{ marginTop: 18 }}>
        <h2>來源與口徑</h2>
        <p className="small">
          主要來源：
          {sources.map(([name, url], index) => (
            <React.Fragment key={url}>
              {index > 0 ? " / " : ""}
              <a href={url}>{name}</a>
            </React.Fragment>
          ))}
          。指數收市採 CNBC / Investopedia / Sharecast 一致口徑；Yahoo chart API
          今日 429，板塊 exact close 若無可靠交叉核對則寫「暫無可靠數據」；VIX
          官方/FRED 暫只更新至 2026-06-15 的 16.20；Crypto 採 Binance Vision
          2026-06-16 20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
