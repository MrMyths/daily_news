import React from "react";

const reportDate = "2026-10-21";
const publishedAt =
  "香港時間 2026-10-22 09:00（週四更新；數據截至美股 10/21 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market news for Oct. 21, 2026",
    url: "https://www.cnbc.com/2026/10/20/stock-market-today-live-updates.html",
  },
  {
    name: "Reuters via Investing.com - Nasdaq leads Wall Street gains",
    url: "https://www.investing.com/news/economy-news/nasdaq-futures-lead-gains-as-spacex-super-micro-results-lift-ai-trade-4962357",
  },
  {
    name: "Reuters via Euronext - Stocks rise on AI-led earnings",
    url: "https://live.euronext.com/en/financial-news/stocks-rise-ai-led-earnings-frances-10-year-bond-yield-hits-5",
  },
  {
    name: "AP News - Major US stock indexes Wednesday 10/21/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-3ec2d8c93a390023ef8104973dea275f",
  },
  {
    name: "Yahoo Finance - Russell 2000 historical data",
    url: "https://finance.yahoo.com/quote/%5ERUT/history/",
  },
  {
    name: "Yahoo Finance - VIX historical data",
    url: "https://finance.yahoo.com/quote/%5EVIX/history/",
  },
  {
    name: "ScannerXMI - Sector ETF daily performance",
    url: "https://www.scannerxmi.com/sector/",
  },
  {
    name: "StockAnalysis - SOXX historical prices",
    url: "https://stockanalysis.com/etf/soxx/history/",
  },
  {
    name: "cdes - Fed rate expectations",
    url: "https://cdes.com/dashboards/fed-rates",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "U.S. Treasury - Daily Treasury rates",
    url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve",
  },
  {
    name: "CNBC - Oil price today: WTI, Brent",
    url: "https://www.cnbc.com/2026/10/21/oil-price-today-wti-brent-rise-on-middle-east-worries.html",
  },
  {
    name: "Morningstar / Dow Jones - Comex gold settlement",
    url: "https://www.morningstar.com/news/dow-jones/202610217675/comex-gold-settles-020-higher-at-413050-data-talk",
  },
  {
    name: "Yahoo Finance - US Dollar Index historical data",
    url: "https://finance.yahoo.com/quote/DX-Y.NYB/history/",
  },
  {
    name: "MarketWatch - U.S. economic calendar",
    url: "https://www.marketwatch.com/economy-politics/calendar",
  },
  {
    name: "Federal Reserve - October 2026 Beige Book",
    url: "https://www.federalreserve.gov/monetarypolicy/files/BeigeBook_20261014.pdf",
  },
  {
    name: "CNBC - After-hours movers META, TSLA, LRCX, IBM",
    url: "https://www.cnbc.com/2026/10/21/stocks-making-the-biggest-moves-after-hours-meta-tsla-lrcx-ibm.html",
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
  "美股週三全面收高，但主角換返科技同 AI：Dow 52,856.09（+360.21 / +0.69%）、S&P 500 7,757.17（+44.60 / +0.58%）、Nasdaq 26,702.86（+278.04 / +1.05%）。",
  "一句講晒：SpaceX 首次以上市公司身份報盈利、Super Micro 指引勝預期，令市場暫時放低 AI capex 回報疑慮，資金重新買入科技與半導體。",
  "升勢唔係完全平均：Russell 2000 只升至 2,781.02（+7.60 / +0.27%），VIX 跌至 16.68（-0.63 / -3.64%）；Reuters 指 NYSE 升跌比 1.37:1，屬改善但未算全面爆升。",
  "板塊紅綠燈：XLK +1.68%、SOXX +2.07%、XLI +0.90% 領先；XLC -1.09%、XLRE -0.79%、XLP -0.73%、XLV -0.49% 落後。",
  "宏觀方面，10Y yield 大約 5.11% 附近，FedWatch / cdes 顯示 10 月 FOMC 約 84% 機率不變、16% 機率加 25bp；12 月仍定價偏向再加一次，市場未轉向 easing。",
  "Crypto 以 Binance Vision 2026-10-21 20:00 UTC 1m close（美股 4:00pm ET）計：BTC $84,477.32（較 10/20 同時間 +2.35%）、ETH $2,492.20（+2.34%）、SOL $108.24（+2.14%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "52,856.09",
    change: "+360.21 / +0.69%",
    read: "Dow 再升並創近一個月高位；升幅不及 Nasdaq，但顯示 value / industrial rotation 未完全散。",
  },
  {
    asset: "S&P 500",
    close: "7,757.17",
    change: "+44.60 / +0.58%",
    read: "S&P 500 連升第三日；Reuters / CNBC 同步指 AI 相關盈利舒緩了過去幾週對 capex 回報的擔心。",
  },
  {
    asset: "Nasdaq Composite",
    close: "26,702.86",
    change: "+278.04 / +1.05%",
    read: "Nasdaq 領升，半導體與 AI infrastructure 反彈；這是今日 risk appetite 最清楚的訊號。",
  },
  {
    asset: "Russell 2000",
    close: "2,781.02",
    change: "+7.60 / +0.27%",
    read: "小型股續升但動能明顯弱過昨日；今日由 mega-cap / tech 帶頭，多過 broad cyclicals 全面追上。",
  },
  {
    asset: "VIX",
    close: "16.68",
    change: "-0.63 / -3.64%",
    read: "VIX 連續回落，短線恐慌降溫；但仍未返到 10 月上旬低位，代表 AI 信貸與利率風險未完全消失。",
  },
];

const sectorRows = [
  [
    "Semiconductors / SOXX",
    "$510.36 / +2.07%",
    "最強",
    "晶片反彈最突出；Reuters 指 Philadelphia Semiconductor Index 升約 2%，Super Micro 指引令 AI demand 未死的說法重新佔上風。",
  ],
  [
    "Technology / XLK",
    "$188.56 / +1.68%",
    "強",
    "S&P 500 information technology 升約 1.6%，是 11 個主要板塊中最強；Nvidia、AMD、Micron、Marvell 同步獲買盤支持。",
  ],
  [
    "Industrials / XLI",
    "$168.30 / +0.90%",
    "偏強",
    "工業股跟隨風險胃納改善，亦受 AI supply chain / capex 相關名字帶動；但非今日最核心主線。",
  ],
  [
    "Financials / XLF",
    "$56.03 / +0.55%",
    "偏強",
    "金融溫和上升，配合 Dow 走強；但短端利率仍高，銀行與 credit beta 未算無風險。",
  ],
  [
    "Utilities / XLU",
    "$42.00 / +0.29%",
    "中性",
    "昨日強勢防守板塊今日只小升，資金重心由 defensive yield 轉返科技成長。",
  ],
  [
    "Energy / XLE",
    "$68.17 / +0.29%",
    "中性",
    "油價兩邊波動，WTI 收低但 Brent 微升；能源股無大方向，更多是地緣風險 headline trade。",
  ],
  [
    "Materials / XLB",
    "$51.31 / +0.16%",
    "中性",
    "材料股細升，未見明顯工業需求信號；美元大致持平，商品價格亦分化。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$115.54 / +0.03%",
    "中性",
    "Tesla regular session +3.41% 幫手，但整體 discretionary 未跟 Nasdaq 爆上，反映消費與高息壓力仍在。",
  ],
  [
    "Health Care / XLV",
    "$178.94 / -0.49%",
    "偏弱",
    "昨日領漲後回吐；Abbott 下調 2026 銷售增長預測拖累 healthcare sentiment。",
  ],
  [
    "Consumer Staples / XLP",
    "$87.11 / -0.73%",
    "弱",
    "防守消費回落，資金由 defensive 轉去 AI / semis，risk-on 味道更重。",
  ],
  [
    "Real Estate / XLRE",
    "$42.04 / -0.79%",
    "弱",
    "REIT 在長債息未明顯再跌下回吐；住房數據偏弱，板塊仍受利率與需求雙重壓力。",
  ],
  [
    "Communication Services / XLC",
    "$108.98 / -1.09%",
    "最弱",
    "AT&T、Verizon、T-Mobile、Netflix、Alphabet 拖累；SpaceX 無線競爭憂慮打擊電訊股，Netflix 指引亦令 streaming 受壓。",
  ],
];

const macroRows = [
  {
    topic: "Fed / 利率定價",
    data: "cdes / CME FedWatch 口徑：10 月 28 日約 84% 機率按兵不動、16% 機率加 25bp；12 月會議約 13% hold、87% hike 25bp。",
    meaning:
      "市場今日買科技，不等於開始定價減息；更似是 earnings relief。只要 12 月加息定價仍高，估值股仍會對收益率 headline 敏感。",
  },
  {
    topic: "美債息",
    data: "Reuters 指 10Y yield 跌 0.6bp 至 5.111%；Investing history 顯示 10/21 close 5.106%；InvestingLive late snapshot 則見 2Y 4.8039%、10Y 5.1190%、30Y 5.4122%。",
    meaning:
      "不同來源因時間點有少量差異，但共同訊號是 10Y 維持在約 5.11% 附近，高息環境未解除；tech 今日靠業績與情緒頂住，而不是靠大幅降息預期。",
  },
  {
    topic: "原油",
    data: "CNBC / Xinhua：WTI Dec settlement $97.15（-$0.67 / -0.68%），Brent Dec settlement $108.82（+$0.03 / +0.03%）。Reuters 指盤中曾受 Hormuz / 中東供應風險推高，但俄烏談判希望抵消部分風險溢價。",
    meaning:
      "油價不是單邊上升，對通脹壓力略為紓緩；但 Brent-WTI spread 仍大，任何供應 disruption headline 都會再推高 inflation fear。",
  },
  {
    topic: "美元 / 黃金",
    data: "Yahoo DXY 101.70（接近持平；來源間 101.68-101.72）；Morningstar / Dow Jones 指 front-month Comex gold settle $4,130.50（+0.20%）。Investing.com 另報 spot gold settle $4,141.28、gold futures $4,159.50，屬合約與時間點差異。",
    meaning:
      "美元無大方向，黃金只是小反彈；市場焦點不是避險，而是科技 earnings 能否延續。",
  },
  {
    topic: "經濟日曆",
    data: "MarketWatch 顯示 10/21 無重磅美國經濟數據；10/22 將有 weekly jobless claims、Leading Indicators、Kansas City Fed survey，10/23 有 flash PMI 與 Michigan sentiment。",
    meaning:
      "今日行情主要由企業盈利與 AI sentiment 主導；接下來兩日才會再有 macro data 介入。",
  },
  {
    topic: "住房 / 信貸背景",
    data: "本週公布的住房數據偏弱：housing starts 1.221M、-5.2% MoM；pending home sales -7.3% MoM 至 66.0。Fed Beige Book 亦提到增長由輕微至溫和、物價壓力仍在。",
    meaning:
      "高利率已經壓住 housing，但未迫使 Fed 即刻轉鴿；對 REIT / homebuilders 仍要小心，不應只因單日反彈追高。",
  },
  {
    topic: "市場廣度 / 成交",
    data: "Reuters：NYSE 升跌比 1.37:1；Nasdaq 升股 2,690、跌股 2,068；全美成交約 16.11B 股，低過 20 日平均 17.10B。",
    meaning:
      "Breadth 正面但不算非常強，成交亦低於平均；今日更像 AI-led relief rally，而不是所有板塊同步 risk-on。",
  },
  {
    topic: "Crypto / 流動性",
    data: "Binance Vision 20:00 UTC：BTC $84,477.32、ETH $2,492.20、SOL $108.24，較 10/20 同時間分別 +2.35%、+2.34%、+2.14%。",
    meaning:
      "Crypto 跟住 Nasdaq 與 VIX 回落同步反彈，反映高 beta risk appetite 有回暖；但仍要看 BTC 能否企穩 $84k-$85k。",
  },
];

const stockRows = [
  [
    "SpaceX / Super Micro",
    "SPCX +7.79% 至約 $159.31；SMCI +9.55% 至約 $35.57",
    "Reuters 指 SpaceX 首次以上市公司身份報盈利，收入按年大增；Super Micro 對季度收入與 margin 展望勝預期，直接修補 AI infrastructure 信心。",
  ],
  [
    "AI peers：DELL / HPE / semis",
    "DELL +5.27%；HPE +3.7%；SOXX +2.07%",
    "市場把 SpaceX / SMCI 結果外推到 AI supply chain，Dell、HPE 與晶片股受惠；這是 Nasdaq 跑贏主因。",
  ],
  [
    "Tesla / Meta",
    "TSLA regular +3.41% 至 $386.47；META regular +0.47% 至 $697.52",
    "Tesla 受 SpaceX merger talk 及盤後業績前買盤支持；Meta 盤後因 Q3 revenue beat 與 Q4 guidance 較佳上升，但不同來源顯示盤後升幅約 3%-5%。",
  ],
  [
    "After-hours earnings",
    "CNBC：TSLA 盤後由升轉跌約 -2%；IBM 盤後約 -2%；LRCX 跌逾 5%；CSX +4%；QS +9%",
    "盤後反應提醒市場仍是 stock picker market：beat 之外，更要看指引、capex、free cash flow 與估值是否已反映好消息。",
  ],
  [
    "Communication losers",
    "T -6.45%；TMUS -2.54%；VZ -2.17%；NFLX -5.31%；GOOGL -1.62%",
    "通訊服務是今日最大拖累。AT&T 雖 beat，但 SpaceX 無線競爭疑慮令電訊股被沽；Netflix 因 Q4 profit / revenue outlook 遜預期下跌。",
  ],
  [
    "Healthcare / Abbott",
    "ABT -1.81%；XLV -0.49%",
    "Abbott 下調 2026 sales growth forecast，令昨日強勢 healthcare 回吐；資金今日不再偏向 defensives。",
  ],
  [
    "Bitcoin-linked names",
    "MSTR 約 +7.54%（來源：Swingfolio）",
    "BTC 在美股收市附近升穿 $84k，推動 bitcoin beta；但這類名字波動高，仍應以 BTC 支持位作風控。",
  ],
  [
    "BTC / ETH / SOL",
    "BTC +2.35%；ETH +2.34%；SOL +2.14%（對 10/20 20:00 UTC）",
    "三大 crypto 同步升，配合 Nasdaq risk-on；若後續科技股盤後反應轉弱，crypto 亦容易回吐。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$84,477.32",
    "+$1,939.31 / +2.35%",
    "BTC 由 $82.5k 區域反彈至 $84.5k 附近；短線要守 $83,500-$84,000，升穿 $85,500 才算 momentum 再開。",
  ],
  [
    "ETH",
    "$2,492.20",
    "+$56.88 / +2.34%",
    "ETH 重返 $2,480 上方，beta 有改善；若站穩 $2,500，下一站看 $2,550-$2,600。",
  ],
  [
    "SOL",
    "$108.24",
    "+$2.27 / +2.14%",
    "SOL 守住 $106 後反彈，上方 $110 仍是心理阻力；高 beta 交易要看 Nasdaq 盤後氣氛。",
  ],
];

const newsItems = [
  "Reuters / CNBC：Dow +0.69%、S&P 500 +0.58%、Nasdaq +1.05%；AI 相關 earnings 令科技股帶頭反彈。",
  "Reuters：SpaceX +7.8%、Super Micro +9.6%，Dell +5.3%、HPE +3.7%；AI infrastructure demand resiliency 成今日主線。",
  "Reuters：S&P 500 technology sector +1.6%，但 communication services -1.3%；AT&T、Netflix、Alphabet、Verizon、T-Mobile 拖累。",
  "CNBC / Xinhua：WTI Dec 收 $97.15、Brent Dec 收 $108.82；市場在 Hormuz / 中東風險與俄烏談判希望之間拉鋸。",
  "cdes / FedWatch：10 月 hold 機率約 84%，12 月仍約 87% 機率加 25bp；Fed blackout 期間市場靠 futures 自行定價。",
  "CNBC 盤後：Meta revenue beat 後上升，Tesla beat 後反應反覆，Lam Research 跌逾 5%；業績季分化繼續。",
  "Binance Vision：BTC / ETH / SOL 在美股收市分鐘同步升逾 2%，反映高 beta risk appetite 回暖。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,700 / 7,650 是短線支持；跌穿 7,650 代表三日升浪降溫。",
    "7,800 / 7,850 是阻力；企穩 7,800 才算突破近期震盪上沿。",
  ],
  [
    "Dow",
    "52,500 / 52,000 是支持；守住代表 value rotation 仲未完。",
    "53,000 是心理關口；突破會吸引 trend-following 資金。",
  ],
  [
    "Nasdaq",
    "26,500 / 26,300 是支持；26,300 失守會否定今日 tech-led bounce。",
    "26,800 / 27,000 是阻力；需要 semis 同 mega-cap 盤後反應配合。",
  ],
  [
    "Russell 2000",
    "2,760 / 2,740 是支持；跌穿代表 broadening out 失敗。",
    "2,800 / 2,830 是阻力；要靠 10Y 明顯回落才容易突破。",
  ],
  [
    "10Y yield",
    "5.10% / 5.05% 是舒緩線；跌穿有利 growth multiple。",
    "5.15% / 5.20% 是估值壓力區；重上會再次壓 Nasdaq。",
  ],
  [
    "BTC",
    "$83,500 / $82,500 是支持；跌穿 $82,500 代表反彈失敗。",
    "$85,500 / $86,500 是阻力；突破才算 risk beta 真正重啟。",
  ],
];

const planRows = [
  [
    "短線",
    "可以承認今日是清晰 risk-on，但先定義為 AI earnings relief rally；除非成交和 breadth 進一步放大，否則不宜用全面牛市加速去追。",
  ],
  [
    "板塊",
    "強勢集中在 XLK、SOXX、XLI；弱勢在 XLC、XLRE、XLP、XLV。若明日 tech 盤後反應續強，可以繼續看 semis / AI supply chain；若 10Y 重上 5.15%，要快速降 beta。",
  ],
  [
    "AI / Tech",
    "SpaceX / SMCI 令市場暫時放心，但真正考驗是 Meta、Tesla、Lam、IBM 等盤後結果在翌日正股如何消化。",
  ],
  [
    "Macro",
    "留意 10Y 是否守在 5.10%-5.15% 區間、WTI 是否重上 $100、FedWatch 12 月加息機率會否維持 85% 以上。",
  ],
  [
    "Crypto",
    "BTC 守 $83.5k、ETH 守 $2,450、SOL 守 $106；若三者同時失守，代表今日高 beta 修復不可靠。",
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

export default function USCloseBrief20261021() {
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
          {reportDate} 收市｜AI earnings 修補信心，Nasdaq
          領升；通訊服務同防守板塊拖後
        </div>
        <div className="meta">
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">語言：繁體中文 / 自然廣東話</span>
          <span className="pill">
            Crypto：Binance Vision 20:00 UTC 1m close
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
            主要指數採 CNBC / Reuters / AP 終值；Russell 2000 與 VIX 採 Yahoo
            historical close。
          </p>
        </article>

        <article className="card">
          <h2>3. 今日點解升</h2>
          <ul>
            <li>
              <strong>AI earnings relief：</strong>SpaceX、Super Micro
              結果令市場相信 AI infrastructure demand
              仍然有韌性，暫時壓低「capex 太大、回報太慢」的疑慮。
            </li>
            <li>
              <strong>科技重新接力：</strong>XLK +1.68%、SOXX
              +2.07%，反映資金由昨日 defensives / value 轉返 growth beta。
            </li>
            <li>
              <strong>VIX 續跌：</strong>VIX 收 16.68，風險厭惡下降，配合 crypto
              同步反彈。
            </li>
            <li>
              <strong>但升勢有選擇性：</strong>XLC -1.09%，NYSE 升跌比只約
              1.37:1，唔係所有股票一齊升。
            </li>
          </ul>
        </article>

        <article className="card">
          <h2>4. 市場廣度與資金流</h2>
          <ul>
            <li>NYSE 升股多過跌股 1.37:1；Nasdaq 升股 2,690、跌股 2,068。</li>
            <li>
              S&P 500 有 26 個 52 週新高、3 個新低；Nasdaq 有 53 個新高、216
              個新低。
            </li>
            <li>
              全美成交約 16.11B 股，低過 20 日平均 17.10B，代表今日上升仍偏
              earnings-driven。
            </li>
            <li>
              資金由 healthcare / utilities / REIT 的防守輪動，轉向 semis / AI /
              selected industrials。
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
                <th>Binance 20:00 UTC</th>
                <th>較 10/20 20:00 UTC</th>
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
            1-minute klines；時間點精準為 2026-10-21 20:00 UTC，即美股 4:00pm ET
            附近。
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
            <li>Meta、Tesla、IBM、Lam Research 盤後業績翌日正股反應。</li>
            <li>
              美國 weekly jobless claims、Leading Indicators、Kansas City Fed
              survey。
            </li>
            <li>10Y yield 是否重上 5.15%，以及 WTI 是否重回 $100 上方。</li>
            <li>SOXX / XLK 能否延續領漲，還是變成單日 short-covering。</li>
            <li>BTC 是否企穩 $84k-$85k，確認 crypto beta 跟上美股。</li>
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
            今日市況可以叫做「AI earnings
            修復信心」：科技與半導體帶領大市反彈，VIX 與 crypto 都配合
            risk-on。不過，成交低過 20 日平均、breadth 只係溫和改善，Fed 12
            月加息定價仍高，所以現階段不宜把它解讀成無條件追高訊號。比較合理做法，是跟住強勢板塊但嚴守
            10Y yield、SOXX、Nasdaq 與 BTC
            的支持位；若盤後業績消化轉差，要快速由進攻轉回防守。
          </p>
        </article>

        <article className="card wide">
          <h2>來源</h2>
          <SourceLinks />
          <p className="note">
            如同一數據有差異，本文優先採用交易所 /
            新聞社終值；即市資料則標明時間點。油價、黃金與美債收益率因合約、結算與報價時間不同，文中已標示口徑差異。
          </p>
        </article>

        <article className="card wide disclaimer">
          <p>{disclaimer}</p>
        </article>
      </section>
    </main>
  );
}
