import React from "react";

const reportWeek = "2026-07-20 至 2026-07-24";
const reportDate = "2026-07-25";
const publishedAt =
  "香港時間 2026-07-25 09:04（週末自動生成；美股最新交易日為 7/24）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "Reuters via MarketScreener - Nasdaq lags on angst over AI spending ahead of earnings reports",
    url: "https://hk.marketscreener.com/news/nasdaq-falls-on-angst-over-ai-spending-ahead-of-earnings-reports-ce7f51dfd18bf027",
  },
  {
    name: "Investing.com - U.S. stocks mixed at close of trade; Dow Jones Industrial Average up 0.45%",
    url: "https://www.investing.com/news/stock-market-news/us-stocks-mixed-at-close-of-trade-dow-jones-industrial-average-up-045-4812502",
  },
  {
    name: "Morningstar - Market Wrap: Stocks Slip as Energy Rises and Consumer Cyclicals Fall",
    url: "https://www.morningstar.com/markets/market-wrap-stocks-slip-energy-rises-consumer-cyclicals-fall",
  },
  {
    name: "Reuters via LSE - Oil falls on report China pushing for end US-Iran war",
    url: "https://www.lse.co.uk/news/oil-retreats-from-above-100-but-set-for-weekly-rise-on-middle-east-escalation-nrkc2j2eq9oxo80.html",
  },
  {
    name: "CNBC - 10-year Treasury yield rises to highest since January 2025 as surging oil rekindles inflation fear",
    url: "https://www.cnbc.com/2026/07/23/treasury-yields-oil-prices-jobless-claims.html",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "AP - U.S. filings for unemployment aid fall to 187,000 last week, fewest since 1969",
    url: "https://apnews.com/article/unemployment-benefits-jobless-claims-layoffs-labor-097a210a86c0bebcba2b2625cd04c2dc",
  },
  {
    name: "Reuters via KWSN - US business activity perks up in July, helped by World Cup, but trend may not last",
    url: "https://kwsn.com/2026/07/24/us-business-activity-perks-up-in-july-helped-by-world-cup-but-trend-may-not-last-sp-global-says/",
  },
  {
    name: "Reuters via SRN - US equity funds log outflows for a second straight week as tech earnings eyed",
    url: "https://srnnews.com/us-equity-funds-log-outflows-for-a-second-straight-week-as-tech-earnings-eyed/",
  },
  {
    name: "ETF Action - Technology and Semiconductor ETFs Shed Billions Amidst Broader Equity Outflows",
    url: "https://www.etfaction.com/technology-and-semiconductor-etfs-shed-billions-amidst-broader-equity-outflows/",
  },
  {
    name: "FinanceFeeds - Alphabet Stock Falls 7%, Tesla Drops 14.5% as Wall Street Punishes AI Spending",
    url: "https://financefeeds.com/alphabet-stock-falls-7-tesla-drops-14-5-as-wall-street-punishes-ai-spending/",
  },
  {
    name: "Morningstar - What's Happening in the Markets This Week",
    url: "https://www.morningstar.com/markets/whats-happening-markets-this-week-16",
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
  "本週美股連續第二週回落：S&P 500 全週 -0.61%、Nasdaq -2.13%、Dow -0.38%；週五 Dow 反彈，但 Nasdaq 仍被 AI capex / chip 壓力拖住。",
  "週五收市：Dow +235.60 / +0.46% 至 51,947.25，S&P 500 +3.68 / +0.05% 至 7,411.98，Nasdaq -161.87 / -0.64% 至 24,975.82；Russell 2000 與 VIX 數據源有差異，下文分開標示。",
  "Morningstar 口徑：US Market Index 全週 -0.6%；Energy +3.37% 與 Utilities +2.3% 跑出，Consumer Cyclicals -5.48% 與 Communication Services -3.94% 最弱。",
  "本週核心矛盾係：AI 大型投資令投資者重新審視現金流，同時油價因中東風險急升，令債息與 Fed hike risk 重新上枱。",
  "資金流向偏保守：LSEG Lipper 指截至 7/22 的一週，美國股票基金淨流出 $7.34bn，Growth funds 流出 $8.55bn；但 sector funds 仍錄得 $2.46bn 流入。",
  "Crypto 用 Binance Vision 2026-07-24 20:00 UTC 1m close：BTC $64,238.00、ETH $1,864.44、SOL $73.95；較 7/17 同一時間分別 +0.27%、+1.30%、-1.49%。",
];

const indexRows = [
  [
    "DJIA",
    "51,947.25",
    "週五 +235.60 / +0.46%；全週 -0.38%",
    "Dow 受金融、醫療與防守輪動支持，週五回升；但連續三週下跌，代表大市未真正轉強。",
  ],
  [
    "S&P 500",
    "7,411.98",
    "週五 +3.68 / +0.05%；全週 -0.61%",
    "指數守在 7,400 上方，但升幅好薄；平均股比 mega-cap 受壓少，反映是成份股內部輪動。",
  ],
  [
    "Nasdaq Composite",
    "24,975.82",
    "週五 -161.87 / -0.64%；全週 -2.13%",
    "AI / 半導體 / megacap 壓力未完；下週 MSFT、META、AMZN、AAPL 會直接決定修復力度。",
  ],
  [
    "Russell 2000",
    "約 2,954.30",
    "Yahoo snippet 指 +0.48%；TS2 摘要指 -0.29%；較 7/17 約 -0.27%",
    "細價股全週跌幅有限，但高利率環境仍限制估值擴張；本文採 2,954.30 作週五點位，日變動標示來源差異。",
  ],
  [
    "VIX",
    "17.54 至 18.57 區間",
    "Yahoo history snippet 顯示 17.54；Investing 摘要顯示 18.57 / -0.70%",
    "波動不是 panic，但已反映投資者為 Fed、油價與科技財報買保險；因來源衝突，不硬填單一精確數字。",
  ],
];

const whyMarketMoved = [
  [
    "AI capex 由故事變成成本壓力",
    "Alphabet / Tesla 業績後，市場焦點由 revenue beat 轉向 free cash flow、capex guidance 與 AI 投資回本時間；Nasdaq 因此連續受壓。",
  ],
  [
    "半導體與 mega-cap crowding 被減倉",
    "Reuters 指 S&P 500 technology index 週五 -0.88%，chip stocks 下跌；這不是單一公司，而是 crowded AI trade 被重新定價。",
  ],
  [
    "油價先急升再回吐，但通脹尾巴未走",
    "Brent 週四升穿 $100，週五回落至 $96.78，但全週仍接近 +10%；市場擔心能源價格令 Fed 難以轉鴿。",
  ],
  [
    "債息回到壓力區",
    "CNBC 指 10Y 週四曾升至 4.699%、2Y 4.353%、30Y 5.167%；高 real yield 會壓住長 duration growth multiple。",
  ],
  [
    "經濟數據不是壞，但也不夠鴿",
    "Jobless claims 跌至 187k、PMI 保持擴張，代表經濟有韌性；問題是韌性加油價，會令利率市場較難 price cuts。",
  ],
];

const topNews = [
  [
    "1",
    "三大指數全週收低，Nasdaq 跑輸",
    "Reuters / MarketScreener：S&P 500 全週 -0.6%、Nasdaq -2%、Dow -0.4%；週五只是 Dow / S&P 反彈，科技仍未修復。",
  ],
  [
    "2",
    "Alphabet、Tesla 引爆 AI capex 懷疑",
    "Alphabet 將 2026 capex 指引提升至 $195bn-$205bn；Tesla capex 急升、free cash flow 轉負，兩者 7/23 分別跌約 7% / 14.5%。",
  ],
  [
    "3",
    "能源與公用事業成避風港",
    "Morningstar：Energy +3.37%、Utilities +2.3%，而 Consumer Cyclicals -5.48%、Communication Services -3.94%；市場由高 beta 轉向防守/通脹 hedge。",
  ],
  [
    "4",
    "FedWatch 加息尾部風險升溫",
    "Investing Fed Rate Monitor 7/24 15:45 EDT：7/29 維持 3.50%-3.75% 機率 62.4%，加 25bp 至 3.75%-4.00% 機率 37.6%。",
  ],
  [
    "5",
    "下週 Fed + 四大科技財報同場",
    "FOMC 7/28-29，決議 7/29 2pm ET；Microsoft / Meta 7/29、Amazon / Apple 7/30，會直接驗證 AI 投資與 margin 故事。",
  ],
];

const heatMapRows = [
  [
    "Energy",
    "+3.37%（Morningstar）",
    "強綠",
    "油價風險 premium 支持；但週五油價回吐提醒，這是 headline-driven trade，不能用正常趨勢股方式追。",
  ],
  [
    "Utilities",
    "+2.30%（Morningstar）",
    "綠燈",
    "防守需求與 AI power demand 敘事一齊幫手；若債息再升，估值仍會受考驗。",
  ],
  [
    "Value",
    "+1.18%（Morningstar）",
    "綠燈",
    "資金轉去現金流、股息與相對低估值；這是本週最清晰的風格輪動。",
  ],
  [
    "Mid Caps",
    "+0.30%（Morningstar）",
    "黃綠",
    "比 mega-cap tech 穩，但未算 breakout；需要債息停止上升才有更好承接。",
  ],
  [
    "Large Caps",
    "-0.87%（Morningstar）",
    "黃燈",
    "指數被 megacap 壓住，但大型股質素仍是資金防守核心。",
  ],
  [
    "Growth",
    "-0.15%（Morningstar）",
    "黃燈",
    "Growth 整體跌幅不深，但最擠擁的 AI / discretionary 名字壓力很集中。",
  ],
  [
    "Communication Services",
    "-3.94%（Morningstar）",
    "紅燈",
    "Alphabet capex 憂慮直接拖累；下週 Meta earnings 是關鍵修復點。",
  ],
  [
    "Consumer Cyclicals",
    "-5.48%（Morningstar）",
    "深紅",
    "Tesla 大跌、利率上升與消費敏感度一齊壓住板塊；短線最需要避開追高。",
  ],
];

const flowRows = [
  [
    "市場廣度",
    "Morningstar：836 隻覆蓋美股中 378 隻升、1 隻不變、456 隻跌；約 55% 下跌",
    "不是全面崩盤，但跌股多過升股，說明 rotation 雖存在，市場底層仍偏弱。",
  ],
  [
    "Equal-weight 訊號",
    "TS2 / market wrap：S&P 500 equal weight 週五 +0.71%，五日大致持平，跑贏 cap-weight S&P 500 -0.61%",
    "平均股票比 mega-cap headline 好，問題集中在權重最高的科技/消費龍頭。",
  ],
  [
    "LSEG Lipper funds",
    "截至 7/22 一週：US equity funds -$7.34bn，Growth funds -$8.55bn，Value funds -$1.39bn",
    "投資者在大科技財報前先減股票風險，特別是 growth exposure。",
  ],
  [
    "Sector funds",
    "同一 LSEG 口徑：sector-specific funds +$2.46bn；Financial +$1.39bn、Healthcare +$1.35bn、Technology +$1.17bn",
    "資金不是完全撤走，而是改買更有主題或更防守的板塊；Technology 仍有 dip-buying，但價格未反映出強勢。",
  ],
  [
    "ETF Action 差異",
    "ETF Action 另一快照：單日 ETF total -$1.94bn，但 1-week total +$32.19bn；Equity 1-week +$14.50bn、Fixed Income +$9.19bn、Digital Asset +$887.4mn",
    "ETF 與 mutual fund 截止日不同，結論要分開看：短線有賣壓，中期配置資金未完全離場。",
  ],
  [
    "Crypto beta",
    "BTC +0.27%、ETH +1.30%、SOL -1.49%（Binance Vision 20:00 UTC 口徑）",
    "BTC/ETH 尚算穩，SOL 跑輸，配合 Nasdaq pressure：高 beta 風險胃納未全面恢復。",
  ],
];

const macroRows = [
  [
    "Treasury yields",
    "CNBC：10Y 週四約 4.699%，2Y 約 4.353%，30Y 約 5.167%；其他週五摘要指 10Y 仍近 4.69%、2Y 約 4.33%",
    "債息處於對 growth 不友善的區間；若 10Y 企穩 4.7% 上方，科技估值修復會更難。",
  ],
  [
    "FedWatch / 利率預期",
    "Investing.com 7/24 15:45 EDT：7/29 hold 62.4%，25bp hike 37.6%；September hike odds 多個報道指升至約 80% 左右",
    "市場主線已由『何時減息』變成『會否重新加息』；下週 Warsh press conference 會好關鍵。",
  ],
  [
    "Oil",
    "Reuters：Brent $96.78 -3.88%（全週近 +10%）；WTI $89.31 -3.12%（全週 +8.27%）",
    "週五回落幫了股市，但油價仍高；任何航道/中東 headline 都可以再推高通脹預期。",
  ],
  [
    "Gold / Dollar",
    "公開摘要：spot gold 約 $4,052.79、週五小升且全週約 +1%；DXY 週內曾升至約 101.40 一個月高位",
    "金價同時受避險支持與高息壓力拉扯；美元偏強則增加海外資產壓力。",
  ],
  [
    "PMI",
    "Reuters / S&P Global dispatch：July services PMI 53.6（June 51.2），composite 53.6（June 51.9），manufacturing PMI 53.8（June 53.9）",
    "服務業受 World Cup / 假期消費支持，但製造業訂單與供應鏈壓力提醒增長未必可以線性外推。",
  ],
  [
    "Labor",
    "AP / Labor Department：initial jobless claims 截至 7/18 一週跌 22k 至 187k，1969 年以來最低；4-week average 207.5k",
    "就業裁員仍低，支持 soft landing；但勞動市場韌性亦令 Fed 較難快速轉鴿。",
  ],
  [
    "Tariffs / geopolitics",
    "Reuters / ET：新一輪 10% 與 12.5% 關稅、US-Iran / Red Sea headlines 同時影響情緒",
    "股市要同時處理盈利、政策、能源供應三條風險線；單靠一日油價回落未足以解除壓力。",
  ],
];

const stockRows = [
  [
    "GOOGL / Alphabet",
    "7/23 收 $317.69，約 -7.13%；Q2 revenue $119.8bn、Google Cloud +82%，但 2026 capex 指引升至 $195bn-$205bn",
    "好業績被高 capex 蓋過，市場要見到 AI 投資轉化成 free cash flow，而不只是 revenue growth。",
  ],
  [
    "TSLA / Tesla",
    "7/23 收 $319.69，約 -14.52%；capex 約 $5.79bn、free cash flow 轉負，全年 capex 指引仍高",
    "Tesla 正由汽車 margin 故事轉向 AI / robotics 資本開支故事；短線估值容錯率明顯下降。",
  ],
  [
    "INTC / Semis",
    "多個市場摘要指 Intel 週五受投資計劃與 AI spend 憂慮拖累；Exa quote 顯示 7/24 close $92.32",
    "半導體不只是 cycle 問題，而是投資者要重新計 AI infrastructure ROI；下週 chip 相關 commentary 仍會牽動 QQQ。",
  ],
  [
    "VZ / Verizon",
    "Reuters movers：Verizon 因上調全年 profit forecast 上升；市場 quote 摘要顯示 close 約 $46.38",
    "防守性現金流 + 指引上調，在高波動週更容易吸引資金。",
  ],
  [
    "SLB / Energy services",
    "Investing / Reuters movers：SLB 為 S&P 500 主要升幅之一，約 +11%，close 約 $52.42",
    "油價高位令能源服務盈利預期改善，但交易高度依賴 geopolitics。",
  ],
  [
    "AXP / Consumer credit",
    "Reuters movers：American Express profit beat 後股價仍受壓；market quote 摘要 close 約 $326.17",
    "消費與信貸相關股票需要更強指引才跑出；市場不只看 beat，也看 delinquency / spend commentary。",
  ],
  [
    "MSFT / META / AMZN / AAPL",
    "下週 7/29-7/30 公布業績；市場會特別看 Azure/AWS、AI capex、ad demand、services margin",
    "這四隻會決定 AI capex 懷疑是否擴散；任何 free cash flow miss 都可能令 Nasdaq 再試低位。",
  ],
  [
    "BTC / ETH / SOL",
    "Binance Vision 4pm ET 附近：BTC $64,238、ETH $1,864.44、SOL $73.95",
    "Crypto 沒有跟 Nasdaq 大跌，代表 liquidity 未崩；但 SOL 弱過 BTC/ETH，仍要小心 high beta。",
  ],
];

const earningsEvents = [
  "7/27：美國 durable goods orders（Stockopedia calendar），市場會先消化油價回落與中東/關稅 headline。",
  "7/28：FOMC 兩日會議開始；Conference Board consumer confidence、Case-Shiller / housing 數據；企業方面 Boeing、Coca-Cola、Ford、Visa 等公布。",
  "7/29：FOMC rate decision 2:00pm ET、Warsh press conference 2:30pm ET；Microsoft、Meta、P&G、SoFi 等公布。",
  "7/30：Advance Q2 GDP、weekly jobless claims、personal income/spending 相關數據；Amazon、Apple、Roblox、Sirius XM 等公布。",
  "7/31：June PCE price index、Employment Cost Index、Chicago PMI；若 PCE / ECI 顯示薪酬或服務通脹黏性，Fed hike tail risk 會再升。",
  "全球央行：BoJ / ECB / BoE 相關決議與通脹語氣也會影響美元、債息與海外 risk appetite。",
  "Crypto：留意 BTC $64k 是否守得住、ETH 能否繼續跑贏、SOL 是否失守 $74；若 QQQ 再穿位，高 beta 幣先受壓。",
];

const technicalRows = [
  [
    "S&P 500",
    "支持 7,400 / 7,350；阻力 7,500 / 7,600",
    "收 7,411.98，仍在 7,400 上方；若下週 tech earnings 失望，7,350 是下一個風控位。",
  ],
  [
    "Nasdaq Composite",
    "支持 25,000 / 24,500；阻力 25,500 / 26,000",
    "收 24,975.82，已貼近 25,000；要先 reclaim 25,500，先算短線修復。",
  ],
  [
    "Dow",
    "支持 51,500 / 51,000；阻力 52,200 / 52,650",
    "Dow 相對抗跌，但若油價再升推高債息，金融/工業亦會受壓。",
  ],
  [
    "Russell 2000",
    "支持 2,930 / 2,900；阻力 3,000",
    "細價股要突破，需要 10Y 回落與信貸壓力不擴散；否則只係相對抗跌。",
  ],
  [
    "VIX",
    "18 / 20 / 22",
    "因來源衝突採區間觀察；若升穿 22，代表由 rotation 轉向真正 correction。",
  ],
  [
    "10Y Treasury",
    "4.60% / 4.70% / 4.80%",
    "4.70% 已是 growth 壓力線；若突破 4.80%，估值壓縮會更明顯。",
  ],
  [
    "Brent / WTI",
    "Brent $96 / $100 / $105；WTI $89 / $92 / $95",
    "Brent 重上 $100 會再次觸發通脹與 Fed risk；跌穿 $96 才算地緣 premium 明顯降溫。",
  ],
  [
    "BTC",
    "$64,000 / $62,500；阻力 $66,000",
    "BTC 4pm ET 附近 $64,238；守 $64k 代表 liquidity 尚可，失 $62.5k 則 high beta 降溫。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$64,238.00",
    "+0.27% vs 2026-07-17 20:00 UTC",
    "Binance Vision spot 1m kline：2026-07-24 20:00:00 UTC close，即美股收市 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$1,864.44",
    "+1.30% vs 2026-07-17 20:00 UTC",
    "ETH 週內跑贏 BTC，反映部分 crypto beta 仍有承接，但升幅未算強趨勢。",
  ],
  [
    "SOLUSDT / SOL",
    "$73.95",
    "-1.49% vs 2026-07-17 20:00 UTC",
    "SOL 跑輸 BTC/ETH，和 Nasdaq / high beta 壓力一致；短線先看 $74 / $72 支持。",
  ],
];

const watchPlan = [
  [
    "Base case",
    "當作高位整固 + 板塊輪動",
    "S&P 500 守 7,400、Nasdaq 不明顯跌穿 25,000、VIX 低於 20、Brent 不重上 $100；保留核心質素股，減少追高 AI beta。",
  ],
  [
    "Bull case",
    "等 Fed 語氣不再更鷹 + 科技財報證明 capex 回報",
    "Fed hold 且 Warsh 不強化加息訊號，MSFT/META/AMZN/AAPL 現金流與 AI monetization 勝預期，Nasdaq reclaim 25,500。",
  ],
  [
    "Bear case",
    "若油價、債息、VIX 同升，先降 beta",
    "Brent > $100、10Y > 4.75%、VIX > 22、S&P 500 失 7,350 或 Nasdaq 失 24,500，減 semis、unprofitable growth、small caps、SOL 類高 beta。",
  ],
  [
    "觀察清單",
    "SPY / QQQ / RSP / IWM / XLE / XLU / XLK / XLC / XLY / SOXX / MSFT / META / AMZN / AAPL / GOOGL / TSLA / BTC / ETH / SOL",
    "分別代表大盤、平均股、細價股、能源/防守、AI capex 修復、消費敏感度與 crypto liquidity。",
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

export default function USWeeklyBrief20260725() {
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
          background: linear-gradient(135deg, #111827 0%, #7f1d1d 48%, #92400e 100%);
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
        h3 { font-size: 19px; margin: 18px 0 8px; color: #b45309; }
        ul { padding-left: 22px; margin: 10px 0; }
        li { margin: 8px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 15px; }
        th {
          background: #fff7ed;
          color: #9a3412;
          text-align: left;
          padding: 10px;
          border-bottom: 1px solid #fed7aa;
        }
        td { padding: 11px 10px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
        .callout {
          border-left: 5px solid #ea580c;
          background: #fff7ed;
          padding: 14px 16px;
          border-radius: 14px;
          margin: 14px 0;
        }
        .warn {
          border-left-color: #dc2626;
          background: #fef2f2;
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
        <h1>AI 開支疑慮壓住 Nasdaq，能源與防守股頂住大市</h1>
        <p className="subtitle">
          本週不是恐慌式下跌，而係一次好典型的「crowded AI trade 被問價」：
          Alphabet、Tesla 引發 capex / free cash flow 憂慮，油價與債息又推高 Fed
          tail risk。資金未完全離場，但明顯由高 beta
          轉去能源、公用事業、價值與現金流。
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
            <strong>-0.61%</strong>
          </div>
          <div>
            <span>Nasdaq weekly</span>
            <strong>-2.13%</strong>
          </div>
          <div>
            <span>Energy weekly</span>
            <strong>+3.37%</strong>
          </div>
          <div>
            <span>BTC weekly</span>
            <strong>+0.27%</strong>
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
            一句到尾：今週係「科技高估值要交功課」的一週。下週 Fed +
            四大科技財報會決定係健康輪動，定係由估值壓縮變成更深 correction。
          </div>
        </Card>

        <Card title="2｜大市一眼睇" wide>
          <DataTable
            headers={["指標", "週五收市", "一週變動", "解讀"]}
            rows={indexRows}
          />
          <p className="small">
            指數日變動以 Reuters / MarketScreener、Investing.com
            與可查市場摘要交叉核對；S&P 500、Nasdaq、Dow 週度表現採 Reuters /
            MarketScreener 與 Morningstar 一致口徑。Russell 2000 與 VIX
            不同來源日變動有衝突，本文標示差異，不硬湊單一精確變動。
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
            Fund flows 的截止日不同：LSEG Lipper 截至 7/22，ETF Action
            是另一日/週快照，Morningstar
            是價格表現口徑。本文分開標示，不將不同資料硬合成單一結論。
          </div>
        </Card>

        <Card title="7｜宏觀白話版" wide>
          <DataTable headers={["項目", "數據", "白話解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：經濟數據唔差、企業盈利仍有亮點，但油價 + 債息 + Fed tail
            risk 令市場不敢再用「AI 無限擴張」去買估值。下週最怕係科技財報同 Fed
            語氣同時失望。
          </div>
        </Card>

        <Card title="8｜重點股票與 Crypto" wide>
          <DataTable
            headers={["股票 / 主題", "最新可靠數據", "點睇"]}
            rows={stockRows}
          />
          <h3>BTC / ETH / SOL</h3>
          <DataTable
            headers={["幣種", "7/24 4:00pm ET 附近價", "一週變動", "來源/備註"]}
            rows={cryptoRows}
          />
          <p className="small">
            Binance direct API 在此環境回 451；本文改用 Binance Vision public
            data 的 spot 1-minute kline。時間點為 2026-07-24 20:00:00 UTC，對比
            2026-07-17 同一時間，盡量貼近美股收市 4:00pm ET。
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
              不急住撈所有 AI / 半導體。若反彈只是 Fed 前 short-cover，但 Nasdaq
              企唔返 25,500，容易變成減倉位。
            </li>
            <li>
              <strong>中線：</strong>
              保留現金流、pricing power、balance sheet
              乾淨的核心倉；能源/公用事業可作 hedge，但不要把地緣 premium
              當永久增長。
            </li>
            <li>
              <strong>風控：</strong>若 Brent 重上 $100、10Y 穿 4.75%、VIX 升穿
              22、S&P 500 失守 7,350，先減 high beta growth、semis、槓桿
              ETF、SOL 類 crypto beta。
            </li>
            <li>
              <strong>最終觀點：</strong>
              今週市場其實給了一個清楚訊號：AI
              故事未死，但要由「願景」進入「回報」階段。只要 Fed
              不再更鷹、四大科技能證明 capex
              有產出，這次可以是健康輪動；相反，若油價再升兼科技財報現金流失望，第二週回落就可能擴大成更正式的
              correction。
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
              指數：S&P 500 / Dow / Nasdaq 採 Reuters / MarketScreener
              收市點位（Dow 51,947.25、S&P 500 7,411.98、Nasdaq 24,975.82）及
              Morningstar 週度表現。Economic Times
              早段/初步點位略有差異，本文採較完整收市稿。
            </li>
            <li>
              Russell 2000 / VIX：Yahoo / 市場摘要對日變動與 VIX close
              有衝突；本文保留可見點位/區間並明示差異，避免填入未能交叉核實的單一數字。
            </li>
            <li>
              週度板塊/風格：採 Morningstar week ended July 24 口徑；ETF quote
              或單日變動只作輔助，不與 Morningstar 行業分類混用。
            </li>
            <li>
              FedWatch：Investing.com 7/24 15:45 EDT 顯示 7/29 hold 62.4%、25bp
              hike 37.6%；其他媒體對 September odds 由約 70% 至 80%+
              不等，本文只作方向性風險提示。
            </li>
            <li>
              Macro：油價採 Reuters settlement；債息採 CNBC / market-summary
              時點；黃金與美元不同平台有
              spot、futures、盤中/收市差異，本文標示約數。
            </li>
            <li>
              Fund flows：LSEG Lipper、ETF Action、ICI
              等統計範圍與截止日不同；本文將它們作為資金行為參考，不將不同口徑加總。
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
