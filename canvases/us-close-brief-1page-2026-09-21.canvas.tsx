import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股週一急升：S&P 500 7,764.70（+1.49%）、Nasdaq 27,122.09（+2.26%，創收盤新高）、Dow 52,048.83（+0.71%）、Russell 2,875.36（+0.52%）。",
  "升市主線係 AI / 晶片：PHLX Semi +4.3%，AMD 約 +10% 並觸及 $1tn 市值，Intel +12.2%、Arm +17%、QCOM 約 +9%。",
  "Macro 由壓力變助攻：10Y yield 跌回約 4.95%-4.96%，Brent $100.34（-3.4%）、WTI $95.78（-4.5%）。",
  "板塊：Communication Services +4.16%、Technology +2.4% 最強；Energy 約 -2.5% 最弱，Materials / basic materials 落後。",
  "Fed 未鬆：CME FedWatch 顯示 10月再加25bp機率約56.5%，所以今次是 oil/yield relief，不是減息交易。",
  "Crypto（Binance Vision 9/21 20:00 UTC）：BTC $86,558.76（+6.76%）、ETH $2,764.58（+5.09%）、SOL $118.34（+3.98%）。",
];

const metrics = [
  ["S&P 500 / Nasdaq", "7,764.70 +1.49% / 27,122.09 +2.26%", "green"],
  ["Dow / Russell", "52,048.83 +0.71% / 2,875.36 +0.52%", "green"],
  ["VIX / 10Y", "14.87 / ~4.95%-4.96%", "amber"],
  ["SOX / Tech", "+4.3% / +2.4%", "green"],
  ["Comm Services / META", "+4.16% / +11.4%", "green"],
  ["Energy / Oil", "Energy ~-2.5%; WTI -4.5%", "red"],
  ["DXY / Gold", "100.428 +0.223% / spot ~$4,340.51", "amber"],
  ["BTC / ETH / SOL", "+6.76% / +5.09% / +3.98%", "green"],
];

const sources = [
  [
    "AP close",
    "https://www.seattletimes.com/business/how-major-us-stock-indexes-fared-monday-9-21-2026/",
  ],
  [
    "Reuters close",
    "https://sa.marketscreener.com/news/wall-street-ends-sharply-higher-as-ai-optimism-reignites-and-treasury-yields-retreat-ce785adbd18bf627",
  ],
  [
    "Reuters intraday/breadth",
    "https://uk.marketscreener.com/news/wall-st-rises-on-ai-gains-as-oil-slides-treasury-yields-retreat-ce785adbdf8ef523",
  ],
  [
    "MarketWatch oil",
    "https://www.marketwatch.com/story/oil-prices-fall-for-fourth-day-as-supply-concerns-ease-2nd-update-0be75bfa",
  ],
  [
    "Cboe VIX",
    "https://cdn.cboe.com/api/global/us_indices/daily_prices/VIX_History.csv",
  ],
  [
    "CME FedWatch",
    "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  ],
  [
    "CNBC semis",
    "https://www.cnbc.com/2026/09/21/intel-surges-12percent-as-cpu-stocks-rally-heres-whats-driving-the-move.html",
  ],
  ["Binance Vision", "https://data.binance.vision/"],
];

export default function USCloseBriefOnePage20260921() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          min-height: 760px;
          margin: 0 auto;
          padding: 24px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.2;
        }
        .hero {
          background: linear-gradient(135deg, #1e3a8a 0%, #0f766e 54%, #111827 100%);
          border-radius: 22px;
          padding: 20px;
          color: white;
        }
        h1 { margin: 0 0 8px; font-size: 36px; line-height: 1.04; }
        .sub { font-size: 15.5px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.25fr 0.75fr; gap: 11px; margin-top: 11px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 11px;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
        }
        h2 { margin: 0 0 6px; color: #0f766e; font-size: 17px; }
        ul { margin: 0; padding-left: 16px; }
        li { margin: 3.4px 0; }
        .metric { display: grid; grid-template-columns: 0.72fr 1fr; gap: 7px; padding: 4.4px 0; border-bottom: 1px solid #e5e7eb; font-size: 12px; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 9.45px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
        @media print { .sheet { width: auto; min-height: auto; box-shadow: none; } }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-09-21 收市（香港時間 2026-09-22 週二更新）｜Nasdaq 創收盤新高；AI
          晶片急升，油價與債息回落
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
          <h2 style={{ marginTop: 7 }}>操作重點</h2>
          <ul>
            <li>Growth 可跟，但要 S&P 7,700 / Nasdaq 27,000 守得住。</li>
            <li>最強主線：AI semis + META；Energy 暫時避開。</li>
            <li>三個風控開關：Brent $100、10Y 5%、FedWatch 加息機率。</li>
          </ul>
        </div>
      </section>
      <section className="card" style={{ marginTop: 11 }}>
        <h2>來源與口徑</h2>
        <p className="small">
          主要來源：
          {sources.map(([name, url], index) => (
            <React.Fragment key={url}>
              {index > 0 ? " / " : ""}
              <a href={url}>{name}</a>
            </React.Fragment>
          ))}
          。指數採 AP 4:00pm ET 後 close；sector 採 Reuters / MarketScreener /
          CNBC / market summary，未能可靠核對的 ETF close 不硬填；VIX 採 Cboe
          CSV；Crypto 採 Binance Vision 20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
