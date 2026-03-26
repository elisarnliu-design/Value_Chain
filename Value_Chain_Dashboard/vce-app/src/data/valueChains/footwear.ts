import type { ValueChain } from '../../types/valueChain';

export const footwearData: ValueChain = {
  code: "C1-1020",
  name: "Footwear",
  imCode: "C1-1020",
  classificationCode: "C1-1020",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Leather & Hides",
          cr4: 65.0,
          probit: "LL",
          cagr: 2.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Tarkett",
              ticker: "TKTT",
              share: 22.0,
              strengths: [
                "Global supply network",
                "Sustainable sourcing",
              ],
            },
            {
              name: "Carbshoe",
              ticker: "CBE",
              share: 18.0,
              strengths: [
                "Cost efficiency",
                "Vertical integration",
              ],
            },
          ],
          features: [
            {
              title: "Material Sourcing Shift",
              description: "Increasing use of synthetic alternatives to traditional leather due to cost and sustainability pressures.",
            },
          ],
          opportunity: "Growth in vegan leather demand from brands seeking eco-friendly materials.",
          threat: "Tariffs and trade restrictions on hide imports disrupting supply.",
        },
        {
          name: "Rubber & Synthetics",
          cr4: 72.0,
          probit: "HL",
          cagr: 3.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Sinopec",
              ticker: "0386.HK",
              share: 28.0,
              strengths: [
                "Scale in Asia",
                "Low-cost production",
              ],
            },
          ],
          features: [
            {
              title: "Sustainability Focus",
              description: "Development of bio-based rubbers to meet regulatory and consumer demands.",
            },
          ],
          opportunity: "Expansion in athletic footwear requiring high-performance synthetics.",
          threat: "Volatile petrochemical prices impacting margins.",
          niche: {
            name: "Michelin",
            ticker: "ML.PA",
            share: 12.0,
            cagr: 4.5,
            margin: ">20%",
            strategy: "Premium sustainable materials",
            valuation: "P/E 18x",
          },
        },
        {
          name: "Textiles & Fabrics",
          cr4: 58.0,
          probit: "LH",
          cagr: 5.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Toray Industries",
              ticker: "3402.T",
              share: 25.0,
              strengths: [
                "Advanced fibers",
                "Innovation pipeline",
              ],
            },
          ],
          features: [
            {
              title: "Performance Fabrics",
              description: "Breathable and waterproof textiles driving premium segment growth.",
            },
          ],
          opportunity: "Demand for recycled polyester in casual and sportswear.",
          threat: "Competition from low-cost Asian producers.",
        },
        {
          name: "Soles & Components",
          cr4: 68.0,
          probit: "LL",
          cagr: 1.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Wanhua Chemical",
              ticker: "600309.SS",
              share: 30.0,
              strengths: [
                "PU sole dominance",
                "Export focus",
              ],
            },
          ],
          features: [
            {
              title: "Customization Trends",
              description: "Rise in 3D-printed soles for personalized footwear.",
            },
          ],
          opportunity: "Nearshoring for faster delivery to Western markets.",
          threat: "IP theft in contract manufacturing hubs.",
        },
        {
          name: "Chemicals & Adhesives",
          cr4: 55.0,
          probit: "HL",
          cagr: 3.5,
          classificationCodes: [],
          leaders: [
            {
              name: "BASF",
              ticker: "BAS.DE",
              share: 20.0,
              strengths: [
                "R&D leadership",
                "Eco-adhesives",
              ],
            },
          ],
          features: [
            {
              title: "Green Chemistry",
              description: "Solvent-free adhesives reducing environmental impact.",
            },
          ],
          opportunity: "Regulatory push for low-VOC products.",
          threat: "Raw material price volatility.",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Tanning & Leather Processing",
          cr4: 62.0,
          probit: "LL",
          cagr: 1.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Stahl Holdings",
              ticker: "Private",
              share: 24.0,
              strengths: [
                "Chrome-free tech",
                "Global reach",
              ],
            },
          ],
          features: [
            {
              title: "Wet Processing",
              description: "Critical stage for leather quality, facing water usage scrutiny.",
            },
          ],
          opportunity: "Sustainable tanning methods for premium brands.",
          threat: "EU regulations on chemical discharges.",
        },
        {
          name: "Fabric Dyeing & Finishing",
          cr4: 70.0,
          probit: "LH",
          cagr: 4.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Archroma",
              ticker: "Private",
              share: 26.0,
              strengths: [
                "Color innovation",
                "Sustainability",
              ],
            },
          ],
          features: [
            {
              title: "Digital Dyeing",
              description: "Reducing waste through precise color application.",
            },
          ],
          opportunity: "Demand for vibrant, durable colors in fashion footwear.",
          threat: "Dye pollution controls tightening.",
        },
        {
          name: "Rubber Compounding",
          cr4: 75.0,
          probit: "HL",
          cagr: 3.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Lanxess",
              ticker: "LXS.DE",
              share: 29.0,
              strengths: [
                "High-performance compounds",
                "Automotive crossover",
              ],
            },
          ],
          features: [
            {
              title: "Vulcanization",
              description: "Enhancing sole durability and grip.",
            },
          ],
          opportunity: "Lightweight compounds for running shoes.",
          threat: "Commodity price swings.",
        },
        {
          name: "Foam Production",
          cr4: 80.0,
          probit: "HH",
          cagr: 5.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Covestro",
              ticker: "1COV.DE",
              share: 35.0,
              strengths: [
                "PU foams",
                "Bio-based innovations",
              ],
            },
          ],
          features: [
            {
              title: "Midsole Tech",
              description: "Advanced foams for cushioning in athletic footwear.",
            },
          ],
          opportunity: "Growth in performance sportswear.",
          threat: "Supply chain disruptions in Asia.",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Contract Manufacturing",
          cr4: 45.0,
          probit: "LH",
          cagr: 4.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Yue Yuen Industrial",
              ticker: "551.HK",
              share: 18.0,
              strengths: [
                "Nike/Adidas scale",
                "Vietnam expansion",
              ],
            },
            {
              name: "Pou Chen Group",
              ticker: "9904.TW",
              share: 15.0,
              strengths: [
                "Diversified clients",
                "Automation",
              ],
            },
          ],
          features: [
            {
              title: "Asia Dominance",
              description: "Vietnam and Indonesia hotspots for low-cost assembly.",
            },
          ],
          opportunity: "Nearshoring to Mexico and Eastern Europe.",
          threat: "Labor shortages and wage inflation.",
        },
        {
          name: "Athletic Footwear Production",
          cr4: 85.0,
          probit: "HH",
          cagr: 6.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Nike (Mfg Partners)",
              ticker: "NKE",
              share: 32.0,
              strengths: [
                "Tech integration",
                "Volume leader",
              ],
            },
          ],
          features: [
            {
              title: "Performance Focus",
              description: "High-tech assembly for cushioning and stability.",
            },
          ],
          opportunity: "Customization via digital manufacturing.",
          threat: "Brand dependency risks.",
        },
        {
          name: "Casual & Fashion Assembly",
          cr4: 52.0,
          probit: "HL",
          cagr: 3.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Fulgent Sun",
              ticker: "Private",
              share: 20.0,
              strengths: [
                "Fast fashion cycles",
                "Trend responsiveness",
              ],
            },
          ],
          features: [
            {
              title: "Quick Turnaround",
              description: "Short lead times for seasonal collections.",
            },
          ],
          opportunity: "Private label growth for retailers.",
          threat: "Overcapacity in China.",
        },
        {
          name: "Luxury Footwear Making",
          cr4: 78.0,
          probit: "HH",
          cagr: 4.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Hermes (Intl)",
              ticker: "RMS.PA",
              share: 25.0,
              strengths: [
                "Handcrafting",
                "Brand prestige",
              ],
            },
          ],
          features: [
            {
              title: "Artisanal Craft",
              description: "Limited production for exclusivity.",
            },
          ],
          opportunity: "Made-in-Italy premium positioning.",
          threat: "Skilled labor shortages.",
          niche: {
            name: "Birkenstock",
            ticker: "BIRK",
            share: 8.0,
            cagr: 12.5,
            margin: ">25%",
            strategy: "Direct-to-consumer shift",
            valuation: "P/E 55x",
          },
        },
        {
          name: "Work & Safety Boots",
          cr4: 60.0,
          probit: "LL",
          cagr: 2.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Timberland (VF Corp)",
              ticker: "VFC",
              share: 22.0,
              strengths: [
                "Durability standards",
                "B2B sales",
              ],
            },
          ],
          features: [
            {
              title: "Protective Gear",
              description: "Steel toes and composite materials.",
            },
          ],
          opportunity: "Industrial sector recovery.",
          threat: "Economic slowdowns.",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Wholesale & Logistics",
          cr4: 55.0,
          probit: "LH",
          cagr: 5.0,
          classificationCodes: [],
          leaders: [
            {
              name: "DHL Supply Chain",
              ticker: "DHLGY",
              share: 20.0,
              strengths: [
                "Global network",
                "E-commerce logistics",
              ],
            },
          ],
          features: [
            {
              title: "Container Shipping",
              description: "Asia-to-West routes critical for footwear flow.",
            },
          ],
          opportunity: "Air freight for premium express delivery.",
          threat: "Port congestions and Red Sea disruptions.",
        },
        {
          name: "Brand Wholesale",
          cr4: 70.0,
          probit: "HL",
          cagr: 3.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Nike Wholesale",
              ticker: "NKE",
              share: 28.0,
              strengths: [
                "Channel control",
                "Data analytics",
              ],
            },
          ],
          features: [
            {
              title: "Direct Wholesale",
              description: "Brands bypassing traditional distributors.",
            },
          ],
          opportunity: "Emerging markets expansion.",
          threat: "Counterfeit infiltration.",
        },
        {
          name: "Inventory Management",
          cr4: 48.0,
          probit: "LL",
          cagr: 2.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Maersk",
              ticker: "MAERSK-B.CO",
              share: 16.0,
              strengths: [
                "Integrated shipping",
                "Warehousing",
              ],
            },
          ],
          features: [
            {
              title: "3PL Services",
              description: "Third-party logistics optimizing stock turns.",
            },
          ],
          opportunity: "Automation in DCs.",
          threat: "Rising fuel costs.",
        },
        {
          name: "Cold Chain (Specialty)",
          cr4: 65.0,
          probit: "LH",
          cagr: 6.1,
          classificationCodes: [],
          leaders: [
            {
              name: "DB Schenker",
              ticker: "Private",
              share: 24.0,
              strengths: [
                "Temperature control",
                "Pharma crossover",
              ],
            },
          ],
          features: [
            {
              title: "Premium Handling",
              description: "For exotic leathers and materials.",
            },
          ],
          opportunity: "Luxury segment growth.",
          threat: "Energy costs for cooling.",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Brand Direct Retail",
          cr4: 82.0,
          probit: "HH",
          cagr: 7.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Nike Direct",
              ticker: "NKE",
              share: 35.0,
              strengths: [
                "DTC model",
                "App ecosystem",
              ],
            },
            {
              name: "Adidas Direct",
              ticker: "ADS.DE",
              share: 22.0,
              strengths: [
                "Omnichannel",
                "Yeezy legacy",
              ],
            },
          ],
          features: [
            {
              title: "DTC Shift",
              description: "Brands capturing full margins via owned channels.",
            },
          ],
          opportunity: "Personalization apps.",
          threat: "Cannibalization of wholesale.",
        },
        {
          name: "Multi-Brand Retail",
          cr4: 60.0,
          probit: "LL",
          cagr: 2.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Foot Locker",
              ticker: "FL",
              share: 18.0,
              strengths: [
                "Sneaker culture",
                "Youth focus",
              ],
            },
            {
              name: "Dick's Sporting Goods",
              ticker: "DKS",
              share: 15.0,
              strengths: [
                "Sports assortment",
                "Large format",
              ],
            },
          ],
          features: [
            {
              title: "Curated Assortment",
              description: "Shelf space battles among brands.",
            },
          ],
          opportunity: "Experiential stores.",
          threat: "E-commerce disruption.",
        },
        {
          name: "E-Commerce Platforms",
          cr4: 75.0,
          probit: "HH",
          cagr: 12.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Zappos (Amazon)",
              ticker: "AMZN",
              share: 30.0,
              strengths: [
                "Fast delivery",
                "Returns policy",
              ],
            },
          ],
          features: [
            {
              title: "Online Marketplaces",
              description: "Amazon, Zalando dominating digital sales.",
            },
          ],
          opportunity: "AR try-on tech.",
          threat: "Data privacy regs.",
          niche: {
            name: "SSENSE",
            ticker: "Private",
            share: 5.0,
            cagr: 18.0,
            margin: ">30%",
            strategy: "Luxury digital",
            valuation: "Private 10x rev",
          },
        },
        {
          name: "Department Stores",
          cr4: 68.0,
          probit: "LL",
          cagr: 1.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Nordstrom",
              ticker: "JWN",
              share: 25.0,
              strengths: [
                "Full-price sell-through",
                "Services",
              ],
            },
          ],
          features: [
            {
              title: "Declining Footprint",
              description: "Shift to off-price and online.",
            },
          ],
          opportunity: "Private label revival.",
          threat: "Store closures.",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Athletic & Performance",
          cr4: 70.0,
          probit: "HH",
          cagr: 6.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Fitness Enthusiasts",
              ticker: "",
              share: 28.0,
              strengths: [
                "Tech adoption",
                "Brand loyalty",
              ],
            },
          ],
          features: [
            {
              title: "Sneaker Culture",
              description: "Resale market booming with hype drops.",
            },
          ],
          opportunity: "Wearables integration.",
          threat: "Injury-related litigation.",
        },
        {
          name: "Casual & Fashion Consumers",
          cr4: 45.0,
          probit: "HL",
          cagr: 3.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Trend Followers",
              ticker: "",
              share: 20.0,
              strengths: [
                "Social media influence",
                "Fast cycles",
              ],
            },
          ],
          features: [
            {
              title: "UGC Trends",
              description: "TikTok driving viral styles.",
            },
          ],
          opportunity: "Gen Z customization.",
          threat: "Trend volatility.",
        },
        {
          name: "Work & Occupational",
          cr4: 55.0,
          probit: "LL",
          cagr: 2.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Industrial Workers",
              ticker: "",
              share: 22.0,
              strengths: [
                "B2B purchasing",
                "Safety priority",
              ],
            },
          ],
          features: [
            {
              title: "Compliance Driven",
              description: "OSHA standards mandating purchases.",
            },
          ],
          opportunity: "Service sector growth.",
          threat: "Automation reducing need.",
        },
        {
          name: "Luxury & Premium Buyers",
          cr4: 82.0,
          probit: "HH",
          cagr: 5.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Affluent Millennials",
              ticker: "",
              share: 30.0,
              strengths: [
                "Investment mindset",
                "Exclusivity",
              ],
            },
          ],
          features: [
            {
              title: "Status Symbols",
              description: "Limited editions commanding premiums.",
            },
          ],
          opportunity: "Sustainable luxury.",
          threat: "Economic downturns.",
        },
        {
          name: "Kids & Family Segment",
          cr4: 50.0,
          probit: "LH",
          cagr: 4.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Parents",
              ticker: "",
              share: 18.0,
              strengths: [
                "Volume buying",
                "Durability focus",
              ],
            },
          ],
          features: [
            {
              title: "Growth Phase",
              description: "High replacement frequency.",
            },
          ],
          opportunity: "Eco-kids lines.",
          threat: "Back-to-school saturation.",
        },
      ],
    },
  ],
};
