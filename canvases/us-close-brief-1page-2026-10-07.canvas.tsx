import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股由紀錄高位回吐：S&P 500 7,801.77（-0.22%）、Nasdaq 27,538.69（-0.22%）、Dow 51,179.87（-0.66%）、Russell 2,793.20（-1.31%）。",
  "核心壓力係長債息：10Y 盤中升至約 5.35%（2002 年以來高位），收市約 5.277%；30Y 一度 5.724%，高息壓住小型股、工業、材料和高 beta。",
  "板塊轉防守：Health Care / XLV +1.03% 最強；Utilities 近持平；Industrials / XLI -2.18%、Materials / XLB -1.51%、Real Estate / XLRE -1.29% 最弱。",
  "Fed minutes 偏 hawkish：9 月全票加息至 3.75%-4.00%，多數官員認為年底前或再加一次；但市場仍押 10 月約 80% 機會暫停。",
  "商品：Reuters 指 Brent $100.20（-0.38%）、WTI $88.28（-1.3%）；黃金受高息美元壓住，現貨/期貨口徑均回落。",
  "Crypto（Binance Vision 10/07 20:00 UTC）：BTC $83,451.98（-2.54%）、ETH $2,571.93（-4.45%）、SOL $115.88（-4.10%）。",
];

const metrics = [
  ["S&P 500 / Nasdaq", "7,801.77 -0.22% / 27,538.69 -0.22%", "red"],
  ["Dow / Russell", "51,179.87 -0.66% / 2,793.20 -1.31%", "red"],
  ["VIX / 10Y", "15.08* / 5.277%", "amber"],
  ["XLV / XLU", "+1.03% / -0.02%", "green"],
  ["XLK / SOXX", "-0.30% / -1.13%", "amber"],
  ["XLI / XLB / XLRE", "-2.18% / -1.51% / -1.29%", "red"],
  [
    "Oil / Gold",
    "Brent $100.20; WTI $88.28 / Gold futures ~$4,140.70",
    "amber",
  ],
  ["BTC / ETH / SOL", "-2.54% / -4.45% / -4.10%", "red"],
];

const sources = [
  [
    "AP close",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-00ad8ec13f0265ac3c41a0d9d7fdb265",
  ],
  [
    "Reuters close",
    "https://www.streetinsider.com/Market+Check/Wall+Street+ends+lower%2C+off+record+highs%2C+as+Treasury+yields+climb/27157668.html",
  ],
  [
    "CNBC yields",
    "https://www.cnbc.com/2026/10/07/treasury-yields-auction-fomc-minutes.html",
  ],
  [
    "Fed minutes",
    "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261007a.htm",
  ],
  [
    "Reuters oil",
    "https://live.euronext.com/en/financial-news/oil-prices-settle-down-iea-agrees-accelerate-oil-stock-release",
  ],
  [
    "CME FedWatch",
    "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  ],
  ["Yahoo Finance", "https://finance.yahoo.com/"],
  ["Binance Vision", "https://data.binance.vision/"],
];

export default function USCloseBriefOnePage20261007() {
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
          2026-10-07 收市（香港時間 2026-10-08 週四更新）｜高位回吐； 10Y 觸及
          2002 年以來高位，防守板塊跑贏
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
            <li>唔好同 10Y 對賭：5.35% 是今日風險線。</li>
            <li>短線偏防守：XLV / XLP / XLU 相對穩。</li>
            <li>高 beta 等確認：BTC 要重上 $85k、S&P 要守 7,800。</li>
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
          。指數採 AP 終值；sector / 個股採 Yahoo Finance
          chart/regularMarketPrice； 10Y 採 CNBC 盤中高位與 Yahoo
          收市口徑；油價採 Reuters settle；VIX 因 Cboe 官方 CSV 執行時只更新至
          10/06，10/07 暫用 Yahoo close 15.08； Crypto 採 Binance Vision 20:00
          UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
