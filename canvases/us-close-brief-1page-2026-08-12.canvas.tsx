import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股收市偏強但分化：S&P 500 +0.26% 至 7,748.50，Nasdaq +0.54%，Dow -0.04%；AI infrastructure 是主力。",
  "BLS 7 月 CPI 符合預期：headline +0.1% m/m、+3.4% y/y；core +0.2% m/m、+2.5% y/y，短線降低 9 月加息壓力。",
  "債息未全面鬆：CNBC 報 2Y 4.203%、10Y 約 4.69%、30Y 5.254%；房屋鏈仍受壓，DHI -3.30%、PHM -2.46%。",
  "板塊紅綠燈：SOXX +2.32%、XLK +1.49% 跑出；XLB -1.24%、XLY -1.13%、XLC -0.90% 跑輸，升市集中度高。",
  "焦點股：CRWV +19.28%、SMCI +19.02%、NVDA +3.03%、AMAT +4.29%；CSCO regular +2.86%，但業績後盤後 sell-the-news。",
  "Crypto 採 Binance Vision 2026-08-12 20:00 UTC 1m close：BTC $63,447.99（-0.26%）、ETH $1,879.61（-0.17%）、SOL $75.77（-0.01%）。",
];

const metrics = [
  ["大市 / S&P 500", "近高位", "green"],
  ["Nasdaq / AI beta", "偏強", "green"],
  ["SOXX / 半導體", "最強", "green"],
  ["FedWatch", "40%-45% hike", "amber"],
  ["10Y / 30Y yields", "仍高", "amber"],
  ["Crypto", "無跟升", "amber"],
];

const sources = [
  [
    "AP indexes",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-c2b9200bd737220ef848a37ffea21f95",
  ],
  [
    "AP market story",
    "https://apnews.com/article/stocks-markets-rates-trump-iran-chips-db541ced9f928f993bd3a17958a3deaa",
  ],
  ["BLS CPI", "https://www.bls.gov/news.Release/cpi.Nr0.Htm"],
  [
    "CNBC yields",
    "https://www.cnbc.com/2026/08/12/treasury-yields-inflation-cpi-data.html",
  ],
  [
    "Reuters/CNA AI",
    "https://www.channelnewsasia.com/business/coreweave-super-micro-climb-signs-sustained-ai-buildout-6314576",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260812() {
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
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 54%, #14532d 100%);
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
          2026-08-12 收市｜CPI 符合預期，AI infrastructure 撐起 Nasdaq
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
            <li>AI hardware 強過 platform；短線追強要看 SOXX 能否守 $546。</li>
            <li>SPX 要突破，10Y 最好留在 4.70% 以下；否則估值壓力返來。</li>
            <li>PPI、AMAT 業績與 Nvidia 8/26 是下一批確認位。</li>
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
          。指數採 AP/CNBC 收市口徑；ETF/個股採 Yahoo Finance chart
          data；FedWatch 採 AP 約 40% 並列其他 CME FedWatch
          轉述約 45% 的時間差；Crypto 採 Binance Vision public data 2026-08-12
          20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
