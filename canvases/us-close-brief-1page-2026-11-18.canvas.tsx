import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股分化：Dow 50,198.17（-1.11%）、S&P 500 7,323.63（-0.23%，連跌第五日）、Nasdaq 24,429.89（+0.42%）；Dow 受 UNH/金融拖累，Nasdaq 靠 AMD/AVGO/AMZN 撐住。",
  "主線：NVDA 業績同指引強，但股份仍跌 2.89%；市場未完全放低 AI 估值、leadership / China risk 同 AI financing 擔憂。",
  "Fed 更鷹：minutes 指幾乎所有官員認為仍需加息，Waller 提 50bp 風險；FedWatch 約 95.4% pricing 12月 +25bp、約 4.6% +50bp。",
  "板塊：XLY +1.79%、XLK +0.34% 領先；XLE -3.27%、XLV -2.20%、XLF -1.14% 最弱，能源受油價跌、醫療受 CMS audits 壓力。",
  "宏觀：10Y 約 5.064%-5.068% 下行、2Y 4.802% 上行；DXY 103.79 創 19個月高，gold -3.24%，WTI $83.26 -3.2%。",
  "Crypto：Binance Vision 2026-11-18 21:00 UTC（4:00pm ET）BTC $62,636.01（-2.19%）、ETH $1,756.04（-2.71%）、SOL $73.12（-0.16%）。",
];

const metrics = [
  [
    "S&P / Dow / Nasdaq",
    "7,323.63 -0.23% / 50,198.17 -1.11% / 24,429.89 +0.42%",
    "red",
  ],
  ["Russell / VIX", "2,714.31 +0.46% / 24.56 -3.53%", "amber"],
  ["10Y / 2Y / 30Y", "5.064%-5.068% / 4.802% / 5.408%", "amber"],
  ["WTI / Brent", "$83.26 -3.2% / $91.95 -1.28%", "red"],
  ["XLY / XLK / XLE", "+1.79% / +0.34% / -3.27%", "amber"],
  ["XLV / XLF", "-2.20% / -1.14%", "red"],
  ["NVDA / AMD / AVGO", "-2.89% / +5.31% / +3.65%", "amber"],
  ["BTC / ETH / SOL", "-2.19% / -2.71% / -0.16%", "red"],
];

const sources = [
  [
    "AP close",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-990749d3d269f7ef05b9f6c089713a58",
  ],
  [
    "Reuters market",
    "https://live.euronext.com/en/financial-news/stocks-slip-eyes-anthropic-and-nvidia-oil-prices-slide",
  ],
  [
    "CNBC yields/Fed",
    "https://www.cnbc.com/2026/11/18/treasury-yields-bonds-fed.html",
  ],
  [
    "Fed minutes",
    "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261118a.htm",
  ],
  [
    "Nvidia IR",
    "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Third-Quarter-Fiscal-2027/default.aspx",
  ],
  [
    "Reuters oil",
    "https://live.euronext.com/en/financial-news/oil-prices-settle-lower-traders-weigh-surplus-supply-outlook",
  ],
  [
    "Anthropic IPO",
    "https://www.anthropic.com/news/anthropic-prices-initial-public-offering",
  ],
  ["Binance Vision", "https://data-api.binance.vision/"],
];

export default function USCloseBriefOnePage20261118() {
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
        .hero { background: #102a43; border-radius: 20px; padding: 20px; color: white; border: 1px solid #243b53; }
        h1 { margin: 0 0 8px; font-size: 30px; line-height: 1.04; }
        .sub { font-size: 15px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.23fr 0.77fr; gap: 11px; margin-top: 11px; }
        .card { background: white; border: 1px solid #e2e8f0; border-radius: 18px; padding: 11px; }
        h2 { margin: 0 0 6px; color: #0f766e; font-size: 17px; }
        ul { margin: 0; padding-left: 16px; }
        li { margin: 3.4px 0; }
        .metric { display: grid; grid-template-columns: 0.64fr 1fr; gap: 7px; padding: 4.4px 0; border-bottom: 1px solid #e5e7eb; font-size: 12px; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 9.25px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
        @media print { .sheet { width: auto; min-height: auto; } }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-11-18 收市（香港時間 2026-11-19 週四更新）｜Dow 跌、S&P
          連跌第五日；Nasdaq 微升但 Fed 鷹派同 AI 疑慮未散
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
            <li>S&P 500 7,300 是即時防線；收復 7,340 先算跌勢放慢。</li>
            <li>NVDA $150、Nasdaq 24,500、VIX 25 是明日三個風險溫度計。</li>
            <li>
              能源/醫療暫避開 falling knife；留意 retail、cybersecurity、AI
              infrastructure winners 有無 follow-through。
            </li>
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
          。指數採 AP / Reuters / Yahoo chart close；ETF/個股因 Yahoo daily
          close 在生成時部分未寫入，採 Yahoo 20:59-21:00 UTC 1分鐘 close
          proxy；Crypto 採 Binance Vision 2026-11-18 21:00 UTC 1m close，對比
          2026-11-17 21:00 UTC。Russell 2000 不同即時來源略有差異，本文採 Yahoo
          chart close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
