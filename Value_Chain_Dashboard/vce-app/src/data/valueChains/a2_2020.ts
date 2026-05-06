import type { ValueChain } from '../../types/valueChain';

export const a2_2020Data: ValueChain = {
  code: "A2-2020",
  name: "E-Commerce & Television Shopping",
  imCode: "A2-2020",
  classificationCode: "A2-2020",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Product Suppliers & Manufacturers",
          cr4: 45.0,
          probit: "LH",
          operatingMargin: 8.2,
          cagr: 6.5,
          cagrForward: 7.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Procter & Gamble",
              ticker: "PG",
              share: 15.0,
              strengths: [
                "Brand portfolio",
                "Supply chain scale",
              ],
            },
            {
              name: "Unilever",
              ticker: "UL",
              share: 12.0,
              strengths: [
                "Global reach",
                "Innovation pipeline",
              ],
            },
          ],
          features: [
            {
              title: "Value Co-creation",
              description: "Suppliers engage in co-creation efforts with platforms to enhance product value and demand forecasting.",
            },
          ],
          opportunity: "Rising demand for direct-to-consumer supply partnerships with e-commerce giants.",
          threat: "Pressure from platforms for lower prices and faster delivery times.",
        },
        {
          name: "Packaging Materials Suppliers",
          cr4: 60.0,
          probit: "LL",
          operatingMargin: 5.1,
          cagr: 4.2,
          cagrForward: 4.8,
          classificationCodes: [],
          leaders: [
            {
              name: "International Paper",
              ticker: "IP",
              share: 22.0,
              strengths: [
                "Sustainable materials",
                "Volume production",
              ],
            },
          ],
          features: [
            {
              title: "Sustainable Packaging",
              description: "Shift to eco-friendly materials driven by e-commerce consumer preferences.",
            },
          ],
          opportunity: "Growth in customized, recyclable packaging for online orders.",
          threat: "Commodity price volatility in paper and plastics.",
        },
        {
          name: "Content & Media Suppliers",
          cr4: 70.0,
          probit: "HL",
          operatingMargin: 22.4,
          cagr: 3.8,
          cagrForward: 4.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Getty Images",
              ticker: "GETY",
              share: 28.0,
              strengths: [
                "Premium image library",
                "Licensing expertise",
              ],
            },
          ],
          features: [
            {
              title: "Product Imagery",
              description: "High-quality photos and videos essential for e-commerce catalog management.",
            },
          ],
          opportunity: "AI-generated content licensing for product visuals.",
          threat: "Free stock photo alternatives eroding pricing power.",
        },
        {
          name: "Logistics Equipment Providers",
          cr4: 55.0,
          probit: "LH",
          operatingMargin: 9.7,
          cagr: 5.9,
          cagrForward: 6.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Crown Equipment",
              ticker: "Private",
              share: 18.0,
              strengths: [
                "Warehouse automation",
                "Forklift tech",
              ],
            },
          ],
          features: [
            {
              title: "Automation Hardware",
              description: "Robotic systems and conveyors for fulfillment centers.",
            },
          ],
          opportunity: "Expansion of robotics in e-commerce warehouses.",
          threat: "Labor shortages driving capex needs.",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Inventory Management & Procurement",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 15.3,
          cagr: 7.2,
          cagrForward: 8.0,
          classificationCodes: [],
          leaders: [
            {
              name: "SAP",
              ticker: "SAP",
              share: 25.0,
              strengths: [
                "ERP integration",
                "Cloud solutions",
              ],
            },
          ],
          features: [
            {
              title: "Demand Forecasting",
              description: "AI-driven tools for optimizing stock levels and reducing overstock.",
            },
          ],
          opportunity: "Integration with real-time e-commerce data analytics.",
          threat: "Supply chain disruptions from global events.",
        },
        {
          name: "Product Catalog Management",
          cr4: 50.0,
          probit: "LH",
          operatingMargin: 12.1,
          cagr: 9.4,
          cagrForward: 10.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Akeneo",
              ticker: "Private",
              share: 16.0,
              strengths: [
                "PIM software",
                "Multi-channel support",
              ],
            },
          ],
          features: [
            {
              title: "PIM Systems",
              description: "Product Information Management for consistent listings across platforms.",
            },
          ],
          opportunity: "Explosion of SKUs in online marketplaces.",
          threat: "Data silos across seller platforms.",
        },
        {
          name: "Digital Payment Processing",
          cr4: 80.0,
          probit: "HH",
          operatingMargin: 28.6,
          cagr: 12.5,
          cagrForward: 13.8,
          classificationCodes: [],
          leaders: [
            {
              name: "PayPal",
              ticker: "PYPL",
              share: 35.0,
              strengths: [
                "Global acceptance",
                "Buy Now Pay Later",
              ],
            },
            {
              name: "Stripe",
              ticker: "Private",
              share: 20.0,
              strengths: [
                "Developer-friendly API",
                "Fraud prevention",
              ],
            },
          ],
          features: [
            {
              title: "Embedded Finance",
              description: "Seamless checkout experiences with tokenization and one-click payments.",
            },
          ],
          opportunity: "Growth in cross-border e-commerce transactions.",
          threat: "Regulatory scrutiny on fees and data privacy.",
          niche: {
            name: "Adyen",
            ticker: "ADYEY",
            share: 8.0,
            cagr: 15.2,
            margin: ">25%",
            strategy: "Unified commerce platform",
            valuation: "P/E 55x",
          },
        },
        {
          name: "Data Analytics Providers",
          cr4: 75.0,
          probit: "HH",
          operatingMargin: 24.8,
          cagr: 14.1,
          cagrForward: 15.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Snowflake",
              ticker: "SNOW",
              share: 22.0,
              strengths: [
                "Cloud data warehouse",
                "E-commerce insights",
              ],
            },
          ],
          features: [
            {
              title: "Customer Analytics",
              description: "Real-time personalization and recommendation engines.",
            },
          ],
          opportunity: "AI/ML integration for predictive merchandising.",
          threat: "Data privacy laws like GDPR limiting usage.",
        },
        {
          name: "TV Production Studios",
          cr4: 55.0,
          probit: "LL",
          operatingMargin: 6.4,
          cagr: 2.9,
          cagrForward: 3.5,
          classificationCodes: [],
          leaders: [
            {
              name: "QVC Studios",
              ticker: "Private",
              share: 20.0,
              strengths: [
                "Live shopping content",
                "Host expertise",
              ],
            },
          ],
          features: [
            {
              title: "Live Broadcast Content",
              description: "Production of engaging TV shopping shows.",
            },
          ],
          opportunity: "Hybrid TV-e-commerce live streams.",
          threat: "Decline in traditional cable viewership.",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Fulfillment Center Operations",
          cr4: 70.0,
          probit: "LH",
          operatingMargin: 7.9,
          cagr: 11.2,
          cagrForward: 12.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon Fulfillment",
              ticker: "AMZN",
              share: 40.0,
              strengths: [
                "Automation scale",
                "Prime network",
              ],
            },
          ],
          features: [
            {
              title: "Warehouse Automation",
              description: "Robotics and AI for picking, packing, and sorting.",
            },
          ],
          opportunity: "3PL expansion for SMB sellers.",
          threat: "Rising labor and real estate costs.",
        },
        {
          name: "Order Processing Systems",
          cr4: 60.0,
          probit: "HL",
          operatingMargin: 18.7,
          cagr: 8.6,
          cagrForward: 9.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Shopify",
              ticker: "SHOP",
              share: 24.0,
              strengths: [
                "OMS integration",
                "Merchant tools",
              ],
            },
          ],
          features: [
            {
              title: "OMS Software",
              description: "Order Management Systems for multi-channel fulfillment.",
            },
          ],
          opportunity: "Micro-fulfillment centers in urban areas.",
          threat: "Integration complexity with legacy systems.",
        },
        {
          name: "Packaging & Kitting",
          cr4: 40.0,
          probit: "LL",
          operatingMargin: 4.5,
          cagr: 5.7,
          cagrForward: 6.2,
          classificationCodes: [],
          leaders: [
            {
              name: "ShipBob",
              ticker: "Private",
              share: 12.0,
              strengths: [
                "Custom kitting",
                "E-com focus",
              ],
            },
          ],
          features: [
            {
              title: "Custom Assembly",
              description: "Bundling and personalization at fulfillment stage.",
            },
          ],
          opportunity: "Subscription box assembly services.",
          threat: "Scale disadvantages vs. hyperscalers.",
        },
        {
          name: "Quality Control & Testing",
          cr4: 50.0,
          probit: "HL",
          operatingMargin: 16.2,
          cagr: 6.8,
          cagrForward: 7.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Bureau Veritas",
              ticker: "BVI.PA",
              share: 18.0,
              strengths: [
                "Certification services",
                "Global labs",
              ],
            },
          ],
          features: [
            {
              title: "Product Inspection",
              description: "Pre-shipment testing for e-commerce goods.",
            },
          ],
          opportunity: "Blockchain traceability for authenticity.",
          threat: "Counterfeit influx in online marketplaces.",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Freight & Parcel Carriers",
          cr4: 75.0,
          probit: "LH",
          operatingMargin: 6.8,
          cagr: 10.9,
          cagrForward: 11.7,
          classificationCodes: [],
          leaders: [
            {
              name: "UPS",
              ticker: "UPS",
              share: 28.0,
              strengths: [
                "Ground network",
                "E-com volumes",
              ],
            },
            {
              name: "FedEx",
              ticker: "FDX",
              share: 22.0,
              strengths: [
                "Express delivery",
                "Automation",
              ],
            },
          ],
          features: [
            {
              title: "Last-Mile Logistics",
              description: "Optimized routing for high-volume e-commerce parcels.",
            },
          ],
          opportunity: "Drone and autonomous delivery pilots.",
          threat: "Fuel costs and union labor pressures.",
        },
        {
          name: "3PL Providers",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 14.2,
          cagr: 9.5,
          cagrForward: 10.1,
          classificationCodes: [],
          leaders: [
            {
              name: "DHL Supply Chain",
              ticker: "DHLGY",
              share: 20.0,
              strengths: [
                "Global coverage",
                "Tech platform",
              ],
            },
          ],
          features: [
            {
              title: "End-to-End Logistics",
              description: "From warehousing to final delivery for e-tailers.",
            },
          ],
          opportunity: "Reverse logistics for returns management.",
          threat: "Margin squeeze from volume-based pricing.",
        },
        {
          name: "Online Advertising Networks",
          cr4: 85.0,
          probit: "HH",
          operatingMargin: 32.1,
          cagr: 15.3,
          cagrForward: 16.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Google Ads",
              ticker: "GOOGL",
              share: 45.0,
              strengths: [
                "Search dominance",
                "Retargeting",
              ],
            },
          ],
          features: [
            {
              title: "Performance Marketing",
              description: "PPC and display ads driving traffic to e-stores.",
            },
          ],
          opportunity: "Privacy-first ad tech post-cookie era.",
          threat: "Ad fatigue and rising CPMs.",
          niche: {
            name: "The Trade Desk",
            ticker: "TTD",
            share: 6.0,
            cagr: 18.4,
            margin: ">30%",
            strategy: "Demand-side platform",
            valuation: "P/E 120x",
          },
        },
        {
          name: "TV Distribution Networks",
          cr4: 60.0,
          probit: "LL",
          operatingMargin: 7.3,
          cagr: 1.8,
          cagrForward: 2.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Comcast",
              ticker: "CMCSA",
              share: 25.0,
              strengths: [
                "Cable infrastructure",
                "QVC channel",
              ],
            },
          ],
          features: [
            {
              title: "Broadcast Affiliates",
              description: "Satellite and cable distribution for shopping channels.",
            },
          ],
          opportunity: "OTT streaming integration for TV shopping.",
          threat: "Cord-cutting trends reducing reach.",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "E-Commerce Marketplaces",
          cr4: 90.0,
          probit: "HH",
          operatingMargin: 19.5,
          cagr: 21.6,
          cagrForward: 20.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon",
              ticker: "AMZN",
              share: 50.0,
              strengths: [
                "Marketplace scale",
                "AWS synergy",
              ],
            },
            {
              name: "Alibaba",
              ticker: "BABA",
              share: 20.0,
              strengths: [
                "China dominance",
                "Live commerce",
              ],
            },
          ],
          features: [
            {
              title: "Marketplace Platforms",
              description: "Third-party seller ecosystems with FBA services.",
            },
          ],
          opportunity: "Social commerce and shoppable posts.",
          threat: "Antitrust regulations on dominance.",
        },
        {
          name: "D2C Brand Platforms",
          cr4: 45.0,
          probit: "LH",
          operatingMargin: 11.8,
          cagr: 18.2,
          cagrForward: 19.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Shopify Merchants",
              ticker: "SHOP",
              share: 15.0,
              strengths: [
                "Headless commerce",
                "App ecosystem",
              ],
            },
          ],
          features: [
            {
              title: "Direct Sales Sites",
              description: "Branded storefronts with subscription models.",
            },
          ],
          opportunity: "Personalization via first-party data.",
          threat: "Platform fees and traffic dependency.",
        },
        {
          name: "Television Shopping Networks",
          cr4: 70.0,
          probit: "HL",
          operatingMargin: 17.6,
          cagr: 3.4,
          cagrForward: 4.1,
          classificationCodes: [],
          leaders: [
            {
              name: "QVC",
              ticker: "QVCD",
              share: 35.0,
              strengths: [
                "Live hosting",
                "Impulse buys",
              ],
            },
          ],
          features: [
            {
              title: "Teleshopping Channels",
              description: "24/7 broadcasts with on-air purchasing.",
            },
          ],
          opportunity: "Convergence with mobile app ordering.",
          threat: "Shift to pure online shopping.",
        },
        {
          name: "Social Commerce Platforms",
          cr4: 80.0,
          probit: "HH",
          operatingMargin: 25.4,
          cagr: 24.7,
          cagrForward: 23.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Meta Shops",
              ticker: "META",
              share: 40.0,
              strengths: [
                "Social graph",
                "Influencer integration",
              ],
            },
          ],
          features: [
            {
              title: "In-App Purchasing",
              description: "Seamless buying within Instagram and Facebook.",
            },
          ],
          opportunity: "UGC-driven viral sales.",
          threat: "Algorithm changes affecting visibility.",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Customer Service & Support",
          cr4: 55.0,
          probit: "LL",
          operatingMargin: 5.6,
          cagr: 7.8,
          cagrForward: 8.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Zendesk",
              ticker: "ZEN",
              share: 18.0,
              strengths: [
                "Omnichannel support",
                "AI chatbots",
              ],
            },
          ],
          features: [
            {
              title: "Helpdesk Software",
              description: "Ticketing and self-service portals for queries.",
            },
          ],
          opportunity: "Proactive AI support reducing resolution times.",
          threat: "High volume from returns and complaints.",
        },
        {
          name: "Returns Management",
          cr4: 50.0,
          probit: "LH",
          operatingMargin: 8.9,
          cagr: 13.2,
          cagrForward: 14.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Happy Returns",
              ticker: "Private",
              share: 14.0,
              strengths: [
                "Return bars",
                "Resale partnerships",
              ],
            },
          ],
          features: [
            {
              title: "Reverse Logistics",
              description: "Efficient handling of returns and refunds.",
            },
          ],
          opportunity: "Resale marketplaces for returned goods.",
          threat: "Return fraud proliferation.",
        },
        {
          name: "Customer Loyalty Programs",
          cr4: 60.0,
          probit: "HL",
          operatingMargin: 16.7,
          cagr: 9.1,
          cagrForward: 9.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Rakuten",
              ticker: "RKUNY",
              share: 22.0,
              strengths: [
                "Cashback model",
                "Rewards network",
              ],
            },
          ],
          features: [
            {
              title: "Subscription & Rewards",
              description: "Prime-like memberships driving repeat purchases.",
            },
          ],
          opportunity: "Personalized loyalty via data insights.",
          threat: "LTV erosion from price comparison.",
        },
        {
          name: "Reviews & Reputation Management",
          cr4: 65.0,
          probit: "HH",
          operatingMargin: 21.3,
          cagr: 16.4,
          cagrForward: 17.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Trustpilot",
              ticker: "TRSTY",
              share: 25.0,
              strengths: [
                "Review aggregation",
                "Sentiment analysis",
              ],
            },
          ],
          features: [
            {
              title: "UGC Platforms",
              description: "Verification and moderation of customer feedback.",
            },
          ],
          opportunity: "AI-moderated review authenticity.",
          threat: "Fake review scandals.",
        },
      ],
    },
  ],
};
