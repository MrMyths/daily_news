import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股止跌反彈：Dow 52,573.29（+0.98%）、S&P 500 7,656.98（+0.86%）、Nasdaq 26,333.04（+0.96%）、Russell 2000 2,903.94（約 +0.4%）。",
  "升市主因：油價由高位回落，紓緩通脹恐慌；但 core CPI +0.3% m/m 高過 +0.2% 預期，9月加息機率升至約 86%。",
  "債息仍高：Newsquawk 收市口徑 2Y 4.634%、10Y 4.975%、30Y 5.359%，曲線 flattening，growth 估值仍有天花板。",
  "板塊紅綠燈：通訊服務、科技、工業、可選消費領先；Utilities 約 -0.31% 至 -0.34%、Health Care 約 -0.14% 至 -0.18% 偏弱。",
  "AI 硬件鏈跑出：HPE +12.44%、DELL +11.98%、NTAP +8.54%；Oracle 本身約 -1.7%，因市場仍擔心 capex/FCF。",
  "Crypto 採 Binance Vision 2026-09-11 20:00 UTC：BTC $77,290.00（+0.14%）、ETH $2,539.47（+3.08%）、SOL $102.04（+2.21%）。",
];

const metrics = [
  ["S&P 500 / Nasdaq", "7,656.98 +0.86% / 26,333.04 +0.96%", "green"],
  ["Dow / Russell", "52,573.29 +0.98% / 2,903.94 約 +0.4%", "green"],
  ["VIX", "15.84（第三方快照；官方頁滯後）", "green"],
  ["2Y / 10Y / 30Y", "4.634% / 4.975% / 5.359%", "red"],
  ["WTI / Brent", "$100.05 / $104.61（仍高於 $100）", "amber"],
  ["Fed pricing", "9月 +25bp 約 85%-86.5%", "red"],
  ["AI hardware", "HPE +12.44% / DELL +11.98%", "green"],
  ["BTC / ETH / SOL", "+0.14% / +3.08% / +2.21%", "green"],
];

const sources = [
  [
    "AP/WTOP close",
    "https://wtop.com/national/2026/09/how-major-us-stock-indexes-fared-friday-9-11-2026/",
  ],
  [
    "Reuters close",
    "https://uk.marketscreener.com/news/wall-street-rallies-as-strong-inflation-data-cements-rate-hike-bets-ce785bdfde8bf427",
  ],
  [
    "Newsquawk wrap",
    "https://www.newsquawk.com/headlines/newsquawk-us-market-wrap-markets-chop-and-yields-flatten-after-hot-core-cpi-boosts-fed-rate-hike-bets",
  ],
  ["BLS CPI", "https://www.bls.gov/news.release/archives/cpi_09112026.htm"],
  [
    "Reuters oil",
    "https://www.reuters.com/business/energy/oil-prices-set-end-week-over-100-first-time-nearly-4-months-2026-09-11/",
  ],
  [
    "CME FedWatch",
    "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  ],
  [
    "Oracle 8-K",
    "https://www.stocktitan.net/sec-filings/ORCL/8-k-oracle-corp-reports-material-event-f6fd400760ec.html",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260911() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          min-height: 760px;
          margin: 0 auto;
          padding: 26px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.22;
        }
        .hero {
          background: linear-gradient(135deg, #064e3b 0%, #047857 54%, #111827 100%);
          border-radius: 22px;
          padding: 22px;
          color: white;
        }
        h1 { margin: 0 0 8px; font-size: 37px; line-height: 1.04; }
        .sub { font-size: 16px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.27fr 0.73fr; gap: 12px; margin-top: 12px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 12px;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
        }
        h2 { margin: 0 0 7px; color: #065f46; font-size: 18px; }
        ul { margin: 0; padding-left: 17px; }
        li { margin: 3.8px 0; }
        .metric { display: grid; grid-template-columns: 0.78fr 1fr; gap: 7px; padding: 4.6px 0; border-bottom: 1px solid #e5e7eb; font-size: 12.2px; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 9.65px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
        @media print { .sheet { width: auto; min-height: auto; box-shadow: none; } }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-09-11 收市｜油價回落令美股止跌反彈；core CPI 偏熱， Fed
          加息機率升，AI 硬件鏈最強
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
          <h2 style={{ marginTop: 8 }}>操作重點</h2>
          <ul>
            <li>反彈可跟，但 10Y 仍貼近 5%，不宜盲目加槓桿。</li>
            <li>AI hardware momentum 最強；software 與防守板塊未同步。</li>
            <li>下週焦點：FOMC、Warsh 記者會、油價能否跌穿 $100。</li>
          </ul>
        </div>
      </section>
      <section className="card" style={{ marginTop: 12 }}>
        <h2>來源與口徑</h2>
        <p className="small">
          主要來源：
          {sources.map(([name, url], index) => (
            <React.Fragment key={url}>
              {index > 0 ? " / " : ""}
              <a href={url}>{name}</a>
            </React.Fragment>
          ))}
          。指數採 AP/WTOP 並與 Reuters/Investing.com 交叉核對；債息採
          Newsquawk/MarketScreener；CPI 採 BLS/CNBC；FedWatch 因截數時點以約
          85%-86.5% 表述；VIX 官方歷史頁截數時滯後，故標示第三方快照； Crypto 採
          Binance Vision 2026-09-11 20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
