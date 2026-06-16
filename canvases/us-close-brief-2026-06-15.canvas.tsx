import React from "react";

const reportDate = "2026-06-15";
const publishedAt = "香港時間 2026-06-16 07:00";

const sources = [
  {
    name: "CNBC - Stock market news for June 15, 2026",
    url: "https://www.cnbc.com/2026/06/14/stock-market-today-live-updates.html",
  },
  {
    name: "Investopedia - Markets News, June 15, 2026",
    url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-06152026-11997917",
  },
  {
    name: "Yahoo Finance chart API - indices, ETFs and stocks",
    url: "https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC",
  },
  {
    name: "TradingKey - US Stocks Close / semiconductors / SpaceX",
    url: "https://www.tradingkey.com/analysis/stocks/us-stocks/261968542-nasdaq-sp500-sox-market-spacex-micron-dram-ai-nvidia-tradingkey",
  },
  {
    name: "CNBC - Treasury yields: Iran deal drives rethink on rates",
    url: "https://www.cnbc.com/2026/06/15/treasury-yields-peace-deal-investor-fears-interest-rates.html",
  },
  {
    name: "Reuters via CNA - Oil settles at three-month low",
    url: "https://www.channelnewsasia.com/business/oil-hits-3-month-low-us-iran-reach-peace-deal-reopen-strait-hormuz-6182921",
  },
  {
    name: "CNBC - Gold drifts higher as Iran, U.S. agree to halt war",
    url: "https://www.cnbc.com/2026/06/15/gold-gains-over-1percent-after-us-iran-reach-peace-deal.html",
  },
  {
    name: "CME FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "BingX / CME FedWatch snapshot",
    url: "https://bingx.com/en/flash-news/post/cme-fedwatch-shows-odds-fed-holds-rates-in-june-odds-hold-in-july",
  },
  {
    name: "SEC filing - Fox to acquire Roku",
    url: "https://www.sec.gov/Archives/edgar/data/1754301/000119312526270285/d151410dex991.htm",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "S&P 500",
    "7,554.29",
    "+122.83 / +1.65%",
    "收市再創新高附近；CNBC 與 Yahoo chart API 一致顯示升幅由科技、半導體和油價回落推動。",
  ],
  [
    "Dow Jones",
    "51,671.03",
    "+468.77 / +0.92%",
    "Dow 收歷史新高，升 468.77 點；但升幅細過 Nasdaq，代表資金更偏向 growth/tech beta。",
  ],
  [
    "Nasdaq Composite",
    "26,683.94",
    "+795.10 / +3.07%",
    "科技股爆上，創 3 月 31 日以來最佳單日表現；Magnificent Seven 全線收綠。",
  ],
  [
    "Russell 2000",
    "2,965.09",
    "+21.10 / +0.72%",
    "小型股跟升但跑輸 Nasdaq，risk-on 有擴散但主力仍在大型科技與半導體。",
  ],
  [
    "VIX",
    "16.20",
    "-1.48 / -8.37%",
    "恐慌指數跌回 16 附近，市場把 Iran / Hormuz immediate risk premium 快速打折。",
  ],
];

const sectorRows = [
  [
    "Semiconductors / SOXX",
    "+5.40%",
    "強綠",
    "PHLX SOX 創新高，SOXX 收 $628.45；Micron、AMD、NVDA、AVGO 一齊拉動 AI hardware beta。",
  ],
  [
    "Technology / XLK",
    "+3.78%",
    "強綠",
    "科技是今日核心買盤；利率預期降溫加上油價跌，令長久期 growth multiple 獲重估。",
  ],
  [
    "Consumer Discretionary / XLY",
    "+1.69%",
    "綠燈",
    "Amazon、Tesla、旅遊/航空股跟升；油價跌對消費與出行成本是正面催化。",
  ],
  [
    "Industrials / XLI",
    "+1.42%",
    "綠燈",
    "SpaceX 第二日上市延續熱度，航太/高增長情緒支持工業板塊。",
  ],
  [
    "Materials / XLB",
    "+0.61%",
    "溫和綠",
    "周期資產有承接，但升幅明顯落後科技；今日不是全面 cyclicals melt-up。",
  ],
  [
    "Communication Services / XLC",
    "+0.48%",
    "中性偏綠",
    "Meta、Alphabet 收升，但 Fox/Roku deal 令媒體股有分化，板塊跑輸 S&P。",
  ],
  [
    "Utilities / XLU",
    "+0.47%",
    "防守有承接",
    "債息回落令收益型資產有支持；risk-on 之下仍有少量防守買盤。",
  ],
  [
    "Financials / XLF",
    "+0.41%",
    "中性",
    "金融跟升但未跑出；短端債息跌，銀行息差想像空間有限。",
  ],
  [
    "Consumer Staples / XLP",
    "-0.40%",
    "微紅",
    "資金由防守轉向科技與高 beta，staples 成為資金來源之一。",
  ],
  [
    "Health Care / XLV",
    "-0.60%",
    "紅燈",
    "醫療逆市跌，Merck 拖累明顯；risk-on 日子防守股被減持。",
  ],
  [
    "Real Estate / XLRE",
    "-0.82%",
    "紅燈",
    "即使 10Y 微跌，地產仍被沽，反映資金更偏向高 beta 而非單純利率敏感板塊。",
  ],
  [
    "Energy / XLE",
    "-3.48%",
    "強紅",
    "油價跌近 5%，能源股成最大輸家；這是今日市場最大 pair trade：long tech / short energy。",
  ],
];

const stockRows = [
  [
    "SPCX / SpaceX",
    "+19.6% 至約 $192.50",
    "第二日交易再創高，延續 IPO 後資金熱度；高增長/太空/AI 故事成為 risk-on 溫度計。",
  ],
  [
    "MU / AMD",
    "MU +10.84%；AMD +6.98%",
    "Memory 與 AI hardware 是日內最強主線；MU 受大行上調目標價和下週財報憧憬刺激。",
  ],
  [
    "NVDA / AVGO / TSM",
    "NVDA +3.54%；AVGO +3.11%；TSM +4.12%",
    "半導體龍頭全線跟升，SOX 升穿 14,000 並創新高，AI trade 重新取得主導權。",
  ],
  [
    "META / GOOGL",
    "META +4.67%；GOOGL +2.69%",
    "平台股由上週分化轉為修復，推動 Nasdaq 明顯跑贏 Dow。",
  ],
  [
    "MSFT / AAPL / AMZN / TSLA",
    "MSFT +2.31%；AAPL +1.82%；AMZN +3.13%；TSLA +1.16%",
    "七巨頭全線收綠，但 Tesla 升幅較細；資金更追 AI infrastructure 和 mega-cap quality。",
  ],
  [
    "FOX / ROKU",
    "Fox 宣布以約 $22B 收購 Roku；Fox 股價受壓，Roku 消息前已急升",
    "交易價 $160/股、現金加股票；屬媒體/串流整合大新聞，但對 XLC 即日貢獻有限。",
  ],
  [
    "UAL / NCLH / CCL",
    "UAL +3.85%；NCLH +3.65%；CCL +3.22%",
    "油價急跌直接改善燃油成本預期，航空和郵輪成為能源跌價的受惠股。",
  ],
  [
    "MRK / Energy majors",
    "MRK -3.49%；XLE -3.48%",
    "醫療與能源逆市弱，顯示升市不是所有板塊都買；要避開明顯資金流出區。",
  ],
];

const macroRows = [
  [
    "2Y / 10Y / 30Y Treasury",
    "CNBC：約 4.064% / 4.471% / 4.974%；Yahoo ^TNX 日結 4.469%",
    "債息小跌，市場把油價帶來的通脹與加息壓力下修，支持科技估值。",
  ],
  [
    "FedWatch / FOMC",
    "6/16-17 會議：FedWatch-linked 快訊顯示約 98.5% 機率維持 3.50%-3.75%",
    "今次決議本身幾乎 price in hold；焦點會放在 Warsh 首次記者會、點陣圖與 2026 年加息/減息路徑。",
  ],
  [
    "WTI / Brent",
    "WTI $80.75（-4.87%）；Brent $83.17（-4.76%）",
    "Reuters/CNA 指兩者跌至約三個月低位；US-Iran MOU 和 Hormuz 重開希望令 war premium 被抽走。",
  ],
  [
    "Gold",
    "Spot gold 約 $4,327.82（+2.6%）；US futures settled $4,351.6（+2.7%）",
    "金價同股市一齊升，反映債息/美元下行支持多於避險消退；市場仍等待協議正式簽署。",
  ],
  [
    "DXY / 美元",
    "CNBC：美元指數約 -0.2%；Yahoo DX-Y.NYB 日結約 99.67（-0.08%）",
    "美元走弱配合金價與 crypto 反彈，代表市場減少 safe-haven dollar demand。",
  ],
  [
    "CPI / PPI 背景",
    "上週 CPI/PPI 仍偏熱，能源價急跌只是緩和未來 headline inflation 風險",
    "Fed 不會因一日油價跌就急轉鴿；若油價能持續低於 $80-$83，才會更實質影響通脹預期。",
  ],
  [
    "US-Iran / Hormuz",
    "初步協議/備忘錄，正式簽署擬於 6/19 在 Geneva；細節仍未完全落實",
    "這是今日所有跨資產走勢的源頭；若簽署前有反覆，油價、VIX、growth stocks 會同步波動。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$66,514.00",
    "+4.60% vs 6/12 20:00 UTC",
    "Binance Vision 1m kline：2026-06-15 20:00:00 UTC close，即 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$1,818.73",
    "+9.17% vs 6/12 20:00 UTC",
    "ETH beta 明顯追上 risk-on，升幅跑贏 BTC，反映 crypto risk appetite 有確認。",
  ],
  [
    "SOLUSDT / SOL",
    "$75.08",
    "+12.45% vs 6/12 20:00 UTC",
    "SOL 對美股科技反彈最敏感，週末至週一收市附近反彈最強。",
  ],
];

const notes = [
  "美股週一大升：S&P 500 +1.65% 至 7,554.29、Dow +468.77 點至 51,671.03、Nasdaq +3.07% 至 26,683.94。",
  "主線是「US-Iran 協議希望 + Hormuz 重開 + 油價跌近 5%」，市場快速下修能源通脹與加息風險。",
  "科技與半導體領漲：XLK +3.78%、SOXX +5.40%，PHLX SOX 創新高；能源 XLE -3.48% 成最大輸家。",
  "VIX 跌至 16.20，10Y 約 4.47%，美元偏弱、金價升，跨資產訊號整體支持 risk-on。",
  "Crypto 用 Binance Vision 4:00pm ET 附近 1 分鐘 K 線：BTC $66,514、ETH $1,818.73、SOL $75.08，均較上個美股收市時間明顯上升。",
];

const technicalLevels = [
  [
    "S&P 500",
    "7,500 / 7,600",
    "收 7,554.29，已企穩 7,500；若能守住，短線 momentum 目標望 7,600。",
  ],
  [
    "S&P 500",
    "7,450 / 7,400",
    "7,450 是第一回吐位；跌穿 7,400 代表油價/地緣 trade 失效，需重新降 beta。",
  ],
  [
    "Nasdaq Composite",
    "26,500 / 27,000",
    "收 26,683.94，已突破 26,500；若半導體續強，27,000 是下一個心理關口。",
  ],
  [
    "Russell 2000",
    "3,000 / 2,940",
    "Russell 收 2,965.09，仍未突破 3,000；若小型股追上，升市 breadth 會更健康。",
  ],
  [
    "SOXX",
    "630 / 600",
    "SOXX 收 $628.45，貼近 $630；只要守住 $600，AI hardware momentum 未破。",
  ],
  [
    "VIX",
    "16 / 20",
    "VIX 16.20 是 risk-on 訊號；若協議反覆或 FOMC 偏鷹令 VIX 重上 20，要先減高 beta。",
  ],
  [
    "10Y Treasury",
    "4.50% / 4.55%",
    "10Y 約 4.47%，低於 4.50% 有利 growth；若重上 4.55%，Nasdaq 估值會受壓。",
  ],
  [
    "BTC",
    "$66,500 / $63,500",
    "BTC 在美股收市附近升至 $66.5k；若守不住 $63.5k，crypto beta 對 risk-on 的確認會轉弱。",
  ],
];

const watchList = [
  "6/16-17 FOMC：市場幾乎完全定價 hold，真正焦點是 Warsh 記者會、點陣圖和 2026 年加息/減息訊號。",
  "US-Iran / Hormuz：協議擬 6/19 正式簽署；簽署前任何反覆都會先打到油價、VIX 和高 beta 科技。",
  "油價關口：WTI 若守在 $80 附近甚至跌穿，通脹風險會再降；若反彈回 $85-$90，今日升市邏輯要重估。",
  "半導體 earnings / guidance：MU 下週財報前已大升，SOX 創新高後要留意預期過熱。",
  "SpaceX 第二/第三日交易：SPCX 再升 19.6%，若轉弱可能拖累 IPO 和高增長 sentiment。",
  "板塊輪動：若明日仍是 long tech / short energy，升市會變窄；最好見到 financials、industrials、小型股補上。",
  "Crypto：BTC/ETH/SOL 今次有跟足，若 FOMC 後仍企穩，代表風險胃納不只留在美股。",
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

export default function USCloseBrief20260615() {
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
          background: linear-gradient(135deg, #0f172a 0%, #14532d 52%, #0369a1 100%);
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
        .wide { grid-column: 1 / -1; }
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
          border-bottom: 1px solid #bbf7d0;
        }
        td { padding: 11px 10px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
        .callout {
          border-left: 5px solid #059669;
          background: #ecfdf5;
          padding: 14px 16px;
          border-radius: 14px;
          margin: 14px 0;
        }
        .red { color: #b91c1c; font-weight: 700; }
        .green { color: #047857; font-weight: 700; }
        a { color: #1d4ed8; text-decoration: none; }
        .small { color: #64748b; font-size: 14px; }
      `}</style>

      <header className="hero">
        <div className="eyebrow">美股收盤懶人包｜完整版</div>
        <h1>油價急跌釋放風險胃納，Nasdaq 與半導體領漲</h1>
        <p className="subtitle">
          6 月 15 日美股大升：S&P 500 升 1.65%、Dow 創收市新高、Nasdaq 升
          3.07%。US-Iran 協議希望令 WTI/Brent 跌近 5%，市場下修通脹與加息壓力；
          科技、半導體、SpaceX 和 crypto 同步 risk-on，但能源股成為明顯輸家。
        </p>
        <div className="meta">
          <span className="pill">交易日：{reportDate}</span>
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">語言：繁體中文 / 廣東話語氣</span>
          <span className="pill">
            Crypto：Binance Vision 20:00 UTC 1m close
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
            今日結論：這是典型「油價急跌 + 利率壓力下降 + AI beta 回歸」的
            risk-on 日。短線可以順勢，但關鍵風險在 FOMC 語氣和 6/19
            協議正式簽署前的 headline reversal。
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
              Yahoo chart API 顯示 Russell 2000 +0.72%，有跟升但落後 Nasdaq
              +3.07%，即資金偏向大型科技與半導體。
            </li>
            <li>
              VIX 由 17.68 跌至
              16.20，配合油價下跌，市場短線把地緣風險折讓降低。
            </li>
            <li>
              板塊分化好明顯：SOXX +5.40%、XLK +3.78%，但 XLE -3.48%、XLRE
              -0.82%，不是所有風險資產平均上升。
            </li>
            <li>
              Crypto 今次有確認 risk-on：BTC +4.60%、ETH +9.17%、SOL
              +12.45%（對比 6/12 同一美股收市時間）。
            </li>
          </ul>
        </Card>

        <Card title="4｜板塊紅綠燈">
          <DataTable
            headers={["板塊 / ETF proxy", "變動", "訊號", "一句講晒"]}
            rows={sectorRows}
          />
          <p className="small">
            板塊表以 Yahoo Finance chart API 的 Select Sector ETF proxy
            計算；ETF 與 GICS 行業口徑可能有差異，本文用作即日資金流參考。
          </p>
        </Card>

        <Card title="5｜點解今日會升？">
          <h3>支持來源</h3>
          <ul>
            <li>
              CNBC / Reuters 指 US-Iran 達成初步協議或備忘錄，市場押注 Hormuz
              可重開，WTI/Brent 跌近 5%，通脹壓力即時降溫。
            </li>
            <li>
              CNBC 報道 10Y 約 4.471%、2Y 約
              4.064%，債息回落令長久期科技股受惠。
            </li>
            <li>
              Investopedia 指 SOX 升逾 5%，Magnificent Seven
              全線收綠；TradingKey 指 SOX 收 14,099.62 創新高。
            </li>
            <li>
              SpaceX 第二日交易再升約 19.6%，高增長和 IPO appetite
              持續，是市場風險胃納的重要溫度計。
            </li>
          </ul>
          <h3>仍然要小心</h3>
          <ul>
            <li>
              協議正式簽署擬於 6/19，細節和執行仍有不確定性；headline risk
              未完全消失。
            </li>
            <li>
              Fed 會議即將開始，市場雖然幾乎定價 hold，但點陣圖若偏鷹會壓住
              growth。
            </li>
            <li>
              能源與防守板塊明顯跑輸，升市結構偏向高
              beta；若半導體轉弱，指數會較脆弱。
            </li>
          </ul>
        </Card>

        <Card title="6｜宏觀白話版">
          <DataTable headers={["項目", "數據", "解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：市場今日不是突然覺得經濟無問題，而是覺得「油價最壞情境」暫時放低。
            油價跌、債息跌、美元跌，科技估值就有空間彈；但 Fed
            未開會、協議未正式簽，風險仍在。
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
            Crypto 採 Binance Vision public data 1-minute kline，時間點為
            2026-06-15 20:00:00 UTC（美股 4:00pm ET 附近）；對比基準為
            2026-06-12 同一時間。原始 Binance 直接 spot API
            在部分環境可能受地區限制，因此使用官方 public data / data-api。
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
              指數動能偏強，S&P 500 守 7,500、Nasdaq 守 26,500、VIX 低於
              18，都支持繼續 risk-on；但 FOMC 前避免無止蝕追高。
            </li>
            <li>
              <strong>中線：</strong>
              AI hardware 重新領導市場，MU/AMD/SOXX
              強勢清楚；但要留意估值與財報預期已被快速推高。
            </li>
            <li>
              <strong>風控：</strong>若 WTI 反彈回 $85-$90、10Y 重上 4.55%、VIX
              重上 20，先減高 beta、IPO、單一半導體主題倉位。
            </li>
            <li>
              <strong>一句到尾：</strong>
              今日升市質素比上週更強，因為美股、債息、美元、crypto
              一齊配合；但這仍是 headline-sensitive rally，真正確認要看 FOMC
              後和 US-Iran 協議能否順利落地。
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
              指數收市：CNBC 與 Yahoo chart API 一致列 Dow 51,671.03、S&P 500
              7,554.29、Nasdaq 26,683.94；Trading Economics 的 US500
              頁面一度顯示 7,550.56，疑屬 CFD / futures 或刷新口徑，本文採
              CNBC/Yahoo 現貨指數收市。
            </li>
            <li>
              Russell 2000：Yahoo chart API 計得
              2,965.09、+0.72%；部分即時頁可能列
              +0.79%，屬收市/刷新時間差異，本文採 API 日線 close。
            </li>
            <li>
              債息：CNBC 新聞報 2Y 4.064%、10Y 4.471%、30Y 4.974%；Yahoo ^TNX
              日結為 4.469%，差異很小，本文並列主要口徑。
            </li>
            <li>
              油價：Reuters/CNA settle 口徑為 WTI $80.75、Brent $83.17；Yahoo
              futures 日線時間戳落在 6/16 UTC，對應 6/15
              美股交易後結算，方向一致。
            </li>
            <li>
              Gold / DXY：CNBC 報 spot gold 約 $4,327.82、gold futures settled
              $4,351.6，Yahoo futures 日線約 $4,334.20；本文以 CNBC/Reuters
              新聞口徑為主，並避免過度精確比較不同合約。
            </li>
            <li>
              Crypto：Binance 直接 API 在環境中可能受限制，本文使用 Binance
              Vision official public data 1m kline，精確取 2026-06-15 20:00 UTC
              close。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
