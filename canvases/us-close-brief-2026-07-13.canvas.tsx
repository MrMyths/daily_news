import React from "react";

const reportDate = "2026-07-13";
const publishedAt = "香港時間 2026-07-14 07:00";

const sources = [
  {
    name: "AP - How major US stock indexes fared Monday 7/13/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-84784dd049267a58ac547d8a1c7fcd02",
  },
  {
    name: "CNBC - Stock market news for July 13, 2026",
    url: "https://www.cnbc.com/2026/07/12/stock-market-today-live-updates.html",
  },
  {
    name: "Reuters via Yahoo Finance - Oil surges, stocks slip and bond yields rise",
    url: "https://sg.finance.yahoo.com/news/shares-slip-asia-oil-jumps-002452563.html",
  },
  {
    name: "Reuters via The Business Times - Wall Street ends lower; chipmakers drop",
    url: "https://www.businesstimes.com.sg/companies-markets/capital-markets-currencies/us-stocks-wall-street-ends-lower-iran-tensions-dampen-risk-appetite-chipmakers-drop",
  },
  {
    name: "Sharecast - US close: Stocks lower as oil spikes",
    url: "https://www.sharecast.com/news/market-report-us-close/us-close-stocks-lower-as-oil-spikes-on-trumps-hormuz-blockade-claim--23004494.html",
  },
  {
    name: "CNBC - CBOE Volatility Index quote",
    url: "https://www.cnbc.com/quotes/.VIX",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Financial Post / Bloomberg - Traders see 50% chance of July hike",
    url: "https://financialpost.com/pmn/business-pmn/treasury-two-year-yields-rise-to-highest-since-2025-as-oil-jumps",
  },
  {
    name: "MarketScreener / Reuters - Dollar edges higher on US-Iran tension",
    url: "https://ae.marketscreener.com/news/dollar-edges-higher-on-escalating-us-iran-tension-yen-slides-on-pension-doubts-ce7f5edcda8cf12c",
  },
  {
    name: "TradingKey - US stocks close; semiconductors and memory stocks slump",
    url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262027200-us-stock-close-spacex-sk-hynix-issuance-price-nasdaq-phlx-semiconductor-trump-tradingkey",
  },
  {
    name: "Yahoo Finance chart data - Indices, ETF proxies and stocks",
    url: "https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "Dow Jones",
    "52,498.64",
    "-138.37 / -0.26%",
    "跌幅比 Nasdaq 細，因為能源股急升幫藍籌指數墊底，但仍未能避開 risk-off。",
  ],
  [
    "S&P 500",
    "7,515.34",
    "-60.05 / -0.79%",
    "跌穿 7,550，油價 shock 加債息上行令估值受壓；headline 不是崩，但風險胃納轉弱。",
  ],
  [
    "Nasdaq Composite",
    "25,873.18",
    "-408.43 / -1.55%",
    "科技與晶片是主要拖累，AI trade 由上週五亢奮急速轉為獲利回吐。",
  ],
  [
    "Russell 2000",
    "2,953.17",
    "-24.64 / -0.83%",
    "小型股未能受惠能源升勢，仍反映市場對利率與經濟敏感板塊有戒心。",
  ],
  [
    "VIX",
    "17.16",
    "+2.13 / +14.17%",
    "CNBC/Cboe quote 顯示 4:15pm EDT 17.16；恐慌回升但未去到 panic 區。",
  ],
];

const sectorRows = [
  [
    "Energy / XLE",
    "$56.74 / +3.01%",
    "最強",
    "Brent/WTI 約升 9%，能源股成為全日少數清晰避風港與通脹 hedge。",
  ],
  [
    "Utilities / XLU",
    "$45.72 / +0.68%",
    "防守",
    "VIX 升、科技回吐時，資金有少量流入防守收益型資產。",
  ],
  [
    "Financials / XLF",
    "$56.07 / +0.65%",
    "等業績",
    "收益率曲線上移短線幫銀行淨息差敘事，但 JPM/GS/BAC 業績前未算大爆發。",
  ],
  [
    "Real Estate / XLRE",
    "$44.70 / +0.56%",
    "韌性",
    "長息升理應不利 REITs，但今日跌市中仍有防守買盤，升幅不宜過度解讀。",
  ],
  [
    "Consumer Staples / XLP",
    "$84.59 / +0.56%",
    "防守",
    "油價 shock 下資金避開高 beta，staples 企穩屬典型 defensive rotation。",
  ],
  [
    "Health Care / XLV",
    "$161.41 / +0.35%",
    "修復",
    "上週五跑輸後有回補，仍不是主線，但在科技跌市中提供低 beta 支撐。",
  ],
  [
    "Communication Services / XLC",
    "$111.59 / -0.04%",
    "中性",
    "META 回吐但跌幅有限；板塊相對 Nasdaq 跌幅小，顯示 mega-cap 內部有分化。",
  ],
  [
    "Materials / XLB",
    "$50.58 / -0.61%",
    "偏弱",
    "美元反彈、長息升令材料股回吐，上週五的反彈未能延續。",
  ],
  [
    "Industrials / XLI",
    "$180.37 / -0.85%",
    "紅燈",
    "油價急升增加成本與運輸壓力，工業股未有跟隨能源板塊受惠。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$116.04 / -1.02%",
    "紅燈",
    "油價與利率同升對消費 beta 不友善；TSLA -3.19% 亦拖低板塊。",
  ],
  [
    "Technology / XLK",
    "$181.28 / -2.42%",
    "最弱大板塊",
    "半導體與 AI hardware 被沽，科技是今日 S&P 500 主要壓力來源。",
  ],
  [
    "Semiconductors / SOXX",
    "$553.61 / -4.77%",
    "急跌",
    "SOXX 不是 S&P sector，但最能反映 AI hardware 情緒；今日跌幅約為 S&P 的 6 倍。",
  ],
];

const stockRows = [
  [
    "SK Hynix ADR / memory IPO",
    "Reuters 指美股 ADR 跌 9.3%，回吐上週五首日上市 +12.8% 的大部分升幅",
    "AI memory 敘事仍在，但上市第二日即急跌，令市場重新審視估值與供應鏈 crowded trade。",
  ],
  [
    "NVDA",
    "$203.53 / -3.52%",
    "上週五靠 SK Hynix 與 AI 熱度大升後回吐；若 SOXX 失守，NVDA 也難獨自撐起 Nasdaq。",
  ],
  [
    "AMD",
    "$534.39 / -4.21%",
    "高 beta chip 名字跟隨半導體指數急跌，顯示資金不是只沽單一 memory 名。",
  ],
  [
    "MU / memory chain",
    "$937.00 / -4.32%；SNDK -12.63%、STX -5.46%、WDC -4.64%",
    "memory/storage chain 是今日跌市核心之一，SK Hynix 回吐觸發同業獲利盤。",
  ],
  [
    "INTC / AVGO / TSM",
    "INTC -6.12%、AVGO -3.98%、TSM -2.89%",
    "TradingKey 指 Philadelphia Semiconductor Index 跌 4.78%，而且 30 隻成分股全跌。",
  ],
  [
    "SPCX / SpaceX proxy",
    "$139.14 / -4.24%",
    "TradingKey 指 SpaceX 與 SK Hynix 回落至接近 IPO 價，風險偏好降溫打擊新上市/高估值故事股。",
  ],
  [
    "AAPL / MSFT / AMZN",
    "AAPL +0.63%、MSFT +1.53%、AMZN +0.80%",
    "mega-cap 不是全線跌；資金仍願意留在現金流與盈利可見度較高的大型平台股。",
  ],
  [
    "META / GOOGL",
    "META $656.73 / -1.86%；GOOGL $352.51 / -1.31%",
    "上週五 META 大升後回吐，AI capex 故事未消失，但今日估值受債息與油價壓住。",
  ],
  [
    "Energy equities",
    "XLE +3.01%，油服/上游受惠油價急升",
    "能源是今日最直接的資金流向，但這種升法同時代表通脹與 Fed 風險升溫。",
  ],
  [
    "Banks / earnings",
    "JPM -0.58%、GS -0.88%、BAC -0.28%、C -0.06%、WFC +0.59%",
    "大型銀行週二盤前放榜；市場先按兵不動，等信貸成本、交易收入與淨息差指引。",
  ],
];

const macroRows = [
  [
    "Oil / Hormuz",
    "Reuters：WTI +9.4% / +$6.73 至 $78.14；Brent +9.6% / +$7.29 至 $83.30",
    "油價是今日一切的起點：地緣風險推高能源通脹預期，股票、債券與黃金都要重新定價。",
  ],
  [
    "Treasury yields",
    "Reuters：10Y +5.06bp 至 4.62%，30Y +3.31bp 至 5.104%；Bloomberg/Financial Post 指 2Y 一度升至約 4.28%",
    "長短息同升，市場開始交易「油價令 Fed 更難放鬆，甚至要再加息」的風險。",
  ],
  [
    "FedWatch / rate pricing",
    "CNBC 指 CME FedWatch 7 月 +25bp 機率升至逾 41%，盤中曾逾 45%；Bloomberg 稱 money-market pricing 接近 50%",
    "概率口徑會隨期貨即時變，但方向清楚：油價 shock 把 7 月加息風險重新推上枱面。",
  ],
  [
    "DXY / 美元",
    "Reuters：DXY +0.26% 至 101.32；另一 Reuters FX 稿報 101.27 / +0.21%",
    "美元受避險與 hawkish Fed pricing 支撐，但尾市部分回吐；101 上方會壓住商品以外風險資產。",
  ],
  [
    "Gold / precious metals",
    "Reuters multi-asset 稿：spot gold -3% 至 $3,998.52；CNBC 即時口徑曾報約 $4,070、跌約 1.2%",
    "金價沒有受惠地緣風險，因為美元與實際利率預期更強；不同時間戳差異較大，本文採區間解讀。",
  ],
  [
    "Volatility",
    "VIX 17.16 / +14.17%，日高 17.41、仍低於 3 月高位 35.30",
    "市場由 calm 轉向戒備，但未去到全面 panic；如果 VIX 再上 18-20，倉位去風險會更明顯。",
  ],
  [
    "Macro calendar",
    "週二 CPI、JPM/GS/BAC 業績、Fed Chair Kevin Warsh 國會聽證",
    "今日是 shock，明日是驗證：CPI 若再熱，油價與債息會把壓力放大。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$62,258.62",
    "-2.54% vs 7/10 20:00 UTC",
    "Binance data-api 1m kline：2026-07-13 20:00:00 UTC close，即美股 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$1,774.19",
    "-0.99% vs 7/10 20:00 UTC",
    "ETH 跌幅細過 BTC/SOL，短線相對韌性較好，但未能完全避開 risk-off。",
  ],
  [
    "SOLUSDT / SOL",
    "$75.17",
    "-3.47% vs 7/10 20:00 UTC",
    "SOL 對風險偏好更敏感，失守 $77 後回到 $75 附近，beta 特性明顯。",
  ],
];

const notes = [
  "美股全線回落：Dow -138.37 至 52,498.64，S&P 500 -0.79% 至 7,515.34，Nasdaq -1.55% 至 25,873.18。",
  "主因是地緣與油價 shock：Reuters 指 WTI +9.4% 至 $78.14、Brent +9.6% 至 $83.30，市場重新交易通脹風險。",
  "科技與晶片是重災區：XLK -2.42%、SOXX -4.77%，NVDA -3.52%、AMD -4.21%，SK Hynix ADR 跌約 9.3%。",
  "能源是少數贏家：XLE +3.01%，但能源升不是單純利好，因為同時推高 10Y 至約 4.62%、加息機率上升。",
  "VIX 升至 17.16，恐慌未爆錶但風險胃納明顯轉差；Russell 2000 -0.83%，breadth 仍弱。",
  "Crypto 採 Binance 4:00pm ET 附近價格：BTC $62,258.62、ETH $1,774.19、SOL $75.17；SOL 跌幅最大。",
];

const technicalLevels = [
  [
    "Dow Jones",
    "52,500 / 52,000",
    "收 52,498.64，剛貼 52,500；若跌穿 52,000，代表能源支撐也頂不住藍籌。",
  ],
  [
    "S&P 500",
    "7,550 / 7,500",
    "失守 7,550 後貼近 7,500；7,500 是短線心理防線，跌穿會測 7,430-7,450 區。",
  ],
  [
    "Nasdaq Composite",
    "26,000 / 25,800",
    "跌穿 26,000，短線要先收復 26,000 才算止血；25,800 是下一個觀察位。",
  ],
  [
    "Russell 2000",
    "2,950 / 3,000",
    "收 2,953.17，仍未能重上 3,000；若跌穿 2,950，breadth 會再惡化。",
  ],
  [
    "VIX",
    "18 / 20",
    "17.16 已由 calm 區反彈；18 是警戒，20 是去風險加速線。",
  ],
  [
    "SOXX",
    "$550 / $580",
    "收 $553.61，接近 $550 防線；要重上 $580，chip leadership 才算修復。",
  ],
  [
    "10Y Treasury",
    "4.60% / 4.70%",
    "10Y 約 4.62%，已穿 growth 壓力線；若逼近 4.70%，高估值科技會更難捱。",
  ],
  [
    "WTI / Brent",
    "$78 / $83",
    "WTI $78.14、Brent $83.30；若 Brent 企穩 $85，通脹交易會繼續升溫。",
  ],
  [
    "BTC",
    "$62,000 / $60,000",
    "BTC 4pm ET 約 $62.26k；守不到 $62k，市場會望 $60k 整數位。",
  ],
];

const watchList = [
  "週二 CPI：若 core CPI 高過預期，油價 shock 會直接變成 Fed hike 交易。",
  "Fed Chair Kevin Warsh 國會聽證：市場會聽他如何評估能源通脹與加息門檻。",
  "JPM / GS / BAC 業績：金融股今日相對穩，明日要靠信貸成本與 trading revenue 證明韌性。",
  "Brent $85 與 10Y 4.70%：兩者同時升穿，對 Nasdaq / SOXX 是最差組合。",
  "SOXX $550：如果失守，AI hardware 由回吐變成較深 correction。",
  "NVDA / AMD / MU：留意是否有資金在 CPI 前抄底，或繼續由 memory chain 擴散到全 chip complex。",
  "VIX 18-20：升穿 18 代表警戒，升穿 20 代表機構倉位可能加速降風險。",
  "Crypto：BTC $62k、ETH $1.75k、SOL $75 是短線 risk appetite 防線。",
];

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="card">
      <h2>{title}</h2>
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

export default function USCloseBrief20260713() {
  return (
    <main className="page">
      <style>{`
        .page {
          width: 1120px;
          min-height: 1580px;
          margin: 0 auto;
          padding: 48px;
          background: #f6f8fb;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.55;
        }
        .hero {
          background: linear-gradient(135deg, #111827 0%, #7f1d1d 52%, #92400e 100%);
          color: white;
          border-radius: 28px;
          padding: 42px;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
        }
        .eyebrow { font-size: 16px; opacity: 0.86; letter-spacing: 0.08em; }
        h1 { font-size: 48px; margin: 10px 0 14px; line-height: 1.12; }
        .subtitle { font-size: 22px; max-width: 920px; opacity: 0.94; }
        .meta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 22px; }
        .pill {
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 15px;
        }
        .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; margin-top: 24px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 26px;
          box-shadow: 0 16px 34px rgba(15, 23, 42, 0.06);
        }
        h2 { font-size: 25px; margin: 0 0 16px; color: #0f172a; }
        h3 { font-size: 19px; margin: 18px 0 8px; color: #b45309; }
        ul { padding-left: 22px; margin: 10px 0; }
        li { margin: 8px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 15px; }
        th {
          background: #fff7ed;
          color: #9a3412;
          text-align: left;
          padding: 10px;
          border-bottom: 1px solid #fed7aa;
        }
        td { padding: 11px 10px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
        .callout {
          border-left: 5px solid #b45309;
          background: #fffbeb;
          padding: 14px 16px;
          border-radius: 14px;
          margin: 14px 0;
        }
        .small { color: #64748b; font-size: 14px; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>

      <header className="hero">
        <div className="eyebrow">美股收盤懶人包｜完整版</div>
        <h1>油價急升嚇窒科技股，AI 晶片急回吐</h1>
        <p className="subtitle">
          7 月 13 日美股轉弱：特朗普重提霍爾木茲/伊朗航運封鎖，WTI 與 Brent
          約升 9%，推高通脹與加息憂慮。能源股一枝獨秀，但 Nasdaq、SOXX
          和多隻 AI hardware 名字急跌，市場由上週五的 AI 興奮切換到風控模式。
        </p>
        <div className="meta">
          <span className="pill">交易日：{reportDate}</span>
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">語言：繁體中文 / 廣東話語氣</span>
          <span className="pill">
            Crypto：Binance data-api 20:00 UTC 1m close
          </span>
        </div>
      </header>

      <div className="grid">
        <Card title="1｜30 秒重點">
          <ul>
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <div className="callout">
            今日結論：不是普通科技回吐，而是「油價 shock + 債息上行 + AI
            crowded trade 降溫」。短線要守住 S&P 500 7,500、SOXX $550、VIX 18
            和 10Y 4.70%；未守穩前，不宜把跌市當成無腦撈底訊號。
          </div>
        </Card>

        <Card title="2｜大市一眼睇">
          <DataTable
            headers={["指標", "收市", "變動", "解讀"]}
            rows={indexRows}
          />
        </Card>

        <Card title="3｜市場寬度與風險胃納">
          <ul>
            <li>
              AP、CNBC、Reuters 對三大指數口徑一致：S&P 500 約 -0.8%、Dow
              約 -0.3%、Nasdaq 約 -1.6%，科技明顯跑輸。
            </li>
            <li>
              Russell 2000 -0.83%，即使能源股急升，細價股仍未能擴散反彈，
              breadth 未見改善。
            </li>
            <li>
              Reuters 報 Nasdaq 跌幅最大，而能源股是 11 大板塊中最強；這是典型
              oil shock rotation，不是健康的全面 risk-on。
            </li>
            <li>
              VIX 由 15.03 升至 17.16，市場開始買保護，但仍未去到 20 以上的
              forced de-risking 區域。
            </li>
          </ul>
        </Card>

        <Card title="4｜板塊紅綠燈">
          <DataTable
            headers={["板塊 / ETF proxy", "變動", "訊號", "一句講晒"]}
            rows={sectorRows}
          />
          <p className="small">
            板塊 ETF proxy 採 Yahoo Finance chart 7/13 日線收市；Reuters/CNBC
            敘事確認 energy 領升、technology/chips 領跌。SOXX 不是 S&P 500
            sector，但保留作 AI hardware 溫度計。
          </p>
        </Card>

        <Card title="5｜點解今日會咁走？">
          <h3>1）霍爾木茲風險令油價一日抽升約 9%</h3>
          <ul>
            <li>
              Reuters 指美國與伊朗衝突再升級，市場重新擔心霍爾木茲海峽供應風險；
              WTI 收 $78.14，Brent 收 $83.30。
            </li>
            <li>
              油價升本身利好能源股，但對大市是壞消息，因為它會推高 CPI 與 Fed
              加息風險。
            </li>
          </ul>
          <h3>2）晶片從 leadership 變成拖累</h3>
          <ul>
            <li>
              SK Hynix 上週五首日上市大升後，週一 ADR 跌約 9.3%；SOXX
              -4.77%，TradingKey 指費城半導體指數跌 4.78%、成分股全跌。
            </li>
            <li>
              NVDA、AMD、MU、INTC、AVGO、TSM 都跌，反映不是單一股票問題，而是
              AI hardware crowded trade 被集體降溫。
            </li>
          </ul>
          <h3>3）市場等 CPI、銀行業績與 Warsh 聽證</h3>
          <ul>
            <li>
              CNBC 指週二 CPI、JPM/GS/BAC 財報和 Fed Chair Warsh
              國會聽證是下一批催化。
            </li>
            <li>
              白話講：今日市場先收縮風險，等明日數據回答「油價 shock
              會否逼 Fed 更 hawkish」。
            </li>
          </ul>
        </Card>

        <Card title="6｜宏觀白話版">
          <DataTable headers={["項目", "數據", "解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：macro 由「AI 可以抵消利率壓力」變成「油價重新推高通脹與加息風險」。
            在 10Y 站上 4.60%、DXY 站上 101、Brent 站上 $83 的組合下，科技估值
            短線自然較難擴張。
          </div>
        </Card>

        <Card title="7｜重點股票與資金流">
          <DataTable
            headers={["股票/主題", "收市表現", "原因"]}
            rows={stockRows}
          />
        </Card>

        <Card title="8｜BTC / ETH / SOL">
          <DataTable
            headers={["幣種", "4:00pm ET 附近價", "對比/24h", "來源/備註"]}
            rows={cryptoRows}
          />
          <p className="small">
            Crypto 採 Binance data-api 1-minute kline，時間點為 2026-07-13
            20:00:00 UTC（美股 4:00pm ET 附近）；對比基準為 2026-07-10
            20:00:00 UTC。直接 Binance spot API 如受地區限制，官方 public
            data/data-api 是較可重現口徑。
          </p>
        </Card>

        <Card title="9｜技術位">
          <DataTable
            headers={["市場", "位置", "意義"]}
            rows={technicalLevels}
          />
        </Card>

        <Card title="10｜明日/本週事件焦點">
          <ul>
            {watchList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        <Card title="11｜操作提示與最終觀點">
          <ul>
            <li>
              <strong>短線：</strong>
              先把今天當成 risk-off shock 處理，等 S&P 500 能否守 7,500、SOXX
              能否守 $550，再決定是否加回高 beta。
            </li>
            <li>
              <strong>中線：</strong>
              AI infrastructure 故事未完，但估值擴張需要債息配合；10Y 4.60%
              以上時，優先選現金流與盈利確定性較高的 mega-cap。
            </li>
            <li>
              <strong>風控：</strong>
              Brent 企穩 $85、10Y 升穿 4.70%、VIX 上 20 或 CPI 熱過預期，都要
              降低槓桿與集中度。
            </li>
            <li>
              <strong>一句到尾：</strong>
              今日是「能源股贏、科技股輸」的通脹 shock 市；可觀察反彈，但唔好急住
              假設 AI dip 一定即刻被買返。
            </li>
          </ul>
        </Card>

        <Card title="12｜來源、數據差異與免責聲明">
          <h3>主要來源</h3>
          <ul>
            {sources.map((source) => (
              <li key={source.url}>
                <a href={source.url}>{source.name}</a>
              </li>
            ))}
          </ul>
          <h3>數據差異處理</h3>
          <ul>
            <li>
              指數收市：AP、CNBC、Sharecast 與 Reuters 對 Dow 52,498.64、S&P
              500 7,515.34、Nasdaq 25,873.18 口徑一致；Russell 2000 採 AP
              2,953.17。
            </li>
            <li>
              Sector ETF：本文用 Yahoo Finance chart 7/13 日線收市作數字口徑；
              Reuters/CNBC/Business Times 只用作「energy 領升、tech/chips
              領跌」敘事交叉核對。
            </li>
            <li>
              Oil：Reuters multi-asset 稿報 WTI $78.14 / +9.4%、Brent $83.30 /
              +9.6%；Sharecast 報 Brent $83.20 / +9.46%，差異屬報價/時間口徑，
              本文採 Reuters 結算口徑。
            </li>
            <li>
              Treasury / FedWatch：Reuters 報 10Y 至 4.62%；CNBC 報 CME
              FedWatch 7 月加息機率逾 41%，Bloomberg/Financial Post 報 money-market
              pricing 接近 50%。因概率即時變動，本文標明來源與時間差異。
            </li>
            <li>
              Gold / DXY：Reuters multi-asset 稿報 DXY 101.32、spot gold
              $3,998.52；另一 Reuters FX 稿報 DXY 101.27，CNBC gold
              即時口徑曾在約 $4,070。本文用方向與區間解讀，不把單一 gold
              tick 當核心結論。
            </li>
            <li>
              Crypto：直接 Binance spot API 如受地區限制，本文使用 Binance
              data-api 1m kline，精確取 2026-07-13 20:00 UTC close。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
