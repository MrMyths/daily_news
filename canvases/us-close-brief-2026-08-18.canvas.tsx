import React from "react";

const reportDate = "2026-08-18";
const publishedAt = "香港時間 2026-08-19 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market news for Aug. 18, 2026",
    url: "https://www.cnbc.com/2026/08/17/stock-market-today-live-updates.html",
  },
  {
    name: "TradingKey - US stocks close lower as SOX drops about 5%",
    url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262116031-us-stock-close-down-nasdaq-sox-semiconductor-memory-sandisk-micron-tradingkey",
  },
  {
    name: "CNBC - 30-year Treasury yield hits 19-year high",
    url: "https://www.cnbc.com/2026/08/18/treasury-yields-.html",
  },
  {
    name: "Federal Reserve H.15 - Selected Interest Rates",
    url: "https://www.federalreserve.gov/releases/h15/",
  },
  {
    name: "U.S. Treasury - Daily Treasury Rates",
    url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value_month=202608&type=daily_treasury_yield_curve",
  },
  {
    name: "U.S. Census Bureau - July 2026 New Residential Construction",
    url: "https://www.census.gov/construction/nrc/current/index.html",
  },
  {
    name: "Reuters via Lufkin Daily News - Oil closes at three-week high",
    url: "https://lufkindailynews.com/news_reuters/business/oil-closes-at-three-week-high-as-hopes-of-us-iran-peace-deal-fade/article_9d4e3328-ae3d-516d-8f2d-8f0e6fc62523.html",
  },
  {
    name: "CNBC - Home Depot Q2 2026 earnings",
    url: "https://www.cnbc.com/2026/08/18/home-depot-hd-q2-2026-earnings.html",
  },
  {
    name: "CNBC - Stocks making the biggest moves premarket",
    url: "https://www.cnbc.com/2026/08/18/stocks-making-the-biggest-moves-premarket-hd-tsla-fn-duol.html",
  },
  {
    name: "StockAnalysis - Sector ETF historical closes",
    url: "https://stockanalysis.com/etf/xlk/history/",
  },
  {
    name: "CNBC - VIX quote",
    url: "https://www.cnbc.com/quotes/VIX",
  },
  {
    name: "CME FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Yahoo Finance - US Dollar Index historical data",
    url: "https://finance.yahoo.com/quote/DX-Y.NYB/history/",
  },
  {
    name: "USAGOLD - Physical gold daily market report",
    url: "https://www.usagold.com/daily-precious-metals-market-report-august-18-2026/",
  },
  {
    name: "Apple Newsroom - EU App Store business term changes",
    url: "https://www.apple.com/newsroom/2026/08/apple-announces-changes-for-apps-in-the-european-union/",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const keyPoints = [
  "美股連跌第三日：S&P 500 -0.69% 至 7,691.76，Nasdaq -1.33%，Dow -0.22%，Russell 2000 -1.30%；VIX +4.28% 至 15.84，但仍未去到恐慌水平。",
  "今日主線好清楚：長債息再抽、30Y 一度觸及近 19 年高位，加上 Brent/WTI 因美伊和談無進展而升至三週高，市場重新擔心通脹同估值。",
  "半導體是最大傷口：SOXX -4.96%，Philadelphia Semiconductor Index 約 -4.98%；SNDK -9.01%、STX -9.16%、WDC -7.43%、MU -7.02%、MRVL -7.82%。",
  "板塊不是全面跌：Energy XLE +1.76%、Health Care XLV +1.60%、Staples XLP +1.06% 有防守/油價支持；Technology XLK -2.47%、Industrials XLI -1.48%、Materials XLB -0.88% 跑輸。",
  "宏觀數據偏 mixed：Census 報 7 月 housing starts 1.239M、-12.4% m/m，反映高按揭/高債息壓住地產；但 FedWatch 仍約 65% 押 9 月 hold、35% 押加 25bp。",
  "Crypto 採 Binance Vision 2026-08-18 20:00 UTC 1m close（貼近美股 4:00pm ET）：BTC $64,654.87（+0.59%）、ETH $1,913.70（+0.35%）、SOL $77.16（+1.83%）。",
];

const indexRows = [
  [
    "Dow Jones",
    "53,343.40",
    "-116.38 / -0.22%",
    "跌幅較細，因能源/防守股抵消部分科技壓力；但仍是連跌第三日的一部分。",
  ],
  [
    "S&P 500",
    "7,691.76",
    "-53.30 / -0.69%",
    "CNBC/TradingKey 口徑一致；高估值與半導體回吐令指數失守 7,700。",
  ],
  [
    "Nasdaq Composite",
    "26,289.71",
    "-355.20 / -1.33%",
    "科技與 AI/memory trade 被長債息打壓，是三大指數中最弱。",
  ],
  [
    "Russell 2000",
    "3,017.89",
    "-39.65 / -1.30%",
    "小型股對融資成本敏感，高債息令 Monday 反彈被回吐。",
  ],
  [
    "VIX",
    "15.84",
    "+0.65 / +4.28%",
    "CNBC/Cboe quote 4:15pm EDT；波動升但仍低於危機狀態，未見 panic hedge。",
  ],
];

const sectorRows = [
  [
    "Energy / XLE",
    "$63.68 / +1.76%",
    "最強",
    "油價維持三週高位附近，能源股繼續受 geopolitical premium 支持。",
  ],
  [
    "Health Care / XLV",
    "$169.73 / +1.60%",
    "強綠",
    "長債息抽升時資金轉向防守與較低 beta；資料源對 close 有小差異，採 StockAnalysis 口徑。",
  ],
  [
    "Consumer Staples / XLP",
    "$85.58 / +1.06%",
    "綠燈",
    "風險胃納降溫，staples 有避險買盤。",
  ],
  [
    "Financials / XLF",
    "$57.84 / +0.45%",
    "中性偏強",
    "長端利率高對淨息差有幫助，但曲線/信用風險令升幅有限。",
  ],
  [
    "Communication Services / XLC",
    "$110.48 / -0.31%",
    "微紅",
    "META -4.42% 拖累，但 Apple/Google 較穩，板塊未像 tech 咁傷。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$116.36 / -0.33%",
    "微紅",
    "TSLA/AMZN 輕微下跌；Home Depot 業績 beat 但未足以扭轉高利率壓力。",
  ],
  [
    "Utilities / XLU",
    "$44.02 / -0.36%",
    "微紅",
    "防守屬性被高長債息抵消，收益型板塊未受惠。",
  ],
  [
    "Real Estate / XLRE",
    "$44.63 / -0.45%",
    "紅燈",
    "10Y/30Y 高企、housing starts 轉弱，REITs 估值受壓。",
  ],
  [
    "Materials / XLB",
    "$51.78 / -0.88%",
    "紅燈",
    "美元靠穩、全球增長憂慮與工業 cyclicals 走弱。",
  ],
  [
    "Industrials / XLI",
    "$183.57 / -1.48%",
    "弱",
    "高融資成本與地緣風險壓住 cyclicals，跑輸大市。",
  ],
  [
    "Technology / XLK",
    "$185.62 / -2.47%",
    "最弱",
    "長債息抽升直接壓估值；AI/mega-cap trade 開始減倉。",
  ],
  [
    "Semiconductors / SOXX",
    "$531.39 / -4.96%",
    "急紅",
    "SOX 約 -4.98%，memory/storage 全線重挫，是今日風險核心。",
  ],
];

const stockRows = [
  [
    "SNDK / STX / WDC",
    "SNDK $1,625.78 / -9.01%；STX $903.68 / -9.16%；WDC $496.16 / -7.43%",
    "memory/storage 前期升幅太大，碰上長債息與 AI capex/off-balance-sheet 憂慮，資金先鎖利潤。",
  ],
  [
    "MU / MRVL",
    "MU $940.76 / -7.02%；MRVL $216.00 / -7.82%",
    "TradingKey 指半導體全線下跌；custom silicon/memory beta 遇到估值壓力。",
  ],
  [
    "NVDA / AMD / INTC",
    "NVDA $219.74 / -2.34%；AMD $484.39 / -4.27%；INTC $96.69 / -6.58%",
    "AI chip 仍有基本面故事，但今日市場先看 30Y yield 與 crowding risk。",
  ],
  [
    "META / AAPL / GOOGL / MSFT",
    "META -4.42%；AAPL +1.45%；GOOGL +0.06%；MSFT +0.27%",
    "mega-cap 分化：Meta 受壓，Apple 因 EU App Store 條款調整消息相對穩。",
  ],
  [
    "HD",
    "盤中約 +1%；Q2 adjusted EPS $4.92 vs $4.73，revenue $47.86B vs $47.27B",
    "Home Depot beat 兼同店銷售 +1.7%，但未上調全年 guidance，市場只給溫和反應。",
  ],
  [
    "TSLA",
    "約 -0.72%（premarket 曾 -1.2%）",
    "Cybercab 8 月推出報道未能抵消高折現率對長久期 growth valuation 的壓力。",
  ],
  [
    "FN / DUOL",
    "FN premarket 跌逾 9%；DUOL premarket +3%",
    "Fabrinet beat 但提示 Q1 margin headwind；Duolingo 獲 D.A. Davidson 升級至 buy。",
  ],
  [
    "AAPL / OpenAI / Anthropic",
    "AAPL +1.45%；OpenAI/Anthropic 為私企無收市價",
    "Apple 改 EU App Store fees；Anthropic 傳擴大 credit line 至逾 $10B；OpenAI 加強模型安全監控。",
  ],
];

const macroRows = [
  [
    "Treasury yields",
    "Treasury/Fed H.15：2Y 4.19%、10Y 4.71%、30Y 5.28%；CNBC 盤中 30Y 曾約 5.33%",
    "長端高位是今日 selloff 核心；估值愈長久期，受壓愈大。",
  ],
  [
    "FedWatch / 利率預期",
    "9 月 hold 約 65%，加 25bp 約 35%；12 月至少加一次約 67%（第三方轉述 CME）",
    "市場仍押 9 月先按兵不動，但油價/債息令年底加息尾巴風險未消失。",
  ],
  [
    "Housing starts",
    "Census：7 月 housing starts 1.239M，-12.4% m/m、-13.5% y/y；permits 1.443M，+5.0% m/m",
    "高按揭與高長債息已壓住實體地產活動；對 REITs/建材/家居鏈是逆風。",
  ],
  [
    "Oil",
    "Reuters：Brent $91.02（+0.17%），WTI $84.94（+0.52%），均為 7/24 以來最高",
    "美伊 60 日框架到期、Hormuz 口徑互相矛盾，油價留有戰爭/供應風險溢價。",
  ],
  [
    "Gold",
    "USAGOLD 現貨約 $4,387.25（-0.60%）；其他報價 $4,339-$4,393",
    "來源因 spot/futures/截取時間不同有差異；共同方向是美元及債息反彈壓金。",
  ],
  [
    "DXY / 美元",
    "Yahoo Finance history：DXY 99.61，前收 99.64",
    "美元大致橫行但未轉弱，對金價和跨國 earnings multiple 都不是明顯順風。",
  ],
  [
    "FOMC minutes",
    "Fed calendar：7/28-29 FOMC minutes 於 8/19 2:00pm ET 公布",
    "市場想知道 9-3 hold 背後，除三名 dissenters 外有幾多人條件式偏鷹。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$64,654.87",
    "+0.59% vs 8/17 20:00 UTC",
    "股市跌但 BTC 小升，暫時更似低波動橫行而非強 risk-on。",
  ],
  [
    "ETHUSDT",
    "$1,913.70",
    "+0.35% vs 8/17 20:00 UTC",
    "跟 BTC 小幅上行，未見獨立突破。",
  ],
  [
    "SOLUSDT",
    "$77.16",
    "+1.83% vs 8/17 20:00 UTC",
    "三者中最強，但仍要看 $78-$80 區能否企穩。",
  ],
];

const watchList = [
  "SPX：7,700 失守後先看 7,650-7,675 是否有承接；若收復 7,745-7,750，才代表今次只是正常 pullback。",
  "Nasdaq：26,300 附近是短線心理位；半導體若再跌，Nasdaq 會比 Dow/S&P 更難反彈。",
  "SOXX：$531.39 已跌穿 8/13-8/14 區間，短線要看 $523 日低與 $550 反壓。",
  "10Y / 30Y：10Y 4.70%、30Y 5.28%-5.33% 是估值壓力線；若 30Y 繼續創高，科技反彈會較脆弱。",
  "Oil：Brent $90-$91 已重新成通脹焦點；若 Hormuz/美伊消息惡化，Energy 可能繼續跑出但大市承壓。",
  "BTC：$64K-$65K 區間未明確突破；若美股繼續跌而 BTC 守住，才算有相對強勢。",
];

const eventRows = [
  [
    "8/19（週三）",
    "FOMC minutes",
    "7 月會議曾 9-3 hold；市場會看鷹派是否只是三名 dissenters，抑或更廣泛。",
  ],
  [
    "8/21（週五）",
    "Flash PMI / 宏觀數據",
    "若通脹與增長組合再偏 stagflation，長債息與油價會繼續主導。",
  ],
  [
    "8/26（週三）",
    "Nvidia 業績",
    "AI trade 的核心驗證位；今日半導體急跌令門檻與定位更敏感。",
  ],
  [
    "9/10（週四）",
    "下一份 CPI/PPI 前主要通脹窗口",
    "若油價傳導到通脹預期，9 月 FedWatch 會再快速 repricing。",
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

export default function USCloseBrief20260818() {
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
          background: radial-gradient(circle at 18% 18%, rgba(248, 113, 113, 0.33), transparent 28%),
            linear-gradient(135deg, #111827 0%, #7f1d1d 52%, #0f172a 100%);
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
          {reportDate} 收市｜長債息與油價夾擊，半導體急跌拖低 Nasdaq
        </div>
        <div className="meta">
          <Badge tone="blue">{publishedAt}</Badge>
          <Badge tone="red">S&amp;P 500 -0.69%</Badge>
          <Badge tone="red">Nasdaq -1.33%</Badge>
          <Badge tone="red">SOXX -4.96%</Badge>
          <Badge tone="amber">30Y 5.28%-5.33%</Badge>
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
          <div className="value redText">連跌第三日</div>
          <p className="note">
            S&amp;P 500 收 7,691.76，失守 7,700；Nasdaq 受半導體拖累更弱。
          </p>
        </div>
        <div className="stat">
          <div className="label">今日主線</div>
          <div className="value redText">Yield + Oil squeeze</div>
          <p className="note">
            30Y yield 近 19 年高，Brent/WTI 三週高，市場重新計通脹與估值折現。
          </p>
        </div>
        <div className="stat">
          <div className="label">操作語氣</div>
          <div className="value amberText">先控風險</div>
          <p className="note">
            Energy/health care 有承接，但 AI 半導體 crowding 已經鬆動。
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
          指數主口徑採 CNBC/TradingKey 收市數字；Russell 2000 與 VIX 採
          CNBC/Market data quote
          及收市表；若盤中新聞標題與最終收市有差異，以上表格採最終收市口徑。
        </p>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">03</span>今日點解跌？
        </h2>
        <div className="grid">
          <div>
            <h3>1）長債息抽升，growth multiple 被重估</h3>
            <p>
              CNBC 指 30Y Treasury yield 觸及近 19 年高位，Treasury/Fed H.15
              日終口徑 10Y 約 4.71%、30Y 約 5.28%。
              債券回報變吸引時，高估值科技股自然先被減倉。
            </p>
          </div>
          <div>
            <h3>2）油價回到三週高，通脹風險返場</h3>
            <p>
              Reuters 報 Brent 收 $91.02、WTI 收 $84.94，美伊和談無進展與 Hormuz
              口徑分歧令市場保留供應風險溢價。 油價高企令 Fed hold trade
              無法完全放心。
            </p>
          </div>
          <div>
            <h3>3）半導體由領升變成領跌</h3>
            <p>
              SOXX 跌近 5%，memory/storage 名字 7%-9%
              回吐；這不是單一公司壞消息，而是擁擠 AI trade 碰上高利率的去槓桿。
            </p>
          </div>
          <div>
            <h3>4）宏觀數據顯示高利率正在打到實體</h3>
            <p>
              Census 報 7 月 housing starts 按月跌 12.4%，按年跌 13.5%。
              市場一方面擔心通脹，一方面見到 housing 受壓，組合偏
              stagflation-lite。
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
        <p className="note">
          板塊採 StockAnalysis/Yahoo quote-page close
          為主；Benzinga/TradersAgency 的 sector snapshot
          個別價格有時間差，因此只作交叉參考。
        </p>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">05</span>宏觀白話版
        </h2>
        <Table headers={["項目", "最新數字", "白話解讀"]} rows={macroRows} />
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">06</span>FedWatch、債息與政策風險
        </h2>
        <p>
          表面上，CME FedWatch 第三方轉述仍顯示 9 月 hold 約 65%、加 25bp 約
          35%，不是「市場已經認定會加息」。 但今日問題在長端：30Y yield
          一度升到約
          5.33%，說明投資者要求更高期限溢價去承接美債供應、財赤與油價通脹風險。
          對股票來講，這會壓低可以接受的估值倍數，尤其是現金流在遠期的 AI/growth
          名字。
        </p>
        <ul>
          <li>
            Fed H.15/Treasury 官方口徑與 CNBC 即時口徑有少量差異，主要是 3:30pm
            indicative curve 與盤中/收市報價時間不同。
          </li>
          <li>
            8/19 FOMC minutes 是下一個定價點：市場會看三位 hawkish dissenters
            是否代表更廣泛的 committee bias。
          </li>
          <li>
            若油價維持 $90 Brent 以上，9 月前任何通脹預期反彈都會令 FedWatch
            快速轉向。
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
          API；2026-08-18 20:00 UTC 等同美股收市 4:00pm ET 附近。日變動以
          2026-08-17 20:00 UTC 同一口徑比較。
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
          VIX 15.84 代表避險需求升但未爆；這種「指數跌、VIX
          仍低」的組合，通常要用倉位管理而不是恐慌式清倉去處理。
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
                不要只因跌一日就撈半導體；先等 SOXX 穩住 $523-$531
                區，或至少見到跌幅收窄。
              </li>
              <li>
                Energy 強勢可以承認，但油價升是雙刃劍：利好 XLE，同時壓住
                broader market multiple。
              </li>
              <li>若 SPX 反彈但 10Y/30Y 繼續創高，反彈質素要打折。</li>
            </ul>
          </div>
          <div>
            <h3>中線</h3>
            <ul>
              <li>
                AI capex/memory trade 未完，但 positioning 太擠，等 Nvidia
                業績前後再確認需求與 margin。
              </li>
              <li>
                Housing starts
                轉弱提醒高利率已開始傳導；REITs、builders、家居零售不宜單看低估值。
              </li>
              <li>
                FedWatch 仍偏 hold，但油價和長債息是最大變數；倉位要預留 9
                月前波動。
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
          今日不是單純「壞消息跌市」，而是市場重新把三件事放回估值模型：長債息、油價、AI
          trade 擁擠度。 S&amp;P 500 跌 0.69% 還未算失控，但 Nasdaq 與 SOXX
          的跌幅顯示資金已經開始測試高估值板塊的承接力。
          最健康的劇本是長債息回落、油價不上破、半導體止跌；相反，如果 30Y yield
          繼續創高而 Brent 企穩 $90 以上，反彈要保守看待。
        </p>
        <div className="sourceList">
          {sources.map((source) => (
            <p key={source.url}>
              <a href={source.url}>{source.name}</a>
            </p>
          ))}
        </div>
        <p className="note">
          若關鍵數據衝突：指數採 CNBC/TradingKey 收市口徑；ETF/個股採
          StockAnalysis、Yahoo quote-page 或 Exa market pages
          並標示時間差；Treasury 採 U.S. Treasury/Fed H.15 官方日終口徑並交叉
          CNBC 即時口徑；Gold 因 spot/futures/截取時間不同以區間描述；Crypto 採
          Binance Vision 20:00 UTC 1m close。
        </p>
        <p className="note">{disclaimer}</p>
      </section>
    </main>
  );
}
