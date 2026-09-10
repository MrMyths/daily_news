import React from "react";

const reportDate = "2026-09-09";
const publishedAt = "香港時間 2026-09-10 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "Reuters - Wall Street dips as $100 oil, inflation worries weigh on investors",
    url: "https://www.reuters.com/world/china/global-markets-global-markets-2026-09-09/",
  },
  {
    name: "Kitco / Reuters - S&P 500 ends down as oil tops $100 per barrel",
    url: "https://www.kitco.com/news/off-the-wire/2026-09-09/sp-500-ends-down-oil-tops-100-barrel",
  },
  {
    name: "CNBC - Treasury Department to buy back up to $6 billion in longer-term debt",
    url: "https://www.cnbc.com/2026/09/09/treasury-department-to-buy-back-6-billion-in-longer-term-debt-triple-the-normal-level.html",
  },
  {
    name: "Newsquawk - WTI / Brent September 9 crude wrap",
    url: "https://www.newsquawk.com/headlines/crude-wrap-wti-v6-settles-usd-302-higher-at-9605bbl",
  },
  {
    name: "BLS - Producer Price Index release schedule",
    url: "https://www.bls.gov/schedule/news_release/ppi.htm",
  },
  {
    name: "BLS - Schedule of Selected Releases 2026",
    url: "https://www.bls.gov/schedule/news_release/current_year.asp",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Meta - Introducing Muse personal AI agent",
    url: "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/",
  },
  {
    name: "Reuters - Apple debuts passport-shaped foldable phone, called Duo",
    url: "https://www.reuters.com/business/retail-consumer/apple-expected-unveil-first-folding-phone-with-new-ceo-ternus-command-2026-09-09/",
  },
  {
    name: "Reuters - Google to invest $15 billion in AI infrastructure in Finland",
    url: "https://www.reuters.com/business/media-telecom/google-invest-15-billion-ai-infrastructure-finland-2026-09-09/",
  },
  {
    name: "Reuters - Gold climbs on subdued US dollar as inflation data awaited",
    url: "https://www.reuters.com/world/india/gold-climbs-subdued-us-dollar-inflation-data-awaited-amid-oil-rally-2026-09-09/",
  },
  {
    name: "Yahoo Finance - S&P 500 historical data",
    url: "https://finance.yahoo.com/quote/%5EGSPC/history/",
  },
  {
    name: "Yahoo Finance - Select Sector SPDR ETF historical data",
    url: "https://finance.yahoo.com/quote/XLK/history/",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const keyPoints = [
  "美股連續第三個交易日受壓：Dow 52,380.66（-405.41 / -0.77%）、S&P 500 7,636.36（-37.16 / -0.48%）、Nasdaq 26,253.34（-168.07 / -0.64%）、Russell 2000 2,921.23（-1.32%）。",
  "今日核心不是單一科技股問題，而是油價、長債息、Fed pricing 三條線同時收緊：Brent 結算升穿 $100，10Y 美債息收約 4.837%，CME 類口徑顯示 9 月加息機率約 60%。",
  "能源是最清楚的相對強勢：XLE +0.83%，Reuters/Newsquawk 指 Brent $101.21、WTI $96.05，市場即刻重新計通脹風險。",
  "科技內部分化：Meta +6.56% 因 Muse AI agent 帶來 monetization 敘事；但 Alphabet -2.28%、Apple -0.28%、Nvidia -0.91%，令 Nasdaq 未能翻身。",
  "半導體仍硬淨但不是全面 risk-on：SOXX +0.68%，AMD +3.04%、Intel +1.69%、QCOM +1.33%；Broadcom、Nvidia 偏弱，資金只追有即時催化的名字。",
  "市場質感偏弱：Kitco/Reuters 指 S&P 500 跌多升少約 4.1 比 1，VIX 升至 16.46；不是恐慌，但 breadth 已經明顯轉差。",
  "Crypto 採 Binance Vision 2026-09-09 20:00 UTC 1m close（貼近美股 4:00pm ET）：BTC $78,251.41（較 9/8 20:00 UTC -0.27%）、ETH $2,466.00（-0.72%）、SOL $102.37（-0.82%）。",
];

const indexRows = [
  [
    "Dow Jones",
    "52,380.66",
    "-405.41 / -0.77%",
    "連跌壓力延續；高價藍籌、工業與可選消費偏弱，price-weighted Dow 繼續跑輸。",
  ],
  [
    "S&P 500",
    "7,636.36",
    "-37.16 / -0.48%",
    "Reuters 口徑為 7,636.46，Yahoo final close 為 7,636.36，差異很小；本文用 Yahoo final close 計算。",
  ],
  [
    "Nasdaq Composite",
    "26,253.34",
    "-168.07 / -0.64%",
    "Meta 和 AMD 幫手托住，但 Alphabet、Amazon、Nvidia 和 SaaS 弱勢令指數收低。",
  ],
  [
    "Russell 2000",
    "2,921.23",
    "-38.97 / -1.32%",
    "小型股對利率最敏感；10Y/30Y 再升，細價股和 cyclical beta 明顯被減倉。",
  ],
  [
    "VIX",
    "16.46",
    "+0.74 / +4.71%",
    "波動率仍未過 20，但連續兩日補升；PPI/CPI 前，低 VIX 不等於低風險。",
  ],
];

const sectorRows = [
  [
    "Energy / XLE",
    "$65.31 / +0.83%",
    "最強",
    "油價升穿心理關口，能源股成為少數明確綠燈；但升油同時會壓大市估值。",
  ],
  [
    "Semiconductors / SOXX",
    "$532.00 / +0.68%",
    "強",
    "AMD、Intel、QCOM 撐起半導體；Reuters 指 Philadelphia Semi +0.37%，SOXX 口徑更強。",
  ],
  [
    "Technology / XLK",
    "$187.87 / 約 0.00%",
    "中性",
    "Yahoo 20:00 UTC 1m close 與前收相若；半導體和 Meta 以外，mega-cap 仍有沽壓。",
  ],
  [
    "Health Care / XLV",
    "$166.58 / -0.33%",
    "微弱",
    "醫療沒有再現 9/8 的急跌，但在 risk-off 日子亦未能提供強防守。",
  ],
  [
    "Financials / XLF",
    "$57.06 / -0.42%",
    "微弱",
    "長端息升不等於銀行即升；市場更擔心曲線、信貸和估值重定價。",
  ],
  [
    "Communication Services / XLC",
    "$110.83 / -0.62%",
    "弱",
    "Meta 大升被 Alphabet 跌勢抵消，板塊表面只是小跌，內部分化其實好大。",
  ],
  [
    "Materials / XLB",
    "$51.39 / -1.06%",
    "弱",
    "長息高企和增長股降風險令 commodity beta 承壓；材料未能跟油價走強。",
  ],
  [
    "Real Estate / XLRE",
    "$43.41 / -1.12%",
    "弱",
    "10Y/30Y 上行直接壓 REITs 估值，防守屬性今日不夠抵消利率壓力。",
  ],
  [
    "Consumer Staples / XLP",
    "$83.05 / -1.15%",
    "弱",
    "油價高增加消費成本憂慮，資金未有明顯泊入 staples 避險。",
  ],
  [
    "Utilities / XLU",
    "$42.94 / -1.17%",
    "弱",
    "高長債息令高股息板塊吸引力下降，防守股亦要讓位給債息壓力。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$112.46 / -1.34%",
    "更弱",
    "Amazon、家居零售與高 beta 消費偏弱；高油價和高息對可選消費最不友善。",
  ],
  [
    "Industrials / XLI",
    "$171.79 / -1.51%",
    "最弱",
    "工業股受 Dow、長息與 cyclical 降風險拖累，是今日 sector proxy 最大跌幅。",
  ],
];

const macroRows = [
  [
    "原油",
    "Newsquawk：WTI $96.05（+3.02）；Brent $101.21（+3.29）；Yahoo 20:00 UTC 口徑 WTI 約 $96.77、Brent 約 $101.62",
    "油價升穿 $100 會即時改變通脹敘事；能源股受惠，但大市 discount rate 壓力更大。",
  ],
  [
    "美債息",
    "Yahoo ^TNX 10Y 收 4.837%；^TYX 30Y 收 5.286%；CNBC 指 10Y 盤中見 4.841%、30Y 曾穿 5.3%",
    "Treasury buyback 規模未令市場滿意，長端息反而升；growth、REITs、小型股最受壓。",
  ],
  [
    "FedWatch / 利率定價",
    "Kitco/Reuters 指交易員約 60% 機率押注下週加息；BlockBeats 引 CME 口徑 60.4% hike、39.6% hold",
    "方向是偏鷹，但 Reuters survey 約 70% 經濟學家仍預期 hold；市場定價和經濟學家有分歧。",
  ],
  [
    "通脹數據",
    "BLS 日程：8 月 PPI 9/10 08:30 ET；8 月 CPI 9/11 08:30 ET",
    "這兩份數據是 FOMC 前最後關鍵輸入；若油價因素傳入 PPI/CPI，股債會繼續受壓。",
  ],
  [
    "勞工成本",
    "BLS 9/9 發布 June ECEC；公開報道指 civilian worker 平均補償成本約 $49.46 / hour",
    "工資/福利成本仍是服務通脹底層變數；即使不是今日最大催化，都會影響 Fed 對通脹黏性的判斷。",
  ],
  [
    "美元",
    "DXY 20:00 UTC 約 98.83，收市附近變化不大；Yahoo 隔夜資料約 98.79-98.84",
    "美元未有明顯大升，說明今日壓力主要來自油價和長端息，不是單純美元擠壓。",
  ],
  [
    "黃金",
    "Reuters：spot gold 13:54 ET 約 $4,414.30，Dec futures settle $4,458.80；Yahoo 20:00 UTC futures 約 $4,442.30",
    "避險和弱美元支持黃金，但高實質利率預期限制追價；不同現貨/期貨截數有明顯差異。",
  ],
];

const stockRows = [
  [
    "Meta",
    "$653.69 / +6.56%",
    "Meta Muse AI agent 上線，市場視為 AI capex 轉化為直接消費收入的第一個清晰定價錨。",
  ],
  [
    "Apple",
    "$315.34 / -0.28%",
    "Reuters 指 Apple 發布 passport-shaped foldable iPhone Duo，是 John Ternus 任 CEO 後首次大型發布；股價反應偏冷淡。",
  ],
  [
    "Alphabet",
    "$330.65 / -2.28%",
    "Google 宣布芬蘭 AI infrastructure 與 nuclear power pact，但市場更關注 capex、AI 回報期和與 Meta Muse 的競爭。",
  ],
  [
    "AMD / Intel / Qualcomm",
    "AMD +3.04%；INTC +1.69%；QCOM +1.33%",
    "半導體仍有相對強勢，資金偏好 AI hardware 和運算供應鏈；但不是整個科技板塊一起升。",
  ],
  [
    "SOXX / Nvidia / Broadcom",
    "SOXX +0.68%；NVDA -0.91%；AVGO -1.13%",
    "SOXX 綠燈靠 AMD/Intel/QCOM 撐住，AI leader 沒有全面跟升，顯示資金選股好挑剔。",
  ],
  [
    "Microsoft / Amazon",
    "MSFT -0.47%；AMZN -1.78%",
    "長端息升令 mega-cap multiple 受壓；Amazon 同時拖低 XLY，可選消費質感弱過科技。",
  ],
  [
    "CRM / NOW / INTU",
    "CRM -1.99%；NOW -2.31%；INTU -1.56%",
    "傳統 SaaS 繼續受 AI agent 替代敘事影響；市場願意買 AI monetization，但不想買被 AI 壓 margin 的 per-seat 模型。",
  ],
  [
    "Energy / Banks",
    "XLE +0.83%；JPM +0.34%；GS -0.75%",
    "油股最清楚受惠；金融分化，長息升未能自動轉化為銀行板塊買盤。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$78,251.41",
    "-0.27%",
    "Binance Vision 2026-09-09 20:00 UTC 1m close；比較基準為 2026-09-08 20:00 UTC $78,462.00。",
  ],
  [
    "ETHUSDT",
    "$2,466.00",
    "-0.72%",
    "同一採樣時間；ETH 對高息與 risk-off 比 BTC 更敏感，日內相對較弱。",
  ],
  [
    "SOLUSDT",
    "$102.37",
    "-0.82%",
    "SOL 仍守在 $100 上方，但高 beta 在 PPI/CPI 前不宜過度追倉。",
  ],
];

const technicalRows = [
  [
    "S&P 500",
    "高 7,660.68；低 7,624.16；收 7,636.36",
    "開市接近日高、收近低位，短線防線在 7,624-7,636；若失守，下一站看 7,580-7,600。",
  ],
  [
    "Nasdaq",
    "高 26,366.56；低 26,184.21；收 26,253.34",
    "26,180 是即日低位支持；要重拾動能，先要收回 26,365，再看 26,420-26,500。",
  ],
  [
    "Russell 2000",
    "高 2,952.61；低 2,918.89；收 2,921.23",
    "已跌穿 2,960 附近短線支撐，小型股需要債息回落才容易修復。",
  ],
  [
    "10Y Yield",
    "高 4.857%；收 4.837%",
    "4.85% 附近是估值壓力線；若 PPI/CPI 後突破，growth multiple 和 real estate 會繼續受壓。",
  ],
  [
    "VIX",
    "高 16.68；收 16.46",
    "仍未恐慌，但升穿 16 後代表市場開始為通脹數據買保險；低位追短 call 風險回報一般。",
  ],
];

const eventRows = [
  "週四 08:30 ET 先看 PPI：headline 若高過 0.4% m/m 或 core 高過 0.3%，Fed hike 定價可能再升。",
  "週五 CPI 是更大關口；若 CPI 未能降溫，10Y 可能測試 4.9%，Nasdaq 和 Russell 壓力會放大。",
  "留意 Brent 能否守在 $100 上方；若守住，能源繼續有相對優勢，但大市會擔心通脹二次回升。",
  "Treasury 長端 buyback 周四執行，市場會看 20Y/30Y liquidity 是否改善；若無效，duration trade 繼續難做。",
  "Apple 新機發布後看 preorder / supply commentary；Meta 則看 Muse 能否由一次性 re-rating 變成可持續 monetization 敘事。",
];

const actionRows = [
  [
    "短線交易",
    "SPX 未收回 7,660 前，反彈當 technical bounce 處理；若失 7,624，先減 beta，不急於撈底。",
  ],
  [
    "板塊配置",
    "能源和部分半導體是相對強勢；工業、可選消費、REITs 和小型股要等債息回落才考慮加注。",
  ],
  [
    "股票選擇",
    "AI monetization（Meta）好過純 capex 故事；SaaS 要分清楚是被 AI 提升效率，還是被 AI agent 壓 pricing power。",
  ],
  [
    "Crypto",
    "BTC/ETH/SOL 只是小跌，但在 Fed pricing 偏鷹、VIX 上升、PPI/CPI 前，槓桿倉不宜放大。",
  ],
  [
    "資料口徑",
    "指數採 Yahoo final close 並與 Reuters / Kitco 交叉核對；ETF/個股採 Yahoo 20:00 UTC regular-session 1m close；Crypto 採 Binance Vision。",
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

export default function USCloseBrief20260909() {
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
          background: linear-gradient(135deg, #7f1d1d 0%, #b91c1c 40%, #111827 100%);
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
          {reportDate} 收市｜油價升穿 $100、長債息抽高；Meta 逆市撐住 AI 敘事
        </div>
        <div className="meta">
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">美股：9/9 regular-session final close</span>
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
            <h3>$100 Brent 令通脹交易返嚟</h3>
            <p>
              Reuters 指中東衝突令 Brent 升穿 $100，Newsquawk 結算口徑為
              $101.21。油價高不是只利好能源，亦會推高 PPI/CPI 和 Fed
              加息敏感度。
            </p>
          </div>
          <div className="callout">
            <h3>長債息升，Treasury buyback 未夠力</h3>
            <p>
              CNBC 指 Treasury 將買回最多 $6bn 10-20 年期債，但市場原本想像可能
              $8bn-$10bn；長端息反而上行，壓低股票估值。
            </p>
          </div>
          <div className="callout">
            <h3>Fed 定價偏鷹，PPI/CPI 前唔想博</h3>
            <p>
              Reuters/Kitco 指交易員約 60% 押注下週加息。BLS 日程顯示 PPI 和 CPI
              分別在週四、週五公布，所以資金先減高 beta。
            </p>
          </div>
          <div className="callout">
            <h3>AI 不是熄火，是更揀股</h3>
            <p>
              Meta 因 Muse AI agent 大升，但 Alphabet、Apple、Nvidia
              下跌。市場買「收入路徑清晰」的 AI，對 capex 或被替代風險更苛刻。
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
          作口徑，時間為 2026-09-09 20:00 UTC，貼近美股 4:00pm ET；比較基準採
          2026-09-08 20:00
          UTC。如與其他交易所即時價有差異，屬交易所與採樣時間差異。
        </p>
        <DataTable
          headers={["幣種", "採樣價", "較上一完整美股收盤時段", "口徑"]}
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
            <span className="green">相對強：</span>
            能源、部分半導體、Meta。資金不是完全離場，而是集中在油價受惠和 AI
            monetization 較清楚的名字。
          </li>
          <li>
            <span className="red">相對弱：</span>
            Russell、工業、可選消費、REITs、SaaS。高息環境下，市場對長久期 cash
            flow 和消費 beta 容忍度下降。
          </li>
          <li>
            <span className="amber">整體：</span>
            VIX 16.46 未到 panic，但 breadth 4.1 比 1
            偏弱，代表表面跌幅不大，底層已經轉 defensive。
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
          今日美股的訊號好直接：市場不是突然不信
          AI，而是同一時間要重新計三件事： 油價升穿 $100
          對通脹的壓力、長債息抽高對估值的壓力、以及 Fed
          下週會否加息的政策壓力。Meta 大升說明 AI 主線未死，但 Alphabet、SaaS、
          Russell 和 REITs
          的弱勢亦提醒大家，高息環境會迫資金更挑剔。短線策略係： PPI/CPI 前控制
          beta，SPX 先守 7,624-7,636，等債息和油價確認方向後先加大倉位。
        </p>
        <h3>資料差異處理</h3>
        <p className="small">
          指數以 Yahoo chart final close 作主口徑，並與 Reuters / Kitco
          交叉核對；Reuters / Kitco 對 S&P 500 和 Dow 的尾數與 Yahoo 有約
          0.1-0.4 點差異，本文採 Yahoo final close。ETF/個股日線在截數時部分
          close 欄位未完全填入，因此採 Yahoo 20:00 UTC regular-session 1m close
          計算。油價同時列出 Newsquawk 結算價和 Yahoo 20:00 UTC
          價，兩者因合約/截數時間不同略有差異。黃金使用 Reuters
          現貨/期貨報價並標示 Yahoo 20:00 UTC futures 口徑。Crypto 全部採
          Binance Vision 20:00 UTC 1m close。
        </p>
        <SourceList />
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
