import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股星期二回吐：Dow 52,231.89（-0.30%）、S&P 500 7,520.93（-0.38%）、Nasdaq 25,065.87（-0.74%）、Russell 2000 2,821.38（-0.68%）。",
  "跌市主因：10月 CPI +0.4% MoM、core +0.3% MoM，均高過預期；市場把 12月加息變成基本情境，10Y yield 抽到約 4.99%。",
  "科技拖累最明顯：XLK -1.15%、NVDA -5.47%、MSFT -2.20%；但 AMD +1.30%、AVGO +3.91%，半導體內部仍有輪動。",
  "不是恐慌式拋售：VIX 19.46（-2.31%）反跌，金融 XLF +0.52%、能源 XLE +0.44%，資金偏向換馬而非全線撤退。",
  "宏觀：DXY 約 102.25-102.29（+0.6%），gold futures $4,040.50（-1.80%），Brent settle $91.49（-1.17%）、WTI $86.04（-0.93%）。",
  "Crypto 用 Binance Vision 2026-11-10 21:00 UTC：BTC $73,852.90（-1.27%）、ETH $2,061.09（-3.12%）、SOL $83.32（-3.74%）。",
];

const metrics = [
  ["Dow / S&P 500", "52,231.89 -0.30% / 7,520.93 -0.38%", "red"],
  ["Nasdaq / Russell", "25,065.87 -0.74% / 2,821.38 -0.68%", "red"],
  ["VIX / 10Y", "19.46 -2.31% / ~4.98%-4.99%", "amber"],
  ["XLF / XLE / XLC", "+0.52% / +0.44% / +0.37%", "green"],
  ["XLK / SOXX / XLB", "-1.15% / -0.12% / -0.17%", "red"],
  [
    "WTI / Brent / Gold",
    "$86.04 -0.93% / $91.49 -1.17% / $4,040.50 -1.80%",
    "amber",
  ],
  ["NVDA / AMD / AVGO", "-5.47% / +1.30% / +3.91%", "amber"],
  ["BTC / ETH / SOL", "-1.27% / -3.12% / -3.74%", "red"],
];

const sources = [
  [
    "CNBC close",
    "https://www.cnbc.com/2026/11/10/stock-market-today-live-updates.html",
  ],
  [
    "AP",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-a97eb31c415811065561f2c2ac552cd7",
  ],
  [
    "Reuters close",
    "https://ca.marketscreener.com/news/wall-st-ends-lower-as-hot-inflation-data-fed-comments-heighten-rate-worries-ce785edad18ef422",
  ],
  [
    "CPI / BLS",
    "https://www.cnbc.com/2026/11/10/cpi-inflation-report-october-2026.html",
  ],
  [
    "Treasury",
    "https://www.cnbc.com/2026/11/10/us-bonds-treasurys-yields.html",
  ],
  ["Oil", "https://www.cnbc.com/2026/11/10/oil-prices-trump-iran.html"],
  [
    "Gold / DXY",
    "https://live.euronext.com/en/financial-news/us-yields-rise-stocks-fall-inflation-data-boosts-odds-larger-december-rate-hike",
  ],
  ["Binance Vision", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261110() {
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
        .card { background: white; border: 1px solid #e2e8f0; border-radius: 18px; padding: 11px; }
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
          2026-11-10 收市（香港時間 2026-11-11 週三更新）｜CPI
          熱過預期、債息急升，科技拖累；但 VIX 回落，暫未算恐慌拋售
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
            <li>10Y 未跌回 4.90% 以下前，不宜追高長 duration tech。</li>
            <li>守 Nasdaq 25,000、S&P 7,500；失守要降低 high beta。</li>
            <li>
              NVDA 止跌、SOXX 企穩、BTC 重上 $74.8k-$75.5k，才算 risk-on 修復。
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
          。指數採 Reuters / CNBC / AP close 口徑；sector ETF 與個股採 Yahoo
          regular-market close / previous close 計算；FedWatch
          因時間點有差異，採約 88.5%（+25bp）/ 11.5%（+50bp）口徑；Crypto 採
          Binance Vision 2026-11-10 21:00 UTC 1m close，對比 11/09 21:00 UTC。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
