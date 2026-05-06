import type { ValueChain } from '../../types/valueChain';

export const a2_20Data: ValueChain = {
  code: "A2-20",
  name: "Digital & E-Commerce industry (IM A2-20; sector A2 — Mind)",
  imCode: "A2-20",
  classificationCode: "A2-20",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Cloud Infrastructure Providers",
          cr4: 65.0,
          probit: "HH",
          operatingMargin: 28.5,
          cagr: 22.4,
          cagrForward: 18.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon Web Services",
              ticker: "AMZN",
              share: 31.0,
              strengths: [
                "Scale and reliability",
                "AI integration",
              ],
            },
            {
              name: "Microsoft Azure",
              ticker: "MSFT",
              share: 22.0,
              strengths: [
                "Enterprise focus",
                "Hybrid cloud",
              ],
            },
          ],
          features: [
            {
              title: "Scalable Compute",
              description: "On-demand virtual machines and serverless computing for e-commerce backend",
            },
          ],
          opportunity: "AI-driven workload optimization reducing costs by 20-30%",
          threat: "Regulatory scrutiny on data sovereignty",
        },
        {
          name: "Content Delivery Networks",
          cr4: 72.0,
          probit: "HL",
          operatingMargin: 15.2,
          cagr: 12.1,
          cagrForward: 9.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Cloudflare",
              ticker: "NET",
              share: 28.0,
              strengths: [
                "Security features",
                "Zero-trust model",
              ],
            },
            {
              name: "Akamai",
              ticker: "AKAM",
              share: 25.0,
              strengths: [
                "Global edge network",
                "Media delivery",
              ],
            },
          ],
          features: [
            {
              title: "Edge Caching",
              description: "Reduces latency for global e-commerce site access",
            },
          ],
          opportunity: "Edge AI for personalized content delivery",
          threat: "Rising cybersecurity threats",
        },
        {
          name: "Data Center Hardware",
          cr4: 85.0,
          probit: "LH",
          operatingMargin: 8.7,
          cagr: 15.6,
          cagrForward: 14.3,
          classificationCodes: [],
          leaders: [
            {
              name: "NVIDIA",
              ticker: "NVDA",
              share: 42.0,
              strengths: [
                "GPU acceleration",
                "AI training",
              ],
            },
            {
              name: "Dell Technologies",
              ticker: "DELL",
              share: 18.0,
              strengths: [
                "Server customization",
                "OEM partnerships",
              ],
            },
          ],
          features: [
            {
              title: "GPU Clusters",
              description: "High-performance computing for recommendation engines",
            },
          ],
          opportunity: "Hyperscale data center expansion",
          threat: "Semiconductor supply chain disruptions",
        },
        {
          name: "Software Development Tools",
          cr4: 55.0,
          probit: "HH",
          operatingMargin: 32.1,
          cagr: 18.9,
          cagrForward: 16.5,
          classificationCodes: [],
          leaders: [
            {
              name: "GitHub (Microsoft)",
              ticker: "MSFT",
              share: 35.0,
              strengths: [
                "DevOps integration",
                "Copilot AI",
              ],
            },
          ],
          features: [
            {
              title: "CI/CD Pipelines",
              description: "Automated deployment for rapid e-commerce updates",
            },
          ],
          opportunity: "Low-code platforms for faster development",
          threat: "Open-source security vulnerabilities",
          niche: {
            name: "Vercel",
            ticker: "VERCEL",
            share: 12.0,
            cagr: 45.2,
            margin: ">25%",
            strategy: "Serverless frontend deployment",
            valuation: "P/S 25x",
          },
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "E-commerce Platforms",
          cr4: 68.0,
          probit: "HH",
          operatingMargin: 12.4,
          cagr: 25.7,
          cagrForward: 20.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Shopify",
              ticker: "SHOP",
              share: 29.0,
              strengths: [
                "Merchant tools",
                "App ecosystem",
              ],
            },
            {
              name: "Shopify Plus",
              ticker: "SHOP",
              share: 15.0,
              strengths: [
                "Enterprise scalability",
              ],
            },
          ],
          features: [
            {
              title: "Headless Commerce",
              description: "API-first architecture for custom frontends",
            },
          ],
          opportunity: "Embedded finance integrations",
          threat: "Platform lock-in resistance",
        },
        {
          name: "Payment Gateways",
          cr4: 78.0,
          probit: "HL",
          operatingMargin: 22.8,
          cagr: 16.3,
          cagrForward: 14.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Stripe",
              ticker: "STRPE",
              share: 32.0,
              strengths: [
                "Developer-friendly APIs",
                "Global expansion",
              ],
            },
            {
              name: "PayPal",
              ticker: "PYPL",
              share: 25.0,
              strengths: [
                "Consumer brand",
                "Buy now pay later",
              ],
            },
          ],
          features: [
            {
              title: "Tokenization",
              description: "Secure payment data handling for compliance",
            },
          ],
          opportunity: "Crypto and stablecoin payments",
          threat: "Regulatory changes on interchange fees",
        },
        {
          name: "Digital Marketing Tech",
          cr4: 62.0,
          probit: "LH",
          operatingMargin: 9.5,
          cagr: 28.4,
          cagrForward: 22.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Google Ads",
              ticker: "GOOGL",
              share: 38.0,
              strengths: [
                "Search dominance",
                "Remarketing",
              ],
            },
          ],
          features: [
            {
              title: "Performance Max",
              description: "AI-optimized multi-channel campaigns",
            },
          ],
          opportunity: "Privacy-first advertising post-cookie",
          threat: "Ad-blocker proliferation",
        },
        {
          name: "Customer Data Platforms",
          cr4: 59.0,
          probit: "HH",
          operatingMargin: 18.2,
          cagr: 31.2,
          cagrForward: 26.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Segment (Twilio)",
              ticker: "TWLO",
              share: 24.0,
              strengths: [
                "CDP unification",
                "Real-time data",
              ],
            },
          ],
          features: [
            {
              title: "Customer 360",
              description: "Unified profiles across touchpoints",
            },
          ],
          opportunity: "Zero-party data collection",
          threat: "Data privacy regulations like GDPR",
          niche: {
            name: "Amplitude",
            ticker: "AMPL",
            share: 8.0,
            cagr: 38.7,
            margin: "15-20%",
            strategy: "Product analytics focus",
            valuation: "P/S 12x",
          },
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Inventory Management Software",
          cr4: 52.0,
          probit: "HL",
          operatingMargin: 16.8,
          cagr: 14.5,
          cagrForward: 12.9,
          classificationCodes: [],
          leaders: [
            {
              name: "TradeGecko (QuickBooks)",
              ticker: "INTU",
              share: 21.0,
              strengths: [
                "SaaS integration",
                "Forecasting",
              ],
            },
          ],
          features: [
            {
              title: "Demand Forecasting",
              description: "AI predictions for stock optimization",
            },
          ],
          opportunity: "Multi-channel inventory sync",
          threat: "Supply chain volatility",
        },
        {
          name: "Warehouse Management Systems",
          cr4: 48.0,
          probit: "LH",
          operatingMargin: 11.3,
          cagr: 19.2,
          cagrForward: 17.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Manhattan Associates",
              ticker: "MANH",
              share: 18.0,
              strengths: [
                "WMS optimization",
                "Automation",
              ],
            },
          ],
          features: [
            {
              title: "Robotics Integration",
              description: "AGV and picking automation",
            },
          ],
          opportunity: "Micro-fulfillment centers",
          threat: "Labor shortages",
        },
        {
          name: "Order Management Systems",
          cr4: 61.0,
          probit: "HH",
          operatingMargin: 20.1,
          cagr: 23.8,
          cagrForward: 21.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Oracle NetSuite",
              ticker: "ORCL",
              share: 26.0,
              strengths: [
                "ERP integration",
                "Omnichannel",
              ],
            },
          ],
          features: [
            {
              title: "Split Order Processing",
              description: "Handles complex fulfillment scenarios",
            },
          ],
          opportunity: "BOPIS (buy online pick-up in store)",
          threat: "Integration complexity",
        },
        {
          name: "Catalog Management",
          cr4: 44.0,
          probit: "LL",
          operatingMargin: 7.9,
          cagr: 11.2,
          cagrForward: 9.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Salsify",
              ticker: "SALSIFY",
              share: 15.0,
              strengths: [
                "PIM solution",
                "Marketplace sync",
              ],
            },
          ],
          features: [
            {
              title: "Product Information Management",
              description: "Centralized product data across channels",
            },
          ],
          opportunity: "AI-generated product descriptions",
          threat: "Content fragmentation",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Last-Mile Delivery",
          cr4: 58.0,
          probit: "LH",
          operatingMargin: 4.2,
          cagr: 27.6,
          cagrForward: 24.3,
          classificationCodes: [],
          leaders: [
            {
              name: "UPS",
              ticker: "UPS",
              share: 22.0,
              strengths: [
                "Network density",
                "Tracking",
              ],
            },
            {
              name: "FedEx",
              ticker: "FDX",
              share: 19.0,
              strengths: [
                "Express services",
                "Ground expansion",
              ],
            },
          ],
          features: [
            {
              title: "Route Optimization",
              description: "Dynamic routing with real-time ETAs",
            },
          ],
          opportunity: "Drone delivery pilots",
          threat: "Driver shortages and fuel costs",
        },
        {
          name: "3PL Fulfillment",
          cr4: 67.0,
          probit: "HL",
          operatingMargin: 13.7,
          cagr: 18.9,
          cagrForward: 16.2,
          classificationCodes: [],
          leaders: [
            {
              name: "ShipBob",
              ticker: "SHIPB",
              share: 24.0,
              strengths: [
                "SMB focus",
                "Tech platform",
              ],
            },
          ],
          features: [
            {
              title: "Distributed Fulfillment",
              description: "Multiple DC network for faster shipping",
            },
          ],
          opportunity: "E-commerce brand outsourcing",
          threat: "Capacity constraints",
        },
        {
          name: "Freight Forwarding Digital",
          cr4: 49.0,
          probit: "HH",
          operatingMargin: 19.4,
          cagr: 32.1,
          cagrForward: 28.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Flexport",
              ticker: "FLEX",
              share: 17.0,
              strengths: [
                "Ocean freight platform",
                "Visibility",
              ],
            },
          ],
          features: [
            {
              title: "Blockchain Tracking",
              description: "End-to-end supply chain transparency",
            },
          ],
          opportunity: "Nearshoring trends",
          threat: "Geopolitical disruptions",
          niche: {
            name: "Project44",
            ticker: "P44",
            share: 11.0,
            cagr: 41.5,
            margin: ">30%",
            strategy: "Supply chain visibility",
            valuation: "P/S 18x",
          },
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Marketplace Platforms",
          cr4: 82.0,
          probit: "HH",
          operatingMargin: 14.6,
          cagr: 26.3,
          cagrForward: 22.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon Marketplace",
              ticker: "AMZN",
              share: 48.0,
              strengths: [
                "Prime ecosystem",
                "FBA logistics",
              ],
            },
            {
              name: "Alibaba",
              ticker: "BABA",
              share: 21.0,
              strengths: [
                "Cross-border",
                "Taobao social",
              ],
            },
          ],
          features: [
            {
              title: "Sponsored Products",
              description: "Algorithmic ad placements driving conversions",
            },
          ],
          opportunity: "Social commerce integration",
          threat: "Antitrust regulations",
        },
        {
          name: "Search & Discovery",
          cr4: 71.0,
          probit: "HL",
          operatingMargin: 25.8,
          cagr: 13.7,
          cagrForward: 11.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Google Shopping",
              ticker: "GOOGL",
              share: 41.0,
              strengths: [
                "Search intent",
                "Free listings",
              ],
            },
          ],
          features: [
            {
              title: "Visual Search",
              description: "Image-based product discovery",
            },
          ],
          opportunity: "Voice commerce growth",
          threat: "Privacy changes affecting tracking",
        },
        {
          name: "Social Commerce",
          cr4: 66.0,
          probit: "LH",
          operatingMargin: 6.8,
          cagr: 39.2,
          cagrForward: 35.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Meta Shops",
              ticker: "META",
              share: 29.0,
              strengths: [
                "Influencer ecosystem",
                "Shop tabs",
              ],
            },
            {
              name: "TikTok Shop",
              ticker: "BTPTY",
              share: 24.0,
              strengths: [
                "Viral discovery",
                "Livestream sales",
              ],
            },
          ],
          features: [
            {
              title: "Shoppable Posts",
              description: "Seamless in-feed purchasing",
            },
          ],
          opportunity: "Gen Z spending shift",
          threat: "Platform algorithm changes",
        },
        {
          name: "D2C Platforms",
          cr4: 53.0,
          probit: "HH",
          operatingMargin: 17.3,
          cagr: 29.8,
          cagrForward: 25.1,
          classificationCodes: [],
          leaders: [
            {
              name: "BigCommerce",
              ticker: "BIGC",
              share: 19.0,
              strengths: [
                "Headless commerce",
                "B2B features",
              ],
            },
          ],
          features: [
            {
              title: "Subscription Commerce",
              description: "Recurring revenue models",
            },
          ],
          opportunity: "Brand-owned experiences",
          threat: "Customer acquisition costs",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Customer Service Software",
          cr4: 57.0,
          probit: "HH",
          operatingMargin: 21.4,
          cagr: 24.6,
          cagrForward: 20.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Zendesk",
              ticker: "ZEN",
              share: 23.0,
              strengths: [
                "Omnichannel support",
                "AI bots",
              ],
            },
            {
              name: "Intercom",
              ticker: "INTER",
              share: 18.0,
              strengths: [
                "Conversational messaging",
              ],
            },
          ],
          features: [
            {
              title: "Self-Service Portals",
              description: "Knowledge base and chat integration",
            },
          ],
          opportunity: "Proactive support with AI",
          threat: "Rising service expectations",
        },
        {
          name: "Personalization Engines",
          cr4: 64.0,
          probit: "LH",
          operatingMargin: 10.2,
          cagr: 33.1,
          cagrForward: 29.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Dynamic Yield (McDonald's)",
              ticker: "MCD",
              share: 27.0,
              strengths: [
                "Real-time personalization",
              ],
            },
          ],
          features: [
            {
              title: "Next-Best-Action",
              description: "ML-driven recommendations",
            },
          ],
          opportunity: "Hyper-personalized experiences",
          threat: "Data privacy backlash",
        },
        {
          name: "Loyalty & Retention Platforms",
          cr4: 49.0,
          probit: "HL",
          operatingMargin: 18.9,
          cagr: 15.8,
          cagrForward: 13.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Smile.io",
              ticker: "SMILE",
              share: 16.0,
              strengths: [
                "Rewards programs",
                "VIP tiers",
              ],
            },
          ],
          features: [
            {
              title: "Gamification",
              description: "Points, badges, and challenges",
            },
          ],
          opportunity: "Membership models like Amazon Prime",
          threat: "LTV:CAC ratio pressures",
          niche: {
            name: "Klaviyo",
            ticker: "KVYO",
            share: 14.0,
            cagr: 47.3,
            margin: "22%",
            strategy: "Marketing automation",
            valuation: "P/S 15x",
          },
        },
        {
          name: "Returns Management",
          cr4: 42.0,
          probit: "LL",
          operatingMargin: 5.6,
          cagr: 12.4,
          cagrForward: 10.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Returnly (Affirm)",
              ticker: "AFRM",
              share: 13.0,
              strengths: [
                "Instant refunds",
                "Exchange automation",
              ],
            },
          ],
          features: [
            {
              title: "Reverse Logistics",
              description: "Automated returns processing",
            },
          ],
          opportunity: "Resale and circular economy",
          threat: "High return rates in fashion",
        },
      ],
    },
  ],
};
