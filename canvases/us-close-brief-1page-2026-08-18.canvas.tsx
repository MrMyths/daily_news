import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股連跌第三日：S&P 500 -0.69% 至 7,691.76，Nasdaq -1.33%，Dow -0.22%，Russell 2000 -1.30%；VIX +4.28% 至 15.84。",
  "主因是 30Y Treasury yield 觸及近 19 年高位，加上 Brent $91.02、WTI $84.94 三週高，市場重新擔心通脹同估值。",
  "半導體係最大傷口：SOXX -4.96%，SOX 約 -4.98%；SNDK -9.01%、STX -9.16%、WDC -7.43%、MU -7.02%。",
  "板塊紅綠燈：XLE +1.76%、XLV +1.60%、XLP +1.06% 跑出；XLK -2.47%、XLI -1.48%、XLB -0.88% 跑輸。",
  "宏觀 mixed：7 月 housing starts 1.239M、-12.4% m/m；FedWatch 仍約 65% 押 9 月 hold、35% 押加 25bp。",
  "Crypto 採 Binance Vision 2026-08-18 20:00 UTC 1m close：BTC $64,654.87（+0.59%）、ETH $1,913.70（+0.35%）、SOL $77.16（+1.83%）。",
];

const metrics = [
  ["S&P 500 / Nasdaq", "連跌第三日", "red"],
  ["30Y yield", "5.28%-5.33%", "red"],
  ["Oil", "三週高", "amber"],
  ["SOXX", "-4.96%", "red"],
  ["XLE / XLV", "領升", "green"],
  ["Crypto", "小幅逆升", "green"],
];

const sources = [
  [
    "CNBC close",
    "https://www.cnbc.com/2026/08/17/stock-market-today-live-updates.html",
  ],
  [
    "TradingKey stocks",
    "https://www.tradingkey.com/analysis/stocks/us-stocks/262116031-us-stock-close-down-nasdaq-sox-semiconductor-memory-sandisk-micron-tradingkey",
  ],
  ["CNBC yields", "https://www.cnbc.com/2026/08/18/treasury-yields-.html"],
  [
    "Treasury/H.15",
    "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value_month=202608&type=daily_treasury_yield_curve",
  ],
  [
    "Census housing",
    "https://www.census.gov/construction/nrc/current/index.html",
  ],
  [
    "Reuters oil",
    "https://lufkindailynews.com/news_reuters/business/oil-closes-at-three-week-high-as-hopes-of-us-iran-peace-deal-fade/article_9d4e3328-ae3d-516d-8f2d-8f0e6fc62523.html",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260818() {
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
          line-height: 1.34;
        }
        .hero {
          background: linear-gradient(135deg, #0f172a 0%, #7f1d1d 54%, #111827 100%);
          border-radius: 24px;
          padding: 26px;
          color: white;
        }
        h1 { margin: 0 0 8px; font-size: 41px; line-height: 1.08; }
        .sub { font-size: 18px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.34fr 0.66fr; gap: 16px; margin-top: 15px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 17px;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
        }
        h2 { margin: 0 0 9px; color: #1d4ed8; font-size: 20px; }
        ul { margin: 0; padding-left: 20px; }
        li { margin: 6px 0; }
        .metric { display: grid; grid-template-columns: 1fr auto; gap: 10px; padding: 7px 0; border-bottom: 1px solid #e5e7eb; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 12.2px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-08-18 收市｜長債息與油價夾擊，半導體急跌拖低 Nasdaq
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
          <h2 style={{ marginTop: 13 }}>操作重點</h2>
          <ul>
            <li>SPX 失守 7,700；短線先看 7,650-7,675 承接。</li>
            <li>SOXX 要先守 $523-$531，否則 Nasdaq 反彈質素有限。</li>
            <li>8/19 FOMC minutes 會測試「9 月 hold」交易是否穩陣。</li>
          </ul>
        </div>
      </section>
      <section className="card" style={{ marginTop: 15 }}>
        <h2>來源與口徑</h2>
        <p className="small">
          主要來源：
          {sources.map(([name, url], index) => (
            <React.Fragment key={url}>
              {index > 0 ? " / " : ""}
              <a href={url}>{name}</a>
            </React.Fragment>
          ))}
          。指數採 CNBC/TradingKey 收市口徑；ETF/個股採 StockAnalysis/Yahoo/Exa
          quote-page；Treasury 採官方 Treasury/Fed H.15 並交叉 CNBC
          即時口徑；Crypto 採 Binance Vision public data 2026-08-18 20:00 UTC 1m
          close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
