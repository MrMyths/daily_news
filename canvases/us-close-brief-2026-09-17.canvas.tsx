import React from "react";

const reportDate = "2026-09-17";
const publishedAt = "香港時間 2026-09-18 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP / myMotherLode - How major US stock indexes fared Thursday 9/17/2026",
    url: "https://mymotherlode.com/news/national/11148031/how-major-us-stock-indexes-fared-thursday-9-17-2026.html",
  },
  {
    name: "Reuters - Trading Day: Lower oil, yields boost stocks",
    url: "https://www.reuters.com/commentary/reuters-open-interest/global-markets-trading-day-graphic-2026-09-17/",
  },
  {
    name: "Reuters - US labor market on solid footing; rising mortgages pressuring housing sector",
    url: "https://www.reuters.com/business/us-weekly-jobless-claims-unexpectedly-fall-2026-09-17/",
  },
  {
    name: "Reuters - US single-family housing starts rebound in August; building permits fall",
    url: "https://www.reuters.com/business/us-single-family-housing-starts-rebound-august-building-permits-fall-2026-09-17/",
  },
  {
    name: "Reuters - Oil falls 1% as investors watch Middle East supply disruptions",
    url: "https://www.reuters.com/business/energy/oil-prices-extend-losses-fears-middle-east-supply-disruptions-ease-2026-09-17/",
  },
  {
    name: "Kitco / Reuters - Gold gains over 2% on weaker dollar, easing oil prices",
    url: "https://www.kitco.com/news/off-the-wire/2026-09-17/gold-gains-over-2-weaker-dollar-easing-oil-prices",
  },
  {
    name: "Kitco PM Report - Gold rebounds as lower oil eases rate pressure",
    url: "https://www.kitco.com/news/article/2026-09-17/gold-price-rebounds-above-4340-lower-oil-eases-rate-pressure-kitco-pm",
  },
  {
    name: "TradingKey - Tech and memory stocks lead AI-related gains",
    url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262173915-us-stock-nasdaq-dow-sp500-rise-fed-rate-chip-memory-intel-micron-tradingkey",
  },
  {
    name: "CNBC - Stocks are rallying after Fed sell-off",
    url: "https://www.cnbc.com/2026/09/17/stocks-are-rallying-after-fed-sell-off-why-now-may-not-be-the-time-to-buy-the-dip.html",
  },
  {
    name: "Federal Reserve - FOMC statement, September 16 2026",
    url: "https://www.federalreserve.gov/monetarypolicy/files/monetary20260916a1.pdf",
  },
  {
    name: "Federal Reserve - September 2026 SEP projections",
    url: "https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260916.htm",
  },
  {
    name: "CME FedWatch tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Yahoo Finance historical market data reference",
    url: "https://finance.yahoo.com/quote/%5EGSPC/history/",
  },
  {
    name: "Cboe VIX historical data reference",
    url: "https://www.cboe.com/tradable_products/vix/vix_historical_data/",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const keyPoints = [
  "美股在 Fed 後反彈，AP 收市：Dow 51,778.04（+316.14 / +0.61%）、S&P 500 7,637.76（+85.95 / +1.14%）、Nasdaq 26,418.30（+439.87 / +1.69%）、Russell 2000 2,874.63（+15.82 / +0.55%）。",
  "主線由前一日 hawkish Fed shock 變成 relief trade：Reuters 指油價連跌第二日、長債息回落，資金買回早前受壓的科技與晶片，Nasdaq 跑贏。",
  "風險不是消失，只是短線降溫：10Y yield 由 5% 附近跌至約 4.93%-4.95%，DXY 紐約尾市約 100.22-100.25，VIX 以 Yahoo/Cboe quote 口徑跌至約 15.44。",
  "板塊集中在 tech-led：SOXX +3.43%、XLK +2.23% 最強；XLC -0.58%、XLF -0.11% 是少數下跌，反映今次反彈仍靠 chip/AI 硬件，而不是所有板塊同步爆上。",
  "宏觀數據給 Fed 空間：Reuters 報初領失業金跌至 196k，但受 Labor Day 季調影響；housing starts -2.6%、permits -2.7%，顯示高按息仍壓住房屋。",
  "Crypto 採 Binance Vision 2026-09-17 20:00 UTC 1m close（美股 4:00pm ET 附近）：BTC $76,544.01（較 9/16 20:00 UTC +0.63%）、ETH $2,447.58（+1.70%）、SOL $100.89（+2.83%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "51,778.04",
    change: "+316.14 / +0.61%",
    read: "AP 精確收市；反彈但仍跑輸 Nasdaq，金融與工業內部仍有拖累。",
  },
  {
    asset: "S&P 500",
    close: "7,637.76",
    change: "+85.95 / +1.14%",
    read: "收復 9/16 跌幅大部分；7,600 重新變短線支持，7,650 是即市阻力。",
  },
  {
    asset: "Nasdaq Composite",
    close: "26,418.30",
    change: "+439.87 / +1.69%",
    read: "科技/晶片帶頭，lower yield 對 duration growth 有即時幫助。",
  },
  {
    asset: "Russell 2000",
    close: "2,874.63",
    change: "+15.82 / +0.55%",
    read: "小型股有反彈但力度一般；融資成本仍高，breadth 未算全面修復。",
  },
  {
    asset: "VIX",
    close: "15.44（Yahoo / Cboe quote 口徑）",
    change: "-2.27 / -12.82%",
    read: "恐慌明顯回落，屬 Fed 後波動降溫；Cboe/FRED 歷史檔若滯後，本文標明 quote 口徑。",
  },
];

const sectorRows = [
  [
    "Semiconductors / SOXX",
    "$519.10 / +3.43%",
    "最強",
    "晶片是全日主角；TradingKey 指 SOX +3.14%，Intel、AMD、Micron、Nvidia 全線升，AI hardware demand 故事重新吸資金。",
  ],
  [
    "Technology / XLK",
    "$188.06 / +2.23%",
    "強",
    "利率回落令大型科技估值喘息，Microsoft、Apple、Oracle、semis 一起拉高。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$111.39 / +1.12%",
    "偏強",
    "Tesla、Amazon 反彈帶動；但高息和消費成本仍是中線壓力。",
  ],
  [
    "Utilities / XLU",
    "$41.69 / +0.87%",
    "偏強",
    "10Y 由 5% 下方回落，yield proxy 獲 relief；但若長債息再升，追防守股要小心。",
  ],
  [
    "Energy / XLE",
    "$64.48 / +0.67%",
    "中性",
    "油價跌但能源股未再大跌，因 Brent/WTI 仍在 $100+，中東供應風險提供底部支持。",
  ],
  [
    "Materials / XLB",
    "$50.71 / +0.66%",
    "中性",
    "美元由高位回落、金銀反彈，帶動材料/礦業氣氛改善。",
  ],
  [
    "Health Care / XLV",
    "$168.81 / +0.61%",
    "中性",
    "防守板塊跟升但不是資金主線；今日資金更偏向 tech beta。",
  ],
  [
    "Real Estate / XLRE",
    "$42.94 / +0.33%",
    "中性",
    "長債息回落有幫助，但 housing/按揭數據仍差，REITs 只是短線 relief。",
  ],
  [
    "Industrials / XLI",
    "$169.01 / +0.20%",
    "偏弱",
    "大市升但工業股只微升，Boeing 生產/現金流訊息拖累板塊表現。",
  ],
  [
    "Consumer Staples / XLP",
    "$83.49 / +0.16%",
    "偏弱",
    "防守消費跟升乏力；risk-on 日資金不急於泊入 staples。",
  ],
  [
    "Financials / XLF",
    "$55.88 / -0.11%",
    "弱",
    "長端跌、前端仍被 Fed path 撐住，曲線壓力令銀行淨息差想像受限。",
  ],
  [
    "Communication Services / XLC",
    "$112.35 / -0.58%",
    "最弱",
    "XLC 是少數下跌板塊，Netflix 等拖累抵消 Meta/Google 小升；反映 rally 未完全擴散。",
  ],
];

const macroRows = [
  {
    topic: "Fed / 利率路徑",
    data: "Fed 9/16 12-0 加息 25bp 至 3.75%-4.00%；SEP 仍指向今年至少可能再加一次。Kitco/Reuters 報 CME FedWatch 對下次會議再加息機率約 51%，其他即時口徑對年內再加 25bp 約 50%-54%。",
    meaning:
      "今日升市不是 Fed 轉 dovish，而是市場覺得加息已被消化、Fed credibility 回升，短線先平淡化 inflation panic。",
  },
  {
    topic: "美債息",
    data: "AP 指 10Y yield 跌至 4.93%；MarketWatch / Yahoo 口徑顯示 10Y 約 4.946%-4.947%、30Y 約 5.296%。Reuters jobless 文亦提到 10Y around 4.947%。",
    meaning:
      "10Y 由 5% 上方回落是今日 growth/semis 反彈關鍵；只要 10Y 重新企上 5%，估值壓力會很快返嚟。",
  },
  {
    topic: "勞工市場",
    data: "Reuters：初領失業金按週跌 10,000 至 196,000，低過市場預期 208,000；四週平均跌至 203,250，續領失業金跌至 1.730m，但 Labor Day 可能令跌幅被誇大。",
    meaning:
      "就業未見明顯裂痕，令 Fed 有空間繼續盯通脹；但季節因素代表不能單靠一周數字判斷過熱。",
  },
  {
    topic: "房屋數據",
    data: "Reuters / Census：8 月 overall housing starts 1.275m annual rate（-2.6% m/m）、building permits 1.394m（-2.7%）；single-family starts +7.6% 至 918k，但 single-family permits -1.8%。",
    meaning:
      "高按息開始更清楚壓住供需；房屋弱不一定即時令 Fed 轉向，因油價/通脹仍是政策焦點。",
  },
  {
    topic: "原油",
    data: "Reuters：Brent settled $104.82（-$1.01 / -0.95%），WTI settled $101.91（-$0.52 / -0.5%）；Saudi 經 Oman 增加供應與 East-West pipeline 修復希望令供應恐慌降溫。",
    meaning:
      "油價回落是今日股債反彈的核心，但 $100+ 油仍然會支撐通脹預期，不能當 oil shock 已完。",
  },
  {
    topic: "美元 / 黃金",
    data: "Reuters / Kitco：美元由七週高位回落，DXY 約 100.20-100.25；spot gold 1:45pm ET +2.3% 至 $4,360.36，Dec gold futures settle $4,399.70（+0.3%）。",
    meaning:
      "美元和債息稍軟令黃金與 crypto 反彈；但 Fed guidance 仍偏緊，貴金屬上行未必一口氣突破。",
  },
];

const stockRows = [
  [
    "Semis / SOXX",
    "SOXX $519.10 / +3.43%; SOX +3.14%",
    "今日最清晰主線。TradingKey 指 Philadelphia Semiconductor Index 30 隻成份中 29 隻上升，資金押注 AI hardware、memory 和 CPU demand。",
  ],
  [
    "Intel / AMD / Micron / Nvidia",
    "INTC $108.80 / +7.70%; AMD $545.09 / +6.28%; MU $977.50 / +5.52%; NVDA $219.34 / +2.54%",
    "Intel/AMD/Micron 是 beta 最高的一組；Nvidia 續升，市場仍相信 2027 AI chip demand 會保持強勁。",
  ],
  [
    "Oracle / Microsoft / Apple",
    "ORCL $150.59 / +5.16%; MSFT $497.75 / +1.51%; AAPL $337.00 / +1.35%",
    "大型 tech 在債息回落下估值修復；Oracle 彈性最大，Microsoft/Apple 屬穩定拉盤。",
  ],
  [
    "Amazon / Tesla / Platforms",
    "AMZN $251.19 / +2.18%; TSLA $366.20 / +2.25%; GOOGL $347.33 / +1.31%; META $682.31 / +1.33%",
    "consumer internet/mega-cap 反彈，但 XLC 仍跌，代表個股表現分化，不能只看 headline 指數。",
  ],
  [
    "AI power / infra",
    "ETN $409.46 / +2.91%; GLW $147.80 / +2.51%; GEV $924.93 / -0.05%",
    "Eaton/Corning 跟 AI infrastructure 反彈，GE Vernova 在前日大升後消化；CNBC 提到 Loudoun County 暫停新 data center 申請，供應瓶頸主題仍在。",
  ],
  [
    "Boeing / Salesforce / Netflix",
    "BA $197.00 / -2.50%; CRM $242.85 / -3.12%; NFLX $75.31 / -1.45%",
    "弱點主要在個別故事：Boeing 737 MAX 產能穩定需時、自由現金流上限變難；CRM/NFLX 拖累非晶片 growth。",
  ],
  [
    "Cybersecurity",
    "CRWD $245.70 / +1.78%; PANW $375.06 / -0.16%",
    "cybersecurity 未跟 semis 同步爆升，反映今日資金偏向硬件/AI supply chain，多於 defensive software。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$76,544.01",
    "+0.63%",
    "由 $76,065.30 小幅反彈；美元回落和 VIX 降溫有幫助，但 Fed path 仍限制追高。",
  ],
  [
    "ETH",
    "$2,447.58",
    "+1.70%",
    "beta 高過 BTC，跟科技股 relief trade 同方向；能否企穩 $2,450 附近是短線重點。",
  ],
  [
    "SOL",
    "$100.89",
    "+2.83%",
    "重新企回 $100 心理位，短線動能最好；但仍受整體美元/實質利率環境約束。",
  ],
];

const newsItems = [
  "美股反彈至六星期最佳日之一：AP 指 S&P 500 +1.1%、Nasdaq +1.7%，油價和債息回落幫助市場收復前日 Fed selloff。",
  "Reuters Trading Day 定性為 Fed 後 relief：投資者消化 dot plot 和 Warsh 記者會後，股債反彈、油價下跌，屬 short-covering / profit-taking day。",
  "晶片/AI hardware 領漲：TradingKey 指 SOX +3.14%，Intel +7.67%、AMD +6.36%、Micron +5.50%、Nvidia +2.54%。",
  "初領失業金意外跌至 196k：Reuters 指低過預期，但 Labor Day 季調可能誇大跌幅；就業穩定令 Fed 可繼續以通脹為優先。",
  "油價連跌但仍高：Reuters 報 WTI $101.91、Brent $104.82；Oman 轉運和 pipeline 修復希望降溫供應恐慌，但中東風險未完。",
  "房屋數據分化偏弱：single-family starts +7.6%，但 overall starts -2.6%、permits -2.7%，高按息繼續壓 housing。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,600 是重新收復後的第一支持；跌穿先看 9/16 close 7,552，再看 7,500。",
    "7,647 日高 / 7,650 是即市阻力；企穩上方才有機會試 7,700。",
  ],
  [
    "Nasdaq",
    "26,290-26,300 是今日低位區；失守會回看 26,000 心理位。",
    "26,460 日高是第一阻力，之後看 26,500 和 26,700。",
  ],
  [
    "SOXX",
    "$514-$515 是今日低位區；若失守，會考驗 $510 和 9/16 close 約 $502。",
    "$520-$521 是今日高位阻力；突破先看 $525-$530。",
  ],
  [
    "10Y yield",
    "4.93%-4.95% 是今日 relief 區；跌穿會進一步支持 growth valuation。",
    "5.00%-5.01% 是估值壓力線；重上會削弱今次反彈可信度。",
  ],
  [
    "WTI crude",
    "$100 是心理支持；若跌穿，市場會更相信油價 shock 暫時降溫。",
    "$101.91 settle 之上先看 $102.43（前日 WTI settle），再看 $105 區。",
  ],
  [
    "DXY",
    "100.00-100.20 是短線支持；跌穿 100 才較利好 crypto/gold/growth。",
    "100.36 七週高位附近是第一阻力；突破會令風險資產壓力重來。",
  ],
];

const planRows = [
  [
    "短線",
    "今日反彈可視為 Fed 後 relief，不等於風險清零。明日先看 10Y 能否留在 5% 以下、油價能否繼續低於前高，以及 S&P 500 能否守住 7,600。",
  ],
  [
    "板塊",
    "Semis/AI hardware 是 strongest tape；若要確認大市轉強，需要 XLF、XLC、Russell 2000 跟上，而不是只靠 SOXX/XLK 拉盤。",
  ],
  [
    "個股",
    "INTC/AMD/MU/NVDA 可作 AI hardware 情緒溫度計；BA/CRM/NFLX 代表個別基本面和非晶片 growth 壓力，不能忽略。",
  ],
  [
    "Macro",
    "Fed 仍偏鷹，油價仍在 $100+，所以任何反彈都要用 yields/oil/DXY 做風控開關。",
  ],
  [
    "Crypto",
    "BTC/ETH/SOL 跟 risk-on 小幅反彈；SOL 重上 $100 是好訊號，但若 DXY 重上 100.36 或 10Y 返 5%，crypto beta 會再受壓。",
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

export default function USCloseBrief20260917() {
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
          background: linear-gradient(135deg, #134e4a 0%, #0f766e 52%, #111827 100%);
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
          {reportDate} 收市｜油價與長債息回落觸發 Fed 後 relief；Nasdaq
          跑贏，半導體/AI hardware 領漲但 XLC、XLF 仍弱
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
            今晚是 Fed 後「壓力釋放」多過新牛市訊號。前一晚市場被 hawkish
            hike、5% 10Y 和 $100+ 油價嚇親；今日油價第二日回落、 長債息離開
            5%，資金就先買返最受估值壓力的科技和晶片。Reuters 形容是消化 dot
            plot / Warsh 記者會後的 buy-the-rumor, sell-the-fact relief，AP
            亦指跌油和債市壓力紓緩幫助美股收復大部分本週跌幅。
          </p>
          <h3>資金點諗</h3>
          <ul>
            <li>
              市場暫時相信 Fed 有 inflation-fighting backbone，所以長端息回落。
            </li>
            <li>
              反彈集中在 semis / AI hardware，代表資金仍想留在最有 earnings
              narrative 的 growth 區。
            </li>
            <li>
              XLF、XLC、Russell 2000 未跟足，提示 breadth
              仲未完全修復，明日要睇擴散。
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
                        state === "最強" || state === "強" || state === "偏強"
                          ? "green"
                          : state === "中性"
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
            Sector proxy 使用 Yahoo Finance chart / 4:00pm ET 附近 1 分鐘線；
            多個 ETF 日線 close 欄位在截稿時仍顯示 null，因此採 2026-09-17 20:00
            UTC bar，並與 Reuters/TradingKey sector 敘事核對。
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
              <span className="tag green">綠</span> Semis / memory：SOXX
              +3.43%，INTC +7.70%，AMD +6.28%，MU +5.52%。
            </li>
            <li>
              <span className="tag green">綠</span> Mega-cap tech：ORCL
              +5.16%，NVDA +2.54%，MSFT +1.51%，AAPL +1.35%。
            </li>
            <li>
              <span className="tag amber">黃</span> Crypto：BTC/ETH/SOL 跟
              risk-on 反彈，SOL 重上 $100，但仍受 Fed path 限制。
            </li>
            <li>
              <span className="tag amber">黃</span> Energy：油跌但 XLE
              微升，市場同時交易 supply fear 降溫和 $100+ oil floor。
            </li>
            <li>
              <span className="tag red">紅</span> Laggards：XLC -0.58%、XLF
              -0.11%，BA、CRM、NFLX 亦弱，breadth 未算完美。
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
                <th>對 9/16 20:00 UTC</th>
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
            Vision public data API 1-minute kline；時間點為 2026-09-17 20:00:00
            UTC，即美股正常收市 4:00pm ET 附近。對比基準為上一交易日 2026-09-16
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
            最終觀點：今日升得靚，但性質是「risk shock 降溫」多過「Fed
            轉向」。如果油價繼續落、10Y 留在 5% 以下、半導體強勢擴散去更多板塊，
            反彈就有機會延續；相反，如果 DXY / 10Y / oil
            同時反彈，今日買盤好容易變成 short-covering
            完結後的回吐。操作上可以跟強勢，但風控位要貼住 macro。
          </p>
        </article>

        <article className="card wide">
          <h2>12. 來源、口徑與免責聲明</h2>
          <p className="note">
            數據衝突處理：指數收市採 AP 精確點數，並與 Reuters/TradingKey
            百分比敘事核對；Yahoo index close 與 AP 相差極細（例如 Dow 51,778.04
            vs Yahoo 51,778.04），本文採 AP。ETF/個股因 Yahoo 日線 close
            欄位在截稿時部分仍為 null，採 2026-09-17 20:00 UTC 1-minute bar
            作美股收市附近價格；油價採 Reuters settlement，Kitco PM Report
            作交叉核對；美債採 AP/Reuters/MarketWatch/Yahoo 口徑（FRED/Cboe
            歷史表可能滯後）；VIX 採 Yahoo/Cboe quote 15.44-15.45 區間並標明；
            Fed 採 Federal Reserve statement/SEP、Reuters/CNBC/FedWatch；Crypto
            採 Binance Vision 20:00 UTC 1-minute kline。
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
