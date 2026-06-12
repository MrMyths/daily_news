import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股由前日急跌後大反彈：S&P 500 +1.75% 至 7,394.30、Nasdaq +2.54% 至 25,809.66、Dow +929.97 點 / +1.86% 至 50,848.75。",
  "升市主線是「Iran 風險降溫 + 油價回落 + 債息下跌 + 半導體 short-covering」；VIX 由 22.22 回落至 19.44。",
  "半導體最強：SOXX +8.39%、PHLX Semi 約 +7.9%，MU +11.66%、AMD +7.97%、NVDA +2.22%。",
  "宏觀未完全安全：BLS PPI +1.1% MoM / +6.5% YoY，FedWatch 仍顯示 6 月 hold 約 96.5%，但下半年加息風險未消失。",
  "板塊明顯 risk-on：XLK +3.73%、XLI +3.24%、XLY +2.48%；能源 XLE -1.94%、防守消費 XLP -0.26% 跑輸。",
  "Crypto 採 Binance Vision 2026-06-11 20:00 UTC 1m close：BTC $63,557.99、ETH $1,679.43、SOL $66.85。",
];

const sources = [
  [
    "CNBC",
    "https://www.cnbc.com/2026/06/10/stock-market-today-live-updates.html",
  ],
  [
    "Reuters/BT",
    "https://www.businesstimes.com.sg/companies-markets/capital-markets-currencies/wall-street-indexes-jump-trump-says-strikes-against-iran-cancelled",
  ],
  [
    "Motley Fool",
    "https://www.fool.com/coverage/stock-market-today/2026/06/11/stock-market-today-june-11-micron-intel-and-nvidia-lead-rebound-and-spacex-ipo-approaches/",
  ],
  ["BLS PPI", "https://www.bls.gov/news.release/ppi.htm"],
  [
    "CNBC Yields",
    "https://www.cnbc.com/2026/06/11/treasury-yields-flat-as-investors-monitor-inflation-data-us-strikes-in-iran.html",
  ],
  ["FedWatch", "https://www.investing.com/central-banks/fed-rate-monitor"],
  [
    "CME WTI",
    "https://www.cmegroup.com/markets/energy/crude-oil/light-sweet-crude.quotes.html",
  ],
  ["Binance Vision", "https://github.com/binance/binance-public-data"],
];

export default function USCloseBriefOnePage20260611() {
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
          background: linear-gradient(135deg, #0f172a 0%, #14532d 58%, #0369a1 100%);
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
        h2 { margin: 0 0 12px; color: #047857; font-size: 22px; }
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
        <div className="sub">
          2026-06-11 收市｜Iran 風險降溫，半導體帶住大市反彈
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
            <span>大市趨勢</span>
            <span className="green">強反彈</span>
          </div>
          <div className="metric">
            <span>市場寬度</span>
            <span className="green">明顯改善</span>
          </div>
          <div className="metric">
            <span>AI / 半導體</span>
            <span className="green">領漲</span>
          </div>
          <div className="metric">
            <span>利率風險</span>
            <span className="amber">暫降溫</span>
          </div>
          <div className="metric">
            <span>油價/通脹</span>
            <span className="amber">未解除</span>
          </div>
          <div className="metric">
            <span>防守板塊</span>
            <span className="red">跑輸</span>
          </div>
          <h2 style={{ marginTop: 18 }}>操作重點</h2>
          <ul>
            <li>S&P 500 先看 7,400 能否企穩；失 7,300 代表反彈質素轉差。</li>
            <li>
              SOXX 要守 560、挑戰 600；半導體若續強，Nasdaq 才有機會攻 26,000。
            </li>
            <li>
              若 WTI 重上 $90-$95、10Y 重上 4.55%、VIX 重上 22，先減高 beta。
            </li>
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
          。指數收市採 CNBC、Reuters 轉載、Motley Fool 與 Yahoo
          日線一致口徑；PPI 採 BLS 官方；債息採 CNBC/Yahoo/MarketScreener
          交叉；FedWatch 最新可得更新為 6/10 08:05 ET；Crypto 採 Binance Vision
          2026-06-11 20:00 UTC 1m close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
