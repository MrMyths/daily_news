import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股連跌第四日：Dow 50,759.42（-1.64%）、S&P 500 7,340.53（-1.03%）、Nasdaq 24,328.38（-0.74%）；S&P 500 收 7月底以來低位。",
  "跌市核心仍是 AI / 高估值 unwind；CNBC 指 Nvidia earnings 前科技股波動大，NSA outage headline 亦放大尾段 risk-off。",
  "板塊全線偏弱：Xinhua 指 11個 S&P 500 sectors 全跌，Financials -1.87%、Utilities -1.60% 最弱，Energy -0.53% 最抗跌。",
  "宏觀偏鷹：10Y 約 5.10%-5.11%，FedWatch 來源顯示 12月加 25bp 機率約 93%-98%；retail sales +0.2%，但 import prices +1.1% 高過預期。",
  "NVDA 盤後業績好過預期：EPS $2.68、revenue $115.84B，Q4 guide 約 $130B；股份盤後升約 3%-4%，明日或觸發 relief bounce。",
  "Crypto 用 Binance Vision 2026-11-17 21:00 UTC（4:00pm ET）：BTC $64,036.75（-1.53%）、ETH $1,804.87（-0.79%）、SOL $73.24（+2.68%）。",
];

const metrics = [
  [
    "S&P / Dow / Nasdaq",
    "7,340.53 -1.03% / 50,759.42 -1.64% / 24,328.38 -0.74%",
    "red",
  ],
  ["Russell / VIX", "2,701.87 -1.50% / 25.46 +11.13%", "red"],
  ["10Y / 2Y / 30Y", "5.103% / 4.789% / 5.459%（Reuters close）", "amber"],
  ["WTI / Brent", "$86.01 +0.34% / $93.14 +0.76%", "green"],
  ["Financials / Utilities", "-1.87% / -1.60%（Xinhua sector）", "red"],
  ["Energy / Technology", "-0.53% / XLK proxy -0.91%", "red"],
  ["NVDA / AVGO / MSFT", "-0.44% / +2.46% / -2.27%", "red"],
  ["BTC / ETH / SOL", "-1.53% / -0.79% / +2.68%", "amber"],
];

const sources = [
  [
    "AP close",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-ff6caef4d9289cf7f1e6ee48a706eddc",
  ],
  [
    "CNBC close",
    "https://www.cnbc.com/2026/11/16/stock-market-today-live-updates.html",
  ],
  [
    "Reuters/Investing",
    "https://www.investing.com/news/economy-news/trading-day-ai-trade-unwind-continues-but-nvidia-beats-5034195",
  ],
  [
    "Xinhua sectors",
    "https://english.news.cn/northamerica/20261118/7fe12af3e0514dc99d350ac154d41ae5/c.html",
  ],
  ["Census retail", "https://www.census.gov/retail/sales.html"],
  [
    "Treasury",
    "https://www.livemint.com/market/us-yields-ease-as-equities-drop-before-nvidia-results-11794948835861.html",
  ],
  [
    "Nvidia",
    "https://www.cnbc.com/2026/11/17/nvidia-nvda-earnings-report-q3-2027.html",
  ],
  ["Binance Vision", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261117() {
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
          2026-11-17 收市（香港時間 2026-11-18 週三更新）｜AI trade 繼續
          unwind，大市連跌第四日；NVDA 盤後業績成為短線反彈關鍵
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
              NVDA 盤後 beat 可引發 tactical bounce，但要看 Nasdaq 能否重上
              24,500。
            </li>
            <li>S&P 500 7,300 是即時支持；反彈先看 7,400 / 7,416。</li>
            <li>
              10Y 未跌穿 5.10% 前，growth multiple 仍受壓，VIX 25 以上要控槓桿。
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
          。指數採 AP / CNBC / Yahoo chart close；sector rank 採 Xinhua /
          Reuters；個股與 ETF 因 Yahoo daily close 在生成時部分未寫入，採 Yahoo
          20:59-21:00 UTC 1分鐘 close proxy；Crypto 採 Binance Vision 2026-11-17
          21:00 UTC 1m close，對比 2026-11-16 21:00 UTC。 FedWatch
          機率按截取時間約 93%-98%（12月 +25bp）。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
