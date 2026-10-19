import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股週五 risk-off：S&P 500 7,659.44（-1.09%）、Nasdaq 26,140.03（-2.14%）、Dow 52,002.41（-0.34%）、Russell 2,721.37（-1.7%），VIX 19.99（+21.45%，盤中高 22.31）。",
  "一句講晒：AI / 半導體延續沽壓，CoreWeave -11.91%、SOXX -4.14%；油價升穿 $100，又令通脹與 Fed 風險返嚟。",
  "板塊：XLE +2.52%、XLU +1.34%、XLP +1.08% 領先；XLK -3.02%、XLC -1.89%、XLY -0.84% 拖後腿。",
  "焦點股：CRWV -11.91%、ORCL -4.64%、MU -5.63%、AMD -5.95%、INTC -5.79%；TRGP +4.37%、FANG +4.28%、KMI +4.20%。",
  "宏觀：WTI $101.41（+3.51%）、Brent $109.86（+3.72%）；10Y 約 5.10%；CME FedWatch 經 CNBC 引述顯示 10 月 hold 機會逾八成。",
  "Crypto（Binance Vision 10/16 20:00 UTC）：BTC $81,656.01（-0.86%）、ETH $2,414.38（-1.56%）、SOL $103.68（-2.14%）。",
];

const metrics = [
  ["S&P 500 / Nasdaq", "7,659.44 -1.09% / 26,140.03 -2.14%", "red"],
  ["Dow / Russell", "52,002.41 -0.34% / 2,721.37 -1.7%", "red"],
  ["VIX / 10Y", "19.99 +21.45% / ~5.10%", "amber"],
  ["XLE / XLU / XLP", "+2.52% / +1.34% / +1.08%", "green"],
  ["XLK / SOXX / XLC", "-3.02% / -4.14% / -1.89%", "red"],
  [
    "WTI / Brent / Gold",
    "$101.41 +3.51% / $109.86 +3.72% / ~$4,169.60",
    "amber",
  ],
  ["CRWV / ORCL / MU", "-11.91% / -4.64% / -5.63%", "red"],
  ["BTC / ETH / SOL", "-0.86% / -1.56% / -2.14%", "red"],
];

const sources = [
  [
    "AP close",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-c27809783ae3230b44c26e5ee4bea056",
  ],
  [
    "AP market narrative",
    "https://apnews.com/article/stocks-markets-us-ai-oil-tech-warsh-d2655f64db7ec8ae450525d58f97b628",
  ],
  [
    "CNBC live",
    "https://www.cnbc.com/2026/10/15/stock-market-today-live-updates.html",
  ],
  ["Sector table", "https://www.thetrading.tools/sector-performance"],
  ["VIX", "https://finance.yahoo.com/quote/%5EVIX/history/"],
  ["BLS PPI", "https://www.bls.gov/ppi/"],
  [
    "Treasury / FedWatch",
    "https://www.cnbc.com/2026/10/16/us-treasury-yields-investors-hot-inflation-data-.html",
  ],
  ["Binance Vision", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261016() {
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
          background: #102a43;
          border-radius: 20px;
          padding: 20px;
          color: white;
          border: 1px solid #243b53;
        }
        h1 { margin: 0 0 8px; font-size: 31px; line-height: 1.04; }
        .sub { font-size: 15.5px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.25fr 0.75fr; gap: 11px; margin-top: 11px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 11px;
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
        @media print { .sheet { width: auto; min-height: auto; } }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-10-16 收市（香港時間 2026-10-19 週一更新）｜AI / 半導體延續沽壓；
          油價升穿 $100，能源與防守股跑贏
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
            <li>先當 risk-off 未完；不要急於撈 AI / semis。</li>
            <li>看 10Y 會否升穿 5.15%，以及 WTI 是否守住 $100。</li>
            <li>能源、防守股可作相對強勢觀察，但追入要用細注。</li>
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
          。指數採 AP / CNBC 終值；VIX 採 Cboe/Yahoo close 19.99（CNBC 提及升穿
          22 屬盤中）；sector / stocks 因 Yahoo chart API 本次 429，採可核對的
          market close 表與新聞來源；Crypto 採 Binance Vision 20:00 UTC 1m
          close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
