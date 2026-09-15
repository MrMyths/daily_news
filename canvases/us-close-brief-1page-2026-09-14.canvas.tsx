import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股週一回落但跌幅收窄：Dow 52,421.20（-0.29%）、S&P 500 7,619.98（-0.48%）、Nasdaq 26,186.41（-0.56%）、Russell 2000 2,892.24（-0.40%）。",
  "主因：AI 安全/放慢開發憂慮拖累 semis、光纖、電力設備與 data-center infrastructure；SOXX $497.40（-5.63%）。",
  "宏觀壓力仍在：10Y 盤中 briefly top 5%；Brent $105.68、WTI $101.39；FedWatch 約 87%-92% 押注 9 月加 25bp。",
  "輪動不是全紅：XLC +2.19%、XLV +1.45%、XLP +1.25%；cybersecurity 逆市爆升，CRWD +13.85%、PANW +13.09%。",
  "主要弱股：GLW -13.70%、GEV -8.62%、ETN -7.57%、AVGO -4.77%、NVDA -3.36%、ORCL -3.65%。",
  "Crypto 採 Binance Vision 2026-09-14 20:00 UTC：BTC $78,984.01（+2.19%）、ETH $2,540.58（+0.04%）、SOL $103.24（+1.18%）。",
];

const metrics = [
  ["S&P 500 / Nasdaq", "7,619.98 -0.48% / 26,186.41 -0.56%", "red"],
  ["Dow / Russell", "52,421.20 -0.29% / 2,892.24 -0.40%", "red"],
  ["VIX", "17.10（Yahoo 20:00 UTC，+7.95%）", "amber"],
  ["XLC / SOXX", "+2.19% / -5.63%", "amber"],
  ["10Y / 30Y", "10Y 盤中 >5%；20:00 UTC 約 4.961% / 5.329%", "red"],
  ["WTI / Brent", "$101.39 / $105.68", "red"],
  ["Fed pricing", "9月 +25bp 約 87%-92%", "red"],
  ["BTC / ETH / SOL", "+2.19% / +0.04% / +1.18%", "green"],
];

const sources = [
  [
    "AP/WTOP close",
    "https://wtop.com/national/2026/09/how-major-us-stock-indexes-fared-monday-9-14-2026/",
  ],
  [
    "CNBC live",
    "https://www.cnbc.com/2026/09/14/stock-market-today-live-updates.html",
  ],
  [
    "CNBC Cramer",
    "https://www.cnbc.com/2026/09/14/jim-cramer-wall-street-monday-rebound.html",
  ],
  [
    "CNBC sectors/cyber",
    "https://www.cnbc.com/2026/09/14/not-all-tech-is-under-fire-in-monday-selling-investors-seek-out-defensives.html",
  ],
  [
    "Reuters oil",
    "https://krro.com/2026/09/14/oil-prices-climb-over-2-after-strikes-on-saudi-pipeline-and-ships-in-middle-east/",
  ],
  ["BLS CPI", "https://www.bls.gov/news.release/archives/cpi_09112026.htm"],
  [
    "CME FedWatch",
    "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260914() {
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
          2026-09-14 收市｜AI 安全憂慮拖 semis，油價與債息仍高；防守、XLC 與
          cyber 逆市跑出
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
            <li>Fed 前先睇 10Y 有無企穩 5% 上方；未回落前不急追 semis。</li>
            <li>
              Cybersecurity relative strength 清楚，但急升後等回調較健康。
            </li>
            <li>油價守 $100 以上，通脹/Fed 壓力仍會限制大市 upside。</li>
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
          。指數採 AP/WTOP 並與 CNBC/Yahoo 交叉核對；ETF/個股採 Yahoo 2026-09-14
          20:00 UTC 1m close 對比上一交易日；FedWatch 因截數差異以 87%-92%
          表示；油價採 Reuters settlement；Crypto 採 Binance Vision 20:00 UTC 1m
          close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
