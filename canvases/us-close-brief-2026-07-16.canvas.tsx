import React from "react";

const reportDate = "2026-07-16";
const publishedAt = "香港時間 2026-07-17 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market news for July 16, 2026",
    url: "https://www.cnbc.com/2026/07/15/stock-market-today-live-updates.html",
  },
  {
    name: "AP syndicated - Slumping AI stocks drag down markets around the world",
    url: "https://www.compuserve.com/news/world/story/0001/20260716/e1c646be279423406586c67c79e738e4",
  },
  {
    name: "Reuters via Yahoo Finance - Chipmakers put pressure on equity indexes globally",
    url: "https://sg.finance.yahoo.com/news/asian-shares-slump-chipmaker-drag-022037813.html",
  },
  {
    name: "Yahoo Finance chart API - index, ETF and stock close data",
    url: "https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC?interval=1d",
  },
  {
    name: "U.S. Census Bureau - Advance Monthly Retail Sales, June 2026",
    url: "https://www.census.gov/retail/sales.html",
  },
  {
    name: "CNBC - Treasury yields rise amid mounting U.S.-Iran tensions",
    url: "https://www.cnbc.com/2026/07/16/us-treasury-yields-wall-street-inflation-employment-data.html",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "CNBC - Dollar near one-month low as oil risk lingers",
    url: "https://www.cnbc.com/2026/07/16/dollar-near-one-month-low-as-cooling-inflation-curbs-fed-hike-bets.html",
  },
  {
    name: "Cboe - VIX Volatility Products",
    url: "https://www.cboe.com/tradable-products/vix/",
  },
  {
    name: "TSMC SEC filing - Q2 2026 earnings and guidance",
    url: "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000451/a2q26e_withguidancexfinal.htm",
  },
  {
    name: "CNBC - TSMC second-quarter profit spikes over 77%",
    url: "https://www.cnbc.com/2026/07/16/tsmc-second-quarter-profit-.html",
  },
  {
    name: "CNBC - Alphabet shares fall on Gemini 3.5 Pro delay report",
    url: "https://www.cnbc.com/2026/07/16/alphabet-stock-gemini-3-5-pro-ai.html",
  },
  {
    name: "CNBC - Stocks making the biggest moves midday",
    url: "https://www.cnbc.com/2026/07/16/stocks-making-the-biggest-moves-midday-man-abt-unh-tsm-more.html",
  },
  {
    name: "CNBC - Netflix Q2 2026 earnings",
    url: "https://www.cnbc.com/2026/07/16/netflix-nflx-earnings-q2-2026.html",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "Dow Jones",
    "52,552.97",
    "-105.67 / -0.20%",
    "藍籌輕微回落，跌幅細過 Nasdaq；健康護理與防守板塊有承接，抵消部分科技沽壓。",
  ],
  [
    "S&P 500",
    "7,533.77",
    "-38.63 / -0.51%",
    "大盤由高位回吐，但等權重 ETF RSP 仍升約 0.98%，反映今日不是全面 risk-off。",
  ],
  [
    "Nasdaq Composite",
    "25,881.95",
    "-387.28 / -1.47%",
    "半導體、Alphabet 與其他 mega-cap tech 同跌，令科技指數明顯跑輸。",
  ],
  [
    "Russell 2000",
    "2,974.57",
    "-1.69 / -0.06%",
    "小型股幾乎持平，較 Nasdaq 抗跌；資金沒有全面撤出 cyclical / domestic beta。",
  ],
  [
    "VIX",
    "16.73",
    "+1.06 / +6.76%",
    "波動率由低位反彈，但仍低於 18，表示市場是調整估值，不是恐慌式拋售。",
  ],
];

const sectorRows = [
  [
    "Consumer Staples / XLP",
    "+2.80%",
    "領先",
    "防守消費成為避風港，資金由高估值 AI beta 轉去穩定現金流。",
  ],
  [
    "Health Care / XLV",
    "+2.22%",
    "領先",
    "UnitedHealth、Abbott 等業績與指引改善，撐起醫療板塊。",
  ],
  [
    "Real Estate / XLRE",
    "+2.02%",
    "反彈",
    "即使 10Y 靠近 4.56%，REITs 仍有補倉買盤，顯示低位板塊有輪動。",
  ],
  [
    "Energy / XLE",
    "+0.92%",
    "靠穩",
    "油價仍受中東風險支撐，但 WTI 收市回落，能源股升幅不算失控。",
  ],
  ["Materials / XLB", "+0.77%", "偏強", "受惠大市廣度改善及 cyclicals 輪動。"],
  [
    "Utilities / XLU",
    "+0.55%",
    "防守",
    "VIX 上升時有資金泊入，但債息偏高限制估值擴張。",
  ],
  [
    "Financials / XLF",
    "+0.34%",
    "穩定",
    "銀行業績季開局強，市場仍相信信貸與資本市場活動未轉差。",
  ],
  [
    "Consumer Discretionary / XLY",
    "+0.29%",
    "窄幅升",
    "零售數據顯示消費有韌性，但高油價與高利率令升幅受限。",
  ],
  [
    "Industrials / XLI",
    "+0.05%",
    "持平",
    "Cintas 強、GE Aerospace 弱，板塊內部分化。",
  ],
  [
    "Communication Services / XLC",
    "-0.64%",
    "轉弱",
    "Alphabet 因 Gemini 3.5 Pro 延遲報道跌 4.44%，拖累整個通訊服務。",
  ],
  [
    "Technology / XLK",
    "-2.24%",
    "跑輸",
    "AI 軟硬件同時被重新估值，mega-cap tech 未能再撐市。",
  ],
  [
    "Semiconductors / SOXX",
    "-4.46%",
    "最弱",
    "TSMC capex 上調引發 AI 投資回報疑慮，SMH 亦跌 3.70%。",
  ],
];

const stockRows = [
  [
    "TSM / TSMC",
    "$409.74 / -2.32%",
    "Q2 淨利 NT$706.56B、同比 +77.4%，但全年 capex 指引由 $52B-$56B 上調至 $60B-$64B，市場擔心 AI 建設成本與回報期。",
  ],
  [
    "GOOGL",
    "$354.46 / -4.44%",
    "CNBC/Bloomberg 報道 Gemini 3.5 Pro 延遲、coding 能力未達內部預期，投資者重新評估 Google 在 AI 模型競爭的位置。",
  ],
  [
    "ARM / MU / AMD / AVGO / NVDA",
    "ARM -5.41%、MU -5.65%、AMD -5.33%、AVGO -5.03%、NVDA -2.40%",
    "半導體沽壓由設備、memory、GPU beta 擴散；之前升得急的 AI hardware 名字被獲利回吐。",
  ],
  [
    "UNH",
    "$423.38 / +1.16%",
    "UnitedHealth Q2 adjusted EPS $6.38、收入 $112.03B，高過 LSEG 預期，並上調全年盈利展望；盤中升幅一度更大。",
  ],
  [
    "ABT",
    "$98.83 / +10.71%",
    "Abbott beat 後上調全年 adjusted EPS 至 $5.45-$5.60，醫療設備與 diagnostics 需求韌性改善 sentiment。",
  ],
  [
    "MAN",
    "$51.65 / +32.37%",
    "ManpowerGroup Q2 EPS $0.99、收入 $4.9B 均勝預期，並指 Q3 revenue 可增 2%-6%，帶動 staffing beta 急升。",
  ],
  [
    "CTAS / GE",
    "CTAS +7.22%；GE -4.06%",
    "Cintas 受業績與 BofA 升級支持；GE Aerospace 雖 beat 並上調指引，股價仍回吐，顯示高預期名單容錯低。",
  ],
  [
    "NFLX（盤後）",
    "常規時段 +0.91%；盤後一度跌逾 8%",
    "Netflix Q2 EPS $0.80 略勝、收入 $12.56B 略低預期；Q3 revenue growth 指引約 12%，低過市場約 13% 預期。",
  ],
];

const macroRows = [
  [
    "Retail sales",
    "Census：June retail and food services sales $768.6B，+0.2% m/m、+6.7% y/y；May 修訂至 +1.0%",
    "headline 符合預期但較 5 月慢；gas station sales -5.3% 拖低總數，ex-gasoline +0.7% 顯示消費底層仍韌。",
  ],
  [
    "Jobless claims / labor",
    "CNBC/Reuters 口徑：week ending July 11 initial claims 208k，低過 Dow Jones 預期 218k；continuing claims 約略高於 1.8M",
    "就業未見急轉差，令 Fed 可以繼續等數據；DOL 官方即時頁在本環境抓到舊版，故本文明確標示採 CNBC/Reuters 口徑。",
  ],
  [
    "Philly Fed / activity",
    "CNBC 引述 Philadelphia Fed manufacturing index 7 月升至 41.4，遠高過 9.8 預期",
    "製造業地區調查大幅改善，配合零售與 claims，整體訊號是 growth resilient，而非衰退交易。",
  ],
  [
    "FedWatch",
    "Investing.com 7/16 07:45 EDT：7/29 hold 87.8%、+25bp 12.2%；其他即時追蹤約 85%-90% hold",
    "CPI/PPI 降溫後近端加息風險下降，但 Logan 等 Fed 官員仍偏 hawkish，市場未完全排除年內再收緊。",
  ],
  [
    "Treasury yields",
    "CNBC：10Y 4.559%、2Y 4.153%、30Y 5.087%；Yahoo chart 10Y proxy close 約 4.569%",
    "債息小升，對長久期科技股不友善；同時也解釋為何好數據未必即時推高 Nasdaq。",
  ],
  [
    "Oil / gold / dollar",
    "WTI Aug 約 $78.95（-0.8%）；Brent 不同時點約 $84.2-$84.5；Gold Aug $3,992.10（-1.5%）；DXY 約 100.77（+0.29%）",
    "中東風險令油價仍高，但日內有獲利回吐；美元反彈和實質利率壓力令黃金回落。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$64,275.99",
    "-1.02%",
    "風險資產同步降溫，BTC 失守前一日 $64.9k 附近。",
  ],
  [
    "ETHUSDT",
    "$1,875.66",
    "-2.47%",
    "ETH 對 AI/高 beta sentiment 更敏感，跌幅大過 BTC。",
  ],
  [
    "SOLUSDT",
    "$75.85",
    "-1.72%",
    "SOL 跟隨 beta 回吐，但跌幅介乎 BTC 與 ETH 之間。",
  ],
];

const technicalRows = [
  [
    "S&P 500",
    "7,500 / 7,570 / 7,620",
    "守 7,500 代表只是高位整固；重新企 7,570 先叫修復。",
  ],
  [
    "Nasdaq",
    "25,750 / 26,000 / 26,300",
    "25,750 是短線防線；26,000 下方代表 tech momentum 仍弱。",
  ],
  [
    "SOXX / SMH",
    "SOXX 525 / 545；SMH 560 / 590",
    "晶片 ETF 要先止跌，否則大市升幅會繼續靠防守輪動。",
  ],
  ["VIX", "16 / 18 / 20", "VIX 低於 18 屬可控；升穿 20 才需要明顯降低風險。"],
];

const watchRows = [
  "半導體：TSMC capex、ASML/AI capex 敘事會否繼續壓住 NVDA、AMD、AVGO、ARM。",
  "Alphabet：Gemini 3.5 Pro 延遲是否只是時間表問題，還是模型競爭力問題。",
  "Netflix：盤後跌幅會否拖累 Friday 的 communication services / streaming sentiment。",
  "宏觀：零售、claims、Philly Fed 都偏韌，留意 Fed 官員會否借機重提加息風險。",
  "油價：WTI $80、Brent $85 附近仍是通脹預期與地緣風險的關鍵分界。",
];

const sourceFootnotes = [
  "指數收市採 CNBC/AP 最終口徑；Russell、VIX、板塊 ETF、個股 close 以 Yahoo Finance chart 1d 資料交叉核對。",
  "Crypto 使用 Binance Vision public data 1-minute kline，採 2026-07-16 20:00 UTC（美股 4:00pm ET 附近）close；變化率對比 2026-07-15 20:00 UTC。",
  "FedWatch 不是官方 Fed 指引，只是 fed funds futures 隱含機率；不同網站更新時間不同，本文標示採用時間點。",
  "初領失業金官方 DOL 頁面在本環境抓取到舊版 PDF，故本文採 CNBC/Reuters 對 July 11 week 的 208k 報道並明確標示口徑。",
];

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
    <section className="card">
      <h2>
        <span>{number}</span>
        {title}
      </h2>
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

export default function USCloseBrief20260716() {
  return (
    <main className="page">
      <style>{`
        .page {
          width: 1120px;
          margin: 0 auto;
          padding: 34px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.55;
        }
        .hero {
          background: linear-gradient(135deg, #111827 0%, #7f1d1d 46%, #0f766e 100%);
          color: white;
          border-radius: 28px;
          padding: 34px;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
        }
        h1 { margin: 0 0 10px; font-size: 46px; line-height: 1.08; letter-spacing: -0.03em; }
        .subtitle { font-size: 19px; opacity: 0.92; }
        .meta { margin-top: 14px; display: flex; gap: 12px; flex-wrap: wrap; }
        .pill {
          display: inline-flex;
          border-radius: 999px;
          padding: 7px 12px;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.24);
          font-size: 13px;
        }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .card {
          margin-top: 18px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 22px;
          padding: 22px;
          box-shadow: 0 16px 34px rgba(15, 23, 42, 0.07);
          break-inside: avoid;
        }
        h2 {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 13px;
          color: #0f766e;
          font-size: 23px;
        }
        h2 span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: #ecfdf5;
          color: #047857;
          font-size: 15px;
          font-weight: 800;
        }
        h3 { margin: 16px 0 8px; color: #334155; font-size: 18px; }
        ul { margin: 0; padding-left: 22px; }
        li { margin: 7px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
        th {
          text-align: left;
          color: #475569;
          background: #f1f5f9;
          border-bottom: 1px solid #cbd5e1;
          padding: 9px;
        }
        td { vertical-align: top; border-bottom: 1px solid #e5e7eb; padding: 9px; }
        .lead {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 16px;
        }
        .stat {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 18px;
          padding: 14px;
        }
        .stat strong { display: block; font-size: 24px; margin-top: 4px; }
        .red { color: #b91c1c; font-weight: 800; }
        .green { color: #047857; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .note { font-size: 12.5px; color: #64748b; }
        .callout {
          border-left: 5px solid #ef4444;
          background: #fff7ed;
          padding: 13px 15px;
          border-radius: 14px;
          margin-top: 10px;
        }
        a { color: #1d4ed8; text-decoration: none; overflow-wrap: anywhere; }
        @media print {
          .page { width: auto; padding: 20px; }
          .card { box-shadow: none; }
        }
      `}</style>

      <section className="hero">
        <h1>美股收盤懶人包｜完整版</h1>
        <div className="subtitle">
          {reportDate} 收市｜AI / 半導體估值降溫，防守與醫療輪動接力
        </div>
        <div className="meta">
          <span className="pill">{publishedAt}</span>
          <span className="pill">資料口徑：美股 4:00pm ET 附近</span>
          <span className="pill">
            Crypto：Binance Vision 20:00 UTC 1m close
          </span>
        </div>
        <div className="lead">
          <div className="stat">
            S&P 500
            <strong>7,533.77</strong>
            <span>-0.51%</span>
          </div>
          <div className="stat">
            Nasdaq
            <strong>25,881.95</strong>
            <span>-1.47%</span>
          </div>
          <div className="stat">
            VIX
            <strong>16.73</strong>
            <span>+6.76%</span>
          </div>
        </div>
      </section>

      <Section number="01" title="30秒重點">
        <ul>
          <li>
            今日不是全面恐慌，而是 <strong>AI / 半導體估值重新定價</strong>：
            Nasdaq -1.47%，SOXX -4.46%，但 RSP +0.98%，八成以外板塊其實有承接。
          </li>
          <li>
            TSMC 業績靚但 capex 指引上調至 $60B-$64B，市場焦點由「AI 需求強」
            轉向「AI 建設成本會否太高」。
          </li>
          <li>
            宏觀數據偏韌：零售 +0.2%、claims 208k、Philly Fed
            41.4；這支持經濟，但同時令債息維持高位。
          </li>
          <li>
            防守消費、醫療、REITs 跑贏；科技與通訊服務跑輸，輪動味道比 panic
            更重。
          </li>
          <li>
            Crypto 跟隨 high beta 回吐：BTC -1.02%、ETH -2.47%、SOL
            -1.72%（Binance 20:00 UTC）。
          </li>
        </ul>
      </Section>

      <Section number="02" title="大市一眼睇">
        <DataTable
          headers={["指數", "收市", "變動", "解讀"]}
          rows={indexRows}
        />
        <p className="note">
          CNBC/AP 對 S&P 500、Dow、Nasdaq 的收市數字一致；Yahoo chart 對 Nasdaq
          顯示 25,881.947，四捨五入後與 CNBC 25,881.95 一致。
        </p>
      </Section>

      <Section number="03" title="板塊紅綠燈 / 熱度圖">
        <DataTable
          headers={["板塊 / ETF", "收市變動", "狀態", "白話解讀"]}
          rows={sectorRows}
        />
      </Section>

      <Section number="04" title="今日升跌原因">
        <h3>點解跌？</h3>
        <ul>
          <li>
            <strong>AI capex shock：</strong>TSMC record profit 仍被賣，因 capex
            指引上調令市場擔心 AI datacenter spending 太重，拖低 semis。
          </li>
          <li>
            <strong>Alphabet execution risk：</strong>Gemini 3.5 Pro
            延遲報道，觸發投資者質疑 Google 在 coding / agentic AI
            競賽中是否落後。
          </li>
          <li>
            <strong>債息不肯跌：</strong>零售、claims、Philly Fed 都偏強，10Y 約
            4.56%，高估值長久期科技自然受壓。
          </li>
        </ul>
        <h3>點解又未算差？</h3>
        <ul>
          <li>
            RSP +0.98%，XLP/XLV/XLRE 領升，表示資金轉倉而不是全部撤離股市。
          </li>
          <li>
            業績季初段仍有支持：CNBC 指已公布的 40 間 S&P 500 公司中，逾 87%
            好過預期。
          </li>
          <li>VIX 只升至 16.73，未突破 18-20 的風險區。</li>
        </ul>
      </Section>

      <Section number="05" title="宏觀白話版">
        <DataTable
          headers={["項目", "數字 / 來源口徑", "市場意思"]}
          rows={macroRows}
        />
      </Section>

      <Section number="06" title="債息、美元、黃金、原油">
        <ul>
          <li>
            <strong>美債：</strong>10Y 4.559%、2Y 4.153%、30Y
            5.087%。曲線仍偏高， 對 Nasdaq valuation multiple 有壓力。
          </li>
          <li>
            <strong>美元：</strong>DXY 約 100.77，日內升
            0.29%，但仍接近一個月低位；軟 CPI/PPI
            限制美元上升，中東油價風險又提供避險支持。
          </li>
          <li>
            <strong>黃金：</strong>August gold 約 $3,992.10，跌
            1.5%；美元反彈與實質利率壓力蓋過避險需求。
          </li>
          <li>
            <strong>原油：</strong>WTI 約 $78.95，跌 0.8%；Brent 不同來源約
            $84.2-$84.5。 油價仍是通脹風險的「反向按鈕」，但今日有獲利回吐。
          </li>
        </ul>
      </Section>

      <Section number="07" title="重點股票">
        <DataTable headers={["股票", "收市 / 變動", "重點"]} rows={stockRows} />
      </Section>

      <Section number="08" title="Crypto：BTC / ETH / SOL">
        <DataTable
          headers={[
            "幣種",
            "Binance 20:00 UTC close",
            "對上一交易日 20:00 UTC",
            "解讀",
          ]}
          rows={cryptoRows}
        />
        <p className="note">
          Binance direct API 在本環境受地區限制；本報告使用 Binance Vision
          public data API 取得 1-minute kline。時間點為 2026-07-16 20:00
          UTC，即美股 4:00pm ET 附近。
        </p>
      </Section>

      <Section number="09" title="技術位與風險線">
        <DataTable headers={["資產", "關鍵位", "點睇"]} rows={technicalRows} />
      </Section>

      <Section number="10" title="明日交易計劃 / 觀察清單">
        <ul>
          {watchRows.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section number="11" title="操作提示">
        <div className="callout">
          今日最重要不是「美股轉熊」，而是「市場開始分辨 AI spending winners 同
          funding risk」。如果你持有高 beta semis，要用 SOXX/SMH
          是否止跌作為第一條風險線；如果你持有大盤， 留意 S&P 500 能否守 7,500。
        </div>
        <ul>
          <li>
            短線不宜追沽防守股，因為輪動已經開始；更適合等回調後分批檢視估值。
          </li>
          <li>
            AI 名字要看 earnings call 對 capex、gross margin、customer financing
            的解釋。
          </li>
          <li>
            若 10Y 升穿 4.65% 同 VIX 升穿 20
            同時出現，才是更明顯降低風險倉位的訊號。
          </li>
        </ul>
      </Section>

      <Section number="12" title="來源、口徑與免責聲明">
        <h3>資料口徑</h3>
        <ul>
          {sourceFootnotes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3>主要來源連結</h3>
        <ul>
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
