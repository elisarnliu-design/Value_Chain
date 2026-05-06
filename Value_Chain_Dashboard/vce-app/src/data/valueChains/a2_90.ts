import type { ValueChain } from '../../types/valueChain';

export const a2_90Data: ValueChain = {
  code: "A2-90",
  name: "Interactive Media & Online Gaming industry (IM A2-90; sector A2 — Mind)",
  imCode: "A2-90",
  classificationCode: "A2-90",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Cloud Infrastructure & Hosting",
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
              share: 32.0,
              strengths: [
                "Scalable cloud for game hosting",
                "Low latency global data centers",
              ],
            },
            {
              name: "Microsoft Azure",
              ticker: "MSFT",
              share: 22.0,
              strengths: [
                "Xbox integration",
                "AI-powered game services",
              ],
            },
          ],
          features: [
            {
              title: "Multiplayer Hosting",
              description: "Provides scalable backend for real-time online gaming and cloud gaming services",
            },
          ],
          opportunity: "Expansion of cloud gaming reducing hardware dependency",
          threat: "Rising energy costs for data centers",
        },
        {
          name: "Semiconductors & GPUs",
          cr4: 85.0,
          probit: "HL",
          operatingMargin: 45.2,
          cagr: 15.8,
          cagrForward: 12.1,
          classificationCodes: [],
          leaders: [
            {
              name: "NVIDIA",
              ticker: "NVDA",
              share: 58.0,
              strengths: [
                "RTX GPUs dominant in PC gaming",
                "AI acceleration for game dev",
              ],
            },
            {
              name: "AMD",
              ticker: "AMD",
              share: 18.0,
              strengths: [
                "Console chip supplier",
                "Cost-effective alternatives",
              ],
            },
          ],
          features: [
            {
              title: "Ray Tracing Tech",
              description: "Advanced graphics processing enabling realistic rendering in games",
            },
          ],
          opportunity: "Demand for AI-enhanced gaming hardware",
          threat: "Supply chain disruptions in chip fabrication",
        },
        {
          name: "IP & Franchise Owners",
          cr4: 45.0,
          probit: "LH",
          operatingMargin: 12.3,
          cagr: 8.7,
          cagrForward: 10.5,
          classificationCodes: [],
          leaders: [
            {
              name: "The Walt Disney Company",
              ticker: "DIS",
              share: 15.0,
              strengths: [
                "Transmedia IPs like Marvel",
                "Global brand licensing",
              ],
            },
            {
              name: "Tencent",
              ticker: "TCEHY",
              share: 12.0,
              strengths: [
                "Majority stakes in key studios",
                "Asia IP dominance",
              ],
            },
          ],
          features: [
            {
              title: "Transmedia Extension",
              description: "Leveraging IPs across games, movies, and merchandise",
            },
          ],
          opportunity: "Cross-media synergies with streaming platforms",
          threat: "IP fatigue from over-monetization",
          niche: {
            name: "Embracer Group",
            ticker: "EMBRAC-B.ST",
            share: 3.2,
            cagr: 25.4,
            margin: ">20%",
            strategy: "Aggressive studio acquisitions",
            valuation: "P/E 12x",
          },
        },
        {
          name: "Telecom Networks",
          cr4: 55.0,
          probit: "LL",
          operatingMargin: 15.1,
          cagr: 5.2,
          cagrForward: 4.8,
          classificationCodes: [],
          leaders: [
            {
              name: "AT&T",
              ticker: "T",
              share: 18.0,
              strengths: [
                "5G low-latency networks",
                "Broadband infrastructure",
              ],
            },
          ],
          features: [
            {
              title: "5G Connectivity",
              description: "Enables seamless online multiplayer and mobile gaming",
            },
          ],
          opportunity: "Gaming traffic prioritization services",
          threat: "Net neutrality regulations",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Game Engines & Middleware",
          cr4: 90.0,
          probit: "HH",
          operatingMargin: 35.7,
          cagr: 18.6,
          cagrForward: 20.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Unity Technologies",
              ticker: "U",
              share: 45.0,
              strengths: [
                "Mobile-first engine",
                "Asset store ecosystem",
              ],
            },
            {
              name: "Epic Games",
              ticker: "Private",
              share: 40.0,
              strengths: [
                "Unreal Engine photorealism",
                "Fortnite revenue sharing",
              ],
            },
          ],
          features: [
            {
              title: "Cross-Platform Development",
              description: "Tools enabling development for PC, console, mobile simultaneously",
            },
          ],
          opportunity: "Metaverse and AR/VR development tools",
          threat: "Royalty fee competition",
        },
        {
          name: "Game Development Tools",
          cr4: 60.0,
          probit: "HL",
          operatingMargin: 22.4,
          cagr: 12.3,
          cagrForward: 11.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Autodesk",
              ticker: "ADSK",
              share: 25.0,
              strengths: [
                "Maya and 3DS Max standards",
                "AI-assisted modeling",
              ],
            },
          ],
          features: [
            {
              title: "3D Asset Creation",
              description: "Professional tools for character and environment modeling",
            },
          ],
          opportunity: "Generative AI for asset creation",
          threat: "Open-source alternatives",
        },
        {
          name: "Audio & Visual Tech",
          cr4: 40.0,
          probit: "LH",
          operatingMargin: 14.8,
          cagr: 9.5,
          cagrForward: 12.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Audiokinetic",
              ticker: "Private",
              share: 20.0,
              strengths: [
                "Wwise audio engine",
                "Interactive sound design",
              ],
            },
          ],
          features: [
            {
              title: "Spatial Audio",
              description: "3D soundscapes enhancing immersion in online games",
            },
          ],
          opportunity: "Haptic feedback integration",
          threat: "Hardware standardization delays",
        },
        {
          name: "AI & Procedural Content",
          cr4: 70.0,
          probit: "LH",
          operatingMargin: 10.2,
          cagr: 28.4,
          cagrForward: 32.1,
          classificationCodes: [],
          leaders: [
            {
              name: "NVIDIA",
              ticker: "NVDA",
              share: 35.0,
              strengths: [
                "DLSS upscaling",
                "Procedural generation tools",
              ],
            },
          ],
          features: [
            {
              title: "NPC Behavior AI",
              description: "Machine learning for dynamic game worlds and characters",
            },
          ],
          opportunity: "Personalized game experiences",
          threat: "Ethical concerns in AI content",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Game Development Studios",
          cr4: 35.0,
          probit: "LH",
          operatingMargin: 8.7,
          cagr: 11.2,
          cagrForward: 13.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Electronic Arts",
              ticker: "EA",
              share: 12.0,
              strengths: [
                "Live service expertise",
                "Sports franchise dominance",
              ],
            },
            {
              name: "Activision Blizzard",
              ticker: "ATVI",
              share: 10.0,
              strengths: [
                "Call of Duty ecosystem",
                "Mobile expansion",
              ],
            },
          ],
          features: [
            {
              title: "Live Service Games",
              description: "Ongoing content updates creating long-term engagement",
            },
          ],
          opportunity: "User-generated content platforms",
          threat: "Talent shortage and crunch times",
          niche: {
            name: "Supercell",
            ticker: "Private",
            share: 2.1,
            cagr: 22.7,
            margin: ">30%",
            strategy: "Hit-driven mobile model",
            valuation: "EV/Rev 25x",
          },
        },
        {
          name: "Console Hardware Manufacturing",
          cr4: 95.0,
          probit: "HL",
          operatingMargin: 18.9,
          cagr: 7.4,
          cagrForward: 6.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Sony Interactive Entertainment",
              ticker: "SONY",
              share: 48.0,
              strengths: [
                "PS5 exclusives",
                "Controller innovation",
              ],
            },
            {
              name: "Microsoft Gaming",
              ticker: "MSFT",
              share: 42.0,
              strengths: [
                "Game Pass subscription",
                "Cloud integration",
              ],
            },
          ],
          features: [
            {
              title: "Next-Gen Hardware",
              description: "High-performance consoles with SSD storage and ray tracing",
            },
          ],
          opportunity: "Handheld gaming revival",
          threat: "Cloud gaming substitution",
        },
        {
          name: "Mobile Game Development",
          cr4: 50.0,
          probit: "HH",
          operatingMargin: 25.6,
          cagr: 15.8,
          cagrForward: 17.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Tencent Games",
              ticker: "TCEHY",
              share: 28.0,
              strengths: [
                "China market dominance",
                "Social features",
              ],
            },
            {
              name: "NetEase",
              ticker: "NTES",
              share: 15.0,
              strengths: [
                "High-quality graphics on mobile",
                "Global expansion",
              ],
            },
          ],
          features: [
            {
              title: "Hyper-Casual Games",
              description: "Simple addictive mechanics optimized for short sessions",
            },
          ],
          opportunity: "Emerging markets smartphone penetration",
          threat: "App store policy changes",
        },
        {
          name: "PC Game Development",
          cr4: 40.0,
          probit: "LH",
          operatingMargin: 11.4,
          cagr: 10.5,
          cagrForward: 12.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Valve",
              ticker: "Private",
              share: 18.0,
              strengths: [
                "Steam platform synergy",
                "Modding community",
              ],
            },
          ],
          features: [
            {
              title: "Mods & Workshop",
              description: "Community-driven content extending game longevity",
            },
          ],
          opportunity: "Free-to-play model optimization",
          threat: "Anti-cheat enforcement costs",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Digital Distribution Platforms",
          cr4: 75.0,
          probit: "HH",
          operatingMargin: 32.1,
          cagr: 16.7,
          cagrForward: 14.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Valve Steam",
              ticker: "Private",
              share: 35.0,
              strengths: [
                "Largest PC library",
                "Workshop integration",
              ],
            },
            {
              name: "Apple App Store",
              ticker: "AAPL",
              share: 25.0,
              strengths: [
                "Premium mobile positioning",
                "iOS exclusivity",
              ],
            },
          ],
          features: [
            {
              title: "Digital Downloads",
              description: "Instant access eliminating physical logistics",
            },
          ],
          opportunity: "Web3 blockchain distribution",
          threat: "30% platform fees scrutiny",
        },
        {
          name: "Game Publishers",
          cr4: 60.0,
          probit: "HL",
          operatingMargin: 19.8,
          cagr: 9.2,
          cagrForward: 8.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Take-Two Interactive",
              ticker: "TTWO",
              share: 22.0,
              strengths: [
                "GTA franchise",
                "Zynga mobile acquisition",
              ],
            },
          ],
          features: [
            {
              title: "Global Localization",
              description: "Multi-language and cultural adaptation services",
            },
          ],
          opportunity: "Indie publishing boom",
          threat: "Blockbuster dependency",
        },
        {
          name: "Cloud Gaming Services",
          cr4: 70.0,
          probit: "LH",
          operatingMargin: 5.6,
          cagr: 45.3,
          cagrForward: 38.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Microsoft Xbox Cloud",
              ticker: "MSFT",
              share: 40.0,
              strengths: [
                "Game Pass Ultimate",
                "Broad device compatibility",
              ],
            },
            {
              name: "Google Stadia",
              ticker: "GOOG",
              share: 20.0,
              strengths: [
                "Chrome integration",
                "Android ecosystem",
              ],
            },
          ],
          features: [
            {
              title: "Streaming Infrastructure",
              description: "Hardware-free gaming via internet streaming",
            },
          ],
          opportunity: "5G-enabled ubiquity",
          threat: "Bandwidth quality variability",
        },
        {
          name: "Content Delivery Networks",
          cr4: 80.0,
          probit: "HH",
          operatingMargin: 24.5,
          cagr: 14.2,
          cagrForward: 13.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Cloudflare",
              ticker: "NET",
              share: 30.0,
              strengths: [
                "Edge computing",
                "DDoS protection for games",
              ],
            },
          ],
          features: [
            {
              title: "Low-Latency CDN",
              description: "Global network optimizing game asset delivery",
            },
          ],
          opportunity: "Edge computing for multiplayer",
          threat: "Cybersecurity threats",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Subscription Services",
          cr4: 55.0,
          probit: "HH",
          operatingMargin: 38.4,
          cagr: 27.1,
          cagrForward: 25.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Xbox Game Pass",
              ticker: "MSFT",
              share: 35.0,
              strengths: [
                "Day-one releases",
                "Cloud + console bundle",
              ],
            },
            {
              name: "PlayStation Plus",
              ticker: "SONY",
              share: 20.0,
              strengths: [
                "Online multiplayer essential",
                "Classic game catalog",
              ],
            },
          ],
          features: [
            {
              title: "All-You-Can-Play",
              description: "Recurring revenue through game libraries",
            },
          ],
          opportunity: "Tiered pricing expansion",
          threat: "Content acquisition costs",
        },
        {
          name: "In-Game Purchases & MTX",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 45.2,
          cagr: 18.9,
          cagrForward: 16.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Tencent",
              ticker: "TCEHY",
              share: 28.0,
              strengths: [
                "Battle pass mastery",
                "Social gifting",
              ],
            },
          ],
          features: [
            {
              title: "Cosmetics & Battle Passes",
              description: "Non-pay-to-win monetization driving 70%+ revenue",
            },
          ],
          opportunity: "Personalized virtual goods",
          threat: "Regulatory crackdown on loot boxes",
        },
        {
          name: "Esports & Tournaments",
          cr4: 50.0,
          probit: "LH",
          operatingMargin: 9.8,
          cagr: 22.4,
          cagrForward: 24.1,
          classificationCodes: [],
          leaders: [
            {
              name: "ESL FACEIT Group",
              ticker: "Private",
              share: 25.0,
              strengths: [
                "Tournament organization",
                "Viewership growth",
              ],
            },
          ],
          features: [
            {
              title: "Professional Leagues",
              description: "Organized competitions driving premium content sales",
            },
          ],
          opportunity: "Mainstream sports integration",
          threat: "Player burnout and scandals",
          niche: {
            name: "FaZe Clan",
            ticker: "FAZE",
            share: 4.5,
            cagr: 31.2,
            margin: "15%",
            strategy: "Creator economy focus",
            valuation: "P/S 8x",
          },
        },
        {
          name: "Advertising & Brand Integration",
          cr4: 40.0,
          probit: "LL",
          operatingMargin: 12.1,
          cagr: 14.5,
          cagrForward: 16.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Unity Ads",
              ticker: "U",
              share: 22.0,
              strengths: [
                "Rewarded video format",
                "Mobile optimization",
              ],
            },
          ],
          features: [
            {
              title: "In-Game Advertising",
              description: "Dynamic ads integrated into free-to-play titles",
            },
          ],
          opportunity: "Shoppable virtual brand experiences",
          threat: "Player aversion to intrusive ads",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Live Streaming Platforms",
          cr4: 85.0,
          probit: "HH",
          operatingMargin: 29.7,
          cagr: 24.8,
          cagrForward: 22.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Twitch",
              ticker: "AMZN",
              share: 55.0,
              strengths: [
                "Gaming community focus",
                "Subscription revenue",
              ],
            },
            {
              name: "YouTube Gaming",
              ticker: "GOOG",
              share: 25.0,
              strengths: [
                "Search integration",
                "Creator tools",
              ],
            },
          ],
          features: [
            {
              title: "Creator Economy",
              description: "Viewer donations and subscriptions funding content",
            },
          ],
          opportunity: "Interactive live events",
          threat: "Content moderation costs",
        },
        {
          name: "Social & Community Platforms",
          cr4: 70.0,
          probit: "HL",
          operatingMargin: 26.4,
          cagr: 13.2,
          cagrForward: 12.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Discord",
              ticker: "Private",
              share: 45.0,
              strengths: [
                "Voice chat dominance",
                "Server communities",
              ],
            },
          ],
          features: [
            {
              title: "Guild & Clan Systems",
              description: "Social features enhancing retention in MMOs",
            },
          ],
          opportunity: "Decentralized social gaming",
          threat: "",
        },
        {
          name: "User-Generated Content",
          cr4: 60.0,
          probit: "LH",
          operatingMargin: 7.5,
          cagr: 28.6,
          cagrForward: 30.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Roblox Corporation",
              ticker: "RBLX",
              share: 38.0,
              strengths: [
                "Creator marketplace",
                "Youth demographic",
              ],
            },
            {
              name: "Epic Games Fortnite",
              ticker: "Private",
              share: 20.0,
              strengths: [
                "Creative mode",
                "UGC monetization",
              ],
            },
          ],
          features: [
            {
              title: "Player-Created Worlds",
              description: "Metaverse platforms where users build and monetize",
            },
          ],
          opportunity: "Creator royalties scaling",
          threat: "IP infringement issues",
        },
        {
          name: "Merchandise & Licensing",
          cr4: 45.0,
          probit: "LL",
          operatingMargin: 14.2,
          cagr: 8.9,
          cagrForward: 9.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Hot Topic",
              ticker: "Private",
              share: 15.0,
              strengths: [
                "Gaming apparel specialist",
                "Convention presence",
              ],
            },
          ],
          features: [
            {
              title: "Fan Merchandise",
              description: "Physical products extending digital brand loyalty",
            },
          ],
          opportunity: "NFT digital collectibles",
          threat: "Counterfeit competition",
        },
      ],
    },
  ],
};
