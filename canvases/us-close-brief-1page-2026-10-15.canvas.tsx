import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股週四由早段震盪反彈：S&P 500 7,744.06（+0.33%）、Nasdaq 26,713.03（+0.08%）、Dow 52,177.69（+1.08%）、Russell 2,767.27（+1.38%），VIX 16.46（-2.43%）。",
  "一句講晒：PPI 熱過預期，但 10Y yield 跌到約 5.09%，資金由 AI / 半導體轉去 healthcare、materials、consumer、financials。",
  "板塊：XLV +1.86%、XLB +1.79%、XLY +1.71%、XLF +1.38% 領先；XLK -0.65%、SOXX -0.91%、XLE -1.58% 拖後腿。",
  "焦點股：DELL -6.80%、HPE -7.11%、NVDA -1.84%；ORCL +3.00%、MRNA +4.51%、UNH +2.79%、BBY +5.69%。",
  "宏觀：BLS PPI +1.3% m/m、+6.3% y/y；10Y 約 5.088%，2Y 約 4.755%；DXY 約 102.00，WTI $97.97，gold settlement $4,170.10（另有即時報價約 $4,190-$4,195）。",
  "Crypto（Binance data API 10/15 20:00 UTC）：BTC $82,364.01（+0.57%）、ETH $2,452.72（+0.73%）、SOL $105.95（+1.51%）。",
];

const metrics = [
  ["S&P 500 / Nasdaq", "7,744.06 +0.33% / 26,713.03 +0.08%", "green"],
  ["Dow / Russell", "52,177.69 +1.08% / 2,767.27 +1.38%", "green"],
  ["VIX / 10Y", "16.46 -2.43% / 5.088%", "amber"],
  ["XLV / XLB / XLY", "+1.86% / +1.79% / +1.71%", "green"],
  ["XLK / SOXX / XLE", "-0.65% / -0.91% / -1.58%", "red"],
  ["WTI / Gold / DXY", "$97.97 +3.03% / $4,170.10 +1.51% / 102.00", "amber"],
  ["DELL / HPE / NVDA", "-6.80% / -7.11% / -1.84%", "red"],
  ["BTC / ETH / SOL", "+0.57% / +0.73% / +1.51%", "green"],
];

const sources = [
  [
    "AP close",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-f0a4f8aa60a6a24237c419aba38f31fd",
  ],
  [
    "Reuters close",
    "https://uk.marketscreener.com/news/s-p-500-ends-higher-as-traders-shift-from-ai-to-healthcare-ce785dd3d18af022",
  ],
  [
    "CNBC live",
    "https://www.cnbc.com/2026/10/14/stock-market-today-live-updates.html",
  ],
  ["BLS PPI", "https://www.bls.gov/news.release/ppi.nr0.htm"],
  [
    "FedWatch / macro",
    "https://www.investing.com/news/stock-market-news/us-stock-futures-fall-as-hot-inflation-revives-fed-hike-concerns-4950317",
  ],
  [
    "Commodities",
    "https://edgeconsultancykw.com/commodities-wrap-15-october-2026/",
  ],
  ["Yahoo quotes", "https://finance.yahoo.com/quote/%5EGSPC/history/"],
  ["Binance data API", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261015() {
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
          2026-10-15 收市（香港時間 2026-10-16 週五更新）｜PPI 熱但債息回落； AI
          / 半導體仍弱，Healthcare / Materials / Consumer 接力
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
            <li>先承認 rotation 反彈，但唔好當 AI risk 已解決。</li>
            <li>留意 10Y 能否守 5.10% 下方；重上 5.15%-5.20% 會再壓 tech。</li>
            <li>
              Healthcare / consumer 可作相對強勢觀察，半導體和 AI server
              繼續保守。
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
          。指數採 AP / Reuters / CNBC 終值並與 Yahoo chart 交叉核對；sector /
          stocks 採 Yahoo Finance chart / quote data，個別 movers 採
          Investing.com / Reuters；宏觀採 BLS、CME FedWatch / Investing.com、
          The Edge；Crypto 採 Binance data API 20:00 UTC 1m close。黃金採
          settlement 作主口徑，另標示即時報價差異。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
