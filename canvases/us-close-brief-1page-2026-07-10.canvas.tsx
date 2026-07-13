import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股溫和收高：Dow +149.60 至 52,637.01；S&P 500 +0.42% 至 7,575.39；Nasdaq +0.29% 至 26,281.61。",
  "升市其實好揀擇：Russell 2000 -0.49%，SOXX 約 +0.05%，Health Care -0.82%；不是全面 risk-on。",
  "全日焦點是 AI：SK Hynix ADR 定價 $149、首日收 $168.01（+12.8%），NVDA 約 +4%，META $669.21（+5.97%）。",
  "宏觀：10Y 約 4.56%、VIX 15.03；Brent $76.01、WTI $71.41 即日回落，但全週油價仍升。",
  "FedWatch 仍偏 hawkish：7 月 hold 約 74.9%；9 月 +25bp 約 51.1%、+50bp 約 13.1%，下週 CPI 是關鍵。",
  "Crypto 採 Binance 2026-07-10 20:00 UTC 1m close：BTC $63,881.61、ETH $1,791.99、SOL $77.87。",
];

const sources = [
  [
    "Barchart/AP",
    "https://www.barchart.com/story/news/3230581/how-major-us-stock-indexes-fared-friday-7-10-2026",
  ],
  [
    "CNBC",
    "https://www.cnbc.com/2026/07/09/stock-market-today-live-updates.html",
  ],
  ["Cboe VIX", "https://www.cboe.com/en/tradable-products/vix/"],
  ["Daily Market Updates", "https://dailymarketupdates.com/markets"],
  [
    "Advisor Perspectives",
    "https://www.advisorperspectives.com/dshort/updates/2026/07/10/treasury-yields-snapshot-july-10-2026",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260710() {
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
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 56%, #0f766e 100%);
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
        h2 { margin: 0 0 10px; color: #0f766e; font-size: 21px; }
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
          2026-07-10 收市｜AI 熱度頂住大市，SK Hynix IPO 成焦點
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
            <span className="green">近高位</span>
          </div>
          <div className="metric">
            <span>Nasdaq / AI beta</span>
            <span className="green">靠少數強股</span>
          </div>
          <div className="metric">
            <span>Russell 2000</span>
            <span className="red">breadth 弱</span>
          </div>
          <div className="metric">
            <span>SOXX / semis</span>
            <span className="amber">分化</span>
          </div>
          <div className="metric">
            <span>10Y / Fed pricing</span>
            <span className="amber">仍高</span>
          </div>
          <div className="metric">
            <span>Crypto</span>
            <span className="green">ETH 跑出</span>
          </div>
          <h2 style={{ marginTop: 15 }}>操作重點</h2>
          <ul>
            <li>買強不買弱：META/NVDA/SK Hynix 主線較清楚。</li>
            <li>風控線：10Y 4.60%、Brent $80、SOXX $580、VIX 16。</li>
            <li>下週 CPI + 銀行業績決定反彈能否擴散。</li>
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
          。指數採 AP/Barchart、CNBC、Motley Fool 一致收市口徑；VIX 採
          Cboe；sector ETF 因 Yahoo chart API 本次 429，採 Daily Market Updates
          / The Trading Tools 收市表；Treasury 採 Advisor
          Perspectives/CNBC；Crypto 採 Binance data-api 2026-07-10 20:00 UTC 1m
          close。MU、gold 等來源有差異，完整版已標示差異並避免過度精確解讀。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
