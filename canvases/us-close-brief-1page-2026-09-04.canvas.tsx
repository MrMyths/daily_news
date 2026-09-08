import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "今日採 2026-09-04 最新完整美股收盤；2026-09-07 Labor Day 休市，沒有新 regular-session 收盤。",
  "大市假期前回落：Dow 53,414.25（-0.51%）、S&P 500 7,718.60（-0.38%）、Nasdaq 26,506.99（-0.29%）；Russell 2000 逆市 +0.25%。",
  "核心原因：8 月非農 +162k 遠高於 Reuters 預期 +56k，失業率 4.1%；市場重估 9 月 Fed 加息風險，2Y 約 4.37%、10Y 約 4.78%。",
  "板塊分化：SOXX +3.52%、XLK +0.70%、XLI +0.41% 撐住；XLY -1.33%、XLC -1.19%、XLV -1.04% 拖累。",
  "焦點股：SNDK +11.90%、MU +6.10%、WDC +5.86% 顯示 memory/AI supply chain 強；TSLA -5.92%、ADBE -6.73% 是主要負面事件股。",
  "Crypto 採 Binance Vision 2026-09-04 20:00 UTC：BTC $79,793.99（-2.10%）、ETH $2,456.70（-2.05%）、SOL $101.76（-2.96%）。",
];

const metrics = [
  ["S&P 500", "7,718.60 / -0.38%", "red"],
  ["Nasdaq", "26,506.99 / -0.29%", "red"],
  ["Dow", "53,414.25 / -0.51%", "red"],
  ["Russell / VIX", "+0.25% / 14.53", "amber"],
  ["SOXX / XLK", "+3.52% / +0.70%", "green"],
  ["XLY / XLC / XLV", "-1.33% / -1.19% / -1.04%", "red"],
  ["2Y / 10Y / DXY", "4.37% / 4.78% / 99.17", "amber"],
  ["Fed pricing", "9月加息約 57%-60%", "amber"],
  ["BTC / ETH / SOL", "-2.10% / -2.05% / -2.96%", "red"],
];

const sources = [
  [
    "Reuters close",
    "https://www.reuters.com/world/china/global-markets-wrapup-1-2026-09-04/",
  ],
  [
    "Reuters yields/Fed",
    "https://www.reuters.com/business/view-strong-august-jobs-report-sends-yields-higher-2026-09-04/",
  ],
  ["BLS jobs", "https://www.bls.gov/news.release/empsit.nr0.htm"],
  ["NYSE holiday", "https://www.nyse.com/trade/hours-calendars?icid="],
  [
    "TradingKey movers",
    "https://www.tradingkey.com/analysis/stocks/us-stocks/262152205-us-stock-close-dow-nasdaq-philadelphia-semiconductor-rise-sandisk-tesla-tradingkey",
  ],
  ["Yahoo Finance", "https://finance.yahoo.com/quote/%5EGSPC/history/"],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260904() {
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
          line-height: 1.25;
        }
        .hero {
          background: linear-gradient(135deg, #064e3b 0%, #047857 54%, #111827 100%);
          border-radius: 22px;
          padding: 23px;
          color: white;
        }
        h1 { margin: 0 0 8px; font-size: 38px; line-height: 1.05; }
        .sub { font-size: 16.5px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.3fr 0.7fr; gap: 14px; margin-top: 13px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 14px;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
        }
        h2 { margin: 0 0 8px; color: #047857; font-size: 19px; }
        ul { margin: 0; padding-left: 18px; }
        li { margin: 4.4px 0; }
        .metric { display: grid; grid-template-columns: 0.88fr 1fr; gap: 8px; padding: 5.1px 0; border-bottom: 1px solid #e5e7eb; font-size: 12.9px; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 10.4px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-09-04 收市｜強就業推高加息預期；9/7 Labor Day
          休市，半導體逆市跑出
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
            <li>SPX 先看 7,700 支持，失守要降低 high beta。</li>
            <li>SOXX 強勢要連續確認，避免只追單日 memory squeeze。</li>
            <li>
              CPI/PPI 前低 VIX 不等於低風險，crypto 和長久期 growth 要留意 gap。
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
          。指數採 Reuters/AP/Yahoo final close；板塊用 Yahoo ETF proxy；Fed
          pricing 因截數時間不同以約 57%-60% 區間表達；Crypto 採 Binance Vision
          2026-09-04 20:00 UTC 1m close，對比 2026-09-03 20:00 UTC。NYSE 顯示
          2026-09-07 Labor Day 休市，所以今日報告採 9/4 最新完整交易日。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
