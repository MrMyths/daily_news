import React from "react";

const reportDate = "2026-09-04";
const publishedAt = "香港時間 2026-09-08 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "Reuters - Yields, dollar rise, stocks ease after solid US jobs report",
    url: "https://www.reuters.com/world/china/global-markets-wrapup-1-2026-09-04/",
  },
  {
    name: "Reuters - Strong August jobs report sends yields higher",
    url: "https://www.reuters.com/business/view-strong-august-jobs-report-sends-yields-higher-2026-09-04/",
  },
  {
    name: "BLS - Employment Situation Summary, August 2026",
    url: "https://www.bls.gov/news.release/empsit.nr0.htm",
  },
  {
    name: "NYSE - 2026 holidays and trading hours",
    url: "https://www.nyse.com/trade/hours-calendars?icid=",
  },
  {
    name: "AP - How major US stock indexes fared Friday 9/4/2026",
    url: "https://apnews.com/article/stock-market-dow-nasdaq-jobs-ebc11cfa2cf8baf4491bf3d4199c1d74",
  },
  {
    name: "TradingKey - US stocks fall, SOX bucks trend, SanDisk and Tesla movers",
    url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262152205-us-stock-close-dow-nasdaq-philadelphia-semiconductor-rise-sandisk-tesla-tradingkey",
  },
  {
    name: "Yahoo Finance - S&P 500 historical data",
    url: "https://finance.yahoo.com/quote/%5EGSPC/history/",
  },
  {
    name: "Yahoo Finance - Nasdaq Composite historical data",
    url: "https://finance.yahoo.com/quote/%5EIXIC/history/",
  },
  {
    name: "Yahoo Finance - Dow Jones historical data",
    url: "https://finance.yahoo.com/quote/%5EDJI/history/",
  },
  {
    name: "Yahoo Finance - Russell 2000 historical data",
    url: "https://finance.yahoo.com/quote/%5ERUT/history/",
  },
  {
    name: "Cboe - VIX volatility products",
    url: "https://www.cboe.com/tradable-products/vix/",
  },
  {
    name: "Yahoo Finance - Select Sector SPDR ETF historical data",
    url: "https://finance.yahoo.com/quote/XLK/history/",
  },
  {
    name: "Yahoo Finance - Treasury yield proxies (^FVX, ^TNX, ^TYX)",
    url: "https://finance.yahoo.com/quote/%5ETNX/history/",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const keyPoints = [
  "今日報告採最新完整美股交易日 2026-09-04；2026-09-07 是 Labor Day，NYSE/Nasdaq 休市，所以沒有新的美股收盤數據。",
  "美股假期前回落：Dow -271.86 點 / -0.51% 至 53,414.25；S&P 500 -29.11 點 / -0.38% 至 7,718.60；Nasdaq -77.07 點 / -0.29% 至 26,506.99；Russell 2000 逆市 +0.25% 至 2,975.65。",
  "主線好清楚：8 月非農 +162k，遠高於 Reuters 預期 +56k，失業率維持 4.1%；市場即刻重估 9 月 Fed 加息風險，債息與美元一齊上。",
  "債市是今日真正壓力來源：Reuters 指 2Y yield 約 4.37%、10Y 約 4.78%；Yahoo 收市口徑 ^TNX 4.784、^TYX 5.246，growth 估值折現率再被抬高。",
  "板塊不是全面崩：SOXX +3.52% / 費半約 +3.37%，XLK +0.70%、XLI +0.41% 撐市；XLY -1.33%、XLC -1.19%、XLV -1.04% 拖後腿。",
  "個股焦點分裂：SNDK +11.90%、MU +6.10%、WDC +5.86% 代表 memory/AI supply chain 有資金追；TSLA -5.92%、ADBE -6.73%、WDAY -5.38% 反映高估值與軟件消息面受壓。",
  "Crypto 採 Binance Vision 2026-09-04 20:00 UTC 1m close（貼近美股 4:00pm ET）：BTC $79,793.99（較 9/3 20:00 UTC -2.10%）、ETH $2,456.70（-2.05%）、SOL $101.76（-2.96%）。",
];

const indexRows = [
  [
    "Dow Jones",
    "53,414.25",
    "-271.86 / -0.51%",
    "Reuters/AP/Yahoo 同步顯示藍籌受壓；跌幅不算恐慌，但假期前風險胃納明顯收縮。",
  ],
  [
    "S&P 500",
    "7,718.60",
    "-29.11 / -0.38%",
    "強就業令 Fed 加息尾部風險升，指數由 7,750 附近回落，收近全日低位上方。",
  ],
  [
    "Nasdaq Composite",
    "26,506.99",
    "-77.07 / -0.29%",
    "半導體撐住 Nasdaq 跌幅；但 Apple、Microsoft、Google 偏弱，mega-cap breadth 未算健康。",
  ],
  [
    "Russell 2000",
    "2,975.65",
    "+7.38 / +0.25%",
    "小型股逆市升，反映沽壓集中在部分大型消費/軟件，而不是全市場 risk-off。",
  ],
  [
    "VIX",
    "14.53",
    "+1.47%",
    "VIX 仍在低位，只是輕微補升；市場是在重新定價利率，而不是爆發式避險。",
  ],
];

const sectorRows = [
  [
    "Semiconductors / SOXX",
    "$519.86 / +3.52%",
    "最強",
    "TradingKey 指費半 +3.37%，memory、光通訊與 AI supply chain 領漲；SNDK、MU、WDC、AMD 係主力。",
  ],
  [
    "Technology / XLK",
    "$187.28 / +0.70%",
    "強",
    "科技整體綠，但內部靠半導體托住；MSFT/AAPL 下跌，代表不是全科技齊升。",
  ],
  [
    "Industrials / XLI",
    "$175.27 / +0.41%",
    "綠",
    "強就業有利 cyclical 信心，工業股相對穩；但債息高位限制估值擴張。",
  ],
  [
    "Utilities / XLU",
    "$43.08 / +0.12%",
    "微綠",
    "防守板塊小升，說明資金有少少避險，但幅度不大。",
  ],
  [
    "Materials / XLB",
    "$52.44 / -0.34%",
    "微弱",
    "美元上行壓住 commodity beta，材料股跟隨大市偏軟。",
  ],
  [
    "Real Estate / XLRE",
    "$43.93 / -0.72%",
    "弱",
    "長端息仍高，REITs 對 discount rate 特別敏感。",
  ],
  [
    "Financials / XLF",
    "$58.10 / -0.79%",
    "弱",
    "前端債息急升未能轉化為銀行股利好，市場更擔心信貸與估值壓力。",
  ],
  [
    "Consumer Staples / XLP",
    "$84.58 / -0.80%",
    "弱",
    "防守消費未吸到明顯避險資金，表明今日賣壓並非傳統恐慌模式。",
  ],
  [
    "Energy / XLE",
    "$64.06 / -0.87%",
    "弱",
    "油價收高但能源股偏弱，可能反映假期前獲利回吐與地緣 headline 風險。",
  ],
  [
    "Health Care / XLV",
    "$171.45 / -1.04%",
    "更弱",
    "防守醫療也跌，今日不是單純 growth-to-defensive，而是局部資金重新配置。",
  ],
  [
    "Communication Services / XLC",
    "$112.03 / -1.19%",
    "更弱",
    "Alphabet 走低拖累通訊服務；META 升約 1% 但不足以抵消板塊壓力。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$114.91 / -1.33%",
    "最弱",
    "TSLA 大跌與高估值消費股受壓，是今日最明顯的風險信號。",
  ],
];

const macroRows = [
  [
    "就業",
    "8 月非農 +162k；失業率 4.1%；Reuters 預期 +56k；7 月由 -23k 修正至 +21k",
    "數據比市場想像強好多，減少 Fed 因就業轉弱而暫停的理由；這就是股債同壓的核心。",
  ],
  [
    "FedWatch / 利率定價",
    "Reuters 早段指 9 月加息機率約 59%，下午回落至約 57%；其他 FedWatch 類截數約 60.3%",
    "不同來源因截數時間有差異，本文採區間描述：市場由接近五五波，轉向略偏加息。",
  ],
  [
    "美債息",
    "2Y 約 4.37%；10Y 約 4.78%；30Y 約 5.24%-5.25%",
    "2Y 對 Fed 預期最敏感，今日升幅最有訊號；10Y 上穿 4.78% 令股票估值承壓。",
  ],
  [
    "美元",
    "DXY 約 99.17，Reuters 指日內 +0.21%",
    "強就業 + 加息概率上升支持美元，亦壓低黃金和部分 commodity beta。",
  ],
  [
    "黃金",
    "Spot gold 約 $4,419.09 / -1.2%",
    "金價回落反映實質利率與美元壓力；避險買盤不足以抵消加息重定價。",
  ],
  [
    "原油",
    "Brent $92.68 / +0.8%；WTI $91.48 / +0.20%；全週 Brent +7.6%、WTI 近 +10%",
    "Reuters 指中東供應路線受阻令油價週線大升；這會增加下週 CPI/PPI 的通脹風險敏感度。",
  ],
  [
    "下週數據",
    "PPI 週四、CPI 週五；市場預期 core CPI YoY 由 2.5% 放慢至 2.4%",
    "就業已經偏強，所以下週通脹數據會更直接決定 9 月 FOMC 前的最後定價。",
  ],
];

const stockRows = [
  [
    "SNDK / MU / WDC / STX",
    "SNDK +11.90%；MU +6.10%；WDC +5.86%；STX +6.34%",
    "記憶體與儲存鏈條強勢，TradingKey 指 HBM 產能與 AI supply chain 仍是資金追逐主題。",
  ],
  [
    "AMD / NVDA / AVGO",
    "AMD +4.69%；NVDA +0.84%；AVGO +0.21%",
    "半導體 breadth 好過大市，但 NVDA 只小升，代表資金更追二線/記憶體彈性。",
  ],
  [
    "TSLA",
    "$354.08 / -5.92%",
    "TradingKey 指 Cybercab 更新未能滿足市場期待，投資者關注 pricing、量產節奏和監管細節。",
  ],
  [
    "ADBE",
    "$266.51 / -6.73%",
    "Reuters 指 Adobe 宣布 Anil Chakravarthy 將接替 Shantanu Narayen 任 CEO，消息觸發股價急跌。",
  ],
  [
    "AAPL / MSFT / GOOGL",
    "AAPL -2.51%；MSFT -2.04%；GOOGL -1.17%",
    "大型科技並非全面 risk-on；半導體升勢掩蓋了 mega-cap 軟弱。",
  ],
  [
    "META / AMZN",
    "META +1.00%；AMZN -0.15%",
    "平台股內部分化，META 逆市升但 Amazon 近乎持平；市場不是無差別買 growth。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$79,793.99",
    "-2.10%",
    "Binance Vision 2026-09-04 20:00 UTC 1m close；比較基準為 2026-09-03 20:00 UTC $81,502.58。",
  ],
  [
    "ETHUSDT",
    "$2,456.70",
    "-2.05%",
    "同一採樣時間；ETH 跟隨 BTC 下跌，反映利率重定價對 crypto beta 有壓力。",
  ],
  [
    "SOLUSDT",
    "$101.76",
    "-2.96%",
    "SOL 跌幅較大，高 beta alt 在假期前風控下更弱。",
  ],
];

const technicalRows = [
  [
    "S&P 500",
    "即日高 7,750.19；低 7,706.12；收 7,718.60",
    "7,700 是短線第一支持，跌穿就看 7,650；上方要重新企穩 7,750 才算修復。",
  ],
  [
    "Nasdaq",
    "即日高 26,628.58；低 26,444.84；收 26,506.99",
    "半導體撐住但收不回高位；26,440-26,500 是第一支持帶，26,630 是反彈阻力。",
  ],
  [
    "Russell 2000",
    "即日高 2,976.66；低 2,951.04；收 2,975.65",
    "小型股接近日高收，breadth 有亮點；若 2Y yield 再升，這條線會受考驗。",
  ],
  [
    "VIX",
    "14.53，仍低於 20",
    "低波動環境容易令市場低估 CPI/PPI gap 風險；假期後若債息再抽升，保護需求可能追落後。",
  ],
];

const eventRows = [
  "週二美股重開後，第一件事看 2Y/10Y 債息有無延續升勢；若 10Y 穩在 4.8% 附近，growth multiple 會繼續受壓。",
  "週四 PPI、週五 CPI 是 FOMC 前核心風險事件；就業已強，通脹只要略熱都容易令加息概率再上。",
  "半導體要看 SOXX 能否延續強勢，而不是單日 memory short squeeze；若 SOXX 轉弱，Nasdaq 防線會薄好多。",
  "油價全週急升，若中東供應 headline 未降溫，能源通脹預期會繼續擾動 Fed pricing。",
  "Adobe、Oracle 等軟件/enterprise IT 事件會測試市場是否願意在高息環境下繼續付高估值。",
];

const actionRows = [
  [
    "短線交易",
    "假期後先看 SPX 7,700 能否守住；若跌穿而 2Y yield 繼續升，避免急住撈高估值 growth。",
  ],
  [
    "板塊配置",
    "半導體/記憶體有相對強勢，但宜等 SOXX 連續確認；consumer discretionary 和通訊服務先保持保守。",
  ],
  [
    "風控",
    "低 VIX 不代表低風險；CPI/PPI 前高 beta、crypto、long-duration equity 都要預設 gap risk。",
  ],
  [
    "資料口徑",
    "Reuters/AP/Yahoo 終局數字基本一致；個別 Reuters live 版本曾出現 Dow 53,413.60 / S&P 7,718.41 的細微差異，本文優先採 global wrap/AP/Yahoo final close。",
  ],
];

function SourceList() {
  return (
    <ol className="sources">
      {sources.map((source) => (
        <li key={source.url}>
          <a href={source.url}>{source.name}</a>
        </li>
      ))}
    </ol>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.join("|")}>
            {row.map((cell) => (
              <td key={cell}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function USCloseBrief20260904() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          margin: 0 auto;
          padding: 42px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.48;
        }
        .hero {
          background: linear-gradient(135deg, #064e3b 0%, #047857 42%, #111827 100%);
          color: white;
          border-radius: 28px;
          padding: 34px;
          box-shadow: 0 18px 45px rgba(4, 120, 87, 0.2);
        }
        h1 { margin: 0 0 10px; font-size: 44px; letter-spacing: -0.02em; }
        .subtitle { font-size: 19px; opacity: 0.92; }
        .meta { margin-top: 18px; display: flex; gap: 12px; flex-wrap: wrap; }
        .pill { border: 1px solid rgba(255,255,255,0.34); border-radius: 999px; padding: 7px 13px; font-weight: 700; }
        .section {
          margin-top: 24px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
          page-break-inside: avoid;
        }
        h2 { margin: 0 0 14px; color: #047857; font-size: 25px; }
        h3 { margin: 16px 0 8px; color: #1e3a8a; font-size: 18px; }
        ul { margin: 0; padding-left: 22px; }
        li { margin: 7px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 14px; }
        th, td { border-bottom: 1px solid #e5e7eb; padding: 10px 9px; vertical-align: top; text-align: left; }
        th { background: #f1f5f9; color: #334155; font-size: 13px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .callout { background: #ecfdf5; border-left: 5px solid #10b981; padding: 14px 16px; border-radius: 14px; }
        .red { color: #b91c1c; font-weight: 800; }
        .green { color: #047857; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { color: #64748b; font-size: 13px; }
        .sources { columns: 2; font-size: 12.5px; }
        a { color: #1d4ed8; text-decoration: none; }
        @media print { .sheet { width: auto; padding: 18px; } .section { box-shadow: none; } }
      `}</style>

      <section className="hero">
        <h1>美股收盤懶人包｜完整版</h1>
        <div className="subtitle">
          {reportDate} 收市｜強就業推高加息預期；大市假期前回落，半導體逆市跑出
        </div>
        <div className="meta">
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">9/7 Labor Day 休市，採 9/4 最新完整收盤</span>
          <span className="pill">Crypto：Binance Vision 20:00 UTC</span>
        </div>
      </section>

      <section className="section">
        <h2>1）30秒重點</h2>
        <ul>
          {keyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>2）大市一眼睇</h2>
        <DataTable
          headers={["指標", "收市", "變動", "解讀"]}
          rows={indexRows}
        />
      </section>

      <section className="section">
        <h2>3）今日市場點解跌？</h2>
        <div className="grid">
          <div className="callout">
            <h3>好就業變成壞消息</h3>
            <p>
              BLS/Reuters 指 8 月非農增加 162,000，差不多是預期 56,000 的三倍。
              經濟韌性強，本身不是壞事；但在通脹仍敏感的背景下，市場即刻擔心 Fed
              有更多理由加息。
            </p>
          </div>
          <div className="callout">
            <h3>債息與美元同時上</h3>
            <p>
              2Y yield 約 4.37%，10Y 約 4.78%，DXY 約 99.17。當 discount rate
              抽高，股票特別是長久期 growth 自然較難追價。
            </p>
          </div>
          <div className="callout">
            <h3>半導體救了 Nasdaq</h3>
            <p>
              SOXX +3.52%，TradingKey 指費半 +3.37%。如果沒有 memory/AI supply
              chain 撐住，Nasdaq 跌幅應該會更肉酸。
            </p>
          </div>
          <div className="callout">
            <h3>假期前先降槓桿</h3>
            <p>
              9/7 美國休市，交易員不想帶太多風險過三日長週末；所以見到
              TSLA、ADBE、WDAY 這類有事件風險或高估值名字被沽得較重。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>4）板塊熱度圖 / 紅綠燈</h2>
        <DataTable
          headers={["板塊 / ETF", "收市 / 變動", "紅綠燈", "解讀"]}
          rows={sectorRows}
        />
      </section>

      <section className="section">
        <h2>5）宏觀白話版</h2>
        <DataTable headers={["項目", "數字", "白話解讀"]} rows={macroRows} />
      </section>

      <section className="section">
        <h2>6）重點股票與新聞</h2>
        <DataTable headers={["股票 / 主題", "數字", "解讀"]} rows={stockRows} />
      </section>

      <section className="section">
        <h2>7）Crypto：BTC / ETH / SOL</h2>
        <p className="small">
          Crypto 以 Binance Vision public data 的 1 分鐘 K 線 close
          作口徑，時間為 2026-09-04 20:00 UTC，貼近美股 4:00pm ET；
          如與其他交易所即時價有差異，屬交易所與採樣時間差異。
        </p>
        <DataTable
          headers={["幣種", "採樣價", "24 小時近似變動", "口徑"]}
          rows={cryptoRows}
        />
      </section>

      <section className="section">
        <h2>8）技術位</h2>
        <DataTable headers={["市場", "位置", "解讀"]} rows={technicalRows} />
      </section>

      <section className="section">
        <h2>9）資金流向與市場質感</h2>
        <ul>
          <li>
            <span className="green">相對強：</span>SOXX、memory、部分 AI supply
            chain、小型股；這代表市場仍願意買「盈利/產能故事」清晰的 beta。
          </li>
          <li>
            <span className="red">相對弱：</span>
            XLY、XLC、XLV、軟件與事件風險股；利率上行下，估值敏感名字會先被減倉。
          </li>
          <li>
            <span className="amber">整體：</span>VIX 仍低，所以不是 panic
            sell；但債息上行令 risk/reward 變差，假期後要看是否補跌。
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>10）下個交易日 / 本週觀察清單</h2>
        <ul>
          {eventRows.map((row) => (
            <li key={row}>{row}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>11）操作提示</h2>
        <DataTable headers={["場景", "做法"]} rows={actionRows} />
      </section>

      <section className="section">
        <h2>12）最終觀點 + 來源</h2>
        <p>
          今日不是「經濟差所以跌」，而是「經濟太韌、Fed
          可能更鷹，所以估值要重新計」。 最健康的地方是半導體與 Russell
          仍有資金，代表牛市結構未即時壞；最需要小心的是債息、美元與下週 CPI/PPI
          會不會令加息交易延續。短線策略係：先尊重 7,700 支持與 SOXX
          相對強勢，但唔好在通脹數據前過度追高。
        </p>
        <h3>資料差異處理</h3>
        <p className="small">
          9/4 指數收盤在不同 Reuters 版本有極細差異（例如 Dow 53,414.25 vs
          53,413.60；S&P 500 7,718.60 vs 7,718.41）。 本文採 Reuters global
          wrap、AP 與 Yahoo chart 一致的 final
          close；如某來源只提供即時快照，已在文字中以「約」或區間處理。9/7 因
          NYSE Labor Day 休市，沒有美股 regular-session 收盤，故用 9/4
          最新完整交易日。
        </p>
        <SourceList />
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
