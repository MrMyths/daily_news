import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股星期四溫和收低：Dow 52,297.09（-0.36%）、S&P 500 7,592.40（-0.35%）、Nasdaq 25,366.09（-0.39%）、Russell 2000 2,799.06（-1.66%）。",
  "主因三件事：NVDA CEO Jensen Huang 辭任、10Y 美債重上約 5.10%、Brent/WTI 因 Iran / Hormuz 風險急升至 $95.82 / $88.74。",
  "板塊只有 Energy 明顯上升（XLE +約 1.51%）；Materials -1.28%、Communication Services -0.96%、Industrials -0.89% 跑輸。",
  "NVDA $166.19（-4.34%）但跌幅由早段收窄；AMD +5.86%、AVGO +5.54%、ANET +5.06%，反映 AI 交易內部分化，不是全面崩盤。",
  "宏觀偏鷹：FedWatch 不同時間點顯示 12月加息近乎 fully priced，50bp 尾端風險約 9%-15%；DXY 約 103.16-103.18，黃金跌約 2.7%-3.0%。",
  "Crypto 用 Binance Vision 2026-11-12 21:00 UTC（4:00pm ET）：BTC $71,499.35（-4.22%）、ETH $2,016.88（-3.11%）、SOL $81.41（-4.18%）。",
];

const metrics = [
  [
    "S&P / Dow / Nasdaq",
    "7,592.40 -0.35% / 52,297.09 -0.36% / 25,366.09 -0.39%",
    "red",
  ],
  ["Russell / VIX", "2,799.06 -1.66% / 18.69-18.70 +約6.9%", "red"],
  ["10Y / 2Y", "約 5.105% / 4.867%（Reuters；CNBC 盤中略高）", "amber"],
  ["WTI / Brent", "$88.74 +2.6% / $95.82 +3.3%", "green"],
  ["XLE / XLB / XLC", "+1.51% / -1.28% / -0.96%", "amber"],
  ["NVDA / AMD / AVGO", "-4.34% / +5.86% / +5.54%", "amber"],
  ["CTVA / GPN / SMCI", "-24.30% / -12.01% / -11.30%", "red"],
  ["BTC / ETH / SOL", "-4.22% / -3.11% / -4.18%", "red"],
];

const sources = [
  [
    "AP close",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-3f3668a937a11535103e3a5c8d82c9fc",
  ],
  [
    "Reuters close",
    "https://live.euronext.com/en/financial-news/wall-street-ends-lower-nvidia-ceo-resigns-us-yields",
  ],
  [
    "CNBC close",
    "https://www.cnbc.com/2026/11/12/stock-market-today-live-updates.html",
  ],
  [
    "Investing.com",
    "https://www.investing.com/news/stock-market-news/us-stocks-lower-at-close-of-trade-dow-jones-industrial-average-down-036-5023324",
  ],
  [
    "Treasury",
    "https://www.cnbc.com/2026/11/12/us-treasurys-bonds-yields.html",
  ],
  [
    "Oil",
    "https://www.cnbc.com/2026/11/12/oil-prices-jump-after-trump-says-no-iran-deal-needed-weve-got-their-strait.html",
  ],
  [
    "Gold / Dollar",
    "https://www.cnbc.com/2026/11/12/gold-falls-to-over-one-week-low-on-firm-dollar-fed-rate-hike-bets.html",
  ],
  [
    "CME",
    "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  ],
  ["Binance Vision", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261112() {
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
        .small { font-size: 9.35px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
        @media print { .sheet { width: auto; min-height: auto; } }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-11-12 收市（香港時間 2026-11-13 週五更新）｜NVDA
          事件、油價急彈、10Y 重上 5%；跌幅細但廣度弱
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
            <li>
              先睇 10Y 能否跌回 5% 以下；否則 tech / small caps 反彈難持久。
            </li>
            <li>
              NVDA 11/17 earnings 前 headline risk 仍高，AI beta 要等 regular
              session 確認。
            </li>
            <li>
              Friday PPI 若再熱，Fed 50bp 尾端風險會升，S&P 500 7,550 要守。
            </li>
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
          。指數採 AP / Reuters / Yahoo / Investing.com close 口徑；VIX
          因來源四捨五入顯示 18.69-18.70；美債採 Reuters / CNBC / Morningstar
          交叉；Crypto 採 Binance Vision 2026-11-12 21:00 UTC 1m close，對比
          11/11 21:00 UTC。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
