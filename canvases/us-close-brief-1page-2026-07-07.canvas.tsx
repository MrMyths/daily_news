import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股收低：Dow -130.76 至 52,925.15；S&P 500 -0.45% 至 7,503.85；Nasdaq -1.16% 至 25,818.69。",
  "主線是 AI/晶片高位回吐：Samsung Q2 operating profit 指引創紀錄，但市場擔心 memory cycle 增速見頂。",
  "SOXX -5.13%，INTC -9.66%、AMD -6.51%、WDC -7.86%、MRVL -7.45%；半導體是全日最大拖累。",
  "Hormuz 風險推高油價和長債息：AP 報 Brent settle $74.16；CNBC 報 10Y 4.545%、30Y 5.053%。",
  "資金轉向能源/防守：XLE +2.84%、XLV +1.53%、XLP +0.90%；但 XLI、XLK、SOXX 明顯紅。",
  "Crypto 採 Binance 2026-07-07 20:00 UTC 1m close：BTC $63,840.01、ETH $1,789.88、SOL $81.39。",
];

const sources = [
  [
    "AP/Barchart",
    "https://www.barchart.com/story/news/3153642/asian-markets-retreat-after-rebounding-ai-stocks-send-the-sp-500-to-brink-of-a-new-record",
  ],
  [
    "Investopedia",
    "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-07072026-12013187",
  ],
  [
    "CNBC yields",
    "https://www.cnbc.com/2026/07/07/us-treasury-yields-investors-await-trade-deficit-data-.html",
  ],
  [
    "Census/BEA trade",
    "https://www.census.gov/foreign-trade/Press-Release/current_press_release/ft900.pdf",
  ],
  [
    "Samsung",
    "https://news.samsung.com/global/samsung-electronics-announces-earnings-guidance-for-second-quarter-2026",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260707() {
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
          line-height: 1.38;
        }
        .hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 56%, #7f1d1d 100%);
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
          2026-07-07 收市｜AI 晶片急回，油價同長債息一齊抽高
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
          <div className="metric">
            <span>大市 / S&P 500</span>
            <span className="amber">守 7,500</span>
          </div>
          <div className="metric">
            <span>Nasdaq / AI beta</span>
            <span className="red">弱</span>
          </div>
          <div className="metric">
            <span>SOXX / memory chain</span>
            <span className="red">最弱</span>
          </div>
          <div className="metric">
            <span>Energy / oil</span>
            <span className="green">強</span>
          </div>
          <div className="metric">
            <span>10Y / 30Y yields</span>
            <span className="red">抽高</span>
          </div>
          <div className="metric">
            <span>Crypto</span>
            <span className="amber">橫行</span>
          </div>
          <h2 style={{ marginTop: 15 }}>操作重點</h2>
          <ul>
            <li>SPX 7,500、Nasdaq 25,800、SOXX $540 是短線防線。</li>
            <li>10Y 若企 4.55%、Brent 逼近 $76-$80，高估值股仍受壓。</li>
            <li>未見半導體止跌前，反彈先當 technical bounce。</li>
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
          。指數收市採 AP/Barchart、Investopedia 與 Yahoo chart 一致口徑；ETF
          proxy 與股票用 Yahoo chart close；債息用 CNBC 7/7 即時口徑，Fed H.15
          截稿只列至 7/6；Crypto 採 Binance data-api 2026-07-07 20:00 UTC 1m
          close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
