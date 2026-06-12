import React from "react";

const reportDate = "2026-06-11";
const publishedAt = "香港時間 2026-06-12 07:00";

const sources = [
  {
    name: "CNBC - Stock market news for June 11, 2026",
    url: "https://www.cnbc.com/2026/06/10/stock-market-today-live-updates.html",
  },
  {
    name: "Reuters via The Business Times - Wall Street indexes jump",
    url: "https://www.businesstimes.com.sg/companies-markets/capital-markets-currencies/wall-street-indexes-jump-trump-says-strikes-against-iran-cancelled",
  },
  {
    name: "The Motley Fool - Stock Market Today, June 11",
    url: "https://www.fool.com/coverage/stock-market-today/2026/06/11/stock-market-today-june-11-micron-intel-and-nvidia-lead-rebound-and-spacex-ipo-approaches/",
  },
  {
    name: "BLS - Producer Price Index, May 2026",
    url: "https://www.bls.gov/news.release/ppi.htm",
  },
  {
    name: "BLS - Consumer Price Index, May 2026",
    url: "https://www.bls.gov/news.release/cpi.nr0.htm",
  },
  {
    name: "CNBC - Treasury yields, June 11",
    url: "https://www.cnbc.com/2026/06/11/treasury-yields-flat-as-investors-monitor-inflation-data-us-strikes-in-iran.html",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "CME Group - WTI crude oil futures quotes",
    url: "https://www.cmegroup.com/markets/energy/crude-oil/light-sweet-crude.quotes.html",
  },
  {
    name: "Yahoo Finance - sector ETF quote comparison",
    url: "https://uk.finance.yahoo.com/quotes/XLE,XLF,XLC,XLRE,XLI,XLK,XLB,XLY,XLV,XLU/view/fv/",
  },
  {
    name: "TechCrunch - SpaceX IPO pricing",
    url: "https://techcrunch.com/2026/06/11/spacex-officially-prices-shares-at-135-in-the-largest-ipo-ever/",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "S&P 500",
    "7,394.30",
    "+127.31 / +1.75%",
    "收復 7,300，上日急跌後強力反彈；CNBC、Reuters 轉載與 Yahoo 日線一致。",
  ],
  [
    "Dow Jones",
    "50,848.75",
    "+929.97 / +1.86%",
    "重新企上 50,000，地緣風險降溫帶動周期與工業股修復。",
  ],
  [
    "Nasdaq Composite",
    "25,809.66",
    "+640.16 / +2.54%",
    "半導體與 AI 股帶頭回補，Nasdaq 跑贏大市。",
  ],
  [
    "Russell 2000",
    "2,921.03",
    "+85.57 / +3.02%",
    "小型股反彈更急，代表風險胃納不是只回到 mega-cap tech。",
  ],
  [
    "VIX",
    "19.44",
    "-2.78 / -12.51%",
    "由 22 回落至 20 以下，短線恐慌降溫，但未回到完全平靜區。",
  ],
];

const sectorRows = [
  [
    "Semiconductors / SOXX",
    "+8.39%",
    "強綠",
    "PHLX Semi 新聞口徑升約 7.9%，SOXX/SMH 同步大升；Micron、AMD、NVDA 帶頭反彈。",
  ],
  [
    "Technology / XLK",
    "+3.73%",
    "強綠",
    "AI beta 回補明顯，不過 Microsoft 逆市跌，升勢集中在半導體多過 software。",
  ],
  [
    "Materials / XLB",
    "+3.27%",
    "綠燈",
    "前日被沽的周期股反彈，配合債息回落與風險胃納改善。",
  ],
  [
    "Industrials / XLI",
    "+3.24%",
    "綠燈",
    "Dow 回到 50,000 以上，工業股修復是主要推力之一。",
  ],
  [
    "Consumer Discretionary / XLY",
    "+2.48%",
    "綠燈",
    "Tesla +4.60%、Amazon +1.47%，高 beta 消費科技獲買盤承接。",
  ],
  [
    "Communication Services / XLC",
    "+1.00%",
    "溫和綠",
    "Google 小升、Meta 微跌，平台股未如半導體強，但大市氣氛改善。",
  ],
  [
    "Financials / XLF",
    "+0.75%",
    "中性偏綠",
    "JPM +1.41%，但債息下跌限制銀行淨息差想像。",
  ],
  [
    "Health Care / XLV",
    "+0.81%",
    "中性",
    "防守板塊跟升但跑輸高 beta，資金由避險轉回風險資產。",
  ],
  [
    "Utilities / XLU",
    "+0.11%",
    "防守滯後",
    "收益型板塊在 risk-on 日子缺乏彈性，即使債息跌也只是小升。",
  ],
  [
    "Consumer Staples / XLP",
    "-0.26%",
    "滯後紅",
    "前日避險受惠後今日回吐，資金轉走防守消費。",
  ],
  [
    "Energy / XLE",
    "-1.94%",
    "紅燈",
    "Trump 取消對 Iran 攻擊、油價回落，能源由避險受惠變成拖累。",
  ],
];

const stockRows = [
  [
    "MU / Memory",
    "MU +11.66% 至 $995.87",
    "Motley Fool 與 TradingKey 均指記憶體股領漲，市場押注 AI accelerator 供應緊張。",
  ],
  [
    "SOXX / PHLX Semi",
    "SOXX +8.39%；PHLX Semi 約 +7.9%",
    "所有半導體成份股普遍向上，屬於上日急跌後最明顯的 short-covering / dip-buy。",
  ],
  [
    "NVDA / AMD / AVGO",
    "NVDA +2.22%；AMD +7.97%；AVGO +3.62%",
    "AI 核心股反彈，但升幅分化；市場較偏好記憶體與被拋售較深的 beta。",
  ],
  [
    "ORCL",
    "-8.53% 至 $184.10",
    "業績不差，但 FY27 AI capex / 融資需求令市場擔心 free cash flow 與攤薄風險。",
  ],
  [
    "ADBE",
    "-6.25% 至 $218.80",
    "Adobe 在 software 內跑輸，市場對 AI 變現與管理層/財報前不確定性保持折讓。",
  ],
  [
    "TSLA",
    "+4.60% 至 $399.15",
    "高 beta 反彈受惠風險胃納回暖，但仍要留意 SpaceX IPO 對 Musk ecosystem 資金分流。",
  ],
  [
    "MSFT / META",
    "MSFT -1.77%；META -0.45%",
    "大型平台股未全面跟升，說明今日不是所有 mega-cap 都被無差別買入。",
  ],
  [
    "XOM / Energy",
    "XOM -2.67%；XLE -1.94%",
    "油價急回令能源股回吐，與大市 risk-on 形成反向走勢。",
  ],
  [
    "SpaceX IPO",
    "$135 定價；估值約 $1.77-$1.78tn",
    "TechCrunch/Yahoo 指 SpaceX 6/12 Nasdaq 掛牌，市場同時留意抽資與風險胃納測試。",
  ],
];

const macroRows = [
  [
    "PPI",
    "Final demand +1.1% MoM / +6.5% YoY",
    "BLS 官方數據：YoY 為 2022 年 11 月以來最大升幅；headline 熱，但股市選擇交易地緣降溫。",
  ],
  [
    "CPI",
    "Headline +0.5% MoM / +4.2% YoY；Core +0.2% MoM / 約 +2.9% YoY",
    "前一日 CPI 已顯示能源推升 headline；core MoM 較溫和，是市場未完全恐慌的原因。",
  ],
  [
    "2Y / 10Y / 30Y Treasury",
    "CNBC：約 4.054% / 4.453% / 4.95%；Yahoo 10Y close 約 4.463%",
    "Trump 取消 strikes 後債券反彈、孳息回落，幫助 growth multiple 止血。",
  ],
  [
    "FedWatch / 6 月 FOMC",
    "維持 3.50%-3.75% 機率約 96.5%（最新可得更新為 6/10 08:05 ET）",
    "6 月不動仍是 base case；真正焦點是 Warsh 首次 FOMC、點陣圖與年底加息風險。",
  ],
  [
    "WTI / Brent",
    "WTI 約 $85.91-$87；Brent 約 $90 附近",
    "CME WTI 18:26 CT 報 $85.91；新聞指油價因 Iran 攻擊取消而回落，通脹風險短線降溫。",
  ],
  [
    "Gold",
    "現貨/期貨約 $4,214-$4,224/oz",
    "IndexBox 報 spot gold 約 $4,214.40；Yahoo GC 近似 $4,223.80。口徑不同但方向是避險仍有承接。",
  ],
  [
    "DXY / 美元",
    "約 99.8-100.0",
    "美元未大幅走弱，反映市場雖 risk-on，但仍在消化通脹與 Fed 風險。",
  ],
  [
    "本週焦點",
    "SpaceX IPO、6/16-17 FOMC、油價/Iran、AI capex",
    "市場由前日避險快速轉 risk-on；下一步要看 IPO 抽資與 Fed 點陣圖會否再令估值受壓。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$63,557.99",
    "+2.69% vs 6/10 20:00 UTC",
    "Binance Vision 1m kline：2026-06-11 20:00:00 UTC close，即 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$1,679.43",
    "+3.13% vs 6/10 20:00 UTC",
    "Binance Vision 1m kline；ETH 跟隨 risk-on 反彈，但仍未脫離近期低位區。",
  ],
  [
    "SOLUSDT / SOL",
    "$66.85",
    "+5.21% vs 6/10 20:00 UTC",
    "Binance Vision 1m kline；SOL beta 較高，反彈幅度大過 BTC/ETH。",
  ],
];

const notes = [
  "三大指數大幅反彈：S&P 500 +1.75%、Nasdaq +2.54%、Dow +929.97 點 / +1.86%，前一日 risk-off 明顯降溫。",
  "主因是 Trump 取消原定對 Iran strikes、並提到有機會達成協議，油價由高位回落，市場即時減少通脹/地緣風險折讓。",
  "半導體成為反彈核心：SOXX +8.39%、PHLX Semi 約 +7.9%，MU +11.66%、AMD +7.97%、NVDA +2.22%。",
  "宏觀仍有警號：BLS PPI +1.1% MoM / +6.5% YoY，FedWatch 仍幾乎肯定 6 月 hold，但年底加息風險未消失。",
  "Crypto 用 Binance Vision 4:00pm ET 附近 1 分鐘 K 線：BTC $63,557.99、ETH $1,679.43、SOL $66.85，三者同步反彈。",
];

const technicalLevels = [
  [
    "S&P 500",
    "7,400 / 7,450",
    "今日收 7,394.30，已逼近 7,400；若企穩 7,400-7,450，反彈才算由止血變成重新挑戰高位。",
  ],
  [
    "S&P 500",
    "7,300 / 7,250",
    "7,300 由阻力變短線支持；若再跌穿 7,250，代表今日反彈只是 news-driven squeeze。",
  ],
  [
    "Nasdaq Composite",
    "26,000 / 25,500",
    "Nasdaq 要挑戰 26,000 才可確認科技買盤回來；25,500 是第一條防線。",
  ],
  [
    "SOXX",
    "600 / 560",
    "SOXX 收 586.93；600 是重奪 momentum 的關口，560 附近則是反彈不可失的支持。",
  ],
  [
    "VIX",
    "20 / 22",
    "VIX 回到 19.44 是好事；若再升穿 22，表示 Iran/通脹/Fed 風險重燃。",
  ],
  [
    "10Y Treasury",
    "4.45% / 4.55%",
    "10Y 回落至約 4.45%-4.46%；若重新升穿 4.55%，growth multiple 會再受壓。",
  ],
  [
    "BTC",
    "$63,500 / $60,000",
    "BTC 企上 $63.5k 是短線 risk-on confirmation；跌回 $60k 以下則 crypto beta 轉弱。",
  ],
];

const watchList = [
  "6/12：SpaceX IPO 正式掛牌，留意是否抽走 AI/高 beta names 流動性，或反而推高風險胃納。",
  "6/16-17：FOMC 與 Warsh 首次記者會。即使 6 月 hold 幾乎是 base case，點陣圖會影響下半年利率路徑。",
  "油價與 Iran/Hormuz：WTI 若重新企上 $90-$95，PPI/CPI 的能源壓力會再被市場定價。",
  "半導體：SOXX/SMH 今日大反彈後，重點看 MU、AMD、NVDA 能否連續兩日守住升幅。",
  "Oracle / software：ORCL 與 ADBE 逆市弱，留意 AI capex 與 software AI monetization 是否成為下一個分化位。",
  "S&P 500：觀察 7,400 是否變成支持；若只是即日 squeeze，回落時 breadth 會先轉差。",
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

export default function USCloseBrief20260611() {
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
        <h1>地緣風險急降溫，半導體帶住美股大反彈</h1>
        <p className="subtitle">
          6 月 11 日美股由前日恐慌快速反彈：S&P 500 升 1.75%、Nasdaq 升
          2.54%、Dow 升 929.97 點並重上 50,000。Trump 取消原定對 Iran
          strikes，油價回落、債息下行，市場暫時願意淡化 PPI
          熱數據，資金重新追入半導體與高 beta。
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
            今日結論：這是一次「地緣風險折讓解除」帶來的強反彈，不是通脹問題消失。
            只要油價不再抽升、10Y 守在 4.55% 以下，risk-on 可以延續；但 PPI 與
            FOMC 仍是下週最大測試。
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
              Reuters 轉載指 NYSE advancers/decliners 約 2.74:1，Nasdaq 約
              2.75:1， 代表今日升市有一定 breadth，不只是幾隻 mega-cap 撐住。
            </li>
            <li>
              VIX 由 22.22 回落至 19.44，市場由前日避險切回 short-covering /
              dip-buy。
            </li>
            <li>
              Russell 2000 +3.02%，小型股跑贏 S&P 500，顯示資金重新接受 beta。
            </li>
            <li>
              Crypto 同步反彈，BTC/ETH/SOL 在 Binance Vision 4:00pm ET
              附近分別升 2.69%、3.13%、5.21%，與美股 risk-on 方向一致。
            </li>
          </ul>
        </Card>

        <Card title="4｜板塊紅綠燈">
          <DataTable
            headers={["板塊 / ETF proxy", "變動", "訊號", "一句講晒"]}
            rows={sectorRows}
          />
          <p className="small">
            板塊表採 Yahoo Finance Select Sector ETF proxy；半導體另以 SOXX/SMH
            及新聞提及的 PHLX Semiconductor Index 交叉。ETF 與 GICS
            行業口徑可能有差異。
          </p>
        </Card>

        <Card title="5｜點解今日會升？">
          <h3>支持來源</h3>
          <ul>
            <li>
              Trump 表示取消原定對 Iran
              strikes，並稱有機會達成協議；油價由高位回落，
              市場即時降低能源通脹與地緣政治風險溢價。
            </li>
            <li>
              債息下跌：CNBC 指 10Y 跌至約 4.453%、2Y 約 4.054%，對高估值 growth
              股的 discount-rate 壓力稍為減輕。
            </li>
            <li>
              半導體經過前日急跌後出現強力回補，尤其記憶體與 AI hardware names。
            </li>
            <li>
              SpaceX IPO 前夕，市場暫時把大型 IPO
              視為風險胃納測試，而不是純抽資壓力。
            </li>
          </ul>
          <h3>仍然要小心</h3>
          <ul>
            <li>
              BLS PPI +6.5% YoY 是硬數據，說明能源與供應鏈壓力未真正解決。
            </li>
            <li>
              Oracle、Adobe 逆市下跌，反映 AI capex 與 software monetization
              仍被市場審問。
            </li>
            <li>若 Iran/Hormuz 消息反覆，油價可以好快由利好變回風險。</li>
          </ul>
        </Card>

        <Card title="6｜宏觀白話版">
          <DataTable headers={["項目", "數據", "解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：今日市場不是覺得通脹無事，而是覺得「最壞的地緣升級」暫時避過。
            所以債息跌、油價跌、科技反彈。但 PPI 熱到 6.5% YoY，Fed
            下週語氣仍可能偏硬。
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
            Crypto 採 Binance Vision public API 1-minute kline，時間點為
            2026-06-11 20:00:00 UTC（美股 4:00pm ET 附近）；對比基準為
            2026-06-10 同一時間。
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
              今日反彈可以跟，但不宜當成風險完全解除。先看 S&P 500 能否企穩
              7,400、VIX 能否留在 20 以下。
            </li>
            <li>
              <strong>中線：</strong>
              AI 主線仍有買盤，但資金會更挑剔：半導體 hardware 優先，software
              與重 capex names 需要更清楚 free cash flow 故事。
            </li>
            <li>
              <strong>風控：</strong>若 WTI 重上 $90-$95、10Y 重上
              4.55%-4.60%、VIX 重上 22，應減低高 beta / 單一主題集中度。
            </li>
            <li>
              <strong>一句到尾：</strong>
              今日是漂亮反彈，但核心邏輯是「壞消息少咗」而不是「好消息多咗」；下週
              FOMC 之前，仍要用倉位控制代替情緒追高。
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
              指數收市：CNBC、Reuters 轉載、Motley Fool 與 Yahoo 日線均列 S&P
              500 7,394.30、Dow 50,848.75、Nasdaq 25,809.66；本文採一致口徑。
            </li>
            <li>
              債息：CNBC 報 2Y/10Y/30Y 約 4.054%/4.453%/4.95%；Yahoo 10Y 日線
              close 約 4.463%，MarketScreener cash closing level 10Y 約
              4.451%。差異屬時間點與現貨/指數口徑，方向一致為下跌。
            </li>
            <li>
              油價：CME WTI quotes 顯示 18:26 CT 附近 $85.91，Yahoo futures
              與新聞報價因合約、 settlement 與時間點不同約在
              $86-$87；本文列範圍並以 CME 作主要來源。
            </li>
            <li>
              FedWatch：Investing.com/CME 顯示 6 月維持 3.50%-3.75% 機率約
              96.5%，最新可得更新時間為 6/10 08:05 ET；6/11
              生成時未見更即時可靠百分比，故沿用並註明。
            </li>
            <li>
              Crypto：Binance 直接 API 在環境中可能受限制，本文使用 Binance
              Vision public data endpoint 取得 1m
              kline，沒有用近似媒體報價代替。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
