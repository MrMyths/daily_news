import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "週二美股反彈：Dow +160.24 點 / +0.30% 至 53,577.40；S&P 500 +0.32% 至 7,677.28；Nasdaq +0.66% 至 26,151.30；Russell 2000 +0.50%，VIX 15.45。",
  "核心原因係債息同油價一齊跌：CNBC 指 2Y 4.183%、10Y 4.629%、30Y 5.163%；Brent $88.58、WTI $82.36，兩者跌逾 3%。",
  "科技 / 半導體由前一日沽壓中反彈：XLK +0.94%、SOXX +1.57%、NVDA +2.16%，帶動 Nasdaq 跑贏。",
  "宏觀數據提醒唔好太樂觀：Consumer Confidence 89.4、New Home Sales 607K / -10.5%、Richmond Fed 4，需求正在降溫。",
  "事件風險仍高：PCE、Q2 GDP second estimate、Durable Goods、Nvidia 美東 8/26 盤後業績、Warsh Jackson Hole 都未過。",
  "Crypto 採 Binance Vision 2026-08-25 20:00 UTC：BTC $78,922.01（+0.22%）、ETH $2,462.46（-0.31%）、SOL $97.90（+1.45%）。",
];

const metrics = [
  ["S&P 500", "7,677.28 / +0.32%", "green"],
  ["Nasdaq", "26,151.30 / +0.66%", "green"],
  ["Dow", "53,577.40 / +0.30%", "green"],
  ["Russell / VIX", "+0.50% / 15.45", "green"],
  ["XLK / SOXX", "+0.94% / +1.57%", "green"],
  ["XLE / XLP", "-1.65% / -1.06%", "red"],
  ["10Y / 30Y", "4.629% / 5.163%", "amber"],
  ["FedWatch", "9月 hold 58.6% / +25bp 41.4%", "amber"],
  ["BTC / ETH / SOL", "+0.22% / -0.31% / +1.45%", "amber"],
];

const sources = [
  [
    "CNBC close",
    "https://www.cnbc.com/2026/08/24/stock-market-today-live-updates.html",
  ],
  ["TS2 close", "https://ts2.tech/en/stock-market-today-08-25-2026/"],
  [
    "AP indexes",
    "https://www.wdrb.com/news/national/how-major-us-stock-indexes-fared-tuesday-8-25-2026/article_98a0b4ae-0409-58c0-a97f-a02218438bc4.html",
  ],
  [
    "CNBC yields",
    "https://www.cnbc.com/2026/08/25/treasury-yields-steady-as-traders-await-more-economic-data-.html",
  ],
  [
    "Reuters data",
    "https://www.reuters.com/world/us/new-us-single-family-home-sales-slide-july-2026-08-25/",
  ],
  [
    "Reuters oil",
    "https://uk.marketscreener.com/news/oil-steadies-as-investors-weigh-impact-of-latest-us-sanctions-on-iran-ce7858dbd08bf423",
  ],
  ["ETF data", "https://exa.ai/library/markets/stock/XLK?date=2026-08-25"],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260825() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          min-height: 760px;
          margin: 0 auto;
          padding: 30px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.29;
        }
        .hero {
          background: linear-gradient(135deg, #064e3b 0%, #047857 54%, #111827 100%);
          border-radius: 22px;
          padding: 24px;
          color: white;
        }
        h1 { margin: 0 0 8px; font-size: 39px; line-height: 1.05; }
        .sub { font-size: 17px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.32fr 0.68fr; gap: 14px; margin-top: 13px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 15px;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
        }
        h2 { margin: 0 0 8px; color: #047857; font-size: 19px; }
        ul { margin: 0; padding-left: 19px; }
        li { margin: 5px 0; }
        .metric { display: grid; grid-template-columns: 0.84fr 1fr; gap: 8px; padding: 5.4px 0; border-bottom: 1px solid #e5e7eb; font-size: 13.2px; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 10.9px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-08-25 收市｜債息 / 油價降溫撐反彈；科技半導體回補，但 PCE / NVDA
          前仍要控風險
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
          <h2 style={{ marginTop: 10 }}>操作重點</h2>
          <ul>
            <li>SPX 未有效突破 7,700 前，先當 relief bounce。</li>
            <li>追科技要等 NVDA / SOXX 業績後確認。</li>
            <li>
              低 VIX 不等於低風險；PCE + NVDA + Jackson Hole 前倉位要保守。
            </li>
          </ul>
        </div>
      </section>
      <section className="card" style={{ marginTop: 13 }}>
        <h2>來源與口徑</h2>
        <p className="small">
          主要來源：
          {sources.map(([name, url], index) => (
            <React.Fragment key={url}>
              {index > 0 ? " / " : ""}
              <a href={url}>{name}</a>
            </React.Fragment>
          ))}
          。Yahoo chart API 本輪 429；指數用 CNBC/TS2/AP 交叉，ETF/個股用
          Exa/Yahoo snippets，宏觀用官方、Reuters/CNBC/CME。Crypto 採 Binance
          Vision 2026-08-25 20:00 UTC 1m close，對比 2026-08-24 20:00
          UTC；金價/DXY 有時間點差異，完整版已註明。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
