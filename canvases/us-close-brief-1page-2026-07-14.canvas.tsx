import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股反彈：Dow +9.63 至 52,508.27；S&P 500 +0.38% 至 7,543.59；Nasdaq +0.90% 至 26,107.01。",
  "主因是 CPI 冷過預期：BLS 報 headline -0.4% m/m、3.5% y/y；core 0.0% m/m、2.6% y/y。",
  "科技/晶片買返：XLK +1.29%、SOXX +2.58%；NVDA +4.06%、AMD +2.57%、MU +4.92%。",
  "銀行業績幫手，但科技內部分化：JPM/GS/BAC 受交易收入與投行費用支持；IBM -25.21% 暴露 enterprise tech 壓力。",
  "宏觀未完全安全：2Y/10Y 跌至約 4.196%/4.589%，DXY -0.33%，但 WTI/Brent 仍升至 $79.34/$84.73。",
  "Crypto 採 Binance 2026-07-14 20:00 UTC 1m close：BTC $64,564.23、ETH $1,877.26、SOL $77.16。",
];

const sources = [
  [
    "AP",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-eda3fd144dc773fc32cc6c69898d53b0",
  ],
  [
    "CNBC",
    "https://www.cnbc.com/2026/07/13/stock-market-today-live-updates.html",
  ],
  [
    "Reuters/CNA",
    "https://www.channelnewsasia.com/business/stocks-gain-softer-inflation-bank-results-while-oil-rises-us-iran-hostilities-6252286",
  ],
  ["BLS CPI", "https://www.bls.gov/news.release/cpi.nr0.htm"],
  [
    "CNBC banks",
    "https://www.cnbc.com/2026/07/14/jpm-bank-of-america-citi-bank-earnings-live-updates.html",
  ],
  [
    "CNBC IBM",
    "https://www.cnbc.com/2026/07/14/ibm-warns-second-quarter-earnings-fell-short-of-expectations.html",
  ],
  [
    "CME FedWatch",
    "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260714() {
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
          background: linear-gradient(135deg, #111827 0%, #065f46 56%, #1d4ed8 100%);
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
        h2 { margin: 0 0 10px; color: #047857; font-size: 21px; }
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
          2026-07-14 收市｜CPI 降溫撐科技反彈，IBM 暴跌添分化
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
            <span className="amber">重上 7,500</span>
          </div>
          <div className="metric">
            <span>Nasdaq / AI beta</span>
            <span className="green">反彈</span>
          </div>
          <div className="metric">
            <span>SOXX / semis</span>
            <span className="green">修復中</span>
          </div>
          <div className="metric">
            <span>Energy / oil</span>
            <span className="amber">通脹風險</span>
          </div>
          <div className="metric">
            <span>IBM / software</span>
            <span className="red">爆雷</span>
          </div>
          <div className="metric">
            <span>Crypto</span>
            <span className="green">ETH 領彈</span>
          </div>
          <h2 style={{ marginTop: 15 }}>操作重點</h2>
          <ul>
            <li>先睇 S&P 500 7,550、SOXX $580 能否企穩。</li>
            <li>Brent $85、10Y 4.65%、VIX 18 是降風險警號。</li>
            <li>科技要分 chip/memory 受惠與 enterprise software 受壓。</li>
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
          。指數採 AP/CNBC 收市口徑，Reuters/Yahoo 對 Dow/S&P
          有極小差異已在完整版說明；VIX 採 CNBC/Cboe 4:15pm quote；sector ETF
          與重點股票採 Exa market snapshots 7/14 close 並用 CNBC/Reuters
          敘事交叉核對；macro 採 BLS 與 Reuters/CNA；Crypto 採 Binance data-api
          2026-07-14 20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
