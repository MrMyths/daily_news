import React from "react";

const reportDate = "2026-08-26";
const publishedAt = "香港時間 2026-08-27 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "Reuters/Yahoo Finance - Wall Street stocks end tad lower after hot inflation data ahead of Nvidia earnings",
    url: "https://finance.yahoo.com/markets/stocks/articles/wall-street-dips-hot-inflation-184248835.html",
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
    name: "U.S. Treasury - Daily Treasury par yield curve rates",
    url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value_month=202608&type=daily_treasury_yield_curve",
  },
  {
    name: "BEA - Personal Income and Outlays, July 2026",
    url: "https://www.bea.gov/news/2026/personal-income-and-outlays-july-2026",
  },
  {
    name: "BEA - GDP second estimate and corporate profits, Q2 2026",
    url: "https://www.bea.gov/news/2026/gdp-second-estimate-and-corporate-profits-2nd-quarter-2026",
  },
  {
    name: "Trading Economics - U.S. durable goods orders",
    url: "https://tradingeconomics.com/united-states/durable-goods-orders",
  },
  {
    name: "CNBC - Gold drops after U.S. inflation data",
    url: "https://www.cnbc.com/2026/08/26/gold-holds-steady-as-investors-focus-on-us-inflation-data.html",
  },
  {
    name: "CNBC - Oil stable after Iran says deal reached with Oman on Hormuz",
    url: "https://www.cnbc.com/2026/08/26/oil-falls-as-the-us-pivots-to-economic-pressure-on-iran-.html",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "NVIDIA Newsroom - Q2 FY2027 financial results",
    url: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027",
  },
  {
    name: "CNBC - Nvidia Q2 FY2027 earnings live updates",
    url: "https://www.cnbc.com/2026/08/26/nvidia-nvda-earnings-report-q2-2027-live-updates.html",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const keyPoints = [
  "美股週三幾乎打和但偏弱：Dow -113.52 點 / -0.21% 至 53,463.88；S&P 500 -1.58 點 / -0.02% 至 7,675.70；Nasdaq -21.10 點 / -0.08% 至 26,130.20；Russell 2000 -0.14% 至 3,005.90；VIX 反而跌至 15.21。",
  "主線係「PCE 有少少熱、Nvidia 盤後大考、油價繼續降溫」互相拉扯；市場冇大跌，但亦唔願在 AI 核心業績前追高。",
  "BEA 指 7 月 PCE price index 按年 +3.7%、core PCE +3.3%；headline 高過部分預期 0.1 個百分點，令 9 月加息尾部風險仍然未走。",
  "官方 Treasury 3:30pm ET 附近曲線：2Y 4.19%、10Y 4.66%、30Y 5.18%；長端仍高，growth 估值未算完全安全。",
  "板塊內部分化：XLK +0.61%、XLE +0.60%、XLU +0.46% 撐住；XLV -1.00%、XLY -0.67%、XLRE -0.60%、XLC -0.50% 拖累。",
  "Nvidia 正股收 $209.66 / -1.59%，但盤後公布 Q2 FY2027 revenue $96.2B、non-GAAP EPS $2.22、Q3 revenue guide $108B，盤後一度反彈；今日收市報告要分清「收市前觀望」同「收市後業績」兩件事。",
  "Crypto 採 Binance Vision 2026-08-26 20:00 UTC 1m close（貼近美股 4:00pm ET）：BTC $78,453.68（較 8/25 20:00 UTC -0.59%）、ETH $2,471.37（+0.36%）、SOL $96.75（-1.17%）。",
];

const indexRows = [
  [
    "Dow Jones",
    "53,463.88",
    "-113.52 / -0.21%",
    "Reuters/Yahoo close 顯示 Dow 由前一日高位回落；跌幅溫和，反映市場是等 catalyst 多過恐慌出貨。",
  ],
  [
    "S&P 500",
    "7,675.70",
    "-1.58 / -0.02%",
    "幾乎平收；PCE headline 偏熱壓住估值，但油價回落與 Nvidia 盤後期待限制跌幅。",
  ],
  [
    "Nasdaq Composite",
    "26,130.20",
    "-21.10 / -0.08%",
    "科技股沒有崩，但 Nvidia 收市前跌 1.59%，令 Nasdaq 未能延續前一日反彈。",
  ],
  [
    "Russell 2000",
    "3,005.90",
    "-4.12 / -0.14%",
    "小型股仍守 3,000 上方；2Y / credit 條件未轉鬆之前，Russell 只算橫行消化。",
  ],
  [
    "VIX",
    "15.21",
    "-0.24 / -1.55%",
    "Cboe 顯示 VIX 收 15.21，與股指微跌不同步；期權市場未把 Nvidia / Jackson Hole 視為即時恐慌。",
  ],
];

const sectorRows = [
  [
    "Technology / XLK",
    "$182.84 / +0.61%",
    "最強",
    "大型 software/platform 部分抵消 NVDA 收市前下跌；但追入要看盤後 earnings 能否延續。",
  ],
  [
    "Energy / XLE",
    "$62.43 / +0.60%",
    "強",
    "油價第三日受壓但能源股反而反彈，似是前兩日跌得急後 short-covering，多過油價利好。",
  ],
  [
    "Utilities / XLU",
    "$43.51 / +0.46%",
    "防守綠",
    "低 VIX、指數橫行下，收益型防守板塊有資金停泊；不是典型全面 risk-on。",
  ],
  [
    "Semiconductors / SOXX",
    "$515.40 / +0.26%",
    "微強",
    "SOXX 小升但 NVDA 收市前跌，反映市場在業績前做相對輪動，唔係整個半導體板塊單邊上攻。",
  ],
  [
    "Materials / XLB",
    "$53.67 / +0.17%",
    "微綠",
    "美元回升限制 commodity beta，但 durable goods / capex 訊號不差，令材料未有明顯沽壓。",
  ],
  [
    "Financials / XLF",
    "$58.26 / -0.09%",
    "近持平",
    "曲線仍高但風險胃納一般；金融股缺乏新催化。",
  ],
  [
    "Consumer Staples / XLP",
    "$86.27 / -0.29%",
    "偏弱",
    "防守消費沒有明顯避險流入，市場更關注 PCE 對實質購買力的壓力。",
  ],
  [
    "Communication Services / XLC",
    "$112.61 / -0.50%",
    "弱",
    "META 雖升，但 Alphabet 跌拖累通訊服務；mega-cap 內部輪動明顯。",
  ],
  [
    "Real Estate / XLRE",
    "$45.09 / -0.60%",
    "弱",
    "10Y / 30Y 仍高，REITs 對長端息敏感，今日未能受惠於油價回落。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$117.16 / -0.67%",
    "弱",
    "Intuit、Tesla 等高估值/消費相關名字偏弱，顯示市場對 household demand 仍保守。",
  ],
  [
    "Health Care / XLV",
    "$173.54 / -1.00%",
    "最弱",
    "醫療防守股成為最大拖累；今日不是純防守切換，而是 index-level wait-and-see。",
  ],
];

const macroRows = [
  [
    "PCE / 收入消費",
    "PCE YoY +3.7%；core PCE YoY +3.3%；PCE spending +0.2%；personal income +0.4%",
    "BEA 官方數據顯示 headline PCE 比市場預期略熱，core 符合預期；通脹未失控，但足夠令 Fed 9 月選項保持開放。",
  ],
  [
    "GDP second estimate",
    "Q2 real GDP +1.5% SAAR；Q1 +2.1%",
    "BEA 維持 Q2 GDP 初值不變；消費與投資支撐增長，但進口與政府開支拖累，經濟不是硬著陸但增速放慢。",
  ],
  [
    "Durable goods",
    "July durable goods +1.1% m/m；ex-transportation +0.4%",
    "Trading Economics / Census 口徑顯示 headline 好過預期，但核心資本開支訊號較溫和，對 cyclical 只是有限支持。",
  ],
  [
    "美債息",
    "2Y 4.19%；10Y 4.66%；30Y 5.18%",
    "U.S. Treasury 3:30pm ET CMT 曲線顯示長端仍在高位；即使油價回落，估值折現率仍是 growth 股的最大天花板。",
  ],
  [
    "FedWatch / 利率定價",
    "Investing.com 8:35pm ET：9月 hold 64.3%；+25bp 35.7%；其他即時報導約 38%-44% 加息機率",
    "FedWatch 類工具隨 futures 價格跳動，本文採 Investing.com 收市後截數，並標示其他來源在 PCE 後曾見較高加息機率。",
  ],
  [
    "油價",
    "Brent $87.84 / -$0.74；WTI $82.23 / -$0.13",
    "CNBC 指 Iran/Oman Hormuz 安排令油價早段跌逾 3%，最後收窄至近持平；油價下跌仍幫通脹預期降溫。",
  ],
  [
    "黃金",
    "Spot gold $4,592.97 / -1.4%；gold futures settle $4,653.30 / -0.9%",
    "CNBC 指 PCE 後加息押注升，美元回升，金價由三個月高位回落；避險/貶值交易短線降溫。",
  ],
  [
    "美元",
    "DXY 約 99.17（Yahoo chart）；CNBC 金市報導指美元日內 +0.3%",
    "美元在 PCE 後回升，與金價下跌一致；但不同來源時間點略有差異，所以用「約」處理。",
  ],
];

const stockRows = [
  [
    "NVDA",
    "收 $209.66 / -1.59%；盤後 Q2 FY2027 revenue $96.2B、non-GAAP EPS $2.22、Q3 revenue guide $108B",
    "收市前市場怕 AI bellwether 失手，所以股價先跌；盤後官方業績及 CNBC 快訊顯示 revenue/EPS/guidance 全部高過市場，短線會左右週四科技股。",
  ],
  [
    "META / GOOGL",
    "META $576.14 / +1.07%；GOOGL $342.00 / -1.43%",
    "同屬 mega-cap 但走勢分裂，反映資金不是盲目買大型科技，而是在事件與監管風險之間做選擇。",
  ],
  [
    "INTU",
    "$345.88 / -3.24%",
    "延續前一日盤後指引壓力，成為 software / SMB demand 的負面參考。",
  ],
  [
    "Semis ex-NVDA",
    "AMD +0.37%；MRVL +1.97%；MU +0.58%；WDC +4.02%",
    "記憶體/儲存與部分 AI supply chain 仍有買盤，但 NVDA 業績前不敢全面押注。",
  ],
  [
    "ACN / enterprise IT",
    "ACN $181.38 / -2.97%",
    "企業 IT 服務偏弱，提示 AI capex 強不代表所有科技收入線同時受惠。",
  ],
  [
    "本週焦點",
    "Nvidia conference call、Warsh Jackson Hole、7Y auction、PCE 後利率定價",
    "今日真正答案在收市後先開始揭盅；週四要看 NVDA 盤後升幅能否帶動 breadth，而不只是單一股票重估。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$78,453.68",
    "-0.59%",
    "Binance Vision 2026-08-26 20:00 UTC 1m close；比較基準為 2026-08-25 20:00 UTC $78,922.01。",
  ],
  [
    "ETHUSDT",
    "$2,471.37",
    "+0.36%",
    "同一採樣時間；ETH 逆市微升，但幅度不大，未見明顯 altcoin risk-on。",
  ],
  [
    "SOLUSDT",
    "$96.75",
    "-1.17%",
    "SOL 跌幅大過 BTC，顯示高 beta crypto 在 PCE / 利率不確定下仍受壓。",
  ],
];

const technicalRows = [
  [
    "S&P 500",
    "7,657 / 7,650 是即日支持；7,690 / 7,700 是第一阻力；7,816 附近仍是近期高位區。",
    "收 7,675.70 代表未失守前一日區間，但連續兩日未能有效突破 7,700；要等 NVDA 帶動 breadth 才算確認。",
  ],
  [
    "Nasdaq",
    "26,020 是即日低位支持；26,190 是日內高位阻力；26,300 是下一級反彈目標。",
    "收 26,130.20，低過前一日 26,151.30；收市前仍是橫行，不是 AI breakout。",
  ],
  [
    "Russell 2000",
    "3,000 心理位仍守住；3,015 附近日高；跌穿 3,000 會削弱 breadth。",
    "小型股微跌但未破位；真正壓力在 2Y yield 和 credit spread，而不是單日指數波動。",
  ],
  [
    "VIX",
    "15.21，仍低於 20。",
    "低 VIX + 高事件密度代表保護相對便宜；若 NVDA / Warsh 引發 gap，市場容易由低波動切去追保護。",
  ],
];

const eventRows = [
  "Nvidia earnings call 與週四盤前反應：重點是 Q3 $108B guide、FY2028 growth commentary、China data center revenue exclusion、gross margin 74% 附近能否被市場接受。",
  "Warsh Jackson Hole speech：市場會聽 Fed 是否容忍 headline PCE 3.7%，以及對長端債息 / 財政風險有無安撫。",
  "7Y Treasury auction：2Y/5Y 後市場會看 belly demand；若拍賣弱，10Y/30Y 壓力可能再回來。",
  "油價與 Hormuz headline：CNBC 報 Iran/Oman deal 仍需美方接受，任何反覆都可能重新推高 inflation premium。",
  "下個數據窗口：August CPI / payrolls 前，FedWatch 機率可能在 35%-45% 加息區間內大幅擺動。",
];

const actionRows = [
  [
    "短線交易",
    "SPX 未突破 7,700 前仍是 range trade；若週四 NVDA 帶動 Nasdaq gap up，要看 SOXX、QQQ、breadth 是否同步。",
  ],
  [
    "板塊配置",
    "科技可等待 earnings confirmation；防守與能源只能作輪動，未見足夠證據全面 risk-on。",
  ],
  [
    "風控",
    "PCE 後利率路徑未定，低 VIX 不等於低風險；高 beta 倉位要預先設定 event gap 風險上限。",
  ],
  [
    "資料口徑",
    "指數採 Reuters/Yahoo final close；部分第三方直播頁仍顯示較早截數（如 S&P 7,669.96 / Dow 53,448.71 / Nasdaq 26,053.39），本文優先更終局的 Reuters/Yahoo close 並註明差異。",
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

export default function USCloseBrief20260826() {
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
          {reportDate} 收市｜PCE 偏熱但市場未失控；Nvidia 盤後成為 AI trade
          下一個方向盤
        </div>
        <div className="meta">
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">語氣：繁中・自然廣東話</span>
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
        <h2>3）今日點解跌唔深？</h2>
        <div className="grid">
          <div className="callout">
            <h3>PCE headline 熱少少，足夠壓住追價</h3>
            <p>
              BEA 報 7 月 PCE YoY 3.7%、core 3.3%。不是災難，但市場本身已對 Fed
              很敏感，所以指數即使跌得少，都欠缺突破動力。
            </p>
          </div>
          <div className="callout">
            <h3>Nvidia 收市後先揭盅</h3>
            <p>
              NVDA 收市前跌 1.59%，但盤後公布的 revenue、EPS 和 Q3 guide
              均高過市場。即是今日 regular session 是觀望，真正反應要看下一日。
            </p>
          </div>
          <div className="callout">
            <h3>油價回落幫手守住情緒</h3>
            <p>
              CNBC 指 WTI 收 $82.23、Brent 收 $87.84，地緣風險 premium
              有所回吐；如果油價冇再升，通脹恐慌暫時不會加速。
            </p>
          </div>
          <div className="callout">
            <h3>低 VIX 令市場有等消息的空間</h3>
            <p>
              Cboe VIX 收 15.21，反而低過前一日。市場不是全面避險，而是等 Nvidia
              call、Warsh Jackson Hole 同債券拍賣再定方向。
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
        <DataTable
          headers={["項目", "最新數字", "白話解讀"]}
          rows={macroRows}
        />
      </section>

      <section className="section">
        <h2>6）重點股票 / 主題</h2>
        <DataTable headers={["股票 / 主題", "數字", "解讀"]} rows={stockRows} />
      </section>

      <section className="section">
        <h2>7）Crypto：BTC / ETH / SOL</h2>
        <DataTable
          headers={["幣種", "4pm ET 附近價格", "較上一美股收市", "口徑"]}
          rows={cryptoRows}
        />
        <p className="small">
          註：直接 Binance API 在本環境可能返回 HTTP 451，所以採 Binance Vision
          public data 1-minute klines；時間點為 2026-08-26 20:00 UTC，貼近美股
          4:00pm ET。
        </p>
      </section>

      <section className="section">
        <h2>8）技術位</h2>
        <DataTable headers={["指標", "位置", "解讀"]} rows={technicalRows} />
      </section>

      <section className="section">
        <h2>9）未來 48 小時事件焦點</h2>
        <ul>
          {eventRows.map((event) => (
            <li key={event}>{event}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>10）交易計劃 / 觀察清單</h2>
        <DataTable headers={["範疇", "操作提示"]} rows={actionRows} />
      </section>

      <section className="section">
        <h2>11）最終觀點</h2>
        <p>
          今日不是一個「風險突然轉差」的收市，更似是「市場等答案」。PCE headline
          偏熱令利率尾部風險仍在，10Y / 30Y 仍高亦限制估值；但油價回落、VIX
          下降、S&P 500 守住短線區間，代表賣壓不算重。真正關鍵在 Nvidia
          盤後業績能否變成週四 broad-based AI rebound：如果只得 NVDA 自己升，而
          SOXX / QQQ / breadth 不跟，指數仍可能繼續 range trade；如果
          semis、mega-cap growth 和 Russell 同步改善，才可以把 view
          由「等待」升級為「重新 risk-on」。
        </p>
      </section>

      <section className="section">
        <h2>12）來源、口徑與免責聲明</h2>
        <SourceList />
        <p className="small">
          口徑：指數、ETF、個股以 Reuters/Yahoo final close 與 Yahoo chart
          交叉；VIX 採 Cboe；美債採 U.S. Treasury CMT 3:30pm ET official
          curve；PCE/GDP 採 BEA；durable goods 採 Trading
          Economics/Census；油價與金價採 CNBC；FedWatch 採 Investing.com
          收市後截數並標示其他即時來源差異。部分第三方直播頁仍保留較早截數，與
          Reuters/Yahoo final close
          有細微差異，本文優先終局收市數字；若無可靠數據則寫 「暫無可靠數據」。
        </p>
        <p>{disclaimer}</p>
      </section>
    </main>
  );
}
