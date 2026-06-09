import React from "react";

const reportDate = "2026-06-08";
const publishedAt = "香港時間 2026-06-09 09:10";

const sources = [
  {
    name: "Reuters via MarketScreener - Stocks bounce back, oil pares gains",
    url: "https://www.marketscreener.com/news/stocks-bounce-back-oil-pares-gains-as-iran-and-israel-signal-a-pause-ce7f5dd3d88ef020",
  },
  {
    name: "CNBC - Stock market news for June 8, 2026",
    url: "https://www.cnbc.com/2026/06/07/stock-market-today-live-updates.html",
  },
  {
    name: "Investopedia - Markets News, June 8, 2026",
    url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-06082026-11992852",
  },
  {
    name: "Growbeansprout - CME FedWatch data as of June 8, 2026",
    url: "https://growbeansprout.com/tools/fedwatch",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "Yahoo Finance historical charts - indices, sector ETFs and stocks",
    url: "https://finance.yahoo.com/",
  },
  {
    name: "Binance Vision public data - 1m klines",
    url: "https://data.binance.vision/",
  },
  {
    name: "Kitco/Reuters - Gold pressured by rate-hike bets",
    url: "https://www.kitco.com/news/off-the-wire/2026-06-08/gold-hits-more-two-month-low-strong-us-jobs-data-boosts-rate-hike-bets",
  },
];

const indexRows = [
  [
    "S&P 500",
    "7,405.73",
    "+21.99 / +0.30%",
    "收復 7,400，靠科技與半導體反彈托住；CNBC、Reuters/Yahoo 口徑一致。",
  ],
  [
    "Dow Jones",
    "50,786.01",
    "-80.77 / -0.16%",
    "藍籌指數微跌，反映反彈主要集中在高 beta 科技，不是全面 risk-on。",
  ],
  [
    "Nasdaq Composite",
    "25,929.66",
    "+220.23 / +0.86%",
    "上週五急跌後出現修復，SOXX/SMH 帶動 Nasdaq 跑贏。",
  ],
  [
    "Russell 2000",
    "2,855.42",
    "+21.92 / +0.77%",
    "小型股都有反彈，但債息仍高，未算重新打開全面風險胃納。",
  ],
  [
    "VIX",
    "18.92",
    "-2.59 / -12.04%",
    "由 20 以上回落，短線恐慌降溫；但仍高於早前低波動區。",
  ],
];

const sectorRows = [
  [
    "Technology / XLK",
    "+2.15%",
    "綠燈",
    "半導體與 AI 基建股急彈，是今日指數向上的主引擎。",
  ],
  [
    "Energy / XLE",
    "+1.14%",
    "綠燈",
    "WTI/Brent 收高，油價中東風險溢價支持能源股。",
  ],
  [
    "Consumer Discretionary / XLY",
    "+0.46%",
    "中性偏好",
    "Tesla 反彈幫手，但高利率仍限制估值擴張。",
  ],
  [
    "Health Care / XLV",
    "-0.24%",
    "中性",
    "防守增長個股仍有承接，但整體板塊未跟上科技反彈。",
  ],
  [
    "Industrials / XLI",
    "-0.32%",
    "中性",
    "工業股偏軟，說明市場未全面押經濟循環復甦。",
  ],
  [
    "Consumer Staples / XLP",
    "-0.44%",
    "中性偏弱",
    "上週五跑贏後回吐，資金短線由防守轉回科技彈性。",
  ],
  [
    "Communication Services / XLC",
    "-0.52%",
    "中性偏弱",
    "Meta/Google 回落，拖住平台股板塊。",
  ],
  [
    "Financials / XLF",
    "-0.63%",
    "紅燈",
    "長債息升未能直接轉化為銀行股買盤，市場仍擔心風險成本。",
  ],
  [
    "Materials / XLB",
    "-1.32%",
    "紅燈",
    "美元接近 100、全球風險未穩，商品鏈偏弱。",
  ],
  [
    "Real Estate / XLRE",
    "-1.50%",
    "紅燈",
    "10Y 約 4.56% 對 REITs 估值仍是壓力。",
  ],
  [
    "Utilities / XLU",
    "-1.87%",
    "深紅",
    "防守/派息股在債息上行日最受壓，與科技反彈形成輪動。",
  ],
];

const stockRows = [
  [
    "SOXX / SMH",
    "SOXX +5.87%、SMH +5.00%",
    "半導體 ETF 在上週五暴跌後急彈；CNBC 指 SOXX 上週五跌逾 10%，今日接近 6% 反彈。",
  ],
  [
    "INTC / MU / MRVL",
    "INTC +11.19%、MU +9.87%、MRVL +9.63%",
    "Friday 最傷的 chip names 今日成為 mean reversion 主角；MRVL 亦受納入 S&P 500 消息支持。",
  ],
  [
    "NVDA / AVGO",
    "NVDA +1.73%、AVGO +2.82%",
    "AI 核心股反彈但未重返日高，反映市場仍在測試 AI trade 的可持續性。",
  ],
  [
    "TSLA",
    "+4.59% 至 $408.95",
    "高 beta 消費/科技情緒改善，Tesla 跟隨風險資產反彈。",
  ],
  [
    "AAPL / MSFT",
    "AAPL -1.89%、MSFT -1.18%",
    "Mega-cap 未全面同步上升；Apple WWDC 相關憧憬不足以抵消大盤輪動壓力。",
  ],
  [
    "GOOGL / META / AMZN",
    "GOOGL -1.42%、META -1.28%、AMZN -0.33%",
    "平台股偏弱，亦解釋為何 Communication Services 跑輸。",
  ],
  [
    "GLW",
    "+5.61% 至 $187.54",
    "CNBC 報道 Amazon AI data center 光纖協議，Corning 成為 AI 基建延伸受惠股。",
  ],
  [
    "WIX / CROX / CMI",
    "WIX -7.98%、CROX +1.09%、CMI +3.30%",
    "個股消息主導：Wix 下調 outlook 受壓，Crocs/ Cummins 受券商升級帶動。",
  ],
];

const macroRows = [
  [
    "2Y / 10Y / 30Y Treasury",
    "4.164% / 4.564% / 5.038%",
    "Reuters 收市口徑：10Y +2.8bp、30Y +3.9bp；長端利率繼續壓估值。",
  ],
  [
    "FedWatch / 6 月 FOMC",
    "維持 3.50%-3.75% 機率約 96.5%",
    "Growbeansprout 引 CME FedWatch 截至 6/8；Investing.com 6/6 快照為 96.7%，方向一致。",
  ],
  [
    "Fed pricing / 年尾風險",
    "市場仍重新消化 later-2026 加息風險",
    "Reuters 指上週強非農後 traders ramp up rate-hike bets；即使 6 月幾乎不動，點陣圖會是關鍵。",
  ],
  [
    "DXY / 美元",
    "100.00，-0.08%",
    "Reuters：美元由近兩個月高位回落，因以伊互停攻擊降低避險需求。",
  ],
  [
    "WTI / Brent",
    "$91.30 / $94.25",
    "油價收高但遠離盤中高位；以伊衝突未完全消失，仍是通脹風險。",
  ],
  [
    "Gold",
    "$4,327.63，-0.03%",
    "金價接近平收；避險需求與加息/高實質利率壓力互相拉扯。",
  ],
  [
    "本週數據",
    "CPI、PPI、claims、SpaceX IPO",
    "CNBC/Investopedia 均指市場焦點轉向通脹數據與大型 IPO 對風險胃納的測試。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$63,432.83",
    "約 +4.93% vs 6/5 4:00pm ET",
    "Binance Vision 2026-06-08 20:00 UTC 1m close；同分鐘 high $63,432.84。",
  ],
  [
    "ETHUSDT",
    "$1,685.41",
    "約 +6.85%",
    "Binance Vision 2026-06-08 20:00 UTC 1m close。",
  ],
  [
    "SOLUSDT",
    "$67.49",
    "約 +5.97%",
    "Binance Vision 2026-06-08 20:00 UTC 1m close。",
  ],
];

const notes = [
  "今日是技術性反彈多過全面轉強：S&P 500 +0.30%、Nasdaq +0.86%，但 Dow -0.16%，板塊紅綠參半。",
  "半導體是主角，SOXX +5.87%，Intel、Micron、Marvell 接近雙位數反彈；但 Apple、Microsoft、Google、Meta 仍跌。",
  "宏觀沒有真正放鬆：10Y Treasury 升至 4.564%，FedWatch 仍顯示 6 月大概率不動，但年尾加息定價未散。",
  "油價因以伊衝突收高但由高位回落，市場暫時相信 ceasefire/停火訊號，但通脹風險仍留在枱面。",
];

const technicalLevels = [
  [
    "S&P 500",
    "7,400 / 7,380",
    "今日收回 7,400，短線守住 7,380-7,400 才算反彈有承接。",
  ],
  [
    "S&P 500",
    "7,450 / 7,500",
    "若能連續企上 7,450，市場會重新測試前高與 7,500 心理關。",
  ],
  [
    "Nasdaq Composite",
    "25,900 / 26,000",
    "收市貼近 25,930；重上 26,000 代表 AI/半導體反彈更可信。",
  ],
  [
    "VIX",
    "20 / 22",
    "VIX 跌回 20 以下是好事；若再上 22，代表上週五恐慌未真正解除。",
  ],
  [
    "10Y Treasury",
    "4.55% / 4.67%",
    "4.55% 已對估值有壓；若重試 5 月高位約 4.67%，高 beta 會再受壓。",
  ],
  [
    "BTC",
    "$63,000 / $60,000",
    "收市時重返 $63k 以上改善風險情緒；$60k 仍是下方關鍵線。",
  ],
];

const watchList = [
  "6/10：May CPI。若核心通脹未降溫，市場對 Fed 年尾加息的討論會更實在。",
  "6/11：May PPI、Initial Claims。留意能源衝擊會否開始傳到企業成本。",
  "6/12：SpaceX IPO（CNBC 指市場視為 AI/風險胃納大測試）。大型 IPO 若太熱，可能加劇估值泡沫討論。",
  "6/16-17：FOMC 與點陣圖。6 月不動機率高，但關鍵是官員對下半年通脹和利率的預測。",
  "中東與油價：WTI $95 以上會令 inflation premium 回來；跌回 $90 以下則有助風險資產喘定。",
  "半導體後續：SOXX/SMH 今日是反彈還是新一輪領升，要看能否守住今日升幅與成交承接。",
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

export default function USCloseBrief20260608() {
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
          background: linear-gradient(135deg, #0f172a 0%, #064e3b 52%, #0f766e 100%);
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
          border-bottom: 1px solid #a7f3d0;
        }
        td { padding: 11px 10px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
        .callout {
          border-left: 5px solid #059669;
          background: #f0fdfa;
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
        <h1>半導體急彈托市，宏觀壓力未退</h1>
        <p className="subtitle">
          6 月 8 日美股收市分化：Nasdaq 受半導體反彈帶動升 0.86%，S&P 500 升
          0.30%，但 Dow 微跌。今次更似上週五急跌後的技術修復，而不是全面重啟
          risk-on；債息、油價同 Fed 年尾定價仍然係市場要過的關。
        </p>
        <div className="meta">
          <span className="pill">交易日：{reportDate}</span>
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">語言：繁體中文 / 廣東話語氣</span>
          <span className="pill">Crypto：Binance 4:00pm ET 1m close</span>
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
            今日結論：可以承認反彈有效，但未到可以放鬆風控。S&P 500 要守住
            7,400、Nasdaq 要重上 26,000，先算由「跌後反抽」升級做「結構修復」。
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
              CNBC 指今日 S&P 500 有 9 隻 52 週新高、4 隻新低，表面 breadth
              不差，但升勢主要由 chip rebound 牽引。
            </li>
            <li>
              VIX 由 21.51 回落到 18.92，表示上週五的恐慌降溫；但 10Y Treasury
              再升至 4.56%，估值壓力仍未解除。
            </li>
            <li>
              板塊結構偏分化：Technology/Energy 綠，Utilities/Real
              Estate/Materials 紅，未見 11 個板塊同步上升。
            </li>
            <li>
              Crypto 同步反彈，BTC/ETH/SOL 在美股收市時間附近升
              4.9%-6.9%，短線風險胃納改善。
            </li>
          </ul>
        </Card>

        <Card title="4｜板塊紅綠燈">
          <DataTable
            headers={["板塊 / ETF proxy", "變動", "訊號", "一句講晒"]}
            rows={sectorRows}
          />
          <p className="small">
            板塊變動以 Yahoo Finance Select Sector SPDR ETF
            收市價計算；Reuters/CNBC 行業描述以科技與半導體領升為主，方向一致但
            ETF proxy 與 GICS 行業口徑可能有幅度差異。
          </p>
        </Card>

        <Card title="5｜點解今日會升？">
          <h3>支持因素</h3>
          <ul>
            <li>
              上週五 Nasdaq 跌 4.18%、SOXX 跌逾 10%
              後，市場先做「跌得最傷的先彈」。
            </li>
            <li>
              Intel、Micron、Marvell 等 chip stocks 接近雙位數升幅，帶動 Nasdaq
              與 S&P 500 轉正。
            </li>
            <li>
              以伊雙方釋出暫停攻擊訊號，油價由盤中高位回落，避險壓力減少。
            </li>
            <li>VIX 跌回 20 以下，短線 forced selling 壓力下降。</li>
          </ul>
          <h3>仍要小心的因素</h3>
          <ul>
            <li>
              10Y/30Y Treasury 繼續上升，代表市場未完全放低通脹與 Fed 更鷹風險。
            </li>
            <li>
              Apple、Microsoft、Google、Meta 未跟升，mega-cap leadership
              仍不平均。
            </li>
            <li>油價仍在 $90 以上，中東風險若再升溫，通脹預期會再次壓估值。</li>
          </ul>
        </Card>

        <Card title="6｜宏觀白話版">
          <DataTable headers={["項目", "數據", "解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：今日股市喘一口氣，但宏觀未放水。市場一邊買回半導體，一邊仍要面對
            4.5% 以上的 10Y、$90 以上油價、以及 Fed 點陣圖可能偏鷹。
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
            headers={[
              "幣種",
              "4:00pm ET 附近價",
              "對比上個美股收市點",
              "來源/備註",
            ]}
            rows={cryptoRows}
          />
          <p className="small">
            Crypto 採 Binance Vision public data：2026-06-08 20:00
            UTC（美東夏令時間 4:00pm ET）1 分鐘 K 線 close；直接 Binance API
            在部分環境可能受地區限制，所以採 Binance Vision。變動對比 2026-06-05
            20:00 UTC 同口徑 1m close。
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
              反彈可以跟，但不宜用上週五前的高槓桿節奏追。優先看 S&P 500 是否守
              7,400、SOXX/SMH 是否守住今日大部分升幅。
            </li>
            <li>
              <strong>中線：</strong>AI 主線未死，但會由「全部 chip beta
              一齊升」轉成「有訂單、有供應、有現金流」的公司跑出。
            </li>
            <li>
              <strong>風控：</strong>如果 10Y 升穿 4.67%、WTI 重上 $95、VIX 回到
              22 以上，就要當今日反彈只是短線技術反抽。
            </li>
            <li>
              <strong>一句到尾：</strong>
              今日係 market repair，不是
              all-clear。最健康的劇本是半導體守住反彈，同時 CPI/PPI
              不再刺激利率上行；否則高 beta 很快又會被宏觀拉返落地。
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
              指數收市：CNBC、Reuters/MarketScreener 與 Yahoo Chart 均列 S&P 500
              7,405.73、Dow 50,786.01、Nasdaq 25,929.66；本文採一致口徑。
            </li>
            <li>
              板塊：表格採 Yahoo Finance ETF proxy（XLK/XLE
              等）收市價；CNBC/Reuters
              以行業新聞描述半導體/科技領升，方向一致但分類幅度可能不同。
            </li>
            <li>
              宏觀：債息、美元、油價、金價優先採 Reuters
              收市/接近收市口徑；Yahoo
              futures/指數因時區可能顯示下一交易日，本文只作交叉檢查。
            </li>
            <li>
              FedWatch：Growbeansprout 引 CME FedWatch 6/8 顯示 6 月維持利率機率
              96.5%；Investing.com 6/6 快照為
              96.7%，差異極小，本文標示兩者時間點。
            </li>
            <li>
              Crypto：直接 Binance API 可能受地區限制；本文採 Binance Vision
              public data 20:00 UTC 1m close，並列明時間點與比較基準。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
