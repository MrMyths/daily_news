import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股再上：S&P 500 +0.65% 至 7,798.99 創收市新高，Nasdaq +0.81%，Dow +0.13%，Russell 2000 +0.24%。",
  "7 月 PPI 比預期溫和：headline 0.0% m/m、+4.7% y/y；core +0.2% m/m、+4.2% y/y，9 月 hold 機率升到約 65%-68%。",
  "油價跌超過 2% 幫市場降溫：WTI $81.25（-2.4%）、Brent $87.07（-2.15%）；EIA 原油庫存大增 1,740 萬桶。",
  "板塊紅綠燈：XLC +2.07%、XLRE +1.42%、XLP +1.08%、XLK +1.01% 跑出；XLB -0.51%、XLV -0.04%、XLI -0.05% 跑輸。",
  "焦點股：SNDK +13.67%、MU +4.23%、NFLX +5.43%、META +2.78%、WDAY +17.78%；CSCO -8.40%、TPR -16.49%、CBRS -11.85%。",
  "Crypto 採 Binance Vision 2026-08-13 20:00 UTC 1m close：BTC $63,385.77（-0.10%）、ETH $1,887.57（+0.42%）、SOL $76.19（+0.55%）。",
];

const metrics = [
  ["S&P 500", "收市新高", "green"],
  ["Nasdaq / XLC", "領升", "green"],
  ["PPI / FedWatch", "偏 hold", "green"],
  ["10Y yield", "4.65% 附近", "amber"],
  ["Oil", "急跌利好", "green"],
  ["Crypto", "未突破", "amber"],
];

const sources = [
  [
    "CNBC close",
    "https://www.cnbc.com/2026/08/12/stock-market-today-live-updates.html",
  ],
  [
    "Reuters stocks",
    "https://uk.marketscreener.com/news/stocks-rise-as-traders-reduce-rate-hike-bets-oil-prices-drop-ce7859d9d180f625",
  ],
  ["BLS PPI", "https://www.bls.gov/ppi/"],
  [
    "CNBC yields",
    "https://www.cnbc.com/2026/08/13/treasury-yields-wall-street-inflation-data.html",
  ],
  [
    "Reuters oil",
    "https://www.marketscreener.com/news/oil-eases-as-weaker-demand-outlook-counters-mideast-supply-concerns-ce7859d9d88df522",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260813() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          min-height: 760px;
          margin: 0 auto;
          padding: 34px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.34;
        }
        .hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 54%, #14532d 100%);
          border-radius: 24px;
          padding: 26px;
          color: white;
        }
        h1 { margin: 0 0 8px; font-size: 41px; line-height: 1.08; }
        .sub { font-size: 18px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.34fr 0.66fr; gap: 16px; margin-top: 15px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 17px;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
        }
        h2 { margin: 0 0 9px; color: #1d4ed8; font-size: 20px; }
        ul { margin: 0; padding-left: 20px; }
        li { margin: 6px 0; }
        .metric { display: grid; grid-template-columns: 1fr auto; gap: 10px; padding: 7px 0; border-bottom: 1px solid #e5e7eb; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 12.2px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-08-13 收市｜PPI 溫和、油價回落，S&P 500 創收市新高
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
          <h2 style={{ marginTop: 13 }}>操作重點</h2>
          <ul>
            <li>SPX 已近 7,800；突破要看能否守住 7,760-7,775 回踩區。</li>
            <li>今日 strongest 是 XLC/XLRE/XLP/XLK；半導體綠但 AMAT/CSCO 提醒分化。</li>
            <li>Fed hold trade 暫時佔優，但 8/14 retail sales 與 Michigan sentiment 要跟。</li>
          </ul>
        </div>
      </section>
      <section className="card" style={{ marginTop: 15 }}>
        <h2>來源與口徑</h2>
        <p className="small">
          主要來源：
          {sources.map(([name, url], index) => (
            <React.Fragment key={url}>
              {index > 0 ? " / " : ""}
              <a href={url}>{name}</a>
            </React.Fragment>
          ))}
          。指數採 CNBC/Reuters 收市口徑；ETF/個股採 Yahoo Finance chart data；
          FedWatch 因來源時間差以約 65%-68% hold / 約 31%-35% hike 描述；Crypto 採
          Binance Vision public data 2026-08-13 20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
