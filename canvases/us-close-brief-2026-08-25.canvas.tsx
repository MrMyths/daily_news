import React from "react";

const reportDate = "2026-08-25";
const publishedAt = "香港時間 2026-08-26 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market news for Aug. 25, 2026",
    url: "https://www.cnbc.com/2026/08/24/stock-market-today-live-updates.html",
  },
  {
    name: "TS2 - US Stock Market Today 08/25/2026",
    url: "https://ts2.tech/en/stock-market-today-08-25-2026/",
  },
  {
    name: "AP/WDRB - How major US stock indexes fared Tuesday 8/25/2026",
    url: "https://www.wdrb.com/news/national/how-major-us-stock-indexes-fared-tuesday-8-25-2026/article_98a0b4ae-0409-58c0-a97f-a02218438bc4.html",
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
    name: "CNBC - Treasury yields fall as oil prices continue their slide",
    url: "https://www.cnbc.com/2026/08/25/treasury-yields-steady-as-traders-await-more-economic-data-.html",
  },
  {
    name: "Reuters - New home sales slide and confidence dips",
    url: "https://www.reuters.com/world/us/new-us-single-family-home-sales-slide-july-2026-08-25/",
  },
  {
    name: "The Conference Board - Consumer Confidence August 2026",
    url: "https://www.prnewswire.com/news-releases/us-consumer-confidence-edged-down-slightly-in-august-302859371.html",
  },
  {
    name: "Trading Economics - Richmond Fed Manufacturing Index",
    url: "https://tradingeconomics.com/united-states/richmond-fed-manufacturing-index",
  },
  {
    name: "Reuters/MarketScreener - Oil settles down more than 3%",
    url: "https://uk.marketscreener.com/news/oil-steadies-as-investors-weigh-impact-of-latest-us-sanctions-on-iran-ce7858dbd08bf423",
  },
  {
    name: "MarketScreener/Reuters - Gold rises to highest since mid-May",
    url: "https://au.marketscreener.com/news/gold-rises-to-highest-since-mid-may-as-buying-momentum-builds-ce7858dbd181f02d",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Exa market data - Select sector ETF closes",
    url: "https://exa.ai/library/markets/stock/XLK?date=2026-08-25",
  },
  {
    name: "IG - NVIDIA Q2 FY2027 earnings preview",
    url: "https://www.ig.com/en/news-and-trade-ideas/nvidia-q2-fy2027-earnings-preview--what-to-watch-260825",
  },
  {
    name: "TS2 - Intuit stock falls after FY2027 guidance",
    url: "https://ts2.tech/en/intuit-stock-falls-more-than-7-as-2027-revenue-growth-slows-to-9-10/",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const keyPoints = [
  "美股週二收市反彈：Dow +160.24 點 / +0.30% 至 53,577.40；S&P 500 +24.42 點 / +0.32% 至 7,677.28；Nasdaq +171.11 點 / +0.66% 至 26,151.30；Russell 2000 +0.50% 至 3,010.02；VIX 回落至 15.45。",
  "今日主線係債息同油價一齊跌，市場先鬆一口氣：CNBC 指 2Y 約 4.183%、10Y 約 4.629%、30Y 約 5.163%，長端明顯低過前一日。",
  "科技 / 半導體由前一日沽壓中反彈：XLK +0.94%、SOXX +1.57%、NVDA +2.16%，帶動 Nasdaq 跑贏；但升幅未算全面 risk-on。",
  "弱位集中在能源與消費防守：XLE -1.65%，因 Brent / WTI 同跌逾 3%；XLP -1.06%、XLY -0.30%，反映消費數據偏弱。",
  "宏觀數據不算靚：Consumer Confidence 跌至 89.4、New Home Sales 607K / -10.5% m/m、Richmond Fed 4，全部指向需求降溫。",
  "Crypto 採 Binance Vision 2026-08-25 20:00 UTC 1m close（貼近美股 4:00pm ET）：BTC $78,922.01（較 8/24 20:00 UTC +0.22%）、ETH $2,462.46（-0.31%）、SOL $97.90（+1.45%）。",
];

const indexRows = [
  [
    "Dow Jones",
    "53,577.40",
    "+160.24 / +0.30%",
    "CNBC 與 TS2 均報 Dow 連升第三日；升幅溫和，重點是債息回落令 blue chips 估值壓力稍降。",
  ],
  [
    "S&P 500",
    "7,677.28",
    "+24.42 / +0.32%",
    "CNBC、TS2 與 AP/WDRB 口徑一致；離月內高位仍有距離，但重上前一日失守區間。",
  ],
  [
    "Nasdaq Composite",
    "26,151.30",
    "+171.11 / +0.66%",
    "半導體反彈帶動 Nasdaq 跑贏；但仍低過 8/21 收市 26,180.45，未完全收復上週五水平。",
  ],
  [
    "Russell 2000",
    "3,010.02",
    "+14.94 / +0.50%",
    "Yahoo Finance historical data 顯示小型股重上 3,000；債息回落對融資敏感股有幫助。",
  ],
  [
    "VIX",
    "15.45",
    "-0.40 / -2.52%",
    "Cboe/Yahoo 顯示 VIX 由 15.85 回落；市場未見恐慌，但 PCE / Nvidia / Jackson Hole 前仍有 event risk。",
  ],
];

const sectorRows = [
  [
    "Technology / XLK",
    "$181.75 / +0.94%",
    "最強",
    "Exa market data 顯示科技 ETF 由 $180.05 前收反彈；債息跌與 NVDA 反彈是核心支持。",
  ],
  [
    "Semiconductors / SOXX",
    "$514.12 / +1.57%",
    "最強 beta",
    "前一日晶片被沽後反彈，NVDA 業績前先有 short-covering；但仍要看業績指引確認。",
  ],
  [
    "Communication Services / XLC",
    "$113.18 / +0.77%",
    "強",
    "大型平台股跟隨 growth rebound，升幅僅次於 tech / semis。",
  ],
  [
    "Health Care / XLV",
    "$175.30 / +0.34%",
    "穩",
    "防守板塊小升；在宏觀數據轉弱下仍有配置需求。",
  ],
  [
    "Financials / XLF",
    "$58.31 / +0.15%",
    "微綠",
    "前一日金融已強，今日升幅放慢；曲線回落對銀行息差不是單邊利好。",
  ],
  [
    "Utilities / XLU",
    "$43.30 / +0.19%",
    "微綠",
    "債息跌支持收益型板塊，但市場焦點由防守轉回部分 growth。",
  ],
  [
    "Real Estate / XLRE",
    "$45.35 / +0.04%",
    "近持平",
    "10Y 回落有利 REITs，但新屋銷售大跌提醒地產鏈需求仍弱。",
  ],
  [
    "Materials / XLB",
    "$53.58 / +0.00%",
    "持平",
    "材料無明顯方向；油價急跌與美元約 99 附近令 commodity beta 受限。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$117.94 / -0.30%",
    "偏弱",
    "消費信心和新屋銷售偏弱，拖住可選消費；Intuit 盤後指引亦加重 software/SMB 情緒壓力。",
  ],
  [
    "Consumer Staples / XLP",
    "$86.52 / -1.06%",
    "弱",
    "前一日防守領升後回吐；消費防守未能延續資金流入。",
  ],
  [
    "Energy / XLE",
    "$62.07 / -1.65%",
    "最弱",
    "Reuters 指 Brent / WTI 同跌逾 3%，能源 ETF 跟住成為全日最弱板塊。",
  ],
];

const macroRows = [
  [
    "美債息",
    "2Y 4.183%；10Y 4.629%；30Y 5.163%",
    "CNBC 指油價連跌與數據轉弱令 Treasury yields 下行。長端由前一日約 4.70% / 5.23% 回落，是今日 risk assets 反彈最大背景。",
  ],
  [
    "FedWatch",
    "9月 hold 58.6%；+25bp 41.4%",
    "CME FedWatch 公開快訊口徑仍顯示加息尾部風險接近四成；PCE 若偏熱，定價仍可能再轉 hawkish。",
  ],
  [
    "消費信心",
    "Conference Board 89.4；前值下修至 90.2",
    "官方新聞稿與 Reuters 均指 Expectations Index 跌至 68.2，消費者對未來收入、就業與通脹更擔心。",
  ],
  [
    "房屋 / 製造",
    "New Home Sales 607K / -10.5%；Richmond Fed 4",
    "Reuters 指新屋銷售跌至 1 月以來低位；Richmond Fed 低過共識 7，需求降溫不是單一數據。",
  ],
  [
    "油價",
    "Brent $88.58 / -3.9%；WTI $82.36 / -3.1%",
    "Reuters/MarketScreener 指市場認為伊朗制裁偏經濟壓力、即時供應風險低過軍事升級，所以 geopolitics premium 回吐。",
  ],
  [
    "黃金",
    "Spot gold 約 $4,668.19 / +0.4%（早段）；CNBC 盤中約 $4,647",
    "Reuters 與 CNBC 時間點不同，但共同方向是金價仍接近三個月高位；Treasury buyback、美元偏弱與避險需求支撐。",
  ],
  [
    "美元",
    "DXY 約 99.0 附近，來源時間點略有差異",
    "Infomax/Yonhap 報 99.016；部分金市報導引用 98.96。本文採「約 99」並註明口徑差異，不把美元當今日單一主線。",
  ],
  [
    "2Y auction",
    "$69B 2-year notes high yield 4.204%；bid-to-cover 2.60x",
    "InvestingLive / RTTNews 指需求大致平均、略 stop-through；短端拍賣未引發額外債市壓力。",
  ],
];

const stockRows = [
  [
    "NVDA / SOXX",
    "NVDA $212.98 / +2.16%；SOXX $514.12 / +1.57%",
    "Nvidia 美東 8/26 盤後（香港 8/27 清晨）公布 FY2027 Q2，IG/RexShares/其他預覽對日期表述有時區差異；市場今日先回補部分 AI exposure。",
  ],
  [
    "QQQ / XLK",
    "QQQ $710.63 / +0.61%；XLK $181.75 / +0.94%",
    "growth 反彈但不算爆升；若 PCE 或 NVDA guidance 不配合，這次 rebound 仍可能只是事件前倉位調整。",
  ],
  [
    "INTU",
    "正股收 $358.91 / -2.98%；盤後一度跌逾 7%",
    "TS2 指 Intuit FY2027 revenue growth guidance 9%-10%，低過 FY2026 約 14% 增長，並提到 Mailchimp / AI competition 壓力。",
  ],
  [
    "Energy names",
    "XLE -1.65%",
    "油價連跌兩日，能源股短線由 geopolitical premium 轉去 demand / sanction enforcement reality check。",
  ],
  [
    "Consumer-linked stocks",
    "XLY -0.30%；XLP -1.06%",
    "Consumer Confidence、New Home Sales 同日偏弱，市場不太願意追消費鏈，尤其高估值或 housing-sensitive 名字。",
  ],
  [
    "本週焦點",
    "PCE、Q2 GDP second estimate、Durable Goods、Nvidia、Warsh Jackson Hole",
    "今日反彈更多是 yields/oil relief；真正決定下一段方向的仍是通脹、AI capex 及 Fed 溝通。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$78,922.01",
    "+0.22%",
    "Binance Vision 2026-08-25 20:00 UTC 1m close；比較基準為 2026-08-24 20:00 UTC $78,745.61。",
  ],
  [
    "ETHUSDT",
    "$2,462.46",
    "-0.31%",
    "同一採樣時間；ETH 跟隨力度弱過 BTC，未完全確認 altcoin beta 回來。",
  ],
  [
    "SOLUSDT",
    "$97.90",
    "+1.45%",
    "SOL 跑贏 BTC / ETH，顯示高 beta crypto 仍有局部 risk appetite。",
  ],
];

const technicalRows = [
  [
    "S&P 500",
    "7,650 / 7,638 是即日支持；7,686 / 7,700 是第一阻力；7,816 附近是近期 52 週高位區。",
    "收 7,677 代表重新站回前一日 close 之上，但未突破 7,700；突破要配合 breadth 和 SOXX 延續。",
  ],
  [
    "Nasdaq",
    "26,000 是心理支持；26,180（8/21 close）是短線反彈門檻；再上看 26,300。",
    "今日收 26,151，仍差少少才收復上週五；Nvidia 業績前不宜單日升就判斷完成轉勢。",
  ],
  [
    "Russell 2000",
    "3,000 重新變支持；2,995 是前一日 close；3,012 附近日高先看能否企穩。",
    "小型股升 0.5% 是正面訊號，但仍受 2Y/credit 條件牽動。",
  ],
  [
    "VIX",
    "15.45，仍低於 20。",
    "低 VIX + 高事件密度，代表保護相對不貴；不等於風險不存在。",
  ],
];

const eventRows = [
  "Nvidia 美東 8/26 盤後 / 香港 8/27 清晨業績：市場最關注 Q3 guidance、Blackwell Ultra / Rubin roadmap、data center demand、gross margin 約 75% 能否維持。",
  "July PCE / Core PCE：若高過預期，FedWatch 的 41.4% 加息機率可能再升，今日 yields relief 會被快速收回。",
  "Q2 GDP second estimate / Durable Goods：檢驗企業投資與需求是否足夠支持高估值。",
  "Warsh Jackson Hole keynote：市場會看 Fed Chair 是否安撫長端債市、如何處理通脹仍高與就業/消費轉弱的矛盾。",
  "Treasury buyback / TGA 操作：長端息由高位回落，但若市場質疑 buyback 火力，30Y 仍可能再試 5.2% 以上。",
  "伊朗制裁與油價：制裁由軍事風險轉向經濟壓力，油價回吐；但政策細節和執行仍可令 energy volatility 回來。",
];

const actionRows = [
  [
    "短線交易",
    "SPX 未有效突破 7,700 前，先當 relief bounce；追 Nasdaq 要等 SOXX / NVDA 業績後確認。",
  ],
  [
    "板塊配置",
    "科技 / semis 可小注跟強，但不宜在 PCE + NVDA 前大幅加槓桿；能源短線受油價壓制，先等 WTI 穩住。",
  ],
  [
    "風控",
    "本週事件密度高，低 VIX 容易令人低估 gap risk；倉位、期權到期與止蝕要事先寫清楚。",
  ],
  [
    "資料口徑",
    "Yahoo chart API 本輪返回 429；指數用 CNBC/TS2/AP 交叉，ETF/個股用 Exa/Yahoo/StockAnalysis snippets，宏觀用官方、Reuters/CNBC 與 CME。若來源時間點不同，已在相關段落標示。",
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

export default function USCloseBrief20260825() {
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
          {reportDate}{" "}
          收市｜債息同油價降溫，科技半導體反彈；但宏觀數據提醒唔好太早鬆章
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
        <h2>3）今日點解升？</h2>
        <div className="grid">
          <div className="callout">
            <h3>債息回落，估值壓力即刻細咗</h3>
            <p>
              CNBC 報 10Y 跌至約 4.629%、30Y 約 5.163%。對 long-duration growth
              來講，呢個比單純 earnings headline 更重要。
            </p>
          </div>
          <div className="callout">
            <h3>半導體由超賣中反彈</h3>
            <p>
              SOXX +1.57%、NVDA +2.16%，令 Nasdaq 跑贏 Dow。不過 Nvidia
              業績未出，今日更似先減少前一日恐慌，而未係全面重估。
            </p>
          </div>
          <div className="callout">
            <h3>油價大跌，通脹尾巴短線降溫</h3>
            <p>
              Brent $88.58、WTI $82.36，兩者跌逾
              3%。能源供應恐慌減退，市場自然願意 給 growth 一點 breathing room。
            </p>
          </div>
          <div className="callout">
            <h3>但數據不是全好</h3>
            <p>
              Consumer Confidence 89.4、新屋銷售 607K、Richmond Fed
              4，代表需求正在 轉弱；如果後續 earnings guidance
              跟住軟，升市質素會打折。
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
          public data 1-minute klines；時間點為 2026-08-25 20:00 UTC，貼近美股
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
          今日升市可以概括做「rates relief + oil relief + semis
          rebound」。質素比前一日好， 因為 Nasdaq、Russell 2000 同 VIX
          都配合；但宏觀數據偏弱，兼且 Nvidia / PCE / Jackson Hole 三個 event
          risk 未過，所以策略上應該係「承認反彈，但唔追到滿倉」。 如果 SPX
          能企穩 7,650 並突破 7,700，而 SOXX 在業績後仍保持強勢，先可以把短線
          view 由 relief bounce 升級為重新 risk-on。
        </p>
      </section>

      <section className="section">
        <h2>12）來源、口徑與免責聲明</h2>
        <SourceList />
        <p className="small">
          口徑：Yahoo chart API 本輪返回 429；指數採 CNBC、TS2、AP/WDRB
          交叉；Russell/VIX 採 Yahoo/Cboe；ETF 與個股採 Exa/Yahoo
          snippets；宏觀採官方、Reuters、CNBC、CME FedWatch。金價與 DXY
          來源有盤中/收市時間差，本文已按「約」與口徑註明處理；若無可靠數據則寫
          「暫無可靠數據」。
        </p>
        <p>{disclaimer}</p>
      </section>
    </main>
  );
}
