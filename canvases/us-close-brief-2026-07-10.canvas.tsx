import React from "react";

const reportDate = "2026-07-10";
const publishedAt = "香港時間 2026-07-13 07:00";

const sources = [
  {
    name: "Barchart / AP - How major US stock indexes fared Friday 7/10/2026",
    url: "https://www.barchart.com/story/news/3230581/how-major-us-stock-indexes-fared-friday-7-10-2026",
  },
  {
    name: "CNBC - Stock market news for July 10, 2026",
    url: "https://www.cnbc.com/2026/07/09/stock-market-today-live-updates.html",
  },
  {
    name: "Motley Fool - Markets Edge Higher and SK Hynix Soars on Debut",
    url: "https://www.fool.com/coverage/stock-market-today/2026/07/10/stock-market-today-july-10-markets-edge-higher-and-sk-hynix-soars-on-debut/",
  },
  {
    name: "Cboe - VIX volatility products",
    url: "https://www.cboe.com/en/tradable-products/vix/",
  },
  {
    name: "Daily Market Updates - US markets and sectors, July 10 close",
    url: "https://dailymarketupdates.com/markets",
  },
  {
    name: "The Trading Tools - Sector Performance, July 10 close",
    url: "https://www.thetrading.tools/sector-performance",
  },
  {
    name: "CNBC - Oil prices post weekly gain as Middle East supply risks persist",
    url: "https://www.cnbc.com/2026/07/10/oil-edges-lower-but-heads-for-weekly-gain-as-middle-east-supply-risks-persist.html",
  },
  {
    name: "Advisor Perspectives - Treasury Yields Snapshot: July 10, 2026",
    url: "https://www.advisorperspectives.com/dshort/updates/2026/07/10/treasury-yields-snapshot-july-10-2026",
  },
  {
    name: "CNBC - US10Y quote",
    url: "https://www.cnbc.com/quotes/US10Y",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "BingX / CME FedWatch snapshot - July hold and September distribution",
    url: "https://bingx.com/en/flash-news/post/cme-fedwatch-shows-odds-of-steady-fed-rates-in-july-september-split-with-chance-of-bp-hike",
  },
  {
    name: "Barchart / AP - SK Hynix rises nearly 13% in Wall Street debut",
    url: "https://www.barchart.com/story/news/3222276/sk-hynix-rises-nearly-13-in-debut-on-wall-street-as-demand-for-memory-chips-soars-amid-ai-frenzy",
  },
  {
    name: "Sharecast - US close: SK Hynix debut lifts sentiment",
    url: "https://www.sharecast.com/news/market-report-us-close/us-close-stocks-erase-earlier-losses-as-sk-hynix-debut-lifts-sentiment--22990048.html",
  },
  {
    name: "Yahoo Finance - META historical prices",
    url: "https://finance.yahoo.com/quote/META/history/",
  },
  {
    name: "Yahoo Finance - Gold prices today, July 10, 2026",
    url: "https://finance.yahoo.com/personal-finance/investing/article/gold-prices-today-friday-july-10-2026-gold-finally-opens-higher-this-morning-120806614.html",
  },
  {
    name: "FXDailyReport - DXY July 10, 2026",
    url: "https://fxdailyreport.com/us-dollar-index-dxy-posts-weekly-gain-as-traders-bet-big-on-chief-global-reserve-currency/",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "Dow Jones",
    "52,637.01",
    "+149.60 / +0.29%",
    "連續第二日修復，但全週仍跌約 0.5%；藍籌不是最強，只是跟住大市回穩。",
  ],
  [
    "S&P 500",
    "7,575.39",
    "+31.75 / +0.42%",
    "收近高位，完成過去 5 週第 4 個上升週；市場繼續願意買 AI winner。",
  ],
  [
    "Nasdaq Composite",
    "26,281.61",
    "+74.72 / +0.29%",
    "AI IPO 與 mega-cap 支撐指數，但 chip tape 內部有分化，升幅不算全面。",
  ],
  [
    "Russell 2000",
    "2,977.81",
    "-14.74 / -0.49%",
    "小型股逆市回落，提醒今日不是 broad risk-on，而是大型 AI/quality growth 主導。",
  ],
  [
    "VIX",
    "15.03",
    "-0.81 / -5.11%",
    "Cboe 7/10 數據；恐慌指標跌近 15，但曲線仍反映市場預期 Q3 有事件風險。",
  ],
];

const sectorRows = [
  [
    "Materials / XLB",
    "$50.89 / +1.25%",
    "最強",
    "美元未能企穩 101 上方，加上週內前段跌得多，材料有技術反彈。",
  ],
  [
    "Consumer Staples / XLP",
    "$84.12 / +1.11%",
    "防守反彈",
    "昨日跑輸後回補，顯示今日資金不是單一 high beta，而有防守板塊補倉。",
  ],
  [
    "Communication Services / XLC",
    "$111.64 / +1.02%",
    "綠燈",
    "META 接近 +6% 是主要火車頭，AI chip / AI coding 故事繼續推動板塊。",
  ],
  [
    "Utilities / XLU",
    "$45.41 / +0.62%",
    "修復",
    "10Y 雖升至約 4.56%，但 VIX 降溫令 yield-sensitive defensive 有少量買盤。",
  ],
  [
    "Real Estate / XLRE",
    "$44.45 / +0.50%",
    "中性",
    "仍受 4.5% 以上長息壓住，今日升幅只屬跟市，不是估值重估。",
  ],
  [
    "Energy / XLE",
    "$55.08 / +0.47%",
    "分歧",
    "油價即日回落但全週仍升，能源股未大跌；市場仍保留 Hormuz 風險 premium。",
  ],
  [
    "Industrials / XLI",
    "$181.92 / +0.45%",
    "中性偏強",
    "earnings season 前有選擇性資金流入，但不是今日主線。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$117.24 / +0.33%",
    "中性",
    "油價回落有利 consumer beta，但 AMZN 偏弱令板塊升幅受限。",
  ],
  [
    "Financials / XLF",
    "$55.71 / +0.31%",
    "等業績",
    "銀行業績季開鑼前，估值相對便宜是支持，但收益率曲線仍未給出強催化。",
  ],
  [
    "Technology / XLK",
    "$185.78 / +0.23%",
    "分化",
    "NVDA/META 強，但 MU、INTC、設備股偏弱，科技升幅比 headline AI 熱度細。",
  ],
  [
    "Semiconductors / SOXX",
    "$581.97 / +0.05%",
    "觀望",
    "SK Hynix 與 NVDA 強，memory/設備股分化；SOXX 守住 $580 但未能延續 7/9 大升。",
  ],
  [
    "Health Care / XLV",
    "$160.84 / -0.82%",
    "紅燈",
    "今日唯一明顯下跌的大 sector；GILD 等醫療股拖累，資金流向不在 healthcare。",
  ],
];

const stockRows = [
  [
    "SK Hynix / AI memory IPO",
    "ADR 定價 $149、開 $170、收 $168.01，較 IPO 價 +12.8%；集資約 $26.5B",
    "最大外國公司美國上市之一，強化 AI memory / HBM 需求未完的敘事，亦令市場重新審視 memory chain 估值。",
  ],
  [
    "NVDA",
    "新聞源一致指升約 4%；AP 稱是推高 S&P 500 的最強單一力量之一",
    "SK Hynix 是 Nvidia 重要 HBM 供應鏈，IPO 成功反而加強 AI hardware 生態需求。",
  ],
  [
    "META",
    "Yahoo historical close $669.21 / +5.97%；CNBC 指週升逾 14%",
    "市場炒作 Meta 自研 AI chip / compute cost 下降，令 XLC 成為今日最強大型板塊之一。",
  ],
  [
    "MU / memory chain",
    "來源有差異：部分表格顯示 MU 約 $979.30、跌約 1%-3%；AInvest 另報近 $965.37 / -2.65%",
    "SK Hynix 上市後資金有 rebalancing，昨日大升的 memory 名字出現獲利回吐；本文不採單一精確百分比作結論。",
  ],
  [
    "SMH / SOXX / chip equipment",
    "SMH 約 +0.5%，SOXX 約 +0.05%；LRCX、KLAC、AMAT 在 Sharecast 跌幅榜",
    "半導體不是全線爆升，而是由 NVDA、SK Hynix 支撐，設備股和部分 memory 承壓。",
  ],
  [
    "EquipmentShare / WD-40",
    "Motley Fool 指 EquipmentShare 約 +17%，WD-40 約 +11%",
    "個股 earnings / guidance 仍可帶動明顯 alpha，市場開始由 macro shock 轉回業績選股。",
  ],
  [
    "Banks / XLF",
    "XLF +0.31%；下週大型銀行財報前，CNBC 提到 financials 估值較 2024 低約四分之一",
    "若 JPM/BAC/C 等淨息差與信貸質素穩，可能令落後的金融股有補升空間。",
  ],
  [
    "Coterra / Energy laggards",
    "Sharecast 跌幅榜見 CTRA -8.62%、APA -2.96%；XLE 仍 +0.47%",
    "油價 settle 回落，但能源板塊內部分化；投資者保留 geopolitical hedge，同時沽個別弱名。",
  ],
  [
    "Healthcare laggards",
    "XLV -0.82%；Sharecast 顯示 GILD -4.33%",
    "risk appetite 回暖未惠及 healthcare，短線資金更偏好 AI、通訊服務和材料反彈。",
  ],
  [
    "Delta / travel",
    "TradingView 指 DAL 仍是焦點，Delta 重申全年盈利指引",
    "消費服務需求未見全面轉弱，但投資者仍等 CPI 與銀行業績確認經濟韌性。",
  ],
];

const macroRows = [
  [
    "Treasury yields",
    "Advisor Perspectives：2Y 4.21%、10Y 4.56%；CNBC US10Y 5:04pm EDT 4.561%、較前收 4.539% 升 2.2bp",
    "長息仍高，AI 股可以升但估值壓力未走；4.60% 仍是 growth multiple 的敏感線。",
  ],
  [
    "Oil / Hormuz",
    "CNBC/Reuters：Brent $76.01 / -0.38%，WTI $71.41 / -0.93%；全週 Brent 約 +5%、WTI 約 +4%",
    "即日油價回落幫市場穩住，但週線仍反映 U.S.-Iran 與 Strait of Hormuz 風險 premium。",
  ],
  [
    "FedWatch",
    "BingX/CME snapshot：7 月 hold 74.9%、+25bp 25.1%；9 月 hold 35.7%、+25bp 51.1%、+50bp 13.1%",
    "市場仍把 9 月加息或更高政策利率視為主風險，下週 CPI 會直接影響這組概率。",
  ],
  [
    "DXY / 美元",
    "FXDailyReport：DXY 18:16 GMT 約 100.94、+0.05%，盤中曾穿 101 後回落",
    "美元未能企穩 101，有利材料與部分風險資產；但利率預期仍限制美元下行。",
  ],
  [
    "Gold",
    "Yahoo GC=F 4:59pm EDT 約 $4,113.70 / -0.65%；其他 spot 日結源約 $4,123-$4,129",
    "金價口徑分歧來自 futures、spot 和時間戳不同；本文只採「高位震盪、未明顯避險爆升」作方向。",
  ],
  [
    "Volatility",
    "Cboe：VIX 15.03、Prev close 15.84、-5.11%；VIX3M/6M 仍高過現貨",
    "短線恐慌低，但曲線仍提示市場不是完全無視 Q3 事件風險。",
  ],
  [
    "Macro calendar",
    "市場焦點轉向下週 CPI、Fed 官員談話、以及 JPM/BAC/C 等銀行業績",
    "今日沒有單一宏觀數據壓倒全場，價格行為更像「事件風險降溫 + AI IPO + earnings 前部署」。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$63,881.61",
    "+0.99% vs 7/9 20:00 UTC",
    "Binance data-api 1m kline：2026-07-10 20:00:00 UTC close，即美股 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$1,791.99",
    "+2.47% vs 7/9 20:00 UTC",
    "ETH 跑贏 BTC，反映 crypto beta 對美股 risk-on 有較高彈性。",
  ],
  [
    "SOLUSDT / SOL",
    "$77.87",
    "-0.35% vs 7/9 20:00 UTC",
    "SOL 未跟上 BTC/ETH，仍在 $77-$78 附近橫行；短線要重上 $80 才有突破感。",
  ],
];

const notes = [
  "美股收高但升幅克制：Dow +149.60 至 52,637.01，S&P 500 +0.42% 至 7,575.39，Nasdaq +0.29% 至 26,281.61。",
  "主線是 AI appetite 未熄：SK Hynix ADR 美國上市首日收 $168.01，較 $149 IPO 價升 12.8%，成為全日市場焦點。",
  "升市不算全面：Russell 2000 -0.49%，Health Care -0.82%，SOXX 只約 +0.05%，反映資金集中在少數 AI/quality growth。",
  "VIX 跌至 15.03，油價 settle 回落，但 10Y 仍在約 4.56%，即是 panic 降溫、利率壓力未走。",
  "下週 CPI 與銀行業績會決定今次反彈能否由 AI headline 擴散至更闊市場。",
  "Crypto 採 Binance 4:00pm ET 附近價格：BTC $63,881.61、ETH $1,791.99、SOL $77.87；ETH 最強，SOL 偏弱。",
];

const technicalLevels = [
  [
    "Dow Jones",
    "52,600 / 53,000",
    "收 52,637.01，剛企回 52,600；若重上 53,000，藍籌才算擺脫全週弱勢。",
  ],
  [
    "S&P 500",
    "7,550 / 7,600",
    "7,550 已收復；7,600 是心理阻力，突破才代表大型股升勢再加速。",
  ],
  [
    "Nasdaq Composite",
    "26,200 / 26,400",
    "收 26,281.61，守住 26,200；若破 26,400，AI trade 會更有延續性。",
  ],
  [
    "Russell 2000",
    "2,950 / 3,000",
    "跌至 2,977.81，仍在 3,000 下方；未突破前，breadth 仍是短板。",
  ],
  [
    "VIX",
    "15 / 16",
    "VIX 收 15.03，若跌穿 15 代表短線 calm 延續；若重上 16，要小心地緣或 CPI 風險返嚟。",
  ],
  [
    "SOXX",
    "$580 / $585",
    "SOXX 約 $581.97，守 $580 但未有突破；$585 以上才算確認 chip leadership 延續。",
  ],
  [
    "10Y Treasury",
    "4.50% / 4.60%",
    "10Y 約 4.56%；4.60% 是 growth 估值壓力線，跌穿 4.50% 才算真正寬鬆。",
  ],
  [
    "WTI / Brent",
    "$71 / $76",
    "WTI $71.41、Brent $76.01；Brent 重上 $80 會令通脹和 Fed pricing 再升溫。",
  ],
  [
    "BTC",
    "$63,000 / $64,000",
    "BTC 4pm ET 約 $63.88k；重上 $64k 才由守位變成短線反攻。",
  ],
];

const watchList = [
  "下週 CPI：若通脹高過預期，9 月加息概率和 10Y 都可能再上，壓住 AI multiple。",
  "銀行業績：JPM、BAC、C 等會回答信貸成本、淨息差和消費韌性問題。",
  "SK Hynix 上市後第二日交易：若守住 $168-$170，AI memory 故事會更可信；若跌穿 IPO 首日低位，則容易拖累 memory chain。",
  "META / NVDA：今日兩隻對指數貢獻大，留意是否變成 narrow leadership。",
  "SOXX $580：失守代表 chip rally 仍只是個別強股；企上 $585-$590 才算擴散。",
  "10Y 4.60% 與 DXY 101：任何一個升穿，都會令 growth trade 風險回升。",
  "Brent $80：地緣風險若再推高油價，市場會重新交易 inflation shock。",
  "Crypto：BTC $63k、ETH $1.75k、SOL $77 是短線風險胃納防線。",
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

export default function USCloseBrief20260710() {
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
        <h1>AI 熱度頂住大市，SK Hynix IPO 成焦點</h1>
        <p className="subtitle">
          7 月 10 日美股小幅收高：S&P 500 與 Nasdaq 完成上升週，VIX 跌近
          15，市場暫時消化油價與地緣風險。不過升市其實幾揀擇，Russell 2000
          回落、SOXX 近乎持平，真正主菜是 SK Hynix、NVDA、META 等 AI 相關名字。
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
            今日結論：市底沒有壞，但 leadership 好窄。短線可以跟 AI
            強勢股，但要用 10Y 4.60%、Brent $80、SOXX $580、VIX 16
            做風控；如果下週 CPI 不友善，這種 narrow rally 會好易震。
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
              AP/Barchart 與 CNBC 對三大指數收市數字一致：S&P 500 +0.42%、Dow
              +0.29%、Nasdaq +0.29%，headline 是溫和 risk-on。
            </li>
            <li>
              但 Russell 2000 -0.49%，代表資金沒有全面追小型股，升市集中在大型
              AI 與部分 defensives/cyclicals 補倉。
            </li>
            <li>
              VIX 跌至 15.03，市場未有 crash premium；不過 10Y 仍 4.56%，不是
              liquidity 大放水環境。
            </li>
            <li>
              SOXX 只是微升，反映「AI
              故事仍強」同「半導體內部輪動/獲利回吐」同時存在。
            </li>
          </ul>
        </Card>

        <Card title="4｜板塊紅綠燈">
          <DataTable
            headers={["板塊 / ETF proxy", "變動", "訊號", "一句講晒"]}
            rows={sectorRows}
          />
          <p className="small">
            本次 Yahoo chart API 回傳 429，sector ETF 以 Daily Market Updates 與
            The Trading Tools 收市表交叉引用；SOXX 不是 S&P 500 sector，但保留作
            AI hardware 溫度計。
          </p>
        </Card>

        <Card title="5｜點解今日會咁走？">
          <h3>1）AI IPO 成功，市場仍願意付錢買 AI winner</h3>
          <ul>
            <li>
              SK Hynix ADR 以 $149 定價、首日收 $168.01，集資約 $26.5B；AP
              指這是 AI memory demand 熱度的直接證據。
            </li>
            <li>
              NVDA 升約 4%、META 升近 6%，足以頂住 MU、INTC、設備股偏弱的壓力。
            </li>
          </ul>
          <h3>2）油價即日回落，但 weekly risk premium 未消失</h3>
          <ul>
            <li>
              Brent settle $76.01、WTI $71.41，較前日回落；市場暫時相信 Hormuz
              風險未變成全面供應中斷。
            </li>
            <li>
              但全週 Brent 仍升約 5%，所以能源與通脹風險只是降溫，不是消失。
            </li>
          </ul>
          <h3>3）下週 CPI / 銀行業績前，資金先買 quality</h3>
          <ul>
            <li>
              10Y 收在約 4.56%，FedWatch 仍反映 9 月加息風險，令市場不敢全面追高
              beta。
            </li>
            <li>
              白話講：今日不是「乜都升」，而是「買最有故事、最有盈利支撐的 AI
              和大型股」。
            </li>
          </ul>
        </Card>

        <Card title="6｜宏觀白話版">
          <DataTable headers={["項目", "數據", "解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：macro 是「油價跌少少、VIX 跌多啲、債息仍偏高」。這種組合容許
            AI 股升，但未足以支持全面牛市擴散；下週 CPI 係真正考牌。
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
            Crypto 採 Binance data-api 1-minute kline，時間點為 2026-07-10
            20:00:00 UTC（美股 4:00pm ET 附近）；對比基準為 2026-07-09
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
              可跟 META/NVDA/SK Hynix 相關強勢，但避免把「少數 AI winner
              升」誤讀成全面風險開綠燈。
            </li>
            <li>
              <strong>中線：</strong>
              AI infrastructure 仍是市場核心敘事；但 SOXX 未大升，代表資金正由
              「成個 sector」轉為「揀最有盈利/供應鏈位置的名」。
            </li>
            <li>
              <strong>風控：</strong>
              10Y 升穿 4.60%、Brent 重新企 $80、VIX 重上 16 或 CPI
              高過預期，都要降低高 beta / 槓桿倉位。
            </li>
            <li>
              <strong>一句到尾：</strong>
              今日是「AI 熱度頂住 macro 壓力」；市況可以做，但要買強、控倉、等
              CPI 和銀行業績確認廣度。
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
              指數收市：AP/Barchart、CNBC、Motley Fool 對 Dow 52,637.01、S&P 500
              7,575.39、Nasdaq 26,281.61 口徑一致；Russell 2000 採 AP/Barchart
              2,977.81。
            </li>
            <li>
              Sector ETF：Yahoo chart API 本次回傳 429；本文改採 Daily Market
              Updates / The Trading Tools 收市表，並清楚標示來源。
            </li>
            <li>
              個股：META 以 Yahoo historical close $669.21 / +5.97% 為主；MU
              在不同即時源出現約 -1% 至 -3%
              差異，所以本文只作「回吐/分化」解讀，不把單一百分比當核心結論。
            </li>
            <li>
              Treasury yields：Advisor Perspectives 使用日結 2Y 4.21%、10Y
              4.56%；CNBC US10Y 5:04pm EDT 為 4.561%，口徑接近。
            </li>
            <li>
              Oil / gold / DXY：油價採 CNBC/Reuters settle；gold 因
              futures、spot、時間戳不同出現 $4,104-$4,129
              區間，本文標示差異；DXY 採 FXDailyReport 18:16 GMT 100.94。
            </li>
            <li>
              FedWatch：CME 官方頁提供方法論；具體概率採 BingX 引用的 CME
              snapshot，屬當時市場口徑，收市後會隨 futures 變動。
            </li>
            <li>
              Crypto：直接 Binance spot API 如受地區限制，本文使用 Binance
              data-api 1m kline，精確取 2026-07-10 20:00 UTC close。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
