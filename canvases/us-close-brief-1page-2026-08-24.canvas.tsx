import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "週一美股分化：Dow +140.15 點 / +0.26% 至 53,417.16；S&P 500 -0.28% 至 7,652.86；Nasdaq -0.76% 至 25,980.19；Russell 2000 -0.76%，VIX 15.85。",
  "核心原因係 rotation：半導體 / AI 被減磅（SOXX -2.67%、NVDA -2.91%），資金轉去金融、防守與部分 value（XLF +1.29%、XLP +1.70%）。",
  "債息回落但未足以救科技：CNBC 指 10Y 約 4.704%、30Y 約 5.234%，Treasury 可能用 TGA 支持 buyback；但 10Y 仍在 4.7% 附近。",
  "油價由高位回吐：Brent $92.17、WTI $85.01，兩者同跌 2.35%；黃金仍約 $4,643，DXY 約 98.981。",
  "本週三連擊：Nvidia 8/26 盤後業績、July PCE / Q2 GDP 2nd estimate、Warsh 週五 Jackson Hole keynote。",
  "Crypto 採 Binance Vision 2026-08-24 20:00 UTC：BTC $78,745.61（較上個美股收市 +2.27%）、ETH $2,470.09（+2.37%）、SOL $96.50（+6.34%）。",
];

const metrics = [
  ["S&P 500", "7,652.86 / -0.28%", "red"],
  ["Nasdaq", "25,980.19 / -0.76%", "red"],
  ["Dow", "53,417.16 / +0.26%", "green"],
  ["SOXX / NVDA", "-2.67% / -2.91%", "red"],
  ["10Y / 30Y", "4.704% / 5.234%", "amber"],
  ["FedWatch", "9月 hold 59% / +25bp 41%", "amber"],
  ["Brent / WTI", "$92.17 / $85.01", "amber"],
  ["BTC / ETH / SOL", "+2.27% / +2.37% / +6.34%", "green"],
];

const sources = [
  [
    "CNBC close",
    "https://www.cnbc.com/2026/08/23/stock-market-today-live-updates.html",
  ],
  [
    "AP indexes",
    "https://www.wral.com/news/ap/8ab80-asian-shares-mostly-decline-as-bond-market-pressure-mounts/",
  ],
  [
    "Reuters/MarketScreener",
    "https://au.marketscreener.com/news/shares-oil-dip-as-us-sanctions-on-iran-loom-ce7858dbd88bf623",
  ],
  [
    "CNBC yields",
    "https://www.cnbc.com/2026/08/24/treasury-yields-warsh-jackson-hole.html",
  ],
  [
    "Reuters oil",
    "https://hk.marketscreener.com/news/oil-falls-as-us-prepares-to-unveil-new-iran-sanctions-ce7858dad089f422",
  ],
  ["ETF quotes", "https://stockanalysis.com/etf/xlf/history/"],
  [
    "CME FedWatch",
    "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260824() {
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
          background: linear-gradient(135deg, #7f1d1d 0%, #b91c1c 54%, #111827 100%);
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
        .metric { display: grid; grid-template-columns: 0.86fr 1fr; gap: 8px; padding: 6px 0; border-bottom: 1px solid #e5e7eb; font-size: 13.5px; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 11.2px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-08-24 收市｜Dow 硬淨、Nasdaq 受壓；半導體拖低，PCE / NVDA /
          Jackson Hole 前先控風險
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
            <li>SPX 未重上 7,700 前，先當 range trade。</li>
            <li>科技 / SOXX 要等 NVDA 業績或止跌確認。</li>
            <li>事件週 gap risk 高，倉位與槓桿要保守。</li>
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
          。指數採 CNBC/AP/Reuters mirror；ETF/個股採
          Yahoo/StockAnalysis/Exa/Trefis snippets；FedWatch 以 CME
          公開快訊口徑標示 9月 hold 59% / +25bp 41%；Crypto 採 Binance Vision
          2026-08-24 20:00 UTC 1m close，對比 2026-08-21 20:00 UTC。Yahoo chart
          API 本輪 429；XLK 等少數 quote / history 差異已於完整版標示。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
