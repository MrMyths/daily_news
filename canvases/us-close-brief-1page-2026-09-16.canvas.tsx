import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股 Fed 後連跌第三日：Dow 51,461.90（-1.21%）、S&P 500 7,551.81（-0.45%）、Nasdaq 25,978.42（-0.01%）、Russell 2000 2,858.81（-0.40%）。",
  "Fed 12-0 加息 25bp 至 3.75%-4.00%；SEP / CNBC 顯示多數官員估今年還有一次 hike，Warsh 強調通脹仍太高。",
  "債息與美元壓估值：Reuters 報 2Y 4.738%、10Y 5.00%，DXY +0.63% 至 100.31；VIX 17.71（+2.97%）。",
  "板塊：SOXX +0.64%、XLK +0.10% 抗跌；XLF -1.62%、XLE -2.88% 最弱，energy/financials 拖市。",
  "重點股：GEV +4.79%、INTC +4.03%、ORCL +2.00%、NVDA +0.82%；MSFT -1.37%、AMZN -0.99%、GOOGL -0.61%。",
  "Crypto（Binance Vision 9/16 20:00 UTC）：BTC $76,065.30（-0.23%）、ETH $2,406.62（-0.47%）、SOL $98.11（+0.04%）。",
];

const metrics = [
  ["S&P 500 / Nasdaq", "7,551.81 -0.45% / 25,978.42 -0.01%", "red"],
  ["Dow / Russell", "51,461.90 -1.21% / 2,858.81 -0.40%", "red"],
  ["VIX / DXY", "17.71 +2.97% / 100.31 +0.63%", "red"],
  ["SOXX / XLK", "+0.64% / +0.10%", "green"],
  ["XLF / XLE", "-1.62% / -2.88%", "red"],
  ["10Y / 2Y yield", "5.00% / 4.738%", "red"],
  ["WTI / Brent", "$102.43 / $105.83", "amber"],
  ["BTC / ETH / SOL", "-0.23% / -0.47% / +0.04%", "amber"],
];

const sources = [
  [
    "AP/WTOP close",
    "https://wtop.com/national/2026/09/how-major-us-stock-indexes-fared-wednesday-9-16-2026/",
  ],
  [
    "Reuters markets",
    "https://www.reuters.com/world/china/global-markets-wrapup-1-2026-09-16/",
  ],
  [
    "CNBC Fed",
    "https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html",
  ],
  [
    "Fed SEP",
    "https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260916.htm",
  ],
  [
    "Newsquawk oil",
    "https://www.newsquawk.com/headlines/crude-wrap-wti-v6-settled-usd-340-lower-at-10243bbl-brent-x6-settled-usd-292-lower-at-10583bbl",
  ],
  [
    "Reuters retail/imports",
    "https://www.reuters.com/business/retail-consumer/us-retail-sales-rebound-sharply-august-2026-09-16/",
  ],
  [
    "NVIDIA AEMA",
    "https://blogs.nvidia.com/blog/ai-energy-management-alliance/",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260916() {
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
          background: linear-gradient(135deg, #7f1d1d 0%, #b91c1c 54%, #111827 100%);
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
        h2 { margin: 0 0 6px; color: #b91c1c; font-size: 17px; }
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
          2026-09-16 收市｜Fed 鷹派加息後連跌第三日；10Y 企 5%、 DXY 升穿
          100，semis 抗跌但 energy/financials 拖市
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
            <li>Fed day 後先看 10Y 能否跌回 5% 以下、DXY 能否失守 100。</li>
            <li>Semis/AI infrastructure 是相對強線，但未足以確認大市轉強。</li>
            <li>能源股因油價回吐急跌；油仍在 $100+，通脹壓力未解除。</li>
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
          。指數採 AP/WTOP 4:00pm ET 後 close；宏觀採 Fed/CNBC/Reuters；
          ETF/個股採 Yahoo chart、4:00pm ET 附近分鐘線與公開 quote snapshots；
          Crypto 採 Binance Vision 20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
