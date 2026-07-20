import React from "react";

const reportDate = "2026-07-17";
const publishedAt = "香港時間 2026-07-20 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market news for July 17, 2026",
    url: "https://www.cnbc.com/2026/07/16/stock-market-today-live-updates.html",
  },
  {
    name: "Reuters via CNA - Wall Street ends lower as chip selloff broadens",
    url: "https://www.channelnewsasia.com/world/us-stocks-wall-street-chip-market-6262051",
  },
  {
    name: "Reuters via SRN - Wall St ends lower for the day and week",
    url: "https://srnnews.com/sp-500-and-nasdaq-slip-as-chip-rout-extends-netflix-slides/",
  },
  {
    name: "Investopedia - Markets News, July 17, 2026",
    url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-07172026-12021361",
  },
  {
    name: "Yahoo Finance chart API - index, ETF and stock close data",
    url: "https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC?interval=1d",
  },
  {
    name: "CNBC - Treasury yields mixed as traders weigh Middle East strikes",
    url: "https://www.cnbc.com/2026/07/17/treasury-yields-tumble-as-traders-weigh-domestic-outlook-and-fresh-middle-east-strikes.html",
  },
  {
    name: "Advisor Perspectives - Treasury Yields Snapshot: July 17, 2026",
    url: "https://www.advisorperspectives.com/dshort/updates/2026/07/17/treasury-yields-snapshot-july-17-2026",
  },
  {
    name: "University of Michigan - Surveys of Consumers preliminary July 2026",
    url: "https://www.sca.isr.umich.edu/?stream=top",
  },
  {
    name: "Federal Reserve G.17 - Industrial Production and Capacity Utilization",
    url: "https://www.federalreserve.gov/RELEASES/g17/Current/g17.txt",
  },
  {
    name: "Reuters via Yahoo Finance - US housing starts and building permits",
    url: "https://finance.yahoo.com/real-estate/articles/us-single-family-housing-starts-125103224.html",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "CNBC - Gold heads for biggest weekly loss in six",
    url: "https://www.cnbc.com/2026/07/17/gold-on-track-for-biggest-weekly-loss-in-six-as-iran-war-fans-inflation-worries.html",
  },
  {
    name: "CNBC - Netflix Q2 2026 earnings",
    url: "https://www.cnbc.com/2026/07/16/netflix-nflx-earnings-q2-2026.html",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "Dow Jones",
    "52,146.42",
    "-406.55 / -0.77%",
    "藍籌跟住大市回落，但跌幅細過 Nasdaq；能源與個別保險股有承接，未至於單邊崩盤。",
  ],
  [
    "S&P 500",
    "7,457.69",
    "-76.08 / -1.01%",
    "跌穿 7,500，連同周線轉弱，代表高位整固已變成較明顯 risk-off。",
  ],
  [
    "Nasdaq Composite",
    "25,520.24",
    "-361.70 / -1.40%",
    "半導體與 mega-cap growth 再被沽，科技指數連續跑輸大市。",
  ],
  [
    "Russell 2000",
    "2,962.22",
    "-12.35 / -0.42%",
    "小型股跌幅較細，反映壓力集中在高估值科技，而非所有風險資產同步失守。",
  ],
  [
    "VIX",
    "18.77",
    "+2.04 / +12.19%",
    "波動率逼近 20；由可控調整升級至需要更嚴格風控的區間。",
  ],
];

const sectorRows = [
  [
    "Energy / XLE",
    "+1.16%",
    "唯一綠燈",
    "WTI 與 Brent 急升，油氣股成為全場最清晰避風港。",
  ],
  [
    "Real Estate / XLRE",
    "-0.09%",
    "相對抗跌",
    "債息長端回落少少，REITs 跌幅有限，但高利率仍限制上望。",
  ],
  [
    "Industrials / XLI",
    "-0.41%",
    "抗跌",
    "TRV 急升抵消部分 cyclicals 壓力，板塊比 growth 防守。",
  ],
  [
    "Health Care / XLV",
    "-0.44%",
    "抗跌",
    "UNH、ABT 仍有延續買盤，醫療在風險降溫時相對穩。",
  ],
  [
    "Utilities / XLU",
    "-0.66%",
    "防守",
    "公用股跌幅低於大市，但油價通脹與短債息上升限制 defensive rerating。",
  ],
  [
    "Consumer Staples / XLP",
    "-0.72%",
    "防守回吐",
    "前一日強勢後回吐，但仍好過 S&P 500。",
  ],
  [
    "Materials / XLB",
    "-0.71%",
    "偏弱",
    "環球風險降溫下 cyclicals 未有明顯承接。",
  ],
  [
    "Financials / XLF",
    "-0.86%",
    "偏弱",
    "銀行業績季開局不差，但 risk-off 與曲線訊號令板塊被拖低。",
  ],
  [
    "Technology / XLK",
    "-1.09%",
    "跑輸",
    "AI capex、估值與中國模型競爭敘事一齊壓住科技股。",
  ],
  [
    "Semiconductors / SOXX",
    "-1.64%",
    "受壓",
    "Reuters 指 SOX 較 6月22日高位低 20.2%，正式進入熊市技術區。",
  ],
  [
    "Consumer Discretionary / XLY",
    "-1.62%",
    "跑輸",
    "高估值消費與 Tesla 等 beta 股被減倉。",
  ],
  [
    "Communication Services / XLC",
    "-1.78%",
    "最弱",
    "Netflix、Alphabet、Meta 同跌，成為當日最大板塊拖累。",
  ],
];

const stockRows = [
  [
    "NFLX",
    "$68.95 / -7.26%",
    "Q2 EPS $0.80 略勝、收入 $12.56B 略低預期；市場更在意 Q3 revenue growth 指引約 12% 及觀看數據披露減少。",
  ],
  [
    "TSM / TSMC",
    "$398.37 / -2.77%",
    "前一日 capex 指引上調後沽壓延續；市場將焦點由 AI 需求轉向投資回報與供應鏈成本。",
  ],
  [
    "NVDA / AVGO / AMD / MU / ARM",
    "NVDA -2.21%、AVGO -0.97%、AMD -1.03%、MU -0.50%、ARM +1.98%",
    "半導體內部有短線補倉，但整體仍受 SOX 熊市確認影響；ARM 逆市反彈未足以扭轉板塊趨勢。",
  ],
  [
    "GOOGL / META / OMC",
    "GOOGL -2.17%、META -2.79%、OMC -2.90%",
    "通訊服務受 Netflix 與廣告/平台 beta 拖累，跌幅大過大市。",
  ],
  [
    "TSLA / XLY",
    "TSLA $380.84 / -2.61%；XLY -1.62%",
    "高 beta 消費股跟住 Nasdaq 轉弱；市場不願在週末前持有長久期 growth beta。",
  ],
  [
    "XOM / CVX / COP",
    "XOM +0.97%、CVX +1.91%、COP +1.66%",
    "油價急升直接推高能源股，亦令 XLE 成為唯一上升主要板塊。",
  ],
  [
    "TRV / ISRG",
    "TRV +9.22%；ISRG -14.15%",
    "業績分化明顯：Travelers beat 後急升，Intuitive Surgical 則因指引/增長疑慮被大幅重估。",
  ],
  [
    "SPCX / PSKY / WBD",
    "SPCX -5.43%、PSKY -4.27%、WBD -1.54%",
    "高熱度題材與併購相關媒體股在 risk-off 市況下承壓。",
  ],
];

const macroRows = [
  [
    "Consumer sentiment",
    "University of Michigan preliminary July sentiment 54.4，Jun 49.5；1Y inflation expectation 4.2%，long-run 3.3%",
    "情緒由低位反彈，但油價再升可能令改善難以持續；通脹預期仍高過 Fed 舒適區。",
  ],
  [
    "Industrial production",
    "Fed G.17：June industrial production +0.1%，Q2 annualized +4.0%；manufacturing unchanged，Q2 +4.7%",
    "實體活動未轉差，支持 soft-landing 敘事，但亦減少 Fed 需要急轉鴿的理由。",
  ],
  [
    "Housing",
    "Reuters/Census 口徑：single-family starts -0.2% 至 895k；overall permits -3.0% 至 1.367M",
    "高按揭利率繼續壓住房屋供應端，對 rate-sensitive 板塊不是好消息。",
  ],
  [
    "FedWatch",
    "Investing.com 7/18 00:35 EDT：7/29 hold 86.7%，+25bp 13.3%；前一日 hold 91.1%",
    "近端仍偏向不加息，但油價急升令加息尾部風險稍為回升。",
  ],
  [
    "Treasury yields",
    "CNBC：10Y 4.545%、2Y 4.179%、30Y 5.067%；Advisor Perspectives close 10Y 4.55%、2Y 4.18%",
    "曲線短端上、長端微跌，反映避險買債與 Fed hawkish risk 同時存在。",
  ],
  [
    "Oil / gold / dollar",
    "CNBC：WTI $82.49 +4.48%，Brent $88.10 +4.59%；Gold futures $4,018.80 +0.7%，但全周跌約 3%；DXY 約 100.50 上方",
    "油價是今日宏觀核心：推高能源股，也重新點燃通脹與 Fed 加息風險。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$64,063.99",
    "-0.33%",
    "BTC 跟隨風險資產降溫，但跌幅細過 Nasdaq，暫時仍屬高位震盪。",
  ],
  [
    "ETHUSDT",
    "$1,840.51",
    "-1.87%",
    "ETH 對 high beta sentiment 較敏感，跌幅最大。",
  ],
  ["SOLUSDT", "$75.07", "-1.03%", "SOL 跟隨 beta 回吐，仍守住 $75 附近。"],
];

const technicalRows = [
  [
    "S&P 500",
    "7,450 / 7,500 / 7,570",
    "已跌穿 7,500；若 7,450 失守，調整可能由高位回吐變成更深洗倉。",
  ],
  [
    "Nasdaq",
    "25,500 / 25,750 / 26,000",
    "25,500 是短線第一防線；要重上 26,000 才算 momentum 修復。",
  ],
  [
    "SOXX / SMH",
    "SOXX 520 / 545；SMH 555 / 570",
    "SOXX 貼近 520，晶片熊市訊號未解除前，不宜太快假設 V-shape rebound。",
  ],
  [
    "VIX",
    "18 / 20 / 22",
    "VIX 升穿 18 後，20 是下一條風險線；若突破 20，要降低槓桿與集中度。",
  ],
  [
    "WTI / Brent",
    "WTI 80 / 82.5；Brent 88 / 90",
    "油價若企穩在現水平，通脹交易會繼續壓住 growth multiple。",
  ],
];

const watchRows = [
  "半導體：SOX 是否繼續低於 6月高位 20% 以上；留意 ASML/AI capex、Kimi K3 敘事會否繼續發酵。",
  "油價：WTI $82.5、Brent $88-$90 是通脹與能源股延續性的關鍵位。",
  "Netflix / 通訊服務：NFLX 跌後會否拖累 META、GOOGL、PSKY/WBD 等同業估值。",
  "宏觀：Michigan sentiment 改善但油價反彈，留意通脹預期是否再次轉上。",
  "下週業績：Tesla、Alphabet、Intel 等大型科技財報，會決定 AI/growth 能否止血。",
];

const sourceFootnotes = [
  "指數收市採 CNBC/Reuters 最終口徑，並以 Yahoo Finance chart 1d close 交叉核對；Russell、VIX、ETF 與個股 close 採 Yahoo chart。",
  "板塊使用 SPDR ETF proxy；Reuters/CNBC 表述為 S&P 500 sectors，ETF close 與 sector index 可能有輕微差異。",
  "Crypto 使用 Binance Vision public data 1-minute kline，採 2026-07-17 20:00 UTC（美股 4:00pm ET 附近）close；變化率對比 2026-07-16 20:00 UTC。",
  "FedWatch 不是官方 Fed 指引，只是 fed funds futures 隱含機率；本文採 Investing.com 2026-07-18 00:35 EDT 更新。",
  "油價採 CNBC settlement；Investopedia 4:00pm ET 快照約 WTI $82.15、Brent $87.75，與 settlement 有時間差，本文以 settlement 為主。",
];

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="card">
      <h2>
        <span>{number}</span>
        {title}
      </h2>
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

export default function USCloseBrief20260717() {
  return (
    <main className="page">
      <style>{`
        .page {
          width: 1120px;
          margin: 0 auto;
          padding: 34px;
          background: #f8fafc;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.55;
        }
        .hero {
          background: linear-gradient(135deg, #111827 0%, #7f1d1d 46%, #0f766e 100%);
          color: white;
          border-radius: 28px;
          padding: 34px;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
        }
        h1 { margin: 0 0 10px; font-size: 46px; line-height: 1.08; letter-spacing: -0.03em; }
        .subtitle { font-size: 19px; opacity: 0.92; }
        .meta { margin-top: 14px; display: flex; gap: 12px; flex-wrap: wrap; }
        .pill {
          display: inline-flex;
          border-radius: 999px;
          padding: 7px 12px;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.24);
          font-size: 13px;
        }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .card {
          margin-top: 18px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 22px;
          padding: 22px;
          box-shadow: 0 16px 34px rgba(15, 23, 42, 0.07);
          break-inside: avoid;
        }
        h2 {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 13px;
          color: #0f766e;
          font-size: 23px;
        }
        h2 span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: #ecfdf5;
          color: #047857;
          font-size: 15px;
          font-weight: 800;
        }
        h3 { margin: 16px 0 8px; color: #334155; font-size: 18px; }
        ul { margin: 0; padding-left: 22px; }
        li { margin: 7px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
        th {
          text-align: left;
          color: #475569;
          background: #f1f5f9;
          border-bottom: 1px solid #cbd5e1;
          padding: 9px;
        }
        td { vertical-align: top; border-bottom: 1px solid #e5e7eb; padding: 9px; }
        .lead {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 16px;
        }
        .stat {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 18px;
          padding: 14px;
        }
        .stat strong { display: block; font-size: 24px; margin-top: 4px; }
        .red { color: #b91c1c; font-weight: 800; }
        .green { color: #047857; font-weight: 800; }
        .amber { color: #b45309; font-weight: 800; }
        .note { font-size: 12.5px; color: #64748b; }
        .callout {
          border-left: 5px solid #ef4444;
          background: #fff7ed;
          padding: 13px 15px;
          border-radius: 14px;
          margin-top: 10px;
        }
        a { color: #1d4ed8; text-decoration: none; overflow-wrap: anywhere; }
        @media print {
          .page { width: auto; padding: 20px; }
          .card { box-shadow: none; }
        }
      `}</style>

      <section className="hero">
        <h1>美股收盤懶人包｜完整版</h1>
        <div className="subtitle">
          {reportDate} 收市｜晶片熊市訊號確認，油價急升撐能源
        </div>
        <div className="meta">
          <span className="pill">{publishedAt}</span>
          <span className="pill">資料口徑：美股 4:00pm ET 附近</span>
          <span className="pill">
            Crypto：Binance Vision 20:00 UTC 1m close
          </span>
        </div>
        <div className="lead">
          <div className="stat">
            S&P 500
            <strong>7,457.69</strong>
            <span>-1.01%</span>
          </div>
          <div className="stat">
            Nasdaq
            <strong>25,520.24</strong>
            <span>-1.40%</span>
          </div>
          <div className="stat">
            VIX
            <strong>18.77</strong>
            <span>+12.19%</span>
          </div>
        </div>
      </section>

      <Section number="01" title="30秒重點">
        <ul>
          <li>
            美股連跌兼周線轉弱：S&P 500 -1.01%、Nasdaq -1.40%、Dow
            -0.77%，三大指數同日兼全周下跌。
          </li>
          <li>
            核心壓力仍然係 <strong>AI / 半導體估值重估</strong>：Reuters 指 SOX
            較 6月22日高位低 20.2%，正式跌入熊市技術區。
          </li>
          <li>
            能源係唯一清晰亮點：WTI +4.48% 至 $82.49，Brent +4.59% 至
            $88.10，帶動 XLE +1.16%。
          </li>
          <li>
            宏觀不完全差：Michigan sentiment 升至 54.4，Fed G.17 顯示工業生產
            +0.1%；但油價升令通脹與加息尾部風險回來。
          </li>
          <li>
            Crypto 跟隨 high beta 回吐：BTC -0.33%、ETH -1.87%、SOL
            -1.03%（Binance 20:00 UTC）。
          </li>
        </ul>
      </Section>

      <Section number="02" title="大市一眼睇">
        <DataTable
          headers={["指數", "收市", "變動", "解讀"]}
          rows={indexRows}
        />
        <p className="note">
          CNBC、Reuters/CNA 與 Yahoo chart 對主要指數收市數字一致；Russell 2000
          與 VIX 採 Yahoo chart close。
        </p>
      </Section>

      <Section number="03" title="板塊紅綠燈 / 熱度圖">
        <DataTable
          headers={["板塊 / ETF", "收市變動", "狀態", "白話解讀"]}
          rows={sectorRows}
        />
      </Section>

      <Section number="04" title="今日升跌原因">
        <h3>點解跌？</h3>
        <ul>
          <li>
            <strong>晶片沽壓由估值變技術破位：</strong>SOX
            由六月高位跌逾兩成，市場由「獲利回吐」改為「要重新定價 AI capex
            回報」。
          </li>
          <li>
            <strong>週末前風險折讓：</strong>
            美伊衝突升級、油價急升，投資者不想在周末前持有太多 high beta
            growth。
          </li>
          <li>
            <strong>Netflix 拖累通訊服務：</strong>收入略低預期、Q3
            指引未打消增長放慢疑慮，NFLX 跌逾 7%，拖低 XLC。
          </li>
        </ul>
        <h3>有咩未算壞？</h3>
        <ul>
          <li>Russell 2000 只跌 0.42%，小型股未有跟住 Nasdaq 一齊急瀉。</li>
          <li>能源股接力，油價相關板塊仍提供對沖；XOM、CVX、COP 全部上升。</li>
          <li>
            Michigan sentiment 與 industrial production
            顯示經濟未失速，問題主要是估值與通脹風險。
          </li>
        </ul>
      </Section>

      <Section number="05" title="宏觀白話版">
        <DataTable
          headers={["項目", "數字 / 來源口徑", "市場意思"]}
          rows={macroRows}
        />
      </Section>

      <Section number="06" title="債息、美元、黃金、原油">
        <ul>
          <li>
            <strong>美債：</strong>10Y 約 4.545%-4.55%，2Y 約 4.179%-4.18%，30Y
            約 5.067%；短端升、長端微跌，反映避險與 Fed 風險拉扯。
          </li>
          <li>
            <strong>美元：</strong>DXY 企在 100.50
            上方，受避險與加息尾部風險支持，但全周仍非單邊強勢。
          </li>
          <li>
            <strong>黃金：</strong>August gold settle 約 $4,018.80，日內升
            0.7%，但全周跌約 3%；油價通脹與利率預期壓住避險買盤。
          </li>
          <li>
            <strong>原油：</strong>WTI settle $82.49（+4.48%）、Brent
            $88.10（+4.59%）；油價成為今日最重要宏觀變數。
          </li>
        </ul>
      </Section>

      <Section number="07" title="重點股票">
        <DataTable headers={["股票", "收市 / 變動", "重點"]} rows={stockRows} />
      </Section>

      <Section number="08" title="Crypto：BTC / ETH / SOL">
        <DataTable
          headers={[
            "幣種",
            "Binance 20:00 UTC close",
            "對上一交易日 20:00 UTC",
            "解讀",
          ]}
          rows={cryptoRows}
        />
        <p className="note">
          Binance direct API 在本環境受地區限制；本報告使用 Binance Vision
          public data API 取得 1-minute kline。時間點為 2026-07-17 20:00
          UTC，即美股 4:00pm ET 附近。
        </p>
      </Section>

      <Section number="09" title="技術位與風險線">
        <DataTable headers={["資產", "關鍵位", "點睇"]} rows={technicalRows} />
      </Section>

      <Section number="10" title="明日交易計劃 / 觀察清單">
        <ul>
          {watchRows.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section number="11" title="操作提示">
        <div className="callout">
          今日重點不是「一日跌幅好大」，而是「SOX 跌入熊市 +
          油價急升」同時出現。前者壓低 growth
          multiple，後者推高通脹與加息尾部風險；短線要先守住 S&P 500 7,450 同
          VIX 20，才可以談反彈質素。
        </div>
        <ul>
          <li>
            不要急於接第一支 semis 反彈刀；等 SOXX/SMH 連續兩日企穩會更健康。
          </li>
          <li>若持有科技大倉，留意是否需要用能源/短久期資產分散宏觀風險。</li>
          <li>
            下週 Tesla、Alphabet、Intel 財報前，高 beta 倉位宜控制集中度與槓桿。
          </li>
        </ul>
      </Section>

      <Section number="12" title="來源、口徑與免責聲明">
        <h3>資料口徑</h3>
        <ul>
          {sourceFootnotes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3>主要來源連結</h3>
        <ul>
          {sources.map((source) => (
            <li key={source.url}>
              <a href={source.url}>{source.name}</a>
            </li>
          ))}
        </ul>
        <p className="note">{disclaimer}</p>
      </Section>
    </main>
  );
}
