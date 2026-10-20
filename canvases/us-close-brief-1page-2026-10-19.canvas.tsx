import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股週一 AI / semis oversold bounce：S&P 500 7,690.73（+0.41%）、Nasdaq 26,430.89（+1.11%），Dow 51,966.03（-0.07%），Russell 2,728.30（+0.25%）。",
  "一句講晒：大型科技買盤返嚟，但 breadth 未靚；Reuters 指 NYSE 跌股仍多過升股 1.69:1，唔係全面 risk-on。",
  "板塊：XLY +1.78%、XLK +1.36%、SOXX +1.73% 領先；XLU -2.01%、XLRE -1.16%、XLF -0.83% 拖後腿。",
  "焦點股：AMZN +4.98%、TSLA +3.76%、MU 約 +3%、NVDA +1.38%、AMD +1.76%；CRWV 早升後收 -0.44%，CLF +16.34%。",
  "宏觀：10Y 約 5.135%、2Y 約 4.759%；WTI $103.66（+2.22%），Brent 約 $109.55（-0.28%）；Gold $4,144.70（-0.6%）。",
  "Crypto（Binance Vision 10/19 20:00 UTC）：BTC $81,866.89（+0.26% vs 10/16）、ETH $2,395.13（-0.80%）、SOL $104.02（+0.33%）。",
];

const metrics = [
  ["S&P 500 / Nasdaq", "7,690.73 +0.41% / 26,430.89 +1.11%", "green"],
  ["Dow / Russell", "51,966.03 -0.07% / 2,728.30 +0.25%", "amber"],
  ["VIX / 10Y", "18.44 -7.75% / ~5.135%", "amber"],
  ["XLY / XLK / SOXX", "+1.78% / +1.36% / +1.73%", "green"],
  ["XLU / XLRE / XLF", "-2.01% / -1.16% / -0.83%", "red"],
  [
    "WTI / Brent / Gold",
    "$103.66 +2.22% / $109.55 -0.28% / $4,144.70 -0.6%",
    "amber",
  ],
  ["AMZN / TSLA / CLF", "+4.98% / +3.76% / +16.34%", "green"],
  ["BTC / ETH / SOL", "+0.26% / -0.80% / +0.33%", "amber"],
];

const sources = [
  [
    "AP close",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-5aec11ee466841cc2a69b2d23ab77f0e",
  ],
  [
    "CNBC live",
    "https://www.cnbc.com/2026/10/18/stock-market-today-live-updates.html",
  ],
  [
    "Reuters",
    "https://www.investing.com/news/economy-news/wall-st-futures-climb-as-ai-stocks-rebound-oil-yields-fall-4956777",
  ],
  ["Sector table", "https://wallstreetnumbers.com/watchlists/sector-spdr-etfs"],
  ["VIX", "https://finance.yahoo.com/quote/%5EVIX/history/"],
  [
    "Gold / Fed odds",
    "https://www.ausecure.com/gold-market-close-oct-19-2026/",
  ],
  [
    "NAHB",
    "https://www.nahb.org/news-and-economics/press-releases/2026/10/builder-sentiment-falls-on-rising-rates",
  ],
  ["Binance Vision", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261019() {
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
        h1 { margin: 0 0 8px; font-size: 31px; line-height: 1.04; }
        .sub { font-size: 15.5px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.25fr 0.75fr; gap: 11px; margin-top: 11px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 11px;
        }
        h2 { margin: 0 0 6px; color: #0f766e; font-size: 17px; }
        ul { margin: 0; padding-left: 16px; }
        li { margin: 3.4px 0; }
        .metric { display: grid; grid-template-columns: 0.72fr 1fr; gap: 7px; padding: 4.4px 0; border-bottom: 1px solid #e5e7eb; font-size: 12px; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 9.45px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
        @media print { .sheet { width: auto; min-height: auto; } }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-10-19 收市（香港時間 2026-10-20 週二更新）｜AI / 半導體反彈， 但
          breadth 偏弱；高息繼續壓住金融、地產、公用
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
            <li>當作 tech oversold bounce，未當全面 risk-on。</li>
            <li>留意 10Y 5.15% / WTI $105；兩者升穿會壓估值。</li>
            <li>
              本週 Meta、Tesla、SpaceX 業績要證明 AI / growth 反彈有基本面支持。
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
          。指數採 AP / CNBC / Reuters 終值；VIX 採 Yahoo close 18.44；sector
          ETF 採 Wall Street Numbers / StockAnalysis 收市表；Brent / WTI
          因合約與時間點有差異，文內標示；Crypto 採 Binance Vision 20:00 UTC 1m
          close，對比上一個美股交易日 10/16 20:00 UTC。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
