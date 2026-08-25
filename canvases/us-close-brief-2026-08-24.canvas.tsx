import React from "react";

const reportDate = "2026-08-24";
const publishedAt = "香港時間 2026-08-25 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market news for Aug. 24, 2026",
    url: "https://www.cnbc.com/2026/08/23/stock-market-today-live-updates.html",
  },
  {
    name: "AP - Wall Street drifts at the start of a week that could swing stocks and bonds",
    url: "https://www.wral.com/news/ap/8ab80-asian-shares-mostly-decline-as-bond-market-pressure-mounts/",
  },
  {
    name: "MarketScreener/Reuters - Shares dip on pressure from technology; yields and oil fall",
    url: "https://au.marketscreener.com/news/shares-oil-dip-as-us-sanctions-on-iran-loom-ce7858dbd88bf623",
  },
  {
    name: "Sharecast - US close: stocks mixed as chip stocks drag",
    url: "https://www.sharecast.com/news/market-report-us-close/us-close-stocks-mixed-as-chip-stocks-drag-despite-easing-treasury-yields--23360728.html",
  },
  {
    name: "CNBC - Treasury yields decline on TGA buyback report",
    url: "https://www.cnbc.com/2026/08/24/treasury-yields-warsh-jackson-hole.html",
  },
  {
    name: "CNBC - Bessent $1 trillion Treasury General Account bond buybacks",
    url: "https://www.cnbc.com/2026/08/24/bessent-1-trillion-treasury-general-account-bond-buybacks.html",
  },
  {
    name: "MarketScreener/Reuters - Oil drops more than $2 despite new US sanctions on Iran",
    url: "https://hk.marketscreener.com/news/oil-falls-as-us-prepares-to-unveil-new-iran-sanctions-ce7858dad089f422",
  },
  {
    name: "LSE/Reuters - Global markets: shares, oil dip as US sanctions on Iran loom",
    url: "https://www.lse.co.uk/news/global-markets-shares-oil-dip-as-us-sanctions-on-iran-loom-wwqkpbqrn9nfxfc.html",
  },
  {
    name: "Yahoo Finance - CBOE Volatility Index historical data",
    url: "https://finance.yahoo.com/quote/%5EVIX/history/",
  },
  {
    name: "Yahoo Finance - Russell 2000 Index quote",
    url: "https://finance.yahoo.com/quote/%5ERUT/",
  },
  {
    name: "Yahoo Finance / StockAnalysis - Select Sector SPDR ETF quotes and histories",
    url: "https://stockanalysis.com/etf/xlf/history/",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "MarketScreener - Week ahead: Warsh speech and US PCE in focus",
    url: "https://www.marketscreener.com/news/week-ahead-for-fx-bonds-warsh-speech-at-jackson-hole-u-s-pce-data-in-focus-ce7858dad180ff24",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const keyPoints = [
  "美股週一收市分化：Dow +140.15 點 / +0.26% 至 53,417.16；S&P 500 -21.51 點 / -0.28% 至 7,652.86；Nasdaq -200.26 點 / -0.76% 至 25,980.19；Russell 2000 -0.76%，VIX 升至 15.85。",
  "主線不是全面 risk-off，而是科技 / 半導體被沽、資金轉去金融、防守與部分 value：SOXX -2.67%、NVDA -2.91%，但 XLF +1.29%、XLP +1.70%。",
  "美債息回落支持 Dow，但未足以托住長 duration growth：CNBC 指 10Y 跌至約 4.704%、30Y 約 5.234%，因市場消化 Treasury 可能用 TGA 支持 buyback。",
  "油價由高位回吐：Reuters/MarketScreener 指 Brent 收 $92.17、WTI 收 $85.01，兩者同跌 2.35%；金價仍企 $4,600 上方，DXY 約 98.98。",
  "本週風險集中：Nvidia 8/26 盤後業績、同日 July PCE / Q2 GDP 2nd estimate、以及 Warsh 週五 Jackson Hole 演說。",
  "Crypto 採 Binance Vision 2026-08-24 20:00 UTC 1m close（貼近美股 4:00pm ET）：BTC $78,745.61（較 8/21 20:00 UTC +2.27%）、ETH $2,470.09（+2.37%）、SOL $96.50（+6.34%）。",
];

const indexRows = [
  [
    "Dow Jones",
    "53,417.16",
    "+140.15 / +0.26%",
    "CNBC、AP、Sharecast 口徑一致；Visa、金融與部分 defensives 支持 Dow，令藍籌比 Nasdaq 硬淨。",
  ],
  [
    "S&P 500",
    "7,652.86",
    "-21.51 / -0.28%",
    "AP 指 S&P 500 再遠離本月高位；MarketScreener/Reuters 亦顯示科技壓力抵銷債息回落利好。",
  ],
  [
    "Nasdaq Composite",
    "25,980.19",
    "-200.26 / -0.76%",
    "CNBC/AP 報 25,980.19；Sharecast 顯示 25,981.19，屬個位數口徑差異。本文採 CNBC/AP 交叉值。",
  ],
  [
    "Russell 2000",
    "2,995.08",
    "-22.79 / -0.76%",
    "Yahoo Finance 顯示小型股跌穿 3,000；高息環境下，融資敏感板塊仍未真正解除壓力。",
  ],
  [
    "VIX",
    "15.85",
    "+0.72 / +4.76%",
    "VIX 由 15.13 回升，但仍低於 20；即係未見恐慌，只是事件週前買少少保護。",
  ],
];

const sectorRows = [
  [
    "Consumer Staples / XLP",
    "$87.45 / +1.70%",
    "最強",
    "防守資金回流，Yahoo/StockAnalysis 顯示相對前收 $85.99 明顯上升。",
  ],
  [
    "Financials / XLF",
    "$58.22 / +1.29%",
    "強",
    "長端息雖回落但仍高，銀行/支付類有支持；Visa 創 52 週高位附近，是 Dow 重要貢獻。",
  ],
  [
    "Utilities / XLU",
    "$43.22 / +1.05%",
    "防守綠",
    "債息回落令收益型板塊有喘息；但長端仍高，未必可以追太急。",
  ],
  [
    "Communication Services / XLC",
    "$112.32 / +0.83%",
    "溫和綠",
    "大型平台相對穩，抵銷一部分 tech hardware / semiconductor 壓力。",
  ],
  [
    "Real Estate / XLRE",
    "$45.33-$45.34 / 約 +0.55%-0.58%",
    "修復",
    "StockAnalysis/Yahoo close 有 1 cent 差異；重點是債息回落令 REITs 短線反彈。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$118.30 / +0.24%",
    "微綠",
    "消費可選輕微向上，但本週 PCE 與收入支出數據前，市場不想過度押注消費 beta。",
  ],
  [
    "Materials / XLB",
    "$53.58 / +0.07%",
    "近持平",
    "材料股略升；但油價回落與美元反彈令商品鏈沒有大幅延續。",
  ],
  [
    "Health Care / XLV",
    "$174.70 / +0.05%",
    "近持平",
    "防守屬性支持，但升幅很細；不是今日主線。",
  ],
  [
    "Industrials / XLI",
    "$179.00 / -0.69%",
    "偏弱",
    "即使 Dow 升，工業 ETF 跌，反映升市並非 broad cyclical bid。",
  ],
  [
    "Energy / XLE",
    "$63.11 / -0.83%",
    "紅燈",
    "WTI/Brent 同日跌 2.35%，能源 ETF 跟住回吐。",
  ],
  [
    "Technology / XLK",
    "$179.71-$180.05 / 約 -1.78% 至 -1.97%",
    "紅燈（口徑註明）",
    "Yahoo quote 與 history 對 close 有差異；兩者都指向科技明顯跑輸。",
  ],
  [
    "Semiconductors / SOXX",
    "$506.18 / -2.67%",
    "最弱",
    "NVDA 業績前，SOXX 與記憶體/晶片股被沽，是今日 Nasdaq 跑輸核心原因。",
  ],
];

const macroRows = [
  [
    "美債息",
    "2Y 約 4.26%；10Y 4.704%；30Y 5.234%",
    "CNBC 指 Treasury 可能動用約 $950B TGA 支持更大 buyback，令長端息回落；但 10Y 仍在 4.7% 附近，估值壓力未消失。",
  ],
  [
    "FedWatch",
    "9月 hold 59.0%；+25bp 41.0%",
    "公開快訊引用 CME FedWatch；因 CME 盤中會變，本文標示採樣時間點口徑，重點是加息尾部風險仍接近四成。",
  ],
  [
    "油價",
    "Brent $92.17 / -2.35%；WTI $85.01 / -2.35%",
    "Reuters/MarketScreener 指美國加碼伊朗制裁後，油價反而獲利回吐，六連升終止；通脹風險未走，但即日壓力舒緩。",
  ],
  [
    "黃金",
    "現貨金約 $4,643/oz / +0.9%",
    "LSE/Reuters 指金價再升，反映地緣政治、政策不確定性與長端債憂慮仍推動避險配置。",
  ],
  [
    "美元",
    "DXY 約 98.981 / +0.2%",
    "美元小升，與油價回落、加元受貿易戰壓力有關；但整體仍低於 99 附近，不算強美元環境。",
  ],
  [
    "本週數據",
    "July PCE、Q2 GDP 2nd estimate、Durable Goods、Consumer Confidence",
    "MarketScreener/TradingKey 指 8/26 是數據密集日；PCE 是 Fed 最關注通脹指標，會直接影響 9月加息定價。",
  ],
  [
    "Fed / Jackson Hole",
    "Warsh 週五發表首次 Jackson Hole keynote",
    "市場會看 Warsh 如何描述通脹、勞動市場與長端息；若不安撫債市，long-duration growth 可能再受壓。",
  ],
];

const stockRows = [
  [
    "NVDA / SOXX",
    "NVDA $208.48 / -2.91%；SOXX $506.18 / -2.67%",
    "Nvidia 8/26 盤後公布 FY2027 Q2，市場在業績前先減 AI exposure；Investing/Bloomberg snippet 指 NVDA 連跌多日。",
  ],
  [
    "MU / SNDK / INTC",
    "MU 約 -5.8%；SNDK 約 -6.5%；INTC 約 -3.1%",
    "CNBC 指 memory stocks 是 S&P/Nasdaq 壓力來源；晶片鏈今日不是單一 NVDA 問題，而是整個 semis beta 被沽。",
  ],
  [
    "V",
    "$382.41 / +3.06%",
    "Visa 上升並觸及 52 週高位附近，CNBC 指它是 Dow 主要貢獻股之一；支付/金融相對科技更受資金歡迎。",
  ],
  [
    "HOOD / COIN / MRNA",
    "HOOD +13.7%；COIN +8.2%；MRNA +8.9%",
    "Trefis S&P 500 movers 顯示單名熱點仍多；COIN 受 BTC 4pm ET 附近升至 $78.7k 支持。",
  ],
  [
    "MRVL",
    "約 -5.6%",
    "Marvell 與 Nvidia 同屬本週 AI/semiconductor 情緒測試，股價提前受壓，顯示市場對估值與業績門檻更挑剔。",
  ],
  [
    "本週財報焦點",
    "Nvidia、Marvell、Intuit、Box、Zoom、BMO、Dick's Sporting Goods",
    "CNBC/TradingKey 指週三 Nvidia + PCE 同日，會同時測試 AI capex 敘事與利率路徑。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$78,745.61",
    "+2.27%",
    "Binance Vision 2026-08-24 20:00 UTC 1m close；比較基準為 2026-08-21 20:00 UTC $76,998.00。",
  ],
  [
    "ETHUSDT",
    "$2,470.09",
    "+2.37%",
    "同一採樣時間；ETH 跟隨風險資產回升，但幅度與 BTC 接近。",
  ],
  [
    "SOLUSDT",
    "$96.50",
    "+6.34%",
    "SOL 明顯跑贏，反映高 beta crypto risk appetite 仍在。",
  ],
];

const technicalRows = [
  [
    "S&P 500",
    "7,640-7,650 是短線支持；7,675 / 7,700 是第一阻力；7,816 附近是 CNBC quote 52 週高位區。",
    "若失守 7,640，代表週五反彈延續失敗；若重上 7,700 並伴隨 SOXX 止跌，才算重新轉強。",
  ],
  [
    "Nasdaq",
    "25,980 / 26,000 是心理支持；26,180（上個交易日 close）變成短線反彈阻力。",
    "NVDA 業績前，Nasdaq 方向主要睇 semis 是否止血；單靠 Dow rotation 不足以帶動 Nasdaq。",
  ],
  [
    "Russell 2000",
    "跌穿 3,000；2,990 附近先看有沒有承接。",
    "小型股對利率與信用環境敏感，若 10Y 再上 4.75%，Russell 反彈會更脆弱。",
  ],
  [
    "VIX",
    "15.85，仍低於 20。",
    "VIX 低但事件風險高，代表保護仍相對便宜；不宜因 VIX 低就加太多槓桿。",
  ],
];

const eventRows = [
  "Nvidia 8/26 盤後業績：Blackwell / Vera Rubin 需求、gross margin、AI server pricing 與 guidance 會牽動整個 SOXX / Nasdaq。",
  "July Core PCE / 個人收入支出：若高過預期，FedWatch 的 41% 加息機率可能再升。",
  "Q2 GDP 2nd estimate / Durable Goods：檢驗經濟韌性與企業投資是否支持 earnings multiple。",
  "Warsh Jackson Hole keynote：首次以 Fed Chair 身份發言，市場會尋找對長端息、通脹與政策路徑的訊號。",
  "Treasury buyback / TGA 操作：若債市不相信 buyback 火力，10Y/30Y 可能重上週五高位。",
  "伊朗制裁與油價：Brent 雖回落至 $92.17，但 geopolitical premium 未完全消失。",
];

const actionRows = [
  [
    "短線交易",
    "SPX 未重上 7,700 前，先當 range trade；追科技要等 SOXX / NVDA 止跌訊號。",
  ],
  [
    "板塊配置",
    "金融、防守、部分通信服務相對硬淨；科技與 semis 短線要等業績確認，不宜盲目撈底。",
  ],
  [
    "風控",
    "本週是 PCE + NVDA + Jackson Hole 事件週，單日 gap risk 高；倉位、期權到期與槓桿要先降噪。",
  ],
  [
    "資料口徑",
    "Yahoo chart API 本輪返回 429；指數用 CNBC/AP/Reuters mirror 交叉，ETF/個股用 Yahoo/StockAnalysis/Exa/Trefis snippets。XLK、Nasdaq 個別數據有小差異，已明示。",
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

export default function USCloseBrief20260824() {
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
          background: linear-gradient(135deg, #7f1d1d 0%, #b91c1c 42%, #111827 100%);
          color: white;
          border-radius: 28px;
          padding: 34px;
          box-shadow: 0 18px 45px rgba(185, 28, 28, 0.2);
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
        h2 { margin: 0 0 14px; color: #b91c1c; font-size: 25px; }
        h3 { margin: 16px 0 8px; color: #1e3a8a; font-size: 18px; }
        ul { margin: 0; padding-left: 22px; }
        li { margin: 7px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 14px; }
        th, td { border-bottom: 1px solid #e5e7eb; padding: 10px 9px; vertical-align: top; text-align: left; }
        th { background: #f1f5f9; color: #334155; font-size: 13px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .callout { background: #fff7ed; border-left: 5px solid #f97316; padding: 14px 16px; border-radius: 14px; }
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
          {reportDate} 收市｜Dow 硬淨、Nasdaq
          受壓：半導體拖低大市，事件週先控風險
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
        <h2>3）今日點解跌？點解 Dow 又升？</h2>
        <div className="grid">
          <div className="callout">
            <h3>半導體 / AI 先被減磅</h3>
            <p>
              Nvidia 業績前，市場唔想再重倉 crowded AI trade。SOXX -2.67%、 NVDA
              -2.91%，Micron、SanDisk、Marvell 等同樣受壓，直接拖低 Nasdaq。
            </p>
          </div>
          <div className="callout">
            <h3>債息回落，但未夠支持 growth</h3>
            <p>
              10Y 跌至約 4.704%、30Y 約 5.234%，原因是 Treasury buyback / TGA
              消息；不過長端息仍高，科技估值未真正鬆綁。
            </p>
          </div>
          <div className="callout">
            <h3>資金轉去金融與防守</h3>
            <p>
              XLF、XLP、XLU 領先，Visa 支持 Dow。今日不是大市恐慌，而是 sector
              rotation：賣高估值 tech，買 cash flow / defensive / financials。
            </p>
          </div>
          <div className="callout">
            <h3>油價跌，通脹尾巴暫時降溫</h3>
            <p>
              Brent / WTI 各跌 2.35%，令 inflation scare 暫時紓緩；但伊朗制裁與
              Hormuz premium 未完全消失，所以仍要看 PCE。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>4）板塊熱度圖 / 紅綠燈</h2>
        <DataTable
          headers={["板塊 / ETF", "收市與變動", "狀態", "一句解讀"]}
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
        <h2>6）重點股票</h2>
        <DataTable
          headers={["股份 / 主題", "表現", "發生咩事"]}
          rows={stockRows}
        />
      </section>

      <section className="section">
        <h2>7）Crypto（Binance 4:00pm ET 附近）</h2>
        <p className="small">
          直接 Binance API 在此環境可能被地區限制；本報告使用 Binance Vision
          public data API 的 1-minute kline。採樣時間為 2026-08-24 20:00
          UTC，貼近美股 4:00pm ET；比較基準為上一個美股交易日 2026-08-21 20:00
          UTC。
        </p>
        <DataTable
          headers={["幣種", "20:00 UTC close", "較上個美股收市變動", "口徑"]}
          rows={cryptoRows}
        />
      </section>

      <section className="section">
        <h2>8）技術位</h2>
        <DataTable headers={["市場", "位置", "解讀"]} rows={technicalRows} />
      </section>

      <section className="section">
        <h2>9）財報與事件焦點</h2>
        <ul>
          <li>
            <strong>Nvidia：</strong>8/26 盤後公布 FY2027 Q2。市場預期高，
            股價連跌入業績週，代表 guidance 門檻不低。
          </li>
          <li>
            <strong>AI / Semis：</strong>Marvell 同週受檢驗；若 NVDA
            未能交出足夠強的 Blackwell / Vera Rubin demand 訊號，SOXX 可能繼續拖
            Nasdaq。
          </li>
          <li>
            <strong>Macro 同日撞期：</strong>週三 PCE + GDP 2nd estimate +
            Durable Goods，會同時影響利率、美元、黃金與 growth multiple。
          </li>
          <li>
            <strong>Jackson Hole：</strong>Warsh 週五首次 keynote，是 Fed
            reaction function 的重要測試。
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>10）明日 / 本週觀察清單</h2>
        <ul>
          {eventRows.map((event) => (
            <li key={event}>{event}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>11）操作提示</h2>
        <DataTable headers={["範疇", "提示"]} rows={actionRows} />
      </section>

      <section className="section">
        <h2>12）最終觀點、來源與免責聲明</h2>
        <p>
          今日市況可以用一句講晒：不是崩盤，而是資金重新定價「AI 高估值 +
          事件週」風險。Dow 靠金融與防守頂住，但 Nasdaq
          被半導體拖低；債息回落係利好，不過 10Y 仍在 4.7% 附近，未足以令
          long-duration growth 全面鬆一口氣。短線策略上，尊重 Dow
          的相對強勢，但科技倉要等 NVDA / SOXX 止跌確認；本週 PCE、NVDA、
          Jackson Hole 三連擊前，最重要不是估方向，而是控制倉位同 gap risk。
        </p>
        <h3>主要來源</h3>
        <SourceList />
        <p className="small">
          數據口徑：指數以 CNBC、AP、Reuters mirrors 交叉；ETF/個股以 Yahoo
          Finance、StockAnalysis、Exa、Trefis snippets
          交叉；Treasury/FedWatch/宏觀以 CNBC、CME、Reuters mirrors
          為主；油金因來源時間點不同已標示 close 或區間；Crypto 採 Binance
          Vision 1-minute kline。Yahoo chart API 本輪返回 429；如同一資料源
          quote 與 history 有差異（例如 XLK），本文已用區間或註明方式處理。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
