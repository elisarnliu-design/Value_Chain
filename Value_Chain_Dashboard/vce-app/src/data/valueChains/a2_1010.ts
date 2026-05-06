import type { ValueChain } from '../../types/valueChain';

export const a2_1010Data: ValueChain = {
  code: "A2-1010",
  name: "Newspapers",
  imCode: "A2-1010",
  classificationCode: "A2-1010",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Newsprint Production",
          cr4: 75.0,
          probit: "LL",
          operatingMargin: 5.2,
          cagr: -3.5,
          cagrForward: -2.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Resolute Forest Products",
              ticker: "RFP",
              share: 32.0,
              strengths: [
                "Largest North American newsprint producer",
                "Cost-efficient operations",
              ],
            },
            {
              name: "White Birch Paper",
              ticker: "",
              share: 22.0,
              strengths: [
                "Integrated pulp supply",
                "Export capabilities",
              ],
            },
          ],
          features: [
            {
              title: "Tariff Disruptions",
              description: "US tariffs on Canadian newsprint increase costs by 10-25%, straining supply chains",
            },
          ],
          opportunity: "Shift to recycled content reduces costs amid declining demand",
          threat: "Ongoing print decline accelerates mill closures",
        },
        {
          name: "Printing Inks",
          cr4: 68.0,
          probit: "LH",
          operatingMargin: 8.1,
          cagr: 1.2,
          cagrForward: 2.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Sun Chemical",
              ticker: "",
              share: 28.0,
              strengths: [
                "Global scale",
                "Eco-friendly ink innovations",
              ],
            },
          ],
          features: [
            {
              title: "Soy-based Inks",
              description: "Transition to sustainable inks driven by environmental regulations",
            },
          ],
          opportunity: "Demand for sustainable inks in hybrid print-digital models",
          threat: "Digital shift reduces overall ink consumption",
        },
        {
          name: "Pulp Supply",
          cr4: 82.0,
          probit: "LL",
          operatingMargin: 4.7,
          cagr: -4.2,
          cagrForward: -1.8,
          classificationCodes: [],
          leaders: [
            {
              name: "International Paper",
              ticker: "IP",
              share: 35.0,
              strengths: [
                "Diversified pulp portfolio",
                "Global sourcing",
              ],
            },
          ],
          features: [
            {
              title: "Supply Chain Tariffs",
              description: "10% surcharges on Chinese pulp imports raise input costs",
            },
          ],
          opportunity: "Export to emerging print markets like India",
          threat: "Global shift to digital erodes pulp demand",
        },
        {
          name: "Pre-press Equipment",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 12.4,
          cagr: -1.5,
          cagrForward: 1.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Heidelberg",
              ticker: "HDAGY",
              share: 25.0,
              strengths: [
                "Digital printing tech",
                "Service revenue",
              ],
            },
          ],
          features: [
            {
              title: "Digital Transition",
              description: "Equipment upgrades for shorter print runs",
            },
          ],
          opportunity: "Retrofits for hybrid print operations",
          threat: "Accelerated equipment obsolescence",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Content Creation",
          cr4: 45.0,
          probit: "LH",
          operatingMargin: 6.8,
          cagr: 2.1,
          cagrForward: 4.2,
          classificationCodes: [],
          leaders: [
            {
              name: "New York Times",
              ticker: "NYT",
              share: 18.0,
              strengths: [
                "Premium journalism",
                "Digital-first content",
              ],
            },
          ],
          features: [
            {
              title: "AI Content Tools",
              description: "AI-driven personalization and summarization",
            },
          ],
          opportunity: "Hyperlocal and investigative journalism subscriptions",
          threat: "AI content generators erode unique value",
          niche: {
            name: "ProPublica",
            ticker: "",
            share: 5.0,
            cagr: 12.5,
            margin: ">20%",
            strategy: "Nonprofit investigative reporting",
            valuation: "N/A",
          },
        },
        {
          name: "Editorial Services",
          cr4: 52.0,
          probit: "LL",
          operatingMargin: 3.2,
          cagr: -2.8,
          cagrForward: 1.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Gannett",
              ticker: "GCI",
              share: 22.0,
              strengths: [
                "Local news networks",
                "Syndication",
              ],
            },
          ],
          features: [
            {
              title: "Freelance Networks",
              description: "Cost reduction through contributor platforms",
            },
          ],
          opportunity: "Data-driven editorial analytics",
          threat: "Layoffs reduce editorial quality",
        },
        {
          name: "Digital Content Management",
          cr4: 70.0,
          probit: "HH",
          operatingMargin: 15.6,
          cagr: 5.4,
          cagrForward: 6.8,
          classificationCodes: [],
          leaders: [
            {
              name: "WordPress (Automattic)",
              ticker: "",
              share: 30.0,
              strengths: [
                "CMS dominance",
                "Plugin ecosystem",
              ],
            },
          ],
          features: [
            {
              title: "Paywall Tech",
              description: "Dynamic metering and personalization engines",
            },
          ],
          opportunity: "AI-powered content recommendations",
          threat: "Platform dependency risks",
        },
        {
          name: "Photography & Graphics",
          cr4: 40.0,
          probit: "LH",
          operatingMargin: 7.9,
          cagr: 3.2,
          cagrForward: 5.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Getty Images",
              ticker: "GETY",
              share: 28.0,
              strengths: [
                "Premium licensing",
                "AI search",
              ],
            },
          ],
          features: [
            {
              title: "Multimedia Integration",
              description: "Interactive graphics for digital formats",
            },
          ],
          opportunity: "Video and immersive content licensing",
          threat: "Stock photo AI generation",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Print Production",
          cr4: 60.0,
          probit: "LL",
          operatingMargin: 2.1,
          cagr: -6.2,
          cagrForward: -4.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Quad/Graphics",
              ticker: "QUAD",
              share: 25.0,
              strengths: [
                "Commercial printing scale",
                "Regional hubs",
              ],
            },
          ],
          features: [
            {
              title: "Declining Capacity",
              description: "Print plant closures reduce fixed costs",
            },
          ],
          opportunity: "Short-run specialty printing",
          threat: "Newsprint price volatility from tariffs",
        },
        {
          name: "Commercial Printing",
          cr4: 55.0,
          probit: "LH",
          operatingMargin: 5.8,
          cagr: -1.8,
          cagrForward: 1.9,
          classificationCodes: [],
          leaders: [
            {
              name: "RR Donnelley",
              ticker: "RRD",
              share: 20.0,
              strengths: [
                "Diversified clients",
                "Digital hybrid",
              ],
            },
          ],
          features: [
            {
              title: "Digital Offset",
              description: "Hybrid digital-print workflows",
            },
          ],
          opportunity: "Magazine and insert printing",
          threat: "Labor shortages in skilled printing",
        },
        {
          name: "Digital Publishing Platforms",
          cr4: 78.0,
          probit: "HH",
          operatingMargin: 18.2,
          cagr: 7.1,
          cagrForward: 8.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Adobe",
              ticker: "ADBE",
              share: 35.0,
              strengths: [
                "Creative Cloud suite",
                "PDF standards",
              ],
            },
          ],
          features: [
            {
              title: "App Publishing",
              description: "Native apps and PWAs for news delivery",
            },
          ],
          opportunity: "Interactive e-editions growth",
          threat: "Open-source alternatives",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Print Distribution",
          cr4: 85.0,
          probit: "LL",
          operatingMargin: 1.5,
          cagr: -5.8,
          cagrForward: -3.9,
          classificationCodes: [],
          leaders: [
            {
              name: "USPS",
              ticker: "",
              share: 45.0,
              strengths: [
                "Universal service obligation",
                "Rural reach",
              ],
            },
          ],
          features: [
            {
              title: "Postal Rate Hikes",
              description: "Increasing rates erode publisher margins",
            },
          ],
          opportunity: "Regional bundling partnerships",
          threat: "Private alternatives erode volumes",
        },
        {
          name: "Home Delivery",
          cr4: 72.0,
          probit: "LH",
          operatingMargin: 4.2,
          cagr: -4.1,
          cagrForward: -1.2,
          classificationCodes: [],
          leaders: [
            {
              name: "UPS",
              ticker: "UPS",
              share: 28.0,
              strengths: [
                "Logistics scale",
                "Tracking tech",
              ],
            },
          ],
          features: [
            {
              title: "Last-Mile Challenges",
              description: "Labor costs and route inefficiencies",
            },
          ],
          opportunity: "Shared delivery with e-commerce",
          threat: "Driver shortages",
        },
        {
          name: "Digital Distribution",
          cr4: 68.0,
          probit: "HH",
          operatingMargin: 22.4,
          cagr: 9.6,
          cagrForward: 10.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Apple News",
              ticker: "AAPL",
              share: 25.0,
              strengths: [
                "iOS integration",
                "Subscription aggregation",
              ],
            },
            {
              name: "Google News",
              ticker: "GOOG",
              share: 22.0,
              strengths: [
                "Search dominance",
                "AMP tech",
              ],
            },
          ],
          features: [
            {
              title: "App Store Fees",
              description: "30% platform commissions impact revenue",
            },
          ],
          opportunity: "Direct-to-consumer apps",
          threat: "Algorithm changes affect traffic",
        },
        {
          name: "Wholesale Distribution",
          cr4: 62.0,
          probit: "LL",
          operatingMargin: 2.8,
          cagr: -3.7,
          cagrForward: -2.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Anderson News",
              ticker: "",
              share: 30.0,
              strengths: [
                "Single-copy sales network",
                "Retail partnerships",
              ],
            },
          ],
          features: [
            {
              title: "Retail Shrinkage",
              description: "Declining newsstand sales volumes",
            },
          ],
          opportunity: "Convenience store bundles",
          threat: "Retail consolidation",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Advertising Sales",
          cr4: 48.0,
          probit: "LH",
          operatingMargin: 7.3,
          cagr: 1.8,
          cagrForward: 3.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Google Ad Manager",
              ticker: "GOOG",
              share: 32.0,
              strengths: [
                "Programmatic dominance",
                "Data targeting",
              ],
            },
          ],
          features: [
            {
              title: "Programmatic Shift",
              description: "Automated ad buying reduces direct sales",
            },
          ],
          opportunity: "Interactive digital ad formats",
          threat: "Big Tech platform competition",
        },
        {
          name: "Subscription Sales",
          cr4: 55.0,
          probit: "HH",
          operatingMargin: 24.1,
          cagr: 6.7,
          cagrForward: 7.9,
          classificationCodes: [],
          leaders: [
            {
              name: "New York Times",
              ticker: "NYT",
              share: 20.0,
              strengths: [
                "Bundled digital subs",
                "Loyal subscriber base",
              ],
            },
          ],
          features: [
            {
              title: "Bundling Strategy",
              description: "News + podcasts + games packages",
            },
          ],
          opportunity: "AI-personalized subscription offers",
          threat: "Churn from content fatigue",
        },
        {
          name: "Print Circulation Sales",
          cr4: 70.0,
          probit: "LL",
          operatingMargin: -1.2,
          cagr: -7.4,
          cagrForward: -5.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Gannett",
              ticker: "GCI",
              share: 28.0,
              strengths: [
                "Local monopoly",
                "Home delivery",
              ],
            },
          ],
          features: [
            {
              title: "Volume Decline",
              description: "One-third newspaper closures since 2005",
            },
          ],
          opportunity: "Premium weekend editions",
          threat: "Demographic aging",
        },
        {
          name: "Events & Diversification",
          cr4: 35.0,
          probit: "LH",
          operatingMargin: 12.5,
          cagr: 8.2,
          cagrForward: 9.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Washington Post",
              ticker: "N/A",
              share: 15.0,
              strengths: [
                "Live events",
                "Newsletter networks",
              ],
            },
          ],
          features: [
            {
              title: "Revenue Diversification",
              description: "Conferences, merchandise, branded content",
            },
          ],
          opportunity: "Corporate training content",
          threat: "Event cancellations impact",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Digital Subscribers",
          cr4: 60.0,
          probit: "HH",
          operatingMargin: 28.7,
          cagr: 8.9,
          cagrForward: 9.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Millennials/Gen Z Readers",
              ticker: "",
              share: 35.0,
              strengths: [
                "Mobile-first",
                "Paying for quality",
              ],
            },
          ],
          features: [
            {
              title: "Personalization Demand",
              description: "AI-curated feeds increase engagement",
            },
          ],
          opportunity: "Cross-platform bundles with streaming",
          threat: "Free social media alternatives",
        },
        {
          name: "Print Loyalists",
          cr4: 75.0,
          probit: "LL",
          operatingMargin: 5.4,
          cagr: -6.8,
          cagrForward: -5.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Seniors 65+",
              ticker: "",
              share: 42.0,
              strengths: [
                "Habit loyalty",
                "Higher LTV",
              ],
            },
          ],
          features: [
            {
              title: "Aging Demographic",
              description: "Declining cohort size limits growth",
            },
          ],
          opportunity: "Hybrid print-digital packages",
          threat: "Mobility and vision challenges",
        },
        {
          name: "Advertisers",
          cr4: 50.0,
          probit: "LH",
          operatingMargin: 9.2,
          cagr: 2.4,
          cagrForward: 4.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Local Retailers",
              ticker: "",
              share: 25.0,
              strengths: [
                "Community targeting",
                "ROI measurement",
              ],
            },
          ],
          features: [
            {
              title: "Performance Marketing",
              description: "Attribution tools prove local ad value",
            },
          ],
          opportunity: "Programmatic local targeting",
          threat: "Digital ad platform fragmentation",
        },
        {
          name: "Institutional Buyers",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 15.8,
          cagr: 1.2,
          cagrForward: 2.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Libraries/Education",
              ticker: "",
              share: 30.0,
              strengths: [
                "Bulk licensing",
                "Archival value",
              ],
            },
          ],
          features: [
            {
              title: "Digital Archives",
              description: "Licensed content databases",
            },
          ],
          opportunity: "EdTech content partnerships",
          threat: "Budget constraints",
        },
      ],
    },
  ],
};
