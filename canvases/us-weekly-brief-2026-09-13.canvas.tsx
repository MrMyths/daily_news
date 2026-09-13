import React from "react";

const reportWeek = "2026-09-08 至 2026-09-11（9/7 Labor Day 休市短週）";
const reportDate = "2026-09-13";
const publishedAt =
  "香港時間 2026-09-13 09:11（週末自動生成；數據截至美股 9/11 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP via ABC News - How major US stock indexes fared Friday 9/11/2026",
    url: "https://abcnews.com/Business/wireStory/major-us-stock-indexes-fared-friday-9112026-136375931",
  },
  {
    name: "AP via The Seattle Times - How major US stock indexes fared Friday 9/11/2026",
    url: "https://www.seattletimes.com/business/how-major-us-stock-indexes-fared-friday-9-11-2026/",
  },
  {
    name: "Reuters - US equity funds record nine-month high outflows",
    url: "https://www.reuters.com/business/us-equity-funds-record-nine-month-high-outflows-oil-stokes-inflation-fears-2026-09-11/",
  },
  {
    name: "Reuters - S&P 500 ends down as Treasury yields rise and traders fret about inflation",
    url: "https://www.reuters.com/business/sp-500-dow-futures-attempt-recovery-ahead-inflation-report-2026-09-10/",
  },
  {
    name: "WSJ - U.S. Stocks Snap Losing Streak as Oil Prices Fall",
    url: "https://www.wsj.com/finance/stocks/u-s-stocks-rise-as-oil-retreats-595997b5",
  },
  {
    name: "CNBC - August consumer inflation cements Fed rate hike odds",
    url: "https://www.cnbc.com/2026/09/11/august-consumer-inflation-cements-fed-rate-hike-odds-what-wall-street-is-saying.html",
  },
  {
    name: "CNA / Reuters - Wall Street jumps, oil lower ahead of Fed vote next week",
    url: "https://www.channelnewsasia.com/business/bond-yields-near-multi-year-peaks-after-accelerating-us-inflation-traders-add-fed-hike-bets-6377516",
  },
  {
    name: "BLS - Consumer Price Index official release",
    url: "https://www.bls.gov/news.release/cpi.nr0.htm",
  },
  {
    name: "BLS - Producer Price Index official release",
    url: "https://www.bls.gov/news.release/ppi.nr0.htm",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Cboe - VIX Volatility Products",
    url: "https://www.cboe.com/en/tradable-products/vix/",
  },
  {
    name: "Reuters - Oracle restructuring costs and AI spending",
    url: "https://www.reuters.com/business/retail-consumer/oracle-shares-rise-ai-cloud-backlog-beats-estimates-2026-09-11/",
  },
  {
    name: "Reuters - Oracle tops estimates as AI demand tempers cash-burn fears",
    url: "https://www.reuters.com/technology/oracles-quarterly-revenue-beats-estimates-ai-boom-drives-cloud-demand-2026-09-10/",
  },
  {
    name: "CNBC - Apple changes iPhone release cadence",
    url: "https://www.cnbc.com/2026/09/10/apple-makes-biggest-change-to-iphone-release-cadence-in-7-years.html",
  },
  {
    name: "Reuters - Nvidia in talks to invest in Anthropic IPO",
    url: "https://www.reuters.com/legal/transactional/nvidia-talks-invest-anthropics-mega-ipo-sources-say-2026-09-11/",
  },
  {
    name: "Federal Reserve Board - September 2026 calendar",
    url: "https://www.federalreserve.gov/newsevents/2026-september.htm",
  },
  {
    name: "U.S. Census Bureau - Monthly Retail Trade release schedule",
    url: "https://www.census.gov/retail/release_schedule.html",
  },
  {
    name: "StockTi - Earnings calendar Sep 14-18, 2026",
    url: "https://stockti.com/earnings-calendar/sep-14-18-2026",
  },
  {
    name: "Yahoo Finance chart data - market, ETF and stock closes",
    url: "https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC",
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
  "今週係 Labor Day 後四日短週：週五油價回落令美股止跌反彈，但未完全收復前幾日 CPI / PPI、油價同債息造成的壓力；S&P 500 全週 -0.80%，Dow -1.57%，Nasdaq -0.66%，Russell 2000 -2.41%。",
  "週五主線好清楚：WTI 由週四高位回落，Yahoo futures 顯示 9/11 收 $99.99、單日 -2.43%，Brent 收 $104.42、單日 -2.98%；油價降溫蓋過 CPI 稍熱。",
  "通脹壓力未消失：CNBC / BLS 轉述顯示 8 月 CPI +0.4% m/m、+3.4% y/y，core CPI +0.3% m/m；CME FedWatch 被轉述為下週 25bp 加息機率約 85%-90%。",
  "債息仍是估值天花板：Yahoo 10Y proxy 收約 4.975%，30Y 約 5.354%；CNA / Reuters 指 10Y 盤中曾到 4.9915%、30Y 曾到 5.424%。",
  "板塊不是全面 risk-off：Energy、semis、communication services、technology 仍守住綠燈；materials、health care、consumer discretionary、小型股相對弱。",
  "Crypto 用 Binance Vision 2026-09-11 20:00 UTC 1m close：BTC $77,290、ETH $2,539.47、SOL $102.04；較 9/4 同一時間分別 -3.14%、+3.37%、+0.28%。",
];

const indexRows = [
  [
    "DJIA",
    "52,573.29",
    "週五 +509.19 / +0.98%；全週 -840.96 / -1.57%",
    "藍籌靠油價回落與逢低買盤反彈，但全週仍受債息和通脹壓力拖低。",
  ],
  [
    "S&P 500",
    "7,656.98",
    "週五 +65.28 / +0.86%；全週 -61.62 / -0.80%",
    "週五收復部分跌幅，但仍是高位整固；7,600 附近暫見承接。",
  ],
  [
    "Nasdaq Composite",
    "26,333.04",
    "週五 +251.31 / +0.96%；全週 -173.96 / -0.66%",
    "科技指數靠大型平台與部分半導體撐住，跌幅小過 Dow / Russell。",
  ],
  [
    "Russell 2000",
    "2,903.94",
    "週五 +12.99 / +0.45%；全週 -71.71 / -2.41%",
    "小型股對短端融資成本最敏感，今週明顯輸大市。",
  ],
  [
    "VIX",
    "15.84",
    "週五 -2.00 / -11.21%；全週 +1.31 / +9.02%",
    "Cboe 9/11 20:15 數據同 Yahoo close 一致；波幅回落但仍高過上週五。",
  ],
];

const whyMarketMoved = [
  [
    "油價先升後回，左右整週風險胃納",
    "Brent 週五曾見 $109.97 四個月高位，之後回落至約 $104；Yahoo futures 顯示 Brent 全週仍 +8.45%、WTI +9.30%。市場不是不怕通脹，只是週五見到油價回吐，先敢補倉。",
  ],
  [
    "CPI / PPI 令 Fed 加息預期升溫",
    "CNBC 引 BLS 指 8 月 CPI +0.4% m/m、+3.4% y/y，core CPI +0.3% m/m，高過預期 0.1ppt；9/10 PPI headline +0.4% m/m、+5.4% y/y。FedWatch 被轉述為 25bp hike odds 約 85%-90%。",
  ],
  [
    "長短債息同步抽升，估值被壓",
    "Yahoo 9/11 close：10Y 約 4.975%、30Y 約 5.354%；CNA / Reuters 指 2Y 約 4.659%、10Y 盤中 4.9915%、30Y 盤中 5.424%。growth multiple 對這組數字好敏感。",
  ],
  [
    "資金流轉防守：美股基金出現九個月最大流出",
    "Reuters / LSEG Lipper：截至 9/9 一週，美國 equity funds 淨流出 $32.27bn，large-cap funds 流出 $40.44bn；但 sector funds 仍流入 $1.46bn，technology +$1.71bn、financials +$720mn。",
  ],
  [
    "AI 故事有分化：Meta / AMD 強，Nvidia / Oracle 弱",
    "AMD 全週 +8.07%、META +5.07%，但 NVDA -5.24%、ORCL -5.35%。即是資金仍要 AI exposure，但會避開現金流、估值或事件風險較大的名字。",
  ],
];

const topNews = [
  [
    "1",
    "週五美股反彈，結束四連跌",
    "AP / WSJ：Dow +509.19、S&P 500 +65.28、Nasdaq +251.31；原因主要是油價回落，抵消 CPI 稍熱帶來的加息憂慮。",
  ],
  [
    "2",
    "8 月 CPI 把下週 Fed 推向加息邊緣",
    "CNBC：headline CPI +0.4% m/m、+3.4% y/y；core +0.3% m/m，高過估算。CME FedWatch 機率由週四約 72% 升至近 86%，部分策略師講到約 90%。",
  ],
  [
    "3",
    "美股基金流出 $32.27bn",
    "Reuters / LSEG Lipper：截至 9/9 一週，美國股票基金錄得九個月最大流出；large-cap funds 流出 $40.44bn，顯示高位市已有去風險。",
  ],
  [
    "4",
    "Oracle AI backlog 亮眼，但現金流與債務仍被審判",
    "Reuters：Oracle backlog $664bn、Q1 beat、cash burn 低過預期；但 9/11 股價高開後轉跌約 2%，公司亦提高 restructuring cost 至約 $2.8bn。",
  ],
  [
    "5",
    "Apple 改 iPhone 節奏；Nvidia / Anthropic 傳聞延續 AI 資本市場熱度",
    "CNBC：Apple 發布 iPhone Duo 與 iPhone 18 Pro，普通版或移至春季；Reuters：Nvidia 據報考慮最多 $10bn 參與 Anthropic 潛在超大型 IPO。",
  ],
];

const heatMapRows = [
  [
    "Energy / XLE",
    "+1.69%；WTI +9.30%、Brent +8.45%",
    "綠燈但波動高",
    "油價全週仍大升，能源股受惠；但週五油價急回，追貨要留意 headline risk。",
  ],
  [
    "Semiconductors / SOXX",
    "+1.39%",
    "綠燈",
    "SOXX 跑贏 Nasdaq；AMD +8.07% 抵消 NVDA -5.24%，反映 AI trade 仍有輪動。",
  ],
  [
    "Communication Services / XLC",
    "+0.51%",
    "偏綠",
    "META +5.07% 幫板塊頂住，平台股比傳統 cyclical 更有防守增長味。",
  ],
  [
    "Technology / XLK",
    "+0.21%",
    "中性偏綠",
    "高債息下仍微升，說明 mega-cap tech 未失守；但 Oracle / Nvidia 分化提示估值容錯低。",
  ],
  [
    "Financials / XLF",
    "-1.46%",
    "黃燈",
    "短端加息預期升，理論上利好息差；但曲線壓力、信用風險和去風險流出令金融未能跑贏。",
  ],
  [
    "Consumer Discretionary / XLY",
    "-1.70%",
    "黃燈",
    "油價和利率升會壓可選消費；Tesla +3.21% 未能完全抵消板塊壓力。",
  ],
  [
    "Materials / XLB",
    "-2.84%",
    "紅燈",
    "美元無大跌但實質利率與全球增長擔憂升，材料股今週最弱之一。",
  ],
  [
    "Health Care / XLV",
    "-3.55%",
    "紅燈",
    "防守板塊未發揮保護作用，顯示資金不是純避險，而是集中去槓桿與調倉。",
  ],
];

const flowRows = [
  [
    "U.S. equity funds",
    "截至 9/9 一週淨流出 $32.27bn，九個月最大；large-cap funds -$40.44bn",
    "反映機構在 CPI / PPI 前已減大盤風險；與週五反彈不矛盾，因 flow 數據有兩日時間差。",
  ],
  [
    "Sector funds",
    "整體 +$1.46bn；technology +$1.71bn、financials +$720mn",
    "不是全面離場，而是從 broad beta 轉去有主題/估值理由的板塊。",
  ],
  [
    "Bond funds",
    "U.S. bond funds +$6.56bn，連續第 21 週流入",
    "高收益率吸引資金泊入債券，但價格仍會受下週 Fed 與通脹預期左右。",
  ],
  [
    "Money market funds",
    "-$10.41bn，前一週曾 +$48.76bn",
    "短期現金流動波動大；不能單靠 money market flow 判斷 risk-on/off。",
  ],
  [
    "Crypto",
    "BTC -3.14%、ETH +3.37%、SOL +0.28%",
    "幣市分化，ETH 明顯跑贏 BTC；整體未跟美股小型股同步走弱。",
  ],
];

const macroRows = [
  [
    "CPI",
    "8 月 headline +0.4% m/m、+3.4% y/y；core +0.3% m/m、+2.4% y/y",
    "headline 符合預期，但 core 稍熱；Fed 想 hold 會比較難講得通。",
  ],
  [
    "PPI",
    "8 月 headline +0.4% m/m、+5.4% y/y；core +0.2% m/m、+4.6% y/y",
    "批發價格未降溫，加上能源上升，市場擔心之後傳導到 PCE。",
  ],
  [
    "FedWatch / FOMC",
    "9/15-9/16 FOMC；CNBC / Reuters 轉述 25bp hike odds 約 85%-90%",
    "base case 已偏向加息，真正風險是 SEP / dot plot 會否暗示再加幾次。",
  ],
  [
    "Treasury yields",
    "Yahoo close：10Y 4.975%、30Y 5.354%；CNA 指 2Y 約 4.659%",
    "前端反映 Fed，長端反映 inflation / term premium；兩邊一齊高，股票估值難擴張。",
  ],
  [
    "Oil",
    "WTI $99.99（週五 -2.43%、全週 +9.30%）；Brent $104.42（週五 -2.98%、全週 +8.45%）",
    "週五回吐令股市喘息，但油仍在高位；若 Brent 再上 $110，通脹交易會返嚟。",
  ],
  [
    "Gold / USD",
    "Gold futures $4,390（全週 -0.90%）；DXY 99.095（全週 -0.07%）",
    "黃金未因避險大升，反映實質利率與美元仍有壓力；CNA 盤中 spot gold 約 $4,350。",
  ],
];

const stockRows = [
  [
    "AAPL",
    "$332.27；全週 +3.84%",
    "CNBC 指 Apple 發布 iPhone Duo、iPhone 18 Pro，普通版或移至春季；市場暫時接受 ASP / 供應鏈節奏故事。",
  ],
  [
    "ORCL",
    "$150.28；全週 -5.35%",
    "Q1 revenue +30%、backlog $664bn 亮眼，但 9/11 高開後倒跌；投資者仍擔心 AI data center capex、債務與 free cash flow。",
  ],
  [
    "NVDA",
    "$218.29；全週 -5.24%",
    "Reuters 指 Nvidia 據報洽談做 Anthropic 潛在 IPO anchor investor；股價今週仍受估值與 AI capex 疑問拖累。",
  ],
  [
    "META",
    "$648.03；全週 +5.07%",
    "大型平台股跑贏，顯示資金仍願意買 AI / ad / cash-flow quality 組合。",
  ],
  [
    "AMD",
    "$516.13；全週 +8.07%",
    "半導體內部輪動最強名字之一；但已急升，短線要用 SOXX / NVDA 作風控參考。",
  ],
  [
    "XOM / CVX",
    "XOM +4.09%；CVX +2.62%",
    "油價全週大升支撐能源 majors；若週末中東消息降溫，週一有回吐風險。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$77,290.00",
    "-$2,503.99 / -3.14%",
    "Binance Vision BTCUSDT 2026-09-11 20:00 UTC 1m close；對比 9/4 20:00 UTC $79,793.99。",
  ],
  [
    "ETH",
    "$2,539.47",
    "+$82.77 / +3.37%",
    "Binance Vision ETHUSDT 2026-09-11 20:00 UTC 1m close；明顯跑贏 BTC。",
  ],
  [
    "SOL",
    "$102.04",
    "+$0.28 / +0.28%",
    "Binance Vision SOLUSDT 2026-09-11 20:00 UTC 1m close；基本橫行。",
  ],
];

const earningsEvents = [
  "FOMC：9/15-9/16 會議，9/16 2:00pm ET 公布 statement / rate decision，2:30pm ET Warsh press conference；今次同時有 SEP / dot plot。",
  "Retail sales：U.S. Census schedule 顯示 August 2026 advance retail sales 於 9/16 8:30am ET 公布，即 Fed 同日早上先有消費數據。",
  "Earnings：StockTi / earnings calendars 顯示 9/15 GIS、9/16 FDX、9/17 LEN / FDS；物流、住房與企業數據需求可以幫市場判斷經濟韌性。",
  "Oil / geopolitics：週末要看 Hormuz / Red Sea / Iran headlines；油價若再穿 Brent $110，會直接影響 Fed pricing。",
  "AI capital market：留意 Nvidia / Anthropic IPO 傳聞後續，以及 Oracle 對 AI backlog、debt funding、customer prepayment 的更多說明。",
];

const technicalRows = [
  [
    "S&P 500",
    "支撐 7,600 / 7,550；阻力 7,700 / 7,720",
    "9/10 低位 7,580 附近守住，週五收 7,656.98；若下週 Fed 後重上 7,700，代表風險胃納修復。",
  ],
  [
    "Nasdaq Composite",
    "支撐 26,000；阻力 26,500 / 26,600",
    "26,000 是今週心理位；AI / semis 若未能帶動突破，反彈容易變成反抽。",
  ],
  [
    "Russell 2000",
    "支撐 2,890 / 2,875；阻力 2,950",
    "小型股弱勢是 breadth 警號；若 Fed 加息但 2Y 繼續上，小型股仍難跑。",
  ],
  [
    "10Y Treasury",
    "4.90%-5.00% 壓力帶",
    "接近 5% 就會壓 equity multiple；跌回 4.85% 以下，growth 先有喘息空間。",
  ],
  [
    "WTI / Brent",
    "WTI $100、Brent $105 / $110",
    "週五回落但全週仍大升；油價是下週通脹交易的開關。",
  ],
  [
    "VIX",
    "15 / 18 / 20",
    "VIX 回到 15.84 未算恐慌；若 Fed 後升穿 18-20，先降低 beta。",
  ],
];

const watchPlan = [
  [
    "Bull case",
    "油價延續回落、10Y 跌穿 4.90%、Fed 只加 25bp 並淡化連續加息，S&P 500 可試 7,700-7,720。",
    "可以分段買 quality growth / semis，但避免一次追滿；優先現金流清晰的 AI names。",
  ],
  [
    "Base case",
    "Fed 加 25bp、dot plot 偏 hawkish，但 Warsh 口徑不失控；油價在 $100-$105 附近震盪。",
    "維持 barbell：能源 / quality tech / 現金；短線用 7,600 與 10Y 5% 做風控。",
  ],
  [
    "Bear case",
    "Brent 重上 $110、10Y 穿 5%、Fed 暗示連續加息，或 retail sales 顯示消費受壓。",
    "先減 small caps、high duration tech、consumer discretionary；等 VIX 高位回落再部署。",
  ],
  [
    "Crypto plan",
    "BTC 失守 $76,000 代表風險胃納再降；ETH 守住 $2,500 則仍有相對強勢。",
    "不追高槓桿；用 20:00 UTC 定點價格做紀律化比較。",
  ],
];

function Card({
  title,
  children,
  wide,
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
    <div className="tableWrap">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${row[0]}-${cellIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function USWeeklyBrief20260913() {
  return (
    <main className="page">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #eef2f7; color: #0f172a; }
        .page {
          min-height: 100vh;
          padding: 36px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif;
          background:
            radial-gradient(circle at top left, rgba(14, 165, 233, 0.18), transparent 32%),
            linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
        }
        .hero {
          border-radius: 28px;
          padding: 34px;
          color: #fff;
          background:
            linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 64, 175, 0.92)),
            radial-gradient(circle at 88% 18%, rgba(45, 212, 191, 0.35), transparent 28%);
          box-shadow: 0 24px 80px rgba(15, 23, 42, 0.22);
          margin-bottom: 24px;
        }
        .eyebrow {
          display: inline-flex;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        h1 {
          margin: 18px 0 12px;
          font-size: clamp(30px, 5vw, 56px);
          line-height: 1.03;
          letter-spacing: -0.04em;
        }
        .subtitle {
          max-width: 1120px;
          margin: 0;
          color: #dbeafe;
          font-size: 18px;
          line-height: 1.72;
        }
        .meta, .score {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }
        .pill {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 8px 12px;
          color: #e0f2fe;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 13px;
        }
        .score {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin-top: 24px;
        }
        .score div {
          border-radius: 18px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .score span { display: block; color: #bfdbfe; font-size: 13px; }
        .score strong { display: block; margin-top: 4px; font-size: 27px; }
        .grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }
        .card {
          border: 1px solid rgba(148, 163, 184, 0.28);
          border-radius: 24px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
          break-inside: avoid;
        }
        .wide { grid-column: 1 / -1; }
        h2 {
          margin: 0 0 16px;
          color: #0f172a;
          font-size: 23px;
          letter-spacing: -0.02em;
        }
        h3 {
          margin: 20px 0 10px;
          color: #1e40af;
          font-size: 18px;
        }
        ul { margin: 0; padding-left: 22px; }
        li { margin: 8px 0; line-height: 1.72; }
        .tableWrap { width: 100%; overflow-x: auto; }
        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
          line-height: 1.58;
        }
        th, td {
          border-bottom: 1px solid #e2e8f0;
          padding: 11px 10px;
          text-align: left;
          vertical-align: top;
        }
        th {
          color: #1e3a8a;
          background: #eff6ff;
          font-weight: 800;
        }
        tr:nth-child(even) td { background: #f8fafc; }
        a { color: #2563eb; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .callout {
          margin-top: 16px;
          padding: 16px;
          border-left: 5px solid #2563eb;
          border-radius: 16px;
          background: #eff6ff;
          color: #1e3a8a;
          line-height: 1.7;
          font-weight: 650;
        }
        .callout.warn {
          border-left-color: #f59e0b;
          background: #fffbeb;
          color: #92400e;
        }
        .small { color: #64748b; font-size: 13px; line-height: 1.65; }
        @media print {
          .page { padding: 18px; background: #fff; }
          .hero, .card { box-shadow: none; }
          .card { page-break-inside: avoid; }
        }
        @media (max-width: 900px) {
          .page { padding: 18px; }
          .grid, .score { grid-template-columns: 1fr; }
        }
      `}</style>

      <header className="hero">
        <div className="eyebrow">美股周報懶人包</div>
        <h1>油價牽住通脹，Fed 前夕高位整固；週五反彈但未解除警報</h1>
        <p className="subtitle">
          今週美股只有四個交易日，市場先被油價、PPI、CPI
          同債息推低，週五再因油價回落而反彈；週日補發版因週末無新美股收市，仍以
          9/11 close 作準。 表面上 S&amp;P 500 只跌 0.8%，但 Russell 2000 跌
          2.4%、美股基金大流出，說明資金開始挑剔。 下週焦點只有一句：Warsh Fed
          係咪真的加息，以及會唔會暗示「一加再加」。
        </p>
        <div className="meta">
          <span className="pill">週期：{reportWeek}</span>
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">
            格式：週末版（日曜更新） / 繁體中文 / 廣東話語氣
          </span>
          <span className="pill">
            Crypto：Binance Vision 20:00 UTC 1m close
          </span>
        </div>
        <div className="score">
          <div>
            <span>S&amp;P 500 weekly</span>
            <strong>-0.80%</strong>
          </div>
          <div>
            <span>Russell 2000 weekly</span>
            <strong>-2.41%</strong>
          </div>
          <div>
            <span>10Y Treasury</span>
            <strong>4.975%</strong>
          </div>
          <div>
            <span>WTI weekly</span>
            <strong>+9.30%</strong>
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
            一句到尾：週五反彈係「油價暫時鬆一口氣」，不是「通脹問題解決」。下週只要
            10Y 貼近 5%、Brent 再試 $110，市場會即刻重新計估值。
          </div>
        </Card>

        <Card title="2｜大市一眼睇" wide>
          <DataTable
            headers={["指標", "週五收市", "一週變動", "解讀"]}
            rows={indexRows}
          />
          <p className="small">
            指數點位以 AP / WSJ / Yahoo Finance chart 交叉核對；週變動用 9/4
            close 至 9/11 close 計算；9/13 週日無新增美股收市資料。9/7 為 Labor
            Day 休市，所以本週實際是四個交易日。
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
            Flow 數據截至 9/9，未完全反映 9/10 PPI 後跌市與 9/11
            反彈；所以本文把它當作「週中
            positioning」，不當成週五收市後最終資金流。
          </div>
        </Card>

        <Card title="7｜宏觀白話版" wide>
          <DataTable headers={["項目", "數據", "白話解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：油價回落可以救一日股市，但 CPI / PPI 同債息高企會決定下週
            Fed 口徑。市場真正怕的是「加息 + 長端 5% +
            油價再升」三件事一齊發生。
          </div>
        </Card>

        <Card title="8｜重點股票與 Crypto" wide>
          <DataTable
            headers={["股票 / 主題", "最新可靠數據", "點睇"]}
            rows={stockRows}
          />
          <h3>BTC / ETH / SOL</h3>
          <DataTable
            headers={["幣種", "9/11 4:00pm ET 附近價", "一週變動", "來源/備註"]}
            rows={cryptoRows}
          />
          <p className="small">
            Binance direct API 在此環境不可用；本文改用 Binance Vision public
            data 的 spot 1-minute kline。時間點為 2026-09-11 20:00:00 UTC，對比
            2026-09-04 同一時間，盡量貼近美股收市 4:00pm ET。
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
              不好把週五反彈當成 all-clear。若 S&amp;P 500 能守 7,600、10Y
              回落至 4.90% 以下，可以小注分段；若 10Y 升穿 5% 或 Brent 重上
              $110，先減 beta。
            </li>
            <li>
              <strong>中線：</strong>
              AI / quality growth 主線未壞，但要分清「有 cash flow、有 pricing
              power」同「純靠故事」。AMD / META 強勢值得留意，NVDA / ORCL
              則要等資金重新確認。
            </li>
            <li>
              <strong>風控：</strong>
              Fed week 不適合重倉單邊賭。用 7,600、10Y 5%、VIX 18、WTI $100 /
              Brent $110 做四個警報位；兩個或以上同時觸發就先降槓桿。
            </li>
            <li>
              <strong>最終觀點：</strong>
              今週不是熊市開始，而是高位市遇到「通脹重新定價」。油價一日不穩，Fed
              一日難鴿；策略應該由追升改成等位、分段、重視現金流。
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
              指數：AP / WSJ / Yahoo chart 對 9/11 close 基本一致；本文採 Yahoo
              chart 精確點位計算週變動，AP / WSJ 百分比四捨五入可能有
              0.01-0.02ppt 差異。
            </li>
            <li>
              ETF / 個股：Yahoo 日線在執行時部分 9/11 close 尚未寫入，但
              1-minute chart 已有 20:00 UTC 收市 tick；本文 ETF / 個股採 20:00
              UTC 1m close 並列明為收市附近價。
            </li>
            <li>
              CPI / PPI：BLS 官方頁面在本環境抓取受限；本文保留 BLS
              官方連結，數值以 CNBC / Reuters 對 BLS release 的即時轉述核對。
            </li>
            <li>
              FedWatch：CME 為即時工具；不同媒體截圖時間由約 85% 至近 90%
              不等。本文不混成單一精確數字，只採共同結論：9/16 25bp hike
              已成市場 base case。
            </li>
            <li>
              Treasury / commodities：Yahoo close、CNA / Reuters
              盤中數據存在時間口徑差異；本文用 Yahoo close 做週變動，用 CNA /
              Reuters 描述盤中高位與市場敘事。
            </li>
            <li>
              Crypto：Binance 直接 API 在環境中不可用；本文使用 Binance Vision
              public data 取得 1m kline，時間固定在 20:00 UTC，對應美股 4:00pm
              ET 附近。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
