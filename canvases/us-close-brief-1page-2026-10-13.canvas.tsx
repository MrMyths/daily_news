import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股週二高位微跌：Dow 51,670.10（-0.35%）、S&P 500 7,805.45（-0.02%）、Nasdaq 27,204.38（-0.15%）、Russell 2,783.37（-0.40%）。",
  "一句講晒：銀行財報不差但市場門檻高，晶片股繼續消化 AI spending / 中國競爭憂慮，明日 CPI 前資金偏觀望。",
  "板塊分化好明顯：XLE +1.76%、XLC +0.74%、XLU +0.58% 領先；XLV -1.35%、XLF -0.42%、XLI -0.28% 拖後腿。",
  "焦點股：JPM -0.86%、WFC -3.10%、GS -0.23%、C -5.60%；JNJ -5.73%；AMAT -6.45%、MU -4.35%；VLO +4.69%、ORCL +4.23%。",
  "宏觀：10Y yield 5.216%（-2.7bp），FedWatch 類口徑 10 月 hold 約 81%、12 月加息約 74%；WTI $94.14、Brent $105.69。",
  "Crypto（Binance data API 10/13 20:00 UTC）：BTC $83,304.82（+0.50%）、ETH $2,509.79（-0.50%）、SOL $107.59（-0.71%）。",
];

const metrics = [
  ["S&P 500 / Nasdaq", "7,805.45 -0.02% / 27,204.38 -0.15%", "amber"],
  ["Dow / Russell", "51,670.10 -0.35% / 2,783.37 -0.40%", "red"],
  ["VIX / 10Y", "15.27 / 5.216%", "amber"],
  ["XLE / XLC / XLU", "+1.76% / +0.74% / +0.58%", "green"],
  ["XLV / XLF / SOXX", "-1.35% / -0.42% / -0.17%", "red"],
  ["WTI / Brent", "$94.14 +0.43% / $105.69 -0.9%", "amber"],
  ["Gold spot / DXY", "$4,159.65 -0.29% / 102.26-102.39", "amber"],
  ["BTC / ETH / SOL", "+0.50% / -0.50% / -0.71%", "amber"],
];

const sources = [
  [
    "AP close",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-a0a577dfd12f63ee6780a56ab02b55c4",
  ],
  [
    "CNBC market",
    "https://www.cnbc.com/2026/10/13/stock-market-today-live-updates-.html",
  ],
  [
    "Sharecast close",
    "https://www.sharecast.com/news/market-report-us-close/us-close-stocks-lower-as-traders-digest-q3-banks-earnings--23841218.html",
  ],
  ["Sectors", "https://www.thetrading.tools/sector-performance"],
  ["SOXX", "https://stockanalysis.com/etf/soxx/history/"],
  [
    "10Y / macro",
    "https://www.morningstar.com/news/dow-jones/202610137666/10-year-treasury-yield-falls-to-5216-data-talk",
  ],
  [
    "FX / gold / CPI",
    "https://fazen.markets/en/dollar-slips-ahead-of-cpi-10y-treasury-yield-eases-oil-rises",
  ],
  ["Binance data API", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261013() {
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
          background: linear-gradient(135deg, #1e3a8a 0%, #0f766e 54%, #111827 100%);
          border-radius: 22px;
          padding: 20px;
          color: white;
        }
        h1 { margin: 0 0 8px; font-size: 36px; line-height: 1.04; }
        .sub { font-size: 15.5px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.25fr 0.75fr; gap: 11px; margin-top: 11px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 11px;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
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
        @media print { .sheet { width: auto; min-height: auto; box-shadow: none; } }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-10-13 收市（香港時間 2026-10-14 週三更新）｜CPI 前微跌； Energy
          逆市強，Banks / Health Care / Semis 分化受壓
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
            <li>明日 CPI 前不要過度追 beta；先看 10Y、美元、SOXX 反應。</li>
            <li>
              Energy 強但要防油價 headline 反轉；Banks 要看財報 call 細節。
            </li>
            <li>BTC 較硬淨，但 ETH / SOL 跑輸，crypto 未算全面 risk-on。</li>
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
          。指數採 AP / CNBC / Sharecast 終值；sector 採 thetrading.tools ETF
          close；SOXX 採 StockAnalysis；10Y 採 Morningstar / Tradeweb；Crypto 採
          Binance data API 20:00 UTC 1m close。Cboe 官方 VIX CSV 執行時只到
          10/12，10/13 VIX 用即時市場來源並註明；Yahoo chart API 本次 HTTP 429
          未用作即日行情主來源。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
