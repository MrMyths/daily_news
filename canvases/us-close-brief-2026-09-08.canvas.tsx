import React from "react";

const reportDate = "2026-09-08";
const publishedAt = "香港時間 2026-09-09 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "Reuters / MarketScreener - S&P 500 falls as AI worries hit software makers",
    url: "https://ca.marketscreener.com/news/s-p-500-falls-as-ai-worries-hit-software-makers-ce785bd8d08bf22c",
  },
  {
    name: "Investing.com - U.S. stocks lower at close of trade",
    url: "https://www.investing.com/news/stock-market-news/us-stocks-lower-at-close-of-trade-dow-jones-industrial-average-down-117-4892417",
  },
  {
    name: "BLS - Employment Situation Summary, August 2026",
    url: "https://www.bls.gov/news.release/empsit.nr0.htm",
  },
  {
    name: "CNBC - U.S. Treasury yields, September 8 2026",
    url: "https://www.cnbc.com/2026/09/08/us-treasury-yields-bonds.html",
  },
  {
    name: "Reuters - Oil hits multi-week highs after Houthi attacks",
    url: "https://www.reuters.com/business/energy/oil-rises-risks-prolonged-mideast-conflict-heighten-supply-worries-2026-09-08/",
  },
  {
    name: "Reuters - Qualcomm, Amazon custom AI chip deal",
    url: "https://www.reuters.com/technology/qualcomm-amazon-develop-custom-chips-ai-data-centers-2026-09-08/",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Cboe - VIX volatility products",
    url: "https://www.cboe.com/tradable-products/vix/",
  },
  {
    name: "Yahoo Finance - S&P 500 historical data",
    url: "https://finance.yahoo.com/quote/%5EGSPC/history/",
  },
  {
    name: "Yahoo Finance - Dow Jones historical data",
    url: "https://finance.yahoo.com/quote/%5EDJI/history/",
  },
  {
    name: "Yahoo Finance - Nasdaq Composite historical data",
    url: "https://finance.yahoo.com/quote/%5EIXIC/history/",
  },
  {
    name: "Yahoo Finance - Russell 2000 historical data",
    url: "https://finance.yahoo.com/quote/%5ERUT/history/",
  },
  {
    name: "Yahoo Finance - Select Sector SPDR ETF historical data",
    url: "https://finance.yahoo.com/quote/XLK/history/",
  },
  {
    name: "Yahoo Finance - Treasury yield proxies (^TNX, ^TYX)",
    url: "https://finance.yahoo.com/quote/%5ETNX/history/",
  },
  {
    name: "Kitco - Gold, silver slip as oil spike keeps Fed-hike trade alive",
    url: "https://www.kitco.com/news/article/2026-09-08/gold-silver-slip-oil-spike-keeps-fed-hike-trade-alive-kitco-am-report",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const keyPoints = [
  "美股假期後第一個交易日偏弱：Dow -628.18 點 / -1.18% 至 52,786.07；S&P 500 -45.08 點 / -0.58% 至 7,673.52；Nasdaq -85.58 點 / -0.32% 至 26,421.41；Russell 2000 -0.52% 至 2,960.20。",
  "今日跌法不是全面恐慌，而是利率、油價、AI 估值重新定價一齊夾住：VIX 收約 15.72，仍低過 20，但較 9/4 明顯補升。",
  "主線一：油價再抽高。Reuters 指中東緊張與 Hormuz 供應風險推高油價；Yahoo/Reuters 結算口徑顯示 WTI 約 $93.03、Brent 約 $97.92。",
  "主線二：Fed pricing 仍偏鷹。BLS 8 月非農 +162k、失業率 4.1%，就業強過預期；Reuters/CME 類口徑顯示 9 月加息機率約 58%-60%。",
  "主線三：AI 交易內部分化。SOXX +1.64%，Intel +9.05%、AMD +5.90%、QCOM +3.17%；但 Salesforce、Intuit、ServiceNow 受 AI 取代傳統軟件憂慮拖累。",
  "板塊紅綠分明：能源、半導體、公用事業較硬；醫療、金融、材料、可選消費較弱。XLV -2.52% 是今日最大拖累之一。",
  "Crypto 採 Binance Vision 2026-09-08 20:00 UTC 1m close（貼近美股 4:00pm ET）：BTC $78,462.00（較 9/4 20:00 UTC -1.67%）、ETH $2,483.94（+1.11%）、SOL $103.22（+1.43%）。",
];

const indexRows = [
  [
    "Dow Jones",
    "52,786.07",
    "-628.18 / -1.18%",
    "跌幅比 S&P/Nasdaq 深，Amgen、Salesforce、Home Depot 等高價成分股拖低 price-weighted Dow。",
  ],
  [
    "S&P 500",
    "7,673.52",
    "-45.08 / -0.58%",
    "收近全日低位區間；能源和半導體撐住一部分，但醫療、金融、軟件沽壓較重。",
  ],
  [
    "Nasdaq Composite",
    "26,421.41",
    "-85.58 / -0.32%",
    "半導體與 AI infrastructure 名字頂住跌幅；但軟件 SaaS 和部分 mega-cap 未跟升。",
  ],
  [
    "Russell 2000",
    "2,960.20",
    "-15.45 / -0.52%",
    "小型股未能延續 9/4 逆市強勢；高息環境對細價與 cyclical beta 仍有壓力。",
  ],
  [
    "VIX",
    "15.72",
    "+8.19% vs 9/4",
    "Yahoo/Cboe 收市水平約 15.7；Investing 以不同前值計約 +2.8%，本文標明採 9/4 regular close 比較。",
  ],
];

const sectorRows = [
  [
    "Semiconductors / SOXX",
    "$528.40 / +1.64%",
    "最強",
    "Intel、AMD、Qualcomm、Lam Research 帶動；AI infrastructure 仍有資金，與軟件股形成明顯 rotation。",
  ],
  [
    "Energy / XLE",
    "$64.77 / +1.11%",
    "強",
    "油價接近多週高位，能源股有實質 commodity tailwind；但若油價太熱，反而會加重 Fed 壓力。",
  ],
  [
    "Utilities / XLU",
    "$43.45 / +0.86%",
    "強",
    "資金有少量防守需求；VIX 未爆，但避險配置開始補位。",
  ],
  [
    "Technology / XLK",
    "$187.87 / +0.32%",
    "微綠",
    "靠半導體托住；AAPL、MSFT、NVDA 偏弱，科技內部不是全面 risk-on。",
  ],
  [
    "Real Estate / XLRE",
    "$43.90 / -0.07%",
    "中性",
    "長債息高企理應壓 REITs，但今日跌幅有限，反映資金仍有部分防守配置。",
  ],
  [
    "Communication Services / XLC",
    "$111.52 / -0.46%",
    "微弱",
    "平台股個別發展，Alphabet 近乎持平、Meta 小跌；板塊未有明顯領導力。",
  ],
  [
    "Industrials / XLI",
    "$174.42 / -0.49%",
    "弱",
    "Dow 弱勢拖累工業情緒；但 Caterpillar 仍逆市升，內部分化大。",
  ],
  [
    "Consumer Staples / XLP",
    "$84.02 / -0.66%",
    "弱",
    "防守消費未吸到大量避險資金，說明今日主軸是利率和個股事件多於 panic sell。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$113.99 / -0.80%",
    "弱",
    "高息 + 油價高對消費估值不友善；Tesla 逆市升，但不足以扭轉板塊。",
  ],
  [
    "Materials / XLB",
    "$51.94 / -0.95%",
    "更弱",
    "美元與長息壓力令 commodity beta 偏軟，材料股未跟油價上升。",
  ],
  [
    "Financials / XLF",
    "$57.30 / -1.38%",
    "更弱",
    "利率高不等於銀行一定升；市場更關注信貸成本、估值與曲線結構。",
  ],
  [
    "Health Care / XLV",
    "$167.13 / -2.52%",
    "最弱",
    "Amgen -10.08% 拖累醫療和 Dow，Novartis 競品臨床消息令 Lp(a) 題材重估。",
  ],
];

const macroRows = [
  [
    "就業",
    "8 月非農 +162k；失業率 4.1%；BLS/Reuters 指明顯高於約 +53k 至 +56k 預期",
    "經濟韌性本身是好消息，但在油價高和通脹未完全確認降溫時，市場會先想：Fed 會唔會更有理由加息？",
  ],
  [
    "FedWatch / 利率定價",
    "Reuters/CME 類口徑約 58%-60% 機率 9 月加 25bp；Kalshi 類 prediction market 約 51% hike",
    "不同市場和截數時間有差異，方向一致是偏鷹；真正決定性數據會是本週 PPI/CPI。",
  ],
  [
    "美債息",
    "10Y 約 4.806%；30Y 約 5.264%；CNBC 2Y 約 4.36%-4.38%",
    "10Y 接近 4.8% 是估值壓力線；2Y 反映 Fed 預期仍緊，對長久期 growth 不利。",
  ],
  [
    "美元",
    "DXY 約 98.8-99.0；來源因時間點不同有細微差異",
    "美元未算單邊大升，但在高息預期下保持韌性；對黃金和新興市場風險偏好都有壓力。",
  ],
  [
    "黃金",
    "Spot gold 約 $4,404.30 / -0.58%；Kitco 早段報約 $4,392-$4,400",
    "地緣避險有支持，但高債息和油價引發的 Fed 壓力令無息資產難追。",
  ],
  [
    "原油",
    "WTI 約 $93.03；Brent 約 $97.92；Reuters 盤中指 Brent 曾接近 $99",
    "中東與 Hormuz 風險令油價 premium 上升；這會直接影響通脹預期和 PPI/CPI 敏感度。",
  ],
  [
    "本週數據",
    "市場等 PPI、CPI；Reuters 指這兩份通脹數據會左右 9/15-16 FOMC 定價",
    "就業已經偏強，若通脹再熱，股市可能要承受更高 discount rate；若通脹降溫，軟着陸交易才有機會修復。",
  ],
];

const stockRows = [
  [
    "Intel / AMD / QCOM",
    "INTC +9.05%；AMD +5.90%；QCOM +3.17%",
    "Qualcomm 與 Amazon 合作開發 AI data-center custom silicon；市場順勢買入 AI infrastructure 和 CPU/accelerator 供應鏈。",
  ],
  [
    "SOXX / LRCX / AVGO",
    "SOXX +1.64%；LRCX +4.15%；AVGO +2.98%",
    "半導體 breadth 明顯好過大市，代表資金仍偏好有 capex 受益故事的硬件鏈。",
  ],
  [
    "Salesforce / ServiceNow / Intuit",
    "CRM -3.90%；NOW -4.99%；INTU -4.14%",
    "Reuters 指 GPT-6 Astra 觸發市場重新擔心 AI agent 取代傳統軟件功能，SaaS per-seat 模型被打折。",
  ],
  [
    "Amgen",
    "$393.17 / -10.08%",
    "Investing/MarketWatch 指 Novartis 競品臨床消息令 Amgen 相關心血管藥物題材承壓，亦拖低 Dow。",
  ],
  [
    "Tesla",
    "$368.16 / +3.98%",
    "逆市跑出，反映資金仍願意追具事件/產品敘事的高 beta；但 XLY 整體仍弱，不能解讀成消費板塊轉強。",
  ],
  [
    "Apple / Microsoft / Nvidia",
    "AAPL -1.17%；MSFT -1.15%；NVDA -2.01%",
    "Apple 9/9 發布會前先偏軟；NVDA 未跟半導體大升，顯示 AI trade 今日更偏向二線與 deal-driven 名字。",
  ],
  [
    "Oracle / Amazon",
    "ORCL +2.36%；AMZN -0.60%",
    "Oracle 財報前有資金部署；Amazon 因 Qualcomm 合作帶來 AI supply-chain 敘事，但股價本身近乎跟大市偏軟。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$78,462.00",
    "-1.67%",
    "Binance Vision 2026-09-08 20:00 UTC 1m close；比較基準為 2026-09-04 20:00 UTC $79,793.99，因 9/7 美股休市。",
  ],
  [
    "ETHUSDT",
    "$2,483.94",
    "+1.11%",
    "同一採樣時間；ETH 逆 BTC 走高，反映 alt beta 未全面 risk-off。",
  ],
  [
    "SOLUSDT",
    "$103.22",
    "+1.43%",
    "SOL 同樣較 9/4 20:00 UTC 小升；但高息與美元韌性仍限制追價空間。",
  ],
];

const technicalRows = [
  [
    "S&P 500",
    "高 7,717.81；低 7,666.99；收 7,673.52",
    "7,666-7,670 是即日低位支持；若失守，下一站看 7,600-7,620。上方要收回 7,720 才算修復。",
  ],
  [
    "Nasdaq",
    "高 26,542.14；低 26,341.17；收 26,421.41",
    "半導體撐住 Nasdaq，但收市仍低於開市；26,340 是短線防線，26,540 是第一阻力。",
  ],
  [
    "Russell 2000",
    "高 2,975.48；低 2,958.65；收 2,960.20",
    "小型股回到 2,960 附近；若 2Y yield 繼續抽上，Russell 會比 mega-cap 更受壓。",
  ],
  [
    "VIX",
    "15.72，仍低於 20",
    "波動率只是補升，不是恐慌；但低 VIX + CPI/PPI 前夕，反而要留意 gap risk 被低估。",
  ],
];

const eventRows = [
  "週三先看 10Y yield 能否留在 4.8% 附近；如果繼續上，growth multiple 會再受壓。",
  "PPI/CPI 是 FOMC 前核心數據。市場目前略偏加息，任何通脹熱過預期都容易放大 selloff。",
  "油價若守在 WTI $93、Brent $98 附近，能源股短線有支持，但大市會擔心汽油和運輸成本回升。",
  "半導體要看 SOXX 能否延續相對強勢；若 Intel/AMD/QCOM 熱度退潮，Nasdaq 防線會薄好多。",
  "Apple 發布會和 Oracle 財報會測試 mega-cap/enterprise IT 估值，特別是高息環境下市場願意付幾多 multiple。",
];

const actionRows = [
  [
    "短線交易",
    "SPX 先用 7,666-7,670 作第一風控線；未收回 7,720 前，反彈宜分段處理，不宜一次過追滿倉。",
  ],
  [
    "板塊配置",
    "AI hardware、半導體、能源相對強；醫療、金融、傳統 SaaS 暫時弱。想追強勢，要等 SOXX 第二日確認。",
  ],
  [
    "風控",
    "低 VIX 容易令人低估通脹數據 gap。PPI/CPI 前，long-duration equity、crypto、高 beta call 倉要控制 size。",
  ],
  [
    "資料口徑",
    "指數與 ETF 採 Yahoo chart final close；新聞與催化採 Reuters/CNBC/Investing 等來源。若數據衝突，本文用 final close 或標示約數/區間。",
  ],
];

function SourceList() {
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
          <tr key={row.join("|")}>
            {row.map((cell) => (
              <td key={cell}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function USCloseBrief20260908() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          margin: 0 auto;
          padding: 42px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.48;
        }
        .hero {
          background: linear-gradient(135deg, #7f1d1d 0%, #b91c1c 40%, #111827 100%);
          color: white;
          border-radius: 28px;
          padding: 34px;
          box-shadow: 0 18px 45px rgba(185, 28, 28, 0.2);
        }
        h1 { margin: 0 0 10px; font-size: 44px; letter-spacing: -0.02em; }
        .subtitle { font-size: 19px; opacity: 0.92; }
        .meta { margin-top: 18px; display: flex; gap: 12px; flex-wrap: wrap; }
        .pill { border: 1px solid rgba(255,255,255,0.34); border-radius: 999px; padding: 7px 13px; font-weight: 700; }
        .section {
          margin-top: 24px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
          page-break-inside: avoid;
        }
        h2 { margin: 0 0 14px; color: #b91c1c; font-size: 25px; }
        h3 { margin: 16px 0 8px; color: #1e3a8a; font-size: 18px; }
        ul { margin: 0; padding-left: 22px; }
        li { margin: 7px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 14px; }
        th, td { border-bottom: 1px solid #e5e7eb; padding: 10px 9px; vertical-align: top; text-align: left; }
        th { background: #f1f5f9; color: #334155; font-size: 13px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .callout { background: #fff7ed; border-left: 5px solid #f97316; padding: 14px 16px; border-radius: 14px; }
        .red { color: #b91c1c; font-weight: 800; }
        .green { color: #047857; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .small { color: #64748b; font-size: 13px; }
        .sources { columns: 2; font-size: 12.5px; }
        a { color: #1d4ed8; text-decoration: none; }
        @media print { .sheet { width: auto; padding: 18px; } .section { box-shadow: none; } }
      `}</style>

      <section className="hero">
        <h1>美股收盤懶人包｜完整版</h1>
        <div className="subtitle">
          {reportDate} 收市｜油價與債息夾擊，Dow 領跌；AI hardware 逆市相對硬淨
        </div>
        <div className="meta">
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">美股：9/8 regular-session final close</span>
          <span className="pill">Crypto：Binance Vision 20:00 UTC</span>
        </div>
      </section>

      <section className="section">
        <h2>1）30秒重點</h2>
        <ul>
          {keyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>2）大市一眼睇</h2>
        <DataTable
          headers={["指標", "收市", "變動", "解讀"]}
          rows={indexRows}
        />
      </section>

      <section className="section">
        <h2>3）今日市場點解跌？</h2>
        <div className="grid">
          <div className="callout">
            <h3>油價升，通脹憂慮返嚟</h3>
            <p>
              Reuters 指 Houthi 攻擊、Hormuz 航道風險和美伊緊張令油價抽高。
              油價不是只影響能源股，仲會推高市場對 PPI/CPI 和 Fed 的敏感度。
            </p>
          </div>
          <div className="callout">
            <h3>強就業令 Fed 更難轉鴿</h3>
            <p>
              BLS 8 月非農 +162,000，失業率 4.1%。就業好本來利好經濟，
              但當市場已擔心通脹，強數據會被解讀成加息仍有空間。
            </p>
          </div>
          <div className="callout">
            <h3>AI trade 由軟件轉硬件</h3>
            <p>
              Reuters 指 GPT-6 Astra 令市場擔心 AI agent 取代傳統軟件功能； 同日
              Qualcomm/Amazon deal 帶動 AI infrastructure，硬件跑贏軟件。
            </p>
          </div>
          <div className="callout">
            <h3>Dow 被醫療和藍籌拖低</h3>
            <p>
              Amgen -10.08%、Salesforce -3.90%、Home Depot -2.29%， 對
              price-weighted Dow 殺傷力大，所以 Dow 跌幅明顯深過 Nasdaq。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>4）板塊熱度圖 / 紅綠燈</h2>
        <DataTable
          headers={["板塊 / ETF", "收市 / 變動", "紅綠燈", "解讀"]}
          rows={sectorRows}
        />
      </section>

      <section className="section">
        <h2>5）宏觀白話版</h2>
        <DataTable headers={["項目", "數字", "白話解讀"]} rows={macroRows} />
      </section>

      <section className="section">
        <h2>6）重點股票與新聞</h2>
        <DataTable headers={["股票 / 主題", "數字", "解讀"]} rows={stockRows} />
      </section>

      <section className="section">
        <h2>7）Crypto：BTC / ETH / SOL</h2>
        <p className="small">
          Crypto 以 Binance Vision public data 的 1 分鐘 K 線 close
          作口徑，時間為 2026-09-08 20:00 UTC，貼近美股 4:00pm ET； 因
          2026-09-07 Labor Day 美股休市，比較基準採上一個完整美股收盤日
          2026-09-04 20:00
          UTC。如與其他交易所即時價有差異，屬交易所與採樣時間差異。
        </p>
        <DataTable
          headers={["幣種", "採樣價", "較上一完整美股收盤時段", "口徑"]}
          rows={cryptoRows}
        />
      </section>

      <section className="section">
        <h2>8）技術位</h2>
        <DataTable headers={["市場", "位置", "解讀"]} rows={technicalRows} />
      </section>

      <section className="section">
        <h2>9）資金流向與市場質感</h2>
        <ul>
          <li>
            <span className="green">相對強：</span>
            SOXX、能源、公用事業、AI
            infrastructure；資金不是離場，而是由軟件/醫療轉向更有即時催化的硬件和
            commodity。
          </li>
          <li>
            <span className="red">相對弱：</span>
            XLV、XLF、XLB、XLY，以及 Salesforce、ServiceNow、Intuit 這類被 AI
            disruption 重新估值的軟件股。
          </li>
          <li>
            <span className="amber">整體：</span>VIX 仍低，代表未到 panic；但
            Dow 跌幅、10Y 近 4.8% 和油價高位，顯示市場 risk/reward 變得更挑剔。
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>10）下個交易日 / 本週觀察清單</h2>
        <ul>
          {eventRows.map((row) => (
            <li key={row}>{row}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>11）操作提示</h2>
        <DataTable headers={["場景", "做法"]} rows={actionRows} />
      </section>

      <section className="section">
        <h2>12）最終觀點 + 來源</h2>
        <p>
          今日個市不是「科技爆煲」，而是三條線同時壓住估值：油價令通脹風險升、
          強就業令 Fed 更難轉鴿、AI agent 令傳統軟件估值被重估。好的一面是，
          半導體和能源仍有資金，VIX 未失控，代表牛市結構未即刻壞；差的一面是，
          Dow、醫療、金融和 SaaS
          的弱勢提醒大家：高息環境下，市場會更快懲罰沒有即時增長催化的板塊。
          短線策略係守紀律：尊重 7,666-7,670 支持、等 SOXX
          確認強勢、通脹數據前不要過度加槓桿。
        </p>
        <h3>資料差異處理</h3>
        <p className="small">
          指數採 Yahoo chart final close，並與 Investing.com / Reuters
          轉載稿交叉核對；個別新聞頁會因盤中或期貨截數出現 Dow、S&P
          的細微差異，本文優先採 regular-session final close。VIX
          日變動因前值口徑不同有差異：Yahoo 以 9/4 regular close 14.53 比較為
          +8.19%，Investing 以另一前值口徑約 +2.8%，本文已明確標示。
          DXY、黃金、油價亦因現貨/期貨和截數時間不同以「約」或區間表達。
        </p>
        <SourceList />
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
