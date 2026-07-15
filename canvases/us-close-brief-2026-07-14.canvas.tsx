import React from "react";

const reportDate = "2026-07-14";
const publishedAt = "香港時間 2026-07-15 07:00";

const sources = [
  {
    name: "AP - How major US stock indexes fared Tuesday 7/14/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-eda3fd144dc773fc32cc6c69898d53b0",
  },
  {
    name: "CNBC - Stock market news for July 14, 2026",
    url: "https://www.cnbc.com/2026/07/13/stock-market-today-live-updates.html",
  },
  {
    name: "Reuters via Yahoo Finance - S&P 500 and Nasdaq end higher on cool inflation data",
    url: "https://finance.yahoo.com/markets/stocks/articles/p-500-dow-futures-dip-114652034.html",
  },
  {
    name: "Reuters via Channel NewsAsia - Stocks gain on softer inflation, bank results while oil rises",
    url: "https://www.channelnewsasia.com/business/stocks-gain-softer-inflation-bank-results-while-oil-rises-us-iran-hostilities-6252286",
  },
  {
    name: "BLS - Consumer Price Index Summary, June 2026",
    url: "https://www.bls.gov/news.release/cpi.nr0.htm",
  },
  {
    name: "CNBC - Bank earnings live updates: JPM, BofA, Citi, Goldman",
    url: "https://www.cnbc.com/2026/07/14/jpm-bank-of-america-citi-bank-earnings-live-updates.html",
  },
  {
    name: "Reuters via Investing.com - Wall Street bank earnings surge",
    url: "https://www.investing.com/news/economy-news/wall-street-bank-earnings-surge-lifted-by-trading-and-investment-banking-4791211",
  },
  {
    name: "CNBC - IBM stock craters after company issues second-quarter earnings warning",
    url: "https://www.cnbc.com/2026/07/14/ibm-warns-second-quarter-earnings-fell-short-of-expectations.html",
  },
  {
    name: "IBM Newsroom - Arvind Krishna's Letter to IBM Investors",
    url: "https://newsroom.ibm.com/2026-07-14-Arvind-Krishnas-Letter-to-IBM-Investors",
  },
  {
    name: "CNBC - CBOE Volatility Index quote",
    url: "https://www.cnbc.com/quotes/.VIX",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Exa market snapshots - sector ETF and stock closes",
    url: "https://exa.ai/library/markets/stock/XLK?date=2026-07-14",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "Dow Jones",
    "52,508.27",
    "+9.63 / +0.02%",
    "升幅幾乎貼地；IBM 暴跌壓住 Dow，但銀行與晶片反彈幫大市穩住陣腳。",
  ],
  [
    "S&P 500",
    "7,543.59",
    "+28.25 / +0.38%",
    "收復前一日部分跌幅，CPI 冷過預期令債息回落，風險胃納稍為回暖。",
  ],
  [
    "Nasdaq Composite",
    "26,107.01",
    "+233.83 / +0.90%",
    "晶片與 AI winner 反彈，令 Nasdaq 明顯跑贏；但 IBM 提醒軟件/AI capex 仍有分化。",
  ],
  [
    "Russell 2000",
    "2,964.77",
    "+11.60 / +0.39%",
    "小型股跟升但未爆發，代表 risk-on 有改善，不過市場仍未完全放低油價與地緣風險。",
  ],
  [
    "VIX",
    "16.50",
    "-0.66 / -3.85%",
    "CNBC/Cboe 4:15pm EDT quote 報 16.50；保護需求回落，但仍高過上週低位。",
  ],
];

const sectorRows = [
  [
    "Technology / XLK",
    "$183.62 / +1.29%",
    "領先",
    "CPI 降溫拉低折現率，半導體回補帶動科技板塊修復。",
  ],
  [
    "Semiconductors / SOXX",
    "$567.92 / +2.58%",
    "反彈",
    "SOXX 不是 S&P sector，但最能反映 AI hardware 情緒；前一日急跌後有資金買返。",
  ],
  [
    "Energy / XLE",
    "$56.95 / +0.37%",
    "續強",
    "油價仍升，能源未再爆升但保持正回報，成為通脹 hedge。",
  ],
  [
    "Financials / XLF",
    "$56.18 / +0.20%",
    "業績支撐",
    "大型銀行交易收入與投行費用強，抵消部分利率與信貸風險。",
  ],
  [
    "Materials / XLB",
    "$50.64 / +0.12%",
    "小升",
    "美元轉弱有少少幫助，但油價與地緣不確定性限制上行。",
  ],
  [
    "Industrials / XLI",
    "$180.45 / +0.04%",
    "近乎持平",
    "大市回穩但油價升令成本壓力未散，工業股只係勉強守住。",
  ],
  [
    "Utilities / XLU",
    "$45.69 / -0.07%",
    "偏弱",
    "債息雖跌但 30Y 仍高，收益型板塊未見強勢。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$115.90 / -0.12%",
    "跑輸",
    "油價升對消費 beta 有壓力；科技反彈未有全面擴散到 discretionary。",
  ],
  [
    "Communication Services / XLC",
    "$111.45 / -0.13%",
    "分化",
    "GOOGL/META 個股反彈，但 ETF close 仍略跌，反映板塊內部未算齊整。",
  ],
  [
    "Real Estate / XLRE",
    "$44.48 / -0.49%",
    "紅燈",
    "長端利率仍高，REITs 對估值與融資成本較敏感。",
  ],
  [
    "Consumer Staples / XLP",
    "$83.42 / -1.38%",
    "防守失色",
    "risk-on 回暖時資金由防守股流走，staples 明顯跑輸。",
  ],
  [
    "Health Care / XLV",
    "$158.29 / -1.93%",
    "最弱大板塊",
    "資金追逐 tech/banks，低 beta 醫療股被減持，成為今日板塊拖累。",
  ],
];

const stockRows = [
  [
    "NVDA / AMD",
    "NVDA $211.80 / +4.06%；AMD $548.13 / +2.57%",
    "Reuters/Yahoo 指更多中國公司獲准購買高階 AI chips，配合 CPI 降溫，令前一日被沽的 chip trade 有反彈。",
  ],
  [
    "MU / INTC / AVGO / TSM",
    "MU +4.92%、INTC +4.50%、AVGO +1.32%、TSM -0.28%",
    "AI hardware 不是全線齊升；memory 與美股 chip beta 反彈較強，TSM 則相對滯後。",
  ],
  [
    "IBM",
    "$217.07 / -25.21%",
    "IBM 預警 Q2 低過預期；公司信中指客戶把 capex 轉向 servers、storage、memory，拖累軟件與 Z/mainframe 相關交易。",
  ],
  [
    "JPM / GS / BAC",
    "JPM $342.89 / +2.50%；GS $1,140.00 / +9.00%；BAC $60.62 / +1.88%",
    "大行業績普遍 beat，equities trading 與投行費用強；Goldman equities revenue +72%，JPM equities trading revenue +86%。",
  ],
  [
    "C / WFC",
    "Exa snapshot：C $133.27 / -5.29%；WFC $85.29 / -2.71%",
    "Reuters 對銀行個股收市變動有不同口徑，本文保留差異；重點是 sector 受強交易收入支撐但內部分化。",
  ],
  [
    "AAPL / MSFT / AMZN",
    "AAPL $314.86 / -0.77%；MSFT $384.93 / -1.55%；AMZN $247.49 / +0.07%",
    "mega-cap 平台股未有齊升，資金更集中在 chip/bank recovery，而非全面買回大型科技。",
  ],
  [
    "META / GOOGL",
    "META $661.04 / +0.66%；GOOGL $359.51 / +1.99%",
    "廣告與雲相關名字有買盤，但 XLC ETF 仍略跌，顯示板塊分化。",
  ],
  [
    "SPCX / IPO risk proxy",
    "$136.08 / -2.20%",
    "即使大市反彈，新上市/高估值 story 股仍有壓力；市場未完全回到無差別 risk-on。",
  ],
];

const macroRows = [
  [
    "CPI / inflation",
    "BLS：June headline CPI -0.4% m/m、+3.5% y/y；core CPI 0.0% m/m、+2.6% y/y",
    "通脹明顯冷過預期，是今日股債同時喘定的主因；市場暫時把昨日油價 shock 放在第二位。",
  ],
  [
    "FedWatch / rate pricing",
    "Reuters/ST/TradingKey 引 CME FedWatch：7 月維持利率不變機率約 83.4%，+25bp 約 16.6%",
    "前一日市場擔心加息，今日 CPI 直接把 July hike 風險打低；但油價仍令年內路徑未完全安全。",
  ],
  [
    "Treasury yields",
    "Reuters/CNA：2Y 4.196%（-6.75bp）、10Y 4.589%（-2.06bp）、30Y 5.1031%（+0.51bp）",
    "短端跌幅較大，反映 Fed 預期轉鴿；長端仍硬，說明赤字、油價與期限溢價壓力未消失。",
  ],
  [
    "Oil / Middle East",
    "WTI +1.5% / +$1.20 至 $79.34；Brent +1.7% / +$1.43 至 $84.73",
    "油價無再似前一日急抽 9%，但仍向上；通脹降溫與油價升形成拉鋸。",
  ],
  [
    "DXY / 美元",
    "Reuters/CNA：DXY -0.33% 至 100.94；EUR +0.33% 至 $1.1418",
    "美元跟隨短端利率回落，有利黃金、部分商品與風險資產估值。",
  ],
  [
    "Gold / precious metals",
    "Reuters/CNA：spot gold +1.29% 至 $4,051.79/oz",
    "金價受美元與實質利率回落支撐；同時中東風險仍令避險需求有底。",
  ],
  [
    "Volatility",
    "VIX 16.50 / -3.85%；Investing delayed page 曾見 17.30/+0.82% 口徑",
    "本文採 CNBC/Cboe 4:15pm quote 作收市口徑；不同頁面時間戳差異已在來源段標明。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$64,564.23",
    "+3.70% vs 7/13 20:00 UTC",
    "Binance data-api 1m kline：2026-07-14 20:00:00 UTC close，即美股 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$1,877.26",
    "+5.81% vs 7/13 20:00 UTC",
    "ETH 彈力最大，反映美元回落與 risk appetite 改善對高 beta crypto 有支持。",
  ],
  [
    "SOLUSDT / SOL",
    "$77.16",
    "+2.65% vs 7/13 20:00 UTC",
    "SOL 跟升但跑輸 ETH/BTC；短線仍要留意 $75-$77 區是否由阻力變支持。",
  ],
];

const notes = [
  "美股反彈：Dow +9.63 至 52,508.27；S&P 500 +0.38% 至 7,543.59；Nasdaq +0.90% 至 26,107.01。",
  "核心催化是 CPI 冷過預期：headline -0.4% m/m、3.5% y/y；core 0.0% m/m、2.6% y/y，令 July hike 機率跌至約 16.6%。",
  "科技/晶片買返：XLK +1.29%、SOXX +2.58%，NVDA +4.06%、AMD +2.57%、MU +4.92%。",
  "但不是全面 risk-on：IBM -25.21%，XLV -1.93%、XLP -1.38%，SPCX -2.20%，反映資金仍揀股。",
  "宏觀拉鋸：2Y/10Y 跌至約 4.196%/4.589%，DXY -0.33%，但 WTI/Brent 仍升至 $79.34/$84.73。",
  "Crypto 採 Binance 4:00pm ET 附近價格：BTC $64,564.23、ETH $1,877.26、SOL $77.16，全部較前一日 20:00 UTC 反彈。",
];

const technicalLevels = [
  [
    "Dow Jones",
    "52,500 / 53,000",
    "收 52,508.27，剛企回 52,500；但升幅太細，要突破 53,000 才算藍籌重新發力。",
  ],
  [
    "S&P 500",
    "7,500 / 7,550",
    "收 7,543.59，重上 7,500 但仍貼近 7,550；若企穩 7,550，短線可望修復昨日跌幅。",
  ],
  [
    "Nasdaq Composite",
    "26,000 / 26,300",
    "收 26,107.01，重新站上 26,000；下一步要看 chip rally 能否推上 26,300。",
  ],
  [
    "Russell 2000",
    "2,950 / 3,000",
    "收 2,964.77，守住 2,950 但仍未回到 3,000；breadth 只是改善，未算大爆發。",
  ],
  [
    "VIX",
    "16.5 / 18",
    "16.50 回落有利風險資產；若再上 18，代表油價或地緣風險重新主導。",
  ],
  [
    "SOXX",
    "$560 / $580",
    "收 $567.92，從 $550 附近反彈；要升穿 $580，chip leadership 才算更穩。",
  ],
  [
    "10Y Treasury",
    "4.55% / 4.65%",
    "10Y 約 4.589%；跌穿 4.55% 對 growth 更友善，重上 4.65% 則估值壓力回來。",
  ],
  [
    "WTI / Brent",
    "$80 / $85",
    "WTI $79.34、Brent $84.73；Brent $85 是通脹風險線，企穩會削弱 CPI 利好。",
  ],
  [
    "BTC",
    "$64,000 / $66,000",
    "BTC 4pm ET 約 $64.56k；守 $64k 有利 risk-on 延續，$66k 是下一個確認位。",
  ],
];

const watchList = [
  "PPI 與零售數據：CPI 冷只是第一步，企業成本與消費韌性會決定 Fed pricing 能否再轉鴿。",
  "Fed Chair Kevin Warsh 後續講話：市場會留意他如何平衡油價、地緣風險與已降溫的核心通脹。",
  "銀行業績第二波：Morgan Stanley 等後續結果會驗證交易收入與 dealmaking 是否行業性爆發。",
  "IBM 連鎖反應：留意 software、IT services、mainframe/enterprise tech 是否被重新估值。",
  "Brent $85 與 10Y 4.65%：兩者同時上破會削弱今天 CPI rally。",
  "SOXX $580：如果 chip ETF 企回 $580，AI hardware 可由反彈變回 leadership。",
  "VIX 18：升穿代表市場重新買保護，今日 risk-on 可能只是短線反抽。",
  "Crypto：BTC $64k、ETH $1.85k、SOL $77 是短線 risk appetite 防線。",
];

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="card">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.join("-")}>
            {row.map((cell, index) => (
              <td key={`${cell}-${index}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function USCloseBrief20260714() {
  return (
    <main className="page">
      <style>{`
        .page {
          width: 1120px;
          min-height: 1580px;
          margin: 0 auto;
          padding: 48px;
          background: #f6f8fb;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.55;
        }
        .hero {
          background: linear-gradient(135deg, #111827 0%, #064e3b 52%, #1d4ed8 100%);
          color: white;
          border-radius: 28px;
          padding: 42px;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
        }
        .eyebrow { font-size: 16px; opacity: 0.86; letter-spacing: 0.08em; }
        h1 { font-size: 48px; margin: 10px 0 14px; line-height: 1.12; }
        .subtitle { font-size: 22px; max-width: 920px; opacity: 0.94; }
        .meta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 22px; }
        .pill {
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 15px;
        }
        .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; margin-top: 24px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 26px;
          box-shadow: 0 16px 34px rgba(15, 23, 42, 0.06);
        }
        h2 { font-size: 25px; margin: 0 0 16px; color: #0f172a; }
        h3 { font-size: 19px; margin: 18px 0 8px; color: #047857; }
        ul { padding-left: 22px; margin: 10px 0; }
        li { margin: 8px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 15px; }
        th {
          background: #ecfdf5;
          color: #065f46;
          text-align: left;
          padding: 10px;
          border-bottom: 1px solid #a7f3d0;
        }
        td { padding: 11px 10px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
        .callout {
          border-left: 5px solid #059669;
          background: #f0fdf4;
          padding: 14px 16px;
          border-radius: 14px;
          margin: 14px 0;
        }
        .small { color: #64748b; font-size: 14px; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>

      <header className="hero">
        <div className="eyebrow">美股收盤懶人包｜完整版</div>
        <h1>CPI 降溫撐起科技反彈，IBM 暴跌提醒 AI 支出有分化</h1>
        <p className="subtitle">
          7 月 14 日美股反彈：June CPI 冷過預期，短端債息回落，Nasdaq 與
          半導體買盤回來。不過油價仍升、IBM 因企業客戶 capex 轉向 hardware
          而暴跌，說明今日係「選擇性 risk-on」，不是所有成長股都一齊安全。
        </p>
        <div className="meta">
          <span className="pill">交易日：{reportDate}</span>
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">語言：繁體中文 / 廣東話語氣</span>
          <span className="pill">
            Crypto：Binance data-api 20:00 UTC 1m close
          </span>
        </div>
      </header>

      <div className="grid">
        <Card title="1｜30 秒重點">
          <ul>
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <div className="callout">
            今日結論：CPI 冷過預期令市場鬆一口氣，科技與銀行可以反彈；但 Brent
            已貼近 $85、30Y 仍在 5.10% 附近，加上 IBM 暴跌，代表要買都要分清
            chip/bank momentum 同 enterprise software
            壓力，唔好當成全面牛市訊號。
          </div>
        </Card>

        <Card title="2｜大市一眼睇">
          <DataTable
            headers={["指標", "收市", "變動", "解讀"]}
            rows={indexRows}
          />
        </Card>

        <Card title="3｜市場寬度與風險胃納">
          <ul>
            <li>
              AP、CNBC 與 Reuters 對三大指數口徑大致一致：S&P 500 約 +0.4%、Dow
              近乎持平、Nasdaq 約 +0.9%，科技重新領先。
            </li>
            <li>
              Russell 2000 +0.39%，表示 risk appetite 有改善，但力度細過
              Nasdaq， 未算全面擴散。
            </li>
            <li>
              VIX 回落至 16.50，保護需求下降；但油價仍升，所以市場只是由昨日
              risk-off 回穩，未完全解除警報。
            </li>
            <li>
              板塊上，XLK/SOXX 與 XLF 有支持，XLV/XLP 跑輸，顯示資金由防守轉向
              高 beta 與業績受惠股。
            </li>
          </ul>
        </Card>

        <Card title="4｜板塊紅綠燈">
          <DataTable
            headers={["板塊 / ETF proxy", "變動", "訊號", "一句講晒"]}
            rows={sectorRows}
          />
          <p className="small">
            板塊 ETF proxy 採 Exa market snapshot 7/14 close；Benzinga/Yahoo
            quote 快照在盤中時間有不同百分比，本文在第 12 部分標明差異。SOXX
            不是 S&P 500 sector，但保留作 AI hardware 溫度計。
          </p>
        </Card>

        <Card title="5｜點解今日會咁走？">
          <h3>1）CPI 冷過預期，Fed hike 恐懼即刻降溫</h3>
          <ul>
            <li>
              BLS 報 June CPI 按月跌 0.4%，core CPI 按月零增長；這組數字直接令
              2Y yield 下跌，growth stock 估值壓力下降。
            </li>
            <li>
              市場按 CME FedWatch 重新定價：7 月 hold 機率約
              83.4%，昨日的加息恐懼 明顯降溫。
            </li>
          </ul>
          <h3>2）銀行業績幫風險胃納補血</h3>
          <ul>
            <li>
              JPMorgan、Bank of America、Citigroup、Wells Fargo、Goldman Sachs
              均報 earnings beat；Reuters 指 trading revenue
              與投行費用是主要動力。
            </li>
            <li>
              Goldman equities revenue +72%、JPM equities trading revenue +86%，
              反映波動市與大型 IPO/dealmaking 對華爾街大行有利。
            </li>
          </ul>
          <h3>3）IBM 暴跌提醒：AI 不是所有科技都受惠</h3>
          <ul>
            <li>
              IBM 預警軟件與基建業務短缺，股價跌約 25%；管理層指客戶把資本開支
              轉去 servers、storage、memory，以應付供應緊張與潛在加價。
            </li>
            <li>
              白話講：AI capex 可以利好 chips/memory，但同時可以擠壓 enterprise
              software/mainframe 預算，科技板塊內部贏輸更分明。
            </li>
          </ul>
        </Card>

        <Card title="6｜宏觀白話版">
          <DataTable headers={["項目", "數據", "解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：今日 macro 是「CPI 鬆一口氣」對「油價仍未放鬆」的拔河。
            短端債息與美元跌，對科技/crypto 友善；但 Brent 貼近 $85、30Y 接近
            5.10%，長線通脹和財政風險仍未散。
          </div>
        </Card>

        <Card title="7｜重點股票與資金流">
          <DataTable
            headers={["股票/主題", "收市表現", "原因"]}
            rows={stockRows}
          />
        </Card>

        <Card title="8｜BTC / ETH / SOL">
          <DataTable
            headers={["幣種", "4:00pm ET 附近價", "對比/24h", "來源/備註"]}
            rows={cryptoRows}
          />
          <p className="small">
            Crypto 採 Binance data-api 1-minute kline，時間點為 2026-07-14
            20:00:00 UTC（美股 4:00pm ET 附近）；對比基準為 2026-07-13 20:00:00
            UTC。直接 Binance spot API 如受地區限制，官方 public data/data-api
            是較可重現口徑。
          </p>
        </Card>

        <Card title="9｜技術位">
          <DataTable
            headers={["市場", "位置", "意義"]}
            rows={technicalLevels}
          />
        </Card>

        <Card title="10｜明日/本週事件焦點">
          <ul>
            {watchList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        <Card title="11｜操作提示與最終觀點">
          <ul>
            <li>
              <strong>短線：</strong>
              可以承認 CPI rally 有效，但要等 S&P 500 企穩 7,550、SOXX 企上
              $580，先算反彈由 technical bounce 變成 leadership 回歸。
            </li>
            <li>
              <strong>中線：</strong>
              AI infrastructure 故事繼續，但 IBM 事件提醒資金會由 software 轉去
              hardware/memory；選股比追整個科技板塊更重要。
            </li>
            <li>
              <strong>風控：</strong>
              Brent 企穩 $85、10Y 重上 4.65%、VIX 回到 18 以上，或者下一批通脹/
              消費數據反彈，都要降低高 beta 倉位。
            </li>
            <li>
              <strong>一句到尾：</strong>
              今日係「CPI 救市、chips 反彈、banks 有業績、IBM 爆雷」的分化市；
              可以跟強勢，但唔好因一日反彈就忘記油價同長債息風險。
            </li>
          </ul>
        </Card>

        <Card title="12｜來源、數據差異與免責聲明">
          <h3>主要來源</h3>
          <ul>
            {sources.map((source) => (
              <li key={source.url}>
                <a href={source.url}>{source.name}</a>
              </li>
            ))}
          </ul>
          <h3>數據差異處理</h3>
          <ul>
            <li>
              指數收市：AP 與 CNBC 報 Dow 52,508.27、S&P 500 7,543.59、Nasdaq
              26,107.01；Reuters/Yahoo 報 Dow 52,508.66、S&P 500
              7,543.89、Nasdaq 26,107.01，差異很小，本文採 AP/CNBC
              收市口徑並標明 Reuters 差異。
            </li>
            <li>
              Russell 2000：AP/搜尋摘要報 2,964.77、+11.60/+0.39%；若即時供應商
              有微小差距，本文以 AP 主要指數稿為準。
            </li>
            <li>
              Sector ETF/個股：Yahoo chart API 今次回 429；本文用 Exa market
              snapshots 7/14 close 作可重現 quote 口徑，並用
              CNBC/Reuters/Benzinga 敘事交叉核對。 Benzinga/Yahoo 盤中 quote
              頁曾有不同百分比，屬時間戳差異。
            </li>
            <li>
              VIX：CNBC/Cboe 4:15pm quote 與 Yahoo historical snippet 報
              16.50/-3.85%； Investing delayed page 曾顯示 17.30/+0.82%。本文採
              CNBC/Cboe 收市口徑。
            </li>
            <li>
              Oil/Treasury/DXY/Gold：採 Reuters/CNA multi-asset 收市稿；油價為
              WTI $79.34、Brent $84.73，10Y 為 4.589%，DXY 100.94，spot gold
              $4,051.79。
            </li>
            <li>
              Crypto：直接 Binance spot API 如受地區限制，本文使用 Binance
              data-api 1m kline，精確取 2026-07-14 20:00 UTC close。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
