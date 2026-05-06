import type { ValueChain } from '../../types/valueChain';

export const a2_7010Data: ValueChain = {
  code: "A2-7010",
  name: "Sporting Goods",
  imCode: "A2-7010",
  classificationCode: "A2-7010",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Synthetic Textiles & Fabrics",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 12.3,
          cagr: 4.2,
          cagrForward: 4.5,
          classificationCodes: [],
          leaders: [
            {
              name: "DuPont de Nemours",
              ticker: "DD",
              share: 25.0,
              strengths: [
                "Advanced synthetic fibers",
                "Sustainability innovations",
              ],
            },
            {
              name: "Toray Industries",
              ticker: "3402.T",
              share: 18.0,
              strengths: [
                "High-performance materials",
                "Global supply footprint",
              ],
            },
          ],
          features: [
            {
              title: "Recycled Materials Shift",
              description: "Increasing use of recycled polyester driven by ESG demands and brand requirements.",
            },
            {
              title: "Performance Enhancements",
              description: "Development of moisture-wicking and durable fabrics for athletic applications.",
            },
          ],
          opportunity: "Rising demand for sustainable, high-tech textiles amid consumer eco-preferences.",
          threat: "Commodity price volatility in petrochemical feedstocks due to geopolitical tensions.",
        },
        {
          name: "Rubber & Foam Materials",
          cr4: 72.0,
          probit: "LL",
          operatingMargin: 7.8,
          cagr: 3.1,
          cagrForward: 3.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Lanzhou",
              ticker: "600373.SS",
              share: 28.0,
              strengths: [
                "Cost leadership",
                "High-volume production",
              ],
            },
          ],
          features: [
            {
              title: "Lightweight Foams",
              description: "EVA and PU foams optimized for footwear and protective gear.",
            },
          ],
          opportunity: "Growth in athletic footwear driving demand for specialized rubbers.",
          threat: "Tariff risks on imports from Asia-Pacific regions.",
        },
        {
          name: "Metals & Composites",
          cr4: 58.0,
          probit: "LH",
          operatingMargin: 9.2,
          cagr: 5.1,
          cagrForward: 5.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Alcoa",
              ticker: "AA",
              share: 22.0,
              strengths: [
                "Lightweight aluminum alloys",
                "Carbon fiber partnerships",
              ],
            },
          ],
          features: [
            {
              title: "Advanced Composites",
              description: "Carbon fiber and titanium for high-end equipment like bikes and rackets.",
            },
          ],
          opportunity: "Premium sports equipment boom in cycling and golf.",
          threat: "Supply chain disruptions from raw metal sourcing.",
          niche: {
            name: "Hexcel Corp",
            ticker: "HXL",
            share: 12.0,
            cagr: 6.2,
            margin: ">15%",
            strategy: "Aerospace crossover to sports composites",
            valuation: "P/E 32x",
          },
        },
        {
          name: "Plastics & Polymers",
          cr4: 60.0,
          probit: "HL",
          operatingMargin: 14.1,
          cagr: 4.0,
          cagrForward: 4.7,
          classificationCodes: [],
          leaders: [
            {
              name: "SABIC",
              ticker: "2010.SA",
              share: 24.0,
              strengths: [
                "Engineered plastics",
                "Recycling capabilities",
              ],
            },
          ],
          features: [
            {
              title: "Bio-based Polymers",
              description: "Shift to plant-derived plastics for eco-friendly gear.",
            },
          ],
          opportunity: "Customization for performance sports accessories.",
          threat: "Regulatory pressures on plastic waste.",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Fabric Dyeing & Finishing",
          cr4: 55.0,
          probit: "LL",
          operatingMargin: 6.5,
          cagr: 3.5,
          cagrForward: 3.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Shenzhou Intl",
              ticker: "2319.HK",
              share: 20.0,
              strengths: [
                "Vertical integration",
                "Nike key supplier",
              ],
            },
          ],
          features: [
            {
              title: "Sustainable Dyeing",
              description: "Waterless dyeing technologies to reduce environmental impact.",
            },
          ],
          opportunity: "Demand for performance finishes in athleisure.",
          threat: "Labor cost inflation in processing hubs.",
        },
        {
          name: "Component Molding",
          cr4: 68.0,
          probit: "LH",
          operatingMargin: 8.9,
          cagr: 4.8,
          cagrForward: 5.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Pou Chen",
              ticker: "9904.TW",
              share: 26.0,
              strengths: [
                "Footwear molding scale",
                "Diversified clients",
              ],
            },
          ],
          features: [
            {
              title: "Precision Injection Molding",
              description: "High-volume production of soles and grips.",
            },
          ],
          opportunity: "Expansion in running and team sports gear.",
          threat: "Automation displacing low-skill labor.",
        },
        {
          name: "Leather Tanning",
          cr4: 62.0,
          probit: "HL",
          operatingMargin: 11.2,
          cagr: 2.9,
          cagrForward: 3.2,
          classificationCodes: [],
          leaders: [
            {
              name: "TFL",
              ticker: "Private",
              share: 22.0,
              strengths: [
                "Specialty leathers",
                "Eco-tanning processes",
              ],
            },
          ],
          features: [
            {
              title: "Synthetic Leather Alternatives",
              description: "Vegan leathers gaining traction.",
            },
          ],
          opportunity: "Premium golf and equestrian products.",
          threat: "Decline in traditional leather use.",
        },
        {
          name: "Fiber Extrusion",
          cr4: 70.0,
          probit: "HH",
          operatingMargin: 13.7,
          cagr: 5.2,
          cagrForward: 5.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Indorama Ventures",
              ticker: "IVL.BK",
              share: 27.0,
              strengths: [
                "Polyester dominance",
                "Recycled fiber leader",
              ],
            },
          ],
          features: [
            {
              title: "Technical Yarns",
              description: "High-tenacity yarns for ropes and sails.",
            },
          ],
          opportunity: "Outdoor adventure sports growth.",
          threat: "Energy cost surges in extrusion.",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Apparel Assembly",
          cr4: 45.0,
          probit: "LH",
          operatingMargin: 7.4,
          cagr: 5.5,
          cagrForward: 6.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Nike",
              ticker: "NKE",
              share: 18.0,
              strengths: [
                "Brand-owned factories",
                "Innovation pipeline",
              ],
            },
            {
              name: "Li Ning",
              ticker: "2331.HK",
              share: 12.0,
              strengths: [
                "China market focus",
                "Rapid prototyping",
              ],
            },
          ],
          features: [
            {
              title: "Automated Sewing",
              description: "Robotics reducing labor dependency.",
            },
          ],
          opportunity: "Athleisure and team uniforms expansion.",
          threat: "Geopolitical tariffs on apparel.",
        },
        {
          name: "Footwear Production",
          cr4: 75.0,
          probit: "HL",
          operatingMargin: 10.8,
          cagr: 4.6,
          cagrForward: 5.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Skechers",
              ticker: "SKX",
              share: 22.0,
              strengths: [
                "Vertical manufacturing",
                "Casual-lifestyle focus",
              ],
            },
            {
              name: "Adidas",
              ticker: "ADS.DE",
              share: 20.0,
              strengths: [
                "Speedfactory automation",
                "Performance tech",
              ],
            },
          ],
          features: [
            {
              title: "Direct Factory Injection",
              description: "Streamlined sole attachment processes.",
            },
          ],
          opportunity: "Running shoe category dominance.",
          threat: "Vietnam/Indonesia capacity constraints.",
        },
        {
          name: "Equipment Assembly",
          cr4: 52.0,
          probit: "HH",
          operatingMargin: 12.6,
          cagr: 6.0,
          cagrForward: 6.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Callaway Golf",
              ticker: "MODG",
              share: 19.0,
              strengths: [
                "Precision machining",
                "R&D investment",
              ],
            },
          ],
          features: [
            {
              title: "CNC Machining",
              description: "Computer-controlled manufacturing for clubs and bikes.",
            },
          ],
          opportunity: "Golf and cycling resurgence.",
          threat: "Component shortages.",
          niche: {
            name: "Peloton Interactive",
            ticker: "PTON",
            share: 15.0,
            cagr: 7.1,
            margin: "8-12%",
            strategy: "Connected fitness hardware",
            valuation: "P/S 2x",
          },
        },
        {
          name: "Ball & Inflation Goods",
          cr4: 80.0,
          probit: "LL",
          operatingMargin: 5.9,
          cagr: 3.8,
          cagrForward: 4.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Molten Corp",
              ticker: "Private",
              share: 30.0,
              strengths: [
                "FIFA/NBA approvals",
                "Material expertise",
              ],
            },
          ],
          features: [
            {
              title: "Pressure-Retaining Tech",
              description: "Advanced bladders for durability.",
            },
          ],
          opportunity: "Team sports recovery post-pandemic.",
          threat: "Counterfeit competition.",
        },
        {
          name: "Protective Gear",
          cr4: 48.0,
          probit: "LH",
          operatingMargin: 9.5,
          cagr: 5.3,
          cagrForward: 5.7,
          classificationCodes: [],
          leaders: [
            {
              name: "BRG Sports",
              ticker: "Private",
              share: 16.0,
              strengths: [
                "Helmet innovation",
                "Safety certifications",
              ],
            },
          ],
          features: [
            {
              title: "Impact-Absorbing Foams",
              description: "Multi-layer padding systems.",
            },
          ],
          opportunity: "Youth sports safety mandates.",
          threat: "Litigation risks.",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Third-Party Logistics",
          cr4: 70.0,
          probit: "HL",
          operatingMargin: 11.4,
          cagr: 6.2,
          cagrForward: 6.8,
          classificationCodes: [],
          leaders: [
            {
              name: "DHL Supply Chain",
              ticker: "DHLGY",
              share: 24.0,
              strengths: [
                "Global network",
                "E-commerce fulfillment",
              ],
            },
          ],
          features: [
            {
              title: "Cold Chain for Composites",
              description: "Temperature-controlled shipping for materials.",
            },
          ],
          opportunity: "DTC brand logistics partnerships.",
          threat: "Port congestion and labor strikes.",
        },
        {
          name: "Wholesale Networks",
          cr4: 55.0,
          probit: "LH",
          operatingMargin: 8.2,
          cagr: 4.1,
          cagrForward: 4.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Amer Sports",
              ticker: "AS",
              share: 18.0,
              strengths: [
                "Multi-brand portfolio",
                "Inventory optimization",
              ],
            },
          ],
          features: [
            {
              title: "Just-in-Time Delivery",
              description: "Reduced lead times for seasonal goods.",
            },
          ],
          opportunity: "Emerging market wholesale expansion.",
          threat: "Brand direct competition.",
        },
        {
          name: "Freight Forwarding",
          cr4: 62.0,
          probit: "LL",
          operatingMargin: 6.7,
          cagr: 3.9,
          cagrForward: 4.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Kuehne + Nagel",
              ticker: "KNIN.SW",
              share: 21.0,
              strengths: [
                "Ocean freight scale",
                "Visibility tech",
              ],
            },
          ],
          features: [
            {
              title: "Container Tracking",
              description: "IoT-enabled real-time monitoring.",
            },
          ],
          opportunity: "Nearshoring to Mexico/Europe.",
          threat: "Fuel price escalation.",
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
          probit: "LH",
          operatingMargin: 7.1,
          cagr: 5.4,
          cagrForward: 5.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Dick's Sporting Goods",
              ticker: "DKS",
              share: 28.0,
              strengths: [
                "Omnichannel model",
                "Private labels",
              ],
            },
            {
              name: "Academy Sports",
              ticker: "ASO",
              share: 15.0,
              strengths: [
                "Regional dominance",
                "Value pricing",
              ],
            },
          ],
          features: [
            {
              title: "Experience Stores",
              description: "In-store fitting and demo zones.",
            },
          ],
          opportunity: "Team sports equipment sales rebound.",
          threat: "E-commerce pureplay disruption.",
        },
        {
          name: "Brand Direct-to-Consumer",
          cr4: 82.0,
          probit: "HH",
          operatingMargin: 14.2,
          cagr: 7.8,
          cagrForward: 8.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Under Armour",
              ticker: "UAA",
              share: 22.0,
              strengths: [
                "App personalization",
                "Connected products",
              ],
            },
            {
              name: "Lululemon",
              ticker: "LULU",
              share: 25.0,
              strengths: [
                "Community events",
                "Premium pricing",
              ],
            },
          ],
          features: [
            {
              title: "Personalization Platforms",
              description: "Custom apparel configurators.",
            },
          ],
          opportunity: "Loyalty program monetization.",
          threat: "Data privacy regulations.",
        },
        {
          name: "E-commerce Marketplaces",
          cr4: 90.0,
          probit: "HL",
          operatingMargin: 12.8,
          cagr: 12.1,
          cagrForward: 11.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon",
              ticker: "AMZN",
              share: 45.0,
              strengths: [
                "Prime fulfillment",
                "AI recommendations",
              ],
            },
          ],
          features: [
            {
              title: "AR Try-On",
              description: "Virtual fitting for shoes and apparel.",
            },
          ],
          opportunity: "Cross-border sales growth.",
          threat: "Counterfeit infiltration.",
          niche: {
            name: "Fanatics",
            ticker: "Private",
            share: 8.0,
            cagr: 15.2,
            margin: "10-14%",
            strategy: "Licensed sports merchandise",
            valuation: "EV/Rev 4x",
          },
        },
        {
          name: "Big Box General Retail",
          cr4: 75.0,
          probit: "LL",
          operatingMargin: 4.9,
          cagr: 2.8,
          cagrForward: 3.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Walmart",
              ticker: "WMT",
              share: 32.0,
              strengths: [
                "Everyday low prices",
                "Store traffic",
              ],
            },
          ],
          features: [
            {
              title: "Private Label Expansion",
              description: "In-house athletic brands.",
            },
          ],
          opportunity: "Entry-level gear for mass market.",
          threat: "Shifting consumer to specialists.",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Fitness & Wellness Enthusiasts",
          cr4: 40.0,
          probit: "HH",
          operatingMargin: 0.0,
          cagr: 8.5,
          cagrForward: 9.0,
          classificationCodes: [],
          leaders: [
            {
              name: "N/A",
              ticker: "",
              share: 0.0,
              strengths: [],
            },
          ],
          features: [
            {
              title: "Gym & Home Fitness",
              description: "High spenders on apparel and connected equipment.",
            },
          ],
          opportunity: "Wearables integration driving upgrades.",
          threat: "Economic sensitivity to recessions.",
        },
        {
          name: "Team Sports Participants",
          cr4: 35.0,
          probit: "LH",
          operatingMargin: 0.0,
          cagr: 6.2,
          cagrForward: 6.7,
          classificationCodes: [],
          leaders: [
            {
              name: "N/A",
              ticker: "",
              share: 0.0,
              strengths: [],
            },
          ],
          features: [
            {
              title: "Youth Leagues",
              description: "Uniforms and equipment for organized sports.",
            },
          ],
          opportunity: "Post-pandemic participation surge.",
          threat: "Scheduling disruptions.",
        },
        {
          name: "Outdoor Adventure Users",
          cr4: 28.0,
          probit: "HL",
          operatingMargin: 0.0,
          cagr: 7.1,
          cagrForward: 7.6,
          classificationCodes: [],
          leaders: [
            {
              name: "N/A",
              ticker: "",
              share: 0.0,
              strengths: [],
            },
          ],
          features: [
            {
              title: "Camping & Hiking",
              description: "Durable gear for extreme conditions.",
            },
          ],
          opportunity: "Experiential travel boom.",
          threat: "Weather pattern shifts.",
        },
        {
          name: "Casual Athleisure Consumers",
          cr4: 50.0,
          probit: "LL",
          operatingMargin: 0.0,
          cagr: 4.3,
          cagrForward: 4.6,
          classificationCodes: [],
          leaders: [
            {
              name: "N/A",
              ticker: "",
              share: 0.0,
              strengths: [],
            },
          ],
          features: [
            {
              title: "Lifestyle Fashion",
              description: "Daily wear sportswear blending function and style.",
            },
          ],
          opportunity: "Fashion crossover sales.",
          threat: "Fast fashion competition.",
        },
      ],
    },
  ],
};
