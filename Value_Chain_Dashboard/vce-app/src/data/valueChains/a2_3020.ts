import type { ValueChain } from '../../types/valueChain';

export const a2_3020Data: ValueChain = {
  code: "A2-3020",
  name: "Television",
  imCode: "A2-3020",
  classificationCode: "A2-3020",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Semiconductors & ICs",
          cr4: 85.0,
          probit: "LH",
          operatingMargin: 22.5,
          cagr: 12.4,
          cagrForward: 8.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Qualcomm",
              ticker: "QCOM",
              share: 32.0,
              strengths: [
                "Advanced SoC for smart TVs",
                "5G integration",
              ],
            },
            {
              name: "MediaTek",
              ticker: "2454.TW",
              share: 25.0,
              strengths: [
                "Cost-effective chips",
                "AI processor leadership",
              ],
            },
          ],
          features: [
            {
              title: "Supply Chain Shortages",
              description: "Semiconductor shortages disrupt TV production schedules due to geopolitical tensions and logistics delays.",
            },
          ],
          opportunity: "Rising demand for AI-enabled smart TV processors",
          threat: "Ongoing chip shortages and trade restrictions",
        },
        {
          name: "LCD/OLED Display Panels",
          cr4: 78.0,
          probit: "HL",
          operatingMargin: 15.2,
          cagr: 6.1,
          cagrForward: 4.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Samsung Display",
              ticker: "005930.KS",
              share: 35.0,
              strengths: [
                "QD-OLED technology",
                "Premium panel supply",
              ],
            },
            {
              name: "LG Display",
              ticker: "034220.KS",
              share: 28.0,
              strengths: [
                "WOLED dominance",
                "Automotive crossover",
              ],
            },
          ],
          features: [
            {
              title: "Panel Price Volatility",
              description: "Fluctuating panel prices impact TV manufacturing costs significantly.",
            },
          ],
          opportunity: "Mini-LED and Micro-LED panel adoption",
          threat: "Chinese panel overcapacity pressure",
        },
        {
          name: "Metals & Plastics",
          cr4: 45.0,
          probit: "LL",
          operatingMargin: 8.7,
          cagr: 3.2,
          cagrForward: 2.9,
          classificationCodes: [],
          leaders: [
            {
              name: "POSCO",
              ticker: "PKX",
              share: 22.0,
              strengths: [
                "Specialty steel for casings",
                "Sustainable sourcing",
              ],
            },
          ],
          features: [
            {
              title: "Commodity Dependence",
              description: "Heavy reliance on global metals market exposes to price swings.",
            },
          ],
          opportunity: "Recycled materials for eco-friendly TVs",
          threat: "Rising raw material costs",
        },
        {
          name: "Memory & Storage",
          cr4: 92.0,
          probit: "HH",
          operatingMargin: 28.4,
          cagr: 14.2,
          cagrForward: 10.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Samsung Electronics",
              ticker: "005930.KS",
              share: 42.0,
              strengths: [
                "DRAM/NAND leadership",
                "High-density modules",
              ],
            },
            {
              name: "SK Hynix",
              ticker: "000660.KS",
              share: 30.0,
              strengths: [
                "HBM for AI TVs",
                "Cost competitiveness",
              ],
            },
          ],
          features: [
            {
              title: "High Bandwidth Demand",
              description: "4K/8K streaming requires advanced memory solutions.",
            },
          ],
          opportunity: "Storage for cloud gaming integration",
          threat: "Cyclical memory pricing",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Chip Design & Firmware",
          cr4: 72.0,
          probit: "LH",
          operatingMargin: 24.8,
          cagr: 11.5,
          cagrForward: 9.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Realtek",
              ticker: "2379.TW",
              share: 38.0,
              strengths: [
                "TV SoC dominance",
                "Voice AI integration",
              ],
            },
          ],
          features: [
            {
              title: "AI Software Stack",
              description: "Voice assistants and AI upscaling embedded in firmware.",
            },
          ],
          opportunity: "AI personalization engines",
          threat: "Open-source software fragmentation",
        },
        {
          name: "Content OS Development",
          cr4: 88.0,
          probit: "HH",
          operatingMargin: 32.1,
          cagr: 16.7,
          cagrForward: 12.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Google",
              ticker: "GOOGL",
              share: 45.0,
              strengths: [
                "Android TV dominance",
                "App ecosystem",
              ],
            },
            {
              name: "Roku",
              ticker: "ROKU",
              share: 25.0,
              strengths: [
                "Platform neutrality",
                "Ad revenue sharing",
              ],
            },
          ],
          features: [
            {
              title: "Voice & AI Integration",
              description: "Alexa, Google Assistant transform TVs into smart home hubs.",
            },
          ],
          opportunity: "Cross-platform content aggregation",
          threat: "Amazon Fire TV competition",
          niche: {
            name: "webOS",
            ticker: "LG",
            share: 12.0,
            cagr: 18.5,
            margin: ">25%",
            strategy: "Premium ecosystem lock-in",
            valuation: "Strategic asset",
          },
        },
        {
          name: "PCB Assembly",
          cr4: 55.0,
          probit: "LL",
          operatingMargin: 6.4,
          cagr: 4.1,
          cagrForward: 3.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Foxconn",
              ticker: "2317.TW",
              share: 28.0,
              strengths: [
                "Scale manufacturing",
                "Vertical integration",
              ],
            },
          ],
          features: [
            {
              title: "Labor-Intensive",
              description: "High precision assembly vulnerable to wage inflation.",
            },
          ],
          opportunity: "Automation upgrades",
          threat: "Rising labor costs in Asia",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "TV Assembly",
          cr4: 68.0,
          probit: "LH",
          operatingMargin: 7.2,
          cagr: 7.8,
          cagrForward: 7.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Samsung Electronics",
              ticker: "005930.KS",
              share: 31.0,
              strengths: [
                "Premium QLED leadership",
                "Global scale",
              ],
            },
            {
              name: "TCL",
              ticker: "01070.HK",
              share: 22.0,
              strengths: [
                "Roku partnership",
                "Cost leadership",
              ],
            },
            {
              name: "LG Electronics",
              ticker: "066570.KS",
              share: 18.0,
              strengths: [
                "OLED pioneer",
                "webOS ecosystem",
              ],
            },
          ],
          features: [
            {
              title: "Global Market Growth",
              description: "TV market from $379B (2021) to $928B by 2033 at 7.75% CAGR.",
            },
          ],
          opportunity: "North America growth to $245B by 2033",
          threat: "Component shortages delaying production",
        },
        {
          name: "Smart TV Production",
          cr4: 76.0,
          probit: "HL",
          operatingMargin: 9.8,
          cagr: 9.2,
          cagrForward: 8.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Hisense",
              ticker: "000921.SZ",
              share: 19.0,
              strengths: [
                "Mini-LED innovation",
                "Sports sponsorships",
              ],
            },
          ],
          features: [
            {
              title: "AI & Voice Features",
              description: "Smart TVs as central connected home hubs.",
            },
          ],
          opportunity: "Premium smart home integration",
          threat: "Software update fragmentation",
        },
        {
          name: "OEM Manufacturing",
          cr4: 62.0,
          probit: "LL",
          operatingMargin: 4.5,
          cagr: 5.6,
          cagrForward: 4.9,
          classificationCodes: [],
          leaders: [
            {
              name: "TPV Technology",
              ticker: "0903.HK",
              share: 35.0,
              strengths: [
                "Philips/AOC brands",
                "Cost efficiency",
              ],
            },
          ],
          features: [
            {
              title: "Private Label",
              description: "Retailers' own-brand TVs driving volume.",
            },
          ],
          opportunity: "Insourcing by retailers",
          threat: "Margin compression",
        },
        {
          name: "Modular TV Components",
          cr4: 48.0,
          probit: "LH",
          operatingMargin: 8.9,
          cagr: 10.3,
          cagrForward: 9.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Vestel",
              ticker: "VESTL.IS",
              share: 24.0,
              strengths: [
                "European manufacturing",
                "OEM flexibility",
              ],
            },
          ],
          features: [
            {
              title: "Repairable Design",
              description: "Modular components enable easier servicing.",
            },
          ],
          opportunity: "Right-to-repair movement",
          threat: "Regulatory compliance costs",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Logistics & Freight",
          cr4: 52.0,
          probit: "LL",
          operatingMargin: 5.1,
          cagr: 6.2,
          cagrForward: 5.8,
          classificationCodes: [],
          leaders: [
            {
              name: "DHL Supply Chain",
              ticker: "DHLGY",
              share: 28.0,
              strengths: [
                "Global electronics network",
                "E-commerce scale",
              ],
            },
          ],
          features: [
            {
              title: "Global Logistics Delays",
              description: "Geopolitical issues impact delivery schedules.",
            },
          ],
          opportunity: "Last-mile delivery optimization",
          threat: "Freight rate volatility",
        },
        {
          name: "Wholesale Distribution",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 12.3,
          cagr: 4.7,
          cagrForward: 4.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Ingram Micro",
              ticker: "INGM",
              share: 34.0,
              strengths: [
                "CE distribution leader",
                "Vendor financing",
              ],
            },
            {
              name: "Tech Data",
              ticker: "TDY",
              share: 22.0,
              strengths: [
                "Cloud integration",
                "SMB focus",
              ],
            },
          ],
          features: [
            {
              title: "B2B Focus",
              description: "Supplying retailers and system integrators.",
            },
          ],
          opportunity: "Commercial display growth",
          threat: "Direct manufacturer channels",
        },
        {
          name: "E-commerce Fulfillment",
          cr4: 82.0,
          probit: "HH",
          operatingMargin: 18.6,
          cagr: 22.4,
          cagrForward: 15.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon",
              ticker: "AMZN",
              share: 48.0,
              strengths: [
                "Prime delivery",
                "FBA network",
              ],
            },
          ],
          features: [
            {
              title: "DTC Growth",
              description: "Brands bypass traditional retail via online platforms.",
            },
          ],
          opportunity: "Shoppertainment integration",
          threat: "Return logistics costs",
        },
        {
          name: "International Trade",
          cr4: 44.0,
          probit: "LH",
          operatingMargin: 7.8,
          cagr: 8.5,
          cagrForward: 7.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Maersk",
              ticker: "AMKBY",
              share: 19.0,
              strengths: [
                "Container shipping",
                "Electronics specialization",
              ],
            },
          ],
          features: [
            {
              title: "Tariff Exposure",
              description: "US-China trade tensions impact panel imports.",
            },
          ],
          opportunity: "Nearshoring to Mexico",
          threat: "Trade war escalation",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Consumer Electronics Retail",
          cr4: 67.0,
          probit: "LL",
          operatingMargin: 3.2,
          cagr: 2.8,
          cagrForward: 2.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Best Buy",
              ticker: "BBY",
              share: 29.0,
              strengths: [
                "Geek Squad services",
                "Premium TV focus",
              ],
            },
            {
              name: "Ceconomy",
              ticker: "CEC.DE",
              share: 24.0,
              strengths: [
                "European scale",
                "MediaMarkt/Saturn",
              ],
            },
          ],
          features: [
            {
              title: "Physical Retail Decline",
              description: "Store traffic shifting to online channels.",
            },
          ],
          opportunity: "Installation services bundling",
          threat: "E-commerce disruption",
        },
        {
          name: "Online Marketplaces",
          cr4: 91.0,
          probit: "HH",
          operatingMargin: 25.7,
          cagr: 19.3,
          cagrForward: 14.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon",
              ticker: "AMZN",
              share: 62.0,
              strengths: [
                "Alexa integration",
                "Prime ecosystem",
              ],
            },
            {
              name: "Alibaba",
              ticker: "BABA",
              share: 18.0,
              strengths: [
                "Tmall dominance",
                "Live commerce",
              ],
            },
          ],
          features: [
            {
              title: "DTC Expansion",
              description: "Brands enhance direct online platforms for better margins.",
            },
          ],
          opportunity: "Interactive shopping experiences",
          threat: "Counterfeit products",
        },
        {
          name: "TV Advertising Sales",
          cr4: 58.0,
          probit: "HL",
          operatingMargin: 14.9,
          cagr: 4.1,
          cagrForward: 5.4,
          classificationCodes: [],
          leaders: [
            {
              name: "WPP",
              ticker: "WPP",
              share: 21.0,
              strengths: [
                "Addressable TV",
                "Data-driven planning",
              ],
            },
          ],
          features: [
            {
              title: "CTV Advertising Boom",
              description: "TV ad market from $145B (2026) to $179B (2030).",
            },
          ],
          opportunity: "Programmatic CTV buying",
          threat: "Linear TV decline",
        },
        {
          name: "B2B Display Sales",
          cr4: 49.0,
          probit: "LH",
          operatingMargin: 11.2,
          cagr: 9.8,
          cagrForward: 8.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Sharp NEC",
              ticker: "NPWX.Y",
              share: 23.0,
              strengths: [
                "Digital signage",
                "Video walls",
              ],
            },
          ],
          features: [
            {
              title: "Commercial Applications",
              description: "Retail, hospitality, transportation displays.",
            },
          ],
          opportunity: "Interactive digital signage",
          threat: "Price competition",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Household Consumers",
          cr4: 0.0,
          probit: "HL",
          operatingMargin: 0.0,
          cagr: 7.8,
          cagrForward: 7.3,
          classificationCodes: [],
          leaders: [],
          features: [
            {
              title: "Smart TV Penetration",
              description: "North America 82% US market share, growing to $245B by 2033.",
            },
          ],
          opportunity: "8K and AI upscaling adoption",
          threat: "Subscription fatigue",
        },
        {
          name: "Streaming Subscribers",
          cr4: 0.0,
          probit: "LH",
          operatingMargin: 0.0,
          cagr: 12.6,
          cagrForward: 10.2,
          classificationCodes: [],
          leaders: [],
          features: [
            {
              title: "OTT Market Growth",
              description: "Global OTT surpassing $165B in 2026; aggregators drive 33% new subs.",
            },
          ],
          opportunity: "Bundled streaming services",
          threat: "Content fragmentation",
        },
        {
          name: "Commercial Installations",
          cr4: 38.0,
          probit: "HH",
          operatingMargin: 0.0,
          cagr: 11.4,
          cagrForward: 9.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Hilton",
              ticker: "HLT",
              share: 15.0,
              strengths: [
                "Smart room tech",
                "Guest experience",
              ],
            },
          ],
          features: [
            {
              title: "Digital Signage Demand",
              description: "Retail/hospitality replacing linear TV.",
            },
          ],
          opportunity: "Interactive displays",
          threat: "Economic slowdowns",
        },
        {
          name: "Advertisers",
          cr4: 55.0,
          probit: "HL",
          operatingMargin: 0.0,
          cagr: 5.4,
          cagrForward: 6.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Procter & Gamble",
              ticker: "PG",
              share: 12.0,
              strengths: [
                "CPG TV ad leader",
                "Addressable targeting",
              ],
            },
          ],
          features: [
            {
              title: "CTV Ad Shift",
              description: "Convergence of TV/digital advertising with measurable ROI.",
            },
          ],
          opportunity: "Cross-screen measurement",
          threat: "Privacy regulations",
        },
      ],
    },
  ],
};
