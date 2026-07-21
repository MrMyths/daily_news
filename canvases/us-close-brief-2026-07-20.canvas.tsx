import React from "react";

const reportDate = "2026-07-20";
const publishedAt = "香港時間 2026-07-21 07:00";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "CNBC - Stock market news for July 20, 2026",
    url: "https://www.cnbc.com/2026/07/19/stock-market-today-live-updates.html",
  },
  {
    name: "CNBC - Stock futures and July 20 regular-session recap",
    url: "https://www.cnbc.com/2026/07/20/stock-market-today-live-updates.html",
  },
  {
    name: "InvestingLive - US stocks reverse sharply as Middle East tensions erase early rally",
    url: "https://investinglive.com/stocks/us-stocks-reverse-sharply-as-middle-east-tensions-erase-early-rally",
  },
  {
    name: "MarketScreener/Reuters - S&P 500 and Nasdaq, final quote table",
    url: "https://au.marketscreener.com/news/s-p-500-nasdaq-edge-higher-as-chips-recover-megacap-earnings-in-focus-ce7f51dbdd88f527",
  },
  {
    name: "Yahoo Finance chart API - index, ETF, stock, dollar and futures close data",
    url: "https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC?interval=1d",
  },
  {
    name: "CNBC - Treasury yields rise as Wall Street monitors Middle East tensions",
    url: "https://www.cnbc.com/2026/07/20/treasury-yields-wall-street-iran-war-tensions.html",
  },
  {
    name: "Trading Economics - US Treasury yield table",
    url: "https://tradingeconomics.com/united-states/government-bond-yield",
  },
  {
    name: "CNBC - Oil prices rise after Trump says Iran will pay",
    url: "https://www.cnbc.com/2026/07/20/oil-prices-today-brent-wti-crude-us-iran-centcom-hormuz.html",
  },
  {
    name: "Investing.com - Fed Rate Monitor Tool",
    url: "https://www.investing.com/central-banks/fed-rate-monitor",
  },
  {
    name: "Morningstar - Comex Gold Settles 0.06% Lower at $4010.30",
    url: "https://www.morningstar.com/news/dow-jones/202607205754/comex-gold-settles-006-lower-at-401030-data-talk",
  },
  {
    name: "Kitco - Gold softens, silver rebounds as Fed-rate risk limits metals",
    url: "https://www.kitco.com/news/article/2026-07-20/gold-softens-silver-rebounds-fed-rate-risk-limits-metals-kitco-am-report",
  },
  {
    name: "Motley Fool - Market Indexes Play Favorites",
    url: "https://www.fool.com/investing/2026/07/20/market-indexes-play-favorites-tech-wins-industrial/",
  },
  {
    name: "National Association of Realtors - June existing-home sales",
    url: "https://www.nar.realtor/newsroom/nar-existing-home-sales-report-shows-2-4-decrease-in-june",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
];

const indexRows = [
  [
    "Dow Jones",
    "51,839.26",
    "-307.16 / -0.59%",
    "早段曾有承接，但 Apple、Caterpillar 等高價 Dow 成分股拖低指數，收市跌逾 300 點。",
  ],
  [
    "S&P 500",
    "7,443.28",
    "-14.41 / -0.19%",
    "跌幅不算深，但由日內高位 7,513 附近回落至貼近低位收，反映尾市 risk-off。",
  ],
  [
    "Nasdaq Composite",
    "25,508.07",
    "-12.17 / -0.05%",
    "大型科技有分化，Microsoft、Alphabet 撐住指數，抵消 Tesla、Apple 與 Netflix 弱勢。",
  ],
  [
    "Russell 2000",
    "2,942.43",
    "-19.79 / -0.67%",
    "小型股跌幅大過大市，代表高債息與油價壓力未只集中在 mega-cap。",
  ],
  [
    "VIX",
    "18.65",
    "-0.12 / -0.64%",
    "波動率未再抽高，但仍接近 19；市場未恐慌，但風險溢價未消失。",
  ],
];

const sectorRows = [
  [
    "Energy / XLE",
    "+0.45%",
    "最強綠燈",
    "WTI/Brent settlement 再升，能源股繼續係通脹與地緣風險的自然對沖。",
  ],
  [
    "Semiconductors / SOXX",
    "+0.45%",
    "技術反彈",
    "上週急跌後喘定；AMD、Intel、Micron 等有買盤，但仍未足以確認晶片跌勢完結。",
  ],
  [
    "Communication Services / XLC",
    "+0.14%",
    "相對抗跌",
    "Alphabet 受新 AI 晶片報道支持，但 Netflix 續跌令板塊只屬微升。",
  ],
  [
    "Technology / XLK",
    "+0.07%",
    "窄幅守住",
    "Microsoft、部分半導體撐住，但 Apple -2% 令科技板塊無法擴大升幅。",
  ],
  [
    "Consumer Staples / XLP",
    "-0.39%",
    "防守偏弱",
    "油價與利率上升令消費防守股未有明顯避險買盤。",
  ],
  [
    "Financials / XLF",
    "-0.39%",
    "偏弱",
    "曲線上移理論上支持息差，但大市風險偏好下降抵消利好。",
  ],
  [
    "Real Estate / XLRE",
    "-0.42%",
    "受債息壓住",
    "10Y 升近 4.59%，REITs 對利率敏感，反彈難度高。",
  ],
  [
    "Utilities / XLU",
    "-0.51%",
    "防守失效",
    "長債息上升令高息防守股吸引力下降。",
  ],
  [
    "Industrials / XLI",
    "-0.72%",
    "跑輸",
    "Caterpillar 拖累明顯，Dow 價格加權結構令跌幅被放大。",
  ],
  [
    "Consumer Discretionary / XLY",
    "-0.72%",
    "跑輸",
    "Tesla -2.96%，高 beta 消費股對油價與利率更敏感。",
  ],
  [
    "Materials / XLB",
    "-0.99%",
    "弱",
    "cyclicals 在地緣風險和美元偏強下被減倉。",
  ],
  [
    "Health Care / XLV",
    "-1.14%",
    "最弱",
    "防守板塊未受惠，資金更偏向能源而非傳統低 beta。",
  ],
];

const stockRows = [
  [
    "AAPL",
    "$326.59 / -2.14%",
    "CNBC 指 Apple 跌逾 2% 拖低 Dow；股價由高位回吐，市場在財報前先鎖定部分利潤。",
  ],
  [
    "GOOGL / GOOG",
    "GOOGL +1.51%、GOOG +1.52%",
    "Motley Fool 指市場留意 Google 新 AI 晶片效率報道，成為 mega-cap 裏較清晰的正面貢獻。",
  ],
  [
    "MSFT / NVDA / AMD / INTC",
    "MSFT +2.15%、NVDA +0.23%、AMD +1.58%、INTC +2.13%",
    "雲端與晶片有局部修復；但只是上週急跌後企穩，不等於 AI 估值壓力已完。",
  ],
  [
    "TSLA / XLY",
    "TSLA $369.57 / -2.96%；XLY -0.72%",
    "Tesla 跑輸大市，高 beta 消費股在油價與債息升時被減倉。",
  ],
  [
    "CAT",
    "$864.30 / -1.82%",
    "Caterpillar 高股價令其對價格加權 Dow 影響特別大，工業股成為拖累之一。",
  ],
  [
    "XOM / CVX",
    "XOM +0.68%、CVX +1.24%",
    "油價 settlement 再上，能源股繼續有資金流入。",
  ],
  [
    "NFLX",
    "$67.60 / -1.96%",
    "上週財報後沽壓未完全消化，通訊服務內部分化仍大。",
  ],
  [
    "SPCX / 高熱度題材",
    "TradingKey 指 SpaceX 連跌並跌穿 $120，本文以該來源作題材風險參考",
    "高估值、新聞敏感度高的主題股仍然容易被風險折讓壓低；若無可靠逐筆數據，宜用倉位控制處理。",
  ],
];

const macroRows = [
  [
    "Treasury yields",
    "CNBC/Trading Economics：2Y 4.211%、10Y 4.594%、30Y 約 5.11%-5.115%",
    "債息上行令 equity duration 受壓；10Y 逼近 4.60% 是 growth multiple 的短線壓力線。",
  ],
  [
    "FedWatch",
    "Investing.com 7/20 13:25 EDT：7/29 hold 83.4%，+25bp 16.6%；前一日 hold 86.7%",
    "市場仍以不加息為主，但油價升令加息尾部風險由 13.3% 升至 16.6%。",
  ],
  [
    "Oil",
    "CNBC settlement：WTI $83.23 +0.9%；Brent $89.22 +1.3%；盤中 Brent 曾重上 $90",
    "油價係今日最大宏觀變數：撐能源股，同時增加通脹與 Fed 鷹派風險。",
  ],
  [
    "Gold / dollar",
    "Morningstar：front-month Comex gold $4,010.30 -0.06%；Yahoo/Kitco：DXY 約 100.87-100.96",
    "地緣風險本應撐金，但高債息與美元偏強限制避險升幅。",
  ],
  [
    "Housing",
    "NAR 最新 June existing-home sales -2.4% m/m 至 4.09M；median price $440,600 創新高",
    "樓市仍受按揭利率壓住；對 rate-sensitive 板塊而言不是即時利好。",
  ],
  [
    "Market breadth",
    "Yahoo ETF proxy：12 個主要板塊中 4 個微升、8 個下跌；能源與 semis 反彈，醫療/材料最弱",
    "不是全面崩盤，而是資金在能源、AI 修復和防守板塊之間重新分配。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$65,141.59",
    "+1.68%",
    "BTC 比美股有承接，較上個美股交易日 20:00 UTC 上升，暫時仍屬高位震盪偏強。",
  ],
  [
    "ETHUSDT",
    "$1,898.22",
    "+3.14%",
    "ETH 反彈力度大過 BTC，risk beta 未有跟住 Nasdaq 轉弱。",
  ],
  [
    "SOLUSDT",
    "$77.64",
    "+3.42%",
    "SOL 彈幅最大，但仍要留意若美股風險偏好轉差會否拖累 high beta crypto。",
  ],
];

const technicalRows = [
  [
    "S&P 500",
    "7,440 / 7,500 / 7,570",
    "今日低位 7,440.53，收在低位附近；若失守 7,440，調整會更似有延續性。",
  ],
  [
    "Nasdaq",
    "25,500 / 25,800 / 26,000",
    "收在 25,508，剛好守住心理位；要重上 25,800 才算修復 momentum。",
  ],
  [
    "SOXX / SMH",
    "SOXX 520 / 540；SMH 555 / 573",
    "今日只是貼住支持位反彈；要連續企穩才可確認半導體不再拖累大市。",
  ],
  [
    "VIX",
    "18 / 20 / 22",
    "VIX 未破 20，代表市場仍可控；若油價再升而 VIX 上 20，要降槓桿。",
  ],
  [
    "WTI / Brent",
    "WTI 82 / 85；Brent 89 / 90 / 92",
    "Brent 90 是市場心理線，企穩其上會放大通脹與債息壓力。",
  ],
];

const watchRows = [
  "油價：Brent 能否企穩 $90；若再升，能源股會繼續跑出，但 broader market multiple 會受壓。",
  "債息：10Y 4.60%、30Y 5.10% 是短線風險線；若同時上破，REITs、utilities、growth 都會有壓力。",
  "科技財報：Alphabet、Tesla、Intel 等大型科技消息將決定 AI/growth 反彈是實質修復定只是 short covering。",
  "Dow 結構：Apple、Caterpillar 等高價股若繼續弱，Dow 可能跑輸即使部分 mega-cap tech 有承接。",
  "Crypto：BTC/ETH/SOL 在 20:00 UTC 對比上交易日轉強，留意會否繼續與美股 short-term divergence。",
];

const sourceFootnotes = [
  "主要指數收市採 CNBC 最終口徑，並以 InvestingLive、MarketScreener/Reuters quote table 與 Yahoo Finance chart API 交叉核對；Dow 點數變動在不同即時來源有數點差異，本文以 CNBC/Yahoo close 為主。",
  "板塊使用 SPDR ETF proxy；ETF close 與正式 S&P 500 sector index 可能有輕微差異。",
  "個股 close 採 Yahoo Finance chart API；Motley Fool/CNBC 用作敘事來源。",
  "Treasury yields 採 CNBC Tradeweb 4:37pm EDT 快照並以 Trading Economics Jul/20 表格核對。",
  "FedWatch 不是官方 Fed 指引，只是 fed funds futures 隱含機率；本文採 Investing.com 2026-07-20 13:25 EDT 更新。",
  "Crypto 使用 Binance Vision public data 1-minute kline，採 2026-07-20 20:00 UTC（美股 4:00pm ET 附近）close；變化率對比 2026-07-17 20:00 UTC，因 7/18-7/19 為週末。",
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

export default function USCloseBrief20260720() {
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
          {reportDate} 收市｜油價同債息夾擊，早段反彈變收市微跌
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
            <strong>7,443.28</strong>
            <span>-0.19%</span>
          </div>
          <div className="stat">
            Nasdaq
            <strong>25,508.07</strong>
            <span>-0.05%</span>
          </div>
          <div className="stat">
            VIX
            <strong>18.65</strong>
            <span>-0.64%</span>
          </div>
        </div>
      </section>

      <Section number="01" title="30秒重點">
        <ul>
          <li>
            美股三大指數早段有升幅，但尾市轉弱：Dow -0.59%、S&P 500
            -0.19%、Nasdaq -0.05%，Russell 2000 -0.67%。
          </li>
          <li>
            核心壓力係 <strong>油價升 + 債息升</strong>：WTI settle
            $83.23、Brent $89.22，10Y 升至約 4.594%。
          </li>
          <li>
            科技不是一面倒差：Microsoft、Alphabet、AMD、Intel 上升；但 Apple
            -2.14%、Tesla -2.96% 拖住大市。
          </li>
          <li>
            板塊分化：Energy、SOXX、XLC、XLK 微升；Health Care、Materials、
            Industrials、XLY 跑輸。
          </li>
          <li>
            FedWatch 顯示 7/29 hold 仍是主線（83.4%），但 +25bp 機率升至
            16.6%，油價令通脹尾部風險返來。
          </li>
          <li>
            Crypto 反而偏強：BTC +1.68%、ETH +3.14%、SOL +3.42%（Binance 20:00
            UTC，對比上一美股交易日）。
          </li>
        </ul>
      </Section>

      <Section number="02" title="大市一眼睇">
        <DataTable
          headers={["指數", "收市", "變動", "解讀"]}
          rows={indexRows}
        />
        <p className="note">
          CNBC 與 Yahoo chart 對主要指數收市數字一致；InvestingLive 的 Dow close
          有數點差異，本文採 CNBC/Yahoo 最終 close。
        </p>
      </Section>

      <Section number="03" title="板塊紅綠燈 / 熱度圖">
        <DataTable
          headers={["板塊 / ETF", "收市變動", "狀態", "白話解讀"]}
          rows={sectorRows}
        />
      </Section>

      <Section number="04" title="今日升跌原因">
        <h3>點解收市又跌返？</h3>
        <ul>
          <li>
            <strong>油價升令通脹交易返來：</strong>CNBC 指 WTI、Brent
            因美伊衝突及航運風險上升，盤中 Brent 曾重上
            $90，市場擔心油價會重新推高通脹。
          </li>
          <li>
            <strong>債息同步抽高：</strong>2Y、10Y、30Y
            全部上升，令高估值股票即使有 AI 消息支持，都好難全面 rerate。
          </li>
          <li>
            <strong>Dow 被高價股拖住：</strong>Apple、Caterpillar 下跌，價格加權
            Dow 對這類股票特別敏感，所以跌幅大過 S&P 500 和 Nasdaq。
          </li>
        </ul>
        <h3>有咩未算壞？</h3>
        <ul>
          <li>VIX 無再升穿 20，市場是謹慎，不是恐慌式拋售。</li>
          <li>半導體 ETF SOXX/SMH 小幅反彈，至少暫時止住上週急跌的出血位。</li>
          <li>
            Alphabet、Microsoft 仍有買盤，代表 AI 主線內部仍有選股式承接。
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
            <strong>美債：</strong>CNBC 4:37pm EDT：2Y 4.211%、10Y 4.594%、30Y
            5.115%；Trading Economics Jul/20 表格同樣顯示 10Y 4.59%、30Y 5.11%。
          </li>
          <li>
            <strong>美元：</strong>Yahoo DXY 約 100.96，Kitco 早段指 DXY near
            100.87；美元偏強配合高債息，壓住黃金與 growth multiple。
          </li>
          <li>
            <strong>黃金：</strong>Morningstar 指 front-month Comex gold settle
            $4,010.30，跌 0.06%；避險需求有，但高利率令升幅受限。
          </li>
          <li>
            <strong>原油：</strong>CNBC settlement：WTI $83.23（+0.9%）、Brent
            $89.22（+1.3%）；油價仍是全日最重要宏觀訊號。
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
            "對上一美股交易日 20:00 UTC",
            "解讀",
          ]}
          rows={cryptoRows}
        />
        <p className="note">
          Binance direct API 在本環境受地區限制；本報告使用 Binance Vision
          public data API 取得 1-minute kline。時間點為 2026-07-20 20:00
          UTC，即美股 4:00pm ET 附近；因週末非美股交易日，變化率對比 2026-07-17
          20:00 UTC。
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
          今日重點不是跌幅好大，而是「油價升、債息升、大市由高位回落」三件事同時出現。
          如果 10Y 上穿 4.60% 而 Brent 企穩 $90，科技股反彈要更挑剔，避免見到 AI
          消息就盲目追入。
        </div>
        <ul>
          <li>
            短線先睇 S&P 500 7,440 是否守得住；跌穿就不要假設只是日內 noise。
          </li>
          <li>
            半導體反彈要有 follow-through；SOXX/SMH 未連續企穩前，仍以反彈看待。
          </li>
          <li>
            能源股有對沖價值，但油價急升同時會傷害 broader
            market，倉位不要過度集中。
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
