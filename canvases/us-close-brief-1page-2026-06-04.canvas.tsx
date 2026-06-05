import React from "react";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊用途，不構成任何投資建議、買賣邀請或招攬。投資涉及風險，價格可升可跌，過往表現不代表未來回報。作出任何投資決定前，請自行研究並按需要諮詢持牌專業顧問。";

const rows = [
  ["S&P 500", "7,584.31", "+0.41%", "非科技板塊補位"],
  ["Nasdaq", "26,830.96", "-0.09%", "Broadcom 拖累晶片"],
  ["Dow", "51,561.93", "+1.73%", "創收市新高"],
  ["Russell 2000", "2,935.33", "+1.45%", "小型股反彈"],
  ["VIX", "15.40", "-4.11%", "避險降溫"],
];

const sectors = [
  ["最強", "XLV +3.07%、XLF +2.59%、XLRE +2.05%"],
  ["中性", "XLI +1.21%、XLC +0.92%、XLU +0.53%、XLY +0.45%"],
  ["最弱", "XLK -1.56%、XLP -0.15%、XLB -0.02%"],
];

const crypto = [
  ["BTC", "63,322.65", "2026-06-04 20:00 UTC"],
  ["ETH", "1,768.17", "2026-06-04 20:00 UTC"],
  ["SOL", "68.66", "2026-06-04 20:00 UTC"],
];

export default function USCloseBriefOnePage20260604() {
  return (
    <main className="sheet">
      <style>{`
        .sheet { width: 1120px; min-height: 1580px; margin: 0 auto; padding: 34px; color: #14213d; font-family: Inter, "Noto Sans TC", "Microsoft JhengHei", sans-serif; background: #f7f9fc; }
        .hero { border-radius: 26px; padding: 28px; color: white; background: linear-gradient(135deg, #0f2a43, #2a6f97); }
        .eyebrow { margin: 0 0 8px; font-size: 12px; letter-spacing: .16em; text-transform: uppercase; opacity: .76; }
        h1 { margin: 0; font-size: 34px; line-height: 1.14; }
        h2 { margin: 18px 0 10px; font-size: 18px; color: #0f2a43; }
        p, li, td, th { font-size: 14px; line-height: 1.55; }
        .grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 16px; margin-top: 16px; }
        .card { background: white; border: 1px solid #e6e8ef; border-radius: 18px; padding: 16px; box-shadow: 0 8px 20px rgba(20,30,55,.05); }
        table { width: 100%; border-collapse: collapse; background: white; overflow: hidden; border-radius: 14px; }
        th { background: #e9f1f7; color: #0f2a43; text-align: left; padding: 9px; }
        td { border-top: 1px solid #edf0f5; padding: 9px; vertical-align: top; }
        .pill { display: inline-block; padding: 4px 9px; border-radius: 999px; font-size: 12px; font-weight: 700; background: #e8f6ee; color: #147a3f; margin-right: 5px; }
        .bad { background: #fdecec; color: #b42318; }
        .neutral { background: #edf2f7; color: #35506b; }
        .warning { background: #fff8e8; border-left: 5px solid #f59f00; border-radius: 12px; padding: 10px 12px; }
        .sources a { color: #1b5e89; word-break: break-word; }
        .disclaimer { background: #172033; color: white; border-radius: 16px; padding: 14px; margin-top: 16px; }
      `}</style>

      <section className="hero">
        <p className="eyebrow">1頁精簡版 · 2026-06-04 US close</p>
        <h1>道指創新高；科技股被 Broadcom 拖住，資金轉入醫療/金融</h1>
        <p>生成：2026-06-05 香港時間早上。資料以美股 2026-06-04 收市為準。</p>
      </section>

      <div className="grid">
        <section className="card">
          <h2>30秒結論</h2>
          <ul>
            <li><span className="pill">Dow +1.73%</span>創收市新高，UNH、GS、MRK、JPM、V 領升。</li>
            <li><span className="pill neutral">S&P +0.41%</span>靠醫療、金融、房地產、通訊服務補位。</li>
            <li><span className="pill bad">Nasdaq -0.09%</span>Broadcom 跌 12.59%，AI 半導體預期降溫。</li>
            <li><span className="pill">VIX -4.11%</span>不是全面避險，是明顯板塊輪動。</li>
          </ul>
        </section>

        <section className="card">
          <h2>大市數字</h2>
          <table>
            <thead><tr><th>項目</th><th>收市</th><th>變動</th><th>重點</th></tr></thead>
            <tbody>
              {rows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}
            </tbody>
          </table>
        </section>

        <section className="card">
          <h2>板塊紅綠燈</h2>
          <table>
            <tbody>
              {sectors.map((row) => <tr key={row[0]}><th>{row[0]}</th><td>{row[1]}</td></tr>)}
            </tbody>
          </table>
          <p>一句講晒：今日係 value/defensive 補漲，科技最弱。</p>
        </section>

        <section className="card">
          <h2>宏觀快照</h2>
          <ul>
            <li>10年期美債：4.477%，日跌約 1.4 bp；FRED 官方最新 6/3 為 4.49%。</li>
            <li>FedWatch：6/17 維持 3.50%-3.75% 機率約 97.4%；7/29 維持約 91.1%。</li>
            <li>油價：Reuters/CNBC 指受以黎停火希望影響，WTI/Brent 結算約跌近 3%。</li>
            <li>DXY 99.433（-0.10%），黃金 4,491.90（+0.36%）。</li>
          </ul>
        </section>

        <section className="card">
          <h2>重點股票</h2>
          <ul>
            <li><strong>AVGO -12.59%</strong>：Q2 revenue/AI chip 指引未夠驚喜，是科技弱勢核心。</li>
            <li><strong>UNH +5.16%</strong>：BofA 升級帶動，醫療板塊最強。</li>
            <li><strong>GS +4.96%、JPM +3.34%、V +2.49%</strong>：金融股輪動明顯。</li>
            <li><strong>GOOGL +3.68%、NVDA +1.82%</strong>：大型科技未全面失守。</li>
          </ul>
        </section>

        <section className="card">
          <h2>Crypto（4:00pm ET 附近）</h2>
          <table>
            <thead><tr><th>幣種</th><th>價格</th><th>時間</th></tr></thead>
            <tbody>
              {crypto.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}
            </tbody>
          </table>
          <p className="warning">Binance 現貨 API 於本環境回 HTTP 451，未能精準取 Binance kline；本版採 Yahoo 5分鐘線於 20:00 UTC，並註明來源差異。</p>
        </section>
      </div>

      <section className="card">
        <h2>操作提示 / 明日觀察</h2>
        <ul>
          <li>追科技要更揀股：AI 故事仍在，但市場對指引門檻極高。</li>
          <li>若非農偏熱或 ISM prices 繼續高，Fed 減息預期會再被壓，長久期估值要小心。</li>
          <li>留意油價停火折讓是否持續；一旦中東消息反覆，通脹與能源股會重新定價。</li>
        </ul>
      </section>

      <section className="card sources">
        <h2>主要來源</h2>
        <p>
          Reuters/MarketScreener（美股收市）：
          <a href="https://ca.marketscreener.com/news/wall-street-ends-mixed-as-broadcom-drags-tech-european-stocks-gain-oil-dips-ce7f5ddddb89f522">link</a>；
          Investopedia（盤中/收市重點）：
          <a href="https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-06042026-11990727">link</a>；
          FRED：
          <a href="https://fred.stlouisfed.org/">link</a>；
          Investing Fed Rate Monitor：
          <a href="https://www.investing.com/central-banks/fed-rate-monitor">link</a>；
          Yahoo Finance 行情：
          <a href="https://finance.yahoo.com/">link</a>。
        </p>
      </section>

      <p className="disclaimer">{disclaimer}</p>
    </main>
  );
}
