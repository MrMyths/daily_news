import React from "react";

const reportDate = "2026-11-11";
const publishedAt =
  "香港時間 2026-11-12 09:00（週四更新；數據截至美股 11/11 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Wednesday 11/11/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-027cd5f4583d1a11c1795150bf065afb",
  },
  {
    name: "AP News - AI stocks rebound, and Wall Street nearly returns to where it was before last week's sell-off",
    url: "https://apnews.com/article/stock-markets-ai-earnings-oil-297d040c83844a9563327340b370c24e",
  },
  {
    name: "Reuters via MarketScreener - Stocks end higher as CoreWeave results ease AI spending worries",
    url: "https://ca.marketscreener.com/news/stocks-end-higher-as-coreweave-results-ease-ai-spending-worries-ce785edbd18cf726",
  },
  {
    name: "Reuters via Investing.com - Trading Day: AI cheer banishes rate hike fear",
    url: "https://www.investing.com/news/economy-news/ai-cheer-banishes-rate-hike-fear-5019950",
  },
  {
    name: "CNBC - Stock market today: Live updates for Nov. 11, 2026",
    url: "https://www.cnbc.com/2026/11/11/stock-market-today-live-updates.html",
  },
  {
    name: "Investing.com - U.S. stocks higher at close of trade",
    url: "https://www.investing.com/news/stock-market-news/us-stocks-higher-at-close-of-trade-dow-jones-industrial-average-up-048-5019892",
  },
  {
    name: "Yahoo Finance - Stock market today Nov. 11 live coverage",
    url: "https://finance.yahoo.com/markets/live/stock-market-today-wednesday-november-11-dow-sp-500-nasdaq-nvidia-treasurys-veterans-day-140638547.html",
  },
  {
    name: "CNBC - Treasury yields jump after CPI and Waller comments",
    url: "https://www.cnbc.com/2026/11/10/us-bonds-treasurys-yields.html",
  },
  {
    name: "Saxo - Market Quick Take: US Treasury yields rip higher / Veterans Day closure",
    url: "https://www.home.saxo/en-gb/content/articles/macro/market-quick-take---us-treasury-yields-rip-higher---11-november-2026-11112026",
  },
  {
    name: "CNBC - Dollar climbs as traders raise December Fed hike bets",
    url: "https://www.cnbc.com/2026/11/11/dollar-gains-traction-as-fed-speakers-warn-of-risks-from-inflation.html",
  },
  {
    name: "CNBC - Oil rises after Iran says no nuclear material will leave the country",
    url: "https://www.cnbc.com/2026/11/11/oil-rises-from-two-month-low-as-hormuz-shipping-attacks-offset-iran-truce-hopes.html",
  },
  {
    name: "CNBC - Gold falls as hot inflation figures, higher dollar weigh",
    url: "https://www.cnbc.com/2026/11/11/gold-edges-higher-after-sharp-selloff-fed-hike-bets-weigh.html",
  },
  {
    name: "Investing.com - Fed rate hike odds in December at 88% after hot CPI",
    url: "https://www.investing.com/news/economy-news/fed-rate-hike-odds-in-december-at-88-after-hot-cpi-cme-fedwatch-5017585",
  },
  {
    name: "Motley Fool - AMD jumps as AI chip demand signs improve",
    url: "https://www.fool.com/coverage/stock-market-today/2026/11/11/stock-market-today-nov-11-advanced-micro-devices-jumps-and-not-only-because-of-coreweave-s-results/",
  },
  {
    name: "Yahoo Finance historical data - VIX and major indices",
    url: "https://finance.yahoo.com/quote/%5EVIX/history/",
  },
  {
    name: "StockAnalysis - XLK historical price data",
    url: "https://stockanalysis.com/etf/xlk/history/",
  },
  {
    name: "Close Print - US sector ETF daily close snapshot",
    url: "https://www.closeprint.com/markets/us-sector-etfs",
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
  "美股星期三反彈：Dow 52,486.49（+254.60 / +0.49%）、S&P 500 7,619.38（+98.45 / +1.31%）、Nasdaq 25,466.19（+400.31 / +1.60%），Russell 2000 2,846.26（+0.88%）。",
  "主線係 AI / 晶片 relief rally 壓過加息憂慮：CoreWeave 業績與指引紓緩市場對 AI spend 的疑慮，Reuters 指 S&P 科技板塊升約 2.7%，費半升約 5.6%-5.7%。",
  "債市因 Veterans Day 休市，11/11 沒有新的現金美債收市價；最新可比口徑仍是 11/10：2Y 約 4.736%-4.74%，10Y 約 4.99%，30Y 約 5.35%。",
  "美元繼續強：CNBC 指 DXY 約 102.90（+0.68%）、美元兌日圓迫近 160；黃金跌穿 / 貼近 $4,000，反映高美元與加息定價仍壓住非孳息資產。",
  "板塊 10/11 上升：科技、能源、工業最強，Consumer Discretionary 輕微落後；VIX 跌至 17.49（-10.12%），恐慌明顯降溫。",
  "Crypto 以 Binance Vision 2026-11-11 21:00 UTC 1m close（美股 4:00pm ET）計：BTC $74,648.01（較 11/10 同時間 +1.08%）、ETH $2,081.70（+1.00%）、SOL $84.96（+1.97%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "52,486.49",
    change: "+254.60 / +0.49%",
    read: "Dow 參與反彈但跑輸 Nasdaq，Caterpillar、Nvidia、Cisco 是較強成分；McDonald's、Microsoft、Amazon 拖後腿。",
  },
  {
    asset: "S&P 500",
    close: "7,619.38",
    change: "+98.45 / +1.31%",
    read: "S&P 500 接近收復上週 AI sell-off；AP 指距離上月歷史高位約 2.6%。",
  },
  {
    asset: "Nasdaq Composite",
    close: "25,466.19",
    change: "+400.31 / +1.60%",
    read: "Nasdaq 領升，主要靠 AI infrastructure、memory、semis 反彈；但收市後 Nvidia 新聞令期貨回吐。",
  },
  {
    asset: "Russell 2000",
    close: "2,846.26",
    change: "+24.88 / +0.88%",
    read: "小型股跟升但仍受高短息壓制；債市休市令利率壓力暫時沒有擴大。",
  },
  {
    asset: "VIX",
    close: "17.49",
    change: "-1.97 / -10.12%",
    read: "VIX 連續回落，市場把焦點由恐慌拋售轉回 AI earnings 與板塊輪動。",
  },
  {
    asset: "Philadelphia SOX",
    close: "約 10,564.1",
    change: "+約 5.66%",
    read: "Reuters / Investing.com 指所有成分股上升，係今日 risk-on 的核心。",
  },
];

const sectorRows = [
  [
    "Technology / XLK",
    "$174.36-$174.39 / +3.23%（S&P tech +約 2.7%-2.8%）",
    "最強",
    "CoreWeave 業績令 AI spend 疑慮降溫；XLK 與 S&P tech 口徑均顯著跑贏大市。",
  ],
  [
    "Semiconductors / SOXX、SOX",
    "SOXX 約 $155.40 / +約 6.0%；SOX +約 5.66%",
    "最強",
    "費半所有成分股上升，MU、SNDK、ARM、DELL、INTC、AMD 帶動資金重新買 AI hardware beta。",
  ],
  [
    "Energy / XLE",
    "$63.36-$63.37 / +約 1.82%",
    "偏強",
    "油價反彈，Brent +1.39%、WTI +0.57%，因伊朗相關供應風險重新浮現。",
  ],
  [
    "Industrials / XLI",
    "$170.97-$170.98 / +約 1.32%",
    "偏強",
    "Caterpillar +2.91% 支持 Dow；工業股跟隨 cyclical rebound。",
  ],
  [
    "Communication Services / XLC",
    "$108.63 / +約 0.83%",
    "偏強",
    "Alphabet +2.11% 支持板塊，但 Meta -1.97% 限制升幅。",
  ],
  [
    "Financials / XLF",
    "$58.62-$58.63 / +約 0.57%",
    "中性偏強",
    "高利率環境對大行淨息差有幫助，但區域銀行 / 信貸敏感資產仍要觀察。",
  ],
  [
    "Consumer Staples / XLP",
    "$91.45 / +約 0.45%",
    "中性",
    "防守消費跟升但不是主線；市場今日偏向買回成長與 cyclicals。",
  ],
  [
    "Materials / XLB",
    "$53.00 / +約 0.30%",
    "中性",
    "美元強限制材料股彈力，但 risk-on 氣氛令板塊微升。",
  ],
  [
    "Utilities / XLU",
    "$43.83-$43.84 / +約 0.24%",
    "中性偏弱",
    "派息板塊受高債息壓住，升幅明顯落後科技與能源。",
  ],
  [
    "Health Care / XLV",
    "$188.97-$188.98 / +約 0.04%",
    "中性偏弱",
    "防守板塊幾乎平收，資金今日不在避險。",
  ],
  [
    "Real Estate / XLRE",
    "$44.56-$44.58 / 約 -0.02% 至 -0.03%",
    "偏弱",
    "長債息仍接近 5%，REITs 估值壓力未解除。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$120.98 / 約 -0.06% 至 -0.07%",
    "最弱",
    "Amazon -1.74%、McDonald's -2.61% 拖累，抵銷 Tesla +2.91%。",
  ],
];

const macroRows = [
  {
    topic: "AI earnings vs rate fear",
    data: "Reuters / CNBC：CoreWeave regular session 升約 24.7%，公司稱 adjusted basis 2028 上半年可轉盈，紓緩市場對 AI spend / 債務融資擴張的擔心；S&P tech +約 2.7%，semis +約 5.6%。",
    meaning:
      "今日市場先交易『AI demand 還未死』，所以即使 Fed 加息定價仍鷹，大市仍可反彈。",
  },
  {
    topic: "美債息 / Veterans Day",
    data: "11/11 美國債市因 Veterans Day 休市，沒有新的 cash Treasury close。最新可比口徑為 11/10：CNBC 2Y 約 4.736%、10Y 約 4.992%、30Y 約 5.352%；Saxo 亦標示 2Y 約 4.74%、10Y 約 4.99%。",
    meaning:
      "今日股票反彈有一部分是債市休市給了喘息位；真正測試在債市重開後 10Y 能否守在 5% 以下。",
  },
  {
    topic: "FedWatch / 加息定價",
    data: "Investing.com 引 CME FedWatch：12月 +25bp 約 88.8%，+50bp 約 11.2%，不加息 0%。CNBC 美元報道指 +25bp 機率約 87%；黃金報道提及 +50bp 機率升至 13.2%。",
    meaning:
      "不同時間點的機率有差異，但方向一致：市場已不再定價 12月 hold，50bp 尾端風險開始存在。",
  },
  {
    topic: "美元",
    data: "CNBC：DXY 約 +0.68% 至 102.90，創 2025年4月以來最高；美元兌日圓 +0.69% 至 159.84，迫近 160；歐元跌至約 $1.11。Investing.com 口徑 DXY futures +0.70% 至 102.85。",
    meaning:
      "美元強是黃金與非美資產的壓力源；若 DXY 企穩 103 附近，risk-on 會較脆弱。",
  },
  {
    topic: "原油",
    data: "CNBC / Reuters：Brent settle $92.76（+1.39%），WTI settle $86.53（+0.57%）；主因伊朗安全官員稱不會讓 enriched nuclear material 離境，令霍爾木茲 / 供應風險再升。",
    meaning:
      "油價反彈幫能源股，但亦可能令通脹擔憂更難消退；如果油價續彈，Fed 鷹派敘事會更硬。",
  },
  {
    topic: "黃金",
    data: "CNBC：spot gold -1.1% 至約 $3,984.97；美國12月 gold futures 約 -1% 至 $3,991.4。Investing.com 收市口徑 futures 約 $3,991.62，其他 Reuters 轉載結算口徑約 $4,000.50。",
    meaning:
      "來源因合約與時間點有差異，但共同訊息是：黃金被高美元、高利率預期壓住，$4,000 附近成短線分水嶺。",
  },
  {
    topic: "市場廣度 / 波動",
    data: "Investing.com：NYSE 升股 1,497 對跌股 1,327；Nasdaq 升股 2,058 對跌股 1,392。Reuters：S&P 500 17 個 52週新高 / 0 個新低，Nasdaq 77 新高 / 159 新低。VIX 17.49（-10.12%）。",
    meaning:
      "廣度改善但不是全面爆升；Nasdaq 新低仍多過新高，說明 AI 反彈之下仍有個別壓力。",
  },
  {
    topic: "Crypto / 流動性",
    data: "Binance Vision 21:00 UTC：BTC $74,648.01、ETH $2,081.70、SOL $84.96，較 11/10 同時間分別 +1.08%、+1.00%、+1.97%。CNBC 美元報道亦指 bitcoin / ether 在當時段上升。",
    meaning:
      "Crypto 跟股票 risk-on 修復，但升幅不算爆炸；若美元續強，BTC 未企穩 $75k 上方前仍要小心。",
  },
];

const stockRows = [
  [
    "CoreWeave",
    "CRWV $60.77 / +24.71%",
    "今日 AI trade 的火車頭。公司業績與指引令市場相信 AI compute demand 仍有承接，亦暫時紓緩對 debt-funded expansion 的擔心。",
  ],
  [
    "Nvidia",
    "NVDA $173.73 / +2.87%；收市後一度跌約 8%-9%",
    "regular session 反彈，但 CNBC / Yahoo 指收市後受 WSJ / NYT 相關 CEO 報道拖累急跌。短線不是只看收市價，還要看隔晚 headline risk。",
  ],
  [
    "AMD / Intel / Broadcom",
    "AMD $552.90 / +7.32%；INTC $62.50 / +7.52%；AVGO 約 +約 4%",
    "AMD 受 CoreWeave demand 訊號與 Goldman Sachs 正面看法支持；Intel、Broadcom 亦受 semis broad rebound 帶動。",
  ],
  [
    "Memory / hardware winners",
    "MU $811.30 / +11.89%；DELL $373.68 / +11.75%；SNDK $977.69 / +13.69%；ARM $203.36 / +12.05%",
    "AI infrastructure 反彈最集中在 memory、server、storage、chip IP；這比單一 Nvidia 反彈更有廣度。",
  ],
  [
    "Megacap 分化",
    "AAPL $355.63 / +2.04%；GOOGL $293.45 / +2.11%；TSLA $390.84 / +2.91%；MSFT $521.13 / -2.26%；AMZN $266.17 / -1.74%；META $628.77 / -1.97%",
    "Nasdaq 升幅來自 semis / infrastructure 更大，不是 Mag 7 全線同步；MSFT、AMZN、META 下跌令反彈質素仍要觀察。",
  ],
  [
    "Dow movers",
    "CAT $601.61 / +2.91%；CSCO $100.76 / +2.66%；MCD $274.80 / -2.61%",
    "Dow 升幅較細但 breadth 尚可；工業與網絡設備跑出，餐飲與部分大型科技落後。",
  ],
  [
    "S&P 500 強弱",
    "MU +11.89%、DELL +11.75%、STX +9.99%；ABNB -3.09%、LULU -2.65%、MCD -2.61%",
    "強勢集中在 AI hardware / storage；弱勢集中在消費、旅遊和餐飲，反映高利率與消費 beta 仍受壓。",
  ],
  [
    "BTC / ETH / SOL",
    "BTC +1.08%；ETH +1.00%；SOL +1.97%（對 11/10 21:00 UTC）",
    "SOL 跑贏，說明高 beta crypto 有少量 risk-on；但幅度低於 semis，未算全面狂熱。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$74,648.01",
    "+$795.11 / +1.08%",
    "BTC 重上 $74k，但仍未明確突破 $75k-$75.5k；短線看美元與 10Y 重開後反應。",
  ],
  [
    "ETH",
    "$2,081.70",
    "+$20.61 / +1.00%",
    "ETH 回到 $2,080 附近，升幅略低於 BTC；要企穩 $2,100 先算鏈上 beta 修復。",
  ],
  [
    "SOL",
    "$84.96",
    "+$1.64 / +1.97%",
    "SOL 跑贏 BTC / ETH，但仍在 $85 附近拉鋸；$86-$87 是第一阻力。",
  ],
];

const newsItems = [
  "Reuters / CNBC：CoreWeave 業績與盈利時間表紓緩 AI spending 疑慮，推動 S&P 500 與 Nasdaq 各升超過 1%。",
  "Reuters：S&P 500 technology sector 升約 2.7%，semiconductors 升約 5.6%；所有 S&P 500 sectors 除 Consumer Discretionary 外均上升。",
  "CNBC / Yahoo：Nvidia regular session +2.87%，但收市後因 WSJ / NYT 相關 CEO 報道急跌約 8%-9%，可能影響下一交易日科技情緒。",
  "Saxo / CNBC：美債現貨市場因 Veterans Day 休市；最新 10Y 約 4.99%，重開後 5% 關口仍是焦點。",
  "CNBC：美元指數升至約 102.90，美元兌日圓逼近 160；市場繼續消化 hotter CPI 與 Fed 官員鷹派言論。",
  "CNBC：Brent 收 $92.76、WTI 收 $86.53；伊朗 / 霍爾木茲供應風險令油價由兩個月低位反彈。",
  "CNBC：Spot gold 跌至約 $3,984.97，因高美元與加息定價壓住非孳息資產。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,600 / 7,550 是第一支持；守住代表 AI 反彈有延續性。",
    "7,650 / 7,700 是阻力；突破才有機會重試上月高位區。",
  ],
  [
    "Dow",
    "52,400 / 52,000 是支持；Dow 要守 52,400 才保持藍籌參與度。",
    "52,700 / 53,000 是阻力；突破才算由科技反彈擴散到傳統藍籌。",
  ],
  [
    "Nasdaq",
    "25,400 / 25,250 是支持；跌回 25,250 代表 after-hours Nvidia 風險開始發酵。",
    "25,700 / 26,000 是阻力；需要 semis 續強同 Microsoft / Amazon 止跌。",
  ],
  [
    "SOX / Semis",
    "10,500 / 10,300 是支持；守住代表 dip-buying 未完。",
    "10,750 / 10,865 是阻力；接近短線均線與心理壓力區。",
  ],
  [
    "10Y yield",
    "4.90% / 4.85% 是舒緩線；跌回去有利 growth multiple。",
    "5.00% / 5.10% 是壓力區；重開後若穿 5%，今日反彈會被重新測試。",
  ],
  [
    "BTC",
    "$74,000 / $73,000 是支持；失守即代表 crypto 沒有跟上股票 risk-on。",
    "$75,000 / $75,500 是阻力；突破才算真正收復 CPI 後壓力。",
  ],
];

const planRows = [
  [
    "短線",
    "今日反彈質素比 11/10 好，因為 breadth 改善、VIX 下跌、semis 全面反彈；但債市休市令利率壓力暫停，不代表消失。",
  ],
  [
    "板塊",
    "主線是科技 / semis / energy / industrials；防守與 REITs 落後。若 10Y 重開後守不住 5%，要小心長 duration tech 再被估值壓力打回。",
  ],
  [
    "AI / Tech",
    "可以承認 AI dip-buying 回來，但不宜忽略 Nvidia after-hours headline risk。較穩陣做法是看 SOX 能否守住今日大陽燭，而不是單靠 NVDA。",
  ],
  [
    "Macro",
    "FedWatch 已經不再定價 hold，美元創多月高位，黃金跌穿 / 貼近 $4,000。宏觀背景仍偏緊，只是今日 AI earnings 暫時壓過它。",
  ],
  [
    "Crypto",
    "BTC / ETH / SOL 同步升，確認風險胃納有修復；但升幅不及 semis，BTC 未重上 $75k-$75.5k 前，只可視為跟隨反彈。",
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

export default function USCloseBrief20261111() {
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
          {reportDate} 收市｜AI /
          晶片急彈撐起大市；債市休市暫緩利率壓力，但美元與 Fed 定價仍偏鷹
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
            指數採 AP / Reuters / CNBC / Yahoo close 口徑交叉；費半與 VIX 以
            Reuters / Yahoo / Investing.com 輔助確認。
          </p>
        </article>

        <article className="card">
          <h2>3. 今日點解升</h2>
          <ul>
            <li>
              <strong>CoreWeave reset AI sentiment：</strong>
              業績與盈利時間表令市場覺得 AI compute demand 未斷，半導體與 AI
              infrastructure 全面反彈。
            </li>
            <li>
              <strong>債市休市：</strong>Veterans Day 令美債現貨暫停交易，10Y
              接近 5% 的壓力未有即日惡化。
            </li>
            <li>
              <strong>VIX 回落：</strong>VIX 跌至
              17.49，風險胃納由上週恐慌修復。
            </li>
            <li>
              <strong>但宏觀未轉鬆：</strong>美元續強、FedWatch 仍完全定價
              12月加息，反彈不是完全無風險。
            </li>
          </ul>
        </article>

        <article className="card">
          <h2>4. 市場廣度與資金流</h2>
          <ul>
            <li>
              Investing.com：NYSE 升股 1,497 對跌股 1,327；Nasdaq 升股 2,058
              對跌股 1,392。
            </li>
            <li>
              Reuters：S&P 500 有 17 個 52週新高 / 0 個新低；Nasdaq 有 77 新高 /
              159 新低。
            </li>
            <li>
              資金集中買回 AI
              hardware、memory、semis、energy、industrials；consumer
              discretionary 是少數落後板塊。
            </li>
            <li>
              VIX -10.12%，表示 option market 的即時恐慌下降，但 Nasdaq
              內部新低仍多過新高。
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
            Sector ETF 數字以 Yahoo / StockAnalysis / Close Print / ScannerXMI
            等第三方收市快照交叉；Reuters sector
            指數口徑用作方向驗證。若不同來源小數有差異，採區間表示。
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
                <th>較 11/10 21:00 UTC</th>
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
            1-minute klines；時間點精準為 2026-11-11 21:00 UTC，即美股 4:00pm ET
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
            <li>
              美債重開後 10Y 能否守在 5% 以下；若穿 5%，Nasdaq multiple
              會再被考驗。
            </li>
            <li>
              Nvidia after-hours 跌幅會否延續到 regular session，影響 SOX /
              QQQ。
            </li>
            <li>FedWatch 50bp 機率會否由約 11%-13% 繼續升。</li>
            <li>DXY 是否企穩 103 附近；若續強，黃金與 crypto 會受壓。</li>
            <li>BTC 能否突破 $75k-$75.5k；SOL 能否重上 $86-$87。</li>
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
            今日大市是一次有力度的 AI / 半導體 relief rally：S&P 500 與 Nasdaq
            升超過 1%，SOX 升逾 5%，VIX
            大跌，說明上週恐慌有明顯降溫。不過要記住，債市今日休市，並不代表利率壓力消失；FedWatch
            仍完全定價 12月加息，美元升到多月高位，黃金被壓到 $4,000
            附近。短線我會把 10Y 5%、SOX 10,500、Nasdaq 25,400 同 BTC $74k
            視為四條防線；守得住，反彈可以延續，守不住，就要把今日升市當成高波動環境下的反抽。
          </p>
        </article>

        <article className="card wide">
          <h2>來源</h2>
          <SourceLinks />
          <p className="note">
            如同一數據有差異，本文優先採用 Reuters / CNBC / AP /
            官方或交易所相關口徑；即市資料則標明時間點。11/11
            美債現貨休市，故美債收益率採 11/10 最新可比數據並明確標示。Sector
            ETF、黃金、油價、美元與 FedWatch
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
