import React from "react";

const reportDate = "2026-06-10";
const publishedAt = "香港時間 2026-06-11 09:35";

const sources = [
  {
    name: "CNBC - Stock market news for June 10, 2026",
    url: "https://www.cnbc.com/2026/06/09/stock-market-today-live-updates.html",
  },
  {
    name: "Investopedia - Markets News, June 10, 2026",
    url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-06102026-11994618",
  },
  {
    name: "The Motley Fool - Stock Market Today, June 10",
    url: "https://www.fool.com/coverage/stock-market-today/2026/06/10/stock-market-today-june-10-super-micro-computer-nvidia-micron-fall-as-risk-off-mood-intensifies/",
  },
  {
    name: "BLS - Consumer Price Index, May 2026",
    url: "https://www.bls.gov/news.release/cpi.htm",
  },
  {
    name: "Federal Reserve H.15 - Selected Interest Rates",
    url: "https://www.federalreserve.gov/releases/h15/",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "Trading Economics - Brent crude oil and commodities",
    url: "https://tradingeconomics.com/commodity/brent-crude-oil",
  },
  {
    name: "Yahoo Finance - sector ETF quote comparison",
    url: "https://uk.finance.yahoo.com/quotes/XLE,XLF,XLC,XLRE,XLI,XLK,XLB,XLY,XLV,XLU/view/fv/",
  },
  {
    name: "CoinStats AI - Crypto market update, June 10",
    url: "https://coinstats.app/ai/a/crypto-news-update-10-June-2026",
  },
  {
    name: "CoinDesk - BTC and gold fall together",
    url: "https://www.coindesk.com/markets/2026/06/10/bitcoin-and-gold-fall-together-as-a-rate-hike-bet-hits-every-hedge",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "S&P 500",
    "7,266.99",
    "-119.66 / -1.62%",
    "CNBC、Investopedia 與 Motley Fool 一致；跌穿 7,300，回到 5 月初區間。",
  ],
  [
    "Dow Jones",
    "49,918.78",
    "-953.33 / -1.87%",
    "失守 50,000 心理位，跌幅不只是科技，工業/周期股亦被拖低。",
  ],
  [
    "Nasdaq Composite",
    "25,169.50",
    "-509.32 / -1.98%",
    "AI/半導體延續去風險，Nasdaq 連續跑輸，估值壓力未解除。",
  ],
  [
    "Russell 2000",
    "2,835.46",
    "-1.10%",
    "小型股同樣下跌，但跌幅較 Nasdaq 細；壓力主要來自大型成長股與地緣風險。",
  ],
  [
    "VIX",
    "22.22",
    "+2.35 / 約 +12%",
    "升穿 22，代表市場由單純輪動進入較明顯避險模式。",
  ],
];

const sectorRows = [
  [
    "Energy / XLE",
    "+0.92%",
    "綠燈",
    "油價因美伊局勢反彈，能源成為少數受惠板塊。",
  ],
  [
    "Consumer Staples / XLP",
    "約 +1.65%",
    "防守綠",
    "KO、WMT 等防守消費逆市上升，資金避開高 beta。",
  ],
  [
    "Health Care / XLV",
    "-0.30%",
    "相對抗跌",
    "醫療防守性仍在，跌幅較大市細，但未能完全避開 risk-off。",
  ],
  [
    "Utilities / XLU",
    "-0.39%",
    "相對抗跌",
    "收益型板塊跌幅有限，但債息仍高，限制估值修復。",
  ],
  [
    "Financials / XLF",
    "-0.65%",
    "中性偏弱",
    "債息高但曲線與信用風險未算友善，銀行股未見明顯承接。",
  ],
  [
    "Communication Services / XLC",
    "-0.53%",
    "中性偏弱",
    "平台股跟隨科技氣氛轉弱，但 ETF proxy 跌幅較指數細。",
  ],
  [
    "Real Estate / XLRE",
    "-0.54%",
    "偏弱",
    "10Y 仍在 4.5% 附近，REITs 對利率敏感，反彈暫停。",
  ],
  [
    "Industrials / XLI",
    "-1.14%（S&P sector 約 -3.4%）",
    "紅燈",
    "Investopedia 指 Industrials 是 S&P 最大拖累之一；Amazon LTL 擴張亦壓物流股。",
  ],
  [
    "Materials / XLB",
    "-1.36%（S&P sector 跌逾 2%）",
    "紅燈",
    "全球風險降溫、金屬/周期需求憂慮升，材料跑輸。",
  ],
  [
    "Technology / XLK / SOXX",
    "XLK proxy +0.11%；SOXX 跌逾 3%",
    "分化但偏紅",
    "ETF proxy 與新聞行業口徑有差異；半導體與 AI beta 明顯受壓，是大市主拖累。",
  ],
  [
    "Consumer Discretionary / XLY",
    "-0.77%（S&P sector 跌逾 2%）",
    "紅燈",
    "Tesla/Amazon 等高估值消費科技偏弱，零售防守未能抵銷。",
  ],
];

const stockRows = [
  [
    "SMCI",
    "-27.98% 至 $29.27",
    "宣布 $7bn equity-related raise 以支援 AI 訂單採購，市場即時擔心攤薄與現金流。",
  ],
  [
    "SOXX / PHLX Semi",
    "SOXX 跌逾 3%；PHLX Semi 約 -3.6%",
    "半導體連續受壓，資金質疑 AI trade 是否過度擠擁。",
  ],
  [
    "NVDA / AVGO / AMD / MU",
    "NVDA 約 -3.7%；AVGO 約 -5%；AMD/MU 受壓",
    "AI 核心股仍是風險胃納 thermometer；Broadcom 指引/估值壓力未消化。",
  ],
  [
    "AAPL",
    "小幅上升 / 相對抗跌",
    "Investopedia 指 Mag 7 除 Apple 外多數下跌；Apple 成少數大型科技避風位。",
  ],
  [
    "TSLA",
    "約 -3.8%",
    "高 beta 成長股在 VIX 升穿 22 時被先減倉，亦受 SpaceX IPO 資金分流討論影響。",
  ],
  [
    "KO / TJX / WMT",
    "KO +2.77%；TJX 小升；WMT +1.44%",
    "防守消費與折扣零售逆市跑贏，反映資金想降低組合波動。",
  ],
  [
    "CBRL",
    "約 +23%",
    "Cracker Barrel surprise profit 並上調全年展望，逆市成 earnings winner。",
  ],
  [
    "ODFL / XPO / SAIA / FDXF",
    "ODFL 跌逾 6%；XPO/SAIA 約跌 5%；FDXF 約跌 3%",
    "Amazon 開放 LTL freight 服務至外部企業，物流股被重估競爭風險。",
  ],
  [
    "ORCL",
    "盤後跌約 7%-9%",
    "Q4 revenue/OCI 強，但 FY26 capex $55.7bn、FY27 capex 指引最高 $95bn，市場擔心 AI 基建燒錢。",
  ],
];

const macroRows = [
  [
    "CPI",
    "Headline +0.5% MoM / +4.2% YoY；Core +0.2% MoM / +2.9% YoY",
    "BLS 官方數據：headline 創約三年高位但符合預期；core MoM 低於 0.3% consensus，細節不是全壞。",
  ],
  [
    "2Y / 10Y / 30Y Treasury",
    "官方 H.15 最新 6/9：4.13% / 4.53% / 5.01%；盤中 10Y 約 4.52%-4.56%",
    "官方 H.15 未列 6/10 收市，本文採官方最新值加新聞即時區間；10Y 仍在估值壓力區。",
  ],
  [
    "FedWatch / 6 月 FOMC",
    "維持 3.50%-3.75% 機率約 96.7%-98.2%",
    "6 月不動仍是 base case；真正風險在 Warsh 首次 FOMC、點陣圖與下半年會否轉 hawkish。",
  ],
  [
    "WTI / Brent",
    "CNBC：WTI $90.03（+2.07%）、Brent $93.10（+1.8%）；FT/TE Brent 約 $95",
    "油價因 Trump 對 Iran 強硬言論與 Strait of Hormuz 風險反彈，直接推高通脹風險溢價。",
  ],
  [
    "Gold",
    "約 $4,115-$4,141/oz",
    "Investopedia 報 $4,115；Invezz 報 COMEX 約 $4,140.62。合約/時間點不同，但方向一致：黃金被 rate-hike bet 打壓。",
  ],
  [
    "DXY / 美元",
    "約 99.97，微升約 0.1%",
    "美元未大升，但在油價與實質利率壓力下，風險資產仍缺乏匯率支撐。",
  ],
  [
    "本週焦點",
    "Oracle earnings、Adobe earnings、SpaceX IPO、6/16-17 FOMC",
    "市場同時消化 AI 基建燒錢、超大型 IPO 抽資、通脹與地緣政治，波動未完。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT / BTC",
    "約 $61,477-$61,900",
    "CoinStats 24h 約 -2.97%",
    "Binance Vision 2026-06-10 1m 日檔在生成時未能取得；採 CoinStats/CoinDesk 6/10 報價，非精準 4:00pm ET Binance close。",
  ],
  [
    "ETHUSDT / ETH",
    "約 $1,631-$1,648",
    "CoinStats 24h 約 -3.33%",
    "CoinStats 列 $1,631.80；CoinDesk 約 $1,625。口徑不同但均顯示 ETH 跟隨 risk-off 下跌。",
  ],
  [
    "SOLUSDT / SOL",
    "約 $64.18-$64.97",
    "CoinStats 24h 約 -4.39%",
    "SOL 是三者中 beta 較高，跌幅大過 BTC/ETH；因非 Binance 精準 K 線，報告採範圍與來源註明。",
  ],
];

const notes = [
  "今日不是普通回吐，是「油價/地緣政治 + CPI + AI 估值」三重壓力同時出現：S&P 500 -1.62%、Nasdaq -1.98%、Dow -1.87%。",
  "Dow 跌 953 點並失守 50,000，代表壓力由科技擴散到周期/工業，不再只是半導體單一板塊問題。",
  "CPI headline +4.2% YoY 創三年高位，但 core MoM +0.2% 低於預期；市場真正怕的是油價再升令 Fed 下半年更難轉鴿。",
  "半導體仍是市場弱點：SOXX 跌逾 3%、SMCI -27.98%、NVDA/AVGO 跌，AI trade 被迫重新計風險。",
  "防守消費與能源相對跑贏；KO、WMT、XLE 逆市向好，資金明顯想降低 beta。",
];

const technicalLevels = [
  [
    "S&P 500",
    "7,300 / 7,250",
    "今日收 7,266.99，已跌穿 7,300；若再失 7,250，短線反彈結構會明顯轉差。",
  ],
  [
    "S&P 500",
    "7,350 / 7,400",
    "要先收復 7,350 才算止血；7,400 以上才可說買盤重新接管。",
  ],
  [
    "Nasdaq Composite",
    "25,000 / 24,800",
    "25,000 是心理位；若失守，AI/半導體去槓桿可能延伸到其他 growth names。",
  ],
  [
    "VIX",
    "22 / 25",
    "VIX 已升穿 22；若再升穿 25，代表 CPI/油價/IPO 風險開始變成全面避險。",
  ],
  [
    "10Y Treasury",
    "4.50% / 4.60%",
    "4.50% 上方對 growth multiple 不友善；4.60% 是下一個估值壓力位。",
  ],
  [
    "BTC",
    "$61,500 / $60,000",
    "BTC 仍在 $60k-$63k 區間；跌穿 $60k 會令 crypto beta 再拖累風險情緒。",
  ],
];

const watchList = [
  "6/11：Adobe earnings、PPI / Initial Claims。留意 software 是否跟半導體一樣被重估。",
  "6/12：SpaceX IPO 預期登場；若抽資效應持續，AI/高 beta names 可能仍有資金壓力。",
  "6/16-17：FOMC。FedWatch 顯示 6 月大概率維持利率，重點是 Warsh 記者會與點陣圖。",
  "油價與 Iran/Hormuz：WTI 若企穩 $90-$95 以上，headline CPI 後續仍有上行風險。",
  "半導體：SOXX/SMH 要止跌，特別看 NVDA、AVGO、SMCI 後續是否出現 forced selling。",
  "S&P 500：觀察 7,250 支持；若收復 7,350，才可視為短線恐慌降溫。",
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

export default function USCloseBrief20260610() {
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
          background: linear-gradient(135deg, #111827 0%, #7f1d1d 52%, #b45309 100%);
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
        .red { color: #b91c1c; font-weight: 700; }
        .green { color: #047857; font-weight: 700; }
        a { color: #1d4ed8; text-decoration: none; }
        .small { color: #64748b; font-size: 14px; }
      `}</style>

      <header className="hero">
        <div className="eyebrow">美股收盤懶人包｜完整版</div>
        <h1>油價與通脹陰影回來，AI 股再被去風險</h1>
        <p className="subtitle">
          6 月 10 日美股全面下跌：S&P 500 跌 1.62%、Nasdaq 跌 1.98%、Dow
          跌 953 點並失守 50,000。CPI headline 升至 4.2% 雖然符合預期，但油價因
          美伊局勢再抽升，令市場擔心 Fed 下半年更難轉鴿；半導體與 AI 高估值股成為主要沽壓來源。
        </p>
        <div className="meta">
          <span className="pill">交易日：{reportDate}</span>
          <span className="pill">發布：{publishedAt}</span>
          <span className="pill">語言：繁體中文 / 廣東話語氣</span>
          <span className="pill">Crypto：Binance 未能精準取得，採近似來源並註明</span>
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
            今日結論：市場由「科技輪動」升級成「宏觀風險重新定價」。未見恐慌崩盤，
            但 VIX 升穿 22、Dow 失 50,000、S&P 跌穿 7,300，短線要先守 7,250。
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
              三大指數同步跌逾 1.6%，與前一日「Dow 綠、Nasdaq 弱」不同，今日已是較廣泛 risk-off。
            </li>
            <li>
              VIX 收 22.22，代表 CPI、Iran/Hormuz 與 AI IPO/估值壓力開始觸發避險需求。
            </li>
            <li>
              Russell 2000 -1.10% 跌幅細過 Nasdaq，但仍同步轉弱，反映不是單純大型科技被沽。
            </li>
            <li>
              Crypto 同步偏弱，BTC 約 $61.5k、ETH 約 $1.63k、SOL 約 $64；因 Binance
              4:00pm ET 精準 K 線未能取得，本文採來源範圍並清楚註明。
            </li>
          </ul>
        </Card>

        <Card title="4｜板塊紅綠燈">
          <DataTable
            headers={["板塊 / ETF proxy", "變動", "訊號", "一句講晒"]}
            rows={sectorRows}
          />
          <p className="small">
            板塊表採 Yahoo Finance Select Sector ETF quote comparison 與新聞行業口徑交叉；
            Investopedia 指 S&P 500 Industrials、Materials、Information Technology、Consumer
            Discretionary 跌幅較 ETF proxy 更深，本文在表內列出差異。
          </p>
        </Card>

        <Card title="5｜點解今日會跌？">
          <h3>壓力來源</h3>
          <ul>
            <li>
              Trump 對 Iran 表態強硬，美伊衝突與 Strait of Hormuz 風險推高油價，
              WTI/Brent 重新上試 $90/$93-$95 區間。
            </li>
            <li>
              BLS CPI headline 升至 4.2% YoY，市場擔心能源價格會令後續通脹黏住，
              FedWatch 雖仍顯示 6 月不動，但下半年減息想像更弱。
            </li>
            <li>
              半導體與 AI trade 再被沽：SMCI 融資消息觸發攤薄憂慮，NVDA/AVGO/AMD
              受壓，SOXX 跌逾 3%。
            </li>
            <li>
              SpaceX IPO 臨近，市場討論部分資金由高 beta AI winners 抽走以準備認購/配置。
            </li>
          </ul>
          <h3>支持因素</h3>
          <ul>
            <li>Core CPI MoM +0.2% 低於 0.3% 預期，通脹細節未算全面失控。</li>
            <li>能源與防守消費有承接，XLE、XLP、KO、WMT 逆市跑贏。</li>
            <li>FedWatch 仍顯示 6 月維持利率為高概率事件，短線未到政策突變。</li>
          </ul>
        </Card>

        <Card title="6｜宏觀白話版">
          <DataTable headers={["項目", "數據", "解讀"]} rows={macroRows} />
          <div className="callout">
            白話講：CPI 本身不是大爆雷，問題是油價又升、10Y 又高、Fed 又未能放鬆。
            對高估值科技股來說，這個組合等於「盈利要繼續好，但 discount rate 不肯跌」。
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
              "對比/24h",
              "來源/備註",
            ]}
            rows={cryptoRows}
          />
          <p className="small">
            Crypto 優先嘗試 Binance Vision public data，但 2026-06-10 spot daily 1m
            archive 在生成時未能取得；因此本文採 CoinStats、CoinDesk 6/10 報價作近似，
            不是 Binance 4:00pm ET 精準 1m close。若後續 Binance 檔案可用，應以 Binance
            20:00 UTC close 作準。
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
              不要急於撈 AI beta。先看 S&P 500 能否守 7,250、Nasdaq 能否守 25,000、
              VIX 能否回落到 22 以下。
            </li>
            <li>
              <strong>中線：</strong>AI 主線未死，但市場正由「買增長故事」變成「審 capex、
              free cash flow、估值與融資風險」。
            </li>
            <li>
              <strong>風控：</strong>若 WTI 企穩 $95、10Y 升穿 4.60%、VIX 升穿 25，
              應降低高 beta / 高槓桿 / 單一主題集中度。
            </li>
            <li>
              <strong>一句到尾：</strong>
              今日是一次宏觀壓力測試：core CPI 有少少好消息，但油價與地緣風險令市場不敢再用高估值追 AI。
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
              指數收市：CNBC、Investopedia 與 Motley Fool 均列 S&P 500 7,266.99、Dow
              49,918.78、Nasdaq 25,169.50；本文採一致口徑。
            </li>
            <li>
              板塊：Yahoo ETF proxy 與 Investopedia 的 S&P GICS sector
              口徑有差異，特別是 Technology/Industrials；本文列明兩者差異，主敘事以新聞行業拖累為準。
            </li>
            <li>
              宏觀：債息官方 H.15 目前最新列至 6/9，故 6/10 盤中/收市區間採新聞與市場資料交叉。
              油價、金價因合約與時間點不同列範圍。
            </li>
            <li>
              FedWatch：Investing.com 顯示 6 月維持 3.50%-3.75% 機率 96.7%，其他引述 CME
              FedWatch 約 98.2%；本文列範圍並指出方向一致。
            </li>
            <li>
              Crypto：Binance Vision 1m daily file 未能取得，本文未把近似 CoinStats/CoinDesk
              報價包裝成 Binance 精準 close；待 Binance 檔案可用應再校正。
            </li>
          </ul>
          <p>{disclaimer}</p>
        </Card>
      </div>
    </main>
  );
}
