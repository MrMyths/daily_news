import React from "react";

const reportDate = "2026-07-07";
const publishedAt = "香港時間 2026-07-08 07:00";

const sources = [
  {
    name: "AP via Barchart - AI stocks sink and drag markets lower worldwide",
    url: "https://www.barchart.com/story/news/3153642/asian-markets-retreat-after-rebounding-ai-stocks-send-the-sp-500-to-brink-of-a-new-record",
  },
  {
    name: "Investopedia - Markets News, July 7, 2026",
    url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-07072026-12013187",
  },
  {
    name: "CNBC - U.S. Treasury yields, 30-year trading above 5%",
    url: "https://www.cnbc.com/2026/07/07/us-treasury-yields-investors-await-trade-deficit-data-.html",
  },
  {
    name: "Federal Reserve - H.15 Selected Interest Rates",
    url: "https://www.federalreserve.gov/releases/h15/",
  },
  {
    name: "U.S. Census / BEA - U.S. International Trade in Goods and Services, May 2026",
    url: "https://www.census.gov/foreign-trade/Press-Release/current_press_release/ft900.pdf",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "Samsung Global Newsroom - Q2 2026 earnings guidance",
    url: "https://news.samsung.com/global/samsung-electronics-announces-earnings-guidance-for-second-quarter-2026",
  },
  {
    name: "Washington Examiner - U.S. rescinds Iran oil waivers after Hormuz attacks",
    url: "https://www.washingtonexaminer.com/news/world/4639510/us-rescind-oil-waiver-iran/",
  },
  {
    name: "Yahoo Finance chart API - market, ETF and stock closing prices",
    url: "https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "Dow Jones",
    "52,925.15",
    "-130.76 / -0.25%",
    "早段曾創即市新高，但收市倒跌；old economy 權重相對抗跌，跌幅細過 Nasdaq。",
  ],
  [
    "S&P 500",
    "7,503.85",
    "-33.58 / -0.45%",
    "貼近 7,500 收市，AP 指雖然多數成份股上升，但 AI/晶片跌幅拖低指數。",
  ],
  [
    "Nasdaq Composite",
    "25,818.69",
    "-302.47 / -1.16%",
    "AI / memory / chip 股急回，令 Nasdaq 成三大指數最弱。",
  ],
  [
    "Russell 2000",
    "2,982.49",
    "-27.05 / -0.90%",
    "小型股亦回落，但焦點仍是科技與油價推高通脹風險。",
  ],
  [
    "VIX",
    "16.13",
    "+0.56 / +3.60%",
    "波幅升但未恐慌；市場由追 AI 轉為先減高 beta。",
  ],
];

const sectorRows = [
  [
    "Energy / XLE",
    "$54.64 / +2.84%",
    "綠燈",
    "Hormuz 船隻遇襲及伊朗油務豁免撤銷推高油價，能源成最清晰避風港。",
  ],
  [
    "Health Care / XLV",
    "$164.44 / +1.53%",
    "綠燈",
    "防守資金流入，加上 CRNX 併購消息帶動 biotech 情緒。",
  ],
  [
    "Real Estate / XLRE",
    "$44.89 / +1.35%",
    "中性偏強",
    "雖然長債息升，板塊仍反彈；要觀察 10Y 若企 4.55% 會否再壓 REITs。",
  ],
  [
    "Consumer Staples / XLP",
    "$84.86 / +0.90%",
    "中性偏強",
    "風險胃納下降時有防守買盤，表現明顯好過 discretionary。",
  ],
  [
    "Utilities / XLU",
    "$45.70 / +0.88%",
    "中性偏強",
    "防守屬性抵消利率壓力，但 30Y yield 重上 5% 附近限制上行。",
  ],
  [
    "Communication Services / XLC",
    "$111.02 / +0.73%",
    "中性",
    "META、GOOGL 偏強令 XLC 逆市升，不過整體 risk-off 不宜過度解讀。",
  ],
  [
    "Financials / XLF",
    "$56.05 / -0.16%",
    "中性",
    "JPM 微升但板塊幾乎持平；利差/資本市場活躍度仍是下一步重點。",
  ],
  [
    "Consumer Discretionary / XLY",
    "$117.39 / -0.53%",
    "中性偏弱",
    "Tesla -4.02% 拖低，油價和長息上升令消費 growth 估值承壓。",
  ],
  [
    "Materials / XLB",
    "$51.51 / -0.90%",
    "紅燈",
    "美元與長息偏強，加上全球風險胃納轉弱，周期材料跟跌。",
  ],
  [
    "Industrials / XLI",
    "$182.38 / -1.71%",
    "紅燈",
    "CAT -3.07%，貿易赤字擴大及全球風險事件令周期工業被沽。",
  ],
  [
    "Technology / XLK",
    "$179.18 / -2.39%",
    "強紅",
    "AI 投資回報與 memory cycle 憂慮升溫，tech 成今日最大拖累之一。",
  ],
  [
    "Semiconductors / SOXX",
    "$551.69 / -5.13%",
    "最弱",
    "Samsung 業績好但股價跌，市場擔心 AI spending peak；AMD、INTC、MU、WDC 急跌。",
  ],
];

const stockRows = [
  [
    "INTC / AMD / WDC / MRVL",
    "INTC -9.66%；AMD -6.51%；WDC -7.86%；MRVL -7.45%",
    "Samsung 初步營業利潤創紀錄，但市場當成 memory cycle 高位警號；AI hardware 被集體獲利回吐。",
  ],
  [
    "MU / SNDK / SOXX",
    "MU -4.71%；SNDK -7.26%；SOXX -5.13%",
    "記憶體鏈條是全日最大壓力點，費半/半導體 ETF 明顯弱過大市。",
  ],
  [
    "NVDA / AVGO",
    "NVDA +0.71%；AVGO -0.83%",
    "AI leadership 不是全線崩，Nvidia 仍收升；但 broad chip breadth 轉差，不能只看一隻龍頭。",
  ],
  [
    "SPCX / SpaceX",
    "$149.47 / -6.83%",
    "納入 Nasdaq 100 的好消息已被 price-in，正式生效日反而 sell the news，跌穿 $150 附近。",
  ],
  [
    "TSLA / RIVN",
    "TSLA -4.02%；RIVN -18.12%",
    "高 beta EV 明顯受壓；Rivian 發股攤薄消息令跌幅放大。",
  ],
  [
    "META / AMZN / MSFT / GOOGL",
    "META +2.55%；AMZN +0.75%；MSFT +0.54%；GOOGL +0.16%",
    "Magnificent Seven 並非全面弱，平台股有承接，所以今日不是單純 mega-cap selloff。",
  ],
  [
    "XOM / Energy",
    "XOM +3.85%；XLE +2.84%",
    "油價急升直接利好大型能源股，是今日板塊輪動最清楚的一邊。",
  ],
  [
    "CRNX / VRTX",
    "CRNX +98.74%；VRTX -1.39%",
    "Vertex 宣布以每股 $85 現金收購 Crinetics，目標股急升，買方小跌。",
  ],
  [
    "JPM / CAT",
    "JPM +0.44%；CAT -3.07%",
    "金融相對穩，工業回落；市場更偏向買 defensive/energy，賣周期與 AI 高 beta。",
  ],
];

const macroRows = [
  [
    "Treasury yields",
    "CNBC：2Y 4.179%、10Y 4.545%、30Y 5.053%；Fed H.15 截稿最新官方表只列至 7/6：2Y 4.13%、10Y 4.48%、30Y 4.99%",
    "長端重上 5% 附近，反映油價/通脹風險回來；官方 H.15 有延遲，所以本文列 CNBC 即時口徑並保留 Fed 口徑差異。",
  ],
  [
    "Oil / Hormuz",
    "AP：Brent +3% settle $74.16；Investopedia 4pm ET 顯示 WTI 約 $71.90、Brent 約 $75.70；盤後消息曾推 WTI/Brent 升逾 5%",
    "三艘船在 Hormuz 附近遇襲，加上美國撤銷伊朗油務豁免，市場重新買入 energy inflation premium。",
  ],
  [
    "DXY / 美元",
    "Yahoo DXY 7/6 close 100.85；7/7 盤中約 101.11-101.20；Herald/CNN 口徑指 DXY close 約 101.078",
    "美元未爆升，但高油價與高 yields 支持避險美元，對金價和海外收入型股票有壓力。",
  ],
  [
    "Gold",
    "多個來源顯示 spot gold 約 $4,108-$4,125 區間，Herald 指 $4,108.70 / -1.4%；Yahoo 期金 7/8 early close $4,130.80",
    "金價受美元與 real yield 壓住；不同來源因 spot/futures 與時間點不同而有差異。",
  ],
  [
    "Trade deficit",
    "Census/BEA：May deficit $77.6B，較修訂後 April $54.6B 擴大 $23.0B；imports $395.3B、exports $317.7B",
    "AI/資本品進口強，短線對 GDP 有拖累；同時反映 AI capex 需求仍在，但市場開始質疑回報率。",
  ],
  [
    "FedWatch",
    "Investing.com 4:45pm ET：7/29 hold 72.3%、hike 27.7%；9/16 hold 38.5%、+25bp 48.5%、+50bp 12.9%",
    "市場仍未排除再加息，油價急升會令 Warsh Fed 更難轉鴿。",
  ],
  [
    "Samsung Q2 guidance",
    "Samsung 官方：Q2 sales 約 KRW 171T、operating profit 約 KRW 89.4T；較 2025 Q2 operating profit KRW 4.68T 大幅上升",
    "數字很強，但市場反而擔心 memory cycle 已到 peak rate of change，這正是今日 chip selloff 觸發點。",
  ],
  [
    "FOMC minutes / events",
    "CNBC：市場等 7/8 FOMC minutes；同時關注 NATO summit、weekly claims、existing home sales",
    "短線交易焦點由 earnings 轉向 geopolitics + Fed reaction function。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$63,840.01",
    "+0.22% vs 7/6 20:00 UTC",
    "Binance data-api 1m kline：2026-07-07 20:00:00 UTC close，即美股 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$1,789.88",
    "-0.17% vs 7/6 20:00 UTC",
    "ETH 微跌，反映 crypto 未跟隨 Nasdaq 大幅 risk-off，但亦未能突破。",
  ],
  [
    "SOLUSDT / SOL",
    "$81.39",
    "-0.72% vs 7/6 20:00 UTC",
    "SOL 回吐較多；$80-$82 是短線 risk appetite 觀察位。",
  ],
];

const notes = [
  "美股三大指數收低：Dow -0.25% 至 52,925.15，S&P 500 -0.45% 至 7,503.85，Nasdaq -1.16% 至 25,818.69。",
  "跌市主因是 AI/晶片高位回吐：Samsung 業績指引超強，但市場反而擔心 memory / AI capex 週期進入「增速見頂」。",
  "Hormuz 風險重新升溫，美國撤銷伊朗油務豁免，Brent settle $74.16，能源股逆市跑出。",
  "債息抽高令壓力加劇：CNBC 報 10Y 4.545%、30Y 5.053%，高長息壓住高估值 tech。",
  "Crypto 用 Binance 4:00pm ET 附近價格：BTC $63,840.01、ETH $1,789.88、SOL $81.39；整體只是小幅波動。",
];

const technicalLevels = [
  [
    "Dow Jones",
    "52,800 / 53,300",
    "Dow 即市創高後倒跌，53,300 變短線阻力；52,800 是昨日突破後的第一支持。",
  ],
  [
    "S&P 500",
    "7,500 / 7,550",
    "收 7,503.85，剛守 7,500；若跌穿，下一步看 7,450-7,480 區間。",
  ],
  [
    "Nasdaq Composite",
    "25,800 / 26,000",
    "收 25,818.69，貼近 25,800；要重上 26,000 才算 AI selloff 初步止血。",
  ],
  [
    "Russell 2000",
    "2,950 / 3,000",
    "3,000 失守，breadth 需要重上整數位才算恢復；2,950 是短線風險線。",
  ],
  [
    "SOXX",
    "$540 / $560",
    "SOXX 跌穿 $560 後要看 $540 支持；若不能快速收復，AI hardware 會進入更長整固。",
  ],
  [
    "10Y Treasury",
    "4.50% / 4.55%",
    "10Y 企穩 4.55% 以上會繼續壓 growth multiple；跌回 4.50% 下方才有 relief。",
  ],
  [
    "WTI / Brent",
    "$72 / $76",
    "油價若守在 4pm ET 高位附近，通脹風險會留在台面；回落才可緩和債息壓力。",
  ],
  [
    "BTC",
    "$63,500 / $64,500",
    "BTC 未跟 Nasdaq 大跌是好事；若升穿 $64.5k，代表 crypto 風險胃納仍有承接。",
  ],
];

const watchList = [
  "7/8 FOMC minutes：市場會找 Warsh Fed 是否真的更少 forward guidance、更多 data dependence。",
  "Hormuz / Iran headline：若油價再升，能源股會續強，但大市估值會受 inflation risk 壓住。",
  "Samsung full earnings 前的 memory pricing 討論：留意 MU、WDC、SNDK、INTC、AMD 能否止跌。",
  "Nasdaq 100 / QQQ 技術：SpaceX 加入指數後未能帶來被動資金追買，要看是否成 sell-the-news 拐點。",
  "10Y 4.55% 和 30Y 5.05%：長息若再上，real estate、utilities、mega-cap tech 都會受壓。",
  "週四 jobless claims / existing home sales：若數據太強，會加深 Fed hike 風險；太弱則加 recession noise。",
  "Crypto：BTC $63.5k、ETH $1.78k、SOL $80 是短線風險胃納觀察位。",
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

export default function USCloseBrief20260707() {
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
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 48%, #7f1d1d 100%);
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
        h3 { font-size: 19px; margin: 18px 0 8px; color: #b91c1c; }
        ul { padding-left: 22px; margin: 10px 0; }
        li { margin: 8px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 15px; }
        th {
          background: #eff6ff;
          color: #1e40af;
          text-align: left;
          padding: 10px;
          border-bottom: 1px solid #bfdbfe;
        }
        td { padding: 11px 10px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
        .callout {
          border-left: 5px solid #dc2626;
          background: #fef2f2;
          padding: 14px 16px;
          border-radius: 14px;
          margin: 14px 0;
        }
        .red { color: #b91c1c; font-weight: 700; }
        .green { color: #047857; font-weight: 700; }
        a { color: #1d4ed8; text-decoration: none; }
        .small { color: #64748b; font-size: 14px; }
      `}</style>

      <header className="hero">
        <div className="eyebrow">美股收盤懶人包｜完整版</div>
        <h1>AI 晶片急回，油價同長債息一齊抽高</h1>
        <p className="subtitle">
          7 月 7 日美股由高位回落：Dow 早段創高後倒跌 130 點，S&P 500 貼住
          7,500，Nasdaq 跌 1.16%。主線是 Samsung 業績好但引發 memory cycle
          見頂擔心，加上 Hormuz 風險推高油價與長債息。
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
            今日結論：這不是普通調整，而是「AI 高估值 + 油價通脹 +
            長息」三件事同時壓市。
            防守/能源有資金，半導體先當整固處理，不宜急住撈最弱一批。
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
              AP 指 S&P 500 雖然多數股份上升，但 AI
              相關跌幅夠大，足以拖低整體指數；所以 breadth 比 headline index
              其實好少少。
            </li>
            <li>
              Nasdaq 跌幅明顯大過 Dow，代表壓力集中在高估值、AI capex、memory
              cycle 這條鏈。
            </li>
            <li>
              Energy、health care、staples、utilities
              逆市或相對強，說明資金不是全面撤出，而是由高 beta 轉到 defensive /
              inflation hedge。
            </li>
            <li>
              VIX 只升至 16.13，仍未是 panic；更像是 crowded AI trade
              的去槓桿與重新定價。
            </li>
          </ul>
        </Card>

        <Card title="4｜板塊紅綠燈">
          <DataTable
            headers={["板塊 / ETF proxy", "變動", "訊號", "一句講晒"]}
            rows={sectorRows}
          />
          <p className="small">
            板塊 proxy 使用 Yahoo Finance chart close；SOXX 不是 S&P 500
            sector，但保留作 AI hardware 溫度計。新聞敘事以 AP / Investopedia
            交叉核對。
          </p>
        </Card>

        <Card title="5｜點解今日會跌？">
          <h3>Samsung 業績好，點解晶片股反而跌？</h3>
          <ul>
            <li>
              Samsung 官方指 Q2 operating profit 約 KRW
              89.4T，按年大升；正常應該是利好，但市場更關心 AI memory 價格和
              capex 增速是否已到高位。
            </li>
            <li>
              AP 指 AMD -6.5%、Intel -9.7%、Micron -4.7% 是大市主要拖累；Yahoo
              close 亦顯示 SOXX -5.13%。
            </li>
            <li>
              白話講：好消息已經反映在估值，投資者開始問「之後仲有幾多
              upside？」。
            </li>
          </ul>
          <h3>油價升，點解會拖累 growth？</h3>
          <ul>
            <li>
              Hormuz 附近船隻遇襲，美國撤銷伊朗油務豁免，令油價 risk premium
              回來。
            </li>
            <li>
              高油價會推高通脹預期，CNBC 同日報 10Y 4.545%、30Y
              5.053%；長息高，growth multiple 自然受壓。
            </li>
            <li>
              所以今日 market map 是：energy 綠、defensive 企穩、semis 和 high
              beta 紅。
            </li>
          </ul>
        </Card>

        <Card title="6｜宏觀白話版">
          <DataTable headers={["項目", "數據", "解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：市場原本想交易「NFP 轉弱、Fed
            可以耐心」，但油價和長息突然提醒大家， Warsh Fed 仍要看
            inflation。這令高估值 AI 股的容錯率下降。
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
            Crypto 採 Binance data-api 1-minute kline，時間點為 2026-07-07
            20:00:00 UTC（美股 4:00pm ET 附近）；對比基準為 2026-07-06
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
              先看 S&P 500 7,500 和 Nasdaq 25,800
              是否守住；若半導體未止跌，反彈容易只是技術性。
            </li>
            <li>
              <strong>中線：</strong>
              AI 主線未死，但「估值 + capex 回報 + memory cycle」會成為 7 月
              earnings season 的主題， 倉位要由單邊追高改成分批和有止蝕。
            </li>
            <li>
              <strong>風控：</strong>若 10Y 企穩 4.55%、Brent 逼近 $76-$80、SOXX
              跌穿 $540 或 VIX 升穿 18，要降低高 beta 曝險。
            </li>
            <li>
              <strong>一句到尾：</strong>
              今日不是市場崩盤，而是 crowded AI trade
              被油價與長息打斷；下一步要看 FOMC minutes 能否幫市場降溫。
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
              指數收市：AP/Barchart、Investopedia 與 Yahoo chart 對 Dow
              52,925.15、S&P 500 7,503.85、Nasdaq 25,818.69
              口徑一致，本文採此為主。
            </li>
            <li>
              Russell 2000、sector ETF 與個股：使用 Yahoo chart close
              計算日變動，並以 AP/Investopedia 對主要方向交叉核對。
            </li>
            <li>
              債息：CNBC/Tradeweb 為 7/7 即時交易口徑；Fed H.15 截稿時官方
              current release 表格只更新到 7/6，故本文明確列出差異。
            </li>
            <li>
              油價：AP 採 Brent settle $74.16；Investopedia 4pm ET 報 WTI/Brent
              約 $71.90/$75.70； 盤後消息與 TradingKey 顯示升幅逾
              5%，本文把盤後數字當 headline risk，不混作正式 settle。
            </li>
            <li>
              Gold / DXY：不同來源因
              spot、futures、收市與盤後時間點不同而有差異，本文用區間和方向處理。
            </li>
            <li>
              Crypto：直接 Binance spot API 如受地區限制，本文使用 Binance
              data-api 1m kline， 精確取 2026-07-07 20:00 UTC close。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
