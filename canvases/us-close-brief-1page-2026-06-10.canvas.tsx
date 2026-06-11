import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const bullets = [
  "三大指數同步急跌：S&P 500 -1.62% 至 7,266.99、Nasdaq -1.98% 至 25,169.50、Dow -953 點 / -1.87% 至 49,918.78，Dow 失守 50,000。",
  "跌市主線是「油價/地緣政治 + CPI + AI 估值」：CPI headline +4.2% YoY，WTI/Brent 因 Iran/Hormuz 風險重上約 $90/$93-$95。",
  "半導體仍是最弱一環：SOXX 跌逾 3%、PHLX Semi 約 -3.6%，SMCI -27.98%，NVDA/AVGO 等 AI leaders 受壓。",
  "防守與能源相對跑贏：XLE +0.92%、XLP 約 +1.65%，KO +2.77%、WMT +1.44%；資金明顯由高 beta 轉去低波動。",
  "宏觀未到失控但不舒服：core CPI MoM +0.2% 低於預期，FedWatch 仍顯示 6 月維持利率機率約 96.7%-98.2%，但 10Y 仍在 4.5% 附近。",
  "Crypto 非精準 Binance 4:00pm ET：Binance Vision 日檔未能取得，採 CoinStats/CoinDesk 近似；BTC 約 $61.5k、ETH 約 $1.63k、SOL 約 $64。",
];

const sources = [
  [
    "CNBC",
    "https://www.cnbc.com/2026/06/09/stock-market-today-live-updates.html",
  ],
  [
    "Investopedia",
    "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-06102026-11994618",
  ],
  ["BLS CPI", "https://www.bls.gov/news.release/cpi.htm"],
  ["Fed H.15", "https://www.federalreserve.gov/releases/h15/"],
  ["FedWatch", "https://www.investing.com/central-banks/fed-rate-monitor"],
  ["Yahoo sectors", "https://uk.finance.yahoo.com/quotes/XLE,XLF,XLC,XLRE,XLI,XLK,XLB,XLY,XLV,XLU/view/fv/"],
  ["CoinStats", "https://coinstats.app/ai/a/crypto-news-update-10-June-2026"],
  ["CoinDesk", "https://www.coindesk.com/markets/2026/06/10/bitcoin-and-gold-fall-together-as-a-rate-hike-bet-hits-every-hedge"],
];

export default function USCloseBriefOnePage20260610() {
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
          background: linear-gradient(135deg, #111827 0%, #7f1d1d 58%, #b45309 100%);
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
        h2 { margin: 0 0 12px; color: #9a3412; font-size: 22px; }
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
          2026-06-10 收市｜油價與通脹陰影回來，AI 股再被去風險
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
            <span className="red">全面轉弱</span>
          </div>
          <div className="metric">
            <span>市場寬度</span>
            <span className="red">廣泛 risk-off</span>
          </div>
          <div className="metric">
            <span>AI / 半導體</span>
            <span className="red">去風險</span>
          </div>
          <div className="metric">
            <span>利率風險</span>
            <span className="amber">仍高</span>
          </div>
          <div className="metric">
            <span>油價/通脹</span>
            <span className="red">升溫</span>
          </div>
          <div className="metric">
            <span>防守板塊</span>
            <span className="green">相對跑贏</span>
          </div>
          <h2 style={{ marginTop: 18 }}>操作重點</h2>
          <ul>
            <li>S&P 500 先守 7,250；收復 7,350 才算止血。</li>
            <li>Nasdaq 25,000 是心理位；SOXX/SMH 未止跌前不要急追 AI beta。</li>
            <li>若 WTI 企 $95、10Y 升穿 4.60%、VIX 升穿 25，先降高 beta 集中度。</li>
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
          。指數收市採 CNBC/Investopedia/Motley Fool 一致口徑；CPI 採 BLS；
          債息官方 H.15 最新列至 6/9，6/10 採市場區間；板塊 ETF 與 S&P GICS
          行業口徑有差異；Crypto 因 Binance Vision 日檔未能取得，採 CoinStats/CoinDesk
          近似，非精準 Binance 4:00pm ET close。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
