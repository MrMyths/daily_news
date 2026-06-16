import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股大升：S&P 500 +1.65% 至 7,554.29、Dow +468.77 點至 51,671.03、Nasdaq +3.07% 至 26,683.94。",
  "主線是 US-Iran 協議希望令 Hormuz war premium 回落；WTI $80.75（-4.87%）、Brent $83.17（-4.76%）。",
  "科技與半導體領漲：XLK +3.78%、SOXX +5.40%，PHLX SOX 創新高；能源 XLE -3.48% 明顯跑輸。",
  "VIX 跌至 16.20，10Y 約 4.47%，美元偏弱、金價升至 $4,300 上方，跨資產訊號偏 risk-on。",
  "重點股：SPCX +19.6%、MU +10.84%、AMD +6.98%、NVDA +3.54%；Fox 宣布約 $22B 收購 Roku。",
  "Crypto 採 Binance Vision 2026-06-15 20:00 UTC 1m close：BTC $66,514、ETH $1,818.73、SOL $75.08。",
];

const sources = [
  [
    "CNBC stocks",
    "https://www.cnbc.com/2026/06/14/stock-market-today-live-updates.html",
  ],
  [
    "Investopedia",
    "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-06152026-11997917",
  ],
  [
    "Yahoo chart API",
    "https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC",
  ],
  [
    "CNBC yields",
    "https://www.cnbc.com/2026/06/15/treasury-yields-peace-deal-investor-fears-interest-rates.html",
  ],
  [
    "Reuters/CNA oil",
    "https://www.channelnewsasia.com/business/oil-hits-3-month-low-us-iran-reach-peace-deal-reopen-strait-hormuz-6182921",
  ],
  [
    "CNBC gold",
    "https://www.cnbc.com/2026/06/15/gold-gains-over-1percent-after-us-iran-reach-peace-deal.html",
  ],
  [
    "CME FedWatch",
    "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260615() {
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
          background: linear-gradient(135deg, #0f172a 0%, #14532d 58%, #0369a1 100%);
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
        h2 { margin: 0 0 12px; color: #047857; font-size: 22px; }
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
          2026-06-15 收市｜油價急跌，Nasdaq 與半導體接力爆上
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
            <span>大市趨勢</span>
            <span className="green">強 risk-on</span>
          </div>
          <div className="metric">
            <span>市場寬度</span>
            <span className="amber">科技主導</span>
          </div>
          <div className="metric">
            <span>半導體 / AI</span>
            <span className="green">強</span>
          </div>
          <div className="metric">
            <span>油價/地緣</span>
            <span className="green">暫降溫</span>
          </div>
          <div className="metric">
            <span>能源股</span>
            <span className="red">弱</span>
          </div>
          <div className="metric">
            <span>Fed / 通脹</span>
            <span className="amber">等 FOMC</span>
          </div>
          <h2 style={{ marginTop: 18 }}>操作重點</h2>
          <ul>
            <li>S&P 500 守 7,500、Nasdaq 守 26,500，短線 momentum 仍偏多。</li>
            <li>SOXX 貼近 $630；只要守 $600，AI hardware 主線未破。</li>
            <li>
              若 WTI 回 $85-$90、10Y 重上 4.55%、VIX 重上 20，先減高 beta。
            </li>
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
          。指數/ETF/股票收市採 CNBC 與 Yahoo chart API；油價採 Reuters/CNA
          settlement；債息採 CNBC/Yahoo ^TNX；FedWatch 以 CME-linked
          snapshot；Crypto 採 Binance Vision 2026-06-15 20:00 UTC 1m
          close。Trading Economics US500 數字與現貨指數有少量差異，本文採
          CNBC/Yahoo 現貨收市口徑。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
