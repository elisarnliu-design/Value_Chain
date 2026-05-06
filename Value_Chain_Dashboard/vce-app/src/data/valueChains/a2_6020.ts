import type { ValueChain } from '../../types/valueChain';

export const a2_6020Data: ValueChain = {
  code: "A2-6020",
  name: "Toys & Hobby Stores",
  imCode: "A2-6020",
  classificationCode: "A2-6020",
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
              name: "Dow Inc.",
              ticker: "DOW",
              share: 22.0,
              strengths: [
                "Global scale",
                "Toy-grade plastics",
              ],
            },
            {
              name: "LyondellBasell",
              ticker: "LYB",
              share: 18.0,
              strengths: [
                "Cost efficiency",
                "Sustainable materials",
              ],
            },
          ],
          features: [
            {
              title: "Commodity Pricing Volatility",
              description: "Oil-based plastics subject to crude price swings affecting toy production costs.",
            },
          ],
          opportunity: "Shift to recycled plastics driven by sustainability mandates.",
          threat: "Rising energy costs squeezing margins amid low growth.",
        },
        {
          name: "Fabrics & Textiles",
          cr4: 55.0,
          probit: "LH",
          operatingMargin: 8.2,
          cagr: 5.1,
          cagrForward: 4.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Unifi Inc.",
              ticker: "UFI",
              share: 20.0,
              strengths: [
                "Recycled yarn focus",
                "Plush toy supply",
              ],
            },
          ],
          features: [
            {
              title: "Child-Safe Certifications",
              description: "Strict standards for non-toxic dyes and hypoallergenic materials.",
            },
          ],
          opportunity: "Demand for organic and eco-friendly stuffed toy fabrics.",
          threat: "Import competition from low-cost Asian producers.",
          niche: {
            name: "Interface Inc.",
            ticker: "TILE",
            share: 12.0,
            cagr: 6.2,
            margin: ">15%",
            strategy: "Sustainable textiles innovation",
            valuation: "P/E 18x",
          },
        },
        {
          name: "Electronics Components",
          cr4: 80.0,
          probit: "HH",
          operatingMargin: 22.1,
          cagr: 6.8,
          cagrForward: 7.5,
          classificationCodes: [],
          leaders: [
            {
              name: "STMicroelectronics",
              ticker: "STM",
              share: 28.0,
              strengths: [
                "Microcontrollers for smart toys",
                "Battery tech",
              ],
            },
          ],
          features: [
            {
              title: "Miniaturization Trends",
              description: "Smaller chips enabling interactive and AR-enabled toys.",
            },
          ],
          opportunity: "Growth in STEM and educational electronic toys.",
          threat: "Supply chain disruptions from chip shortages.",
        },
        {
          name: "Packaging Materials",
          cr4: 45.0,
          probit: "LL",
          operatingMargin: 5.4,
          cagr: 2.1,
          cagrForward: 2.5,
          classificationCodes: [],
          leaders: [
            {
              name: "International Paper",
              ticker: "IP",
              share: 15.0,
              strengths: [
                "Corrugated boxes",
                "Sustainable cardboard",
              ],
            },
          ],
          features: [
            {
              title: "Eco-Packaging Shift",
              description: "Move from plastic to paper-based for retail display.",
            },
          ],
          opportunity: "Custom sustainable packaging for premium collectibles.",
          threat: "Pressure to reduce packaging costs amid e-commerce.",
        },
        {
          name: "Paints & Coatings",
          cr4: 70.0,
          probit: "HL",
          operatingMargin: 14.3,
          cagr: 3.9,
          cagrForward: 4.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Sherwin-Williams",
              ticker: "SHW",
              share: 25.0,
              strengths: [
                "Non-toxic formulations",
                "Toy safety compliance",
              ],
            },
          ],
          features: [
            {
              title: "Lead-Free Regulations",
              description: "Global standards ensuring child-safe colorants.",
            },
          ],
          opportunity: "Glow-in-dark and UV-reactive paints for novelty toys.",
          threat: "Raw material inflation from petrochemicals.",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Toy Design & Prototyping",
          cr4: 40.0,
          probit: "LH",
          operatingMargin: 9.8,
          cagr: 5.5,
          cagrForward: 6.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Spin Master",
              ticker: "TOY.TO",
              share: 18.0,
              strengths: [
                "IP licensing",
                "Rapid prototyping",
              ],
            },
          ],
          features: [
            {
              title: "Digital Twins",
              description: "3D modeling and VR testing reducing physical prototypes.",
            },
          ],
          opportunity: "AI-assisted design for personalized toys.",
          threat: "IP infringement in global markets.",
        },
        {
          name: "Mold & Tooling Fabrication",
          cr4: 60.0,
          probit: "HL",
          operatingMargin: 15.2,
          cagr: 4.0,
          cagrForward: 4.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Hasbro",
              ticker: "HAS",
              share: 22.0,
              strengths: [
                "Precision molds",
                "Action figure tooling",
              ],
            },
          ],
          features: [
            {
              title: "3D Printing Integration",
              description: "Hybrid CNC and additive manufacturing for complex shapes.",
            },
          ],
          opportunity: "Customizable toy molds for direct-to-consumer.",
          threat: "High capital costs for new tooling lines.",
        },
        {
          name: "Component Assembly Prep",
          cr4: 35.0,
          probit: "LL",
          operatingMargin: 6.7,
          cagr: 2.8,
          cagrForward: 3.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Mattel",
              ticker: "MAT",
              share: 16.0,
              strengths: [
                "Doll parts",
                "Barbie ecosystem",
              ],
            },
          ],
          features: [
            {
              title: "Just-in-Time Processing",
              description: "Pre-assembly to support agile manufacturing.",
            },
          ],
          opportunity: "Modular components for mix-and-match toys.",
          threat: "Labor-intensive processes vulnerable to wage inflation.",
          niche: {
            name: "LEGO A/S",
            ticker: "LEGO",
            share: 14.0,
            cagr: 7.2,
            margin: ">25%",
            strategy: "Interlocking brick standardization",
            valuation: "Private, est. 50x EBITDA",
          },
        },
        {
          name: "Quality Testing Labs",
          cr4: 75.0,
          probit: "HH",
          operatingMargin: 20.4,
          cagr: 7.2,
          cagrForward: 8.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Intertek Group",
              ticker: "ITRK.L",
              share: 30.0,
              strengths: [
                "Global certification",
                "Safety compliance",
              ],
            },
          ],
          features: [
            {
              title: "Automated Durability Tests",
              description: "Robotic drop and chew simulations.",
            },
          ],
          opportunity: "Regulatory expansion in emerging markets.",
          threat: "Evolving CPSIA standards requiring re-certification.",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Plastic Toy Injection Molding",
          cr4: 50.0,
          probit: "LH",
          operatingMargin: 7.9,
          cagr: 4.5,
          cagrForward: 5.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Mattel",
              ticker: "MAT",
              share: 20.0,
              strengths: [
                "High-volume Barbie",
                "Global factories",
              ],
            },
          ],
          features: [
            {
              title: "Automation Lines",
              description: "Robotic arms for precision molding.",
            },
          ],
          opportunity: "Sustainable bio-plastics adoption.",
          threat: "Tariffs on China-sourced production.",
        },
        {
          name: "Plush & Stuffed Toy Sewing",
          cr4: 45.0,
          probit: "LL",
          operatingMargin: 5.6,
          cagr: 3.1,
          cagrForward: 3.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Build-A-Bear",
              ticker: "BBW",
              share: 15.0,
              strengths: [
                "Customizable plush",
                "US manufacturing",
              ],
            },
          ],
          features: [
            {
              title: "Voice Module Integration",
              description: "Electronic stuffing during sewing.",
            },
          ],
          opportunity: "Emotional companion robots trend.",
          threat: "Rising labor costs in Vietnam factories.",
        },
        {
          name: "Board Game Printing",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 13.8,
          cagr: 6.2,
          cagrForward: 6.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Hasbro",
              ticker: "HAS",
              share: 28.0,
              strengths: [
                "Monopoly IP",
                "Premium printing",
              ],
            },
          ],
          features: [
            {
              title: "Sustainable Paper Sourcing",
              description: "FSC-certified boards and inks.",
            },
          ],
          opportunity: "Adult hobby gaming boom.",
          threat: "Paper price volatility.",
        },
        {
          name: "Model & Hobby Kit Assembly",
          cr4: 70.0,
          probit: "HH",
          operatingMargin: 18.7,
          cagr: 5.9,
          cagrForward: 6.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Hornby plc",
              ticker: "HRN.L",
              share: 25.0,
              strengths: [
                "Scale models",
                "Train kits",
              ],
            },
          ],
          features: [
            {
              title: "Precision Die-Cutting",
              description: "Laser-cut parts for easy assembly.",
            },
          ],
          opportunity: "Nostalgia collectibles resurgence.",
          threat: "3D printing disrupting kit sales.",
          niche: {
            name: "Revell GmbH",
            ticker: "Private",
            share: 12.0,
            cagr: 7.8,
            margin: ">20%",
            strategy: "Licensed aircraft models",
            valuation: "P/E 22x",
          },
        },
        {
          name: "Electronic Toy Production",
          cr4: 55.0,
          probit: "LH",
          operatingMargin: 9.2,
          cagr: 7.1,
          cagrForward: 7.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Spin Master",
              ticker: "TOY.TO",
              share: 19.0,
              strengths: [
                "PAW Patrol tech",
                "App-connected toys",
              ],
            },
          ],
          features: [
            {
              title: "IoT Integration",
              description: "Bluetooth-enabled interactive play.",
            },
          ],
          opportunity: "EdTech toy convergence.",
          threat: "Component shortages.",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Toy Wholesalers",
          cr4: 60.0,
          probit: "HL",
          operatingMargin: 11.4,
          cagr: 2.9,
          cagrForward: 3.2,
          classificationCodes: [],
          leaders: [
            {
              name: "UTA Inc.",
              ticker: "Private",
              share: 24.0,
              strengths: [
                "National coverage",
                "Just-in-time delivery",
              ],
            },
          ],
          features: [
            {
              title: "Seasonal Surge Logistics",
              description: "Holiday ramp-up with temperature-controlled trucks.",
            },
          ],
          opportunity: "Direct-to-retailer efficiency gains.",
          threat: "Amazon bypassing traditional wholesalers.",
        },
        {
          name: "Freight Transportation",
          cr4: 75.0,
          probit: "LL",
          operatingMargin: 4.8,
          cagr: 3.5,
          cagrForward: 4.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Old Dominion Freight",
              ticker: "ODFL",
              share: 28.0,
              strengths: [
                "LTL efficiency",
                "Toy pallet optimization",
              ],
            },
          ],
          features: [
            {
              title: "Container Ocean Freight",
              description: "Bulk shipments from Asian factories.",
            },
          ],
          opportunity: "Nearshoring to Mexico reducing transit times.",
          threat: "Port congestion and fuel surcharges.",
        },
        {
          name: "3PL Warehousing",
          cr4: 80.0,
          probit: "LH",
          operatingMargin: 8.9,
          cagr: 6.4,
          cagrForward: 7.0,
          classificationCodes: [],
          leaders: [
            {
              name: "XPO Logistics",
              ticker: "XPO",
              share: 30.0,
              strengths: [
                "Automated DCs",
                "E-commerce fulfillment",
              ],
            },
          ],
          features: [
            {
              title: "Pick-and-Pack Automation",
              description: "RFID for toy inventory accuracy.",
            },
          ],
          opportunity: "Omnichannel distribution hubs.",
          threat: "Labor shortages in peak seasons.",
        },
        {
          name: "Import Brokers",
          cr4: 50.0,
          probit: "HL",
          operatingMargin: 14.2,
          cagr: 4.1,
          cagrForward: 4.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Expeditors Intl",
              ticker: "EXPD",
              share: 20.0,
              strengths: [
                "Customs clearance",
                "Tariff expertise",
              ],
            },
          ],
          features: [
            {
              title: "Duty Optimization",
              description: "HTS code classification for toys.",
            },
          ],
          opportunity: "Trade deal benefits for toy imports.",
          threat: "Geopolitical tariffs escalation.",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Specialty Toy Stores",
          cr4: 55.0,
          probit: "LH",
          operatingMargin: 6.5,
          cagr: 1.8,
          cagrForward: 2.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Hobby Lobby",
              ticker: "Private",
              share: 25.0,
              strengths: [
                "Craft hobby focus",
                "Low prices",
              ],
            },
            {
              name: " Michaels Stores",
              ticker: "Private",
              share: 15.0,
              strengths: [
                "DIY kits",
                "Class experiences",
              ],
            },
          ],
          features: [
            {
              title: "Experiential Retail",
              description: "Play areas and demo stations.",
            },
          ],
          opportunity: "Niche collectibles boutiques.",
          threat: "Big box price competition.",
        },
        {
          name: "Online Toy Retailers",
          cr4: 85.0,
          probit: "HH",
          operatingMargin: 12.3,
          cagr: 8.7,
          cagrForward: 9.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon.com",
              ticker: "AMZN",
              share: 45.0,
              strengths: [
                "Prime delivery",
                "Vast selection",
              ],
            },
          ],
          features: [
            {
              title: "AR Try-Before-Buy",
              description: "Virtual toy interaction apps.",
            },
          ],
          opportunity: "Subscription toy boxes.",
          threat: "Return rate pressures.",
        },
        {
          name: "Department Store Toy Depts",
          cr4: 70.0,
          probit: "LL",
          operatingMargin: 3.2,
          cagr: -2.1,
          cagrForward: -0.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Macy's",
              ticker: "M",
              share: 22.0,
              strengths: [
                "Holiday displays",
                "Brand partnerships",
              ],
            },
          ],
          features: [
            {
              title: "Pop-Up Shops",
              description: "Licensed character zones.",
            },
          ],
          opportunity: "Revival through experiential holiday events.",
          threat: "Shrinking physical footprints.",
        },
        {
          name: "Mass Merchandiser Toy Sales",
          cr4: 90.0,
          probit: "HL",
          operatingMargin: 10.1,
          cagr: 2.5,
          cagrForward: 3.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Walmart",
              ticker: "WMT",
              share: 35.0,
              strengths: [
                "Everyday low prices",
                "Rollback promotions",
              ],
            },
          ],
          features: [
            {
              title: "Private Label Toys",
              description: "Mainstays and Ongrok brands.",
            },
          ],
          opportunity: "Value toy lines expansion.",
          threat: "Margin erosion from price wars.",
        },
        {
          name: "Hobby & Game Shops",
          cr4: 40.0,
          probit: "LH",
          operatingMargin: 7.6,
          cagr: 4.9,
          cagrForward: 5.4,
          classificationCodes: [],
          leaders: [
            {
              name: "GameStop",
              ticker: "GME",
              share: 18.0,
              strengths: [
                "Trading card games",
                "Collectibles",
              ],
            },
          ],
          features: [
            {
              title: "Tournament Hosting",
              description: "In-store gaming events.",
            },
          ],
          opportunity: "Tabletop RPG resurgence.",
          threat: "Digital gaming shift.",
          niche: {
            name: "Miniature Market",
            ticker: "Private",
            share: 10.0,
            cagr: 6.5,
            margin: "12%",
            strategy: "Online + local stores",
            valuation: "Private",
          },
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Parents & Families",
          cr4: 60.0,
          probit: "HL",
          operatingMargin: 0.0,
          cagr: 1.5,
          cagrForward: 2.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Millennial Parents",
              ticker: "N/A",
              share: 35.0,
              strengths: [
                "Educational toy preference",
                "Screen-time alternatives",
              ],
            },
          ],
          features: [
            {
              title: "STEM Focus",
              description: "Purchasing coding robots and science kits.",
            },
          ],
          opportunity: "Back-to-school toy bundles.",
          threat: "Budget constraints post-inflation.",
        },
        {
          name: "Adult Collectors",
          cr4: 45.0,
          probit: "HH",
          operatingMargin: 0.0,
          cagr: 7.8,
          cagrForward: 8.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Gen Z Hobbyists",
              ticker: "N/A",
              share: 22.0,
              strengths: [
                "Nostalgia buys",
                "Funko Pops",
              ],
            },
          ],
          features: [
            {
              title: "IP-Driven Purchases",
              description: "Marvel, Star Wars limited editions.",
            },
          ],
          opportunity: "Subscription collectible clubs.",
          threat: "Market saturation of resales.",
        },
        {
          name: "Educational Institutions",
          cr4: 30.0,
          probit: "LH",
          operatingMargin: 0.0,
          cagr: 5.2,
          cagrForward: 5.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Preschools",
              ticker: "N/A",
              share: 18.0,
              strengths: [
                "Bulk learning toys",
                "Montessori aligned",
              ],
            },
          ],
          features: [
            {
              title: "Grant-Funded Purchases",
              description: "Government programs for early education.",
            },
          ],
          opportunity: "Remote learning hybrid kits.",
          threat: "Budget cuts in public schools.",
        },
        {
          name: "Gift Givers",
          cr4: 70.0,
          probit: "LL",
          operatingMargin: 0.0,
          cagr: 0.8,
          cagrForward: 1.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Grandparents",
              ticker: "N/A",
              share: 28.0,
              strengths: [
                "Classic toy gifting",
                "Birthday traditions",
              ],
            },
          ],
          features: [
            {
              title: "Occasion-Driven",
              description: "Christmas and birthday peaks.",
            },
          ],
          opportunity: "Personalized gift experiences.",
          threat: "E-gifting alternatives.",
        },
      ],
    },
  ],
};
