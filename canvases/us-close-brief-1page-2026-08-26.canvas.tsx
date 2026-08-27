import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "週三美股近乎平收但偏弱：Dow -113.52 / -0.21% 至 53,463.88；S&P 500 -0.02% 至 7,675.70；Nasdaq -0.08% 至 26,130.20；Russell 2000 -0.14%，VIX 15.21。",
  "核心矛盾：7 月 PCE headline YoY +3.7% 略熱，core +3.3% 符合預期；市場不恐慌，但唔願在 Nvidia 盤後前追高。",
  "官方 Treasury 曲線仍高：2Y 4.19%、10Y 4.66%、30Y 5.18%；FedWatch 類截數顯示 9 月 hold 仍是 base case，但加息尾部風險未走。",
  "板塊分化：XLK +0.61%、XLE +0.60%、XLU +0.46% 撐市；XLV -1.00%、XLY -0.67%、XLRE -0.60%、XLC -0.50% 拖累。",
  "Nvidia 收市前 $209.66 / -1.59%；盤後公布 Q2 FY2027 revenue $96.2B、non-GAAP EPS $2.22、Q3 guide $108B，週四科技反應是關鍵。",
  "Crypto 採 Binance Vision 2026-08-26 20:00 UTC：BTC $78,453.68（-0.59%）、ETH $2,471.37（+0.36%）、SOL $96.75（-1.17%）。",
];

const metrics = [
  ["S&P 500", "7,675.70 / -0.02%", "amber"],
  ["Nasdaq", "26,130.20 / -0.08%", "amber"],
  ["Dow", "53,463.88 / -0.21%", "red"],
  ["Russell / VIX", "-0.14% / 15.21", "amber"],
  ["XLK / SOXX", "+0.61% / +0.26%", "green"],
  ["XLV / XLY", "-1.00% / -0.67%", "red"],
  ["2Y / 10Y / 30Y", "4.19% / 4.66% / 5.18%", "amber"],
  ["FedWatch", "9月 hold 64.3% / +25bp 35.7%", "amber"],
  ["BTC / ETH / SOL", "-0.59% / +0.36% / -1.17%", "amber"],
];

const sources = [
  [
    "Reuters/Yahoo close",
    "https://finance.yahoo.com/markets/stocks/articles/wall-street-dips-hot-inflation-184248835.html",
  ],
  ["Yahoo S&P", "https://finance.yahoo.com/quote/%5EGSPC/history/"],
  ["Cboe VIX", "https://www.cboe.com/tradable-products/vix/"],
  [
    "Treasury curve",
    "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value_month=202608&type=daily_treasury_yield_curve",
  ],
  [
    "BEA PCE",
    "https://www.bea.gov/news/2026/personal-income-and-outlays-july-2026",
  ],
  [
    "BEA GDP",
    "https://www.bea.gov/news/2026/gdp-second-estimate-and-corporate-profits-2nd-quarter-2026",
  ],
  [
    "CNBC oil/gold",
    "https://www.cnbc.com/2026/08/26/oil-falls-as-the-us-pivots-to-economic-pressure-on-iran-.html",
  ],
  [
    "Nvidia",
    "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260826() {
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
          line-height: 1.27;
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
        .small { font-size: 10.7px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-08-26 收市｜PCE 偏熱但指數跌唔深；Nvidia 盤後業績成為下一日 AI
          trade 方向盤
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
            <li>SPX 未突破 7,700 前，先當 range trade。</li>
            <li>週四追 AI 要看 NVDA、SOXX、QQQ、breadth 是否同步。</li>
            <li>
              低 VIX 不是低風險；PCE + Jackson Hole + 債券拍賣仍可令利率重定價。
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
          。指數採 Reuters/Yahoo final close；VIX 採 Cboe；美債採 U.S. Treasury
          3:30pm ET CMT；PCE/GDP 採 BEA；FedWatch 採 Investing.com 8:35pm ET
          截數。部分第三方直播頁收盤截數較早，與 Reuters/Yahoo
          終局數字有細微差異，完整版已註明。Crypto 採 Binance Vision 2026-08-26
          20:00 UTC 1m close，對比 2026-08-25 20:00 UTC。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
