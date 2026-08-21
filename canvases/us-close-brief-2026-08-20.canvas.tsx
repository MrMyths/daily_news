import React from "react";

const reportDate = "2026-08-20";
const publishedAt = "香港時間 2026-08-21 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market news for Aug. 20, 2026",
    url: "https://www.cnbc.com/2026/08/19/stock-market-today-live-updates.html",
  },
  {
    name: "MarketScreener/Reuters - Wall Street sinks as bond yields rise, Walmart results disappoint",
    url: "https://www.marketscreener.com/news/wall-street-sinks-as-bond-yields-rise-walmart-results-disappoint-ce7859d3df8df52d",
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
    name: "Cboe - VIX volatility products",
    url: "https://www.cboe.com/tradable-products/vix/",
  },
  {
    name: "StockAnalysis - Select Sector SPDR ETF histories",
    url: "https://stockanalysis.com/etf/xlk/history/",
  },
  {
    name: "CNBC - Treasury yields wipe out decline following Bessent intervention",
    url: "https://www.cnbc.com/2026/08/20/bond-yields-edge-higher-as-traders-digest-treasury-debt-buyback-plan.html",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "CNBC - Oil rises after Bessent says U.S. will collapse Iran with economic pressure",
    url: "https://www.cnbc.com/2026/08/20/oil-prices-brent-wti-hormuz-trump.html",
  },
  {
    name: "MarketScreener/Reuters - Gold retreats after recent rally",
    url: "https://au.marketscreener.com/news/gold-retreats-after-scaling-over-2-month-peak-on-us-treasury-move-ce7859d2d18af625",
  },
  {
    name: "Haver Analytics - U.S. initial unemployment claims declined",
    url: "https://www.haver.com/articles/u-s-initial-unemployment-claims-declined-in-the-week-of-august-15",
  },
  {
    name: "Philadelphia Fed - August 2026 MBOS report",
    url: "https://www.philadelphiafed.org/surveys-and-data/regional-economic-analysis/mbos-2026-08",
  },
  {
    name: "Walmart - Q2 FY27 earnings release",
    url: "https://corporate.walmart.com/content/dam/corporate/documents/newsroom/2026/08/20/walmart-releases-q2-fy27-earnings/q2-fy27-earnings-release.pdf",
  },
  {
    name: "Barchart - Stocks slip as soaring crude prices push bond yields higher",
    url: "https://www.barchart.com/story/news/3951454/stocks-slip-as-soaring-crude-prices-push-bond-yields-higher",
  },
  {
    name: "TradingKey - Micron closes up 3.97%",
    url: "https://www.tradingkey.com/news/market-movers/262122310-market-movers-mu-20260820",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const keyPoints = [
  "美股重回壓力模式：Dow -703.84 點 / -1.32% 至 52,759.21，S&P 500 -0.87% 至 7,641.16，Nasdaq -1.00% 至 26,067.17；Russell 2000 -1.34%，VIX +7.52% 至 16.01。",
  "核心原因係昨日 Treasury 長端回購帶來的債息 relief 好快蒸發：CNBC 指 10Y 升至約 4.704%、30Y 回到約 5.248%-5.251%，市場重新擔心高融資成本壓估值。",
  "油價再升放大通脹憂慮：CNBC 指 Brent 收 $93.78（+2.4%）、WTI Oct $86.64（+2.7%），背景係美伊/中東供應風險同經濟制裁消息。",
  "Walmart 是拖低 Dow 的焦點：WMT -9.15% 至 $103.84；公司雖上調全年 sales outlook，但美國同店銷售 +2.6% 低過預期，市場讀成消費降溫訊號。",
  "板塊不是全紅：Energy XLE +0.27%、Real Estate XLRE +0.20%、SOXX +0.52% 逆市；但 XLV -1.87%、XLY -1.61%、XLP -1.41%、XLI -1.20% 顯示廣度偏弱。",
  "Crypto 採 Binance Vision 2026-08-20 20:00 UTC 1m close（貼近美股 4:00pm ET）：BTC $72,646.00（+6.21%）、ETH $2,324.81（+10.55%）、SOL $87.27（+6.03%）。",
];

const indexRows = [
  [
    "Dow Jones",
    "52,759.21",
    "-703.84 / -1.32%",
    "CNBC/Yahoo 口徑一致；WMT 單日急跌是拖低 Dow 的主要單名風險。",
  ],
  [
    "S&P 500",
    "7,641.16",
    "-66.82 / -0.87%",
    "失守 7,700，且接近全日低位收；Investing.com 報 7,641.66，與 Yahoo/CNBC 差 0.50 點，本文採 Yahoo/CNBC。",
  ],
  [
    "Nasdaq Composite",
    "26,067.17",
    "-263.92 / -1.00%",
    "mega-cap 多數回落，但 MU、crypto-exposed stocks 逆市，科技內部分化。",
  ],
  [
    "Russell 2000",
    "2,992.43",
    "-40.51 / -1.34%",
    "小型股跌幅大過 S&P 500，反映高利率對融資敏感股份仍有壓力。",
  ],
  [
    "VIX",
    "16.01",
    "+1.12 / +7.52%",
    "Cboe 顯示 VIX 由 14.89 反彈至 16.01，避險需求回升但未到恐慌水平。",
  ],
];

const sectorRows = [
  [
    "Energy / XLE",
    "$63.75 / +0.27%",
    "最強",
    "油價升至近月高位，能源股成為少數綠燈板塊；但升幅小，反映部分利好已在前幾日反映。",
  ],
  [
    "Real Estate / XLRE",
    "$45.08 / +0.20%",
    "微綠",
    "利率敏感 REITs 仍能微升，可能是前日債息急跌的滯後承接；但 10Y 回到 4.70% 上方，追入值博率一般。",
  ],
  [
    "Semiconductors / SOXX",
    "$522.35 / +0.52%",
    "逆市綠",
    "MU +3.97% 帶動 memory/AI hardware 氣氛，SOXX 逆市企穩；但 Nasdaq 整體仍跌，科技未全面修復。",
  ],
  [
    "Materials / XLB",
    "$52.42 / -0.19%",
    "接近持平",
    "美元仍低位有支持，但高息與大市 risk-off 抵消商品鏈利好。",
  ],
  [
    "Technology / XLK",
    "$183.10 / -0.29%",
    "微紅",
    "AAPL -1.75%、MSFT -0.47%、NVDA -0.33%；但 AVGO/MU 支撐令 XLK 跌幅較輕。",
  ],
  [
    "Communication Services / XLC",
    "$110.68 / -0.57%",
    "偏弱",
    "GOOGL -1.17%、META -0.04%；平台股未成為避風港。",
  ],
  [
    "Utilities / XLU",
    "$43.77 / -0.57%",
    "偏弱",
    "長端息回升令收益型板塊再受壓，未見明顯防守承接。",
  ],
  [
    "Financials / XLF",
    "$56.95 / -0.92%",
    "紅燈",
    "曲線與信用風險訊號混雜，金融股跟大市走弱。",
  ],
  [
    "Industrials / XLI",
    "$179.77 / -1.20%",
    "弱",
    "油價升、高息與地緣風險壓住 cyclicals；航空/郵輪股亦被燃油成本拖累。",
  ],
  [
    "Consumer Staples / XLP",
    "$85.32 / -1.41%",
    "急紅",
    "WMT 急跌令 staples 防守屬性失效，市場擔心低收入消費與價格壓力。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$116.68 / -1.61%",
    "急紅",
    "TSLA -1.71%、AMZN -2.16%，長債息反彈壓長久期消費股估值。",
  ],
  [
    "Health Care / XLV",
    "$172.39 / -1.87%",
    "最弱",
    "前日 MRNA/MRK 帶動後回吐，MRNA 跌超過 17%，醫療由最強變最弱。",
  ],
];

const stockRows = [
  [
    "WMT",
    "$103.84 / -9.15%",
    "Q2 FY27 美國同店銷售 +2.6%，低過市場約 +3.7%-3.8% 預期；即使公司上調 FY27 net sales 至 +4.0%-5.0%、adjusted EPS $2.80-$2.87，市場仍先交易消費放慢。",
  ],
  [
    "MU / SOXX",
    "MU $974.33 / +3.97%；SOXX +0.52%",
    "Micron 宣布 $10B AI memory research center，加上 memory/optical communication 買盤，令半導體內部逆市分化。",
  ],
  [
    "MARA / MSTR / COIN",
    "MARA +13.37%；MSTR +7.81%；COIN +7.58%",
    "Bitcoin 升至約 2.5 個月高位，crypto-exposed stocks 延續買盤；但這是高 beta 資金，波動風險高。",
  ],
  [
    "MRNA / MRK",
    "MRNA 跌超過 17%",
    "前一日因 Merck/Moderna cancer vaccine Phase 3 消息暴升後，今日大幅回吐，提示單一臨床催化的波幅極高。",
  ],
  [
    "AAPL / MSFT / NVDA / AVGO",
    "AAPL -1.75%；MSFT -0.47%；NVDA -0.33%；AVGO +0.43%",
    "mega-cap tech 普遍受高息壓力拖累，AVGO/MU 代表的硬件鏈相對硬淨。",
  ],
  [
    "AMZN / TSLA / GOOGL / META",
    "AMZN -2.16%；TSLA -1.71%；GOOGL -1.17%；META -0.04%",
    "long-duration growth 和廣告/消費 beta 未能抗住債息反彈。",
  ],
  [
    "CRWD / OKTA / ZS / NET",
    "CRWD、OKTA、ZS 跌超過 3%；NET 跌超過 2%",
    "Barchart 指 cybersecurity 因高層離職/行業消息與大市 risk-off 受壓。",
  ],
  [
    "CCL / NCLH / UAL",
    "郵輪與航空多數跌 2%-3%+",
    "WTI 升超過 2% 至一個月高位，燃油成本與地緣風險直接壓旅遊運輸鏈。",
  ],
];

const macroRows = [
  [
    "美債息",
    "2Y 約 4.185%；10Y 約 4.704%；30Y 約 5.248%-5.251%",
    "CNBC 指 Treasury 回購消息帶來的長端 rally 被快速逆轉；30Y 仍貼近 2007 年前後高位區，估值折現率壓力未解除。",
  ],
  [
    "FedWatch",
    "9月 hold 64.7%；+25bp 至 3.75%-4.00% 機率 35.3%（8/20 20:45 EDT）",
    "市場基準仍是維持 3.50%-3.75%，但三分之一加息尾部風險未消失；Jackson Hole 與 9月 CPI 仍是關鍵。",
  ],
  [
    "油價",
    "Brent $93.78 / +2.4%；WTI Oct $86.64 / +2.7%",
    "CNBC 報道 Bessent 指美國將以制裁/封鎖加強對伊朗經濟壓力，油價一度升逾 3%，收市仍處近月高位。",
  ],
  [
    "黃金",
    "Spot 約 $4,487.93（0946 GMT）至 $4,511 附近；futures 約 $4,544.50",
    "Reuters/MarketScreener 指前日升逾 4% 後有獲利回吐；不同來源時間點差異大，本文用區間而非單一 close。",
  ],
  [
    "美元",
    "DXY 約 98.80，仍近三個月低位",
    "Yahoo/Reuters mirrors 指美元仍受 Treasury buyback 與長端供需憂慮影響；但日內債息反彈令跌勢暫停。",
  ],
  [
    "就業",
    "Initial claims 206k（-6k）；continuing claims 1.799M（+18k）",
    "Haver/Reuters 指裁員仍低，勞動市場未明顯轉差；這對 Fed 來講偏鷹，因為未提供急於寬鬆的理由。",
  ],
  [
    "製造業",
    "Philly Fed current activity 47.4，五年高位；new orders 30.1、shipments 27.7",
    "官方 Philadelphia Fed MBOS 顯示製造業仍強，但價格指標仍偏高，與債息反彈同方向加大通脹敏感度。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$72,646.00",
    "+6.21%",
    "Binance Vision 2026-08-20 20:00 UTC 1m close；前值 2026-08-19 20:00 UTC $68,398.35。",
  ],
  [
    "ETHUSDT",
    "$2,324.81",
    "+10.55%",
    "同一時間點 close；相對 BTC 更強，反映高 beta crypto risk appetite 仍在。",
  ],
  [
    "SOLUSDT",
    "$87.27",
    "+6.03%",
    "同一時間點 close；升幅接近 BTC，仍需留意與美股風險資產的相關性。",
  ],
];

const technicalRows = [
  [
    "S&P 500",
    "7,639-7,641 是今日低位/收市區；7,700 變第一阻力；7,745-7,817 是上方供應帶。",
    "若短線收不回 7,700，反彈會容易被視為 lower high；若跌穿 7,639，下一步要看 7,600 心理位。",
  ],
  [
    "Nasdaq",
    "26,023 日內低位是即時支持；26,331（8/19 close）變阻力。",
    "大型科技未全面崩，但高息環境下 PE compression 仍未完；SOXX 逆市只能算局部修復。",
  ],
  [
    "Russell 2000",
    "跌穿 3,000 收 2,992.43，訊號偏差。",
    "小型股對利率/融資條件敏感，若 10Y 繼續向上，Russell 容易繼續跑輸。",
  ],
  [
    "VIX",
    "16.01 仍低於 20，但由 14.89 反彈。",
    "市場未恐慌，但 protective put demand 回升；不宜用低 VIX 當作全面安全訊號。",
  ],
];

const eventRows = [
  "Jackson Hole 前 Fed 溝通：市場會聽 Warsh 對通脹、油價與長端利率的語氣。",
  "Walmart 後續 read-through：Target、Costco、消費信貸與零售 ETF 走勢可驗證是否只是 WMT 單名問題。",
  "美債供需：Treasury buyback 只是流動性工具，若 30Y 繼續測 5.30%，equity multiple 壓力會重來。",
  "油價/中東：Brent 若企穩 $94-$95，通脹預期與航空/消費股壓力會更明顯。",
];

const actionRows = [
  [
    "短線交易",
    "未收回 SPX 7,700 前，反彈先當 technical bounce；追高要等 breadth 改善。",
  ],
  [
    "板塊配置",
    "能源/crypto beta 強，但波動大；staples/health care 今日失守，防守未必等於低風險。",
  ],
  [
    "風控",
    "留意 10Y 4.70% 與 30Y 5.25% 附近；若債息再上，growth、small cap、REITs 壓力會加速。",
  ],
  [
    "資料口徑",
    "Yahoo chart API 本輪返回 429，因此指數/個股用 Yahoo 頁面與 CNBC/Reuters mirrors 交叉；ETF 用 StockAnalysis/Exa/Yahoo snippets；不足處已標示。",
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

export default function USCloseBrief20260820() {
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
          background: linear-gradient(135deg, #450a0a 0%, #7f1d1d 46%, #111827 100%);
          color: white;
          border-radius: 28px;
          padding: 34px;
          box-shadow: 0 18px 45px rgba(127, 29, 29, 0.22);
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
          {reportDate} 收市｜債息反彈 + 油價升 + Walmart 消費警號，股市重新受壓
        </div>
        <div className="meta">
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">語氣：繁中・自然廣東話</span>
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
        <h2>3）今日點解跌？</h2>
        <div className="grid">
          <div className="callout">
            <h3>債息 relief 被反轉</h3>
            <p>
              Treasury 宣布擴大長端 buyback 後，市場昨日先鬆一口氣；但今日
              10Y/30Y yield
              再升，說明投資者仍擔心美國赤字、長債供應與通脹風險，股市折現率壓力回來。
            </p>
          </div>
          <div className="callout">
            <h3>油價推高通脹尾巴</h3>
            <p>
              Brent/WTI 再升，觸發 inflation breakeven 與 Fed path
              重新定價；對航空、郵輪、消費與長久期 growth 都是不友善組合。
            </p>
          </div>
          <div className="callout">
            <h3>Walmart 令消費敘事轉差</h3>
            <p>
              WMT
              同店銷售低過預期，市場不只交易一份業績，而是擔心價格高企、tariff/fuel
              成本與低收入消費拉扯。
            </p>
          </div>
          <div className="callout">
            <h3>廣度弱過 headline</h3>
            <p>
              能源、SOXX、crypto stocks 逆市，但 Russell、XLY、XLP、XLV
              全部偏弱，反映資金不是健康擴散，而是集中追少數主題。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>4）板塊熱度圖 / 紅綠燈</h2>
        <DataTable
          headers={["板塊 / ETF", "收市與變動", "狀態", "一句解讀"]}
          rows={sectorRows}
        />
      </section>

      <section className="section">
        <h2>5）宏觀白話版</h2>
        <DataTable
          headers={["項目", "最新數字", "白話解讀"]}
          rows={macroRows}
        />
      </section>

      <section className="section">
        <h2>6）重點股票</h2>
        <DataTable
          headers={["股份 / 主題", "表現", "發生咩事"]}
          rows={stockRows}
        />
      </section>

      <section className="section">
        <h2>7）Crypto（Binance 4:00pm ET 附近）</h2>
        <p className="small">
          直接 Binance API 在此環境可能被地區限制；本報告使用 Binance Vision
          public data API 的 1-minute kline。採樣時間為 2026-08-20 20:00
          UTC，貼近美股 4:00pm ET；比較基準為 2026-08-19 20:00 UTC。
        </p>
        <DataTable
          headers={["幣種", "20:00 UTC close", "24h 變動", "口徑"]}
          rows={cryptoRows}
        />
      </section>

      <section className="section">
        <h2>8）技術位</h2>
        <DataTable headers={["市場", "位置", "解讀"]} rows={technicalRows} />
      </section>

      <section className="section">
        <h2>9）財報與事件焦點</h2>
        <ul>
          <li>
            <strong>Walmart：</strong>FY27 Q2 revenue/eCommerce 仍增長，但 US
            comps +2.6% 低過預期，且公司提到 tariff refunds
            會投放到價格與客戶體驗，利潤質素要細看。
          </li>
          <li>
            <strong>Micron：</strong>$10B AI memory research center
            把資金重新吸向 memory/AI hardware，令 SOXX 在跌市中仍能微升。
          </li>
          <li>
            <strong>Cybersecurity：</strong>CRWD/OKTA/ZS 等受壓，說明 software
            multiple 在高息日子仍脆弱。
          </li>
          <li>
            <strong>能源鏈：</strong>油價上升利好
            XLE，但航空/郵輪/消費鏈被成本壓力拖累。
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>10）明日 / 下週觀察清單</h2>
        <ul>
          {eventRows.map((event) => (
            <li key={event}>{event}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>11）操作提示</h2>
        <DataTable headers={["範疇", "提示"]} rows={actionRows} />
      </section>

      <section className="section">
        <h2>12）最終觀點、來源與免責聲明</h2>
        <p>
          今日不是單純「股市跌一日」：它是昨日債息 relief
          被測試後，市場重新確認高長端利率、油價與消費壓力仍然未完。 如果
          10Y/30Y 不能回落，SPX 7,700
          上方會有供應；若油價繼續推高通脹預期，FedWatch
          的加息尾部風險亦可能再升。 好消息是 VIX 仍只是 16
          附近，SOXX/crypto/energy
          有局部資金流；壞消息是廣度偏弱，防守板塊亦不穩。策略上，先守風控，再等
          7,700 重新企穩與債息回落確認。
        </p>
        <h3>主要來源</h3>
        <SourceList />
        <p className="small">
          數據口徑：指數以 CNBC/Yahoo Finance 收市為主；ETF 以
          StockAnalysis、Yahoo snippets 及 Exa snippets
          交叉；Treasury/FedWatch/宏觀以
          CNBC、Investing.com、Haver、Philadelphia Fed
          官方/準官方來源為主；油金因來源時間點不同已標示區間或採 CNBC/Reuters
          mirror；Crypto 採 Binance Vision 1-minute kline。
        </p>
        <p className="small">{disclaimer}</p>
      </section>
    </main>
  );
}
