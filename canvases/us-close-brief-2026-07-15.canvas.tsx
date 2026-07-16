import React from "react";

const reportDate = "2026-07-15";
const publishedAt = "香港時間 2026-07-16 07:00";

const sources = [
  {
    name: "AP - How major US stock indexes fared Wednesday 7/15/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-a4f50a9a19d14802cb94b51db7bafba1",
  },
  {
    name: "CNBC - Stock market news for July 15, 2026",
    url: "https://www.cnbc.com/2026/07/14/stock-market-today-live-updates.html",
  },
  {
    name: "Investopedia - Markets News, July 15, 2026",
    url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-07152026-12019579",
  },
  {
    name: "Sharecast/LSE - US close: Stocks finish higher as cooling inflation offsets Iran tensions",
    url: "https://www.lse.co.uk/news/us-close-stocks-finish-higher-as-cooling-inflation-offsets-iran-tensions-e0c9crjy4uffz1h.html",
  },
  {
    name: "BLS - Producer Price Index News Release, June 2026",
    url: "https://www.bls.gov/news.release/archives/ppi_07152026.htm",
  },
  {
    name: "Federal Reserve - H.15 Selected Interest Rates",
    url: "https://www.federalreserve.gov/releases/h15/default.htm",
  },
  {
    name: "CNBC - Treasury yields react to producer-price inflation data",
    url: "https://www.cnbc.com/2026/07/15/treasury-yields-investors-producer-price-inflation-data.html",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "CME Group - FedWatch Tool",
    url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  },
  {
    name: "Cboe - VIX Volatility Products",
    url: "https://www.cboe.com/tradable-products/vix/",
  },
  {
    name: "Reuters via Channel NewsAsia - Stripe, Advent offer to buy PayPal",
    url: "https://www.channelnewsasia.com/business/exclusive-stripe-advent-offer-buy-paypal-more-53-billion-sources-say-6255126",
  },
  {
    name: "CNBC - Morgan Stanley Q2 2026 earnings",
    url: "https://www.cnbc.com/2026/07/15/morgan-stanley-ms-earnings-q2-2026-.html",
  },
  {
    name: "Reuters via SRN - BlackRock assets hit record $15 trillion",
    url: "https://srnnews.com/blackrock-assets-hit-record-15-trillion-on-boost-from-buoyant-markets-etf-inflows/",
  },
  {
    name: "Motley Fool - Stock Market Today, July 15",
    url: "https://www.fool.com/coverage/stock-market-today/2026/07/15/stock-market-today-july-15-markets-rise-on-cooler-inflation-and-strong-earnings-start/",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "Dow Jones",
    "52,658.64",
    "+150.37 / +0.29%",
    "藍籌跟升但唔算爆發；銀行業績與 Apple/Microsoft 支撐，抵消部分醫療、工業與 chip 壓力。",
  ],
  [
    "S&P 500",
    "7,572.40",
    "+28.81 / +0.38%",
    "連續受 CPI/PPI 降溫支持，企穩 7,550 之上，市場暫時相信 Fed 近端加息風險下降。",
  ],
  [
    "Nasdaq Composite",
    "26,269.23",
    "+162.22 / +0.62%",
    "大型平台科技股撐住指數，雖然半導體/記憶體明顯回吐，Nasdaq 仍跑贏 Dow。",
  ],
  [
    "Russell 2000",
    "2,976.26",
    "+11.50 / +0.39%",
    "小型股跟隨 risk-on 反彈，但仍未上破 3,000；breadth 改善但未算全面爆升。",
  ],
  [
    "VIX",
    "15.67",
    "-0.83 / -5.03%",
    "Cboe/Yahoo/Investing 口徑一致顯示波動率回落；保護需求下降，是今日風險胃納改善的重要訊號。",
  ],
];

const sectorRows = [
  [
    "Communication Services",
    "+2.69%（Motley Fool 收市口徑）",
    "領先",
    "Alphabet、Meta 等平台股有買盤；Investopedia 盤中亦指通訊服務領漲。",
  ],
  [
    "Mega-cap Tech",
    "AAPL 約 +4%、AMZN/GOOG 約 +3%、MSFT 近 +3%（CNBC）",
    "支撐指數",
    "資金由高波動 semis 轉入更大型、更有盈利能見度的平台科技。",
  ],
  [
    "Semiconductors / SMH / SOX",
    "SMH 跌逾 1%；TradingKey 指 SOX -2.08% 至 12,398.89",
    "轉弱",
    "Micron -8%、AMD -3%、Intel -4% 一帶；AI hardware 仍熱，但 memory/chip 交易開始獲利回吐。",
  ],
  [
    "Financials / asset managers",
    "BLK +6.5% 至 +7%；MS 小升；PayPal +17%",
    "業績/併購推動",
    "BlackRock、Morgan Stanley beat，PayPal 受 Stripe/Advent 收購報道刺激，金融與 fintech 成為風險胃納來源。",
  ],
  [
    "Energy / Oil beta",
    "WTI $80.35；Brent 約 $85.5 附近，不同來源介乎 $84.95-$85.68",
    "油升但股分化",
    "中東/伊朗風險推高油價；但 Investopedia 盤中曾見能源股跑輸，油價升未必即時等於能源股全面升。",
  ],
  [
    "Health Care",
    "JNJ 約 -2.7%；ELV -8.5%",
    "跑輸",
    "Johnson & Johnson 雖 beat 但股價跌，Elevance Health 大跌，拖累 defensive/health care 情緒。",
  ],
  [
    "Consumer / travel / leisure",
    "Reuters 指 consumer-focused retail、travel/leisure 表現較好；LCID +29%（Motley）",
    "選擇性反彈",
    "PPI 降溫支持消費 beta，但油價與燃油成本仍是未來壓力。",
  ],
  [
    "Defensives / REITs / Utilities",
    "暫無可靠收市百分比",
    "中性偏弱",
    "10Y 仍在 4.55% 附近，收益型板塊未有明顯優勢；缺精準收市數字，本文不硬填。",
  ],
];

const stockRows = [
  [
    "AAPL / AMZN / GOOG / MSFT",
    "Apple 約 +4% 創新高；Amazon、Alphabet 約 +3%；Microsoft 近 +3%（CNBC）",
    "大市升幅主要由大型平台科技支撐，資金偏好盈利能見度高、AI/雲端故事更清晰的巨企。",
  ],
  [
    "PYPL",
    "+17% 至 +18% 區間；LSE 表列 $55.52 / +18.03%",
    "Reuters/CNBC 指 Stripe 與 Advent 提出每股 $60.50、逾 $53B 收購 PayPal 的現金方案，較前收市溢價約 28%。",
  ],
  [
    "BLK / MS",
    "BLK +6.5% 至 +7%；MS 小升/盤前 +1%",
    "BlackRock EPS $13.91 beat、AUM 約 $15.34T；Morgan Stanley EPS $3.46、收入 $21.35B，均高過 LSEG 預期。",
  ],
  [
    "MU / AMD / INTC / LRCX",
    "Micron -8%；AMD 約 -3%；Intel -4%；Lam Research 約 -3%（CNBC）",
    "半導體不是全面 risk-on：記憶體與 chip beta 在前期急升後被沽，SMH/SOX 跑輸大市。",
  ],
  [
    "JNJ / ELV / PNR",
    "JNJ 約 -2.7%；ELV -8.5%；Pentair -15%",
    "醫療與個別工業/水處理名字有壓力；即使業績 beat，市場仍會懲罰指引、margin 或產品週期疑慮。",
  ],
  [
    "SPCX",
    "約 -2%，一度跌穿 $135 IPO 價（CNBC/Investopedia）",
    "高估值新上市 story 股繼續受壓，市場雖 risk-on，但不再無差別追高。",
  ],
  [
    "IBM",
    "前日 -25% 後今日再跌近 3%（Investopedia）",
    "企業客戶 capex 轉向 servers/storage/memory 的警號未散，enterprise software 仍被重新估值。",
  ],
  [
    "LCID / consumer risk proxy",
    "+29%（Motley Fool）",
    "否認破產傳聞後急彈，反映部分高 beta 名字有 squeeze，但這類升幅更偏消息與倉位驅動。",
  ],
];

const macroRows = [
  [
    "PPI / inflation",
    "BLS：June final demand PPI -0.3% m/m、+5.5% y/y；goods -1.4%、energy -6.4%；core less food/energy/trade +0.1% m/m、+5.1% y/y",
    "批發通脹意外回落，接住前一日 CPI 降溫，市場即時降低 7 月再加息的恐懼。",
  ],
  [
    "FedWatch / rate pricing",
    "Investing Fed Monitor 7/15 11:45am EDT：7/29 hold 87.8%、+25bp 12.2%；CNBC 指 10 月仍近 60% 機率高 25-50bp",
    "短線 hold 機率上升，但年內是否再加息仍未完全解除，因油價與核心通脹仍高過 Fed 目標。",
  ],
  [
    "Treasury yields",
    "CNBC：10Y 4.555%（-3bp）、2Y 4.145%（-4bp+）；Fed H.15 7/15 close：2Y 4.21%、10Y 4.56%、30Y 5.06%",
    "即時市場與官方 3:30pm curve 有小差異；共同訊號是債息回落，尤其短端對 Fed pricing 更敏感。",
  ],
  [
    "Oil / Middle East",
    "Investing WTI historical：$80.35 / +1.27%；Sharecast/Investopedia/CNBC 報 Brent 約 $85.5 附近",
    "美軍再打擊伊朗相關目標、Hormuz 風險仍在，油價是 CPI/PPI 利好以外最大反向風險。",
  ],
  [
    "DXY / 美元",
    "Investopedia：DXY 約 100.52 / -0.4%（4pm ET 附近）",
    "美元跟隨短端利率回落，有利風險資產與 crypto；但地緣避險令跌幅未必可線性延續。",
  ],
  [
    "Gold",
    "Motley Fool：$4,060.78 / -0.05%；Investopedia：gold futures 約 $4,060 / -0.2%",
    "金價未有因地緣風險大升，反而受高 real yield 與資金轉向股票影響，短線較橫行。",
  ],
  [
    "Volatility",
    "Cboe：VIX 15.67 / -5.03%，prev close 16.50",
    "波動率下降支持 risk-on；若重新升穿 18，代表市場再度買保護。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$64,939.99",
    "+0.58% vs 7/14 20:00 UTC",
    "Binance Vision data-api 1m kline：2026-07-15 20:00:00 UTC close，即美股 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$1,923.21",
    "+2.45% vs 7/14 20:00 UTC",
    "ETH 彈力繼續較高，受美元回落與 risk appetite 改善支持。",
  ],
  [
    "SOLUSDT / SOL",
    "$77.18",
    "+0.03% vs 7/14 20:00 UTC",
    "SOL 基本持平，短線仍卡在 $77 附近；要升穿 $78-$80 才算重新加速。",
  ],
];

const notes = [
  "美股連升：Dow +150.37 至 52,658.64；S&P 500 +0.38% 至 7,572.40；Nasdaq +0.62% 至 26,269.23。",
  "主因是 PPI 意外回落：BLS 報 June final demand PPI -0.3% m/m、+5.5% y/y，接住 CPI 降溫，債息同步下行。",
  "大市不是一面倒：Apple、Amazon、Alphabet、Microsoft 撐市，但 Micron -8%、AMD/Intel/Lam Research 下跌，chip/memory 明顯回吐。",
  "金融與 fintech 有催化：BlackRock/Morgan Stanley 業績 beat，PayPal 因 Stripe/Advent $53B+ 收購報道急升約 17%-18%。",
  "宏觀拉鋸未完：2Y/10Y 即時約 4.145%/4.555%，DXY 約 100.52；但 WTI 約 $80.35、Brent 約 $85.5，油價仍威脅通脹。",
  "Crypto 採 Binance 4:00pm ET 附近價：BTC $64,939.99、ETH $1,923.21、SOL $77.18；ETH 明顯跑贏。",
];

const technicalLevels = [
  [
    "Dow Jones",
    "52,500 / 53,000",
    "收 52,658.64，重上 52,500；若突破 53,000，藍籌動能會更清晰。",
  ],
  [
    "S&P 500",
    "7,550 / 7,600",
    "收 7,572.40，已企上 7,550；下一關係 7,600，跌穿 7,550 則代表 PPI rally 轉弱。",
  ],
  [
    "Nasdaq Composite",
    "26,200 / 26,500",
    "收 26,269.23，守到 26,200；要挑戰 26,500，需要 semis 不再拖後腿。",
  ],
  [
    "Russell 2000",
    "2,950 / 3,000",
    "收 2,976.26，離 3,000 只差一步；突破才確認升勢擴散到小型股。",
  ],
  [
    "VIX",
    "15.5 / 18",
    "15.67 屬低壓區；重上 18 代表油價或地緣風險重新主導。",
  ],
  [
    "SOX / SMH",
    "SOX 12,400 / SMH 跌逾 1%",
    "半導體要先止跌，否則 Nasdaq 升勢會靠少數 mega-cap 硬撐。",
  ],
  [
    "10Y Treasury",
    "4.55% / 4.65%",
    "10Y 即時約 4.555%；跌穿 4.55% 對 growth 更友善，重上 4.65% 會壓估值。",
  ],
  [
    "WTI / Brent",
    "$80 / $85",
    "WTI 已貼近/略高 $80、Brent 約 $85.5；油價企穩此區會削弱通脹降溫故事。",
  ],
  [
    "BTC / ETH",
    "BTC $65k / ETH $1.9k",
    "BTC 4pm ET 約 $64.94k，ETH 約 $1.92k；BTC 企上 $65k、ETH 守 $1.9k 可確認 crypto risk-on。",
  ],
];

const watchList = [
  "零售銷售、初請失業金與後續 Fed 官員講話：確認 PPI/CPI 降溫是否足以令 Fed 7 月按兵不動。",
  "FedWatch 曲線：7 月 hold 雖升至約 88%，但 10 月仍被市場 pricing 有較高加息可能，要留意是否再轉鷹。",
  "油價與 Hormuz/伊朗局勢：Brent 若持續高於 $85-$86，會重新推高 inflation premium。",
  "半導體止跌：Micron、AMD、Intel、Lam Research 與 SMH/SOX 是 Nasdaq 能否延續的關鍵。",
  "大型科技廣度：Apple/Alphabet/Amazon/Microsoft 今日撐市，若只靠四五隻股票，升勢質素會打折。",
  "金融業績第二梯隊：BlackRock、Morgan Stanley beat 後，市場會看更多銀行/資產管理公司能否維持交易收入。",
  "PayPal deal risk：Stripe/Advent 報價未必一定成事，若 PayPal board 不接或融資條件變化，股價可急速回吐。",
  "Crypto：BTC $65k、ETH $1.9k、SOL $77-$78 是短線 risk appetite 防線。",
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

export default function USCloseBrief20260715() {
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
          background: linear-gradient(135deg, #111827 0%, #064e3b 52%, #1d4ed8 100%);
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
        h3 { font-size: 19px; margin: 18px 0 8px; color: #047857; }
        ul { padding-left: 22px; margin: 10px 0; }
        li { margin: 8px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 15px; }
        th {
          background: #ecfdf5;
          color: #065f46;
          text-align: left;
          padding: 10px;
          border-bottom: 1px solid #a7f3d0;
        }
        td { padding: 11px 10px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
        .callout {
          border-left: 5px solid #059669;
          background: #f0fdf4;
          padding: 14px 16px;
          border-radius: 14px;
          margin: 14px 0;
        }
        .small { color: #64748b; font-size: 14px; }
        a { color: #1d4ed8; text-decoration: none; }
      `}</style>

      <header className="hero">
        <div className="eyebrow">美股收盤懶人包｜完整版</div>
        <h1>PPI 意外降溫撐住大市，平台科技升但晶片記憶體回吐</h1>
        <p className="subtitle">
          7 月 15 日美股三大指數再升：June PPI 意外按月下跌，債息與美元回落，
          市場把 7 月加息機率再壓低。不過半導體/記憶體股被獲利回吐、油價仍因
          伊朗與 Hormuz 風險企高，今日更似「大型科技 + 業績 + 併購」撐住的
          選擇性 risk-on。
        </p>
        <div className="meta">
          <span className="pill">交易日：{reportDate}</span>
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">語言：繁體中文 / 廣東話語氣</span>
          <span className="pill">
            Crypto：Binance Vision 20:00 UTC 1m close
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
            今日結論：PPI 幫市場鬆一口氣，S&P 500 企上 7,550、VIX 跌至 15.67，
            風險胃納明顯好過週初；但 chip/memory 被沽、Brent 仍在 $85 附近，
            所以現階段要跟強勢平台科技與業績股，同時避免把反彈解讀成全面解除警報。
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
              AP/CNBC 對三大指數收市口徑一致：S&P 500 +0.38%、Dow +0.29%、
              Nasdaq +0.62%；Reuters/其他稿件有幾點的 preliminary 差距，但方向一致。
            </li>
            <li>
              Russell 2000 +0.39% 至 2,976.26，代表小型股都有跟升；不過仍未突破
              3,000，升勢廣度暫時只算改善，不算全面狂熱。
            </li>
            <li>
              VIX 由 16.50 跌至 15.67，保護需求下降；這是今日 risk-on 的最清楚訊號之一。
            </li>
            <li>
              但市場內部分化大：Communication/mega-cap tech 強，semis/memory 弱，
              healthcare 與部分高估值新股受壓，表示資金仍然好揀擇。
            </li>
          </ul>
        </Card>

        <Card title="4｜板塊紅綠燈">
          <DataTable
            headers={["板塊 / proxy", "變動", "訊號", "一句講晒"]}
            rows={sectorRows}
          />
          <p className="small">
            Yahoo chart API 今次回 429，板塊數字以 CNBC/Motley/Investopedia/TradingKey
            等可讀來源交叉核對；沒有可靠收市百分比的板塊明確寫「暫無可靠數據」。
            SOX/SMH 不是 GICS sector，但保留作 AI hardware 溫度計。
          </p>
        </Card>

        <Card title="5｜點解今日會咁走？">
          <h3>1）PPI 意外跌，短線 Fed hike 壓力再降</h3>
          <ul>
            <li>
              BLS 報 June final demand PPI 按月 -0.3%，市場原本預期大致持平；
              goods -1.4%、energy -6.4% 是主要拖低因素。
            </li>
            <li>
              CNBC 指 10Y yield 跌至約 4.555%、2Y 跌至約 4.145%，FedWatch 顯示
              7 月維持 3.50%-3.75% 的機率升到接近 88%。
            </li>
          </ul>
          <h3>2）大型平台科技托住 Nasdaq</h3>
          <ul>
            <li>
              CNBC 指 Apple 升約 4% 並創新高，Amazon/Alphabet 約 +3%，Microsoft
              近 +3%；資金由較波動的 chip trade 轉到更大型的平台股。
            </li>
            <li>
              這解釋了為何 Nasdaq 能升，但 Micron、AMD、Intel、Lam Research
              同時下跌：科技內部不是同一個故事。
            </li>
          </ul>
          <h3>3）業績與併購幫市場維持風險胃納</h3>
          <ul>
            <li>
              BlackRock 與 Morgan Stanley 均 beat，支持金融與資產管理板塊；
              PayPal 因 Stripe/Advent 收購報道急升，令 fintech 成為焦點。
            </li>
            <li>
              但油價因美伊/Hormuz 風險仍升，代表通脹降溫故事短線有利，
              中線仍要受能源價格考驗。
            </li>
          </ul>
        </Card>

        <Card title="6｜宏觀白話版">
          <DataTable headers={["項目", "數據", "解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：今日 macro 是「PPI 幫 Fed 可以等一等」對「油價可能令通脹返轉頭」的拔河。
            股票今日先買第一句，但如果 Brent 企穩 $85-$86，市場很快會重新討論能源通脹。
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
            Crypto 採 Binance Vision data-api 1-minute kline，時間點為 2026-07-15
            20:00:00 UTC（美股 4:00pm ET 附近）；對比基準為 2026-07-14 20:00:00
            UTC。直接 Binance spot API 如受地區限制，官方 public data/data-api
            是較可重現口徑。
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
              S&P 500 企穩 7,550、VIX 低於 16 是多頭有利；但如果 SOX/SMH
              繼續跌，Nasdaq 升勢會越來越集中，追入要更揀股。
            </li>
            <li>
              <strong>中線：</strong>
              PPI/CPI 連續降溫支持估值，但能源價格仍是最大變數；如果油價高企，
              Fed 可能仍要保持偏鷹語氣。
            </li>
            <li>
              <strong>風控：</strong>
              Brent 企穩 $85-$86、10Y 重上 4.65%、VIX 回到 18 以上，或者
              FedWatch 重新提高 7 月/9 月加息機率，都要降低高 beta 倉位。
            </li>
            <li>
              <strong>一句到尾：</strong>
              今日係「PPI 降溫 + 大型科技撐市 + 金融業績/PayPal 併購」的反彈日；
              可以承認 risk appetite 改善，但半導體回吐同油價壓力話你知，市場仍然未係無腦追高。
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
              指數收市：AP/CNBC/Motley Fool 報 Dow 52,658.64、S&P 500
              7,572.40、Nasdaq 26,269.23；Reuters preliminary 稿曾見 Dow
              52,663.80、S&P 500 7,572.59、Nasdaq 26,268.88。本文採 AP/CNBC
              最終收市口徑。
            </li>
            <li>
              Russell 2000：AP 報 2,976.26、+11.50/+0.4%；另有搜尋摘要顯示
              2,980.95/+0.55%。本文採 AP 主要指數稿。
            </li>
            <li>
              板塊：Yahoo chart API 回 429；本文以 CNBC、Motley Fool、Investopedia、
              TradingKey 與 Benzinga 可讀頁面交叉核對。沒有可靠收市百分比的板塊寫
              「暫無可靠數據」，不以盤中 quote 冒充收市。
            </li>
            <li>
              Treasury：CNBC 是即時盤中/收市附近 quote（10Y 4.555%、2Y 4.145%）；
              Fed H.15 是官方 3:30pm curve（2Y 4.21%、10Y 4.56%、30Y 5.06%）。本文同列兩者並標明口徑。
            </li>
            <li>
              Oil/Gold/DXY：Investopedia、Motley、Sharecast 與 Investing.com 時間戳不同；本文以
              WTI $80.35、Brent 約 $85.5、DXY 100.52、gold 約 $4,060 作收市附近參考，並註明來源差異。
            </li>
            <li>
              Crypto：直接 Binance spot API 受地區限制，本文使用 Binance Vision data-api 1m kline，
              精確取 2026-07-15 20:00 UTC close。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
