import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股星期一廣泛反彈：Dow 52,389.75（+2.15%）、S&P 500 7,549.94（+2.35%）、Nasdaq 25,253.14（+2.74%），S&P 創 4月8日以來最佳單日。",
  "升市核心：油價急跌降溫通脹恐懼，加上資金低吸上週被沽到最急的 AI / chip；SOXX $146.76（+7.49%）、AMD +13.26%、AVGO +8.78%。",
  "升勢夠闊：11 個 S&P 500 板塊全升，Russell 2000 2,840.81（+3.15%），VIX 19.92（-22.31%）跌穿 20。",
  "最大保留位：Nvidia -4.27% 逆市跌；Crypto 未跟，BTC $74,802（-1.45% vs 11/06 4pm ET）、ETH -4.62%、SOL -3.82%。",
  "宏觀：10Y yield 約 4.86%-4.88%，美元指數約 101.8-101.9 回落；WTI $86.85（-4.38%）、Brent $92.57（-5.85%）、gold futures $4,114.50（+1%）。",
  "下一關：11/10 CPI、10Y 4.90%、SOXX 延續力、CoreWeave 業績與 BTC 能否重上 $75.9k-$76.5k。",
];

const metrics = [
  ["Dow / S&P 500", "52,389.75 +2.15% / 7,549.94 +2.35%", "green"],
  ["Nasdaq / Russell", "25,253.14 +2.74% / 2,840.81 +3.15%", "green"],
  ["VIX / 10Y", "19.92 -22.31% / 4.863%-4.876%", "green"],
  ["SOXX / XLK / XLI", "+7.49% / +3.73% / +3.82%", "green"],
  ["XLE / XLP / XLF", "+0.52% / +0.90% / +1.45%", "amber"],
  [
    "WTI / Brent / Gold",
    "$86.85 -4.38% / $92.57 -5.85% / $4,114.50 +1%",
    "amber",
  ],
  ["AMD / NVDA / AVGO", "+13.26% / -4.27% / +8.78%", "amber"],
  ["BTC / ETH / SOL", "-1.45% / -4.62% / -3.82%", "red"],
];

const sources = [
  [
    "Reuters close",
    "https://live.euronext.com/en/financial-news/stocks-jump-oil-tumbles-nvidia-falls-amid-internal-probe",
  ],
  [
    "CNBC close",
    "https://www.cnbc.com/2026/11/08/stock-market-today-live-updates.html",
  ],
  [
    "AP",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-f7ec9680fc858e3c2505913e7b3a54e2",
  ],
  [
    "Treasury",
    "https://www.cnbc.com/2026/11/09/us-treasurys-bonds-yields.html",
  ],
  [
    "Oil",
    "https://live.euronext.com/en/financial-news/oil-down-more-7-barrel-post-settlement-trade-trump-signals-restraint-iran",
  ],
  [
    "Gold / DXY",
    "https://www.cnbc.com/2026/11/09/gold-gains-more-than-1percent-as-softer-oil-prices-ease-inflation-worries.html",
  ],
  [
    "FedWatch",
    "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  ],
  ["Binance Vision", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261109() {
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
          2026-11-09 收市（香港時間 2026-11-10 週二更新）｜油價急跌點火， AI /
          晶片反彈；CPI 前先當高質素 relief rally
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
            <li>短線承認反彈，但 CPI 前不追到滿倉。</li>
            <li>若 10Y 升穿 4.90%，Nasdaq / SOXX beta 要降速。</li>
            <li>
              Nvidia 止跌、SOXX 延續、BTC 重上 $75.9k-$76.5k，才算 risk-on
              更完整。
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
          。指數採 Reuters / CNBC / AP close 口徑；sector ETF 與 SOXX 採 Yahoo /
          quote source 交叉；FedWatch 因時間點有差異，採約 78%-85%
          區間並說明最新口徑；Crypto 採 Binance Vision 2026-11-09 21:00 UTC 1m
          close，對比 11/06 21:00 UTC。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
