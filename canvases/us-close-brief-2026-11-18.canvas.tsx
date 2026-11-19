import React from "react";

const reportDate = "2026-11-18";
const publishedAt =
  "香港時間 2026-11-19 09:05（週四更新；數據截至美股 11/18 收市）";

const disclaimer =
  "免責聲明：以上內容僅供教育及資訊參考，並不構成任何投資建議、招攬、要約或買賣任何金融產品的推薦。市場有風險，投資可升可跌，過往表現不代表未來回報。請按自身風險承受能力、投資目標及財務狀況獨立判斷，必要時諮詢持牌專業人士。";

const sources = [
  {
    name: "AP News - How major US stock indexes fared Wednesday 11/18/2026",
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-990749d3d269f7ef05b9f6c089713a58",
  },
  {
    name: "Reuters via Euronext - Stocks slip with eyes on Anthropic and Nvidia, oil prices slide",
    url: "https://live.euronext.com/en/financial-news/stocks-slip-eyes-anthropic-and-nvidia-oil-prices-slide",
  },
  {
    name: "Reuters via Investing.com - Wall Street ends mixed after Nvidia earnings, Fed minutes",
    url: "https://lufkindailynews.com/news_reuters/business/wall-street-ends-mixed-after-nvidia-earnings-fed-minutes/article_757d7e1e-451b-5fc3-914c-44086229e225.html",
  },
  {
    name: "CNBC - Treasury yields: traders weigh Waller comments, Fed minutes",
    url: "https://www.cnbc.com/2026/11/18/treasury-yields-bonds-fed.html",
  },
  {
    name: "Federal Reserve - Minutes of the FOMC, October 27-28, 2026",
    url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261118a.htm",
  },
  {
    name: "CNBC - Fed minutes October 2026",
    url: "https://www.cnbc.com/2026/11/18/fed-minutes-october-2026.html",
  },
  {
    name: "Reuters via Euronext - Oil prices settle lower as traders weigh surplus supply outlook",
    url: "https://live.euronext.com/en/financial-news/oil-prices-settle-lower-traders-weigh-surplus-supply-outlook",
  },
  {
    name: "NVIDIA Investor Relations - Q3 FY2027 results",
    url: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Third-Quarter-Fiscal-2027/default.aspx",
  },
  {
    name: "CNBC - Nvidia sinks after earnings",
    url: "https://www.cnbc.com/2026/11/18/nvidia-stock-earnings.html",
  },
  {
    name: "Anthropic - Anthropic prices initial public offering",
    url: "https://www.anthropic.com/news/anthropic-prices-initial-public-offering",
  },
  {
    name: "CNBC - Target Q3 2026 earnings",
    url: "https://www.cnbc.com/2026/11/18/target-tgt-q3-2026-earnings.html",
  },
  {
    name: "Reuters via Investing.com - Lowe's forecasts muted annual profit",
    url: "https://www.investing.com/news/stock-market-news/lowes-raises-annual-sales-forecast-5035489",
  },
  {
    name: "StockAnalysis - UnitedHealth and Humana fall on CMS Medicare Advantage audit rule",
    url: "https://stockanalysis.com/news/unitedhealth-humana-fall-cms-medicare-advantage-audit-rule/",
  },
  {
    name: "ChartRow - S&P 500 sector ETF performance, Nov 18 close",
    url: "https://chartrow.com/sp500/sector-performance",
  },
  {
    name: "Yahoo Finance chart data",
    url: "https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC",
  },
  {
    name: "Binance public data documentation",
    url: "https://github.com/binance/binance-public-data",
  },
  {
    name: "Binance Vision data API klines",
    url: "https://data-api.binance.vision/",
  },
];

const keyPoints = [
  "美股星期三走勢分化：Dow 50,198.17（-561.25 / -1.11%）、S&P 500 7,323.63（-16.90 / -0.23%）連跌第五日；Nasdaq 24,429.89（+101.50 / +0.42%）靠部分科技/晶片股反彈收升。",
  "主線係『Nvidia 業績強但市場仍擔心 AI trade 估值/融資 + Fed 更鷹』。Reuters 指 NVDA 早段一度反彈，其後倒跌 2.9%，令 AI 風險情緒未完全修復。",
  "板塊明顯分化：Consumer Discretionary / XLY proxy +1.79% 領先，Technology / XLK +0.34%；Energy / XLE -3.27%、Health Care / XLV -2.20%、Financials / XLF -1.14% 最弱。",
  "宏觀壓力未散：Fed minutes 指幾乎所有官員認為進一步加息可能合適，Waller 提到 12月可考慮 50bp；FedWatch / CNBC 顯示市場約 95% pricing 25bp，仍有小機率 50bp。",
  "利率曲線 flatten：CNBC 指 10Y 約 5.064%（跌近 4bp）、30Y 約 5.408%（跌逾 5bp），但 2Y 約 4.80%（升逾 1bp）；美元 DXY 升至 103.79，黃金急跌 3.24%。",
  "Crypto 用 Binance Vision 2026-11-18 21:00 UTC 1m close（美股 4:00pm ET）計：BTC $62,636.01（較 11/17 同時間 -2.19%）、ETH $1,756.04（-2.71%）、SOL $73.12（-0.16%）。",
];

const indexRows = [
  {
    asset: "Dow Jones",
    close: "50,198.17",
    change: "-561.25 / -1.11%",
    read: "Dow 跌穿 50,200，UnitedHealth 單日 -10.21% 對價格加權指數拖累好大；工業/金融亦偏弱。",
    source: "AP / Reuters / Yahoo chart",
  },
  {
    asset: "S&P 500",
    close: "7,323.63",
    change: "-16.90 / -0.23%",
    read: "盤中反覆後收跌，連跌第五日，是 6月以來最長連跌；代表反彈仍欠廣度確認。",
    source: "AP / Reuters / Yahoo chart",
  },
  {
    asset: "Nasdaq Composite",
    close: "24,429.89",
    change: "+101.50 / +0.42%",
    read: "半導體內部分化，AMD +5.31%、AVGO +3.65% 抵消 NVDA -2.89%；指數反彈但未足以扭轉 AI 疑慮。",
    source: "AP / Reuters / Yahoo chart",
  },
  {
    asset: "Russell 2000",
    close: "2,714.31",
    change: "+12.44 / +0.46%",
    read: "小型股微升，受油價急跌與長債息回落支持；但高短息仍限制估值修復。",
    source: "Yahoo chart（Reuters/其他即時源略有差異，採 Yahoo close）",
  },
  {
    asset: "VIX",
    close: "24.56",
    change: "-0.90 / -3.53%",
    read: "VIX 由高位稍回落但仍在 24 以上，顯示市場 hedging demand 未消失。",
    source: "Yahoo chart",
  },
  {
    asset: "Philadelphia SOX / SOXX",
    close: "SOX 9,652.80；SOXX 約 $141.85",
    change: "SOX +0.10%；SOXX proxy +0.28%",
    read: "晶片股不是單邊跌：AMD/AVGO 強、NVDA 弱，反映資金仍願意買 AI winners，但對龍頭估值與治理風險更挑剔。",
    source: "Yahoo chart daily / 1m 4pm ET proxy",
  },
];

const sectorRows = [
  [
    "Consumer Discretionary / XLY",
    "+1.79%",
    "領先",
    "Target / TJX / Amazon 強，零售盈利與消費韌性支持；高 beta 消費股成為今日少數 risk-on 位置。",
  ],
  [
    "Technology / XLK",
    "+0.34%",
    "偏強",
    "MSFT +0.40%、AAPL +0.15%，加上 PANW 盤後 beat-and-raise；但 NVDA 倒跌限制升幅。",
  ],
  [
    "Communication Services / XLC",
    "+0.30%",
    "略強",
    "GOOGL +0.80%，但 META -0.40%；AI/廣告 mega-cap 分化。",
  ],
  [
    "Utilities / XLU",
    "+0.30%",
    "防守回穩",
    "長債息回落令收益型板塊喘定；但高短息仍令 upside 有限。",
  ],
  [
    "Real Estate / XLRE",
    "+0.07%",
    "企穩",
    "10Y 下行幫助 REITs，但 5% 以上長息仍係估值天花板。",
  ],
  [
    "Industrials / XLI",
    "-0.05%",
    "持平偏弱",
    "Dow 下跌與宏觀鷹派訊號壓住工業股；AI infrastructure 相關（如 GNRC）有個別亮點。",
  ],
  [
    "Consumer Staples / XLP",
    "-0.31%",
    "防守不強",
    "防守資金未全面流入，美元與利率上行預期令估值敏感。",
  ],
  [
    "Materials / XLB",
    "-0.75%",
    "弱",
    "美元升至 19個月高位、黃金/銅急跌，礦業與材料 beta 受壓。",
  ],
  [
    "Financials / XLF",
    "-1.14%",
    "弱",
    "曲線 flatten、Dow cyclicals 受壓；JPM -1.77%、GS -0.49%。",
  ],
  [
    "Health Care / XLV",
    "-2.20%",
    "很弱",
    "CMS Medicare Advantage audit proposal 觸發 insurers selloff；UNH -10.21%、HUM -12.98%。",
  ],
  [
    "Energy / XLE",
    "-3.27%",
    "最弱",
    "WTI -3.2% 至 $83.26，EIA 庫存大增令供應過剩憂慮升溫。",
  ],
  [
    "Semis / SOXX",
    "+0.28%",
    "分化",
    "AMD/AVGO 反彈，NVDA/AI neoclouds 偏弱；半導體未全面轉 bullish。",
  ],
];

const macroRows = [
  [
    "10Y / 2Y / 30Y UST",
    "5.064%-5.068% / 4.802% / 5.408%",
    "10Y、30Y 回落但 2Y 上行，曲線 flatten；市場相信 Fed 會更積極，但油價急跌紓緩遠端通脹壓力。",
  ],
  [
    "FedWatch / FOMC",
    "約 95.4% 12月 +25bp；約 4.6% +50bp",
    "CNBC / CME 口徑顯示 25bp 幾乎 fully priced；Waller 50bp 言論令尾段風險資產承壓。",
  ],
  [
    "Fed minutes",
    "10-2 維持 3.75%-4.00%；幾乎所有官員預期仍需加息",
    "官方 minutes 將 AI demand、AI debt、複雜融資列入通脹與金融穩定討論，令 AI trade 同時受 earnings 與 policy scrutiny 影響。",
  ],
  [
    "美元 / 黃金",
    "DXY 103.79（+0.17%）；spot gold $3,725.10（-3.24%）",
    "美元創 19個月高，金銀受美元及政策預期打擊；risk-off 不是傳統黃金避險模式。",
  ],
  [
    "原油",
    "WTI $83.26（-3.2%）；Brent $91.95（-1.28%）",
    "EIA 原油庫存 +340萬桶、汽油 +520萬桶，遠高過預期，供應過剩敘事壓過中東風險。",
  ],
];

const stockRows = [
  [
    "NVDA",
    "$150.96 / -2.89%",
    "業績/指引強但股價倒跌；Q3 revenue $115.8B、Data Center $107.6B、Q4 guide 約 $130B。市場焦點由『增長夠唔夠』轉向 leadership / China / AI financing risk。",
  ],
  [
    "AMD / AVGO",
    "$530.14 / +5.31%；$354.05 / +3.65%",
    "晶片 beta 有買盤，顯示投資者未放棄 AI hardware；但買盤轉向非 NVDA 或估值/事件風險較低名字。",
  ],
  [
    "AMZN / GOOGL / MSFT",
    "$267.74 / +3.82%；$282.44 / +0.80%；$508.29 / +0.40%",
    "大型科技分化但偏穩，幫 Nasdaq 收升；雲與 AI capex 仍是市場主線。",
  ],
  [
    "UNH / HUM / CVS",
    "$349.91 / -10.21%；$385.78 / -12.98%；$81.35 / -5.20%",
    "CMS 提議擴大 Medicare Advantage audits，估算每個 payment year 或追回約 $9B overpayments，healthcare 成最大拖累。",
  ],
  [
    "TGT / TJX / LOW",
    "$165.93 / +4.01%；$140.30 / +8.05%；$222.78 / +1.05%",
    "Target Q3 EPS $2.65 vs $2.07 expected、revenue $27.07B vs $26.56B；Lowe's sales outlook 較好但 margin 壓力仍在。",
  ],
  [
    "PANW / AKAM / GNRC",
    "$339.92 / +9.90%；$91.70 / +8.34%；$205.45 / +9.87%",
    "Cybersecurity beat-and-raise、AI infrastructure/power 需求敘事支持個別 winners。",
  ],
  [
    "COIN / MSTR",
    "$110.51 / -3.92%；$90.32 / -6.40%",
    "Crypto 走弱 + risk-off 令 crypto-linked equities 繼續受壓，MSTR 跌幅大過 BTC。",
  ],
];

const cryptoRows = [
  [
    "BTCUSDT",
    "$62,636.01",
    "-2.19%",
    "由 $64,036.75（11/17 21:00 UTC）跌至 $62,636.01；風險資產壓力與美元強勢同步。",
  ],
  [
    "ETHUSDT",
    "$1,756.04",
    "-2.71%",
    "跌幅大過 BTC，反映 alt-beta 更弱；未見資金避險流入。",
  ],
  [
    "SOLUSDT",
    "$73.12",
    "-0.16%",
    "相對抗跌，但仍未跟上前一日反彈；以 Binance Vision 1m close 計。",
  ],
];

const technicalRows = [
  [
    "S&P 500",
    "支持 7,300 / 7,250；阻力 7,340 / 7,416",
    "7,300 是即時心理位；要先收復 11/17 close 7,340，再挑戰 11/16 close 7,416，先算跌勢放慢。",
  ],
  [
    "Nasdaq",
    "支持 24,250；阻力 24,500 / 24,700",
    "今日收 24,429.89，接近 24,500 但未突破；NVDA 若未能止跌，反彈容易變成個別股輪動。",
  ],
  [
    "Dow",
    "支持 50,000；阻力 50,750",
    "50,000 是大型心理位；UNH/financials 未企穩前，Dow 較難追上 Nasdaq。",
  ],
  [
    "VIX",
    "24-25 是風險溫度計",
    "VIX 低過 25 但仍高；若回落至 22 以下，才代表 hedging pressure 明顯降溫。",
  ],
];

const playbookRows = [
  [
    "短線反彈",
    "等 S&P 500 企回 7,340、Nasdaq 企回 24,500，並觀察 NVDA 能否守 $150。未確認前只宜分段、細注。",
  ],
  [
    "防守/減風險",
    "若 S&P 500 跌穿 7,300 且 VIX 重上 25，可先減高估值 beta，保留現金等 7,250 附近再評估。",
  ],
  [
    "事件風險",
    "關注 Anthropic 11/19 首日交易、Fed 官員講話、20Y auction 後續反應、Nvidia China/leadership headline。",
  ],
  [
    "板塊輪動",
    "能源/醫療暫避開 falling knife；留意零售、cybersecurity、AI infrastructure power names 是否有 earnings-driven follow-through。",
  ],
];

const marketReasons = [
  "Nvidia 交出超預期業績，但股價由盤前/早段強勢倒跌，說明市場不是單純看 EPS，而是同時重新定價 AI capex、供應鏈、治理與 China exposure。",
  "Fed minutes + Waller 將利率風險推回台前：市場幾乎肯定 12月加 25bp，但 50bp small tail 被重新討論，令長 duration growth multiple 難以大幅擴張。",
  "油價急跌本來有利通脹預期，但能源股與材料股拖累 broader market；美元創 19個月高亦壓住商品與跨國企業盈利預期。",
  "個股層面有明顯正負抵消：retail winners、cybersecurity、AMD/AVGO 撐住 Nasdaq；UNH/HUM、energy、financials 拖低 Dow/S&P。",
];

function Tone({ value }: { value: string }) {
  const negative = value.trim().startsWith("-");
  const positive = value.trim().startsWith("+");
  return (
    <span className={positive ? "pos" : negative ? "neg" : "neutral"}>
      {value}
    </span>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section">
      <div className="sectionTitle">
        <span>{id}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function USCloseBrief20261118() {
  return (
    <main className="page">
      <style>{`
        .page {
          width: 1120px;
          margin: 0 auto;
          padding: 34px;
          background: #f6f8fb;
          color: #172033;
          font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
          line-height: 1.48;
        }
        .hero {
          background: #102a43;
          color: white;
          border-radius: 22px;
          padding: 28px;
          border: 1px solid #243b53;
        }
        h1 { margin: 0; font-size: 34px; line-height: 1.08; letter-spacing: -0.02em; }
        .subtitle { margin-top: 10px; font-size: 16px; opacity: 0.92; }
        .meta { margin-top: 12px; font-size: 12px; opacity: 0.78; }
        .keyGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 16px; }
        .keyCard { background: white; border: 1px solid #d8e0ea; border-radius: 16px; padding: 14px; }
        .keyCard strong { display: block; color: #0f766e; margin-bottom: 5px; }
        .section { margin-top: 18px; background: white; border: 1px solid #dde5ef; border-radius: 20px; padding: 18px; }
        .sectionTitle { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
        .sectionTitle span { background: #0f766e; color: white; border-radius: 999px; min-width: 30px; height: 30px; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; }
        h2 { margin: 0; color: #102a43; font-size: 21px; }
        h3 { margin: 14px 0 8px; color: #0f766e; font-size: 17px; }
        p { margin: 7px 0; }
        ul { margin: 0; padding-left: 19px; }
        li { margin: 6px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 13px; }
        th { text-align: left; background: #eef4f8; color: #334e68; }
        th, td { border-bottom: 1px solid #e5edf4; padding: 9px; vertical-align: top; }
        .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .badge { display: inline-block; padding: 3px 8px; border-radius: 999px; background: #e6fffa; color: #0f766e; font-weight: 800; font-size: 12px; }
        .pos { color: #047857; font-weight: 800; }
        .neg { color: #b91c1c; font-weight: 800; }
        .neutral { color: #475569; font-weight: 800; }
        .note { color: #64748b; font-size: 12px; }
        .sourceList { columns: 2; font-size: 12px; }
        a { color: #1d4ed8; text-decoration: none; }
        .disclaimer { margin-top: 12px; padding: 12px; background: #f8fafc; border-radius: 14px; color: #475569; font-size: 12px; }
        @media print { .page { width: auto; padding: 24px; } .section { break-inside: avoid; } }
      `}</style>
      <section className="hero">
        <h1>美股收盤懶人包｜完整版</h1>
        <div className="subtitle">
          {reportDate} 收市｜Dow 大跌、S&P 500 連跌第五日；Nasdaq
          靠個別科技股收升，Fed 鷹派 minutes 壓住估值
        </div>
        <div className="meta">
          {publishedAt}｜報告語言：繁體中文（自然廣東話）｜Crypto：Binance
          Vision 21:00 UTC 1分鐘 close
        </div>
      </section>

      <div className="keyGrid">
        <div className="keyCard">
          <strong>大市</strong>Dow -1.11%，S&P -0.23%，Nasdaq
          +0.42%；指數分化但廣度未算健康。
        </div>
        <div className="keyCard">
          <strong>主因</strong>Nvidia 強業績未能完全修復 AI sentiment，Fed
          minutes / Waller 言論偏鷹。
        </div>
        <div className="keyCard">
          <strong>留意</strong>Anthropic IPO 首日、S&P 7,300 支持、NVDA
          $150、VIX 25。
        </div>
      </div>

      <Section id="01" title="30秒重點">
        <ul>
          {keyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </Section>

      <Section id="02" title="大市一眼睇">
        <table>
          <thead>
            <tr>
              <th>資產</th>
              <th>收市</th>
              <th>升跌</th>
              <th>白話解讀</th>
              <th>來源</th>
            </tr>
          </thead>
          <tbody>
            {indexRows.map((row) => (
              <tr key={row.asset}>
                <td>
                  <strong>{row.asset}</strong>
                </td>
                <td>{row.close}</td>
                <td>
                  <Tone value={row.change} />
                </td>
                <td>{row.read}</td>
                <td>{row.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section id="03" title="今日市場升跌原因">
        <ul>
          {marketReasons.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section id="04" title="板塊熱度圖與紅綠燈">
        <table>
          <thead>
            <tr>
              <th>板塊 / ETF proxy</th>
              <th>1日變動</th>
              <th>紅綠燈</th>
              <th>解讀</th>
            </tr>
          </thead>
          <tbody>
            {sectorRows.map(([sector, move, status, read]) => (
              <tr key={sector}>
                <td>
                  <strong>{sector}</strong>
                </td>
                <td>
                  <Tone value={move} />
                </td>
                <td>
                  <span className="badge">{status}</span>
                </td>
                <td>{read}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="note">
          口徑：ETF/個股因 Yahoo daily close 在生成時仍部分未寫入，採 Yahoo
          20:59-21:00 UTC 1分鐘 close proxy 對比 11/17 daily close；若來源與
          Reuters 即時稿略有差異，已在文字標示。
        </p>
      </Section>

      <Section id="05" title="宏觀白話版">
        <table>
          <thead>
            <tr>
              <th>項目</th>
              <th>數字</th>
              <th>點解重要</th>
            </tr>
          </thead>
          <tbody>
            {macroRows.map(([name, value, read]) => (
              <tr key={name}>
                <td>
                  <strong>{name}</strong>
                </td>
                <td>{value}</td>
                <td>{read}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section id="06" title="BTC / ETH / SOL（Binance 4:00pm ET 附近價格）">
        <table>
          <thead>
            <tr>
              <th>Crypto</th>
              <th>Binance Vision 21:00 UTC close</th>
              <th>較前一日同時間</th>
              <th>解讀</th>
            </tr>
          </thead>
          <tbody>
            {cryptoRows.map(([name, price, move, read]) => (
              <tr key={name}>
                <td>
                  <strong>{name}</strong>
                </td>
                <td>{price}</td>
                <td>
                  <Tone value={move} />
                </td>
                <td>{read}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="note">
          冬令時間美股 4:00pm ET = 21:00 UTC。使用 Binance Vision public data
          1-minute klines；如交易所最終結算口徑不同，本文以該分鐘 close
          作為可重現 proxy。
        </p>
      </Section>

      <Section id="07" title="重點股票與 AI trade">
        <table>
          <thead>
            <tr>
              <th>股票</th>
              <th>收市 / 變動</th>
              <th>重點</th>
            </tr>
          </thead>
          <tbody>
            {stockRows.map(([name, value, read]) => (
              <tr key={name}>
                <td>
                  <strong>{name}</strong>
                </td>
                <td>{value}</td>
                <td>{read}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section id="08" title="五大新聞 / 事件焦點">
        <ol>
          <li>
            <strong>Nvidia beat 但股價跌：</strong>官方收入 $115.8B、Data Center
            $107.6B；市場仍聚焦 leadership transition、China shipments 與 AI
            financing risk。
          </li>
          <li>
            <strong>Fed minutes 偏鷹：</strong>
            幾乎所有官員認為仍需進一步加息；AI demand
            被視為通脹及金融穩定風險來源。
          </li>
          <li>
            <strong>Waller 提到更 aggressive action：</strong>CNBC 訪問中提及
            50bp 或更快 2027 hikes path，令 2Y yield 升、美元走強。
          </li>
          <li>
            <strong>Anthropic IPO 定價 $83：</strong>高過 $70-$78 指引、980M
            shares，11/19 以 ANT 在 Nasdaq 開始交易；會是 AI
            需求下一個壓力測試。
          </li>
          <li>
            <strong>油價急跌：</strong>EIA 原油及成品油庫存高過預期，WTI 跌至
            8月以來低位，能源板塊領跌。
          </li>
        </ol>
      </Section>

      <Section id="09" title="資金流向與市場廣度">
        <div className="grid2">
          <div>
            <h3>資金流向</h3>
            <ul>
              <li>
                資金由能源、醫療保險、金融流出，轉入 retail
                winners、cybersecurity、部分 AI infrastructure/power names。
              </li>
              <li>
                黃金、白銀、銅同跌，加上美元強，代表今日不是單純避險，而是更高實質利率/美元壓力。
              </li>
              <li>
                Crypto-linked equities 跑輸主要 crypto，反映槓桿 beta
                與股市風險溢價同時被壓縮。
              </li>
            </ul>
          </div>
          <div>
            <h3>廣度</h3>
            <ul>
              <li>
                Reuters 指 S&P 500 六個 sectors
                跌、五個升；所以不是全面崩盤，但大市仍欠一致買盤。
              </li>
              <li>
                Dow 受 UNH 等大權重價格股拖累，與 Nasdaq 反彈形成明顯背馳。
              </li>
              <li>
                若之後 Nasdaq 續升但 Dow/S&P 不跟，要小心只是 mega-cap/semis
                技術反彈。
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="10" title="技術位與風險位">
        <table>
          <thead>
            <tr>
              <th>標的</th>
              <th>位</th>
              <th>操作含意</th>
            </tr>
          </thead>
          <tbody>
            {technicalRows.map(([name, level, read]) => (
              <tr key={name}>
                <td>
                  <strong>{name}</strong>
                </td>
                <td>{level}</td>
                <td>{read}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section id="11" title="明日交易計劃 / 觀察清單">
        <table>
          <thead>
            <tr>
              <th>場景</th>
              <th>行動框架</th>
            </tr>
          </thead>
          <tbody>
            {playbookRows.map(([scenario, action]) => (
              <tr key={scenario}>
                <td>
                  <strong>{scenario}</strong>
                </td>
                <td>{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section id="12" title="來源、口徑與免責聲明">
        <p>
          <strong>數據衝突處理：</strong>三大指數採 AP / Reuters / Yahoo chart
          一致口徑；Russell 2000 不同即時來源略有差異，本文採 Yahoo chart close
          2,714.31 並標示。ETF/個股 daily close 在生成時 Yahoo
          部分尚未填入，因此採 21:00 UTC 1分鐘 close proxy；新聞敘事優先
          Reuters、AP、CNBC、官方 Fed / Nvidia / Anthropic。
        </p>
        <ul className="sourceList">
          {sources.map((source) => (
            <li key={source.url}>
              <a href={source.url}>{source.name}</a>
            </li>
          ))}
        </ul>
        <p className="disclaimer">{disclaimer}</p>
      </Section>
    </main>
  );
}
