import React from "react";

const reportDate = "2026-09-18";
const publishedAt =
  "香港時間 2026-09-21 09:02（週一更新；美股週末休市，數據截至美股 9/18 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP via The Seattle Times - How major US stock indexes fared Friday 9/18/2026",
    url: "https://www.seattletimes.com/business/how-major-us-stock-indexes-fared-friday-9-18-2026/",
  },
  {
    name: "Reuters via MarketScreener - S&P 500, Nasdaq advance, turning the page on a tumultuous week",
    url: "https://ca.marketscreener.com/news/s-p-500-nasdaq-advance-turning-the-page-on-a-tumultuous-week-ce785adadf88f526",
  },
  {
    name: "Reuters - Oil prices fall 1% on hopes of limited supply disruptions",
    url: "https://www.reuters.com/business/energy/oil-prices-fall-1-hopes-limited-supply-disruptions-2026-09-18/",
  },
  {
    name: "MarketScreener / Reuters - US yields rise as investors weigh outlook for rate hikes",
    url: "https://www.marketscreener.com/news/treasuries-us-yields-rise-as-investors-weigh-outlook-for-rate-hikes-ce785adadd8ef120",
  },
  {
    name: "Federal Reserve - FOMC statement, September 16 2026",
    url: "https://www.federalreserve.gov/monetarypolicy/files/monetary20260916a1.pdf",
  },
  {
    name: "Federal Reserve - September 2026 SEP projections",
    url: "https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260916.htm",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Reuters - Global equity fund outflows hit nine-month high on inflation fears",
    url: "https://www.reuters.com/world/china/global-markets-flows-graphic-pix-2026-09-18/",
  },
  {
    name: "Reuters - Robust US retail sales underscore economy's resilience",
    url: "https://www.reuters.com/business/retail-consumer/us-retail-sales-rebound-sharply-august-2026-09-16/",
  },
  {
    name: "Reuters - US weekly jobless claims unexpectedly fall",
    url: "https://www.reuters.com/business/us-weekly-jobless-claims-unexpectedly-fall-2026-09-17/",
  },
  {
    name: "Anadolu Agency - Nvidia expects to double chip sales next year, CEO says",
    url: "https://www.aa.com.tr/en/economy/nvidia-expects-to-double-chip-sales-next-year-ceo-says/4060864",
  },
  {
    name: "Schwab Network - Closing Bell: Stocks End Mixed on Triple Witching Friday",
    url: "https://schwabnetwork.com/articles/closing-bell-stocks-end-mixed-on-triple-witching-friday",
  },
  {
    name: "Stooq - US Global and U.S. Sectors ETFs, 2026-09-18",
    url: "https://stooq.com/t/?d=20260918&f=1&i=551&u=1&v=0",
  },
  {
    name: "Finviz - SOXX iShares Semiconductor ETF quote",
    url: "https://finviz.com/stock?t=SOXX",
  },
  {
    name: "Yahoo Finance chart data - market, ETF and stock close reference",
    url: "https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC",
  },
  {
    name: "Cboe - VIX Volatility Products",
    url: "https://www.cboe.com/en/tradable-products/vix/",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
  {
    name: "Binance Vision public data",
    url: "https://data.binance.vision/",
  },
];

const keyPoints = [
  "週一更新：美股週末休市，今份日報補上 2026-09-18（上週五）收市。AP 收市：Dow 51,682.64（-95.40 / -0.18%）、S&P 500 7,650.50（+12.74 / +0.17%）、Nasdaq 26,522.55（+104.25 / +0.40%）、Russell 2000 2,860.40（-14.23 / -0.50%）。",
  "大市表面穩住，內裏其實偏窄：Reuters 指 semiconductor rally 托起 S&P 500 / Nasdaq，但 Dow 下跌；NYSE 跌股對升股約 1.78:1，Nasdaq 跌股對升股約 1.42:1。",
  "宏觀壓力仍在：10Y yield 回到約 4.998%-5.00%，30Y 約 5.332%，Fed 9/16 剛加息至 3.75%-4.00%，FedWatch / Reuters 口徑顯示 10 月再加息機率約 55.4%。",
  "板塊分化清晰：SOXX +2.69%、XLK +0.82% 撐住指數；XLB -1.42%、XLU -1.42%、XLC -1.37%、XLRE 約 -0.95% 反映高息環境下 rate-sensitive / defensives 仍受壓。",
  "個股主線分兩邊：Nvidia CEO 說明年晶片銷量有望翻倍，AI semis 續強；COIN +11.62%、HOOD +9.28% 受 crypto / tokenized equities 題材帶動，NUE、QCOM、GM 是主要拖累。",
  "Crypto 採 Binance Vision 2026-09-18 20:00 UTC 1m close（美股 4:00pm ET 附近）：BTC $81,081.26（較 9/17 20:00 UTC +5.93%）、ETH $2,630.67（+7.48%）、SOL $113.81（+12.81%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "51,682.64",
    change: "-95.40 / -0.18%",
    read: "藍籌收跌，Reuters 指 broader weakness 抵消 semis 反彈；全週亦跌 1.69%，是主要指數中最弱。",
  },
  {
    asset: "S&P 500",
    close: "7,650.50",
    change: "+12.74 / +0.17%",
    read: "連續第二日企穩 7,600，但升幅非常窄；7,650 是短線分水嶺，升勢要靠更多板塊擴散。",
  },
  {
    asset: "Nasdaq Composite",
    close: "26,522.55",
    change: "+104.25 / +0.40%",
    read: "Semis / AI names 拉動，成為當日相對贏家；高息未令 AI trade 即時退場。",
  },
  {
    asset: "Russell 2000",
    close: "2,860.40",
    change: "-14.23 / -0.50%",
    read: "小型股怕高融資成本，與 Nasdaq 背馳；是 breadth 未修復的最直接訊號。",
  },
  {
    asset: "VIX",
    close: "14.81",
    change: "-0.63 / -4.08%",
    read: "波幅回落，但不是 risk-free：Fed event risk 過後，市場暫時買回 AI beta，同時忽略廣度轉差。",
  },
];

const sectorRows = [
  [
    "Semiconductors / SOXX",
    "$533.07 / +2.69%",
    "最強",
    "SOXX 與 PHLX Semiconductor Index（約 +2.78%）是全日最重要支撐。Nvidia chip demand 指引、AMD / MU / NVDA 跟升，令 Nasdaq 跑贏。",
  ],
  [
    "Technology / XLK",
    "$189.60 / +0.82%",
    "強",
    "大科技仍是資金避風港式 growth；但升幅主要靠 semis，software / comm services 並不全面跟上。",
  ],
  [
    "Industrials / XLI",
    "$169.75 / +0.44%",
    "偏強",
    "Stooq 顯示 XLI 是少數正回報 sector ETF；但 Dow 仍跌，代表工業內部分化，不是全面 cyclical bid。",
  ],
  [
    "Financials / XLF",
    "$55.86 / -0.04%",
    "中性",
    "接近平收。高息對銀行不一定純利好，因市場同時擔心曲線、信貸與經濟後勁。",
  ],
  [
    "Health Care / XLV",
    "$168.39 / -0.25%",
    "中性偏弱",
    "防守板塊沒有明顯吸資金；risk budget 仍偏向 AI / crypto beta，而不是醫療防守。",
  ],
  [
    "Energy / XLE",
    "$64.31 / -0.26%",
    "中性偏弱",
    "WTI / Brent 第三日回落但仍守 $100，上游情緒由 geopolitical premium 轉為高位整固。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$111.03 / -0.32%",
    "偏弱",
    "消費韌性未能轉化成板塊買盤；高油價、高按息繼續壓住 discretionary multiple。",
  ],
  [
    "Consumer Staples / XLP",
    "$82.80 / -0.83%",
    "弱",
    "防守消費未有避險流入，反映資金不是全面 risk-off，而是挑選 semis / AI。",
  ],
  [
    "Real Estate / XLRE",
    "約 -0.95%（Swingfolio / sector scorecard 口徑）",
    "弱",
    "10Y 回到 5% 附近、mortgage rate 壓 housing，REITs 仍是高息受害者。",
  ],
  [
    "Communication Services / XLC",
    "$110.81 / -1.37%",
    "弱",
    "Google / Meta 有支撐，但 Netflix 等拖累，XLC 未能跟 AI semis 一起走強。",
  ],
  [
    "Materials / XLB",
    "$49.99 / -1.42%",
    "最弱",
    "美元仍偏強、長債息上行，材料股與 cyclicals 承壓。",
  ],
  [
    "Utilities / XLU",
    "$41.10 / -1.42%",
    "最弱",
    "典型 rate-sensitive sector，被 10Y 5% 壓住估值；防守收益率不再夠吸引。",
  ],
];

const macroRows = [
  {
    topic: "Fed / 利率路徑",
    data: "Fed 9/16 以 12-0 通過加息 25bp，目標區間升至 3.75%-4.00%；SEP median 2026 / 2027 年底政策利率約 4.1%。Reuters / FedWatch 口徑：10 月再加息機率約 55.4%。",
    meaning:
      "市場不是交易 Fed 轉 dovish，而是交易加息落地後的相對穩定；下一個風險是 Fed 官員會否繼續強化 higher-for-longer。",
  },
  {
    topic: "美債息",
    data: "AP 指 10Y Treasury yield 升至 5.00%；Reuters / MarketScreener 顯示 10Y cash 約 4.998%、30Y 約 5.332%，2Y 約 4.743%。",
    meaning:
      "5% 10Y 是 equity multiple 天花板。Nasdaq 能升，是因 AI / semis 太強；但大部分 rate-sensitive 板塊已反映壓力。",
  },
  {
    topic: "原油",
    data: "Reuters 指油價約跌 1%、連跌第三日但仍高於 $100；結算口徑 WTI $100.30（-$1.61 / -1.58%）、Brent $103.87（-$0.95 / -0.91%）。",
    meaning:
      "油價由高位回落幫市場鬆一口氣，但 $100+ 本身仍會推高通脹預期，Fed 很難快速轉鬆。",
  },
  {
    topic: "美元 / 黃金",
    data: "DXY 多個市場口徑約 100.22；黃金來源有差異，Yahoo / 市場概覽約 $4,416-$4,425 區間，故本文不把單一金價作精確交易訊號。",
    meaning:
      "美元沒有大幅回落，但黃金仍守高，反映市場同時擔心實質利率、地緣風險與央行買盤。",
  },
  {
    topic: "資金流",
    data: "Reuters / LSEG Lipper：截至 9/16 一週全球 equity funds 流出 $23.21bn，九個月最大；美股基金流出 $31.44bn，連續第四週走資。",
    meaning:
      "指數收穩不代表機構 risk-on；資金仍在降低整體 equity beta，升勢集中在少數 AI / crypto 相關名字。",
  },
  {
    topic: "消費 / 就業",
    data: "Reuters / Census：8 月 retail sales +1.2% m/m，core retail +1.4%；Reuters / Labor Department：初領失業金 196k，低過預期 208k。",
    meaning:
      "經濟仍有韌性，對企業盈利是支持；但對 Fed 來講，需求未冷代表通脹更難自然回落。",
  },
];

const stockRows = [
  [
    "SOXX / PHLX Semis",
    "SOXX $533.07 / +2.69%; PHLX Semi 約 +2.78%",
    "全日最清晰主線。半導體 rally 抵消九個板塊下跌，成為 S&P 500 / Nasdaq 收升的核心原因。",
  ],
  [
    "NVDA / AMD / MU",
    "NVDA $222.27 / +1.34%; AMD $559.82 / +2.70%; MU $1,015.80 / +3.92%",
    "Nvidia CEO 稱明年 chip unit sales 有望翻倍，帶動 AI supply chain；AMD / Micron 同步受惠。",
  ],
  [
    "COIN / HOOD",
    "COIN +11.62%; HOOD +9.28%（Schwab 口徑）",
    "BTC 重新升穿 $81k 附近，另有 tokenized equities / crypto market structure 題材，令 crypto-linked equities 成為 S&P 500 贏家。",
  ],
  [
    "GOOGL / META / NFLX",
    "GOOGL +0.64%; META 正面但升幅有限；NFLX 約 -4.67%",
    "大型平台有分化，XLC 整體下跌；市場不是所有 mega-cap 都買，重點仍在 AI hardware。",
  ],
  [
    "GM / QCOM",
    "GM -5.1%; QCOM 約 -5.5% 至 -5.8%",
    "AP / Schwab 都列為主要跌股。GM 反映 cyclical 壓力，QCOM 則顯示 semiconductor rally 並非所有晶片股同步。",
  ],
  [
    "NUE / ARE / BE",
    "NUE -6.28%; ARE -5.40%; BE -4.97%（Schwab 口徑）",
    "材料、地產、能源轉型相關名字承壓，吻合 XLB / XLRE / rate-sensitive 弱勢。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$81,081.26",
    "+$4,537.25 / +5.93%",
    "守回 $80,000 之上，配合 COIN / HOOD 強勢；但若 10Y 再穿 5.10%，槓桿 beta 仍要減。",
  ],
  [
    "ETH",
    "$2,630.67",
    "+$183.09 / +7.48%",
    "日內 beta 高過 BTC，反映 risk appetite 仍願意追 smart-contract / higher beta exposure。",
  ],
  [
    "SOL",
    "$113.81",
    "+$12.92 / +12.81%",
    "三隻之中最強，重新企穩 $110 上方；追價要留意波動會比 BTC / ETH 更大。",
  ],
];

const newsItems = [
  "AP：美股週五混合收市，S&P 500 +0.2%、Nasdaq +0.4%，Dow -0.2%、Russell -0.5%；10Y Treasury yield 升至 5.00%。",
  "Reuters：半導體 rally 撐住 S&P 500 / Nasdaq，但 broader weakness 拉低 Dow；NYSE 與 Nasdaq 跌股均多於升股。",
  "Fed 加息後 higher-for-longer 未解：官方 9/16 statement 加息至 3.75%-4.00%，SEP median 年底 4.1%，FedWatch 約 55.4% price 10 月再加。",
  "油價第三日回落但仍高於 $100：WTI settle $100.30，Brent settle $103.87；市場相信替代出口路線可限制供應衝擊，但風險未消失。",
  "Reuters / LSEG Lipper：全球股票基金流出 $23.21bn、美股基金流出 $31.44bn，顯示機構仍保守。",
  "Nvidia CEO 指明年晶片銷量有望翻倍，AI demand 故事支持 SOXX；同時 COIN / HOOD 受 crypto 與 tokenized securities 題材推升。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,600 / 7,552 是短線支持；跌穿代表 Fed 後反彈失效。",
    "7,650-7,700 是第一阻力帶；企穩 7,700 才算擴散確認。",
  ],
  [
    "Nasdaq",
    "26,300 先看，下一級是 26,000 心理位。",
    "26,700 / 27,000 是上方觀察位；需 SOXX 繼續領升。",
  ],
  [
    "SOXX",
    "$519（9/17 close）變第一支持；跌穿會削弱 AI trade。",
    "$533-$535 是即市高位區；突破才有機會挑戰 $540。",
  ],
  [
    "10Y yield",
    "4.90% 以下會幫助 growth multiple。",
    "5.00% 是心理線；5.10% 以上會壓縮股市風險承受力。",
  ],
  [
    "WTI crude",
    "$100 是通脹交易分水嶺；跌穿才較利好風險資產。",
    "$103-$105 是重新加壓區；上穿會令 FedWatch 再 hawkish。",
  ],
  [
    "BTC",
    "$80,000 / $77,000 是 breakout 支持。",
    "$82,000-$83,000 是短線阻力；SOL 過熱時要小心回吐。",
  ],
];

const planRows = [
  [
    "短線",
    "大市仍可跟住 AI / semis，但不宜當成全面 risk-on。先看 S&P 500 能否守 7,600，以及 NYSE / Nasdaq breadth 能否改善。",
  ],
  [
    "板塊",
    "優先觀察 SOXX / XLK 是否續強；若 XLF、XLC、Russell 2000 繼續弱，就代表升市仍偏窄。",
  ],
  [
    "Macro",
    "把 10Y 5%、WTI $100、FedWatch 10 月加息機率作三個風控開關；三者同時上行要減 beta。",
  ],
  [
    "個股",
    "AI hardware（NVDA / AMD / MU / SOXX）仍是主線；COIN / HOOD 是高 beta 交易，適合用較嚴格止賺止蝕。",
  ],
  [
    "Crypto",
    "BTC 守 $80k、SOL 守 $110 表示風險胃納仍在；若跌回 9/17 定點價附近，今次 breakout 要重新評估。",
  ],
];

function SourceLinks() {
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

export default function USCloseBrief20260918() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          margin: 0 auto;
          padding: 36px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.48;
        }
        .hero {
          background: linear-gradient(135deg, #134e4a 0%, #0f766e 52%, #111827 100%);
          color: white;
          border-radius: 26px;
          padding: 30px;
          box-shadow: 0 22px 45px rgba(15, 118, 110, 0.24);
        }
        .eyebrow { letter-spacing: 0.12em; text-transform: uppercase; font-size: 13px; opacity: 0.85; }
        h1 { margin: 8px 0 10px; font-size: 44px; line-height: 1.08; }
        .subtitle { font-size: 18px; opacity: 0.94; max-width: 940px; }
        .meta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 18px; }
        .pill { background: rgba(255,255,255,0.16); border: 1px solid rgba(255,255,255,0.32); padding: 8px 12px; border-radius: 999px; font-size: 13px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 18px; }
        .card { background: white; border: 1px solid #e2e8f0; border-radius: 22px; padding: 20px; box-shadow: 0 12px 30px rgba(15, 23, 42, 0.07); break-inside: avoid; }
        .wide { grid-column: 1 / -1; }
        h2 { margin: 0 0 12px; color: #0f766e; font-size: 23px; }
        h3 { margin: 12px 0 6px; color: #334155; font-size: 17px; }
        ul { margin: 0; padding-left: 20px; }
        li { margin: 7px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 14px; }
        th { text-align: left; color: #475569; background: #f1f5f9; }
        th, td { border-bottom: 1px solid #e5e7eb; padding: 9px 8px; vertical-align: top; }
        .tag { display: inline-block; padding: 3px 8px; border-radius: 999px; font-size: 12px; font-weight: 800; }
        .green { color: #047857; }
        .red { color: #b91c1c; }
        .amber { color: #b45309; }
        .tag.green { background: #dcfce7; }
        .tag.red { background: #fee2e2; }
        .tag.amber { background: #fef3c7; }
        .note { font-size: 13px; color: #64748b; }
        .sources { columns: 2; font-size: 12px; padding-left: 18px; }
        a { color: #1d4ed8; text-decoration: none; }
        .disclaimer { background: #fff7ed; border-color: #fed7aa; color: #7c2d12; font-size: 13px; }
        @media print {
          .sheet { width: auto; padding: 24px; }
          .card { box-shadow: none; }
          a { color: #1d4ed8; }
        }
      `}</style>

      <section className="hero">
        <div className="eyebrow">US Close Brief</div>
        <h1>美股收盤懶人包｜完整版</h1>
        <div className="subtitle">
          {reportDate} 收市｜S&P / Nasdaq 微升但廣度偏弱；10Y 重返 5%
          附近，半導體與 crypto beta 撐住風險胃納
        </div>
        <div className="meta">
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">語言：繁體中文 / 自然廣東話</span>
          <span className="pill">
            Crypto：Binance Vision 20:00 UTC 1m close
          </span>
        </div>
      </section>

      <section className="grid">
        <article className="card wide">
          <h2>1. 30 秒重點</h2>
          <ul>
            {keyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <article className="card wide">
          <h2>2. 大市一眼睇</h2>
          <table>
            <thead>
              <tr>
                <th>指標</th>
                <th>收市</th>
                <th>變動</th>
                <th>解讀</th>
              </tr>
            </thead>
            <tbody>
              {indexRows.map((row) => (
                <tr key={row.asset}>
                  <td>
                    <strong>{row.asset}</strong>
                  </td>
                  <td>{row.close}</td>
                  <td className={row.change.startsWith("+") ? "green" : "red"}>
                    {row.change}
                  </td>
                  <td>{row.read}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card wide">
          <h2>3. 今日升跌原因</h2>
          <h3>一句講晒</h3>
          <p>
            9/18 不是全面 risk-on，而是「AI / semis 撐住 headline
            index，其他股票被 5% 10Y 同 $100+ oil 壓住」。Fed
            加息剛落地，市場短線不再驚 surprise hike，但長債息重新上 5%
            附近，令估值擴張空間有限。Reuters 形容今週市場先等 Fed、再消化
            Fed，去到週五已經有點疲倦；資金只集中買最有盈利敘事的半導體與
            crypto-linked names。
          </p>
          <h3>資金點諗</h3>
          <ul>
            <li>
              買 semis：因 Nvidia chip demand、AMD / MU 動能和 AI capex
              故事仍硬。
            </li>
            <li>
              賣 breadth：NYSE / Nasdaq 跌股多過升股，小型股和 rate-sensitive
              sectors 弱。
            </li>
            <li>
              盯 macro：10Y 5%、WTI $100、FedWatch 再加息機率是下週風險開關。
            </li>
          </ul>
        </article>

        <article className="card wide">
          <h2>4. 板塊紅綠燈</h2>
          <table>
            <thead>
              <tr>
                <th>板塊 / ETF</th>
                <th>價格 / 變動</th>
                <th>狀態</th>
                <th>白話解讀</th>
              </tr>
            </thead>
            <tbody>
              {sectorRows.map(([name, move, state, read]) => (
                <tr key={name}>
                  <td>
                    <strong>{name}</strong>
                  </td>
                  <td>{move}</td>
                  <td>
                    <span
                      className={`tag ${
                        state === "最強" || state === "強" || state === "偏強"
                          ? "green"
                          : state === "中性" || state === "中性偏弱"
                            ? "amber"
                            : "red"
                      }`}
                    >
                      {state}
                    </span>
                  </td>
                  <td>{read}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            Sector proxy 以 Stooq / Yahoo chart / 可靠市場摘要作交叉核對；XLRE
            因 Stooq 表格未列入，採 Swingfolio sector scorecard
            口徑並標明約數。SOXX 另以 Finviz / Stoculator / 週報 Yahoo cache
            交叉核對。
          </p>
        </article>

        <article className="card">
          <h2>5. 五大新聞</h2>
          <ol>
            {newsItems.slice(0, 5).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>

        <article className="card">
          <h2>6. 市場熱度圖（文字版）</h2>
          <ul>
            <li>
              <span className="tag green">綠</span> Semis / AI：SOXX
              +2.69%，NVDA、AMD、MU 續強，AI chip demand 是唯一清晰領導。
            </li>
            <li>
              <span className="tag green">綠</span> Crypto beta：BTC
              +5.93%，COIN +11.62%，HOOD +9.28%，風險胃納仍願意追高 beta。
            </li>
            <li>
              <span className="tag amber">黃</span> S&P /
              Nasdaq：指數收升但幅度細，靠少數權重支撐。
            </li>
            <li>
              <span className="tag red">紅</span> Breadth：NYSE 跌股對升股約
              1.78:1，Nasdaq 約 1.42:1。
            </li>
            <li>
              <span className="tag red">紅</span> Rate-sensitive：XLU、XLRE、XLB
              受 10Y 5% 壓住。
            </li>
          </ul>
        </article>

        <article className="card wide">
          <h2>7. 宏觀白話版</h2>
          <table>
            <thead>
              <tr>
                <th>項目</th>
                <th>最新數據 / 來源口徑</th>
                <th>點解重要</th>
              </tr>
            </thead>
            <tbody>
              {macroRows.map((row) => (
                <tr key={row.topic}>
                  <td>
                    <strong>{row.topic}</strong>
                  </td>
                  <td>{row.data}</td>
                  <td>{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card wide">
          <h2>8. 重點股票</h2>
          <table>
            <thead>
              <tr>
                <th>股票</th>
                <th>收市 / 變動</th>
                <th>原因</th>
              </tr>
            </thead>
            <tbody>
              {stockRows.map(([name, move, reason]) => (
                <tr key={name}>
                  <td>
                    <strong>{name}</strong>
                  </td>
                  <td>{move}</td>
                  <td>{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card wide">
          <h2>9. Crypto：BTC / ETH / SOL</h2>
          <table>
            <thead>
              <tr>
                <th>幣種</th>
                <th>Binance Vision 20:00 UTC close</th>
                <th>對 9/17 20:00 UTC</th>
                <th>解讀</th>
              </tr>
            </thead>
            <tbody>
              {cryptoRows.map(([name, close, change, read]) => (
                <tr key={name}>
                  <td>
                    <strong>{name}</strong>
                  </td>
                  <td>{close}</td>
                  <td className={change.startsWith("+") ? "green" : "red"}>
                    {change}
                  </td>
                  <td>{read}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            口徑：直接 Binance spot API 在此環境曾受地區限制，因此採 Binance
            Vision public data API 1-minute kline；時間點為 2026-09-18 20:00:00
            UTC，即美股正常收市 4:00pm ET 附近。對比基準為上一交易日 2026-09-17
            20:00:00 UTC。
          </p>
        </article>

        <article className="card wide">
          <h2>10. 技術位</h2>
          <table>
            <thead>
              <tr>
                <th>市場</th>
                <th>支持 / 風險線</th>
                <th>阻力 / 觀察位</th>
              </tr>
            </thead>
            <tbody>
              {technicalRows.map(([name, support, resistance]) => (
                <tr key={name}>
                  <td>
                    <strong>{name}</strong>
                  </td>
                  <td>{support}</td>
                  <td>{resistance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card wide">
          <h2>11. 明日 / 下週觀察清單與操作提示</h2>
          <table>
            <tbody>
              {planRows.map(([label, text]) => (
                <tr key={label}>
                  <td>
                    <strong>{label}</strong>
                  </td>
                  <td>{text}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            最終觀點：9/18 不是壞市，但不是健康到可以無視 macro。最靚是 semis 與
            crypto beta，最差是 breadth、Russell、utilities / real estate。
            下週如果 10Y 留在 5% 上方而 S&P 500 仍企 7,600，代表 AI earnings
            narrative 夠硬；如果 breadth 再差兼 VIX 上 18，就要當成 narrow rally
            後的回吐風險。
          </p>
        </article>

        <article className="card wide">
          <h2>12. 來源、口徑與免責聲明</h2>
          <p className="note">
            數據衝突處理：指數收市採 AP 精確點數，並與 Reuters / MarketScreener
            market close 核對；breadth 採 Reuters；sector ETF 採 Stooq
            為主，SOXX 採 Finviz / Stoculator / Yahoo cache 交叉核對，XLRE
            因來源缺口以 Swingfolio 約數標明；美債採 AP 5.00% 與 Reuters /
            MarketScreener cash yield 表；油價採 Reuters 與 settlement headline
            口徑；Fed 採 Federal Reserve statement / SEP 與 CME
            FedWatch；黃金數據來源有差異，因此只列區間；Crypto 採 Binance Vision
            20:00 UTC 1-minute kline。
          </p>
          <SourceLinks />
        </article>

        <article className="card wide disclaimer">
          <strong>{disclaimer}</strong>
        </article>
      </section>
    </main>
  );
}
