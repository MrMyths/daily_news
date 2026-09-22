import React from "react";

const reportDate = "2026-09-21";
const publishedAt =
  "香港時間 2026-09-22 09:01（週二更新；數據截至美股 9/21 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP via The Seattle Times - How major US stock indexes fared Monday 9/21/2026",
    url: "https://www.seattletimes.com/business/how-major-us-stock-indexes-fared-monday-9-21-2026/",
  },
  {
    name: "Reuters via MarketScreener - Nasdaq notches record-high close, AI optimism reignites and Treasury yields retreat",
    url: "https://sa.marketscreener.com/news/wall-street-ends-sharply-higher-as-ai-optimism-reignites-and-treasury-yields-retreat-ce785adbd18bf627",
  },
  {
    name: "Reuters - Wall St futures rise as AI stocks gain, oil prices slide",
    url: "https://www.reuters.com/business/wall-st-futures-rise-ai-stocks-gain-oil-prices-slide-2026-09-21/",
  },
  {
    name: "MarketScreener / Reuters - Wall St rises on AI gains as oil slides, Treasury yields retreat",
    url: "https://uk.marketscreener.com/news/wall-st-rises-on-ai-gains-as-oil-slides-treasury-yields-retreat-ce785adbdf8ef523",
  },
  {
    name: "MarketWatch - Oil Prices Fall for Fourth Day as Supply Concerns Ease",
    url: "https://www.marketwatch.com/story/oil-prices-fall-for-fourth-day-as-supply-concerns-ease-2nd-update-0be75bfa",
  },
  {
    name: "CNBC - Treasury yields ease as global borrowing costs tumble",
    url: "https://www.cnbc.com/2026/09/21/treasury-yields-government-bonds.html",
  },
  {
    name: "Cboe - VIX historical data CSV",
    url: "https://cdn.cboe.com/api/global/us_indices/daily_prices/VIX_History.csv",
  },
  {
    name: "Federal Reserve - FOMC statement, September 16 2026",
    url: "https://www.federalreserve.gov/monetarypolicy/files/monetary20260916a1.pdf",
  },
  {
    name: "Federal Reserve - September 2026 SEP projections",
    url: "https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260916.htm",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "CNBC - Intel surges 12% as CPU stocks rally",
    url: "https://www.cnbc.com/2026/09/21/intel-surges-12percent-as-cpu-stocks-rally-heres-whats-driving-the-move.html",
  },
  {
    name: "Kiplinger - Nasdaq jumps 599 points to new high",
    url: "https://www.kiplinger.com/investing/stocks/nasdaq-jumps-599-points-to-hit-a-new-high-stock-market-today",
  },
  {
    name: "The Motley Fool - Stock Market Today, Sept. 21",
    url: "https://www.fool.com/coverage/stock-market-today/2026/09/21/stock-market-today-sept-21-tech-strength-powers-nasdaq-to-record-close/",
  },
  {
    name: "Gate News - DXY closes at 100.428",
    url: "https://www.gate.com/news/detail/us-dollar-index-hits-100428-up-0223-as-fed-officials-signal-hawkish-stance-24460649",
  },
  {
    name: "BullionVault - Gold slips as oil slides, bond rates ease",
    url: "https://www.bullionvault.com/gold-news/gold-price-news/gold-debt-deficit-interest-092120261",
  },
  {
    name: "Cointelegraph - Bitcoin price tags $86K",
    url: "https://cointelegraph.com/markets/bitcoin-price-86k-analysis-sees-crypto-new-bull-market",
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

const keyPoints = [
  "美股週一急升：AP 收市數據顯示 S&P 500 7,764.70（+114.20 / +1.49%）、Nasdaq 27,122.09（+599.55 / +2.26%，創收盤新高）、Dow 52,048.83（+366.19 / +0.71%）、Russell 2000 2,875.36（+14.96 / +0.52%）。",
  "主線係 AI / 晶片重新點火：Reuters 指 PHLX Semiconductor Index +4.3%，AMD 約 +10% 並首次觸及 $1tn 市值，Intel +12.2%、Arm +17%，Meta +11.4%。",
  "Macro 突然由壓力變助攻：Brent 回落至 $100.34（-3.4%）、WTI $95.78（-4.5%），10Y yield 跌回約 4.95%-4.96%，幫 growth multiple 鬆一口氣。",
  "板塊不是平均升：八個 S&P 500 sectors 上升，Communication Services +4.16%、Information Technology +2.4% 領先；Energy 因油價急跌成最大拖累，Materials / basic materials 亦偏弱。",
  "Fed 風險未消失：9/16 Fed 剛加息至 3.75%-4.00%；CME FedWatch 9/21 口徑顯示 10 月再加 25bp 機率約 56.5%，所以今次反彈主要是 oil / yield relief，不是 Fed 轉 dovish。",
  "Crypto 採 Binance Vision 2026-09-21 20:00 UTC 1m close（美股 4:00pm ET 附近）：BTC $86,558.76（較 9/18 20:00 UTC +6.76%）、ETH $2,764.58（+5.09%）、SOL $118.34（+3.98%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "52,048.83",
    change: "+366.19 / +0.71%",
    read: "藍籌跟升但跑輸 growth；能源相關 Dow 成分股受油價急跌拖累，升幅主要靠科技情緒外溢。",
  },
  {
    asset: "S&P 500",
    close: "7,764.70",
    change: "+114.20 / +1.49%",
    read: "距離 8/13 歷史高位約 0.4%，headline 強勢明顯；短線要看能否企穩 7,750 以上。",
  },
  {
    asset: "Nasdaq Composite",
    close: "27,122.09",
    change: "+599.55 / +2.26%",
    read: "創收盤新高，AI / CPU / semis 是核心引擎；相對 Russell 大幅跑贏，升市仍偏 mega-cap growth。",
  },
  {
    asset: "Russell 2000",
    close: "2,875.36",
    change: "+14.96 / +0.52%",
    read: "小型股有跟升但明顯落後 Nasdaq；市場 risk-on 仍未完全擴散到細價股與融資敏感股份。",
  },
  {
    asset: "VIX",
    close: "14.87",
    change: "+0.06 / +0.41%",
    read: "Cboe 官方 CSV 顯示 VIX 仍在 15 以下，恐慌未升溫；但沒有跟股市大升而明顯再跌，代表 hedging 需求仍在。",
  },
];

const sectorRows = [
  [
    "Communication Services",
    "+4.16%（Reuters / MarketScreener sector index 口徑）",
    "最強",
    "Meta +11.4% 係最大推手，Muse AI assistant 與券商調高目標價帶動 mega-cap platform beta。",
  ],
  [
    "Semiconductors / SOX",
    "+4.3%（PHLX Semiconductor Index）",
    "最強",
    "CPU / AI hardware 全線爆上：Intel +12.2%、Arm +17%、AMD 約 +10%、QCOM +9% 左右。",
  ],
  [
    "Information Technology",
    "+2.4%（S&P 500 sector index）",
    "強",
    "油價與 10Y 回落，令 high-duration growth 估值壓力下降；科技重新成為資金最願意追的方向。",
  ],
  [
    "Consumer Discretionary / Airlines",
    "暫無可靠精確 sector close；AAL / DAL 盤中約 +1%",
    "偏強",
    "Reuters 指油價下跌令航空等能源敏感股份受惠；但精確 sector ETF 收市因 Yahoo 429 / Stooq 403 未能可靠核對。",
  ],
  [
    "Financials / Industrials",
    "暫無可靠精確 sector close",
    "中性",
    "大市風險胃納改善理應有幫助，但 2Y/10Y 仍高，銀行與工業未成為今日主線；本文不硬填未核實數字。",
  ],
  [
    "Health Care / Staples / Real Estate / Utilities",
    "暫無可靠精確 sector close",
    "中性偏弱",
    "防守與 rate-sensitive 板塊在 growth rally 入面相對失色；10Y 仍近 5%，REITs / utilities 估值壓力未解除。",
  ],
  [
    "Energy",
    "約 -2.5%（市場摘要口徑；油價 WTI -4.5%、Brent -3.4%）",
    "最弱",
    "油價急跌直接打擊能源股與煉油股，VLO -4.0%、PSX -4.0%、MPC -4.8% 等拖累。",
  ],
  [
    "Materials / Basic Materials",
    "落後；精確 close 暫無可靠數據",
    "弱",
    "Motley Fool 市場摘要指 basic materials lagged；美元指數反彈至 100.428，亦不利資源與材料估值。",
  ],
];

const macroRows = [
  {
    topic: "Fed / 利率路徑",
    data: "Fed 9/16 加息 25bp 至 3.75%-4.00%；SEP median 2026 / 2027 年底政策利率約 4.1%。CME FedWatch 9/21：10 月再加 25bp 機率約 56.5%，不變約 43.5%。",
    meaning:
      "市場今日升，不等於 Fed 放鬆；只是油價和長債息短線回落，令估值壓力暫時減少。",
  },
  {
    topic: "美債息",
    data: "AP 指 10Y yield 跌至 4.95%；多個市場摘要顯示 10Y 約 4.957%-4.959%，2Y 約 4.718%-4.729%，30Y 約 5.293%-5.297%。",
    meaning:
      "10Y 跌穿 5% 是 growth rally 的燃料；但 4.95% 仍然好高，未足以說明估值壓力完全消失。",
  },
  {
    topic: "原油",
    data: "MarketWatch：Brent $100.34（-3.4%）、WTI $95.78（-4.5%），連跌第四日，創 9/8 以來最低收市。Reuters 指市場押注 UN 會議期間中東外交有突破。",
    meaning:
      "油價由通脹壓力變成 relief catalyst；如果 Brent 真正跌穿 $100 並企穩，對通脹預期和 consumer names 有幫助。",
  },
  {
    topic: "美元 / 黃金",
    data: "DXY 市場摘要報 100.428（+0.223%）；黃金來源有差異：Motley Fool 指美股收市附近現貨約 $4,340.51（-0.9%），Gate / CME futures 口徑約 $4,382.10（-0.97%）。",
    meaning:
      "美元仍偏硬，黃金回落反映避險需求下降；但不同金價口徑差異明顯，所以本文只把它視為方向訊號。",
  },
  {
    topic: "波幅 / 風險胃納",
    data: "Cboe 官方 VIX CSV：9/21 close 14.87，前一交易日 14.81。Nasdaq 創高但 VIX 未同步大跌。",
    meaning:
      "投資者願意追 AI beta，但仍買少量保護；這種組合通常代表短線可以升，但消息面一轉會快回吐。",
  },
  {
    topic: "Crypto / 流動性",
    data: "Cointelegraph 指 BTC 盤中升穿 $86k 並觸及 33 週高位；Binance Vision 20:00 UTC close：BTC $86,558.76、ETH $2,764.58、SOL $118.34。",
    meaning:
      "Crypto 同美股 growth 同步 risk-on，顯示市場不是單純防守反彈；但 crypto beta 升得快，止賺/止蝕要比大市嚴。",
  },
];

const stockRows = [
  [
    "AMD / INTC / ARM",
    "AMD 約 +10% 至 $615.52；INTC +12.2%；ARM 約 +17% 至 $322.90",
    "CPU / AI hardware 交易重新爆發。AMD 首次觸及 $1tn 市值，Arm 與 Intel 都受 CPU demand / AI infrastructure narrative 帶動。",
  ],
  [
    "SOX / Semis",
    "PHLX Semiconductor Index +4.3%",
    "Reuters 指晶片股是 Nasdaq 創收盤新高核心原因；這比單一 mega-cap 反彈更有說服力。",
  ],
  [
    "META",
    "+11.4% 至約 $741.25",
    "Wells Fargo 調高目標價，加上 Muse AI assistant 題材，令 Communication Services 成為全日最強板塊。",
  ],
  [
    "QCOM / NVDA / AVGO",
    "QCOM 約 +9.3%；NVDA 約 +2%、AVGO 約 +1%（CNBC 盤中口徑）",
    "今次更像 CPU / broad semis rally，不只是 Nvidia 單一龍頭；QCOM 因 data-center Arm CPU 故事受捧。",
  ],
  [
    "WBD / PSKY",
    "WBD +10.8%；PSKY 約 -2.9% 至 -3%",
    "媒體併購 / 反壟斷訴訟和解消息帶動 WBD，Paramount Skydance 反而受壓。",
  ],
  [
    "Energy laggards",
    "VLO -4.04%、PSX -3.99%、MPC -4.82%（MarketScreener 口徑）",
    "油價跌得急，煉油與能源鏈即時被沽；這是今日大市升但 Energy 最弱的主要原因。",
  ],
  [
    "COIN / HOOD / crypto stocks",
    "COIN 盤中約 +5% 至 +7%；HOOD 約 +5%（不同即市來源口徑）",
    "BTC 升穿 $86k 帶動 crypto-linked equities；但收市精確百分比來源有差異，本文不把單一數字當作最終 close。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$86,558.76",
    "+$5,477.50 / +6.76%",
    "升穿 $86k 並刷新 33 週高位，和 Nasdaq 創高互相確認 risk-on；短線支持先看 $85k / $82k。",
  ],
  [
    "ETH",
    "$2,764.58",
    "+$133.91 / +5.09%",
    "跟升但跑輸 BTC，代表資金先追最深流動性的 crypto beta；若要確認 alt season，需要 ETH/BTC 轉強。",
  ],
  [
    "SOL",
    "$118.34",
    "+$4.53 / +3.98%",
    "仍守 $115 上方，但升幅不及 BTC；高 beta 追價要小心大市回吐時放大波幅。",
  ],
];

const newsItems = [
  "AP：S&P 500 升 1.5% 至 7,764.70，距離歷史高位約 0.4%；Nasdaq +2.3% 至 27,122.09，Dow +0.7%，Russell +0.5%。",
  "Reuters / MarketScreener：Nasdaq 創收盤新高，AI optimism 重燃；PHLX Semiconductor Index +4.3%，AMD 約 +10%，Intel +12.2%，Arm +17%。",
  "油價急跌成為最大 macro relief：Brent 收 $100.34、WTI 收 $95.78，連跌第四日；市場押注 UN 會議或帶來中東外交突破。",
  "債息回落：10Y yield 跌回 4.95%-4.96%，由上週觸及 5.041% 的 19 年高位回落，growth multiple 獲得喘息。",
  "FedWatch 仍偏 hawkish：10 月再加 25bp 機率約 56.5%，所以市場不是交易減息，而是交易油價/債息壓力短線降溫。",
  "Crypto risk-on：BTC 在美股時段升穿 $86k，Binance Vision 4:00pm ET 附近 BTC close $86,558.76。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,700 / 7,650 是短線支持；跌穿 7,650 代表油價/債息 relief trade 失效。",
    "7,800 附近是歷史高位區；企穩上方才算真正 breakout。",
  ],
  [
    "Nasdaq",
    "27,000 是第一支持；26,700 是 breakout 後不應失守的位置。",
    "27,190（前高附近）/ 27,500 是下一段阻力與心理位。",
  ],
  [
    "SOX / Semis",
    "+4.3% 後第一支持看今日升幅的一半回吐；若 Intel / AMD gap 回補太快，AI trade 會降溫。",
    "延續升勢需要 AMD / ARM / INTC 第二日仍守高位，而不是單日 short squeeze。",
  ],
  [
    "10Y yield",
    "4.90% 以下會繼續幫 growth；4.95% 是今日 risk-on 的核心線。",
    "5.00% / 5.04% 是壓力帶；重新升穿會壓縮 Nasdaq multiple。",
  ],
  [
    "WTI / Brent",
    "WTI $95、Brent $100 是通脹 relief 分水嶺。",
    "Brent 反彈回 $103-$105，FedWatch hawkish pricing 可能再升。",
  ],
  [
    "BTC",
    "$85,000 / $82,000 是 breakout 支持。",
    "$88,000 / $90,000 是下一段阻力；若 Nasdaq 回吐，crypto beta 會先波動。",
  ],
];

const planRows = [
  [
    "短線",
    "可以承認 risk-on 回來，但唔好忘記觸發點是油價和債息回落。S&P 500 守 7,700、Nasdaq 守 27,000，反彈結構才算完整。",
  ],
  [
    "板塊",
    "優先睇 Communication Services、Semis、XLK 能否續強；如果 Energy 繼續跌但大市仍升，表示市場相信通脹壓力降溫。",
  ],
  [
    "Macro",
    "三個開關：Brent $100、10Y 5%、FedWatch 10 月加息機率。油價跌穿 $100 + 10Y 留 5% 下方，是 growth 最舒服組合。",
  ],
  [
    "個股",
    "AMD / INTC / ARM / QCOM 是今日新主線，META 是 comm services 龍頭。單日升幅大，追入要等回踩或用較細倉位。",
  ],
  [
    "Crypto",
    "BTC 企 $85k 上方可維持偏強；ETH / SOL 若跑輸 BTC，代表市場仍偏向主流幣而非全面 alt risk-on。",
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

export default function USCloseBrief20260921() {
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
          background: linear-gradient(135deg, #1e3a8a 0%, #0f766e 52%, #111827 100%);
          color: white;
          border-radius: 26px;
          padding: 30px;
          box-shadow: 0 22px 45px rgba(15, 118, 110, 0.24);
        }
        .eyebrow { letter-spacing: 0.12em; text-transform: uppercase; font-size: 13px; opacity: 0.85; }
        h1 { margin: 8px 0 10px; font-size: 44px; line-height: 1.08; }
        .subtitle { font-size: 18px; opacity: 0.94; max-width: 940px; }
        .meta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 18px; }
        .pill { background: rgba(255,255,255,0.16); border: 1px solid rgba(255,255,255,0.32); padding: 8px 12px; border-radius: 999px; font-size: 13px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 18px; }
        .card { background: white; border: 1px solid #e2e8f0; border-radius: 22px; padding: 20px; box-shadow: 0 12px 30px rgba(15, 23, 42, 0.07); break-inside: avoid; }
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
          .card { box-shadow: none; }
          a { color: #1d4ed8; }
        }
      `}</style>

      <section className="hero">
        <div className="eyebrow">US Close Brief</div>
        <h1>美股收盤懶人包｜完整版</h1>
        <div className="subtitle">
          {reportDate} 收市｜Nasdaq 創收盤新高；AI 晶片急升，油價與債息回落幫
          growth 鬆綁
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
            今日係「AI 重新帶隊 + oil / yield
            relief」的組合。上週市場最驚兩件事：油價高企推通脹、10Y yield 重返
            5% 壓估值；週一兩個壓力同時鬆一鬆，資金即刻追返 Nasdaq /
            semis。Reuters 形容 AI optimism 重燃，AP 就指出 S&P 500
            已升到距離歷史高位約 0.4%。
          </p>
          <h3>資金點諗</h3>
          <ul>
            <li>
              買 AI / semis：AMD、Intel、Arm、QCOM 大升，證明資金由單一 Nvidia
              trade 擴散去 CPU / AI infrastructure。
            </li>
            <li>
              買 mega-cap platform：Meta +11.4% 令 Communication Services
              成全日最強 sector。
            </li>
            <li>沽 Energy：油價急跌，能源股變成大市少數拖累。</li>
            <li>
              仍然要防 Fed：FedWatch 顯示 10
              月再加息機率仍高過一半，今日不是寬鬆交易。
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
                      className={`tag ${state === "最強" || state === "強" || state === "偏強" ? "green" : state === "中性" || state === "中性偏弱" ? "amber" : "red"}`}
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
            Sector 精確 ETF close：Yahoo chart API 本次回 429，Stooq 回 403
            browser verification；因此本文採 Reuters / MarketScreener / Motley
            Fool / CNBC 市場摘要，未能可靠核對的 sector 寫明「暫無可靠精確
            sector close」。
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
              <span className="tag green">綠</span> AI / semis：SOX
              +4.3%，AMD、Intel、Arm、QCOM 全線大升。
            </li>
            <li>
              <span className="tag green">綠</span> Mega-cap platform：META
              +11.4%，Communication Services +4.16%。
            </li>
            <li>
              <span className="tag green">綠</span> Crypto beta：BTC 4:00pm ET
              附近 $86,558.76，較上個交易日 +6.76%。
            </li>
            <li>
              <span className="tag amber">黃</span> Small caps：Russell
              +0.52%，有升但明顯跑輸 Nasdaq。
            </li>
            <li>
              <span className="tag red">紅</span> Energy：WTI -4.5%、Brent
              -3.4%，能源鏈成主要弱點。
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
                <th>Binance Vision 20:00 UTC close</th>
                <th>對 9/18 20:00 UTC</th>
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
            口徑：直接 Binance spot API 在此環境曾受地區限制，因此採 Binance
            Vision public data API 1-minute kline；時間點為 2026-09-21 20:00:00
            UTC，即美股正常收市 4:00pm ET 附近。對比基準為上一個美股交易日
            2026-09-18 20:00:00 UTC。
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
            最終觀點：今日是一個有質素但仍要睇 macro 的反彈。最靚是 AI semis 與
            Meta 帶動的 growth leadership，最重要的確認是 10Y 跌回 5%
            以下、油價急跌。風險是 FedWatch 仍偏 hawkish，如果油價反彈或 10Y
            重新上 5%，高 beta 會先被沽。操作上可以跟強者，但要用 macro
            線做風控。
          </p>
        </article>

        <article className="card wide">
          <h2>12. 來源、口徑與免責聲明</h2>
          <p className="note">
            數據衝突處理：指數收市採 AP 精確點數，並與 Reuters / MarketScreener
            market close 核對；sector 採 Reuters / MarketScreener / Motley Fool
            / CNBC 摘要，因 Yahoo 429 與 Stooq 403 未能可靠核對的 ETF close
            已標明「暫無可靠精確 sector close」；美債採 AP、CNBC
            與市場摘要區間；油價採 MarketWatch / Reuters headline；Fed 採
            Federal Reserve statement / SEP 與 CME FedWatch；黃金列明現貨與
            futures 口徑差異；VIX 採 Cboe 官方 CSV；Crypto 採 Binance Vision
            20:00 UTC 1-minute kline。
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
