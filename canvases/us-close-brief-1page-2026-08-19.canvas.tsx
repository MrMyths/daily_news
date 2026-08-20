import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股止住三連跌：S&P 500 +0.21% 至 7,707.98，Dow +0.22%，Nasdaq +0.16%，Russell 2000 +0.50%；VIX -6.00% 至 14.89。",
  "主因是 Treasury 宣布把長端債券回購上限由 $2B 加至至少 $4B，10Y/30Y yield 回落，暫時紓緩估值壓力。",
  "但升市未算乾淨：FOMC minutes 指 many participants 認為若通脹不降或需再 tightening，早段升幅被收窄。",
  "板塊紅綠燈：XLV +3.51%、XLY +1.92%、XLB +1.43% 跑出；SOXX -2.21%、XLK -1.07%、XLI -0.88% 跑輸。",
  "重點股：MRNA +176.97% 因 Merck/Moderna Phase 3 癌症療法成功；TGT +4.28%、LOW +2.02%；MRVL +9.85%，但 AMD/AVGO/INTC 跌約 4%。",
  "Crypto 採 Binance Vision 2026-08-19 20:00 UTC 1m close：BTC $68,398.35（+5.79%）、ETH $2,103.00（+9.89%）、SOL $82.31（+6.67%）。",
];

const metrics = [
  ["S&P 500", "+0.21%", "green"],
  ["VIX", "14.89 / -6.00%", "green"],
  ["30Y yield", "約 5.19%", "green"],
  ["XLV / MRNA", "最強", "green"],
  ["SOXX", "-2.21%", "red"],
  ["FedWatch", "9月 hold 69.4%", "amber"],
];

const sources = [
  [
    "CNBC close",
    "https://www.cnbc.com/2026/08/18/stock-market-today-live-updates.html",
  ],
  [
    "Treasury buybacks",
    "https://www.cnbc.com/2026/08/19/treasury-announces-upscaled-buyback-operation-for-longer-term-debt-sending-yields-lower.html",
  ],
  [
    "FOMC minutes",
    "https://www.cnbc.com/2026/08/19/fed-minutes-july-2026-officials-saw-need-for-rate-hike-if-inflation-doesnt-cool.html",
  ],
  [
    "Merck/Moderna",
    "https://www.merck.com/news/merck-and-moderna-announce-phase-3-interpath-001-trial-of-intismeran-autogene-plus-keytruda-met-endpoints-of-recurrence-free-survival-rfs-and-distant-metastasis-free-survival-dmfs-in-patient/",
  ],
  [
    "Reuters oil/gold",
    "https://www.marketscreener.com/news/oil-extends-climb-on-prolonged-hormuz-export-uncertainty-ce7859ddde80f72d",
  ],
  [
    "Investing FedWatch",
    "https://www.investing.com/central-banks/fed-rate-monitor",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260819() {
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
          line-height: 1.34;
        }
        .hero {
          background: linear-gradient(135deg, #0f172a 0%, #14532d 54%, #111827 100%);
          border-radius: 24px;
          padding: 26px;
          color: white;
        }
        h1 { margin: 0 0 8px; font-size: 41px; line-height: 1.08; }
        .sub { font-size: 18px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.34fr 0.66fr; gap: 16px; margin-top: 15px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 17px;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
        }
        h2 { margin: 0 0 9px; color: #1d4ed8; font-size: 20px; }
        ul { margin: 0; padding-left: 20px; }
        li { margin: 6px 0; }
        .metric { display: grid; grid-template-columns: 1fr auto; gap: 10px; padding: 7px 0; border-bottom: 1px solid #e5e7eb; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 12.2px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-08-19 收市｜長債息回落帶動反彈，醫療急升但半導體仍弱
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
          <h2 style={{ marginTop: 13 }}>操作重點</h2>
          <ul>
            <li>SPX 要守 7,675-7,700，才算三日跌勢完成短線止血。</li>
            <li>SOXX 未企回 $531 前，AI hardware 反彈質素仍要打折。</li>
            <li>
              油價仍近四週高，Fed minutes 偏鷹；不要把一日反彈當全面解除警報。
            </li>
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
          。指數採 CNBC/Sharecast 收市口徑並以 Yahoo chart data 交叉；ETF/個股採
          Yahoo chart close；Treasury 採 CNBC 並交叉 Fed H.15/Treasury；FedWatch
          採 Investing/CME 8/19 20:45 EDT 口徑；Crypto 採 Binance Vision public
          data 2026-08-19 20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
