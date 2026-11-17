import React from "react";

const reportDate = "2026-11-16";
const publishedAt =
  "香港時間 2026-11-17 09:05（週二更新；數據截至美股 11/16 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Monday 11/16/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-2e6a9c41b6336e9240c1b01585d20cd4",
  },
  {
    name: "AP News - Stocks tumble as Nvidia leads technology sell-off",
    url: "https://apnews.com/article/stocks-markets-ai-nvidia-oil-us-35786b8f539ec95f16ae0500f71cfcc7",
  },
  {
    name: "CNBC - Stock market news for Nov. 16, 2026",
    url: "https://www.cnbc.com/2026/11/15/stock-market-today-live-updates.html",
  },
  {
    name: "CNBC - Stock futures after Nvidia pressures tech",
    url: "https://www.cnbc.com/2026/11/16/stock-market-today-live-updates.html",
  },
  {
    name: "Reuters via Investing.com - Trading Day: AI jitters slam Wall Street",
    url: "https://www.investing.com/news/economy-news/trading-day-ai-jitters-slam-wall-street-5031112",
  },
  {
    name: "CNBC - Treasury prices catch a small bid",
    url: "https://www.cnbc.com/2026/11/16/treasury-yields-bonds-inflation.html",
  },
  {
    name: "Newsquawk - US Market Wrap 16th November 2026",
    url: "https://www.newsquawk.com/headlines/us-market-wrap---16th-november-2026-risk-off-trade-as-tech-rout-resumes-supporting-havens-",
  },
  {
    name: "New York Fed - Empire State Manufacturing Survey",
    url: "https://www.newyorkfed.org/survey/empire/empiresurvey_overview",
  },
  {
    name: "CNBC - Gold drops to more than one-year low",
    url: "https://www.cnbc.com/2026/11/16/gold-holds-steady-as-investors-await-warsh-remarks-for-rate-signals.html",
  },
  {
    name: "CNBC - Nvidia earnings after Jensen Huang resignation",
    url: "https://www.cnbc.com/2026/11/16/nvidia-earnings-jensen-huang-resignation.html",
  },
  {
    name: "CNBC - Stocks moving the most today",
    url: "https://www.cnbc.com/2026/11/16/stocks-moving-the-most-today-live-updates.html",
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
  "美股星期一明顯 risk-off：Dow 51,608.17（-739.38 / -1.41%）、S&P 500 7,416.59（-145.08 / -1.92%）、Nasdaq 24,509.76（-626.51 / -2.49%），三大指數由 AI / 科技沽壓拖低。",
  "主線仍然係 Nvidia / AI unwind：NVDA 約 -4.10%，SOX -5.28%，SOXX 4pm ET proxy -5.44%；AMD、MU、INTC、SNDK、DELL、ORCL、LITE、BE 全線受壓。",
  "沽壓由科技擴散：Newsquawk 指 11個 S&P 500 sectors 只有 Consumer Staples（+0.34%）同 Utilities（+0.12%）上升；Technology -2.98%、Communication Services -2.82% 最弱。",
  "避險買盤只令美債息小跌，未改高息環境：CNBC 指 10Y 5.131%、2Y 4.834%、30Y 5.476%；Newsquawk settlement 口徑 10Y 5.117%。",
  "Fed pricing 仍偏鷹：CNBC 引 CME FedWatch 指 12月加 25bp 機率約 95%、50bp 約 5%；Newsquawk 以 futures implied 量度 Dec 約 26.0bp。",
  "Crypto 用 Binance Vision 2026-11-16 21:00 UTC 1m close（美股 4:00pm ET）計：BTC $65,032.01（較 11/13 同時間 -5.59%）、ETH $1,819.27（-6.59%）、SOL $71.33（-10.75%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "51,608.17",
    change: "-739.38 / -1.41%",
    read: "Dow 跌逾 700點，防守股雖有承接但金融、工業與科技沽壓令跌幅擴大。",
    source: "AP / CNBC / Yahoo chart",
  },
  {
    asset: "S&P 500",
    close: "7,416.59",
    change: "-145.08 / -1.92%",
    read: "第三日下跌並跌穿 7,500，市場由單一 NVDA headline risk 變成較廣泛降風險。",
    source: "AP / CNBC / Yahoo chart",
  },
  {
    asset: "Nasdaq Composite",
    close: "24,509.76",
    change: "-626.51 / -2.49%",
    read: "科技、半導體與 AI infrastructure 集中被沽，Nasdaq 跑輸三大指數。",
    source: "AP / CNBC / Yahoo chart",
  },
  {
    asset: "Russell 2000",
    close: "2,742.94",
    change: "-47.55 / -1.70%",
    read: "小型股同樣受 risk-off 拖累，未能受惠於美債息小幅回落。",
    source: "Yahoo chart / Newsquawk rounded RUT 2,743",
  },
  {
    asset: "VIX",
    close: "22.91",
    change: "+3.61 / +18.70%",
    read: "VIX 升穿 22，反映市場由上週的 AI 去槓桿，演變成更廣泛 hedging demand。",
    source: "Yahoo chart",
  },
  {
    asset: "Philadelphia SOX / SOXX",
    close: "SOX 9,610.65；SOXX 約 $141.22",
    change: "SOX -5.28%；SOXX proxy -5.44%",
    read: "半導體是全日最大震央；SOX 跌幅遠大過 Nasdaq，說明資金集中減低 AI chip beta。",
    source: "Yahoo chart daily / 1m 4pm ET proxy",
  },
];

const sectorRows = [
  [
    "Consumer Staples / XLP",
    "+0.34% sector；XLP proxy +0.29%",
    "最強",
    "資金流入防守板塊；CNBC 指 XLP 曾創新高，PG 約 +1.86%、TSN 約 +8.64%。",
  ],
  [
    "Utilities / XLU",
    "+0.12% sector；XLU proxy +0.18%",
    "防守",
    "避險買盤與較低 beta 屬性受惠，但 10Y 仍高令升幅有限。",
  ],
  [
    "Real Estate / XLRE",
    "-0.30% sector；XLRE proxy -0.27%",
    "偏穩",
    "息口只小跌，REITs 未有明顯追捧，但跑贏大市。",
  ],
  [
    "Health Care / XLV",
    "-0.53% sector；XLV proxy -0.53%",
    "防守偏弱",
    "防守需求抵消部分大市壓力，但未能完全轉正。",
  ],
  [
    "Financials / XLF",
    "-0.86% sector；XLF proxy -0.84%",
    "受壓",
    "銀行 app outage headlines 令金融股承壓，JPM、MS、BAC 同日下跌。",
  ],
  [
    "Materials / XLB",
    "-1.45% sector；XLB proxy -1.42%",
    "偏弱",
    "跟隨 cyclicals 走弱，未見資金避險流入。",
  ],
  [
    "Industrials / XLI",
    "-1.85% sector；XLI proxy -1.84%",
    "偏弱",
    "L3Harris / 航空 groundstop 後續消息與大市 risk-off 夾擊。",
  ],
  [
    "Consumer Discretionary / XLY",
    "-2.09% sector；XLY proxy -1.52%",
    "弱",
    "TSLA 及高 beta 消費跟隨風險資產下跌；ETF proxy 跌幅略細於 sector 口徑。",
  ],
  [
    "Energy / XLE",
    "-2.09% sector；XLE proxy -1.91%",
    "弱",
    "油價 settlement 下跌，抵消中東/海峽 headline risk premium。",
  ],
  [
    "Communication Services / XLC",
    "-2.82% sector；XLC proxy -1.73%",
    "高壓",
    "GOOGL 約 -4.08%、META 約 -2.43%，廣告/AI exposure 被減倉。",
  ],
  [
    "Technology / XLK",
    "-2.98% sector；XLK proxy -3.22%",
    "最弱",
    "NVDA、AMD、MU、INTC、ORCL、DELL 同跌，AI capex / China / leadership risk 集中反映。",
  ],
  [
    "Semis / SOXX",
    "SOXX proxy -5.44%",
    "高壓區",
    "跌幅顯著大過 XLK，顯示壓力不是普通科技，而是半導體鏈條去槓桿。",
  ],
];

const macroRows = [
  {
    topic: "美債息",
    data: "CNBC：約 10Y 5.131%、2Y 4.834%、30Y 5.476%；Newsquawk settlement：2Y 4.821%、10Y 5.117%、30Y 5.463%。",
    meaning:
      "債券有少量避險買盤，但 10Y 仍在 5.1% 以上，對科技股 multiple、REITs、小型股仍然是硬天花板。",
  },
  {
    topic: "FedWatch / 加息定價",
    data: "CNBC 引 CME FedWatch：12月加 25bp 機率約 95%、50bp 約 5%；Newsquawk 指 Dec futures implied 約 26.0bp（前值 27.1bp）。",
    meaning:
      "市場仍然視 12月加息為 base case；只是 50bp 尾端風險較低，未足以支持高估值板塊反彈。",
  },
  {
    topic: "Fed / AI 風險評論",
    data: "CNBC 指 Fed Chair Kevin Warsh 談 AI 對生產力與就業影響，提到 AI 可能帶來 job displacement 或甚至令市場失望；他沒有給出新政策訊號。",
    meaning:
      "對市場而言，這不是新一輪 hawkish shock，但在 Nvidia earnings 前夕，AI 估值敘事更易被放大檢視。",
  },
  {
    topic: "NY Fed Empire State",
    data: "官方 New York Fed：11月 general business conditions 由 25.5 降至 7.8，低過預期 18.0；new orders 3.0、shipments 8.8、employment 18.1，prices paid 45.9。",
    meaning:
      "製造業仍擴張但降溫，價格壓力放慢但仍高；數據本身不是股市大跌主因，焦點仍在 AI unwind 與高息。",
  },
  {
    topic: "原油 / 地緣政治",
    data: "Newsquawk：WTI Dec settled $85.72（-$2.84）、Brent Jan settled $92.44（-$3.40）；CNBC 盤中曾見 Brent / WTI 上升，反映 intraday 與 settlement 口徑有差異。",
    meaning:
      "雖有 Strait of Hormuz / Bahrain headlines，但市場更重視美國暫無即時軍事升級與供需憂慮，能源股因此轉弱。",
  },
  {
    topic: "黃金 / 美元",
    data: "CNBC：spot gold 3:38pm ET 約 $3,852.95（-0.7%），Dec gold futures settle 約 $3,853（-0.9%）；Reuters/Newsquawk 指美元在 risk-off 中續強。",
    meaning: "今次避險不是全面買金模式；高美元與加息預期令黃金同樣受壓。",
  },
  {
    topic: "市場廣度 / 風格",
    data: "Newsquawk：除 Staples、Utilities 外全部 sectors 下跌；CNBC moving stocks 指 XLP 創新高、PG 近 +2%、Tyson Foods +9% 以上。",
    meaning:
      "資金不是純粹離場，而是由 AI / growth 轉去 cash-flow defensives；要確認是否止跌，要先看 semis 能否停止跑輸。",
  },
];

const stockRows = [
  [
    "NVDA",
    "$156.14 / -4.10%",
    "CNBC 指董事會不考慮請 Jensen Huang 回任 CEO；市場等待週二盤後 Colette Kress 首份 earnings。",
  ],
  [
    "AMD / MU / INTC / SNDK",
    "$504.28 -5.58% / $719.02 -7.63% / $55.47 -7.03% / $809.11 -8.52%",
    "AI picks-and-shovels 全線被沽；SanDisk、Micron、Intel 跌幅反映 memory / chip beta 同步降風險。",
  ],
  [
    "SOXX / SOX",
    "$141.22 -5.44% / 9,610.65 -5.28%",
    "比 Nasdaq 更弱，是全日最清楚的風險訊號；短線要先等 SOX / SOXX 企穩。",
  ],
  [
    "DELL / ORCL / LITE / BE",
    "$320.55 -6.92% / $119.09 -5.03% / $546.00 -8.56% / $177.28 -7.67%",
    "AI server、cloud、optical、power infrastructure 同跌，說明市場正在重新審視 AI capex 鏈條。",
  ],
  [
    "GOOGL / META / AMZN / MSFT",
    "$283.72 -4.08% / $626.41 -2.43% / $257.75 -3.32% / $517.99 -1.21%",
    "Mega-cap 表現分化但整體偏弱；Alphabet 跌幅較深拖低 communication services。",
  ],
  [
    "AAPL / TSLA",
    "$352.78 -1.02% / $379.74 -2.67%",
    "AAPL 跌幅較細，TSLA 跟隨高 beta 消費與成長股走弱。",
  ],
  [
    "COIN / MSTR",
    "$119.84 -6.11% / $103.03 -7.67%",
    "CNBC 指 Bitcoin-linked equities 跟隨 crypto risk-off 下跌，Strategy / Coinbase 都明顯受壓。",
  ],
  [
    "PG / TSN",
    "$173.02 +1.86% / $63.95 +8.64%",
    "避險資金流入 Staples；Tyson Foods 業績好過預期，成為逆市強股。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$65,032.01",
    "-5.59%",
    "較 11/13 21:00 UTC $68,884.01 回落；週末曾急跌後，美股 4pm ET 仍未修復。",
  ],
  [
    "ETHUSDT",
    "$1,819.27",
    "-6.59%",
    "較 11/13 同時間 $1,947.59 下跌，beta 跌幅大過 BTC。",
  ],
  [
    "SOLUSDT",
    "$71.33",
    "-10.75%",
    "較 11/13 同時間 $79.92 急跌，是三隻中最弱；流動性與高 beta 風險需特別留意。",
  ],
];

const watchList = [
  "NVDA 11/17 after close earnings：Colette Kress 對 China exposure、neocloud financing、FY28 demand visibility 的回答，會決定 AI trade 是 relief bounce 還是繼續去槓桿。",
  "S&P 500 7,400：11/16 低位 7,400.15，若跌穿兼收低，短線形態會進一步轉弱；上方先看 7,500 / 7,560 修復。",
  "Nasdaq 24,500：今日收 24,509.76，幾乎貼住整數關；若失守，AI unwind 可能變成更廣泛 momentum unwind。",
  "SOX 9,600 / SOXX $141：半導體是領跌核心，未止跌前不宜假設大市已完成調整。",
  "10Y 5.10%-5.17%：若債息沒有跌穿 5.10%，科技估值仍難獲得真正 multiple relief。",
  "週二數據與事件：October retail sales、import prices、FOMC minutes 前 Fed speakers，以及 Disney / Home Depot earnings。",
];

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

export default function USCloseBrief20261116() {
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
          {reportDate} 收市｜{publishedAt}｜AI /
          半導體沽壓擴散，避險買債未能抵消高息與 Nvidia earnings 前的不確定性。
        </div>
        <div className="hero-grid">
          <div className="hero-card">
            <span>S&P 500</span>
            <b>7,416.59</b>
            <Tone tone="red">-1.92%</Tone>
          </div>
          <div className="hero-card">
            <span>10Y Treasury</span>
            <b>5.12%-5.13%</b>
            <Tone tone="amber">仍高於 5%</Tone>
          </div>
          <div className="hero-card">
            <span>BTC 4pm ET</span>
            <b>$65,032.01</b>
            <Tone tone="red">-5.59%</Tone>
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
          <h3>點解債息跌，大市仍然跌？</h3>
          <ul>
            <li>
              債息只是小跌：10Y 仍約 5.12%-5.13%，未有足夠 relief
              去支持科技股估值。
            </li>
            <li>
              NVDA leadership / China / neocloud financing risk 在 earnings
              前繼續發酵，令市場先減 AI beta。
            </li>
            <li>
              沽壓由半導體擴散到 software、cloud、communication
              services、financials；不是只有單一股份問題。
            </li>
            <li>
              油價與黃金都跌，美元偏強，反映今日資金選擇現金、美元與短端債券，而不是全面買所有避險資產。
            </li>
          </ul>
          <p className="note">
            口徑提示：個股/ETF 以 Yahoo chart 20:59-21:00 UTC 1分鐘 close
            proxy；指數用 Yahoo daily close / AP / CNBC；sector rank 用
            Newsquawk S&P 500 sector close。
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
                  className={change.startsWith("+") ? "tone green" : "tone red"}
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
                  <td
                    className={price.includes("+") ? "tone green" : "tone red"}
                  >
                    {price}
                  </td>
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
                  <td className="tone red">{change}</td>
                  <td>{read}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            Crypto 採 Binance Vision public data API 1m kline close：2026-11-16
            21:00 UTC 對比 2026-11-13 21:00 UTC。11月美股 4:00pm ET = 21:00
            UTC。
          </p>
        </Section>

        <Section number="08" title="財報與事件焦點">
          <ul>
            <li>
              <b>NVDA：</b>週二盤後 earnings 是全市場焦點；CNBC 指 analysts 預期
              revenue +91% 至 $109.1B、EPS $2.47。
            </li>
            <li>
              <b>China / export controls：</b>CNBC 指市場會追問 Southeast Asia
              sales 是否存在中國終端需求與合規風險。
            </li>
            <li>
              <b>Neocloud financing：</b>市場擔心 Kress 上任後會否縮減 Huang
              時代以 Nvidia balance sheet 支持客戶的做法。
            </li>
            <li>
              <b>Retail / consumer：</b>週二有 October retail sales，同日 Disney
              / Home Depot 財報會測試消費與防守股承接力。
            </li>
          </ul>
        </Section>
      </div>

      <div className="layout">
        <Section number="09" title="技術位與市場廣度">
          <ul>
            <li>
              <b>S&P 500：</b>今日低位 7,400.15 幾乎貼住
              7,400；若失守，下一步要看 7,350 / 7,300。反彈先看 7,500，重上
              7,560 才算修復上週缺口。
            </li>
            <li>
              <b>Nasdaq：</b>收 24,509.76，貼住 24,500；若半導體未止跌，24,000
              心理位會被市場盯實。
            </li>
            <li>
              <b>SOX：</b>9,610.65；9,600 是短線第一防線，跌穿會確認 chip
              momentum 仍在 unwind。
            </li>
            <li>
              <b>VIX：</b>22.91；若升穿 25，代表 hedging pressure 進一步升級。
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
        <div className="pill">先等 NVDA 財報</div>
        <div className="pill">半導體未止跌前控制槓桿</div>
        <div className="pill">留意 10Y 5.10%</div>
        <div className="pill">防守股相對強但不追高</div>
        <ul>
          <li>
            短線交易：若無法承受 earnings gap risk，AI / semis 倉位宜先降
            beta，而不是估底。
          </li>
          <li>
            中線配置：若 NVDA 財報能穩住 demand / China / financing
            三條問題，市場可能有 relief bounce；但若指引轉弱，估值重估會延續。
          </li>
          <li>
            風險管理：S&P 500 7,400、Nasdaq 24,500、SOX 9,600 同 10Y 5.10%
            是明日四個最重要監察位。
          </li>
        </ul>
      </Section>

      <Section number="12" title="來源、口徑與免責聲明" wide>
        <p>
          若數據來源有差異，本文優先使用 AP / CNBC / Yahoo chart 的 major index
          close、Newsquawk 的 sector / macro market wrap、官方 New York Fed
          數據，以及 Binance Vision public data 的 1分鐘 kline。個股與 ETF 因
          Yahoo daily close 在生成時部分仍未寫入，採用 20:59-21:00 UTC 1分鐘
          close proxy，並已在相關表格標明。
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
