import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "S&P 500 +0.30% 至 7,405.73、Nasdaq +0.86% 至 25,929.66；Dow -0.16% 至 50,786.01，反映升勢集中在科技/半導體。",
  "SOXX +5.87%、SMH +5.00%；INTC +11.19%、MU +9.87%、MRVL +9.63%，是上週五 chip rout 後的急速修復。",
  "宏觀未完全放鬆：10Y Treasury 4.564%、30Y 5.038%；FedWatch 顯示 6 月維持 3.50%-3.75% 機率約 96.5%。",
  "油價因以伊風險收高但由高位回落：WTI $91.30、Brent $94.25；美元指數約 100.00，金價 $4,327.63 附近。",
  "板塊紅綠分化：XLK +2.15%、XLE +1.14%，但 XLU -1.87%、XLRE -1.50%、XLB -1.32%；不是全面 risk-on。",
  "Crypto（Binance Vision 4:00pm ET 1m close）：BTC $63,432.83、ETH $1,685.41、SOL $67.49，較 6/5 同口徑反彈約 4.9%-6.9%。",
];

const sources = [
  [
    "Reuters/MarketScreener",
    "https://www.marketscreener.com/news/stocks-bounce-back-oil-pares-gains-as-iran-and-israel-signal-a-pause-ce7f5dd3d88ef020",
  ],
  [
    "CNBC",
    "https://www.cnbc.com/2026/06/07/stock-market-today-live-updates.html",
  ],
  [
    "Investopedia",
    "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-06082026-11992852",
  ],
  ["FedWatch", "https://growbeansprout.com/tools/fedwatch"],
  ["Yahoo Finance", "https://finance.yahoo.com/"],
  ["Binance Vision", "https://data.binance.vision/"],
];

export default function USCloseBriefOnePage20260608() {
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
          background: linear-gradient(135deg, #0f172a 0%, #064e3b 62%, #0f766e 100%);
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
        h2 { margin: 0 0 12px; color: #065f46; font-size: 22px; }
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
        <div className="sub">2026-06-08 收市｜半導體急彈托市，宏觀壓力未退</div>
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
            <span className="amber">修復中</span>
          </div>
          <div className="metric">
            <span>市場寬度</span>
            <span className="amber">分化</span>
          </div>
          <div className="metric">
            <span>AI / 半導體</span>
            <span className="green">強彈</span>
          </div>
          <div className="metric">
            <span>利率風險</span>
            <span className="red">仍高</span>
          </div>
          <div className="metric">
            <span>油價/通脹</span>
            <span className="amber">未穩</span>
          </div>
          <div className="metric">
            <span>Crypto beta</span>
            <span className="green">反彈</span>
          </div>
          <h2 style={{ marginTop: 18 }}>操作重點</h2>
          <ul>
            <li>守 7,400：反彈有承接；失守 7,380：小心變回反抽。</li>
            <li>Nasdaq 重上 26,000、SOXX 守住升幅，AI beta 才算修復。</li>
            <li>10Y 升穿 4.67% 或 WTI 重上 $95，要先降風險。</li>
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
          。指數收市採 Reuters/CNBC/Yahoo 一致口徑；板塊採 Yahoo ETF
          proxy；債息/油金優先採 Reuters 收市口徑；Crypto 採 Binance Vision
          2026-06-08 20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
