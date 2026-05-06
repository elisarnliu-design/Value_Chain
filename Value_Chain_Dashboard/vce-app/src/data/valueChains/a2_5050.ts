import type { ValueChain } from '../../types/valueChain';

export const a2_5050Data: ValueChain = {
  code: "A2-5050",
  name: "Theme Parks / Live Events",
  imCode: "A2-5050",
  classificationCode: "A2-5050",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Ride & Attraction Equipment Manufacturing",
          cr4: 65.0,
          probit: "HH",
          operatingMargin: 16.2,
          cagr: 8.5,
          cagrForward: 11.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Zamperla",
              ticker: "ZAM.MI",
              share: 22.0,
              strengths: [
                "Custom themed rides",
                "Global supply chain",
              ],
            },
            {
              name: "Intamin",
              ticker: "INT",
              share: 18.0,
              strengths: [
                "High-thrill coasters",
                "Innovation in safety",
              ],
            },
          ],
          features: [
            {
              title: "IP Integration",
              description: "Equipment designed for licensed IPs like Marvel and Star Wars",
            },
          ],
          opportunity: "Rising demand for immersive IP-based attractions driving equipment upgrades",
          threat: "Supply chain disruptions in steel and electronics",
        },
        {
          name: "Theming & Design Services",
          cr4: 72.0,
          probit: "HL",
          operatingMargin: 22.1,
          cagr: 6.3,
          cagrForward: 9.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Walt Disney Imagineering",
              ticker: "DIS",
              share: 35.0,
              strengths: [
                "Storytelling expertise",
                "Transmedia integration",
              ],
            },
          ],
          features: [
            {
              title: "Immersive Storytelling",
              description: "Narrative-driven environments boosting emotional engagement",
            },
          ],
          opportunity: "Mainstreaming of IP-based theming for new park expansions",
          threat: "High costs of custom IP licensing",
        },
        {
          name: "Construction & Engineering",
          cr4: 55.0,
          probit: "LH",
          operatingMargin: 9.8,
          cagr: 10.2,
          cagrForward: 12.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Turner Construction",
              ticker: "HOK",
              share: 20.0,
              strengths: [
                "Large-scale project mgmt",
                "Theme park specialization",
              ],
            },
          ],
          features: [
            {
              title: "Phygital Infrastructure",
              description: "Integration of IoT and AI in park builds",
            },
          ],
          opportunity: "Government tourism infrastructure investments",
          threat: "Labor shortages and rising material costs",
        },
        {
          name: "Technology Components (IoT/AI)",
          cr4: 68.0,
          probit: "HH",
          operatingMargin: 24.7,
          cagr: 15.1,
          cagrForward: 18.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Cisco Systems",
              ticker: "CSCO",
              share: 25.0,
              strengths: [
                "IoT networking",
                "Crowd management solutions",
              ],
            },
          ],
          features: [
            {
              title: "Smart Park Tech",
              description: "AI-driven dynamic pricing and queue management",
            },
          ],
          opportunity: "Digital transformation in guest experience optimization",
          threat: "Cybersecurity risks in connected systems",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Content Licensing & IP Development",
          cr4: 85.0,
          probit: "HH",
          operatingMargin: 28.4,
          cagr: 7.9,
          cagrForward: 10.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Disney",
              ticker: "DIS",
              share: 40.0,
              strengths: [
                "Vast IP portfolio",
                "Transmedia synergy",
              ],
            },
            {
              name: "Universal Studios",
              ticker: "CMCSA",
              share: 25.0,
              strengths: [
                "Nintendo, Harry Potter IPs",
                "Global licensing",
              ],
            },
          ],
          features: [
            {
              title: "IP Immersion",
              description: "Storytelling integration boosting merchandise by 40%",
            },
          ],
          opportunity: "Premiumization via franchise leverage",
          threat: "IP rights expiration and competition",
        },
        {
          name: "Live Entertainment Production",
          cr4: 60.0,
          probit: "LH",
          operatingMargin: 12.3,
          cagr: 9.7,
          cagrForward: 13.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Live Nation",
              ticker: "LYV",
              share: 28.0,
              strengths: [
                "Concert production",
                "Event scaling",
              ],
            },
          ],
          features: [
            {
              title: "Hybrid Events",
              description: "Live shows with AR/VR enhancements",
            },
          ],
          opportunity: "Rise in cultural festivals and themed shows",
          threat: "Talent availability and weather dependencies",
        },
        {
          name: "Software & Ticketing Systems",
          cr4: 78.0,
          probit: "HL",
          operatingMargin: 26.5,
          cagr: 14.2,
          cagrForward: 16.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Vivid Seats",
              ticker: "SEAT",
              share: 30.0,
              strengths: [
                "Dynamic pricing",
                "Contactless tech",
              ],
            },
          ],
          features: [
            {
              title: "Dynamic Pricing",
              description: "AI-optimized revenue from tickets",
            },
          ],
          opportunity: "Shift to sophisticated pricing models",
          threat: "Data privacy regulations",
        },
        {
          name: "Food & Beverage Supply",
          cr4: 45.0,
          probit: "LL",
          operatingMargin: 8.7,
          cagr: 5.4,
          cagrForward: 7.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Sysco",
              ticker: "SYY",
              share: 18.0,
              strengths: [
                "Bulk supply",
                "Themed F&B",
              ],
            },
          ],
          features: [
            {
              title: "IP-Themed Dining",
              description: "Franchise-aligned food experiences",
            },
          ],
          opportunity: "Per-capita spend uplift from contactless payments",
          threat: "Commodity price volatility",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Park Development & Construction",
          cr4: 70.0,
          probit: "LH",
          operatingMargin: 11.2,
          cagr: 11.8,
          cagrForward: 14.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Merlin Entertainments",
              ticker: "MLTN.L",
              share: 24.0,
              strengths: [
                "Legoland expansions",
                "Regional focus",
              ],
            },
          ],
          features: [
            {
              title: "Modular Builds",
              description: "Faster deployment for new attractions",
            },
          ],
          opportunity: "Asia-Pacific park boom",
          threat: "Regulatory approvals delays",
        },
        {
          name: "Merchandise Production",
          cr4: 62.0,
          probit: "HH",
          operatingMargin: 19.8,
          cagr: 12.6,
          cagrForward: 15.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Hasbro",
              ticker: "HAS",
              share: 21.0,
              strengths: [
                "Licensed toys",
                "Park exclusives",
              ],
            },
          ],
          features: [
            {
              title: "Exclusivity Lines",
              description: "Park-only merchandise driving impulse buys",
            },
          ],
          opportunity: "IP-driven ancillary revenue growth",
          threat: "Counterfeit products",
        },
        {
          name: "Arcade Game Manufacturing",
          cr4: 58.0,
          probit: "HL",
          operatingMargin: 17.4,
          cagr: 6.9,
          cagrForward: 9.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Bandai Namco",
              ticker: "7832.T",
              share: 23.0,
              strengths: [
                "VR arcades",
                "IP games",
              ],
            },
          ],
          features: [
            {
              title: "Interactive Gaming",
              description: "Skill-based redemption games",
            },
          ],
          opportunity: "Digital-physical hybrid games",
          threat: "Home gaming competition",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Logistics & Supply Chain",
          cr4: 52.0,
          probit: "LL",
          operatingMargin: 7.6,
          cagr: 4.2,
          cagrForward: 6.8,
          classificationCodes: [],
          leaders: [
            {
              name: "UPS",
              ticker: "UPS",
              share: 19.0,
              strengths: [
                "Seasonal scaling",
                "Parts delivery",
              ],
            },
          ],
          features: [
            {
              title: "Just-in-Time Delivery",
              description: "For ride maintenance and merchandise",
            },
          ],
          opportunity: "E-commerce fulfillment for merch",
          threat: "Global disruptions",
        },
        {
          name: "Wholesale Ticketing",
          cr4: 75.0,
          probit: "LH",
          operatingMargin: 13.9,
          cagr: 10.5,
          cagrForward: 12.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Ticketmaster",
              ticker: "LYV",
              share: 42.0,
              strengths: [
                "Bulk group sales",
                "Resale integration",
              ],
            },
          ],
          features: [
            {
              title: "Secondary Markets",
              description: "Dynamic resale pricing",
            },
          ],
          opportunity: "Group and corporate packages",
          threat: "Scalping regulations",
        },
        {
          name: "Media & Advertising Distribution",
          cr4: 80.0,
          probit: "HL",
          operatingMargin: 21.3,
          cagr: 8.1,
          cagrForward: 10.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Google",
              ticker: "GOOGL",
              share: 30.0,
              strengths: [
                "Targeted digital ads",
                "Search dominance",
              ],
            },
          ],
          features: [
            {
              title: "Programmatic Advertising",
              description: "Geo-fenced promotions near parks",
            },
          ],
          opportunity: "Social media influencer partnerships",
          threat: "Ad fatigue and privacy laws",
        },
        {
          name: "Hospitality Partnerships",
          cr4: 48.0,
          probit: "LH",
          operatingMargin: 14.2,
          cagr: 9.8,
          cagrForward: 11.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Marriott",
              ticker: "MAR",
              share: 16.0,
              strengths: [
                "Bundled packages",
                "Loyalty programs",
              ],
            },
          ],
          features: [
            {
              title: "Park-Resort Bundles",
              description: "Integrated travel experiences",
            },
          ],
          opportunity: "Domestic tourism surge",
          threat: "Hotel oversupply",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Direct Ticketing & Reservations",
          cr4: 82.0,
          probit: "HH",
          operatingMargin: 25.6,
          cagr: 13.4,
          cagrForward: 15.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Disney",
              ticker: "DIS",
              share: 38.0,
              strengths: [
                "App-based sales",
                "Dynamic pricing",
              ],
            },
            {
              name: "Universal",
              ticker: "CMCSA",
              share: 22.0,
              strengths: [
                "Express pass upsell",
                "VIP packages",
              ],
            },
          ],
          features: [
            {
              title: "Contactless Payments",
              description: "10% uplift in per-capita spend",
            },
          ],
          opportunity: "Shift to dynamic admission models",
          threat: "Price sensitivity",
        },
        {
          name: "On-Site Merchandise & F&B",
          cr4: 55.0,
          probit: "HL",
          operatingMargin: 18.7,
          cagr: 11.2,
          cagrForward: 13.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Six Flags",
              ticker: "SIX",
              share: 20.0,
              strengths: [
                "Themed retail",
                "Seasonal merchandise",
              ],
            },
          ],
          features: [
            {
              title: "Impulse Purchases",
              description: "IP-driven product placement",
            },
          ],
          opportunity: "Ancillary revenue from IP merch",
          threat: "Economic downturns",
        },
        {
          name: "Digital Marketing Agencies",
          cr4: 67.0,
          probit: "LH",
          operatingMargin: 15.4,
          cagr: 12.7,
          cagrForward: 14.6,
          classificationCodes: [],
          leaders: [
            {
              name: "WPP",
              ticker: "WPP",
              share: 24.0,
              strengths: [
                "Data-driven campaigns",
                "Influencer mgmt",
              ],
            },
          ],
          features: [
            {
              title: "VR Previews",
              description: "Virtual ride experiences for promotion",
            },
          ],
          opportunity: "Targeted ads for families",
          threat: "Platform algorithm changes",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Domestic Tourists",
          cr4: 40.0,
          probit: "HH",
          operatingMargin: 0.0,
          cagr: 10.8,
          cagrForward: 12.3,
          classificationCodes: [],
          leaders: [
            {
              name: "N/A",
              ticker: "",
              share: 0.0,
              strengths: [],
            },
          ],
          features: [
            {
              title: "Family Vacations",
              description: "73.9% market share driver",
            },
          ],
          opportunity: "Rising disposable income and short trips",
          threat: "Local competition from staycations",
          niche: {
            name: "Silver Sneakers",
            ticker: "",
            share: 5.0,
            cagr: 8.2,
            margin: ">15%",
            strategy: "Senior day programs",
            valuation: "N/A",
          },
        },
        {
          name: "International Tourists",
          cr4: 35.0,
          probit: "HL",
          operatingMargin: 0.0,
          cagr: 9.1,
          cagrForward: 11.5,
          classificationCodes: [],
          leaders: [
            {
              name: "N/A",
              ticker: "",
              share: 0.0,
              strengths: [],
            },
          ],
          features: [
            {
              title: "Cultural Experiences",
              description: "Local-themed attractions",
            },
          ],
          opportunity: "Government tourism campaigns",
          threat: "Geopolitical tensions",
        },
        {
          name: "Corporate Groups & Events",
          cr4: 25.0,
          probit: "LH",
          operatingMargin: 0.0,
          cagr: 14.3,
          cagrForward: 16.7,
          classificationCodes: [],
          leaders: [
            {
              name: "N/A",
              ticker: "",
              share: 0.0,
              strengths: [],
            },
          ],
          features: [
            {
              title: "Team Building",
              description: "Exclusive venue rentals",
            },
          ],
          opportunity: "Post-pandemic event recovery",
          threat: "Remote work trends",
        },
        {
          name: "Millennial/Gen Z Families",
          cr4: 30.0,
          probit: "HH",
          operatingMargin: 0.0,
          cagr: 13.9,
          cagrForward: 15.4,
          classificationCodes: [],
          leaders: [
            {
              name: "N/A",
              ticker: "",
              share: 0.0,
              strengths: [],
            },
          ],
          features: [
            {
              title: "Social Media Appeal",
              description: "Instagrammable attractions",
            },
          ],
          opportunity: "Phygital experiences",
          threat: "Screen time competition",
        },
      ],
    },
  ],
};
