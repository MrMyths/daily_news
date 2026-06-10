import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "S&P 500 -0.26% 至 7,386.65、Nasdaq -0.97% 至 25,678.82；Dow +0.17% 至 50,872.11，屬科技拖累、舊經濟接力的 mixed close。",
  "半導體週一急彈後熄火：SMH -1.20%、SOXX -1.63%；MRVL -7.61%、ARM -6.22%、QCOM -5.67%，AI beta 未能延續修復。",
  "板塊輪動明顯：XLRE +2.13%、XLB +1.62%、XLV +1.26%、XLP +1.24%，但 XLK -1.85%、XLE -1.61%。",
  "宏觀稍紓緩但未放鬆：10Y 約 4.53%-4.54%；WTI 約 $88.20-$88.45、Brent 約 $91-$91.45，油價跌約 3%。",
  "FedWatch 顯示 6 月維持 3.50%-3.75% 機率 96.5%；市場焦點轉向 6/10 CPI、Oracle earnings、6/12 SpaceX IPO。",
  "Crypto（Binance Vision 4:00pm ET 1m close）：BTC $62,076.01、ETH $1,658.61、SOL $65.48，較 6/8 同口徑跌約 1.6%-3.0%。",
];

const sources = [
  [
    "CNBC",
    "https://www.cnbc.com/2026/06/08/stock-market-today-live-updates.html",
  ],
  [
    "Investopedia",
    "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-06092026-11993707",
  ],
  [
    "AA",
    "https://www.aa.com.tr/en/economy/us-stocks-end-mostly-lower-as-chip-rebound-fizzles-oil-retreat-supports-cyclical-shares/3961953",
  ],
  ["FedWatch", "https://growbeansprout.com/tools/fedwatch"],
  [
    "Treasury",
    "https://hk.marketscreener.com/news/treasuries-yields-slip-as-traders-await-inflation-data-ce7f5cdad88dff27",
  ],
  ["Yahoo Finance", "https://finance.yahoo.com/"],
  ["Binance Vision", "https://data.binance.vision/"],
];

export default function USCloseBriefOnePage20260609() {
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
        <div className="sub">2026-06-09 收市｜科技回吐拖低大盤，舊經濟輪動接力</div>
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
            <span className="amber">分化</span>
          </div>
          <div className="metric">
            <span>市場寬度</span>
            <span className="amber">比指數好</span>
          </div>
          <div className="metric">
            <span>AI / 半導體</span>
            <span className="red">回吐</span>
          </div>
          <div className="metric">
            <span>利率風險</span>
            <span className="amber">仍高</span>
          </div>
          <div className="metric">
            <span>油價/通脹</span>
            <span className="green">暫降溫</span>
          </div>
          <div className="metric">
            <span>Crypto beta</span>
            <span className="red">偏弱</span>
          </div>
          <h2 style={{ marginTop: 18 }}>操作重點</h2>
          <ul>
            <li>S&P 500 重上 7,400 才算企穩；失 7,350 要小心轉弱。</li>
            <li>Nasdaq 守 25,600、SOXX/SMH 止跌，科技先有修復條件。</li>
            <li>CPI 高過預期或 10Y 回到 4.6% 以上，先降高 beta 集中度。</li>
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
          。指數收市採 CNBC/AA/Yahoo 一致口徑；板塊採 Yahoo ETF
          proxy；債息採 MarketScreener/Trading Economics 交叉口徑；油金因合約及時間點有差異，列範圍；
          Crypto 採 Binance Vision 2026-06-09 20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
