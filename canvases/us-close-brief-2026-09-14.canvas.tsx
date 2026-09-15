import React from "react";

const reportDate = "2026-09-14";
const publishedAt = "香港時間 2026-09-15 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP / WTOP - How major US stock indexes fared Monday 9/14/2026",
    url: "https://wtop.com/national/2026/09/how-major-us-stock-indexes-fared-monday-9-14-2026/",
  },
  {
    name: "CNBC - Stock market today live updates",
    url: "https://www.cnbc.com/2026/09/14/stock-market-today-live-updates.html",
  },
  {
    name: "CNBC - Cramer: why the market avoided a dramatic sell-off",
    url: "https://www.cnbc.com/2026/09/14/jim-cramer-wall-street-monday-rebound.html",
  },
  {
    name: "CNBC - Not all tech is under fire; defensives and cyber bid",
    url: "https://www.cnbc.com/2026/09/14/not-all-tech-is-under-fire-in-monday-selling-investors-seek-out-defensives.html",
  },
  {
    name: "Reuters via KRRO - Oil settles higher after Saudi strikes stoke supply worries",
    url: "https://krro.com/2026/09/14/oil-prices-climb-over-2-after-strikes-on-saudi-pipeline-and-ships-in-middle-east/",
  },
  {
    name: "BLS - Consumer Price Index News Release, August 2026",
    url: "https://www.bls.gov/news.release/archives/cpi_09112026.htm",
  },
  {
    name: "U.S. Treasury - Daily Treasury Par Yield Curve Rates",
    url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve",
  },
  {
    name: "Trading Economics - Treasury yields rise, 10-year yield hits highest since 2007",
    url: "https://tradingeconomics.com/united-states/government-bond-yield/news/583555",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Yahoo Finance chart data - market and ETF/stocks close checks",
    url: "https://finance.yahoo.com/",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const keyPoints = [
  "美股週一回落但不是全日最低收：Dow 52,421.20（-152.09 / -0.29%）、S&P 500 7,619.98（-37.00 / -0.48%）、Nasdaq 26,186.41（-146.62 / -0.56%）、Russell 2000 2,892.24（-11.71 / -0.40%）。",
  "主線係 AI 安全/放慢開發憂慮壓 semis 和資料中心基建股；CNBC 指 Nvidia 跌約 3%、Corning 跌約 13%，Intel/Micron 約跌 5%，但尾市市場覺得 data-center capex 未必即刻斷纜，所以跌幅收窄。",
  "油價同債息仍是第二條壓力線：Reuters 指 Brent settle $105.68、WTI $101.39；CNBC 指 10Y yield 盤中 briefly top 5%，Fed funds futures 約 92% 押注 9 月加 25bp。",
  "板塊不是一面倒：XLC +2.19%、XLV +1.45%、XLP +1.25% 有資金泊入；但 SOXX -5.63%、XLK -1.81%、XLI -1.42%、XLU -1.34% 反映 AI/利率敏感位仍弱。",
  "個股分化好大：CRWD +13.85%、PANW +13.09% 受惠 AI 風險帶動 cybersecurity 需求；相反 GLW -13.70%、GEV -8.62%、ETN -7.57%、AVGO -4.77%、NVDA -3.36% 被 AI capex 降溫交易拖住。",
  "Crypto 採 Binance Vision 2026-09-14 20:00 UTC 1m close（即美股 4:00pm ET 附近）：BTC $78,984.01（較 9/11 20:00 UTC +2.19%）、ETH $2,540.58（+0.04%）、SOL $103.24（+1.18%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "52,421.20",
    change: "-152.09 / -0.29%",
    read: "AP/CNBC 口徑一致；早段跌近 300 點後收窄，代表不是全面恐慌，而是 AI 相關倉位先被減風險。",
  },
  {
    asset: "S&P 500",
    close: "7,619.98",
    change: "-37.00 / -0.48%",
    read: "跌幅約半個百分點；defensives、communication services 和部分 mega-cap 軟件撐住，抵消 semis 拖累。",
  },
  {
    asset: "Nasdaq Composite",
    close: "26,186.41",
    change: "-146.62 / -0.56%",
    read: "盤中曾較弱，尾市隨 AI slowdown 風險被重新評估而收窄；但 semis 內傷明顯。",
  },
  {
    asset: "Russell 2000",
    close: "2,892.24",
    change: "-11.71 / -0.40%",
    read: "小型股跌幅反而小過 Nasdaq，但在 2Y/10Y 高企下仍未見可追的 breadth 改善。",
  },
  {
    asset: "VIX",
    close: "17.10（Yahoo chart 20:00 UTC 口徑）",
    change: "約 +1.26 / +7.95% vs 9/11 的 15.84",
    read: "波動有升但未到恐慌；Cboe/FRED 公開頁面截數時可能滯後，本文用 Yahoo chart 即時口徑並註明。",
  },
];

const sectorRows = [
  [
    "Communication Services / XLC",
    "$115.07 / +2.19%",
    "最強",
    "Alphabet、Meta 類大型平台股逆市有買盤，市場不是全盤沽科技，而是精準減 semis/AI capex beta。",
  ],
  [
    "Health Care / XLV",
    "$167.75 / +1.45%",
    "強",
    "Fed 會議前資金泊入較防守行業；醫療相對少受 AI capex 和油價直接影響。",
  ],
  [
    "Consumer Staples / XLP",
    "$84.42 / +1.25%",
    "強",
    "Kimberly-Clark、Costco 等防守消費獲資金追捧，反映投資者偏向低 cyclicality。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$112.85 / -0.10%",
    "中性",
    "大市風險下降但未失控；Tesla/Amazon 偏弱，不過整體板塊跌幅有限。",
  ],
  [
    "Financials / XLF",
    "$57.03 / -0.38%",
    "偏弱",
    "高息環境對息差有幫助，但 Fed 再加息與信用風險令銀行 beta 未能發力。",
  ],
  [
    "Real Estate / XLRE",
    "$43.12 / -0.69%",
    "弱",
    "10Y 靠近 5%、30Y 約 5.3% 以上，REITs 的估值和融資成本仍受壓。",
  ],
  [
    "Materials / XLB",
    "$50.49 / -0.90%",
    "弱",
    "美元偏強、利率高企，商品 beta 未有跟到油價升勢。",
  ],
  [
    "Energy / XLE",
    "$64.53 / -0.94%",
    "弱",
    "油價升但能源 ETF 反跌，反映市場擔心需求破壞、地緣風險和前期升幅消化。",
  ],
  [
    "Utilities / XLU",
    "$41.82 / -1.34%",
    "弱",
    "高債息下 yield proxy 不吸引；防守不等於所有 defensive 都升。",
  ],
  [
    "Industrials / XLI",
    "$169.93 / -1.42%",
    "更弱",
    "資料中心電力/工業鏈如 GEV、ETN 被 AI capex 放慢擔憂拖累，XLI 表現落後。",
  ],
  [
    "Technology / XLK",
    "$184.28 / -1.81%",
    "更弱",
    "Microsoft/Google 撐住部分軟件權重，但 Apple、semis 和硬件鏈壓力較大。",
  ],
  [
    "Semiconductors / SOXX",
    "$497.40 / -5.63%",
    "最弱",
    "AI 安全 slowdown headline 令資金先沽最 crowded 的半導體倉；SOXX 低位仍收近 -5.6%。",
  ],
];

const macroRows = [
  {
    topic: "CPI / 通脹底色",
    data: "BLS 8 月 CPI：headline +0.4% m/m、+3.4% y/y；core +0.3% m/m、+2.4% y/y；energy y/y +16.3%、food y/y +2.7%。",
    meaning:
      "headline 符合預期但 core 月比偏熱，加上油價再升，市場不敢賭 Fed 會繼續 hold。",
  },
  {
    topic: "FedWatch / 利率定價",
    data: "CNBC 收市後報 fed funds futures 約 92% 機率押注 9 月加 25bp；Reuters/CPI 後曾見約 87%-91%，Trading Economics 約 89%。",
    meaning:
      "市場 base case 已變成加息至 3.75%-4.00%，但不同來源因截數時間不同有幾個百分點差異。",
  },
  {
    topic: "美債息",
    data: "CNBC/AP 指 10Y 盤中 briefly top 5%；Yahoo 20:00 UTC 10Y 約 4.961%、30Y 約 5.329%、5Y 約 4.790%；Treasury/TE 口徑 2Y 約 4.66%-4.68%。",
    meaning:
      "長端仍在估值壓力區，5% 附近開始有買盤，但未足以令 growth multiple 全面放鬆。",
  },
  {
    topic: "原油",
    data: "Reuters：Brent +$1.07 / +1.0% settle $105.68；WTI +$1.34 / +1.3% settle $101.39，盤中一度急升近 5%。",
    meaning:
      "Saudi East-West pipeline 受襲/關閉與 Hormuz 風險令能源通脹壓力延續，是 Fed 和 consumer 的壞消息。",
  },
  {
    topic: "美元",
    data: "TradingKey/市場報價指 DXY 約 99.5-99.7、日內偏強；Yahoo DX-Y.NYB 於 9/15 早段約 99.53，截數時點有差異。",
    meaning: "高息 + 避險支持美元，會壓非美收入、黃金和部分高 beta 風險資產。",
  },
  {
    topic: "黃金",
    data: "TradingKey 報 spot gold 約 $4,340.49（-0.17%）；Yahoo GC futures 隔夜約 $4,336，方向同樣偏弱。",
    meaning: "地緣風險有支持，但實質利率/美元偏強令金價未能借油價 shock 突破。",
  },
  {
    topic: "明日事件",
    data: "CNBC 指美股收市後期指近乎持平；週二無重大美國經濟數據，Fed 會議第一日開始，週三公布決議。",
    meaning:
      "市場下一個大 catalyst 是 FOMC 和點陣圖/聲明語氣，短線不宜只按單日反彈或回落定方向。",
  },
];

const stockRows = [
  [
    "Nvidia / 半導體鏈",
    "NVDA $210.96 / -3.36%; SOXX $497.40 / -5.63%",
    "Anthropic、OpenAI、xAI 等 AI 安全/放慢開發言論令市場擔心 AI training capex 節奏，chip beta 先被沽。",
  ],
  [
    "Broadcom / AMD / Micron / Intel",
    "AVGO -4.77%; AMD -4.40%; MU -5.25%; INTC -5.59%",
    "跌幅顯示今次不是單一 NVDA 事件，而是整條 semis/capex trade 被降槓桿。",
  ],
  [
    "Corning / GE Vernova / Eaton",
    "GLW -13.70%; GEV -8.62%; ETN -7.57%",
    "CNBC 指 data-center buildout 相關工業/光纖/電力鏈捱沽，反映市場短線重新折現 AI 基建支出。",
  ],
  [
    "CrowdStrike / Palo Alto Networks",
    "CRWD $235.38 / +13.85%; PANW $373.94 / +13.09%",
    "AI 風險討論反而令 cybersecurity 被視為受惠者；CNBC/MarketWatch 均指 cyber stocks 逆市急升。",
  ],
  [
    "Alphabet / Meta / Microsoft",
    "GOOGL +3.22%; META +2.71%; MSFT +1.97%",
    "大型平台/軟件資金流較好，市場分辨『AI 應用與安全需求』同『硬件 capex beta』。",
  ],
  [
    "Oracle",
    "ORCL $144.79 / -3.65%",
    "AI 基建融資與重組成本憂慮仍未消化；上週 earnings 後的 capex/FCF debate 繼續壓住估值。",
  ],
  [
    "Apple / Tesla / Amazon",
    "AAPL +0.24%; TSLA -1.77%; AMZN -1.26%",
    "Apple 靠產品週期消息守得住；Tesla/Amazon 對利率、消費和 high beta 情緒較敏感。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$78,984.01",
    "+2.19%",
    "由 $77,290.00 回升；美股 risk-off 不算嚴重，BTC 反而有資金承接，但仍要睇美元/實質利率。",
  ],
  [
    "ETH",
    "$2,540.58",
    "+0.04%",
    "基本持平；未有跟 BTC 明顯 breakout，反映 smart-contract beta 仍觀望。",
  ],
  [
    "SOL",
    "$103.24",
    "+1.18%",
    "重上 $100 上方，但升幅溫和；若 Fed 鷹派，high beta crypto 仍易波動。",
  ],
];

const newsItems = [
  "AI 安全 warning 變成市場 headline：Anthropic CEO Dario Amodei 呼籲放慢模型能力推進，OpenAI/Sam Altman 等同意 AI safety 重要，投資者先沽 semis、資料中心電力/工業鏈。",
  "油價維持 $100 以上：Reuters 指 Saudi pipeline 受襲/關閉及中東航運風險推高 supply premium，Brent settle $105.68、WTI $101.39。",
  "10Y briefly top 5%：AP/CNBC 均提到 10 年期美債息觸及 5%，但 Cramer 指該水平吸引債券買盤，幫助美股尾市收窄跌幅。",
  "Fed 加息機率高企：CNBC 收市後指 fed funds futures 約 92% 押注週三加 25bp，CPI 後市場基本不再相信 Fed 可輕鬆 hold。",
  "Cybersecurity 逆市爆升：CRWD/PANW 約升 13%-14%，市場把 AI agent 風險解讀為安全軟件需求上升。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,600 是短線心理位；若失守，先看 7,560-7,570，再看上週 7,520 附近承接。",
    "先要收回 7,657（9/11 close）才算修復；上方 7,680-7,700 會有 CPI/Fed 前供應。",
  ],
  [
    "Nasdaq",
    "26,000 是明顯風險線；若 SOXX 續跌，Nasdaq beta 會再受壓。",
    "26,330（9/11 close）是第一阻力；要突破需 semis 止跌而不只是軟件撐市。",
  ],
  [
    "SOXX",
    "$495-$500 是今日低位/收市區；跌穿代表 AI capex trade 未完成洗倉。",
    "$520-$527 是上週收市區，未收復前只能當技術反彈。",
  ],
  [
    "10Y yield",
    "4.95%-5.00% 是 equities 的估值壓力區；若再次企穩 5% 上方，growth multiple 會再縮。",
    "若回落至 4.90% 下方，才會給 Nasdaq/REITs/small caps 明顯喘息空間。",
  ],
  [
    "WTI crude",
    "$100 仍是通脹風險線；守在其上，Fed 鷹派風險仍在。",
    "若跌回 $98 以下，市場才可重新 pricing oil shock 降溫。",
  ],
];

const planRows = [
  [
    "短線",
    "Fed 決議前避免追高半導體反彈；若要加風險，先確認 10Y 未再衝 5%、SOXX 不再破底。",
  ],
  [
    "板塊",
    "Communication services、health care、staples 表現相對好，可作防守 barbell；utilities/REITs 受長息壓力未解除。",
  ],
  [
    "個股",
    "Cybersecurity 是今日最清晰 relative strength；但 +13% 至 +14% 後不宜追價，等回調或確認成交延續。",
  ],
  [
    "Macro",
    "FOMC 前最重要不是猜 25bp，而是聽聲明/點陣圖有無暗示連續加息；油價若再上，Fed pivot 會更遠。",
  ],
  [
    "Crypto",
    "BTC/ETH/SOL 今日未跟美股跌，但若美元和實質利率繼續升，crypto 的承接力要再驗證。",
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

export default function USCloseBrief20260914() {
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
          {reportDate} 收市｜AI
          安全憂慮拖累半導體，油價與債息仍高；美股跌幅收窄，防守與 cybersecurity
          逆市跑出
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
            今晚是「AI capex trade 降溫 + oil/yield pressure」同時出現：AI
            安全討論令 semis、光纖、電力設備和資料中心基建股被沽；油價在 $100
            以上、10Y 一度觸 5%，又令 Fed
            加息機率高企。不過，尾市油價由高位回落、債券 5% 附近有買盤，加上
            cyber/防守股跑出，令指數跌幅收窄。
          </p>
          <h3>資金點諗</h3>
          <ul>
            <li>
              先減最 crowded 的 AI hardware / infrastructure
              倉，而不是全面撤出所有科技。
            </li>
            <li>
              高油價不是單純利好能源股；它同時提高通脹和 Fed reaction function
              壓力。
            </li>
            <li>
              Cybersecurity、health care、staples 有 relative
              strength，說明資金在換馬，不是純粹持現金。
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
                      className={`tag ${state === "最強" || state === "強" ? "green" : state === "中性" ? "amber" : "red"}`}
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
            Sector proxy 使用 Yahoo Finance chart 於 2026-09-14 20:00 UTC 的
            1-minute close，並對比 2026-09-11 日線 close；ETF 日線 close
            在截數時部分仍顯示 null，故以 20:00 UTC intraday close
            作收市附近口徑並註明。
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
              <span className="tag green">綠</span> Cybersecurity：CRWD、PANW
              急升，AI agent 風險變需求催化。
            </li>
            <li>
              <span className="tag green">綠</span> XLC / XLV /
              XLP：資金泊入平台股、醫療和 staples。
            </li>
            <li>
              <span className="tag amber">黃</span> 大市指數：跌但收離低位，未見
              panic selling。
            </li>
            <li>
              <span className="tag red">紅</span> Semis：SOXX -5.63%，AI capex
              trade 明顯減倉。
            </li>
            <li>
              <span className="tag red">紅</span> Data-center
              infrastructure：GLW、GEV、ETN 下跌，工業鏈受壓。
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
                <th>對 9/11 20:00 UTC</th>
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
            Vision public data API 1-minute kline；時間點為 2026-09-14 20:00:00
            UTC，即美股正常收市 4:00pm ET 附近。對比基準用上一個美股交易日
            2026-09-11 20:00:00 UTC。
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
            最終觀點：今晚跌市不是 crash，而是市場幫 AI trade 重新定價。若 Fed
            只是加 25bp 但語氣不再升級、10Y 守不住
            5%，跌幅可以繼續收窄；相反，如果油價再抽、10Y 企穩 5% 上方，semis 和
            high beta 仍會是風險出口。
          </p>
        </article>

        <article className="card wide">
          <h2>12. 來源、口徑與免責聲明</h2>
          <p className="note">
            數據衝突處理：指數收市採 AP/WTOP，並與 CNBC/Yahoo chart
            交叉核對；ETF/個股因 Yahoo 日線 close 截數時部分仍為 null，採 20:00
            UTC 1-minute close 對上一交易日日線 close；FedWatch 不同來源介乎約
            87%-92%，主文採 CNBC 收市後 92% 並標示範圍；油價採 Reuters
            settlement，不採 Yahoo 隔夜 futures rolling quote；VIX
            官方公開頁面可能滯後，採 Yahoo chart 20:00 UTC 口徑並註明。
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
