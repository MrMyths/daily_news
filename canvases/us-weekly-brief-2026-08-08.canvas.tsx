import React from "react";

const reportWeek = "2026-08-03 至 2026-08-07";
const reportDate = "2026-08-08";
const publishedAt =
  "香港時間 2026-08-08 09:02（週末自動生成；美股最新交易日為 8/7）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP - How major US stock indexes fared Friday 8/7/2026",
    url: "https://apnews.com/article/stocks-dow-jones-iran-oil-fed-interest-rates-9d586bdbf1fb230dcf1f915dcaf50858",
  },
  {
    name: "Reuters via SRN - S&P closes at record high as soft jobs report eases rate-hike concerns",
    url: "https://srnnews.com/sp-500-dow-futures-muted-ahead-of-jobs-data-chips-software-stocks-rise/",
  },
  {
    name: "Morningstar - Market Wrap: Stocks Up 3.7%, Led by Technology",
    url: "https://www.morningstar.com/markets/market-wrap-stocks-up-37-led-by-technology",
  },
  {
    name: "U.S. Bureau of Labor Statistics - The Employment Situation, July 2026",
    url: "https://www.bls.gov/news.release/empsit.nr0.htm",
  },
  {
    name: "CNBC - Treasury yields drop after surprise jobs loss in July",
    url: "https://www.cnbc.com/2026/08/07/treasury-yields-steady-ahead-of-key-nonfarm-payrolls-jobless-data.html",
  },
  {
    name: "CNBC - Odds the Fed hikes in September tumble following big July jobs miss",
    url: "https://www.cnbc.com/2026/08/07/odds-the-fed-hikes-in-september-tumble-following-big-july-jobs-miss.html",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "Bloomberg via Yahoo Finance - Big Tech Stocks Storm Back as AI Fears Fade",
    url: "https://finance.yahoo.com/markets/stocks/articles/big-tech-stocks-storm-back-103001009.html",
  },
  {
    name: "Yahoo Finance - Nvidia ends week up more than 10% as AI chip fears ease",
    url: "https://au.finance.yahoo.com/news/nvidia-ends-week-up-more-than-10-as-ai-chip-fears-ease-205751147.html",
  },
  {
    name: "Transport Topics - Oil prices dip after 4% increase the day before",
    url: "https://www.ttnews.com/articles/oil-prices-dip-after-increase",
  },
  {
    name: "BullionVault - Gold Heads for Best Week Since March 2020 After Weak US Jobs Data",
    url: "https://www.bullionvault.com/gold-news/gold-price-news/gold-jobs-fed-silver-oil-080720261",
  },
  {
    name: "Global Banking & Finance - Global Equity Fund Inflows Rise for 11th Week Amid Strong Earnings",
    url: "https://www.globalbankingandfinance.com/global-equity-funds-draw-inflows-11th-week-upbeat-earnings/",
  },
  {
    name: "Cisco Investor Relations - Cisco schedules Q4 FY2026 results call",
    url: "https://investor.cisco.com/news/news-details/2026/Cisco-Schedules-Conference-Call-for-Q4-Fiscal-Year-2026-Financial-Results/default.aspx",
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
  "本週美股強力反彈：S&P 500 全週 +3.58% 並創新高，Nasdaq +5.19%，Dow +2.96%，Russell 2000 +3.52%；VIX 收 14.90，風險胃納明顯改善。",
  "週五收市：S&P 500 +47.68 / +0.62% 至 7,757.64，Dow +151.83 / +0.28% 至 54,036.93，Nasdaq +342.26 / +1.30% 至 26,690.62，Russell 2000 +32.95 / +1.10% 至約 3,034.49。",
  "催化劑係 7 月非農意外 -23K，市場由『9 月大機會加息』快速轉向『Fed 可以等一等』；CNBC 指 10Y 跌至 4.639%、2Y 跌至 4.193%。",
  "Morningstar 口徑：US Total Market Index 全週 +3.69%；Technology +7.30%、Basic Materials +6.33% 最強，Energy -3.44%、Utilities -1.33% 最弱。",
  "Big Tech 由上週 capex 懷疑轉為『要睇投資回報』：Microsoft / Amazon 的 cloud 增長幫市場重估 AI spend；NVDA 全週 +11.56%、SOXX +7.60%。",
  "Crypto 用 Binance Vision 2026-08-07 20:00 UTC 1m close：BTC $64,959.89、ETH $1,918.65、SOL $74.02；較 7/31 同一時間分別 +3.12%、+2.66%、+1.23%。",
];

const indexRows = [
  [
    "DJIA",
    "54,036.93",
    "週五 +151.83 / +0.28%；全週 +2.96%",
    "週初急升已完成大部分升幅，週五升幅溫和；CAT / V 等價權重拖慢 Dow，但整體仍是 4 月以來最強一週之一。",
  ],
  [
    "S&P 500",
    "7,757.64",
    "週五 +47.68 / +0.62%；全週 +3.58%",
    "突破並收在歷史高位附近，代表資金重新願意買 beta；但下一關要看 CPI 能否不破壞 Fed repricing。",
  ],
  [
    "Nasdaq Composite",
    "26,690.62",
    "週五 +342.26 / +1.30%；全週 +5.19%",
    "科技與半導體主導反彈，AI capex 故事由『成本』暫時轉回『收入增長與供應鏈受益』。",
  ],
  [
    "Russell 2000",
    "約 3,034.49",
    "週五 +32.95 / +1.10%；全週約 +3.52%",
    "小型股受債息回落幫助，但仍要留意信貸與融資成本；若 10Y 再上 4.70%，IWM 會較易回吐。",
  ],
  [
    "VIX",
    "14.90",
    "週五 -1.65%；全週 -6.82%",
    "波動指數跌回低位，市場暫時不再為 Fed hike 風險買太多保險；低 VIX 亦代表追貨要更守紀律。",
  ],
];

const whyMarketMoved = [
  [
    "非農意外轉弱，利率壓力即時降溫",
    "BLS 指 7 月非農 -23K、失業率 4.1%；市場解讀為 Fed 9 月未必需要急住加息，長短債息同步回落，growth multiple 即刻鬆一口氣。",
  ],
  [
    "AI capex 故事由懲罰變成分化",
    "Microsoft Azure +43%、Amazon AWS +37% 令投資者願意重新買入能將 AI 投資轉成收入的公司；但 capex 高、free cash flow 弱的公司仍會被挑剔。",
  ],
  [
    "半導體成為反彈火車頭",
    "Yahoo Finance 指 NVDA 全週升逾 10%、SOX 全週升逾 8%；SOXX ETF 價格核算 +7.60%，帶動 Nasdaq 跑贏。",
  ],
  [
    "油價回落減少通脹尾部風險",
    "WTI / Brent 期貨全週約 -9%，雖然部分新聞時點顯示週五 Brent 有反彈，但整週方向是能源壓力降溫。",
  ],
  [
    "資金流仍有分歧，但價格先行 risk-on",
    "LSEG Lipper 指全球股票基金延續流入，但美國股票基金仍有約 $1.58bn 流出；即係價格反彈快過 fund-flow 完全轉向。",
  ],
];

const topNews = [
  [
    "1",
    "S&P 500 收歷史新高，三大指數全週大升",
    "AP / Reuters：S&P 500 全週 +3.6%、Nasdaq +5.2%、Dow +3.0%；今週由科技帶頭，唔再係防守輪動。",
  ],
  [
    "2",
    "7 月非農 -23K，Fed hike 機率急降",
    "BLS 官方數據顯示 payrolls unexpectedly declined；CNBC 指 CME FedWatch 9 月 hold odds 升至約 60%，Investing 5:55pm EDT 顯示 hold 56.6%。",
  ],
  [
    "3",
    "科技板塊重新領軍",
    "Morningstar：Technology +7.30%、Basic Materials +6.33%，Growth +5.05%；市場重買 long-duration growth。",
  ],
  [
    "4",
    "NVDA / SOXX 修復 AI chip trade",
    "NVDA 全週 +11.56%，SOXX +7.60%；市場重新相信 hyperscaler capex 會流向 GPU、networking、power/cooling 供應鏈。",
  ],
  [
    "5",
    "下週 CPI + Cisco / AMAT / SMCI 等財報",
    "8/12 CPI 是 Fed 9 月決策前關鍵通脹數據；同日 Cisco 盤後公布，8/13 Applied Materials 會測試半導體供應鏈信心。",
  ],
];

const heatMapRows = [
  [
    "Technology / XLK",
    "+7.20%（Yahoo ETF 核算）；Morningstar Technology +7.30%",
    "強綠",
    "今週最清楚的領袖；若 CPI 不熱，資金仍可能留在 AI / software / semis。",
  ],
  [
    "Semiconductors / SOXX",
    "+7.60%",
    "強綠",
    "NVDA 帶頭，AMD 雖波動但仍收高；短線已升快，追入要看 10Y 與 NVDA momentum。",
  ],
  [
    "Basic Materials / XLB",
    "+4.82%；Morningstar Basic Materials +6.33%",
    "綠燈",
    "受風險胃納和美元走弱支持；若 DXY 繼續回落，板塊可續有承接。",
  ],
  [
    "Consumer Discretionary / XLY",
    "+3.25%",
    "黃綠",
    "TSLA 反彈帶動，但消費股仍要睇實下週 CPI 與實質收入壓力。",
  ],
  [
    "Industrials / XLI",
    "+2.97%",
    "黃綠",
    "經濟未硬著陸預期支持工業股，但 Dow 週五被 CAT 拖住，內部分化仍在。",
  ],
  [
    "Financials / XLF",
    "+1.16%",
    "黃燈",
    "曲線與信貸未給出很強訊號；若勞動市場轉弱太快，銀行股未必跟升。",
  ],
  [
    "Energy / XLE",
    "-3.44%；Morningstar Energy -3.44%",
    "紅燈",
    "油價全週急跌，地緣 premium 退潮；短線由 hedge 變成落後板塊。",
  ],
  [
    "Utilities / XLU",
    "-1.67%；Morningstar Utilities -1.33%",
    "紅燈",
    "risk-on 時防守股被賣；不過若 CPI 熱或 VIX 反彈，可能重新變 hedge。",
  ],
];

const flowRows = [
  [
    "市場廣度",
    "Morningstar：883 隻覆蓋美股中 613 隻升、1 隻不變、267 隻跌；約 69% 上升",
    "今週不是單靠幾隻 mega-cap 撐市，廣度比上週明顯改善。",
  ],
  [
    "風格輪動",
    "Morningstar：Growth +5.05%、Blend +3.67%、Value +2.02%；Large +3.66%、Mid +2.18%、Small +3.71%",
    "Growth 跑贏，但 small caps 也有承接，反映利率下行帶動 broader risk-on。",
  ],
  [
    "Global equity funds",
    "LSEG Lipper（截至 8/5）：global equity funds +$21.15bn，連續第 11 週流入",
    "全球資金仍願意買股票，特別是盈利與科技故事較強的市場。",
  ],
  [
    "U.S. equity funds",
    "同一 LSEG 口徑：U.S. equity funds 約 -$1.58bn；European +$12.52bn、Asian +$8.15bn",
    "美股價格反彈未必等於基金資金即時回流，可能仍有再配置/獲利盤。",
  ],
  [
    "Sector funds",
    "Technology fund inflows 口徑有差異：可靠摘要顯示約 $1.44bn，另有來源報更高數字",
    "科技價格領升，但 fund-flow 數據衝突，本文只用作方向性參考，不硬加總。",
  ],
  [
    "Crypto beta",
    "BTC +3.12%、ETH +2.66%、SOL +1.23%（Binance Vision 20:00 UTC 口徑）",
    "Crypto 跟住風險資產上升，但 SOL 跑輸 BTC/ETH，代表高 beta 並非全面爆發。",
  ],
];

const macroRows = [
  [
    "Labor / 非農",
    "BLS：July nonfarm payrolls -23K；unemployment rate 4.1%；labor force participation 61.4%",
    "數字偏鴿，但不是純利好：股市喜歡 Fed 壓力減少，但勞動市場若再轉弱，盈利預期會受考驗。",
  ],
  [
    "Treasury yields",
    "CNBC：10Y 4.639%、2Y 4.193%、30Y 5.192%；Yahoo 10Y 收約 4.66%",
    "債息跌是今週 growth 反彈關鍵；10Y 只要留在 4.60%-4.70% 下方，科技估值仍有空間。",
  ],
  [
    "FedWatch / 利率預期",
    "CNBC：CME 9 月 hold odds 約 60%；Investing.com 8/7 17:55 EDT：9 月 hold 56.6%、+25bp 43.4%；10 月仍有約 59.1% 至少加一次",
    "市場不是轉向減息，而是由『快加息』變成『延後加息』；下週 CPI 會決定呢個 repricing 能否保持。",
  ],
  [
    "Oil",
    "Yahoo futures：WTI $77.08，全週 -8.96%；Brent $82.27，全週 -8.71%；新聞時點對週五升跌有差異",
    "油價回落紓緩 inflation scare，亦解釋 Energy 跑輸；但 Hormuz / Iran headline 未完全解除。",
  ],
  [
    "Gold / Dollar",
    "Yahoo GC futures $4,401.30，全週 +8.70%；spot gold 新聞約 $4,340；DXY 約 99.60，全週 -0.20%",
    "弱美元 + 低債息 + 勞動市場轉弱推高金價；但 futures / spot 口徑要分開看。",
  ],
  [
    "CPI / 下週風險",
    "8/12 08:30 ET 公布 July CPI；經濟日曆顯示前值 CPI y/y 約 3.5%、core y/y 2.6%",
    "如果 CPI 熱，非農帶來的鴿派 repricing 可能被打回；如果 CPI 溫和，S&P 新高有機會延伸。",
  ],
];

const stockRows = [
  [
    "MSFT / Microsoft",
    "Yahoo 核算週五收 $499.99，全週 +7.59%；Bloomberg/Yahoo 指 Azure +43%",
    "今週市場最買單的 AI capex 樣板：投資大，但 cloud revenue 已經證明 monetization。",
  ],
  [
    "AMZN / Amazon",
    "週五收 $274.48，全週 +1.07%；Bloomberg/Yahoo 指 AWS +37%、連續加速",
    "升幅不及 MSFT，但 AWS 重新加速令市場接受更高 capex；下個問題是 free cash flow 修復速度。",
  ],
  [
    "NVDA / Nvidia",
    "週五收 $223.96，全週 +11.56%；Yahoo Finance 指 NVDA 全週升逾 10%、SOX 升逾 8%",
    "AI chip fear 暫時消退；SpaceX/AI infrastructure headline 幫助確認需求，但估值已重新升溫。",
  ],
  [
    "AMD / Semis",
    "AMD 週五收 $483.36，全週 +1.51%；有 record data center results，但 Q3 outlook 未滿足高預期",
    "半導體不是全線無腦升，市場對 second-tier AI winners 要求更高。",
  ],
  [
    "META / Meta",
    "週五收 $592.10，全週 +6.36%；但多個 AI capex 評論仍指 free cash flow / capex 是市場焦點",
    "股價跟升，但投資者會繼續問：AI spend 幾時直接變 revenue 或 margin？",
  ],
  [
    "GOOGL / Alphabet",
    "週五收 $354.30，全週 -0.51%，是大型科技中較弱",
    "Google Cloud 高增長未完全抵消 capex 與 AI talent / execution 疑慮；仍是 AI 交易的分化樣本。",
  ],
  [
    "AAPL / Apple",
    "週五收 $313.33，全週 +1.43%",
    "相對平穩，但缺乏像 Azure/AWS/NVDA 那種直接 AI infrastructure beta；更像防守型 mega-cap。",
  ],
  [
    "BTC / ETH / SOL",
    "Binance Vision 4pm ET 附近：BTC $64,959.89、ETH $1,918.65、SOL $74.02",
    "Crypto 跟隨 risk-on，但未見超額爆發；BTC 守 $64k 以上是 liquidity 尚可的訊號。",
  ],
];

const earningsEvents = [
  "8/12 08:30 ET：July CPI。這是非農後最重要宏觀數據；若 core CPI 再熱，Fed 9 月 hold trade 會被質疑。",
  "8/12 盤後：Cisco Q4 FY2026 results call（公司 IR 已公布時間 4:30pm ET）。留意 enterprise networking、AI networking orders、guidance。",
  "8/12：SMCI、Lumentum、Coherent 等 AI hardware / optical / server chain 名字，會測試 AI infrastructure 廣度。",
  "8/13 盤後：Applied Materials（AMAT）公布，市場會看 wafer fab equipment demand、China exposure、AI memory / advanced packaging 訊號。",
  "8/13-8/14：PPI、jobless claims、retail sales / consumer sentiment 類數據（按經濟日曆更新），會影響『軟著陸 + Fed 暫停』敘事。",
  "Crypto：留意 BTC $64k、ETH $1,900、SOL $74；若 Nasdaq 續創高但 SOL 不跟，代表 high beta 風險胃納仍有限。",
];

const technicalRows = [
  [
    "S&P 500",
    "支持 7,700 / 7,600；阻力 7,765 / 7,800 / 7,900",
    "收 7,757.64，貼近新高；只要不跌回 7,700 下方，短線趨勢仍偏強。",
  ],
  [
    "Nasdaq Composite",
    "支持 26,500 / 26,000；阻力 26,750 / 27,000",
    "收 26,690.62，距 27,000 不遠；半導體若續強，會先挑戰整數關。",
  ],
  [
    "Dow",
    "支持 53,800 / 53,000；阻力 54,350 / 54,750",
    "Dow 週中高位 54,349 附近是第一阻力；若 cyclical breadth 續好，可再試高位。",
  ],
  [
    "Russell 2000",
    "支持 3,000 / 2,930；阻力 3,040 / 3,100",
    "細價股重上 3,000 是正面，但突破 3,040 後才算確認 risk-on 擴散。",
  ],
  [
    "VIX",
    "14.5 / 15 / 17 / 20",
    "VIX 低位代表市場放心，但亦令 hedge 便宜；若回升穿 17，先防 CPI shock。",
  ],
  [
    "10Y Treasury",
    "4.60% / 4.70% / 4.80%",
    "4.70% 是 growth 壓力線；守在下方支持 Nasdaq，重上則估值會再被壓。",
  ],
  [
    "WTI / Brent",
    "WTI $75 / $80 / $85；Brent $80 / $83 / $90",
    "油價跌穿前高是利好通脹；若 Brent 重上 $90，Fed hike tail risk 會回來。",
  ],
  [
    "BTC",
    "$64,000 / $63,000；阻力 $66,000 / $68,000",
    "BTC 4pm ET 附近 $64,959.89；若守 $64k，可跟隨 risk-on，失守則 crypto beta 先降溫。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$64,959.89",
    "+3.12% vs 2026-07-31 20:00 UTC",
    "Binance Vision spot 1m kline：2026-08-07 20:00:00 UTC close，即美股收市 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$1,918.65",
    "+2.66% vs 2026-07-31 20:00 UTC",
    "ETH 守在 $1,900 上方，跟隨科技風險胃納，但跑輸 BTC 少少。",
  ],
  [
    "SOLUSDT / SOL",
    "$74.02",
    "+1.23% vs 2026-07-31 20:00 UTC",
    "SOL 跑輸 BTC/ETH，代表高 beta crypto 未完全確認 breakout；短線睇 $74 / $72 支持。",
  ],
];

const watchPlan = [
  [
    "Base case",
    "新高後健康整固，科技仍是主線",
    "S&P 500 守 7,700、Nasdaq 守 26,500、10Y 不重上 4.70%、CPI 不熱；保留核心 AI / quality growth，但減少追高槓桿。",
  ],
  [
    "Bull case",
    "CPI 溫和 + 債息續跌，risk-on 擴散",
    "CPI / PPI 顯示能源回落傳導，FedWatch hold odds 續升，Russell 2000 突破 3,040，SOXX 續創高。",
  ],
  [
    "Bear case",
    "CPI 熱或油價反彈，Fed hike trade 回來",
    "10Y > 4.70%、VIX > 17、S&P 500 跌回 7,600、Nasdaq 跌穿 26,000；先降 semis、unprofitable growth、SOL 類 high beta。",
  ],
  [
    "觀察清單",
    "SPY / QQQ / RSP / IWM / XLK / XLB / XLE / XLU / SOXX / NVDA / MSFT / AMZN / META / GOOGL / CSCO / AMAT / BTC / ETH / SOL",
    "分別代表大盤、平均股、細價股、科技/材料領導、防守/能源落後、AI infrastructure earnings、crypto liquidity。",
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

export default function USWeeklyBrief20260808() {
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
          background: linear-gradient(135deg, #0f172a 0%, #065f46 48%, #0f766e 100%);
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
        <h1>非農轉弱救起高估值，科技與半導體重新領軍</h1>
        <p className="subtitle">
          今週市場由「怕 Fed 繼續加息」變成「Fed 可能可以等一等」：
          7 月非農意外減少，債息回落，S&P 500 收新高。資金重新買入 AI
          infrastructure、software 與半導體，但下週 CPI 會決定呢個 risk-on
          係延伸，定只係一輪快速 short-cover。
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
            <span>S&P 500 weekly</span>
            <strong>+3.58%</strong>
          </div>
          <div>
            <span>Nasdaq weekly</span>
            <strong>+5.19%</strong>
          </div>
          <div>
            <span>Technology weekly</span>
            <strong>+7.30%</strong>
          </div>
          <div>
            <span>BTC weekly</span>
            <strong>+3.12%</strong>
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
            一句到尾：今週係「壞消息變好消息」的一週。非農轉弱令 Fed
            加息壓力降溫，科技即刻重估；但如果下週 CPI 熱，呢個反彈會好快被重新審判。
          </div>
        </Card>

        <Card title="2｜大市一眼睇" wide>
          <DataTable
            headers={["指標", "週五收市", "一週變動", "解讀"]}
            rows={indexRows}
          />
          <p className="small">
            指數日變動以 AP、Reuters / SRN 與 Yahoo Finance chart
            交叉核對；Dow 有來源報 54,036.52，AP / Reuters / Yahoo
            為 54,036.93，本文採較一致的 AP / Reuters / Yahoo 收市點位。
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
            Fund flows 的截止日與統計範圍不同：LSEG Lipper
            是基金流向，Morningstar 是價格表現，Yahoo ETF
            是可交易 ETF 收市價。本文分開標示，不將不同資料硬合成單一結論。
          </div>
        </Card>

        <Card title="7｜宏觀白話版" wide>
          <DataTable headers={["項目", "數據", "白話解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：就業轉弱令 Fed 未必需要即刻加息，對科技股是甜蜜點；但如果就業繼續惡化，或 CPI
            再熱，市場會由「利率利好」切換去「增長/通脹兩頭不到岸」。
          </div>
        </Card>

        <Card title="8｜重點股票與 Crypto" wide>
          <DataTable
            headers={["股票 / 主題", "最新可靠數據", "點睇"]}
            rows={stockRows}
          />
          <h3>BTC / ETH / SOL</h3>
          <DataTable
            headers={["幣種", "8/7 4:00pm ET 附近價", "一週變動", "來源/備註"]}
            rows={cryptoRows}
          />
          <p className="small">
            Binance direct API 在此環境回 451；本文改用 Binance Vision public
            data 的 spot 1-minute kline。時間點為 2026-08-07 20:00:00 UTC，對比
            2026-07-31 同一時間，盡量貼近美股收市 4:00pm ET。
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
              不好在 CPI 前無腦追高。科技/半導體已快速修復，較好的做法是等回踩 5
              日線或等 CPI 後確認債息繼續回落。
            </li>
            <li>
              <strong>中線：</strong>
              核心仍是 quality growth + AI infrastructure winners，但要分清「capex
              有收入回報」與「只是在燒現金買故事」。
            </li>
            <li>
              <strong>風控：</strong>若 10Y 重上 4.70%、VIX 回到 17
              以上、S&P 500 跌回 7,600、Nasdaq 跌穿 26,000，先減 high beta
              semis、槓桿 ETF、SOL 類 crypto beta。
            </li>
            <li>
              <strong>最終觀點：</strong>
              今週反彈質素比上週好，因為廣度、科技、細價股都有參與；但真正決定趨勢的是下週通脹。如果 CPI
              配合，市場可以由 short-cover 變成新一輪上攻；如果 CPI
              不配合，Fed hike tail risk 會好快返嚟。
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
              指數：S&P 500 / Nasdaq / Russell 2000 / VIX 以 AP、Reuters / SRN
              及 Yahoo chart 核對；Dow 有 54,036.52 與 54,036.93
              小差異，本文採 AP / Reuters / Yahoo 一致的 54,036.93。
            </li>
            <li>
              FedWatch：CNBC 報道 CME 9 月 hold odds 約 60%；Investing.com
              8/7 17:55 EDT 顯示 hold 56.6%、25bp hike 43.4%；本文標示兩者差異，結論是加息預期明顯降溫但未消失。
            </li>
            <li>
              Oil：AP 市場稿提到 Brent 週五上升 1.3%，TT 早段報價與 Yahoo futures
              close 顯示不同時點；本文把週五油價寫成口徑差異，核心採全週 WTI / Brent 約 -9%
              的共同方向。
            </li>
            <li>
              Gold：BullionVault / Kitco 類來源多用 spot gold（約 $4,340），Yahoo
              chart 是 GC futures（$4,401.30）；本文同時標示 spot / futures，不把兩者混用。
            </li>
            <li>
              Fund flows：LSEG Lipper、ETF 與其他 flow
              來源統計範圍不同，部分科技資金流數字有衝突；本文採 LSEG
              摘要作主口徑，其他只作方向性參考。
            </li>
            <li>
              Crypto：Binance 直接 API 在環境中回 451；本文使用 Binance Vision
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
