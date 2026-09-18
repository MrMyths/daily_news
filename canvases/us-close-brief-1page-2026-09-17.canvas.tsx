import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股 Fed 後反彈：Dow 51,778.04（+0.61%）、S&P 500 7,637.76（+1.14%）、Nasdaq 26,418.30（+1.69%）、Russell 2,874.63（+0.55%）。",
  "主線係 oil + yields relief：AP/Reuters 指油價與債市壓力回落，令前日 Fed selloff 大幅修復；但 Fed path 仍偏鷹。",
  "Tech-led：SOXX +3.43%、XLK +2.23%；XLC -0.58%、XLF -0.11% 仍弱，反映 breadth 未全面擴散。",
  "重點股：INTC +7.70%、AMD +6.28%、MU +5.52%、ORCL +5.16%、NVDA +2.54%；BA -2.50%、CRM -3.12%。",
  "宏觀：初領失業金 196k 低過預期但受假期季調影響；housing starts -2.6%、permits -2.7%，高按息仍壓 housing。",
  "Crypto（Binance Vision 9/17 20:00 UTC）：BTC $76,544.01（+0.63%）、ETH $2,447.58（+1.70%）、SOL $100.89（+2.83%）。",
];

const metrics = [
  ["S&P 500 / Nasdaq", "7,637.76 +1.14% / 26,418.30 +1.69%", "green"],
  ["Dow / Russell", "51,778.04 +0.61% / 2,874.63 +0.55%", "green"],
  ["VIX / DXY", "15.44 -12.82% / ~100.22-100.25", "green"],
  ["SOXX / XLK", "+3.43% / +2.23%", "green"],
  ["XLC / XLF", "-0.58% / -0.11%", "red"],
  ["10Y / 30Y yield", "~4.947% / ~5.296%", "amber"],
  ["WTI / Brent", "$101.91 / $104.82", "amber"],
  ["BTC / ETH / SOL", "+0.63% / +1.70% / +2.83%", "green"],
];

const sources = [
  [
    "AP close",
    "https://mymotherlode.com/news/national/11148031/how-major-us-stock-indexes-fared-thursday-9-17-2026.html",
  ],
  [
    "Reuters Trading Day",
    "https://www.reuters.com/commentary/reuters-open-interest/global-markets-trading-day-graphic-2026-09-17/",
  ],
  [
    "Reuters labor/housing",
    "https://www.reuters.com/business/us-weekly-jobless-claims-unexpectedly-fall-2026-09-17/",
  ],
  [
    "Reuters oil",
    "https://www.reuters.com/business/energy/oil-prices-extend-losses-fears-middle-east-supply-disruptions-ease-2026-09-17/",
  ],
  [
    "Kitco/Reuters gold",
    "https://www.kitco.com/news/off-the-wire/2026-09-17/gold-gains-over-2-weaker-dollar-easing-oil-prices",
  ],
  [
    "TradingKey semis",
    "https://www.tradingkey.com/analysis/stocks/us-stocks/262173915-us-stock-nasdaq-dow-sp500-rise-fed-rate-chip-memory-intel-micron-tradingkey",
  ],
  [
    "Fed SEP",
    "https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260916.htm",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260917() {
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
          background: linear-gradient(135deg, #134e4a 0%, #0f766e 54%, #111827 100%);
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
          2026-09-17 收市｜油價與長債息回落觸發 Fed 後 relief；Nasdaq
          跑贏，semis/AI hardware 領漲但 XLC、XLF 仍弱
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
            <li>先看 10Y 能否留在 5% 以下、油價能否繼續回落。</li>
            <li>Semis 是最強主線，但需要 XLF/XLC/Russell 跟上才算廣泛修復。</li>
            <li>S&P 500 守 7,600 代表 relief 延續；失守回看 7,552。</li>
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
          。指數採 AP 4:00pm ET 後 close；ETF/個股採 Yahoo chart 20:00 UTC 1m
          close，因部分日線欄位截稿時仍為 null；VIX 採 Yahoo/Cboe quote
          口徑；宏觀採 Reuters/Fed/CME/Kitco；Crypto 採 Binance Vision 20:00 UTC
          1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
