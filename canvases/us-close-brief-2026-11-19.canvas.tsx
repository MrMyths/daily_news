import React from "react";

const reportDate = "2026-11-19";
const publishedAt =
  "香港時間 2026-11-20 09:05（週五更新；數據截至美股 11/19 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market news for Nov. 19, 2026",
    url: "https://www.cnbc.com/2026/11/18/stock-market-today-live-updates.html",
  },
  {
    name: "AP News - Wall Street tumbles as Dow drops 1,100 points",
    url: "https://apnews.com/article/stocks-markets-ai-us-anthropic-206c84045137824feabe052a29ff6140",
  },
  {
    name: "AP News - How major US stock indexes fared Thursday 11/19/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-2f178054aea79d282e5ccf8d62f26a28",
  },
  {
    name: "Reuters via Investing.com - Wall Street ends sharply lower as Anthropic debut fails to revive AI fervor",
    url: "https://www.investing.com/news/stock-market-news/wall-street-ends-sharply-lower-asanthropics-debut-fails-to-revive-ai-fervor-5040108",
  },
  {
    name: "CNBC - U.S. Treasury yields, jobless claims and FedWatch",
    url: "https://www.cnbc.com/2026/11/19/us-treasury-yields-investors-us-economy.html",
  },
  {
    name: "Federal Reserve - Minutes of the FOMC, October 27-28, 2026",
    url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261118a.htm",
  },
  {
    name: "Reuters via Investing.com - Oil settles flat as Hormuz disruptions offset surplus fears",
    url: "https://www.investing.com/news/commodities-news/oil-prices-steady-as-supply-surplus-softens-sentiment-though-gulf-war-supports-5037604",
  },
  {
    name: "The Edge - Commodities wrap 19 November 2026",
    url: "https://edgeconsultancykw.com/commodities-wrap-19-november-2026/",
  },
  {
    name: "CNBC - Anthropic IPO fails to lift AI stocks",
    url: "https://www.cnbc.com/2026/11/19/anthropic-ipo-ai-stocks-selloff.html",
  },
  {
    name: "AP News - Anthropic market debut after biggest IPO on record",
    url: "https://apnews.com/article/anthropic-ipo-nasdaq-ai-b6a74b8949021207dc162fcc876c4649",
  },
  {
    name: "NVIDIA Investor Relations - Q3 FY2027 results",
    url: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Third-Quarter-Fiscal-2027/default.aspx",
  },
  {
    name: "Yahoo Finance chart data",
    url: "https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
  {
    name: "Binance Vision data API klines",
    url: "https://data-api.binance.vision/",
  },
];

const keyPoints = [
  "美股星期四全面 risk-off：Dow 49,097.06（-1,101.11 / -2.19%）失守 50,000，S&P 500 7,175.83（-147.80 / -2.02%）連跌第六日，Nasdaq 23,879.20（-550.68 / -2.25%）由早段升轉急跌。",
  "主線係『Anthropic IPO 成功但救唔到 AI trade』：Reuters / CNBC 指 ANT 首日一度衝高，最後仍升約 17%，但資金趁 clearing event 減 AI beta，NVDA -3.30%、AMD -7.72%、SOX -2.41%。",
  "廣度好差：Reuters 指 NYSE 跌股對升股約 4.37:1、Nasdaq 約 3.55:1；CNBC 指三大指數均大跌，S&P 跌穿 200日線附近，VIX 升至 28.44。",
  "板塊無一倖免：XLE -0.65% 相對抗跌，XLU -1.24%、XLP -1.45% 有少少防守味；XLY -2.79%、SOXX -2.75%、XLC -2.67% 最傷。",
  "宏觀不是單一壞消息，但壓力夾住估值：10Y 約 5.046%、2Y 約 4.76%、30Y 約 5.402%，債息回落反映避險；但 FedWatch 仍顯示 12月加 25bp 機率約 95%-96.4%，Waller 50bp 風險仍在。",
  "Crypto 用 Binance Vision 2026-11-19 21:00 UTC 1m close（美股 4:00pm ET）計：BTC $62,058.01（較 11/18 同時間 -0.92%）、ETH $1,758.47（+0.14%）、SOL $72.92（-0.27%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "49,097.06",
    change: "-1,101.11 / -2.19%",
    read: "失守 50,000，係 6月以來首次收低過此心理位；藍籌不是避風港，市場由 AI 疑慮擴散到更廣泛去風險。",
    source: "CNBC / AP / Reuters / Yahoo chart",
  },
  {
    asset: "S&P 500",
    close: "7,175.83",
    change: "-147.80 / -2.02%",
    read: "連跌第六日，AP 指是 2024 以來最長跌浪；CNBC 指跌穿 200日線附近，短線技術面轉弱。",
    source: "CNBC / AP / Reuters / Yahoo chart",
  },
  {
    asset: "Nasdaq Composite",
    close: "23,879.20",
    change: "-550.68 / -2.25%",
    read: "早段因 Anthropic IPO / Nvidia 業績情緒反彈，之後全面轉跌；AI beta 仍是沽壓核心。",
    source: "CNBC / AP / Reuters / Yahoo chart",
  },
  {
    asset: "Russell 2000",
    close: "2,655.11",
    change: "-59.20 / -2.18%",
    read: "小型股跟跌，說明跌市不止 mega-cap 技術股；高利率與風險溢價仍壓住細價股估值。",
    source: "Yahoo chart",
  },
  {
    asset: "VIX",
    close: "28.44",
    change: "+3.88 / +15.80%",
    read: "逼近 30，反映 hedging demand 明顯升溫；若再升穿 30，短線減倉/波動交易會更主導。",
    source: "Yahoo chart / The Edge",
  },
  {
    asset: "Philadelphia SOX / SOXX",
    close: "SOX 9,419.72；SOXX 約 $137.95",
    change: "SOX -2.41%；SOXX proxy -2.75%",
    read: "半導體由前一日分化變成集體下調；AMD 被 short thesis 觸發重挫，NVDA 連跌第六日。",
    source: "Yahoo chart daily / 1m 4pm ET proxy / Reuters",
  },
];

const sectorRows = [
  [
    "Energy / XLE",
    "-0.65%",
    "相對抗跌",
    "油價結算近乎持平，能源避過最重沽壓；但 WTI 仍在 8月以來低位附近，反彈說服力有限。",
  ],
  [
    "Utilities / XLU",
    "-1.24%",
    "防守較佳",
    "債息回落有利收益型板塊，但全市場去風險下仍跟跌。",
  ],
  [
    "Consumer Staples / XLP",
    "-1.45%",
    "防守較佳",
    "WMT 指引不理想令 staples/零售防守力打折扣，但跌幅仍細過高 beta 板塊。",
  ],
  [
    "Financials / XLF",
    "-1.49%",
    "偏弱",
    "避險買債令長息下行，加上廣泛 risk-off，銀行/券商無明顯承接。",
  ],
  [
    "Real Estate / XLRE",
    "-1.70%",
    "偏弱",
    "長息回落幫助有限；當 VIX 升、信用風險被重新定價，REITs 仍被沽。",
  ],
  [
    "Technology / XLK",
    "-1.90%",
    "弱",
    "NVDA、MSFT、AMZN、GOOGL、META 同跌，AI capex / export control / leadership 風險壓住 multiple。",
  ],
  [
    "Industrials / XLI",
    "-2.00%",
    "弱",
    "經濟數據與風險偏好轉差拖累 cyclicals；不是單靠科技拖低指數。",
  ],
  [
    "Health Care / XLV",
    "-2.05%",
    "弱",
    "前一日 Medicare Advantage audit 壓力未散，UNH 再跌 5.55%，防守屬性失效。",
  ],
  [
    "Materials / XLB",
    "-2.06%",
    "弱",
    "黃金/銅價回落、美元仍強，材料與礦業 beta 受壓。",
  ],
  [
    "Communication Services / XLC",
    "-2.67%",
    "很弱",
    "GOOGL、META 同跌，AI 與廣告 mega-cap 被一齊降風險。",
  ],
  [
    "Semis / SOXX",
    "-2.75%",
    "很弱",
    "AMD -7.72%、NVDA -3.30%，Anthropic IPO 無法修復半導體 sentiment。",
  ],
  [
    "Consumer Discretionary / XLY",
    "-2.79%",
    "最弱",
    "AMZN -3.87%、TSLA -2.43%，加上高 beta 消費股受風險偏好拖累。",
  ],
];

const macroRows = [
  [
    "10Y / 2Y / 30Y UST",
    "5.046%-5.052% / 4.76%-4.77% / 5.402%-5.406%",
    "CNBC / Investing 指債息下行，10Y 連跌四日，反映避險買債；但 2Y 仍高，Fed hiking path 未鬆。",
  ],
  [
    "FedWatch / December FOMC",
    "約 95%-96.4% 12月 +25bp；仍有小機率 +50bp",
    "市場幾乎當加息是基本情境；估值壓力來自『利率未必很快見頂』而不是單日債息方向。",
  ],
  [
    "Fed minutes / Waller",
    "AI 被點名為通脹與金融穩定風險；Waller 指 50bp 或有必要",
    "AI trade 同時受 earnings、capex、監管/出口控制及政策 scrutiny 夾擊，敘事由成長轉向回報與風險。",
  ],
  [
    "Jobless claims / Philly Fed",
    "Initial claims 203k vs 197k expected；Philly Fed 6.3 vs 18 expected",
    "數據不是全面崩，但製造業降溫加上價格 received 升至多年高位，令 stagflation-lite 憂慮未散。",
  ],
  [
    "美元 / 黃金",
    "DXY 約 103.94（+0.07%）；COMEX gold $3,685.50（-1.51%）",
    "美元高位企穩、黃金連跌，顯示今日避險主要流向美債而非貴金屬；Yahoo 即時 gold after-hours 低過 settle，需留意口徑差異。",
  ],
  [
    "原油",
    "WTI $83.21（-0.06%）；Brent $91.98（+0.03%）",
    "Reuters 指 Hormuz 油輪事件傳聞抵消供應過剩壓力；油價近乎持平，未成為今日股市跌勢主因。",
  ],
];

const stockRows = [
  [
    "NVDA",
    "$145.98 / -3.30%",
    "Nvidia 連跌第六日；雖然 Q3 revenue $115.8B、Data Center $107.6B、Q4 guide 強，但市場繼續折讓 leadership / China / AI financing risk。",
  ],
  [
    "AMD / AVGO",
    "$489.19 / -7.72%；$346.65 / -2.09%",
    "AMD 被 Hunterbrook short position / export-control allegation 拖累，半導體 beta 明顯走弱；AVGO 亦跟隨 AI hardware 降溫。",
  ],
  [
    "Anthropic / ANT",
    "IPO $83；開 $111.50；收約 $97（較 IPO +17%）",
    "史上最大 IPO 仍算成功，但由高位回落，未能成為 AI trade clearing event；反而變成資金減倉窗口。",
  ],
  [
    "AMZN / GOOGL / MSFT / META",
    "$257.37 / -3.87%；$272.66 / -3.46%；$498.30 / -1.97%；$596.22 / -3.27%",
    "Hyperscalers 亦被沽，市場質疑 AI capex 轉化成利潤的時間與回報率。",
  ],
  [
    "PANW / Cybersecurity",
    "$361.73 / +6.42%",
    "少數亮點：Reuters / CNBC 指 Palo Alto Networks 上調 2027 revenue guidance，security demand 抵消大市沽壓。",
  ],
  [
    "WMT / TGT",
    "$126.04 / -1.04%；$167.46 / +0.92%",
    "Walmart annual sales forecast disappointed；Target 逆市微升，反映零售內部仍有 earnings dispersion。",
  ],
  [
    "COIN / MSTR",
    "$108.87 / -1.48%；$86.13 / -4.64%",
    "BTC 同時間只跌 0.92%，但 crypto-linked equities 跌幅更大，顯示股市 beta / 槓桿折讓更重。",
  ],
  [
    "UNH / HUM",
    "$330.48 / -5.55%；$380.00 / -1.50%",
    "醫療保險股延續監管壓力，UNH 對 Dow 拖累仍大；防守股不等於無風險。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$62,058.01",
    "-0.92%",
    "由 $62,636.01（11/18 21:00 UTC）跌至 $62,058.01；跌幅細過股市，但未見明顯避險買盤。",
  ],
  [
    "ETHUSDT",
    "$1,758.47",
    "+0.14%",
    "由 $1,756.04 微升；相對 BTC 較穩，但幅度太細，暫時只算橫行而非 risk-on。",
  ],
  [
    "SOLUSDT",
    "$72.92",
    "-0.27%",
    "由 $73.12 回落；alt-beta 未有跟股市大跌，但仍受風險偏好壓住。",
  ],
];

const technicalRows = [
  [
    "S&P 500",
    "支持 7,150 / 7,100；阻力 7,274 / 7,324",
    "7,274 附近是 CNBC 提到的 200日線區域；未重上前，反彈只算超賣修復。",
  ],
  [
    "Nasdaq",
    "支持 23,800 / 23,500；阻力 24,430 / 24,940",
    "收近全日低位，若未能收復 11/18 close 24,430，AI beta 仍是逢高減倉格局。",
  ],
  [
    "Dow",
    "支持 49,000；阻力 50,000 / 50,200",
    "50,000 由支持變阻力；要先收復 50,000，先可證明恐慌沽壓放慢。",
  ],
  [
    "VIX",
    "28-30 是風險溫度計",
    "VIX 逼近 30，若升穿 30 代表 hedging / systematic de-risking 風險增加；回落 25 以下才算初步降溫。",
  ],
];

const playbookRows = [
  [
    "短線反彈",
    "先等 S&P 500 重上 7,274 / 200日線，或 Nasdaq 收復 24,430；未確認前，追高 AI beta 風險偏高。",
  ],
  [
    "防守/減風險",
    "若 S&P 500 跌穿 7,150 且 VIX 穿 30，可優先減高估值、槓桿、crypto-linked equities，保留現金等更清晰 capitulation。",
  ],
  [
    "事件風險",
    "關注 Anthropic 次日交易、Fed 官員言論、PCE 下週預期、Nvidia China/leadership headline、AMD short thesis 後續。",
  ],
  [
    "板塊輪動",
    "防守板塊跌得較少但未真正轉強；若要找相對強勢，留意 cybersecurity（PANW）及 cash-flow 較穩名字，而非純 AI capex beta。",
  ],
];

const marketReasons = [
  "Anthropic 首日升幅未能帶動 AI trade，反而成為資金出貨/重配窗口：CNBC 指市場本來期待 IPO 是 clearing event，但 Nasdaq 最終跌 2.25%。",
  "AI capex 回報率、export controls、Nvidia leadership headline 同 neocloud debt risk 被一齊重新定價；所以強業績已不足以自動推高整個板塊。",
  "Fed 仍偏鷹：minutes 指 AI infrastructure 可能帶來通脹與金融穩定風險，Waller 提及 50bp；即使債息即日回落，估值折現率仍高。",
  "市場廣度急速轉差，跌股大幅多過升股，代表沽壓由半導體擴散到 consumer discretionary、communication services、industrials、materials。",
];

function Tone({ value }: { value: string }) {
  const negative = value.trim().startsWith("-");
  const positive = value.trim().startsWith("+");
  return (
    <span className={positive ? "pos" : negative ? "neg" : "neutral"}>
      {value}
    </span>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section">
      <div className="sectionTitle">
        <span>{id}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function USCloseBrief20261119() {
  return (
    <main className="page">
      <style>{`
        .page {
          width: 1120px;
          margin: 0 auto;
          padding: 34px;
          background: #f6f8fb;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.48;
        }
        .hero {
          background: #102a43;
          color: white;
          border-radius: 22px;
          padding: 28px;
          border: 1px solid #243b53;
        }
        h1 { margin: 0; font-size: 34px; line-height: 1.08; letter-spacing: -0.02em; }
        .subtitle { margin-top: 10px; font-size: 16px; opacity: 0.92; }
        .meta { margin-top: 12px; font-size: 12px; opacity: 0.78; }
        .keyGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 16px; }
        .keyCard { background: white; border: 1px solid #d8e0ea; border-radius: 16px; padding: 14px; }
        .keyCard strong { display: block; color: #0f766e; margin-bottom: 5px; }
        .section { margin-top: 18px; background: white; border: 1px solid #dde5ef; border-radius: 20px; padding: 18px; }
        .sectionTitle { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
        .sectionTitle span { background: #0f766e; color: white; border-radius: 999px; min-width: 30px; height: 30px; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; }
        h2 { margin: 0; color: #102a43; font-size: 21px; }
        h3 { margin: 14px 0 8px; color: #0f766e; font-size: 17px; }
        p { margin: 7px 0; }
        ul { margin: 0; padding-left: 19px; }
        li { margin: 6px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 13px; }
        th { text-align: left; background: #eef4f8; color: #334e68; }
        th, td { border-bottom: 1px solid #e5edf4; padding: 9px; vertical-align: top; }
        .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .badge { display: inline-block; padding: 3px 8px; border-radius: 999px; background: #e6fffa; color: #0f766e; font-weight: 800; font-size: 12px; }
        .pos { color: #047857; font-weight: 800; }
        .neg { color: #b91c1c; font-weight: 800; }
        .neutral { color: #475569; font-weight: 800; }
        .note { color: #64748b; font-size: 12px; }
        .sourceList { columns: 2; font-size: 12px; }
        a { color: #1d4ed8; text-decoration: none; }
        .disclaimer { margin-top: 12px; padding: 12px; background: #f8fafc; border-radius: 14px; color: #475569; font-size: 12px; }
        @media print { .page { width: auto; padding: 24px; } .section { break-inside: avoid; } }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜完整版</h1>
        <div className="subtitle">
          {reportDate} 收市｜Dow 跌 1,100 點失守 50,000；S&P
          連跌第六日，Anthropic IPO 未能救 AI trade
        </div>
        <div className="meta">
          {publishedAt}｜報告語言：繁體中文（自然廣東話）｜Crypto：Binance
          Vision 21:00 UTC 1分鐘 close
        </div>
      </section>

      <div className="keyGrid">
        <div className="keyCard">
          <strong>大市</strong>Dow -2.19%，S&P -2.02%，Nasdaq -2.25%；VIX
          +15.80% 至 28.44，風險偏好急轉差。
        </div>
        <div className="keyCard">
          <strong>主因</strong>Anthropic 首日升但 AI 股照沽；Fed hiking path
          未鬆，估值同 capex 回報率被重估。
        </div>
        <div className="keyCard">
          <strong>留意</strong>S&P 7,150 / 200日線、Dow 50,000 反壓、VIX
          30、NVDA $146、ANT 次日交易。
        </div>
      </div>

      <Section id="01" title="30秒重點">
        <ul>
          {keyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </Section>

      <Section id="02" title="大市一眼睇">
        <table>
          <thead>
            <tr>
              <th>資產</th>
              <th>收市</th>
              <th>升跌</th>
              <th>白話解讀</th>
              <th>來源</th>
            </tr>
          </thead>
          <tbody>
            {indexRows.map((row) => (
              <tr key={row.asset}>
                <td>
                  <strong>{row.asset}</strong>
                </td>
                <td>{row.close}</td>
                <td>
                  <Tone value={row.change} />
                </td>
                <td>{row.read}</td>
                <td>{row.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section id="03" title="今日市場升跌原因">
        <ul>
          {marketReasons.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section id="04" title="板塊熱度圖與紅綠燈">
        <table>
          <thead>
            <tr>
              <th>板塊 / ETF proxy</th>
              <th>1日變動</th>
              <th>紅綠燈</th>
              <th>解讀</th>
            </tr>
          </thead>
          <tbody>
            {sectorRows.map(([sector, move, status, read]) => (
              <tr key={sector}>
                <td>
                  <strong>{sector}</strong>
                </td>
                <td>
                  <Tone value={move} />
                </td>
                <td>
                  <span className="badge">{status}</span>
                </td>
                <td>{read}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="note">
          口徑：ETF/個股因 Yahoo daily close 在生成時仍部分未寫入，採 Yahoo
          21:00 UTC 1分鐘 close proxy 對比 11/18 daily close；若來源與 Reuters /
          CNBC 即時稿略有差異，本文以可重現行情 proxy 標示。
        </p>
      </Section>

      <Section id="05" title="宏觀白話版">
        <table>
          <thead>
            <tr>
              <th>項目</th>
              <th>數字</th>
              <th>點解重要</th>
            </tr>
          </thead>
          <tbody>
            {macroRows.map(([name, value, read]) => (
              <tr key={name}>
                <td>
                  <strong>{name}</strong>
                </td>
                <td>{value}</td>
                <td>{read}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section id="06" title="BTC / ETH / SOL（Binance 4:00pm ET 附近價格）">
        <table>
          <thead>
            <tr>
              <th>Crypto</th>
              <th>Binance Vision 21:00 UTC close</th>
              <th>較前一日同時間</th>
              <th>解讀</th>
            </tr>
          </thead>
          <tbody>
            {cryptoRows.map(([name, price, move, read]) => (
              <tr key={name}>
                <td>
                  <strong>{name}</strong>
                </td>
                <td>{price}</td>
                <td>
                  <Tone value={move} />
                </td>
                <td>{read}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="note">
          冬令時間美股 4:00pm ET = 21:00 UTC。使用 Binance Vision public data
          1-minute klines；如交易所最終結算口徑不同，本文以該分鐘 close
          作為可重現 proxy。
        </p>
      </Section>

      <Section id="07" title="重點股票與 AI trade">
        <table>
          <thead>
            <tr>
              <th>股票</th>
              <th>收市 / 變動</th>
              <th>重點</th>
            </tr>
          </thead>
          <tbody>
            {stockRows.map(([name, value, read]) => (
              <tr key={name}>
                <td>
                  <strong>{name}</strong>
                </td>
                <td>{value}</td>
                <td>{read}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section id="08" title="五大新聞 / 事件焦點">
        <ol>
          <li>
            <strong>Anthropic IPO 救市失敗：</strong>ANT 以 $83 定價、$111.50
            開市，曾升至 $115，收約 $97；但 Nasdaq 由早段升轉跌，AI trade
            被當成沽貨窗口。
          </li>
          <li>
            <strong>Nvidia 強業績後仍跌：</strong>Q3 revenue $115.8B、Data
            Center $107.6B，但股份再跌 3.30%，連續第六日下跌。
          </li>
          <li>
            <strong>AMD 被 short thesis 打擊：</strong>Reuters 指 Hunterbrook
            Capital 披露 short position，涉及 alleged export-control breach，AMD
            單日跌 7.72%。
          </li>
          <li>
            <strong>Fed 風險未散：</strong>CNBC 指 10Y / 30Y / 2Y 下行，但
            FedWatch 仍約 95% pricing 12月加 25bp，Waller 50bp
            風險維持估值壓力。
          </li>
          <li>
            <strong>油價近乎持平、黃金續跌：</strong>Reuters 指 Hormuz
            風險抵消供應過剩；The Edge 指 COMEX gold -1.51%、DXY 103.94。
          </li>
        </ol>
      </Section>

      <Section id="09" title="資金流向與市場廣度">
        <div className="grid2">
          <div>
            <h3>資金流向</h3>
            <ul>
              <li>
                資金由 AI hardware、consumer discretionary、communication
                services 流出，短線更偏向現金及美債避險。
              </li>
              <li>
                黃金、銅同跌而美債升，代表不是典型全面避險，而是美元/利率/流動性壓力主導。
              </li>
              <li>
                PANW 逆市升，顯示仍有 earnings-driven
                winners，但資金更挑剔，只買有上調指引或清晰現金流故事。
              </li>
            </ul>
          </div>
          <div>
            <h3>廣度</h3>
            <ul>
              <li>
                Reuters 指 NYSE 跌股對升股約 4.37:1、Nasdaq 約
                3.55:1；大市係真正 broad selloff。
              </li>
              <li>
                CNBC 指 Dow 6月以來首次收低過 50,000，S&P 500 跌穿
                200日線附近，技術面轉防守。
              </li>
              <li>
                若之後 ANT 繼續回落或 NVDA 未止跌，AI beta
                仍可能帶動被動/量化去風險。
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="10" title="技術位與風險位">
        <table>
          <thead>
            <tr>
              <th>標的</th>
              <th>位</th>
              <th>操作含意</th>
            </tr>
          </thead>
          <tbody>
            {technicalRows.map(([name, level, read]) => (
              <tr key={name}>
                <td>
                  <strong>{name}</strong>
                </td>
                <td>{level}</td>
                <td>{read}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section id="11" title="明日交易計劃 / 觀察清單">
        <table>
          <thead>
            <tr>
              <th>場景</th>
              <th>行動框架</th>
            </tr>
          </thead>
          <tbody>
            {playbookRows.map(([scenario, action]) => (
              <tr key={scenario}>
                <td>
                  <strong>{scenario}</strong>
                </td>
                <td>{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section id="12" title="來源、口徑與免責聲明">
        <p>
          <strong>數據衝突處理：</strong>三大指數採 CNBC / AP / Reuters / Yahoo
          chart 一致口徑。ETF/個股 daily close 在生成時 Yahoo
          部分尚未填入，因此採 21:00 UTC 1分鐘 close proxy；油價採 Reuters
          settlement，黃金/DXY 採 The Edge settlement/quote 並以 Yahoo
          after-hours 作交叉檢查。新聞敘事優先 Reuters、AP、CNBC、官方 Fed /
          Nvidia / Binance。
        </p>
        <ul className="sourceList">
          {sources.map((source) => (
            <li key={source.url}>
              <a href={source.url}>{source.name}</a>
            </li>
          ))}
        </ul>
        <p className="disclaimer">{disclaimer}</p>
      </Section>
    </main>
  );
}
