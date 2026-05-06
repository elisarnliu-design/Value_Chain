import type { ValueChain } from '../../types/valueChain';

export const a2_5010Data: ValueChain = {
  code: "A2-5010",
  name: "Cruises & Fun",
  imCode: "A2-5010",
  classificationCode: "A2-5010",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Shipbuilding",
          cr4: 85.0,
          probit: "LH",
          operatingMargin: 6.2,
          cagr: 7.5,
          cagrForward: 8.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Fincantieri",
              ticker: "FCN.MI",
              share: 42.0,
              strengths: [
                "Largest cruise ship builder",
                "Advanced green tech integration",
              ],
            },
            {
              name: "Meyer Werft",
              ticker: "N/A",
              share: 25.0,
              strengths: [
                "Luxury & expedition expertise",
                "German engineering precision",
              ],
            },
          ],
          features: [
            {
              title: "Newbuild Surge",
              description: "Over a dozen new ships entering service in 2026, adding tens of thousands of berths.",
            },
            {
              title: "Smart Ship Tech",
              description: "Ships built with digital infrastructure, smart energy systems from day one.",
            },
          ],
          opportunity: "Rising demand for expedition and luxury vessels drives order backlog.",
          threat: "High steel prices and supply chain delays impact construction timelines.",
        },
        {
          name: "Fuel Supply",
          cr4: 72.0,
          probit: "LL",
          operatingMargin: 4.1,
          cagr: 5.2,
          cagrForward: 6.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Shell Marine",
              ticker: "SHEL",
              share: 35.0,
              strengths: [
                "LNG fuel leadership",
                "Decarbonization solutions",
              ],
            },
          ],
          features: [
            {
              title: "LNG Transition",
              description: "Cruise lines shifting to liquefied natural gas for emissions reduction.",
            },
          ],
          opportunity: "Biofuels and green hydrogen adoption creates premium fuel demand.",
          threat: "Geopolitical tensions disrupt bunker fuel availability.",
        },
        {
          name: "Food & Beverage Supply",
          cr4: 68.0,
          probit: "HL",
          operatingMargin: 12.4,
          cagr: 6.1,
          cagrForward: 7.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Sysco",
              ticker: "SYY",
              share: 28.0,
              strengths: [
                "Global logistics network",
                "Fresh/perishable expertise",
              ],
            },
          ],
          features: [
            {
              title: "Culinary Cruises",
              description: "Demand for gourmet, themed dining experiences boosts premium ingredient needs.",
            },
          ],
          opportunity: "Sustainable seafood and plant-based menus align with guest preferences.",
          threat: "Inflation in commodity prices squeezes margins.",
        },
        {
          name: "Port Infrastructure",
          cr4: 55.0,
          probit: "LH",
          operatingMargin: 9.8,
          cagr: 8.4,
          cagrForward: 9.2,
          classificationCodes: [],
          leaders: [
            {
              name: "DP World",
              ticker: "DPW",
              share: 22.0,
              strengths: [
                "Terminal expansion",
                "Cruise-specific facilities",
              ],
            },
          ],
          features: [
            {
              title: "Homeport Growth",
              description: "New terminals support record 38M passengers in 2026.",
            },
          ],
          opportunity: "Emerging markets like Asia drive port development investments.",
          threat: "Environmental regulations limit expansion in key destinations.",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Ship Design & Engineering",
          cr4: 78.0,
          probit: "HH",
          operatingMargin: 15.7,
          cagr: 9.2,
          cagrForward: 10.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Damen Design",
              ticker: "N/A",
              share: 30.0,
              strengths: [
                "Modular designs",
                "Digital twin tech",
              ],
            },
          ],
          features: [
            {
              title: "Sustainable Design",
              description: "Engineering for zero-emission propulsion and energy efficiency.",
            },
          ],
          opportunity: "AI-optimized itineraries and layouts for newbuilds.",
          threat: "Talent shortage in naval architecture.",
        },
        {
          name: "Cruise Tech Systems",
          cr4: 82.0,
          probit: "LH",
          operatingMargin: 11.3,
          cagr: 12.1,
          cagrForward: 14.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Starlink (SpaceX)",
              ticker: "N/A",
              share: 40.0,
              strengths: [
                "High-speed connectivity",
                "Global coverage",
              ],
            },
          ],
          features: [
            {
              title: "Smart Ships",
              description: "IoT platforms for predictive maintenance and guest personalization.",
            },
          ],
          opportunity: "Data analytics for dynamic pricing and operations.",
          threat: "Cybersecurity risks in connected vessels.",
          niche: {
            name: "Touchstar Cruises",
            ticker: "TCS",
            share: 5.0,
            cagr: 18.5,
            margin: ">25%",
            strategy: "AI personalization",
            valuation: "P/E 32x",
          },
        },
        {
          name: "Onboard Entertainment Content",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 18.2,
          cagr: 7.8,
          cagrForward: 8.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Live Nation",
              ticker: "LYV",
              share: 26.0,
              strengths: [
                "Exclusive artist partnerships",
                "Production expertise",
              ],
            },
          ],
          features: [
            {
              title: "Themed Productions",
              description: "Music, Broadway-style shows tailored for experiential travel.",
            },
          ],
          opportunity: "VR/AR immersive experiences for younger demographics.",
          threat: "Content licensing cost inflation.",
        },
        {
          name: "Sustainability Tech",
          cr4: 70.0,
          probit: "LH",
          operatingMargin: 8.9,
          cagr: 15.4,
          cagrForward: 17.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Wärtsilä",
              ticker: "WRT1V.HE",
              share: 33.0,
              strengths: [
                "Hybrid propulsion",
                "Waste heat recovery",
              ],
            },
          ],
          features: [
            {
              title: "Decarbonization",
              description: "Shore power, battery systems, exhaust scrubbers.",
            },
          ],
          opportunity: "Regulatory mandates accelerate green tech adoption.",
          threat: "Unproven tech scalability at sea.",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Ocean Cruise Operators",
          cr4: 92.0,
          probit: "HH",
          operatingMargin: 22.4,
          cagr: 10.2,
          cagrForward: 10.15,
          classificationCodes: [],
          leaders: [
            {
              name: "Carnival Corp",
              ticker: "CCL",
              share: 45.0,
              strengths: [
                "Mass market scale",
                "Fleet modernization",
              ],
            },
            {
              name: "Royal Caribbean",
              ticker: "RCL",
              share: 28.0,
              strengths: [
                "Icon-class innovation",
                "Private destinations",
              ],
            },
            {
              name: "Norwegian Cruise Line",
              ticker: "NCLH",
              share: 14.0,
              strengths: [
                "Freestyle cruising",
                "Loyalty program",
              ],
            },
          ],
          features: [
            {
              title: "Record Deployment",
              description: "260M passenger cruise days in 2026 support 38M passengers.",
            },
          ],
          opportunity: "Yield management from dynamic pricing.",
          threat: "Overcapacity from newbuilds pressures pricing.",
        },
        {
          name: "Expedition Cruising",
          cr4: 76.0,
          probit: "HH",
          operatingMargin: 28.7,
          cagr: 14.8,
          cagrForward: 16.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Viking Cruises",
              ticker: "VIK",
              share: 32.0,
              strengths: [
                "Adults-only luxury",
                "Cultural immersion",
              ],
            },
            {
              name: "Hurtigruten",
              ticker: "N/A",
              share: 22.0,
              strengths: [
                "Polar expertise",
                "Zero-emission ships",
              ],
            },
          ],
          features: [
            {
              title: "High-End Demand",
              description: "Younger travelers drive luxury expedition growth.",
            },
          ],
          opportunity: "Premium pricing for exclusive destinations.",
          threat: "Geopolitical risks in remote areas.",
        },
        {
          name: "River Cruising",
          cr4: 88.0,
          probit: "HL",
          operatingMargin: 19.5,
          cagr: 6.7,
          cagrForward: 7.4,
          classificationCodes: [],
          leaders: [
            {
              name: "AmaWaterways",
              ticker: "N/A",
              share: 35.0,
              strengths: [
                "Culinary focus",
                "Small ship intimacy",
              ],
            },
          ],
          features: [
            {
              title: "Europe Dominance",
              description: "Rhine, Danube routes with stable demand.",
            },
          ],
          opportunity: "Asia river expansion.",
          threat: "Water level fluctuations.",
        },
        {
          name: "Yacht & Small Ship",
          cr4: 62.0,
          probit: "LH",
          operatingMargin: 16.3,
          cagr: 13.5,
          cagrForward: 15.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Ponant",
              ticker: "N/A",
              share: 25.0,
              strengths: [
                "French luxury",
                "Expedition yachts",
              ],
            },
          ],
          features: [
            {
              title: "Exclusivity",
              description: "Charter and private voyages for HNWI.",
            },
          ],
          opportunity: "Superyacht charters post-pandemic.",
          threat: "Crew shortages for small operations.",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Travel Agencies",
          cr4: 45.0,
          probit: "LH",
          operatingMargin: 7.2,
          cagr: 9.1,
          cagrForward: 10.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Expedia Group",
              ticker: "EXPE",
              share: 18.0,
              strengths: [
                "Digital platforms",
                "Cruise specialist teams",
              ],
            },
            {
              name: "Internova",
              ticker: "N/A",
              share: 12.0,
              strengths: [
                "Luxury focus",
                "Advisory services",
              ],
            },
          ],
          features: [
            {
              title: "Online Shift",
              description: "Tech-savvy bookings rise with transparency.",
            },
          ],
          opportunity: "AI recommendation engines.",
          threat: "Direct bookings erode commissions.",
        },
        {
          name: "OTA Platforms",
          cr4: 78.0,
          probit: "HH",
          operatingMargin: 24.6,
          cagr: 11.4,
          cagrForward: 12.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Booking Holdings",
              ticker: "BKNG",
              share: 50.0,
              strengths: [
                "Global reach",
                "Price comparison",
              ],
            },
          ],
          features: [
            {
              title: "Digital Booking",
              description: "Convenience drives 70%+ of bookings online.",
            },
          ],
          opportunity: "Bundled travel packages.",
          threat: "Commission compression.",
        },
        {
          name: "Tour Operators",
          cr4: 60.0,
          probit: "HL",
          operatingMargin: 13.8,
          cagr: 8.3,
          cagrForward: 9.1,
          classificationCodes: [],
          leaders: [
            {
              name: "TUI Group",
              ticker: "TUI1.L",
              share: 24.0,
              strengths: [
                "Integrated resorts",
                "European dominance",
              ],
            },
          ],
          features: [
            {
              title: "Packaged Tours",
              description: "Cruise + land extensions for full itineraries.",
            },
          ],
          opportunity: "Pre/post-cruise extensions.",
          threat: "Airline disruptions impact packages.",
        },
        {
          name: "Freight & Logistics",
          cr4: 82.0,
          probit: "LL",
          operatingMargin: 5.4,
          cagr: 6.5,
          cagrForward: 7.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Maersk",
              ticker: "MAERSK-B.CO",
              share: 38.0,
              strengths: [
                "Container capacity",
                "Cold chain",
              ],
            },
          ],
          features: [
            {
              title: "Supply Chain",
              description: "Just-in-time provisioning for provisions.",
            },
          ],
          opportunity: "Automated warehousing.",
          threat: "Red Sea disruptions.",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Direct Sales Channels",
          cr4: 90.0,
          probit: "HH",
          operatingMargin: 26.1,
          cagr: 11.2,
          cagrForward: 11.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Carnival Direct",
              ticker: "CCL",
              share: 48.0,
              strengths: [
                "Loyalty programs",
                "App-based sales",
              ],
            },
          ],
          features: [
            {
              title: "Repeat Business",
              description: "60%+ bookings from loyalty members.",
            },
          ],
          opportunity: "Personalized upsell via CRM.",
          threat: "Website conversion optimization lags.",
        },
        {
          name: "Digital Marketing",
          cr4: 70.0,
          probit: "LH",
          operatingMargin: 14.7,
          cagr: 13.6,
          cagrForward: 15.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Google Ads (Alphabet)",
              ticker: "GOOGL",
              share: 35.0,
              strengths: [
                "Search dominance",
                "Retargeting",
              ],
            },
          ],
          features: [
            {
              title: "Social Proof",
              description: "Influencer and user-generated content drives bookings.",
            },
          ],
          opportunity: "Gen Z TikTok campaigns.",
          threat: "Ad platform fee increases.",
        },
        {
          name: "Trade Shows & Events",
          cr4: 52.0,
          probit: "LL",
          operatingMargin: 6.8,
          cagr: 4.9,
          cagrForward: 5.6,
          classificationCodes: [],
          leaders: [
            {
              name: "CLIA",
              ticker: "N/A",
              share: 28.0,
              strengths: [
                "Industry events",
                "Agent training",
              ],
            },
          ],
          features: [
            {
              title: "Agent Education",
              description: "Seatrade Cruise Global drives B2B sales.",
            },
          ],
          opportunity: "Virtual trade shows.",
          threat: "Declining physical attendance.",
        },
        {
          name: "Corporate & Group Sales",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 17.2,
          cagr: 7.4,
          cagrForward: 8.2,
          classificationCodes: [],
          leaders: [
            {
              name: "AMADEUS IT",
              ticker: "AMS.MC",
              share: 22.0,
              strengths: [
                "Corporate portals",
                "MICE expertise",
              ],
            },
          ],
          features: [
            {
              title: "Incentive Travel",
              description: "Charter buyouts for events.",
            },
          ],
          opportunity: "Post-pandemic MICE rebound.",
          threat: "Economic slowdown cuts budgets.",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Mass Market Families",
          cr4: 55.0,
          probit: "HL",
          operatingMargin: 20.1,
          cagr: 9.3,
          cagrForward: 9.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Carnival Shoppers",
              ticker: "N/A",
              share: 40.0,
              strengths: [
                "Value seekers",
                "Multi-gen travel",
              ],
            },
          ],
          features: [
            {
              title: "Short Getaways",
              description: "3-5 day cruises dominate 44% share.",
            },
          ],
          opportunity: "Kid-friendly programming.",
          threat: "Economic sensitivity.",
        },
        {
          name: "Premium Millennials/Gen Z",
          cr4: 48.0,
          probit: "HH",
          operatingMargin: 25.8,
          cagr: 16.7,
          cagrForward: 18.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Virgin Voyagers",
              ticker: "N/A",
              share: 25.0,
              strengths: [
                "Instagramable experiences",
                "Wellness focus",
              ],
            },
          ],
          features: [
            {
              title: "Experiential Travel",
              description: "Adventure, music, cultural themes.",
            },
          ],
          opportunity: "Flexible, short luxury.",
          threat: "Time poverty.",
        },
        {
          name: "Luxury Boomers",
          cr4: 72.0,
          probit: "HH",
          operatingMargin: 32.4,
          cagr: 5.8,
          cagrForward: 6.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Seabourn Guests",
              ticker: "N/A",
              share: 35.0,
              strengths: [
                "All-inclusive",
                "Personal service",
              ],
            },
          ],
          features: [
            {
              title: "Longer Itineraries",
              description: "6-10 day voyages hold 44% market.",
            },
          ],
          opportunity: "Grandkids multi-gen.",
          threat: "Health/travel restrictions.",
        },
        {
          name: "Expedition Enthusiasts",
          cr4: 60.0,
          probit: "LH",
          operatingMargin: 27.9,
          cagr: 17.2,
          cagrForward: 19.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Antarctica Explorers",
              ticker: "N/A",
              share: 28.0,
              strengths: [
                "Bucket-list trips",
                "Eco-conscious",
              ],
            },
          ],
          features: [
            {
              title: "Remote Destinations",
              description: "Arctic, Galapagos demand surges.",
            },
          ],
          opportunity: "Climate-positive voyages.",
          threat: "Capacity constraints.",
        },
        {
          name: "Corporate Incentive Groups",
          cr4: 38.0,
          probit: "HL",
          operatingMargin: 22.6,
          cagr: 8.9,
          cagrForward: 9.7,
          classificationCodes: [],
          leaders: [
            {
              name: "MICE Travelers",
              ticker: "N/A",
              share: 20.0,
              strengths: [
                "Team-building",
                "Rewards",
              ],
            },
          ],
          features: [
            {
              title: "Charter Market",
              description: "Full-ship buyouts for events.",
            },
          ],
          opportunity: "Hybrid work retreats.",
          threat: "Budget cuts.",
        },
      ],
    },
  ],
};
