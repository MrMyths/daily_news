import React from "react";

const reportDate = "2026-06-09";
const publishedAt = "香港時間 2026-06-10 09:05";

const sources = [
  {
    name: "CNBC - Stock market news for June 9, 2026",
    url: "https://www.cnbc.com/2026/06/08/stock-market-today-live-updates.html",
  },
  {
    name: "Investopedia - Markets News, June 9, 2026",
    url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-06092026-11993707",
  },
  {
    name: "Anadolu Agency - US stocks end mostly lower as chip rebound fizzles",
    url: "https://www.aa.com.tr/en/economy/us-stocks-end-mostly-lower-as-chip-rebound-fizzles-oil-retreat-supports-cyclical-shares/3961953",
  },
  {
    name: "Growbeansprout - CME FedWatch data as of June 9, 2026",
    url: "https://growbeansprout.com/tools/fedwatch",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "MarketScreener - US Treasury closing levels",
    url: "https://hk.marketscreener.com/news/treasuries-yields-slip-as-traders-await-inflation-data-ce7f5cdad88dff27",
  },
  {
    name: "National Association of Realtors - Existing-home sales",
    url: "https://www.nar.realtor/research-and-statistics/housing-statistics/existing-home-sales",
  },
  {
    name: "GSK - Agreement to acquire Nuvalent",
    url: "https://us.gsk.com/en-us/media/press-releases/gsk-enters-agreement-to-acquire-nuvalent-inc/",
  },
  {
    name: "Yahoo Finance historical charts - indices, sector ETFs and stocks",
    url: "https://finance.yahoo.com/",
  },
  {
    name: "Binance Vision public data - 1m klines",
    url: "https://data.binance.vision/",
  },
];

const indexRows = [
  [
    "S&P 500",
    "7,386.65",
    "-19.08 / -0.26%",
    "CNBC、AA 與 Yahoo Chart 一致；早段曾升，收市被科技/半導體回吐拖低。",
  ],
  [
    "Dow Jones",
    "50,872.11",
    "+86.10 / +0.17%",
    "藍籌尾市轉正，J&J、Visa、JPM 等防守/金融成分托住。",
  ],
  [
    "Nasdaq Composite",
    "25,678.82",
    "-250.84 / -0.97%",
    "AI/半導體反彈熄火，Mag 7 除 Alphabet 外普遍下跌。",
  ],
  [
    "Russell 2000",
    "2,867.02",
    "+11.60 / +0.41%",
    "小型股跑贏大盤，反映跌市集中在大型科技，不是全面撤風險。",
  ],
  [
    "VIX",
    "19.87",
    "+0.95 / +5.02%",
    "升回接近 20，波動升溫但未到恐慌爆發；投資者等 CPI 與 IPO 供應。",
  ],
];

const sectorRows = [
  [
    "Real Estate / XLRE",
    "+2.13%",
    "綠燈",
    "NAR existing-home sales 好過預期，地產鏈與 REITs 有修復。",
  ],
  [
    "Materials / XLB",
    "+1.62%",
    "綠燈",
    "油價回落令成本壓力降溫，舊經濟/周期股承接較好。",
  ],
  [
    "Health Care / XLV",
    "+1.26%",
    "綠燈",
    "資金由高估值科技轉向防守增長，GSK/NUVL deal 亦帶動醫藥關注。",
  ],
  [
    "Consumer Staples / XLP",
    "+1.24%",
    "綠燈",
    "防守板塊跑出，代表市場今日偏向降 beta，而不是全面追風險。",
  ],
  [
    "Industrials / XLI",
    "+1.13%",
    "綠燈",
    "油價降溫、航運/供應鏈風險暫降，工業與舊經濟受惠。",
  ],
  [
    "Financials / XLF",
    "+0.94%",
    "中性偏好",
    "長短債息回落但銀行股仍有買盤，偏向輪動承接。",
  ],
  [
    "Consumer Discretionary / XLY",
    "+0.42%",
    "中性",
    "Home Depot 與房屋鏈支持，但 Tesla -3.00% 抵銷部分升幅。",
  ],
  [
    "Communication Services / XLC",
    "+0.35%",
    "中性",
    "Alphabet 微升托住板塊，平台股整體未算強。",
  ],
  [
    "Utilities / XLU",
    "+1.06%",
    "防守綠",
    "收益型/低 beta 有買盤，反映市場想降低組合波動。",
  ],
  ["Energy / XLE", "-1.61%", "紅燈", "WTI/Brent 下跌，能源股跟隨油價回吐。"],
  [
    "Technology / XLK",
    "-1.85%",
    "深紅",
    "Information Technology 是 S&P 最大拖累，AI/半導體估值壓力再現。",
  ],
];

const stockRows = [
  [
    "SMH / SOXX",
    "SMH -1.20%、SOXX -1.63%",
    "CNBC 指週一約 6% 反彈後熄火；半導體未能延續修復，是 Nasdaq 跑輸主因。",
  ],
  [
    "MRVL / ARM / QCOM",
    "MRVL -7.61%、ARM -6.22%、QCOM -5.67%",
    "Investopedia 點名 chip space 轉弱；資金對 AI beta 估值開始更挑剔。",
  ],
  [
    "AAPL",
    "-3.64% 至 $290.55",
    "WWDC / Siri AI 公布後市場反應冷淡，CNBC 指缺乏短期驚喜與明確發布時間。",
  ],
  [
    "NVDA / AMD / AVGO / MU",
    "NVDA -0.22%、AMD -3.02%、AVGO -1.12%、MU -1.41%",
    "AI 核心股沒有崩，但買盤不足以延續週一反彈；Micron 與 Broadcom 回吐部分升幅。",
  ],
  [
    "Mag 7 ex-GOOGL",
    "MSFT -2.02%、AMZN -0.42%、META -0.14%、TSLA -3.00%",
    "大型科技多數收跌；Alphabet +0.26% 是少數綠色 mega-cap。",
  ],
  [
    "HD / ITB",
    "HD +3.75%、ITB +4.02%",
    "NAR 公布 May existing-home sales +3.2% 至 4.17m，房屋鏈成為舊經濟亮點。",
  ],
  [
    "NUVL / GSK",
    "NUVL +39.28%、GSK +1.20%",
    "GSK 宣布以 $10.6bn、每股 $124 現金收購 Nuvalent，帶動 biotech M&A 情緒。",
  ],
  [
    "SJM / SAIL / MTN",
    "SJM +10.44%、SAIL -11.48%、MTN -4.34%",
    "個股財報/指引主導：Smucker 業績勝預期，SailPoint 指引弱，Vail Resorts 下調 outlook。",
  ],
];

const macroRows = [
  [
    "2Y / 10Y / 30Y Treasury",
    "約 4.14% / 4.53%-4.54% / 5.01%-5.02%",
    "MarketScreener/Trading Economics 顯示債息回落；10Y 仍高於 4.5%，估值壓力未解除。",
  ],
  [
    "FedWatch / 6 月 FOMC",
    "維持 3.50%-3.75% 機率 96.5%",
    "Growbeansprout 與 Investing.com 均引 CME FedWatch；6 月不動幾乎是 base case。",
  ],
  [
    "DXY / 美元",
    "約 100.0，日內小跌",
    "Investopedia 指美元指數跌約 0.1% 至 99.97；Yahoo Chart 接近 100.01，方向一致。",
  ],
  [
    "WTI / Brent",
    "WTI 約 $88.20-$88.45；Brent 約 $91-$91.45",
    "CNBC/Investopedia/AA 口徑略有差異，但全部指向油價約跌 3%，因 Hormuz 航運恢復憧憬。",
  ],
  [
    "Gold",
    "約 $4,275-$4,286/oz",
    "CNBC 稱黃金期貨跌至年內最低收市；Investopedia 約 $4,275，口徑差異來自合約/時間點。",
  ],
  [
    "Existing-home sales",
    "May +3.2% 至 4.17m SAAR",
    "NAR 官方數據高於預期，支持 Real Estate、homebuilders 與部分舊經濟輪動。",
  ],
  [
    "本週焦點",
    "May CPI、Oracle earnings、SpaceX IPO",
    "市場一邊等通脹，一邊消化 AI mega-IPO 供應；OpenAI 亦已 confidentially filed IPO。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$62,076.01",
    "約 -2.14% vs 6/8 4:00pm ET",
    "Binance Vision 2026-06-09 20:00 UTC 1m close；對比 6/8 同分鐘 $63,432.83。",
  ],
  [
    "ETHUSDT",
    "$1,658.61",
    "約 -1.59%",
    "Binance Vision 2026-06-09 20:00 UTC 1m close；對比 6/8 同分鐘 $1,685.41。",
  ],
  [
    "SOLUSDT",
    "$65.48",
    "約 -2.98%",
    "Binance Vision 2026-06-09 20:00 UTC 1m close；對比 6/8 同分鐘 $67.49。",
  ],
];

const notes = [
  "今日主線是輪動，不是全面崩：S&P 500 -0.26%、Nasdaq -0.97%，但 Dow +0.17%、Russell 2000 +0.41%。",
  "半導體週一急彈後即刻失速，SMH -1.20%、SOXX -1.63%，MRVL/ARM/QCOM 等 beta names 跌得更明顯。",
  "舊經濟、防守與房屋鏈跑贏：XLRE +2.13%、XLB +1.62%、XLV +1.26%，NAR 樓市數據幫到情緒。",
  "宏觀稍為紓緩但未放鬆：10Y 約 4.53%，油價跌約 3%，FedWatch 仍顯示 6 月大概率不減息。",
];

const technicalLevels = [
  [
    "S&P 500",
    "7,386 / 7,350",
    "今日收近 7,386；若失守 7,350，代表週一反彈被完全否定。",
  ],
  [
    "S&P 500",
    "7,400 / 7,450",
    "重新企回 7,400 是第一步；7,450 以上才算買盤重新控制節奏。",
  ],
  [
    "Nasdaq Composite",
    "25,600 / 25,400",
    "收市仍守 25,600 附近；若再穿 25,400，AI trade 會有更大去槓桿壓力。",
  ],
  [
    "VIX",
    "20 / 22",
    "VIX 貼近 20；若升穿 22，代表 CPI/中東/IPO 風險開始觸發更廣泛避險。",
  ],
  [
    "10Y Treasury",
    "4.50% / 4.67%",
    "4.50% 上方仍壓 growth multiple；若回試 4.67%，高 beta 很難穩。",
  ],
  [
    "BTC",
    "$62,000 / $60,000",
    "美股收市時守 $62k 邊緣；跌穿 $60k 會令 crypto beta 再次拖累風險情緒。",
  ],
];

const watchList = [
  "6/10：May CPI。Investopedia 引 Dow Jones/WSJ forecast：headline 4.2%、core 2.9%，若高於預期會壓估值。",
  "6/11：May PPI、Initial Claims、Oracle earnings。留意 AI capex/雲需求是否支撐科技估值。",
  "6/12：SpaceX IPO 預期登場；CNBC 指 OpenAI、Anthropic、SpaceX 形成 AI mega-IPO pipeline，會測試市場吸納能力。",
  "6/16-17：FOMC。FedWatch 顯示 6 月維持利率機率 96.5%，重點在點陣圖與 Warsh 記者會口徑。",
  "中東與油價：WTI 若穩在 $90 以下，通脹壓力有幫助；若因 Hormuz/直升機事件重上 $95，risk premium 會回來。",
  "半導體後續：SOXX/SMH 要盡快收復週二跌幅，否則週一只是 dead-cat bounce。",
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

export default function USCloseBrief20260609() {
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
        <h1>科技回吐拖低大盤，舊經濟輪動接力</h1>
        <p className="subtitle">
          6 月 9 日美股收市 mixed：Nasdaq 跌 0.97%、S&P 500 跌 0.26%，但 Dow 升
          0.17%。重點不是市場全面 risk-off，而是週一半導體反彈未能延續，
          資金轉去房屋鏈、防守、醫療與材料；油價回落幫到通脹預期，但 CPI
          前仍未可以太放鬆。
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
            今日結論：科技不是單日反彈後就安全，資金暫時更願意買舊經濟和防守。
            S&P 500 要重新企回 7,400、Nasdaq 要守住 25,600，才算短線未轉壞。
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
              CNBC 盤中指 S&P 500 有 301 隻成分股上升、9/11 個板塊曾為正，但
              Information Technology 跌近 2%-3%，足以拖低市值加權指數。
            </li>
            <li>
              VIX 升至 19.87，未爆表但明顯由週一低位反彈，代表 CPI、Iran/Hormuz
              與 AI IPO 供應仍令市場保持警戒。
            </li>
            <li>
              Russell 2000 +0.41%、Equal-weight 盤中向好，顯示今日是「sell
              crowded tech、buy old economy」的輪動。
            </li>
            <li>
              Crypto 在美股收市點同步偏弱，BTC/ETH/SOL 較 6/8 4:00pm ET 分別跌約
              2.1%/1.6%/3.0%，風險 beta 未跟舊經濟輪動。
            </li>
          </ul>
        </Card>

        <Card title="4｜板塊紅綠燈">
          <DataTable
            headers={["板塊 / ETF proxy", "變動", "訊號", "一句講晒"]}
            rows={sectorRows}
          />
          <p className="small">
            板塊變動以 Yahoo Finance Select Sector SPDR ETF 收市價計算；CNBC/AA
            行業描述以科技與能源跑輸、材料/消費/地產跑贏為主， ETF proxy 與 GICS
            行業口徑可能有幅度差異。
          </p>
        </Card>

        <Card title="5｜點解今日會跌？">
          <h3>壓力來源</h3>
          <ul>
            <li>
              半導體週一反彈後無法延續，SMH/SOXX 轉跌，MRVL、ARM、QCOM 等高 beta
              chip names 跌幅較大。
            </li>
            <li>
              Apple WWDC 後再跌 3.64%，市場認為 Siri AI 更新未即時改變 iPhone
              需求/變現故事。
            </li>
            <li>
              投資者等 6/10 CPI 與 6/12 SpaceX IPO；OpenAI 亦 confidentially
              filed IPO，市場擔心 AI 供應與估值測試。
            </li>
          </ul>
          <h3>支持因素</h3>
          <ul>
            <li>
              油價跌約 3%，暫時降低通脹與 Hormuz supply shock 擔憂，支撐舊經濟。
            </li>
            <li>
              Existing-home sales +3.2% 至
              4.17m，好過預期，帶動房屋鏈與地產板塊。
            </li>
            <li>債息由週一高位回落，10Y 約 4.53%，對估值有少少幫助。</li>
          </ul>
        </Card>

        <Card title="6｜宏觀白話版">
          <DataTable headers={["項目", "數據", "解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：油價跌、債息跌是好消息，但 CPI 未出、Fed 未開會、AI IPO
            供應未消化，所以市場不願意再無腦追高科技。短線最重要是通脹數據會否令
            10Y 再向上。
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
            Crypto 採 Binance Vision public data：2026-06-09 20:00
            UTC（美東夏令時間 4:00pm ET）1 分鐘 K 線 close；直接 Binance API
            在部分環境可能受地區限制，所以採 Binance Vision。變動對比 2026-06-08
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
              不要只看 Dow 綠就判斷風險解除。真正要看的是 Nasdaq 能否守住
              25,600、SOXX/SMH 能否止跌，以及 S&P 500 能否重返 7,400。
            </li>
            <li>
              <strong>中線：</strong>AI 主線仍在，但資金開始由「任何 AI beta
              都買」轉成「估值、盈利能見度、IPO 供應」三樣一齊審。
            </li>
            <li>
              <strong>風控：</strong>如果 CPI 高過預期、10Y 回到 4.6% 以上、VIX
              升穿 22，應先減低高 beta / 高估值集中度。
            </li>
            <li>
              <strong>一句到尾：</strong>
              今日不是熊市訊號，但提醒大家：市場可以在指數小跌時完成一次很明顯的
              leadership rotation。追科技前，要先確認半導體不再拖後腿。
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
              指數收市：CNBC、AA 與 Yahoo Chart 均列 S&P 500 7,386.65、Dow
              50,872.11、Nasdaq 25,678.82；本文採一致口徑。
            </li>
            <li>
              板塊：表格採 Yahoo Finance ETF proxy（XLK/XLE/XLRE
              等）收市價；新聞來源多用 S&P GICS
              行業口徑，方向一致但幅度不一定相同。
            </li>
            <li>
              宏觀：債息採 MarketScreener/Trading Economics/Yahoo
              交叉口徑；油價與金價在 CNBC、Investopedia、AA
              之間有合約及時間點差異，本文列範圍並說明差異。
            </li>
            <li>
              FedWatch：Growbeansprout 與 Investing.com 均引 CME FedWatch 6/9
              顯示 6 月維持 3.50%-3.75% 機率 96.5%，本文採該一致數字。
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
