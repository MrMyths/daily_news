import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股星期三反彈：Dow 52,486.49（+0.49%）、S&P 500 7,619.38（+1.31%）、Nasdaq 25,466.19（+1.60%）、Russell 2000 2,846.26（+0.88%）。",
  "升市主因：CoreWeave +24.71% 紓緩 AI spending 疑慮，科技 / 晶片領升；SOX 約 +5.66%，S&P tech 約 +2.7%-2.8%。",
  "債市因 Veterans Day 休市，11/11 無新 cash Treasury close；最新可比仍是 11/10 的 10Y 約 4.99%、2Y 約 4.74%。",
  "宏觀仍偏緊：FedWatch 約 88.8% 定價 12月 +25bp、約 11.2% +50bp；DXY 約 102.90（+0.68%），黃金跌至約 $3,985-$4,000 區間。",
  "板塊：XLK 約 +3.23%、XLE +1.82%、XLI +1.32% 領先；XLY 約 -0.06%、XLRE 約 -0.03% 落後；VIX 17.49（-10.12%）。",
  "Crypto 用 Binance Vision 2026-11-11 21:00 UTC：BTC $74,648.01（+1.08%）、ETH $2,081.70（+1.00%）、SOL $84.96（+1.97%）。",
];

const metrics = [
  ["Dow / S&P 500", "52,486.49 +0.49% / 7,619.38 +1.31%", "green"],
  ["Nasdaq / Russell", "25,466.19 +1.60% / 2,846.26 +0.88%", "green"],
  ["VIX / 10Y", "17.49 -10.12% / ~4.99%（債市休市沿用 11/10）", "amber"],
  ["XLK / SOX / XLE", "+3.23% / +5.66% / +1.82%", "green"],
  ["XLY / XLRE / XLV", "約 -0.06% / -0.03% / +0.04%", "amber"],
  [
    "WTI / Brent / Gold",
    "$86.53 +0.57% / $92.76 +1.39% / spot ~$3,984.97 -1.1%",
    "amber",
  ],
  [
    "CRWV / AMD / NVDA",
    "+24.71% / +7.32% / +2.87%（NVDA 收市後再受壓）",
    "green",
  ],
  ["BTC / ETH / SOL", "+1.08% / +1.00% / +1.97%", "green"],
];

const sources = [
  [
    "AP close",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-027cd5f4583d1a11c1795150bf065afb",
  ],
  [
    "Reuters close",
    "https://ca.marketscreener.com/news/stocks-end-higher-as-coreweave-results-ease-ai-spending-worries-ce785edbd18cf726",
  ],
  [
    "CNBC close",
    "https://www.cnbc.com/2026/11/11/stock-market-today-live-updates.html",
  ],
  [
    "Investing.com",
    "https://www.investing.com/news/stock-market-news/us-stocks-higher-at-close-of-trade-dow-jones-industrial-average-up-048-5019892",
  ],
  [
    "Treasury",
    "https://www.cnbc.com/2026/11/10/us-bonds-treasurys-yields.html",
  ],
  [
    "Dollar",
    "https://www.cnbc.com/2026/11/11/dollar-gains-traction-as-fed-speakers-warn-of-risks-from-inflation.html",
  ],
  [
    "Oil",
    "https://www.cnbc.com/2026/11/11/oil-rises-from-two-month-low-as-hormuz-shipping-attacks-offset-iran-truce-hopes.html",
  ],
  [
    "Gold",
    "https://www.cnbc.com/2026/11/11/gold-edges-higher-after-sharp-selloff-fed-hike-bets-weigh.html",
  ],
  ["Binance Vision", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261111() {
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
          2026-11-11 收市（香港時間 2026-11-12 週四更新）｜AI /
          晶片急彈撐起大市；債市休市暫緩利率壓力，但美元與 Fed 定價仍偏鷹
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
              債市重開後先看 10Y 能否守在 5% 以下；若穿 5%，tech multiple
              會再受壓。
            </li>
            <li>SOX 守 10,500、Nasdaq 守 25,400，反彈才算有延續性。</li>
            <li>
              NVDA 收市後 headline risk 未完，追 AI beta 要等隔日 regular
              session 確認。
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
          。指數採 Reuters / CNBC / AP / Yahoo close 口徑；11/11 美債現貨因
          Veterans Day 休市，收益率採 11/10 最新可比數據；sector ETF 採 Yahoo /
          StockAnalysis / Close Print 等第三方收市快照交叉；Crypto 採 Binance
          Vision 2026-11-11 21:00 UTC 1m close，對比 11/10 21:00 UTC。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
