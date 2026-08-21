import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股重回壓力：Dow -703.84 點 / -1.32%，S&P 500 -0.87% 至 7,641.16，Nasdaq -1.00%；Russell 2000 -1.34%，VIX +7.52% 至 16.01。",
  "主因係 Treasury buyback relief 蒸發，10Y 升至約 4.704%、30Y 約 5.25%，高折現率壓估值。",
  "油價加劇通脹尾巴：Brent $93.78（+2.4%）、WTI Oct $86.64（+2.7%），中東/伊朗制裁風險仍在。",
  "Walmart -9.15% 至 $103.84 拖低 Dow；US comps +2.6% 低過預期，市場擔心消費轉弱。",
  "板塊紅綠燈：XLE +0.27%、XLRE +0.20%、SOXX +0.52% 逆市；XLV -1.87%、XLY -1.61%、XLP -1.41% 最弱。",
  "Crypto 採 Binance Vision 2026-08-20 20:00 UTC 1m close：BTC $72,646.00（+6.21%）、ETH $2,324.81（+10.55%）、SOL $87.27（+6.03%）。",
];

const metrics = [
  ["S&P 500", "7,641.16 / -0.87%", "red"],
  ["VIX", "16.01 / +7.52%", "red"],
  ["30Y yield", "約 5.25%", "red"],
  ["XLE / SOXX", "少數綠燈", "green"],
  ["WMT", "$103.84 / -9.15%", "red"],
  ["FedWatch", "9月 hold 64.7%", "amber"],
];

const sources = [
  [
    "CNBC close",
    "https://www.cnbc.com/2026/08/19/stock-market-today-live-updates.html",
  ],
  [
    "Reuters mirror",
    "https://www.marketscreener.com/news/wall-street-sinks-as-bond-yields-rise-walmart-results-disappoint-ce7859d3df8df52d",
  ],
  ["Yahoo indices", "https://finance.yahoo.com/quote/%5EGSPC/history/"],
  [
    "CNBC yields/oil",
    "https://www.cnbc.com/2026/08/20/bond-yields-edge-higher-as-traders-digest-treasury-debt-buyback-plan.html",
  ],
  [
    "Walmart release",
    "https://corporate.walmart.com/content/dam/corporate/documents/newsroom/2026/08/20/walmart-releases-q2-fy27-earnings/q2-fy27-earnings-release.pdf",
  ],
  [
    "Investing FedWatch",
    "https://www.investing.com/central-banks/fed-rate-monitor",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260820() {
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
          line-height: 1.31;
        }
        .hero {
          background: linear-gradient(135deg, #450a0a 0%, #7f1d1d 54%, #111827 100%);
          border-radius: 22px;
          padding: 24px;
          color: white;
        }
        h1 { margin: 0 0 8px; font-size: 39px; line-height: 1.05; }
        .sub { font-size: 17px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.34fr 0.66fr; gap: 14px; margin-top: 13px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 15px;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
        }
        h2 { margin: 0 0 8px; color: #b91c1c; font-size: 19px; }
        ul { margin: 0; padding-left: 19px; }
        li { margin: 5px 0; }
        .metric { display: grid; grid-template-columns: 0.8fr 1fr; gap: 8px; padding: 6px 0; border-bottom: 1px solid #e5e7eb; font-size: 13.5px; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 11.2px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-08-20 收市｜債息反彈、油價升與 Walmart 消費警號拖低大市
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
          <h2 style={{ marginTop: 11 }}>操作重點</h2>
          <ul>
            <li>SPX 未收回 7,700 前，反彈先當 technical bounce。</li>
            <li>10Y 4.70% / 30Y 5.25% 是今日風險開關。</li>
            <li>能源、SOXX、crypto 強，但 breadth 弱，追高要設止蝕。</li>
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
          。指數採 CNBC/Yahoo；ETF 採 StockAnalysis/Yahoo/Exa
          snippets；Treasury、油價、FedWatch 採 CNBC/Investing；Crypto 採
          Binance Vision public data 2026-08-20 20:00 UTC 1m close。Yahoo chart
          API 本輪 429，故以可讀頁面與新聞來源交叉。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
