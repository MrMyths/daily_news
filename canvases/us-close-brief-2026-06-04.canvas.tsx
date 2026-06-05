import React from "react";

const sources = [
  {
    name: "Reuters / MarketScreener：6月4日美股收市綜述",
    url: "https://ca.marketscreener.com/news/wall-street-ends-mixed-as-broadcom-drags-tech-european-stocks-gain-oil-dips-ce7f5ddddb89f522",
  },
  {
    name: "Investopedia：Dow record、Broadcom 拖累科技股",
    url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-06042026-11990727",
  },
  {
    name: "Yahoo Finance chart API/quote pages：指數、ETF、個股、商品與 crypto 行情",
    url: "https://finance.yahoo.com/",
  },
  {
    name: "FRED：美國國債收益率 DGS2 / DGS10 / DGS3MO",
    url: "https://fred.stlouisfed.org/",
  },
  {
    name: "Investing.com Fed Rate Monitor：CME Fed funds futures implied probabilities",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "Reuters / Investing.com：Broadcom Q2 與 AI 晶片指引",
    url: "https://www.investing.com/news/stock-market-news/broadcom-forecasts-quarterly-revenue-above-estimates-4725166",
  },
  {
    name: "Broadcom 官方新聞稿：FY2026 Q2 results",
    url: "https://finance.yahoo.com/markets/stocks/articles/broadcom-inc-announces-second-quarter-201500695.html",
  },
  {
    name: "CNBC：ADP May private payrolls",
    url: "https://www.cnbc.com/2026/06/03/adp-jobs-report-may-2026-payrolls-increase-by-122000.html",
  },
  {
    name: "AP / ClickOrlando：Initial jobless claims",
    url: "https://www.clickorlando.com/business/2026/06/04/us-jobless-aid-filings-a-proxy-for-layoffs-rise-to-225000-last-week-but-remain-historically-low/",
  },
  {
    name: "Reuters / CNBC：Oil falls on Israel-Lebanon ceasefire",
    url: "https://www.cnbc.com/2026/06/04/oil-falls-as-lebanon-and-israel-agree-to-implement-ceasefire.html",
  },
  {
    name: "Binance 現貨頁（本次環境 API 451，未能取精準 Binance kline）",
    url: "https://www.binance.com/en/markets/overview",
  },
];

const marketRows = [
  ["S&P 500", "7,584.31", "+30.63", "+0.41%", "大型股靠非科技板塊拉升"],
  ["Nasdaq Composite", "26,830.96", "-23.02", "-0.09%", "Broadcom/半導體拖累"],
  ["Dow Jones", "51,561.93", "+874.86", "+1.73%", "創收市新高，醫療與金融領升"],
  ["Russell 2000", "2,935.33", "+41.82", "+1.45%", "小型股同步反彈"],
  ["VIX", "15.40", "-0.66", "-4.11%", "避險需求回落"],
];

const sectorRows = [
  ["醫療保健 XLV", "+3.07%", "強", "UNH、MRK 帶動，道指權重股發力"],
  ["金融 XLF", "+2.59%", "強", "JPM、GS、V 明顯跑贏"],
  ["房地產 XLRE", "+2.05%", "強", "利率回落支撐久期資產"],
  ["工業 XLI", "+1.21%", "偏強", "價值/周期輪動受惠"],
  ["通訊服務 XLC", "+0.92%", "偏強", "GOOGL 支撐"],
  ["公用 XLU", "+0.53%", "中性偏強", "防守板塊穩定"],
  ["非必需消費 XLY", "+0.45%", "中性", "TSLA 下跌限制升幅"],
  ["能源 XLE", "+0.07%", "中性", "油價回落抵銷部分風險溢價"],
  ["材料 XLB", "-0.02%", "偏弱", "幾乎持平"],
  ["必需消費 XLP", "-0.15%", "偏弱", "防守需求不強"],
  ["科技 XLK", "-1.56%", "弱", "Broadcom 及晶片股拖累"],
];

const macroRows = [
  ["10年期美債", "4.477%", "-1.4 bp", "Yahoo 即時；FRED 最新官方為 2026-06-03：4.49%"],
  ["2年期美債", "FRED 4.08%", "+3 bp vs 6/2", "官方日度數據更新至 2026-06-03"],
  ["3個月美債", "FRED 3.78%", "+1 bp vs 6/2", "短端仍接近政策利率區間"],
  ["美元指數 DXY", "99.433", "-0.10%", "美元略軟"],
  ["黃金期貨", "4,491.90", "+0.36%", "避險與實質利率交互影響"],
  ["WTI 原油", "92.77", "-0.29%（盤後即時）", "Reuters 報道收市附近約跌 3%，受停火希望影響"],
  ["Brent 原油", "95.06", "+0.03%（盤後即時）", "Reuters 結算價約 95.03，日跌 2.84%"],
];

const stockRows = [
  ["AVGO", "418.91", "-12.59%", "Q2 revenue/AI chip 指引未滿足高預期，長線 AI 銷售目標維持不變"],
  ["NVDA", "218.66", "+1.82%", "AI 相關龍頭相對硬淨，但板塊受 AVGO 牽連"],
  ["GOOGL", "372.19", "+3.68%", "大型科技中表現較佳，支撐通訊服務"],
  ["TSLA", "418.45", "-1.24%", "Magnificent Seven 中偏弱"],
  ["UNH", "396.47", "+5.16%", "BofA 升級帶動，醫療板塊領升"],
  ["GS", "1,092.61", "+4.96%", "金融股輪動核心之一"],
  ["JPM", "310.89", "+3.34%", "大行普遍造好"],
  ["V", "320.18", "+2.49%", "支付股跟隨金融走強"],
  ["MRK", "120.26", "+4.85%", "醫療防守/價值資金流入"],
  ["CRWD", "719.09", "-3.81%", "高估值軟件/網安股承壓"],
];

const cryptoRows = [
  ["BTC", "63,322.65", "2026-06-04 20:00 UTC", "Yahoo 5分鐘線；Binance API 451，未能精準採用 Binance"],
  ["ETH", "1,768.17", "2026-06-04 20:00 UTC", "同上"],
  ["SOL", "68.66", "2026-06-04 20:00 UTC", "同上"],
];

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊用途，不構成任何投資建議、買賣邀請或招攬。投資涉及風險，價格可升可跌，過往表現不代表未來回報。作出任何投資決定前，請自行研究並按需要諮詢持牌專業顧問。";

function Pill({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "good" | "bad" | "neutral" }) {
  return <span className={`pill ${tone}`}>{children}</span>;
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: Array<Array<string>>;
}) {
  return (
    <table>
      <thead>
        <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.join("-")}>
            {row.map((cell, index) => <td key={`${cell}-${index}`}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function USCloseBrief20260604() {
  return (
    <main className="page">
      <style>{`
        .page { max-width: 1180px; margin: 0 auto; padding: 36px; color: #172033; font-family: Inter, "Noto Sans TC", "Microsoft JhengHei", sans-serif; background: #f6f7fb; }
        .hero { background: linear-gradient(135deg, #0f2a43, #22577a); color: white; border-radius: 28px; padding: 34px; box-shadow: 0 18px 50px rgba(15,42,67,.18); }
        .eyebrow { letter-spacing: .16em; text-transform: uppercase; font-size: 12px; opacity: .76; margin: 0 0 10px; }
        h1 { font-size: 42px; margin: 0; line-height: 1.12; }
        h2 { font-size: 24px; margin: 32px 0 14px; color: #0f2a43; }
        h3 { font-size: 18px; margin: 22px 0 10px; color: #22577a; }
        p, li { font-size: 15px; line-height: 1.72; }
        .meta { margin-top: 16px; color: rgba(255,255,255,.82); }
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 18px; }
        .card { background: white; border: 1px solid #e6e8ef; border-radius: 20px; padding: 18px; box-shadow: 0 10px 24px rgba(20,30,55,.05); }
        .card strong { display: block; color: #0f2a43; font-size: 16px; margin-bottom: 6px; }
        .pill { display: inline-flex; align-items: center; padding: 5px 10px; border-radius: 999px; font-size: 12px; font-weight: 700; margin-right: 6px; }
        .pill.good { background: #e8f6ee; color: #147a3f; }
        .pill.bad { background: #fdecec; color: #b42318; }
        .pill.neutral { background: #edf2f7; color: #35506b; }
        table { width: 100%; border-collapse: collapse; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 20px rgba(20,30,55,.05); }
        th { background: #e9f1f7; color: #0f2a43; text-align: left; font-size: 13px; padding: 12px; }
        td { border-top: 1px solid #edf0f5; padding: 12px; font-size: 14px; vertical-align: top; }
        .section { background: white; border: 1px solid #e6e8ef; border-radius: 22px; padding: 24px; margin-top: 20px; }
        .twocol { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .callout { border-left: 5px solid #38a3a5; background: #eefafa; padding: 14px 16px; border-radius: 14px; }
        .warning { border-left-color: #f59f00; background: #fff8e8; }
        .source-list a { color: #1b5e89; word-break: break-word; }
        .disclaimer { background: #172033; color: white; border-radius: 18px; padding: 18px; margin-top: 24px; }
      `}</style>

      <section className="hero">
        <p className="eyebrow">US close brief · 2026-06-04</p>
        <h1>美股收盤懶人包：道指創新高，科技股被 Broadcom 拖住</h1>
        <p className="meta">
          生成時間：2026-06-05 香港時間早上 · 報告語言：繁體中文（自然廣東話） · 覆蓋美股 2026-06-04 收市。
        </p>
        <div className="grid">
          <div className="card"><strong>主線</strong>資金由高估值科技轉去醫療、金融與價值股，Dow 明顯跑贏。</div>
          <div className="card"><strong>風險</strong>AVGO 指引未夠驚喜，提醒 AI trade 對估值與預期非常敏感。</div>
          <div className="card"><strong>宏觀</strong>油價因中東停火希望回落，債息小跌，Fed 6月大概率按兵不動。</div>
        </div>
      </section>

      <section className="section">
        <h2>1）30秒重點</h2>
        <ul>
          <li><Pill tone="good">Dow +1.73%</Pill> 道指收 51,561.93，按 Reuters/MarketScreener 與 Investopedia 報道創收市新高。</li>
          <li><Pill tone="neutral">S&P +0.41%</Pill> 標普 500 靠醫療、金融、房地產和通訊服務撐住。</li>
          <li><Pill tone="bad">Nasdaq -0.09%</Pill> 科技股拖後腿，核心原因係 Broadcom 跌 12.59%，晶片股情緒受壓。</li>
          <li><Pill tone="good">VIX 15.40</Pill> 波動率跌 4.11%，市場不是全面避險，而是明顯輪動。</li>
        </ul>
      </section>

      <section className="section">
        <h2>2）大市一眼睇</h2>
        <DataTable headers={["指數/資產", "收市/點位", "升跌", "幅度", "解讀"]} rows={marketRows} />
        <p className="callout">結論：今日不是「全面 risk-off」，而是「AI 高預期降溫 + 價值/防守板塊補位」。</p>
      </section>

      <section className="section">
        <h2>3）今日升跌原因</h2>
        <div className="twocol">
          <div>
            <h3>推升因素</h3>
            <ul>
              <li>醫療與金融股強勢，UNH、GS、MRK、JPM、V 成為 Dow 創新高主力。</li>
              <li>油價回落，市場暫時下調中東風險溢價，對通脹預期有幫助。</li>
              <li>10年期債息略跌，利率壓力沒有惡化。</li>
            </ul>
          </div>
          <div>
            <h3>拖累因素</h3>
            <ul>
              <li>Broadcom Q2 revenue/AI chip 指引未滿足市場高預期，股份急跌 12.59%。</li>
              <li>科技 ETF XLK 跌 1.56%，是 11 個主要板塊中最弱。</li>
              <li>就業與 ISM 價格數據仍偏黏，令 Fed 快速減息空間有限。</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>4）板塊紅綠燈</h2>
        <DataTable headers={["板塊", "日變動", "狀態", "一句解讀"]} rows={sectorRows} />
      </section>

      <section className="section">
        <h2>5）資金流向與市場寬度</h2>
        <ul>
          <li>資金明顯由科技轉向醫療、金融、房地產與工業；這類輪動令 S&P 500 可以在 Nasdaq 微跌下仍收升。</li>
          <li>Reuters/MarketScreener 報道美股收市時醫療與金融領升，科技股領跌；Investopedia 亦指出 11 個 S&P 500 板塊中科技最弱。</li>
          <li>Russell 2000 升 1.45%，說明買盤不只集中在 Dow 成份股，風險胃納仍在。</li>
        </ul>
      </section>

      <section className="section">
        <h2>6）宏觀白話版</h2>
        <DataTable headers={["項目", "最新", "變動", "解讀"]} rows={macroRows} />
        <p className="callout warning">
          FRED 官方美債日度數據更新至 2026-06-03；6月4日收市附近債息採 Yahoo chart。兩者時間點不同，所以報告同時列示，避免混淆。
        </p>
      </section>

      <section className="section">
        <h2>7）FedWatch 與利率預期</h2>
        <ul>
          <li>Investing.com Fed Rate Monitor（基於 CME Fed funds futures）顯示：2026-06-17 FOMC 維持 3.50%-3.75% 機率約 97.4%，減息至 3.25%-3.50% 約 2.6%。</li>
          <li>2026-07-29 會議：維持 3.50%-3.75% 約 91.1%，加息至 3.75%-4.00% 約 6.5%，減息約 2.5%。</li>
          <li>白話講：市場主線仍然係「先不減息」，甚至開始留意後面重新偏鷹的尾部風險。</li>
        </ul>
      </section>

      <section className="section">
        <h2>8）商品、美元與地緣風險</h2>
        <ul>
          <li>Reuters/CNBC 指油價因以色列與黎巴嫩停火協議帶來更大範圍降溫希望而回落；Reuters 結算口徑 WTI 約跌 3.1%、Brent 約跌 2.84%。</li>
          <li>美元指數小跌 0.10%，沒有形成強美元壓制。</li>
          <li>黃金小升 0.36%，代表地緣與通脹尾部風險未完全消失。</li>
        </ul>
      </section>

      <section className="section">
        <h2>9）重點股票</h2>
        <DataTable headers={["Ticker", "收市", "日變動", "重點"]} rows={stockRows} />
      </section>

      <section className="section">
        <h2>10）Crypto：BTC / ETH / SOL</h2>
        <DataTable headers={["幣種", "價格", "採用時間點", "來源與註記"]} rows={cryptoRows} />
        <p className="callout warning">
          Crypto 原要求優先 Binance 且貼近 4:00pm ET；本次 Binance 現貨 API 在執行環境回傳 HTTP 451，未能精準拉取 Binance Kline。為保留時間一致性，本版採 Yahoo Finance 5分鐘線在 2026-06-04 20:00 UTC（美股 4:00pm ET）價格，並明確標註來源差異。
        </p>
      </section>

      <section className="section">
        <h2>11）下一個交易日觀察清單</h2>
        <ul>
          <li><strong>非農就業：</strong>市場等 5月 NFP，重點是新增職位、失業率與薪資增速會否支持 Fed 繼續 hold。</li>
          <li><strong>AI 半導體：</strong>看 AVGO 跌勢是否擴散至 NVDA、AMD、MU，還是單一預期修正。</li>
          <li><strong>油價：</strong>留意停火是否落實，以及 Hormuz/伊朗相關消息會否令油價反彈。</li>
          <li><strong>板塊輪動：</strong>如 XLV/XLF 持續強過 XLK，短線指數可以升但風格會由 growth 轉 value/quality。</li>
        </ul>
      </section>

      <section className="section">
        <h2>12）操作提示與最終觀點</h2>
        <ul>
          <li>短線：指數未壞，但 Nasdaq 弱過 Dow，追科技要更揀股；避免只因 AI 主題就忽略估值與指引門檻。</li>
          <li>中線：如果債息回落、油價受控，非科技板塊有機會繼續補漲；但就業/通脹數據若偏熱，估值仍會受壓。</li>
          <li>風控：將科技倉位與金融/醫療/現金流穩定股分散，不要把全部 beta 壓在半導體單一主線。</li>
        </ul>
      </section>

      <section className="section">
        <h2>來源連結</h2>
        <ol className="source-list">
          {sources.map((source) => (
            <li key={source.url}><a href={source.url}>{source.name}</a></li>
          ))}
        </ol>
      </section>

      <p className="disclaimer">{disclaimer}</p>
    </main>
  );
}
