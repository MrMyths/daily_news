import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股週五修復但分化：S&P 500 7,376.86（+0.31%）、Nasdaq 24,579.43（+1.09%）反彈；Dow 51,285.73（-0.46%）仍跌。",
  "核心主線：星期四 AI / data-center regulation 恐慌後，市場低吸 chip beta；SOXX +3.51%、AMD +11.04%、NVDA +2.78%。",
  "升勢未算全面：VIX 25.64（-9.01%）但仍高；XLP -1.28%、XLB -0.73%、XLRE -0.68%、XLF -0.59% 拖後。",
  "宏觀偏鷹：BLS 10月非農 +165k、失業率 4.1%；10Y yield 4.859%，DXY 102.30，12月加息機率約 77%-80%。",
  "商品：WTI $90.83（+0.34%）、Brent $98.32（+0.03%）但全週大跌；gold futures $4,074.90（-0.94%）受強美元/收益率壓住。",
  "Crypto（Binance Vision 11/06 20:00 UTC）：BTC $75,920.32（-0.51% vs 11/05）、ETH $2,236.19（-1.03%）、SOL $90.26（+0.27%）。",
];

const metrics = [
  ["Dow / S&P 500", "51,285.73 -0.46% / 7,376.86 +0.31%", "amber"],
  ["Nasdaq / Russell", "24,579.43 +1.09% / 2,754.11 +0.89%", "green"],
  ["VIX / 10Y", "25.64 -9.01% / 4.859%", "amber"],
  ["SOXX / XLK / XLC", "+3.51% / +1.45% / +0.43%", "green"],
  ["XLP / XLB / XLRE", "-1.28% / -0.73% / -0.68%", "red"],
  [
    "WTI / Brent / Gold",
    "$90.83 +0.34% / $98.32 +0.03% / $4,074.90 -0.94%",
    "amber",
  ],
  ["AMD / NVDA / TSLA", "+11.04% / +2.78% / +4.23%", "green"],
  ["BTC / ETH / SOL", "-0.51% / -1.03% / +0.27%", "amber"],
];

const sources = [
  [
    "CNBC close",
    "https://www.cnbc.com/2026/11/05/stock-market-today-live-updates.html",
  ],
  [
    "Reuters",
    "https://www.investing.com/news/stock-market-news/nasdaq-futures-rise-after-steep-ai-selloff-as-chip-stocks-stabilize-5007026",
  ],
  [
    "AP",
    "https://apnews.com/article/markets-japan-nikkei-oil-ai-bba6f0bf9035a6e6b1c4fef3e8230b89",
  ],
  ["BLS", "https://www.bls.gov/news.release/empsit.nr0.htm"],
  [
    "Treasury / FedWatch",
    "https://www.cnbc.com/2026/11/06/treasury-yields-inch-lower-as-investors-look-ahead-to-key-jobs-data-.html",
  ],
  ["Oil", "https://www.cnbc.com/2026/11/06/oil-price-today-brent-wti.html"],
  [
    "Gold / DXY",
    "https://www.cnbc.com/2026/11/06/gold-eases-on-inflation-worries-from-higher-oil-us-payrolls-data-in-focus.html",
  ],
  ["Binance Vision", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261106() {
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
          2026-11-06 收市（香港時間 2026-11-09 週一更新）｜AI / 晶片急跌後反彈，
          但強就業令利率與美元上行
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
            <li>今日先當 AI / chip relief bounce，不當全面轉牛。</li>
            <li>若 10Y 升穿 4.90%，Nasdaq / SOXX beta 要降速。</li>
            <li>
              下週重點：11/10 CPI、SOXX 能否延續、BTC 能否重上 $76.5k-$77k。
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
          。指數採 CNBC / Yahoo Chart 終值；sector ETF、股票、DXY、commodity 採
          Yahoo Chart 並以 CNBC / Reuters 敘事交叉確認；FedWatch
          機率因時間點有差異，採 76.8%-80% 區間；Crypto 採 Binance Vision
          2026-11-06 20:00 UTC 1m close，對比 11/05 20:00 UTC。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
