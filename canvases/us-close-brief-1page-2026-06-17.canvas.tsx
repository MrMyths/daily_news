import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股全線回落：Dow -507.12 至 51,492.55；S&P 500 -1.21% 至 7,420.10；Nasdaq -1.34% 至 26,021.66。",
  "Fed 維持 3.50%-3.75% 不變，但點陣圖轉鷹：2026 median fed funds 由 3.4% 升至 3.8%。",
  "債市是主線：2Y yield 升至約 4.21%-4.22%，令 mega-cap growth 和 high duration 資產受壓。",
  "全數 S&P sectors 偏弱，XLC -2.78%、XLY -2.51%、XLRE -2.51%；SOXX +1.44% 顯示晶片內部分化。",
  "重點股票：META -5.44%、MSFT -3.79%、AMZN -3.46%；AVGO +4.30%、WDC +4.56%、STX +3.37% 仍有相對強勢。",
  "Crypto 採 Binance 2026-06-17 20:00 UTC 1m close：BTC $64,232.45、ETH $1,734.58、SOL $71.59。",
];

const sources = [
  [
    "CNBC stocks",
    "https://www.cnbc.com/2026/06/16/stock-market-today-live-updates.html",
  ],
  [
    "Motley Fool",
    "https://www.fool.com/coverage/stock-market-today/2026/06/17/stock-market-today-june-17-stocks-slide-on-fed-rate-hike-fears/",
  ],
  [
    "AP/Barchart",
    "https://www.barchart.com/story/news/2506642/us-stocks-sink-on-worries-about-a-possible-hike-to-interest-rates-this-year-by-the-federal-reserve",
  ],
  [
    "Fed statement",
    "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260617a.htm",
  ],
  [
    "Fed SEP",
    "https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260617.htm",
  ],
  [
    "Reuters/ET",
    "https://economictimes.indiatimes.com/markets/us-stocks/news/us-stocks-us-market-closes-lower-as-fed-signals-rates-may-move-higher-this-year/articleshow/131812282.cms",
  ],
  [
    "Census retail sales",
    "https://www.census.gov/retail/marts/www/marts_current.pdf",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260617() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          min-height: 760px;
          margin: 0 auto;
          padding: 38px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.42;
        }
        .hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 56%, #7f1d1d 100%);
          border-radius: 24px;
          padding: 30px;
          color: white;
        }
        h1 { margin: 0 0 8px; font-size: 42px; line-height: 1.08; }
        .sub { font-size: 18px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.35fr 0.65fr; gap: 18px; margin-top: 18px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 22px;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
        }
        h2 { margin: 0 0 12px; color: #1d4ed8; font-size: 22px; }
        ul { margin: 0; padding-left: 21px; }
        li { margin: 8px 0; }
        .metric { display: grid; grid-template-columns: 1fr auto; gap: 10px; padding: 9px 0; border-bottom: 1px solid #e5e7eb; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 13px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-06-17 收市｜Warsh 首場 FOMC 變鷹，美股由高位倒跌
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
            <span>Fed / dot plot</span>
            <span className="red">鷹</span>
          </div>
          <div className="metric">
            <span>S&P 500</span>
            <span className="red">失 7,500</span>
          </div>
          <div className="metric">
            <span>Nasdaq / mega-cap tech</span>
            <span className="red">弱</span>
          </div>
          <div className="metric">
            <span>2Y yield / DXY</span>
            <span className="red">抽高</span>
          </div>
          <div className="metric">
            <span>SOXX / storage</span>
            <span className="green">分化強</span>
          </div>
          <div className="metric">
            <span>Crypto</span>
            <span className="amber">risk-off</span>
          </div>
          <h2 style={{ marginTop: 18 }}>操作重點</h2>
          <ul>
            <li>SPX 7,400、Nasdaq 26,000、Dow 51,500 是短線防線。</li>
            <li>未重上 SPX 7,500 前，反彈先當 technical bounce。</li>
            <li>若 2Y 企 4.20%、VIX 破 20、BTC 失 $64k，降低高 beta。</li>
          </ul>
        </div>
      </section>
      <section className="card" style={{ marginTop: 18 }}>
        <h2>來源與口徑</h2>
        <p className="small">
          主要來源：
          {sources.map(([name, url], index) => (
            <React.Fragment key={url}>
              {index > 0 ? " / " : ""}
              <a href={url}>{name}</a>
            </React.Fragment>
          ))}
          。指數收市採 CNBC / Motley Fool / AP-Barchart 一致口徑；Russell、ETF
          proxy 與股票使用 Yahoo chart close 交叉核對；VIX 採 CNBC/Yahoo 18.44，
          FRED 截稿只更新至 6/16；Crypto 採 Binance data-api 2026-06-17 20:00
          UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
