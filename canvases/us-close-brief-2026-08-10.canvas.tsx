import React from "react";

const reportDate = "2026-08-10";
const publishedAt = "香港時間 2026-08-11 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP - US stocks edge down from record after oil prices climb 5%",
    url: "https://apnews.com/article/stocks-markets-rates-iran-ai-adb7b918b15206e38d7899d482422308",
  },
  {
    name: "Reuters via The Business Times - Wall Street ends down as expectations of Hormuz deal fade",
    url: "https://www.businesstimes.com.sg/companies-markets/capital-markets-currencies/us-stocks-wall-street-ends-down-expectations-hormuz-deal-fade",
  },
  {
    name: "CNBC - U.S. Treasury yields: investors eye key inflation data",
    url: "https://www.cnbc.com/2026/08/10/us-treasury-yields-investors-eye-key-inflation-data-.html",
  },
  {
    name: "CNBC - Oil prices today: Hormuz uncertainty",
    url: "https://www.cnbc.com/2026/08/10/oil-prices-today-brent-wti-hormuz-trump-iran.html",
  },
  {
    name: "CNBC - Stock market news for Aug. 10, 2026",
    url: "https://www.cnbc.com/2026/08/09/stock-market-today-live-updates.html",
  },
  {
    name: "BLS - CPI schedule and June CPI release",
    url: "https://www.bls.gov/schedule/news_release/cpi.htm",
  },
  {
    name: "Cleveland Fed - Beth Hammack July FOMC dissent statement",
    url: "https://www.clevelandfed.org/collections/speeches/2026/sp-20260731-statement-regarding-july-fomc-meeting-vote",
  },
  {
    name: "Exa market quote pages - ETF and stock closes",
    url: "https://exa.ai/library/markets/stock/XLE?date=2026-08-10",
  },
  {
    name: "Stocknear / ChartExchange - VIX close cross-check",
    url: "https://stocknear.com/index/%5EVIX/history",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const keyPoints = [
  "美股由歷史高位附近小幅回吐：S&P 500 -0.06% 至 7,753.11，Dow -0.11%，Nasdaq -0.32%；不是恐慌跌，係油價同長債息令市場先收一收風險。",
  "主線好清楚：Hormuz 重開希望降溫，WTI/Brent 約升 5%，推高 inflation premium；10Y 升至 4.705%、30Y 升至 5.251%。",
  "板塊輪動偏防守加能源：XLE +4.70% 明顯跑出，XLV +1.67%；相反 SOXX -2.54%、XLK -0.87%，半導體拖累 Nasdaq。",
  "個股方面，Intel 因 $15B 發股跌 4.04%，Nvidia 因 AI infrastructure financing 報道跌 2.86%，Apple 遭 Jefferies 降級跌 1.54%。",
  "FedWatch 口徑有分歧：CNBC 早段指 9 月加息機率約 44%，AP/Barchart 晚段引 CME 指接近 52%；油價同 Hammack 鷹派言論令 odds 日內升溫。",
  "Crypto 採 Binance Vision 2026-08-10 20:00 UTC 1m close（貼近美股 4:00pm ET）：BTC $64,036.06、ETH $1,878.07、SOL $76.19，三隻都跌。",
];

const indexRows = [
  [
    "Dow Jones",
    "53,975.98",
    "-60.95 / -0.11%",
    "AP 口徑；Reuters/Business Times 報 53,976.04，差異只屬四捨五入。",
  ],
  [
    "S&P 500",
    "7,753.11",
    "-4.53 / -0.06%",
    "上週五創收市新高後小回，仍守 7,750 附近，跌幅非常溫和。",
  ],
  [
    "Nasdaq Composite",
    "26,605.36",
    "-85.26 / -0.32%",
    "晶片與 Apple/Nvidia 壓力令科技指數跑輸，但平台股仍有承接。",
  ],
  [
    "Russell 2000 / IWM proxy",
    "IWM $299.68",
    "-0.64%",
    "RUT 官方收市即時來源未能可靠取得；以 IWM 作小型股 proxy，並標示口徑。",
  ],
  [
    "VIX",
    "15.41-15.46",
    "+3.4% 至 +3.8%",
    "Stocknear 3:59pm 報 15.41；ChartExchange 4:05pm 報 15.46，方向一致但口徑有少量差異。",
  ],
];

const sectorRows = [
  [
    "Energy / XLE",
    "$60.20 / +4.70%",
    "強綠",
    "油價急升直接帶動能源股，今日最清楚的 relative winner。",
  ],
  [
    "Health Care / XLV",
    "$168.44 / +1.67%",
    "綠燈",
    "防守資金有流入，低 beta 表現好過大市。",
  ],
  [
    "Materials / XLB",
    "$53.19 / +0.62%",
    "中性偏強",
    "商品鏈條有油價帶動，但美元/息口上升限制估值擴張。",
  ],
  [
    "Communication Services / XLC",
    "$111.83 / +0.52%",
    "中性偏強",
    "META/GOOGL 收升，抵消部分科技弱勢。",
  ],
  [
    "Financials / XLF",
    "$57.82 / +0.37%",
    "中性",
    "收益率曲線上移對銀行有支持，但大市 risk-off 令升幅有限。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$119.70 / -0.13%",
    "中性偏弱",
    "長息同油價上升對高估值消費股不友善。",
  ],
  [
    "Consumer Staples / XLP",
    "$84.95 / -0.20%",
    "中性",
    "防守板塊未全面受捧，今日資金更集中買 energy/health care。",
  ],
  [
    "Industrials / XLI",
    "$184.63 / -0.30%",
    "中性偏弱",
    "油價上升加通脹憂慮令周期工業偏軟。",
  ],
  [
    "Technology / XLK",
    "$186.34 / -0.87%",
    "紅燈",
    "Apple、Nvidia 及晶片鏈拖累，科技不是全面崩但 momentum 放慢。",
  ],
  [
    "Utilities / XLU",
    "$43.14 / -1.08%",
    "紅燈",
    "30Y 升至 5.25% 附近，利率敏感板塊受壓。",
  ],
  [
    "Real Estate / XLRE",
    "$44.42 / -1.26%",
    "紅燈",
    "長債息抽高直接壓 REITs 估值，是利率敏感位之一。",
  ],
  [
    "Semiconductors / SOXX",
    "$529.47 / -2.54%",
    "最弱",
    "Intel/Nvidia/AMAT 一齊跌，AI hardware beta 今日被減倉。",
  ],
];

const stockRows = [
  [
    "INTC",
    "$97.54 / -4.04%",
    "宣布計劃以發股籌集約 $15B，市場先反映攤薄壓力；Reuters 指其為拖累晶片股主因之一。",
  ],
  [
    "NVDA",
    "$217.56 / -2.86%",
    "Reuters 報 Apollo、Blackstone 等金融機構與 Nvidia 籌組約 $500B AI infrastructure funding package，市場擔心資本需求。",
  ],
  [
    "AAPL",
    "$308.25 / -1.54%",
    "Jefferies 將評級由 Hold 降至 Underperform，目標價由 $285.56 下調至 $263.66，並提到 all-glass iPhone/毛利壓力。",
  ],
  [
    "SOXX / AMAT",
    "SOXX -2.54%；AMAT $521.95 / -3.19%",
    "Applied Materials 本週有業績，半導體設備與 AI capex trade 先行降溫。",
  ],
  [
    "SPCX / SpaceX",
    "$138.74 / +4.23%",
    "TradingKey/Exa quote 均顯示逆市升，市場仍買其成長故事，但波幅大。",
  ],
  [
    "MSFT / AMZN",
    "MSFT +1.20%；AMZN +1.30%",
    "雲與平台股仍有承接，說明今日不是所有 mega-cap 一齊被沽。",
  ],
  [
    "META / GOOGL",
    "META +0.49%；GOOGL +0.92%",
    "Communication services 幫大市提供少少底部支撐。",
  ],
  [
    "CSCO",
    "$122.61 / +0.97%",
    "Cisco 本週有業績，網絡設備股今日先收升，留意 guidance 對 enterprise spending 的訊號。",
  ],
];

const macroRows = [
  [
    "Treasury yields",
    "CNBC：2Y 4.241%、10Y 4.705%、30Y 5.251%",
    "油價升穿心理位令通脹風險返來，長端升幅尤其需要留意；高估值 growth 會被 discount rate 壓住。",
  ],
  [
    "Oil / Hormuz",
    "WTI $82.13（+5.1%）；Brent $87.72（約 +5%）",
    "CNBC/AP/Reuters 都指市場對快速重開 Hormuz 的信心下降；energy inflation premium 成為全日核心風險。",
  ],
  [
    "Gold",
    "Bloomberg/SWI：spot gold 約 $4,388.79（+1.1%）；Barchart COMEX gold futures 約 $4,457.4（+0.85%）",
    "現貨與期貨口徑有差異，但方向同樣是避險/通脹對沖需求仍在。",
  ],
  [
    "DXY / 美元",
    "Barchart：DXY 約 99.789，+0.25%",
    "美元跟隨油價與美債息回升，短線對黃金以外的風險資產估值不算友善。",
  ],
  [
    "FedWatch / 利率預期",
    "CNBC：9 月加息機率約 44%；AP/Barchart 晚段引 CME 指近 52%",
    "數據衝突主要來自截取時間不同；油價急升與 Hammack 鷹派言論令加息 odds 日內向上。",
  ],
  [
    "CPI / PPI calendar",
    "BLS：7 月 CPI 於 8/12 08:30 ET 公布；CNBC/Dow Jones 預期 headline 3.4%、core 2.5% y/y",
    "本週核心不是今日跌 0.1%，而係 CPI 能否壓低第二次加息討論。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$64,036.06",
    "-1.76% vs 8/9 20:00 UTC",
    "美股收市附近同步偏弱，未有承接 risk-off 資金。",
  ],
  [
    "ETHUSDT",
    "$1,878.07",
    "-2.28% vs 8/9 20:00 UTC",
    "跌幅大過 BTC，beta 較高。",
  ],
  [
    "SOLUSDT",
    "$76.19",
    "-1.32% vs 8/9 20:00 UTC",
    "相對抗跌，但仍跟隨風險資產回吐。",
  ],
];

const watchList = [
  "SPX：7,750 是即市分界；若跌穿 7,700，短線追高盤會更快減倉。",
  "Nasdaq：26,500 / 26,300 是第一及第二防線；晶片未止跌前，指數彈都要看成交。",
  "SOXX：$529 已接近日低收，若守不住 $520，AI hardware trade 會再降溫。",
  "XLE：$60 關口突破後，若油價企穩 $82/$88，能源仍可能跑贏；但 headline reversal 風險高。",
  "10Y：4.70% 是今次 risk-off 的核心線，若再上 4.75%-4.80%，growth multiple 會受壓。",
];

const eventRows = [
  [
    "8/12（週三）",
    "BLS 7 月 CPI",
    "全週最重要數據，直接影響 9 月加息/按兵不動 odds。",
  ],
  [
    "8/13（週四）",
    "PPI / jobless claims",
    "若 PPI 配合 CPI 反彈，市場會重新 price 第二輪 inflation。",
  ],
  [
    "本週業績",
    "Applied Materials、Cisco 等",
    "AI capex 與 enterprise spending guidance 會影響 SOXX/XLK。",
  ],
  [
    "政策線",
    "美參議院通過臨時撥款案",
    "暫時降低政府停擺尾部風險，但兩院仍需統一版本。",
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

export default function USCloseBrief20260810() {
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
          background: radial-gradient(circle at 18% 18%, rgba(251, 146, 60, 0.35), transparent 28%),
            linear-gradient(135deg, #111827 0%, #1e3a8a 52%, #7f1d1d 100%);
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
          收市｜油價急升、長債息抽高，美股高位小回；能源跑出，晶片轉弱
        </div>
        <div className="meta">
          <Badge tone="blue">{publishedAt}</Badge>
          <Badge tone="red">S&P 500 -0.06%</Badge>
          <Badge tone="red">Nasdaq -0.32%</Badge>
          <Badge tone="green">XLE +4.70%</Badge>
          <Badge tone="red">SOXX -2.54%</Badge>
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
          <div className="value redText">高位小回</div>
          <p className="note">
            三大指數跌幅不大，但 breadth 偏弱，科技 beta 被削。
          </p>
        </div>
        <div className="stat">
          <div className="label">今日主線</div>
          <div className="value amberText">油價 +5%</div>
          <p className="note">Hormuz deal 未落實，通脹風險重新入價。</p>
        </div>
        <div className="stat">
          <div className="label">操作語氣</div>
          <div className="value">等 CPI</div>
          <p className="note">追貨值博率下降；等 8/12 CPI 確認利率方向。</p>
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
          指數主收市數字採 AP；Reuters/Business Times 的 S&P 500/Dow 數字有
          0.01-0.06 點差異，本文以 AP 作主口徑並列明差異。
        </p>
      </section>

      <section className="card">
        <h2>
          <span className="sectionNo">03</span>今日點解跌？
        </h2>
        <div className="grid">
          <div>
            <h3>1）Hormuz risk premium 回來</h3>
            <p>
              市場上週五曾憧憬美伊可快速重開 Hormuz
              航道，但週末後消息未能落實，CNBC/AP/Reuters
              均指油價因不確定性急升約 5%。油價升會推高通脹預期，亦令 Fed
              更難轉鴿。
            </p>
          </div>
          <div>
            <h3>2）美債息跟住上</h3>
            <p>
              CNBC 報 10Y 升至 4.705%、30Y 升至
              5.251%。長息抽高時，高估值科技、REITs、utilities
              一般會先受壓，今日 XLK、XLRE、XLU 都跑輸。
            </p>
          </div>
          <div>
            <h3>3）晶片鏈出現獲利回吐</h3>
            <p>
              Intel 發股、Nvidia AI funding 報道、AMAT 業績前減倉，令 SOXX 收跌
              2.54%。這不是 AI 故事消失，而是市場要求更高的資本回報證明。
            </p>
          </div>
          <div>
            <h3>4）本週 CPI 前不想太進取</h3>
            <p>
              BLS 7 月 CPI 將於 8/12 08:30 ET
              公布。若油價已推高通脹預期，市場自然不願在歷史高位附近繼續大手追
              risk assets。
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
          利率市場今日最麻煩的是「弱就業」同「油價升」互相拉扯。CNBC Daily Open
          早段指 9 月加息機率約 44%，比一週前 67% 低；但 AP/Barchart 收市後引用
          CME 指接近 52%。所以不能只講單一數字，合理解讀是：
          <strong>市場仍在 hold / hike 之間搖擺，CPI 會決定下一步。</strong>
        </p>
        <ul>
          <li>BLS 官方日程：7 月 CPI 於 2026-08-12 08:30 ET 發布。</li>
          <li>
            CNBC/Dow Jones consensus：headline CPI 3.4% y/y，core CPI 2.5% y/y。
          </li>
          <li>
            Cleveland Fed Beth Hammack 仍明確偏鷹，認為目前政策未算 meaningfully
            restrictive。
          </li>
          <li>
            參議院通過臨時撥款案可降低政府停擺尾部風險，但兩院仍需統一版本，暫非今日主線。
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
          API；2026-08-10 20:00 UTC 等同美股收市 4:00pm ET 附近。日變動以
          2026-08-09 20:00 UTC 同一口徑比較。
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
          VIX 仍只在 15.5 附近，代表市場未恐慌；但「油價 + 長息 +
          CPI」組合足以令短線追高盤保守。
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
              <li>大市無跌穿關鍵位前，唔需要將一日 -0.06% 解讀成轉勢。</li>
              <li>
                但 SOXX 弱過 Nasdaq，代表 AI hardware beta 先被減；短炒科技要縮
                size。
              </li>
              <li>
                若 WTI/Brent 再升一段，XLE 可續跑贏，但 headline risk
                高，不宜盲目追高。
              </li>
            </ul>
          </div>
          <div>
            <h3>中線</h3>
            <ul>
              <li>
                若 CPI 溫和、10Y 回落，mega-cap
                platform（MSFT/AMZN/GOOGL/META）仍較晶片鏈穩。
              </li>
              <li>
                若 CPI 熱過預期，先看 XLK、XLRE、XLU
                能否守住；長息敏感股會是壓力測試。
              </li>
              <li>
                Crypto 未見避險屬性，仍跟 risk asset；BTC 要先重上 $65K
                才算修復短線情緒。
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
          今日不是一個「壞消息全面爆煲」的交易日，而是一個典型高位前夕的風險重估：油價因
          Hormuz
          抽升，債息上行，市場先沽最敏感的晶片、REITs、utilities；同時能源、醫療同部分平台股仍有資金承接。下一個方向要等
          CPI，未出數據前，策略上偏向減少追高、保留彈藥、等 key levels 同 CPI
          給確認。
        </p>
        <div className="sourceList">
          {sources.map((source) => (
            <p key={source.url}>
              <a href={source.url}>{source.name}</a>
            </p>
          ))}
        </div>
        <p className="note">
          若關鍵數據衝突：指數採 AP/Reuters 收市口徑；VIX 採 Stocknear 並列
          ChartExchange 4:05pm 差異；FedWatch 採 CNBC 早段與 AP/Barchart 收市後
          CME 口徑並說明時間差；黃金採現貨與期貨分開標示。
        </p>
        <p className="note">{disclaimer}</p>
      </section>
    </main>
  );
}
