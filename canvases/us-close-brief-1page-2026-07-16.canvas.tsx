import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股高位回吐：Dow -105.67 至 52,552.97；S&P 500 -0.51% 至 7,533.77；Nasdaq -1.47% 至 25,881.95。",
  "跌市核心是 AI / semis 估值降溫：SOXX -4.46%、SMH -3.70%，TSMC capex 指引升至 $60B-$64B 後 TSM -2.32%。",
  "大市內部未壞晒：RSP +0.98%，XLP +2.80%、XLV +2.22%、XLRE +2.02%，資金轉去防守與醫療。",
  "宏觀偏韌：retail sales +0.2%，CNBC/Reuters 指 initial claims 208k，Philly Fed 41.4；10Y 約 4.559%。",
  "焦點股：GOOGL -4.44%（Gemini 3.5 Pro 延遲報道）；ABT +10.71%、MAN +32.37%、CTAS +7.22%；NFLX 盤後跌逾 8%。",
  "Crypto 採 Binance 2026-07-16 20:00 UTC 1m close：BTC $64,275.99、ETH $1,875.66、SOL $75.85。",
];

const sources = [
  [
    "CNBC",
    "https://www.cnbc.com/2026/07/15/stock-market-today-live-updates.html",
  ],
  [
    "AP",
    "https://www.compuserve.com/news/world/story/0001/20260716/e1c646be279423406586c67c79e738e4",
  ],
  [
    "Reuters/Yahoo",
    "https://sg.finance.yahoo.com/news/asian-shares-slump-chipmaker-drag-022037813.html",
  ],
  ["Census", "https://www.census.gov/retail/sales.html"],
  [
    "TSMC SEC",
    "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000451/a2q26e_withguidancexfinal.htm",
  ],
  ["FedWatch", "https://www.investing.com/central-banks/fed-rate-monitor"],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260716() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          min-height: 760px;
          margin: 0 auto;
          padding: 32px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.38;
        }
        .hero {
          background: linear-gradient(135deg, #111827 0%, #7f1d1d 52%, #0f766e 100%);
          border-radius: 24px;
          padding: 27px;
          color: white;
        }
        h1 { margin: 0 0 8px; font-size: 41px; line-height: 1.08; }
        .sub { font-size: 18px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.35fr 0.65fr; gap: 16px; margin-top: 15px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 18px;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
        }
        h2 { margin: 0 0 10px; color: #0f766e; font-size: 21px; }
        ul { margin: 0; padding-left: 21px; }
        li { margin: 7px 0; }
        .metric { display: grid; grid-template-columns: 1fr auto; gap: 10px; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 12.3px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-07-16 收市｜半導體拖低 Nasdaq，防守與醫療接力
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
            <span className="amber">守 7,500</span>
          </div>
          <div className="metric">
            <span>Nasdaq momentum</span>
            <span className="red">轉弱</span>
          </div>
          <div className="metric">
            <span>Semis / SOXX</span>
            <span className="red">-4.46%</span>
          </div>
          <div className="metric">
            <span>Market breadth / RSP</span>
            <span className="green">+0.98%</span>
          </div>
          <div className="metric">
            <span>VIX</span>
            <span className="amber">16.73</span>
          </div>
          <div className="metric">
            <span>Crypto</span>
            <span className="red">回吐</span>
          </div>
          <h2 style={{ marginTop: 14 }}>操作重點</h2>
          <ul>
            <li>S&P 500 7,500 係第一防線；失守先代表調整加深。</li>
            <li>SOXX/SMH 要先止跌，Nasdaq 先有機會修復。</li>
            <li>10Y 4.65%、VIX 20、Brent $85-$86 是降風險警號。</li>
          </ul>
        </div>
      </section>
      <section className="card" style={{ marginTop: 15 }}>
        <h2>來源與口徑</h2>
        <p className="small">
          主要來源：
          {sources.map(([name, url], index) => (
            <React.Fragment key={url}>
              {index > 0 ? " / " : ""}
              <a href={url}>{name}</a>
            </React.Fragment>
          ))}
          。指數採 CNBC/AP；ETF/個股 close 以 Yahoo chart 交叉核對；Crypto 採
          Binance Vision 2026-07-16 20:00 UTC 1m close。Initial claims 因官方
          DOL 即時頁在本環境抓到舊版，本文標示採 CNBC/Reuters 208k 口徑。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
