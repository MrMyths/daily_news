import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股假期後回落：Dow 52,786.07（-1.18%）、S&P 500 7,673.52（-0.58%）、Nasdaq 26,421.41（-0.32%）、Russell 2000 2,960.20（-0.52%）。",
  "核心原因：油價高企 + 強就業 + Fed 加息機率約 58%-60%，令 10Y 債息靠近 4.8%，估值壓力返嚟。",
  "AI trade 分化好明顯：SOXX +1.64%、INTC +9.05%、AMD +5.90%、QCOM +3.17%；但 CRM、NOW、INTU 受 AI 軟件取代憂慮拖累。",
  "板塊紅綠燈：XLE +1.11%、XLU +0.86%、XLK +0.32% 較硬；XLV -2.52%、XLF -1.38%、XLB -0.95% 最弱。",
  "焦點股：AMGN -10.08% 拖累 Dow；TSLA +3.98% 逆市跑出；AAPL -1.17%、MSFT -1.15%、NVDA -2.01%。",
  "Crypto 採 Binance Vision 2026-09-08 20:00 UTC：BTC $78,462.00（較 9/4 20:00 UTC -1.67%）、ETH $2,483.94（+1.11%）、SOL $103.22（+1.43%）。",
];

const metrics = [
  ["S&P 500", "7,673.52 / -0.58%", "red"],
  ["Nasdaq", "26,421.41 / -0.32%", "red"],
  ["Dow", "52,786.07 / -1.18%", "red"],
  ["Russell / VIX", "-0.52% / 15.72", "amber"],
  ["SOXX / XLE / XLU", "+1.64% / +1.11% / +0.86%", "green"],
  ["XLV / XLF / XLB", "-2.52% / -1.38% / -0.95%", "red"],
  ["10Y / 30Y / DXY", "4.806% / 5.264% / 約 98.8-99.0", "amber"],
  ["Fed pricing", "9月加息約 58%-60%", "amber"],
  ["BTC / ETH / SOL", "-1.67% / +1.11% / +1.43%", "amber"],
];

const sources = [
  [
    "Reuters close",
    "https://ca.marketscreener.com/news/s-p-500-falls-as-ai-worries-hit-software-makers-ce785bd8d08bf22c",
  ],
  [
    "Investing close",
    "https://www.investing.com/news/stock-market-news/us-stocks-lower-at-close-of-trade-dow-jones-industrial-average-down-117-4892417",
  ],
  ["BLS jobs", "https://www.bls.gov/news.release/empsit.nr0.htm"],
  [
    "CNBC yields",
    "https://www.cnbc.com/2026/09/08/us-treasury-yields-bonds.html",
  ],
  [
    "Reuters oil",
    "https://www.reuters.com/business/energy/oil-rises-risks-prolonged-mideast-conflict-heighten-supply-worries-2026-09-08/",
  ],
  [
    "Reuters QCOM/AMZN",
    "https://www.reuters.com/technology/qualcomm-amazon-develop-custom-chips-ai-data-centers-2026-09-08/",
  ],
  ["Yahoo Finance", "https://finance.yahoo.com/quote/%5EGSPC/history/"],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260908() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          min-height: 760px;
          margin: 0 auto;
          padding: 30px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.25;
        }
        .hero {
          background: linear-gradient(135deg, #7f1d1d 0%, #b91c1c 54%, #111827 100%);
          border-radius: 22px;
          padding: 23px;
          color: white;
        }
        h1 { margin: 0 0 8px; font-size: 38px; line-height: 1.05; }
        .sub { font-size: 16.5px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.3fr 0.7fr; gap: 14px; margin-top: 13px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 14px;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
        }
        h2 { margin: 0 0 8px; color: #b91c1c; font-size: 19px; }
        ul { margin: 0; padding-left: 18px; }
        li { margin: 4.4px 0; }
        .metric { display: grid; grid-template-columns: 0.88fr 1fr; gap: 8px; padding: 5.1px 0; border-bottom: 1px solid #e5e7eb; font-size: 12.9px; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 10.4px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-09-08 收市｜油價與債息夾擊，Dow 領跌；AI hardware 逆市跑出
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
          <h2 style={{ marginTop: 10 }}>操作重點</h2>
          <ul>
            <li>SPX 先看 7,666-7,670 支持，未收回 7,720 前別急追。</li>
            <li>AI hardware 強過 SaaS；SOXX 要第二日確認才加注。</li>
            <li>
              低 VIX 不等於低風險，PPI/CPI 前控制 high beta 和 crypto size。
            </li>
          </ul>
        </div>
      </section>
      <section className="card" style={{ marginTop: 13 }}>
        <h2>來源與口徑</h2>
        <p className="small">
          主要來源：
          {sources.map(([name, url], index) => (
            <React.Fragment key={url}>
              {index > 0 ? " / " : ""}
              <a href={url}>{name}</a>
            </React.Fragment>
          ))}
          。指數與 ETF 採 Yahoo chart final close，並用 Reuters/Investing
          交叉核對；Fed pricing 因截數時間不同以約 58%-60% 表達；VIX 日變動採
          9/4 regular close 作前值，Investing 另有約 +2.8% 口徑。Crypto 採
          Binance Vision 2026-09-08 20:00 UTC 1m close，對比 2026-09-04 20:00
          UTC，因 9/7 Labor Day 美股休市。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
