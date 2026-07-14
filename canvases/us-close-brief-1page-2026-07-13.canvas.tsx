import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股轉弱：Dow -138.37 至 52,498.64；S&P 500 -0.79% 至 7,515.34；Nasdaq -1.55% 至 25,873.18。",
  "主因是油價 shock：Reuters 指 WTI +9.4% 至 $78.14、Brent +9.6% 至 $83.30，市場重新交易通脹與加息風險。",
  "科技/晶片急回吐：XLK -2.42%、SOXX -4.77%；NVDA -3.52%、AMD -4.21%、MU -4.32%，SK Hynix ADR 跌約 9.3%。",
  "能源跑贏但不是全面好事：XLE +3.01%，同時 10Y 升至約 4.62%、DXY 約 101.3、VIX 升至 17.16。",
  "明日焦點：CPI、JPM/GS/BAC 業績、Fed Chair Warsh 聽證；Brent $85、10Y 4.70%、SOXX $550 是風控位。",
  "Crypto 採 Binance 2026-07-13 20:00 UTC 1m close：BTC $62,258.62、ETH $1,774.19、SOL $75.17。",
];

const sources = [
  [
    "AP",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-84784dd049267a58ac547d8a1c7fcd02",
  ],
  [
    "CNBC",
    "https://www.cnbc.com/2026/07/12/stock-market-today-live-updates.html",
  ],
  [
    "Reuters/Yahoo",
    "https://sg.finance.yahoo.com/news/shares-slip-asia-oil-jumps-002452563.html",
  ],
  [
    "Business Times/Reuters",
    "https://www.businesstimes.com.sg/companies-markets/capital-markets-currencies/us-stocks-wall-street-ends-lower-iran-tensions-dampen-risk-appetite-chipmakers-drop",
  ],
  ["Cboe/CNBC VIX", "https://www.cnbc.com/quotes/.VIX"],
  ["CME FedWatch", "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html"],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260713() {
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
          background: linear-gradient(135deg, #111827 0%, #7f1d1d 56%, #92400e 100%);
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
        h2 { margin: 0 0 10px; color: #b45309; font-size: 21px; }
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
          2026-07-13 收市｜油價急升嚇窒科技股，AI 晶片急回吐
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
            <span className="amber">守 7,500</span>
          </div>
          <div className="metric">
            <span>Nasdaq / AI beta</span>
            <span className="red">明顯轉弱</span>
          </div>
          <div className="metric">
            <span>SOXX / semis</span>
            <span className="red">急跌</span>
          </div>
          <div className="metric">
            <span>Energy / XLE</span>
            <span className="green">油價 hedge</span>
          </div>
          <div className="metric">
            <span>10Y / Fed pricing</span>
            <span className="red">偏 hawkish</span>
          </div>
          <div className="metric">
            <span>Crypto</span>
            <span className="amber">SOL 較弱</span>
          </div>
          <h2 style={{ marginTop: 15 }}>操作重點</h2>
          <ul>
            <li>先等 S&P 500 7,500、SOXX $550 是否守得住。</li>
            <li>Brent $85、10Y 4.70%、VIX 20 是降風險警號。</li>
            <li>CPI + 銀行業績會決定跌市是震倉還是轉勢。</li>
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
          。指數採 AP/CNBC/Reuters 一致收市口徑；VIX 採 CNBC/Cboe quote；
          sector ETF 與重點股票採 Yahoo Finance chart 7/13 日線並用 Reuters/CNBC
          敘事交叉核對；oil 採 Reuters 結算口徑；FedWatch 機率因即時變動，採
          CNBC/CME 與 Bloomberg/Financial Post 區間描述；Crypto 採 Binance
          data-api 2026-07-13 20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
