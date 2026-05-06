import type { ValueChain } from '../../types/valueChain';

export const a2_1020Data: ValueChain = {
  code: "A2-1020",
  name: "Periodicals",
  imCode: "A2-1020",
  classificationCode: "A2-1020",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Newsprint & Paper Supply",
          cr4: 68.0,
          probit: "LL",
          operatingMargin: 5.2,
          cagr: -3.1,
          cagrForward: -1.8,
          classificationCodes: [],
          leaders: [
            {
              name: "International Paper",
              ticker: "IP",
              share: 32.0,
              strengths: [
                "Scale in recycled paper",
                "Global supply network",
              ],
            },
            {
              name: "WestRock",
              ticker: "WRK",
              share: 18.0,
              strengths: [
                "Sustainable sourcing",
                "Cost-efficient production",
              ],
            },
          ],
          features: [
            {
              title: "Declining Demand",
              description: "Shift to digital reduces newsprint consumption by 15-20% annually",
            },
            {
              title: "Recycled Content",
              description: "80% of supply now recycled, lowering costs but raising quality challenges",
            },
          ],
          opportunity: "Export to emerging markets with print growth",
          threat: "Complete digitization eliminates paper needs",
        },
        {
          name: "Commercial Printing Inks",
          cr4: 72.0,
          probit: "HL",
          operatingMargin: 12.4,
          cagr: -2.5,
          cagrForward: 0.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Sun Chemical",
              ticker: "Private",
              share: 35.0,
              strengths: [
                "Soy-based inks",
                "High-volume contracts",
              ],
            },
            {
              name: " Flint Group",
              ticker: "Private",
              share: 22.0,
              strengths: [
                "Eco-friendly formulations",
                "Digital ink tech",
              ],
            },
          ],
          features: [
            {
              title: "Eco-Ink Transition",
              description: "Vegetable oil inks now 65% of market, premium pricing",
            },
          ],
          opportunity: "Specialty inks for magazines and packaging",
          threat: "Digital printing eliminates ink needs",
        },
        {
          name: "Content Syndication",
          cr4: 85.0,
          probit: "LH",
          operatingMargin: 8.1,
          cagr: 3.2,
          cagrForward: 6.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Associated Press",
              ticker: "Private",
              share: 42.0,
              strengths: [
                "Global wire service",
                "AI content tools",
              ],
            },
            {
              name: "Reuters",
              ticker: "TRI",
              share: 28.0,
              strengths: [
                "Real-time data",
                "Financial content",
              ],
            },
          ],
          features: [
            {
              title: "Digital Syndication",
              description: "APIs enable content reuse across platforms",
            },
          ],
          opportunity: "Licensing to digital publishers and newsletters",
          threat: "Generative AI content generators",
        },
        {
          name: "Freelance Journalism",
          cr4: 45.0,
          probit: "LL",
          operatingMargin: 2.8,
          cagr: 1.1,
          cagrForward: 2.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Contently",
              ticker: "Private",
              share: 15.0,
              strengths: [
                "Platform matching",
                "Brand content",
              ],
            },
          ],
          features: [
            {
              title: "Gig Economy Shift",
              description: "Platforms connect writers to periodical needs",
            },
          ],
          opportunity: "Niche investigative reporting",
          threat: "AI writing tools displace freelancers",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Editorial & Content Creation",
          cr4: 62.0,
          probit: "LH",
          operatingMargin: 6.7,
          cagr: 2.8,
          cagrForward: 5.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Condé Nast",
              ticker: "Private",
              share: 25.0,
              strengths: [
                "Premium brands",
                "Digital pivot",
              ],
            },
            {
              name: "Hearst Magazines",
              ticker: "Private",
              share: 20.0,
              strengths: [
                "Lifestyle content",
                "Events synergy",
              ],
            },
          ],
          features: [
            {
              title: "Multimedia Integration",
              description: "Articles bundled with video/podcasts for engagement",
            },
          ],
          opportunity: "Sponsored content and branded journalism",
          threat: "Free social media content competition",
          niche: {
            name: "The Atlantic",
            ticker: "Private",
            share: 8.0,
            cagr: 7.2,
            margin: ">15%",
            strategy: "Long-form digital subscriptions",
            valuation: "Private 10x revenue",
          },
        },
        {
          name: "Digital Content Management",
          cr4: 78.0,
          probit: "HH",
          operatingMargin: 22.3,
          cagr: 8.4,
          cagrForward: 10.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Arc Publishing",
              ticker: "WIX",
              share: 30.0,
              strengths: [
                "WordPress integration",
                "AI personalization",
              ],
            },
            {
              name: "WordPress VIP",
              ticker: "AUTC",
              share: 25.0,
              strengths: [
                "Enterprise CMS",
                "High traffic handling",
              ],
            },
          ],
          features: [
            {
              title: "Paywall Tech",
              description: "Dynamic metering converts 12% free readers",
            },
          ],
          opportunity: "Newsletter platform integrations",
          threat: "Open source alternatives",
        },
        {
          name: "Advertising Creative Production",
          cr4: 55.0,
          probit: "HL",
          operatingMargin: 14.2,
          cagr: -1.2,
          cagrForward: 3.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Dotdash Meredith Creative",
              ticker: "IAC",
              share: 22.0,
              strengths: [
                "Data-driven creatives",
                "Performance focus",
              ],
            },
          ],
          features: [
            {
              title: "Programmatic Creative",
              description: "AI generates ad variants for targeting",
            },
          ],
          opportunity: "Native advertising formats",
          threat: "Ad blocker proliferation",
        },
        {
          name: "Data Analytics for Content",
          cr4: 82.0,
          probit: "HH",
          operatingMargin: 28.5,
          cagr: 12.1,
          cagrForward: 14.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Chartbeat",
              ticker: "Private",
              share: 35.0,
              strengths: [
                "Real-time engagement",
                "Reader behavior",
              ],
            },
            {
              name: "Parse.ly",
              ticker: "Private",
              share: 28.0,
              strengths: [
                "SEO optimization",
                "Content performance",
              ],
            },
          ],
          features: [
            {
              title: "Engagement Metrics",
              description: "Time spent > pageviews for ranking algorithms",
            },
          ],
          opportunity: "Predictive content success modeling",
          threat: "Privacy regulations limit tracking",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Magazine Printing",
          cr4: 70.0,
          probit: "LL",
          operatingMargin: 3.4,
          cagr: -5.6,
          cagrForward: -2.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Quad/Graphics",
              ticker: "QUAD",
              share: 38.0,
              strengths: [
                "High-volume runs",
                "Catalog expertise",
              ],
            },
            {
              name: "LSC Communications",
              ticker: "Private",
              share: 22.0,
              strengths: [
                "Regional plants",
                "Bindery services",
              ],
            },
          ],
          features: [
            {
              title: "Short-Run Digital",
              description: "Reduces waste for smaller print runs",
            },
          ],
          opportunity: "Premium catalogs and direct mail",
          threat: "Print volume decline 8% YoY",
        },
        {
          name: "Newspaper Printing",
          cr4: 65.0,
          probit: "LL",
          operatingMargin: 1.9,
          cagr: -7.2,
          cagrForward: -4.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Gannett Printing",
              ticker: "GCI",
              share: 30.0,
              strengths: [
                "Regional hubs",
                "Color capabilities",
              ],
            },
          ],
          features: [
            {
              title: "Consolidation Wave",
              description: "Centralized plants serve multiple titles",
            },
          ],
          opportunity: "Commercial packaging print shift",
          threat: "Local paper closures",
        },
        {
          name: "Digital Publishing Platforms",
          cr4: 88.0,
          probit: "HH",
          operatingMargin: 31.7,
          cagr: 15.8,
          cagrForward: 18.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Substack",
              ticker: "Private",
              share: 40.0,
              strengths: [
                "Creator economy",
                "Direct subscriptions",
              ],
            },
            {
              name: "Ghost",
              ticker: "Private",
              share: 25.0,
              strengths: [
                "Open source",
                "Newsletter focus",
              ],
            },
          ],
          features: [
            {
              title: "Zero Marginal Cost",
              description: "Infinite scaling without print costs",
            },
          ],
          opportunity: "Institutional newsletter conversions",
          threat: "Platform dependency risks",
        },
        {
          name: "Bindery & Finishing",
          cr4: 58.0,
          probit: "LH",
          operatingMargin: 7.8,
          cagr: -1.8,
          cagrForward: 2.1,
          classificationCodes: [],
          leaders: [
            {
              name: "RR Donnelley Finishing",
              ticker: "RRD",
              share: 28.0,
              strengths: [
                "Saddle stitching",
                "Perfect binding",
              ],
            },
          ],
          features: [
            {
              title: "Automation",
              description: "Robotic insertion reduces labor 40%",
            },
          ],
          opportunity: "Luxury bookbinding crossover",
          threat: "Volume drop strains fixed costs",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Newsstand Wholesaling",
          cr4: 92.0,
          probit: "LL",
          operatingMargin: -2.1,
          cagr: -12.4,
          cagrForward: -8.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Ingram Publisher Services",
              ticker: "Private",
              share: 55.0,
              strengths: [
                "National reach",
                "Retail relationships",
              ],
            },
            {
              name: "American News Co",
              ticker: "Private",
              share: 28.0,
              strengths: [
                "Urban markets",
                "Impulse buys",
              ],
            },
          ],
          features: [
            {
              title: "Terminal Decline",
              description: "Newsstand sales <5% of total revenue",
            },
          ],
          opportunity: "Convenience store bundles",
          threat: "Retail closures accelerate",
        },
        {
          name: "Subscription Fulfillment",
          cr4: 75.0,
          probit: "HL",
          operatingMargin: 11.2,
          cagr: 1.5,
          cagrForward: 4.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Xpliant",
              ticker: "Private",
              share: 35.0,
              strengths: [
                "Cloud-based",
                "Multi-channel",
              ],
            },
            {
              name: "Palm Coast Data",
              ticker: "Private",
              share: 22.0,
              strengths: [
                "High-volume mailing",
                "Renewal expertise",
              ],
            },
          ],
          features: [
            {
              title: "Digital-First",
              description: "Email delivery >90% of fulfillment",
            },
          ],
          opportunity: "Bundled streaming services",
          threat: "Churn from content fatigue",
        },
        {
          name: "Digital Distribution Networks",
          cr4: 82.0,
          probit: "HH",
          operatingMargin: 26.8,
          cagr: 14.2,
          cagrForward: 16.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Apple News",
              ticker: "AAPL",
              share: 38.0,
              strengths: [
                "iOS integration",
                "Premium+ tier",
              ],
            },
            {
              name: "Google News",
              ticker: "GOOG",
              share: 28.0,
              strengths: [
                "Search traffic",
                "AMP pages",
              ],
            },
          ],
          features: [
            {
              title: "App Ecosystem",
              description: "Push notifications drive 40% opens",
            },
          ],
          opportunity: "Super app integrations",
          threat: "Apple privacy changes",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Print Advertising Sales",
          cr4: 68.0,
          probit: "LL",
          operatingMargin: -1.8,
          cagr: -9.3,
          cagrForward: -6.2,
          classificationCodes: [],
          leaders: [
            {
              name: "News Corp Ad Sales",
              ticker: "NWSA",
              share: 30.0,
              strengths: [
                "National brands",
                "Direct response",
              ],
            },
          ],
          features: [
            {
              title: "Clearinghouse Decline",
              description: "Full-page ads down 85% from peak",
            },
          ],
          opportunity: "Insert media packaging",
          threat: "Programmatic shift to digital",
        },
        {
          name: "Digital Display Advertising",
          cr4: 76.0,
          probit: "LH",
          operatingMargin: 9.4,
          cagr: 6.7,
          cagrForward: 9.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Dotdash Meredith",
              ticker: "IAC",
              share: 32.0,
              strengths: [
                "Premium inventory",
                "Header bidding",
              ],
            },
            {
              name: "BuzzFeed",
              ticker: "BZFD",
              share: 20.0,
              strengths: [
                "Social amplification",
                "Viral formats",
              ],
            },
          ],
          features: [
            {
              title: "CTV Expansion",
              description: "Connected TV ads grow 25% YoY",
            },
          ],
          opportunity: "Contextual targeting post-cookies",
          threat: "Ad fatigue and blockers",
        },
        {
          name: "Subscription Sales",
          cr4: 70.0,
          probit: "HL",
          operatingMargin: 18.6,
          cagr: 4.2,
          cagrForward: 7.8,
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
            {
              name: "Washington Post",
              ticker: "Private",
              share: 22.0,
              strengths: [
                "Arc XP tech",
                "3M+ subs",
              ],
            },
          ],
          features: [
            {
              title: "Metered Paywalls",
              description: "Dynamic pricing converts 15% free users",
            },
          ],
          opportunity: "Family plans and gifting",
          threat: "Bundling commoditization",
          niche: {
            name: "Financial Times",
            ticker: "Private",
            share: 12.0,
            cagr: 8.5,
            margin: ">25%",
            strategy: "Global business focus",
            valuation: "Private 12x revenue",
          },
        },
        {
          name: "Events & Experiences",
          cr4: 58.0,
          probit: "HH",
          operatingMargin: 24.1,
          cagr: 11.8,
          cagrForward: 13.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Vox Media Events",
              ticker: "Private",
              share: 25.0,
              strengths: [
                "Podcasts live",
                "Brand festivals",
              ],
            },
          ],
          features: [
            {
              title: "Hybrid Format",
              description: "Virtual tickets expand reach 5x",
            },
          ],
          opportunity: "Corporate sponsorships",
          threat: "Live event cancellations",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Individual Digital Subscribers",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 42.3,
          cagr: 7.6,
          cagrForward: 9.2,
          classificationCodes: [],
          leaders: [
            {
              name: "NYT Subscribers",
              ticker: "NYT",
              share: 35.0,
              strengths: [
                "Loyalty programs",
                "App engagement",
              ],
            },
          ],
          features: [
            {
              title: "Churn <8%",
              description: "Content quality drives retention",
            },
          ],
          opportunity: "Personalized content feeds",
          threat: "Time poverty competition",
        },
        {
          name: "Institutional/Library Access",
          cr4: 72.0,
          probit: "HH",
          operatingMargin: 55.7,
          cagr: 5.4,
          cagrForward: 6.8,
          classificationCodes: [],
          leaders: [
            {
              name: "EBSCO Information",
              ticker: "Private",
              share: 40.0,
              strengths: [
                "Academic databases",
                "Archival access",
              ],
            },
          ],
          features: [
            {
              title: "Perpetual Access",
              description: "Institutions buy permanent rights",
            },
          ],
          opportunity: "Corporate research licenses",
          threat: "Open access mandates",
        },
        {
          name: "Advertiser Clients",
          cr4: 68.0,
          probit: "LH",
          operatingMargin: 15.2,
          cagr: 3.9,
          cagrForward: 5.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Procter & Gamble Media",
              ticker: "PG",
              share: 18.0,
              strengths: [
                "Brand safety",
                "Premium placements",
              ],
            },
          ],
          features: [
            {
              title: "Performance Attribution",
              description: "Multi-touch models prove ROI",
            },
          ],
          opportunity: "Shoppable content commerce",
          threat: "Privacy-first advertising",
        },
        {
          name: "Bundled Service Consumers",
          cr4: 82.0,
          probit: "HH",
          operatingMargin: 38.4,
          cagr: 12.3,
          cagrForward: 14.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Apple One Bundle",
              ticker: "AAPL",
              share: 45.0,
              strengths: [
                "Ecosystem lock-in",
                "News+ aggregation",
              ],
            },
          ],
          features: [
            {
              title: "Low CAC",
              description: "Bundling acquires at 1/3 cost",
            },
          ],
          opportunity: "Telco media bundles",
          threat: "Cannibalization of direct subs",
        },
      ],
    },
  ],
};
