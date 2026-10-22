import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股週三由 AI / 科技重新帶頭：Dow 52,856.09（+0.69%）、S&P 500 7,757.17（+0.58%）、Nasdaq 26,702.86（+1.05%）。",
  "核心原因：SpaceX +7.79%、Super Micro +9.55%，令市場暫時放低 AI capex 回報疑慮；XLK +1.68%、SOXX +2.07% 領升。",
  "升勢未算全面：Russell 2000 2,781.02（+0.27%）、VIX 16.68（-3.64%）；Reuters 指 NYSE 升跌比 1.37:1，成交 16.11B 股低過 20 日平均。",
  "板塊紅綠燈：SOXX +2.07%、XLK +1.68%、XLI +0.90% 強；XLC -1.09%、XLRE -0.79%、XLP -0.73%、XLV -0.49% 弱。",
  "宏觀：10Y yield 約 5.11% 附近；FedWatch / cdes 顯示 10 月約 84% 機率按兵不動、12 月約 87% 機率加 25bp，市場未轉向減息。",
  "Crypto（Binance Vision 10/21 20:00 UTC）：BTC $84,477.32（+2.35% vs 10/20）、ETH $2,492.20（+2.34%）、SOL $108.24（+2.14%）。",
];

const metrics = [
  ["Dow / S&P 500", "52,856.09 +0.69% / 7,757.17 +0.58%", "green"],
  ["Nasdaq / Russell", "26,702.86 +1.05% / 2,781.02 +0.27%", "green"],
  ["VIX / 10Y", "16.68 -3.64% / ~5.11%", "green"],
  ["SOXX / XLK / XLI", "+2.07% / +1.68% / +0.90%", "green"],
  ["XLC / XLRE / XLP", "-1.09% / -0.79% / -0.73%", "red"],
  [
    "WTI / Brent / Gold",
    "$97.15 -0.68% / $108.82 +0.03% / $4,130.50 +0.20%",
    "amber",
  ],
  ["SPCX / SMCI / TSLA", "+7.79% / +9.55% / +3.41%", "green"],
  ["BTC / ETH / SOL", "+2.35% / +2.34% / +2.14%", "green"],
];

const sources = [
  [
    "CNBC close",
    "https://www.cnbc.com/2026/10/20/stock-market-today-live-updates.html",
  ],
  [
    "Reuters",
    "https://www.investing.com/news/economy-news/nasdaq-futures-lead-gains-as-spacex-super-micro-results-lift-ai-trade-4962357",
  ],
  ["Sector table", "https://www.scannerxmi.com/sector/"],
  ["VIX / RUT", "https://finance.yahoo.com/quote/%5EVIX/history/"],
  ["FedWatch", "https://cdes.com/dashboards/fed-rates"],
  [
    "Oil",
    "https://www.cnbc.com/2026/10/21/oil-price-today-wti-brent-rise-on-middle-east-worries.html",
  ],
  [
    "Gold",
    "https://www.morningstar.com/news/dow-jones/202610217675/comex-gold-settles-020-higher-at-413050-data-talk",
  ],
  ["Binance Vision", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261021() {
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
          2026-10-21 收市（香港時間 2026-10-22 週四更新）｜AI earnings
          修補信心，Nasdaq 領升；通訊服務拖後
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
            <li>今日可承認 risk-on，但先當 AI earnings relief rally。</li>
            <li>若 10Y 重上 5.15%，Nasdaq / SOXX beta 要降速。</li>
            <li>
              Meta、Tesla、IBM、Lam 盤後翌日反應，是科技升浪能否延續的驗證。
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
          。指數採 CNBC / Reuters / AP 終值；VIX / Russell 採 Yahoo historical
          close；sector ETF 採 ScannerXMI /
          StockAnalysis；油價、黃金與美債收益率因合約與時間點有差異，已用主流終值並標明口徑；Crypto
          採 Binance Vision 2026-10-21 20:00 UTC 1m close，對比 10/20 20:00
          UTC。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
