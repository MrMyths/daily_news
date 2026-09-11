import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股連跌第 4 日：Dow 52,064.10（-0.60%）、S&P 500 7,591.70（-0.58%）、Nasdaq 26,081.72（-0.65%）、Russell 2000 2,890.95（-1.04%）。",
  "主因係油價急升 + PPI 黏住 + 美債息抽高：WTI $102.48、Brent $107.63；10Y 約 4.96%、30Y 約 5.37%。",
  "FedWatch 重定價：CME 引用口徑約 71.3% 押注下週加 25bp；不同時點報道介乎約 61%-74%，CPI 仍是關鍵變數。",
  "板塊紅綠燈：XLE +0.83% 一枝獨秀；XLI -1.51%、XLY -1.34%、XLRE -1.12%、XLU -1.17% 弱；SOXX 約 -2.4% 至 -2.7%。",
  "個股分化：Apple $326.57（約 +3.56%）因 iPhone Duo 逆市升；Oracle $152.94（約 -5.38%）因 AI capex/FCF 憂慮急跌。",
  "Crypto 採 Binance Vision 2026-09-10 20:00 UTC：BTC $77,180.01（-1.37%）、ETH $2,463.62（-0.10%）、SOL $99.83（-2.48%）。",
];

const metrics = [
  ["S&P 500 / Nasdaq", "7,591.70 -0.58% / 26,081.72 -0.65%", "red"],
  ["Dow / Russell", "52,064.10 -0.60% / 2,890.95 -1.04%", "red"],
  ["VIX", "17.32（盤中約 18.11）", "amber"],
  ["XLE / SOXX", "+0.83% / 約 -2.4% 至 -2.7%", "amber"],
  ["2Y / 10Y / 30Y", "4.57%-4.58% / 4.96% / 5.37%", "red"],
  ["WTI / Brent", "$102.48 / $107.63", "red"],
  ["Fed pricing", "9月 +25bp 約 71.3%（CME 引用）", "red"],
  ["BTC / ETH / SOL", "-1.37% / -0.10% / -2.48%", "red"],
];

const sources = [
  [
    "AP/WTOP close",
    "https://wtop.com/national/2026/09/how-major-us-stock-indexes-fared-thursday-9-10-2026/",
  ],
  [
    "Reuters close",
    "https://www.marketscreener.com/news/s-p-500-ends-down-as-treasury-yields-rise-and-traders-fret-about-inflation-ce785bded08bff27",
  ],
  [
    "CNBC yields",
    "https://www.cnbc.com/2026/09/10/us-treasurys-bonds-yield.html",
  ],
  [
    "Newsquawk oil/yields",
    "https://www.newsquawk.com/headlines/us-market-wrap-stocks-and-treasuries-sold-while-oil-surges-as-middle-east-tensions-escalate",
  ],
  [
    "ETF Action sectors",
    "https://www.etfaction.com/oil-spikes-on-iran-strikes-as-equities-slide/",
  ],
  [
    "CME FedWatch",
    "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  ],
  [
    "Apple Reuters",
    "https://www.reuters.com/business/retail-consumer/apple-expected-unveil-first-folding-phone-with-new-ceo-ternus-command-2026-09-09/",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260910() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          min-height: 760px;
          margin: 0 auto;
          padding: 26px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.23;
        }
        .hero {
          background: linear-gradient(135deg, #7f1d1d 0%, #b91c1c 54%, #111827 100%);
          border-radius: 22px;
          padding: 22px;
          color: white;
        }
        h1 { margin: 0 0 8px; font-size: 37px; line-height: 1.04; }
        .sub { font-size: 16px; opacity: 0.92; }
        .grid { display: grid; grid-template-columns: 1.27fr 0.73fr; gap: 12px; margin-top: 12px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 12px;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
        }
        h2 { margin: 0 0 7px; color: #b91c1c; font-size: 18px; }
        ul { margin: 0; padding-left: 17px; }
        li { margin: 3.9px 0; }
        .metric { display: grid; grid-template-columns: 0.78fr 1fr; gap: 7px; padding: 4.8px 0; border-bottom: 1px solid #e5e7eb; font-size: 12.35px; }
        .green { color: #047857; font-weight: 800; }
        .red { color: #b91c1c; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { font-size: 9.85px; color: #64748b; }
        a { color: #1d4ed8; text-decoration: none; }
        @media print { .sheet { width: auto; min-height: auto; box-shadow: none; } }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜1頁版</h1>
        <div className="sub">
          2026-09-10 收市｜油價、PPI、美債息三重壓力；Apple 逆市升，semis
          與小型股偏弱
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
          <h2 style={{ marginTop: 8 }}>操作重點</h2>
          <ul>
            <li>CPI 前先睇 10Y 有無回落；指數反彈未必等於風險解除。</li>
            <li>能源有 momentum，但高油價對大市是通脹壓力。</li>
            <li>減少 high beta、semis、small caps 和 crypto 槓桿。</li>
          </ul>
        </div>
      </section>
      <section className="card" style={{ marginTop: 12 }}>
        <h2>來源與口徑</h2>
        <p className="small">
          主要來源：
          {sources.map(([name, url], index) => (
            <React.Fragment key={url}>
              {index > 0 ? " / " : ""}
              <a href={url}>{name}</a>
            </React.Fragment>
          ))}
          。指數採 AP/MarketWatch 並與 Reuters 交叉核對（S&P 500 差 0.05
          點）；債息採 Kiplinger/Newsquawk 收市口徑；油價採 Newsquawk
          結算；板塊採 ETF Action/StockTi；SOXX 和 FedWatch
          因時點差異以區間/約數表示；Crypto 採 Binance Vision 2026-09-10 20:00
          UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
