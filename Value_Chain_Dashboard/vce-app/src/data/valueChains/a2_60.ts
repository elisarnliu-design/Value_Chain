import type { ValueChain } from '../../types/valueChain';

export const a2_60Data: ValueChain = {
  code: "A2-60",
  name: "Toys & Games industry (IM A2-60; sector A2 — Mind)",
  imCode: "A2-60",
  classificationCode: "A2-60",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Plastics & Polymers",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 12.5,
          cagr: 3.2,
          cagrForward: 3.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Dow Chemical",
              ticker: "DOW",
              share: 22.0,
              strengths: [
                "Scale production",
                "Material innovation",
              ],
            },
            {
              name: "LyondellBasell",
              ticker: "LYB",
              share: 18.0,
              strengths: [
                "Cost efficiency",
                "Global supply",
              ],
            },
          ],
          features: [
            {
              title: "Sustainable Plastics",
              description: "Shift to bio-based and recycled plastics driven by regulations and consumer demand.",
            },
          ],
          opportunity: "Rising demand for eco-friendly materials in toys.",
          threat: "Commodity price volatility from oil fluctuations.",
        },
        {
          name: "Electronics Components",
          cr4: 80.0,
          probit: "HH",
          operatingMargin: 22.1,
          cagr: 6.5,
          cagrForward: 8.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Foxconn",
              ticker: "2317.TW",
              share: 30.0,
              strengths: [
                "Precision manufacturing",
                "Interactive tech integration",
              ],
            },
          ],
          features: [
            {
              title: "Smart Sensors",
              description: "Sensors and chips for interactive and educational toys.",
            },
          ],
          opportunity: "Growth in smart and connected toys.",
          threat: "Supply chain disruptions from geopolitics.",
        },
        {
          name: "Fabrics & Textiles",
          cr4: 55.0,
          probit: "LL",
          operatingMargin: 5.8,
          cagr: 2.1,
          cagrForward: 2.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Unifi",
              ticker: "UFI",
              share: 15.0,
              strengths: [
                "Recycled yarn production",
                "Plush toy focus",
              ],
            },
          ],
          features: [
            {
              title: "Organic Fabrics",
              description: "Hypoallergenic and sustainable textiles for plush toys.",
            },
          ],
          opportunity: "Premium plush and doll segments.",
          threat: "Labor cost increases in Asia.",
        },
        {
          name: "Packaging Materials",
          cr4: 70.0,
          probit: "LH",
          operatingMargin: 8.3,
          cagr: 4.2,
          cagrForward: 5.1,
          classificationCodes: [],
          leaders: [
            {
              name: "International Paper",
              ticker: "IP",
              share: 25.0,
              strengths: [
                "Sustainable cardboard",
                "Custom designs",
              ],
            },
          ],
          features: [
            {
              title: "Eco Packaging",
              description: "Recyclable and minimal plastic packaging.",
            },
          ],
          opportunity: "Sustainable packaging mandates.",
          threat: "Rising paper costs.",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Design & Prototyping",
          cr4: 45.0,
          probit: "LH",
          operatingMargin: 15.2,
          cagr: 5.8,
          cagrForward: 7.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Spin Master",
              ticker: "TOY.TO",
              share: 12.0,
              strengths: [
                "Rapid prototyping",
                "IP licensing",
              ],
            },
          ],
          features: [
            {
              title: "3D Printing",
              description: "Enables customized and rapid toy prototyping.",
            },
          ],
          opportunity: "Digital twins and AI design tools.",
          threat: "IP theft in global markets.",
          niche: {
            name: "LEGO Ventures",
            ticker: "LEGO",
            share: 8.0,
            cagr: 9.5,
            margin: ">25%",
            strategy: "Innovation labs",
            valuation: "Private premium",
          },
        },
        {
          name: "Mold & Tooling",
          cr4: 60.0,
          probit: "HL",
          operatingMargin: 18.7,
          cagr: 3.9,
          cagrForward: 4.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Hasbro",
              ticker: "HAS",
              share: 20.0,
              strengths: [
                "Precision molds",
                "Brand IP",
              ],
            },
          ],
          features: [
            {
              title: "High-Precision Tooling",
              description: "Custom molds for plastic injection.",
            },
          ],
          opportunity: "Modular toy designs.",
          threat: "High capital intensity.",
        },
        {
          name: "Component Assembly",
          cr4: 50.0,
          probit: "LL",
          operatingMargin: 7.4,
          cagr: 4.1,
          cagrForward: 4.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Mattel",
              ticker: "MAT",
              share: 18.0,
              strengths: [
                "Scale assembly",
                "Quality control",
              ],
            },
          ],
          features: [
            {
              title: "Pre-Assembly",
              description: "Sub-assemblies for dolls and figures.",
            },
          ],
          opportunity: "Automation integration.",
          threat: "Rising labor costs.",
        },
        {
          name: "Packaging Design",
          cr4: 40.0,
          probit: "LH",
          operatingMargin: 10.6,
          cagr: 5.3,
          cagrForward: 6.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Sonoco",
              ticker: "SON",
              share: 14.0,
              strengths: [
                "Retail-ready packaging",
                "Sustainability",
              ],
            },
          ],
          features: [
            {
              title: "Interactive Packaging",
              description: "Shelf appeal with AR elements.",
            },
          ],
          opportunity: "E-commerce optimized boxes.",
          threat: "Plastic bans.",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Plastic Toy Molding",
          cr4: 70.0,
          probit: "HL",
          operatingMargin: 14.2,
          cagr: 4.5,
          cagrForward: 5.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Mattel",
              ticker: "MAT",
              share: 28.0,
              strengths: [
                "Barbie production scale",
                "Global factories",
              ],
            },
            {
              name: "Hasbro",
              ticker: "HAS",
              share: 22.0,
              strengths: [
                "Transformers molding",
                "Efficiency",
              ],
            },
          ],
          features: [
            {
              title: "Injection Molding",
              description: "High-volume production for action figures and vehicles.",
            },
          ],
          opportunity: "Localized manufacturing.",
          threat: "Tariffs and trade wars.",
        },
        {
          name: "Plush & Soft Toy Production",
          cr4: 55.0,
          probit: "LL",
          operatingMargin: 6.8,
          cagr: 3.7,
          cagrForward: 4.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Build-A-Bear",
              ticker: "BBW",
              share: 15.0,
              strengths: [
                "Customization",
                "Retail integration",
              ],
            },
          ],
          features: [
            {
              title: "Sewing Automation",
              description: "Reducing labor dependency.",
            },
          ],
          opportunity: "Personalized plush via e-commerce.",
          threat: "Low margins, high competition.",
        },
        {
          name: "Electronic & Smart Toys",
          cr4: 75.0,
          probit: "HH",
          operatingMargin: 20.4,
          cagr: 8.2,
          cagrForward: 9.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Spin Master",
              ticker: "TOY.TO",
              share: 25.0,
              strengths: [
                "PAW Patrol tech",
                "Innovation",
              ],
            },
          ],
          features: [
            {
              title: "IoT Integration",
              description: "App-connected interactive toys.",
            },
          ],
          opportunity: "AI-enhanced learning toys.",
          threat: "Chip shortages.",
        },
        {
          name: "Board Games Printing",
          cr4: 60.0,
          probit: "LH",
          operatingMargin: 12.1,
          cagr: 6.8,
          cagrForward: 7.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Hasbro",
              ticker: "HAS",
              share: 30.0,
              strengths: [
                "Monopoly scale",
                "Print quality",
              ],
            },
          ],
          features: [
            {
              title: "Digital Hybrid Printing",
              description: "Games with QR codes for apps.",
            },
          ],
          opportunity: "Adult gaming boom.",
          threat: "Paper supply issues.",
        },
        {
          name: "3D Printed Toys",
          cr4: 40.0,
          probit: "LH",
          operatingMargin: 16.5,
          cagr: 12.4,
          cagrForward: 15.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Stratasys",
              ticker: "SSYS",
              share: 18.0,
              strengths: [
                "Custom printing",
                "Prototyping",
              ],
            },
          ],
          features: [
            {
              title: "On-Demand Production",
              description: "Reduces inventory needs.",
            },
          ],
          opportunity: "Personalized toys.",
          threat: "Scaling production.",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "3PL Logistics",
          cr4: 85.0,
          probit: "HL",
          operatingMargin: 11.8,
          cagr: 5.6,
          cagrForward: 6.4,
          classificationCodes: [],
          leaders: [
            {
              name: "DHL Supply Chain",
              ticker: "DHLGY",
              share: 32.0,
              strengths: [
                "Global reach",
                "Toy specialization",
              ],
            },
          ],
          features: [
            {
              title: "Seasonal Peak Handling",
              description: "Holiday surge logistics.",
            },
          ],
          opportunity: "Nearshoring to reduce lead times.",
          threat: "Port congestion.",
        },
        {
          name: "Warehousing",
          cr4: 70.0,
          probit: "LL",
          operatingMargin: 4.9,
          cagr: 3.4,
          cagrForward: 4.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Prologis",
              ticker: "PLD",
              share: 28.0,
              strengths: [
                "Automated warehouses",
                "E-commerce ready",
              ],
            },
          ],
          features: [
            {
              title: "Fulfillment Centers",
              description: "Proximity to retail hubs.",
            },
          ],
          opportunity: "Automation robotics.",
          threat: "Real estate costs.",
        },
        {
          name: "Freight Forwarding",
          cr4: 60.0,
          probit: "LH",
          operatingMargin: 9.2,
          cagr: 4.7,
          cagrForward: 5.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Maersk",
              ticker: "MAERSK-B.CO",
              share: 20.0,
              strengths: [
                "Container shipping",
                "Asia routes",
              ],
            },
          ],
          features: [
            {
              title: "Ocean Freight",
              description: "Bulk toy shipments from China.",
            },
          ],
          opportunity: "Air freight for premium toys.",
          threat: "Fuel price spikes.",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Toy Specialty Retail",
          cr4: 50.0,
          probit: "LH",
          operatingMargin: 8.7,
          cagr: 4.9,
          cagrForward: 5.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Toys R Us (revived)",
              ticker: "TOYRU",
              share: 18.0,
              strengths: [
                "Experiential stores",
                "Kid zones",
              ],
            },
          ],
          features: [
            {
              title: "Play Areas",
              description: "In-store demo zones.",
            },
          ],
          opportunity: "Omnichannel integration.",
          threat: "E-commerce shift.",
        },
        {
          name: "E-commerce Platforms",
          cr4: 90.0,
          probit: "HH",
          operatingMargin: 25.3,
          cagr: 12.6,
          cagrForward: 14.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon",
              ticker: "AMZN",
              share: 45.0,
              strengths: [
                "Prime delivery",
                "Recommendation AI",
              ],
            },
          ],
          features: [
            {
              title: "Direct-to-Consumer",
              description: "Brand DTC sites growing.",
            },
          ],
          opportunity: "AR try-before-buy.",
          threat: "Fee pressures.",
        },
        {
          name: "Mass Retail",
          cr4: 75.0,
          probit: "LL",
          operatingMargin: 3.5,
          cagr: 2.8,
          cagrForward: 3.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Walmart",
              ticker: "WMT",
              share: 35.0,
              strengths: [
                "Low price",
                "Volume sales",
              ],
            },
          ],
          features: [
            {
              title: "Hypermarkets",
              description: "14% global toy sales share.",
            },
          ],
          opportunity: "Private label toys.",
          threat: "Margin squeeze.",
        },
        {
          name: "Department Stores",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 10.4,
          cagr: 1.9,
          cagrForward: 2.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Target",
              ticker: "TGT",
              share: 22.0,
              strengths: [
                "Curated selections",
                "Holiday displays",
              ],
            },
          ],
          features: [
            {
              title: "Premium Placement",
              description: "High-visibility toy aisles.",
            },
          ],
          opportunity: "Experience merchandising.",
          threat: "Store closures.",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Parents (0-12 Kids)",
          cr4: 20.0,
          probit: "LH",
          operatingMargin: 0.0,
          cagr: 5.2,
          cagrForward: 6.1,
          classificationCodes: [],
          leaders: [],
          features: [
            {
              title: "Educational Focus",
              description: "Demand for STEM toys.",
            },
          ],
          opportunity: "Subscription toy boxes.",
          threat: "Budget constraints.",
        },
        {
          name: "Teens & Adults (Collectors)",
          cr4: 30.0,
          probit: "HH",
          operatingMargin: 0.0,
          cagr: 9.8,
          cagrForward: 11.4,
          classificationCodes: [],
          leaders: [],
          features: [
            {
              title: "Collectibles",
              description: "Limited editions appreciate in value.",
            },
          ],
          opportunity: "NFT-linked toys.",
          threat: "Fad cycles.",
        },
        {
          name: "Institutions (Schools/Daycare)",
          cr4: 40.0,
          probit: "LL",
          operatingMargin: 0.0,
          cagr: 3.1,
          cagrForward: 3.6,
          classificationCodes: [],
          leaders: [],
          features: [
            {
              title: "Bulk Purchases",
              description: "Learning aids and games.",
            },
          ],
          opportunity: "Government ed funding.",
          threat: "Procurement bureaucracy.",
        },
        {
          name: "Gifting (Holidays/Birthdays)",
          cr4: 25.0,
          probit: "HL",
          operatingMargin: 0.0,
          cagr: 4.3,
          cagrForward: 4.9,
          classificationCodes: [],
          leaders: [],
          features: [
            {
              title: "Seasonal Peaks",
              description: "80% sales in Q4.",
            },
          ],
          opportunity: "Personalized gifts.",
          threat: "Economic downturns.",
        },
      ],
    },
  ],
};
