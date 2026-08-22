import React from "react";

const reportWeek = "2026-08-17 至 2026-08-21";
const reportDate = "2026-08-22";
const publishedAt =
  "香港時間 2026-08-22 09:00（週末自動生成；數據截至美股 8/21 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market today live updates, Aug. 21, 2026",
    url: "https://www.cnbc.com/2026/08/20/stock-market-today-live-updates.html",
  },
  {
    name: "Reuters via MarketScreener - Wall St rises in broad rebound; yields push markets towards weekly declines",
    url: "https://in.marketscreener.com/news/wall-st-rises-in-broad-rebound-yields-push-markets-towards-weekly-declines-ce7858dadd8af227",
  },
  {
    name: "CNBC - Stock market news for Aug. 20, 2026",
    url: "https://www.cnbc.com/2026/08/19/stock-market-today-live-updates.html",
  },
  {
    name: "CNBC - Bessent's bond gambit aimed at calming markets is instead stirring inflation worries",
    url: "https://www.cnbc.com/2026/08/21/bessents-bond-gambit-aimed-at-calming-markets-is-instead-stirring-inflation-worries-.html",
  },
  {
    name: "Reuters via MarketScreener - Fed policymakers' inflation concerns increased at July meeting",
    url: "https://ca.marketscreener.com/news/fed-policymakers-inflation-concerns-increased-at-july-meeting-minutes-show-ce7859d2dc88f625",
  },
  {
    name: "FRED - Unemployment Claims weekly release table",
    url: "https://fred.stlouisfed.org/release/tables?eid=258888&rid=180",
  },
  {
    name: "The Conference Board / PRNewswire - LEI for the U.S. edged up in July",
    url: "https://www.prnewswire.com/news-releases/the-conference-board-leading-economic-index-lei-for-the-us-edged-up-in-july-302856410.html",
  },
  {
    name: "CNBC - CPI inflation report July 2026",
    url: "https://www.cnbc.com/2026/08/12/cpi-inflation-report-july-2026.html",
  },
  {
    name: "CNBC - Wholesale prices were flat in July",
    url: "https://www.cnbc.com/2026/08/13/wholesale-prices-were-flat-in-july-below-expectations-for-0point2percent-increase.html",
  },
  {
    name: "CNBC - Walmart Q2 FY2027 earnings",
    url: "https://www.cnbc.com/2026/08/20/walmart-wmt-q2-2027-earnings.html",
  },
  {
    name: "Reuters - Target lifts annual forecasts again",
    url: "https://www.reuters.com/business/retail-consumer/target-lifts-annual-forecasts-again-fiddelkes-turnaround-takes-root-2026-08-19/",
  },
  {
    name: "Home Depot Investor Relations - Q2 fiscal 2026 results",
    url: "https://ir.homedepot.com/news-releases/2026/08-18-2026-110040463",
  },
  {
    name: "Reuters via MarketScreener - Nvidia earnings, Jackson Hole to test pillars of stock rally",
    url: "https://www.marketscreener.com/news/nvidia-earnings-jackson-hole-to-test-pillars-of-stock-rally-ce7858dad88bf024",
  },
  {
    name: "Reuters - Global equity fund inflows hit three-week high before late selloff",
    url: "https://www.reuters.com/world/china/global-markets-flows-graphic-2026-08-21/",
  },
  {
    name: "CNBC - Gold prices rise as U.S. debt worries hit markets",
    url: "https://www.cnbc.com/2026/08/21/gold-prices-us-debt-dollar.html",
  },
  {
    name: "Yahoo Finance chart data - market, ETF and stock daily closes",
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
  "截至 8/21 美股收市，S&P 500 收 7,674.37，週五反彈 0.43%，但全週仍跌 1.43%，結束三連升；Nasdaq 全週 -2.05%，Dow -0.85%。",
  "本週不是單日崩盤，而是高估值市遇上長債息再上：10Y 約 4.738%、30Y 約 5.276%，CNBC 指 Treasury buyback 只能短暫壓低長端 yields。",
  "週四是風險轉折點：Walmart 同店銷售放慢、油價上衝、債息反彈，令 Dow 單日跌約 704 點；週五醫療/材料帶動修復，但未收復全週跌幅。",
  "板塊分化好清楚：XLV +4.33%、XLE +2.79%、XLB +1.90% 領先；SOXX -5.52%、XLK -3.53%、XLI -3.36%、XLU -3.48% 受壓。",
  "資金流在週中仍未撤：LSEG Lipper 指截至 8/19 global equity funds 流入 $22.01bn、U.S. equity funds +$11.72bn，但這份數據未完全反映週四急跌。",
  "Crypto 用 Binance Vision 2026-08-21 20:00 UTC 1m close：BTC $76,998、ETH $2,412.83、SOL $90.75；較 8/14 同一時間分別 +22.29%、+28.30%、+21.02%。",
];

const indexRows = [
  [
    "DJIA",
    "53,277.01",
    "週五 +517.80 / +0.98%；全週 -455.40 / -0.85%",
    "週五靠 healthcare 等反彈，但仍連續第二週下跌；Walmart 拖累消費信心後，藍籌 beta 未完全修復。",
  ],
  [
    "S&P 500",
    "7,674.37",
    "週五 +33.21 / +0.43%；全週 -111.39 / -1.43%",
    "三連升終止；仍離 8/13 收市高位 7,798.99 約 1.6%，屬高位回調而非結構性轉熊。",
  ],
  [
    "Nasdaq Composite",
    "26,180.46",
    "週五 +113.29 / +0.43%；全週 -548.71 / -2.05%",
    "AI / semis 對長債息最敏感，NVDA 財報前資金先降風險。",
  ],
  [
    "Russell 2000",
    "3,017.87",
    "週五約 +25.44 / +0.85%；全週 -50.55 / -1.65%",
    "小型股未能逃過 yields 壓力；比大型股跌得多，顯示廣度轉弱。",
  ],
  [
    "VIX",
    "15.13",
    "週五 -0.88；全週 +0.88 / +6.18%",
    "波幅由極低位回升但仍未恐慌；低 VIX 代表保護成本不算貴，適合做風控。",
  ],
];

const whyMarketMoved = [
  [
    "長債息重上壓力區",
    "CNBC 指 10Y 週五早段約 4.73%、30Y 約 5.27%；Yahoo close 顯示 10Y 4.738%、30Y 5.276%。Treasury 擴大 long-dated buybacks 只令 yields 短暫回落，之後市場重新擔心供給、赤字與通脹。",
  ],
  [
    "油價把通脹尾巴拉長",
    "WTI 週收 $86.64（+5.15%）、Brent $93.87（+6.04%）。Iran / sanctions / Hormuz headlines 令油價強勢，市場擔心能源重新推高 CPI/PPI。",
  ],
  [
    "Walmart 敲響消費警鐘",
    "CNBC / Reuters：WMT 雖 beat sales 並上調全年 outlook，但 U.S. comparable sales +2.6% 低於預期、為六年最慢；股價全週 -9.82%，令市場重估低收入消費壓力。",
  ],
  [
    "Fed minutes 仍有 hawkish tail",
    "Reuters / CNBC：7 月 FOMC 9-3 hold，但 many participants 認為若通脹不降，可能仍需加息；這令 September hold 不是無風險共識。",
  ],
  [
    "AI trade 等 NVDA 驗證",
    "Reuters 指 Nvidia 8/26 財報與 Jackson Hole 是兩大 rally pillar test。SOXX 全週 -5.52%、NVDA -4.64%，反映高估值資金先行降倉。",
  ],
];

const topNews = [
  [
    "1",
    "美股週五反彈但全週仍跌",
    "CNBC：S&P 500 週五 +0.43%，Nasdaq +0.43%，Dow +517.80；但 S&P / Nasdaq 全週分別 -1.4% / -2.0%，三週連升斷纜。",
  ],
  [
    "2",
    "Treasury buyback 失去魔法",
    "Bessent 擴大 10-30 年期債券 buybacks 至每次至少 $4bn，初期壓低 yields，但週四/週五 yields 又上，市場認為只是買時間。",
  ],
  [
    "3",
    "Walmart 跌近一成，消費故事被重新審判",
    "WMT U.S. comp sales +2.6% missed，管理層提到高汽油價壓力；Target 同週 guidance 上調，零售股分化加深。",
  ],
  [
    "4",
    "FOMC minutes 顯示加息派未退場",
    "7 月會議三名官員要求即時 +25bp，many participants 認為如 inflation 不回落仍要收緊；市場 September hold 機率約 64%-71%，但不是鐵板一塊。",
  ],
  [
    "5",
    "下週雙重考：Nvidia + Jackson Hole",
    "NVDA 8/26 after close，Jackson Hole 8/27-29；Reuters 指兩者會同時測試 AI capex 與利率敘事。",
  ],
];

const heatMapRows = [
  [
    "Health Care / XLV",
    "+4.33%",
    "強綠",
    "Merck、JNJ 等防守/藍籌醫療帶動 Dow 週五反彈；低 beta + earnings visibility 重新受歡迎。",
  ],
  [
    "Energy / XLE / Oil",
    "XLE +2.79%；WTI +5.15%、Brent +6.04%",
    "綠燈",
    "油價是本週最強宏觀價格之一；利好能源，但同時會推高通脹與消費壓力。",
  ],
  [
    "Materials / XLB",
    "+1.90%",
    "綠燈",
    "週五材料表現突出，受商品與美元偏弱支持；但 cyclical demand 仍要看 LEI / GDP。",
  ],
  [
    "Technology / XLK",
    "-3.53%",
    "紅燈",
    "長債息升 + NVDA 前風險控制，令大型科技估值受壓。",
  ],
  [
    "Semiconductors / SOXX",
    "-5.52%",
    "深紅",
    "AI trade 沒有完結，但短線籌碼太擠；NVDA 財報前 semis 容易大上大落。",
  ],
  [
    "Industrials / XLI",
    "-3.36%",
    "紅燈",
    "長端 borrowing cost 與全球增長疑慮壓工業股，未能享受週五反彈。",
  ],
  [
    "Utilities / XLU",
    "-3.48%",
    "紅燈",
    "債息急升令收益型 defensive 受估值壓力；不是避險一定贏的市況。",
  ],
  [
    "Crypto beta",
    "BTC +22.29%、ETH +28.30%、SOL +21.02%",
    "強綠",
    "Crypto 今週明顯跑贏美股，反映美元弱與流動性輪動；但升幅太急，要睇 BTC 能否守 $75k。",
  ],
];

const flowRows = [
  [
    "Global equity funds",
    "LSEG Lipper：截至 8/19 一週 global equity funds +$22.01bn，三週最高",
    "週中資金仍相信 earnings story；但數據截止在週四急跌前，要小心滯後。",
  ],
  [
    "Regional funds",
    "U.S. equity funds +$11.72bn、Europe +$4.70bn、Asia +$2.96bn",
    "美股仍是主要吸金地；若下週 NVDA / Jackson Hole 出事，這些 flow 可能變成反向壓力。",
  ],
  [
    "Bond funds",
    "同一 LSEG 口徑：bond funds +$15.42bn，連續第 20 週流入",
    "不是全面 risk-on；投資者同時買股和債，反映配置仍在做 barbell。",
  ],
  [
    "Sector flows",
    "Technology funds +$1.55bn；financial sector funds -$1.59bn",
    "AI 仍有資金入，但價格表現轉弱，代表 flow 與 price 出現短線背馳。",
  ],
  [
    "Market breadth",
    "週五反彈較 broad，但全週 XLV/XLE/XLB 領先、XLK/SOXX/XLI 落後",
    "廣度由上週新高市轉為防守/商品輪動，短線要降低 beta。",
  ],
  [
    "Crypto liquidity",
    "Binance Vision：BTC $76,998、ETH $2,412.83、SOL $90.75",
    "Crypto 與美元弱同步走強；若股市下週再跌而 crypto 守得住，會是風險胃納未死的訊號。",
  ],
];

const macroRows = [
  [
    "CPI / PPI",
    "July CPI +0.1% m/m、+3.4% y/y；core +0.2% m/m、+2.5% y/y。PPI 0.0% m/m、+4.7% y/y；core PPI +0.2% m/m、+4.2% y/y。",
    "通脹數據本身偏溫和，支持暫停加息；但油價已在數據後急升，市場擔心 August 數字反彈。",
  ],
  [
    "Fed minutes / FedWatch",
    "7 月 FOMC 9-3 hold；many participants 指若 inflation 不降仍需 tightening。CME 口徑 September hold 約 63.8%，prediction markets 約 69%-71%。",
    "市場仍偏向 9 月不加息，但 hawkish tail 明顯存在；Jackson Hole 的語氣會影響長端 yields。",
  ],
  [
    "Treasury yields",
    "Yahoo close：5Y 4.424%、10Y 4.738%、30Y 5.276%；CNBC 早段 10Y 約 4.73%、30Y 約 5.27%。",
    "10Y/30Y 均在 growth stocks 不舒服的區域；如果 10Y 持續高於 4.75%，Nasdaq 會較難重上新高。",
  ],
  [
    "Labor / LEI",
    "FRED：initial claims 206k（前值 212k），continuing claims 1.799mn；Conference Board LEI July +0.2% 至 99.5。",
    "勞動市場未爆雷，LEI 亦有改善，所以不是 recession trade；問題是債息和油價會否拖慢下一輪需求。",
  ],
  [
    "Oil",
    "WTI $86.64（全週 +5.15%）、Brent $93.87（全週 +6.04%）。",
    "油價升對 XLE 有利，但對 Fed、消費與 margins 不友善；Brent 近 $94 已是風險資產的壓力來源。",
  ],
  [
    "Gold / Dollar",
    "Gold futures $4,661.60（全週 +6.42%）；DXY 約 98.84（全週 -0.83%）。",
    "弱美元與債務/通脹避險同時推金價；金與油一齊升，代表市場買的不只是 soft landing。",
  ],
];

const stockRows = [
  [
    "NVDA / AI bellwether",
    "8/21 收 $214.72，全週 -4.64%；Reuters 指 8/26 財報將測試 AI rally pillars。",
    "下週最重要單一股票。若 Q3 guide 低於 market whisper，SOXX / QQQ 壓力會加大；若超預期，可能快速修復風險胃納。",
  ],
  [
    "SOXX / Semis",
    "SOXX 收 $520.05，全週 -5.52%。",
    "半導體是本週最弱板塊之一；估值、yields、NVDA 事件風險同時壓住。",
  ],
  [
    "WMT / Walmart",
    "CNBC：Q2 revenue $187.94bn beat、全年 sales/EPS outlook 上調；但 U.S. comp sales +2.6% missed，股價全週 -9.82%。",
    "投資者不是不信 WMT，而是擔心高油價下消費 trade-down 也開始放慢。",
  ],
  [
    "TGT / Target",
    "Reuters / 公司：Q2 net sales $26.54bn、EPS $4.11；full-year sales growth guide 約 5%；股價全週 +7.09%。",
    "Target 轉型暫時交到功課，與 WMT 形成分化；零售不再可以一籃子看。",
  ],
  [
    "HD / LOW",
    "Home Depot Q2 sales $47.9bn、adjusted EPS $4.92；HD 全週 -0.96%、LOW -1.09%。",
    "維修需求穩，但 housing / fuel / input cost 限制重估空間；屬中性偏防守。",
  ],
  [
    "PANW / Cybersecurity",
    "PANW 全週 -6.87%；公司 9/1 才公布 FQ4 / FY2026。",
    "高估值 software 在 yields 高企時被先沽；AI security 故事未變，但要等業績驗證。",
  ],
  [
    "INTU / MRVL",
    "INTU +6.17%、MRVL +6.77% 跑贏科技大盤。",
    "科技內部不是全線撤退；有個別 earnings / AI networking / quality software 仍有資金承接。",
  ],
  [
    "BTC / ETH / SOL",
    "Binance Vision 4pm ET 附近：BTC $76,998、ETH $2,412.83、SOL $90.75。",
    "Crypto 今週相當強，但升幅來得急；下週要用 BTC $75k / ETH $2,350 / SOL $88 作初步風控線。",
  ],
];

const earningsEvents = [
  "8/26：Nvidia fiscal Q2 FY2027 after close。市場看 revenue / data center / Q3 guide / China assumption / gross margin；這份財報會直接決定 SOXX 和 AI capex trade。",
  "8/27-8/29：Jackson Hole symposium；Fed Chair Kevin Warsh 8/28 keynote。市場未必期待明確 forward guidance，但會聽他如何處理 inflation、Treasury yields 與政策框架。",
  "8/28：July PCE / GDP 相關數據在 Jackson Hole 前後公布，會影響 September FOMC hold/hike pricing。",
  "9/1：Palo Alto Networks FQ4 / FY2026 earnings；本週 PANW 已被估值和 macro 壓低，下份業績要證明 AI security / CyberArk integration。",
  "Macro：留意 10Y 是否企穩 4.75% 上方、Brent 是否突破 $95，以及 DXY 弱勢會否繼續推高 gold / crypto。",
  "Crypto：留意 BTC $75k、ETH $2,350、SOL $88；若 Nasdaq 弱但 crypto 守住，代表 liquidity rotation 未完。",
];

const technicalRows = [
  [
    "S&P 500",
    "支持 7,640 / 7,600 / 7,500；阻力 7,700 / 7,750 / 7,800",
    "週四低位 7,639 附近已成第一支持；重上 7,700 才算修復短線 momentum。",
  ],
  [
    "Nasdaq Composite",
    "支持 26,000 / 25,800；阻力 26,300 / 26,700",
    "26,000 是心理位；NVDA 前如守不到，資金會先減 high beta semis。",
  ],
  [
    "Dow",
    "支持 52,750 / 52,500；阻力 53,500 / 54,000",
    "週五強反彈但仍未重返上週收市；靠 healthcare 可托住，但要金融/工業跟上。",
  ],
  [
    "Russell 2000",
    "支持 3,000 / 2,950；阻力 3,050 / 3,070",
    "跌穿 3,000 會代表廣度惡化；守住則仍是高位區間。",
  ],
  [
    "VIX",
    "15 / 17 / 20",
    "15 附近不算恐慌；若升穿 17，代表市場開始為 NVDA / Jackson Hole 買保護。",
  ],
  [
    "10Y Treasury",
    "4.65% / 4.75% / 4.85%",
    "4.75% 是 equity multiple 的壓力線；若上破 4.85%，科技反彈難持久。",
  ],
  [
    "WTI / Brent",
    "WTI $85 / $88 / $90；Brent $92 / $95 / $100",
    "油價越升越不是利好，會由能源股利好變成通脹/消費壓力。",
  ],
  [
    "BTC",
    "$75,000 / $72,000；阻力 $78,000 / $80,000",
    "BTC 4pm ET 附近 $76,998；若企穩 $75k，crypto beta 可繼續跑贏。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$76,998.00",
    "+22.29% vs 2026-08-14 20:00 UTC",
    "Binance Vision spot 1m kline：2026-08-21 20:00:00 UTC close，即美股收市 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$2,412.83",
    "+28.30% vs 2026-08-14 20:00 UTC",
    "ETH 跑贏 BTC，反映 risk-on liquidity 對 smart-contract beta 更進取。",
  ],
  [
    "SOLUSDT / SOL",
    "$90.75",
    "+21.02% vs 2026-08-14 20:00 UTC",
    "SOL 同樣強勢，但略跑輸 ETH；短線守 $88 / $90 會影響 momentum。",
  ],
];

const watchPlan = [
  [
    "Base case",
    "高位回調後等 NVDA / Jackson Hole 確認",
    "S&P 500 守 7,600、VIX < 17、10Y 不有效升穿 4.75%；保留 quality growth，但降低 semis 槓桿。",
  ],
  [
    "Bull case",
    "NVDA guide 強 + Warsh 不 hawkish + yields 回落",
    "Nasdaq 重上 26,700、SOXX 收復 $540、10Y 回到 4.65% 下；可逐步加回 QQQ / SOXX / quality AI。",
  ],
  [
    "Bear case",
    "油價/債息繼續升，AI 財報不夠驚喜",
    "10Y > 4.85%、Brent > $95、VIX > 17、S&P 500 跌穿 7,600；先減 high beta semis、small caps、consumer discretionary。",
  ],
  [
    "觀察清單",
    "SPY / QQQ / RSP / IWM / XLK / SOXX / XLV / XLE / XLB / NVDA / WMT / TGT / HD / LOW / PANW / INTU / MRVL / BTC / ETH / SOL",
    "分別代表大盤、廣度、科技/半導體、防守、能源/材料、零售消費、AI/security earnings 和 crypto liquidity。",
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

export default function USWeeklyBrief20260822() {
  return (
    <main className="page">
      <style>{`
        .page {
          width: 1120px;
          min-height: 1580px;
          margin: 0 auto;
          padding: 48px;
          background: #f5f8fb;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.55;
        }
        .hero {
          background: linear-gradient(135deg, #0f172a 0%, #1d4ed8 48%, #047857 100%);
          color: white;
          border-radius: 28px;
          padding: 42px;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
        }
        .eyebrow { font-size: 16px; opacity: 0.86; letter-spacing: 0.08em; }
        h1 { font-size: 48px; margin: 10px 0 14px; line-height: 1.12; }
        .subtitle { font-size: 22px; max-width: 930px; opacity: 0.94; }
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
          color: #047857;
          text-align: left;
          padding: 10px;
          border-bottom: 1px solid #a7f3d0;
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
          border-left-color: #d97706;
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
        <h1>高位回調：債息同油價踩住估值，NVDA 與 Jackson Hole 成下週大考</h1>
        <p className="subtitle">
          今週 S&amp;P 500、Nasdaq
          結束三週連升，週五雖然反彈，但全週仍被長債息、油價和 Walmart
          消費警號壓住。市場不是全面 risk-off：醫療、能源、材料和 crypto
          有資金追；但 semis、科技和工業先行降溫。 下週關鍵係 Nvidia
          財報能否證明 AI capex 仍然夠硬，以及 Jackson Hole 會否令 10Y
          繼續企高。
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
            <span>S&amp;P 500 weekly</span>
            <strong>-1.43%</strong>
          </div>
          <div>
            <span>Nasdaq weekly</span>
            <strong>-2.05%</strong>
          </div>
          <div>
            <span>10Y Treasury</span>
            <strong>4.738%</strong>
          </div>
          <div>
            <span>BTC weekly</span>
            <strong>+22.29%</strong>
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
            一句到尾：美股未轉熊，但高位市已由「追新高」轉成「等兩份考卷」：一份是
            NVDA 證明 AI 盈利，另一份是 Warsh / Jackson Hole 不好令債息再失控。
          </div>
        </Card>

        <Card title="2｜大市一眼睇" wide>
          <DataTable
            headers={["指標", "週五收市", "一週變動", "解讀"]}
            rows={indexRows}
          />
          <p className="small">
            指數點位以 CNBC / Reuters / Yahoo Finance chart 交叉核對；週變動用
            8/14 close 至 8/21 close 計算。CNBC 對 S&amp;P / Nasdaq
            全週百分比作四捨五入，與本文精確計算有輕微差異。
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
            Flow 數據有時間差：LSEG Lipper 覆蓋截至 8/19，一部分未反映 8/20
            Walmart / 債息急跌市。本文把 flow 當作「週中
            positioning」，不當成週五收市後最終資金流。
          </div>
        </Card>

        <Card title="7｜宏觀白話版" wide>
          <DataTable headers={["項目", "數據", "白話解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：經濟未差到要避險，但債息與油價高到足以壓估值。Fed
            可以暫停，不代表市場可以無視 inflation tail。
          </div>
        </Card>

        <Card title="8｜重點股票與 Crypto" wide>
          <DataTable
            headers={["股票 / 主題", "最新可靠數據", "點睇"]}
            rows={stockRows}
          />
          <h3>BTC / ETH / SOL</h3>
          <DataTable
            headers={["幣種", "8/21 4:00pm ET 附近價", "一週變動", "來源/備註"]}
            rows={cryptoRows}
          />
          <p className="small">
            Binance direct API 在此環境不可用；本文改用 Binance Vision public
            data 的 spot 1-minute kline。時間點為 2026-08-21 20:00:00 UTC，對比
            2026-08-14 同一時間，盡量貼近美股收市 4:00pm ET。
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
              不好在 NVDA / Jackson Hole 前重倉追高。若 S&amp;P 500 回踩 7,640 /
              7,600 有承接，可小注分段；若 10Y 企上 4.75%，先等。
            </li>
            <li>
              <strong>中線：</strong>
              AI / quality growth 主線未被否定，但估值對 rates 更敏感。把「有真
              revenue / FCF / guidance」同「純 narrative」分開處理。
            </li>
            <li>
              <strong>風控：</strong>若 Brent 升穿 $95、10Y 升穿 4.85%、VIX 升穿
              17、S&amp;P 500 跌穿 7,600，先降 semis、槓桿 ETF、small caps
              和消費 discretionary。
            </li>
            <li>
              <strong>最終觀點：</strong>
              今週回調是合理降溫，不是熊市宣判；但市場已不再容許「債息高、油價高、估值高」三樣同時存在。下週如果
              NVDA 交到功課而 Warsh 不加火，回調可變成健康整固；反之就要先保本。
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
              指數：CNBC、Reuters / MarketScreener 與 Yahoo chart 對 8/21 close
              基本一致；本文採正式收市點位，週變動用 Yahoo daily close 由 8/14
              至 8/21 計算。
            </li>
            <li>
              Treasury yields：CNBC 報導為盤中/早午後水平，Yahoo chart 為日線
              close；本文在數據欄同時標明，方向一致為長端 yields 回升。
            </li>
            <li>
              FedWatch：CME 轉述來源顯示 September hold 約 63.8%，prediction
              markets 約 69%-71%；本文不混合成單一精確概率，只採共同結論：hold
              是 base case，但 hike tail 仍在。
            </li>
            <li>
              Commodities：油價與金價有 futures / spot / intraday
              差異；本文表格採 Yahoo futures close，敘事引用 CNBC / Reuters
              對日內與週內方向的說明。
            </li>
            <li>
              Fund flows：LSEG Lipper 數據截至 8/19，未完全反映 8/20-8/21
              後段波動；報告已標示這個時間差。
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
