import type { ValueChain } from '../../types/valueChain';

export const a2_70Data: ValueChain = {
  code: "A2-70",
  name: "Sporting Goods & Activities industry (IM A2-70; sector A2 — Mind)",
  imCode: "A2-70",
  classificationCode: "A2-70",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Synthetic Fibers & Textiles",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 12.3,
          cagr: 3.2,
          cagrForward: 4.1,
          classificationCodes: [],
          leaders: [
            {
              name: "DuPont de Nemours",
              ticker: "DD",
              share: 22.0,
              strengths: [
                "Advanced synthetic materials",
                "Global supply network",
              ],
            },
            {
              name: "Toray Industries",
              ticker: "TRYIY",
              share: 18.0,
              strengths: [
                "High-performance fibers",
                "Asia-Pacific dominance",
              ],
            },
          ],
          features: [
            {
              title: "Recycled Materials Shift",
              description: "Increasing use of recycled polyester and nylon to meet sustainability demands.",
            },
          ],
          opportunity: "Rising demand for eco-friendly fabrics in performance apparel.",
          threat: "Commodity price volatility in petrochemical feedstocks.",
        },
        {
          name: "Rubber & Foam Materials",
          cr4: 55.0,
          probit: "LH",
          operatingMargin: 8.7,
          cagr: 5.1,
          cagrForward: 6.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Linde plc",
              ticker: "LIN",
              share: 20.0,
              strengths: [
                "Foam production scale",
                "Industrial gas integration",
              ],
            },
          ],
          features: [
            {
              title: "Lightweight Foams",
              description: "Development of EVA and PU foams for footwear and equipment cushioning.",
            },
          ],
          opportunity: "Growth in athletic footwear driving EVA demand.",
          threat: "Supply chain disruptions from natural rubber sources.",
        },
        {
          name: "Metals & Composites",
          cr4: 70.0,
          probit: "HH",
          operatingMargin: 15.2,
          cagr: 4.5,
          cagrForward: 5.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Alcoa Corporation",
              ticker: "AA",
              share: 25.0,
              strengths: [
                "Lightweight aluminum alloys",
                "Aerospace crossover tech",
              ],
            },
          ],
          features: [
            {
              title: "Carbon Fiber Expansion",
              description: "Premium composites for high-end bikes and rackets.",
            },
          ],
          opportunity: "Premium equipment segment expansion.",
          threat: "Rare earth metal tariffs impacting costs.",
          niche: {
            name: "Hexcel Corporation",
            ticker: "HXL",
            share: 8.0,
            cagr: 7.2,
            margin: ">20%",
            strategy: "Aerospace-to-sports tech transfer",
            valuation: "P/E 35x",
          },
        },
        {
          name: "Plastics & Polymers",
          cr4: 60.0,
          probit: "LL",
          operatingMargin: 6.4,
          cagr: 2.8,
          cagrForward: 3.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Dow Inc.",
              ticker: "DOW",
              share: 24.0,
              strengths: [
                "Commodity plastics volume",
                "Recycling initiatives",
              ],
            },
          ],
          features: [
            {
              title: "Bio-based Plastics",
              description: "Emerging plant-derived polymers for equipment casings.",
            },
          ],
          opportunity: "Sustainability regulations favoring bioplastics.",
          threat: "Oil price fluctuations.",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Fabric Dyeing & Finishing",
          cr4: 45.0,
          probit: "LH",
          operatingMargin: 7.9,
          cagr: 4.2,
          cagrForward: 5.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Textile Contract Processors",
              ticker: "N/A",
              share: 15.0,
              strengths: [
                "Technical dyeing capabilities",
                "Quick turnaround",
              ],
            },
          ],
          features: [
            {
              title: "Waterless Dyeing Tech",
              description: "Reducing water usage by 95% in color application.",
            },
          ],
          opportunity: "Performance finishes for moisture-wicking fabrics.",
          threat: "Environmental regulations on chemical discharge.",
        },
        {
          name: "Component Assembly",
          cr4: 50.0,
          probit: "HL",
          operatingMargin: 11.2,
          cagr: 3.8,
          cagrForward: 4.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Fox Factory Holding",
              ticker: "FOXF",
              share: 20.0,
              strengths: [
                "Suspension systems expertise",
                "Bike component leadership",
              ],
            },
          ],
          features: [
            {
              title: "Precision Molding",
              description: "Injection molding for grips, pads, and small parts.",
            },
          ],
          opportunity: "Customization trends in equipment.",
          threat: "Labor cost inflation in processing hubs.",
        },
        {
          name: "Leather & Synthetic Processing",
          cr4: 68.0,
          probit: "LL",
          operatingMargin: 5.6,
          cagr: 2.1,
          cagrForward: 2.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Tarkett",
              ticker: "TKTT",
              share: 18.0,
              strengths: [
                "Synthetic leather scale",
                "Sports flooring",
              ],
            },
          ],
          features: [
            {
              title: "Vegan Leather",
              description: "Plant-based alternatives gaining footwear traction.",
            },
          ],
          opportunity: "Vegan material demand growth.",
          threat: "Declining traditional leather use.",
        },
        {
          name: "Sport Surface Materials",
          cr4: 72.0,
          probit: "HH",
          operatingMargin: 14.8,
          cagr: 5.4,
          cagrForward: 6.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Shaw Industries",
              ticker: "N/A",
              share: 28.0,
              strengths: [
                "Turf systems",
                "Indoor court surfaces",
              ],
            },
          ],
          features: [
            {
              title: "Artificial Turf Innovation",
              description: "Hybrid turf with natural grass characteristics.",
            },
          ],
          opportunity: "Urban sports facility boom.",
          threat: "Recycled tire material scrutiny.",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Apparel Manufacturing",
          cr4: 40.0,
          probit: "LH",
          operatingMargin: 9.1,
          cagr: 6.2,
          cagrForward: 7.1,
          classificationCodes: [],
          leaders: [
            {
              name: "VF Corporation",
              ticker: "VFC",
              share: 15.0,
              strengths: [
                "Brand portfolio",
                "Global factory network",
              ],
            },
          ],
          features: [
            {
              title: "On-Demand Manufacturing",
              description: "Digital knitting reduces waste and lead times.",
            },
          ],
          opportunity: "Athleisure expansion.",
          threat: "Rising Asia labor and shipping costs.",
        },
        {
          name: "Footwear Manufacturing",
          cr4: 85.0,
          probit: "HL",
          operatingMargin: 13.4,
          cagr: 4.9,
          cagrForward: 5.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Nike (Contract Mfg)",
              ticker: "NKE",
              share: 32.0,
              strengths: [
                "Scale economies",
                "Innovation pipeline",
              ],
            },
          ],
          features: [
            {
              title: "Automated Shoemaking",
              description: "Robotic assembly lines cutting production time.",
            },
          ],
          opportunity: "Direct factory-to-consumer models.",
          threat: "Tariff exposure on Vietnam/Indonesia imports.",
        },
        {
          name: "Equipment Manufacturing",
          cr4: 55.0,
          probit: "HH",
          operatingMargin: 16.7,
          cagr: 5.8,
          cagrForward: 6.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Callaway Golf",
              ticker: "ELY",
              share: 22.0,
              strengths: [
                "Premium club tech",
                "R&D investment",
              ],
            },
          ],
          features: [
            {
              title: "3D Printing Components",
              description: "Custom metal heads for golf clubs and rackets.",
            },
          ],
          opportunity: "Premiumization trend.",
          threat: "Consumer trading down to used equipment.",
          niche: {
            name: "Peloton Interactive",
            ticker: "PTON",
            share: 12.0,
            cagr: 8.5,
            margin: ">20%",
            strategy: "Connected fitness hardware",
            valuation: "P/E 50x",
          },
        },
        {
          name: "Team Sports Gear",
          cr4: 62.0,
          probit: "LH",
          operatingMargin: 10.2,
          cagr: 7.3,
          cagrForward: 8.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Franklin Sports",
              ticker: "N/A",
              share: 19.0,
              strengths: [
                "Youth market focus",
                "Mass merchant distribution",
              ],
            },
          ],
          features: [
            {
              title: "Youth Protective Gear",
              description: "Lightweight helmets and pads for growing segments.",
            },
          ],
          opportunity: "Amateur/youth sports recovery.",
          threat: "School budget constraints.",
        },
        {
          name: "Fitness Equipment",
          cr4: 48.0,
          probit: "LL",
          operatingMargin: 4.8,
          cagr: 3.7,
          cagrForward: 4.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Nautilus Inc.",
              ticker: "NLS",
              share: 16.0,
              strengths: [
                "Home gym systems",
                "Commercial cross-sell",
              ],
            },
          ],
          features: [
            {
              title: "Compact Home Units",
              description: "Foldable treadmills and bikes for urban living.",
            },
          ],
          opportunity: "Home fitness persistence post-pandemic.",
          threat: "Market saturation.",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Wholesale Distributors",
          cr4: 52.0,
          probit: "HL",
          operatingMargin: 8.5,
          cagr: 4.1,
          cagrForward: 4.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Acosta",
              ticker: "N/A",
              share: 20.0,
              strengths: [
                "Retail broker network",
                "Category management",
              ],
            },
          ],
          features: [
            {
              title: "Temperature-Controlled Logistics",
              description: "Specialized handling for inflatable and seasonal goods.",
            },
          ],
          opportunity: "E-commerce fulfillment partnerships.",
          threat: "Direct-to-retailer manufacturer shifts.",
        },
        {
          name: "Third-Party Logistics",
          cr4: 75.0,
          probit: "LH",
          operatingMargin: 6.9,
          cagr: 7.2,
          cagrForward: 8.0,
          classificationCodes: [],
          leaders: [
            {
              name: "XPO Logistics",
              ticker: "XPO",
              share: 28.0,
              strengths: [
                "Last-mile capabilities",
                "Automation investments",
              ],
            },
          ],
          features: [
            {
              title: "Micro-Fulfillment Centers",
              description: "Urban warehouses enabling same-day delivery.",
            },
          ],
          opportunity: "DTC brand logistics outsourcing.",
          threat: "Freight rate volatility.",
        },
        {
          name: "Import/Export Agents",
          cr4: 38.0,
          probit: "LL",
          operatingMargin: 3.2,
          cagr: 2.9,
          cagrForward: 3.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Expeditors International",
              ticker: "EXPD",
              share: 14.0,
              strengths: [
                "Customs brokerage expertise",
                "Asia connections",
              ],
            },
          ],
          features: [
            {
              title: "Tariff Compliance Tech",
              description: "AI tools for duty optimization and compliance.",
            },
          ],
          opportunity: "Nearshoring to Mexico.",
          threat: "Geopolitical trade barriers.",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Specialty Sporting Goods Retail",
          cr4: 68.0,
          probit: "HL",
          operatingMargin: 7.4,
          cagr: 5.3,
          cagrForward: 5.9,
          classificationCodes: [],
          leaders: [
            {
              name: "DICK'S Sporting Goods",
              ticker: "DKS",
              share: 35.0,
              strengths: [
                "Product expertise",
                "Private label growth",
              ],
            },
            {
              name: "Big 5 Sporting Goods",
              ticker: "BGFV",
              share: 12.0,
              strengths: [
                "Regional density",
                "Value positioning",
              ],
            },
          ],
          features: [
            {
              title: "Omnichannel Integration",
              description: "Buy online, pick up in-store driving 30% of sales.",
            },
          ],
          opportunity: "Experience retail with fittings and demos.",
          threat: "E-commerce pure plays eroding margins.",
        },
        {
          name: "Mass Merchant Sporting Goods",
          cr4: 82.0,
          probit: "LH",
          operatingMargin: 5.8,
          cagr: 6.8,
          cagrForward: 7.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Walmart",
              ticker: "WMT",
              share: 40.0,
              strengths: [
                "Everyday low prices",
                "Store proximity",
              ],
            },
          ],
          features: [
            {
              title: "Private Label Expansion",
              description: "In-house brands capturing value segment.",
            },
          ],
          opportunity: "Entry-level gear for casual participants.",
          threat: "Brand owners pulling premium SKUs.",
        },
        {
          name: "Brand Direct E-commerce",
          cr4: 60.0,
          probit: "HH",
          operatingMargin: 14.2,
          cagr: 12.1,
          cagrForward: 13.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Nike Direct",
              ticker: "NKE",
              share: 25.0,
              strengths: [
                "App personalization",
                "Membership programs",
              ],
            },
            {
              name: "Adidas",
              ticker: "ADDYY",
              share: 18.0,
              strengths: [
                "Social commerce integration",
                "Limited drops",
              ],
            },
          ],
          features: [
            {
              title: "Personalization Platforms",
              description: "Custom shoes and apparel via Nike By You.",
            },
          ],
          opportunity: "Full-price sell-through via owned channels.",
          threat: "Platform fees from Amazon dependency.",
          niche: {
            name: "Lululemon Athletica",
            ticker: "LULU",
            share: 10.0,
            cagr: 15.2,
            margin: ">25%",
            strategy: "Community-driven retail",
            valuation: "P/E 45x",
          },
        },
        {
          name: "Online Marketplaces",
          cr4: 92.0,
          probit: "LL",
          operatingMargin: 4.1,
          cagr: 18.4,
          cagrForward: 16.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon",
              ticker: "AMZN",
              share: 65.0,
              strengths: [
                "Prime fast delivery",
                "Recommendation algorithms",
              ],
            },
          ],
          features: [
            {
              title: "Social Commerce",
              description: "TikTok Shop and Instagram driving impulse buys.",
            },
          ],
          opportunity: "Niche brand discovery.",
          threat: "Counterfeit proliferation.",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Performance Athletes",
          cr4: 35.0,
          probit: "HH",
          operatingMargin: 22.1,
          cagr: 8.7,
          cagrForward: 9.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Professional Teams",
              ticker: "N/A",
              share: 15.0,
              strengths: [
                "Bulk equipment purchases",
                "Sponsorship leverage",
              ],
            },
          ],
          features: [
            {
              title: "Endorsement Deals",
              description: "Athlete co-design influencing premium product sales.",
            },
          ],
          opportunity: "Esports equipment convergence.",
          threat: "Injury-related spending cuts.",
        },
        {
          name: "Fitness Enthusiasts",
          cr4: 28.0,
          probit: "LH",
          operatingMargin: 12.4,
          cagr: 9.2,
          cagrForward: 10.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Gym Chains",
              ticker: "N/A",
              share: 12.0,
              strengths: [
                "Subscription-funded upgrades",
                "Class-driven purchases",
              ],
            },
          ],
          features: [
            {
              title: "Wearables Integration",
              description: "Garmin/Apple Watch compatible training gear.",
            },
          ],
          opportunity: "Digital coaching bundles.",
          threat: "Free workout app substitution.",
        },
        {
          name: "Casual/Recreational Users",
          cr4: 45.0,
          probit: "HL",
          operatingMargin: 18.6,
          cagr: 4.2,
          cagrForward: 4.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Family Households",
              ticker: "N/A",
              share: 22.0,
              strengths: [
                "Multi-sport participation",
                "Seasonal spending",
              ],
            },
          ],
          features: [
            {
              title: "Family Packages",
              description: "Bundled camping/hiking gear sets.",
            },
          ],
          opportunity: "Outdoor recreation post-pandemic.",
          threat: "Economic sensitivity.",
        },
        {
          name: "Youth & School Sports",
          cr4: 52.0,
          probit: "LL",
          operatingMargin: 3.9,
          cagr: 3.5,
          cagrForward: 4.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Public Schools",
              ticker: "N/A",
              share: 30.0,
              strengths: [
                "Uniform bulk orders",
                "Grant funding cycles",
              ],
            },
          ],
          features: [
            {
              title: "Rental Programs",
              description: "School gear sharing reducing individual costs.",
            },
          ],
          opportunity: "Title IX expansion.",
          threat: "Participation decline.",
        },
      ],
    },
  ],
};
