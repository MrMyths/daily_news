import React from "react";

const reportDate = "2026-11-10";
const publishedAt =
  "香港時間 2026-11-11 09:00（週三更新；數據截至美股 11/10 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market today: Live updates for Nov. 10, 2026",
    url: "https://www.cnbc.com/2026/11/10/stock-market-today-live-updates.html",
  },
  {
    name: "AP News - How major US stock indexes fared Tuesday 11/10/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-a97eb31c415811065561f2c2ac552cd7",
  },
  {
    name: "Reuters via MarketScreener - Wall St ends lower as hot inflation data, Fed comments heighten rate worries",
    url: "https://ca.marketscreener.com/news/wall-st-ends-lower-as-hot-inflation-data-fed-comments-heighten-rate-worries-ce785edad18ef422",
  },
  {
    name: "Sharecast - US close: Stocks head south following hotter-than-expected CPI reading",
    url: "https://www.sharecast.com/news/market-report-us-close/wall-street-nyse-dow-jones-nasdaq-stocks-equities--24118290.html",
  },
  {
    name: "Investing.com - U.S. stocks lower at close of trade",
    url: "https://www.investing.com/news/stock-market-news/us-stocks-lower-at-close-of-trade-dow-jones-industrial-average-down-030-5016940",
  },
  {
    name: "CNBC - CPI inflation report: October 2026",
    url: "https://www.cnbc.com/2026/11/10/cpi-inflation-report-october-2026.html",
  },
  {
    name: "U.S. Bureau of Labor Statistics - Consumer Price Index current release",
    url: "https://www.bls.gov/news.release/cpi.nr0.htm",
  },
  {
    name: "CNBC - Treasury yields jump after CPI and Waller comments",
    url: "https://www.cnbc.com/2026/11/10/us-bonds-treasurys-yields.html",
  },
  {
    name: "Reuters via Euronext - US yields rise, stocks fall as inflation data boosts odds of larger December rate hike",
    url: "https://live.euronext.com/en/financial-news/us-yields-rise-stocks-fall-inflation-data-boosts-odds-larger-december-rate-hike",
  },
  {
    name: "CNBC - Brent crude dips below $90 for first time since August on Iran hopes",
    url: "https://www.cnbc.com/2026/11/10/oil-prices-trump-iran.html",
  },
  {
    name: "CNBC - Gold falls as CPI tops forecasts, lifting dollar and yields",
    url: "https://www.cnbc.com/2026/11/10/gold-edges-lower-as-focus-shifts-to-us-inflation-data.html",
  },
  {
    name: "CME FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "New York Fed - October 2026 Survey of Consumer Expectations",
    url: "https://www.newyorkfed.org/newsevents/news/research/2026/20261109",
  },
  {
    name: "Yahoo Finance historical data - major indices, ETFs and stocks",
    url: "https://finance.yahoo.com/quote/%5EGSPC/history/",
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
  "美股星期二回吐：Dow 52,231.89（-157.86 / -0.30%）、S&P 500 7,520.93（-29.01 / -0.38%）、Nasdaq 25,065.87（-187.27 / -0.74%），Russell 2000 2,821.38（-0.68%）。",
  "主線係「通脹高過預期 + Fed 再加息定價升溫」：10月 CPI +0.4% MoM、core +0.3% MoM，均高過市場預期；Reuters / CNBC 指 2Y yield 抽升至約 4.74%。",
  "科技係最大拖累：XLK -1.15%，Nvidia -5.47% 連跌第二日，Microsoft -2.20%；但 AMD +1.30%、Broadcom +3.91%，AI trade 不是一面倒撤退。",
  "奇怪但重要：VIX 收 19.46（-2.31%）沒有跟跌市上升，表示今次似係利率重定價與個別科技壓力，多過恐慌式去風險。",
  "宏觀壓力集中在債息同美元：10Y 約 4.98%-4.99%，DXY 約 102.25-102.29；黃金與原油同跌，反映強美元 / 高實質利率與中東風險降溫夾擊。",
  "Crypto 以 Binance Vision 2026-11-10 21:00 UTC 1m close（美股 4:00pm ET）計：BTC $73,852.90（較 11/09 同時間 -1.27%）、ETH $2,061.09（-3.12%）、SOL $83.32（-3.74%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "52,231.89",
    change: "-157.86 / -0.30%",
    read: "Dow 跌幅相對溫和，CNBC 指 UnitedHealth 對 Dow 有正貢獻；但 Caterpillar、Nvidia 等拖累藍籌氣氛。",
  },
  {
    asset: "S&P 500",
    close: "7,520.93",
    change: "-29.01 / -0.38%",
    read: "S&P 500 結束兩日反彈；Reuters 指 CPI 高過預期令 12月加息幾乎完全被市場定價。",
  },
  {
    asset: "Nasdaq Composite",
    close: "25,065.87",
    change: "-187.27 / -0.74%",
    read: "Nasdaq 跑輸，主因 Nvidia、Microsoft 等高權重科技股受壓；仍守 25,000 心理位。",
  },
  {
    asset: "Russell 2000",
    close: "2,821.38",
    change: "-19.43 / -0.68%",
    read: "小型股對短端利率敏感，2Y yield 急升令融資成本憂慮升溫。",
  },
  {
    asset: "VIX",
    close: "19.46",
    change: "-0.46 / -2.31%",
    read: "VIX 反跌，代表市場未出現全面 panic；但 Nasdaq 新低數多，內部壓力仍然存在。",
  },
];

const sectorRows = [
  [
    "Financials / XLF",
    "$58.29 / +0.52%",
    "偏強",
    "收益率抽升短線支持銀行淨息差想像，XLF 跑贏大盤；但若曲線過度倒掛，小型銀行仍要小心。",
  ],
  [
    "Energy / XLE",
    "$62.21 / +0.44%",
    "偏強",
    "油價下跌但能源股仍微升，反映投資者未完全放棄地緣風險溢價。",
  ],
  [
    "Communication Services / XLC",
    "$107.76 / +0.37%",
    "偏強",
    "Meta 近乎持平、Alphabet 小跌，板塊靠分散成分股守住正回報。",
  ],
  [
    "Health Care / XLV",
    "$188.88 / +0.29%",
    "中性偏強",
    "防守板塊有承接；通脹數據後資金局部轉向較低 beta。",
  ],
  [
    "Consumer Staples / XLP",
    "$91.03 / +0.15%",
    "中性",
    "CPI 裡食品價格仍升，但防守消費只小升，未見大規模避險。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$121.05 / +0.03%",
    "中性",
    "Amazon +1.48%、Tesla +0.46% 幫板塊守平，但高利率仍壓住消費 beta。",
  ],
  [
    "Industrials / XLI",
    "$168.73 / -0.09%",
    "中性",
    "工業股由上日強勢回氣；10Y 接近 5% 令 cyclicals 估值受考驗。",
  ],
  [
    "Semiconductors / SOXX",
    "$146.59 / -0.12%",
    "中性",
    "SOXX 只微跌，因 AMD / Broadcom 抵銷 Nvidia 大跌；半導體內部輪動仍明顯。",
  ],
  [
    "Utilities / XLU",
    "$43.73 / -0.14%",
    "偏弱",
    "高債息對派息板塊不利，即使市場回吐亦未見資金大幅買 utilities 避險。",
  ],
  [
    "Real Estate / XLRE",
    "$44.58 / -0.13%",
    "偏弱",
    "REITs 對長債息敏感，10Y 接近 5% 仍是估值壓力。",
  ],
  [
    "Materials / XLB",
    "$52.85 / -0.17%",
    "偏弱",
    "美元轉強與通脹壓力夾擊材料股，跟不上金融、能源。",
  ],
  [
    "Technology / XLK",
    "$168.91 / -1.15%",
    "最弱",
    "科技係今日最大拖累；Nvidia 與 Microsoft 下跌令 XLK 明顯跑輸。",
  ],
];

const macroRows = [
  {
    topic: "CPI / Fed 定價",
    data: "CNBC / BLS：10月 headline CPI +0.4% MoM，高過 +0.3% 預期；core CPI +0.3% MoM，高過 +0.2% 預期。BLS 因 2025年10月政府停擺資料不足，未公布可比 12個月 CPI 變動。CME FedWatch 相關報道顯示 12月不加息機率 0%，+25bp 約 88.5%，+50bp 約 11.5%。",
    meaning:
      "市場由『可能加息』變成『加息基本入價』，而且開始重新討論 50bp 尾端風險；這對 growth multiple 是即時壓力。",
  },
  {
    topic: "美債息",
    data: "CNBC：2Y yield 約 4.736%（+逾 18bp）、10Y 約 4.992%（+約 13bp）、30Y 約 5.352%（+逾 9bp）。Reuters 口徑近似：2Y 約 4.74%、10Y 約 4.988%。Yahoo 4pm 口徑：10Y 4.983%、30Y 5.350%。",
    meaning:
      "10Y 再逼近 5% 是估值警號；2Y 急升說明市場把焦點放在 Fed policy path，而不是單純長端供需。",
  },
  {
    topic: "美元",
    data: "Reuters / Euronext：美元指數約 +0.6% 至 102.29；Yahoo DX-Y.NYB close 102.254（+0.59%）。",
    meaning:
      "美元轉強通常壓住黃金、海外收入股與風險資產；今日 Crypto 同黃金一齊跌，與這條線吻合。",
  },
  {
    topic: "原油",
    data: "CNBC：Brent settle $91.49（-1.17%），WTI settle $86.04（-0.93%）；盤中 Brent 一度跌穿 $90，因市場憧憬伊朗衝突降溫。Yahoo 4pm 附近口徑：WTI $86.43、Brent $92.02。",
    meaning:
      "油價回落理論上幫通脹，但今次 CPI 已經高過預期，市場先交易 Fed 壓力；能源股未有大跌，反映風險溢價仍在。",
  },
  {
    topic: "黃金",
    data: "CNBC：spot gold 一度跌近 3%，約 $4,021；Reuters / Euronext 口徑 spot gold 約 $4,043.73（-2.3%）；Yahoo futures close $4,040.50（-1.80%）。",
    meaning:
      "高美元 + 高收益率提高持有黃金的機會成本，即使通脹高企亦未能支持金價。",
  },
  {
    topic: "市場廣度 / 成交",
    data: "Reuters：NYSE 跌股對升股約 2.27:1，Nasdaq 約 2.26:1；S&P 500 有 7 個 52週新高 / 3 個新低，Nasdaq 有 59 個新高 / 238 個新低；美股成交約 17.08bn 股，低於 20日均量 18.83bn。",
    meaning:
      "跌市廣度偏弱但成交不算恐慌；Nasdaq 新低多過新高，顯示科技內部仍有壓力。",
  },
  {
    topic: "Crypto / 流動性",
    data: "Binance Vision 21:00 UTC：BTC $73,852.90、ETH $2,061.09、SOL $83.32，較 11/09 同時間分別 -1.27%、-3.12%、-3.74%。",
    meaning:
      "Crypto 明顯跑輸美股大盤，尤其 ETH / SOL，反映鏈上 beta 對美元及利率重定價更敏感。",
  },
  {
    topic: "消費者預期",
    data: "New York Fed 11/09：一年期通脹預期 3.9%、三年 3.3%、五年 3.0% 均持平；認為一年後失業率更高的平均概率升至 45.3%，為 2020年4月以來最高。",
    meaning:
      "家庭通脹預期仍高於 Fed 目標，同時就業擔憂升溫；這令 Fed 更難太快轉鴿。",
  },
];

const stockRows = [
  [
    "Nvidia",
    "NVDA $168.89 / -5.47%",
    "連跌第二日，是 Nasdaq 最大拖累之一。CNBC / Reuters 報道市場關注 CEO Jensen Huang 相關公司治理與內部調查消息；短線先看 $165-$170 能否止跌。",
  ],
  [
    "Microsoft",
    "MSFT $533.16 / -2.20%",
    "大型軟件 / AI 平台股受高利率與競爭消息夾擊；Microsoft 下跌令 XLK 壓力加大。",
  ],
  [
    "AMD / Broadcom",
    "AMD $515.21 / +1.30%；AVGO $331.98 / +3.91%",
    "半導體不是全面撤退。AMD、Broadcom 逆市向上，顯示資金由 Nvidia 單名風險轉去其他 AI infrastructure beta。",
  ],
  [
    "Amazon / Tesla",
    "AMZN $270.87 / +1.48%；TSLA $379.78 / +0.46%",
    "高 beta 消費科技仍有承接，幫 XLY 守平；若 10Y 穿 5%，這類股份會再受估值測試。",
  ],
  [
    "Apple / Alphabet / Meta",
    "AAPL $348.51 / -0.62%；GOOGL $287.38 / -0.27%；META $641.39 / 約持平",
    "Megacap 分化，不是全面 risk-off；但缺乏一致上升動力，令指數難以延續上日反彈。",
  ],
  [
    "Dow movers",
    "Investing.com：UnitedHealth +1.89%、Amazon +1.48%、Travelers +1.41%；Nvidia -5.47%、Nike -3.05%、Caterpillar -2.39%",
    "Dow 跌幅較細，是因防守醫療和部分消費股抵銷科技 / 工業回吐。",
  ],
  [
    "S&P 500 單日強弱",
    "Investing.com：Charter +10.61%、Take-Two +8.31%、EPAM +4.67%；Skydance -7.59%、Moderna -6.75%、First Solar -5.55%",
    "個股層面仍有題材股跑出，但下跌名單涵蓋 media、biotech、solar，反映風險偏好不平均。",
  ],
  [
    "BTC / ETH / SOL",
    "BTC -1.27%；ETH -3.12%；SOL -3.74%（對 11/09 21:00 UTC）",
    "Crypto 對高美元、高實質利率最敏感；ETH / SOL 跑輸 BTC，代表高 beta 資產風險胃納更弱。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$73,852.90",
    "-$949.10 / -1.27%",
    "BTC 跌穿上日 4pm ET 的 $74.8k，短線先看 $73k；要重上 $74.8k-$75.5k，才可說明風險胃納修復。",
  ],
  [
    "ETH",
    "$2,061.09",
    "-$66.32 / -3.12%",
    "ETH 明顯跑輸 BTC，$2,050-$2,000 是心理支持帶；若失守，鏈上 beta 會更弱。",
  ],
  [
    "SOL",
    "$83.32",
    "-$3.24 / -3.74%",
    "SOL 跌幅最大，高 beta 特徵明顯；要先收復 $86-$87，否則短線仍偏弱。",
  ],
];

const newsItems = [
  "BLS / CNBC：10月 CPI +0.4% MoM、core +0.3% MoM，均高過預期；BLS 未發布 12個月 CPI 變動，因 2025年10月資料受政府停擺影響。",
  "Reuters / CNBC：Fed Governor Christopher Waller 指若核心通脹再熱，12月可考慮更大幅度加息；Dallas Fed Logan 亦稱至少仍需兩次 25bp 加息。",
  "CME FedWatch 相關報道：12月 +25bp 約 88.5%、+50bp 約 11.5%、按兵不動 0%，比前一日更鷹。",
  "CNBC / Reuters：10Y yield 一度衝近 5%，2Y yield 急升約 18-19bp；一場偏弱 10年期國債拍賣加重債市壓力。",
  "CNBC / Reuters：Nvidia 因 CEO 相關治理 / 內部調查消息再跌約 5.5%，兩日累跌接近 10%，拖累科技股。",
  "CNBC：Brent 盤中跌穿 $90，收 $91.49；WTI 收 $86.04，因市場憧憬伊朗衝突降溫及供應風險下降。",
  "New York Fed：家庭一年期通脹預期維持 3.9%，但對失業率上升的平均概率升至 45.3%，就業信心有陰影。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,500 / 7,450 是第一支持；跌穿 7,500 代表 CPI 後賣壓未完。",
    "7,550 / 7,600 是阻力；要企回 7,550 才算修復今日回吐。",
  ],
  [
    "Dow",
    "52,000 / 51,700 是支持；Dow 跌幅細，守住可維持藍籌韌性。",
    "52,400 / 52,800 是阻力；突破才重返上日強勢。",
  ],
  [
    "Nasdaq",
    "25,000 / 24,800 是支持；跌穿 25,000 會令科技回吐加速。",
    "25,250 / 25,500 是阻力；需要 Nvidia 止跌、MSFT 企穩。",
  ],
  [
    "Russell 2000",
    "2,800 / 2,760 是支持；高短息下小型股不宜失守。",
    "2,850 / 2,900 是阻力；要靠收益率回落先有力突破。",
  ],
  [
    "10Y yield",
    "4.90% / 4.86% 是舒緩線；跌回去有利 growth multiple。",
    "5.00% / 5.10% 是壓力區；若企穩 5% 以上，Nasdaq 會更難升。",
  ],
  [
    "BTC",
    "$73,000 / $72,000 是支持；跌穿代表 crypto risk-off 擴大。",
    "$74,800 / $75,500 是阻力；重上才算收復 CPI 後跌幅。",
  ],
];

const planRows = [
  [
    "短線",
    "今日不是崩盤，但 CPI 高過預期令利率路徑重新轉鷹。倉位上要把昨日 relief rally 當成反彈，而不是確認新一輪上升趨勢。",
  ],
  [
    "板塊",
    "短線相對強在 XLF、XLE、XLC、XLV；弱在 XLK、XLB、XLU、XLRE。若 10Y 保持接近 5%，避免過度追高長 duration 科技。",
  ],
  [
    "AI / Tech",
    "AI trade 仍有分化：NVDA 是 headline risk，AMD / AVGO 仍有資金流入。較好做法是等 SOXX 企穩及 Nvidia 止跌，而不是只憑單日跌幅撈底。",
  ],
  [
    "Macro",
    "未來 24-48 小時最重要是 10Y 能否回到 4.90% 以下、FedWatch 的 50bp 機率會否繼續升，以及美元是否續強。",
  ],
  [
    "Crypto",
    "BTC、ETH、SOL 同步跌，說明流動性敏感資產未確認 risk-on。BTC 未重上 $74.8k-$75.5k 前，不宜用 crypto 作為股票反彈確認訊號。",
  ],
];

function SourceLinks() {
  return (
    <ol className="sources">
      {sources.map((source) => (
        <li key={source.url}>
          <a href={source.url}>{source.name}</a>
        </li>
      ))}
    </ol>
  );
}

export default function USCloseBrief20261110() {
  return (
    <main className="sheet">
      <style>{`
        .sheet {
          width: 1120px;
          margin: 0 auto;
          padding: 36px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.48;
        }
        .hero {
          background: #102a43;
          color: white;
          border-radius: 24px;
          padding: 30px;
          border: 1px solid #243b53;
        }
        .eyebrow { letter-spacing: 0.12em; text-transform: uppercase; font-size: 13px; opacity: 0.85; }
        h1 { margin: 8px 0 10px; font-size: 38px; line-height: 1.08; }
        .subtitle { font-size: 18px; opacity: 0.94; max-width: 940px; }
        .meta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 18px; }
        .pill { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.28); padding: 8px 12px; border-radius: 999px; font-size: 13px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 18px; }
        .card { background: white; border: 1px solid #e2e8f0; border-radius: 20px; padding: 20px; break-inside: avoid; }
        .wide { grid-column: 1 / -1; }
        h2 { margin: 0 0 12px; color: #0f766e; font-size: 23px; }
        h3 { margin: 12px 0 6px; color: #334155; font-size: 17px; }
        ul { margin: 0; padding-left: 20px; }
        li { margin: 7px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 14px; }
        th { text-align: left; color: #475569; background: #f1f5f9; }
        th, td { border-bottom: 1px solid #e5e7eb; padding: 9px 8px; vertical-align: top; }
        .tag { display: inline-block; padding: 3px 8px; border-radius: 999px; font-size: 12px; font-weight: 800; }
        .green { color: #047857; }
        .red { color: #b91c1c; }
        .amber { color: #b45309; }
        .tag.green { background: #dcfce7; }
        .tag.red { background: #fee2e2; }
        .tag.amber { background: #fef3c7; }
        .note { font-size: 13px; color: #64748b; }
        .sources { columns: 2; font-size: 12px; padding-left: 18px; }
        a { color: #1d4ed8; text-decoration: none; }
        .disclaimer { background: #fff7ed; border-color: #fed7aa; color: #7c2d12; font-size: 13px; }
        @media print {
          .sheet { width: auto; padding: 24px; }
          a { color: #1d4ed8; }
        }
      `}</style>

      <section className="hero">
        <div className="eyebrow">US Close Brief</div>
        <h1>美股收盤懶人包｜完整版</h1>
        <div className="subtitle">
          {reportDate} 收市｜CPI 高過預期、債息急升，科技拖累大市；但 VIX
          回落，暫時未算恐慌式拋售
        </div>
        <div className="meta">
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">語言：繁體中文 / 自然廣東話</span>
          <span className="pill">
            Crypto：Binance Vision 21:00 UTC 1m close
          </span>
        </div>
      </section>

      <section className="grid">
        <article className="card wide">
          <h2>1. 30 秒重點</h2>
          <ul>
            {keyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <article className="card wide">
          <h2>2. 大市一眼睇</h2>
          <table>
            <thead>
              <tr>
                <th>指標</th>
                <th>收市</th>
                <th>變動</th>
                <th>解讀</th>
              </tr>
            </thead>
            <tbody>
              {indexRows.map((row) => (
                <tr key={row.asset}>
                  <td>{row.asset}</td>
                  <td>{row.close}</td>
                  <td>{row.change}</td>
                  <td>{row.read}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            指數採 AP / Reuters / CNBC close 口徑交叉；Russell 2000 與 VIX 以
            Yahoo chart close 輔助確認。
          </p>
        </article>

        <article className="card">
          <h2>3. 今日點解跌</h2>
          <ul>
            <li>
              <strong>CPI 高過預期：</strong>headline +0.4%、core +0.3%，令 12月
              Fed 再加息更似基本情境。
            </li>
            <li>
              <strong>債息抽升：</strong>2Y 升至約 4.74%，10Y 逼近 5%，直接壓住
              Nasdaq / growth valuation。
            </li>
            <li>
              <strong>科技權重拖累：</strong>Nvidia -5.47%、Microsoft
              -2.20%，XLK 成為最弱板塊。
            </li>
            <li>
              <strong>但不是全面恐慌：</strong>VIX
              反跌、金融及能源上升，反映資金在板塊內輪動，多過全面撤走。
            </li>
          </ul>
        </article>

        <article className="card">
          <h2>4. 市場廣度與資金流</h2>
          <ul>
            <li>Reuters：NYSE 跌股對升股約 2.27:1，Nasdaq 約 2.26:1。</li>
            <li>Nasdaq 52週新低 238 個，多過新高 59 個，科技內部壓力仍重。</li>
            <li>
              成交約 17.08bn 股，低於 20日均量 18.83bn，跌市未見恐慌成交。
            </li>
            <li>
              資金相對流向金融、能源、醫療與部分通訊服務；科技、材料、REITs
              被利率壓住。
            </li>
          </ul>
        </article>

        <article className="card wide">
          <h2>5. 板塊紅綠燈</h2>
          <table>
            <thead>
              <tr>
                <th>板塊 / ETF</th>
                <th>收市 / 日變動</th>
                <th>狀態</th>
                <th>解讀</th>
              </tr>
            </thead>
            <tbody>
              {sectorRows.map(([sector, move, status, read]) => (
                <tr key={sector}>
                  <td>{sector}</td>
                  <td>{move}</td>
                  <td>
                    <span
                      className={`tag ${
                        status.includes("弱")
                          ? "red"
                          : status.includes("中性")
                            ? "amber"
                            : "green"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                  <td>{read}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            Sector ETF 用 Yahoo regular-market close / previous close
            計算；11/10 日線資料部分延遲，所以採 21:00 UTC 收市報價口徑。
          </p>
        </article>

        <article className="card wide">
          <h2>6. 宏觀白話版</h2>
          <table>
            <thead>
              <tr>
                <th>主題</th>
                <th>數據 / 來源口徑</th>
                <th>點解重要</th>
              </tr>
            </thead>
            <tbody>
              {macroRows.map((row) => (
                <tr key={row.topic}>
                  <td>{row.topic}</td>
                  <td>{row.data}</td>
                  <td>{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card">
          <h2>7. 5 大新聞 / 事件</h2>
          <ul>
            {newsItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h2>8. 重點股票</h2>
          <table>
            <tbody>
              {stockRows.map(([name, move, read]) => (
                <tr key={name}>
                  <td>
                    <strong>{name}</strong>
                    <br />
                    <span className="note">{move}</span>
                  </td>
                  <td>{read}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card">
          <h2>9. BTC / ETH / SOL</h2>
          <table>
            <thead>
              <tr>
                <th>幣種</th>
                <th>Binance 21:00 UTC</th>
                <th>較 11/09 21:00 UTC</th>
                <th>解讀</th>
              </tr>
            </thead>
            <tbody>
              {cryptoRows.map(([coin, price, change, read]) => (
                <tr key={coin}>
                  <td>{coin}</td>
                  <td>{price}</td>
                  <td>{change}</td>
                  <td>{read}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            Binance 直連 API 在此環境受限，今次採 Binance Vision public data API
            1-minute klines；時間點精準為 2026-11-10 21:00 UTC，即美股 4:00pm ET
            附近（11月紐約為 EST）。
          </p>
        </article>

        <article className="card">
          <h2>10. 技術位</h2>
          <table>
            <thead>
              <tr>
                <th>資產</th>
                <th>支持</th>
                <th>阻力</th>
              </tr>
            </thead>
            <tbody>
              {technicalRows.map(([asset, support, resistance]) => (
                <tr key={asset}>
                  <td>{asset}</td>
                  <td>{support}</td>
                  <td>{resistance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card">
          <h2>11. 下個交易日觀察清單</h2>
          <ul>
            <li>10Y yield 能否守在 5% 以下；若升穿 5%，Nasdaq 壓力會放大。</li>
            <li>FedWatch 50bp 機率會否由約 11%-12% 繼續升。</li>
            <li>Nvidia 能否止跌；若再跌，AI sentiment 會拖住 SOXX。</li>
            <li>美元 DXY 是否續企 102 上方，影響黃金與 crypto。</li>
            <li>BTC 能否重上 $74.8k-$75.5k；ETH 能否守 $2,050-$2,000。</li>
          </ul>
        </article>

        <article className="card wide">
          <h2>12. 操作提示與最終觀點</h2>
          <table>
            <tbody>
              {planRows.map(([label, text]) => (
                <tr key={label}>
                  <td>
                    <strong>{label}</strong>
                  </td>
                  <td>{text}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>最終觀點</h3>
          <p>
            今日大市的核心不是單純「跌」，而是市場重新接受一個更鷹的利率路徑：
            CPI 高過預期，2Y / 10Y 同時抽升，美元轉強，令 Nasdaq、黃金與 Crypto
            一齊受壓。不過 VIX 反跌、金融能源偏強、AMD / AVGO
            逆市升，代表資金未有全面逃走，只是在高利率環境下重新篩選資產。
            短線我會把 10Y 5%、Nasdaq 25,000、Nvidia 止跌與 BTC $73k
            視為四條防線；守得住，可以是健康回吐，守不住就要降低高 beta
            exposure。
          </p>
        </article>

        <article className="card wide">
          <h2>來源</h2>
          <SourceLinks />
          <p className="note">
            如同一數據有差異，本文優先採用 Reuters / CNBC / AP /
            官方發布；即市資料則標明時間點。債息、美元、黃金、油價及 FedWatch
            因報價時間與合約口徑不同，文中已標示差異或採用區間。
          </p>
        </article>

        <article className="card wide disclaimer">
          <p>{disclaimer}</p>
        </article>
      </section>
    </main>
  );
}
