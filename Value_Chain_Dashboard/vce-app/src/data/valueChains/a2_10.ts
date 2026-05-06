import type { ValueChain } from '../../types/valueChain';

export const a2_10Data: ValueChain = {
  code: "A2-10",
  name: "Print Media & Publishing industry (IM A2-10; sector A2 — Mind)",
  imCode: "A2-10",
  classificationCode: "A2-10",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Paper & Pulp Manufacturing",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 12.5,
          cagr: 2.1,
          cagrForward: 3.8,
          classificationCodes: [],
          leaders: [
            {
              name: "International Paper Company",
              ticker: "IP",
              share: 28.0,
              strengths: [
                "Global scale",
                "Diversified packaging",
              ],
            },
            {
              name: "WestRock Company",
              ticker: "WRK",
              share: 22.0,
              strengths: [
                "Integrated operations",
                "Sustainability focus",
              ],
            },
          ],
          features: [
            {
              title: "Shift to Packaging",
              description: "Pulp industry prioritizes packaging over printing paper due to higher margins and e-commerce demand",
            },
          ],
          opportunity: "Rising packaging demand offsets declining print paper needs",
          threat: "Declining newspaper/magazine paper consumption",
        },
        {
          name: "Printing Inks & Chemicals",
          cr4: 72.0,
          probit: "LH",
          operatingMargin: 8.2,
          cagr: 1.5,
          cagrForward: 2.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Sun Chemical",
              ticker: "private",
              share: 35.0,
              strengths: [
                "Market leadership",
                "Eco-friendly inks",
              ],
            },
          ],
          features: [
            {
              title: "Inkjet Advancements",
              description: "Shift to digital inkjet reduces minimum print runs from 1000 to 100 copies",
            },
          ],
          opportunity: "Growth in short-run and on-demand printing",
          threat: "Digital media substitution",
        },
        {
          name: "Printing Presses & Equipment",
          cr4: 85.0,
          probit: "LL",
          operatingMargin: 6.8,
          cagr: -1.2,
          cagrForward: 0.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Heidelberg",
              ticker: "private",
              share: 40.0,
              strengths: [
                "Digital press innovation",
                "Service revenue",
              ],
            },
            {
              name: "Konica Minolta",
              ticker: "4902",
              share: 25.0,
              strengths: [
                "Industrial printing",
                "Automation",
              ],
            },
          ],
          features: [
            {
              title: "Digital Transition",
              description: "Offset to digital press shift enables print-on-demand capabilities",
            },
          ],
          opportunity: "Equipment upgrades for shorter runs",
          threat: "Declining print volumes",
        },
        {
          name: "Content Licensing & Rights",
          cr4: 55.0,
          probit: "HH",
          operatingMargin: 22.4,
          cagr: 4.2,
          cagrForward: 6.1,
          classificationCodes: [],
          leaders: [
            {
              name: "News Corp",
              ticker: "NWSA",
              share: 18.0,
              strengths: [
                "Premium content",
                "Global rights",
              ],
            },
          ],
          features: [
            {
              title: "IP Monetization",
              description: "Licensing archives and content rights across print/digital",
            },
          ],
          opportunity: "Cross-platform content licensing",
          threat: "AI content generation competition",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Content Creation & Editing",
          cr4: 45.0,
          probit: "LH",
          operatingMargin: 9.3,
          cagr: 3.8,
          cagrForward: 5.4,
          classificationCodes: [],
          leaders: [
            {
              name: "New York Times",
              ticker: "NYT",
              share: 15.0,
              strengths: [
                "Journalism excellence",
                "Digital pivot",
              ],
            },
          ],
          features: [
            {
              title: "Editorial Quality",
              description: "Focus on relevance and engagement drives subscriber growth",
            },
          ],
          opportunity: "Premium journalism subscription model",
          threat: "Freelance talent competition",
        },
        {
          name: "Pre-Press & Design",
          cr4: 60.0,
          probit: "HL",
          operatingMargin: 15.7,
          cagr: 1.9,
          cagrForward: 2.3,
          classificationCodes: [],
          leaders: [
            {
              name: "RR Donnelley",
              ticker: "RRD",
              share: 20.0,
              strengths: [
                "Workflow automation",
                "Scale efficiencies",
              ],
            },
          ],
          features: [
            {
              title: "Digital Workflows",
              description: "Automated pre-press reduces costs and time-to-market",
            },
          ],
          opportunity: "Serving commercial print diversification",
          threat: "In-house design by publishers",
        },
        {
          name: "Digital Publishing Preparation",
          cr4: 50.0,
          probit: "HH",
          operatingMargin: 18.9,
          cagr: 6.5,
          cagrForward: 8.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon",
              ticker: "AMZN",
              share: 30.0,
              strengths: [
                "KDP platform",
                "eBook dominance",
              ],
            },
          ],
          features: [
            {
              title: "Format Conversion",
              description: "ePub, PDF, app formats with A/B testing optimization",
            },
          ],
          opportunity: "Hybrid print-digital content pipelines",
          threat: "Format standardization battles",
          niche: {
            name: "Draft2Digital",
            ticker: "private",
            share: 8.0,
            cagr: 12.5,
            margin: ">25%",
            strategy: "Indie author aggregation",
            valuation: "P/S 15x",
          },
        },
        {
          name: "Proofing & Quality Control",
          cr4: 68.0,
          probit: "LL",
          operatingMargin: 7.1,
          cagr: 0.8,
          cagrForward: 1.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Quad/Graphics",
              ticker: "QUAD",
              share: 25.0,
              strengths: [
                "Integrated services",
                "Cost controls",
              ],
            },
          ],
          features: [
            {
              title: "Digital Proofing",
              description: "Soft proofing reduces physical waste and cycle times",
            },
          ],
          opportunity: "Automation in color management",
          threat: "Digital-only workflows",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Newspaper Printing",
          cr4: 70.0,
          probit: "LL",
          operatingMargin: 4.2,
          cagr: -3.1,
          cagrForward: -1.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Gannett",
              ticker: "GCI",
              share: 32.0,
              strengths: [
                "Regional dominance",
                "Shared services",
              ],
            },
          ],
          features: [
            {
              title: "Volume Decline",
              description: "Revenue declining due to digital substitution",
            },
          ],
          opportunity: "Commercial print diversification",
          threat: "Circulation collapse",
        },
        {
          name: "Book Printing",
          cr4: 55.0,
          probit: "LH",
          operatingMargin: 8.6,
          cagr: 1.2,
          cagrForward: 3.4,
          classificationCodes: [],
          leaders: [
            {
              name: "RR Donnelley",
              ticker: "RRD",
              share: 18.0,
              strengths: [
                "Scale",
                "On-demand capability",
              ],
            },
          ],
          features: [
            {
              title: "Print-on-Demand",
              description: "Single-copy printing via global printer networks",
            },
          ],
          opportunity: "POD growth for backlist titles",
          threat: "Ebook cannibalization",
        },
        {
          name: "Magazine & Catalog Printing",
          cr4: 62.0,
          probit: "LL",
          operatingMargin: 5.9,
          cagr: -2.8,
          cagrForward: -0.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Quad/Graphics",
              ticker: "QUAD",
              share: 28.0,
              strengths: [
                "Retail inserts",
                "Marketing services",
              ],
            },
          ],
          features: [
            {
              title: "Short Runs",
              description: "Inkjet enables economic 100-copy minimums",
            },
          ],
          opportunity: "Direct mail resurgence",
          threat: "Digital advertising shift",
        },
        {
          name: "Commercial Printing",
          cr4: 48.0,
          probit: "HL",
          operatingMargin: 11.4,
          cagr: 0.9,
          cagrForward: 2.1,
          classificationCodes: [],
          leaders: [
            {
              name: "LSC Communications",
              ticker: "private",
              share: 15.0,
              strengths: [
                "Diversified clients",
                "Digital hybrid",
              ],
            },
          ],
          features: [
            {
              title: "Packaging Growth",
              description: "E-commerce drives labels and packaging demand",
            },
          ],
          opportunity: "Labels and packaging expansion",
          threat: "Labor shortages",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Wholesale Distribution",
          cr4: 75.0,
          probit: "LH",
          operatingMargin: 7.8,
          cagr: 2.4,
          cagrForward: 4.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Ingram Content Group",
              ticker: "private",
              share: 45.0,
              strengths: [
                "Lightning Source POD",
                "Global reach",
              ],
            },
            {
              name: "Baker & Taylor",
              ticker: "private",
              share: 20.0,
              strengths: [
                "Library market",
                "Accelerated delivery",
              ],
            },
          ],
          features: [
            {
              title: "POD Integration",
              description: "Print-on-demand reduces inventory risk",
            },
          ],
          opportunity: "Digital-physical hybrid logistics",
          threat: "Direct-to-consumer shipping",
        },
        {
          name: "Newsstand Distribution",
          cr4: 88.0,
          probit: "LL",
          operatingMargin: 2.1,
          cagr: -5.6,
          cagrForward: -3.2,
          classificationCodes: [],
          leaders: [
            {
              name: "ANConnect",
              ticker: "private",
              share: 60.0,
              strengths: [
                "Legacy network",
                "Data analytics",
              ],
            },
          ],
          features: [
            {
              title: "Terminal Decline",
              description: "Magazine sales down 80% since peak",
            },
          ],
          opportunity: "Premium/specialty titles",
          threat: "Retail footprint contraction",
        },
        {
          name: "Direct Mail & Fulfillment",
          cr4: 52.0,
          probit: "HH",
          operatingMargin: 14.3,
          cagr: 5.2,
          cagrForward: 6.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Quad/Graphics",
              ticker: "QUAD",
              share: 22.0,
              strengths: [
                "Integrated print-mail",
                "Data targeting",
              ],
            },
          ],
          features: [
            {
              title: "Targeted Marketing",
              description: "Personalization drives response rates",
            },
          ],
          opportunity: "E-commerce return mailings",
          threat: "Privacy regulations",
          niche: {
            name: "Quad",
            ticker: "QUAD",
            share: 22.0,
            cagr: 7.1,
            margin: "15%",
            strategy: "Marketing services pivot",
            valuation: "P/E 12x",
          },
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Book Retail",
          cr4: 68.0,
          probit: "LH",
          operatingMargin: 6.5,
          cagr: 3.1,
          cagrForward: 4.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Barnes & Noble",
              ticker: "BNED",
              share: 25.0,
              strengths: [
                "Physical experience",
                "Events",
              ],
            },
          ],
          features: [
            {
              title: "Independent Growth",
              description: "1,000+ new indie bookstores since 2010",
            },
          ],
          opportunity: "Experiential retail",
          threat: "Amazon dominance",
        },
        {
          name: "Advertising Sales",
          cr4: 42.0,
          probit: "LL",
          operatingMargin: 3.8,
          cagr: -4.2,
          cagrForward: -1.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Gannett",
              ticker: "GCI",
              share: 12.0,
              strengths: [
                "Local markets",
                "Digital transition",
              ],
            },
          ],
          features: [
            {
              title: "Digital Shift",
              description: "Print ad revenue down 70% since 2006",
            },
          ],
          opportunity: "Programmatic local digital",
          threat: "Google/FB duopoly",
        },
        {
          name: "Subscription Sales",
          cr4: 58.0,
          probit: "HH",
          operatingMargin: 21.6,
          cagr: 7.8,
          cagrForward: 9.3,
          classificationCodes: [],
          leaders: [
            {
              name: "New York Times",
              ticker: "NYT",
              share: 28.0,
              strengths: [
                "Bundling strategy",
                "9M+ digital subs",
              ],
            },
          ],
          features: [
            {
              title: "Digital-First",
              description: "Paywalls drive 70% revenue from subscriptions",
            },
          ],
          opportunity: "News + audio/video bundles",
          threat: "Content fatigue",
        },
        {
          name: "Events & Licensing",
          cr4: 35.0,
          probit: "HL",
          operatingMargin: 19.2,
          cagr: 8.4,
          cagrForward: 7.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Hearst",
              ticker: "private",
              share: 15.0,
              strengths: [
                "Brand extensions",
                "Live events",
              ],
            },
          ],
          features: [
            {
              title: "Diversification",
              description: "Live events compensate print revenue loss",
            },
          ],
          opportunity: "Brand experience economy",
          threat: "Live event disruptions",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Individual Subscribers",
          cr4: 0.0,
          probit: "LH",
          operatingMargin: 0.0,
          cagr: 4.6,
          cagrForward: 6.2,
          classificationCodes: [],
          leaders: [],
          features: [
            {
              title: "Digital Loyalty",
              description: "Younger readers prefer app/web over print",
            },
          ],
          opportunity: "Personalized content feeds",
          threat: "Free news abundance",
        },
        {
          name: "Institutional Buyers",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 0.0,
          cagr: 1.8,
          cagrForward: 2.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Libraries",
              ticker: "N/A",
              share: 40.0,
              strengths: [
                "Bulk purchasing",
                "Long-term contracts",
              ],
            },
          ],
          features: [
            {
              title: "Budget Pressures",
              description: "Public institutions face funding cuts",
            },
          ],
          opportunity: "Digital access licensing",
          threat: "Open access movements",
        },
        {
          name: "Advertiser Clients",
          cr4: 48.0,
          probit: "LL",
          operatingMargin: 0.0,
          cagr: -2.3,
          cagrForward: 0.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Local Businesses",
              ticker: "N/A",
              share: 35.0,
              strengths: [
                "Community targeting",
                "ROI measurement",
              ],
            },
          ],
          features: [
            {
              title: "Performance Focus",
              description: "ROI-driven budgets favor digital",
            },
          ],
          opportunity: "Omnichannel campaigns",
          threat: "Measurement gaps",
        },
        {
          name: "Educational Institutions",
          cr4: 72.0,
          probit: "LH",
          operatingMargin: 0.0,
          cagr: 3.5,
          cagrForward: 5.1,
          classificationCodes: [],
          leaders: [
            {
              name: "K-12 Schools",
              ticker: "N/A",
              share: 45.0,
              strengths: [
                "Curriculum mandates",
                "Bulk textbook buys",
              ],
            },
          ],
          features: [
            {
              title: "Hybrid Learning",
              description: "Print textbooks persist alongside digital",
            },
          ],
          opportunity: "Supplemental print materials",
          threat: "EdTech disruption",
        },
      ],
    },
  ],
};
