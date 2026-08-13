import React from "react";

const reportDate = "2026-08-12";
const publishedAt = "香港時間 2026-08-13 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP - How major US stock indexes fared Wednesday 8/12/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-c2b9200bd737220ef848a37ffea21f95",
  },
  {
    name: "AP - Wall Street rises near a record as AI stocks climb",
    url: "https://apnews.com/article/stocks-markets-rates-trump-iran-chips-db541ced9f928f993bd3a17958a3deaa",
  },
  {
    name: "CNBC - Stock market news for Aug. 12, 2026",
    url: "https://www.cnbc.com/2026/08/11/stock-market-today-live-updates.html",
  },
  {
    name: "BLS - Consumer Price Index Summary, July 2026",
    url: "https://www.bls.gov/news.Release/cpi.Nr0.Htm",
  },
  {
    name: "CNBC - Treasury yields: in-line July consumer inflation data",
    url: "https://www.cnbc.com/2026/08/12/treasury-yields-inflation-cpi-data.html",
  },
  {
    name: "Reuters via CNA - CoreWeave, Super Micro surge on AI buildout",
    url: "https://www.channelnewsasia.com/business/coreweave-super-micro-climb-signs-sustained-ai-buildout-6314576",
  },
  {
    name: "CNBC - Cisco's stock drops despite earnings, revenue beat",
    url: "https://www.cnbc.com/2026/08/12/ciscos-stock-drops-despite-earnings-revenue-beat.html",
  },
  {
    name: "Reuters via Global Banking & Finance - Oil prices edge up",
    url: "https://www.globalbankingandfinance.com/oil-rises-doubts-over-us-iran-deal-heighten-supply-concerns/",
  },
  {
    name: "Kitco - Gold prices test two-month highs after CPI",
    url: "https://www.kitco.com/news/article/2026-08-12/gold-prices-test-two-month-highs-cpi-trims-yields-fed-hike-odds-kitco-pm",
  },
  {
    name: "Cboe - VIX spot price",
    url: "https://www.cboe.com/tradable-products/vix/",
  },
  {
    name: "Yahoo Finance chart data - ETF and stock closes",
    url: "https://finance.yahoo.com/quote/XLK/",
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
  "美股反彈但唔係全面 risk-on：S&P 500 +0.26% 至 7,748.50，Nasdaq +0.54%，Dow -0.04%；AI infrastructure 股撐住科技，Dow 被部分舊經濟與房屋鏈拖住。",
  "7 月 CPI 符合預期：headline +0.1% m/m、+3.4% y/y；core +0.2% m/m、+2.5% y/y，令「9 月一定加息」壓力降溫。",
  "債息只係微鬆，未算全面轉鴿：CNBC 報 2Y 4.203%、10Y 約 4.69%、30Y 5.254%，長端仍高，房屋股同高估值平台股仍有壓力。",
  "板塊是 AI beta 領軍：SOXX +2.32%、XLK +1.49%；相反 XLB -1.24%、XLY -1.13%、XLC -0.90%，升市有集中度。",
  "焦點股：CoreWeave +19.28%、SMCI +19.02%、NVDA +3.03%、AMAT +4.29%；Cisco regular session +2.86%，但業績後盤後先跌，屬 sell-the-news。",
  "Crypto 採 Binance Vision 2026-08-12 20:00 UTC 1m close（貼近美股 4:00pm ET）：BTC $63,447.99、ETH $1,879.61、SOL $75.77，三隻都只係微跌。",
];

const indexRows = [
  [
    "Dow Jones",
    "53,770.27",
    "-21.58 / -0.04%",
    "AP/CNBC 口徑一致；大型工業與房屋鏈壓力令 Dow 跑輸 Nasdaq。",
  ],
  [
    "S&P 500",
    "7,748.50",
    "+20.30 / +0.26%",
    "距離上週五歷史高位只差少少，CPI 無驚嚇令市場重試高位區。",
  ],
  [
    "Nasdaq Composite",
    "26,588.49",
    "+143.04 / +0.54%",
    "AI infrastructure 業績與 Nvidia 讀通，科技指數跑贏。",
  ],
  [
    "Russell 2000",
    "3,045.48",
    "+18.37 / +0.61%",
    "小型股跟隨 CPI relief 反彈；IWM proxy +0.57%，方向相符。",
  ],
  [
    "VIX",
    "14.55",
    "-0.73 / -4.78%",
    "Cboe/Yahoo 口徑均報 14.55，顯示短線避險需求回落。",
  ],
];

const sectorRows = [
  [
    "Semiconductors / SOXX",
    "$546.61 / +2.32%",
    "強綠",
    "CoreWeave、SMCI、Nvidia 讀通 AI capex，半導體由前兩日弱勢轉強。",
  ],
  [
    "Technology / XLK",
    "$188.86 / +1.49%",
    "綠燈",
    "AI 供應鏈拉動科技板塊，但 mega-cap platform 表現分化。",
  ],
  [
    "Real Estate / XLRE",
    "$44.49 / +0.93%",
    "中性偏強",
    "CPI 無超預期令利率敏感板塊鬆一口氣，但 30Y 仍在 5.25% 附近。",
  ],
  [
    "Utilities / XLU",
    "$43.84 / +0.48%",
    "中性偏強",
    "長端未再明顯抽高，防守收益型資產有少量修復。",
  ],
  [
    "Consumer Staples / XLP",
    "$85.08 / +0.46%",
    "中性",
    "防守板塊穩，配合 VIX 回落，市場不是單一方向押注。",
  ],
  [
    "Health Care / XLV",
    "$168.44 / +0.26%",
    "中性",
    "跟大市同步微升，資金集中在 AI 多過防守醫療。",
  ],
  [
    "Financials / XLF",
    "$57.92 / +0.21%",
    "中性",
    "收益率曲線仍高但未惡化，銀行股只小幅上行。",
  ],
  [
    "Energy / XLE",
    "$61.03 / +0.16%",
    "中性",
    "油價只升 7 美仙，能源續有地緣支撐但無再爆升。",
  ],
  [
    "Industrials / XLI",
    "$185.88 / +0.10%",
    "中性偏弱",
    "升幅很細，Dow 跑輸反映舊經濟未被 CPI relief 明顯帶起。",
  ],
  [
    "Communication Services / XLC",
    "$110.27 / -0.90%",
    "紅燈",
    "META -3.38%、GOOGL 微跌，平台股未有跟 AI hardware 一齊升。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$117.89 / -1.13%",
    "紅燈",
    "AMZN 跌、房屋鏈受長息拖累，消費 discretionary 跑輸。",
  ],
  [
    "Materials / XLB",
    "$52.58 / -1.24%",
    "最弱",
    "美元偏硬、商品需求預期未穩，材料股成為今日弱位。",
  ],
];

const stockRows = [
  [
    "CRWV / SMCI",
    "CRWV $107.73 / +19.28%；SMCI $37.61 / +19.02%",
    "Reuters/CNA 指兩間 AI infrastructure 公司 outlook 強，市場重新確認 AI computing demand。",
  ],
  [
    "NVDA",
    "$224.09 / +3.03%",
    "AP 指 Nvidia 是 S&P 500 最大上升貢獻之一，因 CoreWeave/SMCI 對 Nvidia-powered infrastructure 需求有正面讀通。",
  ],
  [
    "SOXX / AMAT / INTC",
    "SOXX +2.32%；AMAT +4.29%；INTC +3.32%",
    "半導體由回吐轉為修復；Applied Materials 業績前有資金先行回補。",
  ],
  [
    "CSCO",
    "Regular close $123.88 / +2.86%；盤後曾跌約 4%",
    "Cisco 收市後公布 EPS/revenue beat 與強 guidance，但 CNBC 指股價盤後 sell-the-news。",
  ],
  [
    "MSFT / AMZN / META",
    "MSFT -2.26%；AMZN -1.83%；META -3.38%",
    "今日買盤不是整個 mega-cap basket，而是偏向 AI infrastructure；平台股拖低 XLC/XLY。",
  ],
  [
    "AAPL / GOOGL",
    "AAPL -0.87%；GOOGL -0.08%",
    "兩隻偏弱或近乎持平，令 Nasdaq 升幅被 AI hardware 以外板塊限制。",
  ],
  [
    "Homebuilders",
    "DHI -3.30%；PHM -2.46%；BLDR -3.58%",
    "AP 指高 mortgage rates 傷害 housing industry；長端收益率仍高，房屋鏈受壓。",
  ],
  [
    "NBIS",
    "$259.20 / +34.14%",
    "Business Insider/Yahoo quote 顯示 AI ecosystem 擴散到 Nebius；Reuters/CNA 早段/更新口徑曾報約 23%，收市數字更強。",
  ],
];

const macroRows = [
  [
    "CPI",
    "BLS：headline +0.1% m/m、+3.4% y/y；core +0.2% m/m、+2.5% y/y",
    "四個主數字都貼近共識，通脹仍高但無再惡化，短線支持 Fed pause trade。",
  ],
  [
    "Treasury yields",
    "CNBC：2Y 4.203%、10Y 約 4.69%、30Y 5.254%",
    "前端微跌、長端微升，市場相信 9 月未必加息，但長期通脹/供給風險仍未解除。",
  ],
  [
    "FedWatch / 利率預期",
    "AP：9 月加息機率約 40%；其他 CME FedWatch 截圖/轉述約 45%",
    "數據差異主要來自截取時間不同；合理解讀是 hold 成為稍微主流，但市場仍近乎五五波。",
  ],
  [
    "Oil",
    "Reuters：WTI $83.27（+7 美仙）；Brent $88.98（+7 美仙）",
    "Hormuz/Bab el-Mandeb 供應風險仍在，但 OPEC/IEA 下調需求展望限制油價升幅。",
  ],
  [
    "Gold",
    "Kitco：spot gold 約 $4,406.20（+0.90%）",
    "CPI 後債息回落與 Fed hike odds 降低支持黃金，但油價風險令避險需求未完全消失。",
  ],
  [
    "DXY / 美元",
    "約 99.88-99.94（Yahoo/Kitco/Reuters 口徑差異）",
    "美元由 CPI 後低位回穩，說明市場未完全相信 Fed 會轉鴿。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$63,447.99",
    "-0.26% vs 8/11 20:00 UTC",
    "美股 AI 反彈未明顯外溢到 BTC，仍在 $63K-$64K 區間磨。",
  ],
  [
    "ETHUSDT",
    "$1,879.61",
    "-0.17% vs 8/11 20:00 UTC",
    "跟 BTC 一樣微跌，沒有出現高 beta 追風。",
  ],
  [
    "SOLUSDT",
    "$75.77",
    "-0.01% vs 8/11 20:00 UTC",
    "幾乎持平，短線方向訊號不強。",
  ],
];

const watchList = [
  "SPX：7,748.50 距離上週五高位不遠；若重上 7,775，市場會再試 record-high narrative。",
  "Nasdaq：26,600 是即市分界；若 SOXX 繼續跑贏，Nasdaq 有機會領先突破。",
  "SOXX：$546.61 重返短線強勢；留意 $555 附近阻力與 AMAT 業績前後波幅。",
  "10Y：4.65%-4.70% 是估值壓力線；若再上 4.75%，今日 tech relief 會打折扣。",
  "BTC：$63,000/$64,000 區間未破；Crypto 暫時不是美股風險偏好最敏感資產。",
];

const eventRows = [
  [
    "8/13（週四）",
    "PPI / jobless claims",
    "CPI 只是第一關；若 PPI 熱過預期，今日的 Fed pause trade 可能被收回。",
  ],
  [
    "8/13（週四）",
    "Applied Materials 業績",
    "半導體設備股今日已升，guidance 會驗證 AI capex 是否真係擴散。",
  ],
  [
    "8/26（週三）",
    "Nvidia 業績",
    "今日 AI infrastructure 反彈最終要由 Nvidia demand / margin / financing commentary 確認。",
  ],
  [
    "9/16-17",
    "FOMC",
    "FedWatch 仍近乎五五波，8 月 payrolls 與下一份 CPI 會定方向。",
  ],
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

export default function USCloseBrief20260812() {
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
          {reportDate}{" "}
          收市｜CPI 符合預期、AI infrastructure 反彈，S&P/Nasdaq 靠近高位
        </div>
        <div className="meta">
          <Badge tone="blue">{publishedAt}</Badge>
          <Badge tone="green">S&P 500 +0.26%</Badge>
          <Badge tone="green">Nasdaq +0.54%</Badge>
          <Badge tone="green">SOXX +2.32%</Badge>
          <Badge tone="red">Dow -0.04%</Badge>
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
          <div className="value greenText">靠近高位</div>
          <p className="note">
            S&P 500 收 7,748.50，距離上週五紀錄區不遠，但 Dow 未跟上。
          </p>
        </div>
        <div className="stat">
          <div className="label">今日主線</div>
          <div className="value greenText">CPI 無驚嚇</div>
          <p className="note">通脹符合預期，AI capex 故事重新帶動風險胃納。</p>
        </div>
        <div className="stat">
          <div className="label">操作語氣</div>
          <div className="value amberText">追強不追弱</div>
          <p className="note">AI hardware 強，但 platform/消費/材料未同步確認。</p>
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
          指數主口徑採 AP/CNBC 收市數字；ETF/個股變動採 Yahoo Finance chart data
          計算 8/12 收市相對 8/11 收市。
        </p>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">03</span>今日點解升？
        </h2>
        <div className="grid">
          <div>
            <h3>1）CPI 符合預期，9 月加息壓力降溫</h3>
            <p>
              BLS 公布 7 月 CPI headline +0.1% m/m、+3.4% y/y，core +0.2%
              m/m、+2.5% y/y，CNBC 指四項都符合 Dow Jones
              共識。市場最怕的是油價後通脹再加速，今次數據暫時未見。
            </p>
          </div>
          <div>
            <h3>2）AI infrastructure 用業績證明需求</h3>
            <p>
              AP/Reuters 指 CoreWeave、Super Micro 等業績/forecast
              好過預期，CoreWeave backlog 升至 $104.2B。市場重新相信 AI
              capex 不是得 narrative，所以 Nvidia、SOXX、AMAT 都反彈。
            </p>
          </div>
          <div>
            <h3>3）債息有支持但未全面回落</h3>
            <p>
              CNBC 報 2Y 跌至 4.203%，10Y 約 4.69%，30Y 升至 5.254%。這是
              "front-end relief, long-end still sticky"，所以科技可以彈，但房屋股仍弱。
            </p>
          </div>
          <div>
            <h3>4）油價無再急升，風險 premium 暫停加碼</h3>
            <p>
              Reuters 指 WTI/Brent 只各升 7 美仙，Hormuz
              風險仍在，但 OPEC/IEA 需求展望下調限制油價。市場因此有空間買返 AI
              beta。
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
          <span className="sectionNo">06</span>FedWatch、CPI 與政策風險
        </h2>
        <p>
          今次 CPI 給市場一個「可以暫時不用再加碼加息」的理由，但不是完整 dovish
          pivot。AP 指 CME Group 數據顯示 9 月加息機率約 40%，由前一日近 coin
          flip 降低；其他 FedWatch 轉述在不同時間點報約 45%。所以：
          <strong>市場由「偏加息」退回「略偏按兵不動」，但未算定局。</strong>
        </p>
        <ul>
          <li>BLS 官方數據：headline CPI 年率由 6 月 3.5% 放慢至 3.4%。</li>
          <li>Core CPI 年率由 2.6% 放慢至 2.5%，貼近 2021 年以來低位口徑。</li>
          <li>
            CNBC 引 BMO 指 9 月決定仍要看 August payrolls 與下一份 CPI 組合。
          </li>
          <li>
            PPI 於 8/13 公布，若 PPI 熱，今日的利率 relief 會被重新測試。
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
          API；2026-08-12 20:00 UTC 等同美股收市 4:00pm ET 附近。日變動以
          2026-08-11 20:00 UTC 同一口徑比較。
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
          VIX 跌至 14.55，代表 short-vol / dip-buying
          心態回來；但升市集中在 AI hardware，若 SOXX 轉弱，S&P 高位突破會失去引擎。
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
              <li>若只做 momentum，今日最順是 SOXX/AI infrastructure，不是整個科技板塊。</li>
              <li>
                SPX 未突破前，追高要看 10Y 能否守在 4.70% 下方；一旦債息再上，估值壓力會返來。
              </li>
              <li>
                Crypto 無跟升，短炒風險偏好不要用 BTC 作美股突破確認。
              </li>
            </ul>
          </div>
          <div>
            <h3>中線</h3>
            <ul>
              <li>
                AI capex trade 仍要看 Nvidia 8/26 業績與 financing / backlog commentary。
              </li>
              <li>
                Fed pause trade 要過 PPI、August payrolls、下一份 CPI 三關；一份 inline CPI
                未足以改變整條政策路徑。
              </li>
              <li>
                長端收益率仍高，房屋、REITs、長久期 growth 不宜用單日反彈過度 extrapolate。
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
          今日市場給出的訊息幾清楚：通脹沒有超預期，AI infrastructure
          公司又交到功課，所以 S&P 500/Nasdaq 可以靠近高位；但這不是全面牛市擴散，因為
          Dow 微跌、XLY/XLC/XLB 轉弱、crypto 無跟升，長端債息亦仍高。策略上可以順勢留意
          AI hardware 強勢，但不宜將一日 CPI relief 解讀成 Fed 已經完全轉鴿。
        </p>
        <div className="sourceList">
          {sources.map((source) => (
            <p key={source.url}>
              <a href={source.url}>{source.name}</a>
            </p>
          ))}
        </div>
        <p className="note">
          若關鍵數據衝突：指數採 AP/CNBC 收市口徑；ETF/個股採 Yahoo Finance
          chart data；FedWatch 採 AP 約 40% 並列其他 CME FedWatch
          轉述約 45% 的時間差；黃金採 Kitco late-afternoon spot 口徑；Crypto 採
          Binance Vision 20:00 UTC 1m close。
        </p>
        <p className="note">{disclaimer}</p>
      </section>
    </main>
  );
}
