import React from "react";

const reportDate = "2026-11-12";
const publishedAt =
  "香港時間 2026-11-13 09:00（週五更新；數據截至美股 11/12 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Thursday 11/12/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-3f3668a937a11535103e3a5c8d82c9fc",
  },
  {
    name: "AP News - Wall Street shakes with swings for Nvidia and oil prices",
    url: "https://apnews.com/article/stock-markets-oil-ai-earnings-nvidia-8bf08407eafe1655ed73112f7494029a",
  },
  {
    name: "Reuters via Euronext - Wall Street ends lower as Nvidia CEO resigns; US yields up",
    url: "https://live.euronext.com/en/financial-news/wall-street-ends-lower-nvidia-ceo-resigns-us-yields",
  },
  {
    name: "CNBC - Stock market today: Live updates for Nov. 12, 2026",
    url: "https://www.cnbc.com/2026/11/12/stock-market-today-live-updates.html",
  },
  {
    name: "Yahoo Finance - Dow, S&P 500, Nasdaq slip as Nvidia stock falls on CEO exit",
    url: "https://finance.yahoo.com/markets/live/stock-market-today-sp-500-nasdaq-fall-as-nvidia-ceo-exit-rising-bond-yields-roil-markets-195710154.html",
  },
  {
    name: "Investing.com - U.S. stocks lower at close of trade",
    url: "https://www.investing.com/news/stock-market-news/us-stocks-lower-at-close-of-trade-dow-jones-industrial-average-down-036-5023324",
  },
  {
    name: "CNBC - 10-year Treasury yield jumps back above 5%",
    url: "https://www.cnbc.com/2026/11/12/us-treasurys-bonds-yields.html",
  },
  {
    name: "Morningstar / Dow Jones - 10-Year Treasury Yield Rises to 5.102%",
    url: "https://www.morningstar.com/news/dow-jones/2026111212961/10-year-treasury-yield-rises-to-5102-data-talk",
  },
  {
    name: "CNBC - Oil prices rise after Trump says no Iran deal needed",
    url: "https://www.cnbc.com/2026/11/12/oil-prices-jump-after-trump-says-no-iran-deal-needed-weve-got-their-strait.html",
  },
  {
    name: "CNBC - Gold drops as fading Middle East peace hopes fan inflation fears",
    url: "https://www.cnbc.com/2026/11/12/gold-falls-to-over-one-week-low-on-firm-dollar-fed-rate-hike-bets.html",
  },
  {
    name: "CNBC - Dollar reaches 19-month high as rate expectations dominate",
    url: "https://www.cnbc.com/2026/11/12/dollar-near-one-month-high-as-yen-edges-toward-160-.html",
  },
  {
    name: "CME FedWatch",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "StockAnalysis - SOXX historical price data",
    url: "https://stockanalysis.com/etf/soxx/history/",
  },
  {
    name: "TheTrading.Tools - Sector Performance snapshot",
    url: "https://www.thetrading.tools/sector-performance",
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
  "美股星期四收低但未失控：Dow 52,297.09（-189.40 / -0.36%）、S&P 500 7,592.40（-26.98 / -0.35%）、Nasdaq 25,366.09（-100.10 / -0.39%），Russell 2000 2,799.06（-1.66%）明顯跑輸。",
  "主線係 NVDA 領導層突發事件、油價急彈同債息上行三夾擊；S&P 500 早段一度跌近 1%，之後收復大部分跌幅，反映市場暫時當作個別風險而非全面 AI 崩盤。",
  "10Y 美債重上 5%：Reuters 指 10Y 約 5.105%、2Y 約 4.867%；CNBC 盤中口徑 10Y 約 5.125%、2Y 約 4.879%，債息重新成為估值壓力來源。",
  "油價因 Iran / Hormuz 風險急升：CNBC 報 Brent settle $95.82（+3.3%）、WTI $88.74（+2.6%），令通脹與 Fed 加息敘事更硬。",
  "板塊只有 Energy 明顯上升（XLE +約 1.51%），Materials、Communication Services、Industrials、Financials 跌幅較深；VIX 升至約 18.70（+6.9%）。",
  "Crypto 用 Binance Vision 2026-11-12 21:00 UTC 1m close（美股 4:00pm ET）計：BTC $71,499.35（較 11/11 同時間 -4.22%）、ETH $2,016.88（-3.11%）、SOL $81.41（-4.18%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "52,297.09",
    change: "-189.40 / -0.36%",
    read: "Dow 跌近 190 點；Chevron、Cisco、JNJ 撐住部分跌幅，但 Nvidia、Honeywell、Boeing 拖後腿。",
    source: "AP / Investing.com / Yahoo",
  },
  {
    asset: "S&P 500",
    close: "7,592.40",
    change: "-26.98 / -0.35%",
    read: "早段跌近 1% 後收窄，說明市場仍願意逢低吸納，但廣度偏弱：Investing.com 指 NYSE 跌股遠多過升股。",
    source: "AP / Reuters / Investing.com",
  },
  {
    asset: "Nasdaq Composite",
    close: "25,366.09",
    change: "-100.10 / -0.39%",
    read: "受 NVDA -4.34% 拖累，但 AMD、Broadcom、Alphabet 等抵銷部分壓力。",
    source: "AP / Reuters / CNBC",
  },
  {
    asset: "Russell 2000",
    close: "2,799.06",
    change: "-47.20 / -1.66%",
    read: "小型股最弱，高債息與 risk-off 廣度壓住利率敏感資產。",
    source: "Yahoo chart / sector snapshot",
  },
  {
    asset: "VIX",
    close: "18.69-18.70",
    change: "+約 6.9%",
    read: "恐慌指數由低位彈上，但仍低於 20，屬壓力升溫未到恐慌爆發。",
    source: "Yahoo / Investing.com",
  },
  {
    asset: "Philadelphia SOX / SOXX",
    close: "SOX 10,506.67；SOXX $154.99",
    change: "SOX -0.54%；SOXX -0.26%",
    read: "晶片內部分化：NVDA 與部分 memory / neocloud 受壓，但 AMD、AVGO 大升。",
    source: "Yahoo chart / StockAnalysis",
  },
];

const sectorRows = [
  [
    "Energy / XLE",
    "+1.51%",
    "最強",
    "油價急彈直接支持能源股；Chevron 在 Dow 成分中升 1.44%。",
  ],
  [
    "Utilities / XLU",
    "-0.02%",
    "相對防守",
    "債息上行理應壓力大，但跌幅細，反映資金有少量防守需求。",
  ],
  [
    "Technology / XLK",
    "-0.34%",
    "中性偏弱",
    "NVDA 事件拖累科技權重，但 AMD、AVGO、GOOGL、MSFT 對沖部分跌幅。",
  ],
  [
    "Consumer Staples / XLP",
    "-0.43%",
    "中性偏弱",
    "防守消費未能吸金，說明今日不是純避險買 defensives。",
  ],
  [
    "Consumer Discretionary / XLY",
    "-0.44%",
    "中性偏弱",
    "Tesla +1.69% 仍不足以帶動整體板塊。",
  ],
  [
    "Real Estate / XLRE",
    "-0.52%",
    "偏弱",
    "10Y 重上 5% 對 REITs / duration-sensitive 資產不利。",
  ],
  [
    "Health Care / XLV",
    "-0.59%",
    "偏弱",
    "JNJ 創高無法抵銷整體 healthcare 回吐。",
  ],
  [
    "Financials / XLF",
    "-0.72%",
    "偏弱",
    "利率上行理論上有 NIM 支持，但信用與估值壓力更主導。",
  ],
  [
    "Industrials / XLI",
    "-0.89%",
    "偏弱",
    "Honeywell、Boeing 等拖累，反映 cyclical beta 承壓。",
  ],
  [
    "Communication Services / XLC",
    "-0.96%",
    "弱",
    "Meta -0.82% 加上板塊廣度偏差，XLC 跑輸大市。",
  ],
  [
    "Materials / XLB",
    "-1.28%",
    "最弱",
    "Corteva -24.30% 因 Q3 miss / 指引下修拖累 materials 成為最弱板塊。",
  ],
];

const macroRows = [
  {
    topic: "NVDA shock / AI 估值",
    data: "Reuters / CNBC：Nvidia CEO Jensen Huang 辭任，CFO Colette Kress 任 interim CEO；NVDA 收市 -4.34% 至 $166.19，但由開市雙位數跌幅大幅收窄。",
    meaning:
      "市場暫時把事件視為 governance / leadership 風險，多過否定整個 AI demand；但 NVDA 作為 AI 交易核心，任何後續融資 / 供應鏈政策變化都會放大波動。",
  },
  {
    topic: "美債息",
    data: "Reuters：2Y yield +13.96bp 至 4.867%，10Y +11.58bp 至 5.105%；CNBC 盤中口徑 2Y 約 4.879%、10Y 約 5.125%、30Y 約 5.449%；Morningstar / Tradeweb 10Y 3pm ET close 5.102%。",
    meaning:
      "債市在 Veterans Day 休市後重新定價更鷹 Fed 路徑；10Y 企回 5% 以上會直接壓 tech multiple、小型股與 REITs。",
  },
  {
    topic: "FedWatch / 加息定價",
    data: "CNBC：12月加息機率 100%，50bp 機率約 13%；Reuters 美元稿稱接近 85% 機率加息；其他即時 FedWatch 轉載顯示 25bp 約 88%-91%、50bp 約 9%-12%，時間點不同所以數字有差異。",
    meaning:
      "方向比精確小數更重要：市場已當 12月加息為 base case，只是在 25bp 與 50bp 之間調整尾端風險。",
  },
  {
    topic: "原油 / 地緣政治",
    data: "CNBC：Brent settle $95.82（+3.3%），WTI settle $88.74（+2.6%）；特朗普稱美國不需要 Iran deal，並提及 Strait，引發供應風險重估。",
    meaning:
      "油價升會推高 inflation premium，亦令 Fed 更難轉鴿；短線利好能源股，但對大市估值是逆風。",
  },
  {
    topic: "美元 / 黃金",
    data: "CNBC / Reuters：DXY 約 103.16-103.18，為約 19 個月高位；CNBC 指 spot gold 約 $3,881.70（-2.7%），Investing.com 21:38 UTC 口徑 spot 約 $3,874.04（-2.9%），gold futures 約 $3,879.30（-3.03%）。",
    meaning:
      "美元與實質利率上行同時壓住非孳息資產；黃金跌破 $3,900，反映避險買盤敵不過 rate shock。",
  },
  {
    topic: "市場廣度",
    data: "Investing.com：NYSE 跌股 2,225 對升股 644；Nasdaq 跌股 2,563 對升股 916。第三方 close snapshot 指 S&P 500 約 123 隻上升、377 隻下跌。",
    meaning:
      "指數跌幅不大，但底層其實偏弱；今日不是健康的 narrow pullback，而是大型股抵銷了更廣泛的沽壓。",
  },
];

const stockRows = [
  [
    "NVDA",
    "$166.19 / -4.34%",
    "CEO 辭任，CFO Colette Kress 暫代；由早段大跌收窄，市場等待 11/17 earnings / 管理層指引。",
  ],
  [
    "AMD",
    "$585.30 / +5.86%",
    "資金由 NVDA 轉向替代 AI accelerator 名稱；William Blair upgrade 亦被市場引用。",
  ],
  [
    "AVGO",
    "$364.36 / +5.54%",
    "AI custom silicon 敘事受惠，成為 mega-cap / S&P 500 領升股之一。",
  ],
  [
    "ANET",
    "$206.63 / +5.06%",
    "AI networking 相關需求仍受追捧，與 AMD/AVGO 同列 S&P 500 領升。",
  ],
  [
    "CRWV",
    "$56.60 / -6.86%",
    "NVDA-linked AI infrastructure 交易受壓，市場重新評估 customer financing / circular AI capex 風險。",
  ],
  [
    "SMCI",
    "$26.99 / -11.30%",
    "AI hardware beta 高波動，跌幅列 S&P 500 後段。",
  ],
  [
    "CTVA",
    "$9.19 / -24.30%",
    "Q3 miss、下修 2026 outlook、Brazil 農化市場壓力，拖累 Materials。",
  ],
  ["GPN", "$88.19 / -12.01%", "私募收購談判終止相關報道後急跌。"],
  [
    "GOOGL",
    "$298.70 / +1.79%",
    "Mag 7 中較強，市場關注 custom AI chips / Anthropic exposure。",
  ],
  [
    "TSLA",
    "$397.45 / +1.69%",
    "跑贏大市，部分報道指與 SPCX merger talks 有進展，但需等官方確認。",
  ],
  [
    "AAPL / MSFT / AMZN / META",
    "$354.88 -0.21% / $523.00 +0.36% / $267.44 +0.48% / $623.61 -0.82%",
    "大型科技表現分化，幫 Nasdaq 抵銷部分 NVDA 壓力。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$71,499.35",
    "-4.22%",
    "由 11/11 21:00 UTC $74,648.01 回落；risk-off 與美元強拖累。",
  ],
  [
    "ETHUSDT",
    "$2,016.88",
    "-3.11%",
    "較 11/11 同時間 $2,081.70 下跌，但跌幅較 BTC / SOL 稍細。",
  ],
  [
    "SOLUSDT",
    "$81.41",
    "-4.18%",
    "較 11/11 同時間 $84.96 下跌，beta 屬性仍高。",
  ],
];

const watchList = [
  "NVDA 11/17 earnings、interim CEO Colette Kress 對供應、customer financing、China exposure 的說法。",
  "10Y 是否連續企穩 5.10% 以上；若 5.00% 變支持，科技估值壓力會更持久。",
  "Brent $96-$100 區間：若地緣風險推油價再升，FedWatch 的 50bp 機率可能再抬頭。",
  "S&P 500 7,550 / Nasdaq 25,300 / Russell 2,800 的收市防線；小型股若跌穿，廣度會更差。",
  "Friday PPI：CNBC 指市場等候 October PPI，若高過預期，債息和美元可能再推高。",
];

function Tone({ children, tone }: { children: React.ReactNode; tone: string }) {
  return <span className={`tone ${tone}`}>{children}</span>;
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section">
      <h2>
        <span>{number}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function USCloseBrief20261112() {
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
          {reportDate} 收市｜{publishedAt}｜NVDA 事件、油價急彈、10Y 重上 5%
          令大市溫和收低，但 AI 交易內部分化未完全崩。
        </div>
        <div className="hero-grid">
          <div className="hero-card">
            <span>S&P 500</span>
            <b>7,592.40</b>
            <Tone tone="red">-0.35%</Tone>
          </div>
          <div className="hero-card">
            <span>10Y Treasury</span>
            <b>約 5.10%</b>
            <Tone tone="amber">重上 5%</Tone>
          </div>
          <div className="hero-card">
            <span>BTC 4pm ET</span>
            <b>$71,499.35</b>
            <Tone tone="red">-4.22%</Tone>
          </div>
        </div>
      </section>

      <Section number="01" title="30秒重點">
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
                      row.change.includes("-") ? "tone red" : "tone green"
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
          <h3>點解跌但無 panic？</h3>
          <ul>
            <li>
              NVDA 事件係震央，但 Reuters 指市場見到 AMD、Broadcom
              等競爭者上升，令「AI demand 完蛋」的解讀被削弱。
            </li>
            <li>
              債息同油價同時向上，令估值與通脹兩條線一齊加壓；Russell 2000
              跑輸就是利率壓力最直接的反映。
            </li>
            <li>
              S&P 500
              收窄早段跌幅，代表指數層面仍有買盤；但廣度差，升跌股比例並不靚。
            </li>
          </ul>
          <p className="note">
            關鍵來源：AP / Reuters / CNBC / Investing.com close reports。
          </p>
        </Section>
      </div>

      <Section number="04" title="板塊熱度圖與紅綠燈">
        <table>
          <thead>
            <tr>
              <th>板塊</th>
              <th>日變幅</th>
              <th>紅綠燈</th>
              <th>白話解讀</th>
            </tr>
          </thead>
          <tbody>
            {sectorRows.map(([sector, change, status, read]) => (
              <tr key={sector}>
                <td>{sector}</td>
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
        <p className="note">
          板塊數據採 Select Sector SPDR ETF / 第三方 close snapshot 交叉；Yahoo
          ETF 日線在本次抓取時部分尚未落最終 close，因此以有完整 close 的 sector
          snapshot 為主，並以能源領先、材料最弱這個共同結論呈現。
        </p>
      </Section>

      <Section number="05" title="宏觀白話版">
        <table>
          <thead>
            <tr>
              <th>主題</th>
              <th>數據 / 來源口徑</th>
              <th>代表意思</th>
            </tr>
          </thead>
          <tbody>
            {macroRows.map((row) => (
              <tr key={row.topic}>
                <td>
                  <b>{row.topic}</b>
                </td>
                <td>{row.data}</td>
                <td>{row.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section number="06" title="重點股票">
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>收市 / 變幅</th>
              <th>點睇</th>
            </tr>
          </thead>
          <tbody>
            {stockRows.map(([ticker, move, read]) => (
              <tr key={ticker}>
                <td>
                  <b>{ticker}</b>
                </td>
                <td>{move}</td>
                <td>{read}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <div className="layout">
        <Section number="07" title="財報與事件焦點">
          <ul>
            <li>
              NVDA：CEO 離任與 interim CEO 安排是全日最大事件；11/17 earnings
              會成為市場檢驗 AI spend、China exposure、customer financing
              的下一個關卡。
            </li>
            <li>
              CSCO：regular session +1.24%，Investing.com / closing snapshot 指
              after-hours 因 beat-and-raise quarter 再升約 3%。
            </li>
            <li>
              CTVA：Q3 miss 與 2026 outlook 下修，Brazil
              農化需求轉弱，令股份跌至 all-time low。
            </li>
            <li>
              NBIS / CRWV / SMCI：AI infrastructure / neocloud beta 對 NVDA
              governance 事件更敏感，今日回撤較深。
            </li>
          </ul>
        </Section>

        <Section number="08" title="技術位與市場結構">
          <ul>
            <li>
              S&P 500：7,550 是短線防線，7,650 附近是今日反彈受阻區；若跌穿
              7,550，會回看 7,500。
            </li>
            <li>
              Nasdaq Composite：25,300 附近要守，否則 Wednesday 的 AI rebound
              會被市場視為 one-day bounce。
            </li>
            <li>
              Russell 2000：2,800
              幾乎失守，若下個交易日不能收復，小型股風險胃納會明顯轉差。
            </li>
            <li>
              VIX：18.7 仍未突破 20；若 VIX 企上 20 同時 10Y 企上
              5.1%，de-risking 會加快。
            </li>
          </ul>
        </Section>
      </div>

      <Section
        number="09"
        title="BTC / ETH / SOL（Binance 4:00pm ET 附近價格）"
      >
        <table>
          <thead>
            <tr>
              <th>Crypto</th>
              <th>2026-11-12 21:00 UTC close</th>
              <th>較 11/11 同時間</th>
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
          口徑：Binance Vision public data API 1-minute klines；美國冬令時間美股
          4:00pm ET = 21:00 UTC。直接 Binance API 在此環境受限，所以採 Binance
          Vision 公共數據端點。
        </p>
      </Section>

      <Section number="10" title="數據衝突 / 口徑說明">
        <ul>
          <li>
            VIX：Yahoo chart 顯示 18.70（+6.92%），Investing.com 報
            18.69（+6.86%）；差異屬四捨五入 / tick 口徑，本報告用 18.69-18.70
            區間。
          </li>
          <li>
            美債：Reuters、CNBC、Morningstar / Tradeweb 的 timestamp
            不同；方向一致是 10Y 重上 5.10% 附近，2Y 升至約 4.86%-4.88%。
          </li>
          <li>
            FedWatch：CME FedWatch 即時機率隨期貨跳動，報道見 25bp 約
            85%-91%、50bp 約 9%-15%；本報告強調「12月加息近乎 fully priced」。
          </li>
          <li>
            黃金：spot、futures、5pm ET close 不同；CNBC spot 約
            $3,881.70、Investing spot 約 $3,874.04、futures 約
            $3,879.30，結論同樣是跌約 2.7%-3.0%。
          </li>
          <li>
            Sector ETF：Yahoo chart API 今次對多數 ETF 回傳 11/12
            open/high/low/volume 但 close 尚未 finalized，因此 sector 排名採
            TheTrading.Tools / close snapshot，SOXX 另以 StockAnalysis close
            佐證。
          </li>
        </ul>
      </Section>

      <div className="layout">
        <Section number="11" title="下個交易日觀察清單">
          <ul>
            {watchList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section number="12" title="操作提示與最終觀點">
          <p>
            今日大市跌幅細，但內部質素麻麻：小型股、廣度、Materials /
            Industrials / Financials 都偏弱。短線策略唔適合盲目追高 AI
            beta；如果要做反彈，要等 NVDA headline risk 消化、10Y 停止上行、S&P
            500 守到 7,550。
          </p>
          <p>
            最終觀點：市場未進入 panic，但已重新進入「headline + rates +
            oil」主導模式。 Energy
            可以受惠油價，但油價越高，對整體股市越係通脹稅；AI 交易則要分清
            NVDA-specific risk 同真正 demand destruction。
          </p>
          <div>
            <span className="pill">偏謹慎</span>
            <span className="pill">等 PPI</span>
            <span className="pill">盯 10Y 5.10%</span>
            <span className="pill">NVDA 11/17</span>
          </div>
        </Section>
      </div>

      <section className="section risk">
        <h2>
          <span>REF</span>來源連結與免責聲明
        </h2>
        <div className="source-list">
          {sources.map((source) => (
            <div key={source.url}>
              <a href={source.url}>{source.name}</a>
            </div>
          ))}
        </div>
        <p className="note">
          報告撰寫原則：關鍵事實採 AP / Reuters / CNBC / Yahoo / Investing.com /
          Morningstar / CME / Binance Vision 等來源交叉；若數據衝突，已在第 10
          部分標示並優先採更權威或更接近收市時間的來源。
        </p>
        <p>{disclaimer}</p>
      </section>
    </main>
  );
}
