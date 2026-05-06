import type { ValueChain } from '../../types/valueChain';

export const a2_7050Data: ValueChain = {
  code: "A2-7050",
  name: "Casinos",
  imCode: "A2-7050",
  classificationCode: "A2-7050",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Gaming Equipment Manufacturers",
          cr4: 65.0,
          probit: "HH",
          operatingMargin: 22.1,
          cagr: 5.2,
          cagrForward: 6.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Aristocrat Leisure",
              ticker: "ALL",
              share: 28.0,
              strengths: [
                "Leading slot machine supplier",
                "Strong digital gaming portfolio",
              ],
            },
            {
              name: "Scientific Games",
              ticker: "SGMS",
              share: 20.0,
              strengths: [
                "Comprehensive table game solutions",
                "Advanced lottery systems",
              ],
            },
          ],
          features: [
            {
              title: "Cashless Gaming Tech",
              description: "Integration of contactless payment systems in slots and tables for enhanced player convenience.",
            },
            {
              title: "AI-Powered Analytics",
              description: "Predictive tools for machine performance and player behavior optimization.",
            },
          ],
          opportunity: "Expansion into omnichannel platforms bridging land-based and online gaming.",
          threat: "Regulatory restrictions on new gaming device approvals.",
        },
        {
          name: "Slot Machine Producers",
          cr4: 72.0,
          probit: "HL",
          operatingMargin: 19.8,
          cagr: 4.1,
          cagrForward: 5.0,
          classificationCodes: [],
          leaders: [
            {
              name: "IGT",
              ticker: "IGT",
              share: 32.0,
              strengths: [
                "Dominant in US land-based slots",
                "Robust video poker lineup",
              ],
            },
          ],
          features: [
            {
              title: "Skill-Based Slots",
              description: "Hybrid machines appealing to younger demographics with interactive elements.",
            },
          ],
          opportunity: "Demand surge from new Asian casino jurisdictions.",
          threat: "Saturation in mature markets like Nevada.",
        },
        {
          name: "Table Game Suppliers",
          cr4: 55.0,
          probit: "LH",
          operatingMargin: 15.4,
          cagr: 6.3,
          cagrForward: 7.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Evolution Gaming",
              ticker: "EVVTY",
              share: 25.0,
              strengths: [
                "Live dealer tech leader",
                "High-margin online table games",
              ],
            },
          ],
          features: [
            {
              title: "Electronic Table Games",
              description: "Automated systems reducing dealer costs while maintaining player experience.",
            },
          ],
          opportunity: "Live dealer integration for iGaming growth.",
          threat: "Labor disputes impacting physical table supply.",
        },
        {
          name: "Chip & Currency Providers",
          cr4: 80.0,
          probit: "LL",
          operatingMargin: 12.7,
          cagr: 3.2,
          cagrForward: 3.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Brybelly",
              ticker: "Private",
              share: 40.0,
              strengths: [
                "Custom casino chip production",
                "High-volume supplier",
              ],
            },
          ],
          features: [
            {
              title: "RFID-Embedded Chips",
              description: "Trackable chips for security and real-time inventory management.",
            },
          ],
          opportunity: "RFID adoption in emerging markets.",
          threat: "Shift to digital wallets reducing physical chip demand.",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Casino Software Providers",
          cr4: 68.0,
          probit: "HH",
          operatingMargin: 28.5,
          cagr: 7.8,
          cagrForward: 9.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Playtech",
              ticker: "PTEC",
              share: 26.0,
              strengths: [
                "Omnichannel platforms",
                "AI-driven personalization",
              ],
            },
          ],
          features: [
            {
              title: "Player Management Systems",
              description: "Unified CRM tracking across gaming and non-gaming spend.",
            },
          ],
          opportunity: "AI integration for predictive player retention.",
          threat: "Data privacy regulations limiting analytics.",
        },
        {
          name: "Payment Processing Services",
          cr4: 75.0,
          probit: "HL",
          operatingMargin: 24.3,
          cagr: 5.9,
          cagrForward: 6.7,
          classificationCodes: [],
          leaders: [
            {
              name: "PayNearMe",
              ticker: "Private",
              share: 22.0,
              strengths: [
                "Cash-to-digital conversion",
                "Retail partnerships",
              ],
            },
          ],
          features: [
            {
              title: "Cashless Wagering",
              description: "Instant digital wallet funding from retail locations.",
            },
          ],
          opportunity: "Crypto payment adoption in regulated markets.",
          threat: "AML compliance costs rising.",
          niche: {
            name: "NOWPayments",
            ticker: "Private",
            share: 8.0,
            cagr: 15.2,
            margin: ">30%",
            strategy: "Crypto gateway specialist",
            valuation: "P/S 12x",
          },
        },
        {
          name: "Security & Surveillance Tech",
          cr4: 60.0,
          probit: "LH",
          operatingMargin: 16.2,
          cagr: 8.1,
          cagrForward: 10.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Konami Gaming",
              ticker: "KNAMY",
              share: 24.0,
              strengths: [
                "Facial recognition systems",
                "Biometric authentication",
              ],
            },
          ],
          features: [
            {
              title: "AI Anomaly Detection",
              description: "Real-time fraud prevention across casino floors.",
            },
          ],
          opportunity: "Biometrics for VIP player verification.",
          threat: "Privacy laws restricting surveillance scope.",
        },
        {
          name: "Data Analytics Firms",
          cr4: 58.0,
          probit: "HH",
          operatingMargin: 31.7,
          cagr: 9.5,
          cagrForward: 11.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Tableau (Salesforce)",
              ticker: "CRM",
              share: 19.0,
              strengths: [
                "Gaming-specific dashboards",
                "Real-time ROI tracking",
              ],
            },
          ],
          features: [
            {
              title: "Predictive Yield Management",
              description: "Dynamic pricing for rooms and amenities based on player value.",
            },
          ],
          opportunity: "Personalized marketing automation.",
          threat: "Data silos across operator properties.",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Integrated Resort Developers",
          cr4: 70.0,
          probit: "HL",
          operatingMargin: 17.6,
          cagr: 6.2,
          cagrForward: 7.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Las Vegas Sands",
              ticker: "LVS",
              share: 29.0,
              strengths: [
                "Macau expertise",
                "Singapore success model",
              ],
            },
          ],
          features: [
            {
              title: "Non-Gaming Revenue Focus",
              description: "60%+ revenue from hotels, F&B, retail in top resorts.",
            },
          ],
          opportunity: "Middle East resort licensing wave.",
          threat: "High capex delays in new jurisdictions.",
        },
        {
          name: "Land-Based Casino Operators",
          cr4: 62.0,
          probit: "HH",
          operatingMargin: 23.4,
          cagr: 4.8,
          cagrForward: 5.5,
          classificationCodes: [],
          leaders: [
            {
              name: "MGM Resorts",
              ticker: "MGM",
              share: 25.0,
              strengths: [
                "Las Vegas Strip dominance",
                "Digital BetMGM growth",
              ],
            },
            {
              name: "Caesars Entertainment",
              ticker: "CZR",
              share: 18.0,
              strengths: [
                "Loyalty program scale",
                "Regional portfolio",
              ],
            },
          ],
          features: [
            {
              title: "Omnichannel Integration",
              description: "Seamless land-to-online player migration.",
            },
          ],
          opportunity: "US sports betting expansion.",
          threat: "Labor cost inflation post-unionization.",
        },
        {
          name: "Online Casino Platforms",
          cr4: 55.0,
          probit: "LH",
          operatingMargin: 14.9,
          cagr: 12.3,
          cagrForward: 14.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Flutter Entertainment",
              ticker: "FLUT",
              share: 22.0,
              strengths: [
                "FanDuel leadership",
                "Global iGaming scale",
              ],
            },
          ],
          features: [
            {
              title: "Live Dealer Streaming",
              description: "VR-enhanced tables attracting premium players.",
            },
          ],
          opportunity: "Regulated online market openings.",
          threat: "Tax rate hikes on iGaming revenue.",
        },
        {
          name: "Tribal Casino Operators",
          cr4: 68.0,
          probit: "LL",
          operatingMargin: 11.8,
          cagr: 3.9,
          cagrForward: 4.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Seminole Gaming",
              ticker: "Private",
              share: 31.0,
              strengths: [
                "Florida exclusivity",
                "Compact advantages",
              ],
            },
          ],
          features: [
            {
              title: "Sovereign Operations",
              description: "Tax-efficient structures unique to tribal lands.",
            },
          ],
          opportunity: "Compacts for sports betting.",
          threat: "Federal regulatory changes.",
        },
        {
          name: "Riverboat & Racino Operators",
          cr4: 72.0,
          probit: "LH",
          operatingMargin: 13.5,
          cagr: 5.7,
          cagrForward: 6.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Penn Entertainment",
              ticker: "PENN",
              share: 27.0,
              strengths: [
                "Espnbet partnership",
                "Regional VLT dominance",
              ],
            },
          ],
          features: [
            {
              title: "Slot-Heavy Revenue Model",
              description: "High-yield video lottery terminals.",
            },
          ],
          opportunity: "State expansions beyond racing.",
          threat: "Vessel maintenance costs.",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Gaming Content Aggregators",
          cr4: 64.0,
          probit: "HH",
          operatingMargin: 26.8,
          cagr: 8.4,
          cagrForward: 9.8,
          classificationCodes: [],
          leaders: [
            {
              name: "EveryMatrix",
              ticker: "Private",
              share: 23.0,
              strengths: [
                "1,000+ game integrations",
                "Fast market entry",
              ],
            },
          ],
          features: [
            {
              title: "API-First Distribution",
              description: "Plug-and-play game feeds for operators.",
            },
          ],
          opportunity: "Latin America aggregator demand.",
          threat: "Exclusive studio partnerships.",
        },
        {
          name: "Affiliate Marketing Networks",
          cr4: 70.0,
          probit: "HL",
          operatingMargin: 21.2,
          cagr: 6.5,
          cagrForward: 7.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Income Access",
              ticker: "Private",
              share: 28.0,
              strengths: [
                "Performance marketing",
                "Compliance tools",
              ],
            },
          ],
          features: [
            {
              title: "Geo-Targeted Campaigns",
              description: "Regulatory-compliant player acquisition.",
            },
          ],
          opportunity: "Tier-1 traffic monetization.",
          threat: "Rising CPA in competitive markets.",
        },
        {
          name: "Casino Logistics Providers",
          cr4: 82.0,
          probit: "LL",
          operatingMargin: 9.6,
          cagr: 3.1,
          cagrForward: 3.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Brink's Gaming Logistics",
              ticker: "BCO",
              share: 35.0,
              strengths: [
                "Armored cash transport",
                "Global coverage",
              ],
            },
          ],
          features: [
            {
              title: "Secure Equipment Delivery",
              description: "Temperature-controlled slot machine transport.",
            },
          ],
          opportunity: "Asia-Pacific expansion logistics.",
          threat: "Digital currency reducing cash transport.",
        },
        {
          name: "B2B Platform Distributors",
          cr4: 59.0,
          probit: "LH",
          operatingMargin: 18.3,
          cagr: 7.9,
          cagrForward: 8.6,
          classificationCodes: [],
          leaders: [
            {
              name: "SBTech",
              ticker: "Private",
              share: 21.0,
              strengths: [
                "Sportsbook integration",
                "Turnkey solutions",
              ],
            },
          ],
          features: [
            {
              title: "White-Label Distribution",
              description: "Rapid platform deployment for new operators.",
            },
          ],
          opportunity: "Emerging market white-labels.",
          threat: "Platform commoditization.",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Casino Marketing Agencies",
          cr4: 52.0,
          probit: "LH",
          operatingMargin: 14.7,
          cagr: 6.8,
          cagrForward: 7.9,
          classificationCodes: [],
          leaders: [
            {
              name: "The Innovation Group",
              ticker: "Private",
              share: 19.0,
              strengths: [
                "Player database analytics",
                "VIP program design",
              ],
            },
          ],
          features: [
            {
              title: "Behavioral Segmentation",
              description: "Micro-targeted campaigns by spend patterns.",
            },
          ],
          opportunity: "Gen Z experiential marketing.",
          threat: "Ad fatigue from over-promotion.",
        },
        {
          name: "Influencer & Sponsorship Firms",
          cr4: 48.0,
          probit: "HH",
          operatingMargin: 25.6,
          cagr: 11.2,
          cagrForward: 13.1,
          classificationCodes: [],
          leaders: [
            {
              name: "WinView",
              ticker: "Private",
              share: 16.0,
              strengths: [
                "Sports influencer networks",
                "Social casino tie-ins",
              ],
            },
          ],
          features: [
            {
              title: "Sports Personality Partnerships",
              description: "Authentic endorsements driving acquisition.",
            },
          ],
          opportunity: "Esports casino sponsorships.",
          threat: "Scandal risks with influencers.",
        },
        {
          name: "Ticket & Event Sales Platforms",
          cr4: 76.0,
          probit: "HL",
          operatingMargin: 20.1,
          cagr: 5.4,
          cagrForward: 6.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Ticketmaster",
              ticker: "TKTM",
              share: 42.0,
              strengths: [
                "Residency show dominance",
                "Dynamic pricing",
              ],
            },
          ],
          features: [
            {
              title: "Bundled Entertainment Packages",
              description: "Gaming + concert packages boosting dwell time.",
            },
          ],
          opportunity: "Residency extensions post-pandemic.",
          threat: "Secondary market competition.",
        },
        {
          name: "Loyalty Program Managers",
          cr4: 67.0,
          probit: "HH",
          operatingMargin: 27.9,
          cagr: 7.2,
          cagrForward: 8.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Seven Stars (Caesars)",
              ticker: "CZR",
              share: 24.0,
              strengths: [
                "Cross-property redemption",
                "High-value retention",
              ],
            },
          ],
          features: [
            {
              title: "Blockchain Loyalty Tokens",
              description: "Tradeable points across partner ecosystems.",
            },
          ],
          opportunity: "Tiered VIP experiential rewards.",
          threat: "Point dilution devaluing programs.",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "High-Net-Worth Gamblers",
          cr4: 45.0,
          probit: "HL",
          operatingMargin: 0.0,
          cagr: 4.2,
          cagrForward: 5.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Whale Players",
              ticker: "N/A",
              share: 35.0,
              strengths: [
                "High table limits",
                "Private jet arrivals",
              ],
            },
          ],
          features: [
            {
              title: "Dedicated Host Services",
              description: "24/7 concierge for ultra-high rollers.",
            },
          ],
          opportunity: "Asia whale recovery post-COVID.",
          threat: "Capital flight regulations.",
        },
        {
          name: "Premium Mass Market",
          cr4: 58.0,
          probit: "HH",
          operatingMargin: 0.0,
          cagr: 6.7,
          cagrForward: 7.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Affluent Tourists",
              ticker: "N/A",
              share: 28.0,
              strengths: [
                "Weekend packages",
                "MICE attendees",
              ],
            },
          ],
          features: [
            {
              title: "Integrated Resort Appeal",
              description: "Family-friendly amenities driving mid-tier spend.",
            },
          ],
          opportunity: "Middle East luxury tourism.",
          threat: "Economic slowdowns impacting travel.",
        },
        {
          name: "Slot Players",
          cr4: 62.0,
          probit: "LH",
          operatingMargin: 0.0,
          cagr: 8.9,
          cagrForward: 10.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Frequent Low-Stakes Players",
              ticker: "N/A",
              share: 40.0,
              strengths: [
                "High volume",
                "Loyalty program engagement",
              ],
            },
          ],
          features: [
            {
              title: "Progressive Jackpots",
              description: "Life-changing prize pools driving frequency.",
            },
          ],
          opportunity: "Skill-based slot innovations.",
          threat: "House edge transparency demands.",
        },
        {
          name: "Sports Bettors",
          cr4: 51.0,
          probit: "LH",
          operatingMargin: 0.0,
          cagr: 15.4,
          cagrForward: 18.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Millennial Bettors",
              ticker: "N/A",
              share: 32.0,
              strengths: [
                "Mobile-first",
                "Parlay preferences",
              ],
            },
          ],
          features: [
            {
              title: "Live In-Play Betting",
              description: "Real-time wagering during events.",
            },
          ],
          opportunity: "Global sports league partnerships.",
          threat: "Problem gambling scrutiny.",
        },
        {
          name: "Online-Only Gamblers",
          cr4: 39.0,
          probit: "HH",
          operatingMargin: 0.0,
          cagr: 13.8,
          cagrForward: 16.2,
          classificationCodes: [],
          leaders: [
            {
              name: "iGaming Natives",
              ticker: "N/A",
              share: 25.0,
              strengths: [
                "Crypto users",
                "Cross-border play",
              ],
            },
          ],
          features: [
            {
              title: "Social Casino Cross-Sell",
              description: "Free-to-play funnels to real money.",
            },
          ],
          opportunity: "VR casino immersion.",
          threat: "Age verification hurdles.",
        },
      ],
    },
  ],
};
