import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股延續反彈：S&P 500 +0.50% 至 7,431.46、Dow +353.51 點 / +0.70% 至 51,202.26、Nasdaq +0.31% 至 25,888.84。",
  "主線是「SpaceX IPO 首日成功 + Iran 協議希望 + 油價回落」；WTI $84.88（-3.2%）、Brent $87.33（-3.4%）。",
  "VIX 跌至 17.68（-9.05%），Russell 2000 +0.79%，升市 breadth 比前一日更廣。",
  "板塊最強是 XLB +1.87%、SOXX 約 +1.5%、XLF +1.37%、XLU +1.09%；XLC -0.42%、XLV -0.18% 跑輸。",
  "重點股分化：SPCX 首日收約 $160.95-$161.11（較 IPO 價 +19%）、AMD +4.73%，但 AAPL -1.52%、AMZN -1.23%。",
  "Crypto 採 Binance Vision 2026-06-12 20:00 UTC 1m close：BTC $63,586.21、ETH $1,666.01、SOL $66.77。",
];

const sources = [
  [
    "Yahoo indices",
    "https://finance.yahoo.com/markets/stocks/articles/major-us-stock-indexes-fared-203027763.html",
  ],
  [
    "Trading Economics",
    "https://tradingeconomics.com/united-states/stock-market/news/558794",
  ],
  [
    "CNBC yields/oil",
    "https://www.cnbc.com/2026/06/12/treasury-yields-oil-iran-deal.html",
  ],
  ["U. Michigan", "https://www.sca.isr.umich.edu/"],
  ["BLS CPI", "https://www.bls.gov/news.release/cpi.nr0.htm"],
  ["BLS PPI", "https://www.bls.gov/news.release/ppi.htm"],
  ["Fed/FOMC context", "https://blog.kraken.com/economic-brief/june-10-2026"],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260612() {
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
          2026-06-12 收市｜SpaceX 首日大升，油價回落撐住 risk-on
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
            <span className="green">續反彈</span>
          </div>
          <div className="metric">
            <span>市場寬度</span>
            <span className="green">擴散改善</span>
          </div>
          <div className="metric">
            <span>IPO / 高增長</span>
            <span className="green">強</span>
          </div>
          <div className="metric">
            <span>油價/地緣</span>
            <span className="green">暫降溫</span>
          </div>
          <div className="metric">
            <span>Fed / 通脹</span>
            <span className="amber">仍是風險</span>
          </div>
          <div className="metric">
            <span>Mega-cap tech</span>
            <span className="amber">分化</span>
          </div>
          <h2 style={{ marginTop: 18 }}>操作重點</h2>
          <ul>
            <li>S&P 500 守 7,400 先維持偏多；跌穿 7,300 要當反彈失效處理。</li>
            <li>SOXX 約 $596，600 是 momentum 關口；AMD 強但 MU/AVGO 回吐。</li>
            <li>若 WTI 重上 $90、10Y 重上 4.55%、VIX 重上 20，先減高 beta。</li>
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
          。指數收市採 Yahoo Finance 市場總結；油價/債息採 CNBC
          及日結口徑；University of Michigan 採官方 preliminary June
          release；Crypto 採 Binance Vision 2026-06-12 20:00 UTC 1m close。DXY
          未見可靠即時收市數字，只作方向性描述；SOXX/SPCX quote
          口徑有小差異，本文以約數或範圍列示。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
