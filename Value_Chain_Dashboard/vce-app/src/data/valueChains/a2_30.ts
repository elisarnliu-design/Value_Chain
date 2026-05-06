import type { ValueChain } from '../../types/valueChain';

export const a2_30Data: ValueChain = {
  code: "A2-30",
  name: "Broadcast Media industry (IM A2-30; sector A2 — Mind)",
  imCode: "A2-30",
  classificationCode: "A2-30",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Content Creation & Scripting",
          cr4: 65.0,
          probit: "LH",
          operatingMargin: 12.3,
          cagr: 6.2,
          cagrForward: 7.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Walt Disney",
              ticker: "DIS",
              share: 22.0,
              strengths: [
                "IP portfolio",
                "Talent network",
              ],
            },
            {
              name: "Warner Bros. Discovery",
              ticker: "WBD",
              share: 18.0,
              strengths: [
                "Script libraries",
                "Franchise development",
              ],
            },
          ],
          features: [
            {
              title: "Idea Generation",
              description: "Authors and screenwriters develop concepts for TV programs and films.",
            },
          ],
          opportunity: "Rise of global formats and IP licensing across borders.",
          threat: "AI-generated content disrupting traditional scripting.",
        },
        {
          name: "Talent & Crew Supply",
          cr4: 55.0,
          probit: "LL",
          operatingMargin: 8.7,
          cagr: 3.1,
          cagrForward: 2.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Central Casting",
              ticker: "Private",
              share: 25.0,
              strengths: [
                "Scale",
                "Diversity sourcing",
              ],
            },
          ],
          features: [
            {
              title: "Crew Provision",
              description: "Supplies actors, directors, crew for production.",
            },
          ],
          opportunity: "Demand for diverse talent in streaming era.",
          threat: "Gig economy reducing agency leverage.",
        },
        {
          name: "Production Equipment & Facilities",
          cr4: 72.0,
          probit: "HL",
          operatingMargin: 15.4,
          cagr: 2.8,
          cagrForward: 3.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Panavision",
              ticker: "Private",
              share: 30.0,
              strengths: [
                "Camera tech",
                "Rental model",
              ],
            },
          ],
          features: [
            {
              title: "Kit Hire",
              description: "Rental of cameras, lights, props, and special effects equipment.",
            },
          ],
          opportunity: "Virtual production studios growth.",
          threat: "Shift to remote production tech.",
          niche: {
            name: "ARRI",
            ticker: "Private",
            share: 12.0,
            cagr: 4.2,
            margin: ">20%",
            strategy: "Premium optics innovation",
            valuation: "P/E 35x",
          },
        },
        {
          name: "Music & Sound Licensing",
          cr4: 68.0,
          probit: "HH",
          operatingMargin: 22.1,
          cagr: 5.5,
          cagrForward: 6.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Universal Music Group",
              ticker: "UMG",
              share: 28.0,
              strengths: [
                "Catalog depth",
                "Sync licensing",
              ],
            },
          ],
          features: [
            {
              title: "Sync Rights",
              description: "Licensing music for broadcast use.",
            },
          ],
          opportunity: "Expansion into ad and streaming soundtracks.",
          threat: "Royalty rate pressures from streamers.",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Content Production",
          cr4: 70.0,
          probit: "LH",
          operatingMargin: 11.2,
          cagr: 7.4,
          cagrForward: 8.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Netflix",
              ticker: "NFLX",
              share: 24.0,
              strengths: [
                "Originals scale",
                "Global production",
              ],
            },
            {
              name: "Disney",
              ticker: "DIS",
              share: 20.0,
              strengths: [
                "Studio infrastructure",
                "Franchise synergy",
              ],
            },
          ],
          features: [
            {
              title: "Program Production",
              description: "Filming and creating finished TV content and formats.",
            },
          ],
          opportunity: "Co-productions for international markets.",
          threat: "Rising production costs due to strikes.",
        },
        {
          name: "Post-Production & Editing",
          cr4: 62.0,
          probit: "HL",
          operatingMargin: 16.8,
          cagr: 4.1,
          cagrForward: 4.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Technicolor",
              ticker: "TCH",
              share: 26.0,
              strengths: [
                "VFX expertise",
                "Global facilities",
              ],
            },
          ],
          features: [
            {
              title: "Editing Services",
              description: "Visual effects, sound mixing, color grading.",
            },
          ],
          opportunity: "AI-assisted editing tools adoption.",
          threat: "Outsourcing to lower-cost regions.",
        },
        {
          name: "Outside Broadcast (OB)",
          cr4: 78.0,
          probit: "LL",
          operatingMargin: 9.5,
          cagr: 2.2,
          cagrForward: 1.8,
          classificationCodes: [],
          leaders: [
            {
              name: "NEP Group",
              ticker: "Private",
              share: 35.0,
              strengths: [
                "Live event trucks",
                "Remote production",
              ],
            },
          ],
          features: [
            {
              title: "Live Transmission",
              description: "Mobile units for sports and events.",
            },
          ],
          opportunity: "Remote OB tech for cost savings.",
          threat: "Decline in live TV events.",
        },
        {
          name: "Media Asset Management",
          cr4: 60.0,
          probit: "LH",
          operatingMargin: 13.6,
          cagr: 6.7,
          cagrForward: 7.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Avid Technology",
              ticker: "AVID",
              share: 23.0,
              strengths: [
                "Archive software",
                "Cloud integration",
              ],
            },
          ],
          features: [
            {
              title: "Archive Systems",
              description: "Digital storage and retrieval of content.",
            },
          ],
          opportunity: "Cloud migration for legacy archives.",
          threat: "Data security breaches.",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Program Packaging",
          cr4: 75.0,
          probit: "HL",
          operatingMargin: 14.9,
          cagr: 3.8,
          cagrForward: 4.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Warner Bros. Television",
              ticker: "WBD",
              share: 27.0,
              strengths: [
                "Syndication rights",
                "Packaging expertise",
              ],
            },
          ],
          features: [
            {
              title: "Content Bundling",
              description: "Assembling episodes into seasons or formats for sale.",
            },
          ],
          opportunity: "Format adaptation for emerging markets.",
          threat: "Piracy eroding packaged content value.",
        },
        {
          name: "Format Development",
          cr4: 82.0,
          probit: "HH",
          operatingMargin: 19.2,
          cagr: 8.1,
          cagrForward: 9.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Fremantle",
              ticker: "Private",
              share: 32.0,
              strengths: [
                "Global hits like Idol",
                "IP export",
              ],
            },
          ],
          features: [
            {
              title: "TV Formats",
              description: "Creating exportable show blueprints.",
            },
          ],
          opportunity: "Reality TV boom in Asia.",
          threat: "Saturation of format markets.",
        },
        {
          name: "Sports Rights Acquisition",
          cr4: 88.0,
          probit: "LH",
          operatingMargin: 10.5,
          cagr: 5.9,
          cagrForward: 6.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Fox Corp",
              ticker: "FOX",
              share: 29.0,
              strengths: [
                "NFL rights",
                "Live sports portfolio",
              ],
            },
          ],
          features: [
            {
              title: "Rights Packaging",
              description: "Bundling live sports for broadcast.",
            },
          ],
          opportunity: "Women's sports rights inflation.",
          threat: "Direct-to-consumer league streaming.",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Content Distribution Networks",
          cr4: 85.0,
          probit: "HH",
          operatingMargin: 25.6,
          cagr: 12.3,
          cagrForward: 13.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Akamai",
              ticker: "AKAM",
              share: 31.0,
              strengths: [
                "Global CDN",
                "Low latency",
              ],
            },
            {
              name: "Cloudflare",
              ticker: "NET",
              share: 22.0,
              strengths: [
                "Edge computing",
                "Security",
              ],
            },
          ],
          features: [
            {
              title: "Signal Delivery",
              description: "High-speed content delivery to broadcasters.",
            },
          ],
          opportunity: "5G-enhanced streaming distribution.",
          threat: "Network congestion from OTT surge.",
        },
        {
          name: "Satellite & Transmission",
          cr4: 70.0,
          probit: "HL",
          operatingMargin: 18.7,
          cagr: 1.9,
          cagrForward: 1.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Intelsat",
              ticker: "Private",
              share: 28.0,
              strengths: [
                "Orbital capacity",
                "Live relay",
              ],
            },
          ],
          features: [
            {
              title: "Uplink Services",
              description: "Satellite transmission for global reach.",
            },
          ],
          opportunity: "Direct-to-home satellite revival.",
          threat: "Fiber and wireless alternatives.",
        },
        {
          name: "Pay-TV Wholesale",
          cr4: 92.0,
          probit: "LL",
          operatingMargin: 7.2,
          cagr: -2.1,
          cagrForward: -1.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Comcast",
              ticker: "CMCSA",
              share: 38.0,
              strengths: [
                "Cable networks",
                "Affiliate fees",
              ],
            },
          ],
          features: [
            {
              title: "Channel Carriage",
              description: "Wholesaling channels to MVPDs.",
            },
          ],
          opportunity: "Virtual MVPD pivots.",
          threat: "Cord-cutting acceleration.",
        },
        {
          name: "OTT Platform Delivery",
          cr4: 78.0,
          probit: "LH",
          operatingMargin: 12.8,
          cagr: 9.5,
          cagrForward: 10.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon",
              ticker: "AMZN",
              share: 26.0,
              strengths: [
                "AWS integration",
                "Prime ecosystem",
              ],
            },
          ],
          features: [
            {
              title: "App Distribution",
              description: "Delivering via streaming apps.",
            },
          ],
          opportunity: "Ad-supported tiers growth.",
          threat: "Platform fee increases.",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Content Aggregation",
          cr4: 80.0,
          probit: "LH",
          operatingMargin: 13.4,
          cagr: 6.8,
          cagrForward: 7.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Disney",
              ticker: "DIS",
              share: 29.0,
              strengths: [
                "Bundled channels",
                "Hulu integration",
              ],
            },
            {
              name: "Paramount Global",
              ticker: "PARA",
              share: 19.0,
              strengths: [
                "CBS network",
                "Showtime premium",
              ],
            },
          ],
          features: [
            {
              title: "Channel Packaging",
              description: "Aggregating content for pay-TV and OTT.",
            },
          ],
          opportunity: "Skinny bundles and vMVPDs.",
          threat: "A la carte channel demands.",
        },
        {
          name: "Advertising Sales",
          cr4: 75.0,
          probit: "LL",
          operatingMargin: 9.1,
          cagr: 2.4,
          cagrForward: 3.2,
          classificationCodes: [],
          leaders: [
            {
              name: "GroupM",
              ticker: "Private",
              share: 27.0,
              strengths: [
                "Data-driven buys",
                "Global scale",
              ],
            },
          ],
          features: [
            {
              title: "AVOD Monetization",
              description: "Selling ad inventory on broadcast.",
            },
          ],
          opportunity: "Connected TV addressable ads.",
          threat: "Shift to digital ad platforms.",
        },
        {
          name: "Syndication & Licensing",
          cr4: 68.0,
          probit: "HL",
          operatingMargin: 17.3,
          cagr: 4.2,
          cagrForward: 4.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Sony Pictures TV",
              ticker: "SONY",
              share: 24.0,
              strengths: [
                "Off-network sales",
                "International licensing",
              ],
            },
          ],
          features: [
            {
              title: "Rights Sales",
              description: "Licensing content globally.",
            },
          ],
          opportunity: "AVOD window expansion.",
          threat: "Streaming exclusivity wars.",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Free-to-Air Broadcasting",
          cr4: 72.0,
          probit: "LL",
          operatingMargin: 8.9,
          cagr: 1.5,
          cagrForward: 1.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Fox Corp",
              ticker: "FOX",
              share: 26.0,
              strengths: [
                "Local stations",
                "News dominance",
              ],
            },
          ],
          features: [
            {
              title: "Over-the-Air",
              description: "Ad-supported linear TV to households.",
            },
          ],
          opportunity: "ATSC 3.0 next-gen broadcast.",
          threat: "Fragmented viewership.",
        },
        {
          name: "Pay-TV & Cable",
          cr4: 90.0,
          probit: "LL",
          operatingMargin: 6.4,
          cagr: -3.2,
          cagrForward: -2.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Comcast",
              ticker: "CMCSA",
              share: 42.0,
              strengths: [
                "Subscriber base",
                "Broadband bundle",
              ],
            },
          ],
          features: [
            {
              title: "MVPD Services",
              description: "Bundled channel delivery to homes.",
            },
          ],
          opportunity: "Hybrid fiber-wireless delivery.",
          threat: "Massive cord-cutting.",
        },
        {
          name: "OTT Streaming Platforms",
          cr4: 76.0,
          probit: "HH",
          operatingMargin: 21.7,
          cagr: 14.2,
          cagrForward: 15.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Netflix",
              ticker: "NFLX",
              share: 28.0,
              strengths: [
                "Global subs",
                "Original content",
              ],
            },
            {
              name: "Disney+",
              ticker: "DIS",
              share: 20.0,
              strengths: [
                "Family IP",
                "Bundle potential",
              ],
            },
          ],
          features: [
            {
              title: "SVOD/AVOD",
              description: "Direct-to-consumer streaming apps.",
            },
          ],
          opportunity: "Live content integration.",
          threat: "Subscriber fatigue and churn.",
          niche: {
            name: "YouTube",
            ticker: "GOOG",
            share: 15.0,
            cagr: 18.5,
            margin: ">25%",
            strategy: "UGC + premium shift",
            valuation: "P/E 50x",
          },
        },
      ],
    },
  ],
};
