import type { ValueChain } from '../../types/valueChain';

export const a2_6010Data: ValueChain = {
  code: "A2-6010",
  name: "Toys & Games",
  imCode: "A2-6010",
  classificationCode: "A2-6010",
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
          cagrForward: 4.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Dow Inc.",
              ticker: "DOW",
              share: 22.0,
              strengths: [
                "Scale production",
                "Sustainable materials",
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
              title: "Recycled Plastics Shift",
              description: "Increasing demand for eco-friendly polymers due to sustainability regulations",
            },
          ],
          opportunity: "Rising eco-toy demand boosts bio-plastics adoption",
          threat: "Commodity price volatility from oil fluctuations",
        },
        {
          name: "Electronic Components",
          cr4: 70.0,
          probit: "LH",
          operatingMargin: 8.2,
          cagr: 6.5,
          cagrForward: 7.2,
          classificationCodes: [],
          leaders: [
            {
              name: "STMicroelectronics",
              ticker: "STM",
              share: 25.0,
              strengths: [
                "Chip miniaturization",
                "Low-power tech",
              ],
            },
          ],
          features: [
            {
              title: "Smart Toy Integration",
              description: "Sensors and IoT chips for interactive features",
            },
          ],
          opportunity: "Tech toys expansion drives component demand",
          threat: "Supply chain disruptions from Asia",
        },
        {
          name: "Packaging Materials",
          cr4: 55.0,
          probit: "LL",
          operatingMargin: 5.8,
          cagr: 2.1,
          cagrForward: 2.8,
          classificationCodes: [],
          leaders: [
            {
              name: "International Paper",
              ticker: "IP",
              share: 20.0,
              strengths: [
                "Recyclable designs",
                "Volume supply",
              ],
            },
          ],
          features: [
            {
              title: "Sustainable Packaging",
              description: "Shift to biodegradable and minimal packaging",
            },
          ],
          opportunity: "E-commerce packaging growth",
          threat: "Rising paper costs",
        },
        {
          name: "Fabrics & Textiles",
          cr4: 60.0,
          probit: "HL",
          operatingMargin: 10.3,
          cagr: 3.8,
          cagrForward: 4.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Unifi Inc.",
              ticker: "UFI",
              share: 19.0,
              strengths: [
                "Recycled yarns",
                "Soft toy focus",
              ],
            },
          ],
          features: [
            {
              title: "Organic Fabrics",
              description: "Hypoallergenic materials for plush toys",
            },
          ],
          opportunity: "Plush toy revival with premium fabrics",
          threat: "Cotton price inflation",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Molding & Injection",
          cr4: 68.0,
          probit: "HH",
          operatingMargin: 15.2,
          cagr: 4.5,
          cagrForward: 5.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Proto Labs",
              ticker: "PRLB",
              share: 24.0,
              strengths: [
                "Rapid prototyping",
                "Custom molds",
              ],
            },
          ],
          features: [
            {
              title: "3D Printing Integration",
              description: "Hybrid molding for complex toy shapes",
            },
          ],
          opportunity: "Customization trend in toys",
          threat: "Labor shortages in processing",
        },
        {
          name: "Circuit Assembly",
          cr4: 72.0,
          probit: "LH",
          operatingMargin: 9.1,
          cagr: 7.0,
          cagrForward: 8.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Flex Ltd.",
              ticker: "FLEX",
              share: 28.0,
              strengths: [
                "High-volume assembly",
                "Quality control",
              ],
            },
          ],
          features: [
            {
              title: "Battery Tech Processing",
              description: "Rechargeable components for smart toys",
            },
          ],
          opportunity: "AR/VR toy electronics boom",
          threat: "Chip shortages persist",
        },
        {
          name: "Painting & Finishing",
          cr4: 58.0,
          probit: "HL",
          operatingMargin: 11.4,
          cagr: 3.9,
          cagrForward: 4.6,
          classificationCodes: [],
          leaders: [
            {
              name: "PPG Industries",
              ticker: "PPG",
              share: 21.0,
              strengths: [
                "Non-toxic paints",
                "Durable finishes",
              ],
            },
          ],
          features: [
            {
              title: "Eco-Friendly Coatings",
              description: "Water-based paints for safety compliance",
            },
          ],
          opportunity: "Premium finish demand",
          threat: "Regulatory changes on chemicals",
        },
        {
          name: "Fabric Cutting & Sewing",
          cr4: 62.0,
          probit: "LL",
          operatingMargin: 6.7,
          cagr: 2.8,
          cagrForward: 3.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Gildan Activewear",
              ticker: "GIL",
              share: 23.0,
              strengths: [
                "Automated sewing",
                "Cost efficiency",
              ],
            },
          ],
          features: [
            {
              title: "Automated Patterning",
              description: "CNC cutting for plush production",
            },
          ],
          opportunity: "Licensed character plush growth",
          threat: "Offshoring competition",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Traditional Toy Production",
          cr4: 75.0,
          probit: "HL",
          operatingMargin: 14.8,
          cagr: 3.1,
          cagrForward: 3.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Mattel Inc.",
              ticker: "MAT",
              share: 28.0,
              strengths: [
                "Barbie brand",
                "Global factories",
              ],
            },
            {
              name: "Hasbro Inc.",
              ticker: "HAS",
              share: 22.0,
              strengths: [
                "Transformers IP",
                "Diversified portfolio",
              ],
            },
          ],
          features: [
            {
              title: "Licensed Merchandise",
              description: "Movie and TV tie-ins drive volume",
            },
          ],
          opportunity: "Educational toy surge",
          threat: "Declining birth rates",
          niche: {
            name: "LEGO Group",
            ticker: "Private",
            share: 15.0,
            cagr: 7.2,
            margin: ">20%",
            strategy: "IP expansion",
            valuation: "EV/EBITDA 25x",
          },
        },
        {
          name: "Video Game Development",
          cr4: 80.0,
          probit: "HH",
          operatingMargin: 22.5,
          cagr: 5.8,
          cagrForward: 6.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Bandai Namco",
              ticker: "7832.T",
              share: 25.0,
              strengths: [
                "Gundam franchise",
                "Mobile gaming",
              ],
            },
          ],
          features: [
            {
              title: "Digital Distribution",
              description: "Cloud and subscription models",
            },
          ],
          opportunity: "Mobile and cloud gaming growth",
          threat: "Hit-driven revenue model",
        },
        {
          name: "Board Game Production",
          cr4: 52.0,
          probit: "LH",
          operatingMargin: 12.1,
          cagr: 6.2,
          cagrForward: 7.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Asmodee (Embracer)",
              ticker: "THQQF",
              share: 30.0,
              strengths: [
                "Monopoly license",
                "Adult gaming",
              ],
            },
          ],
          features: [
            {
              title: "Adult Collectibles",
              description: "Strategy games for 18+ segment",
            },
          ],
          opportunity: "Social distancing legacy",
          threat: "Raw material costs",
        },
        {
          name: "Outdoor Toy Assembly",
          cr4: 48.0,
          probit: "LL",
          operatingMargin: 7.9,
          cagr: 2.5,
          cagrForward: 3.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Spin Master",
              ticker: "TOY.TO",
              share: 20.0,
              strengths: [
                "PAW Patrol",
                "Active play",
              ],
            },
          ],
          features: [
            {
              title: "Durable Materials",
              description: "Weather-resistant plastics",
            },
          ],
          opportunity: "Post-pandemic outdoor focus",
          threat: "Seasonal demand",
        },
        {
          name: "Puzzles & Models",
          cr4: 55.0,
          probit: "HL",
          operatingMargin: 13.6,
          cagr: 4.2,
          cagrForward: 5.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Ravensburger",
              ticker: "Private",
              share: 24.0,
              strengths: [
                "Premium puzzles",
                "3D models",
              ],
            },
          ],
          features: [
            {
              title: "Custom Printing",
              description: "Personalized puzzle production",
            },
          ],
          opportunity: "Home entertainment trend",
          threat: "Paper supply issues",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Wholesale Distribution",
          cr4: 62.0,
          probit: "LL",
          operatingMargin: 4.2,
          cagr: 2.9,
          cagrForward: 3.5,
          classificationCodes: [],
          leaders: [
            {
              name: "McKesson",
              ticker: "MCK",
              share: 18.0,
              strengths: [
                "Logistics network",
                "Inventory mgmt",
              ],
            },
          ],
          features: [
            {
              title: "Just-in-Time Delivery",
              description: "Efficient supply to retailers",
            },
          ],
          opportunity: "Direct-to-retailer consolidation",
          threat: "E-commerce bypass",
        },
        {
          name: "Logistics & Freight",
          cr4: 70.0,
          probit: "LH",
          operatingMargin: 6.8,
          cagr: 5.4,
          cagrForward: 6.2,
          classificationCodes: [],
          leaders: [
            {
              name: "UPS",
              ticker: "UPS",
              share: 26.0,
              strengths: [
                "Global reach",
                "E-com integration",
              ],
            },
          ],
          features: [
            {
              title: "Container Shipping",
              description: "Asia-to-US toy freight",
            },
          ],
          opportunity: "E-commerce volume surge",
          threat: "Port congestion",
        },
        {
          name: "Third-Party Fulfillment",
          cr4: 75.0,
          probit: "HH",
          operatingMargin: 16.3,
          cagr: 8.1,
          cagrForward: 9.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon Services",
              ticker: "AMZN",
              share: 35.0,
              strengths: [
                "FBA network",
                "Prime speed",
              ],
            },
          ],
          features: [
            {
              title: "Direct-to-Consumer",
              description: "Brand DTC fulfillment",
            },
          ],
          opportunity: "Online sales dominance",
          threat: "Labor cost inflation",
        },
        {
          name: "Inventory Management",
          cr4: 58.0,
          probit: "HL",
          operatingMargin: 9.5,
          cagr: 4.0,
          cagrForward: 4.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Manhattan Associates",
              ticker: "MANH",
              share: 22.0,
              strengths: [
                "WMS software",
                "AI forecasting",
              ],
            },
          ],
          features: [
            {
              title: "Seasonal Optimization",
              description: "Holiday peak handling",
            },
          ],
          opportunity: "AI-driven efficiency",
          threat: "Overstock risks",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Mass Retail",
          cr4: 68.0,
          probit: "LL",
          operatingMargin: 3.7,
          cagr: 1.8,
          cagrForward: 2.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Walmart",
              ticker: "WMT",
              share: 25.0,
              strengths: [
                "Price leadership",
                "High volume",
              ],
            },
            {
              name: "Target",
              ticker: "TGT",
              share: 20.0,
              strengths: [
                "Exclusive lines",
                "Curated selection",
              ],
            },
          ],
          features: [
            {
              title: "End-Cap Displays",
              description: "High-visibility placements",
            },
          ],
          opportunity: "Private label toys",
          threat: "E-com shift",
        },
        {
          name: "E-Commerce Platforms",
          cr4: 82.0,
          probit: "HH",
          operatingMargin: 18.9,
          cagr: 7.6,
          cagrForward: 8.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon.com",
              ticker: "AMZN",
              share: 45.0,
              strengths: [
                "Recommendation engine",
                "Fast delivery",
              ],
            },
          ],
          features: [
            {
              title: "Online Marketplaces",
              description: "Third-party seller integration",
            },
          ],
          opportunity: "Global digital access",
          threat: "Counterfeit issues",
        },
        {
          name: "Specialty Toy Stores",
          cr4: 45.0,
          probit: "LH",
          operatingMargin: 8.4,
          cagr: 4.2,
          cagrForward: 5.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Learning Express",
              ticker: "Private",
              share: 18.0,
              strengths: [
                "Educational focus",
                "Experiential retail",
              ],
            },
          ],
          features: [
            {
              title: "Demo Stations",
              description: "In-store play experiences",
            },
          ],
          opportunity: "Premium segment growth",
          threat: "Store closures",
        },
        {
          name: "Direct-to-Consumer",
          cr4: 50.0,
          probit: "HL",
          operatingMargin: 14.2,
          cagr: 6.1,
          cagrForward: 7.3,
          classificationCodes: [],
          leaders: [
            {
              name: "LEGO Direct",
              ticker: "Private",
              share: 22.0,
              strengths: [
                "Brand stores",
                "Subscription boxes",
              ],
            },
          ],
          features: [
            {
              title: "Brand Websites",
              description: "Custom bundles and loyalty",
            },
          ],
          opportunity: "Customer data leverage",
          threat: "Marketing costs",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Children 0-12 Years",
          cr4: 40.0,
          probit: "LH",
          operatingMargin: 0.0,
          cagr: 2.3,
          cagrForward: 3.1,
          classificationCodes: [],
          leaders: [],
          features: [
            {
              title: "Educational Toys",
              description: "STEM-focused learning products",
            },
          ],
          opportunity: "Early education emphasis",
          threat: "Screen time competition",
        },
        {
          name: "Teens 13-18 Years",
          cr4: 35.0,
          probit: "HH",
          operatingMargin: 0.0,
          cagr: 5.7,
          cagrForward: 6.5,
          classificationCodes: [],
          leaders: [],
          features: [
            {
              title: "Collectibles",
              description: "Funko Pops and trading cards",
            },
          ],
          opportunity: "Gaming peripherals",
          threat: "Social media distraction",
        },
        {
          name: "Adult Collectors",
          cr4: 55.0,
          probit: "HL",
          operatingMargin: 0.0,
          cagr: 7.2,
          cagrForward: 8.0,
          classificationCodes: [],
          leaders: [],
          features: [
            {
              title: "Nostalgia Products",
              description: "Retro reissues and premiums",
            },
          ],
          opportunity: "Kidult market expansion",
          threat: "Economic sensitivity",
        },
        {
          name: "Parents & Gift Givers",
          cr4: 60.0,
          probit: "LL",
          operatingMargin: 0.0,
          cagr: 3.5,
          cagrForward: 4.2,
          classificationCodes: [],
          leaders: [],
          features: [
            {
              title: "Holiday Purchases",
              description: "Seasonal gifting peaks",
            },
          ],
          opportunity: "Subscription models",
          threat: "Budget constraints",
        },
        {
          name: "Institutions (Schools)",
          cr4: 30.0,
          probit: "LH",
          operatingMargin: 0.0,
          cagr: 4.8,
          cagrForward: 5.6,
          classificationCodes: [],
          leaders: [],
          features: [
            {
              title: "Bulk Educational",
              description: "Classroom learning kits",
            },
          ],
          opportunity: "EdTech integration",
          threat: "Public funding cuts",
        },
      ],
    },
  ],
};
