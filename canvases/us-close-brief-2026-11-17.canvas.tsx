import React from "react";

const reportDate = "2026-11-17";
const publishedAt =
  "香港時間 2026-11-18 09:05（週三更新；數據截至美股 11/17 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Tuesday 11/17/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-ff6caef4d9289cf7f1e6ee48a706eddc",
  },
  {
    name: "AP News - Wall Street shakes again as Nvidia and AI stocks swing lower",
    url: "https://apnews.com/article/stock-markets-ai-earnings-oil-4d5a35288288389d894e63e6bebe8240",
  },
  {
    name: "CNBC - Stock market news for Nov. 17, 2026",
    url: "https://www.cnbc.com/2026/11/16/stock-market-today-live-updates.html",
  },
  {
    name: "CNBC - Stock futures rise as Nvidia gains on earnings beat",
    url: "https://www.cnbc.com/2026/11/17/stock-market-today-live-updates.html",
  },
  {
    name: "Reuters via Investing.com - Trading Day: AI trade unwind continues, but Nvidia beats",
    url: "https://www.investing.com/news/economy-news/trading-day-ai-trade-unwind-continues-but-nvidia-beats-5034195",
  },
  {
    name: "Xinhua - U.S. stocks fall for 4th straight day as AI sell-off deepens",
    url: "https://english.news.cn/northamerica/20261118/7fe12af3e0514dc99d350ac154d41ae5/c.html",
  },
  {
    name: "U.S. Census Bureau - October 2026 retail sales",
    url: "https://www.census.gov/retail/sales.html",
  },
  {
    name: "Reuters via Investing.com - Retail sales and import prices",
    url: "https://www.investing.com/news/economy-news/us-retail-sales-increase-moderately-in-october-5033051",
  },
  {
    name: "NAHB - Builder sentiment continues to fall",
    url: "https://www.nahb.org/news-and-economics/press-releases/2026/11/builder-sentiment-continues-to-fall-on-affordability-concerns",
  },
  {
    name: "CNBC - Treasury yields Nov. 17, 2026",
    url: "https://www.cnbc.com/2026/11/17/treasury-yields-bonds-inflation.html",
  },
  {
    name: "Reuters via LiveMint - U.S. yields ease as equities drop",
    url: "https://www.livemint.com/market/us-yields-ease-as-equities-drop-before-nvidia-results-11794948835861.html",
  },
  {
    name: "CNBC - Oil edges up on tanker attacks",
    url: "https://www.cnbc.com/2026/11/17/oil-slips-on-supply-surplus-outlook-despite-gulf-tensions.html",
  },
  {
    name: "Newsquawk - Crude wrap Nov. 17, 2026",
    url: "https://www.newsquawk.com/headlines/crude-wrap-wti-z6-settles-usd-029-higher-at-8601bbl-brent-f2-settles-usd-070-higher-at-9314bbl",
  },
  {
    name: "Reuters via Euronext - Stocks fall with Nvidia in focus, oil ticks up",
    url: "https://live.euronext.com/en/financial-news/stocks-fall-nvidia-focus-oil-ticks",
  },
  {
    name: "CNBC - Nvidia Q3 FY2027 earnings report",
    url: "https://www.cnbc.com/2026/11/17/nvidia-nvda-earnings-report-q3-2027.html",
  },
  {
    name: "Reuters via Investing.com - Nvidia earnings beat estimates",
    url: "https://www.investing.com/news/stock-market-news/nvidia-earnings-beat-estimates-attention-turns-to-call-5034180",
  },
  {
    name: "Yahoo Finance chart data",
    url: "https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC",
  },
  {
    name: "CME FedWatch",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
  {
    name: "Binance Vision data API klines",
    url: "https://data-api.binance.vision/",
  },
];

const keyPoints = [
  "美股星期二連跌第四日：Dow 50,759.42（-848.75 / -1.64%）、S&P 500 7,340.53（-76.06 / -1.03%）、Nasdaq 24,328.38（-181.38 / -0.74%）；S&P 500 收到 7月底以來低位。",
  "跌市主線仍然係 AI / 高估值去槓桿：CNBC / AP 指 Nvidia earnings 前半導體與 AI 股波動加劇，NSA 網絡 outage headline 亦令尾段風險胃納轉差。",
  "廣度偏弱：CNBC/FactSet 指 NYSE 與 Nasdaq 跌多升少約 3:1；Xinhua 指 11個 S&P 500 sectors 全線下跌，Financials -1.87%、Utilities -1.60% 領跌，Energy -0.53% 最抗跌。",
  "債息有避險買盤但市場仍怕高息：Reuters 指 10Y 約 5.103%、2Y 約 4.789%、30Y 約 5.459%；FedWatch 來源按時間不同顯示 12月加 25bp 機率約 93%-98%。",
  "宏觀數據好壞參半但偏鷹：官方 retail sales +0.2% 符合預期、core retail +0.6% 強過預期；import prices +1.1% 高過預期，NAHB builder sentiment 跌至 25。",
  "Crypto 用 Binance Vision 2026-11-17 21:00 UTC 1m close（美股 4:00pm ET）計：BTC $64,036.75（較 11/16 同時間 -1.53%）、ETH $1,804.87（-0.79%）、SOL $73.24（+2.68%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "50,759.42",
    change: "-848.75 / -1.64%",
    read: "Dow 一度跌逾千點，收市仍跌近 850點；UNH、JPM、GS、HD 等大型價值/週期股拖累指數。",
    source: "AP / CNBC / Yahoo chart",
  },
  {
    asset: "S&P 500",
    close: "7,340.53",
    change: "-76.06 / -1.03%",
    read: "連跌第四日，盤中最多跌約 1.7%，收市為 7月底以來低位；反映調整已不只限單一科技股。",
    source: "AP / CNBC / Yahoo chart",
  },
  {
    asset: "Nasdaq Composite",
    close: "24,328.38",
    change: "-181.38 / -0.74%",
    read: "盤中曾跌逾 2% 至 4月以來低位，尾段收窄跌幅；市場等 Nvidia 盤後業績決定 AI trade 下一步。",
    source: "AP / CNBC / Yahoo chart",
  },
  {
    asset: "Russell 2000",
    close: "2,701.87",
    change: "-41.07 / -1.50%",
    read: "小型股跑輸 S&P 500；高息、信貸成本與風險偏好下降繼續壓住 broader market。",
    source: "Yahoo chart",
  },
  {
    asset: "VIX",
    close: "25.46",
    change: "+2.55 / +11.13%",
    read: "VIX 升穿 25，顯示 hedging demand 明顯增加；未到恐慌高位，但風險溢價升溫。",
    source: "Yahoo chart / Investing.com",
  },
  {
    asset: "Philadelphia SOX / SOXX",
    close: "SOX 9,642.88；SOXX 約 $141.46",
    change: "SOX +0.34%；SOXX proxy +0.17%",
    read: "半導體由盤中低位反彈，AVGO +2.46% 抵消部分壓力；但整體 AI unwind 敘事未完，NVDA 盤後成為關鍵催化。",
    source: "Yahoo chart daily / 1m 4pm ET proxy",
  },
];

const sectorRows = [
  [
    "Energy / XLE",
    "sector -0.53%；XLE proxy -0.52%",
    "最抗跌",
    "油價因 tanker attacks / Hormuz 風險小升，令能源跑贏；但供應過剩預期限制升幅。",
  ],
  [
    "Industrials / XLI",
    "XLI proxy -0.55%",
    "偏穩",
    "相對大市跌幅較細，但仍受 risk-off 與 cyclicals 降風險拖累。",
  ],
  [
    "Consumer Discretionary / XLY",
    "XLY proxy -0.89%",
    "偏弱",
    "TSLA 微升但 Nike、Home Depot 等消費相關壓力大；retail sales 雖穩，市場更關注利率與估值。",
  ],
  [
    "Technology / XLK",
    "XLK proxy -0.91%",
    "偏弱",
    "MSFT -2.27%、ORCL -3.43% 拖累；半導體尾段反彈令 XLK 跌幅收窄。",
  ],
  [
    "Materials / XLB",
    "XLB proxy -1.22%",
    "弱",
    "美元仍接近 19個月高位，週期與商品 beta 未見資金承接。",
  ],
  [
    "Consumer Staples / XLP",
    "XLP proxy -1.23%",
    "防守失守",
    "與前一日相反，今日防守股亦回吐；PG / WMT 均下跌。",
  ],
  [
    "Health Care / XLV",
    "XLV proxy -1.41%",
    "受壓",
    "UNH -5.42% 拖累醫療；防守屬性不足以抵消個股壓力。",
  ],
  [
    "Communication Services / XLC",
    "XLC proxy -1.46%",
    "高壓",
    "GOOGL、META 均下跌，AI / 廣告 / mega-cap beta 繼續被減倉。",
  ],
  [
    "Real Estate / XLRE",
    "XLRE proxy -1.49%",
    "高息壓力",
    "10Y 仍約 5.1%，NAHB 跌至 25，REITs 受利率與地產數據雙重壓力。",
  ],
  [
    "Utilities / XLU",
    "sector -1.60%；XLU proxy -1.59%",
    "領跌之一",
    "Xinhua 指 Utilities 是第二弱 sector；高息環境令收益型板塊防守功能打折。",
  ],
  [
    "Financials / XLF",
    "sector -1.87%；XLF proxy -1.91%",
    "最弱",
    "銀行與金融股領跌；JPM -2.44%、GS -1.57%，市場避險下減少 cyclical financial exposure。",
  ],
  [
    "Semis / SOXX",
    "SOXX proxy +0.17%",
    "分化",
    "AVGO +2.46% 與 NVDA 盤後期望支持 ETF 收正，但 MU、INTC、NVDA 正股仍偏弱。",
  ],
];

const macroRows = [
  {
    topic: "美債息",
    data: "Reuters via LiveMint：10Y 5.103%（-1.8bp）、2Y 4.789%（-3.8bp）、30Y 5.459%（-0.8bp）；CNBC 盤中口徑約 10Y 5.109%、2Y 4.806%、30Y 5.46%。",
    meaning:
      "債券有避險買盤，但 10Y 仍在 5.1% 左右，對高 duration 科技股與 REITs 未構成真正估值 relief。",
  },
  {
    topic: "FedWatch / 加息定價",
    data: "Reuters 指 Fed funds futures 約 98% 機率 12月加 25bp、約 2% 機率加 50bp；其他 FedWatch 引述按時間點落在 92.7%-95.7%（25bp）與 4.3%-7.3%（50bp）。",
    meaning:
      "來源差異主要是截取時間不同；共同訊息係市場已把 12月 25bp 加息視為 base case，估值反彈難靠 Fed pivot。",
  },
  {
    topic: "Retail sales",
    data: "U.S. Census：10月 retail and food services sales $748.2B，按月 +0.2%（9月 +0.8% 不變）、按年 +6.8%；Reuters 指 core retail sales +0.6%，高過 +0.4% 預期。",
    meaning:
      "消費未崩，但增長偏集中在非店舖零售等項目；對 Fed 而言，需求仍有韌性，未必支持快速轉鴿。",
  },
  {
    topic: "Import prices / inflation",
    data: "Reuters：10月 import prices +1.1%，高過 +0.7% 預期；fuel import prices +3.6%，剔除 fuel / food 仍 +0.9%。",
    meaning:
      "通脹壓力不是單靠能源，capital goods 亦上升；這解釋為何股市跌但加息定價仍高。",
  },
  {
    topic: "Housing / NAHB",
    data: "NAHB/Wells Fargo HMI 由 29 跌至 25，為 2012年4月以來最低；current sales 28、future sales 30、buyer traffic 16。",
    meaning:
      "高 mortgage rate、成本與買家觀望令住宅建築情緒急降；地產鏈與利率敏感板塊要繼續保守看。",
  },
  {
    topic: "原油 / 地緣政治",
    data: "CNBC / Newsquawk：WTI settled $86.01（+0.34% / +$0.29）、Brent $93.14（+0.76% / +$0.70），升幅來自 Hormuz / tanker attacks，但供應過剩預期限制升勢。",
    meaning:
      "油價提供能源股相對支撐；但如果 headlines 未造成實際供應中斷，risk premium 可能好快回吐。",
  },
  {
    topic: "黃金 / 美元",
    data: "Reuters via Euronext：DXY 103.41（-0.16%）但仍近 19個月高位；spot gold 約 $3,863.76（+0.19%），COMEX gold settlement 來源約 $3,864.20（+0.29%）。",
    meaning:
      "美元略回但仍強，黃金只是小反彈；今次避險主要流向債券/現金，而不是全面追買黃金。",
  },
  {
    topic: "市場廣度 / 風格",
    data: "CNBC/FactSet：NYSE 約 1,924跌對 700升，Nasdaq 約 3,036跌對 1,141升；Xinhua 指 11 sectors 全跌。",
    meaning:
      "這是廣泛降風險，不是單一 ticker 壓市；反彈若要可信，要先看到 market breadth 改善。",
  },
];

const stockRows = [
  [
    "NVDA",
    "$155.46 / -0.44%；盤後約 +3%-4%",
    "正股日內一度跌幅較深後收窄；盤後 Q3 adjusted EPS $2.68 vs $2.48 expected、revenue $115.84B vs $109.10B，Q4 revenue guide 約 $130B，短線可引發 relief bounce。",
  ],
  [
    "AVGO / SOXX / SOX",
    "$341.60 +2.46% / SOXX +0.17% / SOX +0.34%",
    "Broadcom 逆市成為半導體支撐位；但 SOXX 只微升，反映市場仍等 NVDA call 釐清 AI demand 與融資承諾。",
  ],
  [
    "AMD / MU / INTC",
    "$503.41 -0.17% / $712.42 -0.92% / $55.17 -0.54%",
    "AI chip beta 由盤中低位反彈但未完全修復；如果 NVDA 指引被市場接受，這批股份可能先有 short-covering。",
  ],
  [
    "MSFT / ORCL",
    "$506.24 -2.27% / $115.00 -3.43%",
    "Cloud / AI infrastructure names 壓力明顯，投資者仍在審視 AI capex 回報與高息估值折現。",
  ],
  [
    "GOOGL / META / AMZN / AAPL",
    "$280.20 -1.24% / $618.87 -1.20% / $257.89 +0.05% / $351.91 -0.25%",
    "Mega-cap 表現分化；AMZN 近平收，但 Alphabet / Meta 拖累 communication services。",
  ],
  [
    "TSLA",
    "$380.11 +0.10%",
    "逆市微升，但 XLY 仍跌近 0.9%，說明 discretionary 板塊未被單一強股扭轉。",
  ],
  [
    "COIN / MSTR",
    "$115.02 -4.02% / $96.50 -6.34%",
    "Bitcoin-linked equities 跑輸 BTC，本質係 crypto beta 加上 equity risk-off 雙重折價。",
  ],
  [
    "HD / WMT / PG",
    "$339.01 -2.45% / $127.52 -0.69% / $171.72 -0.75%",
    "Home Depot 因全年 outlook 與 CEO/CFO 接任消息受壓；Staples 亦未能完全防守。",
  ],
  [
    "UNH / JPM / GS",
    "$389.68 -5.42% / $329.96 -2.44% / $877.52 -1.57%",
    "醫療與金融拖累 Dow；金融領跌 sector，反映高息與風險偏好回落下市場先減 cyclical exposure。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$64,036.75",
    "-1.53%",
    "較 11/16 21:00 UTC $65,032.01 回落；即使美股半導體尾段反彈，BTC 仍偏弱。",
  ],
  [
    "ETHUSDT",
    "$1,804.87",
    "-0.79%",
    "較 11/16 同時間 $1,819.27 下跌，跌幅細過 BTC；仍受高息與美元強勢牽制。",
  ],
  [
    "SOLUSDT",
    "$73.24",
    "+2.68%",
    "較 11/16 同時間 $71.33 反彈，是三隻中相對最強；但 equity-linked crypto stocks 未確認跟升。",
  ],
];

const watchList = [
  "NVDA earnings call 細節：China data-center sales、neocloud financing、FY28 75% growth guidance、是否維持投資者對 AI capex 的信心。",
  "S&P 500 7,300 / 7,400：今日低位 7,288.34 後收 7,340.53；若反彈收不上 7,400，形態仍偏弱。",
  "Nasdaq 24,000 / 24,500：盤中失守 24,000 後收回 24,328，短線要看 NVDA 能否帶動重上 24,500。",
  "VIX 25：若保持 25 以上，代表 hedging demand 未退；若回落到 22 以下，risk appetite 先算穩定。",
  "10Y 5.10%：債息若不能跌穿 5.10%，growth multiple 反彈空間仍受限。",
  "週三事件：FOMC minutes、building permits / housing starts、Nvidia 後續 analyst reaction、Anthropic IPO pricing headlines。",
];

function toneClass(value: string) {
  return value.includes("+") && !value.includes("-")
    ? "tone green"
    : "tone red";
}

function Tone({ children, tone }: { children: React.ReactNode; tone: string }) {
  return <span className={`tone ${tone}`}>{children}</span>;
}

function Section({
  number,
  title,
  children,
  wide = false,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section className={`section${wide ? " wide" : ""}`}>
      <h2>
        <span>{number}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function USCloseBrief20261117() {
  return (
    <main className="page">
      <style>{`
        .page {
          max-width: 1180px;
          margin: 0 auto;
          padding: 36px;
          background: #f8fafc;
          color: #182235;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.55;
        }
        .hero {
          background: #102a43;
          color: white;
          border-radius: 22px;
          padding: 28px;
          border: 1px solid #243b53;
        }
        .kicker { letter-spacing: 0.12em; text-transform: uppercase; font-size: 12px; opacity: 0.76; }
        h1 { margin: 6px 0 8px; font-size: 32px; line-height: 1.15; }
        .sub { color: #d9e2ec; font-size: 15px; }
        .hero-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 18px; }
        .hero-card { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.16); border-radius: 16px; padding: 12px; }
        .hero-card b { display: block; font-size: 20px; }
        .layout { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px; }
        .section { background: white; border: 1px solid #e2e8f0; border-radius: 18px; padding: 18px; margin-top: 16px; }
        .wide { grid-column: 1 / -1; }
        h2 { margin: 0 0 12px; font-size: 20px; color: #0f766e; display: flex; gap: 10px; align-items: center; }
        h2 span { color: #64748b; font-size: 13px; font-weight: 800; }
        h3 { margin: 12px 0 8px; font-size: 16px; color: #334155; }
        ul { margin: 0; padding-left: 21px; }
        li { margin: 6px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 13px; }
        th, td { border-bottom: 1px solid #e5e7eb; padding: 9px 8px; text-align: left; vertical-align: top; }
        th { color: #475569; font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em; }
        .tone.green { color: #047857; font-weight: 800; }
        .tone.red { color: #b91c1c; font-weight: 800; }
        .tone.amber { color: #b45309; font-weight: 800; }
        .note { color: #64748b; font-size: 12px; }
        .source-list { columns: 2; font-size: 12px; }
        a { color: #1d4ed8; text-decoration: none; }
        .pill { display: inline-block; border: 1px solid #cbd5e1; border-radius: 999px; padding: 2px 8px; margin: 2px 4px 2px 0; font-size: 12px; color: #475569; }
        .risk { background: #fff7ed; border-color: #fed7aa; }
        @media print {
          .page { padding: 20px; max-width: none; }
          .section { break-inside: avoid; }
          a { color: inherit; }
        }
      `}</style>

      <section className="hero">
        <div className="kicker">US Close Brief</div>
        <h1>美股收盤懶人包｜完整版</h1>
        <div className="sub">
          {reportDate} 收市｜{publishedAt}｜AI trade 繼續 unwind，
          大市連跌第四日；NVDA 盤後業績成為短線反彈關鍵。
        </div>
        <div className="hero-grid">
          <div className="hero-card">
            <span>S&P 500</span>
            <b>7,340.53</b>
            <Tone tone="red">-1.03%</Tone>
          </div>
          <div className="hero-card">
            <span>10Y Treasury</span>
            <b>5.10%-5.11%</b>
            <Tone tone="amber">避險買債但仍高</Tone>
          </div>
          <div className="hero-card">
            <span>BTC 4pm ET</span>
            <b>$64,036.75</b>
            <Tone tone="red">-1.53%</Tone>
          </div>
        </div>
      </section>

      <Section number="01" title="30秒重點" wide>
        <ul>
          {keyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </Section>

      <div className="layout">
        <Section number="02" title="大市一眼睇">
          <table>
            <thead>
              <tr>
                <th>市場</th>
                <th>收市</th>
                <th>變幅</th>
                <th>解讀</th>
              </tr>
            </thead>
            <tbody>
              {indexRows.map((row) => (
                <tr key={row.asset}>
                  <td>
                    <b>{row.asset}</b>
                    <div className="note">{row.source}</div>
                  </td>
                  <td>{row.close}</td>
                  <td
                    className={
                      row.change.startsWith("+") ? "tone green" : "tone red"
                    }
                  >
                    {row.change}
                  </td>
                  <td>{row.read}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section number="03" title="今日升跌原因">
          <h3>點解跌幅由科技擴散到全市場？</h3>
          <ul>
            <li>
              Nvidia earnings 前，市場先減 AI / 高估值 beta；CNBC 指 Nasdaq
              盤中一度觸及 4月以來低位。
            </li>
            <li>
              Retail sales 顯示需求仍有韌性、import prices 高過預期，令 FedWatch
              仍把 12月加 25bp 當 base case。
            </li>
            <li>
              債息雖小跌，但 10Y 仍約 5.1%，未足以令 technology、REITs、
              小型股重新擴張 multiple。
            </li>
            <li>
              CNBC 提到 NSA routine maintenance outage headline 令尾段 risk-off
              加劇；雖非根本因素，但在脆弱市況下放大沽壓。
            </li>
          </ul>
          <p className="note">
            口徑提示：指數採 AP / CNBC / Yahoo daily close；ETF/個股因 Yahoo
            daily close 在生成時部分仍未寫入，採用 Yahoo 20:59-21:00 UTC 1分鐘
            close proxy；sector exact rank 採 Xinhua / Reuters 文字稿。
          </p>
        </Section>
      </div>

      <Section number="04" title="板塊紅綠燈 / 熱度圖" wide>
        <table>
          <thead>
            <tr>
              <th>板塊</th>
              <th>變幅</th>
              <th>狀態</th>
              <th>解讀</th>
            </tr>
          </thead>
          <tbody>
            {sectorRows.map(([sector, change, status, read]) => (
              <tr key={sector}>
                <td>
                  <b>{sector}</b>
                </td>
                <td
                  className={
                    change.includes("+") && !change.includes("-")
                      ? "tone green"
                      : "tone red"
                  }
                >
                  {change}
                </td>
                <td>{status}</td>
                <td>{read}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <div className="layout">
        <Section number="05" title="宏觀白話版">
          {macroRows.map((row) => (
            <div key={row.topic}>
              <h3>{row.topic}</h3>
              <p>
                <b>數據：</b>
                {row.data}
              </p>
              <p>
                <b>意思：</b>
                {row.meaning}
              </p>
            </div>
          ))}
        </Section>

        <Section number="06" title="重點股票">
          <table>
            <thead>
              <tr>
                <th>股票</th>
                <th>收市附近 / 變幅</th>
                <th>重點</th>
              </tr>
            </thead>
            <tbody>
              {stockRows.map(([ticker, price, read]) => (
                <tr key={ticker}>
                  <td>
                    <b>{ticker}</b>
                  </td>
                  <td className={toneClass(price)}>{price}</td>
                  <td>{read}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      </div>

      <div className="layout">
        <Section number="07" title="Crypto：BTC / ETH / SOL">
          <table>
            <thead>
              <tr>
                <th>Crypto</th>
                <th>Binance 4pm ET</th>
                <th>較上個美股交易日 4pm ET</th>
                <th>解讀</th>
              </tr>
            </thead>
            <tbody>
              {cryptoRows.map(([asset, close, change, read]) => (
                <tr key={asset}>
                  <td>
                    <b>{asset}</b>
                  </td>
                  <td>{close}</td>
                  <td
                    className={
                      change.startsWith("+") ? "tone green" : "tone red"
                    }
                  >
                    {change}
                  </td>
                  <td>{read}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            Crypto 採 Binance Vision public data API 1m kline close：2026-11-17
            21:00 UTC 對比 2026-11-16 21:00 UTC。11月美股 4:00pm ET = 21:00
            UTC；若交易所官方 API 口徑更新，數字可能有輕微差異。
          </p>
        </Section>

        <Section number="08" title="財報與事件焦點">
          <ul>
            <li>
              <b>NVDA：</b>盤後 EPS / revenue 均高過 LSEG 預期，Q4 revenue guide
              約 $130B；CNBC 指股份盤後升逾 3%-4%。
            </li>
            <li>
              <b>管理層訊號：</b>CNBC 指 board 不打算請 Jensen Huang 回任 CEO；
              interim CEO Colette Kress 指 FY28 revenue growth outlook 由 70%
              提升至 75%。
            </li>
            <li>
              <b>China / export controls：</b>Reuters 指 NVDA 的 outlook
              未假設任何中國 data-center chip sales，投資者會繼續追問增長質素。
            </li>
            <li>
              <b>宏觀事件：</b>FOMC minutes 將於週三公布，市場會看
              10月按兵不動背後有幾多委員傾向 12月加息。
            </li>
          </ul>
        </Section>
      </div>

      <div className="layout">
        <Section number="09" title="技術位與市場廣度">
          <ul>
            <li>
              <b>S&P 500：</b>低位 7,288.34，收 7,340.53；7,300 是即時支持，
              7,400 / 7,416（週一收市附近）是第一反彈阻力。
            </li>
            <li>
              <b>Nasdaq：</b>低位 23,989.09，收回 24,328.38；若 NVDA 帶不到重上
              24,500，反彈會被視為技術性。
            </li>
            <li>
              <b>Russell 2000：</b>2,701.87，距離 2,700 整數位好近；若失守，
              代表高息對小型股壓力再加深。
            </li>
            <li>
              <b>VIX：</b>25.46；若繼續站在 25 以上，倉位要假設 volatility
              regime 已轉高。
            </li>
            <li>
              <b>廣度：</b>CNBC/FactSet 顯示跌多升少接近 3:1；單靠少數 mega-cap
              反彈未足以確認大市見底。
            </li>
          </ul>
        </Section>

        <Section number="10" title="明日 / 本週觀察清單">
          <ul>
            {watchList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      </div>

      <Section number="11" title="操作提示" wide>
        <div className="pill">NVDA 可觸發 relief bounce</div>
        <div className="pill">S&P 500 7,300/7,400</div>
        <div className="pill">10Y 5.10% 是估值關口</div>
        <div className="pill">VIX 25 以上要減槓桿</div>
        <ul>
          <li>
            短線交易：若 NVDA 盤後升幅延續，可有 tactical rebound，但追貨要看
            Nasdaq 能否重上 24,500 兼 market breadth 改善。
          </li>
          <li>
            中線配置：高息 + sticky inflation + AI capex scrutiny
            未解除，科技倉位宜分批、保留現金。
          </li>
          <li>
            風險管理：Financials、Utilities、REITs
            今日同跌，代表「防守股」不是全部有效；要按利率敏感度區分。
          </li>
          <li>
            Crypto：BTC/ETH 仍受高息與美元強勢壓住；SOL 單日反彈不等於整個
            crypto beta 已轉強。
          </li>
        </ul>
      </Section>

      <Section number="12" title="來源、口徑與免責聲明" wide>
        <p>
          若數據來源有差異，本文優先使用 AP / CNBC / Yahoo chart 的 major index
          close、Xinhua / Reuters 的 sector / market wrap、官方 Census / NAHB
          數據、Reuters / CNBC 的 Treasury / commodity 口徑，以及 Binance Vision
          public data 的 1分鐘 kline。個股與 ETF 因 Yahoo daily close
          在生成時部分仍未寫入，採用 20:59-21:00 UTC 1分鐘 close
          proxy，並已在相關表格標明。FedWatch
          機率按截取時間可能有差異，文中列出範圍而非單一硬數字。
        </p>
        <ul className="source-list">
          {sources.map((source) => (
            <li key={source.url}>
              <a href={source.url}>{source.name}</a>
            </li>
          ))}
        </ul>
        <p className="note">{disclaimer}</p>
      </Section>
    </main>
  );
}
