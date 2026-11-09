import React from "react";

const reportDate = "2026-11-06";
const publishedAt =
  "香港時間 2026-11-09 09:00（週一更新；數據截至美股 11/06 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market news for Nov. 6, 2026",
    url: "https://www.cnbc.com/2026/11/05/stock-market-today-live-updates.html",
  },
  {
    name: "Reuters via Investing.com - Nasdaq rebounds but posts fourth straight weekly decline",
    url: "https://www.investing.com/news/stock-market-news/nasdaq-futures-rise-after-steep-ai-selloff-as-chip-stocks-stabilize-5007026",
  },
  {
    name: "AP News - AI stocks halt their brutal sell-off",
    url: "https://apnews.com/article/markets-japan-nikkei-oil-ai-bba6f0bf9035a6e6b1c4fef3e8230b89",
  },
  {
    name: "CNBC quotes - Dow / S&P 500 / Nasdaq / Russell 2000 / VIX",
    url: "https://www.cnbc.com/quotes/.DJI,.INX,.IXIC,RUT,VIX",
  },
  {
    name: "BLS - Employment Situation, October 2026",
    url: "https://www.bls.gov/news.release/empsit.nr0.htm",
  },
  {
    name: "CNBC - Jobs report October 2026",
    url: "https://www.cnbc.com/2026/11/06/jobs-report-october-2026.html",
  },
  {
    name: "CNBC - Treasury yields after jobs report",
    url: "https://www.cnbc.com/2026/11/06/treasury-yields-inch-lower-as-investors-look-ahead-to-key-jobs-data-.html",
  },
  {
    name: "CNBC - Dollar jumps after payrolls",
    url: "https://www.cnbc.com/2026/11/06/dollar-holds-yen-gains-as-equity-rout-saps-risk-appetite-ahead-of-payrolls.html",
  },
  {
    name: "CNBC - Oil price today: Brent, WTI",
    url: "https://www.cnbc.com/2026/11/06/oil-price-today-brent-wti.html",
  },
  {
    name: "CNBC - Gold drops as payrolls boost dollar and yields",
    url: "https://www.cnbc.com/2026/11/06/gold-eases-on-inflation-worries-from-higher-oil-us-payrolls-data-in-focus.html",
  },
  {
    name: "CNBC - Stocks making the biggest moves midday",
    url: "https://www.cnbc.com/2026/11/06/stocks-making-the-biggest-moves-midday-nvda-mrna-ionq-abnb-fly.html",
  },
  {
    name: "Yahoo Finance chart data - indices, sector ETFs and stocks",
    url: "https://finance.yahoo.com/",
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
  "美股週五係「科技修復，但未全面解除警報」：S&P 500 7,376.86（+23.13 / +0.31%）、Nasdaq 24,579.43（+264.43 / +1.09%）反彈；Dow 51,285.73（-237.33 / -0.46%）仍跌。",
  "主線係 AI / chip dip-buying：Reuters 指 semiconductor index 升約 4.2%；Yahoo close 顯示 SOXX +3.51%、AMD +11.04%、NVDA +2.78%，市場買返星期四被沽到最急的 AI beta。",
  "但週線仍差：CNBC / Reuters 指 Nasdaq 全週 -3.4%、S&P 500 -2.7%、Dow -0.9%；即使星期五反彈，都只是修復星期四急跌的一部分。",
  "宏觀唔係完全配合股市：BLS 10月非農 +165k、失業率 4.1%，令 10Y yield 收 4.859%（+2.2bp）、DXY 升至 102.30；FedWatch / Reuters 口徑顯示 12月加息機率約 77%-80%。",
  "板塊分化明顯：SOXX +3.51%、XLK +1.45%、XLC +0.43% 較強；XLP -1.28%、XLB -0.73%、XLRE -0.68%、XLF -0.59% 拖後。",
  "Crypto 以 Binance Vision 2026-11-06 20:00 UTC 1m close（美股 4:00pm ET）計：BTC $75,920.32（較 11/05 同時間 -0.51%）、ETH $2,236.19（-1.03%）、SOL $90.26（+0.27%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "51,285.73",
    change: "-237.33 / -0.46%",
    read: "Dow 再跌，反映反彈未能擴散到傳統藍籌；強就業數據推高利率，對 rate-sensitive / defensive 名字不算友善。",
  },
  {
    asset: "S&P 500",
    close: "7,376.86",
    change: "+23.13 / +0.31%",
    read: "大市由科技托住，但只收復星期四大跌小部分；CNBC 指全週仍跌 2.7%，屬反彈多過趨勢重啟。",
  },
  {
    asset: "Nasdaq Composite",
    close: "24,579.43",
    change: "+264.43 / +1.09%",
    read: "Nasdaq 反彈最清楚，因 chip / AI 被低吸；但 Reuters 指 Nasdaq 已連跌四週，仍在修補信心階段。",
  },
  {
    asset: "Russell 2000",
    close: "2,754.11",
    change: "+24.22 / +0.89%",
    read: "小型股跟升，顯示風險胃納有改善；不過高利率背景下，仍要睇 10Y 能否不再上衝。",
  },
  {
    asset: "VIX",
    close: "25.64",
    change: "-2.54 / -9.01%",
    read: "VIX 由星期四高位回落，但 25 以上仍屬緊張區；市場情緒降溫，不等於風險完全消失。",
  },
];

const sectorRows = [
  [
    "Semiconductors / SOXX",
    "$136.53 / +3.51%",
    "最強",
    "晶片係今日反彈核心。Reuters 指 Philadelphia Semiconductor Index 約 +4.2%，AMD、Micron、Nvidia 等由星期四急跌後反彈。",
  ],
  [
    "Technology / XLK",
    "$164.74 / +1.45%",
    "強",
    "科技 ETF 領先大市，反映資金重新買入 AI / software / megacap beta；但 MSFT、AAPL 仍分別下跌，升勢唔算完全平均。",
  ],
  [
    "Communication Services / XLC",
    "$104.79 / +0.43%",
    "偏強",
    "Meta、Alphabet 輕微反彈幫到板塊；但 Netflix -3.28%，所以 XLC 升幅有限。",
  ],
  [
    "Industrials / XLI",
    "$162.67 / +0.12%",
    "中性",
    "工業股只微升，風險胃納修復未有擴散成全面 cyclical rally。",
  ],
  [
    "Energy / XLE",
    "$61.62 / -0.02%",
    "中性",
    "WTI / Brent 日內小升，但能源 ETF 幾乎持平；全週油價急跌後，投資者仍在評估中東風險與外交消息。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$117.58 / -0.05%",
    "中性",
    "Tesla +4.23% 幫手，但 Amazon 輕跌，整體 discretionary 未能跟 Nasdaq 同步大升。",
  ],
  [
    "Health Care / XLV",
    "$184.80 / -0.06%",
    "中性",
    "Healthcare 防守性未被追捧，資金重心轉返 AI；但跌幅有限，顯示仍有避險底盤。",
  ],
  [
    "Utilities / XLU",
    "$43.13 / -0.39%",
    "偏弱",
    "10Y yield 因強就業上升，令 yield-sensitive utilities 受壓。",
  ],
  [
    "Financials / XLF",
    "$57.16 / -0.59%",
    "偏弱",
    "銀行未有受益於收益率上升，反而被經濟/信貸與股市波動風險壓住。",
  ],
  [
    "Real Estate / XLRE",
    "$44.00 / -0.68%",
    "弱",
    "長債息上行直接壓 REIT；若 10Y 繼續企 4.85%-4.90% 上方，板塊反彈空間有限。",
  ],
  [
    "Materials / XLB",
    "$51.95 / -0.73%",
    "弱",
    "美元轉強、商品分化，材料股跟唔上科技反彈。",
  ],
  [
    "Consumer Staples / XLP",
    "$90.08 / -1.28%",
    "最弱",
    "防守消費被沽，反映資金由 defensive 轉向 AI beta；但亦提醒升市集中度高。",
  ],
];

const macroRows = [
  {
    topic: "就業 / Fed 定價",
    data: "BLS：10月非農 +165k、失業率 4.1%；CNBC 指 Dow Jones 預期 +59k，平均時薪 +0.4% MoM / +3.1% YoY。CNBC / Reuters / CME FedWatch 口徑顯示 12月加息機率約 76.8%-80%。",
    meaning:
      "就業強過預期，令 Fed 可以繼續把焦點放在通脹，對長 duration growth stock 不是純利好；今日科技反彈靠低吸與技術修復多過靠宏觀轉鴿。",
  },
  {
    topic: "美債息",
    data: "Yahoo / CNBC 口徑：10Y yield 收 4.859%，日升約 2.2bp；5Y 4.648%、30Y 5.260%。CNBC 即市文亦報 10Y 約 4.864%、30Y 約 5.263%、2Y 約 4.522%。",
    meaning:
      "收益率升幅不算失控，但方向同科技估值相反；若 10Y 突破 4.90%，Nasdaq / SOXX 反彈會更易被賣壓測試。",
  },
  {
    topic: "美元",
    data: "Yahoo DXY close 102.30（+0.74%）；CNBC 匯市文報美元指數約 +0.63% 至 102.12，時間點略有差異。",
    meaning:
      "強就業推高美元，壓住黃金與部分商品，也令海外收入較高的 megacap earnings translation 變得不利。",
  },
  {
    topic: "原油",
    data: "CNBC：WTI settle $90.83（+$0.31 / +0.34%），Brent settle $98.32（+$0.03）；同時 WTI / Brent 全週分別跌近 13% / 16%。",
    meaning:
      "油價日內穩住，但週線大跌代表市場同時在計入中東外交降溫與需求疑慮；對通脹是邊際舒緩，但能源股仍弱。",
  },
  {
    topic: "黃金",
    data: "Yahoo gold futures close $4,074.90（-$38.60 / -0.94%）；CNBC 報 spot gold 約 -0.7% 至 $4,059.90、December futures 約 $4,071.80。",
    meaning: "美元與收益率上升壓低黃金，避險資金未有因股市波動而大幅追金。",
  },
  {
    topic: "經濟日曆",
    data: "本日重點是 BLS 就業報告；下週市場將看 11/10 CPI、Fed 官員講話及 12月 FOMC 前的利率期貨變化。",
    meaning:
      "今日反彈如果要延續，要同時經得起 CPI 與 Fed pricing 檢驗；單靠一日 chip bounce 未夠。",
  },
  {
    topic: "市場廣度 / 成交",
    data: "可核實資料顯示指數與板塊分化：Nasdaq +1.09%、Dow -0.46%，SOXX +3.51% 但 XLP -1.28%。Reuters / CNBC 可得片段未提供完整 NYSE/Nasdaq 升跌家數，故此項寫「暫無可靠數據」。",
    meaning:
      "升勢集中在被低吸的 AI / chip；沒有可靠 breadth 前，不宜把今日定義為全面 risk-on。",
  },
  {
    topic: "Crypto / 流動性",
    data: "Binance Vision 20:00 UTC：BTC $75,920.32、ETH $2,236.19、SOL $90.26，較 11/05 同時間分別 -0.51%、-1.03%、+0.27%。",
    meaning:
      "Crypto 無跟足 Nasdaq 反彈，反映高 beta risk appetite 仍有保留；若 BTC 失守 $75k，股市反彈的風險偏好訊號會打折。",
  },
];

const stockRows = [
  [
    "Semis：AMD / NVDA / SOXX",
    "AMD +11.04% 至 $449.04；NVDA +2.78% 至 $186.64；SOXX +3.51%",
    "Reuters 指晶片股在星期四 AI selloff 後大幅反彈，Philadelphia Semiconductor Index 約 +4.2%。今日 Nasdaq 能收高，核心就是這條線。",
  ],
  [
    "Tesla / SpaceX",
    "TSLA +4.23% 至 $358.22；Reuters 指 SpaceX +8.6%",
    "兩隻高 beta 科技/AI 故事股跟隨 dip-buying 反彈；但主因偏向修復前一日跌幅，不是全新基本面重估。",
  ],
  [
    "AI infrastructure：CoreWeave / SMCI / PLTR",
    "CRWV +6.28%；SMCI +6.20%；PLTR +3.48%",
    "AI infrastructure beta 明顯反彈，顯示市場仍願意買 AI buildout 故事；但政策/地方審批風險仍未消失。",
  ],
  [
    "Megacap 分化",
    "META +0.84%；GOOGL +0.78%；MSFT -0.99%；AAPL -0.52%；AMZN -0.35%",
    "升市不是全部 megacap 一齊升，MSFT / AAPL / AMZN 仍弱，代表估值與收益率壓力仍在。",
  ],
  [
    "Airbnb / Atlassian",
    "Reuters：ABNB 約 +12%；Atlassian 約 -16%",
    "Airbnb 因上調全年 revenue growth forecast 受捧；Atlassian 因 data-center revenue growth 指引轉弱被沽，顯示業績季仍是 stock picker market。",
  ],
  [
    "NFLX / defensives",
    "NFLX -3.28%；XLP -1.28%；XLRE -0.68%",
    "部分防守與非 AI 成長名字被資金撤出，強就業/強美元背景令 market breadth 未算漂亮。",
  ],
  [
    "BTC / ETH / SOL",
    "BTC -0.51%；ETH -1.03%；SOL +0.27%（對 11/05 20:00 UTC）",
    "Crypto 沒有同步大升，是今日 risk-on 訊號的保留位；若下週 BTC 未能重上 $76.5k-$77k，要小心高 beta 回吐。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$75,920.32",
    "-$385.69 / -0.51%",
    "BTC 在美股收市分鐘仍低於前一日同時間；短線 $75,000 是心理支持，重上 $76,500-$77,000 才算修復。",
  ],
  [
    "ETH",
    "$2,236.19",
    "-$23.31 / -1.03%",
    "ETH 跑輸 BTC，顯示鏈上 beta 未跟 Nasdaq 一齊升；$2,200-$2,220 是短線支持。",
  ],
  [
    "SOL",
    "$90.26",
    "+$0.24 / +0.27%",
    "SOL 微升但力度有限；$90 是心理位，若能守住才可望再試 $92-$94。",
  ],
];

const newsItems = [
  "CNBC：Nasdaq 反彈 1.09%、S&P 500 +0.31%，Dow -0.46%；星期四三大指數曾錄 2025年4月以來最差單日表現。",
  "Reuters：科技股由超過一年最急跌勢中反彈，但 Nasdaq 仍連續第四週下跌；semiconductor index 約 +4.2%。",
  "AP / CNBC：市場仍在消化民主黨中期選舉大勝後，AI / data-center 建設或受更嚴格州與地方規管的風險。",
  "BLS：10月非農 +165k、失業率 4.1%，顯著強過市場預期；CNBC 指平均時薪 +0.4% MoM / +3.1% YoY。",
  "CNBC / Reuters：強就業令 12月 Fed 加息機率回升至約 77%-80%，10Y yield 升至約 4.86%。",
  "CNBC：WTI 收 $90.83、Brent 收 $98.32，但全週油價大跌；黃金因美元與收益率上升而回落。",
  "Reuters / CNBC movers：Airbnb 因指引上調升約 12%，Atlassian 因增長指引弱跌約 16%，業績季分化繼續。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,350 / 7,300 是短線支持；跌穿 7,300 代表星期五反彈失敗。",
    "7,450 / 7,500 是阻力；要企回 7,500 上方先算修復星期四缺口。",
  ],
  [
    "Dow",
    "51,000 / 50,800 是支持；失守會令 value / cyclical 情緒再轉差。",
    "51,700 / 52,000 是反彈阻力；要重上先可改善 breadth 印象。",
  ],
  [
    "Nasdaq",
    "24,300 / 24,000 是支持；24,000 失守代表 correction 壓力重開。",
    "24,850 / 25,000 是阻力；需要 SOXX 延續強勢配合。",
  ],
  [
    "Russell 2000",
    "2,720 / 2,700 是支持；跌穿代表小型股跟升失敗。",
    "2,780 / 2,800 是阻力；高利率下要突破需要更闊 breadth。",
  ],
  [
    "10Y yield",
    "4.80% / 4.75% 是舒緩線；跌回有利 growth multiple。",
    "4.90% / 5.00% 是估值壓力區；突破會壓 Nasdaq 與 REIT。",
  ],
  [
    "BTC",
    "$75,000 / $74,000 是支持；跌穿 $75k 代表 crypto risk appetite 轉弱。",
    "$76,500 / $77,000 是阻力；重上才算跟美股反彈。",
  ],
];

const planRows = [
  [
    "短線",
    "可以承認星期五有 dip-buying，但只當作 AI / chip 技術修復；VIX 仍在 25 以上，倉位不宜一下子拉滿。",
  ],
  [
    "板塊",
    "強勢集中 SOXX、XLK、XLC；弱勢在 XLP、XLB、XLRE、XLF。若下週 SOXX 不能守住今日升幅，反彈質素會快速下降。",
  ],
  [
    "AI / Tech",
    "AI trade 未死，但 data-center regulation、capex 回報、地方審批三個疑慮仍在。優先看現金流強、估值消化過的名字，避免追最高 beta。",
  ],
  [
    "Macro",
    "強就業令 Fed 12月加息重新成為主線。下週 CPI 若再熱，10Y 重上 4.90% 機率會升，growth exposure 要有止蝕線。",
  ],
  [
    "Crypto",
    "BTC 要守 $75k，ETH 要守 $2,200，SOL 要守 $90；若 crypto 不跟 Nasdaq，代表市場 risk appetite 只是股票內部輪動，不是全面放膽。",
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

export default function USCloseBrief20261106() {
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
          {reportDate} 收市｜AI / 晶片急跌後反彈，但強就業推高利率； Dow
          仍跌、週線未修復
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
            指數採 CNBC / Yahoo Chart 終值；Russell 2000 與 VIX 均與 CNBC quote
            口徑一致。
          </p>
        </article>

        <article className="card">
          <h2>3. 今日點解升跌分化</h2>
          <ul>
            <li>
              <strong>AI / chip 低吸：</strong>星期四 AI selloff
              太急，星期五資金買返半導體與 AI infrastructure，令 Nasdaq 跑贏。
            </li>
            <li>
              <strong>宏觀反而偏鷹：</strong>非農 +165k、失業率 4.1%，令 Fed
              12月加息機率回升，10Y yield 同美元一齊上。
            </li>
            <li>
              <strong>Dow 跟唔上：</strong>傳統藍籌與防守板塊未受惠，Dow
              收跌，顯示升勢集中在科技修復。
            </li>
            <li>
              <strong>VIX 回落但仍高：</strong>VIX -9.01% 至 25.64，但仍反映市場
              預期波動偏高。
            </li>
          </ul>
        </article>

        <article className="card">
          <h2>4. 市場廣度與資金流</h2>
          <ul>
            <li>可核實升跌家數：暫無可靠數據。</li>
            <li>
              從可核實板塊看，資金集中回流 SOXX / XLK；防守消費、材料、REIT
              與金融走弱。
            </li>
            <li>
              CNBC / Reuters 均指三大指數全週下跌，星期五反彈未能扭轉週線弱勢。
            </li>
            <li>
              交易重點由「選舉後 AI / data-center regulation
              風險」轉為「低吸最急跌的 AI beta」，但宏觀利率壓力仍在。
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
                <th>較 11/05 20:00 UTC</th>
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
            1-minute klines；時間點精準為 2026-11-06 20:00 UTC，即美股 4:00pm ET
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
            <li>
              SOXX / NVDA / AMD 能否守住星期五反彈，還是變成單日
              short-covering。
            </li>
            <li>10Y yield 是否突破 4.90%，以及 DXY 是否繼續企穩 102 上方。</li>
            <li>11/10 CPI 對 Fed 12月加息機率的影響。</li>
            <li>AI / data-center regulation 相關州與地方政策 headline。</li>
            <li>BTC 是否重上 $76.5k-$77k，確認 crypto beta 有無跟上。</li>
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
            今日市況可以叫做「AI / chip 急跌後修復」：Nasdaq、SOXX、AMD、NVDA
            有買盤，VIX 亦由高位回落。不過 Dow 收跌、defensives 同部分 cyclicals
            未跟，Crypto 亦無明顯 risk-on，加上強就業令 Fed
            加息定價升返上來，所以未宜當作全面轉牛。較合理做法，是承認科技反彈但保留風控：
            看 SOXX 能否延續、10Y 是否守在 4.90% 以下、BTC 能否企回 $76.5k
            之上；三者有一項失守，就要降低高 beta exposure。
          </p>
        </article>

        <article className="card wide">
          <h2>來源</h2>
          <SourceLinks />
          <p className="note">
            如同一數據有差異，本文優先採用交易所 / 官方發布 / 主流新聞社終值；
            即市資料則標明時間點。油價、黃金、美債收益率與 DXY
            因合約、結算與報價時間不同，文中已標示口徑差異。
          </p>
        </article>

        <article className="card wide disclaimer">
          <p>{disclaimer}</p>
        </article>
      </section>
    </main>
  );
}
