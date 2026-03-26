import { StageData, SectionData } from './types';

export const stageData: Record<string, StageData> = [
  {
    "stage_id": "upstream",
    "title": "Raw Materials Supply",
    "aggregate_cr4": 45,
    "aggregate_cagr": 6.5,
    "aggregate_probit": "HL",
    "subindustries": [
      {
        "name": "Rubber & Polymers",
        "cr4": 52,
        "probit": "HH",
        "cagr": "7.2%",
        "leaders": [
          {
            "name": "Dow Inc.",
            "ticker": "DOW",
            "share": "18%",
            "strengths": [
              "Advanced polymer formulations for durability",
              "Sustainability-focused bio-based materials"
            ]
          },
          {
            "name": "BASF SE",
            "ticker": "BASFY",
            "share": "15%",
            "strengths": [
              "Custom compounding for soles",
              "Global supply chain resilience"
            ]
          },
          {
            "name": "Linde plc",
            "ticker": "LIN",
            "share": "12%",
            "strengths": [
              "Industrial gases for processing",
              "Cost-efficient production"
            ]
          },
          {
            "name": "Air Products",
            "ticker": "APD",
            "share": "7%",
            "strengths": [
              "Specialty chemicals integration"
            ]
          }
        ],
        "features": [
          {
            "title": "Material Innovation",
            "desc": "Polymer advances enable lighter, sustainable soles aligning with consumer demands for eco-friendly products."
          },
          {
            "title": "Tariff Impacts",
            "desc": "2025 US tariffs prompt supplier diversification and nearshoring."
          }
        ],
        "opportunity": "Rising demand for recycled and bio-based materials driven by EU regulations.",
        "threat": "Commodity price volatility and trade barriers increasing input costs.",
        "niche": null
      },
      {
        "name": "Leather & Textiles",
        "cr4": 38,
        "probit": "LH",
        "cagr": "5.1%",
        "leaders": [
          {
            "name": "Tarkett SA",
            "ticker": "TKTT",
            "share": "14%",
            "strengths": [
              "Synthetic leather alternatives",
              "Vertical integration"
            ]
          },
          {
            "name": "Covestro AG",
            "ticker": "COVTY",
            "share": "12%",
            "strengths": [
              "Polyurethane textiles",
              "Sustainability certifications"
            ]
          },
          {
            "name": "Solvay SA",
            "ticker": "SLVYY",
            "share": "8%",
            "strengths": [
              "High-performance fabrics"
            ]
          }
        ],
        "features": [
          {
            "title": "Sustainability Shift",
            "desc": "Transition to vegan and recycled textiles amid carbon tracking mandates."
          }
        ],
        "opportunity": "Growth in plant-based leathers for premium segments.",
        "threat": "Supply disruptions from geopolitical tensions.",
        "niche": {
          "name": "Bio-fabrics",
          "cr4": 22,
          "probit": "LL",
          "cagr": "9%",
          "leaders": []
        }
      },
      {
        "name": "Chemicals & Dyes",
        "cr4": 41,
        "probit": "HL",
        "cagr": "4.8%",
        "leaders": [
          {
            "name": "Eastman Chemical",
            "ticker": "EMN",
            "share": "16%",
            "strengths": [
              "Adhesives for bonding",
              "Low-VOC formulations"
            ]
          },
          {
            "name": "Huntsman Corp.",
            "ticker": "HUN",
            "share": "13%",
            "strengths": [
              "Colorfast dyes",
              "Eco-compliant chemicals"
            ]
          }
        ],
        "features": [
          {
            "title": "Regulatory Compliance",
            "desc": "Adaptation to 2026 EU carbon footprint standards."
          }
        ],
        "opportunity": "Non-toxic dyes for luxury footwear.",
        "threat": "Stringent environmental regulations raising costs.",
        "niche": null
      },
      {
        "name": "Synthetic Fibers",
        "cr4": 35,
        "probit": "LH",
        "cagr": "6.0%",
        "leaders": [
          {
            "name": "Indorama Ventures",
            "ticker": "IVL",
            "share": "20%",
            "strengths": [
              "Recycled polyester",
              "Asia-Pacific dominance"
            ]
          },
          {
            "name": "Toray Industries",
            "ticker": "TRYIY",
            "share": "11%",
            "strengths": [
              "Performance fibers"
            ]
          }
        ],
        "features": [
          {
            "title": "Recycling Integration",
            "desc": "Shift to circular economy materials."
          }
        ],
        "opportunity": "Demand for lightweight, breathable uppers.",
        "threat": "Competition from natural alternatives.",
        "niche": null
      },
      {
        "name": "Footwear Soles Materials",
        "cr4": 48,
        "probit": "HH",
        "cagr": "12.9%",
        "leaders": [
          {
            "name": "Vibram S.p.A.",
            "ticker": "Private",
            "share": "22%",
            "strengths": [
              "High-traction rubber compounds",
              "Brand partnerships"
            ]
          },
          {
            "name": "Wanhua Chemical",
            "ticker": "600309.SS",
            "share": "14%",
            "strengths": [
              "PU foams for midsoles"
            ]
          }
        ],
        "features": [
          {
            "title": "High Growth",
            "desc": "Market from USD 16.22B in 2026 to 33.91B by 2032."
          }
        ],
        "opportunity": "3D-printable sole materials.",
        "threat": "Raw material cost inflation.",
        "niche": null
      }
    ]
  },
  {
    "stage_id": "processing",
    "title": "Component Processing",
    "aggregate_cr4": 42,
    "aggregate_cagr": 8.2,
    "aggregate_probit": "HL",
    "subindustries": [
      {
        "name": "Sole Manufacturing",
        "cr4": 55,
        "probit": "HH",
        "cagr": "12.9%",
        "leaders": [
          {
            "name": "Nike Inc.",
            "ticker": "NKE",
            "share": "25%",
            "strengths": [
              "In-house compounding",
              "Automation scale"
            ]
          },
          {
            "name": "Adidas AG",
            "ticker": "ADDYY",
            "share": "18%",
            "strengths": [
              "Boost technology",
              "Vertical integration"
            ]
          },
          {
            "name": "Pou Chen Group",
            "ticker": "9904.TW",
            "share": "10%",
            "strengths": [
              "OEM for brands",
              "Vietnam capacity"
            ]
          }
        ],
        "features": [
          {
            "title": "Automation Rise",
            "desc": "Hybrid manufacturing reduces variability and supports small batches."
          }
        ],
        "opportunity": "Modular 3D printing for customization.",
        "threat": "Tariff-driven reshoring costs.",
        "niche": null
      },
      {
        "name": "Uppers Production",
        "cr4": 39,
        "probit": "LH",
        "cagr": "6.8%",
        "leaders": [
          {
            "name": "Feng Tay Enterprise",
            "ticker": "9914.TW",
            "share": "16%",
            "strengths": [
              "Nike supplier",
              "Efficiency"
            ]
          },
          {
            "name": "Yue Yuen Industrial",
            "ticker": "551.TW",
            "share": "14%",
            "strengths": [
              "Mass production scale"
            ]
          }
        ],
        "features": [
          {
            "title": "Digital Knitting",
            "desc": "Seamless uppers via automated processes."
          }
        ],
        "opportunity": "Personalized designs via small-batch tech.",
        "threat": "Labor cost increases in Asia.",
        "niche": {
          "name": "3D Knitting",
          "cr4": 28,
          "probit": "HL",
          "cagr": "15%",
          "leaders": []
        }
      },
      {
        "name": "Molding & Injection",
        "cr4": 47,
        "probit": "HH",
        "cagr": "7.5%",
        "leaders": [
          {
            "name": "Desma",
            "ticker": "Private",
            "share": "20%",
            "strengths": [
              "Direct injection tech"
            ]
          },
          {
            "name": "Kumthai",
            "ticker": "Private",
            "share": "15%",
            "strengths": [
              "High-volume molding"
            ]
          }
        ],
        "features": [
          {
            "title": "Process Evolution",
            "desc": "Precision molding for complex geometries."
          }
        ],
        "opportunity": "Sustainable injection materials.",
        "threat": "Energy cost pressures.",
        "niche": null
      },
      {
        "name": "Lacing & Accessories",
        "cr4": 32,
        "probit": "LL",
        "cagr": "4.2%",
        "leaders": [
          {
            "name": "Fidlock GmbH",
            "ticker": "Private",
            "share": "12%",
            "strengths": [
              "Magnetic closures"
            ]
          },
          {
            "name": "Puma SE",
            "ticker": "PMMAY",
            "share": "10%",
            "strengths": [
              "Integrated hardware"
            ]
          }
        ],
        "features": [
          {
            "title": "Functional Add-ons",
            "desc": "Smart laces and closures for performance."
          }
        ],
        "opportunity": "Tech-integrated accessories.",
        "threat": "Low margins in commoditized parts.",
        "niche": null
      },
      {
        "name": "Packaging Materials",
        "cr4": 36,
        "probit": "LH",
        "cagr": "5.5%",
        "leaders": [
          {
            "name": "Amcor plc",
            "ticker": "AMCR",
            "share": "18%",
            "strengths": [
              "Sustainable boxes",
              "Recyclable tech"
            ]
          }
        ],
        "features": [
          {
            "title": "Eco-Packaging",
            "desc": "Shift to minimal, biodegradable options."
          }
        ],
        "opportunity": "Branded sustainable packaging.",
        "threat": "Rising material costs.",
        "niche": null
      }
    ]
  },
  {
    "stage_id": "manufacturing",
    "title": "Footwear Assembly",
    "aggregate_cr4": 60,
    "aggregate_cagr": 5.8,
    "aggregate_probit": "HH",
    "subindustries": [
      {
        "name": "Athletic Footwear",
        "cr4": 68,
        "probit": "HH",
        "cagr": "5.5%",
        "leaders": [
          {
            "name": "Nike Inc.",
            "ticker": "NKE",
            "share": "35%",
            "strengths": [
              "Brand dominance",
              "Innovation pipeline"
            ]
          },
          {
            "name": "Adidas AG",
            "ticker": "ADDYY",
            "share": "18%",
            "strengths": [
              "Endorsement deals",
              "Tech features"
            ]
          },
          {
            "name": "Skechers USA",
            "ticker": "SKX",
            "share": "9%",
            "strengths": [
              "Comfort focus",
              "Direct-to-consumer"
            ]
          },
          {
            "name": "Under Armour",
            "ticker": "UAA",
            "share": "6%",
            "strengths": [
              "Performance gear integration"
            ]
          }
        ],
        "features": [
          {
            "title": "China Dominance",
            "desc": "Over 55% global production share."
          }
        ],
        "opportunity": "Reshoring to Vietnam/India.",
        "threat": "Escalating China costs and tariffs.",
        "niche": null
      },
      {
        "name": "Casual Footwear",
        "cr4": 42,
        "probit": "HL",
        "cagr": "3.0%",
        "leaders": [
          {
            "name": "Crocs Inc.",
            "ticker": "CROX",
            "share": "15%",
            "strengths": [
              "Clog innovation",
              "Viral marketing"
            ]
          },
          {
            "name": "Deckers Outdoor",
            "ticker": "DECK",
            "share": "12%",
            "strengths": [
              "UGG/Hoka brands"
            ]
          }
        ],
        "features": [
          {
            "title": "Comfort Trend",
            "desc": "Post-pandemic casual shift."
          }
        ],
        "opportunity": "Sustainable casual lines.",
        "threat": "Fashion volatility.",
        "niche": null
      },
      {
        "name": "Luxury Footwear",
        "cr4": 55,
        "probit": "HH",
        "cagr": "4.35%",
        "leaders": [
          {
            "name": "LVMH Mo\u00ebt Hennessy",
            "ticker": "LVMUY",
            "share": "22%",
            "strengths": [
              "Louis Vuitton",
              "Herm\u00e8s exclusivity"
            ]
          },
          {
            "name": "Kering SA",
            "ticker": "PPRUY",
            "share": "18%",
            "strengths": [
              "Gucci, Balenciaga"
            ]
          },
          {
            "name": "Herm\u00e8s International",
            "ticker": "HESAY",
            "share": "10%",
            "strengths": [
              "Artisanal craft"
            ]
          }
        ],
        "features": [
          {
            "title": "Premium Pricing",
            "desc": "Market at USD 33.97B in 2026."
          }
        ],
        "opportunity": "Personalization services.",
        "threat": "Counterfeiting risks.",
        "niche": null
      },
      {
        "name": "Contract Manufacturing (OEM/ODM)",
        "cr4": 65,
        "probit": "HH",
        "cagr": "4.5%",
        "leaders": [
          {
            "name": "Pou Chen Corp.",
            "ticker": "9904.TW",
            "share": "28%",
            "strengths": [
              "Nike/Adidas partner",
              "Scale"
            ]
          },
          {
            "name": "Yue Yuen Industrial",
            "ticker": "551.TW",
            "share": "22%",
            "strengths": [
              "Vietnam expansion"
            ]
          },
          {
            "name": "Feng Tay",
            "ticker": "9914.TW",
            "share": "10%",
            "strengths": [
              "Quality control"
            ]
          }
        ],
        "features": [
          {
            "title": "Asia Focus",
            "desc": "Shift from China to Vietnam."
          }
        ],
        "opportunity": "Small-batch flexibility.",
        "threat": "Geopolitical shifts.",
        "niche": {
          "name": "Sustainable OEM",
          "cr4": 25,
          "probit": "LH",
          "cagr": "8%",
          "leaders": []
        }
      },
      {
        "name": "Work/Outdoor Footwear",
        "cr4": 38,
        "probit": "HL",
        "cagr": "6.2%",
        "leaders": [
          {
            "name": "Wolverine World Wide",
            "ticker": "WWW",
            "share": "14%",
            "strengths": [
              "Merrell, Cat brands"
            ]
          },
          {
            "name": "Timberland (VF Corp)",
            "ticker": "VFC",
            "share": "12%",
            "strengths": [
              "Rugged durability"
            ]
          }
        ],
        "features": [
          {
            "title": "Safety Standards",
            "desc": "Compliance-driven production."
          }
        ],
        "opportunity": "Eco-rugged lines.",
        "threat": "Raw material dependency.",
        "niche": null
      }
    ]
  },
  {
    "stage_id": "distribution",
    "title": "Logistics & Wholesale",
    "aggregate_cr4": 52,
    "aggregate_cagr": 7.1,
    "aggregate_probit": "LH",
    "subindustries": [
      {
        "name": "Freight Forwarding",
        "cr4": 48,
        "probit": "HL",
        "cagr": "8.0%",
        "leaders": [
          {
            "name": "DHL Group",
            "ticker": "DHLGY",
            "share": "20%",
            "strengths": [
              "Global network",
              "E-commerce speed"
            ]
          },
          {
            "name": "Kuehne+Nagel",
            "ticker": "KHNGY",
            "share": "15%",
            "strengths": [
              "Supply chain tech"
            ]
          }
        ],
        "features": [
          {
            "title": "Tariff Adaptation",
            "desc": "Optimized routing post-2025 policies."
          }
        ],
        "opportunity": "Nearshoring logistics.",
        "threat": "Trade disruptions.",
        "niche": null
      },
      {
        "name": "Warehousing",
        "cr4": 44,
        "probit": "LH",
        "cagr": "6.5%",
        "leaders": [
          {
            "name": "Prologis Inc.",
            "ticker": "PLD",
            "share": "18%",
            "strengths": [
              "Automated facilities"
            ]
          },
          {
            "name": "Americold Realty",
            "ticker": "COLD",
            "share": "12%",
            "strengths": [
              "Climate control"
            ]
          }
        ],
        "features": [
          {
            "title": "Automation",
            "desc": "Robotics for inventory management."
          }
        ],
        "opportunity": "Fulfillment centers for DTC.",
        "threat": "Labor shortages.",
        "niche": null
      },
      {
        "name": "Wholesale Distribution",
        "cr4": 39,
        "probit": "LL",
        "cagr": "4.0%",
        "leaders": [
          {
            "name": "JD Sports Fashion",
            "ticker": "JDSPY",
            "share": "14%",
            "strengths": [
              "Multi-brand"
            ]
          },
          {
            "name": "Foot Locker",
            "ticker": "FL",
            "share": "11%",
            "strengths": [
              "Athletic focus"
            ]
          }
        ],
        "features": [
          {
            "title": "Channel Shift",
            "desc": "Decline in traditional wholesale."
          }
        ],
        "opportunity": "B2B platforms.",
        "threat": "Brand direct competition.",
        "niche": null
      },
      {
        "name": "Cold Chain Logistics",
        "cr4": 35,
        "probit": "LH",
        "cagr": "7.8%",
        "leaders": [
          {
            "name": "Lineage Logistics",
            "ticker": "Private",
            "share": "16%",
            "strengths": [
              "Specialized storage"
            ]
          }
        ],
        "features": [
          {
            "title": "Premium Handling",
            "desc": "For luxury/perishables."
          }
        ],
        "opportunity": "Sustainable transport.",
        "threat": "Energy costs.",
        "niche": null
      }
    ]
  },
  {
    "stage_id": "sales",
    "title": "Retail & E-commerce",
    "aggregate_cr4": 38,
    "aggregate_cagr": 9.5,
    "aggregate_probit": "LH",
    "subindustries": [
      {
        "name": "Sporting Goods Retail",
        "cr4": 45,
        "probit": "HL",
        "cagr": "8.2%",
        "leaders": [
          {
            "name": "Nike Inc.",
            "ticker": "NKE",
            "share": "20%",
            "strengths": [
              "DTC growth",
              "App ecosystem"
            ]
          },
          {
            "name": "Adidas AG",
            "ticker": "ADDYY",
            "share": "12%",
            "strengths": [
              "Omnichannel"
            ]
          },
          {
            "name": "Foot Locker",
            "ticker": "FL",
            "share": "8%",
            "strengths": [
              "Store network"
            ]
          }
        ],
        "features": [
          {
            "title": "Digital Acceleration",
            "desc": "Omnichannel post-COVID."
          }
        ],
        "opportunity": "Experiential retail.",
        "threat": "E-com pure plays.",
        "niche": null
      },
      {
        "name": "E-commerce Platforms",
        "cr4": 62,
        "probit": "HH",
        "cagr": "12.0%",
        "leaders": [
          {
            "name": "Amazon.com Inc.",
            "ticker": "AMZN",
            "share": "35%",
            "strengths": [
              "Prime logistics",
              "AI recommendations"
            ]
          },
          {
            "name": "Alibaba Group",
            "ticker": "BABA",
            "share": "18%",
            "strengths": [
              "Asia dominance"
            ]
          },
          {
            "name": "Zalando SE",
            "ticker": "ZLNDY",
            "share": "9%",
            "strengths": [
              "Europe fashion"
            ]
          }
        ],
        "features": [
          {
            "title": "Personalization",
            "desc": "AI-driven micro-tribes targeting."
          }
        ],
        "opportunity": "Social commerce.",
        "threat": "Margin pressure from discounts.",
        "niche": null
      },
      {
        "name": "Department Stores",
        "cr4": 41,
        "probit": "LH",
        "cagr": "2.5%",
        "leaders": [
          {
            "name": "Macy's Inc.",
            "ticker": "M",
            "share": "15%",
            "strengths": [
              "Brand mix"
            ]
          },
          {
            "name": "Nordstrom Inc.",
            "ticker": "JWN",
            "share": "12%",
            "strengths": [
              "Luxury focus"
            ]
          }
        ],
        "features": [
          {
            "title": "Declining Share",
            "desc": "Shift to specialty channels."
          }
        ],
        "opportunity": "Pop-up experiences.",
        "threat": "E-com disruption.",
        "niche": null
      },
      {
        "name": "Luxury Boutiques",
        "cr4": 52,
        "probit": "HH",
        "cagr": "5.0%",
        "leaders": [
          {
            "name": "LVMH",
            "ticker": "LVMUY",
            "share": "25%",
            "strengths": [
              "Exclusive locations"
            ]
          },
          {
            "name": "Richemont",
            "ticker": "CFRUY",
            "share": "16%",
            "strengths": [
              "Cartier/Chanel"
            ]
          }
        ],
        "features": [
          {
            "title": "Experiential Sales",
            "desc": "High-touch personalization."
          }
        ],
        "opportunity": "Digital luxury platforms.",
        "threat": "Online counterfeits.",
        "niche": null
      },
      {
        "name": "Discount Retail",
        "cr4": 33,
        "probit": "LL",
        "cagr": "3.8%",
        "leaders": [
          {
            "name": "Walmart Inc.",
            "ticker": "WMT",
            "share": "14%",
            "strengths": [
              "Volume scale"
            ]
          },
          {
            "name": "Target Corp.",
            "ticker": "TGT",
            "share": "11%",
            "strengths": [
              "Private label"
            ]
          }
        ],
        "features": [
          {
            "title": "Price Competition",
            "desc": "Tariff pass-through challenges."
          }
        ],
        "opportunity": "Private label growth.",
        "threat": "Inflation sensitivity.",
        "niche": null
      }
    ]
  },
  {
    "stage_id": "customer",
    "title": "End-User Consumption",
    "aggregate_cr4": 28,
    "aggregate_cagr": 7.0,
    "aggregate_probit": "LL",
    "subindustries": [
      {
        "name": "Athletic Consumers",
        "cr4": 35,
        "probit": "HL",
        "cagr": "5.9%",
        "leaders": [
          {
            "name": "Nike Direct",
            "ticker": "NKE",
            "share": "22%",
            "strengths": [
              "Loyalty programs"
            ]
          },
          {
            "name": "Adidas Confirmed App",
            "ticker": "ADDYY",
            "share": "12%",
            "strengths": [
              "Limited drops"
            ]
          }
        ],
        "features": [
          {
            "title": "Performance Demand",
            "desc": "Fitness trends driving sales."
          }
        ],
        "opportunity": "Wearable integrations.",
        "threat": "Trend shifts.",
        "niche": null
      },
      {
        "name": "Casual/Fashion Buyers",
        "cr4": 24,
        "probit": "LL",
        "cagr": "3.2%",
        "leaders": [
          {
            "name": "Zara (Inditex)",
            "ticker": "IDEXY",
            "share": "10%",
            "strengths": [
              "Fast fashion"
            ]
          },
          {
            "name": "H&M",
            "ticker": "HNNMY",
            "share": "8%",
            "strengths": [
              "Affordable trends"
            ]
          }
        ],
        "features": [
          {
            "title": "Micro-trends",
            "desc": "Social media fragmentation."
          }
        ],
        "opportunity": "Customization.",
        "threat": "Sustainability backlash.",
        "niche": null
      },
      {
        "name": "Luxury Enthusiasts",
        "cr4": 42,
        "probit": "HH",
        "cagr": "4.5%",
        "leaders": [
          {
            "name": "LVMH Clientele",
            "ticker": "LVMUY",
            "share": "20%",
            "strengths": [
              "VIP services"
            ]
          },
          {
            "name": "Chanel Direct",
            "ticker": "Private",
            "share": "14%",
            "strengths": [
              "Heritage appeal"
            ]
          }
        ],
        "features": [
          {
            "title": "Status Purchases",
            "desc": "Investment pieces."
          }
        ],
        "opportunity": "Resale markets.",
        "threat": "Economic downturns.",
        "niche": null
      },
      {
        "name": "Children's Footwear",
        "cr4": 31,
        "probit": "LH",
        "cagr": "5.0%",
        "leaders": [
          {
            "name": "Carter's Inc.",
            "ticker": "CRI",
            "share": "12%",
            "strengths": [
              "Kid-focused"
            ]
          },
          {
            "name": "Stride Rite (Wolverine)",
            "ticker": "WWW",
            "share": "9%",
            "strengths": [
              "Growth stages"
            ]
          }
        ],
        "features": [
          {
            "title": "Developmental Fit",
            "desc": "Orthopedic emphasis."
          }
        ],
        "opportunity": "Eco-kids lines.",
        "threat": "Seasonal demand.",
        "niche": null
      }
    ]
  }
];

export const sectionsData: SectionData[] = [
  {
    "stage": "upstream",
    "cr4": 45,
    "cagr": 6.5,
    "probit": "HL",
    "title": "Raw Materials Supply",
    "rows": [
      {
        "subIndustry": "Rubber & Polymers",
        "cr4": 52,
        "probit": "HH",
        "cagr": "7.2%"
      },
      {
        "subIndustry": "Leather & Textiles",
        "cr4": 38,
        "probit": "LH",
        "cagr": "5.1%"
      },
      {
        "subIndustry": "Chemicals & Dyes",
        "cr4": 41,
        "probit": "HL",
        "cagr": "4.8%"
      },
      {
        "subIndustry": "Synthetic Fibers",
        "cr4": 35,
        "probit": "LH",
        "cagr": "6.0%"
      },
      {
        "subIndustry": "Footwear Soles Materials",
        "cr4": 48,
        "probit": "HH",
        "cagr": "12.9%"
      }
    ]
  },
  {
    "stage": "processing",
    "cr4": 42,
    "cagr": 8.2,
    "probit": "HL",
    "title": "Component Processing",
    "rows": [
      {
        "subIndustry": "Sole Manufacturing",
        "cr4": 55,
        "probit": "HH",
        "cagr": "12.9%"
      },
      {
        "subIndustry": "Uppers Production",
        "cr4": 39,
        "probit": "LH",
        "cagr": "6.8%"
      },
      {
        "subIndustry": "Molding & Injection",
        "cr4": 47,
        "probit": "HH",
        "cagr": "7.5%"
      },
      {
        "subIndustry": "Lacing & Accessories",
        "cr4": 32,
        "probit": "LL",
        "cagr": "4.2%"
      },
      {
        "subIndustry": "Packaging Materials",
        "cr4": 36,
        "probit": "LH",
        "cagr": "5.5%"
      }
    ]
  },
  {
    "stage": "manufacturing",
    "cr4": 60,
    "cagr": 5.8,
    "probit": "HH",
    "title": "Footwear Assembly",
    "rows": [
      {
        "subIndustry": "Athletic Footwear",
        "cr4": 68,
        "probit": "HH",
        "cagr": "5.5%"
      },
      {
        "subIndustry": "Casual Footwear",
        "cr4": 42,
        "probit": "HL",
        "cagr": "3.0%"
      },
      {
        "subIndustry": "Luxury Footwear",
        "cr4": 55,
        "probit": "HH",
        "cagr": "4.35%"
      },
      {
        "subIndustry": "Contract Manufacturing (OEM/ODM)",
        "cr4": 65,
        "probit": "HH",
        "cagr": "4.5%"
      },
      {
        "subIndustry": "Work/Outdoor Footwear",
        "cr4": 38,
        "probit": "HL",
        "cagr": "6.2%"
      }
    ]
  },
  {
    "stage": "distribution",
    "cr4": 52,
    "cagr": 7.1,
    "probit": "LH",
    "title": "Logistics & Wholesale",
    "rows": [
      {
        "subIndustry": "Freight Forwarding",
        "cr4": 48,
        "probit": "HL",
        "cagr": "8.0%"
      },
      {
        "subIndustry": "Warehousing",
        "cr4": 44,
        "probit": "LH",
        "cagr": "6.5%"
      },
      {
        "subIndustry": "Wholesale Distribution",
        "cr4": 39,
        "probit": "LL",
        "cagr": "4.0%"
      },
      {
        "subIndustry": "Cold Chain Logistics",
        "cr4": 35,
        "probit": "LH",
        "cagr": "7.8%"
      }
    ]
  },
  {
    "stage": "sales",
    "cr4": 38,
    "cagr": 9.5,
    "probit": "LH",
    "title": "Retail & E-commerce",
    "rows": [
      {
        "subIndustry": "Sporting Goods Retail",
        "cr4": 45,
        "probit": "HL",
        "cagr": "8.2%"
      },
      {
        "subIndustry": "E-commerce Platforms",
        "cr4": 62,
        "probit": "HH",
        "cagr": "12.0%"
      },
      {
        "subIndustry": "Department Stores",
        "cr4": 41,
        "probit": "LH",
        "cagr": "2.5%"
      },
      {
        "subIndustry": "Luxury Boutiques",
        "cr4": 52,
        "probit": "HH",
        "cagr": "5.0%"
      },
      {
        "subIndustry": "Discount Retail",
        "cr4": 33,
        "probit": "LL",
        "cagr": "3.8%"
      }
    ]
  },
  {
    "stage": "customer",
    "cr4": 28,
    "cagr": 7.0,
    "probit": "LL",
    "title": "End-User Consumption",
    "rows": [
      {
        "subIndustry": "Athletic Consumers",
        "cr4": 35,
        "probit": "HL",
        "cagr": "5.9%"
      },
      {
        "subIndustry": "Casual/Fashion Buyers",
        "cr4": 24,
        "probit": "LL",
        "cagr": "3.2%"
      },
      {
        "subIndustry": "Luxury Enthusiasts",
        "cr4": 42,
        "probit": "HH",
        "cagr": "4.5%"
      },
      {
        "subIndustry": "Children's Footwear",
        "cr4": 31,
        "probit": "LH",
        "cagr": "5.0%"
      }
    ]
  }
];
