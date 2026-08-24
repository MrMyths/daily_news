import React from "react";

const reportDate = "2026-08-21";
const publishedAt = "香港時間 2026-08-24 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market news for Aug. 21, 2026",
    url: "https://www.cnbc.com/2026/08/20/stock-market-today-live-updates.html",
  },
  {
    name: "AP - How major US stock indexes fared Friday 8/21/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-09c079b43680c3e4564346892b5dc824",
  },
  {
    name: "MarketScreener/Reuters - Wall St rebounds, but yield surge sets stage for weekly losses",
    url: "https://www.marketscreener.com/news/wall-st-rebounds-but-yield-surge-sets-stage-for-weekly-losses-ce7858dada8cf121",
  },
  {
    name: "Yahoo Finance - Markets News, Aug. 21, 2026",
    url: "https://finance.yahoo.com/markets/stocks/articles/markets-news-aug-21-2026-121542832.html",
  },
  {
    name: "CNBC - Treasury yields: Bessent's bond buyback rally fizzles out",
    url: "https://www.cnbc.com/2026/08/21/treasury-yields-bonds-inflation-rates.html",
  },
  {
    name: "U.S. Treasury - Daily Treasury Rates",
    url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value_month=202608&type=daily_treasury_yield_curve",
  },
  {
    name: "CNBC - Oil prices set for weekly rise as U.S. ups economic pressure on Iran",
    url: "https://www.cnbc.com/2026/08/21/oil-prices-us-iran.html",
  },
  {
    name: "S&P Global - Flash US PMI August 2026",
    url: "https://www.pmi.spglobal.com/Public/Home/PressRelease/552d682e429640fcb8af7da17ad060c3",
  },
  {
    name: "StockAnalysis - Select Sector SPDR ETF histories",
    url: "https://stockanalysis.com/etf/xlc/history/",
  },
  {
    name: "Yahoo Finance - Target historical data",
    url: "https://finance.yahoo.com/quote/TGT/history/",
  },
  {
    name: "Yahoo Finance - Ross Stores historical data",
    url: "https://finance.yahoo.com/quote/ROST/history/",
  },
  {
    name: "NVIDIA Newsroom - Q2 FY2027 earnings call schedule",
    url: "https://nvidianews.nvidia.com/news/nvidia-sets-conference-call-for-second-quarter-financial-results-6927195",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const keyPoints = [
  "週五美股反彈但未能救返全週：Dow +517.80 點 / +0.98% 至 53,277.01，S&P 500 +0.43% 至 7,674.37，Nasdaq +0.43% 至 26,180.45；Russell 2000 +0.85%，VIX 由 16.01 回落至 15.13。",
  "反彈主線係前一日急跌後有 bargain hunting，加上 S&P Global flash PMI 顯示服務業強過預期；但 Reuters/CNBC 同時提醒，長債息仍高、油價仍升，所以全週 S&P 500 / Nasdaq 分別仍跌約 1.4% / 2.0%。",
  "美債仍是最大風險開關：CNBC 指 2Y 約 4.232%、10Y 約 4.734%、30Y 約 5.273%，Treasury buyback 帶來的 relief 未能完全壓低長端息。",
  "油價連升兩週，Brent 收 $94.39、WTI 收 $87.06；伊朗制裁與 Hormuz 供應風險令通脹尾巴未走，對下週 PCE 與 Jackson Hole 解讀好重要。",
  "板塊上不是全面 risk-on：Materials / Health Care / Consumer Discretionary 較強，但 SOXX、Energy 偏弱；Nvidia 收 $214.72 / -0.98%，反映 AI crowded trade 仍有人減磅等 8/26 業績。",
  "Crypto 採 Binance Vision 2026-08-21 20:00 UTC 1m close（貼近美股 4:00pm ET）：BTC $76,998.00（+5.99%）、ETH $2,412.83（+3.79%）、SOL $90.75（+3.99%）。",
];

const indexRows = [
  [
    "Dow Jones",
    "53,277.01",
    "+517.80 / +0.98%",
    "Dow 領升，CNBC 指 healthcare names 如 Merck、Johnson & Johnson 有支持；但全週仍跌約 0.8%-0.9%。",
  ],
  [
    "S&P 500",
    "7,674.37",
    "+33.21 / +0.43%",
    "AP、CNBC、Reuters mirror 口徑一致；日內反彈，但全週 -111.39 點 / -1.4%，三週升勢被截停。",
  ],
  [
    "Nasdaq Composite",
    "26,180.45",
    "+113.29 / +0.43%",
    "科技大盤跟升，但 NVDA 逆市跌；全週跌約 2.0%-2.1%，比 Dow 更弱。",
  ],
  [
    "Russell 2000",
    "3,017.87",
    "+25.44 / +0.85%",
    "小型股反彈較大，但全週仍跌 1.6%，說明高息對融資敏感股份仍有壓力。",
  ],
  [
    "VIX",
    "15.13",
    "-0.88 / -5.50%",
    "VIX 從 8/20 的 16.01 回落，市場沒有恐慌；但 VIX 低位亦代表保護便宜時要守風控。",
  ],
];

const sectorRows = [
  [
    "Materials / XLB",
    "$53.00 / 約 +1.10%",
    "最強",
    "Dean/StockAnalysis snippets 指材料領漲；弱美元與商品鏈承接有幫助。",
  ],
  [
    "Health Care / XLV",
    "$174.62 / 約 +1.29%",
    "強",
    "前日急跌後反彈，亦支持 Dow；防守板塊今日重新有資金。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$118.02 / +1.15%",
    "強",
    "TSLA 反彈與零售分化支持板塊；但高油價與高息仍限制估值擴張。",
  ],
  [
    "Financials / XLF",
    "$57.48 / +0.93%",
    "綠燈",
    "曲線仍高但經濟數據強，金融股跟住 broad rebound 回升。",
  ],
  [
    "Consumer Staples / XLP",
    "$85.99 / +0.79%",
    "修復",
    "Walmart 前日暴跌後靠低位承接穩住；但消費質素分化未解決。",
  ],
  [
    "Communication Services / XLC",
    "$111.40 / +0.65%",
    "溫和綠",
    "StockAnalysis 歷史頁顯示 XLC 由 8/20 的 $110.68 回升至 $111.40。",
  ],
  [
    "Utilities / XLU",
    "$43.91 / 約 +0.32%",
    "微綠",
    "即使長端息上行，防守收益型板塊仍有小幅承接，但不是市場主線。",
  ],
  [
    "Technology / XLK",
    "$183.31 / +0.11%",
    "偏弱綠",
    "大型科技只微升，NVDA 跌入業績週前低位附近，反映 AI beta 未全面 risk-on。",
  ],
  [
    "Energy / XLE",
    "$63.64 / 約 -0.17%",
    "偏弱",
    "油價收高但能源 ETF 未同步上升，可能已提前反映兩週油價升幅。",
  ],
  [
    "Industrials / XLI",
    "$181.27 / 約 +0.83%",
    "綠燈（口徑註明）",
    "Exa/StockAnalysis snippets 對日內百分比有差異；按 8/20 模板 close $179.77 計算約 +0.83%。",
  ],
  [
    "Real Estate / XLRE",
    "約 $44.71-$45.08",
    "資料衝突",
    "即時頁與 snippets 對 8/21 close / previous close 不一致；本文不給單一排名，只提示長端息高對 REITs 仍不友善。",
  ],
  [
    "Semiconductors / SOXX",
    "$520.05 / 約 -0.44%",
    "紅燈",
    "SOXX 跑輸大市，NVDA 業績前減磅壓住 AI/semis 情緒。",
  ],
];

const macroRows = [
  [
    "美債息",
    "2Y 約 4.232%；10Y 約 4.734%；30Y 約 5.273%",
    "CNBC 指長端息週五再升，Treasury buyback rally fizzles out；高折現率仍是股市反彈的天花板。",
  ],
  [
    "FedWatch",
    "9月 hold 約 60%-64%；+25bp 約 36%-40%（同日第三方快訊時間點不同）",
    "CME 官方工具是基準，但公開快訊採樣時間不同；本文標示區間，重點是市場仍定價三分之一以上加息尾部風險。",
  ],
  [
    "油價",
    "Brent $94.39 / +$0.61；WTI $87.06 / +$0.23",
    "CNBC 指油價全週升逾 5%，因美國加大對伊朗經濟壓力、Hormuz 供應不確定性仍在。",
  ],
  [
    "黃金",
    "GC futures 約 $4,661.60 / +1.97%；spot 維持 $4,600 上方附近",
    "Yahoo/MarketScreener snippets 顯示弱美元與美債憂慮支持黃金；不同來源時間點有差異，所以採 futures close 加文字註明。",
  ],
  [
    "美元",
    "DXY 約 98.6-98.84",
    "FXStreet/FXEmpire snippets 指美元低於 99 並錄得週跌幅；弱美元是黃金與部分商品的支撐。",
  ],
  [
    "PMI",
    "Composite 56.0；Services 56.8；Manufacturing PMI 53.2",
    "S&P Global 官方 flash PMI 顯示服務業 20 個月高位、Composite 52 個月高位；但製造業放慢，經濟訊號是強但不均衡。",
  ],
  [
    "下週宏觀",
    "PCE、Jackson Hole / Warsh speech、長端 buyback 操作",
    "市場會看 Fed 是否容忍長端息做 tightening，以及油價會否重新推高通脹預期。",
  ],
];

const stockRows = [
  [
    "ROST",
    "$239.04 / +4.39%",
    "Ross Stores Q2 EPS $2.66、comps +10%，並把 FY EPS guide 提至 $8.61-$8.77；Reuters 早段曾報 premarket nearly +9%，收市升幅收窄但仍是零售亮點。",
  ],
  [
    "TGT / WMT",
    "TGT $165.44 / +4.54%；WMT $103.70 / -0.13%",
    "Target 延續 earnings 後買盤；Walmart 前日大跌後只是橫行，市場仍在分辨消費弱點是公司單名定價問題，還是低收入消費壓力。",
  ],
  [
    "NVDA / SOXX",
    "NVDA $214.72 / -0.98%；SOXX 約 -0.44%",
    "Nvidia 8/26 盤後公布 FY2027 Q2，股價在大市升時收近全日低位，說明業績前 crowded AI trade 有減磅。",
  ],
  [
    "MSTR / COIN / MARA",
    "MSTR $119.25；COIN $186.49；MARA $11.26",
    "BTC 逼近 $77k 帶動 crypto beta；不同資料源對日內百分比有差異，本文採收市價並把方向定性為 crypto-exposed stocks 強勢。",
  ],
  [
    "AAPL / MSFT / AMZN / META / GOOGL",
    "AAPL $309.35 / -0.63%；MSFT $483.24；AMZN $258.63；META $549.90；GOOGL $344.82",
    "mega-cap 分化：平台與軟件有承接，但 AAPL、NVDA 跑輸；Nasdaq 的 +0.43% 不是全面大型科技升市。",
  ],
  [
    "HD",
    "Q2 revenue $47.86B；adjusted EPS $4.92",
    "Home Depot 早前業績勝預期並維持全年指引；但管理層仍提到 housing market frozen，對耐用品/裝修需求不宜過度樂觀。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$76,998.00",
    "+5.99%",
    "Binance Vision 2026-08-21 20:00 UTC 1m close；前值 2026-08-20 20:00 UTC $72,646.00。",
  ],
  [
    "ETHUSDT",
    "$2,412.83",
    "+3.79%",
    "同一時間點 close；ETH 延續上升但跑輸 BTC 的 24h 升幅。",
  ],
  [
    "SOLUSDT",
    "$90.75",
    "+3.99%",
    "同一時間點 close；升穿 $90，仍屬高 beta risk appetite 指標。",
  ],
];

const technicalRows = [
  [
    "S&P 500",
    "7,641 由失守位變即市支持；7,700 是第一阻力；7,745-7,786 是上週供應帶。",
    "若下週收回 7,700 並企穩，反彈可信度提升；若跌穿 7,641，週五 rebound 會變 dead-cat bounce。",
  ],
  [
    "Nasdaq",
    "26,067 / 26,180 是短線支持區；26,331-26,645 是上方阻力。",
    "NVDA 業績前，Nasdaq 方向好大程度取決於 AI 指標股能否重新領升。",
  ],
  [
    "Russell 2000",
    "重新企上 3,000，但全週仍跌。",
    "小型股要跑贏，需要長端息回落與 credit spread 穩定，否則反彈會較脆弱。",
  ],
  [
    "VIX",
    "15.13 低於 20，未見恐慌。",
    "低 VIX 配高長端息，是容易令投資者低估尾部風險的組合；下週事件前不宜過度槓桿。",
  ],
];

const eventRows = [
  "Jackson Hole / Fed Chair Warsh speech：市場等緊 Fed 對長端息、油價與通脹尾巴的態度。",
  "PCE inflation：若核心 PCE 高過預期，FedWatch 的加息尾部風險會再升。",
  "Nvidia 8/26 盤後業績：AI capex、gross margin、Blackwell / Vera Rubin 需求指引會牽動 SOXX、Nasdaq 與整個 AI basket。",
  "美債 buyback 與供應：10Y 4.70% / 30Y 5.27% 是風險資產估值的即時開關。",
  "油價與伊朗：Brent $94-$95 附近若再向上，消費、航空與通脹預期會受壓。",
];

const actionRows = [
  [
    "短線交易",
    "SPX 未企穩 7,700 前，週五反彈先當 oversold bounce；突破要配合 breadth 與 10Y 回落。",
  ],
  [
    "板塊配置",
    "可以留意 healthcare、materials、quality retail 的相對強勢；SOXX/AI 要等 NVDA 業績確認。",
  ],
  [
    "風控",
    "持倉避免同時重倉 long-duration growth、small caps、REITs；這三類都對長端息敏感。",
  ],
  [
    "資料口徑",
    "Yahoo chart API 本輪返回 429；指數用 AP/CNBC/Reuters mirror 交叉，ETF/個股用 StockAnalysis、Yahoo Finance、Exa snippets，衝突處已明示。",
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

export default function USCloseBrief20260821() {
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
          background: linear-gradient(135deg, #14532d 0%, #166534 42%, #111827 100%);
          color: white;
          border-radius: 28px;
          padding: 34px;
          box-shadow: 0 18px 45px rgba(22, 101, 52, 0.22);
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
        h2 { margin: 0 0 14px; color: #166534; font-size: 25px; }
        h3 { margin: 16px 0 8px; color: #1e3a8a; font-size: 18px; }
        ul { margin: 0; padding-left: 22px; }
        li { margin: 7px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 14px; }
        th, td { border-bottom: 1px solid #e5e7eb; padding: 10px 9px; vertical-align: top; text-align: left; }
        th { background: #f1f5f9; color: #334155; font-size: 13px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .callout { background: #ecfdf5; border-left: 5px solid #22c55e; padding: 14px 16px; border-radius: 14px; }
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
          {reportDate} 收市｜週五反彈，但債息、油價同 NVDA 業績風險仍未退
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
            <h3>急跌後 bargain hunting</h3>
            <p>
              前一日 Dow 跌逾 700 點後，週五有低吸盤入場。AP 形容美股「trimmed
              losses from a shaky week」，即係有反彈，但未真正扭轉全週弱勢。
            </p>
          </div>
          <div className="callout">
            <h3>PMI 支持 soft-landing 敘事</h3>
            <p>
              S&P Global flash Composite PMI 升至 56.0、Services PMI 56.8，
              服務業強過預期，令投資者相信企業盈利仍有支持。
            </p>
          </div>
          <div className="callout">
            <h3>但長端息未降</h3>
            <p>
              10Y 約 4.734%、30Y 約
              5.273%，即係估值折現率仍高。今次反彈不是因為利率壓力消失，
              只是市場暫時接受「經濟仍強」。
            </p>
          </div>
          <div className="callout">
            <h3>油價令通脹尾巴未熄</h3>
            <p>
              Brent $94.39、WTI $87.06，伊朗制裁與 Hormuz 風險令能源成本仍是 Fed
              path 的干擾項。
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
          public data API 的 1-minute kline。採樣時間為 2026-08-21 20:00
          UTC，貼近美股 4:00pm ET；比較基準為 2026-08-20 20:00 UTC。
        </p>
        <DataTable
          headers={["幣種", "20:00 UTC close", "24h 變動", "口徑"]}
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
            <strong>Nvidia：</strong>公司官方公布 8/26 盤後發布 FY2027 Q2
            業績；NVDA 在大市升時跌 0.98%，代表市場先減少 AI crowded exposure。
          </li>
          <li>
            <strong>Ross Stores：</strong>Q2 EPS $2.66、comps +10%，FY EPS guide
            上調至 $8.61-$8.77；不過股價由早段高位回落，追貨要看延續力。
          </li>
          <li>
            <strong>Retail dispersion：</strong>Target 升、Walmart 橫行、Home
            Depot 指 housing market frozen，消費不是全面差，但分化愈來愈大。
          </li>
          <li>
            <strong>Energy / Inflation：</strong>油價第二週上升，下週 PCE
            若不夠友善，FedWatch 尾部加息機率會再被推高。
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>10）明日 / 下週觀察清單</h2>
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
          今日可以叫做「跌完彈」，但未可以叫全面轉強。好的一面係 PMI
          證明服務業仍有力、VIX 回落、Dow 與 small caps 有反彈；差的一面係
          10Y/30Y yield 仍高、油價仍在 $90 附近上方、Nasdaq 全週仍明顯跑輸，而且
          NVDA
          進入業績週前仍被沽。策略上，短線可以尊重反彈，但不要忘記真正確認位在
          SPX 7,700 上方同長端息回落；未見之前，倉位要分散，風控要先行。
        </p>
        <h3>主要來源</h3>
        <SourceList />
        <p className="small">
          數據口徑：指數以 AP、CNBC、Reuters mirrors 交叉；ETF/個股以
          StockAnalysis、Yahoo Finance、Exa snippets
          交叉；Treasury/FedWatch/宏觀以 CNBC、U.S. Treasury、CME、S&P Global
          為主；油金因來源時間點不同已標示 close 或區間；Crypto 採 Binance
          Vision 1-minute kline。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
