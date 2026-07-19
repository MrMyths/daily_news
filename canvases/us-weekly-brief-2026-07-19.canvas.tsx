import React from "react";

const reportWeek = "2026-07-13 至 2026-07-17";
const reportDate = "2026-07-19";
const publishedAt =
  "香港時間 2026-07-19 09:01（週末自動生成；美股最新交易日為 7/17）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP - How major US stock indexes fared Friday 7/17/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-5e44034ea86fa8d9c73184f3559e74a2",
  },
  {
    name: "Reuters via The Straits Times - Wall St ends lower for the day and week as chip selloff broadens",
    url: "https://www.straitstimes.com/business/companies-markets/wall-st-ends-lower-for-the-day-and-week-as-chip-selloff-broadens",
  },
  {
    name: "CNBC - Markets: Indexes, Bonds, Forex, Key Commodities, ETFs",
    url: "https://www.cnbc.com/markets/",
  },
  {
    name: "Morningstar - Weekly Market Update: Stocks Down as Energy Rises and Technology Falls",
    url: "https://www.morningstar.com/markets/weekly-market-update-stocks-down-energy-rises-technology-falls",
  },
  {
    name: "Reuters via Yahoo Finance - US single-family housing starts fall; building permits lowest in 10 months",
    url: "https://finance.yahoo.com/real-estate/articles/us-single-family-housing-starts-125103224.html",
  },
  {
    name: "BLS - Consumer Price Index, June 2026",
    url: "https://www.bls.gov/news.release/archives/cpi_07142026.htm",
  },
  {
    name: "BLS - Producer Price Index, June 2026",
    url: "https://www.bls.gov/news.release/archives/ppi_07152026.htm",
  },
  {
    name: "University of Michigan - Preliminary July 2026 Surveys of Consumers",
    url: "https://www.sca.isr.umich.edu/",
  },
  {
    name: "CNBC - Oil rises as U.S.-Iran hostilities threaten Strait of Hormuz supplies",
    url: "https://www.cnbc.com/2026/07/17/oil-price-today-brent-wti.html",
  },
  {
    name: "Reuters via LSE - Oil settles up on renewed US-Iran hostilities",
    url: "https://www.lse.co.uk/news/oil-rises-on-renewed-us-iran-hostilities-and-threat-of-red-sea-closure-ki7qx07ttxab1c0.html",
  },
  {
    name: "Reuters via Yahoo Finance - Chip stock pullback sparks worries about AI rally strength",
    url: "https://ca.finance.yahoo.com/news/chipmakers-other-high-flying-stocks-135657496.html",
  },
  {
    name: "CNBC - Bank earnings live updates: JPM, BofA, Citi, Goldman",
    url: "https://www.cnbc.com/2026/07/14/jpm-bank-of-america-citi-bank-earnings-live-updates.html",
  },
  {
    name: "JPMorgan Chase - 2Q26 earnings press release",
    url: "https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/quarterly-earnings/2026/2nd-quarter/6cded9fd-a164-4e6c-8cff-377357cf105c.pdf",
  },
  {
    name: "Reuters - Netflix earnings forecast disappoints Wall Street",
    url: "https://www.gurutrade.com/news/netflix-earnings-forecast-disappoints-wall-st-shares-tumble-1784273833.html",
  },
  {
    name: "ETF Action - Semiconductor and U.S. large-cap ETFs attract billions in new capital",
    url: "https://www.etfaction.com/semiconductor-and-u-s-large-cap-etfs-attract-billions-in-new-capital/",
  },
  {
    name: "FXStreet - Week ahead: technology earnings, ECB and PMIs",
    url: "https://www.fxstreet.com/analysis/week-ahead-could-technology-earnings-revive-equities-as-geopolitical-risks-linger-202607170852",
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
  "本週美股轉弱：S&P 500 全週 -1.55%、Nasdaq -2.90%、Dow 約 -0.93%，週五三大指數同日收低，主因係 AI / semiconductor 估值回吐由局部變成 broader risk-off。",
  "週五收市：S&P 500 -76.08 / -1.01% 至 7,457.69，Nasdaq -361.70 / -1.40% 至 25,520.24，Dow -406.55 / -0.77% 至 52,146.42；Russell 2000 -0.42% 至 2,962.217，VIX +12.19% 至 18.77（CNBC / Reuters 口徑）。",
  "Morningstar 口徑：US Market Index 全週 -1.53%；Energy +4.54% 與 Real Estate +2.64% 跑出，Technology -3.65% 與 Basic Materials -1.85% 最弱；Value +0.54% 跑贏 Growth -4.12%。",
  "最關鍵不是『指數跌』，而是『領跌者由晶片擴散』：Reuters 指 PHLX Semiconductor Index 本週約 -10%，並較 6/22 高位低 20.2%，正式進入 bear-market 區間。",
  "宏觀表面幫手但被油價抵銷：June CPI -0.4% MoM、PPI -0.3% MoM、Michigan sentiment 升至 54.4；但 Brent / WTI 週五同升逾 4%，全週約 +16%，市場重新 price 地緣通脹風險。",
  "Crypto 用 Binance Vision 2026-07-17 20:00 UTC 1m close：BTC $64,063.99、ETH $1,840.51、SOL $75.07；較 7/10 同一時間分別 +0.29%、+2.71%、-3.60%。",
];

const indexRows = [
  [
    "DJIA",
    "52,146.42",
    "週五 -406.55 / -0.77%；全週約 -0.93%",
    "銀行財報靚但不足以抵銷 risk-off；Dow 跌幅少過 Nasdaq，代表資金有轉去價值/防守，但不是全面避險成功。",
  ],
  [
    "S&P 500",
    "7,457.69",
    "週五 -76.08 / -1.01%；全週 -1.55%",
    "跌穿 7,500，短線由高位整固轉為要守支持；距離 6 月高位仍不算遠，但追高情緒明顯降溫。",
  ],
  [
    "Nasdaq Composite",
    "25,520.24",
    "週五 -361.70 / -1.40%；全週 -2.90%",
    "最受 semiconductor / AI capex 疑慮拖累；下週 Alphabet、Tesla、Intel 財報會直接考驗估值。",
  ],
  [
    "Russell 2000",
    "2,962.217",
    "週五 -12.35 / -0.42%；較 7/10 2,977.81 約 -0.52%",
    "細價股跌幅細過 Nasdaq，因資金由 growth crowding 轉去 average stock；但高息與信貸風險仍然壓住 IWM。",
  ],
  [
    "VIX",
    "18.77",
    "週五 +2.04 / +12.19%；較 7/10 15.03 約 +24.9%",
    "恐慌指數回到 18-19 區間，唔算 panic，但已經反映市場開始買保險。",
  ],
];

const whyMarketMoved = [
  [
    "AI / 晶片交易去槓桿",
    "Reuters 指 PHLX Semiconductor Index 本週跌約 10%、創一年多最大週跌幅，並較 6/22 高位低 20.2%；市場開始質疑 AI capex 回報與估值是否 price 到太完美。",
  ],
  [
    "跌勢由半導體擴散",
    "週五 semiconductor initially led selloff，之後演變成 broader risk-off；NYSE 下跌股數對上升股數約 1.94:1，Nasdaq 約 1.76:1，說明不是單一板塊事件。",
  ],
  [
    "能源變成避風港兼通脹風險",
    "美伊衝突升級、Strait of Hormuz / Red Sea 供應鏈風險升溫，Brent 週五收 $88.10、WTI $82.49，全週兩者約 +16%；Energy 成為本週最強板塊。",
  ],
  [
    "通脹數據降溫，但市場不敢全信",
    "BLS：June CPI -0.4% MoM、PPI -0.3% MoM；理論上利好債息與 growth multiple，但油價急升令『之後通脹會否反彈』成為新疑問。",
  ],
  [
    "財報季開局好，但估值要求更高",
    "大型銀行普遍 beat，JPMorgan adjusted EPS $6.14、net income $21.2bn；但市場焦點轉向 AI 龍頭能否證明 capex 仍有回報。",
  ],
];

const topNews = [
  [
    "1",
    "三大指數週五及全週收低",
    "Reuters / CNBC：Dow 52,146.42、S&P 500 7,457.69、Nasdaq 25,520.24；S&P 500 與 Nasdaq 分別全週約 -1.55% / -2.90%，是風險胃納轉弱的一週。",
  ],
  [
    "2",
    "半導體進入 bear-market 區間",
    "Reuters 指 SOX 較 6/22 record close 低 20.2%，本週約 -10%，但年初至今仍約 +65%；即是長線 AI trade 未死，短線 leverage / valuation 要排毒。",
  ],
  [
    "3",
    "能源急升、油價全週約 +16%",
    "CNBC / Reuters：Brent 週五 +4.59% 至 $88.10，WTI +4.48% 至 $82.49；美伊衝突與航道風險令能源板塊跑贏。",
  ],
  [
    "4",
    "CPI / PPI 降溫，消費信心反彈",
    "BLS：June CPI -0.4% MoM、3.5% YoY；PPI -0.3% MoM、5.5% YoY。University of Michigan preliminary sentiment 升至 54.4，1 年通脹預期降至 4.2%。",
  ],
  [
    "5",
    "大型銀行 beat，Netflix / Alphabet 提醒增長股風險",
    "JPM、BAC、C、WFC、GS 均 beat；但 Netflix 因 Q3 revenue guide 低於預期盤後曾跌逾 8%，Alphabet 亦受 Gemini 3.5 Pro 延遲報道拖累。",
  ],
];

const heatMapRows = [
  [
    "Energy",
    "+4.54%（Morningstar）",
    "強綠",
    "油價急升推動，短線最強；但追入要承受 headline risk，一旦停火/航道紓緩可以好快回吐。",
  ],
  [
    "Real Estate",
    "+2.64%（Morningstar）",
    "綠燈",
    "受益於債息回落與防守輪動；但樓市 starts / permits 仍弱，基本面未算無憂。",
  ],
  [
    "Value",
    "+0.54%（Morningstar）",
    "綠燈",
    "資金由 expensive growth 轉去 value / defensives，係本週最清楚的風格輪動。",
  ],
  [
    "Large Caps",
    "-1.90%（Morningstar）",
    "黃燈",
    "大市值被 mega-cap tech 拖低，但盈利質素仍比高 beta 小型股有承接。",
  ],
  [
    "Small Caps",
    "-0.15%（Morningstar）",
    "黃燈",
    "跑贏大型 growth，但不是 breakout；高借貸成本與信貸風險仍是上限。",
  ],
  [
    "Technology",
    "-3.65%（Morningstar）",
    "紅燈",
    "本週最大壓力來源；要等下週 hyperscaler / chip 財報證明 AI capex 故事未變。",
  ],
  [
    "Basic Materials",
    "-1.85%（Morningstar）",
    "紅燈",
    "周期股未受益於通脹降溫，反映市場對全球需求仍謹慎。",
  ],
  [
    "Growth",
    "-4.12%（Morningstar）",
    "深紅",
    "估值、擠擁倉位、AI 回報懷疑三重壓力；短線要等技術修復。",
  ],
];

const flowRows = [
  [
    "市場廣度",
    "Morningstar：882 隻覆蓋美股中 499 隻升、1 隻不變、371 隻跌",
    "雖然指數跌，但平均股票好過 cap-weight headline；這是『mega-cap growth 回吐，但市場未全面崩』的證據。",
  ],
  [
    "交易所 breadth",
    "Reuters：NYSE 跌股/升股約 1.94:1；Nasdaq 約 1.76:1",
    "週五已由半導體擴散到更闊市場，短線不是只沽一個行業。",
  ],
  [
    "風格輪動",
    "Value +0.54%，Growth -4.12%；Large -1.90%、Mid -0.66%、Small -0.15%（Morningstar）",
    "資金不是離開所有股票，而是由擠擁 growth 轉去 value、防守與能源。",
  ],
  [
    "ETF flows",
    "ETF Action：Equity ETFs 1-week +$32.43bn，Fixed Income +$8.91bn；Digital Asset 1-week -$128.6mn",
    "價格下跌但 ETF 仍見 equity inflows，代表被動/大型股配置未撤退；但 digital asset ETF 流向偏弱。",
  ],
  [
    "LSEG / ICI 差異",
    "Reuters/LSEG 週至 7/15 指 US equity funds -$4.8bn；ICI 週至 7/8 則長期基金與 ETF 合計 +$66.12bn",
    "基金流向受統計範圍與截止日影響好大；本文分開標示，不硬湊成單一結論。",
  ],
  [
    "Crypto beta",
    "BTC +0.29%、ETH +2.71%、SOL -3.60%（Binance 20:00 UTC 口徑）",
    "BTC/ETH 尚算穩，但 SOL 明顯跑輸，說明高 beta 風險胃納未完全修復。",
  ],
];

const macroRows = [
  [
    "Treasury yields",
    "CNBC / 市場頁面：10Y 約 4.56%；Finvexx 指 10Y 回落至 4.56%",
    "債息回落本應幫 growth，但油價急升令市場不敢太快把 Fed 風險移除。",
  ],
  [
    "FedWatch / 利率預期",
    "公開市場報道有差異：Finvexx 指 September hike odds 跌穿 50%；FXStreet week-ahead 指市場仍幾乎 price 9 月 25bp hike",
    "利率預期分歧很大，原因是通脹數據轉冷但油價轉熱；下週 Fed speakers / PMI price components 會影響 odds。",
  ],
  [
    "CPI",
    "BLS：June CPI -0.4% MoM、+3.5% YoY；core CPI 按 CNBC 口徑 MoM flat、YoY 2.6%",
    "這是本週最鴿的數據，解釋為何債息可回落；但 headline 仍高於 Fed 2% 目標。",
  ],
  [
    "PPI",
    "BLS：Final demand PPI -0.3% MoM、+5.5% YoY；能源價格下跌是主要拖累",
    "批發通脹降溫有助 PCE 預期，但如果油價 7 月反彈，這份數據可能只是短暫紓緩。",
  ],
  [
    "Oil",
    "Brent $88.10 +4.59%；WTI $82.49 +4.48%；全週兩者約 +16%（Reuters / CNBC）",
    "能源供應風險係市場最大 macro tail risk；油價若再升，會同時壓消費、推通脹、逼 Fed 更鷹。",
  ],
  [
    "Gold / Dollar",
    "Barchart：DXY 約 100.755、幾乎持平；August gold futures $4,018.8 +0.67%",
    "金價有避險買盤，但美元亦受 liquidity demand 支持；避險不是單向流入黃金。",
  ],
  [
    "Housing / Production",
    "Reuters：single-family starts -0.2% 至 895k；single-family permits -2.4% 至 871k、10 個月低；Fed：industrial production +0.1%",
    "樓市仍受高按揭利率壓住，工業生產只是溫和改善；soft landing 仍未等於強增長。",
  ],
  [
    "Consumer sentiment",
    "University of Michigan：July preliminary sentiment 54.4；1 年通脹預期 4.2%，5 年 3.3%",
    "信心反彈來自油價早前回落，但調查大部分在美伊衝突再升級前完成，解讀要打折。",
  ],
];

const stockRows = [
  [
    "NVDA / Semis",
    "Reuters：Nvidia 週五 -2.2%；SOX 本週約 -10%，較 6/22 高位低 20.2%",
    "不是 Nvidia 單一公司出事，而是整個 AI supply chain 被要求重新證明 capex 回報。",
  ],
  [
    "INTC / AMD / Applied Materials",
    "Reuters：Intel -2%、Applied Materials -5.6%；其他報道指 AMD / memory names 亦明顯受壓",
    "市場先沽估值與周期彈性最高位置；如果 Intel 下週財報再弱，semis 修復會更慢。",
  ],
  [
    "GOOGL / META",
    "Reuters / CNBC：Alphabet 受 Gemini 3.5 Pro 延遲報道拖累；Reuters 指 Magnificent Seven 除 Apple 外週五多數下跌，Meta -2.7%、Alphabet -3.2%",
    "AI 應用端也要交 execution，不再只是買『會投資 AI』四個字。",
  ],
  [
    "NFLX",
    "Reuters：Q2 revenue $12.56bn、EPS $0.80；Q3 revenue guide $12.86bn 低於 LSEG 預期 $13bn，盤後跌近 8.6%",
    "增長股估值好敏感：業績大致符合都不夠，guide 不夠強就即刻被賣。",
  ],
  [
    "JPM / 大型銀行",
    "JPMorgan：Q2 net income $21.2bn、EPS $7.70；剔除 significant items EPS $6.14；CNBC 指大型銀行普遍 beat",
    "金融基本面不差，capital markets cycle 幫手；但股價能否跑贏取決於信貸質素與 loan demand commentary。",
  ],
  [
    "TRV / Insurance",
    "Motley Fool / 市場報道：Travelers 因 Q2 earnings beat 週五曾急升約 9%",
    "防守金融 / insurance 是本週少數亮點，顯示資金仍願意買盈利可見度。",
  ],
  [
    "UNH / Healthcare",
    "CNBC TV18：UnitedHealth 報強勁季度並上調 2026 指引，曾帶動 Dow，但大市後段未能守住升幅",
    "Healthcare 有單股催化，但需要更多板塊確認，否則只是防守輪動的一部分。",
  ],
  [
    "SpaceX / 私募科技情緒",
    "CNBC 視頻頁面提及 SpaceX 連跌六日、較高位市值蒸發近 $1tn",
    "即使不是上市普通股，也反映高估值科技資產同樣在去 froth。",
  ],
];

const earningsEvents = [
  "7/20：美國 Conference Board Leading Index、加拿大 CPI、中國 LPR；週初 macro 數據相對輕，但市場會消化油價與美伊 headline。",
  "7/22：Tesla 與 Alphabet 盤後公布 Q2；這是下週最重要單日，會直接驗證 AI / autonomy / cloud capex 敘事能否止跌。",
  "7/23：Intel 公布 Q2；半導體剛進 bear-market 區間，Intel 指引與 data center / foundry 訊息會影響 SOX 修復。",
  "7/23：ECB 議息與美國 June New Home Sales；市場預期 ECB 觀望，但油價升可能令歐洲通脹語氣更敏感。",
  "7/24：全球 flash PMI；重點不是 headline，而是 price paid / input cost 是否反映油價衝擊。",
  "7/24：美國 weekly claims；若裁員仍低，soft landing 敘事可撐住 value / financials。",
  "之後一週：Microsoft 7/29、Coinbase / Strategy 7/30、Nvidia 8/26；AI 與 crypto beta 的真正考試陸續來。",
  "Crypto：留意 BTC $64k 是否變支持、ETH 能否繼續跑贏 BTC、SOL 是否守住 $75；若 Nasdaq 再跌，SOL 這類高 beta 會先受壓。",
];

const technicalRows = [
  [
    "S&P 500",
    "支持 7,400 / 7,350；阻力 7,500 / 7,600",
    "週五收 7,457.69，已跌穿 7,500；下週先看能否 reclaim 7,500，否則 7,400 是第一防線。",
  ],
  [
    "Nasdaq Composite",
    "支持 25,500 / 25,000；阻力 26,000 / 26,500",
    "收 25,520.24，剛好貼近第一支持；下週科技財報前，不宜假設 V 型反彈一定出現。",
  ],
  [
    "Dow",
    "支持 52,000；阻力 52,650 / 53,000",
    "Dow 全週跌幅較溫和，若金融與保險續強，52,000 有機會守住。",
  ],
  [
    "Russell 2000",
    "支持 2,930 / 2,900；阻力 3,000",
    "IWM 類別要突破，需債息回落兼 credit commentary 穩定；否則只會相對抗跌，不會領升。",
  ],
  [
    "VIX",
    "18 / 20 / 22",
    "18-20 是正常避險區；若升穿 22，代表大市由 rotation 變 correction。",
  ],
  [
    "10Y Treasury",
    "4.50% / 4.60%",
    "4.60% 仍是 growth 壓力線；跌穿 4.50% 才可重新支持高估值倍數。",
  ],
  [
    "WTI",
    "$80 / $85",
    "WTI 收 $82.49；若上破 $85，市場會更擔心通脹反彈與消費壓力。",
  ],
  [
    "BTC",
    "$64,000 / $62,000",
    "BTC 4pm ET 附近 $64,063.99；$64k 失而復得代表 crypto 尚穩，失 $62k 則 high beta 降溫。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$64,063.99",
    "+0.29% vs 2026-07-10 20:00 UTC",
    "Binance Vision spot 1m kline：2026-07-17 20:00:00 UTC close，即美股收市 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$1,840.51",
    "+2.71% vs 2026-07-10 20:00 UTC",
    "ETH 週內跑贏 BTC，反映資金仍願意買部分 beta，但升幅未足以抵銷整體 risk-off。",
  ],
  [
    "SOLUSDT / SOL",
    "$75.07",
    "-3.60% vs 2026-07-10 20:00 UTC",
    "SOL 跑輸，與 Nasdaq / high beta 壓力一致；短線先看 $75 能否守住。",
  ],
];

const watchPlan = [
  [
    "Base case",
    "先當作高位整固，不急住撈最擠擁 AI beta",
    "S&P 500 守 7,400、VIX 低於 20、10Y 不破 4.60%，保留核心質素股，但減少追高半導體。",
  ],
  [
    "Bull case",
    "等科技財報重新證明 capex 故事",
    "Alphabet / Tesla / Intel 指引好過預期，Nasdaq reclaim 26,000，SOX 止跌，油價不上破 $85。",
  ],
  [
    "Bear case",
    "若油價與 VIX 同升，先降 beta",
    "WTI > $85、VIX > 22、S&P 500 失 7,350、Nasdaq 失 25,000，減 small caps、unprofitable growth、semis、SOL 類高 beta。",
  ],
  [
    "觀察清單",
    "SPY / QQQ / IWM / RSP / XLE / XLK / SOXX / XLF / XLV / NVDA / GOOGL / TSLA / INTC / JPM / BTC / ETH / SOL",
    "分別代表大盤、科技修復、平均股、能源避險、金融廣度、醫療防守、AI capex 與 crypto liquidity。",
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

export default function USWeeklyBrief20260719() {
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
        <h1>晶片退潮拖低大市，能源成為少數避風港</h1>
        <p className="subtitle">
          本週不是全面崩盤，但係一個好清楚的「AI crowding
          reset」：指數由半導體領跌，
          資金轉去能源、房地產、價值與防守股。通脹數據降溫有幫手，偏偏油價急升又把
          Fed 與通脹風險拉返上枱。
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
            <strong>-1.55%</strong>
          </div>
          <div>
            <span>Nasdaq weekly</span>
            <strong>-2.90%</strong>
          </div>
          <div>
            <span>Energy weekly</span>
            <strong>+4.54%</strong>
          </div>
          <div>
            <span>BTC weekly</span>
            <strong>+0.29%</strong>
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
            一句到尾：今週係「AI / 晶片估值退潮，但市場未全面失控」。下週如果
            Alphabet、Tesla、Intel 財報穩住，跌市可以變整固；如果油價續升兼科技
            財報失望，就要小心由 rotation 變 correction。
          </div>
        </Card>

        <Card title="2｜大市一眼睇" wide>
          <DataTable
            headers={["指標", "週五收市", "一週變動", "解讀"]}
            rows={indexRows}
          />
          <p className="small">
            指數日變動採 AP、Reuters 及 CNBC 收市口徑交叉核對；週度板塊/風格採
            Morningstar week ended July 17 口徑。AP 片段中 S&P 500 點位曾出現
            7,475.69 與其他來源 7,457.69 差異；本文採 Reuters / CNBC / Motley
            Fool 一致的 7,457.69。
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
            Fund flows 的「週」截止日不同：ETF Action、Reuters/LSEG、ICI
            口徑各有統計範圍與日期差異。本文把 price action、breadth、fund flow
            分開講，避免將不同資料硬合成一個結論。
          </div>
        </Card>

        <Card title="7｜宏觀白話版" wide>
          <DataTable headers={["項目", "數據", "白話解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：CPI/PPI
            是好消息，但油價是壞消息。市場現在不是怕經濟即刻衰退，
            而是怕「通脹剛降、能源又推返上去」，令 Fed 更難轉鴿。
          </div>
        </Card>

        <Card title="8｜重點股票與 Crypto" wide>
          <DataTable
            headers={["股票 / 主題", "最新可靠數據", "點睇"]}
            rows={stockRows}
          />
          <h3>BTC / ETH / SOL</h3>
          <DataTable
            headers={["幣種", "7/17 4:00pm ET 附近價", "一週變動", "來源/備註"]}
            rows={cryptoRows}
          />
          <p className="small">
            Binance direct API 在此環境回 451；本文改用 Binance Vision public
            data 的 spot 1-minute kline。時間點為 2026-07-17 20:00:00 UTC，對比
            2026-07-10 同一時間，盡量貼近美股收市 4:00pm ET。
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
              不要急住撈所有半導體。若只是技術反彈但 SOX / Nasdaq 不 reclaim
              關鍵位，反彈容易變成減倉位。
            </li>
            <li>
              <strong>中線：</strong>
              保留盈利質素與現金流可見度高的核心倉；能源可以作 hedge，但要接受
              headline risk，不應把戰爭 premium 當永久盈利增長。
            </li>
            <li>
              <strong>風控：</strong>若 VIX 升穿 22、WTI 升穿 $85、S&P 500 失守
              7,350，先減高 beta growth、槓桿 ETF、crypto beta；等波動回落再加。
            </li>
            <li>
              <strong>最終觀點：</strong>
              今週是高估值科技的一次壓力測試。好消息是市場廣度未完全壞、value /
              energy 有承接；壞消息是 AI
              領袖板塊已經進入「要用業績證明自己」階段。下週科技財報
              會決定這次是健康輪動，還是 correction 的開端。
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
              指數：AP 片段的 S&P 500 點位曾顯示 7,475.69；Reuters、CNBC、Motley
              Fool 一致為 7,457.69，本文採一致來源。Russell 2000 / VIX 採 CNBC
              市場表。
            </li>
            <li>
              週度表現：大市與板塊/風格以 Morningstar week ended July 17
              為主；Dow / Russell 等未列於 Morningstar
              摘要的指標，按可核週五收市與 7/10 收市作近似週變動。
            </li>
            <li>
              FedWatch：不同媒體對 September hike odds
              報道差異較大，本文不硬列單一精確 機率，只標示「通脹降溫 vs
              油價升」造成定價分歧。
            </li>
            <li>
              油價/黃金/DXY：油價採 Reuters/CNBC settlement；黃金與 DXY 採
              Barchart Friday close / settlement 口徑。不同平台的
              spot、futures、盤中時間會有差異。
            </li>
            <li>
              Fund flows：ETF Action、Reuters/LSEG、ICI 的統計範圍與週期不同；
              本文將它們作為資金行為參考，不將不同口徑加總。
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
