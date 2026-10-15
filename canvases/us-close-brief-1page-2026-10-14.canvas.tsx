import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股週三明顯回調：S&P 500 7,718.94（-1.11%）、Nasdaq 26,692.87（-1.88%）、Dow 51,621.48（-0.09%）、Russell 2,729.53（-1.93%），VIX 16.87（+10.48%）。",
  "一句講晒：September CPI 熱過預期，令 Fed hike odds 升溫；市場即時重估 AI / 科技融資成本，防守股接力撐市。",
  "板塊：XLV +2.53%、XLP +2.22%、XLE +0.64% 領先；XLK -2.98%、XLC -1.30%、SOXX -4.50% 拖後腿。",
  "焦點股：ORCL -8.83%、DELL -11.27%、MRVL -8.73%、NVDA -3.16%；UNH +4.73%、DLTR +4.71%、MRNA +4.65%、BMY +4.61%。",
  "宏觀：CPI +0.6% m/m、3.7% y/y；core +0.3% m/m、2.6% y/y。2Y yield 4.806%，10Y 5.187%；DXY 約 102.55，WTI $95.09，gold futures $4,107.90。",
  "Crypto（Binance data API 10/14 20:00 UTC）：BTC $81,896.58（-1.69%）、ETH $2,434.89（-2.98%）、SOL $104.37（-2.99%）。",
];

const metrics = [
  ["S&P 500 / Nasdaq", "7,718.94 -1.11% / 26,692.87 -1.88%", "red"],
  ["Dow / Russell", "51,621.48 -0.09% / 2,729.53 -1.93%", "red"],
  ["VIX / 10Y", "16.87 +10.48% / 5.187%", "amber"],
  ["XLV / XLP / XLE", "+2.53% / +2.22% / +0.64%", "green"],
  ["XLK / XLC / SOXX", "-2.98% / -1.30% / -4.50%", "red"],
  ["WTI / Gold / DXY", "$95.09 +1.01% / $4,107.90 -1.66% / 102.55", "amber"],
  ["ORCL / DELL / MRVL", "-8.83% / -11.27% / -8.73%", "red"],
  ["BTC / ETH / SOL", "-1.69% / -2.98% / -2.99%", "red"],
];

const sources = [
  [
    "AP close",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-224008b0bae0921d1e2867a4b1ecf511",
  ],
  [
    "Reuters close",
    "https://www.investing.com/news/economy-news/sp-500-dow-futures-rise-ahead-of-big-bank-results-cpi-data-4948567",
  ],
  [
    "CPI / CNBC",
    "https://www.cnbc.com/2026/10/14/cpi-inflation-report-september-2026.html",
  ],
  [
    "Fed Beige Book",
    "https://www.federalreserve.gov/monetarypolicy/beigebook202610-summary.htm",
  ],
  [
    "Treasuries",
    "https://www.newsquawk.com/headlines/treasury-wrap-t-note-futures-z6-settle-4-ticks-higher-at-104-28",
  ],
  ["SOXX", "https://stockanalysis.com/etf/soxx/history/"],
  ["Yahoo quotes", "https://finance.yahoo.com/quote/%5EGSPC/history/"],
  ["Binance data API", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261014() {
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
          2026-10-14 收市（香港時間 2026-10-15 週四更新）｜CPI 熱過預期；AI /
          科技急跌，Healthcare / Staples 防守輪動
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
            <li>先等 10Y、DXY、SOXX、AI credit 止血，唔急住撈 tech beta。</li>
            <li>
              Healthcare / Staples 可作防守觀察；Energy 強但受油價 headline
              牽動。
            </li>
            <li>BTC 相對較硬，但 ETH / SOL 跑輸；crypto beta 暫時保守。</li>
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
          。指數採 AP / Reuters 終值並與 Yahoo chart 交叉核對；sector / stocks
          採 Yahoo Finance chart / quote data，SOXX 另核 StockAnalysis；宏觀採
          CNBC/BLS、Fed Beige Book、Newsquawk、CME FedWatch；Crypto 採 Binance
          data API 20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
