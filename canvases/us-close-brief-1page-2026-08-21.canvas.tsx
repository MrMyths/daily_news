import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "週五美股反彈但全週仍紅：Dow +517.80 點 / +0.98% 至 53,277.01，S&P 500 +0.43% 至 7,674.37，Nasdaq +0.43%；Russell 2000 +0.85%，VIX 15.13。",
  "升市主因係急跌後低吸 + S&P Global PMI 強：Composite 56.0、Services 56.8；但 10Y 4.734% / 30Y 5.273% 代表估值壓力未退。",
  "油價仍是通脹尾巴：Brent $94.39、WTI $87.06，全週升逾 5%，伊朗制裁與 Hormuz 供應風險繼續影響 Fed path。",
  "板塊分化：Materials、Health Care、XLY 較強；XLK 只微升、SOXX -0.44%，NVDA $214.72 / -0.98% 反映 AI crowded trade 等 8/26 業績。",
  "零售不是一面倒：ROST $239.04 / +4.39%、TGT $165.44 / +4.54%，但 WMT $103.70 只橫行，消費質素仍分化。",
  "Crypto 採 Binance Vision 2026-08-21 20:00 UTC 1m close：BTC $76,998.00（+5.99%）、ETH $2,412.83（+3.79%）、SOL $90.75（+3.99%）。",
];

const metrics = [
  ["S&P 500", "7,674.37 / +0.43%", "green"],
  ["VIX", "15.13 / -5.50%", "green"],
  ["10Y / 30Y", "4.734% / 5.273%", "red"],
  ["Brent / WTI", "$94.39 / $87.06", "amber"],
  ["NVDA", "$214.72 / -0.98%", "red"],
  ["FedWatch", "9月 hold 約 60%-64%", "amber"],
];

const sources = [
  [
    "CNBC close",
    "https://www.cnbc.com/2026/08/20/stock-market-today-live-updates.html",
  ],
  [
    "AP indexes",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-09c079b43680c3e4564346892b5dc824",
  ],
  [
    "CNBC yields",
    "https://www.cnbc.com/2026/08/21/treasury-yields-bonds-inflation-rates.html",
  ],
  ["CNBC oil", "https://www.cnbc.com/2026/08/21/oil-prices-us-iran.html"],
  [
    "S&P PMI",
    "https://www.pmi.spglobal.com/Public/Home/PressRelease/552d682e429640fcb8af7da17ad060c3",
  ],
  ["StockAnalysis ETFs", "https://stockanalysis.com/etf/xlc/history/"],
  ["Yahoo ROST/TGT", "https://finance.yahoo.com/quote/ROST/history/"],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260821() {
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
          background: linear-gradient(135deg, #14532d 0%, #166534 54%, #111827 100%);
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
        h2 { margin: 0 0 8px; color: #166534; font-size: 19px; }
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
          2026-08-21 收市｜週五反彈，但周線仍跌；長端息、油價、NVDA
          業績是下週風險開關
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
            <li>SPX 未企穩 7,700 前，反彈先當 oversold bounce。</li>
            <li>10Y 4.70% / 30Y 5.27% 是估值壓力線。</li>
            <li>NVDA 8/26 業績前，SOXX/AI beta 不宜過度集中。</li>
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
          。指數採 AP/CNBC/Reuters；ETF/個股採 StockAnalysis/Yahoo/Exa
          snippets；Treasury、油價、PMI 採 CNBC/U.S. Treasury/S&P
          Global；FedWatch 同日快訊有時間點差異，9月 hold 標示約 60%-64%；Crypto
          採 Binance Vision 2026-08-21 20:00 UTC 1m close。Yahoo chart API 本輪
          429，故以可讀頁面與新聞來源交叉。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
