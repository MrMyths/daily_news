import React from "react";

const reportDate = "2026-07-09";
const publishedAt = "香港時間 2026-07-10 07:00";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Thursday 7/9/2026",
    url: "https://apnews.com/article/wall-street-dow-nasdaq-stocks-0d013820a2ef2dacd3c28d4f23a63bb1",
  },
  {
    name: "CNBC - Stock market news for July 9, 2026",
    url: "https://www.cnbc.com/2026/07/08/stock-market-today-live-updates.html",
  },
  {
    name: "Reuters via Business Times - Nasdaq ends sharply higher; chip surge offsets Iran worries",
    url: "https://www.businesstimes.com.sg/companies-markets/capital-markets-currencies/us-stocks-nasdaq-ends-sharply-higher-chip-surge-offsets-iran-worries",
  },
  {
    name: "TradingKey - US stocks close, July 9, 2026",
    url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262020983-us-stock-close-nasdaq-rise-meta-sk-hynix-openai-micron-tradingkey",
  },
  {
    name: "Yahoo Finance chart API - index, ETF and stock closes",
    url: "https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC?range=5d&interval=1d",
  },
  {
    name: "Trading Economics - US Treasury yields, July 9, 2026",
    url: "https://tradingeconomics.com/united-states/government-bond-yield",
  },
  {
    name: "Morningstar / Dow Jones Data Talk - 10-year Treasury yield",
    url: "https://www.morningstar.com/news/dow-jones/202607097517/10-year-treasury-yield-falls-to-4539-data-talk",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "FRED - Initial Claims (ICSA)",
    url: "https://fred.stlouisfed.org/series/ICSA",
  },
  {
    name: "AP News - US home prices reach record as existing sales slow",
    url: "https://apnews.com/article/interest-rates-home-sales-923d018ff5a61b54b238838ce3a254a2",
  },
  {
    name: "Kitco / Reuters - Oil prices fall as markets weigh US-Iran strikes",
    url: "https://www.kitco.com/news/off-the-wire/2026-07-09/oil-prices-fall-markets-weigh-impact-us-strikes-iran",
  },
  {
    name: "Kitco - Gold rebounds, DXY and yields ease",
    url: "https://www.kitco.com/news/article/2026-07-09/gold-rebounds-silver-soars-easing-oil-softer-dollar-lift-metals-kitco-pm",
  },
  {
    name: "Micron / GlobeNewswire - US investment plan over $250B",
    url: "https://www.globenewswire.com/news-release/2026/07/09/3324807/14450/en/micron-accelerates-u-s-investments-pours-first-concrete-at-new-york-fab.html",
  },
  {
    name: "Reuters via 95 KQDS - Fed's Williams on energy prices",
    url: "https://95kqds.com/2026/07/09/feds-williams-doesnt-expect-sustained-surge-in-energy-prices/",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "Dow Jones",
    "52,487.41",
    "+139.02 / +0.27%",
    "藍籌收復少部分前一日跌幅；AP/CNBC 數字一致，但升幅明顯細過 Nasdaq。",
  ],
  [
    "S&P 500",
    "7,543.64",
    "+60.93 / +0.81%",
    "油價回落、債息放鬆後重上 7,500，距離 6 月初高位仍不足 1%。",
  ],
  [
    "Nasdaq Composite",
    "26,206.89",
    "+336.24 / +1.30%",
    "半導體、memory、AI infrastructure 接力拉升，是今日最清晰 leadership。",
  ],
  [
    "Russell 2000",
    "2,992.54",
    "+36.15 / +1.22%",
    "小型股跟隨 risk appetite 改善反彈，但周內仍微跌，breadth 未算全面修復。",
  ],
  [
    "VIX",
    "15.84",
    "-1.06 / -6.27%",
    "Yahoo/CNBC 4:15pm ET 口徑；波幅跌返 16 以下，市場由 panic 轉回挑股。",
  ],
];

const sectorRows = [
  [
    "Semiconductors / SOXX",
    "$581.70 / +3.50%",
    "最強",
    "SOX +3.06%，Micron $250B US investment 令 memory/AI capex 故事再度升溫。",
  ],
  [
    "Technology / XLK",
    "$185.35 / +2.18%",
    "綠燈",
    "AVGO、META、AAPL、MSFT 支撐 tech；NVDA 微跌但無阻整體 chip tape。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$116.85 / +1.34%",
    "轉強",
    "TSLA +3.17%、AMZN +1.40%，油價回落令 consumer beta 有反彈空間。",
  ],
  [
    "Financials / XLF",
    "$55.54 / +1.04%",
    "修復",
    "長息由 4.60% 附近回落但曲線仍高，銀行不是最強主線，只是跟大市修復。",
  ],
  [
    "Communication Services / XLC",
    "$110.51 / +0.96%",
    "中性偏強",
    "META +4.70% 抵消 GOOGL -0.84%，AI compute monetization 故事成為焦點。",
  ],
  [
    "Industrials / XLI",
    "$181.11 / +0.38%",
    "中性",
    "風險胃納改善但未有強動能；市場資金更集中在半導體與高 beta 科技。",
  ],
  [
    "Materials / XLB",
    "$50.26 / +0.20%",
    "中性偏弱",
    "美元回落有少少幫助，但全球增長與商品需求疑慮仍壓住材料股。",
  ],
  [
    "Real Estate / XLRE",
    "$44.23 / +0.18%",
    "偏弱",
    "10Y 雖回落但仍在 4.5% 以上，REITs 估值壓力未解除。",
  ],
  [
    "Health Care / XLV",
    "$162.17 / -0.08%",
    "中性",
    "risk-on 日子 defensive 無明顯資金流入，表現大致持平。",
  ],
  [
    "Utilities / XLU",
    "$45.13 / -0.51%",
    "紅燈",
    "長息仍高，yield-sensitive 防守板塊跑輸。",
  ],
  [
    "Energy / XLE",
    "$54.82 / -1.40%",
    "回吐",
    "WTI/Brent 回落，前一日油價 shock 的 hedge 交易降溫。",
  ],
  [
    "Consumer Staples / XLP",
    "$83.20 / -1.41%",
    "最弱",
    "PepsiCo、Costco 相關消費消息偏弱，防守消費反而被沽。",
  ],
];

const stockRows = [
  [
    "MU / memory chain",
    "MU +4.52% 至 $991.64；SNDK +7.59%；WDC +5.04%；STX +3.50%",
    "Micron 宣布把美國投資計劃提高至超過 $250B 至 2035，AI memory / HBM 需求敘事推動成條鏈上升。",
  ],
  [
    "SOX / SOXX / SMH",
    "SOX +3.06% 至 12,960；SOXX +3.50%；SMH +2.48%",
    "Reuters/TradingKey 指 chip rally 抵消 Iran worries；28/30 SOX 成份股上升，leadership 好集中。",
  ],
  [
    "AVGO / AAPL",
    "AVGO +3.20% 至 $401.11；AAPL +0.90% 至 $316.22",
    "Apple/Broadcom custom silicon 合作延續的市場解讀仍在發酵，AVGO 連續兩日成 AI ASIC 代表。",
  ],
  [
    "META",
    "META +4.70% 至 $631.48",
    "Meta 否認 AI compute overcapacity，同時市場聚焦其外租 compute / 自研 AI chip 變現可能，推動 XLC。",
  ],
  [
    "NVDA",
    "NVDA -0.66% 至 $202.78",
    "半導體大漲但 NVDA 微跌，代表資金更偏向 memory、ASIC、optical communication，而非單一 GPU beta。",
  ],
  [
    "MSFT / AMZN / GOOGL",
    "MSFT +0.27%；AMZN +1.40%；GOOGL -0.84%",
    "平台股分化；AI 故事仍有支持，但廣告/雲平台估值未同步爆上。",
  ],
  [
    "TSLA / XLY",
    "TSLA +3.17%；XLY +1.34%",
    "油價回落、VIX 下行令高 beta 消費反彈；但基本面催化未如半導體清晰。",
  ],
  [
    "PEP / COST",
    "PEP -3.26%；COST -4.21%",
    "PepsiCo 北美食品銷售弱、Costco 6 月 same-store sales 放慢，市場對高估值防守消費要求好高。",
  ],
  [
    "XOM / CVX / XLE",
    "XOM -2.60%；CVX -1.09%；XLE -1.40%",
    "油價由昨日高位回落，能源股跟住回吐；供應風險未完，但即日交易由 oil hedge 轉向 tech rebound。",
  ],
  [
    "BABA / 中概 AI",
    "BABA +1.98% 至 $111.14",
    "中概 AI/雲情緒延續，但今日美股主菜仍是美國半導體與 AI infrastructure。",
  ],
];

const macroRows = [
  [
    "Oil / Hormuz",
    "Reuters settle：Brent $76.30 / -2.2%，WTI $72.08 / -2.0%；Kitco PM 指 WTI 約 $71、Brent 約 $75.50",
    "前一日 oil shock 部分回吐，市場覺得 Hormuz 仍有風險但未變成即時封鎖。",
  ],
  [
    "Treasury yields",
    "Trading Economics：2Y 約 4.17%-4.19%，10Y 約 4.56%，30Y 約 5.06%-5.07%；Morningstar 10Y close 4.539%",
    "債息由 4.60% 附近回落，幫 growth multiple 止血；但 30Y 仍在 5% 以上，壓力未解除。",
  ],
  [
    "DXY / 美元",
    "Kitco PM：DXY 跌返 101 下方、約 100.80；Yahoo DX-Y.NYB 7/9 close 100.94",
    "美元轉弱同債息回落同步，令黃金和科技估值都有喘息空間。",
  ],
  [
    "Gold",
    "Kitco PM：spot gold 約 $4,120.80 / +1.13%，session range $4,053.60-$4,134.90",
    "油價回落減輕通脹衝擊、美元轉弱，金價由前一日 selloff 反彈。",
  ],
  [
    "Jobless claims",
    "FRED / AP：截至 7/4 初領失業救濟 215K，低過 FactSet 220K；四周均值 218,750",
    "裁員仍低，支持 soft-landing；但太強的勞動市場亦令 Fed 不急於轉鴿。",
  ],
  [
    "Existing home sales",
    "AP/NAR：6 月 existing-home sales 4.09M，按月 -2.4%，低過約 4.21M 預期；median price $440,600 創新高",
    "房屋成交弱但價格高，對消費和通脹都是混合訊號。",
  ],
  [
    "FedWatch",
    "Investing.com 7:55am EDT：7/29 hold 70.1%、+25bp 29.9%；9/16 hold 34.3%、+25bp 50.4%、+50bp 15.3%",
    "市場仍把 9 月加息視為主流風險，只是油價回落令短線壓力少一截。",
  ],
  [
    "Fed speakers",
    "Reuters：NY Fed Williams 指不預期能源價格全年持續上升，並強調 7/29 決策仍未開始分析",
    "這句說話幫市場降溫：Fed 仍 data dependent，但未必因一日油價 spike 立即轉向。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$63,254.49",
    "+1.68% vs 7/8 20:00 UTC",
    "Binance data-api 1m kline：2026-07-09 20:00:00 UTC close，即美股 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$1,748.84",
    "+0.63% vs 7/8 20:00 UTC",
    "ETH 跟隨 risk-on 輕微反彈，但力度弱過美股 semis。",
  ],
  [
    "SOLUSDT / SOL",
    "$78.14",
    "+1.01% vs 7/8 20:00 UTC",
    "SOL 重上 $78，但仍未收復前一日跌幅；短線仍看 $77-$80 區間。",
  ],
];

const notes = [
  "美股全線反彈：Dow +139.02 至 52,487.41，S&P 500 +0.81% 至 7,543.64，Nasdaq +1.30% 至 26,206.89。",
  "主線由昨日「油價 + 加息風險」轉成今日「油價回落 + 債息放鬆 + 半導體領漲」。",
  "SOX +3.06%、SOXX +3.50%、MU +4.52%，Micron 超過 $250B 美國投資計劃令 AI memory/capex 故事重燃。",
  "VIX 跌至 15.84，市場不是無風險，而是暫時接受 Hormuz 未即時封鎖、Fed 仍然 data dependent。",
  "防守消費跑輸：XLP -1.41%，PEP/COST 跌，顯示資金不是避險，而是由 defensive 轉返 growth。",
  "Crypto 採 Binance 4:00pm ET 附近價格：BTC $63,254.49、ETH $1,748.84、SOL $78.14，較前一日同時點全線反彈。",
];

const technicalLevels = [
  [
    "Dow Jones",
    "52,300 / 52,850",
    "收 52,487.41，守住昨日低位後反彈；若未能重上 52,850，藍籌仍落後。",
  ],
  [
    "S&P 500",
    "7,500 / 7,550",
    "重上 7,500 是好事；7,550 附近若企穩，才算修復昨日 oil shock。",
  ],
  [
    "Nasdaq Composite",
    "26,000 / 26,300",
    "收 26,206.89，重新企上 26,000；下一關看 26,300 附近供應。",
  ],
  [
    "Russell 2000",
    "2,950 / 3,000",
    "Russell 收 2,992.54，接近 3,000；突破先代表 breadth 真正擴散。",
  ],
  [
    "SOXX",
    "$580 / $595",
    "SOXX 收 $581.70，剛重上 $580；若升穿 $595，chip rebound 會更有確認。",
  ],
  [
    "10Y Treasury",
    "4.50% / 4.60%",
    "10Y 約 4.54%-4.56%；守在 4.60% 下方對 growth 有利，跌穿 4.50% 更能支持估值。",
  ],
  [
    "WTI / Brent",
    "$72 / $76",
    "WTI settle $72.08、Brent $76.30；若 Brent 重新企 $80，通脹交易會即時返嚟。",
  ],
  [
    "BTC",
    "$62,000 / $64,000",
    "BTC 4pm ET 約 $63.25k；重上 $64k 才算由守位變成反攻。",
  ],
];

const watchList = [
  "7/10 及下週 CPI 前：10Y 4.50%-4.60%、DXY 101、Brent $80 是 growth stocks 風控三件事。",
  "SOXX $580-$595：今日 leadership 好清楚，但要看是否由 news-driven 變成真正 trend。",
  "Micron / memory chain：MU、WDC、STX、SNDK 是否延續，會影響 AI capex 交易廣度。",
  "Warsh / Williams / Fed speakers：市場要判斷油價回落是否足以壓低 9 月加息機率。",
  "Existing-home sales 與 jobless claims：數據組合是「就業穩、房屋慢、價格高」，下週 CPI 會決定解讀方向。",
  "Consumer defensives：PEP、COST 走弱，留意是否只是估值回吐，還是消費放慢訊號擴散。",
  "Earnings season：半導體和大型科技估值已反彈，之後 earnings guidance 要追得上先得。",
  "Crypto：BTC $62k、ETH $1.72k、SOL $77 是短線風險胃納防線。",
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

export default function USCloseBrief20260709() {
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
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 52%, #0f766e 100%);
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
        h2 { font-size: 25px; margin: 0 0 16px; color: #0f172a; }
        h3 { font-size: 19px; margin: 18px 0 8px; color: #0f766e; }
        ul { padding-left: 22px; margin: 10px 0; }
        li { margin: 8px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 15px; }
        th {
          background: #ecfeff;
          color: #155e75;
          text-align: left;
          padding: 10px;
          border-bottom: 1px solid #a5f3fc;
        }
        td { padding: 11px 10px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
        .callout {
          border-left: 5px solid #0f766e;
          background: #f0fdfa;
          padding: 14px 16px;
          border-radius: 14px;
          margin: 14px 0;
        }
        .small { color: #64748b; font-size: 14px; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>

      <header className="hero">
        <div className="eyebrow">美股收盤懶人包｜完整版</div>
        <h1>油價回落、債息放鬆，半導體帶 Nasdaq 反攻</h1>
        <p className="subtitle">
          7 月 9 日美股由前一日地緣通脹 shock 轉為修復市：油價回吐、10Y
          由高位回落，半導體與 AI memory chain
          成為最強資金流。重點不是風險消失， 而是市場暫時相信 Hormuz
          未即時封鎖、Fed 仍按數據行事。
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
            今日結論：反彈質素比昨日好，因為 VIX、油價、10Y 同時降溫；但主升浪仍
            好集中在半導體。短線可以跟強勢，但風控線要放在 Brent $80、10Y
            4.60%、SOXX $580。
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
              AP 指油價回吐令債息放鬆，市場情緒較昨日平靜；CNBC 亦指 semis jump
              與 oil prices fall 是日內主線。
            </li>
            <li>
              Nasdaq +1.30% 明顯跑贏 Dow +0.27%，代表資金仍然偏好 AI /
              semiconductor beta，不是平均買晒所有板塊。
            </li>
            <li>
              Russell 2000 +1.22% 接近 3,000，breadth 有改善；但 XLP、XLE、XLU
              跑輸，顯示資金由 defensives/energy 轉走。
            </li>
            <li>
              VIX 收 15.84，低過 16；地緣風險仍在，但即日市場沒有用 crash
              premium 定價。
            </li>
          </ul>
        </Card>

        <Card title="4｜板塊紅綠燈">
          <DataTable
            headers={["板塊 / ETF proxy", "變動", "訊號", "一句講晒"]}
            rows={sectorRows}
          />
          <p className="small">
            Sector ETF 以 Yahoo Finance chart API 4:00pm ET close 交叉驗證；SOXX
            不是 S&P 500 sector，但保留作 AI hardware 溫度計。若新聞源採初步
            index quote，本文以 AP/CNBC 正式收市數字為主。
          </p>
        </Card>

        <Card title="5｜點解今日會咁走？">
          <h3>1）油價回吐，昨日通脹交易降溫</h3>
          <ul>
            <li>
              Reuters/Kitco 指 WTI、Brent 由昨日高位回落，市場評估 U.S.-Iran
              風險仍高，但 Hormuz 未變成 confirmed chokepoint closure。
            </li>
            <li>
              油價跌令 10Y 由接近 4.60% 回落，growth stocks 的估值壓力即時舒緩。
            </li>
          </ul>
          <h3>2）半導體有實質 news flow 支持</h3>
          <ul>
            <li>
              Micron 宣布美國投資計劃提高至超過 $250B 至 2035，配合 New York fab
              concrete milestone，市場重新買 AI memory / domestic chip capex。
            </li>
            <li>
              SOX +3.06%，SOXX +3.50%，不是單靠 NVDA；今日更像 memory、ASIC、
              optical、AI infrastructure 輪動。
            </li>
          </ul>
          <h3>3）Fed 風險未走，但語氣稍為降溫</h3>
          <ul>
            <li>
              Investing Fed monitor 仍顯示 9 月加息是主要風險，但 Williams
              指不預期能源價格全年持續上升，令市場不用把昨日油價 spike
              直接外推。
            </li>
            <li>
              白話講：Fed put 未返嚟，但今日亦不是「Fed 被油價逼到即刻加息」。
            </li>
          </ul>
        </Card>

        <Card title="6｜宏觀白話版">
          <DataTable headers={["項目", "數據", "解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：今日 macro 是「三個放鬆」：油價放鬆、債息放鬆、美元放鬆。
            這足以支持科技反彈，但 FedWatch 仍未轉鴿，下週 CPI 仍是關鍵。
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
            Crypto 採 Binance data-api 1-minute kline，時間點為 2026-07-09
            20:00:00 UTC（美股 4:00pm ET 附近）；對比基準為 2026-07-08
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
              可跟強勢 tech / semis，但不宜追弱反彈；SOXX 守 $580、Nasdaq 守
              26,000 是最直接風控。
            </li>
            <li>
              <strong>中線：</strong>
              AI 主線仍是市場核心，今日由 memory / ASIC / infrastructure
              擴散；若 earnings guidance 追得上，估值壓力可暫時被消化。
            </li>
            <li>
              <strong>風控：</strong>
              Brent 重新企 $80、10Y 升穿 4.60%、DXY 重上 101.5 或 VIX 升穿
              18，都要降低高 beta / 槓桿倉位。
            </li>
            <li>
              <strong>一句到尾：</strong>
              今日是「macro 壓力退半步 + chip leadership 行前一步」；市底未壞，
              但仍是買強不買弱、等 CPI 確認。
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
              指數收市：AP 與 CNBC 對 Dow 52,487.41、S&P 500 7,543.64、Nasdaq
              26,206.89、Russell 2000 2,992.54 口徑一致，本文採此為主。
            </li>
            <li>
              ETF / 個股：本文用 Yahoo Finance chart API 4:00pm ET close
              作可重現交叉驗證；新聞源若是即時/初步 quote，可能與正式 close
              有輕微差異。
            </li>
            <li>
              Treasury yields：Morningstar/Tradeweb 10Y close 4.539%，Trading
              Economics 顯示 10Y 約
              4.56%；因來源和時間戳不同，本文列區間並採「回落」方向。
            </li>
            <li>
              Oil / gold / DXY：Reuters settle、Kitco late-afternoon spot、Yahoo
              futures close 時間不同；本文分別標示 settle 與 PM/spot 口徑。
            </li>
            <li>
              FedWatch：Investing.com 截圖時間為 7:55am EDT，屬盤中/早段概率；
              收市後概率可能隨 futures 變動。
            </li>
            <li>
              Crypto：直接 Binance spot API 如受地區限制，本文使用 Binance
              data-api 1m kline，精確取 2026-07-09 20:00 UTC close。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
