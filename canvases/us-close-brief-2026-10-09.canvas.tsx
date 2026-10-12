import React from "react";

const reportDate = "2026-10-09";
const publishedAt =
  "香港時間 2026-10-12 09:01（週一更新；數據截至美股 10/09 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Friday 10/9/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-dafbd0c4037ee10e2a9e305f3cfa8e70",
  },
  {
    name: "Reuters via Yahoo Finance - Wall Street posts weekly gains with earnings, inflation data on tap",
    url: "https://finance.yahoo.com/markets/stocks/articles/wall-st-futures-gain-oil-102454068.html",
  },
  {
    name: "CNBC - Dow rises 400 points on Friday as Wall Street scores winning week",
    url: "https://www.cnbc.com/2026/10/08/stock-market-today-live-updates.html",
  },
  {
    name: "Reuters via Euronext - Stocks advance ahead of earnings, navigating still-high Treasury yields and oil prices",
    url: "https://live.euronext.com/en/financial-news/stocks-advance-ahead-earnings-navigating-still-high-treasury-yields-and-oil-prices",
  },
  {
    name: "Reuters via Investing.com - Bank earnings, CPI headline busy markets week",
    url: "https://www.investing.com/news/economy-news/bank-earnings-cpi-headline-busy-markets-week-as-sp-500-hovers-near-records-4942657",
  },
  {
    name: "CNBC - Verizon, AT&T and T-Mobile sell off on SpaceX U.S. network plans",
    url: "https://www.cnbc.com/2026/10/09/verizon-att-tmobile-stocks-spacex-network.html",
  },
  {
    name: "CNBC - SpaceX wireless plans lifts tower stocks",
    url: "https://www.cnbc.com/2026/10/09/spacex-wireless-plans-lifts-tower-stocks.html",
  },
  {
    name: "Costco Wholesale - September sales results",
    url: "https://investor.costco.com/news/news-details/2026/Costco-Wholesale-Corporation-Reports-September-Sales-Results/default.aspx",
  },
  {
    name: "Cboe - VIX historical data CSV",
    url: "https://cdn.cboe.com/api/global/us_indices/daily_prices/VIX_History.csv",
  },
  {
    name: "Yahoo Finance chart data - index, ETF, stock, yield and commodity checks",
    url: "https://finance.yahoo.com/",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
  {
    name: "Binance data API klines",
    url: "https://data-api.binance.vision/",
  },
];

const keyPoints = [
  "美股週五反彈收高，三大指數兼收週線升幅：Dow 51,654.95（+423.31 / +0.83%）、S&P 500 7,811.54（+46.18 / +0.59%）、Nasdaq 27,366.17（+172.83 / +0.64%）、Russell 2000 2,806.98（+12.85 / +0.46%）。",
  "升市不是無風險，而是前一日 AI / 長息 / 油價壓力後的修復：Reuters 指資金焦點轉向下週 Q3 財報、CPI、PPI 與 retail sales；CNBC 指長端 Treasury yield 本週觸及 24 年高位後，週五情緒稍為穩住。",
  "板塊 9/11 上升，但領先偏向 defensive / rate-sensitive：XLRE +1.86%、XLV +1.58%、XLY +1.02%、XLF +0.92%、XLU +0.83%；XLC -1.51% 最弱，因 SpaceX 頻譜交易令電訊股急跌。",
  "半導體仍未全面修復：SOXX -0.69%，NVDA -0.52%、AMD -2.03%；不過 ORCL +4.21%、AMZN +3.29%、MSFT +2.38% 反彈，顯示 AI trade 由恐慌沽售轉為分化。",
  "宏觀仍是兩個字：高息。Reuters 指 10Y yield 約 5.261%，Yahoo 10Y close 5.244%；CME/FedWatch 類口徑顯示 10 月 hold 約 82.3%、+25bp 約 17.7%，12 月至少再加一次仍是主流定價。",
  "Crypto 以 Binance data API 2026-10-09 20:00 UTC 1m close（美股 4:00pm ET 附近）計：BTC $82,383.40（+0.70%）、ETH $2,479.33（+0.51%）、SOL $108.69（-0.49%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "51,654.95",
    change: "+423.31 / +0.83%",
    read: "Dow 領升，受醫療、金融、工業及部分 mega-cap 修復帶動；但升幅更多是反彈同週線 window dressing，不代表高息壓力解除。",
  },
  {
    asset: "S&P 500",
    close: "7,811.54",
    change: "+46.18 / +0.59%",
    read: "收復前一日大部分跌幅，距離週二 record close 7,844.52 仍有少許距離；短線維持高位整固。",
  },
  {
    asset: "Nasdaq Composite",
    close: "27,366.17",
    change: "+172.83 / +0.64%",
    read: "科技反彈但不乾淨：software / cloud 有買盤，semis 仍分化，反映市場未完全重建 AI beta 信心。",
  },
  {
    asset: "Russell 2000",
    close: "2,806.98",
    change: "+12.85 / +0.46%",
    read: "小型股日內反彈，但 Reuters 指仍低過上一週五收市；高息環境下 breadth 未算強。",
  },
  {
    asset: "VIX",
    close: "14.84（Cboe 官方 close）",
    change: "-0.57 / -3.70%",
    read: "波幅回落，代表市場由週中緊張轉為等數據；VIX 低於 15 不是恐慌，但亦可能令 downside hedge 偏便宜。",
  },
];

const sectorRows = [
  [
    "Real Estate / XLRE",
    "$41.61 / +1.86%",
    "最強",
    "長端 yield 雖仍高，但較週中高位回順，令 REIT / rate-sensitive assets 有 relief rally；SpaceX spectrum 題材亦帶動 tower owners。",
  ],
  [
    "Health Care / XLV",
    "$170.81 / +1.58%",
    "強",
    "防守資金回流，升幅較廣；當市場擔心高息同下週 CPI，醫療相對有 earnings visibility。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$112.85 / +1.02%",
    "偏強",
    "AMZN +3.29%、TSLA +2.05% 撐起板塊；但零售/消費仍要等 retail sales 和財報驗證。",
  ],
  [
    "Financials / XLF",
    "$54.73 / +0.92%",
    "偏強",
    "下週大銀行開財報前反彈；高息有利淨息差但也會測試資金成本、貸款需求和信用質素。",
  ],
  [
    "Utilities / XLU",
    "$41.41 / +0.83%",
    "偏強",
    "防守與收益型資產回暖；若 10Y 再衝 5.30% 以上，這類板塊會重新受壓。",
  ],
  [
    "Technology / XLK",
    "$198.78 / +0.51%",
    "中性偏強",
    "MSFT、ORCL、AMZN 反彈，但 AAPL、NVDA、AMD 仍弱；AI trade 不是單邊回復。",
  ],
  [
    "Industrials / XLI",
    "$169.25 / +0.50%",
    "中性",
    "跟大市向上但非主線；高油價和高息對 cyclicals 仍是成本與估值壓力。",
  ],
  [
    "Materials / XLB",
    "$49.43 / +0.32%",
    "中性",
    "美元小升、長息高企限制材料股；日內靠整體 risk-on 才微升。",
  ],
  [
    "Consumer Staples / XLP",
    "$83.43 / +0.01%",
    "中性",
    "近乎平收，前一日防守股強勢後缺乏追買；市場今日更願意買反彈而不是純防守。",
  ],
  [
    "Energy / XLE",
    "$65.08 / -0.25%",
    "偏弱",
    "WTI / Brent 僅小升約 0.4%，前一日油價急彈後能源股小回；油價高位仍會加重 inflation premium。",
  ],
  [
    "Communication Services / XLC",
    "$110.38 / -1.51%",
    "最弱",
    "SpaceX 800 MHz spectrum deal 打擊電訊股：CNBC 指 VZ -8.75%、T -9.81%、TMUS -13.27%，壓過 GOOGL +0.97%。",
  ],
  [
    "Semiconductors / SOXX",
    "$559.40 / -0.69%",
    "偏弱",
    "AI revenue / capex 疑慮未完全散去；SOXX 連跌，NVDA -0.52%、AMD -2.03%，但跌幅較 10/08 收窄。",
  ],
];

const macroRows = [
  {
    topic: "Fed / 利率路徑",
    data: "CME/FedWatch 類即時口徑：10/28 會議 hold 約 82.3%、+25bp 約 17.7%；12 月 hold 約 18.7%、累計 +25bp 約 67.6%、累計 +50bp 約 13.7%。",
    meaning:
      "市場押 10 月先觀望，但不是押 Fed 轉鴿；若下週 CPI / PPI 熱過預期，12 月加息定價會再推高。",
  },
  {
    topic: "美債息",
    data: "Reuters / Euronext 指 10Y yield 升 2.8bp 至約 5.261%，低於週中 24 年高位；Yahoo close 口徑 2Y 4.647%、5Y 5.021%、10Y 5.244%、30Y 5.600%。FRED 查詢在執行時逾時，故不用作即日收市來源。",
    meaning:
      "長息仍是估值天花板。10Y 只要維持 5.20%-5.30%，高估值科技和小型股就難以快速擴張估值。",
  },
  {
    topic: "原油",
    data: "Reuters / Euronext：front-month WTI / Brent 均收高約 0.4%；Yahoo futures close WTI $91.85（+0.39%）、Brent $104.72（+0.42%）。",
    meaning:
      "油價沒有再像 10/08 急升，但 Brent 仍在 $104 附近，通脹風險未消失；這是下週 CPI 前市場最敏感的宏觀變數之一。",
  },
  {
    topic: "美元 / 黃金",
    data: "Yahoo chart：DXY 102.21（+0.07%）；Gold futures $4,216.30（+$59.30 / +1.43%）。Reuters 口徑 spot gold 約升 1.5% 至 $4,193 附近；futures / spot 因合約與時間點有差異。",
    meaning:
      "美元微升但黃金仍急升，反映市場同時買入 inflation hedge / safe haven；這與高油價和高長息同時存在一致。",
  },
  {
    topic: "市場廣度 / 波幅",
    data: "Reuters：NYSE advancers/decliners 約 1.65:1，Nasdaq 約 1.38:1；S&P 500 有 14 個 52 週新高、5 個新低，Nasdaq 41 個新高、209 個新低。Cboe VIX 收 14.84。",
    meaning:
      "廣度較 10/08 改善，但 Nasdaq 新低仍多，顯示高 beta / AI supply chain 尚未完全修復。",
  },
  {
    topic: "Crypto / 流動性",
    data: "Binance data API 20:00 UTC：BTC $82,383.40、ETH $2,479.33、SOL $108.69，較 10/08 20:00 UTC 分別 +0.70%、+0.51%、-0.49%。",
    meaning:
      "BTC / ETH 跟 risk rebound，但 SOL 仍跌，代表 alt beta 不夠強；crypto 未算全面 risk-on。",
  },
];

const stockRows = [
  [
    "VZ / T / TMUS",
    "VZ -8.75%；T -9.81%；TMUS -13.27%",
    "SpaceX 同意買入 Grain Management 全國 800 MHz 頻譜組合，市場即時重估 Starlink Mobile 對傳統電訊商的競爭風險；CNBC 指 VZ 創 2002 年以來最差單日。",
  ],
  [
    "CCI / AMT / SBAC",
    "CCI +15.6%；AMT +9.3%；SBAC +7.3%（CNBC / etf.net 口徑）",
    "同一單 SpaceX spectrum deal 反而利好 tower owners，因市場估計 Starlink Mobile 若要做地面覆蓋仍需要 tower capacity。",
  ],
  [
    "ORCL / MSFT / AMZN",
    "ORCL $141.40 / +4.21%；MSFT +2.38%；AMZN +3.29%",
    "OpenAI revenue 相關憂慮由恐慌轉為分化，cloud / software 有回補；但仍要看 AI demand 和 data-center 融資是否可持續。",
  ],
  [
    "NVDA / AMD / SOXX",
    "NVDA $229.28 / -0.52%；AMD $608.10 / -2.03%；SOXX -0.69%",
    "半導體未能跟足 Nasdaq 反彈，代表市場對 AI capex 回報期仍有疑問；短線要等 SOXX 重上 $563-$565 才叫止跌。",
  ],
  [
    "AAPL / META / NFLX",
    "AAPL -1.11%；META -0.31%；NFLX -1.77%",
    "部分 mega-cap 仍被資金減磅，尤其通信服務與消費平台受板塊事件及估值壓力拖累。",
  ],
  [
    "TSLA",
    "$382.70 / +2.05%",
    "高 beta 成長股跟隨反彈，但升幅仍要放在高息與下週數據風險下看；不宜單日反彈就當趨勢確認。",
  ],
  [
    "COST",
    "$946.92 / -0.11%",
    "Costco 9 月 net sales $30.02B、按年 +13.0%，但股價近乎平收，反映好消息已大部分被估值吸收。",
  ],
  [
    "JPM / 大銀行",
    "JPM $332.99 / +0.47%；XLF +0.92%",
    "下週 JPMorgan、Goldman、Citi、Wells Fargo 率先放榜，Morgan Stanley / Bank of America 翌日接力；市場會看高息對 NII、deal flow、funding cost 的影響。",
  ],
  [
    "XOM / Energy",
    "XOM $168.94 / +0.26%；XLE -0.25%",
    "油價仍高但升幅放緩，能源股由 10/08 強勢轉為整理；重點是 Brent 能否守在 $100 上方。",
  ],
  [
    "BTC proxy / crypto beta",
    "BTC +0.70%，但 SOL -0.49%",
    "Crypto 內部未同步，BTC / ETH 守住但 alt beta 未跟；礦股與交易平台仍要看 BTC 能否站穩 $82k-$83k。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$82,383.40",
    "+$574.89 / +0.70%",
    "重上 $82k，短線由 risk-off 轉為修復；若下週 CPI 前能企穩 $82k-$83k，才算有條件挑戰 $85k。",
  ],
  [
    "ETH",
    "$2,479.33",
    "+$12.70 / +0.51%",
    "跟升但跑輸 BTC，代表資金未全面追 alt；$2,500 是第一個需要收復的心理位。",
  ],
  [
    "SOL",
    "$108.69",
    "-$0.54 / -0.49%",
    "高 beta alt 未跟，$110 仍是短線阻力；若跌穿 $105，會反映風險胃納重新轉弱。",
  ],
];

const newsItems = [
  "AP / Reuters / CNBC：Dow +0.83%、S&P 500 +0.59%、Nasdaq +0.64%；三大指數週五反彈並錄得週線升幅。",
  "Reuters：市場焦點轉向下週 CPI、PPI、retail sales 與 Q3 財報；JPMorgan、Goldman、Citi、Wells Fargo、Morgan Stanley、Bank of America 會先後放榜。",
  "Reuters / Euronext：10Y yield 約 5.261%，低於週中 24 年高位但仍高；高息、油價與政府債務憂慮仍是市場主要估值壓力。",
  "CNBC：SpaceX 買入全國 800 MHz 頻譜組合，VZ / T / TMUS 急跌，tower owners 反升，令 XLC 成最弱板塊。",
  "Cboe / Yahoo：VIX 回落至 14.84，XLRE / XLV / XLY 領先，SOXX 仍跌；升市之下風格分化明顯。",
  "Costco 官方：9 月 net sales $30.02B、按年 +13.0%；COST 股價 -0.11%，顯示消費防守股好消息未必足以推升估值。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,765 / 7,735 是前一日 close 與低位區；跌穿代表反彈失敗。",
    "7,820 / 7,845 是短線阻力；重上 7,845 才算挑戰 record close。",
  ],
  [
    "Nasdaq",
    "27,190 / 27,000 是支持帶；AI beta 再弱會先測此區。",
    "27,500 是修復位；要突破需要 semis 由分化轉強。",
  ],
  [
    "Russell 2000",
    "2,795 / 2,780 是短線支持；失守代表小型股反彈動能不足。",
    "2,830 / 2,850 是阻力；突破才代表 breadth 真正改善。",
  ],
  [
    "10Y yield",
    "5.20% 以下會幫科技估值喘息。",
    "5.30%-5.36% 是壓力區；重上會再壓 Nasdaq、REIT、小型股。",
  ],
  [
    "WTI / Brent",
    "WTI $90 / Brent $100 是通脹風險底線。",
    "WTI $92 / Brent $105 是短線阻力；突破會令 CPI 交易再升溫。",
  ],
  [
    "BTC",
    "$80,000 是心理支持；失守會拖累 crypto equity。",
    "$82,000-$83,000 是短線企穩區，$85,000 是反彈確認位。",
  ],
];

const planRows = [
  [
    "短線",
    "升市可以參與，但唔好當作所有風險解除。倉位要分開處理：core quality 可以持有，AI / crypto beta 仍要等確認。",
  ],
  [
    "板塊",
    "XLRE / XLV / XLY 今日強，但如果 10Y yield 重上 5.30%，rate-sensitive 會再受壓；XLC 弱勢與 SpaceX 題材有事件性，未必一日完。",
  ],
  [
    "Macro",
    "下週三 CPI 是關鍵。若 headline 受汽油推高而 core 未失控，市場可能接受；若 core 亦熱，Fed hike odds 會再上。",
  ],
  [
    "個股",
    "大銀行財報前，金融股可看但不宜過度追高；電訊股急跌後可能有技術反彈，但基本面 narrative 已變，要等管理層回應。",
  ],
  [
    "Crypto",
    "BTC 站穩 $82k 可保持中性偏正面；但 SOL 跑輸，代表 alt season 未到，倉位要細過 BTC / ETH。",
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

export default function USCloseBrief20261009() {
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
          background: linear-gradient(135deg, #1e3a8a 0%, #0f766e 52%, #111827 100%);
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
          {reportDate} 收市｜反彈收高但未全面 risk-on：等 CPI /
          銀行財報，電訊股被 SpaceX 打穿
        </div>
        <div className="meta">
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">語言：繁體中文 / 自然廣東話</span>
          <span className="pill">
            Crypto：Binance data API 20:00 UTC 1m close
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
            今日係「高息壓力未走，但市場選擇先修復」：週中長債息升到多年高位、
            油價維持高企、AI trade 前一日急跌後，投資者先將焦點放到下週 CPI
            同銀行財報。大市向上，但半導體和通信服務的分化提醒大家，這不是全面
            risk-on。
          </p>
          <h3>資金點諗</h3>
          <ul>
            <li>
              買反彈但揀股：ORCL / AMZN / MSFT 反彈，但 NVDA / AMD / SOXX
              未跟足。
            </li>
            <li>
              防守與 rate-sensitive 受惠：XLRE、XLV、XLU
              表現靠前，顯示資金仍留意高息風險。
            </li>
            <li>
              電訊成事件風險：SpaceX spectrum deal 令市場重新估傳統 carriers 的
              moat。
            </li>
            <li>
              下週是數據週：CPI、PPI、retail sales
              加銀行財報，會決定反彈能否延續。
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
                        state === "最強" ||
                        state === "強" ||
                        state === "偏強" ||
                        state === "中性偏強"
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
            Sector 口徑：主要採 Yahoo Finance chart 的 10/09 ETF close
            計算，並與 Reuters / CNBC / Cboe / 專題新聞交叉核對；個別 tower
            stocks 採 CNBC / etf.net 報道口徑。
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
              <span className="tag green">綠</span> Real Estate / Health
              Care：XLRE +1.86%、XLV +1.58%，防守與 rate-sensitive 一齊彈。
            </li>
            <li>
              <span className="tag green">綠</span> Mega-cap rebound：AMZN
              +3.29%、MSFT +2.38%、ORCL +4.21%。
            </li>
            <li>
              <span className="tag amber">黃</span> 大市：S&P 500
              +0.59%，但仍未破週二高位。
            </li>
            <li>
              <span className="tag amber">黃</span> Crypto：BTC / ETH 微升，SOL
              未跟。
            </li>
            <li>
              <span className="tag red">紅</span> Communication Services：XLC
              -1.51%，VZ / T / TMUS 被 SpaceX 題材拖低。
            </li>
            <li>
              <span className="tag red">紅</span> Semis：SOXX -0.69%，AI beta
              還未全面修復。
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
                <th>Binance 20:00 UTC close</th>
                <th>對 10/08 20:00 UTC</th>
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
            口徑：Binance spot API 在此環境對 api.binance.com 受地區限制；採
            Binance data API klines 查 2026-10-09 20:00:00 UTC 1-minute kline
            close，時間點即美股正常收市 4:00pm ET 附近。對比基準為 2026-10-08
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
          <h2>11. 明日觀察清單與操作提示</h2>
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
            最終觀點：週五反彈令市場由「驚長息 + 驚 AI revenue」轉為「等下週 CPI
            / 財報」。但升市之下，XLC 和 SOXX 都提醒市場仍有局部風險。操作上
            可以保留核心倉，但追高 beta 前要等三件事：10Y 不再上 5.30%、SOXX
            重上短線阻力、BTC 穩守 $82k。
          </p>
        </article>

        <article className="card wide">
          <h2>12. 來源、口徑與免責聲明</h2>
          <p className="note">
            數據衝突處理：指數收市採 AP / CNBC 終值，並與 Reuters / Yahoo chart
            核對；Russell 2000 採 Yahoo chart close 2,806.98，與部分即時摘要
            2,808.08 有輕微差異，本文以 Yahoo close 為準。美債採 Reuters /
            Euronext 與 Yahoo close；FRED 查詢在執行時逾時，Treasury CSV 只回傳
            2026 年初資料，故不作即日依據。油價採 Reuters settle 與 Yahoo
            futures close；黃金 / DXY 列明 futures、spot、market summary
            差異。VIX 採 Cboe 官方 CSV。Crypto 採 Binance data API 20:00 UTC
            1-minute kline。
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
