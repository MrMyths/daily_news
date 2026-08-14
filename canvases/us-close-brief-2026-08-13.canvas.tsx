import React from "react";

const reportDate = "2026-08-13";
const publishedAt = "香港時間 2026-08-14 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market news for Aug. 13, 2026",
    url: "https://www.cnbc.com/2026/08/12/stock-market-today-live-updates.html",
  },
  {
    name: "Reuters via MarketScreener - Stocks rise as traders reduce rate hike bets",
    url: "https://uk.marketscreener.com/news/stocks-rise-as-traders-reduce-rate-hike-bets-oil-prices-drop-ce7859d9d180f625",
  },
  {
    name: "BLS - Producer Price Index program",
    url: "https://www.bls.gov/ppi/",
  },
  {
    name: "CNBC - Wholesale prices were flat in July",
    url: "https://www.cnbc.com/2026/08/13/wholesale-prices-were-flat-in-july-below-expectations-for-0point2percent-increase.html",
  },
  {
    name: "Reuters via MarketScreener - US producer prices unchanged in July",
    url: "https://ca.marketscreener.com/news/us-producer-prices-unchanged-in-july-ce7859d9de8bf225",
  },
  {
    name: "CNBC - Treasury yields ease after wholesale inflation",
    url: "https://www.cnbc.com/2026/08/13/treasury-yields-wall-street-inflation-data.html",
  },
  {
    name: "Reuters via MarketScreener - Oil settles down 2%",
    url: "https://www.marketscreener.com/news/oil-eases-as-weaker-demand-outlook-counters-mideast-supply-concerns-ce7859d9d88df522",
  },
  {
    name: "Kitco - Gold snaps four-day advance",
    url: "https://www.kitco.com/news/article/2026-08-13/gold-snaps-four-day-advance-yields-ease-oil-drops-kitco-pm-report",
  },
  {
    name: "Cboe - VIX volatility products",
    url: "https://www.cboe.com/en/tradable-products/vix/",
  },
  {
    name: "CNBC - Stocks making biggest moves",
    url: "https://www.cnbc.com/2026/08/13/stocks-making-the-biggest-moves-midday-nflx-smci-sndk-stub.html",
  },
  {
    name: "CNBC - Cisco shares slide despite earnings beat",
    url: "https://www.cnbc.com/2026/08/13/cisco-shares-slide-9percent-despite-earnings-beat-and-strong-guidance.html",
  },
  {
    name: "Reuters via CNA - Silver Lake in talks to buy Workday",
    url: "https://www.channelnewsasia.com/business/exclusive-silver-lake-in-talks-buy-workday-sources-say-6318246",
  },
  {
    name: "Reuters via CNA - Applied Materials shares fall on high expectations",
    url: "https://www.channelnewsasia.com/business/applied-materials-sees-revenue-above-estimates-shares-fall-high-expectations-6318356",
  },
  {
    name: "Yahoo Finance chart data - ETF and stock closes",
    url: "https://finance.yahoo.com/quote/SPY/",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
  {
    name: "CME FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
];

const keyPoints = [
  "美股繼續向上但不是全面狂牛：S&P 500 +0.65% 至 7,798.99，創收市新高；Nasdaq +0.81%，Dow +0.13%，Russell 2000 +0.24%。",
  "主因是 7 月 PPI 比預期溫和：headline 0.0% m/m、+4.7% y/y，core +0.2% m/m、+4.2% y/y；市場把 9 月加息機率再向下調。",
  "油價跌超過 2%，幫股市卸走通脹壓力：Reuters 報 WTI $81.25（-2.4%）、Brent $87.07（-2.15%），EIA 原油庫存大增 1,740 萬桶。",
  "板塊由 XLC、XLRE、XLP、XLK 領軍；SOXX +0.76% 仍綠，但不像前一日咁爆，升市由 memory/communication service 與利率敏感股接棒。",
  "焦點股分化：SNDK +13.67%、MU +4.23%、NFLX +5.43%、META +2.78%、WDAY +17.78%；CSCO -8.40%、TPR -16.49%、CBRS -11.85%、STUB -10.07%。",
  "Crypto 採 Binance Vision 2026-08-13 20:00 UTC 1m close（貼近美股 4:00pm ET）：BTC $63,385.77（-0.10%）、ETH $1,887.57（+0.42%）、SOL $76.19（+0.55%）。",
];

const indexRows = [
  [
    "Dow Jones",
    "53,839.99",
    "+69.72 / +0.13%",
    "Cisco 大跌拖住 Dow，但大市風險胃納仍足以令指數微升。",
  ],
  [
    "S&P 500",
    "7,798.99",
    "+50.49 / +0.65%",
    "CNBC/Reuters 均報收市新高；日內曾升穿 7,800，最高 7,816.70。",
  ],
  [
    "Nasdaq Composite",
    "26,803.03",
    "+214.54 / +0.81%",
    "META、Netflix、memory chips 撐起科技與通訊服務，跑贏 Dow。",
  ],
  [
    "Russell 2000",
    "3,052.85",
    "+7.37 / +0.24%",
    "小型股跟升但力度一般；IWM proxy +0.26%，未見全面 breadth 爆發。",
  ],
  [
    "VIX",
    "14.63",
    "+0.08 / +0.55%",
    "Cboe/CNBC 最終口徑 14.63；早段有 14.45 舊數，採收市更新口徑。",
  ],
];

const sectorRows = [
  [
    "Communication Services / XLC",
    "$112.55 / +2.07%",
    "最強",
    "META +2.78%、NFLX +5.43%，令前一日弱的 platform/streaming 重新領升。",
  ],
  [
    "Real Estate / XLRE",
    "$45.12 / +1.42%",
    "強綠",
    "10Y 回落到約 4.65%，利率敏感板塊鬆一口氣。",
  ],
  [
    "Consumer Staples / XLP",
    "$86.00 / +1.08%",
    "綠燈",
    "防守板塊也升，顯示資金不是單純追高 beta。",
  ],
  [
    "Technology / XLK",
    "$190.77 / +1.01%",
    "綠燈",
    "PPI 溫和與 Nasdaq 走強支持科技；但 AMAT/CSCO 提醒 earnings bar 很高。",
  ],
  [
    "Semiconductors / SOXX",
    "$550.74 / +0.76%",
    "中性偏強",
    "memory 股強、NVDA 微升，但 AMAT regular -2.48% 令半導體升幅收窄。",
  ],
  [
    "Financials / XLF",
    "$58.26 / +0.59%",
    "中性偏強",
    "曲線仍高但未惡化，銀行股小幅跟升。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$118.45 / +0.48%",
    "中性",
    "AMZN -0.80% 抵消部分消費股反彈，未算強勢。",
  ],
  [
    "Utilities / XLU",
    "$44.04 / +0.46%",
    "中性",
    "債息回落支持收益型板塊，但升幅不算突出。",
  ],
  [
    "Energy / XLE",
    "$61.06 / +0.05%",
    "中性偏弱",
    "油價跌 2% 以上，但 geopolitical premium 仍在，能源股未大跌。",
  ],
  [
    "Industrials / XLI",
    "$185.79 / -0.05%",
    "微紅",
    "Dow 被 Cisco 拖累，工業類未跟 S&P 創高節奏。",
  ],
  [
    "Health Care / XLV",
    "$168.38 / -0.04%",
    "微紅",
    "資金偏向科技/通訊與利率敏感，不在醫療防守。",
  ],
  [
    "Materials / XLB",
    "$52.31 / -0.51%",
    "最弱",
    "美元接近 100、商品需求預期偏弱，材料股繼續跑輸。",
  ],
];

const stockRows = [
  [
    "SNDK / MU",
    "SNDK $1,528.11 / +13.67%；MU $949.83 / +4.23%",
    "CNBC 指 SanDisk investor day 與 memory gross-margin 長線目標刺激資金追 memory beta。",
  ],
  [
    "META / NFLX",
    "META $594.97 / +2.78%；NFLX $78.24 / +5.43%",
    "通訊服務接棒領升，亦令 Nasdaq 比 Dow 強。",
  ],
  [
    "CSCO",
    "$113.47 / -8.40%",
    "業績和 guidance beat，但毛利率/硬件 mix 被挑剔；CNBC 指強 guidance 仍未令市場滿意。",
  ],
  [
    "WDAY",
    "$206.45 / +17.78%",
    "Reuters/CNA 指 Silver Lake 正洽購 Workday；報道強調仍未保證成交。",
  ],
  [
    "SMCI / NVDA",
    "SMCI $39.16 / +4.12%；NVDA $225.30 / +0.54%",
    "AI infrastructure 仍有承接，但相對 8/12 爆升後力度放慢。",
  ],
  [
    "AMAT",
    "Regular close $534.54 / -2.48%；盤後曾再跌逾 5%",
    "Reuters/CNA 指 Q4 revenue/EPS guidance 高過預期，但投資者期望太高，變成 sell-the-news。",
  ],
  [
    "TPR / YETI / BIRK",
    "TPR -16.49%；YETI -10.56%；BIRK +11.59%",
    "消費品 earnings reaction 分化；luxury/accessories 與 outdoor guidance 受壓，Birkenstock 業績較受歡迎。",
  ],
  [
    "STUB / CBRS",
    "STUB -10.07%；CBRS -11.85%",
    "CNBC movers 顯示個別新經濟/AI 相關名字業績後被沽，提醒市場仍然挑剔。",
  ],
];

const macroRows = [
  [
    "PPI",
    "BLS：final demand 0.0% m/m、+4.7% y/y；services +0.2%，goods -0.7%",
    "比市場預期 +0.2% 更溫和，連同前一日 CPI，令加息壓力降溫。",
  ],
  [
    "Core PPI",
    "CNBC/Reuters：core +0.2% m/m、+4.2% y/y",
    "低過 +0.3% m/m 預期，但部分 PCE feed-through 分項仍要留意。",
  ],
  [
    "Jobless claims",
    "209,000，較前週修訂 200,000 增 9,000",
    "勞工市場仍健康，但邊際轉弱配合溫和通脹，支持 Fed 先觀望。",
  ],
  [
    "Treasury yields",
    "CNBC：2Y 4.145%、10Y 4.645%、30Y 5.214%",
    "債息回落支持 growth multiple；但 10Y 仍高於 4.6%，估值壓力未完全消失。",
  ],
  [
    "FedWatch / 利率預期",
    "來源時間差：約 65%-68% 機率 9 月 hold；約 31%-35% 機率加 25bp",
    "Reuters/CNBC/其他 FedWatch 轉述略有差異，合理解讀是市場由近五五波轉向偏 hold。",
  ],
  [
    "Oil",
    "Reuters：WTI $81.25（-2.4%）；Brent $87.07（-2.15%）",
    "EIA 庫存大增 1,740 萬桶，加上 OPEC/IEA 下調需求展望，壓低能源通脹風險。",
  ],
  [
    "Gold",
    "Kitco spot 約 $4,341.80（-0.20%）；PM report 盤中/午後曾報約 $4,349.80",
    "PPI 溫和壓低債息，本應利好金價，但油價回落令短線通脹避險需求降溫。",
  ],
  [
    "DXY / 美元",
    "約 99.9-100.0；Reuters 報 99.96，Barchart 99.895，CNBC 99.98",
    "數據衝突主要是截取時間不同；核心意思是美元在 PPI 後大致持平。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$63,385.77",
    "-0.10% vs 8/12 20:00 UTC",
    "美股創高未明顯帶動 BTC，仍在 $63K 附近橫行。",
  ],
  [
    "ETHUSDT",
    "$1,887.57",
    "+0.42% vs 8/12 20:00 UTC",
    "較 BTC 強少少，但仍屬窄幅反彈，不是全面 alt season。",
  ],
  [
    "SOLUSDT",
    "$76.19",
    "+0.55% vs 8/12 20:00 UTC",
    "微升守住 $76 附近，短線跟隨風險胃納但力度有限。",
  ],
];

const watchList = [
  "SPX：7,800 是心理關口；收 7,798.99，只差少少。若下一日守住 7,760-7,775，record-high breakout 才更可信。",
  "Nasdaq：26,800 已重上，下一步看 26,875 日內高位；若 XLC/XLK 繼續同步，升勢較健康。",
  "SOXX：$550.74 高於 $546 前收，但仍未突破 8/13 高位 $562；memory 強、設備股弱，內部分化要留意。",
  "10Y：4.65% 附近是估值溫度計；若再跌向 4.55%，growth 可延續，若回到 4.75%，高估值股會受壓。",
  "Oil：WTI $81-$82 是通脹預期關鍵；若庫存/demand 故事壓住油價，Fed hold trade 會較易延續。",
  "BTC：$63,000/$64,000 區間仍未突破；Crypto 暫時未確認美股 risk-on。",
];

const eventRows = [
  [
    "8/14（週五）",
    "Retail sales / University of Michigan sentiment",
    "Kitco 指這是 PPI 後下一批宏觀測試；若消費太強或通脹預期反彈，Fed hold trade 會被測試。",
  ],
  [
    "8/26（週三）",
    "Nvidia 業績",
    "AI capex trade 的核心驗證位；今日 memory 強，但真正 index driver 仍要看 Nvidia。",
  ],
  [
    "9/10（週四）",
    "下一份 PPI",
    "BLS 預告 8 月 PPI 於 9/10 公布，會直接影響 9 月 FOMC 前的通脹判斷。",
  ],
  ["9/15-16", "FOMC", "市場現時偏向 hold，但 31%-35% 加息機率仍未低到可忽略。"],
];

function Badge({
  tone,
  children,
}: {
  tone: "green" | "red" | "amber" | "blue";
  children: React.ReactNode;
}) {
  return <span className={`badge ${tone}`}>{children}</span>;
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
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
            {row.map((cell, index) => (
              <td key={`${cell}-${index}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function USCloseBrief20260813() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          margin: 0 auto;
          padding: 38px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.5;
        }
        .hero {
          background: radial-gradient(circle at 18% 18%, rgba(34, 197, 94, 0.32), transparent 28%),
            linear-gradient(135deg, #111827 0%, #1e3a8a 52%, #14532d 100%);
          color: white;
          border-radius: 28px;
          padding: 34px;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.24);
        }
        h1 { margin: 0 0 8px; font-size: 48px; line-height: 1.08; letter-spacing: -0.02em; }
        h2 { margin: 0 0 14px; color: #1d4ed8; font-size: 25px; }
        h3 { margin: 0 0 8px; color: #0f172a; font-size: 18px; }
        p { margin: 0 0 10px; }
        .sub { font-size: 18px; opacity: 0.92; }
        .meta { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 18px; }
        .badge {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 7px 12px;
          font-weight: 800;
          font-size: 13px;
          border: 1px solid rgba(255, 255, 255, 0.24);
        }
        .badge.green { background: #dcfce7; color: #166534; border-color: #bbf7d0; }
        .badge.red { background: #fee2e2; color: #991b1b; border-color: #fecaca; }
        .badge.amber { background: #fef3c7; color: #92400e; border-color: #fde68a; }
        .badge.blue { background: #dbeafe; color: #1e40af; border-color: #bfdbfe; }
        .hero .badge { color: white; background: rgba(255,255,255,0.12); }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 18px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 22px;
          padding: 22px;
          margin-top: 18px;
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.07);
          break-inside: avoid;
        }
        .card.compact { padding: 18px; }
        .stat {
          background: #f1f5f9;
          border-radius: 18px;
          padding: 16px;
          border: 1px solid #e2e8f0;
        }
        .stat .label { color: #64748b; font-size: 13px; font-weight: 800; text-transform: uppercase; }
        .stat .value { font-size: 24px; font-weight: 900; margin-top: 3px; }
        .redText { color: #b91c1c; font-weight: 900; }
        .greenText { color: #047857; font-weight: 900; }
        .amberText { color: #b45309; font-weight: 900; }
        ul { margin: 0; padding-left: 22px; }
        li { margin: 7px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 14px; }
        th { background: #e0ecff; color: #1e3a8a; text-align: left; }
        th, td { border: 1px solid #e2e8f0; padding: 9px 10px; vertical-align: top; }
        tbody tr:nth-child(even) td { background: #f8fafc; }
        .note { color: #475569; font-size: 13px; }
        .sourceList { columns: 2; column-gap: 28px; font-size: 12.5px; }
        a { color: #1d4ed8; text-decoration: none; }
        .sectionNo { color: #94a3b8; font-weight: 900; margin-right: 8px; }
        @media print { .sheet { width: auto; padding: 24px; } .card { box-shadow: none; } }
      `}</style>

      <section className="hero">
        <h1>美股收盤懶人包｜完整版</h1>
        <div className="sub">
          {reportDate} 收市｜PPI 溫和、油價回落，S&P 500 創收市新高
        </div>
        <div className="meta">
          <Badge tone="blue">{publishedAt}</Badge>
          <Badge tone="green">S&P 500 +0.65%</Badge>
          <Badge tone="green">Nasdaq +0.81%</Badge>
          <Badge tone="green">XLC +2.07%</Badge>
          <Badge tone="amber">VIX 14.63</Badge>
          <Badge tone="amber">Crypto：Binance 20:00 UTC</Badge>
        </div>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">01</span>30秒重點
        </h2>
        <ul>
          {keyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="grid-3 card compact">
        <div className="stat">
          <div className="label">大市狀態</div>
          <div className="value greenText">收市新高</div>
          <p className="note">
            S&P 500 收 7,798.99，CNBC/Reuters 均報 record close。
          </p>
        </div>
        <div className="stat">
          <div className="label">今日主線</div>
          <div className="value greenText">PPI relief</div>
          <p className="note">
            PPI 低過預期、債息回落、油價跌，估值壓力即日降溫。
          </p>
        </div>
        <div className="stat">
          <div className="label">操作語氣</div>
          <div className="value amberText">突破要確認</div>
          <p className="note">
            指數創高，但 CSCO/AMAT/消費股分化，追高要看 breadth。
          </p>
        </div>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">02</span>大市一眼睇
        </h2>
        <Table
          headers={["指標", "收市/水平", "變動", "解讀"]}
          rows={indexRows}
        />
        <p className="note">
          指數主口徑採 CNBC/Reuters 收市數字；ETF/個股變動採 Yahoo Finance chart
          data 計算 8/13 收市相對 8/12 收市。
        </p>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">03</span>今日點解升？
        </h2>
        <div className="grid">
          <div>
            <h3>1）PPI 溫和，9 月加息壓力再降</h3>
            <p>
              BLS 公布 7 月 final demand PPI 按月持平，低過市場預期 +0.2%；core
              PPI +0.2%，亦低過 +0.3% 預期。市場即時把 9 月加息機率由前一日約
              40% 再降至約三分之一附近。
            </p>
          </div>
          <div>
            <h3>2）債息回落，growth multiple 有喘息位</h3>
            <p>
              CNBC 報 2Y 4.145%、10Y 4.645%、30Y 5.214%。前端和長端都回落，
              令科技、通訊服務、REITs 同時有買盤。
            </p>
          </div>
          <div>
            <h3>3）油價跌，能源通脹風險暫時降溫</h3>
            <p>
              Reuters 報 WTI 跌至 $81.25、Brent 跌至 $87.07；EIA 原油庫存大增
              1,740 萬桶，OPEC/IEA 下調需求展望，令 inflation scare 冷靜落來。
            </p>
          </div>
          <div>
            <h3>4）科技內部輪動，由 memory/XLC 接棒</h3>
            <p>
              SNDK、MU、META、NFLX 領升；但 CSCO、AMAT 反映 earnings bar
              已經好高，所以升市有方向，但不是所有 AI/tech 名字都照升。
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">04</span>板塊紅綠燈
        </h2>
        <Table
          headers={["板塊 / ETF proxy", "收市 / 變動", "燈號", "一句解讀"]}
          rows={sectorRows}
        />
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">05</span>宏觀白話版
        </h2>
        <Table headers={["項目", "最新數字", "白話解讀"]} rows={macroRows} />
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">06</span>FedWatch、PPI 與政策風險
        </h2>
        <p>
          今日 PPI 令市場由「可能要再加息」退後一步，但不是代表 Fed 已經轉鴿。
          Reuters/MarketScreener 報 traders pricing 約 65% 機率 9 月按兵不動；
          其他 FedWatch 轉述約 67.6% hold、約 32% hike；CNBC/Reuters
          美元稿則在不同時間報約 31%-35% hike。結論：
          <strong>
            市場短線偏向 Fed
            hold，但通脹仍高，下一份就業和通脹數據仍可改變劇本。
          </strong>
        </p>
        <ul>
          <li>
            BLS 官方：final demand PPI 年率 +4.7%，仍明顯高於 Fed 2% 目標。
          </li>
          <li>
            Core PPI 年率 +4.2%，雖然放慢，但服務價格 +0.2% 仍要看 PCE 傳導。
          </li>
          <li>
            Initial claims 209,000，勞工市場未崩，但邊際上支持「先等一等」。
          </li>
          <li>
            8/14 retail sales 與 University of Michigan sentiment
            是下一個宏觀檢查點。
          </li>
        </ul>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">07</span>重點股票
        </h2>
        <Table
          headers={["股票 / 主題", "收市表現", "發生咩事"]}
          rows={stockRows}
        />
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">08</span>BTC / ETH / SOL（Binance 4:00pm
          ET 附近）
        </h2>
        <Table
          headers={[
            "Crypto",
            "Binance Vision 20:00 UTC 1m close",
            "日變動",
            "解讀",
          ]}
          rows={cryptoRows}
        />
        <p className="note">
          口徑：Binance direct API 在本環境受限，改用 Binance Vision public data
          API；2026-08-13 20:00 UTC 等同美股收市 4:00pm ET 附近。日變動以
          2026-08-12 20:00 UTC 同一口徑比較。
        </p>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">09</span>技術位與市場溫度
        </h2>
        <ul>
          {watchList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="note">
          VIX 收 14.63，短線 protection 仍便宜；但指數已近新高，若 breadth
          不能擴散，單靠 mega-cap/XLC 拉升會令回吐風險增加。
        </p>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">10</span>本週事件焦點
        </h2>
        <Table headers={["時間", "事件", "為何重要"]} rows={eventRows} />
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">11</span>操作提示 / 觀察清單
        </h2>
        <div className="grid">
          <div>
            <h3>短線</h3>
            <ul>
              <li>
                指數創高可以順勢，但最好等 SPX 確認企穩 7,800 或回踩 7,760-7,775
                有承接。
              </li>
              <li>
                今日相對強的是 XLC、XLRE、XLP、XLK；半導體仍綠但內部分化，追
                SOXX 要看 AMAT 後續反應。
              </li>
              <li>
                CSCO、AMAT、TPR、YETI 提醒：earnings season 仍是 beat-and-raise
                都可以 sell-the-news。
              </li>
            </ul>
          </div>
          <div>
            <h3>中線</h3>
            <ul>
              <li>
                Fed hold trade 要由下一份 retail sales、Michigan inflation
                expectations、8 月 payrolls、下一份 CPI/PPI 一齊確認。
              </li>
              <li>
                油價回落是今日好消息；若 WTI 重上 $85，通脹和 Fed narrative
                會再變緊。
              </li>
              <li>
                Crypto 未跟美股創高突破，暫時不宜把 BTC/ETH/SOL 當作 risk-on
                的最強確認訊號。
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">12</span>最終觀點、來源與免責聲明
        </h2>
        <p>
          今日市場訊息偏正面：PPI 低過預期、債息回落、油價跌，三樣一齊令 S&P 500
          有條件創收市新高。不過，這仍不是「所有風險資產一齊爆」的市況： VIX
          微升、Russell 只是小升、半導體內部分化、crypto
          只窄幅上落。操作上可以承認 突破動能，但要用債息、油價、SOXX/XLC
          breadth 和下一批宏觀數據做確認。
        </p>
        <div className="sourceList">
          {sources.map((source) => (
            <p key={source.url}>
              <a href={source.url}>{source.name}</a>
            </p>
          ))}
        </div>
        <p className="note">
          若關鍵數據衝突：指數採 CNBC/Reuters 收市口徑；ETF/個股採 Yahoo Finance
          chart data；FedWatch 採 Reuters/CNBC/其他 CME FedWatch
          轉述並標示時間差； DXY
          與黃金因來源截取時間不同以區間和口徑描述；Crypto 採 Binance Vision
          20:00 UTC 1m close。
        </p>
        <p className="note">{disclaimer}</p>
      </section>
    </main>
  );
}
