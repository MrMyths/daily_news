import React from "react";

const reportDate = "2026-06-05";
const publishedAt = "香港時間 2026-06-08 09:00";

const sources = [
  {
    name: "Reuters via SRN - Wall Street ends sharply lower as chips slide",
    url: "https://srnnews.com/nasdaq-sp-futures-slip-as-semiconductors-drag-payrolls-in-focus/",
  },
  {
    name: "CNBC - Stock market today live updates, June 5, 2026",
    url: "https://www.cnbc.com/2026/06/04/stock-market-today-live-updates.html",
  },
  {
    name: "BLS - The Employment Situation, May 2026",
    url: "https://www.bls.gov/news.release/archives/empsit_06052026.htm",
  },
  {
    name: "Reuters via Yahoo Finance - FedWatch December hike odds",
    url: "https://finance.yahoo.com/economy/policy/articles/us-rate-futures-raise-rate-125419828.html",
  },
  {
    name: "Advisor Perspectives - Treasury Yields Snapshot, June 5, 2026",
    url: "https://www.advisorperspectives.com/dshort/updates/2026/06/05/treasury-yields-snapshot-june-5-2026",
  },
  {
    name: "Ameriprise - After the Close, June 5, 2026",
    url: "https://cdn.ameriprisecontent.com/cds/alwp/marketperspectives/aftertheclose-06-05-2026.pdf",
  },
  {
    name: "New York Fed - U.S. economic indicators calendar",
    url: "https://www.newyorkfed.org/research/calendars/nationalecon_cal",
  },
  {
    name: "Yahoo Finance historical charts - indices, ETFs and stocks",
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
    "7,383.74",
    "-200.57 / -2.64%",
    "跌穿 7,400，九星期連升斷纜；Reuters/CNBC/Yahoo 收市口徑一致。",
  ],
  [
    "Dow Jones",
    "50,866.78",
    "-695.15 / -1.35%",
    "前一日創新高後回吐，因科技權重較低，跌幅細過 Nasdaq。",
  ],
  [
    "Nasdaq Composite",
    "25,709.43",
    "-1,121.53 / -4.18%",
    "創 2025 年 4 月以來最大單日跌幅，AI/半導體係主要壓力源。",
  ],
  [
    "Russell 2000",
    "2,833.50",
    "-101.83 / -3.47%",
    "小型股同樣受利率急升拖累，反映 selloff 唔只係 mega-cap。",
  ],
  [
    "VIX",
    "21.51",
    "+6.11 / +39.68%",
    "由低波動急彈至 20 以上，風險胃納明顯轉差。",
  ],
];

const sectorRows = [
  [
    "Consumer Staples / XLP",
    "+1.71%",
    "綠燈",
    "資金轉入防守消費；CNBC 指 staples 係當日最強板塊。",
  ],
  ["Utilities / XLU", "+0.93%", "綠燈", "防守股有承接，即使債息升都跑贏大市。"],
  [
    "Real Estate / XLRE",
    "+0.68%",
    "中性偏好",
    "短線防守輪動支持，惟高息環境仍限制估值。",
  ],
  [
    "Health Care / XLV",
    "+0.61%",
    "中性偏好",
    "Eli Lilly 等防守增長股撐住板塊。",
  ],
  ["Financials / XLF", "+0.21%", "中性", "受惠高利率部分抵消風險資產回落。"],
  [
    "Industrials / XLI",
    "-1.12%",
    "中性偏弱",
    "跟隨大市回吐，但未見科技式拋售。",
  ],
  [
    "Communication Services / XLC",
    "-1.27%",
    "紅燈",
    "Meta、廣告/平台股拖累；GOOGL 跌幅較輕。",
  ],
  ["Energy / XLE", "-1.84%", "紅燈", "WTI 回落至 $90.54，能源股未能成避風港。"],
  ["Materials / XLB", "-1.92%", "紅燈", "美元走強、風險資產降溫壓住商品鏈。"],
  [
    "Consumer Discretionary / XLY",
    "-2.05%",
    "紅燈",
    "高 beta 消費受高利率與風險降溫夾擊。",
  ],
  [
    "Technology / XLK",
    "-6.66%",
    "深紅",
    "半導體/AI 交易急速去槓桿；Ameriprise 指 S&P Info Tech -5.8%。",
  ],
];

const stockRows = [
  [
    "NVDA / AVGO",
    "NVDA -6.20%、AVGO -7.92%",
    "Broadcom 業績後未有上調全年 AI 指引，市場對 AI capex 故事開始由追價變成挑剔兌現能力。",
  ],
  [
    "MU / AMD / INTC",
    "MU -13.25%、AMD -10.86%、INTC -11.28%",
    "半導體鏈全面去風險；多個來源指 Philadelphia Semiconductor Index 單日跌幅接近/超過 10%。",
  ],
  [
    "MRVL",
    "-16.73% 至 $263.47",
    "之前因 S&P 500 納入憧憬急升，今日在 chip rout 中成為獲利回吐焦點。",
  ],
  [
    "META / MSFT / AAPL",
    "META -5.51%、MSFT -2.66%、AAPL -1.25%",
    "大型平台股跟隨 Nasdaq 回落；市場亦關注 AI 基建融資/攤薄與估值壓力。",
  ],
  [
    "GOOGL",
    "-0.98% 至 $368.53",
    "跌幅相對輕，但仍未能抵消 communication services 板塊壓力。",
  ],
  [
    "PG / KO / WMT",
    "PG +4.09%、KO +3.46%、WMT +0.97%",
    "防守消費明顯跑出，反映資金由 AI beta 轉去低波動現金流。",
  ],
  [
    "LLY",
    "+0.55% 至 $1,131.42",
    "Health Care 成第二防守方向，增長型防守股有承接。",
  ],
  [
    "Crypto beta",
    "BTC 跌穿 $61k 附近；高 beta 相關股偏弱",
    "風險資產同步降槓桿，Crypto 未能成為避險替代。",
  ],
];

const macroRows = [
  [
    "非農就業 / 失業率",
    "+172k；失業率 4.3%",
    "BLS 官方：May payrolls 遠高於 Reuters/Dow Jones 約 80k-85k 預期，係今日 good news is bad news 的核心。",
  ],
  [
    "平均時薪",
    "+0.3% m/m、+3.4% y/y",
    "薪資仍有韌性，令市場更難押 Fed 很快轉鴿。",
  ],
  [
    "2Y / 10Y / 30Y Treasury",
    "約 4.17% / 4.54%-4.55% / 5.00%",
    "前端升幅最大，反映政策利率重估；Advisor Perspectives 指 2Y 創 2025 年 2 月以來高位。",
  ],
  [
    "FedWatch / 利率定價",
    "12 月加息機率約 68.4%；6 月仍預期維持 3.50%-3.75%",
    "Reuters 引 CME FedWatch：就業後市場明顯上調年尾加息定價。",
  ],
  [
    "DXY / 美元",
    "100.07，+0.66%",
    "美元跟隨債息抽升；對黃金、商品及海外收入科技股估值都係壓力。",
  ],
  [
    "WTI Oil",
    "$90.54，-2.69%",
    "油價回落未能救風險資產，因主線已轉為利率與 AI 估值重估。",
  ],
  ["Gold", "$4,337.10，-3.10%", "美元與實質利率壓力大過避險需求，金價急跌。"],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$60,454.00",
    "約 -7.55% vs 前一交易日 4:00pm ET",
    "Binance Vision 2026-06-05 20:00 UTC 1m close；同分鐘高位/收盤均為 $60,454.00。",
  ],
  [
    "ETHUSDT",
    "$1,577.32",
    "約 -12.37%",
    "Binance Vision 2026-06-05 20:00 UTC 1m close。",
  ],
  [
    "SOLUSDT",
    "$63.69",
    "約 -11.24%",
    "Binance Vision 2026-06-05 20:00 UTC 1m close。",
  ],
];

const notes = [
  "今日係典型 good news is bad news：May 非農 +172k 遠高預期，經濟韌性本身唔差，但市場即刻重估 Fed 年尾加息風險。",
  "最大傷口在 AI/半導體：Nasdaq -4.18%，Technology ETF proxy -6.66%，NVDA、AVGO、MU、AMD、INTC、MRVL 全線急跌。",
  "資金未係完全清倉，而係輪動去防守：Consumer Staples、Utilities、Health Care 逆市或相對跑贏。",
];

const technicalLevels = [
  [
    "S&P 500",
    "7,423-7,319",
    "FXStreet 指 ES 回到關鍵 weekly decision band；收市在區間內，下一步要睇能否重上 7,423。",
  ],
  [
    "S&P 500",
    "7,300",
    "多個技術評論視作下一個心理/結構支持；跌穿會令 correction 敘事升級。",
  ],
  ["Nasdaq", "25,700", "今日收市貼近位置；若失守，AI beta 可能繼續被動減倉。"],
  ["VIX", "20 / 25", "20 以上代表風險重新定價；25 以上就要當作更深度去槓桿。"],
  [
    "10Y Treasury",
    "4.55% / 4.67%",
    "4.55% 附近係今日收市；5 月高位約 4.67%，若再試會壓估值。",
  ],
  ["BTC", "$60,000", "美股收市附近貼近整數關；失守會放大 crypto beta 壓力。"],
];

const watchList = [
  "6/10：May CPI（BLS 8:30am ET）。就業已經偏熱，通脹若再高，Fed hawkish repricing 會加速。",
  "6/11：May PPI、Initial Claims。留意企業成本壓力會否支持『高通脹 + 高利率』敘事。",
  "6/16-17：FOMC 會議與點陣圖，市場目前仍押 6 月不動，但焦點係措辭與年尾加息風險。",
  "半導體後續：AVGO 指引消化、SOX/AI leaders 能否止跌；若反彈無量，短線仍係逢高減風險。",
  "Crypto：BTC $60k、ETH $1,550-$1,600、SOL $63 附近能否守住；若同步失守，風險資產情緒會更弱。",
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
            {row.map((cell) => (
              <td key={cell}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function USCloseBrief20260605() {
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
          background: linear-gradient(135deg, #111827 0%, #7f1d1d 56%, #b45309 100%);
          color: white;
          border-radius: 28px;
          padding: 42px;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
        }
        .eyebrow { font-size: 16px; opacity: 0.86; letter-spacing: 0.08em; }
        h1 { font-size: 48px; margin: 10px 0 14px; line-height: 1.12; }
        .subtitle { font-size: 22px; max-width: 900px; opacity: 0.94; }
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
        h3 { font-size: 19px; margin: 18px 0 8px; color: #7f1d1d; }
        ul { padding-left: 22px; margin: 10px 0; }
        li { margin: 8px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 15px; }
        th {
          background: #fff1f2;
          color: #7f1d1d;
          text-align: left;
          padding: 10px;
          border-bottom: 1px solid #fecdd3;
        }
        td { padding: 11px 10px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
        .callout {
          border-left: 5px solid #dc2626;
          background: #fff7ed;
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
        <h1>非農太強，AI 半導體急速去槓桿</h1>
        <p className="subtitle">
          6 月 5 日美股三大指數急跌，S&P 500 跌 2.64%、Nasdaq 跌
          4.18%。表面係科技股
          selloff，核心其實係強勁就業數據推高年尾加息機率，令高估值 AI
          交易一次過被重新定價。
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
            今日結論：唔好急住撈 AI beta。大市由「追突破」切換成「等恐慌釋放 +
            睇 CPI/Fed」，S&P 500 要先收復 7,423-7,450，先叫修復返短線結構。
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
              Reuters/SRN 指 NYSE 下跌股對上升股約 3.14:1，Nasdaq 約
              3.48:1；即係唔係幾隻 mega-cap 自己跌，而係廣泛 risk-off。
            </li>
            <li>
              S&P 500 只錄得 14 隻 52 週新高、3 隻新低；Nasdaq 則 83 隻新高、178
              隻新低，科技內部破位更明顯。
            </li>
            <li>
              VIX 由 15.40 升到 21.51，波動率一下子由 complacency 轉去警戒區。
            </li>
            <li>
              防守板塊逆市企穩，說明資金係輪動與降 beta，而不是全面無差別清倉。
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
            收市價計算；Ameriprise FactSet 口徑列 Consumer Staples +1.6%、Info
            Tech -5.8%，方向一致。
          </p>
        </Card>

        <Card title="5｜點解今日會跌？">
          <h3>壓力因素</h3>
          <ul>
            <li>
              BLS 非農
              +172k，遠高預期，令市場由「等減息」轉向「可能年尾再加息」。
            </li>
            <li>
              10Y Treasury 升至約 4.54%-4.55%，2Y 升至約 4.17%；估值最長、最
              crowded 的 AI/半導體先被沽。
            </li>
            <li>
              Broadcom 業績後未有滿足市場對 AI
              指引的超高期望，觸發半導體鏈由盈利故事轉為估值壓縮。
            </li>
            <li>BTC、ETH、SOL 同步下跌，顯示高 beta 資產一齊去槓桿。</li>
          </ul>
          <h3>支持因素</h3>
          <ul>
            <li>
              就業強本身代表經濟未急速轉差，今次更似利率/估值重估，而非
              recession panic。
            </li>
            <li>
              Consumer Staples、Utilities、Health Care
              仍有承接，資金仍在場內找避風位置。
            </li>
            <li>
              下週 CPI/PPI/FOMC 前，若數據回落或 Fed 口徑穩定，市場有機會先做
              oversold bounce。
            </li>
          </ul>
        </Card>

        <Card title="6｜宏觀白話版">
          <DataTable headers={["項目", "數據", "解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：今日不是「經濟差」跌市，而是「經濟太硬、Fed
            可能更硬」跌市。高估值資產最怕的不是壞消息，而是折現率突然抽高。
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
            headers={["幣種", "4:00pm ET 附近價", "24h 對比", "來源/備註"]}
            rows={cryptoRows}
          />
          <p className="small">
            Crypto 採 Binance Vision public data：2026-06-05 20:00
            UTC（美東夏令時間 4:00pm ET）1 分鐘 K 線 close；直接 Binance API
            在部分環境可能受地區限制，所以採 Binance Vision。24h 對比以
            2026-06-04 20:00 UTC 同口徑 1m close 計算。
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
              唔好用「上星期升市」的倉位去接「今日波動率重估」。等 S&P 500 企回
              7,423-7,450 或 VIX 回落，先考慮加 risk。
            </li>
            <li>
              <strong>中線：</strong>AI 主線未必完，但要由 beta trade 轉為
              earnings quality
              trade；能真正上調指引、自由現金流夠強、估值無咁迫的公司優先。
            </li>
            <li>
              <strong>風控：</strong>10Y 接近 4.67%、VIX 上 25、BTC 失守
              $60k，三個訊號同時出現就要再降槓桿。
            </li>
            <li>
              <strong>一句到尾：</strong>
              今日係牛市中一次夠痛的「估值壓力測試」；未必等於趨勢反轉，但已經足夠提醒市場：高利率環境下，AI
              故事要靠業績兌現，唔可以只靠想像力。
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
              指數收市：Reuters/SRN、CNBC 與 Yahoo Chart 均列 S&P 500
              7,383.74、Dow 50,866.78、Nasdaq 25,709.43；本文採一致口徑。
            </li>
            <li>
              板塊：表格採 Yahoo Finance ETF proxy 收市價；Ameriprise/FactSet
              行業口徑列 Consumer Staples +1.6%、Info Tech -5.8%，與 ETF proxy
              方向一致但幅度略有差異。
            </li>
            <li>
              債息：10Y Yahoo Chart 為 4.536%，Advisor Perspectives 列 10Y 約
              4.55%、2Y 4.17%；本文四捨五入並標示來源差異。
            </li>
            <li>
              Crypto：直接 Binance API 可能受地區限制；本文採 Binance Vision
              public data 20:00 UTC 1m close，並列明時間點。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
