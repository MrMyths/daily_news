import React from "react";

const reportDate = "2026-09-16";
const publishedAt = "香港時間 2026-09-17 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP / WTOP - How major US stock indexes fared Wednesday 9/16/2026",
    url: "https://wtop.com/national/2026/09/how-major-us-stock-indexes-fared-wednesday-9-16-2026/",
  },
  {
    name: "Reuters - Stocks fall as Fed delivers hawkish rate hike",
    url: "https://www.reuters.com/world/china/global-markets-wrapup-1-2026-09-16/",
  },
  {
    name: "CNBC - Fed approves interest rate hike, signals one more to come this year",
    url: "https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html",
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
    name: "Newsquawk - WTI and Brent settlement wrap, September 16 2026",
    url: "https://www.newsquawk.com/headlines/crude-wrap-wti-v6-settled-usd-340-lower-at-10243bbl-brent-x6-settled-usd-292-lower-at-10583bbl",
  },
  {
    name: "Reuters - August retail sales and import prices",
    url: "https://www.reuters.com/business/retail-consumer/us-retail-sales-rebound-sharply-august-2026-09-16/",
  },
  {
    name: "NVIDIA - Emerald AI, Google and NVIDIA launch AI Energy Management Alliance",
    url: "https://blogs.nvidia.com/blog/ai-energy-management-alliance/",
  },
  {
    name: "Gate News - US industry ETFs mostly decline on September 16",
    url: "https://www.gate.com/news/detail/us-industry-etfs-mostly-decline-on-september-16-energy-sector-etf-falls-288-24326653",
  },
  {
    name: "TradingKey - US stocks fall for third day; chip stocks buck trend",
    url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262171740-us-stock-dow-nasdaq-drop-fed-rate-25-basis-points-chip-spacex-tradingkey",
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
  "美股連跌第三日，收市由 Fed 記者會後轉弱：Dow 51,461.90（-631.21 / -1.21%）、S&P 500 7,551.81（-33.92 / -0.45%）、Nasdaq 25,978.42（-3.15 / -0.01%）、Russell 2000 2,858.81（-11.47 / -0.40%）。",
  "主線不是 25bp 本身，而是 hawkish path：Fed 12-0 加息至 3.75%-4.00%，CNBC/Reuters 指 SEP 顯示多數官員估今年還有一次加息，Warsh 強調 inflation too high for too long。",
  "債息與美元繼續是估值壓力：Reuters 報 2Y yield 升至 4.738%、10Y yield 升至 5.00%，DXY 升 0.63% 至 100.31；VIX 收 17.71（+2.97%），但未見恐慌。",
  "板塊不是全面 risk-off：SOXX +0.64%、XLK +0.10% 抗跌，NVIDIA/Google/Emerald AI 的 AEMA 新聞支撐 AI infrastructure；但 XLE -2.88%、XLF -1.62% 拖低大市。",
  "油價由前一日急升後回吐但仍高：Newsquawk 報 WTI settle $102.43（-$3.40 / -3.21%）、Brent $105.83（-$2.92 / -2.69%）；油價仍在 $100 以上，通脹壓力未消失。",
  "Crypto 採 Binance Vision 2026-09-16 20:00 UTC 1m close（美股 4:00pm ET 附近）：BTC $76,065.30（較 9/15 20:00 UTC -0.23%）、ETH $2,406.62（-0.47%）、SOL $98.11（+0.04%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "51,461.90",
    change: "-631.21 / -1.21%",
    read: "AP/WTOP 精確收市；金融與能源拖累明顯，Dow 對 cyclical/financial 壓力更敏感。",
  },
  {
    asset: "S&P 500",
    close: "7,551.81",
    change: "-33.92 / -0.45%",
    read: "早段曾有升幅，Fed 後轉跌；7,500-7,520 變成短線防守位。",
  },
  {
    asset: "Nasdaq Composite",
    close: "25,978.42",
    change: "-3.15 / -0.01%",
    read: "表面接近平收，背後靠 semis 和部分 mega-cap 撐住；利率壓力仍限制上行。",
  },
  {
    asset: "Russell 2000",
    close: "2,858.81",
    change: "-11.47 / -0.40%",
    read: "小型股第三日受壓；高融資成本與 stronger dollar 對 breadth 不利。",
  },
  {
    asset: "VIX",
    close: "17.71（Yahoo / Cboe quote 口徑）",
    change: "+0.51 / +2.97%",
    read: "波動上升但仍屬有秩序；市場係重新定價 Fed path，不是流動性 panic。",
  },
];

const sectorRows = [
  [
    "Semiconductors / SOXX",
    "$502.06 / +0.64%",
    "最強",
    "晶片股逆市反彈，TradingKey 指 Philadelphia Semiconductor Index +0.63%；AEMA 新聞令 AI power/flexible data center 故事有支撐。",
  ],
  [
    "Technology / XLK",
    "$183.93 / +0.10%",
    "強",
    "大型科技靠 semis、Apple 和部分 AI infrastructure 撐住，但 Microsoft 下跌令升幅有限。",
  ],
  [
    "Health Care / XLV",
    "$167.77 / +0.07%",
    "中性",
    "防守板塊微升，屬避險資金暫泊位，不是強趨勢。",
  ],
  [
    "Utilities / XLU",
    "$41.32 / 0.00%",
    "中性",
    "高息環境令 yield proxy 不算吸引，但油價回吐和防守需求令其守平。",
  ],
  [
    "Industrials / XLI",
    "$168.71 / -0.08%",
    "偏弱",
    "工業股大致貼市，AI 電力鏈個股較強，但運輸/周期壓力抵消。",
  ],
  [
    "Consumer Staples / XLP",
    "$83.33 / -0.48%",
    "偏弱",
    "防守板塊仍跌，反映 stronger dollar、油價高位和消費成本令資金未全面追防守。",
  ],
  [
    "Real Estate / XLRE",
    "$42.81 / -0.60%",
    "弱",
    "10Y 仍在 5% 附近，REITs 估值和融資成本壓力繼續存在。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$110.18 / -0.63%",
    "弱",
    "Amazon 下跌、消費借貸成本高，抵消 Tesla/Apple 小升；零售數據強但可持續性被質疑。",
  ],
  [
    "Materials / XLB",
    "$50.36 / -0.73%",
    "弱",
    "美元升、Fed 偏鷹，令商品 beta 未能受惠油價仍高。",
  ],
  [
    "Communication Services / XLC",
    "$113.00 / -0.90%",
    "弱",
    "Alphabet 跌、internet ETF 亦偏弱；Meta 小升不足以扭轉板塊壓力。",
  ],
  [
    "Financials / XLF",
    "$55.93 / -1.62%",
    "更弱",
    "Reuters 指 financials 是主要拖累之一；高息未必等於利好銀行，市場更擔心信用、曲線和經濟放慢。",
  ],
  [
    "Energy / XLE",
    "$64.03 / -2.88%",
    "最弱",
    "油價從前一日 spike 回吐，能源股由最強變最弱；但油價仍在 $100 以上，所以 macro 通脹壓力未解除。",
  ],
];

const macroRows = [
  {
    topic: "Fed / 利率路徑",
    data: "Fed 12-0 加息 25bp 至 3.75%-4.00%；CNBC 報 dot plot 中 16/18 參與者預期今年還有一次加息，4 人甚至見兩次；Warsh 沒有提交個人 dot。",
    meaning:
      "市場早已 price in 今次加息，真正壓力來自『加一次之後還要加』，令估值折現率繼續上移。",
  },
  {
    topic: "SEP / 經濟預測",
    data: "Fed accessible SEP 顯示 median fed funds rate 年底 2026 為 4.1%、2027 仍 4.1%；Warsh 開場稿提及 2026 real GDP 2.3%、2027 2.4%，PCE inflation 2026 3.7%、2027 2.3%，失業率約 4.1%。",
    meaning:
      "Fed 描述的是『經濟夠強、通脹仍高』，所以市場難以期待很快轉 dovish。",
  },
  {
    topic: "美債息",
    data: "Reuters：2Y yield 升 7.5bp 至 4.738%，10Y yield 升 2.45bp 至 5.00%；CNBC 早段亦指 10Y hover above 5%。",
    meaning:
      "2Y 反映 Fed path，10Y 反映通脹/供給/term premium；兩者一起高企，growth、REITs、小型股都難有估值順風。",
  },
  {
    topic: "原油",
    data: "Newsquawk：WTI (V6) settle $102.43（-$3.40 / -3.21%），Brent (X6) settle $105.83（-$2.92 / -2.69%）；Reuters 指 Saudi 經 Oman 補供和 pipeline 修復消息紓緩供應憂慮。",
    meaning: "油價回吐幫 Fed 壓力稍降，但 $100+ 油仍會推高通脹預期和消費成本。",
  },
  {
    topic: "美元 / 黃金",
    data: "Reuters：DXY 升 0.63% 至 100.31；spot gold 跌 0.69% 至 $4,263.19。Yahoo futures 口徑顯示 gold future 約 $4,329.70，與 spot/結算時間不同。",
    meaning:
      "強美元和較高實質利率壓住黃金與 crypto；若 DXY 企穩 100 上方，風險資產反彈阻力更大。",
  },
  {
    topic: "經濟數據",
    data: "Reuters：8 月 retail sales +1.2%，core/control group +1.4%，均強過預期；import prices +0.7% m/m、+7.0% y/y，core import prices +0.8%。Census calendar 顯示 housing starts 延至 9/17 公布。",
    meaning:
      "消費韌性令 Fed 有空間偏鷹；但進口價格與能源壓力代表 inflation risk 仍未收斂。",
  },
];

const stockRows = [
  [
    "Nvidia / SOXX",
    "NVDA $213.90 / +0.82%; SOXX $502.06 / +0.64%",
    "Semis 逆市抗跌；NVIDIA、Google、Emerald AI 推出 AEMA，市場把 AI infrastructure 從『耗電瓶頸』重新講成『grid flexibility 解法』。",
  ],
  [
    "AMD / Intel / Broadcom / Micron",
    "AMD $512.50 / +1.65%; INTC $101.05 / +4.03%; AVGO $339.51 / +0.07%; MU $926.55 / -0.11%",
    "晶片股內部偏強但不是全線爆升；Intel/AMD 反彈較明顯，Broadcom/Micron 近乎橫行。",
  ],
  [
    "GE Vernova / Eaton / Corning",
    "GEV 約 $925.09 / +4.79%; ETN $397.80 / +1.38%; GLW $144.16 / +0.41%",
    "AI 電力、grid 和光纖鏈受 AEMA/數據中心電力主題支持，與 broader market 的 Fed 壓力形成對比。",
  ],
  [
    "Oracle / Microsoft",
    "ORCL $143.16 / +2.00%; MSFT $490.30 / -1.37%",
    "Oracle 由前日弱勢反彈，但 Microsoft 下跌反映大型軟件/雲仍受折現率壓住。",
  ],
  [
    "Alphabet / Meta",
    "GOOGL $342.87 / -0.61%; META $673.31 / +0.46%",
    "平台股分化：Google 參與 AEMA 但股價仍跌，Meta 守得較好，XLC 整體仍弱。",
  ],
  [
    "Apple / Tesla / Amazon",
    "AAPL $332.41 / +0.32%; TSLA $358.08 / +0.42%; AMZN $245.96 / -0.99%",
    "消費/mega-cap beta 不是一面倒；Amazon 回落拖 XLY，Apple/Tesla 小升只能局部抵消。",
  ],
  [
    "CrowdStrike / Palo Alto",
    "CRWD $241.36 / -0.47%; PANW $375.65 / +0.15%",
    "Cybersecurity 由早前 relative strength 轉為平淡，Fed day 追 defensive growth 的意欲降低。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$76,065.30",
    "-0.23%",
    "由 $76,240.04 小回落；risk-off 不算猛烈，但美元升至 100 上方壓住 upside。",
  ],
  [
    "ETH",
    "$2,406.62",
    "-0.47%",
    "跌幅略大過 BTC，smart-contract beta 在 Fed hawkish path 下仍偏弱。",
  ],
  [
    "SOL",
    "$98.11",
    "+0.04%",
    "基本持平，未再跌穿前日低位；但仍低於 $100 附近心理位，未算轉強。",
  ],
];

const newsItems = [
  "Fed 首次三年來加息：FOMC 12-0 將 fed funds target range 提至 3.75%-4.00%，Warsh 稱 inflation too high for too long。",
  "SEP 指向年內或再加一次：CNBC 指 16/18 參與者預期今年還有一次 hike，Reuters 亦指 Fed officials expect one more increase and steady in 2027。",
  "美股 Fed 後由升轉跌：AP/WTOP 給出 Dow -631.21、S&P 500 -33.92、Nasdaq -3.15，三大指數連跌第三日。",
  "能源與金融成主要拖累：XLE -2.88%、XLF -1.62%，與 Reuters 指 energy/financials 拖累一致；semis 反而逆市上升。",
  "油價回吐但仍在 $100+：WTI $102.43、Brent $105.83；Saudi pipeline 修復與 Oman 補供消息令 risk premium 部分退潮。",
  "經濟數據支持 Fed 偏鷹：retail sales +1.2%、control group +1.4%，同時 import prices +7.0% y/y 顯示通脹壓力仍大。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,507-7,520 是今日日低/短線承接區；跌穿先看 7,500，再看 7,430-7,450。",
    "7,585（9/15 close）和 7,600 是第一阻力；要收復 7,627 日高才算 Fed day reversal 修復。",
  ],
  [
    "Nasdaq",
    "25,800-25,900 是日內低位附近支持；失守代表 AI/mega-cap bid 都守不住。",
    "26,000 是即市心理關，26,225 日高是第一個真正反彈確認位。",
  ],
  [
    "SOXX",
    "$496-$500 是今日低位/心理支持；跌穿會令 semis 逆市 strength 失效。",
    "$510 是日高阻力，$520-$527 是重新挑戰前段區間的修復位。",
  ],
  [
    "10Y yield",
    "4.94%-4.95% 是今日低位區；跌回此區以下，equities 才有較清楚 relief。",
    "5.00%-5.04% 是估值壓力線；若企穩上方，market multiple 仍要壓縮。",
  ],
  [
    "WTI crude",
    "$100.97 是今日低位，$100 是心理支持；失守才代表 oil shock 真正降溫。",
    "$102.43 settle 之上先看 $105.63 日高；重上 $105 會令通脹交易再升溫。",
  ],
  [
    "DXY",
    "100.00 是突破後支持；跌回 99.60 以下，crypto/gold/growth 才較易喘息。",
    "100.35 今日高位附近是第一阻力；突破會強化全球美元緊縮感。",
  ],
];

const planRows = [
  [
    "短線",
    "Fed day 後不要只看 headline 25bp；重點是 10Y 能否跌回 5% 以下、DXY 能否失守 100，以及 S&P 500 能否守住 7,500-7,520。",
  ],
  [
    "板塊",
    "Semis/AI infrastructure 是今日 relative strength，但若債息繼續升，亦可能由強轉弱；energy 由油價回吐拖低，短線不宜只憑油價高追入。",
  ],
  [
    "個股",
    "GEV/ETN/GLW 受 AI power theme 支持，NVDA/AMD/INTC 仍有買盤；MSFT/AMZN/GOOGL 是觀察大型 growth 壓力的溫度計。",
  ],
  [
    "Macro",
    "下一步看市場會否把 SEP 的『多一次 hike』消化成終端利率上移，還是認為 Fed 已開始重新建立抗通脹可信度。",
  ],
  [
    "Crypto",
    "BTC/ETH/SOL 沒有大跌，但也未擺脫美元和實質利率壓力；倉位仍要預留 Fed 後第二日波幅。",
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

export default function USCloseBrief20260916() {
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
          {reportDate} 收市｜Fed 鷹派加息後連跌第三日；10Y 企 5%、 美元突破
          100，semis 抗跌但 energy/financials 拖市
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
            今晚是「Fed 不是只加一次」重新定價。25bp 本身市場已經預期， 但 Warsh
            記者會反覆講通脹仍太高、經濟和就業仍夠強，加上 SEP
            顯示多數官員估今年還有一次 hike，令早段反彈被沽回。10Y 債息收在 5%
            附近、美元指數升穿 100，資金先減 financials、energy 和
            rate-sensitive 倉，保留 semis / AI infrastructure 這條相對強線。
          </p>
          <h3>資金點諗</h3>
          <ul>
            <li>
              Fed credibility trade 回來：市場寧願先相信利率 higher for longer。
            </li>
            <li>
              Semis 抗跌不是等於大市轉強，而是 AEMA / AI power
              主題令部分資金繼續留在 AI infrastructure。
            </li>
            <li>
              油價回吐令 energy 由昨日最強變今日最弱，但 $100+
              油仍然是通脹和消費壓力來源。
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
                        state === "最強" || state === "強"
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
            Sector proxy 使用 Yahoo Finance chart / 4:00pm ET 附近市場截數；
            XLC、XLRE 等個別日線 close 欄位滯後時，以 19:59-20:00 UTC
            分鐘線與公開 quote snapshots 交叉核對。Gate/TradingKey 亦確認
            energy/financials 弱、semis 逆市強。
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
              <span className="tag green">綠</span> Semis / AI
              infrastructure：SOXX +0.64%，NVDA +0.82%，GEV +4.79%。
            </li>
            <li>
              <span className="tag amber">黃</span> Mega-cap tech：AAPL、TSLA、
              META 小升，但 MSFT、AMZN、GOOGL 下跌。
            </li>
            <li>
              <span className="tag amber">黃</span> Crypto：BTC/ETH 小跌、SOL
              持平，未 panic 但仍受美元和實質利率限制。
            </li>
            <li>
              <span className="tag red">紅</span> Financials：XLF -1.62%，Fed
              path 和信用/曲線壓力壓住銀行。
            </li>
            <li>
              <span className="tag red">紅</span> Energy：XLE -2.88%，油價 risk
              premium unwind 後板塊由強轉弱。
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
                <th>對 9/15 20:00 UTC</th>
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
            Vision public data API 1-minute kline；時間點為 2026-09-16 20:00:00
            UTC，即美股正常收市 4:00pm ET 附近。對比基準為上一交易日 2026-09-15
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
            最終觀點：今晚不是崩盤，而是 Fed 把「通脹仍未受控」重新放回交易桌。
            大市要止跌，最實際不是靠一句 dovish 解讀，而是看 10Y 是否離開 5%、
            DXY 是否跌回 100 以下，以及 semis 的相對強勢能否擴散到更闊市場。
            在此之前，反彈以 trading bounce 看待，倉位要先控制 Fed
            後第二日波幅。
          </p>
        </article>

        <article className="card wide">
          <h2>12. 來源、口徑與免責聲明</h2>
          <p className="note">
            數據衝突處理：指數收市採 AP/WTOP 精確點數，並與 Reuters/TradingKey
            百分比敘事核對；Reuters 盤中文章部分數字曾顯示較大跌幅，主文採
            4:00pm ET 後 AP close。ETF/個股以 Yahoo Finance chart 和 19:59-20:00
            UTC 分鐘線作 4:00pm ET 附近 close，XLC/XLRE/CRWD/PANW/GEV/META
            的日線 close 欄位一度滯後，已用公開 quote snapshots 交叉核對；油價採
            Newsquawk settlement，Reuters 作供應背景；Fed 採 Federal Reserve
            statement/SEP、CNBC 和 Reuters；gold 採 Reuters spot，Yahoo futures
            只作口徑差異參考；Crypto 採 Binance Vision 20:00 UTC 1-minute
            kline。
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
