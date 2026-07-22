import React from "react";

const reportDate = "2026-07-21";
const publishedAt = "香港時間 2026-07-22 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market news for July 21, 2026",
    url: "https://www.cnbc.com/2026/07/20/stock-market-today-live-updates.html",
  },
  {
    name: "Yahoo Finance - Stock market today: Dow, S&P 500, Nasdaq jump as semiconductor stocks surge",
    url: "https://finance.yahoo.com/markets/live/stock-market-today-tuesday-july-21-dow-sp-500-nasdaq-084631499.html",
  },
  {
    name: "TradingView/Stocktwits - S&P 500, Dow snap three-day losses",
    url: "https://www.tradingview.com/news/stocktwits:eb612d56b094b:0-s-p-500-dow-snap-three-day-losses-nasdaq-ends-best-day-in-three-weeks-as-earnings-take-centerstage-googl-aapl-amd-tsla-dis-in-focus/",
  },
  {
    name: "Reuters via Euronext - Oil prices rise to five-week high on US-Iran attacks",
    url: "https://live.euronext.com/en/financial-news/oil-prices-ease-mediators-propose-us-iran-ceasefire",
  },
  {
    name: "CNBC - Treasury yields edge higher as investors map geopolitical risks",
    url: "https://www.cnbc.com/2026/07/21/treasury-yields-bonds-iran-us-politics.html",
  },
  {
    name: "Trading Economics - US Treasury yield table",
    url: "https://tradingeconomics.com/united-states/government-bond-yield",
  },
  {
    name: "YCharts - 10 Year Treasury Rate",
    url: "https://ycharts.com/indicators/10_year_treasury_rate",
  },
  {
    name: "Kitco - Gold rallies as buyers ignore higher yields, oil shock",
    url: "https://www.kitco.com/news/article/2026-07-21/gold-rallies-buyers-ignore-higher-yields-oil-shock-kitco-pm-report",
  },
  {
    name: "Kitco - Gold holds ground at $4,000 and moves higher",
    url: "https://www.kitco.com/opinion/2026-07-21/gold-holds-ground-4000-and-moves-higher",
  },
  {
    name: "PredictionMarketsPicks - Fed Rate Tracker",
    url: "https://predictionmarketspicks.com/tools/fed-rate-tracker",
  },
  {
    name: "Altinla - Fed Rate Watch Tool",
    url: "https://altinla.com/en/fed-faiz-izleme",
  },
  {
    name: "CNBC - General Motors Q2 2026 earnings",
    url: "https://www.cnbc.com/2026/07/21/general-motors-gm-earnings-q2-2026.html",
  },
  {
    name: "3M - Second-quarter 2026 results",
    url: "https://news.3m.com/2026-07-21-3M-Reports-Second-Quarter-2026-Results-Increases-Full-Year-Guidance",
  },
  {
    name: "CNBC - Trump slaps 50% tariffs on Canada goods",
    url: "https://www.cnbc.com/2026/07/20/trump-tariffs-canada-trade.html",
  },
  {
    name: "Cboe - VIX historical data",
    url: "https://www.cboe.com/tradable_products/vix/vix_historical_data/",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "Dow Jones",
    "52,224.64",
    "+385.38 / +0.74%",
    "3M、GM 財報好過預期，令 Dow 結束三日跌勢；但油價、債息仍限制估值擴張。",
  ],
  [
    "S&P 500",
    "7,509.20",
    "+65.92 / +0.89%",
    "CNBC 與多個市場數據源一致；Investing.com 報 7,509.21，屬四捨五入口徑差異。",
  ],
  [
    "Nasdaq Composite",
    "25,837.21",
    "+329.13 / +1.29%",
    "半導體反彈推動 Nasdaq 領升；Yahoo/ CNBC 均指三大指數終止三連跌。",
  ],
  [
    "Russell 2000",
    "約 +1.3% 至 +1.5%",
    "IWM +1.28%；部分即時源報 RUT 2,987.40 / +1.53%",
    "小型股有追落後，但 RUT 即時來源有差異；本文以 IWM 歷史收市作較可靠 proxy。",
  ],
  [
    "VIX",
    "16.93",
    "-9.22%",
    "Investing.com/Cboe historical 口徑顯示 VIX 明顯回落；另有即時頁報 17.05，本文標示差異並採歷史表。",
  ],
];

const sectorRows = [
  [
    "Semiconductors / SMH",
    "+4.5% 至 +4.7%",
    "最強綠燈",
    "CNBC 指 SMH 升逾 4%；StockAnalysis/Yahoo 顯示 SMH 約 +4.5%，PHLX Sox 約 +4.6% 至 +4.9%。",
  ],
  [
    "Technology / XLK",
    "$180.41 / +2.67%",
    "領升",
    "Yahoo historical 顯示 XLK 由 $175.71 升至 $180.41；半導體比 software 更強。",
  ],
  [
    "Industrials",
    "偏強",
    "財報推動",
    "3M 升約 7.3%，GM 升約 4.9%，帶動工業/周期 sentiment；精確 sector index 暫無可靠數據。",
  ],
  [
    "Communication Services",
    "分化",
    "等待財報",
    "Alphabet 在財報前仍是焦點，但即日板塊精確 ETF 變動來源互有差異；暫不硬填。",
  ],
  [
    "Consumer Discretionary",
    "分化",
    "高 beta 修復",
    "Tesla 及部分成長股有買盤，但加拿大關稅與油價上升令消費鏈仍有壓力。",
  ],
  [
    "Energy",
    "油價支持但股價數字暫無可靠全板塊口徑",
    "中性偏強",
    "Brent/WTI 同升約 2% 並創約五週高位；能源股受支持，但大市資金更集中半導體。",
  ],
  [
    "Financials",
    "暫無可靠數據",
    "觀望",
    "曲線上移理論上利好息差，但地緣風險和信用風險令板塊訊號不清。",
  ],
  [
    "Health Care",
    "混合 / 暫無可靠精確數據",
    "防守未成主線",
    "大市 risk-on 時資金偏向科技與周期，醫療未見明顯避險溢價。",
  ],
  [
    "Utilities / Real Estate",
    "暫無可靠數據",
    "受債息壓住",
    "10Y 在 4.63% 附近，rate-sensitive 板塊短線仍要看債息方向。",
  ],
];

const stockRows = [
  [
    "MU / memory chain",
    "MU 約 +12%；DRAM ETF 約 +11%",
    "CNBC 指資金追入 memory names；Micron、Western Digital、Seagate 均約 +12%，成為 AI trade 修復核心。",
  ],
  [
    "SMH / SOX",
    "SMH 約 +4.5%；PHLX Sox 約 +4.6% 至 +4.9%",
    "半導體由上週急跌後回補，今次升幅足以帶動 Nasdaq，但 breadth 仍未算全面。",
  ],
  [
    "NVDA / AMD / INTC / MRVL",
    "NVDA 約 +2%；AMD 約 +8%；INTC 約 +8%；MRVL 逾 +6%",
    "晶片股普遍反彈，市場等待 Alphabet、Tesla、IBM、TXN、ServiceNow 等財報驗證 AI capex 需求。",
  ],
  [
    "MMM",
    "$170.76 / +7.32%",
    "3M Q2 adjusted EPS $2.40、收入 $6.5B，並上調全年 adjusted EPS 指引至 $8.80-$8.95。",
  ],
  [
    "GM",
    "$79.52 / +4.9%",
    "GM Q2 revenue $48.03B、adjusted EPS $3.57，均高於 LSEG 預期；公司上調多項全年盈利指引。",
  ],
  [
    "SPCX / 高 beta IPO",
    "早段曾升近 6%；收市來源約 +3%",
    "Macquarie 重申 outperform 後反彈，顯示高 beta 題材股仍有交易盤，但仍低於 IPO 價附近。",
  ],
  [
    "ADBE / software",
    "Morgan Stanley 降評至 underweight",
    "AI 轉型和 freemium 模式令執行風險被重新定價；software 今日相對半導體弱。",
  ],
  [
    "GOOGL / TSLA / IBM",
    "財報前觀望",
    "三者將於 7/22 收市後公布，市場要看 Cloud/AI capex 回報、Tesla margin/robotaxi、IBM enterprise tech demand。",
  ],
];

const macroRows = [
  [
    "Treasury yields",
    "CNBC：2Y 4.264%、10Y 4.63%、30Y 5.133%；TE 2Y 4.28%、10Y 4.63%、30Y 5.13%",
    "收益率曲線整體上移；10Y 接近 4.63% 會提高 growth stock 的估值門檻。",
  ],
  [
    "FedWatch / rate odds",
    "Kalshi tracker 7/21 4:30pm UTC：hold 89%、+25bp 10%、cut 1%；Altinla/CME-style：hold 84.5%、+25bp 15.5%",
    "主線仍是 7/29 不加息，但油價反彈令 hike tail risk 未消失；來源差異主要來自市場與更新時間不同。",
  ],
  [
    "Oil",
    "Reuters：WTI $84.91 +2.0%；Brent $91.01 +2.0%，均為約五週高位",
    "中東衝突、Houthi 封鎖威脅和 tanker 風險令 energy risk premium 上升。",
  ],
  [
    "Gold / dollar",
    "Kitco：spot gold 約 $4,080.20 +1.83%；DXY 約 101.20-101.22；TE DXY 101.05",
    "黃金能在高債息和強美元下上升，反映避險和 short covering 同時存在。",
  ],
  [
    "Tariffs",
    "CNBC：美國宣布對部分加拿大汽車、酒類、乳製品等加徵 50% 關稅，30 日後生效",
    "不是全市場主導因素，但會提高供應鏈和通脹不確定性，特別係汽車與消費品。",
  ],
  [
    "Market breadth",
    "Nasdaq 52-week lows/highs 在部分即時源仍顯示偏弱；CNBC 指投資者等待 earnings follow-through",
    "今日升市由半導體和財報 beat 帶動，不等於所有板塊已經同步修復。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$66,360.00",
    "+1.87%",
    "Binance Vision 2026-07-21 20:00 UTC 1m close；BTC 跟住 risk-on 反彈，但仍要看美元與債息。",
  ],
  [
    "ETHUSDT",
    "$1,922.02",
    "+1.25%",
    "ETH 升幅少於 BTC，反映 crypto beta 有承接但未算全面爆發。",
  ],
  [
    "SOLUSDT",
    "$77.86",
    "+0.28%",
    "SOL 基本橫行，較大型幣弱；若 Nasdaq follow-through 不足，high beta crypto 要小心。",
  ],
];

const technicalRows = [
  [
    "S&P 500",
    "7,500 / 7,535 / 7,575",
    "收回 7,500 上方是正面；若明日跌穿 7,500，今日反彈會變成單日 short covering。",
  ],
  [
    "Nasdaq Composite",
    "25,800 / 26,000 / 26,150",
    "重上 25,800 是第一步；若財報後企穩 26,000，AI trade 才算真正修復。",
  ],
  [
    "SMH / Sox",
    "SMH 558 / 584 / 600；Sox 12,000 / 12,300",
    "今日大陽燭要有第二日確認；若跌回 558 附近，代表追貨信心不足。",
  ],
  [
    "VIX",
    "17 / 18.5 / 20",
    "VIX 跌回 17 下方有利 risk-on；但中東 headline 仍可快速推高波動。",
  ],
  [
    "WTI / Brent",
    "WTI 85；Brent 91 / 95",
    "Brent 企穩 91 以上會繼續推高通脹預期；若回落，科技估值壓力可紓緩。",
  ],
];

const watchRows = [
  "Alphabet、Tesla、IBM、ServiceNow、Texas Instruments 等 7/22 收市後財報：重點看 AI capex 回報、cloud margin、EV margin 和 enterprise tech budget。",
  "10Y yield：4.63% 是今日核心壓力位；若升穿 4.70%，growth multiple 會再受壓。",
  "Oil：Brent $91 以上反映 geopolitical premium 未消；若上試 $95，留意能源股跑贏但大市估值受壓。",
  "SMH follow-through：半導體要連升及守住成交，否則今日 +4% 只會被解讀為 oversold bounce。",
  "Crypto：BTC 20:00 UTC close 升至 $66,360，但 SOL 幾乎無升，代表高 beta appetite 未算一致。",
];

const sourceFootnotes = [
  "主要指數採 CNBC 收市口徑；S&P 500 在 Investing.com 報 7,509.21，與 CNBC 7,509.20 只屬四捨五入差異。",
  "Russell 2000 指數即時來源有差異；本文主表以 IWM Yahoo historical close 作小型股 proxy，避免硬填未能完全交叉核對的 RUT 精確值。",
  "Yahoo chart API 在本環境回 HTTP 429；能用 Yahoo historical / CNBC quote / Reuters 類報道交叉核對的數據才列精確數字，否則列「暫無可靠數據」。",
  "板塊使用 ETF 或 sector proxy；ETF close 與正式 S&P sector index 可能有輕微差異。",
  "Treasury yields 採 CNBC Tradeweb 快照，並以 Trading Economics/YCharts 作交叉核對。",
  "FedWatch 不是官方 Fed 指引；本文同時列 Kalshi tracker 與 CME-style fed funds futures 來源，並標示更新時間差異。",
  "Crypto 使用 Binance Vision public data API 1-minute kline，採 2026-07-21 20:00 UTC（美股 4:00pm ET 附近）close，對比 2026-07-20 20:00 UTC。",
];

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="card">
      <h2>
        <span>{number}</span>
        {title}
      </h2>
      {children}
    </section>
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
          <tr key={row.join("-")}>
            {row.map((cell, index) => (
              <td key={`${cell}-${index}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function USCloseBrief20260721() {
  return (
    <main className="page">
      <style>{`
        .page {
          width: 1120px;
          margin: 0 auto;
          padding: 34px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.55;
        }
        .hero {
          background: linear-gradient(135deg, #111827 0%, #0f766e 48%, #1d4ed8 100%);
          color: white;
          border-radius: 28px;
          padding: 34px;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
        }
        h1 { margin: 0 0 10px; font-size: 46px; line-height: 1.08; letter-spacing: -0.03em; }
        .subtitle { font-size: 19px; opacity: 0.92; }
        .meta { margin-top: 14px; display: flex; gap: 12px; flex-wrap: wrap; }
        .pill {
          display: inline-flex;
          border-radius: 999px;
          padding: 7px 12px;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.24);
          font-size: 13px;
        }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .card {
          margin-top: 18px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 22px;
          padding: 22px;
          box-shadow: 0 16px 34px rgba(15, 23, 42, 0.07);
          break-inside: avoid;
        }
        h2 {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 13px;
          color: #0f766e;
          font-size: 23px;
        }
        h2 span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: #ecfdf5;
          color: #047857;
          font-size: 15px;
          font-weight: 800;
        }
        h3 { margin: 16px 0 8px; color: #334155; font-size: 18px; }
        ul { margin: 0; padding-left: 22px; }
        li { margin: 7px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
        th {
          text-align: left;
          color: #475569;
          background: #f1f5f9;
          border-bottom: 1px solid #cbd5e1;
          padding: 9px;
        }
        td { vertical-align: top; border-bottom: 1px solid #e5e7eb; padding: 9px; }
        .lead {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 16px;
        }
        .stat {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 18px;
          padding: 14px;
        }
        .stat strong { display: block; font-size: 24px; margin-top: 4px; }
        .red { color: #b91c1c; font-weight: 800; }
        .green { color: #047857; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .note { font-size: 12.5px; color: #64748b; }
        .callout {
          border-left: 5px solid #0f766e;
          background: #ecfdf5;
          padding: 13px 15px;
          border-radius: 14px;
          margin-top: 10px;
        }
        a { color: #1d4ed8; text-decoration: none; overflow-wrap: anywhere; }
        @media print {
          .page { width: auto; padding: 20px; }
          .card { box-shadow: none; }
        }
      `}</style>

      <section className="hero">
        <h1>美股收盤懶人包｜完整版</h1>
        <div className="subtitle">
          {reportDate} 收市｜晶片股急彈撐起大市，油價債息仍係壓力線
        </div>
        <div className="meta">
          <span className="pill">{publishedAt}</span>
          <span className="pill">資料口徑：美股 4:00pm ET 附近</span>
          <span className="pill">
            Crypto：Binance Vision 20:00 UTC 1m close
          </span>
        </div>
        <div className="lead">
          <div className="stat">
            S&P 500
            <strong>7,509.20</strong>
            <span>+0.89%</span>
          </div>
          <div className="stat">
            Nasdaq
            <strong>25,837.21</strong>
            <span>+1.29%</span>
          </div>
          <div className="stat">
            VIX
            <strong>16.93</strong>
            <span>-9.22%</span>
          </div>
        </div>
      </section>

      <Section number="01" title="30秒重點">
        <ul>
          <li>
            美股三大指數終止三連跌：Dow +0.74%、S&P 500 +0.89%、Nasdaq
            +1.29%，主力由晶片股和財報 beat 帶動。
          </li>
          <li>
            半導體係今日引擎：SMH 約 +4.5%，CNBC 指 Micron +12%、Intel
            +8%、Marvell 逾 +6%。
          </li>
          <li>
            3M、GM
            業績好過預期並上調全年指引，令市場暫時由「油價壓力」轉返去「earnings
            可以頂住」。
          </li>
          <li>
            宏觀未完全放晴：WTI $84.91、Brent $91.01，同日 10Y 美債約
            4.63%，即係通脹與估值壓力仍在。
          </li>
          <li>
            Fed 7/29 hold 仍是主線，但不同市場工具顯示 +25bp 機率約
            10%-15.5%；油價係最大變數。
          </li>
          <li>
            Crypto（Binance 20:00 UTC）：BTC $66,360（+1.87%）、ETH
            $1,922.02（+1.25%）、SOL $77.86（+0.28%）。
          </li>
        </ul>
      </Section>

      <Section number="02" title="大市一眼睇">
        <DataTable
          headers={["指數", "收市", "變動", "解讀"]}
          rows={indexRows}
        />
        <p className="note">
          CNBC/Yahoo/Investing.com 對 S&P 500、Dow、Nasdaq close 大致一致；VIX
          即時頁與 historical table 有 0.12 點差異，本文採較適合收市報告的
          historical close。
        </p>
      </Section>

      <Section number="03" title="板塊紅綠燈 / 熱度圖">
        <DataTable
          headers={["板塊 / ETF", "收市變動", "狀態", "白話解讀"]}
          rows={sectorRows}
        />
      </Section>

      <Section number="04" title="今日升跌原因">
        <h3>點解今日升？</h3>
        <ul>
          <li>
            <strong>晶片股補跌後大反彈：</strong>上週 AI/semis
            被急沽，今日資金趁估值回落重新買入 memory、GPU、foundry 相關股份。
          </li>
          <li>
            <strong>財報 season 開局好：</strong>CNBC 指已公布的約 66 間 S&P 500
            公司中，約 88% 盈利高於預期；3M、GM 係今日最清晰例子。
          </li>
          <li>
            <strong>市場暫時看穿中東 headline：</strong>
            美伊衝突仍在，但有調停消息，股市今日選擇先交易 earnings 和 semis
            rebound。
          </li>
        </ul>
        <h3>有咩仍要小心？</h3>
        <ul>
          <li>Brent 收 $91.01，若繼續向 $95 行，通脹和 Fed 風險會再上枱。</li>
          <li>10Y 4.63%、30Y 5.13% 附近，對高估值 growth 仍是壓力。</li>
          <li>
            升市 breadth 未算完美，半導體升幅遠大過大市；如果 mega-cap
            財報無法接力，反彈可能好快降溫。
          </li>
        </ul>
      </Section>

      <Section number="05" title="宏觀白話版">
        <DataTable
          headers={["項目", "數字 / 來源口徑", "市場意思"]}
          rows={macroRows}
        />
      </Section>

      <Section number="06" title="債息、美元、黃金、原油">
        <ul>
          <li>
            <strong>美債：</strong>CNBC Tradeweb 指 2Y 4.264%、10Y 4.63%、30Y
            5.133%；Trading Economics 表格亦顯示 10Y 4.63%、30Y 5.13%。
          </li>
          <li>
            <strong>美元：</strong>Kitco 報 DXY near 101.22；Trading Economics
            報 101.05。美元偏強但未阻止今日黃金反彈。
          </li>
          <li>
            <strong>黃金：</strong>Kitco PM 指 spot gold 約 $4,080.20，升
            1.83%；另 Kitco commentary 指最活躍期金升 $72.30 / 1.80%。
          </li>
          <li>
            <strong>原油：</strong>Reuters 報 WTI settle $84.91（+2.0%）、Brent
            $91.01（+2.0%），是約五週高位。
          </li>
        </ul>
      </Section>

      <Section number="07" title="重點股票">
        <DataTable headers={["股票", "收市 / 變動", "重點"]} rows={stockRows} />
      </Section>

      <Section number="08" title="Crypto：BTC / ETH / SOL">
        <DataTable
          headers={[
            "幣種",
            "Binance 20:00 UTC close",
            "對上一美股交易日 20:00 UTC",
            "解讀",
          ]}
          rows={cryptoRows}
        />
        <p className="note">
          Binance direct API 在本環境受地區限制；本報告使用 Binance Vision
          public data API 取得 1-minute kline。時間點為 2026-07-21 20:00
          UTC，即美股 4:00pm ET 附近；變化率對比 2026-07-20 20:00 UTC。
        </p>
      </Section>

      <Section number="09" title="技術位與風險線">
        <DataTable headers={["資產", "關鍵位", "點睇"]} rows={technicalRows} />
      </Section>

      <Section number="10" title="明日交易計劃 / 觀察清單">
        <ul>
          {watchRows.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section number="11" title="操作提示">
        <div className="callout">
          今日升市值得尊重，但不要只看 Nasdaq +1.29%
          就以為風險全走。真正驗證位係： 半導體有無第二日
          follow-through、Alphabet/Tesla/IBM 財報能否接力、以及 Brent
          會否繼續企在 $91 以上。
        </div>
        <ul>
          <li>
            短線追貨要分清「業績推動」和「純 short
            covering」；前者可以持續，後者容易一日完。
          </li>
          <li>
            若 10Y 升穿 4.70% 或 Brent 上試 $95，growth 倉位要減
            beta、保留現金彈性。
          </li>
          <li>
            半導體可以用分段吸納或等回踩；不要在單日 +4%
            後把所有止蝕線放得太闊。
          </li>
        </ul>
      </Section>

      <Section number="12" title="來源、口徑與免責聲明">
        <h3>資料口徑</h3>
        <ul>
          {sourceFootnotes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3>主要來源連結</h3>
        <ul>
          {sources.map((source) => (
            <li key={source.url}>
              <a href={source.url}>{source.name}</a>
            </li>
          ))}
        </ul>
        <p className="note">{disclaimer}</p>
      </Section>
    </main>
  );
}
