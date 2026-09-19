import React from "react";

const reportWeek = "2026-09-14 至 2026-09-18";
const reportDate = "2026-09-19";
const publishedAt =
  "香港時間 2026-09-19 09:18（週末自動生成；數據截至美股 9/18 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP via The Seattle Times - How major US stock indexes fared Friday 9/18/2026",
    url: "https://www.seattletimes.com/business/how-major-us-stock-indexes-fared-friday-9-18-2026/",
  },
  {
    name: "Reuters via MarketScreener - S&P 500, Nasdaq advance, turning the page on a tumultuous week",
    url: "https://ca.marketscreener.com/news/s-p-500-nasdaq-advance-turning-the-page-on-a-tumultuous-week-ce785adadf88f526",
  },
  {
    name: "Reuters - Oil prices fall 1% on hopes of limited supply disruptions",
    url: "https://www.reuters.com/business/energy/oil-prices-fall-1-hopes-limited-supply-disruptions-2026-09-18/",
  },
  {
    name: "DTN - Oil Ends Week Above $100 Bbl as More Swings Seen",
    url: "https://www.dtnpf.com/agriculture/web/ag/news/world-policy/article/2026/09/18/oil-ends-week-100-bbl-swings-seen",
  },
  {
    name: "Federal Reserve - FOMC statement September 16, 2026",
    url: "https://www.federalreserve.gov/monetarypolicy/files/monetary20260916a1.pdf",
  },
  {
    name: "Federal Reserve - September 2026 Summary of Economic Projections",
    url: "https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260916.htm",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Reuters - Global equity fund outflows hit nine-month high on inflation fears",
    url: "https://www.reuters.com/world/china/global-markets-flows-graphic-pix-2026-09-18/",
  },
  {
    name: "Reuters - Robust US retail sales underscore economy's resilience",
    url: "https://www.reuters.com/business/retail-consumer/us-retail-sales-rebound-sharply-august-2026-09-16/",
  },
  {
    name: "U.S. Census Bureau - Advance Monthly Sales for Retail and Food Services, August 2026",
    url: "https://www.census.gov/retail/marts/www/marts_current.pdf",
  },
  {
    name: "Reuters - US weekly jobless claims unexpectedly fall",
    url: "https://www.reuters.com/business/us-weekly-jobless-claims-unexpectedly-fall-2026-09-17/",
  },
  {
    name: "Reuters - Lennar profit halves as higher mortgage rates pressure homebuyers",
    url: "https://www.reuters.com/business/lennar-profit-halves-higher-mortgage-rates-pressure-homebuyers-2026-09-16/",
  },
  {
    name: "Reuters - BOJ raises interest rates to 31-year high",
    url: "https://www.reuters.com/world/asia-pacific/boj-raises-interest-rates-31-year-high-widely-expected-move-2026-09-18/",
  },
  {
    name: "Anadolu Agency - Nvidia expects to double chip sales next year, CEO says",
    url: "https://www.aa.com.tr/en/economy/nvidia-expects-to-double-chip-sales-next-year-ceo-says/4060864",
  },
  {
    name: "Yahoo Finance chart data - market, ETF and stock closes",
    url: "https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC",
  },
  {
    name: "Cboe - VIX Volatility Products",
    url: "https://www.cboe.com/en/tradable-products/vix/",
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
  "今週核心係 Fed 正式重啟加息週期：9/16 FOMC 一致加 25bp 至 3.75%-4.00%，SEP median 顯示 2026 / 2027 年底 policy rate 都在 4.1%，市場即刻重新計長端利率同估值。",
  "大市表面平靜但內裏分化：S&P 500 全週 -0.08%，Nasdaq +0.72%，Dow -1.69%，Russell 2000 -1.50%；即係 AI / semis 撐住指數，但廣度不算靚。",
  "週五 AP close：S&P 500 +0.17% 至 7,650.50、Nasdaq +0.40% 至 26,522.55、Dow -0.18% 至 51,682.64；10Y 升近 5%，大部分股票仍受壓。",
  "油價仍是通脹開關：Reuters 指原油連跌第三日但仍企在 $100 以上；DTN 結算口徑為 WTI $100.30、Brent $103.87，週內曾因中東供應風險急抽。",
  "資金面偏保守：Reuters / LSEG Lipper 顯示截至 9/16 一週美股基金流出 $31.44bn，連續第四週走資；large-cap funds 流出 $28.71bn。",
  "Crypto 用 Binance Vision 2026-09-18 20:00 UTC 1m close：BTC $81,081.26、ETH $2,630.67、SOL $113.81；較 9/11 同一時間分別 +4.91%、+3.59%、+11.53%。",
];

const indexRows = [
  [
    "DJIA",
    "51,682.64",
    "週五 -95.40 / -0.18%；全週 -890.65 / -1.69%",
    "藍籌全週最弱，Reuters 指是 3 月以來最大單週百分比跌幅；高息、能源成本同週五廣度偏弱都壓住 Dow。",
  ],
  [
    "S&P 500",
    "7,650.50",
    "週五 +12.74 / +0.17%；全週 -6.48 / -0.08%",
    "全週近乎打和，但已是連續第二週微跌；7,600 附近暫有承接，估值仍受 10Y 5% 限制。",
  ],
  [
    "Nasdaq Composite",
    "26,522.55",
    "週五 +104.25 / +0.40%；全週 +189.51 / +0.72%",
    "AI / semis 令 Nasdaq 成為今週唯一主要指數正回報；但升勢集中，唔等於全面 risk-on。",
  ],
  [
    "Russell 2000",
    "2,860.40",
    "週五 -14.23 / -0.50%；全週 -43.55 / -1.50%",
    "小型股仍怕融資成本同經濟放慢；如果 2Y / 10Y 留高位，Russell 好難跑贏。",
  ],
  [
    "VIX",
    "14.81",
    "週五 -0.63 / -4.08%；全週 -1.03 / -6.50%",
    "波幅指數回落，但不是因風險完全消失，而是 Fed event risk 已落地、semis 托住指數。",
  ],
];

const whyMarketMoved = [
  [
    "Fed 加息落地，但下一步仍未解除",
    "Fed 官方 statement 顯示 12-0 通過加 25bp 至 3.75%-4.00%；SEP median policy rate 2026 / 2027 都是 4.1%。Reuters 指 FedWatch 對 10 月再加息定價約 55.4%，比一週前 42.5% 更高。",
  ],
  [
    "油價高位震盪，通脹交易未完",
    "Reuters 指油價跌約 1%、連跌第三日，但仍在 $100 以上；DTN 結算 WTI $100.30、Brent $103.87。油價由週中高位回落幫股市鬆一口氣，但 diesel / shipping 成本仍會傳導到通脹。",
  ],
  [
    "10Y 貼近 5%，壓住大部分股票估值",
    "AP 指 10Y Treasury yield 升至 5.00%，Yahoo chart 收約 4.998%；當無風險利率再上，long-duration growth 以外的 broad market 就難擴張 multiple。",
  ],
  [
    "AI / 半導體成為指數支柱",
    "SOXX 週五收 $533.07、全週 +1.14%；AMD +8.46%、INTC +5.50%、NVDA +1.82%。Nvidia CEO 亦表示明年晶片銷售有望倍增，令 AI demand 敘事保持溫度。",
  ],
  [
    "宏觀數據強弱混合，反而令 Fed 難鴿",
    "Reuters / Census：8 月 retail sales +1.2%，core retail +1.4%；Reuters / Labor Department：initial claims 跌至 196k。經濟未差到要救，但通脹未低到可放鬆，正是股票最尷尬的組合。",
  ],
];

const topNews = [
  [
    "1",
    "Fed 一致加息 25bp，Warsh 口徑偏紀律化",
    "官方 statement 將 target range 升至 3.75%-4.00%，並強調 inflation remains elevated；SEP 顯示年底利率中位數 4.1%，市場讀成 higher-for-longer 甚至再加一次。",
  ],
  [
    "2",
    "週五美股混合收市：半導體撐 S&P / Nasdaq，廣度拖 Dow",
    "AP / Reuters：S&P +0.17%、Nasdaq +0.40%、Dow -0.18%、Russell -0.50%；Reuters 形容市場經過 Fed 與油價大波動後『打完仗式疲倦』。",
  ],
  [
    "3",
    "原油回落但仍守 $100，通脹壓力未散",
    "Reuters：中東供應替代路線希望升溫，油價跌約 1%；但 Brent / WTI 仍高企，市場繼續把油價視作 Fed path 的輸入變數。",
  ],
  [
    "4",
    "美股基金連續第四週流出",
    "Reuters / LSEG Lipper：美股基金一週流出 $31.44bn，large-cap -$28.71bn；全球 equity funds 流出 $23.21bn，為九個月最大。",
  ],
  [
    "5",
    "住房與物流壓力浮面，AI 晶片仍是亮點",
    "Reuters：Lennar profit more than halved，反映高 mortgage rate 壓需求；相反 NVDA / AMD / INTC 等半導體靠 AI demand 與供應緊張故事跑出。",
  ],
];

const heatMapRows = [
  [
    "Health Care / XLV",
    "+1.83%",
    "綠燈",
    "今週少數正回報防守板塊；在 Fed / oil 風險下，資金願意買 earnings visibility。",
  ],
  [
    "Semiconductors / SOXX",
    "+1.14%",
    "綠燈但高波動",
    "週五 +2.69%，AMD / INTC 強；AI demand 足夠撐指數，但估值對 10Y 好敏感。",
  ],
  [
    "Technology / XLK",
    "+1.03%",
    "中性偏綠",
    "Mega-cap quality growth 仍有承接；但 MSFT 微跌、ORCL 回吐，內部分化大。",
  ],
  [
    "Communication Services / XLC",
    "約 -1.59%（Yahoo 9/18 20:00 UTC close）",
    "黃燈",
    "GOOGL / META 有支撐，但 Netflix 全週 -7.25% 拖後腿；內容/廣告股未能全面 risk-on。",
  ],
  [
    "Energy / XLE",
    "-1.27%",
    "黃燈",
    "油價仍高但由高位回落，能源股未能再追；短線更多受 geopolitics headline 牽動。",
  ],
  [
    "Financials / XLF",
    "-2.43%",
    "紅燈",
    "高利率不是純利好銀行；市場同時擔心信貸、曲線、交易量與經濟後勁。",
  ],
  [
    "Utilities / XLU",
    "-3.04%",
    "紅燈",
    "典型 rate-sensitive 防守股被 10Y 5% 壓住；息口不跌，估值不易修復。",
  ],
  [
    "Real Estate / XLRE",
    "約 -2.05%（Yahoo 9/18 20:00 UTC close）",
    "紅燈",
    "Lennar 業績與 mortgage rate 接近 7% 的背景，令地產鏈條繼續受壓。",
  ],
];

const flowRows = [
  [
    "Global equity funds",
    "截至 9/16 一週淨流出 $23.21bn，九個月最大",
    "油價與 Fed 加息預期同時升，令全球風險資產先去 beta。",
  ],
  [
    "U.S. equity funds",
    "淨流出 $31.44bn，連續第四週流出；large-cap funds -$28.71bn",
    "即使 Nasdaq 全週正回報，機構 flow 仍偏防守，反映升勢集中在少數 AI / quality names。",
  ],
  [
    "U.S. small-cap funds",
    "+$568mn",
    "小型股基金有少量流入，但 Russell 2000 價格仍跌 1.5%；flow 同價格未確認同向。",
  ],
  [
    "Sector leadership",
    "XLV +1.83%、SOXX +1.14%、XLK +1.03%；XLF -2.43%、XLU -3.04%",
    "紅綠燈不是傳統防守輪動，而是『有盈利/AI 可講』才有錢追。",
  ],
  [
    "Crypto",
    "BTC +4.91%、ETH +3.59%、SOL +11.53%（Binance Vision 9/11 至 9/18 20:00 UTC）",
    "幣市比小型股強，尤其 SOL；但仍要留意若 10Y / 美元再抽升，槓桿資產波動會放大。",
  ],
];

const macroRows = [
  [
    "FOMC",
    "9/16 加息 25bp 至 3.75%-4.00%，12-0 通過",
    "Fed 用行動表明不接受通脹重新抬頭；Warsh 口徑是紀律化，不是先救市場。",
  ],
  [
    "SEP / FedWatch",
    "SEP median 2026 / 2027 年底 fed funds rate 4.1%；Reuters 指 10 月再加息機率約 55.4%",
    "市場已不只是 price 一次加息，而是開始 price 更長的高息平台。",
  ],
  [
    "Retail sales",
    "8 月 retail sales +1.2% m/m 至 $773.9bn，core retail +1.4%",
    "消費韌性強，本身是好消息；但對 Fed 而言代表需求未冷，通脹更難自然回落。",
  ],
  [
    "Jobless claims",
    "截至 9/12 初請 196k，低過預期 208k；continuing claims 1.730m",
    "裁員仍少，但 Reuters 提醒 Labor Day 季調可能誇大強度；不宜單一數字過度解讀。",
  ],
  [
    "Treasury yields",
    "Yahoo / AP：10Y 約 4.998%-5.00%，30Y 約 5.331%，5Y 約 4.856%",
    "5% 係 equity multiple 的硬天花板；只要 10Y 不回落，大市升勢會偏窄。",
  ],
  [
    "Oil",
    "DTN：WTI $100.30、Brent $103.87；Reuters：跌約 1% 但仍高於 $100",
    "油價由高位回落令市場喘氣，但仍足以推高運輸、農業與通脹預期。",
  ],
  [
    "Gold / USD",
    "Yahoo：Gold futures $4,415.90（全週 +0.16%）；DXY 約 100.215（全週 +1.10%）",
    "美元較強但黃金守高，反映市場同時買 real-rate hedge / geopolitical hedge。",
  ],
  [
    "Global policy",
    "Reuters：BOJ 加息至 1.25%，31 年高位，7-2 通過",
    "全球央行一起對抗通脹，美元、日圓同全球 duration trade 都會更敏感。",
  ],
];

const stockRows = [
  [
    "NVDA",
    "$222.27；全週 +1.82%",
    "Nvidia CEO 表示明年晶片銷售有望倍增，AI demand narrative 繼續撐住股價；但若 10Y 穿 5%，估值會被重新審判。",
  ],
  [
    "AMD / INTC",
    "AMD $559.82（+8.46%）；INTC $108.60（+5.50%）",
    "半導體內部最強；市場買 CPU / memory shortage 與 AI infrastructure 供應鏈故事。",
  ],
  [
    "GOOGL / META",
    "GOOGL $349.54（+3.26%）；META 約 $665.75（+2.73%，9/18 20:00 UTC）",
    "大型平台股仍被當作 quality growth；廣告/AI cash flow 比純概念更受歡迎。",
  ],
  [
    "AAPL / MSFT",
    "AAPL $336.13（+1.16%）；MSFT $493.78（-0.37%）",
    "Mega-cap 不同步；資金更挑剔，唔係七巨頭一齊升就算。",
  ],
  [
    "ORCL",
    "$147.61；全週 -1.78%",
    "AI backlog 故事仍在，但市場對 capex、債務與 free cash flow 要求更高；高息環境會放大現金流疑問。",
  ],
  [
    "LEN",
    "$76.43；全週 -3.98%",
    "Reuters：Lennar Q3 profit more than halved，mortgage rate 近 7% 壓住需求；房屋鏈條是高息最直接受害者。",
  ],
  [
    "NFLX / CRM / BA",
    "NFLX -7.25%、CRM -3.96%、BA -5.82%",
    "弱勢股集中在估值、企業 IT spending、工業週期/成本壓力；高位市會懲罰任何基本面瑕疵。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$81,081.26",
    "+$3,791.26 / +4.91%",
    "Binance Vision BTCUSDT 2026-09-18 20:00 UTC 1m close；對比 9/11 20:00 UTC $77,290.00。",
  ],
  [
    "ETH",
    "$2,630.67",
    "+$91.20 / +3.59%",
    "Binance Vision ETHUSDT 2026-09-18 20:00 UTC 1m close；升幅略低於 BTC。",
  ],
  [
    "SOL",
    "$113.81",
    "+$11.77 / +11.53%",
    "Binance Vision SOLUSDT 2026-09-18 20:00 UTC 1m close；今週三隻之中最強。",
  ],
];

const earningsEvents = [
  "Fed speak / FedWatch：市場已 price 10 月再加息機率約 55.4%；下週任何 Fed 官員淡化或強化再加息，都會直接推 10Y 與 growth multiple。",
  "Oil / geopolitics：Reuters 指供應替代路線令油價回落，但中東風險未解除；Brent $100 / $104 / $110 是下週通脹交易三個關鍵位。",
  "FedEx：市場關注 9/23 盤後 Q1 FY2027；柴油價格高企與 J.B. Hunt 警告令物流成本轉嫁能力成為焦點。",
  "General Mills：市場預期 9/23 盤前 Q1 FY2027，包裝食品可反映消費者對價格上升的承受能力。",
  "Housing：Lennar 已經展示高 mortgage rate 壓力；下週繼續留意新屋/二手樓數據與 homebuilder 指引。",
  "AI supply chain：Nvidia 明年銷售倍增說法、Intel CPU shortage、SK Hynix / Intel 製造合作傳聞會繼續牽動 SOXX。",
];

const technicalRows = [
  [
    "S&P 500",
    "支撐 7,600 / 7,550；阻力 7,700 / 7,720",
    "全週只跌 6.48 點，但連續第二週回落；守 7,600 代表高位整固，失守就會測 7,550。",
  ],
  [
    "Nasdaq Composite",
    "支撐 26,300 / 26,000；阻力 26,700 / 27,000",
    "半導體要繼續領升，Nasdaq 才能挑戰新高；若 SOXX 回吐，26,300 先要守。",
  ],
  [
    "Russell 2000",
    "支撐 2,850 / 2,800；阻力 2,904 / 2,950",
    "小型股是 breadth 溫度計；如果 Russell 跌穿 2,850，即代表 market internals 轉差。",
  ],
  [
    "10Y Treasury",
    "4.90% / 5.00% / 5.10%",
    "5% 是市場心理線；升穿並企穩 5.10%，growth 和 dividend proxies 都會被壓。",
  ],
  [
    "WTI / Brent",
    "WTI $100；Brent $104 / $110",
    "油價守 $100 已足夠令 Fed 難鴿；Brent 再近 $110，通脹 trade 會全面回歸。",
  ],
  [
    "VIX",
    "15 / 18 / 20",
    "VIX 低不代表無風險；如果 FedWatch 再 hawkish 而 VIX 上 18，先減 beta。",
  ],
];

const watchPlan = [
  [
    "Bull case",
    "10Y 跌回 4.90% 以下、Brent 失守 $100、Fed 官員淡化連續加息；S&P 500 可重新測 7,700-7,720。",
    "分段加 quality growth / semis；優先 NVDA / AMD / GOOGL / META 這類有現金流同 AI exposure 的名字。",
  ],
  [
    "Base case",
    "10Y 4.90%-5.05%、Brent $100-$105、Fed 保持 data-dependent；大市窄幅震盪，Nasdaq 跑贏 Dow / Russell。",
    "維持 barbell：quality tech + health care + 現金；避免追弱勢 cyclicals 和 highly levered small caps。",
  ],
  [
    "Bear case",
    "10Y 穿 5.10%、Brent 重上 $110、FedWatch 再加息機率升穿 65%，或油價帶動通脹預期失控。",
    "先減 Russell / XLU / XLRE / high-duration software；用 S&P 7,600、VIX 18 作止蝕警報。",
  ],
  [
    "Crypto plan",
    "BTC 守 $80,000、SOL 守 $110 代表風險胃納仍可；若 BTC 跌回 $77,000，表示本週 breakout 失敗。",
    "不用槓桿追 SOL；繼續用 20:00 UTC 定點價格做紀律化比較。",
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

export default function USWeeklyBrief20260919() {
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
        <h1>Fed 重啟加息，油價牽住通脹；AI 半導體撐住 Nasdaq，但廣度仍偏弱</h1>
        <p className="subtitle">
          今週市場不是單純升或跌，而是「Fed 加息 + 10Y 貼近 5% +
          油價仍高」之下， 資金只肯集中買 AI / quality growth。S&amp;P 500
          全週幾乎打和，Nasdaq 靠 semis 升，但
          Dow、Russell、金融、地產、公用股都偏弱。白話講：大市未爆，
          但高位市已經進入好挑剔的環境。
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
            <strong>-0.08%</strong>
          </div>
          <div>
            <span>Nasdaq weekly</span>
            <strong>+0.72%</strong>
          </div>
          <div>
            <span>10Y Treasury</span>
            <strong>5.00%</strong>
          </div>
          <div>
            <span>BTC weekly</span>
            <strong>+4.91%</strong>
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
            一句到尾：今週不是 risk-off 崩盤，而是 higher-for-longer
            再定價。只要 10Y 繼續貼住 5%、油價企在 $100
            以上，升市會繼續集中在少數 AI / quality names，追落後要好小心。
          </div>
        </Card>

        <Card title="2｜大市一眼睇" wide>
          <DataTable
            headers={["指標", "週五收市", "一週變動", "解讀"]}
            rows={indexRows}
          />
          <p className="small">
            指數點位以 AP / Reuters 報導及 Yahoo Finance chart
            交叉核對；週變動用 2026-09-11 close 至 2026-09-18 close 計算。Nasdaq
            個別 AP 轉載頁曾見 26,552.55 的明顯 typo；Reuters 與 AP Seattle
            Times 均列 26,522.55，本文採此口徑。
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
            Flow 數據截至 9/16，未完全反映 9/17-9/18 半導體反彈；所以本文把 flow
            當作「週中 positioning」，再用週五 close 判斷價格確認。
          </div>
        </Card>

        <Card title="7｜宏觀白話版" wide>
          <DataTable headers={["項目", "數據", "白話解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：經濟數據未差、油價未低、通脹未回 2%，所以 Fed 好難快快轉鴿。
            股票要繼續升，最需要不是再有一個 AI headline，而是 10Y
            和油價一齊降溫。
          </div>
        </Card>

        <Card title="8｜重點股票與 Crypto" wide>
          <DataTable
            headers={["股票 / 主題", "最新可靠數據", "點睇"]}
            rows={stockRows}
          />
          <h3>BTC / ETH / SOL</h3>
          <DataTable
            headers={["幣種", "9/18 4:00pm ET 附近價", "一週變動", "來源/備註"]}
            rows={cryptoRows}
          />
          <p className="small">
            Binance direct API 在此環境不可用；本文改用 Binance Vision public
            data 的 spot 1-minute kline。時間點為 2026-09-18 20:00:00 UTC，對比
            2026-09-11 同一時間，盡量貼近美股收市 4:00pm ET。
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
            headers={["情景", "觸發條件", "操作思路"]}
            rows={watchPlan}
          />
        </Card>

        <Card title="12｜操作提示與最終觀點 / 來源與免責聲明" wide>
          <ul>
            <li>
              <strong>短線：</strong>
              S&amp;P 500 未失 7,600 前不用太悲觀，但 10Y 5% 附近不適合追高
              beta。 做多要買領漲，不要只因為落後而買落後。
            </li>
            <li>
              <strong>中線：</strong>
              AI / semis 主線仍未壞，但今週已經證明市場會問 cash
              flow、capex、debt funding。高息環境下，質素比故事更重要。
            </li>
            <li>
              <strong>風控：</strong>
              用四個警報：S&amp;P 7,600、10Y 5.10%、Brent $110、VIX
              18；兩個同時觸發，先減倉再研究。
            </li>
            <li>
              <strong>最終觀點：</strong>
              今週不是熊市訊號，而是高位市進入「宏觀重新定價 + 板塊汰弱留強」。
              市場可以繼續升，但會更窄、更挑剔、更依賴 AI earnings 兌現。
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
              指數：AP / Reuters / Yahoo chart 對 9/18 close 基本一致；個別 AP
              轉載頁的 Nasdaq 點位出現 26,552.55 typo，本文採 AP Seattle Times /
              Reuters 的 26,522.55。
            </li>
            <li>
              ETF / 個股：Yahoo 日線部分 ETF / 個股在執行時 9/18 close
              尚未完全寫入；本文用 9/18 20:00 UTC 1-minute close
              作收市附近價，週變動用 9/11 日線 close 對比。
            </li>
            <li>
              Oil：Yahoo futures 連續合約 close 與 DTN / Reuters settlement
              口徑略有差異；本文宏觀敘事採 Reuters / DTN settlement，板塊計算採
              Yahoo ETF close。
            </li>
            <li>
              FedWatch：CME 是即時工具；Reuters 文章時間點顯示 10 月再加息機率約
              55.4%，之後可能變動，本文列明為週五報導口徑。
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
