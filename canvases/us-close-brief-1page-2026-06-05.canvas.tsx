import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "S&P 500 -2.64% 至 7,383.74、Dow -1.35% 至 50,866.78、Nasdaq -4.18% 至 25,709.43；S&P 500 九星期連升斷纜。",
  "主因係 May 非農 +172k 遠高預期，市場重估 Fed 年尾加息風險；FedWatch 12 月加息機率升至約 68.4%。",
  "10Y Treasury 約 4.54%-4.55%，2Y 約 4.17%；高估值 AI/半導體最受壓，XLK ETF proxy -6.66%。",
  "半導體急跌：NVDA -6.20%、AVGO -7.92%、MU -13.25%、AMD -10.86%、INTC -11.28%、MRVL -16.73%。",
  "防守輪動清晰：XLP +1.71%、XLU +0.93%、XLV +0.61%；資金未完全離場，而係降 beta。",
  "Crypto（Binance Vision 4:00pm ET 1m close）：BTC $60,454.00、ETH $1,577.32、SOL $63.69；三者較前一日同口徑急跌。",
];

const sources = [
  [
    "Reuters/SRN",
    "https://srnnews.com/nasdaq-sp-futures-slip-as-semiconductors-drag-payrolls-in-focus/",
  ],
  [
    "CNBC",
    "https://www.cnbc.com/2026/06/04/stock-market-today-live-updates.html",
  ],
  ["BLS", "https://www.bls.gov/news.release/archives/empsit_06052026.htm"],
  [
    "FedWatch/Reuters",
    "https://finance.yahoo.com/economy/policy/articles/us-rate-futures-raise-rate-125419828.html",
  ],
  [
    "Advisor Perspectives",
    "https://www.advisorperspectives.com/dshort/updates/2026/06/05/treasury-yields-snapshot-june-5-2026",
  ],
  [
    "Ameriprise",
    "https://cdn.ameriprisecontent.com/cds/alwp/marketperspectives/aftertheclose-06-05-2026.pdf",
  ],
  ["Binance Vision", "https://data.binance.vision/"],
];

export default function USCloseBriefOnePage20260605() {
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
          background: linear-gradient(135deg, #0f172a 0%, #7f1d1d 68%, #b45309 100%);
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
        h2 { margin: 0 0 12px; color: #7f1d1d; font-size: 22px; }
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
          2026-06-05 收市｜非農太強，AI 半導體急速去槓桿
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
            <span>大市趨勢</span>
            <span className="red">急轉弱</span>
          </div>
          <div className="metric">
            <span>市場寬度</span>
            <span className="red">弱</span>
          </div>
          <div className="metric">
            <span>防守板塊</span>
            <span className="green">強</span>
          </div>
          <div className="metric">
            <span>AI / 半導體</span>
            <span className="red">深紅</span>
          </div>
          <div className="metric">
            <span>利率風險</span>
            <span className="red">升溫</span>
          </div>
          <div className="metric">
            <span>Crypto beta</span>
            <span className="red">弱</span>
          </div>
          <h2 style={{ marginTop: 18 }}>操作重點</h2>
          <ul>
            <li>重上 7,423-7,450：短線修復。</li>
            <li>失守 7,319-7,300：回調升級。</li>
            <li>VIX 企 20 以上要控槓桿；BTC $60k 是 crypto 風險線。</li>
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
          。指數收市採 Reuters/CNBC/Yahoo 一致口徑；板塊採 Yahoo ETF proxy，並以
          Ameriprise/FactSet 作交叉確認；Crypto 採 Binance Vision 2026-06-05
          20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
