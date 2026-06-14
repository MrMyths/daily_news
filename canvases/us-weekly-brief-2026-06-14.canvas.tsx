import React from "react";

const reportWeek = "2026-06-08 至 2026-06-12";
const reportDate = "2026-06-14";
const publishedAt =
  "香港時間 2026-06-14 09:02（週末自動生成；美股最新交易日為 6/12）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "T. Rowe Price - Global markets weekly update, June 12 2026",
    url: "https://www.troweprice.com/personal-investing/resources/insights/global-markets-weekly-update.html",
  },
  {
    name: "Investopedia - Markets News, June 12 2026",
    url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-06122026-11996464",
  },
  {
    name: "Morningstar - Weekly Market Update, week ended June 12",
    url: "https://www.morningstar.com/markets/weekly-market-update-stocks-edge-higher-basic-materials-rise-communication-services-fall",
  },
  {
    name: "University of Michigan - Surveys of Consumers, preliminary June 2026",
    url: "https://www.sca.isr.umich.edu/?os=v",
  },
  {
    name: "BLS - Consumer Price Index, May 2026",
    url: "https://www.bls.gov/news.release/cpi.nr0.htm",
  },
  {
    name: "BLS - Producer Price Index, May 2026",
    url: "https://www.bls.gov/news.release/archives/ppi_06112026.htm",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "Trading Economics - US 10 Year Treasury Note Yield",
    url: "https://tradingeconomics.com/united-states/government-bond-yield",
  },
  {
    name: "SSGA - Monthly Flash Flows",
    url: "https://www.ssga.com/library-content/pdfs/etf/us/monthly-flash-flows.pdf",
  },
  {
    name: "FRED - CBOE Volatility Index: VIX",
    url: "https://fred.stlouisfed.org/series/VIXCLS",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
  {
    name: "Binance Vision public data",
    url: "https://data.binance.vision/",
  },
];

const quickTakeaways = [
  "美股本週先震後彈：S&P 500 收 7,431.46，週升 47.72 點 / +0.65%；Dow、Nasdaq 同樣錄得正週，S&P 500 是過去 11 週第 10 個升週。",
  "今週最靚的不是 mega-cap tech，而是市場廣度：Russell 2000 週升 110.47 點 / +3.90%，S&P MidCap 400 升 102.75 點 / +2.78%。",
  "三條主線推高風險胃納：SpaceX 史上最大 IPO 成功上市、U.S.-Iran 協議憧憬令油價回落、債息由高位降溫。",
  "宏觀仍有刺：May CPI +4.2% YoY、PPI +6.5% YoY，能源衝擊未完全消散；Fed 下週大概率 hold，但點陣圖與措辭先係重點。",
  "Morningstar 指 876 間覆蓋美股中 586 間上升，約 67% 股票錄得週升，升市質素比單靠少數大型科技股更健康。",
  "Crypto 用 Binance Vision 2026-06-12 20:00 UTC 1m close：BTC $63,586.21、ETH $1,666.01、SOL $66.77，分別較 6/5 同一時間升 +5.18%、+5.62%、+4.84%。",
];

const indexRows = [
  [
    "DJIA",
    "51,202.26",
    "+335.48 / +0.66%",
    "週五升 353.51 點 / +0.70%，帶動全週轉正；value/cyclical 重新有買盤。",
  ],
  [
    "S&P 500",
    "7,431.46",
    "+47.72 / +0.65%",
    "收近週內高位，T. Rowe Price 指為過去 11 週第 10 個正週；但 7,450-7,500 仍是短線壓力區。",
  ],
  [
    "Nasdaq Composite",
    "25,888.84",
    "+179.41 / +0.70%",
    "AI/半導體大波動後仍收復失地；週五只升 +0.31%，動能比 small caps 溫和。",
  ],
  [
    "S&P MidCap 400",
    "3,796.31",
    "+102.75 / +2.78%",
    "中型股跑贏大型股，反映資金不再只集中 mega-cap tech。",
  ],
  [
    "Russell 2000",
    "2,943.97",
    "+110.47 / +3.90%",
    "本週最強大市訊號；但細價股仍最怕 10Y 重新抽上或信貸環境轉差。",
  ],
  [
    "VIX",
    "最新可靠 close：19.44（6/11）",
    "較 6/10 的 22.22 回落 -12.51%",
    "FRED/Cboe 生成時仍未見 6/12 完整官方 close，故保守標示最新可靠時間點。",
  ],
];

const whyMarketMoved = [
  [
    "SpaceX IPO",
    "SPCX 以 $135 定價，週五首日開 $150、收 $160.95 左右，升約 19%；市場把它視為大型 growth/AI/space story 的流動性壓力測試。",
  ],
  [
    "U.S.-Iran / 油價",
    "Trump 取消原定 strikes，市場憧憬協議令 WTI 4pm ET 約 $84.35、Brent settlement $87.33；能源通脹 premium 暫時下降。",
  ],
  [
    "通脹數據",
    "CPI headline +0.5% MoM / +4.2% YoY，PPI +1.1% MoM / +6.5% YoY；市場反彈不是因通脹已解決，而是最壞能源情景暫時退後。",
  ],
  [
    "AI capex 分化",
    "Oracle RPO 數字強但市場擔心 data-center capex / debt；Adobe 因 AI freemium 策略與 CFO 離任急跌，AI 交易由敘事轉向現金流。",
  ],
  [
    "債息回落",
    "10Y 由上週約 4.52%-4.55% 回到週五約 4.48%-4.49%，支持 growth multiple 與 small/mid caps；但 Fed 風險仍未解除。",
  ],
];

const topNews = [
  [
    "1",
    "SpaceX 完成史上最大 IPO",
    "Investopedia / Yahoo 指 SpaceX 以 $135 定價、集資約 $75bn，週五收約 $160.95，首日升約 19.2%。這件事比單一新股重要，因為它顯示市場仍願意接大型高估值 growth story。",
  ],
  [
    "2",
    "油價因 U.S.-Iran 協議憧憬急回",
    "Investopedia 指 WTI 4pm ET 約 $84.35、Brent settlement $87.33。油價跌幫市場減低能源通脹恐慌，但協議條款仍有分歧，不能視為風險完全消失。",
  ],
  [
    "3",
    "May CPI / PPI 同週公布，headline inflation 偏熱",
    "CPI +4.2% YoY、PPI +6.5% YoY，能源是主要推手；core CPI 月增 +0.2% 較溫和，令市場願意留在 risk-on，但 Fed 仍難急轉鴿。",
  ],
  [
    "4",
    "AI 交易開始問回報率",
    "Oracle 受 AI data-center capex / debt 擔憂拖累；Adobe 跌至多年低位，市場開始問 AI 用戶增長何時變成 ARR 與 free cash flow。",
  ],
  [
    "5",
    "消費者信心由低位反彈但仍脆弱",
    "University of Michigan 初值 48.9，高過 May 的 44.8；一年通脹預期由 4.8% 回落至 4.6%，但仍遠高於衝突前水平。",
  ],
];

const heatMapRows = [
  [
    "Basic Materials",
    "+2.91%",
    "強綠",
    "Morningstar 口徑本週最佳板塊；受惠周期修復、美元偏軟與利率壓力稍降。",
  ],
  [
    "Consumer Defensive",
    "+2.53%",
    "綠燈",
    "防守消費跑出，說明資金不是純追高 beta，仍有人保留防守配置。",
  ],
  [
    "Small Caps",
    "+2.98%（Morningstar）/ Russell 2000 +3.90%",
    "強綠",
    "最清晰的廣度改善訊號；細價股受惠債息回落與風險胃納修復。",
  ],
  [
    "Mid Caps",
    "+2.02%（Morningstar）/ S&P MidCap 400 +2.78%",
    "綠燈",
    "中型股比 mega-cap 更強，市場由集中 AI trade 擴散。",
  ],
  [
    "Growth / AI",
    "+1.69%（Morningstar growth）",
    "波動綠",
    "仍錄得週升，但個股差異大，hardware winners 比 software monetization 故事更受歡迎。",
  ],
  [
    "Communication Services",
    "-0.68%",
    "紅燈",
    "Morningstar 指本週最弱板塊；平台股未能完全受惠 risk-on。",
  ],
  [
    "Energy",
    "-0.01%",
    "中性偏紅",
    "油價回落令能源股失去短線避險 premium；如果協議破局，板塊方向可快速反轉。",
  ],
];

const flowRows = [
  [
    "本週市場廣度",
    "Morningstar 覆蓋 876 間美股中 586 間上升、2 間不變、288 間下跌，約 67% 上升",
    "升市比單靠 mega-cap 更健康，反映資金向中小型股與周期板塊擴散。",
  ],
  [
    "小型股 / 中型股",
    "Russell 2000 +3.90%、S&P MidCap 400 +2.78%",
    "資金開始願意承擔更闊市場 beta，是本週最重要風險胃納訊號。",
  ],
  [
    "ETF flows 最新可靠口徑",
    "SSGA May Flash Flows：US-listed ETFs 5 月流入 $185bn；Technology 5 月流入 $12.991bn，扣除 Tech 後 sector ETFs 淨流出約 $4bn",
    "即時週度 sector flows 暫無可靠數據；月度 flows 顯示資金仍集中核心 ETF 與 Technology。",
  ],
  [
    "Energy flows vs price",
    "SSGA 指 Energy YTD/May 仍有資金流入，但本週油價回落令能源板塊跑輸",
    "flow 支持不等於短線股價一定升；地緣消息可以比資金流更快改變能源 beta。",
  ],
  [
    "Crypto beta",
    "BTC/ETH/SOL 於 Binance 4pm ET 附近口徑週升約 +5%",
    "Crypto 同步反彈，確認 risk-on 有擴散至 24/7 高 beta 市場。",
  ],
];

const macroRows = [
  [
    "CPI",
    "+0.5% MoM / +4.2% YoY；Core +0.2% MoM / +2.9% YoY",
    "Headline 熱主要因 energy；core 月增較溫和，是市場沒有全面 risk-off 的原因。",
  ],
  [
    "PPI",
    "+1.1% MoM / +6.5% YoY；Core +0.4% MoM",
    "企業成本壓力未消失，若能源再升，後續 CPI 仍有二次傳導風險。",
  ],
  [
    "FedWatch",
    "Investopedia 引 CME FedWatch 約 96% 機率 6/17 維持利率不變；Investing 顯示 hold 機率約 97% 口徑",
    "6 月 hold 幾乎是 base case；真正影響市場的是點陣圖、通脹措辭與 Warsh 首次記者會。",
  ],
  [
    "10Y Treasury",
    "T. Rowe Price：約 4.48% by Friday afternoon；Investopedia / Trading Economics 約 4.49%",
    "債息回落支持估值，但 4.55%-4.60% 仍是 growth 股壓力線。",
  ],
  [
    "Oil",
    "WTI 約 $84.35（6/12 4pm ET）；Brent settlement $87.33；Morningstar 週變動 WTI -6.49% 至 $84.39",
    "油價跌是週五 risk-on 關鍵；若 Iran / Hormuz 風險重燃，通脹預期可即時回升。",
  ],
  [
    "Gold / DXY",
    "Investopedia：Gold futures 約 $4,230/oz；DXY 約 99.78",
    "黃金仍有避險承接，美元偏軟，反映市場仍在對沖地緣與通脹尾部風險。",
  ],
  [
    "Consumer Sentiment",
    "University of Michigan 初值 48.9；一年通脹預期 4.6%、長期 3.4%",
    "汽油回落幫情緒止跌，但消費者仍覺得通脹壓力重，消費股要選擇性看。",
  ],
];

const stockRows = [
  [
    "SPCX / SpaceX",
    "IPO $135；週五開 $150，收約 $160.95，首日 +19.2%",
    "本週最大單一事件；大額 IPO 沒有抽乾大市，反而提升 risk appetite。",
  ],
  [
    "TSLA",
    "Investopedia：週五 +1.6%，前一日 +4.6%",
    "Musk ecosystem 因 SpaceX IPO 受關注，但 TSLA 仍要分開看 EV demand、robotics 敘事與估值。",
  ],
  [
    "NVDA",
    "Barchart / AP 表格：週五 $205.19，+0.16%；Investopedia 指 Nvidia 向中國客戶預告 Vera CPU 或 8 月可供應",
    "仍是 AI 核心，但出口限制與估值令波動上升，短線未必是最強 beta。",
  ],
  [
    "AMD / 半導體設備",
    "Morningstar top gainers 包括 KLA +31.90%、Applied Materials +25.18%、Lam Research +20.93%",
    "市場更偏好 AI hardware / semiconductor supply chain；但估值 premium 已高，要防止追價。",
  ],
  [
    "ORCL",
    "Morningstar：本週 -13.83%，收 $184.03",
    "RPO $638bn 很強，但市場更聚焦 AI data-center capex、debt 與 free cash flow。",
  ],
  [
    "ADBE",
    "Investopedia：週五跌近 7%；Morningstar：本週 -18.85%，收 $204.03",
    "AI freemium 策略壓短期 ARR，CFO 離任增加 execution / governance 折讓。",
  ],
  [
    "Oil-sensitive travel",
    "DAL/UAL/AAL、cruise names 週五盤前普遍 +1.5%-2%",
    "油價跌直接降低燃料成本想像，是能源回吐的另一面。",
  ],
];

const earningsEvents = [
  "6/15：May Capacity Utilization / Industrial Production；用來確認 higher energy costs 有無拖慢製造業。",
  "6/16：May New Residential Construction；房屋數據會影響建材、銀行與利率敏感股。",
  "6/17：FOMC 議息結果、經濟預測與點陣圖；市場幾乎肯定 hold，但 Warsh 記者會會直接影響 10Y 與 Nasdaq multiple。",
  "6/17：May Retail Sales；如果汽油/通脹已壓到消費，consumer discretionary 會較敏感。",
  "6/18：Initial Claims、Philadelphia Fed Index、Leading Indicators；配合本週 claims 升至 229k，留意勞動市場是否轉弱。",
  "SpaceX 上市後第二週：留意 SPCX 是否續吸成交與資金，或首日狂熱後回吐並拖累 Musk/space 概念股。",
  "AI infrastructure：Oracle、Broadcom、Nvidia、AMD、Adobe 後續 analyst revisions，重點看 capex 是否被市場接受。",
  "6/26：University of Michigan final June sentiment；如果一年通脹預期回升，Fed hawkish 風險會再升。",
];

const technicalRows = [
  [
    "S&P 500",
    "支持 7,380 / 7,300；阻力 7,450 / 7,500",
    "7,431.46 收近反彈高位；企穩 7,450 才可講重新挑戰 7,500，失 7,380 代表反彈質素轉弱。",
  ],
  [
    "Nasdaq Composite",
    "支持 25,500；阻力 26,000",
    "收 25,888.84，距 26,000 不遠；若 AI capex concerns 繼續，26,000 會是第一個壓力。",
  ],
  [
    "Russell 2000",
    "支持 2,900；阻力 3,000",
    "細價股本週最強，2,900 要守；若破 3,000，代表廣度改善可延續。",
  ],
  [
    "10Y Treasury",
    "4.45% / 4.55%-4.60%",
    "4.55% 以上 growth 會再受壓；跌穿 4.45% 則支持 small/mid caps 續彈。",
  ],
  [
    "WTI",
    "$84 / $90",
    "低於 $84 通脹恐慌降溫；重上 $90 代表 Iran/Hormuz premium 回來。",
  ],
  [
    "BTC",
    "$63,500 / $60,000",
    "BTC 4pm ET 附近 $63,586；守 $63.5k 是 risk-on confirmation，失 $60k 則 crypto beta 轉弱。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$63,586.21",
    "+5.18% vs 2026-06-05 20:00 UTC",
    "Binance Vision spot 1m kline：2026-06-12 20:00:00 UTC close，即美股收市 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$1,666.01",
    "+5.62% vs 2026-06-05 20:00 UTC",
    "ETH 週內跟 risk-on 修復，但仍低於 6 月初區間，未算全面反轉。",
  ],
  [
    "SOLUSDT / SOL",
    "$66.77",
    "+4.84% vs 2026-06-05 20:00 UTC",
    "SOL beta 高但本週升幅略低於 ETH；短線要看 $67-$70 能否企穩。",
  ],
];

const watchPlan = [
  [
    "Base case",
    "維持風險資產偏正面，但降低追高速度",
    "S&P 500 企穩 7,400、10Y 留在 4.55% 下、WTI 不重上 $90，risk-on 可延續。",
  ],
  [
    "Bull case",
    "買盤擴散至 small/mid caps + AI hardware",
    "Russell 2000 攻 3,000、Nasdaq 破 26,000、BTC 守 $63.5k，代表資金不只留在防守。",
  ],
  [
    "Bear case",
    "地緣/通脹/Fed 三重壓力回來",
    "Iran 協議破局、WTI 重上 $90-$95、10Y 升穿 4.55%-4.60%、Fed 點陣圖偏鷹，先減高 beta。",
  ],
  [
    "觀察清單",
    "SPCX、NVDA、AMD、ORCL、ADBE、IWM、XLB、XLP、XLE、BTC",
    "分別代表 IPO 流動性、AI 硬件、AI capex、software AI 變現、廣度、防守與能源通脹。",
  ],
];

function Card({
  title,
  children,
  wide = false,
}: {
  title: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section className={wide ? "card wide" : "card"}>
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

export default function USWeeklyBrief20260614() {
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
          background: linear-gradient(135deg, #0f172a 0%, #164e63 48%, #14532d 100%);
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
        .warn {
          border-left-color: #f59e0b;
          background: #fffbeb;
        }
        .green { color: #047857; font-weight: 700; }
        .red { color: #b91c1c; font-weight: 700; }
        .amber { color: #b45309; font-weight: 700; }
        a { color: #1d4ed8; text-decoration: none; }
        .small { color: #64748b; font-size: 14px; }
        .score {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin-top: 16px;
        }
        .score div {
          border-radius: 18px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.22);
          padding: 14px;
        }
        .score strong { display: block; font-size: 24px; }
      `}</style>

      <header className="hero">
        <div className="eyebrow">美股周報懶人包</div>
        <h1>細價股領住反彈，SpaceX IPO 幫市場重開風險胃納</h1>
        <p className="subtitle">
          本週美股在 Iran / inflation / AI capex 三重壓力之下先震後穩。油價因
          U.S.-Iran 協議憧憬回落、10Y 債息由高位降溫，配合 SpaceX 史上最大 IPO
          首日成功，令 S&P 500、Nasdaq、Dow 全週收高，小型股明顯跑贏。
        </p>
        <div className="meta">
          <span className="pill">週期：{reportWeek}</span>
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">格式：週末版 / 繁體中文 / 廣東話語氣</span>
          <span className="pill">
            Crypto：Binance Vision 20:00 UTC 1m close
          </span>
        </div>
        <div className="score">
          <div>
            <span>S&P 500</span>
            <strong>+0.65%</strong>
          </div>
          <div>
            <span>Russell 2000</span>
            <strong>+3.90%</strong>
          </div>
          <div>
            <span>Fed hold odds</span>
            <strong>~96%-97%</strong>
          </div>
          <div>
            <span>BTC weekly</span>
            <strong>+5.18%</strong>
          </div>
        </div>
      </header>

      <div className="grid">
        <Card title="1｜30 秒重點" wide>
          <ul>
            {quickTakeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="callout">
            一句到尾：本週反彈質素比上週好，因為升幅擴散到 small/mid caps；但
            CPI/PPI 仍熱，下週 FOMC 前唔應該把「油價跌一日」當成通脹已解決。
          </div>
        </Card>

        <Card title="2｜大市一眼睇" wide>
          <DataTable
            headers={["指標", "週五收市", "一週變動", "解讀"]}
            rows={indexRows}
          />
          <p className="small">
            指數週變動採 T. Rowe Price weekly update（Reuters / Yahoo Finance /
            Bloomberg closing data as of 4 p.m. ET）；VIX 因 FRED/Cboe
            生成時只可靠至 6/11，故明確標示時間點。
          </p>
        </Card>

        <Card title="3｜市場升跌原因">
          <DataTable headers={["驅動", "今週點解重要"]} rows={whyMarketMoved} />
        </Card>

        <Card title="4｜5 大新聞">
          <DataTable headers={["#", "新聞", "市場含義"]} rows={topNews} />
        </Card>

        <Card title="5｜熱度圖：邊度有錢追？" wide>
          <DataTable
            headers={["板塊 / 風格", "本週表現", "訊號", "一句講晒"]}
            rows={heatMapRows}
          />
        </Card>

        <Card title="6｜資金流向與板塊紅綠燈" wide>
          <DataTable
            headers={["項目", "最新可靠數據", "解讀"]}
            rows={flowRows}
          />
          <div className="callout warn">
            週度 ETF 流向在生成時未見可驗證完整數據，所以本段把「本週 price
            action / breadth」與「SSGA 最新月度 ETF flow」分開寫，避免將月度
            flows 誤當成即時週度資金。
          </div>
        </Card>

        <Card title="7｜宏觀白話版" wide>
          <DataTable headers={["項目", "數據", "白話解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：市場今週唔係話通脹無事，而係覺得能源最壞情景暫時避過。Fed
            下週大概率 hold，但如果 Warsh / dot plot
            暗示年底仍有加息風險，高估值科技仍會被壓。
          </div>
        </Card>

        <Card title="8｜重點股票與 Crypto" wide>
          <DataTable
            headers={["股票 / 主題", "最新可靠數據", "點睇"]}
            rows={stockRows}
          />
          <h3>BTC / ETH / SOL</h3>
          <DataTable
            headers={["幣種", "6/12 4:00pm ET 附近價", "一週變動", "來源/備註"]}
            rows={cryptoRows}
          />
          <p className="small">
            Binance direct API 在此環境回 451；本文改用 Binance Vision public
            data 的 spot 1-minute kline。時間點為 2026-06-12 20:00:00 UTC，對比
            2026-06-05 同一時間，盡量貼近美股收市 4:00pm ET。
          </p>
        </Card>

        <Card title="9｜財報與事件焦點" wide>
          <ul>
            {earningsEvents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        <Card title="10｜技術位">
          <DataTable headers={["市場", "位置", "意義"]} rows={technicalRows} />
        </Card>

        <Card title="11｜下週交易計劃 / 觀察清單">
          <DataTable
            headers={["情景", "操作思路", "觸發條件"]}
            rows={watchPlan}
          />
        </Card>

        <Card title="12｜操作提示與最終觀點 / 來源與免責聲明" wide>
          <ul>
            <li>
              <strong>短線：</strong>
              可以承認反彈有廣度，但倉位不宜因 SpaceX IPO 氣氛而過度集中高
              beta；下週 FOMC 前留 buffer。
            </li>
            <li>
              <strong>中線：</strong>
              AI 仍是主線，但由「有 AI 就買」進入「capex 能否換到 cash flow」
              階段；hardware winners 仍較 software AI monetization 故事清晰。
            </li>
            <li>
              <strong>風控：</strong>若 WTI 重上 $90、10Y 升穿 4.55%-4.60%、VIX
              重新升穿 22，應先減少 small caps、unprofitable growth、crypto
              beta。
            </li>
            <li>
              <strong>最終觀點：</strong>
              今週是健康但未安全的反彈。最靚是 Russell 2000
              跑贏，最危險是通脹數據未支持 Fed
              轉向；所以下週重點不是追新聞，而是看 breadth 能否在 FOMC 後繼續。
            </li>
          </ul>

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
              指數：週變動採 T. Rowe Price 表格（來源註明 Reuters / Yahoo
              Finance / Bloomberg，4 p.m. ET 收市口徑）；週五日變動以
              Investopedia / Barchart-AP 口徑補充。
            </li>
            <li>
              SpaceX：Investopedia、Yahoo 與市場頁對收市價有少量差異；本文用
              「約 $160.95 / 約 +19.2%」表述，避免過度精確。
            </li>
            <li>
              FedWatch：Investopedia 引 CME 顯示約 96% hold；Investing 口徑約
              97%，本文寫成「約 96%-97%」。
            </li>
            <li>
              油價：Investopedia 列 WTI 4 p.m. ET 約 $84.35、Brent settlement
              $87.33；Morningstar 週度口徑 WTI
              $84.39，差異來自合約/時間點，本文註明時間。
            </li>
            <li>
              VIX：FRED/Cboe 在生成時可靠更新至 6/11 close 19.44，未見 6/12 官方
              close，故報告寫「最新可靠 close」而非估算 6/12。
            </li>
            <li>
              ETF flows：即時週度 ETF flows 暫無可靠數據；本報使用 Morningstar
              的本週 price/breadth 與 SSGA 最新月度 flow 報告，兩者分開解讀。
            </li>
            <li>
              Crypto：Binance 直接 API 在環境中回 451；本文使用 Binance Vision
              public data 取得 1m kline，沒有使用媒體近似報價。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
