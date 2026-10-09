import React from "react";

const reportDate = "2026-10-08";
const publishedAt =
  "香港時間 2026-10-09 09:07（週五更新；數據截至美股 10/08 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Thursday 10/8/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-4499d3b2906917ed3d8670095bf1c321",
  },
  {
    name: "Reuters via The Business Times - S&P 500, Nasdaq end lower as crude prices jump, chip stocks weigh",
    url: "https://www.businesstimes.com.sg/companies-markets/capital-markets-currencies/us-stocks-sp-500-nasdaq-end-lower-crude-prices-jump-chip-stocks-weigh",
  },
  {
    name: "CNBC - Treasury yields are lower after reaching multiyear highs, traders weigh latest bond auction",
    url: "https://www.cnbc.com/2026/10/08/us-treasury-yields-30-year-bond-auction.html",
  },
  {
    name: "Reuters via Euronext - Oil rises 4% on revived Middle East worries, Hurricane Isaias supply disruption",
    url: "https://live.euronext.com/en/financial-news/oil-jumps-5-then-pares-gains-after-trump-says-no-attack-iran-month",
  },
  {
    name: "CNBC - Stocks making the biggest moves midday: CMG, SBUX, SKYD, MPC",
    url: "https://www.cnbc.com/2026/10/08/stocks-making-the-biggest-moves-midday-cmg-sbux-skyd-mpc.html",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "FinanceFeeds - Fed minutes and October hike odds",
    url: "https://financefeeds.com/fed-minutes-show-most-officials-want-another-hike-but-october-odds-fell-to-18/",
  },
  {
    name: "Cboe - VIX historical data CSV",
    url: "https://cdn.cboe.com/api/global/us_indices/daily_prices/VIX_History.csv",
  },
  {
    name: "Yahoo Finance chart data - index, yield and market quote checks",
    url: "https://finance.yahoo.com/",
  },
  {
    name: "Swingfolio - US Close 8 Oct 2026 sector and mover summary",
    url: "https://swingfolio.com/daily/us/2026-10-08/afternoon",
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
  "美股週四唔係全面崩，但明顯由科技拖低：AP / Reuters 終值顯示 Dow 51,231.64（+51.77 / +0.10%）、S&P 500 7,765.36（-36.41 / -0.47%）、Nasdaq 27,193.34（-345.35 / -1.25%）、Russell 2000 2,794.13（+0.93 / +0.03%）。",
  "兩條主線同時拉扯：油價因中東與 Hurricane Isaias 供應干擾急升，推高通脹擔憂；但 30Y Treasury auction 需求尚可，令 10Y / 30Y yield 由高位回落。",
  "板塊呈現非常清晰 rotation：Energy / XLE +2.97%、Staples / XLP +2.11%、Financials / XLF +0.89% 撐住；Technology / XLK -1.79% 最弱，SMH -2.84%、chip stocks 約 -3.4%。",
  "AI / 半導體沽壓來自 OpenAI revenue 相關報道與大型 AI capex 融資憂慮：Reuters 指 MU -4.8%、Broadcom -4.4%、Oracle -5.5%；Swingfolio 顯示 NVDA -2.94%、AMD -3.90%、INTC -5.34%。",
  "Fed 口徑仍偏緊但時間可彈性：CNBC 指 Waller 認為仍需加息但不一定連續加；CME/FedWatch 類口徑顯示 10 月加息約 18.3%、hold 約 81.7%，12 月加息仍約七成附近。",
  "Crypto 亦跟住 risk-off：Binance data API 2026-10-08 20:00 UTC 1m close（美股 4:00pm ET 附近）BTC $81,808.51（-1.97%）、ETH $2,466.63（-4.09%）、SOL $109.23（-5.74%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "51,231.64",
    change: "+51.77 / +0.10%",
    read: "Dow 微升，反映能源、staples、金融抵消科技沽壓；headline 比 Nasdaq 好，但不是全面 risk-on。",
  },
  {
    asset: "S&P 500",
    close: "7,765.36",
    change: "-36.41 / -0.47%",
    read: "連續第二日由週二 record close 回吐；7,737.78 日內低位守住後收近中段，暫時屬高位整固偏弱。",
  },
  {
    asset: "Nasdaq Composite",
    close: "27,193.34",
    change: "-345.35 / -1.25%",
    read: "科技與晶片係今日壓力核心；兩日前創 record close 後，高估值 AI trade 先被資金減磅。",
  },
  {
    asset: "Russell 2000",
    close: "2,794.13",
    change: "+0.93 / +0.03%",
    read: "小型股近乎平收，較前一日跑輸明顯改善；長息回落幫忙，但仍未重拾強勢。",
  },
  {
    asset: "VIX",
    close: "15.41（Yahoo / Swingfolio 暫值）",
    change: "+0.33 / +2.19%",
    read: "Cboe 官方 CSV 執行時仍只更新至 10/07 close 15.08；10/08 先採 Yahoo / Swingfolio 暫值，顯示有壓力但未恐慌。",
  },
];

const sectorRows = [
  [
    "Energy / XLE",
    "+2.97%",
    "最強",
    "油價急升直接推高能源股；Swingfolio 指 XOM +2.71%、CVX +3.12%、OXY +3.56%，是大市最清晰資金流入位。",
  ],
  [
    "Consumer Staples / XLP",
    "+2.11%",
    "強",
    "防守股加上 PepsiCo +3.73% 支撐；油價與高息壓力下，資金傾向 earnings visibility 較高板塊。",
  ],
  [
    "Financials / XLF",
    "+0.89%",
    "偏強",
    "長端 yield 雖然回落，但仍處高位；銀行與金融抵消部分科技拖累，屬支持大市的第二梯隊。",
  ],
  [
    "Consumer Discretionary / XLY",
    "暫無可靠 ETF 收市百分比；CMG +6.21%、SBUX -0.40%、AMZN -2.25%",
    "分化",
    "Chipotle 因 Starbucks 收購消息急升，但 AMZN 跟 AI / mega-cap 回吐；整體不宜只看單一贏家。",
  ],
  [
    "Communication Services / XLC",
    "暫無可靠 ETF 收市百分比；GOOGL -0.63%",
    "中性偏弱",
    "大型平台股未見一致崩跌，但資金今日更集中避開高估值增長；板塊方向需要等 ETF 收市資料補實。",
  ],
  [
    "Industrials / XLI",
    "暫無可靠 ETF 收市百分比",
    "中性",
    "油價升與利率波動對工業股有壓力，但今日不是最主要拖累；缺乏可靠 10/08 ETF close 時不硬填數字。",
  ],
  [
    "Health Care / XLV",
    "-0.39%",
    "偏弱",
    "防守板塊今日未能避開壓力；Humana 收低 2.37% 後因 CMS star ratings 盤後急彈，屬收市後事件。",
  ],
  [
    "Utilities / XLU",
    "-0.19%",
    "中性偏弱",
    "長息仍在 5.2% 以上，高股息 proxy 未能吸引明顯買盤；跌幅細，更多是缺乏動能。",
  ],
  [
    "Technology / XLK",
    "-1.79%",
    "最弱",
    "OpenAI revenue / AI capex 相關消息令 mega-cap tech 受壓；MSFT -1.35%、ORCL -5.48%、AMZN -2.25%。",
  ],
  [
    "Semiconductors / SMH / chips",
    "SMH -2.84%；Reuters 指 chip stocks 約 -3.4%",
    "最弱",
    "NVDA -2.94%、AVGO -4.35%、MU -4.79%、AMD -3.90%、INTC -5.34%，AI trade 今日是最大沽壓來源。",
  ],
];

const macroRows = [
  {
    topic: "Fed / 利率路徑",
    data: "CNBC：Fed Governor Christopher Waller 指仍可能需要更多加息壓低通脹，但不必連續每次會議都加。FedWatch 類口徑：10/28 加息約 18.3%、hold 約 81.7%；Reuters / Business Times 指 12 月加息機率 69.2%。",
    meaning:
      "市場不是押 Fed 轉鴿，而是押 10 月先等數據；下個關鍵是 CPI / 就業數據有無令 10 月加息機率重上。",
  },
  {
    topic: "美債息 / 拍賣",
    data: "CNBC：10Y yield 收報約 5.229%，30Y 約 5.602%；Yahoo close 口徑 10Y 5.231%、30Y 5.606%。30Y auction 規模 $22B，高收益率 5.618%，indirect bidders 72.3%。",
    meaning:
      "長息日內先升後跌，拍賣未失控令 equity 有喘息；但 10Y 仍貼近多年高位，估值壓力未解除。",
  },
  {
    topic: "原油",
    data: "Reuters / Euronext：Brent 收 $104.28（+$4.08 / +4.1%），WTI 收 $91.49（+$3.21 / +3.6%）；主因是中東戰事 / Hormuz 風險與 Hurricane Isaias 令 Gulf of Mexico 產量受阻。",
    meaning:
      "油價上升會重新刺激 inflation premium；Energy 股受惠，但 Nasdaq / long-duration assets 會被通脹與利率擔憂壓住。",
  },
  {
    topic: "美元 / 黃金",
    data: "Swingfolio：DXY 102.10（-0.13%）、Gold futures $4,158.30（+0.43%）。XTB market wrap 指 spot gold 約 $4,120（+0.3%）。不同來源因 futures / spot 與時間點有差異。",
    meaning:
      "黃金在油價推升通脹預期下反彈，但高實質利率與美元仍是上方阻力；本文列明 futures / spot 差異。",
  },
  {
    topic: "市場廣度 / 波幅",
    data: "Reuters：NYSE advancers/decliners 1.28:1，但 Nasdaq decliners/advancers 1.33:1；NYSE 110 new highs / 416 new lows，Nasdaq 33 new highs / 319 new lows；VIX 10/08 暫值 15.41。",
    meaning:
      "headline Dow 微升容易令人誤判，實際上科技與 Nasdaq 廣度偏弱；未到恐慌，但分化好大。",
  },
  {
    topic: "Crypto / 流動性",
    data: "Binance data API 20:00 UTC：BTC $81,808.51、ETH $2,466.63、SOL $109.23，較 10/07 20:00 UTC 分別 -1.97%、-4.09%、-5.74%。",
    meaning:
      "Crypto 同 AI / high beta 方向一致，BTC 跌近 $82k 下方，ETH / SOL beta 更高；流動性風險仍未解除。",
  },
];

const stockRows = [
  [
    "NVDA / AVGO / MU / AMD / INTC",
    "NVDA -2.94%；AVGO -4.35%；MU -4.79%；AMD -3.90%；INTC -5.34%",
    "FT / WSJ 相關 AI revenue、capex 與融資消息令市場重新審視 AI trade 回報期；半導體成 Nasdaq 最大拖累。",
  ],
  [
    "ORCL / AMZN / MSFT",
    "ORCL -5.48% 至 $135.69；AMZN -2.25%；MSFT -1.35%",
    "AI infrastructure 由『需求無限』轉為『融資與供電成本』被審視，mega-cap cloud 亦被拖累。",
  ],
  [
    "XOM / CVX / OXY",
    "XOM +2.71%；CVX +3.12%；OXY +3.56%",
    "Brent / WTI 急升，能源股成全日最強主線；但油升同時會提高通脹與利率風險。",
  ],
  [
    "PEP",
    "$128.34 / +3.73%",
    "PepsiCo EPS 勝預期並宣布更多 cost cuts，即使下調全年 core profit forecast，防守性消費仍獲資金支持。",
  ],
  [
    "CMG / SBUX",
    "CMG $32.68 / +6.21%；SBUX -0.40%",
    "Financial Times 指 Starbucks 曾與顧問研究收購 Chipotle，消息推高 CMG，但 SBUX 反應偏冷淡。",
  ],
  [
    "HAE",
    "+17.46%",
    "CSL 預期在美國 plasma centers 推出 Haemonetics 平台，刺激股份急升；屬醫療設備事件驅動。",
  ],
  [
    "HUM / ALHC",
    "HUM 收市 $387.12 / -2.37%，盤後 +15.96%；ALHC 盤後 -20.78%",
    "CMS 2027 Medicare Advantage Star Ratings 公布後，Humana 最大合約回升至 4 stars；Alignment Health 主要 California 合約降至 3.5 stars。",
  ],
  [
    "AAOI / COHR / LITE / ALAB",
    "AAOI -13.58%；COHR -9.63%；LITE -5.62%；ALAB -9.21%",
    "光通訊 / connectivity 供應商由年內大升後急速回吐，反映 AI supply-chain beta 比 mega-cap 更脆弱。",
  ],
  [
    "HUT / RIOT / IREN / COIN",
    "HUT -10.87%；RIOT -9.17%；IREN -7.70%；COIN -3.61%",
    "BTC 走弱拖累 crypto miners 與交易平台；高 beta crypto equity 對 BTC 跌幅有放大反應。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$81,808.51",
    "-$1,643.47 / -1.97%",
    "跌穿 $82k 附近，短線由 risk-on 轉為守支持；若失 $80k，crypto beta 會再被壓。",
  ],
  [
    "ETH",
    "$2,466.63",
    "-$105.30 / -4.09%",
    "跌幅大過 BTC，代表 alt beta 較弱；ETH/BTC 未見改善前，不宜太早假設資金輪動到 alt。",
  ],
  [
    "SOL",
    "$109.23",
    "-$6.65 / -5.74%",
    "高 beta 表現最弱；$110 失而復得與否是短線情緒位，否則會看 $105 / $100。",
  ],
];

const newsItems = [
  "AP / Reuters：Dow 小升 0.10%，但 S&P 500 -0.47%、Nasdaq -1.25%；科技與晶片拖累大市，能源與防守股抵消部分壓力。",
  "Reuters：Brent +4.1% 至 $104.28、WTI +3.6% 至 $91.49；中東 / Hormuz 風險與 Hurricane Isaias 供應干擾令油價重新加入 inflation premium。",
  "Reuters / Business Times：chip stocks 約 -3.4%，OpenAI annualized revenue 相關報道與 AI financing concerns 令 NVDA、AVGO、MU、AMD、INTC 同步下跌。",
  "CNBC：10Y / 30Y yield 早段受 Waller hawkish comments 推高，但 30Y auction demand 尚可後回落；10Y 約 5.229%、30Y 約 5.602%。",
  "CME/FedWatch 類口徑：10 月加息機率約 18.3%，市場基準仍是 10 月 hold，但 12 月加息機率仍約 69.2%。",
  "個股：PEP +3.73%、CMG +6.21%、HAE +17.46% 逆市強；ORCL -5.48%、HUT -10.87%、AAOI -13.58% 反映 AI / crypto / optical beta 被沽。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,737（日內低位）/ 7,720 是短線支持；跌穿代表高位整固轉弱。",
    "7,800 / 7,820 是第一阻力；重上才算修復連跌兩日壓力。",
  ],
  [
    "Nasdaq",
    "27,100 / 27,000 是心理支持；AI trade 再被沽會先測此區。",
    "27,500 是修復位；要重啟升浪，需要 semis 由 -3% 轉為企穩。",
  ],
  [
    "Russell 2000",
    "2,780 / 2,760 是 risk appetite 支持帶。",
    "2,830 / 2,850 是反彈阻力；突破才代表 breadth 真正改善。",
  ],
  [
    "10Y yield",
    "5.20% 以下會幫 equity 估值喘息。",
    "5.30%-5.35% 仍是壓力帶；重上會再壓 Nasdaq / small caps。",
  ],
  [
    "WTI / Brent",
    "WTI $90 / Brent $100 已變成通脹風險底線。",
    "Brent $105-$106 是今日高位區；若再破，Energy 贏但 broader market 未必受惠。",
  ],
  [
    "BTC",
    "$80,000 是關鍵心理支持；失守會拖累 miners / crypto equities。",
    "$82,000 / $85,000 是短線反彈阻力；先收復 $82k 才叫穩住。",
  ],
];

const planRows = [
  [
    "短線",
    "唔好只看 Dow 微升就判斷風險解除。今日是 sector rotation，不是 broad rally；倉位應優先保留有現金流與 pricing power 的核心。",
  ],
  [
    "板塊",
    "Energy / Staples / Financials 短線相對強；Technology / Semis 若明日仍未反彈，Nasdaq 會繼續跑輸。",
  ],
  [
    "Macro",
    "三個開關：Brent $105、10Y 5.30%、FedWatch 10 月加息機率。任何一個重新上升，都會壓高 beta。",
  ],
  [
    "個股",
    "AI supply chain 要等 NVDA / AVGO / MU 止跌才考慮加；事件股如 CMG / HAE / HUM 盤後消息，要小心 gap 後追價風險。",
  ],
  [
    "Crypto",
    "BTC 未收復 $82k 前先保守；ETH / SOL 跌幅更大，代表資金未準備好承擔 alt beta。",
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

export default function USCloseBrief20261008() {
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
          {reportDate} 收市｜Dow 微升、Nasdaq 跑輸：油價急升撐能源，AI /
          晶片回吐壓科技
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
            今日係「油價升、科技跌、長息回落救一救」：油價因中東與 Hurricane
            Isaias 供應干擾急升，令 inflation premium 重新被市場計入；同時 AI /
            semis 因 OpenAI revenue 與大型融資疑慮被沽。幸好 30Y auction
            需求不差，長息由高位回落，令 Dow 同 Russell 守住。
          </p>
          <h3>資金點諗</h3>
          <ul>
            <li>
              買能源與防守：XLE、XLP 明顯跑贏，資金偏向油價受惠和 earnings
              visibility。
            </li>
            <li>
              沽 AI beta：semis、optical、AI infrastructure
              由年內強勢變成今日主要減倉位。
            </li>
            <li>
              長息仍是天花板：10Y 回落至 5.23%
              附近有幫助，但仍高到足以限制估值擴張。
            </li>
            <li>
              市場分化大：NYSE advancers 多過 decliners，但 Nasdaq
              廣度偏弱，新低多過新高很多。
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
                      className={`tag ${state === "最強" || state === "強" || state === "偏強" ? "green" : state === "中性" || state === "中性偏弱" || state === "分化" ? "amber" : "red"}`}
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
            Sector 口徑：Yahoo chart 在執行時未為多數 ETF 回傳 10/08
            日線，因此以 Reuters / Swingfolio 摘要、CNBC movers 與可核對的 Yahoo
            指數資料交叉；無可靠 ETF 百分比則明確寫「暫無可靠 ETF 收市百分比」。
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
              <span className="tag green">綠</span> Energy：XLE
              +2.97%，油價急升帶動 XOM / CVX / OXY。
            </li>
            <li>
              <span className="tag green">綠</span> Staples：XLP +2.11%，PEP
              +3.73% 支撐防守股。
            </li>
            <li>
              <span className="tag amber">黃</span> Dow / Russell：分別 +0.10% /
              +0.03%，未全面 risk-off。
            </li>
            <li>
              <span className="tag amber">黃</span> VIX：約
              15.41，升但仍非恐慌區。
            </li>
            <li>
              <span className="tag red">紅</span> Technology：XLK -1.79%，AI /
              cloud 融資疑慮壓估值。
            </li>
            <li>
              <span className="tag red">紅</span> Semis / Crypto：SMH
              -2.84%，BTC / ETH / SOL 同步跌。
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
                <th>對 10/07 20:00 UTC</th>
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
            口徑：Binance spot API 在此環境對 api.binance.com
            受地區限制；Binance Vision daily ZIP 10/08 在執行時尚未發布，因此採
            Binance data API klines 直接查 2026-10-08 20:00:00 UTC 1-minute
            kline close，時間點即美股正常收市 4:00pm ET 附近。對比基準為
            2026-10-07 20:00:00 UTC。
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
            最終觀點：今日不是 crash，而是高位附近的輪動與去槓桿。只要 10Y
            不重新上 5.30%-5.35%，大市仍有整固空間；但油價若繼續衝、AI / semis
            未止跌，Nasdaq 會繼續比 Dow 弱。操作上唔好追高 beta，先等 BTC 重上
            $82k、SMH 企穩、S&P 500 收復 7,800。
          </p>
        </article>

        <article className="card wide">
          <h2>12. 來源、口徑與免責聲明</h2>
          <p className="note">
            數據衝突處理：指數收市採 AP 終值，並與 Reuters / Yahoo chart
            核對；sector ETF 因 Yahoo 在執行時未完整回傳 10/08 日線，採 Reuters
            / CNBC / Swingfolio 摘要，缺口以「暫無可靠 ETF
            收市百分比」標示。美債採 CNBC 與 Yahoo close 口徑；油價採 Reuters
            settle；黃金 / DXY 列明 futures、spot、market summary 差異。VIX 因
            Cboe 官方 CSV 只更新至 10/07，10/08 暫用 Yahoo / Swingfolio
            15.41。Crypto 採 Binance data API 20:00 UTC 1-minute kline。
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
