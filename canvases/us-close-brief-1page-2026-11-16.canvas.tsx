import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股星期一明顯 risk-off：Dow 51,608.17（-1.41%）、S&P 500 7,416.59（-1.92%）、Nasdaq 24,509.76（-2.49%），三大指數連續受 AI / 科技沽壓拖累。",
  "焦點仍是 NVDA / AI unwind：NVDA 約 -4.10%，SOX -5.28%、SOXX proxy -5.44%，AMD、MU、INTC、SNDK、DELL、ORCL、LITE、BE 全線下跌。",
  "板塊輪動非常防守：Newsquawk 指只有 Staples +0.34% 與 Utilities +0.12% 上升；Technology -2.98%、Communication Services -2.82% 最弱。",
  "美債有避險買盤但未夠：CNBC 10Y 5.131%、2Y 4.834%、30Y 5.476%；高息仍壓住 growth multiple。",
  "FedWatch 仍偏鷹：CNBC 指 12月加 25bp 約 95%、50bp 約 5%；黃金跌至約 $3,853，油價 settlement 同日下跌。",
  "Crypto 用 Binance Vision 2026-11-16 21:00 UTC（4:00pm ET）：BTC $65,032.01（-5.59%）、ETH $1,819.27（-6.59%）、SOL $71.33（-10.75%）。",
];

const metrics = [
  [
    "S&P / Dow / Nasdaq",
    "7,416.59 -1.92% / 51,608.17 -1.41% / 24,509.76 -2.49%",
    "red",
  ],
  ["Russell / VIX", "2,742.94 -1.70% / 22.91 +18.70%", "red"],
  ["10Y / 2Y / 30Y", "5.131% / 4.834% / 5.476%（CNBC）", "amber"],
  ["WTI / Brent", "$85.72 -$2.84 / $92.44 -$3.40（Newsquawk）", "red"],
  ["Staples / Utilities", "+0.34% / +0.12%", "green"],
  ["Technology / SOXX", "-2.98% / -5.44% proxy", "red"],
  ["NVDA / AMD / MU", "-4.10% / -5.58% / -7.63%", "red"],
  ["BTC / ETH / SOL", "-5.59% / -6.59% / -10.75%", "red"],
];

const sources = [
  [
    "AP close",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-2e6a9c41b6336e9240c1b01585d20cd4",
  ],
  [
    "CNBC close",
    "https://www.cnbc.com/2026/11/15/stock-market-today-live-updates.html",
  ],
  [
    "Reuters/Investing",
    "https://www.investing.com/news/economy-news/trading-day-ai-jitters-slam-wall-street-5031112",
  ],
  [
    "Treasury",
    "https://www.cnbc.com/2026/11/16/treasury-yields-bonds-inflation.html",
  ],
  [
    "Newsquawk",
    "https://www.newsquawk.com/headlines/us-market-wrap---16th-november-2026-risk-off-trade-as-tech-rout-resumes-supporting-havens-",
  ],
  ["NY Fed", "https://www.newyorkfed.org/survey/empire/empiresurvey_overview"],
  [
    "Gold/FedWatch",
    "https://www.cnbc.com/2026/11/16/gold-holds-steady-as-investors-await-warsh-remarks-for-rate-signals.html",
  ],
  ["Binance Vision", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261116() {
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
          background: #102a43;
          border-radius: 20px;
          padding: 20px;
          color: white;
          border: 1px solid #243b53;
        }
        h1 { margin: 0 0 8px; font-size: 30px; line-height: 1.04; }
        .sub { font-size: 15px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.23fr 0.77fr; gap: 11px; margin-top: 11px; }
        .card { background: white; border: 1px solid #e2e8f0; border-radius: 18px; padding: 11px; }
        h2 { margin: 0 0 6px; color: #0f766e; font-size: 17px; }
        ul { margin: 0; padding-left: 16px; }
        li { margin: 3.4px 0; }
        .metric { display: grid; grid-template-columns: 0.64fr 1fr; gap: 7px; padding: 4.4px 0; border-bottom: 1px solid #e5e7eb; font-size: 12px; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 9.25px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
        @media print { .sheet { width: auto; min-height: auto; } }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-11-16 收市（香港時間 2026-11-17 週二更新）｜AI /
          半導體沽壓擴散，避險買債未能扭轉高息與 NVDA earnings 前壓力
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
            <li>先等 NVDA 11/17 盤後 earnings；未出前 AI beta 不宜加槓桿。</li>
            <li>S&P 500 7,400、Nasdaq 24,500、SOX 9,600 是短線防線。</li>
            <li>10Y 未跌穿 5.10% 前，科技股估值反彈空間仍受壓。</li>
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
          。指數採 AP / CNBC / Yahoo chart close；sector rank 採
          Newsquawk；個股與 ETF 因 Yahoo daily close 在生成時部分未寫入，採
          Yahoo 20:59-21:00 UTC 1分鐘 close proxy；Crypto 採 Binance Vision
          2026-11-16 21:00 UTC 1m close，對比 2026-11-13 21:00 UTC。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
