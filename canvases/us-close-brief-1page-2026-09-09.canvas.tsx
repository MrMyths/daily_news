import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股第三日受壓：Dow 52,380.66（-0.77%）、S&P 500 7,636.36（-0.48%）、Nasdaq 26,253.34（-0.64%）、Russell 2000 2,921.23（-1.32%）。",
  "主因係 Brent 升穿 $100、10Y 債息收約 4.837%，加上 FedWatch 類口徑約 60% 押注 9 月加息，PPI/CPI 前資金先減 beta。",
  "板塊紅綠燈：XLE +0.83%、SOXX +0.68% 較硬；XLI -1.51%、XLY -1.34%、XLU -1.17%、XLRE -1.12% 最弱。",
  "AI 交易好揀股：Meta +6.56% 因 Muse AI agent 逆市跑出；但 Alphabet -2.28%、Apple -0.28%、Nvidia -0.91%，Nasdaq 未能翻身。",
  "市場質感偏弱：VIX 16.46（+4.71%），Kitco/Reuters 指 S&P 500 跌多升少約 4.1 比 1；未恐慌，但 breadth 明顯轉差。",
  "Crypto 採 Binance Vision 2026-09-09 20:00 UTC：BTC $78,251.41（-0.27%）、ETH $2,466.00（-0.72%）、SOL $102.37（-0.82%）。",
];

const metrics = [
  ["S&P 500", "7,636.36 / -0.48%", "red"],
  ["Nasdaq", "26,253.34 / -0.64%", "red"],
  ["Dow", "52,380.66 / -0.77%", "red"],
  ["Russell / VIX", "-1.32% / 16.46", "red"],
  ["XLE / SOXX / XLK", "+0.83% / +0.68% / 約 0.00%", "green"],
  ["XLI / XLY / XLRE", "-1.51% / -1.34% / -1.12%", "red"],
  ["10Y / 30Y / Brent", "4.837% / 5.286% / $101.21", "amber"],
  ["Fed pricing", "9月加息約 60%", "amber"],
  ["BTC / ETH / SOL", "-0.27% / -0.72% / -0.82%", "amber"],
];

const sources = [
  [
    "Reuters close",
    "https://www.reuters.com/world/china/global-markets-global-markets-2026-09-09/",
  ],
  [
    "Kitco/Reuters close",
    "https://www.kitco.com/news/off-the-wire/2026-09-09/sp-500-ends-down-oil-tops-100-barrel",
  ],
  [
    "CNBC yields",
    "https://www.cnbc.com/2026/09/09/treasury-department-to-buy-back-6-billion-in-longer-term-debt-triple-the-normal-level.html",
  ],
  [
    "Newsquawk oil",
    "https://www.newsquawk.com/headlines/crude-wrap-wti-v6-settles-usd-302-higher-at-9605bbl",
  ],
  [
    "BLS PPI/CPI calendar",
    "https://www.bls.gov/schedule/news_release/current_year.asp",
  ],
  [
    "CME FedWatch",
    "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  ],
  [
    "Meta Muse",
    "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260909() {
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
          background: linear-gradient(135deg, #7f1d1d 0%, #b91c1c 54%, #111827 100%);
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
        h2 { margin: 0 0 8px; color: #b91c1c; font-size: 19px; }
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
          2026-09-09 收市｜油價升穿 $100、長債息抽高；Meta 逆市撐 AI 敘事
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
            <li>SPX 未收回 7,660 前，反彈先當 technical bounce。</li>
            <li>能源/半導體可留意強勢延續；XLI、XLY、XLRE 暫避。</li>
            <li>PPI/CPI 前控制 high beta、crypto 和槓桿倉。</li>
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
          。指數採 Yahoo final close 並與 Reuters/Kitco 交叉核對；ETF/個股因日線
          close 欄位在截數時未完全填入，採 Yahoo 20:00 UTC regular-session 1m
          close；油價採 Newsquawk 結算，並以 Yahoo 20:00 UTC futures
          作參考；Crypto 採 Binance Vision 2026-09-09 20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
