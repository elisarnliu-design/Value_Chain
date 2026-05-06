import type { ValueChain } from '../../types/valueChain';

export const a2_2010Data: ValueChain = {
  code: "A2-2010",
  name: "Internet Contents, Information & Delivery Services",
  imCode: "A2-2010",
  classificationCode: "A2-2010",
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
                "Scale economies",
                "Global data centers",
              ],
            },
            {
              name: "Microsoft Azure",
              ticker: "MSFT",
              share: 22.0,
              strengths: [
                "Enterprise integration",
                "AI capabilities",
              ],
            },
          ],
          features: [
            {
              title: "Scalable Compute",
              description: "On-demand virtual servers and storage for content hosting",
            },
            {
              title: "CDN Integration",
              description: "Global edge caching for low-latency delivery",
            },
          ],
          opportunity: "AI workload surge driving hyperscaler demand",
          threat: "Regulatory scrutiny on data sovereignty",
        },
        {
          name: "Content Licensing Agencies",
          cr4: 45.0,
          probit: "HL",
          operatingMargin: 15.2,
          cagr: 6.8,
          cagrForward: 4.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Disney",
              ticker: "DIS",
              share: 18.0,
              strengths: [
                "Premium IP portfolio",
                "Global licensing network",
              ],
            },
          ],
          features: [
            {
              title: "Rights Management",
              description: "Negotiation and clearance of multimedia rights",
            },
          ],
          opportunity: "Rise of regional content localization",
          threat: "AI-generated content disrupting licensing models",
        },
        {
          name: "Data Center Hardware Suppliers",
          cr4: 82.0,
          probit: "LH",
          operatingMargin: 12.1,
          cagr: 15.3,
          cagrForward: 12.7,
          classificationCodes: [],
          leaders: [
            {
              name: "NVIDIA",
              ticker: "NVDA",
              share: 45.0,
              strengths: [
                "GPU dominance for AI",
                "Custom silicon",
              ],
            },
            {
              name: "Dell Technologies",
              ticker: "DELL",
              share: 20.0,
              strengths: [
                "Server customization",
                "Rack integration",
              ],
            },
          ],
          features: [
            {
              title: "High-Density Servers",
              description: "Power-efficient racks for content processing",
            },
          ],
          opportunity: "Edge computing expansion",
          threat: "Supply chain chip shortages",
          niche: {
            name: "Super Micro Computer",
            ticker: "SMCI",
            share: 8.0,
            cagr: 35.2,
            margin: ">25%",
            strategy: "AI-optimized servers",
            valuation: "P/E 120x",
          },
        },
        {
          name: "Telecom Backbone Providers",
          cr4: 55.0,
          probit: "LL",
          operatingMargin: 8.7,
          cagr: 3.2,
          cagrForward: 2.9,
          classificationCodes: [],
          leaders: [
            {
              name: "AT&T",
              ticker: "T",
              share: 15.0,
              strengths: [
                "Fiber optic networks",
                "Wholesale capacity",
              ],
            },
          ],
          features: [
            {
              title: "Subsea Cables",
              description: "International bandwidth connectivity",
            },
          ],
          opportunity: "5G backhaul upgrade cycle",
          threat: "Satellite internet competition",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Content Creation Studios",
          cr4: 38.0,
          probit: "LH",
          operatingMargin: 9.4,
          cagr: 12.6,
          cagrForward: 14.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Netflix Originals",
              ticker: "NFLX",
              share: 12.0,
              strengths: [
                "Data-driven production",
                "Global scale",
              ],
            },
          ],
          features: [
            {
              title: "Script to Screen",
              description: "End-to-end production pipeline",
            },
          ],
          opportunity: "Short-form video explosion",
          threat: "Talent cost inflation",
        },
        {
          name: "Data Processing Services",
          cr4: 72.0,
          probit: "HH",
          operatingMargin: 32.1,
          cagr: 25.7,
          cagrForward: 22.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Google Cloud AI",
              ticker: "GOOGL",
              share: 28.0,
              strengths: [
                "ML frameworks",
                "TPU acceleration",
              ],
            },
          ],
          features: [
            {
              title: "Real-time Analytics",
              description: "User behavior processing at scale",
            },
          ],
          opportunity: "Generative AI content personalization",
          threat: "Privacy regulation limits",
        },
        {
          name: "Encoding and Transcoding",
          cr4: 60.0,
          probit: "HL",
          operatingMargin: 18.9,
          cagr: 8.5,
          cagrForward: 7.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Brightcove",
              ticker: "BCOV",
              share: 22.0,
              strengths: [
                "Adaptive bitrate",
                "Multi-device optimization",
              ],
            },
          ],
          features: [
            {
              title: "Format Conversion",
              description: "HLS/DASH streaming preparation",
            },
          ],
          opportunity: "8K video adoption",
          threat: "Open-source compression alternatives",
        },
        {
          name: "User-Generated Content Platforms",
          cr4: 92.0,
          probit: "LH",
          operatingMargin: 11.2,
          cagr: 28.4,
          cagrForward: 24.1,
          classificationCodes: [],
          leaders: [
            {
              name: "TikTok",
              ticker: "BABA",
              share: 55.0,
              strengths: [
                "Algorithmic discovery",
                "Creator economy",
              ],
            },
          ],
          features: [
            {
              title: "Moderation AI",
              description: "Automated content filtering",
            },
          ],
          opportunity: "Live commerce integration",
          threat: "Regulatory content bans",
        },
        {
          name: "Metadata Tagging Services",
          cr4: 50.0,
          probit: "LL",
          operatingMargin: 6.8,
          cagr: 5.1,
          cagrForward: 4.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Gracenote",
              ticker: "NEXN",
              share: 25.0,
              strengths: [
                "Music recognition",
                "TV metadata",
              ],
            },
          ],
          features: [
            {
              title: "Semantic Tagging",
              description: "AI-enhanced search optimization",
            },
          ],
          opportunity: "Voice search expansion",
          threat: "Blockchain provenance alternatives",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Streaming Platform Development",
          cr4: 85.0,
          probit: "HH",
          operatingMargin: 26.7,
          cagr: 19.8,
          cagrForward: 16.5,
          classificationCodes: [],
          leaders: [
            {
              name: "YouTube",
              ticker: "GOOGL",
              share: 42.0,
              strengths: [
                "Monetization tools",
                "Developer ecosystem",
              ],
            },
            {
              name: "Netflix Platform",
              ticker: "NFLX",
              share: 25.0,
              strengths: [
                "Personalization engine",
                "Global UI",
              ],
            },
          ],
          features: [
            {
              title: "Player SDKs",
              description: "Cross-device playback frameworks",
            },
          ],
          opportunity: "Interactive streaming features",
          threat: "Open web standards disruption",
        },
        {
          name: "Content Delivery Networks",
          cr4: 68.0,
          probit: "HL",
          operatingMargin: 21.4,
          cagr: 14.2,
          cagrForward: 11.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Cloudflare",
              ticker: "NET",
              share: 28.0,
              strengths: [
                "Zero trust security",
                "Edge computing",
              ],
            },
            {
              name: "Akamai",
              ticker: "AKAM",
              share: 20.0,
              strengths: [
                "Media optimization",
                "DDoS protection",
              ],
            },
          ],
          features: [
            {
              title: "Edge Caching",
              description: "Geographically distributed content replication",
            },
          ],
          opportunity: "Gaming streaming growth",
          threat: "Peer-to-peer delivery tech",
          niche: {
            name: "Fastly",
            ticker: "FSLY",
            share: 7.0,
            cagr: 32.1,
            margin: "15-20%",
            strategy: "Real-time edge compute",
            valuation: "P/S 8x",
          },
        },
        {
          name: "Recommendation Engines",
          cr4: 78.0,
          probit: "HH",
          operatingMargin: 34.2,
          cagr: 27.6,
          cagrForward: 23.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon Personalize",
              ticker: "AMZN",
              share: 35.0,
              strengths: [
                "Real-time learning",
                "Multi-touchpoint",
              ],
            },
          ],
          features: [
            {
              title: "Collaborative Filtering",
              description: "User-content matching algorithms",
            },
          ],
          opportunity: "Federated learning privacy tech",
          threat: "Regulation on algorithmic bias",
        },
        {
          name: "Ad Tech Platforms",
          cr4: 70.0,
          probit: "LH",
          operatingMargin: 13.8,
          cagr: 18.9,
          cagrForward: 15.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Google Ads",
              ticker: "GOOGL",
              share: 38.0,
              strengths: [
                "Auction dynamics",
                "Performance tracking",
              ],
            },
          ],
          features: [
            {
              title: "Programmatic Buying",
              description: "Automated ad inventory trading",
            },
          ],
          opportunity: "Connected TV advertising",
          threat: "Privacy sandbox changes",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "App Stores and Gateways",
          cr4: 95.0,
          probit: "HH",
          operatingMargin: 38.6,
          cagr: 16.2,
          cagrForward: 13.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Apple App Store",
              ticker: "AAPL",
              share: 55.0,
              strengths: [
                "Premium user base",
                "In-app purchases",
              ],
            },
            {
              name: "Google Play",
              ticker: "GOOGL",
              share: 35.0,
              strengths: [
                "Android fragmentation handling",
                "Global reach",
              ],
            },
          ],
          features: [
            {
              title: "Discovery Algorithms",
              description: "App ranking and featured placement",
            },
          ],
          opportunity: "Alternative app stores growth",
          threat: "EU DMA regulation",
        },
        {
          name: "OTT Aggregators",
          cr4: 62.0,
          probit: "HL",
          operatingMargin: 17.3,
          cagr: 9.4,
          cagrForward: 8.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Roku",
              ticker: "ROKU",
              share: 25.0,
              strengths: [
                "Platform neutrality",
                "Ad inventory",
              ],
            },
          ],
          features: [
            {
              title: "Channel Bundling",
              description: "Multi-service content integration",
            },
          ],
          opportunity: "Super app convergence",
          threat: "Native device apps dominance",
        },
        {
          name: "ISP Content Delivery",
          cr4: 48.0,
          probit: "LL",
          operatingMargin: 7.9,
          cagr: 4.7,
          cagrForward: 3.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Comcast Xfinity",
              ticker: "CMCSA",
              share: 18.0,
              strengths: [
                "Cached local delivery",
                "Bundled services",
              ],
            },
          ],
          features: [
            {
              title: "Managed Networks",
              description: "QoS prioritized streaming",
            },
          ],
          opportunity: "Fixed wireless access",
          threat: "Net neutrality erosion",
        },
        {
          name: "Smart TV Platforms",
          cr4: 75.0,
          probit: "LH",
          operatingMargin: 10.5,
          cagr: 20.1,
          cagrForward: 17.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Samsung Tizen",
              ticker: "005930.KS",
              share: 30.0,
              strengths: [
                "Premium screen integration",
                "Voice control",
              ],
            },
          ],
          features: [
            {
              title: "Home Screen Real Estate",
              description: "Prime content placement",
            },
          ],
          opportunity: "Gaming console convergence",
          threat: "Roku/Fire TV dominance",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Subscription Management",
          cr4: 82.0,
          probit: "HH",
          operatingMargin: 29.4,
          cagr: 21.3,
          cagrForward: 18.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Apple Subscriptions",
              ticker: "AAPL",
              share: 40.0,
              strengths: [
                "Frictionless billing",
                "Family sharing",
              ],
            },
          ],
          features: [
            {
              title: "Recurring Revenue",
              description: "Automated renewal systems",
            },
          ],
          opportunity: "Bundled service packages",
          threat: "Subscription fatigue",
        },
        {
          name: "Digital Advertising Sales",
          cr4: 88.0,
          probit: "HL",
          operatingMargin: 24.7,
          cagr: 11.8,
          cagrForward: 10.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Meta Platforms",
              ticker: "META",
              share: 45.0,
              strengths: [
                "Social targeting",
                "Performance creative",
              ],
            },
          ],
          features: [
            {
              title: "Audience Segmentation",
              description: "Demographic and behavioral targeting",
            },
          ],
          opportunity: "Retail media networks",
          threat: "Cookie deprecation",
        },
        {
          name: "Affiliate Marketing Networks",
          cr4: 55.0,
          probit: "LH",
          operatingMargin: 12.6,
          cagr: 16.4,
          cagrForward: 14.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon Associates",
              ticker: "AMZN",
              share: 28.0,
              strengths: [
                "Conversion tracking",
                "Creator programs",
              ],
            },
          ],
          features: [
            {
              title: "Performance Marketing",
              description: "Commission-based referrals",
            },
          ],
          opportunity: "Influencer commerce",
          threat: "Brand safety concerns",
        },
        {
          name: "Enterprise Licensing",
          cr4: 40.0,
          probit: "LL",
          operatingMargin: 9.2,
          cagr: 6.5,
          cagrForward: 5.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Bloomberg",
              ticker: "BLK",
              share: 15.0,
              strengths: [
                "B2B data feeds",
                "Custom integrations",
              ],
            },
          ],
          features: [
            {
              title: "API Access",
              description: "Programmatic content syndication",
            },
          ],
          opportunity: "Vertical SaaS embedding",
          threat: "Open data alternatives",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Customer Data Platforms",
          cr4: 65.0,
          probit: "HH",
          operatingMargin: 27.8,
          cagr: 23.1,
          cagrForward: 20.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Salesforce",
              ticker: "CRM",
              share: 25.0,
              strengths: [
                "360-degree profiles",
                "Journey orchestration",
              ],
            },
          ],
          features: [
            {
              title: "Identity Resolution",
              description: "Cross-device user stitching",
            },
          ],
          opportunity: "Zero-party data collection",
          threat: "GDPR enforcement expansion",
        },
        {
          name: "Retention Analytics",
          cr4: 58.0,
          probit: "HL",
          operatingMargin: 19.5,
          cagr: 10.7,
          cagrForward: 9.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Amplitude",
              ticker: "AMPL",
              share: 22.0,
              strengths: [
                "Behavioral cohorts",
                "Churn prediction",
              ],
            },
          ],
          features: [
            {
              title: "Engagement Scoring",
              description: "Predictive lifetime value modeling",
            },
          ],
          opportunity: "Personalized re-engagement",
          threat: "Economic downturn churn",
        },
        {
          name: "Helpdesk Automation",
          cr4: 70.0,
          probit: "LH",
          operatingMargin: 14.2,
          cagr: 17.9,
          cagrForward: 15.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Zendesk",
              ticker: "ZEN",
              share: 30.0,
              strengths: [
                "Omnichannel support",
                "AI chatbots",
              ],
            },
          ],
          features: [
            {
              title: "Self-Service Portals",
              description: "Knowledge base integration",
            },
          ],
          opportunity: "Proactive issue resolution",
          threat: "Generative AI disruption",
        },
        {
          name: "Community Management",
          cr4: 45.0,
          probit: "LL",
          operatingMargin: 8.3,
          cagr: 7.2,
          cagrForward: 6.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Discord",
              ticker: "DIS",
              share: 18.0,
              strengths: [
                "Real-time engagement",
                "Server economies",
              ],
            },
          ],
          features: [
            {
              title: "UGC Moderation",
              description: "Community guideline enforcement",
            },
          ],
          opportunity: "Creator-fan monetization",
          threat: "Toxicity management costs",
          niche: {
            name: "Discourse",
            ticker: null,
            share: 5.0,
            cagr: 25.4,
            margin: ">30%",
            strategy: "Open-source forums",
            valuation: "Private",
          },
        },
      ],
    },
  ],
};
