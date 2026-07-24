import React from "react";

const reportDate = "2026-07-23";
const publishedAt = "香港時間 2026-07-24 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market news for July 23, 2026",
    url: "https://www.cnbc.com/2026/07/22/stock-market-today-live-updates.html",
  },
  {
    name: "CNBC - Treasury yields rise as oil rekindles inflation fear",
    url: "https://www.cnbc.com/2026/07/23/treasury-yields-oil-prices-jobless-claims.html",
  },
  {
    name: "Investopedia - Stock Market Today, July 23, 2026",
    url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-07232026-12025025",
  },
  {
    name: "Kitco - Gold falls as oil spike, higher yields pressure metals",
    url: "https://www.kitco.com/news/article/2026-07-23/gold-falls-oil-spike-higher-yields-pressure-metals-kitco-pm-report",
  },
  {
    name: "AP - US jobless claims fall to 187,000",
    url: "https://apnews.com/article/unemployment-benefits-jobless-claims-layoffs-labor-097a210a86c0bebcba2b2625cd04c2dc",
  },
  {
    name: "Business Insider - Tesla and Alphabet plunge after Q2 earnings",
    url: "https://www.businessinsider.com/tesla-alphabet-stock-price-q2-earnings-capex-ai-spending-tsla-2026-7",
  },
  {
    name: "CNBC - Stocks making the biggest moves after hours",
    url: "https://www.cnbc.com/2026/07/22/stocks-making-the-biggest-moves-after-hours-googl-tsla-ibm-lvs.html",
  },
  {
    name: "Investing.com - CBOE Volatility Index",
    url: "https://www.investing.com/indices/volatility-s-p-500",
  },
  {
    name: "Yahoo Finance - Market and ETF quote data",
    url: "https://finance.yahoo.com/",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "Dow Jones",
    "51,711.65",
    "-506.93 / -0.97%",
    "跌逾 500 點，第五個交易日中第四日偏弱；油價與長債息同升，令藍籌風險胃納下降。",
  ],
  [
    "S&P 500",
    "7,408.30",
    "-90.66 / -1.21%",
    "跌穿 7,500 後收近 7,400；CNBC 指是 6月23日以來最差單日表現之一。",
  ],
  [
    "Nasdaq Composite",
    "25,137.69",
    "-553.21 / -2.15%",
    "Alphabet、Tesla 業績後急挫拖累 mega-cap growth，科技股估值同時受 10Y 4.70% 壓住。",
  ],
  [
    "Russell 2000",
    "2,940.16",
    "-19.78 / -0.67%",
    "小型股跌幅較 Nasdaq 輕，但油價和債息升溫仍限制 breadth 改善。",
  ],
  [
    "VIX",
    "18.70",
    "+2.06 / +12.38%",
    "VIX 明顯反彈但仍未穿 20；屬於風險降溫，不是全面恐慌。",
  ],
];

const sectorRows = [
  [
    "Industrials / XLI",
    "$181.94 / +1.73%",
    "綠燈",
    "United Rentals、CSX 等業績/指引支持 cyclicals，令工業 ETF 逆市跑出。",
  ],
  [
    "Health Care / XLV",
    "$161.44 / +1.26%",
    "綠燈",
    "防守資金有流入，醫療板塊在 high yield + tech selloff 環境中相對穩陣。",
  ],
  [
    "Utilities / XLU",
    "$46.19 / +0.57%",
    "綠燈偏黃",
    "避險買盤抵消 10Y 上升壓力；若債息再穿 4.75%，utilities 估值仍會受壓。",
  ],
  [
    "Energy / XLE",
    "$59.38 / +0.30%",
    "綠燈偏黃",
    "Brent 收上 $100 但 XLE 只小升，反映市場同時擔心需求與地緣風險。",
  ],
  [
    "Financials / XLF",
    "$55.83 / -0.39%",
    "觀望",
    "債息升理論上利好息差，但油價推高通脹和信用風險，銀行股未有全面受惠。",
  ],
  [
    "Semiconductors / SOXX",
    "$551.24 / -0.77%",
    "紅燈偏黃",
    "晶片股跌幅小過 Nasdaq，但 AI capex 回報質疑令買盤變得挑剔。",
  ],
  [
    "Technology / XLK",
    "$178.45 / -1.01%",
    "紅燈",
    "長久期 growth 對 10Y 4.70% 最敏感；Microsoft、Apple、Nvidia 均偏弱。",
  ],
  [
    "Communication Services / XLC",
    "$105.38 / -3.50%",
    "紅燈",
    "Alphabet 大跌約 7%，直接拖累通信服務板塊。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$108.76 / -4.61%",
    "深紅燈",
    "Tesla 跌逾 14%，加上高油價壓消費信心，非必需消費成全日最弱之一。",
  ],
  [
    "Staples / Materials / Real Estate",
    "XLP -1.39% / XLB -1.04% / XLRE -0.13%",
    "分化偏弱",
    "防守不等於全線升；美元、債息、成本壓力仍令 staples/materials 受壓。",
  ],
];

const stockRows = [
  [
    "GOOGL / GOOG",
    "$317.69 / -7.13%",
    "Alphabet Q2 revenue $119.8B、EPS $9.11 beat，Cloud revenue 約 +82%；但 2026 capex 指引上調至 $195B-$205B，市場即刻質疑 AI 投入回報期。",
  ],
  [
    "TSLA",
    "$319.69 / -14.52%",
    "Tesla revenue beat 但 adjusted EPS miss；AI/robotics/capex 開支龐大，令 margin、free cash flow 與估值同時被重估。",
  ],
  [
    "NOW",
    "$91.94 / -3.69%",
    "ServiceNow EPS/revenue beat 並上調 subscription revenue outlook，但大市 risk-off 下未能延續盤後升勢。",
  ],
  [
    "IBM",
    "$206.65 / +0.43%",
    "IBM 業績 headline 偏混合、此前已下調增長預期；股價微升，反映壞消息已有部分反映。",
  ],
  [
    "TXN",
    "$284.99 / -3.13%",
    "Texas Instruments EPS/revenue beat 後仍回吐，說明半導體投資者開始要求更清晰的週期復甦證據。",
  ],
  [
    "URI / CSX",
    "URI $1,139.71 / +10.11%；CSX $52.81 / +5.77%",
    "United Rentals beat 並上調指引；CSX 受 intermodal demand 及業績支持，是今日工業股亮點。",
  ],
  [
    "SMCI",
    "$31.20 / +2.09%",
    "AI server 需求故事仍有承接，但相比昨日急升，今日受整體科技 selloff 限制。",
  ],
  [
    "LVS",
    "$46.03 / +1.72%",
    "前一晚業績被指 top/bottom line miss，正式收市仍反彈；博彩股反應與盤後時點有差異，需留意來源時間。",
  ],
  [
    "AAPL / MSFT / NVDA / AMZN / META",
    "AAPL -1.30%；MSFT -2.24%；NVDA -1.56%；AMZN -4.57%；META -3.36%",
    "mega-cap risk-off 擴散，不只是 GOOGL/TSLA 單一事件；10Y 4.70% 令長久期估值受壓。",
  ],
];

const macroRows = [
  [
    "Treasury yields",
    "10Y 約 4.699%-4.703%；2Y 約 4.35%-4.36%；30Y 約 5.17%",
    "油價急升 + 失業救濟少過預期，令市場重新計 inflation risk；10Y 曾穿 4.70%，為 2025年1月以來高位附近。",
  ],
  [
    "FedWatch / rate odds",
    "CNBC：9月加息機率超過 80%，一星期前約 52%；Investopedia 指 7月 hike odds 約 34%",
    "來源數字因截取時間不同會有差異；共同訊號係加息尾部風險急升。",
  ],
  [
    "Oil",
    "Brent $100.69 / 約 +7%；WTI $92.19 / 約 +6%",
    "紅海油輪遇襲、Houthi/Iran headline 與美方威脅升級，令能源安全風險重新定價。",
  ],
  [
    "Gold / silver",
    "Spot gold 約 $4,047.80 / -1.98%；spot silver 約 $57.64 / -3.46%",
    "地緣風險本應支持避險，但美元及美債息急升壓過避險需求，貴金屬回吐。",
  ],
  [
    "Dollar",
    "DXY 約 101.44 / +0.3%",
    "美元走強配合高債息，對科技股、黃金及新興市場風險資產都不是舒服組合。",
  ],
  [
    "Jobless claims",
    "Initial claims 187,000，低過預期 212,000，為 1969年以來最低",
    "勞動市場仍硬，令 Fed 更難忽視油價帶來的通脹壓力。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$64,887.99",
    "-1.56%",
    "Binance Vision 2026-07-23 20:00 UTC 1m close；BTC 跟 Nasdaq 同步轉弱，但未跌穿 $64,000 支持。",
  ],
  [
    "ETHUSDT",
    "$1,877.27",
    "-2.56%",
    "ETH 跌幅大過 BTC，反映高 beta crypto 在美債息升溫時承壓。",
  ],
  [
    "SOLUSDT",
    "$75.81",
    "-2.43%",
    "SOL 回到 $76 附近，若 Nasdaq futures 繼續弱，$74-$75 會是下一個觀察區。",
  ],
];

const technicalRows = [
  [
    "S&P 500",
    "7,350 / 7,400 / 7,500",
    "7,400 是短線心理位；若未能快速重上 7,500，市場會把反彈當作減倉機會。",
  ],
  [
    "Nasdaq Composite",
    "25,000 / 25,150 / 25,500",
    "25,000 是即時防線；重上 25,500 前，AI trade momentum 仍偏弱。",
  ],
  [
    "Russell 2000",
    "2,925 / 2,940 / 2,960",
    "小型股守 2,925-2,940 代表跌市未完全擴散；跌穿則 breadth 轉差。",
  ],
  ["VIX", "18 / 20 / 22", "VIX 18.70 未算恐慌，但穿 20 會逼更多倉位降槓桿。"],
  [
    "10Y yield",
    "4.65% / 4.70% / 4.75%",
    "4.70% 已經令 growth multiple 承壓；若企穩 4.75%，估值壓力會再升一級。",
  ],
  [
    "Oil",
    "WTI 90 / 92；Brent 100 / 102",
    "Brent 守在 $100 以上會令 inflation + Fed hike trade 延續。",
  ],
];

const watchRows = [
  "Friday flash PMI：如數據再強，市場會把「油價推通脹 + 經濟仍硬」解讀成 Fed 更 hawkish。",
  "下週 Fed：留意 July hike odds 是否繼續由 30% 附近上行，以及 Powell 對油價衝擊的表述。",
  "Oil headline：Brent $100-$102 是今晚最重要風險線；任何 Red Sea/Hormuz 擾動都會即時影響 futures。",
  "Big Tech capex discipline：GOOGL/TSLA 之後，投資者會用同一把尺審視 MSFT、AMZN、META、NVDA 的 AI spending。",
  "Crypto：BTC 4pm ET 附近 $64,888；若 Nasdaq 續弱，先看 $64,000，之後看 $62,800-$63,000。",
];

const sourceFootnotes = [
  "主要指數採 CNBC close 與 Yahoo chart API 交叉核對：Dow 51,711.65（-0.97%）、S&P 500 7,408.30（-1.21%）、Nasdaq 25,137.69（-2.15%）、Russell 2000 2,940.16（-0.67%）。",
  "VIX 採 Investing.com/Tallac/Yahoo historical quote 交叉核對，本文用 18.70 / +12.38%；Yahoo 頁面在盤中截圖曾顯示更高數字，收市口徑以 18.70 為準。",
  "板塊使用 ETF/proxy（XLK、XLE、SOXX、XLV、XLF、XLY、XLI、XLC、XLB、XLRE、XLU、XLP），ETF close 與正式 S&P sector index 可能有差異。",
  "油價、債息、FedWatch 採 CNBC/Newsquawk/Investopedia 口徑；FedWatch 不是 Fed 官方指引，機率會隨期貨價格即時變動。",
  "黃金/白銀採 Kitco late-afternoon U.S. trading 口徑；期貨及 spot 報價會因交易所與截取時間不同略有差異。",
  "Jobless claims 採 AP 對美國勞工部數據報道：截至 7月18日一週 initial claims 187,000。",
  "Crypto 使用 Binance Vision public data API 1-minute kline，採 2026-07-23 20:00 UTC（美股 4:00pm ET 附近）close，對比 2026-07-22 20:00 UTC。",
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

export default function USCloseBrief20260723() {
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
          background: linear-gradient(135deg, #111827 0%, #7f1d1d 48%, #0f766e 100%);
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
          {reportDate} 收市｜油價破百、債息升穿 4.7%，Big Tech 拖累大市急跌
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
            <strong>7,408.30</strong>
            <span>-1.21%</span>
          </div>
          <div className="stat">
            Nasdaq
            <strong>25,137.69</strong>
            <span>-2.15%</span>
          </div>
          <div className="stat">
            Brent
            <strong>$100.69</strong>
            <span>約 +7%</span>
          </div>
        </div>
      </section>

      <Section number="01" title="30秒重點">
        <ul>
          <li>
            美股明顯 risk-off：Dow -0.97%、S&P 500 -1.21%、Nasdaq
            -2.15%，主要由油價、債息與 Big Tech earnings shock 一齊推動。
          </li>
          <li>
            Brent 收 $100.69、WTI 收 $92.19，紅海油輪遇襲與 Iran/Houthi headline
            令通脹風險重新上枱。
          </li>
          <li>
            10Y 美債約 4.70%，2Y 約 4.35%-4.36%；Fed 9月加息機率被 CNBC 報逾
            80%，比一星期前大幅升。
          </li>
          <li>
            Alphabet 跌 7.13%、Tesla 跌 14.52%；市場不是否定 AI
            demand，而是開始要求 capex 回報與 free cash flow 說服力。
          </li>
          <li>
            VIX 收 18.70（+12.38%），未穿 20 但波動率明顯升；短線倉要降低追高
            beta。
          </li>
          <li>
            Crypto（Binance 20:00 UTC）：BTC $64,887.99（-1.56%）、ETH
            $1,877.27（-2.56%）、SOL $75.81（-2.43%）。
          </li>
        </ul>
      </Section>

      <Section number="02" title="大市一眼睇">
        <DataTable
          headers={["指數", "收市", "變動", "解讀"]}
          rows={indexRows}
        />
        <p className="note">
          指數以 CNBC 收市報道及 Yahoo chart API
          交叉核對；小數點差異以本文列示口徑為準。
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
            <strong>油價突然破百：</strong>Brent +7% 至 $100.69，WTI +6% 至
            $92.19，能源成本上升會推高 inflation expectation，直接壓低 equity
            multiple。
          </li>
          <li>
            <strong>債息抽高：</strong>10Y 曾升穿 4.70%，2Y 亦升至約
            4.36%；growth stock 最怕「discount rate 上升 + capex
            現金流壓力」一齊出現。
          </li>
          <li>
            <strong>Big Tech 財報被重新定價：</strong>Alphabet beat 但 capex
            指引再升；Tesla earnings miss，令 AI/EV 高估值故事受考驗。
          </li>
          <li>
            <strong>勞動市場太硬：</strong>initial jobless claims 跌至
            187,000，低過預期， 令市場更難押注 Fed 會很快放鬆。
          </li>
        </ul>
        <h3>有咩未壞？</h3>
        <ul>
          <li>VIX 仍未穿 20，代表市場是降風險，而不是流動性恐慌。</li>
          <li>
            工業、醫療、公用仍有資金承接，顯示資金不是全面離場，而是由高估值科技轉去防守/個股業績線。
          </li>
          <li>
            Alphabet revenue 與 cloud 增長仍強；AI demand
            未被證偽，只是市場要求更清楚的 ROI。
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
            <strong>美債：</strong>CNBC 指 10Y last seen 約 4.699%，Yahoo chart
            收市約 4.703%；2Y 按 CNBC/Newsquawk 口徑約 4.35%-4.36%。
          </li>
          <li>
            <strong>美元：</strong>Investopedia 指 DXY 升約 0.3% 至
            101.44；美元偏強會加重 gold、crypto 和海外收入股壓力。
          </li>
          <li>
            <strong>黃金：</strong>Kitco late-afternoon U.S. trading 指 spot
            gold 約 $4,047.80（-1.98%），高債息與美元強過地緣避險需求。
          </li>
          <li>
            <strong>原油：</strong>Brent $100.69、WTI $92.19；如果 Brent 企穩
            $100 以上，市場會繼續交易 inflation shock。
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
          public data API 取得 1-minute kline。時間點為 2026-07-23 20:00
          UTC，即美股 4:00pm ET 附近；變化率對比 2026-07-22 20:00 UTC。
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
          今日重點不是單純「科技股跌」，而是 oil shock、bond yield、Fed odds 同
          AI capex discipline 一齊壓估值。短線先守風險，等 S&P 500 重上 7,500 或
          Brent 回落，才考慮增加 high beta。
        </div>
        <ul>
          <li>
            短線倉：Nasdaq 未重上 25,500 前，避免追買剛出業績但 free cash flow
            被質疑的高估值股。
          </li>
          <li>
            中線倉：分清「收入增長強」與「capex 回報清晰」；Alphabet
            今日就展示市場會懲罰後者不清楚。
          </li>
          <li>
            風險管理：Brent $100、10Y 4.70%、VIX 20 是三條線；同時突破時應降低
            leverage 和集中度。
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
