import React from "react";

const reportDate = "2026-06-17";
const publishedAt = "香港時間 2026-06-18 07:00";

const sources = [
  {
    name: "CNBC - Stock market news for June 17, 2026",
    url: "https://www.cnbc.com/2026/06/16/stock-market-today-live-updates.html",
  },
  {
    name: "The Motley Fool - Stock Market Today, June 17",
    url: "https://www.fool.com/coverage/stock-market-today/2026/06/17/stock-market-today-june-17-stocks-slide-on-fed-rate-hike-fears/",
  },
  {
    name: "AP via Barchart - US stocks sink on Fed hike worries",
    url: "https://www.barchart.com/story/news/2506642/us-stocks-sink-on-worries-about-a-possible-hike-to-interest-rates-this-year-by-the-federal-reserve",
  },
  {
    name: "Federal Reserve - FOMC statement, June 17, 2026",
    url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260617a.htm",
  },
  {
    name: "Federal Reserve - Summary of Economic Projections, June 2026",
    url: "https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260617.htm",
  },
  {
    name: "Reuters via Economic Times - Fed holds, traders raise hike bets",
    url: "https://economictimes.indiatimes.com/markets/us-stocks/news/us-stocks-us-market-closes-lower-as-fed-signals-rates-may-move-higher-this-year/articleshow/131812282.cms",
  },
  {
    name: "U.S. Census - Advance Monthly Retail Sales, May 2026",
    url: "https://www.census.gov/retail/marts/www/marts_current.pdf",
  },
  {
    name: "CNBC quote - CBOE Volatility Index (.VIX)",
    url: "https://www.cnbc.com/quotes/.VIX",
  },
  {
    name: "CNBC quote - U.S. 10 Year Treasury",
    url: "https://www.cnbc.com/quotes/US10Y",
  },
  {
    name: "Trading Economics - DXY market data",
    url: "https://tradingeconomics.com/united-states/currency",
  },
  {
    name: "Benzinga - Warsh hawkish Fed debut market reaction",
    url: "https://www.benzinga.com/markets/economic-data/26/06/53264024/warsh-hawkish-fed-debut-scraps-forward-guidance-inflation-market-reactions",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "Dow Jones",
    "51,492.55",
    "-507.12 / -0.98%",
    "早段曾升約 280 點兼再試歷史高位，但 Warsh 首場 FOMC 後倒跌，收近 51,500 防線。",
  ],
  [
    "S&P 500",
    "7,420.10",
    "-91.25 / -1.21%",
    "失守 7,500，市場由等 Fed 變成重新定價「下一步可能加息」。",
  ],
  [
    "Nasdaq Composite",
    "26,021.66",
    "-354.69 / -1.34%",
    "Mega-cap tech 明顯受壓，Nasdaq 連跌第二日，26,000 成短線心理位。",
  ],
  [
    "Russell 2000",
    "2,917.98",
    "-21.22 / -0.72%",
    "小型股同樣偏弱，但跌幅細過大型 growth；高利率預期仍壓住 breadth。",
  ],
  [
    "VIX",
    "18.44",
    "+2.03 / +12.37%",
    "CNBC 4:15pm ET quote 與 Yahoo chart 一致；FRED 官方序列仍只更新至 6/16 的 16.41。",
  ],
];

const sectorRows = [
  [
    "Semiconductors / SOXX",
    "$599.73 / +1.44%",
    "綠燈",
    "晶片不是全面崩，AVGO、MU、AMD 反彈；但 NVDA 跌、Nasdaq 仍弱，屬分化修復。",
  ],
  [
    "Industrials / XLI",
    "$179.60 / -0.14%",
    "中性偏強",
    "CAT、工業鏈仍有承接，是全場最抗跌的板塊 proxy。",
  ],
  [
    "Technology / XLK",
    "$185.80 / -0.34%",
    "中性偏弱",
    "半導體反彈抵消部分 MSFT/AAPL 壓力，但高估值 tech 仍受高 real yield 壓住。",
  ],
  [
    "Financials / XLF",
    "$54.05 / -0.55%",
    "中性",
    "JPM、GS 微升，但大市 risk-off 令板塊整體仍紅。",
  ],
  [
    "Energy / XLE",
    "$54.67 / -1.25%",
    "紅燈",
    "油價低位震盪，能源股繼續消化 war premium 消退。",
  ],
  [
    "Utilities / XLU",
    "$44.46 / -1.33%",
    "紅燈",
    "2Y yield 急升令防守收益股都無避風港效果。",
  ],
  [
    "Materials / XLB",
    "$52.02 / -1.33%",
    "紅燈",
    "美元轉強及增長折現壓力拖低周期材料。",
  ],
  [
    "Health Care / XLV",
    "$150.71 / -1.46%",
    "紅燈",
    "防守板塊亦被全市場 de-risking 拖低。",
  ],
  [
    "Consumer Staples / XLP",
    "$83.68 / -2.23%",
    "強紅",
    "零售數據雖好，但高 inflation / high rates 故事令防守消費股被沽。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$115.49 / -2.51%",
    "強紅",
    "Amazon、Tesla 下跌，高息環境直接壓消費 growth multiple。",
  ],
  [
    "Real Estate / XLRE",
    "$43.97 / -2.51%",
    "強紅",
    "利率敏感板塊最怕前端利率再定價，今日明顯受壓。",
  ],
  [
    "Communication Services / XLC",
    "$109.20 / -2.78%",
    "最弱",
    "Motley Fool 指 communication services 跌約 2.91%；META、GOOGL 是主要拖累。",
  ],
];

const stockRows = [
  [
    "SPCX / SpaceX",
    "約 -4.9%",
    "上市後首度收跌，從早段升勢倒跌；高增長 IPO 熱度遇上 Fed hawkish shock。",
  ],
  [
    "META / MSFT / AMZN",
    "META -5.44%；MSFT -3.79%；AMZN -3.46%",
    "大型科技是拖低 S&P 500 的重心，市場把高 duration 現金流重新折現。",
  ],
  [
    "GOOGL / TSLA / AAPL",
    "GOOGL -2.53%；TSLA -2.05%；AAPL -1.10%",
    "平台、電動車、硬件都偏弱；今日不是單一公司新聞，而是利率 beta 壓力。",
  ],
  [
    "AVGO / MU / AMD / NVDA",
    "AVGO +4.30%；MU +2.20%；AMD +1.02%；NVDA -1.33%",
    "晶片內部分化，Broadcom/Micron 修復，但 Nvidia 未能跟，AI leadership 仍需觀察。",
  ],
  [
    "WDC / STX",
    "WDC +4.56%；STX +3.37%",
    "AI storage shortage 主線繼續有資金追，成為科技內少數強勢角落。",
  ],
  [
    "JPM / GS / CAT",
    "JPM +0.70%；GS +0.78%；CAT +1.11%",
    "金融與工業相對抗跌，反映不是全面清倉，而是由 mega-cap growth 轉向較實體經濟主題。",
  ],
  [
    "La-Z-Boy / Moderna / Robinhood / GE Vernova",
    "LZB +14.8%；MRNA +11.6%；HOOD +8.8%；GEV +6.8%",
    "個股層面仍有 earnings、health care、brokerage、power infrastructure 的 alpha。",
  ],
  [
    "Coterra / Equifax / AppLovin / Charter",
    "CTRA -8.6%；EFX -7.4%；APP -6.9%；CHTR -6.9%",
    "能源、credit-sensitive、ad-tech、cable 均見沽壓，市場對周期與估值容錯率下降。",
  ],
  [
    "CME",
    "-3.46%",
    "Reuters/ET 指 CEO Terry Duffy 將轉任 executive chairman，管理層交接令股價受壓。",
  ],
];

const macroRows = [
  [
    "FOMC 決議",
    "Fed 12-0 維持 fed funds target 3.50%-3.75%",
    "利率本身符合預期；真正 shock 是聲明和 Warsh 記者會更重 inflation mandate。",
  ],
  [
    "SEP / Dot plot",
    "2026 median fed funds 3.8%（3 月 3.4%）；PCE 3.6%（3 月 2.7%）；core PCE 3.3%（3 月 2.7%）",
    "點陣圖由「今年可減息」翻成「今年或要加息」；9/18 官員預期至少一次加息，6 人預期兩次或以上。",
  ],
  [
    "FedWatch / 市場定價",
    "Reuters/ET：年底維持不變機率跌至 15.7%；25bp hike 約 38%，50bp hike 約 33%；AP 指至少一次 hike 機率約 84%",
    "市場由 Tuesday 的半信半疑，變成正正式式 pricing higher-for-longer / possible hikes。",
  ],
  [
    "2Y / 10Y / 30Y Treasury",
    "2Y 約 4.21%-4.22%；10Y 約 4.487%-4.49%；30Y 約 4.93%",
    "前端升幅最大，典型 hawkish flattening；這是今日壓低 growth multiple 的核心。",
  ],
  [
    "DXY / 美元",
    "Trading Economics：DXY 99.64（Jun/17 +0.10%）；Benzinga 指 Fed 後曾升穿 100.15",
    "不同來源時間點不同，但方向一致：美元在 Warsh 發言後轉強，壓住 gold/crypto 和跨國 earnings multiple。",
  ],
  [
    "Gold",
    "Motley Fool：$4,254.65 / -1.77%；Benzinga Fed 後曾報約 $4,229 / -3.4%",
    "高 real yield 和美元反彈壓低金價；盤中/收市口徑不同，本文採 Motley close 作主數字並列 Fed 後低位。",
  ],
  [
    "WTI / Brent",
    "AP：Brent +0.7% 至 $79.55；Yahoo/期貨盤顯示 WTI 約 $75.3、Brent 約 $78.8 附近",
    "油價不是今日跌市主因；供應風險降溫仍在，但 Trump/Iran headline 未完全落地。",
  ],
  [
    "Retail sales",
    "Census：May retail & food services sales $763.7B，+0.9% m/m、+6.9% y/y；control group +0.7%",
    "消費仍硬淨，但數據未扣通脹，gasoline station +3.4% 亦有價格因素；這反而支持 Fed 不急轉鴿。",
  ],
  [
    "Forward guidance",
    "Warsh 指 Fed statement 不再加入傳統 forward guidance，並稱會 deliver price stability",
    "市場要重新適應「少承諾、多看數據」的新 Fed，短線波動會升。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$64,232.45",
    "-2.19% vs 6/16 20:00 UTC",
    "Binance data-api 1m kline：2026-06-17 20:00:00 UTC close，即 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$1,734.58",
    "-3.33% vs 6/16 20:00 UTC",
    "ETH 對高 beta / liquidity 更敏感，Fed 後跌幅大過 BTC。",
  ],
  [
    "SOLUSDT / SOL",
    "$71.59",
    "-2.98% vs 6/16 20:00 UTC",
    "SOL 跟隨風險資產回吐；$70-$72 成短線情緒位。",
  ],
];

const notes = [
  "美股全線回落：Dow -507 點至 51,492.55，S&P 500 -1.21% 至 7,420.10，Nasdaq -1.34% 至 26,021.66。",
  "跌市主因不是 Fed hold，而是 dot plot 由減息預期翻成加息風險：2026 median fed funds 升至 3.8%。",
  "債市反應最清楚：2Y yield 升至約 4.21%-4.22%，前端利率抽高直接壓低 mega-cap growth。",
  "板塊全面偏弱，communication services、consumer discretionary、real estate 跌最深；semis/storage 有局部反彈。",
  "Crypto 用 Binance 4:00pm ET 附近價格：BTC $64,232.45、ETH $1,734.58、SOL $71.59，全部較昨日同時點下跌。",
];

const technicalLevels = [
  [
    "Dow Jones",
    "51,500 / 52,000",
    "收 51,492.55，剛好跌穿 51,500；若明顯重上 52,000，才算否定 Fed-day reversal。",
  ],
  [
    "S&P 500",
    "7,400 / 7,500",
    "7,500 由支撐變阻力；7,400 是下一個要守的整數位。",
  ],
  [
    "Nasdaq Composite",
    "26,000 / 26,300",
    "收 26,021.66，幾乎貼住 26,000；若穿，mega-cap tech 會引發第二輪止蝕。",
  ],
  [
    "Russell 2000",
    "2,900 / 2,940",
    "2,900 是 small-cap 風險胃納底線；重上 2,940 才算 breadth 修復。",
  ],
  [
    "VIX",
    "18 / 20",
    "VIX 已重上 18；若突破 20，市場由 Fed repricing 變成更廣泛避險。",
  ],
  [
    "2Y Treasury",
    "4.20% / 4.30%",
    "2Y 企穩 4.20% 代表市場認真 pricing hike；若升近 4.30%，growth 壓力會更大。",
  ],
  [
    "DXY",
    "100 / 100.50",
    "美元若企穩 100 上方，會壓金、crypto、海外收入型科技股。",
  ],
  [
    "BTC",
    "$64,000 / $65,000",
    "BTC 4:00pm ET 附近 $64.2k；守不到 $64k，crypto 會由整固轉為 risk-off 確認。",
  ],
];

const watchList = [
  "6/18 期權到期/長週末前倉位調整：RiskReversal 指 7,500 變 supply，7,400 是 SPX 關鍵防線。",
  "Warsh 新 Fed 溝通模式：市場要看後續官員發言，尤其是否確認「下一步更可能加息」。",
  "CME FedWatch：若年底不變機率繼續低於 20%，rate-sensitive growth/real estate 仍受壓。",
  "油價與 Iran/Hormuz headline：若 Brent 重新上 $80-$85，Fed inflation risk 會再被放大。",
  "Mega-cap tech：META、MSFT、AMZN 能否止跌，決定 Nasdaq 26,000 是否守得住。",
  "半導體分化：SOXX 升但 NVDA 跌，留意 AVGO/MU/WDC/STX 強勢能否外溢到 AI hardware 主線。",
  "Crypto：BTC $64k、ETH $1,700、SOL $70 是短線風險胃納觀察位。",
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

export default function USCloseBrief20260617() {
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
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 48%, #7f1d1d 100%);
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
        h3 { font-size: 19px; margin: 18px 0 8px; color: #b91c1c; }
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
          border-left: 5px solid #dc2626;
          background: #fef2f2;
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
        <h1>Warsh 首場 FOMC 變鷹，美股由新高倒跌</h1>
        <p className="subtitle">
          6 月 17 日美股先升後急回：Fed
          維持利率不變，但點陣圖上修至今年或要加息， 2Y yield 抽升至約
          4.21%-4.22%。Dow 由即市新高倒跌 507 點， S&P 500 跌穿 7,500，Nasdaq
          貼近 26,000。
        </p>
        <div className="meta">
          <span className="pill">交易日：{reportDate}</span>
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">語言：繁體中文 / 廣東話語氣</span>
          <span className="pill">
            Crypto：Binance data-api 20:00 UTC 1m close
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
            今日結論：Fed
            沒有加息，但市場聽到的是「減息劇本暫停，甚至可能反向」。 短線要用
            rate-shock 市況交易，不應用昨日輪動升市的節奏追高。
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
              三大指數全跌，Dow 由早段高位倒跌，代表 selloff 是 Fed headline
              後出現的跨資產重新定價。
            </li>
            <li>
              Motley Fool 指全數 S&P sectors 下跌，communication services 和
              consumer cyclicals 最弱；Yahoo ETF proxy 亦顯示 XLC、XLY、XLRE
              跌逾 2.5%。
            </li>
            <li>
              SOXX 反升 1.44%，但 Nasdaq 仍跌 1.34%，說明問題不只是晶片， 而是
              mega-cap tech duration 被 2Y yield 抽高壓住。
            </li>
            <li>
              VIX 升至 18.44，尚未到
              panic，但已由低波動區間回到「需要風控」水平。
            </li>
          </ul>
        </Card>

        <Card title="4｜板塊紅綠燈">
          <DataTable
            headers={["板塊 / ETF proxy", "變動", "訊號", "一句講晒"]}
            rows={sectorRows}
          />
          <p className="small">
            板塊 proxy 使用 Yahoo chart close；sector headline 用 Motley
            Fool/Barchart/AP 交叉核對。SOXX 不是 S&P 500 sector，但保留作 AI
            hardware 溫度計。
          </p>
        </Card>

        <Card title="5｜點解今日會跌？">
          <h3>Fed hold 不是重點，點陣圖先係重點</h3>
          <ul>
            <li>
              Fed 官方聲明：12-0 維持 3.50%-3.75%，但聲明更短，移除過往 forward
              guidance，強調 inflation remains elevated。
            </li>
            <li>
              SEP 顯示 2026 fed funds median 由 3.4% 升至 3.8%，PCE inflation
              median 由 2.7% 升至 3.6%，市場即時重定價。
            </li>
            <li>
              Reuters/ET 指年底維持不變機率跌至 15.7%；AP 指至少一次加息機率升至
              84%。這比單純「不減息」更鷹。
            </li>
          </ul>
          <h3>點解 growth 跌得深？</h3>
          <ul>
            <li>
              2Y yield 升至約 4.21%-4.22%，前端利率最影響高估值、長 duration
              資產。
            </li>
            <li>
              META、MSFT、AMZN、GOOGL 等大型科技同步跌，令 S&P 500 和 Nasdaq 比
              Russell 更弱。
            </li>
            <li>
              美元轉強、金價回落、crypto 跌，跨資產都在反映 liquidity tighter
              的劇本。
            </li>
          </ul>
        </Card>

        <Card title="6｜宏觀白話版">
          <DataTable headers={["項目", "數據", "解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：消費數據仍強、Fed 通脹預測大幅上修，所以 Warsh
            無理由在第一場記者會送鴿派禮物。市場今日跌，是因為之前太習慣「Fed
            最終會救市」。
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
            Crypto 採 Binance data-api 1-minute kline，時間點為 2026-06-17
            20:00:00 UTC（美股 4:00pm ET 附近）；對比基準為 2026-06-16
            同一時間。 Binance spot API 如受地區限制，官方 public data/data-api
            是較可重現口徑。
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
              先看 S&P 500 7,400 和 Nasdaq 26,000 能否守住；未重上 7,500
              前，反彈當 technical bounce 多過 risk-on 重啟。
            </li>
            <li>
              <strong>中線：</strong>
              AI/storage 主線未死，WDC、STX、AVGO、MU 有相對強勢；但 mega-cap
              platform 若繼續跌，指數會被壓住。
            </li>
            <li>
              <strong>風控：</strong>若 2Y yield 企穩 4.20%、DXY 站上 100、VIX
              破 20 或 BTC 失 $64k，要降低高 beta 曝險。
            </li>
            <li>
              <strong>一句到尾：</strong>
              今日是「Fed 重新奪回市場定價權」的一日；不要只看 Fed
              沒加息，要看市場開始買入「下一步可能加息」。
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
              指數收市：CNBC、Motley Fool、Barchart/AP 均列 Dow 51,492.55、S&P
              500 7,420.10、Nasdaq 26,021.66，本文採此一致口徑。
            </li>
            <li>
              Russell 2000、sector ETF、重點股票：使用 Yahoo chart close
              作主口徑，並以新聞來源交叉核對方向。
            </li>
            <li>
              VIX：CNBC quote 與 Yahoo chart 均為 18.44；FRED VIXCLS
              在截稿時只更新至 2026-06-16 的 16.41，因此不以 FRED 作今日主數字。
            </li>
            <li>
              債息：CNBC quote、AP/Barchart、investingLive 對 10Y 約 4.49%
              方向一致；2Y 使用 CNBC/AP/investingLive 4.21%-4.22% 區間。30Y
              只有部分來源列約 4.93%，本文以「約」處理。
            </li>
            <li>
              DXY/gold/oil：不同來源時間點差異較大，本文並列主要差異；敘事上只採一致方向：
              Fed 後美元轉強、金價受壓，油價不是今日主跌因。
            </li>
            <li>
              Crypto：直接 Binance spot API 如受地區限制，本文使用 Binance
              data-api 1m kline，精確取 2026-06-17 20:00 UTC close。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
