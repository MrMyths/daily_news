import React from "react";

const reportDate = "2026-06-12";
const publishedAt = "香港時間 2026-06-15 07:00";

const sources = [
  {
    name: "Yahoo Finance - How major US stock indexes fared Friday 6/12/2026",
    url: "https://finance.yahoo.com/markets/stocks/articles/major-us-stock-indexes-fared-203027763.html",
  },
  {
    name: "Trading Economics - US Stocks Rise on SpaceX Debut and Iran Hopes",
    url: "https://tradingeconomics.com/united-states/stock-market/news/558794",
  },
  {
    name: "CNBC - Treasury yields: traders monitor potential U.S.-Iran peace deal",
    url: "https://www.cnbc.com/2026/06/12/treasury-yields-oil-iran-deal.html",
  },
  {
    name: "University of Michigan - Surveys of Consumers",
    url: "https://www.sca.isr.umich.edu/",
  },
  {
    name: "BLS - Consumer Price Index, May 2026",
    url: "https://www.bls.gov/news.release/cpi.nr0.htm",
  },
  {
    name: "BLS - Producer Price Index, May 2026",
    url: "https://www.bls.gov/news.release/ppi.htm",
  },
  {
    name: "Kraken Blog - CPI, FOMC, and the SpaceX IPO",
    url: "https://blog.kraken.com/economic-brief/june-10-2026",
  },
  {
    name: "Yahoo Finance - Select Sector ETF quote pages",
    url: "https://uk.finance.yahoo.com/quotes/XLE,XLF,XLC,XLRE,XLI,XLK,XLB,XLY,XLV,XLU,XLP/view/fv/",
  },
  {
    name: "StockAnalysis / Yahoo quote pages - ETF and stock closes",
    url: "https://stockanalysis.com/etf/xlv/history/",
  },
  {
    name: "ChartExchange / Yahoo - VIX historical close",
    url: "https://chartexchange.com/symbol/index-vix/historical/",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "S&P 500",
    "7,431.46",
    "+37.16 / +0.50%",
    "再創本輪新高附近，週五升市由油價回落、SpaceX IPO 熱度與 Iran 協議希望推動。",
  ],
  [
    "Dow Jones",
    "51,202.26",
    "+353.51 / +0.70%",
    "企穩 51,000；Goldman Sachs、Verizon、JPMorgan 帶動道指跑贏 Nasdaq。",
  ],
  [
    "Nasdaq Composite",
    "25,888.84",
    "+79.18 / +0.31%",
    "科技股仍升，但 mega-cap 表現分化，升勢不再像前一日完全由半導體爆上帶動。",
  ],
  [
    "Russell 2000",
    "2,943.99",
    "+22.96 / +0.79%",
    "小型股連續受惠 risk-on，亦反映市場不只追大型科技。",
  ],
  [
    "VIX",
    "17.68",
    "-1.76 / -9.05%",
    "Cboe/Yahoo/ChartExchange 歷史數據一致顯示 VIX 跌回 18 以下，恐慌明顯退潮。",
  ],
];

const sectorRows = [
  [
    "Materials / XLB",
    "+1.87%",
    "強綠",
    "週期股受惠油價回落與風險胃納回升；資金由純防守轉向 cyclical recovery。",
  ],
  [
    "Semiconductors / SOXX",
    "約 +1.5%；SMH +1.72%",
    "綠燈",
    "半導體延續反彈但力度較 6/11 放慢；AMD 續強，MU、AVGO 回吐。",
  ],
  [
    "Financials / XLF",
    "+1.37%",
    "綠燈",
    "道指與銀行/券商較強，GS、JPM 被買入；曲線未大幅惡化，risk-on 支持金融。",
  ],
  [
    "Utilities / XLU",
    "+1.09%",
    "防守有承接",
    "債息仍低過週中高位，收益型板塊也有買盤，說明不是單純高 beta 追貨。",
  ],
  [
    "Real Estate / XLRE",
    "+0.98%",
    "綠燈",
    "10Y 大致在 4.4%-4.5% 區間，利率敏感板塊有修復。",
  ],
  [
    "Technology / XLK",
    "+0.87%",
    "溫和綠",
    "科技仍升，但 MSFT/NVDA 只是小升，AAPL、AMZN 跑輸，資金更挑剔。",
  ],
  [
    "Energy / XLE",
    "+0.75%",
    "中性偏綠",
    "油價大跌照理不利能源，但前一日急回後有低吸；仍需留意 Brent/WTI 再跌的盈利壓力。",
  ],
  [
    "Industrials / XLI",
    "+0.59%",
    "溫和綠",
    "SpaceX debut 與風險胃納改善支持工業/航太相關情緒。",
  ],
  [
    "Consumer Staples / XLP",
    "+0.65%",
    "防守跟升",
    "市場全面反彈時 staples 也收綠，反映 broad risk-on 之外仍有防守需求。",
  ],
  [
    "Consumer Discretionary / XLY",
    "+0.26%",
    "中性",
    "Tesla +1.82% 抵消 Amazon 跌幅，但整體消費可選未明顯跑出。",
  ],
  [
    "Health Care / XLV",
    "-0.18%",
    "微紅",
    "避險資金轉走，加上個別藥股拖累，醫療在升市中小幅跑輸。",
  ],
  [
    "Communication Services / XLC",
    "-0.42%",
    "紅燈",
    "Google 小升但 Meta 回落，平台股未能延續前日反彈動能。",
  ],
];

const stockRows = [
  [
    "SPCX / SpaceX IPO",
    "IPO $135；開 $150；收約 $160.95-$161.11，較發行價 +19%",
    "最大 IPO 紀錄級別首日交易成功，短線強化 AI/太空/高增長需求，但估值與抽資風險要留意。",
  ],
  [
    "AMD / AI beta",
    "+4.73% 至 $511.57",
    "半導體內最強之一，延續前日回補，市場仍願意買高 beta AI hardware。",
  ],
  [
    "NVDA / AVGO / MU",
    "NVDA +0.16%；AVGO -0.91%；MU -1.43%",
    "AI 核心股分化：前日大升後，部分半導體獲利回吐，升市不再是全部 chips 一齊爆。",
  ],
  [
    "TSLA",
    "+1.82% 至 $406.43",
    "受 risk-on 與 Musk ecosystem 熱度支持；但 SpaceX 上市後資金會否分流仍是觀察點。",
  ],
  [
    "GOOGL / META",
    "GOOGL +0.53%；META -0.26%",
    "Communication services 分化，XLC 轉弱，說明平台股買盤不算全面。",
  ],
  [
    "AAPL / AMZN",
    "AAPL -1.52%；AMZN -1.23%",
    "兩隻 mega-cap 消費/平台股逆市跌，是 Nasdaq 升幅落後 S&P 的原因之一。",
  ],
  [
    "GS / JPM / VZ",
    "GS +2.57%；JPM +2.25%；VZ +2.49%",
    "Dow 成份股領漲，金融與 defensive telecom 同時有承接，令 Dow 跑贏。",
  ],
  [
    "NKE / MRK",
    "NKE -2.24%；MRK -1.42%",
    "Trading Economics 指兩者是 Dow 主要拖累，反映 consumer discretionary/healthcare 仍有弱點。",
  ],
];

const macroRows = [
  [
    "University of Michigan sentiment",
    "48.9；May 44.8；預期約 46",
    "消費信心由歷史低位反彈，主因汽油價格早段回落；但絕對水平仍低，未代表消費無憂。",
  ],
  [
    "Inflation expectations",
    "1Y 4.6%（前 4.8%）；5Y 3.4%（前 3.9%）",
    "通脹預期回落幫助市場 risk-on，但 1Y 仍偏高，Fed 很難快速轉鴿。",
  ],
  [
    "CPI / PPI",
    "CPI +0.5% MoM / +4.2% YoY；PPI +1.1% MoM / +6.5% YoY",
    "上週通脹數據仍熱，6/12 升市主要因油價和地緣風險折讓下降，不是通脹問題消失。",
  ],
  [
    "2Y / 10Y / 30Y Treasury",
    "CNBC：約 4.087% / 4.483% / 4.972%；Advisor Perspectives：2Y 4.09%、10Y 4.48%",
    "債息較前一日大跌後輕微反彈，仍低於週中壓力位，支持 growth multiple。",
  ],
  [
    "FedWatch / FOMC",
    "6/16-17 FOMC 仍廣泛預期 hold；年內加息風險未消失",
    "Kraken 引述期貨定價：市場已基本 price out 2026 cut，年底至少一次加息機率高於 50%。",
  ],
  [
    "WTI / Brent",
    "WTI $84.88（-3.2%）；Brent $87.33（-3.4%）",
    "CNBC 指油價因 US-Iran 潛在協議回落；這是今日股債同時放鬆的核心。",
  ],
  [
    "Gold",
    "Yahoo quote：Gold futures 約 $4,238.80（+3.03%）",
    "油價跌但金價仍升，代表市場不是完全無風險，只是把 immediate war-risk 降低。",
  ],
  [
    "DXY / 美元",
    "暫無可靠收市數字；Saxo 指 USD rally reversed / 美元回軟",
    "美元沒有權威一致收市價可用，本文只採方向性描述，不硬填精確數字。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "$63,586.21",
    "+0.04% vs 6/11 20:00 UTC",
    "Binance Vision 1m kline：2026-06-12 20:00:00 UTC close，即 4:00pm ET 附近。",
  ],
  [
    "ETHUSDT / ETH",
    "$1,666.01",
    "-0.80% vs 6/11 20:00 UTC",
    "Binance Vision 1m kline；ETH 未有跟足美股 risk-on，仍在低位區上落。",
  ],
  [
    "SOLUSDT / SOL",
    "$66.77",
    "-0.12% vs 6/11 20:00 UTC",
    "Binance Vision 1m kline；SOL 大致橫行，沒有明顯確認美股高 beta 升勢。",
  ],
];

const notes = [
  "美股週五延續反彈：S&P 500 +0.50% 至 7,431.46、Dow +0.70% 至 51,202.26、Nasdaq +0.31% 至 25,888.84。",
  "升市主線是「SpaceX IPO 首日成功 + Iran 協議希望 + 油價再跌」；VIX 由 19.44 再跌至 17.68。",
  "升幅有 breadth：Russell 2000 +0.79%，XLB、XLF、XLU、XLRE 跑贏；但 mega-cap tech 分化，AAPL/AMZN 跌。",
  "University of Michigan 消費信心升至 48.9，1 年通脹預期由 4.8% 降至 4.6%，支持市場淡化最壞通脹情境。",
  "Crypto 用 Binance Vision 4:00pm ET 附近 1 分鐘 K 線：BTC $63,586.21、ETH $1,666.01、SOL $66.77；未有同步大升。",
];

const technicalLevels = [
  [
    "S&P 500",
    "7,400 / 7,450",
    "收 7,431.46，已企上 7,400；短線若守住 7,400，反彈可視為有延續性。",
  ],
  [
    "S&P 500",
    "7,350 / 7,300",
    "7,350 是第一回吐位；跌穿 7,300 代表 Iran/油價 trade 失效，需重新降風險。",
  ],
  [
    "Nasdaq Composite",
    "26,000 / 25,500",
    "Nasdaq 離 26,000 只差一步，但 AAPL/AMZN 轉弱，突破需要 mega-cap 重新配合。",
  ],
  [
    "Russell 2000",
    "2,950 / 2,900",
    "Russell 收 2,943.99，接近 2,950；小型股若續強，代表升市 breadth 健康。",
  ],
  [
    "SOXX",
    "600 / 580",
    "SOXX 約 $596，600 是 momentum 關口；若跌穿 580，前一日大反彈可能變成短線 squeeze。",
  ],
  [
    "VIX",
    "18 / 20",
    "VIX 收 17.68 是 risk-on 訊號；若下週 FOMC/Iran 令 VIX 重上 20，要先收窄 beta。",
  ],
  [
    "10Y Treasury",
    "4.50% / 4.55%",
    "10Y 約 4.48%，仍在可接受區；若重上 4.55%，growth 與 real estate 估值會受壓。",
  ],
  [
    "BTC",
    "$63,500 / $60,000",
    "BTC 僅微升至 $63,586，守 $63.5k 可算穩，但跌回 $60k 以下就不配合美股 risk-on。",
  ],
];

const watchList = [
  "6/16-17 FOMC：Warsh 首次主持議息，市場焦點是 hold 之後的語氣、點陣圖/預測是否更偏鷹。",
  "Iran / Hormuz：週末若有協議簽署或破局，WTI/Brent 會先反應，再傳導到通脹預期和股市估值。",
  "SpaceX 第二日交易：SPCX 首日 +19% 是風險胃納測試，之後要看是否抽走其他 AI/高 beta 資金。",
  "通脹預期：University of Michigan 1Y inflation expectations 仍在 4.6%，任何反彈都會令 Fed 更難放鬆。",
  "板塊輪動：XLB/XLF/Russell 若續跑贏，升市可由 mega-cap 擴散；若只剩半導體撐市，質素會下降。",
  "Crypto：BTC/ETH/SOL 未跟足美股升，若下週仍弱，代表風險胃納在 crypto beta 未完全確認。",
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

export default function USCloseBrief20260612() {
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
          background: linear-gradient(135deg, #0f172a 0%, #14532d 52%, #0369a1 100%);
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
        .red { color: #b91c1c; font-weight: 700; }
        .green { color: #047857; font-weight: 700; }
        a { color: #1d4ed8; text-decoration: none; }
        .small { color: #64748b; font-size: 14px; }
      `}</style>

      <header className="hero">
        <div className="eyebrow">美股收盤懶人包｜完整版</div>
        <h1>SpaceX 首日大升，油價回落撐住美股續反彈</h1>
        <p className="subtitle">
          6 月 12 日美股延續 risk-on：S&P 500 升 0.50%、Dow 升
          353.51 點、Nasdaq 升 0.31%。SpaceX IPO 首日收高約 19%，Iran
          潛在協議令油價再跌，VIX 跌至 17.68；但 AAPL、AMZN
          逆市跌，提醒升市質素仍要看下週 FOMC 與板塊輪動。
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
            今日結論：升市不是單靠 mega-cap tech，而是由油價回落、IPO
            風險胃納和週期板塊補漲一齊推動。短線可保持 risk-on，但 FOMC
            前仍要用 VIX、10Y 和油價做風控線。
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
              Yahoo 指 Russell 2000 +0.79%，小型股跑贏 Nasdaq，顯示資金願意買入更廣泛 beta。
            </li>
            <li>
              VIX 由 19.44 跌至 17.68，回到較平靜水平；但下週 FOMC
              與 Iran headline 仍可能令短端波動反覆。
            </li>
            <li>
              板塊上 XLB、XLF、XLU、XLRE 都跑贏 S&P 500，升市有擴散，不只是 AI 股。
            </li>
            <li>
              Crypto 未同步爆上：BTC 只微升 0.04%，ETH/SOL
              小跌，說明風險胃納在數碼資產未完全確認。
            </li>
          </ul>
        </Card>

        <Card title="4｜板塊紅綠燈">
          <DataTable
            headers={["板塊 / ETF proxy", "變動", "訊號", "一句講晒"]}
            rows={sectorRows}
          />
          <p className="small">
            板塊表採 Yahoo Finance / StockAnalysis / Exa market pages
            的 Select Sector ETF proxy；ETF 與 GICS 行業口徑可能有差異。
          </p>
        </Card>

        <Card title="5｜點解今日會升？">
          <h3>支持來源</h3>
          <ul>
            <li>
              SpaceX 以 $135 定價、開市 $150，首日收約 $161，市場把最大 IPO
              視為高增長需求仍強的訊號。
            </li>
            <li>
              CNBC 指 WTI 跌至 $84.88、Brent 跌至 $87.33，Iran
              協議希望令能源通脹壓力短線降溫。
            </li>
            <li>
              University of Michigan preliminary sentiment 升至 48.9，1
              年和 5 年通脹預期都回落，幫助市場淡化最壞情境。
            </li>
            <li>
              金融、材料、地產與小型股跟升，代表資金不是只集中在七巨頭。
            </li>
          </ul>
          <h3>仍然要小心</h3>
          <ul>
            <li>
              CPI/PPI 仍熱，Fed 下週很難因一日油價回落就轉鴿。
            </li>
            <li>
              AAPL、AMZN、META 逆市或偏弱，Nasdaq 未能大幅跑贏，科技內部有分化。
            </li>
            <li>
              Iran 協議仍未完全落實；一旦週末消息反覆，油價和 VIX 可以快速回升。
            </li>
          </ul>
        </Card>

        <Card title="6｜宏觀白話版">
          <DataTable headers={["項目", "數據", "解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：市場今日交易的是「油價和戰爭風險有機會落返嚟」。但通脹本身仍高，
            Fed 亦未有理由即刻放鬆，所以升市最好配合風控，不宜當作所有宏觀問題已解決。
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
            Crypto 採 Binance Vision public data 1-minute kline，時間點為
            2026-06-12 20:00:00 UTC（美股 4:00pm ET 附近）；對比基準為
            2026-06-11 同一時間。原始 Binance 直接 spot API 在部分環境可能受地區限制，因此使用官方 public data ZIP。
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
              S&P 500 企上 7,400、VIX 低於 18，是偏 risk-on 訊號；但不宜在 FOMC
              前無風控追高。
            </li>
            <li>
              <strong>中線：</strong>
              AI 與高增長仍有人買，但要分清楚：AMD/SPCX 強，不等於所有 mega-cap
              都同步向上。
            </li>
            <li>
              <strong>風控：</strong>若 WTI 重上 $90、10Y 重上 4.55%、VIX
              重上 20，先減高 beta / IPO / 單一主題倉位。
            </li>
            <li>
              <strong>一句到尾：</strong>
              今日是健康但仍帶 headline risk 的延續反彈；下週關鍵不是「有冇升過」，
              而是升市能否在 FOMC、Iran 和 SpaceX 第二輪交易後繼續擴散。
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
              指數收市：Yahoo Finance 的 AP-style 市場總結列 S&P 500
              7,431.46、Dow 51,202.26、Nasdaq 25,888.84、Russell
              2,943.99；本文採該組收市數字。
            </li>
            <li>
              SpaceX：Trading Economics 報收 $161.11，部分 IPO
              追蹤頁報 $160.95；差異屬收市/最後成交或頁面刷新口徑，本文列範圍並以約
              +19% 描述。
            </li>
            <li>
              SOXX：不同 quote 頁顯示 close 約 $595.82-$596.25、日變動約
              +1.5% 至 +1.6%；本文採「約 +1.5%」避免過度精確。
            </li>
            <li>
              債息：CNBC 新聞報 10Y 約 4.483%、2Y 約 4.087%，Advisor
              Perspectives 日結亦為 10Y 4.48%、2Y 4.09%；CNBC quote
              晚間頁面一度顯示 10Y 4.422%，屬時間點差異，本文以新聞/日結口徑為主。
            </li>
            <li>
              DXY：搜尋可得來源只一致指向美元回軟，未見可靠即時收市數字；本文明確標示「暫無可靠收市數字」。
            </li>
            <li>
              Crypto：Binance 直接 API 在環境中可能受限制，本文使用 Binance
              Vision official public data 1m kline，精確取 2026-06-12 20:00 UTC close。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
