import React from "react";

const reportDate = "2026-07-22";
const publishedAt = "香港時間 2026-07-23 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market news for July 22, 2026",
    url: "https://www.cnbc.com/2026/07/21/stock-market-today-live-updates.html",
  },
  {
    name: "Yahoo Finance - Stock market today: Dow, S&P 500, Nasdaq slip as oil prices rise",
    url: "https://finance.yahoo.com/markets/live/stock-market-today-wednesday-july-22-dow-sp-500-nasdaq-alphabet-tesla-083644887.html",
  },
  {
    name: "Investopedia - Markets News, July 22, 2026",
    url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-07222026-12024197",
  },
  {
    name: "Kitco - Gold rallies as buyers test $4,160, oil lifts yields",
    url: "https://www.kitco.com/news/article/2026-07-22/gold-rallies-buyers-test-4160-oil-lifts-yields-kitco-pm-report",
  },
  {
    name: "CNBC - Stocks making the biggest moves after hours",
    url: "https://www.cnbc.com/2026/07/22/stocks-making-the-biggest-moves-after-hours-googl-tsla-ibm-lvs.html",
  },
  {
    name: "Investopedia - Big Tech earnings live",
    url: "https://www.investopedia.com/big-tech-earnings-live-q2-2026-googl-tsla-ibm-txn-now-12024335",
  },
  {
    name: "MarketWatch - Fed hike odds rise as Iran crisis intensifies",
    url: "https://www.marketwatch.com/story/the-bull-market-faces-higher-likelihood-of-a-fed-rate-hike-as-iran-crisis-intensifies-58f268e8",
  },
  {
    name: "Investing.com - CBOE Volatility Index historical data",
    url: "https://www.investing.com/indices/volatility-s-p-500-historical-data",
  },
  {
    name: "Yahoo Finance - Energy Select Sector SPDR ETF (XLE)",
    url: "https://finance.yahoo.com/quote/XLE/",
  },
  {
    name: "CNBC - Stocks making the biggest moves midday",
    url: "https://www.cnbc.com/2026/07/22/stocks-making-the-biggest-moves-midday-smci-eqt-air-cb-pega.html",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "Dow Jones",
    "52,218.58",
    "-6.06 / -0.01%",
    "幾乎平收，但油價急升、債息走高令買盤唔敢大手追；CNBC/Yahoo 口徑一致。",
  ],
  [
    "S&P 500",
    "7,498.96",
    "-10.24 / -0.14%",
    "跌穿 7,500 心理位少少；Yahoo 顯示同一 close，CNBC 指油價係主要壓力。",
  ],
  [
    "Nasdaq Composite",
    "25,690.90",
    "-146.31 / -0.57%",
    "科技股在 Big Tech 財報前先行降溫，AI spending / capex 係盤後焦點。",
  ],
  [
    "Russell 2000",
    "2,959.94",
    "-27.46 / 約 -0.9%",
    "Kitco PM summary 提供小型股收市；risk appetite 由昨日反彈轉為保守。",
  ],
  [
    "VIX",
    "16.64",
    "-2.40%",
    "Investing.com historical table 顯示 VIX 續跌；雖然股市微跌，但恐慌未有擴散。",
  ],
];

const sectorRows = [
  [
    "Energy / XLE",
    "$58.91 / +0.70%",
    "綠燈",
    "WTI/Brent 再急升，能源係今日少數有清晰支撐的板塊；Yahoo quote 顯示 XLE 收升。",
  ],
  [
    "Technology / Semiconductors",
    "偏弱，精確 ETF close 暫無可靠數據",
    "紅燈偏黃",
    "Reuters/Schwab snippets 指 chipmakers 令 Nasdaq/S&P 受壓；Yahoo chart API 本環境 429，未硬填 SMH/SOXX close。",
  ],
  [
    "Communication Services",
    "暫無可靠日內 ETF 數據",
    "觀望",
    "Alphabet 盤後 beat 但 capex 指引升，股價延長交易跌逾 3%-4%；板塊正式收市數字未能交叉核對。",
  ],
  [
    "Consumer Discretionary",
    "暫無可靠日內 ETF 數據",
    "偏弱",
    "Tesla 常規時段約跌 1%，盤後再跌約 3%-4%；高 beta 消費/EV 仍受 margin 同 capex 質疑。",
  ],
  [
    "Industrials",
    "分化",
    "個股主導",
    "CSX、United Rentals 盤後因業績/指引有支持，但 AAR 因 margin 壓力急跌；板塊整體數據暫無可靠口徑。",
  ],
  [
    "Financials",
    "暫無可靠數據",
    "觀望",
    "債息上行理論上利好息差，但若油價推升通脹與信用風險，金融股未必即時受惠。",
  ],
  [
    "Health Care / Staples / Utilities / Real Estate",
    "暫無可靠數據",
    "防守未成主線",
    "VIX 下跌令避險買盤不強；10Y 接近 4.66%-4.67% 對 utilities/REITs 仍有估值壓力。",
  ],
  [
    "Materials / Gold-linked names",
    "偏強但 ETF 精確值暫無可靠數據",
    "黃燈偏綠",
    "Spot gold 升至約 $4,136.60，防守與技術買盤支持 precious metals；但板塊 ETF close 未能交叉核對。",
  ],
];

const stockRows = [
  [
    "GOOGL / GOOG",
    "常規時段約 $342；盤後跌逾 3%-4%",
    "Alphabet Q2 revenue $119.80B、EPS $9.11 高於預期，Google Cloud revenue +82% 至 $24.77B；但 2026 capex 指引上調至 $195B-$205B，市場即刻問 AI 回報期。",
  ],
  [
    "TSLA",
    "常規時段約 -1%；盤後跌約 3%-4%",
    "Tesla adjusted EPS $0.33，低過預期；收入 $28.24B 高過 LSEG 預期，但 AI/R&D、Optimus、Cybercab/Semi 投資令 margin 和 free cash flow 壓力升溫。",
  ],
  [
    "NOW",
    "盤後 +2% 至 +6%（來源時點不同）",
    "ServiceNow adjusted EPS $0.90、revenue $3.99B，好過預期，並上調全年 subscription revenue outlook 至 $15.76B-$15.78B。",
  ],
  [
    "IBM",
    "盤後約 +2%",
    "IBM adjusted EPS $2.93、revenue $17.16B，低過共識；但上週已發 warning，壞消息部分已反映。公司把全年 revenue growth outlook 降至 4%-5%。",
  ],
  [
    "TXN",
    "盤後約 -3%",
    "Texas Instruments EPS $2.14、revenue $5.46B 均 beat，Q3 指引亦不差，但年初至今已大升，投資者趁消息獲利。",
  ],
  [
    "SMCI / Dell / HPE",
    "SMCI 午市約 +25%；Dell +10%；HPE +5%",
    "Super Micro preliminary profitability 好過預期，帶動 server peers，顯示 AI infrastructure 需求仍然有交易盤。",
  ],
  [
    "EQT / Energy names",
    "EQT 午市逾 +6.6%",
    "天然氣生產商 Q2 production 好過預期並上調 2026 sales volume guidance；油氣鏈繼續受 geopolitical premium 支持。",
  ],
  [
    "PEGA / AAR / CB",
    "PEGA 跌逾 16%；AAR 跌近 11%；Chubb 跌逾 3%",
    "個股業績風險仍高：software miss、航空零件 margin、P&C growth slowdown 都被市場快速懲罰。",
  ],
  [
    "URI / CSX / LVS",
    "URI +10%；CSX +4%；LVS -6%（盤後）",
    "United Rentals beat 並上調指引；CSX 受 intermodal demand 支持；Las Vegas Sands top/bottom line miss，博彩股受壓。",
  ],
];

const macroRows = [
  [
    "Treasury yields",
    "10Y 約 4.66%-4.67%；2Y 約 4.31%；MarketScreener/Reuters 指 2Y 觸及 17 個月高位",
    "油價帶動 inflation fear，債息上行，growth multiple 受壓；10Y 接近 4.70% 會是科技股短線警戒線。",
  ],
  [
    "FedWatch / rate odds",
    "CNBC：7月加息機率近 34%、9月最少加 25bp 機率 78%；Investopedia：24% / 69%；MarketWatch：約 31.5%",
    "來源差異主要來自截取時間不同；共同訊號係加息尾部風險明顯高過一星期前。",
  ],
  [
    "Oil",
    "Brent $94.07（約 +3.4%）；WTI $86.83（約 +3%）",
    "第 11 晚美軍打擊伊朗後，Hormuz 風險溢價升溫；油價是今日壓低股市估值的主因。",
  ],
  [
    "Gold / silver",
    "Spot gold 約 $4,136.60（+1.47%）；spot silver 約 $59.72（+1.80%）",
    "正常高債息會壓黃金，但地緣避險與技術突破令金銀有承接。",
  ],
  [
    "Dollar",
    "DXY near 101.00",
    "美元偏穩，未見大幅 risk-off 搶美元；但強美元加高債息組合仍不利長久期資產估值。",
  ],
  [
    "Macro calendar",
    "Wednesday 無重大美國宏觀數據；市場等待 Friday flash PMI 及下週 Fed 決議",
    "今日不是數據驅動，而是 oil -> yields -> Fed odds 這條鏈推動市場重新定價。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$65,916.00",
    "-0.67%",
    "Binance Vision 2026-07-22 20:00 UTC 1m close；BTC 跟隨科技股降溫，但跌幅不算恐慌。",
  ],
  [
    "ETHUSDT",
    "$1,926.63",
    "+0.24%",
    "ETH 微升，較 BTC/SOL 抗跌；但升幅細，未見 crypto beta 全面追風險。",
  ],
  [
    "SOLUSDT",
    "$77.70",
    "-0.21%",
    "SOL 基本橫行略跌，高 beta appetite 在油價/債息壓力下偏保守。",
  ],
];

const technicalRows = [
  [
    "S&P 500",
    "7,480 / 7,500 / 7,535",
    "7,500 失而復得會改善 sentiment；若連續收低於 7,480，昨日晶片反彈就更似 dead-cat bounce。",
  ],
  [
    "Nasdaq Composite",
    "25,500 / 25,650 / 25,850",
    "盤後 Big Tech 反應會決定 25,850 能否收復；跌穿 25,500 代表 AI trade 壓力再擴散。",
  ],
  [
    "Russell 2000",
    "2,940 / 2,960 / 2,990",
    "小型股跌約 0.9%，如果債息繼續升，2,940 一帶要守住先有 breadth 改善。",
  ],
  [
    "VIX",
    "16.5 / 18 / 20",
    "VIX 仍低，代表市場未 panic；若油價 headline 推 VIX 重上 18，防守倉位要加強。",
  ],
  [
    "10Y yield",
    "4.63% / 4.67% / 4.70%",
    "4.70% 是 growth multiple 的壓力線；若突破，Nasdaq 反彈空間會被壓縮。",
  ],
  [
    "Oil",
    "WTI 87；Brent 94 / 95",
    "Brent 若企穩 $95 附近，市場會重新計通脹、Fed 和消費信心壓力。",
  ],
];

const watchRows = [
  "Alphabet/Tesla 盤後反應：GOOGL revenue/EPS beat 但 capex 指引上調；TSLA revenue beat 但 EPS miss，兩者會牽動 Nasdaq futures。",
  "Intel、T-Mobile、Union Pacific、Norfolk Southern、American Airlines 等下一批財報：看 cyclicals 與 enterprise/transport demand 能否接力。",
  "Fed odds：若 July hike probability 繼續由 30% 附近上行，growth/long-duration 資產要降低 beta。",
  "Oil headline：Brent $94-$95 是市場壓力線；任何 Hormuz/Red Sea disruption 都會即時推高 inflation risk。",
  "Crypto：BTC 4pm ET 附近跌至 $65,916，若 Nasdaq futures 再弱，留意 BTC $65,000 與 SOL $76-$77 支持。",
];

const sourceFootnotes = [
  "主要指數採 CNBC/Yahoo 收市口徑：Dow 52,218.58（-0.01%）、S&P 500 7,498.96（-0.14%）、Nasdaq 25,690.90（-0.57%）。",
  "Kitco PM Report 文字將 S&P 500 點數方向寫成 rose 10.24，但同時列出的收市價 7,498.96 低於前日，本文將該處視為文字筆誤，只採 CNBC/Yahoo 判斷大市方向；Kitco 用於金、油、10Y、Russell 參考。",
  "Russell 2000 精確 close 採 Kitco PM summary 2,959.94 / -27.46；若正式交易所 historical table 更新後有差異，應以官方 historical close 為準。",
  "VIX 採 Investing.com historical table 16.64 / -2.40%；波動率即時頁在不同時間可能有小差異。",
  "Yahoo chart API 在本環境回 HTTP 429；能由 Yahoo page snippets、CNBC、Investopedia、Kitco 或 Reuters 類來源交叉核對的數據才列精確值，否則寫「暫無可靠數據」。",
  "板塊使用 ETF/proxy；ETF close 與正式 S&P sector index 可能有差異。XLE close 由 Yahoo quote snippet 取得。",
  "FedWatch 不是 Fed 官方指引；CNBC、Investopedia、MarketWatch 的數字因更新時間不同而有差異，本文列區間與差異。",
  "Crypto 使用 Binance Vision public data API 1-minute kline，採 2026-07-22 20:00 UTC（美股 4:00pm ET 附近）close，對比 2026-07-21 20:00 UTC。",
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

export default function USCloseBrief20260722() {
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
          border-left: 5px solid #0f766e;
          background: #ecfdf5;
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
          {reportDate} 收市｜油價債息升溫，Big Tech 財報前大市微跌
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
            <strong>7,498.96</strong>
            <span>-0.14%</span>
          </div>
          <div className="stat">
            Nasdaq
            <strong>25,690.90</strong>
            <span>-0.57%</span>
          </div>
          <div className="stat">
            Brent
            <strong>$94.07</strong>
            <span>約 +3.4%</span>
          </div>
        </div>
      </section>

      <Section number="01" title="30秒重點">
        <ul>
          <li>
            美股三大指數小跌：Dow -0.01%、S&P 500 -0.14%、Nasdaq -0.57%；不是
            panic sell，而是油價、債息和 Big Tech 財報前的降溫。
          </li>
          <li>
            原油係今日最大壓力：Brent 收 $94.07（約 +3.4%）、WTI 收 $86.83（約
            +3%），中東/Hormuz 風險重新推高 inflation premium。
          </li>
          <li>
            10Y 美債升至約 4.66%-4.67%，2Y 約 4.31%；Fed 7月加息機率不同來源報
            24%-34% / 約 31.5%，明顯高過一星期前。
          </li>
          <li>
            盤後財報好壞分明：Alphabet revenue/EPS beat 但 capex 指引升，Tesla
            EPS miss；ServiceNow beat 並上調 outlook，IBM/TXN 反應分化。
          </li>
          <li>
            VIX historical close 16.64（-2.40%），反映市場仍未恐慌；但 oil +
            rates 的組合會限制估值上行。
          </li>
          <li>
            Crypto（Binance 20:00 UTC）：BTC $65,916（-0.67%）、ETH
            $1,926.63（+0.24%）、SOL $77.70（-0.21%）。
          </li>
        </ul>
      </Section>

      <Section number="02" title="大市一眼睇">
        <DataTable
          headers={["指數", "收市", "變動", "解讀"]}
          rows={indexRows}
        />
        <p className="note">
          CNBC/Yahoo 對三大指數方向一致；Kitco 文中 S&P
          點數方向有筆誤，本文在來源口徑段落標明並採 CNBC/Yahoo。
        </p>
      </Section>

      <Section number="03" title="板塊紅綠燈 / 熱度圖">
        <DataTable
          headers={["板塊 / ETF", "收市變動", "狀態", "白話解讀"]}
          rows={sectorRows}
        />
      </Section>

      <Section number="04" title="今日升跌原因">
        <h3>點解今日跌？</h3>
        <ul>
          <li>
            <strong>油價急升：</strong>CNBC 指 Brent 約 +3.4% 至 $94.07、WTI 約
            +3% 至 $86.83，原因係美國第 11 晚打擊伊朗，加上 Hormuz shipping
            risk。
          </li>
          <li>
            <strong>債息抽高：</strong>10Y 到約 4.66%-4.67%，2Y
            亦升；高油價令市場重新計通脹和 Fed 加息尾部風險。
          </li>
          <li>
            <strong>Big Tech 財報前先收斂風險：</strong>
            Alphabet、Tesla、IBM、ServiceNow、TXN 同晚公布，Nasdaq 投資者唔想在
            capex/AI spending 答案前過度追貨。
          </li>
        </ul>
        <h3>有咩支持未壞？</h3>
        <ul>
          <li>Dow 只跌 6 點、VIX 仍跌至 16.64，代表市場未見系統性避險。</li>
          <li>
            能源、黃金、部分 server/AI infrastructure
            個股仍有買盤，資金不是全面離場，而是輪動。
          </li>
          <li>
            Alphabet、ServiceNow 等收入端仍 beat，企業 AI demand
            未被證偽，只是市場更關心 capex 回報。
          </li>
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
            <strong>美債：</strong>Kitco 指 10Y 約 4.66%；Investopedia 指 10Y
            intraday 接近 4.67%，為 5月19日以來最高附近；MarketScreener/Reuters
            指 2Y 觸及 17 個月高位。
          </li>
          <li>
            <strong>美元：</strong>Kitco 指 DXY near
            101.00，美元未大幅突破，但仍維持偏強區間。
          </li>
          <li>
            <strong>黃金：</strong>Kitco PM 指 spot gold 約
            $4,136.60（+1.47%），高債息下仍升，反映技術突破加避險需求。
          </li>
          <li>
            <strong>原油：</strong>CNBC/Kitco 指 Brent $94.07、WTI $86.83；Brent
            一度穿 $95，是超過一個月高位。
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
            "對上一美股交易日 20:00 UTC",
            "解讀",
          ]}
          rows={cryptoRows}
        />
        <p className="note">
          Binance direct API 在本環境受地區限制；本報告使用 Binance Vision
          public data API 取得 1-minute kline。時間點為 2026-07-22 20:00
          UTC，即美股 4:00pm ET 附近；變化率對比 2026-07-21 20:00 UTC。
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
          今日不是大跌市，但係一個「宏觀壓力重新上枱」的信號。只要 Brent 留在
          $94-$95、10Y 接近 4.70%，追 growth
          要比昨日更有紀律；同時能源、黃金和真正能證明 AI demand
          的公司會繼續有相對強勢。
        </div>
        <ul>
          <li>
            短線倉：Nasdaq 未收復 25,850 前，避免在盤後財報波動中一次過加滿
            beta。
          </li>
          <li>
            中線倉：分清 revenue beat 與 free cash flow/capex
            壓力；Alphabet/Tesla 的盤後反應正正反映市場開始問「AI 投入回報」。
          </li>
          <li>
            風險管理：如果 Brent 企穩 $95 或 10Y 穿
            4.70%，優先降低高估值、高槓桿、無盈利股份敞口。
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
