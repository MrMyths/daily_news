import React from "react";

const reportWeek = "2026-07-06 至 2026-07-10";
const reportDate = "2026-07-12";
const publishedAt =
  "香港時間 2026-07-12 09:01（週末自動生成；美股最新交易日為 7/10）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "NBC Palm Springs / CNN Newsource - Dow, S&P 500 and Nasdaq Close Higher to End the Week",
    url: "https://www.nbcpalmsprings.com/2026/07/10/dow-sp-500-and-nasdaq-close-higher-to-end-the-week",
  },
  {
    name: "Morningstar - Weekly Market Update, week ended July 10",
    url: "https://www.morningstar.com/markets/weekly-market-update-stocks-up-11-energy-rises-basic-materials-fall",
  },
  {
    name: "T. Rowe Price - Global markets weekly update",
    url: "https://www.troweprice.com/personal-investing/resources/insights/global-markets-weekly-update.html",
  },
  {
    name: "Advisor Perspectives - Treasury Yields Snapshot: July 10, 2026",
    url: "https://www.advisorperspectives.com/dshort/updates/2026/07/10/treasury-yields-snapshot-july-10-2026",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "AP - US jobless claims dip to 215,000",
    url: "https://apnews.com/article/unemployment-benefits-jobless-claims-layoffs-labor-8d1f553fde8124606b2e3350fe789776",
  },
  {
    name: "NAR - Existing-Home Sales Report Shows 2.4% Decrease in June",
    url: "https://www.nar.realtor/newsroom/nar-existing-home-sales-report-shows-2-4-decrease-in-june",
  },
  {
    name: "BLS - Schedule of Releases for the Consumer Price Index",
    url: "https://www.bls.gov/schedule/news_release/cpi.htm",
  },
  {
    name: "ETF.com - Investors Pull $3.7B From ETFs in Rare Weekly Outflow",
    url: "https://www.etf.com/sections/weekly-etf-flows/investors-pull-37b-etfs-rare-weekly-outflow",
  },
  {
    name: "The Motley Fool - SK Hynix raises $26.5B in U.S. IPO",
    url: "https://www.fool.com/investing/2026/07/10/sk-hynix-just-raised-265-billion-in-the-biggest-us/",
  },
  {
    name: "The Star / Xinhua - Crude futures settle lower",
    url: "https://www.thestar.com.my/news/world/2026/07/11/crude-futures-settle-lower",
  },
  {
    name: "Cboe - VIX Volatility Products",
    url: "https://www.cboe.com/tradable-products/vix/",
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
  "美股本週整體向上但唔算全面健康：CNBC 指 S&P 500 週升超過 1%，Nasdaq 週升超過 1%，Dow 則跌約 -0.5%，反映資金仍偏向 mega-cap growth / AI，而非齊齊升。",
  "週五收市：S&P 500 +0.42% 至 7,575.39，Nasdaq +0.29% 至 26,281.61，Dow +149.60 點 / +0.29% 至 52,637.01；三大指數同日收高。",
  "Morningstar 口徑：US Market Index 週升 +1.1%，S&P 500 +1.23%，Nasdaq +1.74%；但 882 隻覆蓋美股只有 409 隻上升、471 隻下跌，廣度偏弱。",
  "板塊最強是 Energy +3.40% 與 Technology +3.32%；最弱是 Basic Materials -2.46% 與 Healthcare -1.71%。升市表面靚，但內裏有明顯分化。",
  "宏觀主線係中東風險、油價與利率：10Y 收約 4.56%、2Y 約 4.21%，FedWatch/Investing 最新頁面顯示 7/29 hold 64.6%、加 25bp 35.4%（7/10 晚間至 7/11 凌晨更新口徑）。",
  "Crypto 用 Binance Vision 2026-07-10 20:00 UTC 1m close：BTC $63,881.61、ETH $1,791.99、SOL $77.87；較 7/3 同一時間分別 +2.69%、+2.67%、-5.57%。",
];

const indexRows = [
  [
    "DJIA",
    "52,637.01",
    "週五 +149.60 / +0.29%；全週 -0.5%（CNBC）",
    "Dow 週五靠少數高價股撐住，但全週跑輸，顯示傳統周期/價值股買盤未夠闊。",
  ],
  [
    "S&P 500",
    "7,575.39",
    "週五 +31.75 / +0.42%；全週 +1.23%（Morningstar）",
    "大盤仍貼近高位，7,600 是短線心理位；升幅主要靠大型股與科技板塊。",
  ],
  [
    "Nasdaq Composite",
    "26,281.61",
    "週五 +74.72 / +0.29%；全週 +1.74%（Morningstar）",
    "AI/semis 仍是主引擎，但波動加大，追高要睇龍頭能否繼續交數。",
  ],
  [
    "Russell 2000 / small caps",
    "暫無可靠收市點位",
    "Morningstar small-cap -0.99%",
    "細價股本週反而跑輸，和 Nasdaq 形成反差；如果債息繼續高企，small caps 仍會受壓。",
  ],
  [
    "VIX",
    "Cboe 盤中約 15.65；Investing 歷史表 7/10 close 15.25",
    "Investing 口徑日跌 -3.72%",
    "恐慌指數偏低，但 Nasdaq 內部波動不低；低 VIX 不是等於無風險，只是市場暫時願意賣保險。",
  ],
];

const whyMarketMoved = [
  [
    "AI / Big Tech 再撐市",
    "週五 S&P 500、Nasdaq 收高，CNBC 指大盤受幾隻大型科技股支持；Meta compute expansion、Nvidia 高市值與 AI capex 敘事繼續主導風險胃納。",
  ],
  [
    "半導體由狂熱轉分化",
    "Reuters 7/9 指 Micron 因美國投資計劃升 4.5%、PHLX chip index 升 3.06%；但週五市場開始有 semiconductor caution，AI bull market 未死但已不是閉眼買。",
  ],
  [
    "中東 / 油價風險未完",
    "市場一邊炒技術股，一邊看 U.S.-Iran 衝突與談判；油價週五結算回落，但本週仍有地緣 premium，能源板塊因此跑贏。",
  ],
  [
    "利率預期偏鷹",
    "Investing Fed Rate Monitor 最新頁面顯示 7/29 會議 hold 64.6%、加息 35.4%，比一週前加息風險更高；高估值 growth 對 CPI 會好敏感。",
  ],
  [
    "下週 CPI + 銀行財報前先卡位",
    "BLS 顯示 June CPI 7/14 08:30 ET 公布；同日 JPMorgan、Goldman 等銀行財報開始，市場週五買盤帶有提前部署意味。",
  ],
];

const topNews = [
  [
    "1",
    "週五三大指數收高，S&P / Nasdaq 錄得週升",
    "CNBC：S&P 500 收 7,575.39、Nasdaq 收 26,281.61、Dow 收 52,637.01；S&P 500 與 Nasdaq 全週升逾 1%，Dow 全週跌約 -0.5%。",
  ],
  [
    "2",
    "Morningstar：升市廣度偏弱",
    "Morningstar US Market Index 週升 +1.1%，但 882 隻覆蓋美股只有 409 隻上升（46%），471 隻下跌（53%）；即係指數升，不代表大部分股票升。",
  ],
  [
    "3",
    "SK Hynix 美國上市，AI memory 成本週焦點",
    "Motley Fool 指 SK Hynix 以每 ADS $149 定價、集資約 $26.5bn，成為外國公司在美最大 IPO；HBM / AI memory 供應鏈重新成為市場主線。",
  ],
  [
    "4",
    "宏觀數據：jobless claims 低、樓市價高量弱",
    "AP 指截至 7/4 初領失業救濟 215k，裁員仍低；NAR 指 6 月 existing-home sales -2.4% 至 4.09m，median price $440,600 創紀錄。",
  ],
  [
    "5",
    "下週 CPI、PPI、retail sales 與大型銀行財報密集",
    "BLS 日程顯示 June CPI 7/14 公布；Morningstar/Finviz 日程列出 7/14-7/17 多間銀行、Netflix、UnitedHealth、United Airlines 等財報。",
  ],
];

const heatMapRows = [
  [
    "Energy",
    "+3.40%（Morningstar）",
    "強綠",
    "本週最佳板塊；中東風險令能源 beta 有承接，但油價週五回落，追能源要小心 headline risk。",
  ],
  [
    "Technology",
    "+3.32%（Morningstar）",
    "強綠但波動",
    "AI / semiconductor 仍帶指數；但升幅集中，估值與 CPI 對 tech multiple 影響好直接。",
  ],
  [
    "Large Caps",
    "+1.52%（Morningstar）",
    "綠燈",
    "大型股勝過中小型股，說明資金仍偏安全地買最有盈利能見度的龍頭。",
  ],
  [
    "Growth",
    "+0.93%（Morningstar）",
    "綠燈",
    "成長股錄得週升，但未跑贏 technology sector，代表 growth 內部亦分化。",
  ],
  [
    "Small Caps",
    "-0.99%（Morningstar）",
    "紅燈",
    "高利率與信貸成本壓住細價股；如果 10Y 不回落，IWM 類別難持續跑出。",
  ],
  [
    "Healthcare",
    "-1.71%（Morningstar）",
    "紅燈",
    "資金未把防守醫療當避風港，反映今週市場不是典型 risk-off，而是集中買 AI/能源。",
  ],
  [
    "Basic Materials",
    "-2.46%（Morningstar）",
    "深紅",
    "本週最弱；美元/中國需求/周期疑慮仍壓住 materials。",
  ],
];

const flowRows = [
  [
    "本週市場廣度",
    "Morningstar：882 隻覆蓋美股中 409 隻升、1 隻不變、471 隻跌",
    "指數升但過半股票跌，升市質素一般；倉位要分清『指數 beta』同『個股廣度』。",
  ],
  [
    "市值風格",
    "Large-cap +1.52%、mid-cap +0.11%、small-cap -0.99%",
    "資金流向大型龍頭，未見真正 broadening；這對長線牛市健康度是黃燈。",
  ],
  [
    "ETF flows 最新可靠週度口徑",
    "ETF.com：截至 7/3 的一週 US-listed ETFs 淨流出 $3.7bn；US equity ETFs 流出 $26.6bn，US fixed income 流入 $15.2bn",
    "7/10 完整週度 flow 生成時暫無可靠數據；最新可核口徑顯示資金之前曾由美股 ETF 轉去債券/海外。",
  ],
  [
    "LSEG/ICI 差異",
    "同一截至 7/1 附近週期，不同口徑對 equity flows 有正負差異",
    "基金流向要睇統計範圍：mutual funds、ETFs、Lipper universe 可以不同，不應硬湊成單一結論。",
  ],
  [
    "Crypto beta",
    "BTC/ETH 週升約 +2.7%，SOL 週跌 -5.6%（Binance 20:00 UTC 口徑）",
    "Crypto 不是全面 risk-on：BTC/ETH 跟住大盤，SOL 明顯跑輸，說明高 beta 仍有選擇性壓力。",
  ],
];

const macroRows = [
  [
    "Treasury yields",
    "Advisor Perspectives：10Y 7/10 收 4.56%、2Y 收 4.21%；BigGo/市場報價 30Y 約 5.07%",
    "長債息仍在高位，代表市場未完全買『通脹會快落』；對 growth multiple 係天花板。",
  ],
  [
    "FedWatch",
    "Investing.com 最新頁面：7/29 hold 64.6%，3.75%-4.00% 加息 35.4%（7/10 晚間至 7/11 凌晨更新口徑）",
    "比起之前 70%+ hold，市場開始重新 price 加息尾部風險；CPI 會直接改變這組 odds。",
  ],
  [
    "Oil",
    "Brent 7/10 settle 約 $76.01（-0.38%），WTI 約 $71.41（-0.93%）；週度 Brent/WTI 約 +5.5% / +4%（BigGo/市場綜合）",
    "週五回落紓緩通脹恐慌，但全週仍升，說明地緣 premium 未消失。",
  ],
  [
    "Gold / DXY",
    "Gold futures 約 $4,113.70/oz（-0.7%）；DXY 約 100.94，美元週度約 +0.1%（BigGo/市場綜合）",
    "黃金未因衝突大升，因高利率壓住非孳息資產；美元仍有避險與息差支持。",
  ],
  [
    "Jobless claims",
    "AP / US Labor Department：截至 7/4 初領失業救濟 215k，較前週 -2k；四週均值 218,750",
    "勞動市場仍低裁員，支持 soft landing 敘事；但亦令 Fed 未必急於轉鴿。",
  ],
  [
    "Housing",
    "NAR：6 月 existing-home sales -2.4% MoM 至 4.09m；median price $440,600 創紀錄",
    "樓市量弱價高，對消費信心與利率敏感股不算友善。",
  ],
  [
    "下週 CPI",
    "BLS：June CPI 7/14 08:30 ET 公布；PPI、retail sales、Beige Book 隨後公布",
    "如果 CPI 熱，FedWatch 加息 odds 可能再上，Nasdaq / crypto 最敏感；如果低於預期，7,600 上破機會增加。",
  ],
];

const stockRows = [
  [
    "NVDA",
    "Yahoo Finance / 市場報道：週五約 +4.0%，仍是 AI compute 交易核心之一",
    "AI 核心仍強，但市場對估值要求好高；任何 capex 放慢或出口限制 headline 都會放大波動。",
  ],
  [
    "META",
    "BigGo：週五盤中升逾 7%，因 compute / 長期供應協議消息；Money.it 列市值約 $1.48tn",
    "市場把 Meta 由廣告平台重新 re-rate 成 AI compute 需求端，短線是情緒催化。",
  ],
  [
    "SKHYV / HBM 記憶體",
    "Motley Fool：SK Hynix 美國 ADS 定價 $149、集資約 $26.5bn；Yahoo Finance 報道首日一度升逾 18%，收升約 17%",
    "市場想直接買入 Nvidia AI 供應鏈上游；但新上市熱度高，短線要防止 IPO 後獲利回吐。",
  ],
  [
    "PEP",
    "Reuters：PepsiCo 7/9 跌約 3.3%，雖然 Q2 revenue beat",
    "防守消費未必等於安全；市場更關心 volume、pricing power 與 margin。",
  ],
  [
    "COST",
    "Reuters：Costco 7/9 跌約 4.2% 至六個月低位，因 6 月 comparable sales 增長放慢",
    "高估值零售遇到同店銷售降速會即時被壓，consumer staples/retail 要睇實 demand。",
  ],
  [
    "JPM / GS / 大型銀行",
    "下週二起 Q2 earnings season；Finviz/Morningstar 日程列 JPM、BAC、WFC、C、GS 等大型金融公布",
    "銀行財報會測試 loan demand、credit loss、trading revenue；XLF 會是下週市場廣度關鍵。",
  ],
  [
    "AAPL / AMZN / TSLA",
    "Motley Fool 表：AAPL $315.06 -0.37%、AMZN $245.23 -0.73%、TSLA $407.45 +0.22%",
    "Mag 7 不是全線同步；資金更偏向 AI compute / Nvidia / Meta，而非所有 mega-cap 都買。",
  ],
];

const earningsEvents = [
  "7/14：June CPI（BLS 08:30 ET）及 Chicago Fed Goolsbee 發言；這是下週最重要 macro catalyst。",
  "7/14：JPMorgan、Bank of America、Wells Fargo、Citigroup 等銀行財報；市場看 credit、NIM、trading revenue 與 loan demand。",
  "7/15：June PPI、Empire State、Beige Book；配合 CPI 判斷 Fed 7/29 是否有加息壓力。",
  "7/15：BlackRock、M&T Bank、Johnson & Johnson、PNC 等公布，金融/醫療板塊會有 read-through。",
  "7/16：June retail sales、weekly claims、Philadelphia Fed、business inventories；判斷消費與製造是否頂得住高息。",
  "7/16：GE Aerospace、UnitedHealth、US Bancorp、United Airlines、Netflix；留意 healthcare 與 consumer/service demand。",
  "7/17：Truist、Fifth Third、Regions 等地區銀行；若 credit commentary 轉差，small caps 可能再受壓。",
  "Crypto：7/17 options / derivatives expiry 與 BTC/ETH 波動；若 CPI 熱，crypto beta 可能先反映 liquidity 壓力。",
];

const technicalRows = [
  [
    "S&P 500",
    "支持 7,500 / 7,495；阻力 7,600",
    "週五收 7,575.39，已接近 7,600 心理/期權反應位；企穩 7,500 仍偏正面，失守代表短線轉震。",
  ],
  [
    "Nasdaq Composite",
    "支持 26,000；阻力 26,500",
    "26,281.61 仍在強勢區，但 tech crowding 高；若 CPI 熱，先看 26,000 能否守住。",
  ],
  [
    "Dow",
    "支持 52,000；阻力 53,000",
    "Dow 全週跌約 -0.5%，53,000 前需要更多金融/工業股配合，否則只靠少數高價股不夠穩。",
  ],
  [
    "10Y Treasury",
    "4.50% / 4.60%",
    "4.60% 是 growth 壓力線；跌回 4.50% 下方才可舒緩估值壓力。",
  ],
  [
    "WTI",
    "$70 / $75",
    "週五約 $71.41；若重上 $75，市場會重新 price Hormuz / inflation premium。",
  ],
  [
    "BTC",
    "$64,000 / $62,000",
    "BTC 4pm ET 附近 $63,881.61；企穩 $64k 代表 risk-on 延續，失 $62k 則高 beta 降溫。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$63,881.61",
    "+2.69% vs 2026-07-03 20:00 UTC",
    "Binance Vision spot 1m kline：2026-07-10 20:00:00 UTC close，即美股收市 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$1,791.99",
    "+2.67% vs 2026-07-03 20:00 UTC",
    "ETH 跟 BTC 同步反彈，但仍未見明顯跑贏，屬溫和 risk-on。",
  ],
  [
    "SOLUSDT / SOL",
    "$77.87",
    "-5.57% vs 2026-07-03 20:00 UTC",
    "SOL 明顯跑輸，說明 crypto 內部風險胃納未全面修復。",
  ],
];

const watchPlan = [
  [
    "Base case",
    "指數偏強但不追太急",
    "S&P 500 守 7,500、10Y 不破 4.60%、CPI 無明顯高過預期，保持大型科技與盈利質素股為核心。",
  ],
  [
    "Bull case",
    "突破 7,600 後看是否擴散",
    "S&P 500 上破 7,600、VIX 維持 15-16、金融/工業/細價股跟升，才算健康 risk-on。",
  ],
  [
    "Bear case",
    "先減高 beta 與估值最貴部位",
    "CPI 熱、FedWatch 加息 odds 升穿 40%、10Y 升穿 4.60%、WTI 重上 $75-$78，科技與 crypto 要降槓桿。",
  ],
  [
    "觀察清單",
    "SPY / QQQ / XLE / XLK / XLF / IWM / NVDA / META / SKHYV / JPM / GS / BTC",
    "分別代表大盤、AI、能源、金融廣度、細價股、銀行財報與 crypto liquidity。",
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

export default function USWeeklyBrief20260712() {
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
          background: linear-gradient(135deg, #0f172a 0%, #164e63 48%, #14532d 100%);
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
        .wide { grid-column: 1 / -1; }
        h2 { font-size: 25px; margin: 0 0 16px; color: #0f172a; }
        h3 { font-size: 19px; margin: 18px 0 8px; color: #047857; }
        ul { padding-left: 22px; margin: 10px 0; }
        li { margin: 8px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 15px; }
        th {
          background: #ecfdf5;
          color: #065f46;
          text-align: left;
          padding: 10px;
          border-bottom: 1px solid #bbf7d0;
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
          border-left-color: #f59e0b;
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
        <h1>AI 與能源撐住指數，但升市廣度亮黃燈</h1>
        <p className="subtitle">
          本週美股表面上延續升勢，S&P 500 與 Nasdaq 都錄得週升；但 Dow
          全週微跌、small caps 跑輸，而且過半 Morningstar 覆蓋股份下跌。簡單講：
          指數仍強，內部不是人人有份。
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
            <strong>+1.23%</strong>
          </div>
          <div>
            <span>Nasdaq weekly</span>
            <strong>+1.74%</strong>
          </div>
          <div>
            <span>Fed hold odds</span>
            <strong>64.6%</strong>
          </div>
          <div>
            <span>BTC weekly</span>
            <strong>+2.69%</strong>
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
            一句到尾：今週不是熊市訊號，但也不是全面牛市確認。AI / 能源
            龍頭仍可撐指數， 但下週 CPI
            與銀行財報會決定升市能否由少數龍頭擴散出去。
          </div>
        </Card>

        <Card title="2｜大市一眼睇" wide>
          <DataTable
            headers={["指標", "週五收市", "一週變動", "解讀"]}
            rows={indexRows}
          />
          <p className="small">
            指數日變動採 NBC/CNN Newsource 及 CNBC 類收市口徑交叉核對；週度 S&P 500 / Nasdaq / sector /
            style 採 Morningstar week ended July 10 口徑。Russell 2000 exact
            close 在生成時未見可靠來源，故不用估算點位。
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
            7/10 完整週度 ETF / mutual fund flows 在生成時暫無可靠數據；本段把
            price action / breadth 與最新可核 flows
            分開寫，避免將不同統計口徑混成單一結論。
          </div>
        </Card>

        <Card title="7｜宏觀白話版" wide>
          <DataTable headers={["項目", "數據", "白話解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：市場現在願意買 AI，但債息和 Fed 加息風險未真正放低。下週 CPI
            如果熱，今週的低 VIX 同高估值科技股會好快被重新定價。
          </div>
        </Card>

        <Card title="8｜重點股票與 Crypto" wide>
          <DataTable
            headers={["股票 / 主題", "最新可靠數據", "點睇"]}
            rows={stockRows}
          />
          <h3>BTC / ETH / SOL</h3>
          <DataTable
            headers={["幣種", "7/10 4:00pm ET 附近價", "一週變動", "來源/備註"]}
            rows={cryptoRows}
          />
          <p className="small">
            Binance direct API 在此環境回 451；本文改用 Binance Vision public
            data 的 spot 1-minute kline。時間點為 2026-07-10 20:00:00 UTC，對比
            2026-07-03 同一時間，盡量貼近美股收市 4:00pm ET。
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
              可以承認 S&P / Nasdaq 趨勢仍強，但不應把所有升幅當成市場廣度改善；
              下週 CPI 前避免過度追高最擠擁 AI beta。
            </li>
            <li>
              <strong>中線：</strong>
              AI memory、energy、financials 是下週三個關鍵觀察區。AI 看 capex
              回報，energy 看中東與油價，financials 看 credit 與 loan demand。
            </li>
            <li>
              <strong>風控：</strong>若 10Y 升穿 4.60%、FedWatch 加息 odds
              明顯上升、VIX 重上 17-18，先減少 small caps、unprofitable
              growth、crypto beta。
            </li>
            <li>
              <strong>最終觀點：</strong>
              今週是「指數強、廣度弱」的升市。最靚是 S&P / Nasdaq
              能在地緣壓力下收高； 最危險是過半股票其實跌。下週要睇的是 CPI
              後資金會否擴散，而不是單看幾隻 AI 龍頭。
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
              指數：週五收市採 NBC/CNN Newsource、Motley Fool 及其他收市表交叉核對；週度 S&P 500 / Nasdaq
              與板塊/風格採 Morningstar week ended July 10。Dow weekly 採 CNBC / T. Rowe Price
              文字口徑（約 -0.5%）。
            </li>
            <li>
              VIX：Cboe page 生成時為盤中/延遲 spot 15.65，Investing historical
              table 顯示 7/10 close
              15.25；本文同時標示來源差異，不混作同一時間點。
            </li>
            <li>
              FedWatch：Investing.com 最新頁面顯示 7/29 hold 64.6%、加息
              35.4%； 其他媒體曾引較早 CME / Investing 口徑約 66%-75%
              hold，本文優先採生成時可核的較新更新。
            </li>
            <li>
              油價/黃金/DXY：不同來源有 intraday、settlement、spot
              時間差異；本文用 settlement
              或明確標示的市場綜合數字，避免過度精確。
            </li>
            <li>
              Fund flows：7/10 完整週度 flow 暫無可靠數據；ETF.com / ICI / LSEG
              對截至 7/1-7/3 的 flows
              口徑不同，本文只作背景，不當成本週即時資金流。
            </li>
            <li>
              Crypto：Binance 直接 API 在環境中回 451；本文使用 Binance Vision
              public data 取得 1m kline，沒有使用媒體近似報價。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
