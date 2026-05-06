import type { ValueChain } from '../../types/valueChain';

export const a2_7040Data: ValueChain = {
  code: "A2-7040",
  name: "Gaming Activities",
  imCode: "A2-7040",
  classificationCode: "A2-7040",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Semiconductors & Chips",
          cr4: 85.0,
          probit: "HH",
          operatingMargin: 28.5,
          cagr: 12.4,
          cagrForward: 10.2,
          classificationCodes: [],
          leaders: [
            {
              name: "NVIDIA Corporation",
              ticker: "NVDA",
              share: 42.0,
              strengths: [
                "GPU dominance for gaming",
                "AI integration",
              ],
            },
            {
              name: "Advanced Micro Devices",
              ticker: "AMD",
              share: 22.0,
              strengths: [
                "Cost-effective GPUs",
                "Console chip supply",
              ],
            },
          ],
          features: [
            {
              title: "Ray Tracing Technology",
              description: "Enables realistic lighting and shadows in games, boosting GPU demand",
            },
          ],
          opportunity: "Rising demand for high-performance GPUs in cloud gaming and VR",
          threat: "Supply chain disruptions from geopolitical tensions",
        },
        {
          name: "Memory Modules (DRAM/NAND)",
          cr4: 78.0,
          probit: "HL",
          operatingMargin: 22.1,
          cagr: 8.7,
          cagrForward: 6.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Samsung Electronics",
              ticker: "005930",
              share: 35.0,
              strengths: [
                "Vertical integration",
                "High-volume production",
              ],
            },
          ],
          features: [
            {
              title: "High-Bandwidth Memory",
              description: "Optimized for gaming graphics cards with faster data access",
            },
          ],
          opportunity: "Expansion in SSDs for faster game loading times",
          threat: "Price volatility due to oversupply cycles",
        },
        {
          name: "Display Panels",
          cr4: 65.0,
          probit: "LH",
          operatingMargin: 9.2,
          cagr: 7.1,
          cagrForward: 8.9,
          classificationCodes: [],
          leaders: [
            {
              name: "LG Display",
              ticker: "LPL",
              share: 28.0,
              strengths: [
                "OLED technology leadership",
                "Gaming monitor supply",
              ],
            },
          ],
          features: [
            {
              title: "OLED Panels",
              description: "Superior contrast and color for immersive gaming displays",
            },
          ],
          opportunity: "Growth in high-refresh-rate esports monitors",
          threat: "Competition from Chinese manufacturers",
          niche: {
            name: "JOLED Inc.",
            ticker: "JOLE",
            share: 5.0,
            cagr: 15.2,
            margin: ">25%",
            strategy: "Inkjet-printed OLED for flexible gaming screens",
            valuation: "P/E 60x",
          },
        },
        {
          name: "Controllers & Peripherals Components",
          cr4: 70.0,
          probit: "LL",
          operatingMargin: 6.8,
          cagr: 3.5,
          cagrForward: 4.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Logitech International",
              ticker: "LOGI",
              share: 32.0,
              strengths: [
                "Ergonomic designs",
                "Wireless tech",
              ],
            },
          ],
          features: [
            {
              title: "Haptic Feedback Sensors",
              description: "Vibration motors and sensors for immersive control",
            },
          ],
          opportunity: "VR/AR accessory integration",
          threat: "Saturation in standard controller market",
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
          operatingMargin: 35.2,
          cagr: 15.6,
          cagrForward: 14.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Epic Games",
              ticker: "EG",
              share: 55.0,
              strengths: [
                "Unreal Engine dominance",
                "Free licensing model",
              ],
            },
            {
              name: "Unity Software",
              ticker: "U",
              share: 25.0,
              strengths: [
                "Mobile game focus",
                "Asset store ecosystem",
              ],
            },
          ],
          features: [
            {
              title: "Real-Time Rendering",
              description: "Photorealistic graphics with Nanite and Lumen tech",
            },
          ],
          opportunity: "Metaverse and real-time 3D content creation boom",
          threat: "Dependency on AAA studio adoption",
        },
        {
          name: "Art & Asset Creation Tools",
          cr4: 60.0,
          probit: "HL",
          operatingMargin: 24.7,
          cagr: 10.2,
          cagrForward: 9.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Autodesk",
              ticker: "ADSK",
              share: 40.0,
              strengths: [
                "Maya and 3ds Max standards",
                "Cloud collaboration",
              ],
            },
          ],
          features: [
            {
              title: "AI-Assisted Modeling",
              description: "Generative tools for rapid asset prototyping",
            },
          ],
          opportunity: "Indie developer tool accessibility",
          threat: "Open-source alternatives",
        },
        {
          name: "Audio Software & Sound Design",
          cr4: 55.0,
          probit: "LH",
          operatingMargin: 12.4,
          cagr: 9.8,
          cagrForward: 11.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Dolby Laboratories",
              ticker: "DLB",
              share: 30.0,
              strengths: [
                "Spatial audio tech",
                "Gaming licensing",
              ],
            },
          ],
          features: [
            {
              title: "3D Audio Engines",
              description: "Immersive soundscapes for VR and open-world games",
            },
          ],
          opportunity: "Adoption in mobile and cloud gaming",
          threat: "Free audio middleware competition",
        },
        {
          name: "QA & Testing Tools",
          cr4: 45.0,
          probit: "LL",
          operatingMargin: 8.9,
          cagr: 6.3,
          cagrForward: 7.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Keyword Studios",
              ticker: "KWS",
              share: 18.0,
              strengths: [
                "Global testing network",
                "Automation tools",
              ],
            },
          ],
          features: [
            {
              title: "Automated Bug Detection",
              description: "AI-driven playtesting reduces manual effort",
            },
          ],
          opportunity: "Live service game continuous testing",
          threat: "Crowdsourced testing platforms",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Game Development Studios",
          cr4: 40.0,
          probit: "LH",
          operatingMargin: 11.2,
          cagr: 8.5,
          cagrForward: 9.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Electronic Arts",
              ticker: "EA",
              share: 12.0,
              strengths: [
                "Live service expertise",
                "Sports franchises",
              ],
            },
            {
              name: "Activision Blizzard",
              ticker: "ATVI",
              share: 10.0,
              strengths: [
                "Call of Duty dominance",
                "Esports integration",
              ],
            },
          ],
          features: [
            {
              title: "AAA Title Production",
              description: "High-budget games with budgets over $200M",
            },
          ],
          opportunity: "Shift to service-based games with recurring revenue",
          threat: "Talent shortages and high development costs",
          niche: {
            name: "Hazelight Studios",
            ticker: null,
            share: 2.0,
            cagr: 25.4,
            margin: ">30%",
            strategy: "Co-op multiplayer innovations like It Takes Two",
            valuation: "Private, est. 10x revenue",
          },
        },
        {
          name: "Console Hardware Assembly",
          cr4: 95.0,
          probit: "HH",
          operatingMargin: 26.8,
          cagr: 7.9,
          cagrForward: 6.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Sony Group",
              ticker: "SONY",
              share: 45.0,
              strengths: [
                "PS5 ecosystem",
                "Exclusive titles",
              ],
            },
            {
              name: "Microsoft",
              ticker: "MSFT",
              share: 30.0,
              strengths: [
                "Xbox Game Pass",
                "Cloud integration",
              ],
            },
          ],
          features: [
            {
              title: "SSD Integration",
              description: "Ultra-fast storage eliminates loading screens",
            },
          ],
          opportunity: "Next-gen hardware cycles",
          threat: "Chip shortages impacting production",
        },
        {
          name: "PC Components Manufacturing",
          cr4: 72.0,
          probit: "HL",
          operatingMargin: 18.6,
          cagr: 5.2,
          cagrForward: 4.8,
          classificationCodes: [],
          leaders: [
            {
              name: "ASUS",
              ticker: "2357",
              share: 25.0,
              strengths: [
                "ROG gaming brand",
                "Custom cooling",
              ],
            },
          ],
          features: [
            {
              title: "RGB Customization",
              description: "Aesthetic and performance-tuned components",
            },
          ],
          opportunity: "Pre-built gaming PCs for mainstream",
          threat: "DIY market preference",
        },
        {
          name: "Indie Game Development",
          cr4: 25.0,
          probit: "LL",
          operatingMargin: 4.5,
          cagr: 12.1,
          cagrForward: 13.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Supergiant Games",
              ticker: null,
              share: 3.0,
              strengths: [
                "Narrative-driven hits",
                "Direct-to-consumer",
              ],
            },
          ],
          features: [
            {
              title: "Solo/Small Team Production",
              description: "Low-cost, high-impact titles like Hades",
            },
          ],
          opportunity: "Platformer and roguelike genres exploding",
          threat: "Discovery challenges on storefronts",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Digital Platforms",
          cr4: 88.0,
          probit: "HH",
          operatingMargin: 32.4,
          cagr: 18.7,
          cagrForward: 16.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Valve Corporation",
              ticker: null,
              share: 40.0,
              strengths: [
                "Steam ecosystem",
                "Community features",
              ],
            },
            {
              name: "Apple",
              ticker: "AAPL",
              share: 25.0,
              strengths: [
                "App Store mobile dominance",
                "Subscription services",
              ],
            },
          ],
          features: [
            {
              title: "Cloud Saves",
              description: "Seamless cross-device progression",
            },
          ],
          opportunity: "Global digital shift post-physical decline",
          threat: "Regulatory pressures on app store fees",
        },
        {
          name: "Physical Media Duplication",
          cr4: 60.0,
          probit: "LL",
          operatingMargin: 5.6,
          cagr: -3.2,
          cagrForward: -2.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Racemi",
              ticker: null,
              share: 35.0,
              strengths: [
                "Blu-ray pressing",
                "Collectible editions",
              ],
            },
          ],
          features: [
            {
              title: "Limited Edition Packaging",
              description: "Collector boxes with physical extras",
            },
          ],
          opportunity: "Premium collector's editions",
          threat: "Digital cannibalization",
        },
        {
          name: "Logistics & Supply Chain",
          cr4: 50.0,
          probit: "LH",
          operatingMargin: 7.8,
          cagr: 6.4,
          cagrForward: 7.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Ingram Micro",
              ticker: "INGM",
              share: 20.0,
              strengths: [
                "Global warehousing",
                "Console distribution",
              ],
            },
          ],
          features: [
            {
              title: "Just-in-Time Delivery",
              description: "Launch day stock optimization",
            },
          ],
          opportunity: "E-commerce fulfillment growth",
          threat: "Freight cost inflation",
        },
        {
          name: "Cloud Gaming Infrastructure",
          cr4: 70.0,
          probit: "HL",
          operatingMargin: 21.3,
          cagr: 45.2,
          cagrForward: 38.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon.com",
              ticker: "AMZN",
              share: 28.0,
              strengths: [
                "AWS Luna",
                "Scalable servers",
              ],
            },
          ],
          features: [
            {
              title: "Low-Latency Streaming",
              description: "5G-enabled remote play",
            },
          ],
          opportunity: "Device-agnostic gaming access",
          threat: "Bandwidth limitations in emerging markets",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Game Publishers",
          cr4: 55.0,
          probit: "HH",
          operatingMargin: 27.9,
          cagr: 9.3,
          cagrForward: 10.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Take-Two Interactive",
              ticker: "TTWO",
              share: 18.0,
              strengths: [
                "GTA franchise",
                "Microtransactions",
              ],
            },
            {
              name: "Tencent Holdings",
              ticker: "0700",
              share: 20.0,
              strengths: [
                "Mobile esports",
                "Global acquisitions",
              ],
            },
          ],
          features: [
            {
              title: "Marketing Campaigns",
              description: "Multi-million dollar trailers and influencer partnerships",
            },
          ],
          opportunity: "Free-to-play with in-app purchases model",
          threat: "Hit-driven revenue volatility",
        },
        {
          name: "Retail Chains",
          cr4: 75.0,
          probit: "LL",
          operatingMargin: 3.4,
          cagr: 1.2,
          cagrForward: 0.8,
          classificationCodes: [],
          leaders: [
            {
              name: "GameStop",
              ticker: "GME",
              share: 40.0,
              strengths: [
                "Trade-in programs",
                "Collectibles",
              ],
            },
          ],
          features: [
            {
              title: "Pre-Order Exclusives",
              description: "In-store bonuses driving foot traffic",
            },
          ],
          opportunity: "Merchandise and esports events",
          threat: "Digital sales erosion",
        },
        {
          name: "Online Marketplaces",
          cr4: 82.0,
          probit: "HL",
          operatingMargin: 19.7,
          cagr: 14.6,
          cagrForward: 13.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon.com",
              ticker: "AMZN",
              share: 50.0,
              strengths: [
                "Prime integration",
                "Fast shipping",
              ],
            },
          ],
          features: [
            {
              title: "Subscription Bundles",
              description: "Game + hardware deals",
            },
          ],
          opportunity: "Cross-promotion with streaming services",
          threat: "Commission fee pressures",
        },
        {
          name: "Esports & Streaming",
          cr4: 65.0,
          probit: "LH",
          operatingMargin: 10.5,
          cagr: 22.4,
          cagrForward: 20.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Twitch Interactive",
              ticker: null,
              share: 35.0,
              strengths: [
                "Live streaming monopoly",
                "Creator economy",
              ],
            },
          ],
          features: [
            {
              title: "Viewer Monetization",
              description: "Subscriptions, bits, and ads",
            },
          ],
          opportunity: "Tournament prize pools growth",
          threat: "Platform hopping by streamers",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Console Gamers",
          cr4: 45.0,
          probit: "HL",
          operatingMargin: 0.0,
          cagr: 4.2,
          cagrForward: 3.8,
          classificationCodes: [],
          leaders: [
            {
              name: "PlayStation User Base",
              ticker: null,
              share: 25.0,
              strengths: [
                "Exclusive content",
                "Loyal community",
              ],
            },
          ],
          features: [
            {
              title: "Subscription Services",
              description: "Game Pass and PS Plus retention",
            },
          ],
          opportunity: "Family and casual gaming expansion",
          threat: "Aging hardware upgrade cycles",
        },
        {
          name: "PC Gamers",
          cr4: 30.0,
          probit: "HH",
          operatingMargin: 0.0,
          cagr: 7.6,
          cagrForward: 8.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Steam User Base",
              ticker: null,
              share: 20.0,
              strengths: [
                "Modding community",
                "Indie discovery",
              ],
            },
          ],
          features: [
            {
              title: "High Customization",
              description: "Upgradable hardware and mods",
            },
          ],
          opportunity: "Ray tracing and 4K adoption",
          threat: "Cybersecurity risks",
        },
        {
          name: "Mobile Gamers",
          cr4: 60.0,
          probit: "LH",
          operatingMargin: 0.0,
          cagr: 12.9,
          cagrForward: 14.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Free Fire Players",
              ticker: null,
              share: 18.0,
              strengths: [
                "Emerging market dominance",
                "Battle royale",
              ],
            },
          ],
          features: [
            {
              title: "Free-to-Play Model",
              description: "In-app purchases drive revenue",
            },
          ],
          opportunity: "5G enabling premium mobile experiences",
          threat: "Monetization fatigue",
        },
        {
          name: "Esports Participants",
          cr4: 40.0,
          probit: "LL",
          operatingMargin: 0.0,
          cagr: 25.7,
          cagrForward: 23.4,
          classificationCodes: [],
          leaders: [
            {
              name: "League of Legends Pros",
              ticker: null,
              share: 15.0,
              strengths: [
                "Prize pools",
                "Sponsorships",
              ],
            },
          ],
          features: [
            {
              title: "Competitive Leagues",
              description: "Professional circuits with global events",
            },
          ],
          opportunity: "Web3 and NFT integrations",
          threat: "Burnout and regulation",
        },
      ],
    },
  ],
};
