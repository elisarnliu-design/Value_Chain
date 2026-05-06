import type { ValueChain } from '../../types/valueChain';

export const a2_5030Data: ValueChain = {
  code: "A2-5030",
  name: "Music Publishing",
  imCode: "A2-5030",
  classificationCode: "A2-5030",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Songwriting & Composition",
          cr4: 65.0,
          probit: "LH",
          operatingMargin: 12.3,
          cagr: 4.1,
          cagrForward: 6.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Sony Music Publishing",
              ticker: "SONY",
              share: 25.0,
              strengths: [
                "Largest catalog",
                "Global songwriter network",
              ],
            },
            {
              name: "Universal Music Publishing",
              ticker: "UMG.AS",
              share: 22.0,
              strengths: [
                "Hit-making expertise",
                "Artist development",
              ],
            },
            {
              name: "Warner Chappell Music",
              ticker: "WMG",
              share: 18.0,
              strengths: [
                "Diverse genre coverage",
                "Sync licensing",
              ],
            },
          ],
          features: [
            {
              title: "Talent Scouting",
              description: "Identification and signing of emerging songwriters through demos and networks.",
            },
            {
              title: "Collaboration Platforms",
              description: "Facilitating co-writing sessions to generate commercial compositions.",
            },
          ],
          opportunity: "Rise of independent songwriters via social media platforms accelerating new IP creation.",
          threat: "AI-generated music diluting originality and value of human compositions.",
        },
        {
          name: "Lyricists & Producers",
          cr4: 55.0,
          probit: "LL",
          operatingMargin: 8.7,
          cagr: 3.2,
          cagrForward: 4.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Hipgnosis Songs Fund",
              ticker: "SONG",
              share: 15.0,
              strengths: [
                "Catalog acquisition focus",
                "Data-driven investments",
              ],
            },
          ],
          features: [
            {
              title: "Demo Production",
              description: "Creating initial recordings to pitch compositions to artists.",
            },
          ],
          opportunity: "Demand for genre-specific lyrics in emerging markets like K-pop and Afrobeats.",
          threat: "Freelance platforms commoditizing lyricist services.",
        },
        {
          name: "Legal & Contract Services",
          cr4: 70.0,
          probit: "HL",
          operatingMargin: 22.1,
          cagr: 2.8,
          cagrForward: 3.5,
          classificationCodes: [],
          leaders: [
            {
              name: "BMG Rights Management",
              ticker: "BMG",
              share: 28.0,
              strengths: [
                "Transparent contracting",
                "Creator-friendly terms",
              ],
            },
          ],
          features: [
            {
              title: "IP Assignment",
              description: "Drafting agreements transferring rights from creators to publishers.",
            },
          ],
          opportunity: "Blockchain for smart contracts streamlining rights transfer.",
          threat: "Regulatory changes in copyright laws impacting deal structures.",
          niche: {
            name: "Round Hill Music",
            ticker: "RHM",
            share: 4.0,
            cagr: 7.2,
            margin: ">25%",
            strategy: "Niche country music catalogs",
            valuation: "P/E 32x",
          },
        },
        {
          name: "Talent Agencies",
          cr4: 60.0,
          probit: "LH",
          operatingMargin: 14.2,
          cagr: 5.1,
          cagrForward: 7.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Kobalt Music",
              ticker: "KOB",
              share: 20.0,
              strengths: [
                "Creator-centric model",
                "Global reach",
              ],
            },
          ],
          features: [
            {
              title: "Artist-Songwriter Matching",
              description: "Pairing composers with recording artists for hit potential.",
            },
          ],
          opportunity: "Expansion into video game soundtracks and metaverse.",
          threat: "Direct-to-fan platforms bypassing traditional agencies.",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Copyright Registration",
          cr4: 80.0,
          probit: "HH",
          operatingMargin: 25.4,
          cagr: 3.9,
          cagrForward: 5.8,
          classificationCodes: [],
          leaders: [
            {
              name: "ASCAP",
              ticker: "N/A",
              share: 35.0,
              strengths: [
                "PRO leadership",
                "Real-time tracking",
              ],
            },
            {
              name: "BMI",
              ticker: "N/A",
              share: 30.0,
              strengths: [
                "Largest repertoire",
                "Tech investments",
              ],
            },
          ],
          features: [
            {
              title: "PRO Registration",
              description: "Enrolling works with performing rights organizations for royalty tracking.",
            },
          ],
          opportunity: "AI analytics for precise performance attribution.",
          threat: "Global harmonization challenges in multi-territory registration.",
        },
        {
          name: "Royalty Administration",
          cr4: 75.0,
          probit: "HL",
          operatingMargin: 19.8,
          cagr: 4.2,
          cagrForward: 4.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Songtrust",
              ticker: "N/A",
              share: 18.0,
              strengths: [
                "Indie-focused",
                "Low fees",
              ],
            },
          ],
          features: [
            {
              title: "Mechanical Rights",
              description: "Managing reproduction royalties for recordings.",
            },
          ],
          opportunity: "Micro-royalty distribution via blockchain.",
          threat: "Low per-stream rates compressing admin margins.",
        },
        {
          name: "Catalog Acquisition",
          cr4: 68.0,
          probit: "LH",
          operatingMargin: 16.5,
          cagr: 6.3,
          cagrForward: 8.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Hipgnosis",
              ticker: "HYGGF",
              share: 24.0,
              strengths: [
                "Aggressive buying",
                "Data science",
              ],
            },
          ],
          features: [
            {
              title: "Portfolio Building",
              description: "Purchasing existing song catalogs for passive income.",
            },
          ],
          opportunity: "Aging baby boomer catalogs coming to market.",
          threat: "Rising valuations reducing bargain acquisitions.",
          niche: {
            name: "Primary Wave",
            ticker: "N/A",
            share: 6.0,
            cagr: 9.5,
            margin: "22%",
            strategy: "Equity partnerships with artists",
            valuation: "EV/EBITDA 18x",
          },
        },
        {
          name: "Sync Licensing Prep",
          cr4: 62.0,
          probit: "HH",
          operatingMargin: 23.7,
          cagr: 5.4,
          cagrForward: 7.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Pulse Music Group",
              ticker: "N/A",
              share: 16.0,
              strengths: [
                "TV/film specialization",
                "Quick turnaround",
              ],
            },
          ],
          features: [
            {
              title: "Pitching Reels",
              description: "Curating tracks for media supervisor briefs.",
            },
          ],
          opportunity: "Boom in short-form video content like TikTok and Reels.",
          threat: "User-generated content flooding sync opportunities.",
        },
        {
          name: "Data Analytics",
          cr4: 72.0,
          probit: "LH",
          operatingMargin: 18.9,
          cagr: 7.8,
          cagrForward: 9.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Music Reports",
              ticker: "N/A",
              share: 28.0,
              strengths: [
                "Big data processing",
                "DSP integrations",
              ],
            },
          ],
          features: [
            {
              title: "Usage Tracking",
              description: "Monitoring streams, downloads, and public performances.",
            },
          ],
          opportunity: "Predictive analytics for hit potential.",
          threat: "Privacy regulations limiting data access.",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Licensing Negotiation",
          cr4: 70.0,
          probit: "HH",
          operatingMargin: 27.6,
          cagr: 4.5,
          cagrForward: 6.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Universal Music Publishing",
              ticker: "UMG.AS",
              share: 26.0,
              strengths: [
                "Major label leverage",
                "Global sync teams",
              ],
            },
          ],
          features: [
            {
              title: "Sync Deals",
              description: "Negotiating placements in films, TV, ads, and games.",
            },
          ],
          opportunity: "Gaming industry explosion creating new licensing revenue.",
          threat: "Ad market volatility impacting sync budgets.",
        },
        {
          name: "Performance Rights Clearance",
          cr4: 82.0,
          probit: "HL",
          operatingMargin: 21.4,
          cagr: 3.1,
          cagrForward: 4.0,
          classificationCodes: [],
          leaders: [
            {
              name: "SESAC",
              ticker: "N/A",
              share: 22.0,
              strengths: [
                "Premium repertoire",
                "Fast clearances",
              ],
            },
          ],
          features: [
            {
              title: "Live Venue Licensing",
              description: "Blanket licenses for concerts and public performances.",
            },
          ],
          opportunity: "Live music resurgence post-pandemic.",
          threat: "Free public performances eroding collections.",
        },
        {
          name: "Mechanical Licensing",
          cr4: 78.0,
          probit: "LH",
          operatingMargin: 15.2,
          cagr: 5.7,
          cagrForward: 7.4,
          classificationCodes: [],
          leaders: [
            {
              name: "The MLC (Mechanical Licensing Collective)",
              ticker: "N/A",
              share: 40.0,
              strengths: [
                "Streaming mandated",
                "Centralized pool",
              ],
            },
          ],
          features: [
            {
              title: "Streaming Royalties",
              description: "Collecting mechanicals from DSPs like Spotify.",
            },
          ],
          opportunity: "Blanket licensing simplifying admin for publishers.",
          threat: "Rate disputes with streaming platforms.",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "PRO Collections",
          cr4: 85.0,
          probit: "HH",
          operatingMargin: 28.3,
          cagr: 4.8,
          cagrForward: 5.9,
          classificationCodes: [],
          leaders: [
            {
              name: "PRS for Music",
              ticker: "N/A",
              share: 32.0,
              strengths: [
                "International reciprocity",
                "Live monitoring",
              ],
            },
          ],
          features: [
            {
              title: "Global Royalty Flows",
              description: "Territorial collections via reciprocal agreements.",
            },
          ],
          opportunity: "Real-time international royalty matching.",
          threat: "Currency fluctuations and withholding taxes.",
        },
        {
          name: "DSP Royalty Distribution",
          cr4: 76.0,
          probit: "HL",
          operatingMargin: 20.1,
          cagr: 6.2,
          cagrForward: 7.8,
          classificationCodes: [],
          leaders: [
            {
              name: "SoundExchange",
              ticker: "N/A",
              share: 45.0,
              strengths: [
                "Digital performance rights",
                "Non-interactive webcasting",
              ],
            },
          ],
          features: [
            {
              title: "Streaming Payouts",
              description: "Distributing shares from Spotify, Apple Music royalties.",
            },
          ],
          opportunity: "User-centric payment models emerging.",
          threat: "Pro-rata vs. stream-share debates.",
        },
        {
          name: "International Sub-Publishing",
          cr4: 69.0,
          probit: "LH",
          operatingMargin: 17.8,
          cagr: 5.9,
          cagrForward: 8.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Peermusic",
              ticker: "N/A",
              share: 19.0,
              strengths: [
                "Local market expertise",
                "Emerging territory focus",
              ],
            },
          ],
          features: [
            {
              title: "Territory Administration",
              description: "Local affiliates handling foreign collections.",
            },
          ],
          opportunity: "Growth in Asia and Latin America streaming.",
          threat: "Local protectionism in royalty societies.",
          niche: {
            name: "Bug Music",
            ticker: "N/A",
            share: 3.0,
            cagr: 10.1,
            margin: ">30%",
            strategy: "Asia-Pacific expansion",
            valuation: "P/E 28x",
          },
        },
        {
          name: "Print & Sheet Music",
          cr4: 58.0,
          probit: "LL",
          operatingMargin: 9.4,
          cagr: 1.8,
          cagrForward: 2.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Hal Leonard",
              ticker: "N/A",
              share: 25.0,
              strengths: [
                "Educational market dominance",
                "Digital scores",
              ],
            },
          ],
          features: [
            {
              title: "Digital Sheet Music",
              description: "On-demand notation licensing for educators.",
            },
          ],
          opportunity: "Remote learning driving digital scores.",
          threat: "Free user-generated transcriptions.",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Sync Licensing Sales",
          cr4: 72.0,
          probit: "HH",
          operatingMargin: 29.5,
          cagr: 7.1,
          cagrForward: 8.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Warner Chappell",
              ticker: "WMG",
              share: 23.0,
              strengths: [
                "Hollywood relationships",
                "Brand partnerships",
              ],
            },
          ],
          features: [
            {
              title: "Media Placements",
              description: "Securing high-value sync deals for commercials and trailers.",
            },
          ],
          opportunity: "OTT platforms like Netflix expanding original content.",
          threat: "In-house music creation by media companies.",
        },
        {
          name: "Grand Rights",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 24.2,
          cagr: 3.4,
          cagrForward: 4.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Samuel French",
              ticker: "N/A",
              share: 28.0,
              strengths: [
                "Theatrical catalog",
                "Broadway licensing",
              ],
            },
          ],
          features: [
            {
              title: "Stage Productions",
              description: "Licensing for musicals, operas, and theater.",
            },
          ],
          opportunity: "Jukebox musicals revival.",
          threat: "Decline in regional theater funding.",
        },
        {
          name: "Sampling Clearances",
          cr4: 81.0,
          probit: "LH",
          operatingMargin: 19.3,
          cagr: 6.8,
          cagrForward: 9.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Sony Music Publishing",
              ticker: "SONY",
              share: 30.0,
              strengths: [
                "Hip-hop dominance",
                "Sample database",
              ],
            },
          ],
          features: [
            {
              title: "Hip-Hop Samples",
              description: "Approvals for interpolations and direct samples.",
            },
          ],
          opportunity: "Viral TikTok samples driving retro catalog value.",
          threat: "AI deepfakes mimicking samples.",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Streaming Platforms",
          cr4: 88.0,
          probit: "HH",
          operatingMargin: 15.6,
          cagr: 12.4,
          cagrForward: 10.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Spotify",
              ticker: "SPOT",
              share: 38.0,
              strengths: [
                "Global scale",
                "Personalization algorithms",
              ],
            },
            {
              name: "Apple Music",
              ticker: "AAPL",
              share: 25.0,
              strengths: [
                "Premium audio",
                "Device integration",
              ],
            },
          ],
          features: [
            {
              title: "Publishing Royalties",
              description: "Performance and mechanical payments to publishers.",
            },
          ],
          opportunity: "Hi-fi audio tier expansion.",
          threat: "Subscription fatigue and price sensitivity.",
        },
        {
          name: "Media Production",
          cr4: 67.0,
          probit: "HL",
          operatingMargin: 22.7,
          cagr: 4.3,
          cagrForward: 5.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Netflix",
              ticker: "NFLX",
              share: 20.0,
              strengths: [
                "Original series boom",
                "Global content",
              ],
            },
          ],
          features: [
            {
              title: "Sync Usage",
              description: "Music supervision for shows and films.",
            },
          ],
          opportunity: "Interactive content and virtual production.",
          threat: "Budget cuts in advertising-supported streaming.",
        },
        {
          name: "Live Events",
          cr4: 74.0,
          probit: "LH",
          operatingMargin: 18.9,
          cagr: 8.7,
          cagrForward: 9.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Live Nation",
              ticker: "LYV",
              share: 35.0,
              strengths: [
                "Concert promotion",
                "Festival networks",
              ],
            },
          ],
          features: [
            {
              title: "Performance Royalties",
              description: "PRO collections from ticketed events.",
            },
          ],
          opportunity: "Metaverse concerts and hybrid experiences.",
          threat: "Weather and economic sensitivity.",
        },
        {
          name: "Consumer Brands",
          cr4: 59.0,
          probit: "LL",
          operatingMargin: 12.4,
          cagr: 3.6,
          cagrForward: 4.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Procter & Gamble",
              ticker: "PG",
              share: 15.0,
              strengths: [
                "Global ad spend",
                "Emotional storytelling",
              ],
            },
          ],
          features: [
            {
              title: "Commercial Licensing",
              description: "Music for TV spots and digital campaigns.",
            },
          ],
          opportunity: "Social commerce integration.",
          threat: "Programmatic ad buying reducing music budgets.",
        },
      ],
    },
  ],
};
