import React from "react";

const reportDate = "2026-08-19";
const publishedAt = "香港時間 2026-08-20 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market news for Aug. 19, 2026",
    url: "https://www.cnbc.com/2026/08/18/stock-market-today-live-updates.html",
  },
  {
    name: "CNBC - S&P 500 futures after winning session",
    url: "https://www.cnbc.com/2026/08/19/stock-market-today-live-updates.html",
  },
  {
    name: "CNBC - Treasury doubles long-end buybacks",
    url: "https://www.cnbc.com/2026/08/19/treasury-announces-upscaled-buyback-operation-for-longer-term-debt-sending-yields-lower.html",
  },
  {
    name: "CNBC - July 2026 FOMC minutes",
    url: "https://www.cnbc.com/2026/08/19/fed-minutes-july-2026-officials-saw-need-for-rate-hike-if-inflation-doesnt-cool.html",
  },
  {
    name: "Sharecast - US close: Treasury buyback plan pulls yields lower",
    url: "https://www.sharecast.com/news/market-report-us-close/us-close-stocks-higher-as-treasury-buyback-plan-pulls-long8209term-yields-lower--23314372.html",
  },
  {
    name: "U.S. Federal Reserve - FOMC calendars and minutes",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
  },
  {
    name: "Federal Reserve H.15 - Selected Interest Rates",
    url: "https://www.federalreserve.gov/releases/h15/",
  },
  {
    name: "U.S. Treasury - Daily Treasury Rates",
    url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value_month=202608&type=daily_treasury_yield_curve",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "MarketScreener/Reuters - Gold surges as yields and dollar fall",
    url: "https://in.marketscreener.com/news/gold-surges-over-3-as-us-treasury-announcement-hurts-yields-dollar-ce7859d2da8ef32c",
  },
  {
    name: "MarketScreener/Reuters - Oil settles near four-week high",
    url: "https://www.marketscreener.com/news/oil-extends-climb-on-prolonged-hormuz-export-uncertainty-ce7859ddde80f72d",
  },
  {
    name: "Merck - Merck and Moderna Phase 3 INTerpath-001 results",
    url: "https://www.merck.com/news/merck-and-moderna-announce-phase-3-interpath-001-trial-of-intismeran-autogene-plus-keytruda-met-endpoints-of-recurrence-free-survival-rfs-and-distant-metastasis-free-survival-dmfs-in-patient/",
  },
  {
    name: "Target - Q2 2026 earnings release",
    url: "https://corporate.target.com/press/release/2026/08/target-corporation-reports-second-quarter-earnings",
  },
  {
    name: "Lowe's - Q2 2026 earnings release",
    url: "https://corporate.lowes.com/newsroom/press-releases/lowes-reports-second-quarter-2026-sales-and-earnings-results-08-19-26",
  },
  {
    name: "StockTitan SEC filing mirror - Marvell Google warrant",
    url: "https://www.stocktitan.net/sec-filings/MRVL/8-k-marvell-technology-inc-reports-material-event-40642dab2018.html",
  },
  {
    name: "Yahoo Finance chart data - market/ETF closes",
    url: "https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC?range=5d&interval=1d",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const keyPoints = [
  "美股終於止住三連跌：S&P 500 +0.21% 至 7,707.98，Dow +119.65 點 / +0.22%，Nasdaq +0.16%，Russell 2000 +0.50%；VIX 回落 6.00% 至 14.89。",
  "主線不是突然超級 risk-on，而是美國 Treasury 宣布將長端債券回購上限由 $2B 加到至少 $4B，10Y/30Y 債息即時回落，幫大市鬆一口氣。",
  "升市有保留：FOMC minutes 指很多官員認為若通脹不降，仍可能需要再加息；市場早段升幅收窄，反映 Fed tail risk 未消失。",
  "板塊分化好大：Health Care XLV +3.51% 由 Moderna +176.97% 帶動；Consumer Discretionary XLY +1.92%；但 SOXX -2.21%、XLK -1.07%，AI 半導體仍未修復。",
  "重點股票：MRNA 因 Merck/Moderna 個人化 mRNA 癌症療法 Phase 3 成功而暴升；TGT +4.28%、LOW +2.02% 受業績支持；MRVL +9.85% 因 Google custom silicon deal；AMD/AVGO/INTC 仍跌約 4%。",
  "Crypto 採 Binance Vision 2026-08-19 20:00 UTC 1m close（貼近美股 4:00pm ET）：BTC $68,398.35（+5.79%）、ETH $2,103.00（+9.89%）、SOL $82.31（+6.67%）。",
];

const indexRows = [
  [
    "Dow Jones",
    "53,463.05",
    "+119.65 / +0.22%",
    "升幅溫和但成功扭轉前一日跌勢；防守、消費與醫療幫手托住指數。",
  ],
  [
    "S&P 500",
    "7,707.98",
    "+16.22 / +0.21%",
    "CNBC/Sharecast/Yahoo 口徑一致；收復 7,700，但離早段高位有距離。",
  ],
  [
    "Nasdaq Composite",
    "26,331.09",
    "+41.38 / +0.16%",
    "長債息回落本應利好 growth，但半導體繼續弱，限制 Nasdaq 反彈。",
  ],
  [
    "Russell 2000",
    "3,032.94",
    "+15.05 / +0.50%",
    "利率壓力稍降，小型股有彈性；但仍要看 10Y 能否守在 4.65% 附近以下。",
  ],
  [
    "VIX",
    "14.89",
    "-0.95 / -6.00%",
    "避險需求降溫，市場由前兩日的 yield scare 回到較冷靜狀態。",
  ],
];

const sectorRows = [
  [
    "Health Care / XLV",
    "$175.68 / +3.51%",
    "最強",
    "Moderna 暴升推高醫療 beta，亦有防守資金承接，是今日升市主力。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$118.59 / +1.92%",
    "強綠",
    "TSLA +4.23%、家居零售反彈，長債息回落令長久期消費股喘定。",
  ],
  [
    "Materials / XLB",
    "$52.52 / +1.43%",
    "綠燈",
    "美元回落與金屬/黃金走強帶動 cyclicals，追回前一日跌幅。",
  ],
  [
    "Consumer Staples / XLP",
    "$86.54 / +1.12%",
    "綠燈",
    "市場仍偏謹慎，防守消費繼續有資金泊入。",
  ],
  [
    "Real Estate / XLRE",
    "$44.99 / +0.81%",
    "中性偏強",
    "10Y/30Y 回落對 REITs 是短線 relief，但高利率大背景未變。",
  ],
  [
    "Communication Services / XLC",
    "$111.32 / +0.76%",
    "中性偏強",
    "GOOGL 微升、META 反彈，mega-cap communication 修復部分跌幅。",
  ],
  [
    "Utilities / XLU",
    "$44.02 / 0.00%",
    "中性",
    "收益型板塊未明顯受惠，資金今日更集中在醫療與消費。",
  ],
  [
    "Energy / XLE",
    "$63.58 / -0.16%",
    "微紅",
    "油價創近四週高但能源股已連升，今日轉為消化 geopolitics premium。",
  ],
  [
    "Financials / XLF",
    "$57.48 / -0.62%",
    "紅燈",
    "長端利率急跌壓住銀行利差想像，金融未能跟大市升。",
  ],
  [
    "Industrials / XLI",
    "$181.95 / -0.88%",
    "弱",
    "高融資成本與全球風險未解除，工業股仍見沽壓。",
  ],
  [
    "Technology / XLK",
    "$183.64 / -1.07%",
    "弱",
    "AI hardware 估值繼續被修正，Apple/Microsoft 反彈都抵消不了半導體壓力。",
  ],
  [
    "Semiconductors / SOXX",
    "$519.67 / -2.21%",
    "急紅",
    "AMD/AVGO/INTC 跌約 4%，MRVL 獨立利好不足以救整個 chip basket。",
  ],
];

const stockRows = [
  [
    "MRNA / MRK",
    "MRNA $174.38 / +176.97%",
    "Merck 與 Moderna 宣布 INTerpath-001 Phase 3 達到 recurrence-free survival 與 distant metastasis-free survival endpoint，市場重新定價 mRNA oncology pipeline。",
  ],
  [
    "TGT",
    "$159.00 / +4.28%",
    "Q2 sales/adjusted EPS beat，並上調全年 outlook；但一部分 EPS 受 tariff refund 一次性收益帶動，要分清質素。",
  ],
  [
    "LOW / HD",
    "LOW $220.00 / +2.02%；HD $344.30 / +2.02%",
    "Lowe's Q2 adjusted EPS $4.40、comps +0.2% 並更新全年 outlook；長債息回落亦幫家居改善鏈估值。",
  ],
  [
    "MRVL",
    "$237.27 / +9.85%",
    "Marvell 披露與 Google custom silicon/TPU ecosystem commercial agreement，並向 Google 發出最多 58.97M 股 warrant。",
  ],
  [
    "AMD / AVGO / INTC / NVDA",
    "AMD -3.71%；AVGO -4.61%；INTC -4.02%；NVDA -0.99%",
    "OpenAI/AI capex 回報疑慮與前期升幅太急，令 chip trade 繼續去風險；NVDA 因業績前夕與估值支持相對抗跌。",
  ],
  [
    "AAPL / MSFT / GOOGL / META",
    "AAPL +2.19%；MSFT +0.56%；GOOGL +0.15%；META +0.43%",
    "mega-cap software/platform 較硬淨，但升幅不足以令 Nasdaq 明顯跑贏。",
  ],
  [
    "TSLA",
    "$351.12 / +4.23%",
    "長債息回落利好長久期 growth，亦帶動 discretionary；但仍屬高 beta 反彈，要看能否延續。",
  ],
  [
    "PANW / WMT",
    "PANW $359.76 / -3.84%；WMT $114.30 / -0.78%",
    "Palo Alto 未到正式業績期但 cybersecurity beta 偏弱；Walmart 在 Target 業績後未跟升，顯示零售反應分化。",
  ],
];

const macroRows = [
  [
    "Treasury yields",
    "Yahoo/CNBC：5Y 4.353%、10Y 約 4.65%（CNBC 4.637%）、30Y 約 5.19%（CNBC 5.184%）",
    "Treasury 擴大 10-30Y buyback 令長端急跌，這是今日大市反彈的第一推力。",
  ],
  [
    "Treasury buybacks",
    "CNBC：長端回購操作上限由 $2B 至少倍增至 $4B，9/9 至 11/4 生效",
    "政策目標是舒緩 10Y、20Y、30Y 流動性壓力；對股票是短線利好，但也會引起通脹/財政主導討論。",
  ],
  [
    "Fed minutes",
    "7/28-29 會議 9-3 hold 於 3.50%-3.75%；minutes 指 many participants 認為若通脹不降，tightening likely necessary",
    "市場不是完全無視 Fed，而是先交易 yield relief，再消化偏鷹 minutes。",
  ],
  [
    "FedWatch / 利率預期",
    "Investing/CME 口徑 8/19 20:45 EDT：9/16 hold 69.4%，加 25bp 30.6%",
    "較前一日 hold 機率略升，但約三成加息機率仍足以令 growth multiple 不敢太進取。",
  ],
  [
    "Oil",
    "Reuters：Brent $91.62（+0.7%），WTI $85.83（+1.1%），近四週高",
    "中東緊張與 Hormuz 交通受限仍支撐油價；這是 Fed 反通脹敘事的最大不確定。",
  ],
  [
    "Gold",
    "Reuters：spot gold 2:10pm EDT 約 $4,487.91（+3.6%），gold futures settle $4,545.30（+2.8%）",
    "長債息與美元同跌，黃金被避險與實質利率下行雙重推高；spot/futures 因截取時間有差異。",
  ],
  [
    "DXY / 美元",
    "Reuters 指美元約 -0.8%；Yahoo FX session 顯示 DX-Y.NYB 約 98.85，前一日 99.65",
    "美元轉弱支持黃金與部分 cyclicals；因 FX 24 小時交易，Yahoo 日期會滾到 8/20，報告採美股收市附近口徑。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$68,398.35",
    "+5.79% vs 8/18 20:00 UTC",
    "Treasury buyback 打低美元與長端 yield，BTC 即時受惠；短線要看 $68K 能否企穩。",
  ],
  [
    "ETHUSDT",
    "$2,103.00",
    "+9.89% vs 8/18 20:00 UTC",
    "三大幣中最強，重新站上 $2,100；risk-on crypto beta 明顯強過 Nasdaq。",
  ],
  [
    "SOLUSDT",
    "$82.31",
    "+6.67% vs 8/18 20:00 UTC",
    "突破 $80 心理位，彈性好，但仍要防止美股科技股弱勢拖累風險胃納。",
  ],
];

const watchList = [
  "SPX：7,700 重新收復是好事；若下一步守住 7,675-7,700，才算三日跌勢完成短線止血。",
  "Nasdaq：26,300 只係剛剛企回；如果 SOXX 繼續跌，Nasdaq 反彈會比 Dow/S&P 脆弱。",
  "SOXX：$519.67 已跌穿前一日 $531；短線先看 $515-$520 是否有買盤，反壓在 $531-$540。",
  "10Y / 30Y：10Y 4.65%、30Y 5.19% 是今日 relief 核心；若再抽回 4.70%/5.28%，升市會被質疑。",
  "Oil：Brent $91-$92 仍高，若 Hormuz/中東消息惡化，會抵消 Treasury buyback 帶來的估值 relief。",
  "BTC：$68K 是新短線分水嶺；若美元反彈而 BTC 仍企穩，才算 crypto 有獨立強勢。",
];

const eventRows = [
  [
    "8/20（週四）",
    "Initial jobless claims",
    "市場預期約 210K；若就業轉弱，會支持 hold trade，但也可能令 growth/recession narrative 轉差。",
  ],
  [
    "8/21（週五）",
    "Flash PMI / 企業景氣",
    "在油價高與 Fed 偏鷹之間，PMI 會幫市場判斷是軟著陸還是 stagflation-lite。",
  ],
  [
    "8/22-8/24",
    "Jackson Hole / Fed speakers",
    "Warsh 與其他官員若重申 inflation-first，長端 yield 可能再次主導。",
  ],
  [
    "8/26（週三）",
    "Nvidia 業績",
    "AI trade 的最大驗證位；SOXX 連跌令市場對 guidance、margin、capex ROI 更敏感。",
  ],
];

function Badge({
  tone,
  children,
}: {
  tone: "green" | "red" | "amber" | "blue";
  children: React.ReactNode;
}) {
  return <span className={`badge ${tone}`}>{children}</span>;
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
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
            {row.map((cell, index) => (
              <td key={`${cell}-${index}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function USCloseBrief20260819() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          margin: 0 auto;
          padding: 38px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.5;
        }
        .hero {
          background: radial-gradient(circle at 18% 18%, rgba(34, 197, 94, 0.28), transparent 28%),
            linear-gradient(135deg, #0f172a 0%, #14532d 54%, #111827 100%);
          color: white;
          border-radius: 28px;
          padding: 34px;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.24);
        }
        h1 { margin: 0 0 8px; font-size: 48px; line-height: 1.08; letter-spacing: -0.02em; }
        h2 { margin: 0 0 14px; color: #1d4ed8; font-size: 25px; }
        h3 { margin: 0 0 8px; color: #0f172a; font-size: 18px; }
        p { margin: 0 0 10px; }
        .sub { font-size: 18px; opacity: 0.92; }
        .meta { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 18px; }
        .badge {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 7px 12px;
          font-weight: 800;
          font-size: 13px;
          border: 1px solid rgba(255, 255, 255, 0.24);
        }
        .badge.green { background: #dcfce7; color: #166534; border-color: #bbf7d0; }
        .badge.red { background: #fee2e2; color: #991b1b; border-color: #fecaca; }
        .badge.amber { background: #fef3c7; color: #92400e; border-color: #fde68a; }
        .badge.blue { background: #dbeafe; color: #1e40af; border-color: #bfdbfe; }
        .hero .badge { color: white; background: rgba(255,255,255,0.12); }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 18px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 22px;
          padding: 22px;
          margin-top: 18px;
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.07);
          break-inside: avoid;
        }
        .card.compact { padding: 18px; }
        .stat {
          background: #f1f5f9;
          border-radius: 18px;
          padding: 16px;
          border: 1px solid #e2e8f0;
        }
        .stat .label { color: #64748b; font-size: 13px; font-weight: 800; text-transform: uppercase; }
        .stat .value { font-size: 24px; font-weight: 900; margin-top: 3px; }
        .redText { color: #b91c1c; font-weight: 900; }
        .greenText { color: #047857; font-weight: 900; }
        .amberText { color: #b45309; font-weight: 900; }
        ul { margin: 0; padding-left: 22px; }
        li { margin: 7px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 14px; }
        th { background: #e0ecff; color: #1e3a8a; text-align: left; }
        th, td { border: 1px solid #e2e8f0; padding: 9px 10px; vertical-align: top; }
        tbody tr:nth-child(even) td { background: #f8fafc; }
        .note { color: #475569; font-size: 13px; }
        .sourceList { columns: 2; column-gap: 28px; font-size: 12.5px; }
        a { color: #1d4ed8; text-decoration: none; }
        .sectionNo { color: #94a3b8; font-weight: 900; margin-right: 8px; }
        @media print { .sheet { width: auto; padding: 24px; } .card { box-shadow: none; } }
      `}</style>

      <section className="hero">
        <h1>美股收盤懶人包｜完整版</h1>
        <div className="sub">
          {reportDate} 收市｜長債息回落帶動反彈，醫療急升但半導體仍弱
        </div>
        <div className="meta">
          <Badge tone="blue">{publishedAt}</Badge>
          <Badge tone="green">S&amp;P 500 +0.21%</Badge>
          <Badge tone="green">VIX -6.00%</Badge>
          <Badge tone="red">SOXX -2.21%</Badge>
          <Badge tone="amber">FOMC minutes 偏鷹</Badge>
          <Badge tone="amber">Crypto：Binance 20:00 UTC</Badge>
        </div>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">01</span>30秒重點
        </h2>
        <ul>
          {keyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="grid-3 card compact">
        <div className="stat">
          <div className="label">大市狀態</div>
          <div className="value greenText">止住三連跌</div>
          <p className="note">
            S&amp;P 500 收 7,707.98，重上 7,700；VIX 跌回 14.89，恐慌未擴散。
          </p>
        </div>
        <div className="stat">
          <div className="label">今日主線</div>
          <div className="value greenText">Yield relief</div>
          <p className="note">
            Treasury 長端 buyback 加碼令 10Y/30Y 回落，暫時壓低估值折現壓力。
          </p>
        </div>
        <div className="stat">
          <div className="label">操作語氣</div>
          <div className="value amberText">反彈未全面</div>
          <p className="note">
            醫療與消費跑出，但 SOXX/XLK 仍紅，AI trade 未確認見底。
          </p>
        </div>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">02</span>大市一眼睇
        </h2>
        <Table
          headers={["指標", "收市/水平", "變動", "解讀"]}
          rows={indexRows}
        />
        <p className="note">
          指數主口徑採 CNBC/Sharecast 收市數字並以 Yahoo chart data
          交叉計算；若盤中新聞標題與最終收市有差異，以上表格採最終收市口徑。
        </p>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">03</span>今日點解升？
        </h2>
        <div className="grid">
          <div>
            <h3>1）Treasury buyback 加碼，長端債息即時降溫</h3>
            <p>
              Treasury 宣布未來數月把長端 government debt repurchase 上限由 $2B
              加至至少 $4B，集中 10Y 至 30Y 區段。市場理解為官方想穩住長債流動性，
              10Y/30Y 回落後，股票估值壓力即時減輕。
            </p>
          </div>
          <div>
            <h3>2）但 FOMC minutes 令升幅收窄</h3>
            <p>
              July minutes 顯示 many participants 認為若通脹不降，進一步 tightening
              likely necessary；所以今日不是一面倒追貨，而是先升後消化 Fed
              仍未關上加息門。
            </p>
          </div>
          <div>
            <h3>3）醫療單日變成市場火車頭</h3>
            <p>
              Moderna 因 Merck 聯合 mRNA cancer therapy Phase 3 成功而升近
              177%，令 XLV 成為最強板塊。這是單一重大臨床 readout
              引發的重新估值，不代表所有醫療股都有同等催化。
            </p>
          </div>
          <div>
            <h3>4）半導體仍然係弱環</h3>
            <p>
              即使債息跌，SOXX 仍跌 2.21%，AMD、Broadcom、Intel
              跌約 4%。資金仍在審視 AI capex 回報、OpenAI 增長/虧損消息及 Nvidia
              業績前的 crowded positioning。
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">04</span>板塊紅綠燈
        </h2>
        <Table
          headers={["板塊 / ETF proxy", "收市 / 變動", "燈號", "一句解讀"]}
          rows={sectorRows}
        />
        <p className="note">
          板塊採 Yahoo chart data 的 ETF close 計算。XLV 受 MRNA
          極端單日波動放大，SOXX 則代表半導體仍在去風險。
        </p>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">05</span>宏觀白話版
        </h2>
        <Table headers={["項目", "最新數字", "白話解讀"]} rows={macroRows} />
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">06</span>FedWatch、債息與政策風險
        </h2>
        <p>
          今日表面是 Treasury buyback relief rally，但 Fed minutes
          其實偏鷹：委員會 9-3 hold，三位官員已經想加 25bp，minutes
          入面亦提到若 inflation 不下降，很多參與者認為需要再 tightening。
          所以市場短線可以因 30Y yield 由 5.28% 附近回到約 5.19% 而反彈，
          但中線仍要睇油價、通脹預期同下一批就業/PMI 數據。
        </p>
        <ul>
          <li>
            FedWatch/Investing 8/19 20:45 EDT：9 月 hold 69.4%，加 25bp
            30.6%；即市場仍偏向按兵不動，但加息尾巴風險不細。
          </li>
          <li>
            Treasury buyback 改善流動性與期限溢價，但若被市場視為壓低長端利率，
            可能引發「政策同抗通脹目標是否一致」的討論。
          </li>
          <li>
            若 Brent 繼續企穩 $90 以上，Fed 的通脹容忍度會再被測試，growth
            multiple 反彈空間就會受限。
          </li>
        </ul>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">07</span>重點股票
        </h2>
        <Table
          headers={["股票 / 主題", "收市表現", "發生咩事"]}
          rows={stockRows}
        />
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">08</span>BTC / ETH / SOL（Binance 4:00pm
          ET 附近）
        </h2>
        <Table
          headers={[
            "Crypto",
            "Binance Vision 20:00 UTC 1m close",
            "日變動",
            "解讀",
          ]}
          rows={cryptoRows}
        />
        <p className="note">
          口徑：Binance direct API 在本環境受限，改用 Binance Vision public data
          API；2026-08-19 20:00 UTC 等同美股收市 4:00pm ET 附近。日變動以
          2026-08-18 20:00 UTC 同一口徑比較。
        </p>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">09</span>技術位與市場溫度
        </h2>
        <ul>
          {watchList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="note">
          VIX 跌到 14.89，表示市場沒有恐慌；但 SOXX 連續弱過大市，
          這種「指數回升、領導板塊未修復」的組合，通常不應太快滿倉追高。
        </p>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">10</span>本週事件焦點
        </h2>
        <Table headers={["時間", "事件", "為何重要"]} rows={eventRows} />
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">11</span>操作提示 / 觀察清單
        </h2>
        <div className="grid">
          <div>
            <h3>短線</h3>
            <ul>
              <li>
                可以承認大市止跌，但不要把 +0.21% 解讀成全面 risk-on；先睇 SPX
                能否連續企穩 7,700。
              </li>
              <li>
                SOXX 未企回 $531 前，AI hardware 反彈都要用較小倉位或等確認。
              </li>
              <li>
                XLV 今日很強，但 MRNA 是事件驅動型爆升，不宜直接外推成整個醫療板塊長線重估。
              </li>
            </ul>
          </div>
          <div>
            <h3>中線</h3>
            <ul>
              <li>
                Treasury buyback 若能壓住 30Y，growth multiple 有喘息；若只是一天反應，
                下次 yield 再抽會令反彈失真。
              </li>
              <li>
                Fed minutes 顯示 committee 對通脹仍不放心；油價是 9 月前最大宏觀變數。
              </li>
              <li>
                Nvidia 8/26 業績是 AI trade 的真正壓力測試，現階段宜把半導體當成高波動核心觀察名單。
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">12</span>最終觀點、來源與免責聲明
        </h2>
        <p>
          今日升市質素比前幾日好，因為不是靠單一 mega-cap 撐場，而是 Treasury
          長端 buyback 帶動債息回落，並有醫療、消費、材料等板塊參與。不過，
          FOMC minutes 偏鷹、油價近四週高、SOXX 繼續失血，說明市場只是從
          yield scare 入面喘一口氣，未到全面解除警報。最健康劇本是 10Y/30Y
          繼續降溫、SOXX 止跌、SPX 守住 7,700；相反，若 Fed speakers
          再偏鷹或油價再上，今日反彈可能只係技術性修復。
        </p>
        <div className="sourceList">
          {sources.map((source) => (
            <p key={source.url}>
              <a href={source.url}>{source.name}</a>
            </p>
          ))}
        </div>
        <p className="note">
          若關鍵數據衝突：指數採 CNBC/Sharecast 收市口徑並以 Yahoo chart
          data 交叉；ETF/個股採 Yahoo chart close；Treasury 採 CNBC
          即時口徑並交叉 Fed H.15/Treasury 官方頁；Gold/Oil
          採 Reuters 期貨/現貨報道並註明時間；FedWatch 採 Investing/CME
          轉述時間；Crypto 採 Binance Vision 20:00 UTC 1m close。
        </p>
        <p className="note">{disclaimer}</p>
      </section>
    </main>
  );
}
