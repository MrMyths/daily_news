import React from "react";

const reportDate = "2026-07-08";
const publishedAt = "香港時間 2026-07-09 07:00";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Wednesday 7/8/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-15f15444d1f59c351d33df0717509183",
  },
  {
    name: "CNBC - Stock market news for July 8, 2026",
    url: "https://www.cnbc.com/2026/07/07/stock-market-today-live-updates.html",
  },
  {
    name: "TradingKey - US stocks close, July 8, 2026",
    url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262018425-us-stock-market-close-nasdaq-rise-dow-down-trump-fed-fomc-rate-tradingkey",
  },
  {
    name: "StockAnalysis - SPDR sector ETF historical data",
    url: "https://stockanalysis.com/etf/xlk/history/",
  },
  {
    name: "StockAnalysis - SOXX historical data",
    url: "https://stockanalysis.com/etf/soxx/history/",
  },
  {
    name: "CNBC - CBOE Volatility Index quote",
    url: "https://www.cnbc.com/quotes/.VIX",
  },
  {
    name: "Federal Reserve - FOMC minutes, June 16-17, 2026",
    url: "https://www.federalreserve.gov/monetarypolicy/files/fomcminutes20260617.pdf",
  },
  {
    name: "Federal Reserve - June 17, 2026 FOMC statement",
    url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260617a.htm",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "Reuters via SRN - Inflation wake-up call as oil prices rise",
    url: "https://srnnews.com/investors-get-inflation-wake-up-call-as-trump-fires-up-oil-prices/",
  },
  {
    name: "Kitco - Gold slides as Fed minutes and Hormuz oil spike lift yields",
    url: "https://www.kitco.com/news/article/2026-07-08/gold-slides-fed-minutes-hormuz-oil-spike-lift-yields-kitco-pm-report",
  },
  {
    name: "TechCrunch - SpaceXAI releases Grok 4.5",
    url: "https://techcrunch.com/2026/07/08/spacexai-releases-grok-4-5-which-elon-describes-as-an-opus-class-model/",
  },
  {
    name: "SiliconANGLE - Apple promises to buy $30B of US-made Broadcom chips",
    url: "https://siliconangle.com/2026/07/08/apple-promises-buy-30b-worth-u-s-made-chips-broadcom/",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "Dow Jones",
    "52,348.39",
    "-576.76 / -1.09%",
    "藍籌最受壓；AP/CNBC 指 Trump 稱 Iran ceasefire 已經 over 後，Dow 跌近 600 點收市。",
  ],
  [
    "S&P 500",
    "7,482.71",
    "-21.14 / -0.28%",
    "早段曾跌 1.1%，午後收窄跌幅；能源與部分 AI 反彈抵消周期股壓力。",
  ],
  [
    "Nasdaq Composite",
    "25,870.65",
    "+51.96 / +0.20%",
    "半導體反彈令 Nasdaq 逆市升，但 megacap breadth 其實分化。",
  ],
  [
    "Russell 2000",
    "2,956.39",
    "-26.10 / -0.90%",
    "小型股跟隨周期風險下跌，反映油價/利率壓力仍在。",
  ],
  [
    "VIX",
    "16.90",
    "+0.77 / +4.77%",
    "CNBC/Yahoo 4:15pm ET 口徑；波幅升但仍低於 20，未算 panic。",
  ],
];

const sectorRows = [
  [
    "Energy / XLE",
    "$55.60 / +1.76%",
    "綠燈",
    "油價急升直接利好 energy beta，是今日最清晰的通脹/地緣 hedge。",
  ],
  [
    "Technology / XLK",
    "$181.40 / +1.24%",
    "中性偏強",
    "AVGO、NVDA、AAPL 拉升 tech，但不是全面 risk-on；MSFT/GOOGL/META/AMZN 仍跌。",
  ],
  [
    "Semiconductors / SOXX",
    "$562.03 / +1.87%",
    "反彈",
    "前一日急跌後修復；TradingKey 指費半 +2.23%，30 隻成份股中 26 隻上升。",
  ],
  [
    "Consumer Staples / XLP",
    "$84.39 / -0.55%",
    "中性",
    "防守股沒有明顯受惠，資金更集中在能源與 AI 半導體反彈。",
  ],
  [
    "Utilities / XLU",
    "$45.36 / -0.74%",
    "中性偏弱",
    "10Y/30Y 抽高壓住 yield-sensitive 防守板塊。",
  ],
  [
    "Health Care / XLV",
    "$162.30 / -1.30%",
    "紅燈",
    "前一日逆市強後回吐；今日資金未明顯停泊在傳統 defensive。",
  ],
  [
    "Industrials / XLI",
    "$180.42 / -1.07%",
    "紅燈",
    "Dow 弱勢同步反映 blue-chip/cyclical 被沽，油價升反而變成本壓力。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$115.30 / -1.78%",
    "強紅",
    "油價與長息上升壓 consumer beta；TSLA -2.19% 亦拖累 sentiment。",
  ],
  [
    "Financials / XLF",
    "$54.97 / -1.93%",
    "強紅",
    "長息升未能支持銀行，市場更擔心宏觀 shock、信用和風險資產波動。",
  ],
  [
    "Materials / XLB",
    "$50.16 / -2.62%",
    "最弱",
    "美元轉強、全球增長憂慮與 risk-off 令材料股被沽。",
  ],
  [
    "Real Estate / XLRE",
    "$44.15 / -1.65%",
    "紅燈",
    "10Y 近 4.58%、30Y 近 5% 繼續壓 REITs 估值。",
  ],
  [
    "Communication Services / XLC",
    "$109.46 / -1.41%",
    "紅燈",
    "META/GOOGL 下跌，抵消 AI news flow；平台股未跟半導體同步反彈。",
  ],
];

const stockRows = [
  [
    "AVGO / AAPL",
    "AVGO +4.83% 至 $393.25；AAPL +0.88% 至 $313.39",
    "Apple 宣布與 Broadcom 簽超過 $30B 多年晶片合作，延伸至 custom AI ASIC / Baltra，成今日 tech 反彈主因。",
  ],
  [
    "NVDA / SOX / SOXX",
    "NVDA +3.65%；費半 +2.23% 至 12,574.97；SOXX +1.87%",
    "前一日 AI hardware 急跌後有 dip-buying；但仍屬高波動修復，未完全解除估值壓力。",
  ],
  [
    "SNDK / STX / WDC / MU",
    "SNDK +6.77%；STX +3.91%；WDC +3.42%；MU +1.11%",
    "Memory chain 由昨日重挫轉反彈，反映 short-covering 多過基本面突然改變。",
  ],
  [
    "MSFT / GOOGL / META / AMZN",
    "MSFT -1.41%；GOOGL -1.39%；META -2.02%；AMZN -0.96%",
    "Megacap 不同步；AI chip 有好消息，但平台/雲股仍受長息與風險胃納壓制。",
  ],
  [
    "TSLA / XLY",
    "TSLA -2.19%；XLY -1.78%",
    "油價升、長息高、消費 beta 弱，Tesla 未能跟 Nasdaq 逆市反彈。",
  ],
  [
    "SPCX / SpaceXAI",
    "SPCX -0.78%",
    "SpaceXAI 發布 Grok 4.5，TechCrunch 指定位為更快、更低成本的 Opus-class model；股價仍跟隨高估值 AI 情緒回落。",
  ],
  [
    "BABA / KC / GDS / LKNCY",
    "BABA +11.05%；KC +11.44%；GDS +7.93%；LKNCY +5.93%",
    "中概 AI/雲概念急升；TradingKey 指市場憧憬 Alibaba cloud Q2 增長及中國有限度採購 Nvidia H200。",
  ],
  [
    "CVX / COP / XLE",
    "CVX +1.13%；COP +2.10%；XLE +1.76%",
    "能源股受惠 Brent/WTI 急升，但 XOM 在 AP/Barchart quote 中約 -0.40%，顯示能源內部亦有分化。",
  ],
  [
    "Waymo / Alphabet",
    "GOOGL -1.39%",
    "Waymo 宣布四個新自動駕駛服務城市，但未能抵消大市 risk-off 與平台股回吐。",
  ],
];

const macroRows = [
  [
    "Oil / Hormuz",
    "Kitco：WTI 約 $74.93 / +6.45%，Brent 約 $78.73 / +6.18%；AP 指 Brent 升 5% 至 $78 以上",
    "Trump 稱 Iran interim agreement/ceasefire over，油價把 inflation premium 重新拉返上台面。",
  ],
  [
    "Treasury yields",
    "Kitco：2Y 4.2182%、10Y 4.5812%；FXStreet 亦指 10Y 約 4.58%；Reuters/SRN 指 2Y +5bp",
    "戰事/油價這次不是令債息跌，而是令市場重新 price higher-for-longer / hike risk。",
  ],
  [
    "DXY / 美元",
    "Kitco：DXY 101.18，為 7/2 以來高位；FXStreet 指 DXY 約 101.20",
    "美元由避險與利率重定價雙重支持，壓住金價與非美風險資產。",
  ],
  [
    "Gold",
    "Kitco：spot gold 約 $4,074.70 / -0.73%；Reuters/SRN 指約 $4,060 / -1.1%；Trading Economics 約 $4,075.89 / -0.73%",
    "正常地緣風險應利好金，但今次 oil -> yields -> dollar 的通道更強，金價反而受壓。",
  ],
  [
    "Fed minutes",
    "Fed 6/16-17 minutes：所有與會者支持維持 3.50%-3.75%；a few 指有加息理據；upside inflation risks remain elevated",
    "Warsh Fed 的第一份 minutes 顯示委員會由單邊寬鬆轉向雙向政策觀察，市場不能再當 Fed put 太近。",
  ],
  [
    "FedWatch",
    "Investing.com 7:35pm ET：7/29 hold 69.0%、+25bp 31.0%；9/16 hold 32.8%、+25bp 50.9%、+50bp 16.3%",
    "9 月累計加息機率已是主流情境；油價越高，growth multiple 越難擴張。",
  ],
  [
    "Strait of Hormuz / tankers",
    "TradingKey 引述 Rystad：Hormuz tanker transit appears virtually halted；Reuters/SRN 指市場擔心 tankers 是否願意重返 Gulf",
    "這是能源供應風險，不只是 headlines；若運輸風險持續，油價會更易高位震盪。",
  ],
  [
    "Tomorrow events",
    "7/9：Initial jobless claims forecast 218K、existing home sales forecast 4.19M；NY Fed Williams 9:00am ET、Dallas Fed Logan 1:30pm ET",
    "就業/房屋若太強會加深 hike risk；Fed speakers 會被市場用來校準 minutes 後的政策反應函數。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$62,210.00",
    "-2.55% vs 7/7 20:00 UTC",
    "Binance data-api 1m kline：2026-07-08 20:00:00 UTC close，即美股 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$1,737.83",
    "-2.91% vs 7/7 20:00 UTC",
    "ETH 跟隨 risk-off 回落，表現弱過 Nasdaq 但未見 panic crash。",
  ],
  [
    "SOLUSDT / SOL",
    "$77.36",
    "-4.95% vs 7/7 20:00 UTC",
    "SOL 對風險胃納更敏感，跌穿 $80 後短線要看 $76-$78 能否守住。",
  ],
];

const notes = [
  "美股收市分化：Dow -576.76 點至 52,348.39，S&P 500 -0.28% 至 7,482.71，但 Nasdaq 逆市 +0.20% 至 25,870.65。",
  "主線是 Iran ceasefire 被 Trump 稱為 over，油價急升；市場把它解讀成通脹風險和加息風險回來。",
  "科技內部好分化：AVGO、NVDA、AAPL 帶動半導體/tech 反彈，但 MSFT、GOOGL、META、AMZN、TSLA 都跌。",
  "板塊上 XLE +1.76%、SOXX +1.87%、XLK +1.24% 跑出；XLB、XLF、XLY、XLRE、XLC 明顯偏弱。",
  "FOMC minutes 顯示少數官員認為 6 月有加息理據；Investing Fed monitor 顯示 9 月至少 +25bp 機率約 67.2%。",
  "Crypto 用 Binance 4:00pm ET 附近價格：BTC $62,210、ETH $1,737.83、SOL $77.36，較前一日同時點全線回落。",
];

const technicalLevels = [
  [
    "Dow Jones",
    "52,300 / 52,850",
    "收 52,348.39，剛守 52,300；若反彈不能收復 52,850，藍籌仍是弱勢。",
  ],
  [
    "S&P 500",
    "7,450 / 7,500",
    "7,500 失守至 7,482.71，但跌幅收窄；短線要先重上 7,500 才算穩住。",
  ],
  [
    "Nasdaq Composite",
    "25,800 / 26,000",
    "Nasdaq 收升但仍低於 26,000；半導體反彈若持續，26,000 是第一個確認位。",
  ],
  [
    "Russell 2000",
    "2,950 / 3,000",
    "Russell 收 2,956.39，接近 2,950 支持；跌穿代表 breadth 轉差。",
  ],
  [
    "SOXX",
    "$560 / $565",
    "SOXX 收 $562.03，重上 $560 是初步止血；若守不住，昨日 selloff 未完。",
  ],
  [
    "10Y Treasury",
    "4.55% / 4.60%",
    "10Y 約 4.58%，已進入壓估值區；升穿 4.60% 對 growth 不利。",
  ],
  [
    "WTI / Brent",
    "$75 / $79",
    "WTI 近 $75、Brent 近 $79；若 Brent 企穩 $80，上周以來的通脹敘事會再升級。",
  ],
  [
    "BTC",
    "$62,000 / $63,800",
    "BTC 回到 $62.2k，若跌穿 $62k，crypto risk appetite 會進一步轉弱。",
  ],
];

const watchList = [
  "7/9 initial jobless claims：市場預期約 218K；若低過預期，會加深 Fed hike pricing。",
  "7/9 existing home sales：forecast 約 4.19M；房屋數據太強會令長息更難回落。",
  "NY Fed Williams / Dallas Fed Logan：minutes 後市場要聽 Fed 是否容忍 oil-driven inflation shock。",
  "Hormuz / Iran headlines：若 tanker transit 繼續受阻，XLE 會續強，但 broad market multiple 會受壓。",
  "AVGO/AAPL custom silicon deal：留意是否帶動 AI ASIC chain，還是只是單日 news-driven rotation。",
  "SOXX $560、Nasdaq 26,000：半導體是否由 short-covering 變成真正 leadership，要看這兩個位。",
  "DXY 101.2、10Y 4.60%、Brent $80：三者同時向上會是 growth stocks 的風控訊號。",
  "Crypto：BTC $62k、ETH $1.72k、SOL $76 是短線風險胃納防線。",
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

export default function USCloseBrief20260708() {
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
        .small { color: #64748b; font-size: 14px; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>

      <header className="hero">
        <div className="eyebrow">美股收盤懶人包｜完整版</div>
        <h1>油價同加息預期翻熱，Nasdaq 靠半導體逆市頂住</h1>
        <p className="subtitle">
          7 月 8 日美股不是單邊跌市，而是地緣通脹壓住 Dow/S&P， 但
          Apple/Broadcom deal 與半導體反彈托住 Nasdaq。重點不是「戰爭避險」，
          而是油價、債息、Fed hike pricing 同時升溫。
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
            今日結論：市場不是 panic，而是重新定價「油價升 + Warsh Fed 可能更鷹
            + 高估值科技分化」。短線可以睇半導體反彈，但風控線要放在 10Y
            4.60%、Brent $80、S&P 500 7,450。
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
              AP 指 S&P 500 早段一度跌 1.1%，但午後因 Trump
              又淡化全面戰爭風險而收窄跌幅；所以 headline 跌幅比盤中壓力細。
            </li>
            <li>
              Nasdaq 逆市升 0.20%，但 TradingKey 的 megacap breakdown
              顯示贏家集中在 AVGO/NVDA/AAPL，平台股和 Tesla 仍偏弱。
            </li>
            <li>
              Russell 2000 -0.90%，XLF/XLY/XLB/XLRE 都弱，代表 broader cyclicals
              對油價與長息更敏感。
            </li>
            <li>
              VIX 收 16.90，仍然低過
              20；市場目前是「加息/油價重定價」，未去到流動性恐慌。
            </li>
          </ul>
        </Card>

        <Card title="4｜板塊紅綠燈">
          <DataTable
            headers={["板塊 / ETF proxy", "變動", "訊號", "一句講晒"]}
            rows={sectorRows}
          />
          <p className="small">
            Sector ETF 以 StockAnalysis historical table 的 4:00pm EDT close
            作主口徑；SOXX 不是 S&P 500 sector，但保留作 AI hardware
            溫度計。Benzinga sector mover 屬早盤/即時參考，沒有混作收市主數據。
          </p>
        </Card>

        <Card title="5｜點解今日會咁走？">
          <h3>1）Iran / Hormuz 令油價重新變成通脹風險</h3>
          <ul>
            <li>
              AP/CNBC 指 Trump 在 NATO summit 稱 ceasefire
              over，油價即時抽高；Kitco 報 WTI 約 +6.45%、Brent 約 +6.18%。
            </li>
            <li>
              傳統戰爭 playbook 可能是買債避險，但今次市場更擔心 energy
              inflation，所以債息反而升。
            </li>
          </ul>
          <h3>2）FOMC minutes 令 Fed put 更遠</h3>
          <ul>
            <li>
              Fed minutes 顯示所有與會者支持 6 月按兵不動，但 a few
              認為當時已有加息理據；upside inflation risks 仍然 elevated。
            </li>
            <li>
              Investing.com 7:35pm ET 顯示 9 月 hold 只有 32.8%，+25bp
              50.9%、+50bp 16.3%；即市場已把加息當作主要風險。
            </li>
          </ul>
          <h3>3）科技不是一條線：AI ASIC 贏，平台股輸</h3>
          <ul>
            <li>
              Apple/Broadcom 超過 $30B custom silicon deal 帶動
              AVGO/AAPL/NVDA/SOXX，但 MSFT、GOOGL、META、AMZN 都跌。
            </li>
            <li>
              白話講：市場願意買「直接受惠 AI silicon capex
              的股份」，但不願無差別追所有 megacap。
            </li>
          </ul>
        </Card>

        <Card title="6｜宏觀白話版">
          <DataTable headers={["項目", "數據", "解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：今日最重要不是 Dow 跌幾多，而是市場重新相信「油價升會逼 Fed
            更硬」。如果 10Y 繼續貼 4.60%、DXY 企 101 以上，科技反彈會更挑股。
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
            Crypto 採 Binance data-api 1-minute kline，時間點為 2026-07-08
            20:00:00 UTC（美股 4:00pm ET 附近）；對比基準為 2026-07-07
            同一時間。直接 Binance spot API 如受地區限制，官方 public
            data/data-api 是較可重現口徑。
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
              Nasdaq 逆市升不是全面 bullish，先看 SOXX 能否守 $560、SPX 能否重上
              7,500；若做反彈，要避開 weakest cyclicals。
            </li>
            <li>
              <strong>中線：</strong>
              AI 主線仍有局部贏家，特別是 custom ASIC / networking / GPU
              供應鏈；但 oil-yield-Fed 三角形升溫時，估值容錯率會下降。
            </li>
            <li>
              <strong>風控：</strong>
              Brent 企 $80、10Y 升穿 4.60%、DXY 逼 102 或 VIX 升穿 18，
              都應降低高 beta 與槓桿倉位。
            </li>
            <li>
              <strong>一句到尾：</strong>
              今日是「能源通脹 shock」遇上「AI chip 局部好消息」；大市未崩，
              但輪動更快，買強不買弱比撈底更重要。
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
              指數收市：AP 與 CNBC 對 Dow 52,348.39、S&P 500 7,482.71、Nasdaq
              25,870.65、Russell 2000 2,956.39 口徑一致，本文採此為主。
            </li>
            <li>
              VIX：CNBC/Yahoo historical 顯示 16.90 / +4.77%；Investing.com
              historical 畫面顯示不同值，本文採 CNBC/Yahoo 4:15pm ET
              quote，並標明來源差異。
            </li>
            <li>
              Sector ETF：Yahoo chart API 本次回 429；本文使用 StockAnalysis
              historical table 的 Jul 8 close。若該頁 header 與 table
              短暫不一致，採歷史 table row 作收市口徑。
            </li>
            <li>
              Oil / gold / DXY：不同來源因 spot、futures、撰文時間和 4pm
              ET/settle 口徑不同而有差異；本文列 Kitco/Reuters/AP
              的區間與主方向。
            </li>
            <li>
              FedWatch：Investing.com 7:35pm ET
              與其他即時轉載有數分鐘差異；本文採 Investing.com
              時間戳較接近收市後更新的概率。
            </li>
            <li>
              Crypto：直接 Binance spot API 如受地區限制，本文使用 Binance
              data-api 1m kline，精確取 2026-07-08 20:00 UTC close。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
