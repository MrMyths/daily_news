import React from "react";

const reportDate = "2026-06-16";
const publishedAt = "香港時間 2026-06-17 07:00";

const sources = [
  {
    name: "CNBC - Stock market news for June 16, 2026",
    url: "https://www.cnbc.com/2026/06/15/stock-market-today-live-updates.html",
  },
  {
    name: "Investopedia - Markets News, June 16, 2026",
    url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-06162026-11999070",
  },
  {
    name: "Sharecast - US close: Dow notches another record close",
    url: "https://www.sharecast.com/news/market-report-us-close/us-close-dow-notches-another-record-close-chip-stocks-weigh-on-nasdaq--22754660.html",
  },
  {
    name: "CNBC quote - SOXX",
    url: "https://www.cnbc.com/quotes/SOXX",
  },
  {
    name: "ChartExchange - XLE historical prices",
    url: "https://chartexchange.com/symbol/nyse-xle/historical/",
  },
  {
    name: "Federal Reserve H.15 / Treasury yields",
    url: "https://www.federalreserve.gov/releases/h15/",
  },
  {
    name: "FRED - T10Y2Y yield spread",
    url: "https://fred.stlouisfed.org/series/T10Y2Y",
  },
  {
    name: "FRED - VIXCLS",
    url: "https://fred.stlouisfed.org/series/VIXCLS",
  },
  {
    name: "BLS - U.S. Import and Export Price Indexes, May 2026",
    url: "https://www.bls.gov/news.release/ximpim.nr0.htm",
  },
  {
    name: "U.S. Census / HUD - New Residential Construction, May 2026",
    url: "https://www.census.gov/construction/nrc/current/index.html",
  },
  {
    name: "Trading Economics - crude oil and DXY market data",
    url: "https://tradingeconomics.com/commodity/crude-oil",
  },
  {
    name: "CME FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "Dow Jones",
    "51,999.67",
    "+328.64 / +0.64%",
    "連續第二日創收市新高，資金由晶片轉去工業、金融與價值周期股。",
  ],
  [
    "S&P 500",
    "7,511.35",
    "-42.94 / -0.57%",
    "由高位回吐但仍守 7,500 附近；權重科技回落令指數受壓。",
  ],
  [
    "Nasdaq Composite",
    "26,376.34",
    "-307.60 / -1.15%",
    "半導體急跌拖低 Nasdaq，昨日 3% 大升後出現獲利回吐。",
  ],
  [
    "Russell 2000",
    "2,939.19",
    "約 -25.90 / -0.87%",
    "小型股未能跟 Dow 創高；可靠主流來源較少，本文只作 breadth 參考。",
  ],
  [
    "VIX",
    "16.20（最新官方 6/15）",
    "6/16 暫無可靠官方收盤",
    "FRED/Cboe 最新可核對數字仍停在 6/15；今日不能把 6/16 VIX 收盤寫死。",
  ],
];

const sectorRows = [
  [
    "Industrials / XLI",
    "領先；CNBC 指 XLI 盤中創高",
    "強綠",
    "Caterpillar、grid infrastructure、aerospace/defense 帶動，Dow 創高的核心板塊。",
  ],
  [
    "Financials / XLF",
    "領先；JPM +3%+、GS 約 +1.5%",
    "綠燈",
    "低油價改善經濟再加速想像，金融與工業一齊承接科技流出資金。",
  ],
  [
    "Utilities / XLU",
    "向上；NYSE 指 utilities 領先",
    "防守綠",
    "債息回落支持收益型資產，今日不是純高 beta，亦有價值/防守資金。",
  ],
  [
    "Energy / XLE",
    "ChartExchange：$55.36 / -0.34%",
    "紅燈",
    "油價再跌 5% 左右，能源股仍受壓；跌幅細過商品，反映部分壞消息已反映。",
  ],
  [
    "Semiconductors / SOXX",
    "CNBC：$591.24 / -5.92%",
    "強紅",
    "SOXX 由 52 週高位回落，SOX 跌近 6%，AMD、MU、AVGO、NVDA 成拖累。",
  ],
  [
    "Technology / XLK",
    "暫無一致可靠收市百分比；方向偏弱",
    "紅燈",
    "Yahoo/CNBC/即時 quote 口徑衝突，但 CNBC/Investopedia 均確認 tech lagging。",
  ],
  [
    "Communication Services / XLC",
    "暫無可靠數據",
    "中性",
    "Alphabet、Meta 約升 1%，但大型平台未足以抵消晶片拖累。",
  ],
  [
    "Consumer Discretionary / XLY",
    "暫無可靠數據",
    "中性",
    "Amazon 近乎持平、Tesla 跌逾 1%，消費科技未有明顯領導。",
  ],
  [
    "Materials / XLB",
    "暫無可靠數據",
    "中性偏弱",
    "NYSE 盤中提到 mining 名稱偏弱，缺乏完整收市板塊數據。",
  ],
  [
    "Health Care / XLV",
    "暫無可靠數據",
    "中性",
    "Citi 看好大型 biopharma 下半年，但即日板塊沒有足夠可靠收市數字。",
  ],
  [
    "Real Estate / XLRE",
    "暫無可靠數據",
    "中性",
    "KRC 獲 BofA 升級支持 REIT 情緒；但板塊收市百分比未有可靠一致來源。",
  ],
];

const stockRows = [
  [
    "SPCX / SpaceX",
    "+近 5%，收 $201.80",
    "同意以 $60B 收購 Cursor 母公司 Anysphere，第三日交易仍然強；盤中曾接近 $3T 市值。",
  ],
  [
    "AMD / MU / AVGO / NVDA",
    "AMD 跌逾 7%；MU -6%；AVGO -4%；NVDA 跌逾 2%",
    "半導體昨日大升後被獲利，BofA 調查指 semis 是史上最擠擁交易之一。",
  ],
  [
    "SOXX / SOX",
    "SOXX -5.92%；SOX 跌近 6%",
    "晶片回吐幾乎抹走週一升幅，是 Nasdaq 跑輸 Dow 的主因。",
  ],
  [
    "JPM / GS / CAT",
    "JPM +3%+；GS 約 +1.5%；CAT 創高附近",
    "金融與工業接力，市場押低油價可支持經濟再加速。",
  ],
  [
    "MMM / V",
    "盤中約 +2.7% / +2.6%",
    "Dow 內部升幅更廣，資金由 mega-cap tech 輪入價值與周期。",
  ],
  [
    "AAPL / META / GOOGL",
    "約 +1%",
    "平台和 Apple 有承接，顯示科技不是全面崩；弱點主要集中於晶片高 beta。",
  ],
  [
    "MSFT / TSLA / AMZN",
    "MSFT、TSLA 跌逾 1%；AMZN 近乎持平",
    "大型科技分化，SpaceX 熱度亦令部分 mega-cap 相對失色。",
  ],
  [
    "WDC / STX",
    "WDC +5%+；STX +2%+",
    "記憶體/儲存鏈不是全線跌，市場仍買入 AI storage shortage 的結構性故事。",
  ],
];

const macroRows = [
  [
    "2Y / 10Y / 30Y Treasury",
    "CNBC：約 4.133% / 4.426% / 4.949%；Fed H.15 日結 4.07% / 4.47% / 4.97%",
    "油價回落帶動中長端債息下行；10Y-2Y spread FRED 顯示 0.38%，曲線仍偏正斜率。",
  ],
  [
    "FedWatch / FOMC",
    "Investopedia 引 CME：6/17 決議約 99% 機率維持利率不變",
    "決議本身幾乎 price in hold，真正風險是 Warsh 首場記者會與點陣圖語氣。",
  ],
  [
    "WTI / Brent",
    "CNBC：WTI $76.05（-5.82%）、Brent $78.96（-5.06%）；TE 顯示 $76.52 / $79.37",
    "兩者均跌穿或貼近 $80，市場繼續定價 Hormuz 重開與 war premium 消退。",
  ],
  [
    "Gold",
    "Investopedia：gold futures 約 $4,355 / +0.1%",
    "金價微升，反映債息美元回落的支持多於避險需求下降。",
  ],
  [
    "DXY / 美元",
    "Investopedia：99.60 / -0.1%；Trading Economics：99.53 / -0.10%",
    "美元微跌配合油價與債息回落，對 gold/crypto 有少量支撐。",
  ],
  [
    "Import prices",
    "BLS：May import prices +1.9% m/m、+6.7% y/y；fuel imports +12.5% m/m",
    "數據仍提示能源衝擊已滲入通脹，Fed 即使看到油價跌亦未必即時轉鴿。",
  ],
  [
    "Housing starts",
    "Census/HUD：May starts 1.177M，較 April -15.4%，低過預期",
    "高利率繼續壓住樓市供應活動，對 cyclicals 是隱藏風險。",
  ],
  [
    "US-Iran / Hormuz",
    "CNBC：協議簽署擬於 Friday Switzerland，Hormuz 料可 toll-free 重開",
    "今日跨資產邏輯仍由地緣 headline 驅動；若簽署前有反覆，油、VIX、tech 會同步波動。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$65,670.50",
    "-1.27% vs 6/15 20:00 UTC",
    "Binance Vision data-api 1m kline：2026-06-16 20:00:00 UTC close，即 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$1,794.40",
    "-1.34% vs 6/15 20:00 UTC",
    "ETH 跟隨科技 beta 回吐，但跌幅溫和，未見 panic deleveraging。",
  ],
  [
    "SOLUSDT / SOL",
    "$73.79",
    "-1.72% vs 6/15 20:00 UTC",
    "SOL 對高 beta 情緒更敏感，回吐多過 BTC/ETH，但仍守住週一升幅大部分。",
  ],
];

const notes = [
  "美股分化：Dow +0.64% 至 51,999.67 再創收市新高；S&P 500 -0.57%、Nasdaq -1.15%。",
  "主線由「全場 risk-on」變成「sector rotation」：資金由晶片/大型科技轉入工業、金融、部分防守。",
  "油價繼續急跌：WTI 約 $76、Brent 約 $79，市場押注 US-Iran 協議與 Hormuz 重開。",
  "半導體是最大拖累：SOXX -5.92%，AMD、MU、AVGO、NVDA 全線回吐；但 SpaceX 因 Cursor deal 仍升近 5%。",
  "Crypto 用 Binance Vision 4:00pm ET 附近 1 分鐘 K 線：BTC $65,670.50、ETH $1,794.40、SOL $73.79，全部較昨日同時點微跌。",
];

const technicalLevels = [
  [
    "Dow Jones",
    "52,000 / 51,500",
    "Dow 幾乎收正 52,000，若企穩代表 value/cyclical rotation 有延續；跌穿 51,500 則創高失敗。",
  ],
  [
    "S&P 500",
    "7,500 / 7,450",
    "收 7,511.35，7,500 是即日心理位；若失守，下一站看 7,450。",
  ],
  [
    "Nasdaq Composite",
    "26,300 / 26,000",
    "Nasdaq 回吐但未穿 26,300；若半導體續跌，26,000 會是下一個防線。",
  ],
  [
    "Russell 2000",
    "2,940 / 2,900",
    "Russell 收 2,939.19，守不住 2,940 代表 breadth 未確認 Dow 創高。",
  ],
  [
    "SOXX",
    "590 / 600",
    "SOXX 收 $591.24，已貼近 $590；若不能快速重上 $600，AI hardware momentum 會降溫。",
  ],
  [
    "WTI",
    "$75 / $80",
    "WTI 跌近 $76，低於 $80 對通脹是好消息；但若跌太急，能源盈利預期會再被下修。",
  ],
  [
    "10Y Treasury",
    "4.45% / 4.50%",
    "10Y 約 4.43%-4.47%；低於 4.50% 支持估值，重上 4.50% 則壓住 growth。",
  ],
  [
    "BTC",
    "$65,000 / $67,000",
    "BTC 4:00pm ET 附近 $65.7k；守 $65k 仍屬健康整固，重上 $67k 才是新一輪 risk-on 確認。",
  ],
];

const watchList = [
  "6/17 FOMC：99% hold 已反映，重點看 Warsh 會否釋出 hawkish hold、點陣圖有否上修路徑。",
  "US-Iran 協議簽署：Friday Switzerland 前任何 headline reversal 都會先打油價和 VIX。",
  "半導體 crowded trade：若 SOXX 跌穿 $590 且 AMD/MU 未能反彈，Nasdaq 要降低倉位 beta。",
  "Dow rotation：JPM、CAT、GS、XLI 如能接力，市場可由 narrow tech rally 變成 value-led broadening。",
  "宏觀數據：import prices 熱、housing starts 弱，Fed 需要平衡通脹與利率敏感行業壓力。",
  "Crypto：BTC $65k、ETH $1,780、SOL $73 是短線觀察位；跌穿會削弱風險胃納確認。",
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

export default function USCloseBrief20260616() {
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
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 48%, #065f46 100%);
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
          background: #eff6ff;
          color: #1e40af;
          text-align: left;
          padding: 10px;
          border-bottom: 1px solid #bfdbfe;
        }
        td { padding: 11px 10px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
        .callout {
          border-left: 5px solid #2563eb;
          background: #eff6ff;
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
        <h1>Dow 再創新高，但晶片回吐拖低 Nasdaq</h1>
        <p className="subtitle">
          6 月 16 日美股由單邊 risk-on 轉為板塊輪動：Dow 升 0.64% 至 51,999.67
          再創收市新高，但 S&P 500 跌 0.57%、Nasdaq 跌 1.15%。油價再跌約
          5%，工業和金融接力；半導體成最大弱點。
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
            今日結論：升市未完，但 leadership 由 AI/chip 轉去 Dow
            value/cyclical。短線不是盲目追 Nasdaq，而是看 FOMC
            前資金輪動能否延續。
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
              Dow 創高、Nasdaq 回吐，代表資金不是離場，而是由高 beta
              半導體轉向工業、金融和部分防守。
            </li>
            <li>
              Russell 2000 收 2,939.19，未能配合 Dow 創高；breadth
              暫時不算全面健康。
            </li>
            <li>
              VIX 官方/FRED 暫只更新到 6/15 的 16.20；6/16
              收市波動數據未有可靠來源，所以本文不硬寫。
            </li>
            <li>
              Crypto 輕微回吐，沒有確認 panic；BTC 仍在 $65k
              上方，對風險資產是「整固」多過「轉弱」。
            </li>
          </ul>
        </Card>

        <Card title="4｜板塊紅綠燈">
          <DataTable
            headers={["板塊 / ETF proxy", "變動", "訊號", "一句講晒"]}
            rows={sectorRows}
          />
          <p className="small">
            Yahoo chart API 今日回傳 429，板塊表改用 CNBC、NYSE、Cboe/quote
            snippet、ChartExchange 等可核對來源。若 exact close
            來源互相衝突，直接標示「暫無可靠數據」。
          </p>
        </Card>

        <Card title="5｜點解今日會分化？">
          <h3>支持 Dow 的因素</h3>
          <ul>
            <li>
              油價連跌兩日，市場押注 US-Iran 協議落地和 Hormuz
              重開，能源通脹壓力即時降溫。
            </li>
            <li>
              CNBC 指 industrials / financials 帶動 Dow，JPM、CAT、GS
              等價值/周期股接力。
            </li>
            <li>債息回落，10Y 約 4.43%-4.47%，對估值仍有支持。</li>
          </ul>
          <h3>拖低 Nasdaq 的因素</h3>
          <ul>
            <li>
              半導體交易過度擠擁，SOXX 跌 5.92%，SOX 跌近
              6%，週一升幅被快速回吐。
            </li>
            <li>
              AMD、Micron、Broadcom、Nvidia 全線受壓，AI hardware beta
              暫時降溫。
            </li>
            <li>
              FOMC 決議前，投資者不想在昨日大升後再追高最擁擠的 tech trade。
            </li>
          </ul>
        </Card>

        <Card title="6｜宏觀白話版">
          <DataTable headers={["項目", "數據", "解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：油價跌是好消息，但 BLS import prices 仍熱、housing starts
            又弱，Fed 明日不一定可以講得太鴿。市場會聽語氣多過看 hold 本身。
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
            Crypto 採 Binance Vision public data / data-api 1-minute
            kline，時間點為 2026-06-16 20:00:00 UTC（美股 4:00pm ET
            附近）；對比基準為 2026-06-15 同一時間。若 Binance spot API
            受地區限制，使用官方 public data 是較可重現口徑。
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
              Dow 企穩 52,000 附近可以跟 rotation，但 Nasdaq 要等 SOXX 回上 $600
              才算恢復 momentum。
            </li>
            <li>
              <strong>中線：</strong>
              AI 主線未死，只是 crowded trade
              降溫；可分開看「晶片回吐」和「軟件/儲存/工業電力需求」。
            </li>
            <li>
              <strong>風控：</strong>若 FOMC 語氣偏鷹、10Y 重上 4.50%、WTI
              反彈回 $80 以上或 VIX 6/16 更新後重上 18，要減高 beta。
            </li>
            <li>
              <strong>一句到尾：</strong>
              今日不是熊市訊號，而是 leadership 換手；最重要是別用昨日 Nasdaq
              爆升的劇本去交易今日 Dow rotation 的市況。
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
              指數收市：CNBC、Investopedia 與 Sharecast 均列 Dow 51,999.67、S&P
              500 7,511.35、Nasdaq 26,376.34，本文採此一致口徑。
            </li>
            <li>
              Yahoo chart API：今日多次回傳 HTTP
              429，因此不作主要來源；凡未能由其他可靠來源交叉核對的板塊 exact
              close，均寫「暫無可靠數據」。
            </li>
            <li>
              Russell 2000：可找到的來源列
              2,939.19，但不如三大指數來源完整，本文只作市場寬度參考。
            </li>
            <li>
              VIX：FRED/Cboe 最新可核對數字為 2026-06-15 的 16.20；6/16
              收盤若未更新，不以即時頁或推算數字代替。
            </li>
            <li>
              債息：CNBC quote 為不同日內時間點，Fed H.15
              為官方日結；本文並列，以方向和區間解讀為主。
            </li>
            <li>
              油價：CNBC 報 WTI $76.05 / Brent $78.96；Trading Economics
              CFD/market data 顯示 $76.52 / $79.37。方向一致，本文採 CNBC
              文章作主敘述，TE 作交叉參考。
            </li>
            <li>
              Crypto：Binance 直接 spot API 在環境中可能受限制，本文使用 Binance
              Vision official public data 1m kline，精確取 2026-06-16 20:00 UTC
              close。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
