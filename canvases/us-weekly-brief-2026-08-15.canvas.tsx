import React from "react";

const reportWeek = "2026-08-10 至 2026-08-14";
const reportDate = "2026-08-15";
const publishedAt =
  "香港時間 2026-08-15 09:00（週末自動生成；數據截至美股 8/14 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market today live updates, Aug. 14, 2026",
    url: "https://www.cnbc.com/2026/08/13/stock-market-today-live-updates.html",
  },
  {
    name: "Yahoo Finance - S&P 500 slips from record high but caps third straight week of gains",
    url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-august-14-dow-sp-500-nasdaq-102635519.html",
  },
  {
    name: "Reuters via MarketScreener - With Fed mum on next move, investors look to earnings",
    url: "https://hk.marketscreener.com/news/with-fed-mum-on-next-move-investors-look-to-earnings-to-keep-stocks-afloat-ce7859dedf80f320",
  },
  {
    name: "CNBC - Treasury yields digest retail sales and Middle East risk",
    url: "https://www.cnbc.com/2026/08/14/treasury-yields-us-iran-economic-sanctions.html",
  },
  {
    name: "CNBC - July CPI report",
    url: "https://www.cnbc.com/2026/08/12/cpi-inflation-report-july-2026.html",
  },
  {
    name: "CNBC - July PPI report",
    url: "https://www.cnbc.com/2026/08/13/wholesale-prices-were-flat-in-july-below-expectations-for-0point2percent-increase.html",
  },
  {
    name: "U.S. Census Bureau - Advance Monthly Sales for Retail and Food Services, July 2026",
    url: "https://www.census.gov/retail/sales.html",
  },
  {
    name: "Reuters summary via Rallies - University of Michigan consumer sentiment",
    url: "https://rallies.ai/news/us-consumer-sentiment-deteriorates-in-august-51457c9255091233",
  },
  {
    name: "CNBC - Oil prices rise as U.S. threatens economic isolation of Iran",
    url: "https://www.cnbc.com/2026/08/14/oil-prices-today-brent-wti-hormuz.html",
  },
  {
    name: "LSEG Lipper / Reuters via LSE - Global equity funds extend inflow streak",
    url: "https://www.lse.co.uk/news/graphic-global-equity-funds-extend-inflow-streak-as-earnings-optimism-and-reduced-rate-hike-bets-lift-sentiment-qrwm9k0z6bighwg.html",
  },
  {
    name: "Cisco Investor Relations - Q4 FY2026 earnings",
    url: "https://investor.cisco.com/news/news-details/2026/CISCO-REPORTS-FOURTH-QUARTER-AND-FISCAL-YEAR-2026-EARNINGS/default.aspx",
  },
  {
    name: "Quartz - Applied Materials Q3 2026 earnings beat on AI demand",
    url: "https://qz.com/applied-materials-earnings-record-revenue-ai-chip-equipment-081426",
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
  "截至 8/14 美股收市，S&P 500 雖然週五由紀錄高位回吐 0.17%，但全週仍升約 0.36%，連升第三週；Nasdaq 全週約 +0.14%，Dow 則約 -0.56%。",
  "週五收市：S&P 500 7,785.76（-13.23 / -0.17%）、Dow 53,732.41（-107.58 / -0.20%）、Nasdaq 26,729.16（-73.86 / -0.28%）；CNBC / Yahoo / Reuters 口徑大致一致。",
  "本週故事不是單一 risk-on：CPI / PPI 較溫和令 9 月加息壓力降溫，但週五零售銷售 -0.6%、密歇根信心跌至 51.0，令市場開始問消費會否放慢太快。",
  "能源由上週落後變今週領先：CNBC 指 WTI 收 $82.40、Brent 收 $88.52，兩者全週升逾 5%；能源股受 Hormuz / Iran 風險 premium 支撐。",
  "科技仍有 AI infrastructure 支持，但內部分化加深：SanDisk / Micron memory trade 強，Cisco / Applied Materials 反而因 margin / sell-the-news 壓力被沽。",
  "Crypto 用 Binance Vision 2026-08-14 20:00 UTC 1m close：BTC $62,964.79、ETH $1,880.62、SOL $74.99；較 8/7 同一時間分別 -3.07%、-1.98%、+1.31%。",
];

const indexRows = [
  [
    "DJIA",
    "53,732.41",
    "週五 -107.58 / -0.20%；全週約 -0.56%",
    "Dow 跑輸，反映藍籌/舊經濟未全面跟上；消費與部分工業股在零售數據後較受壓。",
  ],
  [
    "S&P 500",
    "7,785.76",
    "週五 -13.23 / -0.17%；全週約 +0.36%",
    "週四創 7,798.99 收市新高後週五整固；三連升仍在，但升勢變窄，要靠盈利與債息配合。",
  ],
  [
    "Nasdaq Composite",
    "26,729.16",
    "週五 -73.86 / -0.28%；全週約 +0.14%",
    "科技大方向未壞，但高估值股開始對 retail sales / sentiment 更敏感；下個大考是 NVDA 8/26。",
  ],
  [
    "Russell 2000 / IWM proxy",
    "IWM $305.09",
    "週五 +0.52%；IWM 全週約 +1.17%",
    "小型股 ETF 仍創 52 週高位附近，說明廣度未算差；但若債息被油價推高，小型股會較快受壓。",
  ],
  [
    "VIX",
    "14.25",
    "週五 -0.38 / -2.60%；全週約 -4.36%",
    "恐慌指數仍低，期權市場未為宏觀/中東風險付太多保費；低 VIX 環境追貨要更守止蝕。",
  ],
];

const whyMarketMoved = [
  [
    "通脹數據幫 Fed 暫停敘事續命",
    "7 月 CPI +0.1% m/m、+3.4% y/y；core +0.2% m/m、+2.5% y/y。PPI 更是 0.0% m/m、+4.7% y/y，低於市場預期，令 9 月即時加息機率下降。",
  ],
  [
    "但消費數據突然降溫",
    "Census 指 7 月 retail sales $763.6bn，按月 -0.6%，是超預期轉弱；密歇根初值 51.0 亦低於預期，市場由『通脹降溫』開始平衡『增長降溫』。",
  ],
  [
    "油價重新帶起通脹尾部風險",
    "CNBC 指 Brent / WTI 週五收升且全週逾 +5%，原因是 U.S.-Iran / Hormuz headline 重新升溫；這令長債息週五反彈。",
  ],
  [
    "盈利季仍支撐估值",
    "Reuters / MarketScreener 指投資者下週繼續用企業盈利驗證 bullish assumptions；LSEG 口徑約 85% 已公布的 S&P 500 公司 beat earnings estimates。",
  ],
  [
    "AI trade 從『買全部』變成『睇 margin / ROI』",
    "SanDisk / Micron 因 AI-memory 長單與 NAND 需求被重估；Cisco revenue 破紀錄但股價跌，AMAT beat 後亦遇獲利，代表市場要收入、毛利率和 guidance 一齊交功課。",
  ],
];

const topNews = [
  [
    "1",
    "S&P 500 週四創新高，週五回吐但連升三週",
    "CNBC / Yahoo：S&P 500 週五收 7,785.76，全週 +0.36%；record high 後小回吐，暫時屬整固多過轉勢。",
  ],
  [
    "2",
    "CPI / PPI 溫和，Fed hike 機率下調",
    "CNBC：CPI 合預期；PPI 低於預期。FedWatch / market pricing 口徑有差異，但共同方向是 9 月加息壓力由上週明顯降溫。",
  ],
  [
    "3",
    "Retail sales -0.6% + Michigan sentiment 51.0",
    "弱消費令週五午後氣氛轉審慎；投資者開始睇 retail earnings（HD / TGT / WMT）是否確認消費放慢。",
  ],
  [
    "4",
    "Oil / Hormuz headline 推高能源與長債息",
    "CNBC：WTI $82.40、Brent $88.52，兩者全週升逾 5%；油價上行令通脹尾部風險未完全消失。",
  ],
  [
    "5",
    "Cisco / AMAT 測試 AI infrastructure 盈利質素",
    "Cisco Q4 revenue $17.3bn、non-GAAP EPS $1.22，但毛利率壓力令股價受壓；AMAT revenue $9.12bn beat，盤後仍跌約 5%。",
  ],
];

const heatMapRows = [
  [
    "Energy / XLE / S&P Energy",
    "S&P Energy 約 +7.5%；XLE 來源顯示截至 8/13 約 +4.99%，週五再小升",
    "強綠",
    "本週最強主線；油價和 Hormuz premium 是主要驅動，但如果需求數據續弱，追高能源要小心 headline 反轉。",
  ],
  [
    "Technology / XLK",
    "截至 8/13 來源約 +2.94%；8/14 close 來源對 XLK 日變動有 -0.48% 至 +0.30% 差異",
    "綠燈",
    "科技仍有 AI support，但週五有獲利與數據口徑差異；本文不硬寫精確全週收市百分比。",
  ],
  [
    "Semiconductors / Memory",
    "SanDisk 全週約 +34%；Micron 8/14 收 $971.66、單日 +2.30%",
    "強綠",
    "AI memory / storage 成為半導體內最熱分支；但 AMAT / Cisco 反映硬件 margin 會被審判。",
  ],
  [
    "Health Care / XLV",
    "截至 8/13 來源約 +2.39%",
    "黃綠",
    "防守與低 beta 有承接，適合在低 VIX 高位市中作平衡。",
  ],
  [
    "Utilities / XLU",
    "截至 8/13 來源約 +1.52%；Seeking Alpha 指 utilities outperformed",
    "黃綠",
    "債息仍高但避險/收益需求存在；若 10Y 再升，utilities 會受估值壓力。",
  ],
  [
    "Consumer Discretionary / Retail",
    "週五零售數據差；XLY 截至 8/13 僅約 +0.30%",
    "黃燈",
    "下週 HD / TGT / WMT 財報會決定弱消費是一次性 Prime Day timing，還是真需求轉弱。",
  ],
  [
    "Communication Services / XLC",
    "截至 8/13 約 +1.23%；8/13 單日 +2.07%",
    "黃綠",
    "META / NFLX 等帶動前段升勢，但 mega-cap dispersion 大，不能當作無腦 beta。",
  ],
  [
    "Crypto beta",
    "BTC -3.07%、ETH -1.98%、SOL +1.31%（Binance Vision 20:00 UTC）",
    "黃燈",
    "Crypto 未完全確認美股 risk-on；SOL 跑贏但 BTC/ETH 回落，資金偏輪動而非全面加槓桿。",
  ],
];

const flowRows = [
  [
    "Global equity funds",
    "LSEG Lipper：截至 8/12 一週 global equity funds +$18.62bn，連續第 12 週流入",
    "盈利季與 Fed hike 降溫支持股票配置，但不是單一美股故事。",
  ],
  [
    "Regional funds",
    "同一口徑：Europe +$13.52bn、U.S. +$2.58bn、Asia +$4.13bn；部分 EM/sector 數字來源有差異",
    "資金更偏全球分散，美股有流入但不是最大吸金地。",
  ],
  [
    "Bond / cash barbell",
    "LSEG 摘要：bond funds 約 +$18.01bn，money-market funds 約 +$28.41bn",
    "不是純粹 all-in risk-on；投資者同時買股票、債券與現金，反映仍有政策/地緣 hedge。",
  ],
  [
    "Market breadth",
    "CNBC / Seeking Alpha：S&P 500 週升幅擴散至多個板塊，能源與 utilities outperformed；但 Dow 跑輸",
    "廣度比單靠 Mag 7 好，但未去到全面爆升，尤其消費與藍籌仍弱。",
  ],
  [
    "ETF / sector data quality",
    "StreetStats / trading tools 多數截至 8/13；Benzinga / Investing.com 8/14 quote 對部分 ETF 日變動有差異",
    "本文用方向與來源註明，不將 lagged 1-week data 當作最終 8/14 close 精確數字。",
  ],
  [
    "Crypto liquidity",
    "BTC $62,964.79、ETH $1,880.62、SOL $74.99；SOL 跑贏 BTC/ETH",
    "美股新高但 BTC 未跟上，代表流動性仍選擇性；若 BTC 失 $62k，crypto beta 會拖累風險胃納。",
  ],
];

const macroRows = [
  [
    "CPI",
    "CNBC / BLS：July CPI +0.1% m/m、+3.4% y/y；core +0.2% m/m、+2.5% y/y",
    "通脹比 6 月低一點，支持 Fed 9 月不急於加息；但 3.4% 仍高於 2% 目標。",
  ],
  [
    "PPI / Jobless claims",
    "CNBC / Reuters：PPI 0.0% m/m、+4.7% y/y；core PPI +0.2% m/m、+4.2% y/y；jobless claims 209k",
    "批發通脹好過預期，短線利好債券與 growth；claims 未失控，但勞動市場已不算火熱。",
  ],
  [
    "Retail sales",
    "Census：July retail and food services sales $763.6bn，m/m -0.6%（±0.4%），y/y +5.0%",
    "消費轉弱是今週最重要的增長警號；市場會睇下週 retail earnings 有無 confirm。",
  ],
  [
    "Consumer sentiment",
    "University of Michigan preliminary：August sentiment 51.0 vs July 55.2；1Y inflation expectations 4.3%、5Y 3.3%",
    "消費者仍擔心物價，特別係油價/中東風險；這令 Fed 雖可暫停，但未必可以轉鴿太快。",
  ],
  [
    "Treasury yields",
    "CNBC：10Y 4.696%、2Y 4.171%、30Y 5.267%；週五受油價與 Iran headline 推高",
    "2Y 受 Fed repricing 支撐，10Y/30Y 受油價和 term premium 牽動；growth 股最怕 10Y 重上 4.75%。",
  ],
  [
    "FedWatch / 利率預期",
    "來源口徑由約 29%-42% September hike probability 不等；共同方向是低於上週約 55% 附近",
    "市場不是 pricing cut，而是『暫停加息』機率上升；若油價續升或 8 月 CPI 熱，機率會再反彈。",
  ],
  [
    "Oil / Gold / Dollar",
    "CNBC：WTI $82.40、Brent $88.52，週升逾 5%；Barchart / FXStreet：DXY 約 99.57-99.67，gold spot 約 $4,386，futures 口徑更高",
    "弱美元和低加息機率撐金價，油價則把通脹風險留在桌面；兩者同升代表宏觀訊號不單純。",
  ],
];

const stockRows = [
  [
    "SNDK / MU / Memory",
    "SanDisk 全週約 +34%；Micron 8/14 收 $971.66、單日 +2.30%，YTD 仍大幅領先",
    "AI inference / NAND / memory 長單成為新焦點；但升幅已急，適合等回調或等下一個確認。",
  ],
  [
    "CSCO / Cisco",
    "公司 Q4 revenue $17.3bn、non-GAAP EPS $1.22；FY2027 revenue guide $72.2bn-$73.4bn，但股價週四跌約 8.4%",
    "需求無問題，市場質疑的是 AI hardware mix、memory cost 和 gross margin。",
  ],
  [
    "AMAT / Applied Materials",
    "Q3 revenue $9.12bn、adjusted EPS $3.50 beat；Q4 revenue guide $10.25bn +/- $500mn，盤後仍跌約 5%",
    "半導體設備需求強，但 investor positioning 已高，beat 後仍可能 sell-the-news。",
  ],
  [
    "NVDA / AI bellwether",
    "Yahoo earnings calendar：NVDA 8/26 after close，EPS estimate $2.08；BofA 估 revenue $94bn-$95bn",
    "今個財報是 AI trade 重新定價的核心 catalyst；若 guidance 唔夠強，semis 會較易震。",
  ],
  [
    "MSFT / AMZN / Cloud AI",
    "近期市場繼續獎勵能把 AI capex 連到 Azure / AWS revenue growth 的公司",
    "quality AI monetization 仍是中線主線；但 retail sales 弱會令 AMZN 同時受消費端檢驗。",
  ],
  [
    "AAPL / META / GOOGL",
    "Mega-cap dispersion 延續：市場更挑剔 capex ROI、服務收入與 AI execution",
    "不再是 Mag 7 一起升的簡單市；選股比 beta 更重要。",
  ],
  [
    "Retail：HD / TGT / WMT",
    "CNBC next-week outlook 指下週零售財報密集：Home Depot 8/18、Target 8/19、Walmart 8/20",
    "零售銷售 -0.6% 後，這三份財報會直接影響 consumer discretionary sentiment。",
  ],
  [
    "BTC / ETH / SOL",
    "Binance Vision 4pm ET 附近：BTC $62,964.79、ETH $1,880.62、SOL $74.99",
    "Crypto 分化：BTC/ETH 跟不上美股新高，SOL 稍強但仍需要守住 $74 附近。",
  ],
];

const earningsEvents = [
  "8/18：Home Depot earnings。零售銷售 -0.6% 後，市場會睇 home improvement demand 有無進一步放慢。",
  "8/19：Target earnings。消費轉弱、油價回升和非必需品需求，是下週 discretionary 的關鍵檢查點。",
  "8/20：Walmart earnings。若 WMT guidance 穩，市場會相信消費是 mix shift；若 guidance 弱，會拖累 cyclicals。",
  "8/26：Nvidia fiscal Q2 FY2027 after close。雖然不在下週，但市場會提前 positioning；留意 Rubin / data center guidance。",
  "Macro：留意 10Y 是否企穩 4.70% 上方、油價能否回落，以及 Fed speaker 是否反駁市場的 9 月 hold trade。",
  "Crypto：留意 BTC $62k、ETH $1,850、SOL $74；若 Nasdaq 穩但 BTC 續弱，代表 liquidity 不夠全面。",
];

const technicalRows = [
  [
    "S&P 500",
    "支持 7,750 / 7,700 / 7,600；阻力 7,800 / 7,817 / 7,900",
    "週四收市新高 7,798.99、盤中新高約 7,816.70；只要守 7,700，仍是高位整固。",
  ],
  [
    "Nasdaq Composite",
    "支持 26,500 / 26,300 / 26,000；阻力 26,800 / 27,000",
    "收 26,729.16，未破壞升勢；若 NVDA 前資金繼續入 semis，可再試 27,000。",
  ],
  [
    "Dow",
    "支持 53,500 / 53,000；阻力 54,000 / 54,350",
    "Dow 全週轉弱，突破前要靠工業/金融/消費重拾動力。",
  ],
  [
    "IWM / Russell proxy",
    "支持 $303 / $300；阻力 $305.2 / $310",
    "IWM 收 $305.09 並接近 52 週高，廣度訊號正面；跌穿 $300 才轉為警號。",
  ],
  [
    "VIX",
    "14 / 15 / 17 / 20",
    "14.25 代表市場相當淡定；若突然重上 17，要防止高位市 volatility repricing。",
  ],
  [
    "10Y Treasury",
    "4.60% / 4.70% / 4.75% / 4.85%",
    "4.70%-4.75% 是 growth multiple 壓力區；若油價推 10Y 上去，科技會先受壓。",
  ],
  [
    "WTI / Brent",
    "WTI $80 / $82.4 / $85；Brent $87 / $88.5 / $90",
    "油價企 $80/$87 上方代表 inflation tail risk 未消失；但太高會壓消費。",
  ],
  [
    "BTC",
    "$62,000 / $60,000；阻力 $64,000 / $66,000",
    "BTC 4pm ET 附近 $62,964.79；守 $62k 還可整固，失守則 crypto beta 轉弱。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$62,964.79",
    "-3.07% vs 2026-08-07 20:00 UTC",
    "Binance Vision spot 1m kline：2026-08-14 20:00:00 UTC close，即美股收市 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$1,880.62",
    "-1.98% vs 2026-08-07 20:00 UTC",
    "ETH 跌幅少過 BTC，但仍未能跟隨美股 record-high trade。",
  ],
  [
    "SOLUSDT / SOL",
    "$74.99",
    "+1.31% vs 2026-08-07 20:00 UTC",
    "SOL 是三者中較強，但仍要守 $74；如果 BTC 跌穿 $62k，SOL 亦難獨善其身。",
  ],
];

const watchPlan = [
  [
    "Base case",
    "高位整固，能源與 AI 分化並行",
    "S&P 500 守 7,700、VIX < 17、10Y 在 4.75% 下方；持有 quality growth / AI winners，同時用 energy / healthcare 作平衡。",
  ],
  [
    "Bull case",
    "零售財報無雷 + 10Y 回落",
    "HD / TGT / WMT guidance 沒有明顯惡化，油價回落，Nasdaq 企穩 26,800，IWM 續創高。",
  ],
  [
    "Bear case",
    "油價推高債息，消費數據變成盈利下修",
    "10Y > 4.75%、Brent > $90、VIX > 17、S&P 500 跌穿 7,700；先降高估值 semis、槓桿 ETF、消費 discretionary。",
  ],
  [
    "觀察清單",
    "SPY / QQQ / RSP / IWM / XLK / XLE / XLU / XLV / SOXX / SNDK / MU / CSCO / AMAT / NVDA / HD / TGT / WMT / BTC / ETH / SOL",
    "分別代表大盤、廣度、細價股、科技/能源輪動、防守、AI memory、AI infrastructure margin、零售消費與 crypto liquidity。",
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

export default function USWeeklyBrief20260815() {
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
          background: linear-gradient(135deg, #0f172a 0%, #075985 48%, #047857 100%);
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
        <h1>新高後整固：通脹降溫撐估值，油價與消費數據提醒風險未走</h1>
        <p className="subtitle">
          今週 S&P 500
          再創新高兼連升第三週，但升勢已由上週全面反彈，變成能源、AI
          memory、部分小型股與防守板塊輪動。CPI / PPI 溫和令 Fed 9
          月加息壓力下降；不過零售銷售和消費信心轉弱，加上油價因 Hormuz
          風險回升，令下週要同時睇盈利、債息和消費。
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
            <strong>+0.36%</strong>
          </div>
          <div>
            <span>Dow weekly</span>
            <strong>-0.56%</strong>
          </div>
          <div>
            <span>WTI weekly</span>
            <strong>&gt;+5%</strong>
          </div>
          <div>
            <span>BTC weekly</span>
            <strong>-3.07%</strong>
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
            一句到尾：今週不是熊市反轉，而是高位市進入「盈利要交功課、消費唔可以太差、油價唔可以太癲」的新階段。S&P
            500 趨勢仍強，但低 VIX + 高估值代表追貨要有位置同風控。
          </div>
        </Card>

        <Card title="2｜大市一眼睇" wide>
          <DataTable
            headers={["指標", "週五收市", "一週變動", "解讀"]}
            rows={indexRows}
          />
          <p className="small">
            指數點位以 CNBC、Yahoo Finance、Reuters / MarketScreener
            交叉核對；Russell 2000 精確指數週變動未有同一可靠 close
            source，本文使用 IWM ETF 作 small-cap proxy 並清楚標示。
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
            板塊/ETF 數據今次有時間差：部分來源只更新至 8/13，部分 8/14 quote
            可能是盤中或延遲價。本文把精確數字限於可核實來源，其他用方向性描述並在差異處理說明。
          </div>
        </Card>

        <Card title="7｜宏觀白話版" wide>
          <DataTable headers={["項目", "數據", "白話解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：CPI / PPI 令 Fed
            無需要即刻再踩油門，但油價與消費信心令「軟著陸」更難講得太滿。
            如果下週零售財報穩，市場可以繼續高位整固；如果 guidance
            弱，增長風險會蓋過通脹利好。
          </div>
        </Card>

        <Card title="8｜重點股票與 Crypto" wide>
          <DataTable
            headers={["股票 / 主題", "最新可靠數據", "點睇"]}
            rows={stockRows}
          />
          <h3>BTC / ETH / SOL</h3>
          <DataTable
            headers={["幣種", "8/14 4:00pm ET 附近價", "一週變動", "來源/備註"]}
            rows={cryptoRows}
          />
          <p className="small">
            Binance direct API 在此環境不可用；本文改用 Binance Vision public
            data 的 spot 1-minute kline。時間點為 2026-08-14 20:00:00 UTC，對比
            2026-08-07 同一時間，盡量貼近美股收市 4:00pm ET。
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
              不好在低 VIX、高位新高後無腦追。等 S&P 500 回踩 7,750 / 7,700
              或等零售財報確認後再加風險，比較健康。
            </li>
            <li>
              <strong>中線：</strong>
              核心仍是 quality growth + AI infrastructure winners，但要分清楚
              revenue growth、gross margin、free cash flow 同
              valuation，唔係所有 AI hardware 都值得同一估值。
            </li>
            <li>
              <strong>風控：</strong>若 10Y 重上 4.75%、Brent 穿 $90、VIX 回到
              17 以上、S&P 500 跌穿 7,700，先減 high beta semis、消費
              discretionary、槓桿 ETF 和 crypto beta。
            </li>
            <li>
              <strong>最終觀點：</strong>
              今週市場仍偏強，但已不是單純「通脹降溫所以買」。真正關鍵係下週零售財報能否證明消費未失速，以及油價會否把債息推回壓力區。守得住，S&P
              500 可在新高附近整固再上；守唔住，就要先做風控。
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
              指數：CNBC、Yahoo Finance、Reuters / MarketScreener 對 S&P 500 /
              Dow / Nasdaq 週五收市與週變動大致一致；本文採 CNBC / Yahoo
              的正式收市點位。
            </li>
            <li>
              Russell 2000：未找到同時涵蓋 8/14 close
              與一週百分比的可靠指數源；本文使用 IWM ETF close $305.09 作
              proxy，並標示不是 Russell 2000 指數本身。
            </li>
            <li>
              板塊：Energy 有 CNBC / Reuters-style headlines 支持約 +5% 至 +7.5%
              的強勢；其他 sector ETF 部分來源只到 8/13，8/14 quote
              亦有盤中/收市差異，所以以方向和可核實數字分開呈現。
            </li>
            <li>
              FedWatch：CNBC、FXStreet、Barchart 等對 9 月加息機率由約 29% 至
              42% 不等，因更新時間和工具不同；本文只採共同結論：較上週約 55%
              附近明顯下降。
            </li>
            <li>
              Gold：spot gold（約 $4,386）與 COMEX futures（Barchart 顯示約
              $4,437）口徑不同；本文同時標示，不混作單一收市價。
            </li>
            <li>
              Crypto：Binance 直接 API 在環境中不可用；本文使用 Binance Vision
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
