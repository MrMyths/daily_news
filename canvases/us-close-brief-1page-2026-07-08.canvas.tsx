import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股分化：Dow -576.76 至 52,348.39；S&P 500 -0.28% 至 7,482.71；Nasdaq 逆市 +0.20% 至 25,870.65。",
  "主線是 Trump 稱 Iran ceasefire over，WTI/Brent 急升至約 $74.93/$78.73，市場重新 price 通脹與加息風險。",
  "FOMC minutes 偏鷹：a few 官員認為 6 月已有加息理據；Investing Fed monitor 顯示 9 月至少 +25bp 機率約 67.2%。",
  "科技分化：AVGO +4.83%、NVDA +3.65%、SOXX +1.87%；但 META、MSFT、GOOGL、AMZN、TSLA 全跌。",
  "板塊：XLE +1.76%、XLK +1.24% 跑出；XLB -2.62%、XLF -1.93%、XLY -1.78%、XLRE -1.65% 最弱。",
  "Crypto 採 Binance 2026-07-08 20:00 UTC 1m close：BTC $62,210、ETH $1,737.83、SOL $77.36。",
];

const sources = [
  [
    "AP",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-15f15444d1f59c351d33df0717509183",
  ],
  [
    "CNBC",
    "https://www.cnbc.com/2026/07/07/stock-market-today-live-updates.html",
  ],
  [
    "TradingKey",
    "https://www.tradingkey.com/analysis/stocks/us-stocks/262018425-us-stock-market-close-nasdaq-rise-dow-down-trump-fed-fomc-rate-tradingkey",
  ],
  [
    "Fed minutes",
    "https://www.federalreserve.gov/monetarypolicy/files/fomcminutes20260617.pdf",
  ],
  [
    "Kitco",
    "https://www.kitco.com/news/article/2026-07-08/gold-slides-fed-minutes-hormuz-oil-spike-lift-yields-kitco-pm-report",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260708() {
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
          2026-07-08 收市｜油價同加息預期翻熱，Nasdaq 靠半導體頂住
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
            <span className="amber">失 7,500</span>
          </div>
          <div className="metric">
            <span>Nasdaq / AI beta</span>
            <span className="amber">分化偏強</span>
          </div>
          <div className="metric">
            <span>SOXX / semis</span>
            <span className="green">反彈</span>
          </div>
          <div className="metric">
            <span>Energy / oil</span>
            <span className="green">強</span>
          </div>
          <div className="metric">
            <span>10Y / Fed pricing</span>
            <span className="red">偏鷹</span>
          </div>
          <div className="metric">
            <span>Crypto</span>
            <span className="red">回落</span>
          </div>
          <h2 style={{ marginTop: 15 }}>操作重點</h2>
          <ul>
            <li>SPX 7,450、Nasdaq 25,800、SOXX $560 是短線防線。</li>
            <li>10Y 若升穿 4.60%、Brent 企 $80，高估值股要降風險。</li>
            <li>買強不買弱：AI ASIC/semis 可觀察，弱 cyclicals 暫避。</li>
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
          。指數採 AP/CNBC 一致收市口徑；sector ETF 用 StockAnalysis historical
          close；FedWatch 採 Investing.com 7:35pm ET；Crypto 採 Binance data-api
          2026-07-08 20:00 UTC 1m close。VIX 採 CNBC/Yahoo 4:15pm ET 16.90
          口徑，並在完整版標示與其他來源差異。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
