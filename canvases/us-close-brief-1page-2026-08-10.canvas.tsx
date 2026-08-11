import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股高位小回：S&P 500 -0.06% 至 7,753.11；Dow -0.11%；Nasdaq -0.32%，跌幅細但風險胃納降溫。",
  "主線係 Hormuz deal 未落實，WTI 收 $82.13（+5.1%）、Brent $87.72（約 +5%），通脹 premium 回來。",
  "美債息抽高：CNBC 報 2Y 4.241%、10Y 4.705%、30Y 5.251%，壓住科技、REITs、utilities。",
  "板塊分化：XLE +4.70%、XLV +1.67% 跑出；SOXX -2.54%、XLK -0.87%、XLRE -1.26% 偏弱。",
  "焦點股：INTC -4.04%（$15B 發股）、NVDA -2.86%（AI funding 報道）、AAPL -1.54%（Jefferies 降級）；SPCX +4.23% 逆市升。",
  "Crypto 採 Binance Vision 2026-08-10 20:00 UTC 1m close：BTC $64,036.06（-1.76%）、ETH $1,878.07（-2.28%）、SOL $76.19（-1.32%）。",
];

const metrics = [
  ["大市 / S&P 500", "7,750 附近", "amber"],
  ["Nasdaq / AI beta", "偏弱", "red"],
  ["SOXX / 半導體", "最弱", "red"],
  ["Energy / XLE", "強", "green"],
  ["10Y / 30Y yields", "抽高", "red"],
  ["Crypto", "跟跌", "amber"],
];

const sources = [
  [
    "AP",
    "https://apnews.com/article/stocks-markets-rates-iran-ai-adb7b918b15206e38d7899d482422308",
  ],
  [
    "Reuters/Business Times",
    "https://www.businesstimes.com.sg/companies-markets/capital-markets-currencies/us-stocks-wall-street-ends-down-expectations-hormuz-deal-fade",
  ],
  [
    "CNBC yields/oil",
    "https://www.cnbc.com/2026/08/10/us-treasury-yields-investors-eye-key-inflation-data-.html",
  ],
  ["BLS CPI schedule", "https://www.bls.gov/schedule/news_release/cpi.htm"],
  [
    "Exa market quotes",
    "https://exa.ai/library/markets/stock/XLE?date=2026-08-10",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260810() {
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
          line-height: 1.36;
        }
        .hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 54%, #7f1d1d 100%);
          border-radius: 24px;
          padding: 28px;
          color: white;
        }
        h1 { margin: 0 0 8px; font-size: 42px; line-height: 1.08; }
        .sub { font-size: 18px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.35fr 0.65fr; gap: 16px; margin-top: 16px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 19px;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
        }
        h2 { margin: 0 0 10px; color: #1d4ed8; font-size: 21px; }
        ul { margin: 0; padding-left: 21px; }
        li { margin: 7px 0; }
        .metric { display: grid; grid-template-columns: 1fr auto; gap: 10px; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 12.5px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-08-10 收市｜油價同長債息抽高，能源跑出，晶片轉弱
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
          <h2 style={{ marginTop: 15 }}>操作重點</h2>
          <ul>
            <li>SPX 7,750 / 7,700、Nasdaq 26,500 / 26,300 是短線防線。</li>
            <li>
              10Y 若企 4.70%-4.80%，高估值 tech、REITs、utilities 繼續受壓。
            </li>
            <li>
              8/12 CPI 前不宜盲目追高；能源可跑贏但 headline reversal 風險高。
            </li>
          </ul>
        </div>
      </section>
      <section className="card" style={{ marginTop: 16 }}>
        <h2>來源與口徑</h2>
        <p className="small">
          主要來源：
          {sources.map(([name, url], index) => (
            <React.Fragment key={url}>
              {index > 0 ? " / " : ""}
              <a href={url}>{name}</a>
            </React.Fragment>
          ))}
          。指數採 AP/Reuters 收市口徑；ETF/個股採 Exa market quote
          page；債息與油價採 CNBC；Crypto 採 Binance Vision public data
          2026-08-10 20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
