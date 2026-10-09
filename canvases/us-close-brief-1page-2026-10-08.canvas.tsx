import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股分化收市：Dow 51,231.64（+0.10%）微升；S&P 500 7,765.36（-0.47%）、Nasdaq 27,193.34（-1.25%）連跌；Russell 2,794.13（+0.03%）近乎平收。",
  "主線係油價急升 + AI/晶片回吐：Reuters 指 Brent +4.1% 至 $104.28、WTI +3.6% 至 $91.49；chip stocks 約 -3.4%，SMH -2.84%。",
  "板塊紅綠燈：Energy / XLE +2.97%、Staples / XLP +2.11%、Financials / XLF +0.89% 撐市；Technology / XLK -1.79% 最弱。",
  "債息先升後跌：CNBC 指 10Y 約 5.229%、30Y 約 5.602%；$22B 30Y auction indirect bidders 72.3%，需求尚可，令估值壓力無再惡化。",
  "Fed 仍偏緊但 10 月未必郁：Waller 指仍需更多加息但可彈性；FedWatch 類口徑顯示 10 月加息約 18.3%、hold 約 81.7%，12 月加息仍約七成。",
  "Crypto（Binance data API 10/08 20:00 UTC）：BTC $81,808.51（-1.97%）、ETH $2,466.63（-4.09%）、SOL $109.23（-5.74%）。",
];

const metrics = [
  ["S&P 500 / Nasdaq", "7,765.36 -0.47% / 27,193.34 -1.25%", "red"],
  ["Dow / Russell", "51,231.64 +0.10% / 2,794.13 +0.03%", "green"],
  ["VIX* / 10Y", "15.41* / 5.231%", "amber"],
  ["XLE / XLP / XLF", "+2.97% / +2.11% / +0.89%", "green"],
  ["XLK / SMH", "-1.79% / -2.84%", "red"],
  ["Brent / WTI", "$104.28 +4.1% / $91.49 +3.6%", "green"],
  ["Gold futures / DXY", "$4,158.30 +0.43% / 102.10 -0.13%", "amber"],
  ["BTC / ETH / SOL", "-1.97% / -4.09% / -5.74%", "red"],
];

const sources = [
  [
    "AP close",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-4499d3b2906917ed3d8670095bf1c321",
  ],
  [
    "Reuters close",
    "https://www.businesstimes.com.sg/companies-markets/capital-markets-currencies/us-stocks-sp-500-nasdaq-end-lower-crude-prices-jump-chip-stocks-weigh",
  ],
  [
    "CNBC yields",
    "https://www.cnbc.com/2026/10/08/us-treasury-yields-30-year-bond-auction.html",
  ],
  [
    "Reuters oil",
    "https://live.euronext.com/en/financial-news/oil-jumps-5-then-pares-gains-after-trump-says-no-attack-iran-month",
  ],
  [
    "CNBC movers",
    "https://www.cnbc.com/2026/10/08/stocks-making-the-biggest-moves-midday-cmg-sbux-skyd-mpc.html",
  ],
  [
    "CME FedWatch",
    "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  ],
  [
    "Cboe VIX",
    "https://cdn.cboe.com/api/global/us_indices/daily_prices/VIX_History.csv",
  ],
  ["Binance data API", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261008() {
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
          2026-10-08 收市（香港時間 2026-10-09 週五更新）｜油價急升撐能源；AI /
          晶片回吐壓 Nasdaq
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
            <li>唔好追 AI beta：等 SMH / NVDA / AVGO 止跌。</li>
            <li>留意 Brent $105 同 10Y 5.30%，兩者再升會壓估值。</li>
            <li>BTC 未重上 $82k 前，crypto / miners 先當弱勢處理。</li>
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
          。指數採 AP / Reuters 終值；sector 採 Reuters / CNBC / Swingfolio
          摘要，缺口不硬填；10Y / 30Y 採 CNBC 與 Yahoo close；油價採 Reuters
          settle；VIX 因 Cboe 官方 CSV 執行時只更新至 10/07，10/08 暫用 Yahoo /
          Swingfolio 15.41；Crypto 採 Binance data API 20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
