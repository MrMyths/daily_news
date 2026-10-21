import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股週二資金由 AI / mega-cap tech 輪動去 healthcare、value、防守收益股同小型股：Dow 52,495.88（+1.02%）、S&P 500 7,712.57（+0.28%），Nasdaq 26,424.82（-0.02%）。",
  "Breadth 明顯改善：Russell 2000 2,773.42（+1.65%），VIX 17.31（-6.13%）；Reuters 指 NYSE 升股多過跌股 2.04:1，Nasdaq 升股亦約 2 倍於跌股。",
  "板塊：XLV +2.37%、XLRE +1.70%、XLU +1.26%、XLF +1.20% 領先；XLK -0.28%、SOXX -0.38% 落後，科技股休息。",
  "宏觀：10Y 約 5.116%（-1.9bp）、2Y 約 4.785%（+2.6bp）；WTI settlement $101.79（-1.80%），Brent $108.79（-0.69%），DXY 101.70（-0.27%）。",
  "焦點股：LLY +3.49%、MMM +5.78%、EFX +11.33%、HAS +11.20%；GM -6.84%、GE -3.67%、META -1.59%、NVDA -0.29%。",
  "Crypto（Binance Vision 10/20 20:00 UTC）：BTC $82,538.01（+0.82% vs 10/19）、ETH $2,435.32（+1.68%）、SOL $105.97（+1.87%）。",
];

const metrics = [
  ["Dow / Russell", "52,495.88 +1.02% / 2,773.42 +1.65%", "green"],
  ["S&P 500 / Nasdaq", "7,712.57 +0.28% / 26,424.82 -0.02%", "amber"],
  ["VIX / 10Y", "17.31 -6.13% / ~5.116%", "green"],
  ["XLV / XLRE / XLU", "+2.37% / +1.70% / +1.26%", "green"],
  ["XLK / SOXX", "-0.28% / -0.38%", "red"],
  [
    "WTI / Brent / Gold",
    "$101.79 -1.80% / $108.79 -0.69% / $4,142.60 -0.4%",
    "green",
  ],
  ["LLY / MMM / EFX", "+3.49% / +5.78% / +11.33%", "green"],
  ["BTC / ETH / SOL", "+0.82% / +1.68% / +1.87%", "amber"],
];

const sources = [
  [
    "Reuters",
    "https://www.investing.com/news/stock-market-news/nasdaq-futures-dip-as-oil-prices-climb-earnings-loom-4959413",
  ],
  [
    "AP close",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-0a5ea168499c6ae617c49e10bf48f9c6",
  ],
  [
    "Yahoo markets",
    "https://finance.yahoo.com/markets/stocks/articles/markets-news-oct-20-2026-103252254.html",
  ],
  ["Sector table", "https://scannerxmi.com/sector/"],
  ["VIX / RUT", "https://finance.yahoo.com/quote/%5EVIX/history/"],
  ["Macro", "https://www.eoption.com/market-review-october-20-2026/"],
  [
    "NAR housing",
    "https://www.nar.realtor/newsroom/pending-home-sales-decreased-7-3-percent-in-september",
  ],
  ["Binance Vision", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261020() {
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
        .card { background: white; border: 1px solid #e2e8f0; border-radius: 18px; padding: 11px; }
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
          2026-10-20 收市（香港時間 2026-10-21 週三更新）｜Dow / healthcare /
          小型股跑出；科技股休息，油價同長債息回落
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
            <li>
              今日可順勢承認 breadth 改善，但先當 rotation / relief trade。
            </li>
            <li>若 10Y 守在 5.10% 下方，XLV、XLRE、XLU、Russell 可延續。</li>
            <li>
              Meta / Tesla / SpaceX 後續市場反應，會決定 AI trade 能否重新接力。
            </li>
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
          。指數採 AP / Reuters / Yahoo 終值；VIX / Russell 採 Yahoo historical
          close；sector ETF 採收市 ETF 表；油價 settlement 與 4pm ET
          即市有時間差，文內標示；Crypto 採 Binance Vision 20:00 UTC 1m
          close，對比上一個美股交易日 10/19 20:00 UTC。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
