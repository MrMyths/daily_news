import React from "react";

const reportDate = "2026-10-15";
const publishedAt =
  "香港時間 2026-10-16 09:01（週五更新；數據截至美股 10/15 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Thursday 10/15/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-f0a4f8aa60a6a24237c419aba38f31fd",
  },
  {
    name: "Reuters via MarketScreener - S&P 500 ends higher as traders shift from AI to healthcare",
    url: "https://uk.marketscreener.com/news/s-p-500-ends-higher-as-traders-shift-from-ai-to-healthcare-ce785dd3d18af022",
  },
  {
    name: "CNBC - Stock market today live updates Oct. 15 2026",
    url: "https://www.cnbc.com/2026/10/14/stock-market-today-live-updates.html",
  },
  {
    name: "BLS - Producer Price Indexes September 2026",
    url: "https://www.bls.gov/news.release/ppi.nr0.htm",
  },
  {
    name: "Investopedia - Markets News Oct. 15 2026",
    url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-10152026-12174789",
  },
  {
    name: "Investing.com - Nasdaq ends higher as bond rally offsets tech softness, hot PPI",
    url: "https://www.investing.com/news/stock-market-news/us-stock-futures-fall-as-hot-inflation-revives-fed-hike-concerns-4950317",
  },
  {
    name: "Investing.com - U.S. stocks higher at close of trade / breadth",
    url: "https://www.investing.com/news/stock-market-news/us-stocks-higher-at-close-of-trade-dow-jones-industrial-average-up-108-4952637",
  },
  {
    name: "The Edge - Commodities Wrap 15 October 2026",
    url: "https://edgeconsultancykw.com/commodities-wrap-15-october-2026/",
  },
  {
    name: "CNBC - CoreWeave credit default swaps hit distress levels",
    url: "https://www.cnbc.com/2026/10/15/coreweave-credit-default-swaps-hit-distress-levels-as-investors-sour-on-ai-debt.html",
  },
  {
    name: "The Globe and Mail / Reuters - TSMC cautious 2027 tone",
    url: "https://www.theglobeandmail.com/investing/article-tsmc-results-outlook-for-2027/",
  },
  {
    name: "Yahoo Finance chart API / historical quotes",
    url: "https://finance.yahoo.com/quote/%5EGSPC/history/",
  },
  {
    name: "CME FedWatch Tool",
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
  "美股週四由早段震盪反彈收高：S&P 500 7,744.06（+25.12 / +0.33%）、Nasdaq 26,713.03（+20.16 / +0.08%）、Dow 52,177.69（+556.21 / +1.08%）；Russell 2000 2,767.27（+1.38%），VIX 回落至 16.46（-2.43%）。",
  "主線係「通脹仍熱，但債息回落撐住大市」：BLS PPI +1.3% m/m、+6.3% y/y，遠高過預期；但 10Y yield 跌到約 5.089%，令 S&P / Nasdaq 從早段低位拗腰。",
  "資金繼續由 AI / 半導體轉去 healthcare、materials、consumer、financials：XLV +1.86%、XLB +1.79%、XLY +1.71%、XLF +1.38%；XLK -0.65%、SOXX -0.91%、XLE -1.58%。",
  "AI 債務壓力未解除：DELL -6.80%、HPE -7.11%、NVDA -1.84%、MRVL -1.65%；TSMC 雖然業績強但對 2027 措辭審慎，CoreWeave CDS / 債息仍是市場焦點。",
  "宏觀口徑有分歧要留意：美元 DXY 約 102.00（-0.54%），WTI settlement $97.97（+3.03%），Brent $105.92（-0.13%）；黃金 settlement 來源報 $4,170.10（+1.51%），即時報價/其他市場報道約 $4,190-$4,195。",
  "Crypto 以 Binance data API 2026-10-15 20:00 UTC 1m close（美股 4:00pm ET 附近）計：BTC $82,364.01（+0.57%）、ETH $2,452.72（+0.73%）、SOL $105.95（+1.51%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "52,177.69",
    change: "+556.21 / +1.08%",
    read: "Dow 由 value、consumer、financials 撐起，升幅明顯跑贏；AP / CNBC 均指大市雖震盪但最後收高。",
  },
  {
    asset: "S&P 500",
    close: "7,744.06",
    change: "+25.12 / +0.33%",
    read: "早段受 AI 沽壓與 PPI 熱數據拖低，其後跟隨債息回落反彈；Reuters 指 healthcare / consumer 股是主要支撐。",
  },
  {
    asset: "Nasdaq Composite",
    close: "26,713.03",
    change: "+20.16 / +0.08%",
    read: "盤中一度跌約 1.4%，尾段勉強轉正；科技內部仍弱，主要靠 broader market 回穩而不是 AI 壓力消失。",
  },
  {
    asset: "Russell 2000",
    close: "2,767.27",
    change: "+37.74 / +1.38%",
    read: "小型股受惠債息回落與 breadth 改善，表現好過 Nasdaq；但仍要看 10Y 會否重上 5.15%-5.20%。",
  },
  {
    asset: "VIX",
    close: "16.46",
    change: "-0.41 / -2.43%",
    read: "恐慌指標回落但仍高過 CPI 前水平，代表市場由 panic 轉為 selective rotation。",
  },
];

const sectorRows = [
  [
    "Health Care / XLV",
    "$177.19 / +1.86%",
    "最強",
    "Reuters 指 healthcare 係 S&P 主要貢獻；UNH、MRNA、BMY、LLY 一齊支持 defensive rotation。",
  ],
  [
    "Materials / XLB",
    "$50.56 / +1.79%",
    "強",
    "受惠美元回落及資金離開科技後尋找 cyclicals；Reuters 指 materials 升幅僅次 healthcare。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$113.41 / +1.71%",
    "強",
    "零售與 consumer names 反彈，Best Buy +5.69%，部分資金押 retail sales 強過預期。",
  ],
  [
    "Communication Services / XLC",
    "$112.44 / +1.46%",
    "偏強",
    "大型平台股由早段壓力修復，Netflix +2.89%，幫 Nasdaq 尾段拗腰。",
  ],
  [
    "Financials / XLF",
    "$55.27 / +1.38%",
    "偏強",
    "WFC +2.29%、GS +1.43%，高息環境對淨息差有支持；但 credit risk 仍要觀察。",
  ],
  [
    "Real Estate / XLRE",
    "$41.99 / +1.21%",
    "中性偏強",
    "10Y 由高位回落，REIT 估值壓力即日紓緩；不過 5% 以上長息仍不算友善。",
  ],
  [
    "Consumer Staples / XLP",
    "$86.68 / +0.72%",
    "中性偏強",
    "防守需求仍在，Walmart 受券商上調評級支持；升幅較週三收斂。",
  ],
  [
    "Industrials / XLI",
    "$167.89 / +0.51%",
    "中性",
    "整體跟市反彈，但 Caterpillar -1.78% 拖低，顯示 cyclical beta 未完全修復。",
  ],
  [
    "Utilities / XLU",
    "$41.65 / -0.17%",
    "中性偏弱",
    "防守資金今日更偏 healthcare / staples，utilities 未有明顯受惠。",
  ],
  [
    "Technology / XLK",
    "$189.19 / -0.65%",
    "弱",
    "AI capex、融資成本、TSMC 2027 審慎語氣繼續壓住估值；Microsoft 反彈但 NVDA / AAPL 偏弱。",
  ],
  [
    "Semiconductors / SOXX",
    "$514.71 / -0.91%",
    "弱",
    "Reuters 指晶片指數連跌多日；AI 需求長線仍強，但短線要消化高估值和債務成本。",
  ],
  [
    "Energy / XLE",
    "$66.56 / -1.58%",
    "最弱",
    "雖然 WTI 因庫存大跌抽升，sector 仍跌，反映投資者未有全面追 energy beta。",
  ],
];

const macroRows = [
  {
    topic: "PPI / 批發通脹",
    data: "BLS：September PPI final demand +1.3% m/m、+6.3% y/y，是 2022 以來最大按月升幅；final demand goods +2.6%，services +0.8%。CNBC / Investopedia 指數據高過 +0.6% / +5.5% 預期。",
    meaning:
      "通脹壓力由 CPI 延伸到 PPI，理論上應該推高 Fed hike risk；但市場後段更重視債息回落和資金輪動。",
  },
  {
    topic: "Fed / 利率路徑",
    data: "Investing.com 指 PPI 後 10 月加息機會一度近 34%，其後隨債市反彈回落至約 27%；Investopedia 引 CME FedWatch 約 29%。",
    meaning:
      "市場不是完全否定加息，而是認為 hot CPI/PPI 已部分 price in；Fed 官員語氣、能源價格和下週數據仍會令概率大幅波動。",
  },
  {
    topic: "美債息",
    data: "Investing.com：10Y yield 約 5.088%（-10.1bp），2Y 約 4.755%（-4.7bp）；Swingfolio / CNBC 類報道亦指 30Y 約 5.43%（-約9bp）。",
    meaning:
      "債息回落是今日股市反彈關鍵；如果 10Y 再上 5.15%-5.20%，科技和小型股會再被壓。",
  },
  {
    topic: "美元 / 黃金",
    data: "Yahoo chart / 市場報道：DXY 約 102.00（-0.54%）。The Edge 報 December gold settlement $4,170.10（+1.51%）；Investopedia / 即時期貨口徑約 $4,192-$4,195，差異主要來自報價時間和合約/結算口徑。",
    meaning:
      "美元同債息回落支持黃金反彈；但口徑不同令價格有約 $20 差距，故報告採 settlement 作主口徑並標示差異。",
  },
  {
    topic: "原油",
    data: "The Edge / AFP / CNBC：WTI settlement $97.97（+$2.88 / +3.03%），Brent settlement $105.92（-$0.14 / -0.13%）；EIA 原油庫存大減 8.6m barrels。",
    meaning:
      "WTI 強反映庫存和地緣供應風險；油價高企會令通脹敘事更難降溫，是 Fed risk 的尾部風險。",
  },
  {
    topic: "CPI 餘波",
    data: "前一日 CPI：headline +0.6% m/m、3.7% y/y；core +0.3% m/m、2.6% y/y。今日 PPI 再熱，證明市場不是單日數據驚嚇。",
    meaning:
      "兩份通脹數據一起令 higher-for-longer 故事延續，但債券買盤暫時壓低 long-end yields。",
  },
  {
    topic: "市場廣度 / 波幅",
    data: "Investing.com：NYSE 升股 1,990 隻、跌股 757 隻；Nasdaq 升股 2,214 隻、跌股 1,199 隻。VIX 16.46（-2.43%）。",
    meaning:
      "今日反彈不是只靠幾隻 mega-cap，而是 breadth 改善；不過 tech / semis 仍弱，反彈質素要分開睇。",
  },
  {
    topic: "Crypto / 流動性",
    data: "Binance data API 20:00 UTC：BTC $82,364.01、ETH $2,452.72、SOL $105.95，較 10/14 20:00 UTC 分別 +0.57%、+0.73%、+1.51%。",
    meaning:
      "Crypto 跟隨美元回落小幅修復，SOL 跑贏；但幅度不算強，仍未確認風險胃納全面回歸。",
  },
];

const stockRows = [
  [
    "DELL / HPE / AI servers",
    "DELL $473.39 / -6.80%；HPE $58.63 / -7.11%",
    "Reuters / Investing.com 指 AI server makers 連續第二日受壓，市場擔心 AI buildout 借貸成本與回報期；DELL 是 S&P 500 主要輸家之一。",
  ],
  [
    "NVDA / MRVL / SOXX",
    "NVDA $217.23 / -1.84%；MRVL $241.24 / -1.65%；SOXX $514.71 / -0.91%",
    "TSMC 業績強但 2027 指引審慎，令 semis 未能跟大市反彈；高估值 AI beta 仍被壓。",
  ],
  [
    "ORCL / CoreWeave",
    "ORCL $134.47 / +3.00%；CoreWeave 約 +5.94%（Morningstar / Swingfolio）",
    "Oracle 跌後反彈，CoreWeave 亦因 Nvidia CEO 支持言論回穩；但 CNBC 指 CoreWeave CDS spread 仍在 distress levels，AI debt risk 未完。",
  ],
  [
    "UNH / Healthcare defensives",
    "UNH $406.67 / +2.79%；MRNA $236.50 / +4.51%；BMY $60.57 / +2.18%",
    "Healthcare 成為今日最清晰資金流入方向；Reuters 指 Eli Lilly、UnitedHealth、Walmart 等是 S&P 支撐。",
  ],
  [
    "DLTR / WMT / consumer",
    "DLTR $124.41 / +2.18%；WMT 約 +1.4%（Reuters）；BBY $94.17 / +5.69%",
    "消費股由 defensive + retail sales 強過預期雙重支持，令 Dow / S&P 跑贏 Nasdaq。",
  ],
  [
    "Banks / Financials",
    "JPM $335.53 +0.07%；WFC $82.75 +2.29%；GS $891.28 +1.43%；C $123.21 +0.77%",
    "金融股受惠曲線與資金輪動，但 credit/funding cost 仍是後續風險，尤其如果 Fed odds 再升。",
  ],
  [
    "CAT / Industrials",
    "CAT $735.64 / -1.78%；CSX $48.69 / +0.85%",
    "Dow 大升下 CAT 仍跌，顯示部分 cyclical/capex 股對高息與需求放慢仍敏感。",
  ],
  [
    "Mega-cap tech / media",
    "MSFT $539.44 +1.08%；AAPL $342.00 -0.28%；TSLA $362.44 -1.29%；NFLX $72.61 +2.89%",
    "大型科技分化，軟件 / media 有修復，但硬件與高 beta 增長仍弱。",
  ],
  [
    "FMC / idiosyncratic risk",
    "FMC 約 -30.59%（Investing.com close movers）",
    "單一公司基本面與指引風險仍會被市場懲罰；大市反彈不等於所有弱股同步修復。",
  ],
  [
    "BTC / ETH / SOL",
    "BTC +0.57%；ETH +0.73%；SOL +1.51%",
    "美元和長息回落令 crypto 有短線喘息；SOL 彈性最大，但仍未突破近期壓力區。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$82,364.01",
    "+$467.43 / +0.57%",
    "重上 $82k，短線支持在 $81k-$82k；若突破 $83k-$84.5k，風險胃納才算進一步修復。",
  ],
  [
    "ETH",
    "$2,452.72",
    "+$17.83 / +0.73%",
    "$2,450 附近企穩但未重奪 $2,500；要見資金由 BTC 擴散，ETH 才有較高 beta。",
  ],
  [
    "SOL",
    "$105.95",
    "+$1.58 / +1.51%",
    "三幣之中最強，$104-$105 重新變成短線支持；上方 $108-$110 是第一阻力。",
  ],
];

const newsItems = [
  "AP / CNBC / Reuters：Dow +1.08%、S&P 500 +0.33%、Nasdaq +0.08%，美股由早段 AI 沽壓中回穩收高。",
  "BLS：September PPI +1.3% m/m、+6.3% y/y，創 2022 以來最大按月升幅；goods +2.6%、services +0.8%。",
  "Reuters：資金由 AI 相關股轉入 healthcare、consumer 等非周期/防守板塊；XLV、XLB、XLY、XLF 領先。",
  "Reuters / CNBC：TSMC 對 2027 措辭審慎，CoreWeave CDS / 債息維持高壓，AI debt trade 仍是科技股最大不確定性。",
  "Investing.com / Investopedia：FedWatch 10 月加息機會大約 27%-34% 區間波動，PPI 後一度升但債券買盤令概率回落。",
  "The Edge / CNBC：WTI 因 EIA 原油庫存大減升至 $97.97；Brent 微跌，油價分化但仍支持通脹風險。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,700 / 7,665 是短線支持；跌穿代表今日拗腰失效。",
    "7,800 / 7,815 是即日高位阻力；重上才接近重新挑戰上週高位。",
  ],
  [
    "Nasdaq",
    "26,500 / 26,300 是 immediate support；若 SOXX 續跌會再測。",
    "27,000 / 27,200 是修復位；需要 NVDA、DELL、HPE、AI credit 同步止血。",
  ],
  [
    "Russell 2000",
    "2,740 / 2,700 是支持；跌穿代表債息壓力重新主導。",
    "2,780 / 2,800 是反彈阻力；突破才確認 breadth 延續。",
  ],
  [
    "10Y yield",
    "5.04% / 5.00% 是短線下方觀察；跌穿會幫 growth 續命。",
    "5.15% / 5.20% 是壓力區；重上會再壓 Nasdaq、REIT、小型股。",
  ],
  [
    "WTI / Brent",
    "WTI $96 / Brent $104 是短線支持；跌穿可紓緩 inflation premium。",
    "WTI $100 / Brent $108-$110 是風險區；突破會令 Fed 故事再 hawkish。",
  ],
  [
    "BTC",
    "$82,000 / $81,000 是短線支持；失守代表反彈無力。",
    "$83,000 / $84,500 是修復位；要配合 DXY 和 10Y 繼續回落。",
  ],
];

const planRows = [
  [
    "短線",
    "先當作「跌後 rotation 反彈」，不是 AI 風險已經解除；追 beta 前要等 SOXX、NVDA、DELL/HPE、CoreWeave credit 同步穩定。",
  ],
  [
    "板塊",
    "Healthcare / materials / consumer / financials 暫時較強；Technology 和 semis 仍要降低倉位敏感度，Energy 雖有油價支持但 ETF 表現弱。",
  ],
  [
    "Macro",
    "重點看 10Y 會否守在 5.10% 以下、FedWatch 10 月加息機會會否重新升穿 35%-40%，以及油價是否突破 $100。",
  ],
  [
    "個股",
    "AI infrastructure 反彈要看信用市場而不只是股價；defensive winners 如 UNH / MRNA / BMY 已連升，避免追到太擠。",
  ],
  [
    "Crypto",
    "BTC / ETH / SOL 小幅修復，但未見強 breakout；可用 BTC $82k / SOL $104 作短線風險線，等 DXY 再回落才加高 beta。",
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

export default function USCloseBrief20261015() {
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
          background: #102a43;
          color: white;
          border-radius: 24px;
          padding: 30px;
          border: 1px solid #243b53;
        }
        .eyebrow { letter-spacing: 0.12em; text-transform: uppercase; font-size: 13px; opacity: 0.85; }
        h1 { margin: 8px 0 10px; font-size: 38px; line-height: 1.08; }
        .subtitle { font-size: 18px; opacity: 0.94; max-width: 940px; }
        .meta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 18px; }
        .pill { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.28); padding: 8px 12px; border-radius: 999px; font-size: 13px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 18px; }
        .card { background: white; border: 1px solid #e2e8f0; border-radius: 20px; padding: 20px; break-inside: avoid; }
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
          a { color: #1d4ed8; }
        }
      `}</style>

      <section className="hero">
        <div className="eyebrow">US Close Brief</div>
        <h1>美股收盤懶人包｜完整版</h1>
        <div className="subtitle">
          {reportDate} 收市｜PPI 熱但債息回落；資金由 AI / 半導體轉入
          Healthcare、Materials、Consumer
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
            今日係「PPI 熱過預期，但債息回落救市」。美股早段繼續被 AI debt、TSMC
            2027 審慎語氣和 PPI 熱數據拖低；其後 10Y yield 回落至約 5.09%，加上
            healthcare、materials、consumer、financials 接力，令 Dow 大升、S&P
            轉正，Nasdaq 勉強收高。
          </p>
          <h3>資金點諗</h3>
          <ul>
            <li>買非科技：XLV +1.86%、XLB +1.79%、XLY +1.71%、XLF +1.38%。</li>
            <li>
              避開 AI hardware / credit：DELL -6.80%、HPE -7.11%、SOXX -0.91%。
            </li>
            <li>接受通脹高但押債息短線見頂：10Y yield 跌約 10bp，VIX 回落。</li>
            <li>大市 breadth 改善：NYSE / Nasdaq 升股明顯多過跌股。</li>
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
            Sector 口徑：11 個 Select Sector SPDR ETF 與 SOXX 採 Yahoo Finance
            chart / quote data；XLRE、XLC 個別 close 欄位空值時採 Yahoo chart
            meta regularMarketPrice。新聞層面另以 Reuters / CNBC / Investing.com
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
              <span className="tag green">綠</span> Healthcare / Materials： XLV
              +1.86%、XLB +1.79%，資金最明顯流入。
            </li>
            <li>
              <span className="tag green">綠</span> Dow / Russell：Dow
              +1.08%、Russell +1.38%，breadth 好過週三。
            </li>
            <li>
              <span className="tag amber">黃</span> Nasdaq：收升
              0.08%，但盤中大跌後才拗腰，質素一般。
            </li>
            <li>
              <span className="tag amber">黃</span> Crypto：BTC / ETH / SOL
              小升，仍未 breakout。
            </li>
            <li>
              <span className="tag red">紅</span> AI servers / Semis：DELL / HPE
              大跌，SOXX 續弱。
            </li>
            <li>
              <span className="tag red">紅</span> Energy sector：WTI 升但 XLE
              跌，顯示資金未有追油股。
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
                <th>對 10/14 20:00 UTC</th>
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
            Binance data API klines 查 2026-10-15 20:00:00 UTC 1-minute kline
            close，時間點即美股正常收市 4:00pm ET 附近。對比基準為 2026-10-14
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
            最終觀點：今日反彈值得尊重，因為 breadth 明顯改善、債息回落、Dow 與
            Russell 都強；但科技內部仍未修好，AI debt / semis
            還是最脆弱位置。操作上可以承認 rotation，但不要將 Nasdaq
            尾段轉正解讀成風險完全解除。
          </p>
        </article>

        <article className="card wide">
          <h2>12. 來源、口徑與免責聲明</h2>
          <p className="note">
            數據衝突處理：主指數採 AP / CNBC / Reuters 終值，與 Yahoo chart
            close 交叉核對；sector ETF、重點股票採 Yahoo Finance chart / quote
            data，HPE、CoreWeave、FMC 等個別市場 movers 採 Investing.com /
            Morningstar / Reuters 類來源。宏觀數據採 BLS、CME
            FedWatch、Investing.com、Investopedia、The Edge、CNBC 等；黃金因
            settlement 與即時期貨報價口徑有差異，文內已標示。Crypto 採 Binance
            data API 20:00 UTC 1-minute
            kline。若來源時間點不同，文內已標示口徑；無可靠數據不作硬填。
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
