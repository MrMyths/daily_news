import React from "react";

const reportDate = "2026-10-07";
const publishedAt =
  "香港時間 2026-10-08 09:12（週四更新；數據截至美股 10/07 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Wednesday 10/7/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-00ad8ec13f0265ac3c41a0d9d7fdb265",
  },
  {
    name: "Reuters via StreetInsider - Wall Street ends lower, off record highs, as Treasury yields climb",
    url: "https://www.streetinsider.com/Market+Check/Wall+Street+ends+lower%2C+off+record+highs%2C+as+Treasury+yields+climb/27157668.html",
  },
  {
    name: "CNBC - 10-year Treasury note yield hits highest level since 2002",
    url: "https://www.cnbc.com/2026/10/07/treasury-yields-auction-fomc-minutes.html",
  },
  {
    name: "Federal Reserve - Minutes of the FOMC, September 15-16 2026",
    url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261007a.htm",
  },
  {
    name: "Federal Reserve - FOMC minutes PDF",
    url: "https://www.federalreserve.gov/monetarypolicy/files/fomcminutes20260916.pdf",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Central Bank Watch - Fed rate probabilities, Oct. 28 2026",
    url: "https://centralbank.watch/federal-reserve/",
  },
  {
    name: "Reuters via Euronext - Oil prices settle down as IEA accelerates stock release",
    url: "https://live.euronext.com/en/financial-news/oil-prices-settle-down-iea-agrees-accelerate-oil-stock-release",
  },
  {
    name: "CNBC - Stocks making the biggest moves midday: GS, BULL, WS, MU",
    url: "https://www.cnbc.com/2026/10/07/stocks-making-the-biggest-moves-midday-gs-bull-ws-mu.html",
  },
  {
    name: "Reuters via StreetInsider - Webull sinks after CNBC reports US House panel flagged China ties",
    url: "https://www.streetinsider.com/Reuters/Webull+sinks+after+CNBC+reports+US+House+panel+flagged+China+ties/27159593.html",
  },
  {
    name: "Cboe - VIX historical data CSV",
    url: "https://cdn.cboe.com/api/global/us_indices/daily_prices/VIX_History.csv",
  },
  {
    name: "Yahoo Finance chart data - index, sector ETF and stock closes",
    url: "https://finance.yahoo.com/",
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
  "美股週三由紀錄高位回一回氣：AP 終值顯示 S&P 500 7,801.77（-17.16 / -0.22%）、Nasdaq 27,538.69（-61.20 / -0.22%）、Dow 51,179.87（-341.41 / -0.66%）、Russell 2000 2,793.20（-37.09 / -1.31%）。",
  "主因不是 earnings shock，而是長端債息重新抽升：CNBC 指 10Y yield 盤中升至 5.35%，為 2002 年以來高位；30Y 一度升至 5.724%，壓住估值和小型股。",
  "板塊明顯轉防守：Yahoo ETF 口徑顯示 Health Care / XLV +1.03% 最強，Utilities 近持平；Industrials / XLI -2.18%、Materials / XLB -1.51%、Real Estate / XLRE -1.29% 最弱。",
  "Fed minutes 偏 hawkish 但市場仍押 10 月先暫停：9/15-16 會議紀錄顯示全票加息至 3.75%-4.00%，多數官員認為年底前可能再加；市場追蹤顯示 10/28 加息機率約 18%-20%。",
  "商品口徑有分歧但方向一致：Reuters 指 Brent 收 $100.20（-0.38%）、WTI $88.28（-1.3%）；黃金受高息美元壓住，COMEX / 現貨來源均顯示下跌。",
  "Crypto 亦跟 risk-off：Binance Vision 2026-10-07 20:00 UTC 1m close（美股 4:00pm ET 附近）BTC $83,451.98（-2.54%）、ETH $2,571.93（-4.45%）、SOL $115.88（-4.10%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "51,179.87",
    change: "-341.41 / -0.66%",
    read: "Dow 跑輸大市，Caterpillar 約 -5.75% 成為最大拖累；升跌更像單一重磅工業股 + 長息壓力的組合。",
  },
  {
    asset: "S&P 500",
    close: "7,801.77",
    change: "-17.16 / -0.22%",
    read: "前一日創收盤高後回吐，但仍守 7,800 附近；短線焦點是 7,800 能否由阻力變支持。",
  },
  {
    asset: "Nasdaq Composite",
    close: "27,538.69",
    change: "-61.20 / -0.22%",
    read: "結束五連升但跌幅有限；AI / mega-cap 不是全面崩，只是高長息下追價意欲收斂。",
  },
  {
    asset: "Russell 2000",
    close: "2,793.20",
    change: "-37.09 / -1.31%",
    read: "小型股對融資成本最敏感，跌幅明顯大過大型股；breadth 轉差比 headline 指數更弱。",
  },
  {
    asset: "VIX",
    close: "15.08（Yahoo chart 暫值）",
    change: "+0.07 / +0.47%",
    read: "Cboe 官方 CSV 執行時仍只更新至 10/06 close 15.01；Yahoo 顯示 10/07 約 15.08，代表市場回吐但未有恐慌。",
  },
];

const sectorRows = [
  [
    "Health Care / XLV",
    "$168.81 / +1.03%",
    "最強",
    "資金轉入防守與 earnings visibility 較高的板塊；長息抽升時，health care 相對 growth / cyclicals 更有承托。",
  ],
  [
    "Utilities / XLU",
    "$41.15 / -0.02%",
    "中性",
    "高息環境理應壓 utilities，但今日仍接近平收，反映資金有避險需求。",
  ],
  [
    "Consumer Staples / XLP",
    "$81.70 / -0.12%",
    "中性",
    "防守性消費跌幅細過大市；不是強勢主線，但有防守 beta。",
  ],
  [
    "Technology / XLK",
    "$201.39 / -0.30%",
    "中性偏弱",
    "10Y 重新升穿 5.25% 區域，高 duration 科技估值受壓；但跌幅仍細過 semis。",
  ],
  [
    "Semiconductors / SOXX",
    "$582.82 / -1.13%",
    "弱",
    "前期 AI / 晶片累積升幅大，長息抽升令資金先鎖定利潤；NVDA -0.74%，MU 逆市 +4.06%。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$111.36 / -0.32%",
    "中性偏弱",
    "AMZN +1.42% 幫手抵消部分壓力，但 Tesla 與高 beta 消費未能帶隊。",
  ],
  [
    "Communication Services / XLC",
    "$111.26 / -0.35%",
    "中性偏弱",
    "GOOGL +0.81% 仍有支持，但 META -2.38% 拖低板塊表現。",
  ],
  [
    "Financials / XLF",
    "$53.75 / -0.48%",
    "弱",
    "長息抽升理論上幫息差，但 CNBC 指大型銀行普遍受壓；市場更擔心信貸成本與估值。",
  ],
  [
    "Energy / XLE",
    "$63.36 / -0.61%",
    "弱",
    "Reuters 指油價收低，WTI -1.3%；能源股未能受地緣風險支撐。",
  ],
  [
    "Real Estate / XLRE",
    "$40.57 / -1.29%",
    "最弱",
    "rate-sensitive 板塊直接受長端 yield 打擊；融資成本上升令 REITs multiple 承壓。",
  ],
  [
    "Materials / XLB",
    "$48.98 / -1.51%",
    "最弱",
    "美元偏強、全球債息抽升與 cyclicals risk-off 同時不利材料股。",
  ],
  [
    "Industrials / XLI",
    "$167.84 / -2.18%",
    "最弱",
    "Caterpillar 大跌帶動工業股成全日最大弱點；高息提高設備融資與資本開支門檻。",
  ],
];

const macroRows = [
  {
    topic: "Fed / 利率路徑",
    data: "Fed 10/07 發布 9/15-16 FOMC minutes：全票加息 25bp 至 3.75%-4.00%，多數官員認為年底前再加一次可能合適。市場追蹤顯示 10/28 會議不變機率約 80%，加 25bp 約 18%-20%。",
    meaning:
      "Fed 文件偏 hawkish，但 futures 暫時相信 10 月未必即刻再加；下個大 trigger 是 CPI / 就業數據。",
  },
  {
    topic: "美債息",
    data: "CNBC：10Y yield 盤中約 5.35%，為 2002 年以來高位；30Y 一度 5.724%。Yahoo 收市口徑：10Y 5.277%、30Y 5.661%、3M 4.037%。",
    meaning:
      "今次殺傷力在 curve long end，不是短端 Fed pricing；長期資金成本抽升會壓房屋、工業、小型股與高估值科技。",
  },
  {
    topic: "原油",
    data: "Reuters / Euronext：Brent 收 $100.20（-0.38%），WTI 收 $88.28（-1.3%）；IEA 同意加快釋放庫存並優先柴油。",
    meaning:
      "油價跌有助通脹預期降溫，但仍處於高位；若 Brent 重新上 $102-$105，債息壓力可能再放大。",
  },
  {
    topic: "美元 / 黃金",
    data: "DXY 來源口徑約 102.25-102.49；黃金口徑有差異：COMEX December futures 約 $4,140.70（-1.2%），現貨市場摘要約 $4,112（-1.3%）。",
    meaning:
      "高實質利率 + 強美元是黃金短線逆風；本文列明現貨與 futures 差異，不把單一數字當唯一 close。",
  },
  {
    topic: "波幅 / 風險胃納",
    data: "VIX：Cboe 官方 CSV 最新只到 10/06 close 15.01；Yahoo chart 顯示 10/07 close 約 15.08（+0.47%）。Reuters 指 NYSE decliners 大幅多過 advancers。",
    meaning:
      "恐慌未爆，但市場廣度轉差；headline 指數跌得細，不代表下面沒有壓力。",
  },
  {
    topic: "Crypto / 流動性",
    data: "Binance Vision 20:00 UTC：BTC $83,451.98、ETH $2,571.93、SOL $115.88，較 10/06 20:00 UTC 分別 -2.54%、-4.45%、-4.10%。",
    meaning:
      "Crypto 同小型股一樣對 liquidity 轉差敏感；BTC 跌穿 $85k 後，短線要看 $82k 能否守住。",
  },
];

const stockRows = [
  [
    "CAT",
    "$813.83 / -5.75%",
    "Caterpillar 拖低 Dow 與 Industrials；高長息令大型設備、建築、採礦相關融資需求受壓。",
  ],
  [
    "PENG",
    "$72.61 / +13.08%",
    "CNBC 指 Penguin Solutions 第四季業績勝預期，AI factory platform 題材令資金逆市追入。",
  ],
  [
    "BULL / Webull",
    "$5.89 / -19.09%",
    "CNBC / Reuters 指美國國會中國問題委員會質疑公司與中國政府關係，引發安全風險擔憂。",
  ],
  [
    "MU",
    "$1,088.00 / +4.06%",
    "記憶體需求與 AI context window 故事繼續受捧；CNBC 指券商看好供需緊張延續至 2027-2028。",
  ],
  [
    "NVDA",
    "$237.47 / -0.74%",
    "Reuters 報道 SpaceX 尋求融資購買 Nvidia chips，但高息壓力令半導體整體仍回吐。",
  ],
  [
    "INTC",
    "$113.12 / +0.55%",
    "Intel 小升，和半導體 ETF 下跌形成分化；市場仍在尋找 AI infrastructure 之外的半導體支線。",
  ],
  [
    "AAPL / MSFT / GOOGL / AMZN",
    "AAPL +0.91%；MSFT +0.09%；GOOGL +0.81%；AMZN +1.42%",
    "大型平台股表現相對穩，說明今日不是 mega-cap crash，而是長息與廣度問題。",
  ],
  [
    "META / TSLA",
    "META -2.38%；TSLA -0.75%",
    "高 beta growth 回吐較明顯；若 10Y 繼續升，這類股份通常會先受估值壓縮。",
  ],
  [
    "JPM / GS",
    "JPM -0.51%；GS -1.11%",
    "銀行股未有因長息升而受惠，市場更關注信貸成本、capital markets 波動與整體 risk-off。",
  ],
];

const cryptoRows = [
  [
    "BTC",
    "$83,451.98",
    "-$2,174.33 / -2.54%",
    "跌穿 $85k，和小型股同向 risk-off；第一支持看 $82k，若失守會重新測試 $80k 心理位。",
  ],
  [
    "ETH",
    "$2,571.93",
    "-$119.74 / -4.45%",
    "跌幅大過 BTC，代表 alt beta 更脆弱；ETH/BTC 未轉強前，不宜假設資金在輪動去 alt。",
  ],
  [
    "SOL",
    "$115.88",
    "-$4.95 / -4.10%",
    "仍在 $115 附近掙扎；若美股 growth 繼續回吐，SOL 這類高 beta 幣會放大波幅。",
  ],
];

const newsItems = [
  "AP：美股由紀錄高位回落，S&P 500 -0.22%、Nasdaq -0.22%、Dow -0.66%、Russell 2000 -1.31%。",
  "Reuters：長端美債息重新抽升，令市場擔心通脹、政府債務與企業融資成本；S&P 500 / Dow 四連升結束，Nasdaq 六日來首次下跌。",
  "CNBC：10Y yield 盤中升至 5.35%，30Y 一度 5.724%；之後 10 年期國債拍賣需求較好，令收益率由高位回落。",
  "Fed：9 月 FOMC minutes 顯示全票加息至 3.75%-4.00%，多數官員預期年底前或再加一次；但 10 月 futures pricing 仍偏向暫停。",
  "Reuters：IEA 加快釋放石油庫存，Brent / WTI 收低；油價紓緩有助通脹，但 $100 Brent 仍不是低油價環境。",
  "個股：CAT 跌近 6% 拖累 Dow；PENG 因業績勝預期急升；Webull 因中國關聯安全疑慮急挫；MU 逆市升。",
];

const technicalRows = [
  [
    "S&P 500",
    "7,800 是即時分水嶺；跌穿後看 7,760 / 7,720。",
    "7,819（10/06 record close）與 7,845 附近日內高位是第一阻力；重上才算高位整固成功。",
  ],
  [
    "Nasdaq",
    "27,500 是短線支持；下一級看 27,300。",
    "27,600 / 27,720 是前高區；要重啟升浪，需要 mega-cap + semis 同步轉強。",
  ],
  [
    "Russell 2000",
    "2,780 / 2,750 是 risk appetite 支持帶。",
    "2,830 / 2,865 是反彈阻力；小型股未追上前，升市 breadth 仍不健康。",
  ],
  [
    "10Y yield",
    "5.25% 以下會幫估值喘息；若回到 5.20% 下方，growth 可修復。",
    "5.35% 是今日壓力高位；重新突破會令 equities 再次受壓。",
  ],
  [
    "WTI / Brent",
    "WTI $88 / Brent $100 是通脹預期分水嶺。",
    "Brent $102-$105 會重新刺激 inflation premium；WTI $90 亦是心理阻力。",
  ],
  [
    "BTC",
    "$82,000 是第一重要支持；再穿看 $80,000。",
    "$85,000 變成短線反彈阻力；要回復 risk-on，先要重新企上 $85k。",
  ],
];

const planRows = [
  [
    "短線",
    "今日不是大跌市，但 breadth 和 Russell 明顯轉弱。倉位上可以保留強勢核心，但不宜因 headline 指數只跌 0.2% 而忽略下面的壓力。",
  ],
  [
    "板塊",
    "偏防守：XLV、XLP、XLU 相對穩；避免追 Industrials / Materials / Real Estate 反彈，除非 10Y 明顯跌回 5.25% 以下。",
  ],
  [
    "Macro",
    "三個開關：10Y 5.35%、Brent $100、FedWatch 10 月加息機率。只要 10Y 不再破高，市場仍可以做高位整固。",
  ],
  [
    "個股",
    "強者看 MU / AMZN / AAPL / GOOGL 能否延續；弱者看 CAT、META、BULL 有沒有進一步拖累情緒。",
  ],
  [
    "Crypto",
    "BTC 跌穿 $85k 後先當反彈市處理；ETH / SOL 跌幅更大，除非 BTC 企回 $85k，否則不要急於加高 beta。",
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

export default function USCloseBrief20261007() {
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
          {reportDate} 收市｜紀錄高位後回吐：長債息再抽升，防守板塊頂住，
          小型股與工業股受壓
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
            今日係「紀錄高位後遇到長息壓力」：前一日 S&P 500 同 Nasdaq
            創高，週三 10Y yield 又抽到 2002 年以來高位附近，資金就先由高
            beta、小型股、工業及材料撤一撤。跌幅不算大，但 breadth 明顯差過
            headline 指數。
          </p>
          <h3>資金點諗</h3>
          <ul>
            <li>
              沽 rate-sensitive：Russell 2000、Real Estate、Industrials
              跌幅較大， 反映融資成本壓力回來。
            </li>
            <li>
              買防守：Health Care 領先，Utilities / Staples 跌幅輕，市場不是全面
              risk-on。
            </li>
            <li>
              Mega-cap 未崩：AAPL、AMZN、GOOGL 仍升，Nasdaq 只微跌；但 META、
              NVDA、TSLA 回吐提醒估值敏感。
            </li>
            <li>
              Fed minutes 未帶來寬鬆訊號：文件支持年底前仍可能再加息，市場只是押
              10 月未必即刻郁。
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
                      className={`tag ${
                        state === "最強" || state === "強" || state === "偏強"
                          ? "green"
                          : state === "中性" || state === "中性偏弱"
                            ? "amber"
                            : "red"
                      }`}
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
            Sector 口徑：以 Yahoo Finance chart/regularMarketPrice 的 SPDR
            sector ETF 作 proxy；若與新聞 sector index
            有輕微差異，優先保留方向與 ETF 百分比，並在來源列明。
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
              <span className="tag green">綠</span> Health Care：XLV +1.03%，
              防守資金最明顯。
            </li>
            <li>
              <span className="tag amber">黃</span> Mega-cap：AAPL / AMZN /
              GOOGL 升，但 META / NVDA / TSLA 回吐。
            </li>
            <li>
              <span className="tag amber">黃</span> VIX：約
              15.08，仍低於恐慌區， 但 breadth 已轉差。
            </li>
            <li>
              <span className="tag red">紅</span> Small caps：Russell -1.31%，
              對長息最敏感。
            </li>
            <li>
              <span className="tag red">紅</span> Industrials / Materials： XLI
              -2.18%、XLB -1.51%，cyclicals 被沽。
            </li>
            <li>
              <span className="tag red">紅</span> Crypto：BTC / ETH / SOL
              全線跌，alt beta 跌幅更大。
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
                <th>對 10/06 20:00 UTC</th>
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
            口徑：直接 Binance spot API 在此環境受地區限制，因此採 Binance
            Vision public data API 1-minute kline；時間點為 2026-10-07 20:00:00
            UTC， 即美股正常收市 4:00pm ET 附近。對比基準為上一個美股交易日
            2026-10-06 20:00:00 UTC。
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
            最終觀點：今日係健康但要留神的高位回吐，不是失控式
            risk-off。大市仍在高位， 但 Russell、Industrials、Materials 和
            Crypto 告訴你，長息壓力已經重新影響 market breadth。操作上，唔好同
            10Y 對賭；如果 10Y 回落，高質 mega-cap 可守， 但如果 10Y 再破
            5.35%，先減高 beta。
          </p>
        </article>

        <article className="card wide">
          <h2>12. 來源、口徑與免責聲明</h2>
          <p className="note">
            數據衝突處理：指數收市採 AP 精確終值，並與 Reuters market close
            核對；Reuters 早段/初值與 AP 終值有細微差異時，採 AP。Sector /
            個股採 Yahoo Finance chart/regularMarketPrice 作收市 proxy，並以
            CNBC / Reuters 新聞解釋事件。美債採 CNBC intraday 高位與 Yahoo
            收市口徑。油價採 Reuters settle。黃金與 DXY 列明現貨 / futures /
            market summary 差異。VIX 因 Cboe 官方 CSV 在執行時只更新至
            10/06，10/07 暫用 Yahoo close 並標明待核。 Crypto 採 Binance Vision
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
