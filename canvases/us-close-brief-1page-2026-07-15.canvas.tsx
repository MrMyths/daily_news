import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "美股連升：Dow +150.37 至 52,658.64；S&P 500 +0.38% 至 7,572.40；Nasdaq +0.62% 至 26,269.23。",
  "PPI 意外降溫：BLS 報 June final demand PPI -0.3% m/m、+5.5% y/y，令 7 月 hold 機率升至約 87.8%。",
  "升市靠大型平台科技：Apple 約 +4%，Amazon/Alphabet 約 +3%，Microsoft 近 +3%；但半導體/記憶體回吐。",
  "晶片分化：Micron -8%、AMD 約 -3%、Intel -4%、SMH 跌逾 1%，反映 AI hardware 交易有獲利壓力。",
  "焦點股：PayPal 因 Stripe/Advent $53B+ 收購報道升約 17%-18%；BlackRock/Morgan Stanley 業績 beat。",
  "Crypto 採 Binance 2026-07-15 20:00 UTC 1m close：BTC $64,939.99、ETH $1,923.21、SOL $77.18。",
];

const sources = [
  [
    "AP",
    "https://apnews.com/article/wall-street-stocks-dow-nasdaq-a4f50a9a19d14802cb94b51db7bafba1",
  ],
  [
    "CNBC",
    "https://www.cnbc.com/2026/07/14/stock-market-today-live-updates.html",
  ],
  [
    "BLS PPI",
    "https://www.bls.gov/news.release/archives/ppi_07152026.htm",
  ],
  [
    "Cboe VIX",
    "https://www.cboe.com/tradable-products/vix/",
  ],
  [
    "FedWatch",
    "https://www.investing.com/central-banks/fed-rate-monitor",
  ],
  [
    "Binance Vision",
    "https://github.com/binance/binance-public-data",
  ],
];

export default function USCloseBriefOnePage20260715() {
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
          background: linear-gradient(135deg, #111827 0%, #065f46 56%, #1d4ed8 100%);
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
        h2 { margin: 0 0 10px; color: #047857; font-size: 21px; }
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
          2026-07-15 收市｜PPI 降溫撐市，平台科技升、晶片回吐
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
            <span className="green">守 7,550</span>
          </div>
          <div className="metric">
            <span>VIX / risk appetite</span>
            <span className="green">15.67</span>
          </div>
          <div className="metric">
            <span>Mega-cap tech</span>
            <span className="green">撐市</span>
          </div>
          <div className="metric">
            <span>Semis / memory</span>
            <span className="red">回吐</span>
          </div>
          <div className="metric">
            <span>Oil / Brent</span>
            <span className="amber">$85 風險</span>
          </div>
          <div className="metric">
            <span>Crypto</span>
            <span className="green">ETH 領彈</span>
          </div>
          <h2 style={{ marginTop: 15 }}>操作重點</h2>
          <ul>
            <li>短線看 S&P 500 7,550、Nasdaq 26,200 能否守住。</li>
            <li>SOX/SMH 要止跌，否則升市會太集中在少數 mega-cap。</li>
            <li>Brent $85-$86、10Y 4.65%、VIX 18 是降風險警號。</li>
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
          。指數採 AP/CNBC 最終收市口徑；PPI 採 BLS；VIX 採 Cboe；FedWatch
          採 Investing/CME 口徑；Crypto 採 Binance Vision 2026-07-15 20:00 UTC
          1m close。Yahoo chart API 今次 429，缺可靠收市百分比的板塊不硬填。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
