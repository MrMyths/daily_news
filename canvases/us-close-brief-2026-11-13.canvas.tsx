import React from "react";

const reportDate = "2026-11-13";
const publishedAt =
  "香港時間 2026-11-16 09:03（週一更新；數據截至美股 11/13 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Friday 11/13/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-12c1e8155fb85c3c7b09e058ed6d3c74",
  },
  {
    name: "AP News - Stocks fall but Wall Street notches a winning week",
    url: "https://apnews.com/article/stocks-markets-ai-us-oil-f8edd0eeb1494d4d2584715686c5e619",
  },
  {
    name: "CNBC - Stock market today: Live updates for Nov. 13, 2026",
    url: "https://www.cnbc.com/2026/11/12/stock-market-today-live-updates.html",
  },
  {
    name: "Reuters via Yahoo Finance - Stocks mostly ease with tech, Nvidia concerns",
    url: "https://finance.yahoo.com/markets/stocks/articles/stocks-recover-nvidia-whiplash-dollar-015858641.html",
  },
  {
    name: "CNBC - 10-year Treasury yield moves to 5.17%",
    url: "https://www.cnbc.com/2026/11/13/treasury-yields-fed-rates.html",
  },
  {
    name: "BLS - PPI Latest Numbers",
    url: "https://www.bls.gov/ppi/latest-numbers.htm",
  },
  {
    name: "CNBC - PPI inflation report October 2026",
    url: "https://www.cnbc.com/2026/11/13/ppi-inflation-report-october-2026.html",
  },
  {
    name: "Newsquawk - US Market Wrap Nov. 13, 2026",
    url: "https://www.newsquawk.com/headlines/us-market-wrap-tech-leads-losses-hawkish-fed-bets-trimmed-on-soft-headline-ppi",
  },
  {
    name: "CNBC - Nvidia transition / market cap",
    url: "https://www.cnbc.com/2026/11/13/nvidia-nvda-stock-jensen-huang-transition.html",
  },
  {
    name: "CNBC - Stocks moving the most today",
    url: "https://www.cnbc.com/2026/11/13/stocks-moving-the-most-today-live-updates.html",
  },
  {
    name: "CNBC - Stock market next week outlook",
    url: "https://www.cnbc.com/2026/11/13/stock-market-next-week-outlook-for-nov-16-20-2026.html",
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
  "美股星期五偏弱收市但全星期仍反彈：Dow 52,347.55（+50.46 / +0.10%）、S&P 500 7,561.67（-30.73 / -0.40%）、Nasdaq 25,136.27（-229.82 / -0.91%），Russell 2000 2,790.49（-0.31%）。",
  "主線仍然係 AI / NVDA 後續風險：NVDA 再跌 2.01%，SOX -3.43%、SOXX -3.67%；AMD、AVGO、DELL、CRWV 同 ARM 都明顯受壓。",
  "但大市不是全面 risk-off：Dow 微升、Defensives / Energy / Financials 表現較好，S&P 500 全星期仍升約 2.5%、Nasdaq 約 +2.3%、Dow 約 +2.1%。",
  "PPI 低過預期但仍熱：BLS / CNBC 指 October final demand PPI +0.3% m/m、+6.5% y/y，年率為 2022 年 11 月以來最高，令 Fed 12月加息仍被市場視為接近板上釘釘。",
  "10Y 美債保持 5% 以上：CNBC 指 10Y 5.143%、2Y 4.859%、30Y 5.472%；Newsquawk settlement 口徑 10Y 5.153%、2Y 4.872%。",
  "Crypto 用 Binance Vision 2026-11-13 21:00 UTC 1m close（美股 4:00pm ET）計：BTC $68,884.01（較 11/12 同時間 -3.66%）、ETH $1,947.59（-3.44%）、SOL $79.92（-1.83%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "52,347.55",
    change: "+50.46 / +0.10%",
    read: "Dow 受 defensive / value 權重支持微升，和 Nasdaq / chip weakness 形成明顯分化。",
    source: "AP / CNBC / Reuters-Yahoo / Yahoo chart",
  },
  {
    asset: "S&P 500",
    close: "7,561.67",
    change: "-30.73 / -0.40%",
    read: "早段受 PPI 較預期低刺激曾反彈，但 AI 與長債息壓力令指數倒跌；全星期仍 +約 2.5%。",
    source: "AP / CNBC / Reuters-Yahoo / Yahoo chart",
  },
  {
    asset: "Nasdaq Composite",
    close: "25,136.27",
    change: "-229.82 / -0.91%",
    read: "科技與半導體沽壓集中，Nasdaq 跑輸；CNBC 指 Nasdaq 全星期仍 +約 2.3%。",
    source: "AP / CNBC / Reuters-Yahoo / Yahoo chart",
  },
  {
    asset: "Russell 2000",
    close: "2,790.49",
    change: "-8.57 / -0.31%",
    read: "小型股較 11/12 跌幅細，但仍受 10Y 高企與風險胃納下降壓住。",
    source: "Yahoo chart；Newsquawk / Globicus rounded close 2,790-2,791",
  },
  {
    asset: "VIX",
    close: "19.30",
    change: "+0.60 / +3.21%",
    read: "波動率升近 20 但未爆上，代表市場仍是有壓力、未到恐慌模式。",
    source: "Yahoo chart / Globicus",
  },
  {
    asset: "Philadelphia SOX / SOXX",
    close: "SOX 10,146.32；SOXX $149.30",
    change: "SOX -3.43%；SOXX -3.67%",
    read: "半導體成全日震央，反映 NVDA succession / AI financing risk 正在擴散到 chip beta。",
    source: "Yahoo chart / CNBC",
  },
];

const sectorRows = [
  [
    "Consumer Staples / XLP",
    "+1.42%",
    "最強",
    "資金由高 beta AI 轉入較防守板塊；XLP 收 $92.35。",
  ],
  [
    "Communication Services / XLC",
    "+1.05%",
    "強",
    "META +2.90% 撐起板塊，抵消科技硬件沽壓。",
  ],
  [
    "Energy / XLE",
    "+0.98%",
    "強",
    "油價雖然接近平收，但地緣風險 premium 仍在；能源延續相對強勢。",
  ],
  [
    "Financials / XLF",
    "+0.81%",
    "偏強",
    "長端利率高企支持部分銀行 NIM 敘事，亦受益於資金輪動。",
  ],
  ["Health Care / XLV", "+0.54%", "防守", "防守輪動受惠，跑贏大市。"],
  ["Utilities / XLU", "+0.52%", "防守", "即使 10Y 高企，仍有避險資金流入。"],
  [
    "Real Estate / XLRE",
    "+0.02%",
    "中性",
    "高息環境壓住 REITs，但防守輪動令跌幅有限。",
  ],
  ["Materials / XLB", "-0.21%", "偏弱", "週四 CTVA 衝擊後板塊仍未完全修復。"],
  [
    "Industrials / XLI",
    "-0.39%",
    "偏弱",
    "FAA ground stop 尾市拖累航空相關情緒。",
  ],
  [
    "Consumer Discretionary / XLY",
    "-0.40%",
    "偏弱",
    "TSLA -1.82%，高 beta 消費未能承接。",
  ],
  [
    "Technology / XLK",
    "-2.01%",
    "最弱",
    "NVDA、AMD、AVGO、CSCO 等同日下跌，AI / networking beta 壓力集中。",
  ],
  [
    "Semis / SOXX",
    "-3.67%",
    "高壓區",
    "比 XLK 更弱，說明壓力不是一般科技股，而是半導體鏈條。",
  ],
];

const macroRows = [
  {
    topic: "PPI / 通脹",
    data: "BLS：October final demand PPI seasonally adjusted +0.3% m/m，NSA +6.5% y/y；CNBC 指市場原預期 +0.4%，年率是 2022 年 11 月以來最高。Core PPI（CNBC 口徑）+0.3%，貼近預期。",
    meaning:
      "headline 低過預期令早段有 relief rally，但 6.5% 年率太熱，市場難以轉向降息敘事；通脹仍是估值天花板。",
  },
  {
    topic: "美債息",
    data: "CNBC 4:08pm ET：10Y +4bp 至 5.143%，日內高 5.174%；2Y 4.859%，30Y 5.472%。Newsquawk settlement：2Y 4.872%、10Y 5.153%、30Y 5.481%。",
    meaning:
      "10Y 穩企 5% 以上，是壓住科技 multiple、REITs、小型股的核心逆風；PPI 沒有足夠弱到令長端放心。",
  },
  {
    topic: "FedWatch / 加息定價",
    data: "CNBC 引 CME FedWatch：12月加息機率 100%，25bp 約 89%、50bp 約 14%；Newsquawk 以 futures implied 量度顯示 Dec 約 27.1bp，較前一日 28.3bp 略降。",
    meaning:
      "市場仍視 12月加息為 base case；分歧在 25bp 還是 50bp，PPI 令 50bp 尾端風險稍降但未消失。",
  },
  {
    topic: "美元 / 匯市",
    data: "Reuters/Yahoo：Dollar index +0.17% 至 103.40，創 2025 年 4 月以來高位；Globicus / Newsquawk 口徑約 103.41。",
    meaning:
      "高息與鷹派 Fed speak 支持美元，對跨國企業 earnings translation、黃金與 crypto 都是逆風。",
  },
  {
    topic: "原油 / 地緣政治",
    data: "CNBC：WTI Dec settle $88.56（-0.2%）、Brent $95.84（+0.02%）；Newsquawk 同樣記 WTI $88.56、Brent $95.84，並指本週油價回落但中東消息仍牽動風險 premium。",
    meaning:
      "油價日內接近平收，但絕對水平仍高；能源股可受惠，對 PPI / CPI 的 second-round effect 則是不利。",
  },
  {
    topic: "黃金 / 貴金屬",
    data: "Yahoo/Barchart：Dec COMEX gold +$1.00（+0.03%）；Globicus spot/market table 約 $3,888（+0.06%）。",
    meaning:
      "金價由早段壓力回穩，反映 PPI relief 有少量幫助，但美元創高限制上行。",
  },
  {
    topic: "市場廣度 / 風格",
    data: "CNBC / AP：AI 相關股份拖累 Nasdaq；Dow 微升，defensives、energy、financials 較強。Reuters/Yahoo 指 NYSE Arca airline index 尾市跌 1.4%，因 FAA 全國 departure ground stop 消息。",
    meaning:
      "這不是單純大市崩盤，而是 AI beta 去槓桿 + 防守輪動；若下週 NVDA earnings 穩住，指數仍有反彈基礎。",
  },
];

const stockRows = [
  [
    "NVDA",
    "$162.85 / -2.01%",
    "Jensen Huang 辭任後第二日仍受壓；CNBC 指市值跌穿 $4T，單週 -12.75%，11/17 earnings / succession plan 是下個大考。",
  ],
  [
    "AMD",
    "$534.06 / -8.75%",
    "週四跑贏後星期五急回，顯示資金未必只是由 NVDA 轉倉，而是整條 AI accelerator beta 降風險。",
  ],
  [
    "AVGO",
    "$347.01 / -4.76%",
    "AI custom silicon 仍有長線敘事，但短線跟隨半導體估值重估。",
  ],
  [
    "SOXX / SOX",
    "$149.30 -3.67% / 10,146.32 -3.43%",
    "半導體指標明顯跑輸大市，是全日最需要留意的 risk cluster。",
  ],
  [
    "AAPL",
    "$356.27 / +0.39%",
    "CNBC moving stocks 指 Apple 受惠於避開高成本 AI capex 敘事，成為 Mag 7 內相對 safe haven。",
  ],
  [
    "META",
    "$641.69 / +2.90%",
    "Communication Services 主要支撐，與硬件 / chip beta 分化。",
  ],
  [
    "CSCO",
    "$95.64 / -6.24%",
    "儘管前一晚業績 beat-and-raise，CNBC 指 networking tech giant 下跌，市場更關心 AI hardware supply chain 壓力。",
  ],
  [
    "DELL",
    "$344.53 / -7.18%",
    "AI server beta 受壓，反映投資者重新審視 AI capex / margin 質素。",
  ],
  [
    "CRWV",
    "$53.13 / -6.13%",
    "Neocloud / AI infrastructure 高 beta 名稱繼續被沽。",
  ],
  [
    "ARM",
    "$190.53 / -4.63%",
    "CNBC 指 Nvidia board approached Arm CEO Rene Haas 的報道令 ARM 成為 succession headline 相關交易。",
  ],
  [
    "MSFT / AMZN / GOOGL / TSLA",
    "$523.88 +0.17% / $266.66 -0.29% / $295.77 -0.98% / $390.22 -1.82%",
    "Mega-cap 表現分化；雲與 AI capex exposure 較高者仍被市場打折。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$68,884.01",
    "-3.66%",
    "由 11/12 21:00 UTC $71,499.35 回落；美元強、科技 risk-off 對 crypto beta 不利。",
  ],
  [
    "ETHUSDT",
    "$1,947.59",
    "-3.44%",
    "較 11/12 同時間 $2,016.88 下跌，仍跟隨風險資產降槓桿。",
  ],
  [
    "SOLUSDT",
    "$79.92",
    "-1.83%",
    "較 11/12 同時間 $81.41 下跌，但跌幅小過 BTC / ETH。",
  ],
];

const watchList = [
  "NVDA 11/17 earnings：interim CEO Colette Kress、succession search、AI financing / customer commitments 會是全場焦點。",
  "10Y 5.10%-5.17% 區間：若下週企穩甚至再上，Nasdaq 反彈空間會受限。",
  "S&P 500 7,500 / 7,560：11/13 低位 7,499.40 是短線防線，收復 7,600 才算修復。",
  "Nasdaq 25,000：若失守，市場會把今週反彈視為 bear-market bounce。",
  "PPI 後 Fed speak：若更多官員淡化 soft headline PPI，50bp 尾端風險會重新升溫。",
  "Anthropic IPO / AI calendar：CNBC 指下週 AI 交易還有 Anthropic IPO 與 NVDA earnings，會測試市場承接力。",
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

export default function USCloseBrief20261113() {
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
          {reportDate} 收市｜{publishedAt}｜AI / 半導體繼續降溫，PPI
          低過預期但年率仍熱，Dow 靠防守輪動微升。
        </div>
        <div className="hero-grid">
          <div className="hero-card">
            <span>S&P 500</span>
            <b>7,561.67</b>
            <Tone tone="red">-0.40%</Tone>
          </div>
          <div className="hero-card">
            <span>10Y Treasury</span>
            <b>5.14%-5.15%</b>
            <Tone tone="amber">仍高於 5%</Tone>
          </div>
          <div className="hero-card">
            <span>BTC 4pm ET</span>
            <b>$68,884.01</b>
            <Tone tone="red">-3.66%</Tone>
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
          <h3>點解 PPI 低過預期，大市仍跌？</h3>
          <ul>
            <li>
              PPI headline +0.3% 低過 +0.4% 預期，早段有 relief rally；但 6.5%
              y/y 太熱，Fed 12月加息仍被市場視為確定事件。
            </li>
            <li>
              NVDA 事件由單一股份擴散到 chip / AI financing：SOXX -3.67%、AMD
              -8.75%、AVGO -4.76%，拖低 Nasdaq。
            </li>
            <li>
              Dow 能微升，反映資金不是全面撤出股票，而是由 AI beta 轉入
              Staples、Energy、Financials、Health Care 等相對穩定板塊。
            </li>
            <li>
              尾市 FAA national departure ground stop 消息拖累航空股，令
              Industrials 情緒轉弱。
            </li>
          </ul>
          <p className="note">
            關鍵來源：AP / CNBC / Reuters via Yahoo / BLS / Yahoo chart。
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
          板塊數據以 Yahoo Finance chart API 的 2026-11-13 Select Sector SPDR
          ETF close 對比 11/12 close 計算；SOXX / SOX
          另列，因半導體是今日主要風險來源。
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
              NVDA：11/17 after close earnings 是下週第一大 event；市場要聽 AI
              demand、China exposure、customer financing 及 permanent CEO search
              的路線圖。
            </li>
            <li>
              Anthropic IPO：CNBC 指下週可能開始交易，會為 AI valuation
              提供新的公開市場溫度計。
            </li>
            <li>
              CSCO：雖然季度 beat-and-raise，但股票 -6.24%，說明 networking /
              enterprise tech 在 AI selloff 下仍被減倉。
            </li>
            <li>
              Apple：CNBC moving stocks 指 AAPL 被視為較少暴露於高成本 AI
              capex，股價創 intraday record 後收市仍升。
            </li>
          </ul>
        </Section>

        <Section number="08" title="技術位與市場結構">
          <ul>
            <li>
              S&P 500：日低 7,499.40 是短線第一支持；收市 7,561.67
              未算失守，但需要重上 7,600 才叫修復。
            </li>
            <li>
              Nasdaq Composite：25,000 是心理位；若 NVDA earnings 前再穿，AI
              去槓桿會由單日調整變成趨勢風險。
            </li>
            <li>
              Russell 2000：2,790 附近代表 small caps 仍弱；高息環境不利
              duration / credit-sensitive 名稱。
            </li>
            <li>
              VIX：19.30 已接近 20，若下週突破 20 並伴隨 10Y 新高，de-risking
              會加快。
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
              <th>2026-11-13 21:00 UTC close</th>
              <th>較 11/12 同時間</th>
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
          4:00pm ET = 21:00 UTC。本次採 21:00:00 UTC 該分鐘 kline close（close
          time 21:00:59.999 UTC）。直接 Binance API 在此環境受限，所以採 Binance
          Vision 公共數據端點。
        </p>
      </Section>

      <Section number="10" title="數據衝突 / 口徑說明">
        <ul>
          <li>
            三大指數：AP、CNBC、Reuters/Yahoo、Yahoo chart 對 Dow 52,347.55、S&P
            500 7,561.67、Nasdaq 25,136.27 一致。
          </li>
          <li>
            Russell 2000：Yahoo chart close 2,790.49；Newsquawk / Globicus
            採四捨五入口徑顯示約 2,790-2,791，本報告用 Yahoo chart 精確數字。
          </li>
          <li>
            美債：CNBC 為即時新聞頁 4:08pm ET 口徑；Newsquawk 為期貨 /
            settlement market wrap，方向一致但小數不同，本報告列區間。
          </li>
          <li>
            原油：CNBC / Newsquawk settle 為 WTI $88.56、Brent $95.84；其他
            market table 可能用不同合約 / timestamp，會見到 WTI $88.9、Brent
            $96.1 附近。
          </li>
          <li>
            FedWatch：CME 即時機率會隨 futures tick 變動；CNBC 報 25bp 約
            89%、50bp 約 14%，Newsquawk 以 implied bps 顯示 Dec 約 27.1bp。
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
            今日最重要不是 S&P 500 -0.40%，而是市場風格切換：AI / semis
            被減倉，defensives、energy、financials 接力。若你有高 beta AI
            倉位，下週 NVDA earnings 前不宜盲目加槓桿；反而要先等 SOXX / NVDA
            停止創新低。
          </p>
          <p>
            最終觀點：大市短線仍未壞晒，因為 Dow 微升、VIX 未過 20、S&P
            全星期仍有 decent rebound；但 10Y 高於 5%、PPI 年率 6.5%、NVDA
            headline risk 未完，意味任何反彈都要睇成交與廣度確認，唔好只靠一日
            bounce 去判斷風險解除。
          </p>
          <div>
            <span className="pill">AI beta 降風險</span>
            <span className="pill">盯 NVDA 11/17</span>
            <span className="pill">10Y 5.10%-5.17%</span>
            <span className="pill">S&P 7,500 防線</span>
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
          報告撰寫原則：關鍵事實採 AP / Reuters / CNBC / Yahoo Finance chart /
          BLS / CME / Newsquawk / Binance Vision 等來源交叉；若數據衝突，已在第
          10 部分標示並優先採更權威或更接近收市時間的來源。
        </p>
        <p>{disclaimer}</p>
      </section>
    </main>
  );
}
