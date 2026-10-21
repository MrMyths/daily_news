import React from "react";

const reportDate = "2026-10-20";
const publishedAt =
  "香港時間 2026-10-21 09:00（週三更新；數據截至美股 10/20 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Tuesday 10/20/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-0a5ea168499c6ae617c49e10bf48f9c6",
  },
  {
    name: "Reuters via Investing.com - Dow outperforms as healthcare leads gains",
    url: "https://www.investing.com/news/stock-market-news/nasdaq-futures-dip-as-oil-prices-climb-earnings-loom-4959413",
  },
  {
    name: "Yahoo Finance - Markets News Oct. 20, 2026",
    url: "https://finance.yahoo.com/markets/stocks/articles/markets-news-oct-20-2026-103252254.html",
  },
  {
    name: "Yahoo Finance - VIX historical data",
    url: "https://finance.yahoo.com/quote/%5EVIX/history/",
  },
  {
    name: "Yahoo Finance - Russell 2000 historical data",
    url: "https://finance.yahoo.com/quote/%5ERUT/history/",
  },
  {
    name: "ScannerXMI - Sector ETF daily performance",
    url: "https://scannerxmi.com/sector/",
  },
  {
    name: "StockAnalysis - XLF historical prices",
    url: "https://stockanalysis.com/etf/xlf/history/",
  },
  {
    name: "StockAnalysis - XLRE historical prices",
    url: "https://stockanalysis.com/etf/xlre/history/",
  },
  {
    name: "StockAnalysis - XLU historical prices",
    url: "https://stockanalysis.com/etf/xlu/history/",
  },
  {
    name: "eOption - Market Review October 20, 2026",
    url: "https://www.eoption.com/market-review-october-20-2026/",
  },
  {
    name: "CNBC - Gold edges lower as investors weigh Fed signals",
    url: "https://www.cnbc.com/2026/10/20/gold-inches-up-on-softer-dollar-as-investors-assess-fed-rate-outlook.html",
  },
  {
    name: "NAR - Pending Home Sales Decreased 7.3% in September",
    url: "https://www.nar.realtor/newsroom/pending-home-sales-decreased-7-3-percent-in-september",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Yahoo Finance - Large-cap quote comparison",
    url: "https://finance.yahoo.com/quotes/TSLA%2CPLTR%2CMSFT%2CNFLX%2CMETA%2CAMZN%2CNVDA%2CGOOGL%2CAVGO%2CCRM/",
  },
  {
    name: "CNBC - After-hours movers NFLX, SPCX, ISRG",
    url: "https://www.cnbc.com/2026/10/20/stocks-making-the-biggest-moves-after-hours-isrg-nflx-spcx.html",
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
  "美股週二唔係科技股繼續領升，而係資金輪動去 healthcare、金融、地產、公用與小型股：Dow 52,495.88（+529.85 / +1.02%）、S&P 500 7,712.57（+21.84 / +0.28%），Nasdaq 26,424.82（-6.07 / -0.02%）微跌。",
  "一句講晒：強業績同油價回落撐住大市，但 AI / mega-cap tech 被質疑 capex 回報，所以 Nasdaq 近乎無郁，Dow 同 Russell 2000 反而跑出。",
  "Russell 2000 升至 2,773.42（+45.12 / +1.65%），VIX 跌至 17.31（-1.13 / -6.13%）；Reuters 指 NYSE 升股多過跌股 2.04:1，breadth 明顯好過前一日。",
  "板塊紅綠燈轉向防守與價值：XLV +2.37%、XLRE +1.70%、XLU +1.26%、XLF +1.20% 領先；XLK -0.28%、SOXX -0.38% 落後。",
  "宏觀幫了一把：10Y yield 回落至約 5.116%，WTI settlement 跌至 $101.79（-1.80%），DXY 101.70（-0.27%），但 2Y yield 仍升至 4.785%，Fed 12 月加息定價仍高。",
  "Crypto 以 Binance Vision 2026-10-20 20:00 UTC 1m close（美股 4:00pm ET 附近）計：BTC $82,538.01（較 10/19 20:00 UTC +0.82%）、ETH $2,435.32（+1.68%）、SOL $105.97（+1.87%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "52,495.88",
    change: "+529.85 / +1.02%",
    read: "Dow 跑贏，主要靠 healthcare、3M、工業與金融輪動；Reuters / AP / WSJ 口徑一致，屬價值與防守股接力而非純 tech rally。",
  },
  {
    asset: "S&P 500",
    close: "7,712.57",
    change: "+21.84 / +0.28%",
    read: "S&P 500 連升第二日，但升幅溫和；強 earnings 抵消 AI financing / capex 憂慮，收市高過前日但低過日內高位。",
  },
  {
    asset: "Nasdaq Composite",
    close: "26,424.82",
    change: "-6.07 / -0.02%",
    read: "Nasdaq 微跌，反映週一 AI / semis bounce 後暫停；Meta、Alphabet、Netflix、部分半導體拖累，市場等 Meta / Tesla 業績。",
  },
  {
    asset: "Russell 2000",
    close: "2,773.42",
    change: "+45.12 / +1.65%",
    read: "小型股明顯跑贏，配合 NYSE / Nasdaq breadth 改善，代表資金有由 mega-cap tech 轉去 broader market 的跡象。",
  },
  {
    asset: "VIX",
    close: "17.31",
    change: "-1.13 / -6.13%",
    read: "VIX 由 18.44 再落一級，恐慌降溫；但仍高過 10 月上旬低位，AI 信貸、油價和 Fed path 未完全解除。",
  },
];

const sectorRows = [
  [
    "Health Care / XLV",
    "$179.82 / +2.37%",
    "最強",
    "Reuters 指 healthcare 是 S&P 500 最大推手並創新高；LLY、UNH、MRK、JNJ、AMGN 帶動 Dow / S&P。",
  ],
  [
    "Real Estate / XLRE",
    "$42.38 / +1.70%",
    "強",
    "長債息回落令 REIT 修復；但 NAR pending home sales 創低，這更似利率 relief trade，不代表 housing 基本面轉強。",
  ],
  [
    "Utilities / XLU",
    "$41.88 / +1.26%",
    "強",
    "公用股由前日最弱變強，顯示資金由高 beta tech 轉去收益 / 防守；10Y 回落係關鍵。",
  ],
  [
    "Financials / XLF",
    "$55.72 / +1.20%",
    "偏強",
    "XLF 反彈，金融成為 S&P 500 第二大 index-point boost；但 2Y yield 繼續升，銀行 credit 風險仍要留意。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$115.50 / +0.91%",
    "偏強",
    "Tesla +1.54%、Amazon 微升，加上 homebuilders 修復，令 XLY 仍正回報；但升幅較前日明顯降溫。",
  ],
  [
    "Consumer Staples / XLP",
    "$87.75 / +0.62%",
    "中性偏強",
    "防守消費跟隨低波幅資金回流，升幅不大但穩；市場今日偏 defensive rotation。",
  ],
  [
    "Materials / XLB",
    "$51.23 / +0.55%",
    "中性偏強",
    "材料股小升；油價回落舒緩成本壓力，但工業需求與中國 / 全球增長未見強訊號。",
  ],
  [
    "Energy / XLE",
    "$67.97 / +0.25%",
    "中性",
    "油價盤中急升後倒跌，能源股只微升；地緣風險仍在，但追高 oil beta 暫時降溫。",
  ],
  [
    "Communication Services / XLC",
    "$110.19 / +0.09%",
    "中性",
    "ETF 微升，但 Reuters 指通訊服務指數受 Meta、Alphabet、Netflix 拖累；口徑差異來自 ETF 成分與收市時間。",
  ],
  [
    "Industrials / XLI",
    "$166.80 / +0.07%",
    "中性",
    "3M 大升撐住板塊，但 GE Aerospace 跌近 3.7%、GM 警示成本壓力，抵消部分 industrial momentum。",
  ],
  [
    "Technology / XLK",
    "$185.44 / -0.28%",
    "弱",
    "科技是今日最大拖累之一；AI capex monetization 被重新質疑，mega-cap tech 多數回吐。",
  ],
  [
    "Semiconductors / SOXX",
    "$500.01 / -0.38%",
    "弱",
    "SOXX 在週一反彈後回落，NVDA、MU 等偏弱；AI trade 未死，但市場要等業績同現金流證明。",
  ],
];

const macroRows = [
  {
    topic: "Fed / 利率定價",
    data: "CME FedWatch / cdes 口徑：10 月 28 日約 84% 機率按兵不動、約 16% 機率加 25bp；12 月會議仍約 87%-92% 機率至少再加一次。",
    meaning:
      "短端利率未放鬆，2Y yield 仍升，代表市場不是定價 easing；股市今日升，是油價和長債息暫時回落幫手。",
  },
  {
    topic: "美債息",
    data: "eOption：2Y 4.785%（+2.6bp）、10Y 5.116%（-1.9bp）、30Y 5.425%（-4.7bp）；Reuters 亦指 10Y 約 5.121%。",
    meaning:
      "曲線偏 flatten：短端反映 Fed 仍緊，長端因油價回落和 housing 數據差而降；這解釋 REIT / utilities 彈、tech 仍弱。",
  },
  {
    topic: "原油",
    data: "eOption settlement：WTI $101.79（-$1.87 / -1.80%）、Brent $108.79（-$0.76 / -0.69%）；Yahoo 4pm ET 附近報 WTI 約 $101.10、Brent 約 $109.30。",
    meaning:
      "油價由盤中高位回落，舒緩通脹尾部風險；但中東 headlines 一變就可以翻轉，能源仍是本週最大 macro variable。",
  },
  {
    topic: "美元 / 黃金",
    data: "eOption：DXY 101.70（-0.27%）；CNBC：Dec gold futures settle $4,142.60（-0.4%），spot gold 2:05pm ET 約 $4,125.90（-0.3%）。",
    meaning:
      "美元回落但黃金仍跌，代表市場更看重實質利率 / Fed path；避險需求未見大幅回流。",
  },
  {
    topic: "住房數據",
    data: "NAR：9 月 pending home sales -7.3% MoM、-11.3% YoY，Pending Home Sales Index 跌至 66.0，為 2001 年有紀錄以來最低。",
    meaning:
      "房屋需求被 mortgage rates 壓住；XLRE 今日升是債息 relief，不是 housing 基本面轉強，homebuilders 後續仍看利率。",
  },
  {
    topic: "市場廣度 / 成交",
    data: "Reuters：NYSE 升跌比 2.04:1，Nasdaq 升股 3,245、跌股 1,608；全美成交 15.91B 股，低過 20 日平均 17.15B。",
    meaning:
      "Breadth 明顯好過前一日，Russell 亦跑贏；但成交偏低，暫時似 rotation + relief，不是資金全面爆買。",
  },
  {
    topic: "企業盈利節奏",
    data: "Reuters：3M、Equifax、Hasbro 因業績 / 指引大升；GM、GE Aerospace 跌。After-hours SpaceX 報 Q3 revenue $14.58B、Netflix 指引遜預期。",
    meaning:
      "市場正在由 macro fear 轉去 earnings dispersion：有成績就買，capex / margin / 指引交唔到功課就即沽。",
  },
  {
    topic: "Crypto / 流動性",
    data: "Binance Vision 20:00 UTC：BTC $82,538.01、ETH $2,435.32、SOL $105.97，較 10/19 同時間分別 +0.82%、+1.68%、+1.87%。",
    meaning:
      "Crypto 跟住 VIX 回落同美元偏弱反彈，但升幅未算爆；若 BTC 未能企穩 $83k-$84k，仍只是短線修復。",
  },
];

const stockRows = [
  [
    "Healthcare leaders：LLY / UNH / MRK / JNJ / AMGN",
    "LLY $1,283.66 / +3.49%；UNH +3.06%；MRK +3.25%；JNJ +2.21%；AMGN $438.94 / +3.29%",
    "Reuters 指 healthcare 創新高並成為 S&P 500 最大推手；市場由 AI trade 轉去盈利較穩、cash-flow visibility 較高的板塊。",
  ],
  [
    "3M / Equifax / Hasbro",
    "MMM $171.37 / +5.78%；EFX $176.54 / +11.33%；HAS $109.52 / +11.20%",
    "3M 擴大與 Amazon data-center partnership 並上調全年盈利指引；Equifax / Hasbro 業績或指引 beat，帶動 earnings winners。",
  ],
  [
    "Mega-cap tech：TSLA / AMZN / NVDA / META / GOOGL",
    "TSLA $373.71 / +1.54%；AMZN $262.63 / +0.07%；NVDA $216.47 / -0.29%；META $694.25 / -1.59%；GOOGL $340.27 / -1.13%",
    "Tesla 跑贏但多數 mega-cap tech 偏弱；市場等 Tesla / Meta 業績確認 AI / growth 估值是否撐得住。",
  ],
  [
    "Semis / AI infrastructure",
    "SOXX $500.01 / -0.38%；MU -0.98%；NVDA -0.29%；CRWV 約 +1.7%",
    "週一半導體 oversold bounce 後今日回吐；AI financing、capex 回報與 neocloud credit risk 仍是最大疑問。",
  ],
  [
    "GM / GE Aerospace",
    "GM $77.09 / -6.84%；GE $299.87 / -3.67%",
    "GM 警示未來數月面對較高 commodity costs 與 truck sales 壓力；GE Aerospace 亦成為 S&P 500 主要 laggard。",
  ],
  [
    "Netflix / SpaceX（盤後）",
    "NFLX regular $68.69 / -1.66%，盤後約 -5%；SPCX regular $147.79 / -0.11%，盤後來源顯示約 +2% 至 +8%",
    "Netflix Q4 revenue outlook 低過預期；SpaceX Q3 revenue $14.58B、YoY +161%，盤後升幅因不同來源更新时间有差異，文內只標示區間。",
  ],
  [
    "Financials / Value rotation",
    "XLF $55.72 / +1.20%；KRE +1.96%（sector table）",
    "金融股由前日弱勢轉強，是 Dow / value rotation 的重要部分；但短端利率升仍代表 funding / credit 壓力未消失。",
  ],
  [
    "BTC / ETH / SOL",
    "BTC +0.82%；ETH +1.68%；SOL +1.87%（對 10/19 20:00 UTC）",
    "Crypto 反彈幅度比 Nasdaq 好，但未脫離區間；短線要看 BTC 能否企穩 $82.5k 以上、ETH 能否收復 $2,450。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$82,538.01",
    "+$671.12 / +0.82%",
    "BTC 跟住美元回落與 VIX 下降反彈；若升穿 $83,500-$84,000，才算確認 risk appetite 再打開。",
  ],
  [
    "ETH",
    "$2,435.32",
    "+$40.19 / +1.68%",
    "ETH 收復 $2,400，但仍要企穩 $2,450 上方才算 beta 回來；若回落穿 $2,400，反彈會變假突破。",
  ],
  [
    "SOL",
    "$105.97",
    "+$1.95 / +1.87%",
    "SOL 升幅最好，暫時守住 $104-$105；上方 $108-$110 是下一個確認位。",
  ],
];

const newsItems = [
  "Reuters / AP：Dow +1.02%、S&P 500 +0.28%、Nasdaq -0.02%；healthcare、financials、real estate、utilities 領升，technology 拖後腿。",
  "Reuters：Healthcare 創新高，LLY、UNH、MRK、JNJ、AMGN 帶動；S&P 500 value index +0.9%，growth index -0.2%。",
  "Yahoo / eOption：油價由盤中高位倒跌，WTI settlement $101.79、Brent $108.79；地緣風險仍在，但通脹 premium 今日降溫。",
  "NAR：9 月 pending home sales -7.3% MoM 至 66.0，創 2001 年有紀錄以來最低，顯示 mortgage rates 已明顯壓住 housing demand。",
  "CNBC / Yahoo：盤後 SpaceX revenue +161% beat，Netflix 因 Q4 revenue guidance 低預期而跌；本週 earnings dispersion 會繼續主導個股。",
  "Binance Vision：BTC / ETH / SOL 在 4pm ET 附近同步反彈，但幅度仍屬修復，不足以確認高 beta 風險全面回來。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,650 / 7,600 是回踩支持；跌穿代表兩日反彈轉弱。",
    "7,750 / 7,800 是阻力；企穩才算由 relief bounce 轉成新一段升浪。",
  ],
  [
    "Dow",
    "52,000 / 51,800 是支持；失守會否定今日 value rotation。",
    "52,700 / 53,000 是壓力；突破代表資金繼續追非科技權重。",
  ],
  [
    "Nasdaq",
    "26,300 / 26,000 是支持；26,000 失守會令週一 tech bounce 失效。",
    "26,600 / 26,800 是阻力；需要 Meta / Tesla / semis 配合。",
  ],
  [
    "Russell 2000",
    "2,740 / 2,700 是支持；跌返 2,700 代表小型股假突破。",
    "2,800 / 2,830 是阻力；要配合 10Y 繼續回落才可信。",
  ],
  [
    "10Y yield",
    "5.10% / 5.05% 是舒緩線；跌穿會繼續利好 REIT、utilities、小型股。",
    "5.15% / 5.20% 是壓力區；重上會壓估值與 housing。",
  ],
  [
    "BTC",
    "$82,000 / $81,000 是支持；跌穿代表 crypto 修復失敗。",
    "$83,500 / $84,000 是阻力；突破才算 risk beta 真正回來。",
  ],
];

const planRows = [
  [
    "短線",
    "可以承認 breadth 改善同 Russell 追上，但暫時當 rotation / relief trade，多過全面牛市加速；追貨要分板塊。",
  ],
  [
    "板塊",
    "今日強勢在 XLV、XLRE、XLU、XLF；若 10Y 繼續回落，防守收益與小型股可延續。若 10Y 反彈，XLRE / XLU 最易回吐。",
  ],
  [
    "AI / Tech",
    "Nasdaq 微跌提醒市場未忘記 AI capex 問題；等 Meta、Tesla、SpaceX 後續市場反應，確認 revenue / margin / capex guidance。",
  ],
  [
    "Macro",
    "重點看 WTI 能否守在 $100-$102 下方、10Y 能否跌穿 5.10%、FedWatch 12 月加息機率會否跌落 85% 以下。",
  ],
  [
    "Crypto",
    "BTC 守 $82k、ETH 守 $2,400、SOL 守 $104；若三者同步企穩並上破阻力，先可加大高 beta 風險敞口。",
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

export default function USCloseBrief20261020() {
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
          {reportDate} 收市｜Dow / healthcare /
          小型股跑出；科技股休息，油價與長債息回落撐住 risk appetite
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
                  <td>
                    <strong>{row.asset}</strong>
                  </td>
                  <td>{row.close}</td>
                  <td className={row.change.startsWith("+") ? "green" : "red"}>
                    {row.change}
                  </td>
                  <td>{row.read}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card wide">
          <h2>3. 今日升跌原因</h2>
          <h3>一句講晒</h3>
          <p>
            今日係「資金由 AI / mega-cap tech 輪動去
            healthcare、value、防守收益股同小型股」。 強業績、油價回落、10Y
            yield 下行令市場願意買返非科技板塊；但 Nasdaq 微跌，說明 AI capex /
            financing 疑慮未散。
          </p>
          <h3>資金點諗</h3>
          <ul>
            <li>
              買 healthcare / value：XLV +2.37%、XLF +1.20%，S&P 500 value index
              +0.9%。
            </li>
            <li>
              買 rate-sensitive relief：XLRE +1.70%、XLU +1.26%，因 10Y yield
              回落到約 5.116%。
            </li>
            <li>
              暫時避開擠迫 tech：XLK -0.28%、SOXX -0.38%，Meta / Alphabet /
              Netflix 偏弱。
            </li>
            <li>
              宏觀有幫手但未轉鴿：油價跌、美元跌；但 2Y yield 升、Fed 12
              月加息機率仍高。
            </li>
          </ul>
        </article>

        <article className="card wide">
          <h2>4. 板塊紅綠燈</h2>
          <table>
            <thead>
              <tr>
                <th>板塊 / ETF</th>
                <th>價格 / 變動</th>
                <th>狀態</th>
                <th>白話解讀</th>
              </tr>
            </thead>
            <tbody>
              {sectorRows.map(([name, move, state, read]) => (
                <tr key={name}>
                  <td>
                    <strong>{name}</strong>
                  </td>
                  <td>{move}</td>
                  <td>
                    <span
                      className={`tag ${state === "最強" || state === "強" || state === "偏強" || state === "中性偏強" ? "green" : state === "中性" ? "amber" : "red"}`}
                    >
                      {state}
                    </span>
                  </td>
                  <td>{read}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            Sector 口徑：11 個 Select Sector SPDR ETF 主要採 ScannerXMI /
            StockAnalysis / Yahoo 類收市表；Reuters 的 S&P sector index 與 ETF
            數字略有差異，文內以 ETF close 表示交易工具表現。
          </p>
        </article>

        <article className="card">
          <h2>5. 五大新聞</h2>
          <ol>
            {newsItems.slice(0, 5).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>

        <article className="card">
          <h2>6. 市場熱度圖（文字版）</h2>
          <ul>
            <li>
              <span className="tag green">綠</span> Healthcare / pharma：XLV
              +2.37%，LLY、UNH、MRK、AMGN 領升。
            </li>
            <li>
              <span className="tag green">綠</span> Small caps /
              breadth：Russell +1.65%，NYSE / Nasdaq 升股約 2 倍於跌股。
            </li>
            <li>
              <span className="tag amber">黃</span> S&P
              500：+0.28%，升但不是科技主導。
            </li>
            <li>
              <span className="tag amber">黃</span> Crypto：BTC / ETH / SOL
              同步反彈，但仍未突破主要阻力。
            </li>
            <li>
              <span className="tag red">紅</span> Technology / semis：XLK
              -0.28%、SOXX -0.38%，AI trade 休息。
            </li>
            <li>
              <span className="tag red">紅</span> Housing fundamental：NAR
              pending sales 創紀錄低位，利率壓力仍重。
            </li>
          </ul>
        </article>

        <article className="card wide">
          <h2>7. 宏觀白話版</h2>
          <table>
            <thead>
              <tr>
                <th>項目</th>
                <th>最新數據 / 來源口徑</th>
                <th>點解重要</th>
              </tr>
            </thead>
            <tbody>
              {macroRows.map((row) => (
                <tr key={row.topic}>
                  <td>
                    <strong>{row.topic}</strong>
                  </td>
                  <td>{row.data}</td>
                  <td>{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card wide">
          <h2>8. 重點股票</h2>
          <table>
            <thead>
              <tr>
                <th>股票</th>
                <th>收市 / 變動</th>
                <th>原因</th>
              </tr>
            </thead>
            <tbody>
              {stockRows.map(([name, move, reason]) => (
                <tr key={name}>
                  <td>
                    <strong>{name}</strong>
                  </td>
                  <td>{move}</td>
                  <td>{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card wide">
          <h2>9. Crypto：BTC / ETH / SOL</h2>
          <table>
            <thead>
              <tr>
                <th>幣種</th>
                <th>Binance 20:00 UTC close</th>
                <th>對 10/19 20:00 UTC</th>
                <th>解讀</th>
              </tr>
            </thead>
            <tbody>
              {cryptoRows.map(([name, close, change, read]) => (
                <tr key={name}>
                  <td>
                    <strong>{name}</strong>
                  </td>
                  <td>{close}</td>
                  <td className={change.startsWith("+") ? "green" : "red"}>
                    {change}
                  </td>
                  <td>{read}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            口徑：api.binance.com 在此環境受地區限制；採 Binance Vision data API
            klines 查 2026-10-20 20:00:00 UTC 1-minute kline
            close，時間點即美股正常收市 4:00pm ET
            附近。對比基準為上一個美股交易日 2026-10-19 20:00:00 UTC。
          </p>
        </article>

        <article className="card wide">
          <h2>10. 技術位</h2>
          <table>
            <thead>
              <tr>
                <th>市場</th>
                <th>支持 / 風險線</th>
                <th>阻力 / 觀察位</th>
              </tr>
            </thead>
            <tbody>
              {technicalRows.map(([name, support, resistance]) => (
                <tr key={name}>
                  <td>
                    <strong>{name}</strong>
                  </td>
                  <td>{support}</td>
                  <td>{resistance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card wide">
          <h2>11. 明日觀察清單與操作提示</h2>
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
          <p>
            最終觀點：今日大市質素比前日好，因 breadth 與 Russell
            追上；但領升不是 Nasdaq，而是 healthcare / value /
            rate-sensitive。操作上可順勢承認輪動，但要避免把它解讀成 AI trade
            全面重啟。若 10Y 企穩 5.10%
            以下、油價不再衝高，非科技板塊可以延續；若 Meta / Tesla 業績或 Fed
            pricing 令 Nasdaq 再受壓，就要減低高 beta 倉位。
          </p>
        </article>

        <article className="card wide">
          <h2>12. 來源、口徑與免責聲明</h2>
          <p className="note">
            數據衝突處理：主指數採 AP / Reuters / Yahoo / WSJ
            終值一致口徑；Russell 2000 與 VIX 採 Yahoo historical close；sector
            ETF 採 ScannerXMI、StockAnalysis 與 Yahoo 類收市表，Reuters sector
            index 作敘事交叉核對。油價方面，eOption 使用 settlement（WTI
            $101.79、Brent $108.79），Yahoo 使用 4pm ET 附近即市（WTI 約
            $101.10、Brent 約
            $109.30），兩者因合約與時間點不同而有差異，文內已標示。FedWatch 以
            CME / cdes / 金融新聞轉述口徑交叉核對。Crypto 採 Binance Vision data
            API 20:00 UTC 1-minute
            kline。若來源時間點不同，文內已標示口徑；無可靠數據不作硬填。
          </p>
          <SourceLinks />
        </article>

        <article className="card wide disclaimer">
          <strong>{disclaimer}</strong>
        </article>
      </section>
    </main>
  );
}
