import React from "react";

const reportDate = "2026-09-10";
const publishedAt = "香港時間 2026-09-11 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP / WTOP - How major US stock indexes fared Thursday 9/10/2026",
    url: "https://wtop.com/national/2026/09/how-major-us-stock-indexes-fared-thursday-9-10-2026/",
  },
  {
    name: "Reuters via MarketScreener - S&P 500 ends down as Treasury yields rise",
    url: "https://www.marketscreener.com/news/s-p-500-ends-down-as-treasury-yields-rise-and-traders-fret-about-inflation-ce785bded08bff27",
  },
  {
    name: "MarketWatch - Stocks end lower as oil prices climb above $100",
    url: "https://www.marketwatch.com/livecoverage/stock-market-today-dow-sp500-nasdaq-up-oil-calmer-treasury-steady-producer-inflation-oracle-earnings/card/u-s-stocks-end-lower-as-oil-prices-climb-above-100-and-treasury-yields-jump-ekBpGoHbafkwzw5WQKEh",
  },
  {
    name: "CNBC - Stock market today live updates",
    url: "https://www.cnbc.com/2026/09/10/stock-market-today-live-updates.html",
  },
  {
    name: "CNBC - 10-year Treasury yield tops 4.9%",
    url: "https://www.cnbc.com/2026/09/10/us-treasurys-bonds-yield.html",
  },
  {
    name: "Kiplinger - Stocks Drop as Treasury Yields Hit New Highs",
    url: "https://www.kiplinger.com/investing/stocks/stocks-drop-as-treasury-yields-hit-new-highs-stock-market-today",
  },
  {
    name: "Newsquawk - US Market Wrap: stocks and Treasuries sold, oil surges",
    url: "https://www.newsquawk.com/headlines/us-market-wrap-stocks-and-treasuries-sold-while-oil-surges-as-middle-east-tensions-escalate",
  },
  {
    name: "ETF Action - Oil Spikes on Iran Strikes as Equities Slide",
    url: "https://www.etfaction.com/oil-spikes-on-iran-strikes-as-equities-slide/",
  },
  {
    name: "BLS - Producer Price Index release",
    url: "https://www.bls.gov/news.release/ppi.nr0.htm",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Reuters - Apple joins foldable phone race with iPhone Duo",
    url: "https://www.reuters.com/business/retail-consumer/apple-expected-unveil-first-folding-phone-with-new-ceo-ternus-command-2026-09-09/",
  },
  {
    name: "Oracle / StockTitan - Oracle Q1 FY27 8-K filing summary",
    url: "https://www.stocktitan.net/sec-filings/ORCL/8-k-oracle-corp-reports-material-event-f6fd400760ec.html",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const keyPoints = [
  "美股連跌第 4 日：Dow 52,064.10（-316.56 / -0.60%）、S&P 500 7,591.70（-44.66 / -0.58%）、Nasdaq 26,081.72（-171.62 / -0.65%）、Russell 2000 2,890.95（-30.29 / -1.04%）。",
  "今日主線好清楚：油價急升、PPI 顯示通脹仍黏、美債息抽高，令市場重新計下週 FOMC 會否加息；MarketWatch/CNBC 均指三大指數錄得連續第 4 日下跌。",
  "Reuters 口徑 S&P 500 收 7,591.75，AP/MarketWatch 為 7,591.70；差異只有 0.05 點，本文大市表採 AP/MarketWatch 口徑，並於來源註明 Reuters 差異。",
  "板塊只有 Energy 明顯有綠燈：ETF Action/StockTi 顯示 XLE +0.83%；但高油價同時推高通脹預期，對 growth、REITs、小型股同可選消費都是壓力。",
  "SOXX 今日數據有來源差異：Gate 報半導體 ETF -2.44%，Exa 行情頁顯示 SOXX close $517.43、日內跌幅約 -2.74%；本文寫作 -2.4% 至 -2.7% 區間，避免假精準。",
  "宏觀方面，Kiplinger 指 2Y 收約 4.579%、10Y 約 4.963%；Newsquawk 收市表則為 2Y 4.565%、10Y 4.957%、30Y 5.373%，方向一致都是 bear flattening。",
  "Crypto 採 Binance Vision 2026-09-10 20:00 UTC 1m close（即美股 4:00pm ET 附近）：BTC $77,180.01（較 9/9 20:00 UTC -1.37%）、ETH $2,463.62（-0.10%）、SOL $99.83（-2.48%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "52,064.10",
    change: "-316.56 / -0.60%",
    read: "藍籌連跌，能源以外資金防守不足；高息、高油價令傳統 cyclical 都有壓力。",
  },
  {
    asset: "S&P 500",
    close: "7,591.70",
    change: "-44.66 / -0.58%",
    read: "AP/MarketWatch 口徑；Reuters/MarketScreener 為 7,591.75，差距極細，主要結論不變。",
  },
  {
    asset: "Nasdaq Composite",
    close: "26,081.72",
    change: "-171.62 / -0.65%",
    read: "Apple 逆市升都救不到半導體與 AI capex 名字下跌；估值久期受 10Y 接近 5% 壓住。",
  },
  {
    asset: "Russell 2000",
    close: "2,890.95",
    change: "-30.29 / -1.04%",
    read: "小型股對短端息同信貸條件最敏感；Fed 加息機率升，小盤 beta 先被減。",
  },
  {
    asset: "VIX",
    close: "17.32（Cboe 歷史數據口徑，盤中一度約 18.11）",
    change: "約 +0.86 / +5.2% vs 9/9 的 16.46",
    read: "仍未去到恐慌區，但 CPI 前 event risk 有升溫；FRED/Cboe 公開頁面在截數時存在更新滯後，故用作參考而非過度解讀。",
  },
];

const sectorRows = [
  [
    "Energy / XLE",
    "$65.31 / +0.83%",
    "最強",
    "油價重上 $100 以上，能源股相對受惠；但這個綠燈對大市其實是通脹紅燈。",
  ],
  [
    "Technology / XLK",
    "$187.87 / 約 0.00%",
    "中性",
    "Apple 撐住指數權重，但 semis、software 與高估值 AI 名字受債息壓力。",
  ],
  [
    "Health Care / XLV",
    "$166.58 / -0.33%",
    "微弱",
    "醫療跌幅較細，但未見大規模防守資金泊入。",
  ],
  [
    "Financials / XLF",
    "$57.06 / -0.42%",
    "微弱",
    "長息升不代表銀行全線贏，因前端加息預期和信貸憂慮同步升。",
  ],
  [
    "Communication Services / XLC",
    "$110.83 / -0.62%",
    "弱",
    "Meta 回吐、Alphabet 續弱，AI 敘事未能全面抵消估值壓力。",
  ],
  [
    "Materials / XLB",
    "$51.39 / -1.06%",
    "弱",
    "商品 beta 今日未能跟能源上升，高息和增長憂慮壓住材料。",
  ],
  [
    "Real Estate / XLRE",
    "$43.41 / -1.12%",
    "弱",
    "10Y 接近 5%、30Y 升穿 5.3% 一帶，高股息/REITs 相對吸引力下降。",
  ],
  [
    "Consumer Staples / XLP",
    "$83.05 / -1.15%",
    "弱",
    "油價推高家庭成本，防守板塊亦被估值和成本壓力拖低。",
  ],
  [
    "Utilities / XLU",
    "$42.94 / -1.17%",
    "弱",
    "同樣受長債息抽升壓力，defensive yield play 今日不受歡迎。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$112.46 / -1.34%",
    "更弱",
    "高油價等於消費稅，高息壓車貸/信用卡，Amazon、Tesla 類 beta 缺乏買盤。",
  ],
  [
    "Industrials / XLI",
    "$171.79 / -1.51%",
    "最弱",
    "cyclical 降風險最明顯；油價、融資成本同全球供應鏈風險一齊壓工業。",
  ],
  [
    "Semiconductors / SOXX",
    "$517.43 / 約 -2.4% 至 -2.7%",
    "偏弱",
    "半導體不再是避風港；Nvidia、Broadcom 偏弱，資金對 AI capex 回報期更挑剔。",
  ],
];

const macroRows = [
  {
    topic: "PPI / 通脹",
    data: "8 月 headline PPI +0.4% m/m、+5.4% y/y；core ex food & energy +0.2% m/m、+4.6% y/y；ex food/energy/trade services +0.3% m/m、+4.7% y/y。",
    meaning:
      "表面月比合預期，但能源反彈令年比仍高，市場怕 CPI 和 PCE 傳導繼續偏熱。",
  },
  {
    topic: "CPI / 事件風險",
    data: "8 月 CPI 將於 2026-09-11 08:30 ET 公布，是 9 月 FOMC 前最後關鍵通脹輸入之一。",
    meaning:
      "今晚到 CPI 前，指數容易跟債息/油價 headline 走；倉位宜避免過度槓桿。",
  },
  {
    topic: "美債息",
    data: "Kiplinger：2Y 4.579%（+15.2bp）、10Y 4.963%（+12.3bp）；Newsquawk：2Y 4.565%、10Y 4.957%、30Y 5.373%。",
    meaning:
      "前端升更多，是偏鷹式 bear flattening；growth、REITs、小盤都會先被壓估值。",
  },
  {
    topic: "FedWatch / 利率定價",
    data: "CME FedWatch 引用口徑約 71.3% 機率下週加 25bp、28.8% hold；不同時點報道介乎約 61%-74%。",
    meaning:
      "市場由『可能 hold』轉向『加息是 base case』，但 CPI 仍可大幅改變定價。",
  },
  {
    topic: "原油",
    data: "Newsquawk：WTI Oct +$6.43 / +6.7% settle $102.48；Brent Nov +$6.42 / +6.3% settle $107.63。",
    meaning:
      "油價變成今日最大 macro shock；能源股升，但通脹、margin 和消費預期同步惡化。",
  },
  {
    topic: "美元",
    data: "Jin10/Gate 報 DXY 紐約匯市收 99.048（+0.23%）；Newsquawk 指美元受避險與高息支持。",
    meaning:
      "美元不是單日最大驅動，但高息+強美元組合會壓非美收入和商品以外風險資產。",
  },
  {
    topic: "黃金",
    data: "Reuters 報 spot gold 約 $4,385.40、US gold futures 約 $4,427.80；因美元和債息升而回吐。",
    meaning: "地緣風險有支持，但實質利率預期升令黃金不易單邊突破。",
  },
];

const stockRows = [
  [
    "Apple",
    "$326.57 / 約 +3.56%",
    "Reuters 指 Apple 推出 $1,999 iPhone Duo 摺機；市場把它當成產品週期重新加速，成為少數大型科技綠燈。",
  ],
  [
    "Oracle",
    "$152.94 / 約 -5.38%",
    "雖然 Q1 FY27 revenue +30% 至 $19.3B、OCI +121%，但 capex/negative FCF 與 AI 基建融資壓力令股價下挫。",
  ],
  [
    "Nvidia",
    "$218.36 / 約 -2.37%",
    "半導體 ETF 走弱，NVDA 反映市場短線由追 AI beta 轉向審視估值與利率。",
  ],
  [
    "Adobe",
    "$248.83 / 約 -2.37%",
    "software 久期股受 10Y 接近 5% 直接壓估值；AI monetization 未有即時催化。",
  ],
  [
    "Broadcom",
    "$360.83 / 約 -0.97%",
    "AI networking/ASIC 故事仍在，但今日 semis risk-off，強股亦有獲利回吐。",
  ],
  [
    "Meta",
    "$644.38 / 約 -1.42%",
    "昨日 Muse AI agent 後回吐；XLC 未能延續強勢，反映單一 AI 催化難敵 macro 壓力。",
  ],
  [
    "Exxon / Chevron",
    "XOM +2.22%、CVX +1.91%（StockTi sector table）",
    "油價急升直接改善 upstream cash-flow 預期，是今日少數有清晰 earnings tailwind 的位置。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$77,180.01",
    "-1.37%",
    "由 $78,251.41 回落；risk-off 加上美元/債息上行，BTC 未有避險買盤。",
  ],
  [
    "ETH",
    "$2,463.62",
    "-0.10%",
    "幾乎持平但缺乏上攻；beta 較 BTC 高，CPI 前資金觀望。",
  ],
  ["SOL", "$99.83", "-2.48%", "跌穿 $100 心理位，對高 beta crypto 情緒較差。"],
];

const newsItems = [
  "PPI 未能解除通脹憂慮：headline +0.4% m/m、+5.4% y/y，能源反彈令 Fed 不敢太早放鬆。",
  "油價 shock：WTI $102.48、Brent $107.63，市場擔心 Hormuz/Bab al-Mandeb 供應鏈風險延長。",
  "債息 shock：10Y 接近 4.96%、30Y 約 5.37%，高估值資產 discount rate 再上調。",
  "FedWatch 重定價：市場引用 CME 口徑約 71% 押注 9 月加 25bp，較前一日明顯升。",
  "個股分化：Apple 因 iPhone Duo 逆市升，Oracle 因 AI 基建資本開支/FCF 憂慮急跌。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,590 附近是即市收市位；若失 7,550，下一站看 7,500。",
    "上方先看 9/9 收市 7,636，再看 7,660-7,680。",
  ],
  [
    "Nasdaq",
    "26,000 是心理位；跌穿會令 AI/semis beta 再減倉。",
    "反彈需先收回 26,250，否則只是 CPI 前短倉回補。",
  ],
  [
    "10Y yield",
    "4.90%-5.00% 是股市估值壓力區。",
    "若 CPI 後企穩 5% 上方，growth multiple 會再被壓縮。",
  ],
  [
    "WTI crude",
    "$100 已由阻力變成風險線。",
    "只要守在 $100 上方，通脹交易仍會主導盤面。",
  ],
];

const planRows = [
  [
    "短線",
    "CPI 前不宜追高 beta；若有反彈，先睇債息有無回落而不是只睇指數綠色。",
  ],
  [
    "板塊",
    "能源強但已接近過熱，要分清短炒 momentum 與中線通脹壓力；REITs、utilities、small caps 暫時未見底。",
  ],
  [
    "個股",
    "Apple 可觀察產品週期是否帶動上修；Oracle/Nvidia/semis 要等 capex 回報與利率壓力消化。",
  ],
  [
    "Crypto",
    "BTC/ETH/SOL 全部用 20:00 UTC Binance close；CPI 前仍跟 risk assets，未見獨立避險敘事。",
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

export default function USCloseBrief20260910() {
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
          background: linear-gradient(135deg, #7f1d1d 0%, #b91c1c 52%, #111827 100%);
          color: white;
          border-radius: 26px;
          padding: 30px;
          box-shadow: 0 22px 45px rgba(127, 29, 29, 0.25);
        }
        .eyebrow { letter-spacing: 0.12em; text-transform: uppercase; font-size: 13px; opacity: 0.85; }
        h1 { margin: 8px 0 10px; font-size: 44px; line-height: 1.08; }
        .subtitle { font-size: 18px; opacity: 0.94; max-width: 940px; }
        .meta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 18px; }
        .pill { background: rgba(255,255,255,0.16); border: 1px solid rgba(255,255,255,0.32); padding: 8px 12px; border-radius: 999px; font-size: 13px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 18px; }
        .card { background: white; border: 1px solid #e2e8f0; border-radius: 22px; padding: 20px; box-shadow: 0 12px 30px rgba(15, 23, 42, 0.07); break-inside: avoid; }
        .wide { grid-column: 1 / -1; }
        h2 { margin: 0 0 12px; color: #991b1b; font-size: 23px; }
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
          {reportDate} 收市｜油價重上 $100、美債息抽高、PPI 未能降溫；美股連跌第
          4 日，Apple 逆市跑出但 semis 與小型股受壓
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
                  <td className="red">{row.change}</td>
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
            今晚不是 earnings day 主導，而是 macro 重新定價：PPI
            顯示通脹仍黏、WTI/Brent 急升、2Y/10Y/30Y 債息齊抽，市場被迫把 9 月
            FOMC 加息機率推高；估值久期愈長、融資敏感度愈高的資產跌得愈明顯。
          </p>
          <h3>資金點諗</h3>
          <ul>
            <li>
              油價升本來利好能源，但對大市是通脹稅，會壓 consumer、margin 和 Fed
              反應函數。
            </li>
            <li>
              2Y 升幅大過 10Y，代表市場更怕短端政策利率再上；這對小型股和無盈利
              growth 特別不友善。
            </li>
            <li>
              Apple 產品消息可拉動單一 mega-cap，但 semis、software 和 cyclical
              breadth 轉弱，反映不是全面 risk-on。
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
                      className={`tag ${state === "最強" ? "green" : state === "中性" ? "amber" : "red"}`}
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
            Sector proxy 採 ETF Action/StockTi 的 Select Sector SPDR ETF
            口徑；SOXX 因不同行情頁對 close-to-close / intraday move
            有差異，報告用區間表達。
          </p>
        </article>

        <article className="card">
          <h2>5. 五大新聞</h2>
          <ol>
            {newsItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>

        <article className="card">
          <h2>6. 市場熱度圖（文字版）</h2>
          <ul>
            <li>
              <span className="tag green">綠</span> 能源：油價急升，XOM/CVX
              跟上。
            </li>
            <li>
              <span className="tag amber">黃</span>{" "}
              Apple：產品週期獨立催化，但不能代表整個科技板塊轉強。
            </li>
            <li>
              <span className="tag red">紅</span> Semis / software：利率敏感、AI
              capex 回報期被重新審視。
            </li>
            <li>
              <span className="tag red">紅</span> 小型股 / REITs /
              utilities：高債息直接壓估值。
            </li>
            <li>
              <span className="tag red">紅</span>{" "}
              可選消費：油價與信貸成本同時夾擊。
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
                <th>24 小時（對 9/9 20:00 UTC）</th>
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
                  <td className="red">{change}</td>
                  <td>{read}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            口徑：直接 Binance spot API 在此環境曾受地區限制，因此採 Binance
            Vision public data API 1-minute kline；時間點為 2026-09-10 20:00:00
            UTC，即美股正常收市 4:00pm ET 附近。
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
            最終觀點：市場未到恐慌，但已由「估值可以繼續擴張」切換到「每個 macro
            headline 都會影響 discount rate」。CPI
            前反彈不宜太快當轉勢；除非油價或債息回落，否則 index upside
            會被限制。
          </p>
        </article>

        <article className="card wide">
          <h2>12. 來源、口徑與免責聲明</h2>
          <p className="note">
            數據衝突處理：S&P 500 收市 AP/MarketWatch 為
            7,591.70，Reuters/MarketScreener 為 7,591.75；本文用 AP/MarketWatch
            主表，並在文字標示差異。FedWatch 因不同報道截數，約
            61%-74%，本文主用較接近收市的 CME 引用 71.3%。SOXX
            因行情頁口徑差異，報告以 -2.4% 至 -2.7%
            區間表述。若官方頁面在截數時更新滯後，採可靠新聞/行情來源並註明時點。
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
