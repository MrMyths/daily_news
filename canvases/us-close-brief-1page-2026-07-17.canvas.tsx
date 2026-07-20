import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股全線回吐：Dow -406.55 至 52,146.42；S&P 500 -1.01% 至 7,457.69；Nasdaq -1.40% 至 25,520.24；VIX +12.19% 至 18.77。",
  "核心風險是晶片熊市訊號：Reuters 指 SOX 較 6月22日高位低 20.2%，AI / semis 估值重估未完。",
  "能源成唯一綠燈：WTI +4.48% 至 $82.49、Brent +4.59% 至 $88.10，XLE +1.16%，XOM/CVX/COP 全升。",
  "板塊最弱：XLC -1.78%、XLY -1.62%、SOXX -1.64%；Netflix -7.26%，TSM -2.77%，NVDA -2.21%。",
  "宏觀訊號混合：Michigan sentiment 54.4、Fed G.17 工業生產 +0.1%，但油價推升通脹與加息尾部風險；FedWatch hold 86.7%。",
  "Crypto 採 Binance 2026-07-17 20:00 UTC 1m close：BTC $64,063.99（-0.33%）、ETH $1,840.51（-1.87%）、SOL $75.07（-1.03%）。",
];

const sources = [
  [
    "CNBC",
    "https://www.cnbc.com/2026/07/16/stock-market-today-live-updates.html",
  ],
  [
    "Reuters/CNA",
    "https://www.channelnewsasia.com/world/us-stocks-wall-street-chip-market-6262051",
  ],
  [
    "Investopedia",
    "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-07172026-12021361",
  ],
  [
    "Yahoo chart",
    "https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC?interval=1d",
  ],
  ["Michigan", "https://www.sca.isr.umich.edu/?stream=top"],
  ["Fed G.17", "https://www.federalreserve.gov/RELEASES/g17/Current/g17.txt"],
  ["FedWatch", "https://www.investing.com/central-banks/fed-rate-monitor"],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260717() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          min-height: 760px;
          margin: 0 auto;
          padding: 32px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.38;
        }
        .hero {
          background: linear-gradient(135deg, #111827 0%, #7f1d1d 52%, #0f766e 100%);
          border-radius: 24px;
          padding: 27px;
          color: white;
        }
        h1 { margin: 0 0 8px; font-size: 41px; line-height: 1.08; }
        .sub { font-size: 18px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.35fr 0.65fr; gap: 16px; margin-top: 15px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 18px;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
        }
        h2 { margin: 0 0 10px; color: #0f766e; font-size: 21px; }
        ul { margin: 0; padding-left: 21px; }
        li { margin: 7px 0; }
        .metric { display: grid; grid-template-columns: 1fr auto; gap: 10px; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 12.3px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-07-17 收市｜晶片跌入熊市技術區，油價急升撐能源
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
            <span className="red">跌穿 7,500</span>
          </div>
          <div className="metric">
            <span>Nasdaq momentum</span>
            <span className="red">轉弱</span>
          </div>
          <div className="metric">
            <span>Semis / SOXX</span>
            <span className="red">-1.64%</span>
          </div>
          <div className="metric">
            <span>Energy / XLE</span>
            <span className="green">+1.16%</span>
          </div>
          <div className="metric">
            <span>VIX</span>
            <span className="amber">18.77</span>
          </div>
          <div className="metric">
            <span>Crypto</span>
            <span className="red">回吐</span>
          </div>
          <h2 style={{ marginTop: 14 }}>操作重點</h2>
          <ul>
            <li>S&P 500 7,450、Nasdaq 25,500 是短線防線。</li>
            <li>SOXX/SMH 未企穩前，不宜太快假設晶片 V-shape。</li>
            <li>VIX 20、Brent $90、10Y 4.60% 是降風險警號。</li>
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
          。指數採 CNBC/Reuters 並以 Yahoo chart 交叉核對；ETF/個股 close 採
          Yahoo chart；Crypto 採 Binance Vision 2026-07-17 20:00 UTC 1m
          close；FedWatch 採 Investing.com 2026-07-18 00:35 EDT 更新。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
