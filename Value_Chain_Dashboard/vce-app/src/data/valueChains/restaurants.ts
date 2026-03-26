import type { ValueChain } from '../../types/valueChain';

export const restaurantsData: ValueChain = {
  code: "C2-6010",
  name: "Restaurants",
  imCode: "C2-6010",
  classificationCode: "C2-6010",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Beef & Dairy Farming",
          cr4: 42.0,
          probit: "LH",
          cagr: 3.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Tyson Foods",
              ticker: "TSN",
              share: 18.0,
              strengths: [
                "Scale efficiencies",
                "Integrated supply chain",
              ],
            },
            {
              name: "JBS USA",
              ticker: "JBSAY",
              share: 12.0,
              strengths: [
                "Global sourcing",
                "Cost leadership",
              ],
            },
          ],
          features: [
            {
              title: "Local Sourcing",
              description: "Restaurants increasingly source locally for freshness and sustainability",
            },
          ],
          opportunity: "Rising demand for sustainable and antibiotic-free proteins",
          threat: "Feed cost volatility due to corn and soy prices",
        },
        {
          name: "Vegetable Farming",
          cr4: 35.0,
          probit: "LL",
          cagr: 2.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Fresh Del Monte",
              ticker: "FDP",
              share: 15.0,
              strengths: [
                "Fresh produce supply",
                "Logistics expertise",
              ],
            },
          ],
          features: [
            {
              title: "Seasonal Supply",
              description: "Dependent on regional growing seasons and weather",
            },
          ],
          opportunity: "Organic produce premium pricing",
          threat: "Climate change impacts on yields",
        },
        {
          name: "Beverage Production",
          cr4: 85.0,
          probit: "HH",
          cagr: 4.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Coca-Cola",
              ticker: "KO",
              share: 45.0,
              strengths: [
                "Brand dominance",
                "Distribution network",
              ],
            },
            {
              name: "PepsiCo",
              ticker: "PEP",
              share: 28.0,
              strengths: [
                "Diversified portfolio",
                "Restaurant exclusivity",
              ],
            },
          ],
          features: [
            {
              title: "Exclusive Contracts",
              description: "Long-term supply agreements with chains like McDonald's",
            },
          ],
          opportunity: "Low/no-sugar beverage innovation",
          threat: "Health regulations on sugary drinks",
          niche: {
            name: "Monster Beverage",
            ticker: "MNST",
            share: 5.0,
            cagr: 12.1,
            margin: ">25%",
            strategy: "Energy drink expansion in QSR",
            valuation: "P/E 35x",
          },
        },
        {
          name: "Bakery Ingredients",
          cr4: 55.0,
          probit: "HL",
          cagr: 2.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Ardent Mills",
              ticker: "Private",
              share: 22.0,
              strengths: [
                "Flour milling scale",
                "Quality consistency",
              ],
            },
          ],
          features: [
            {
              title: "Commodity Pricing",
              description: "Wheat flour prices tied to global grain markets",
            },
          ],
          opportunity: "Gluten-free flour demand growth",
          threat: "Wheat price fluctuations",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Food Processing",
          cr4: 68.0,
          probit: "HL",
          cagr: 3.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Sysco",
              ticker: "SYY",
              share: 25.0,
              strengths: [
                "Broadline distribution",
                "Private label",
              ],
            },
            {
              name: "US Foods",
              ticker: "USFD",
              share: 18.0,
              strengths: [
                "Custom processing",
                "Supply chain tech",
              ],
            },
          ],
          features: [
            {
              title: "Portion Control",
              description: "Pre-cut meats and vegetables for restaurant prep",
            },
          ],
          opportunity: "Ready-to-cook meal kits",
          threat: "Labor shortages in processing plants",
        },
        {
          name: "Meat Processing",
          cr4: 72.0,
          probit: "LH",
          cagr: 4.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Pilgrim's Pride",
              ticker: "PPC",
              share: 20.0,
              strengths: [
                "Poultry processing scale",
                "Export capabilities",
              ],
            },
          ],
          features: [
            {
              title: "Value-Added",
              description: "Marinated and pre-seasoned proteins",
            },
          ],
          opportunity: "Plant-based meat alternatives",
          threat: "Food safety recalls",
        },
        {
          name: "Frozen Foods",
          cr4: 60.0,
          probit: "LL",
          cagr: 2.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Lamb Weston",
              ticker: "LW",
              share: 22.0,
              strengths: [
                "French fries dominance",
                "Global reach",
              ],
            },
          ],
          features: [
            {
              title: "Cold Chain",
              description: "Requires specialized frozen logistics",
            },
          ],
          opportunity: "Frozen appetizers expansion",
          threat: "Rising energy costs for freezing",
        },
        {
          name: "Sauce & Condiment Mfg",
          cr4: 78.0,
          probit: "HH",
          cagr: 5.1,
          classificationCodes: [],
          leaders: [
            {
              name: "McCormick",
              ticker: "MKC",
              share: 30.0,
              strengths: [
                "Flavor innovation",
                "Private label",
              ],
            },
          ],
          features: [
            {
              title: "Custom Blends",
              description: "Restaurant-specific seasoning formulations",
            },
          ],
          opportunity: "Global flavor fusion trends",
          threat: "Commodity spice price volatility",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Kitchen Operations",
          cr4: 15.0,
          probit: "LH",
          cagr: 4.8,
          classificationCodes: [],
          leaders: [
            {
              name: "McDonald's",
              ticker: "MCD",
              share: 5.0,
              strengths: [
                "Standardized recipes",
                "Supply chain control",
              ],
            },
          ],
          features: [
            {
              title: "Central Kitchens",
              description: "Hub-and-spoke prep for consistency",
            },
          ],
          opportunity: "Automation in food prep",
          threat: "Labor cost inflation",
        },
        {
          name: "Recipe Development",
          cr4: 22.0,
          probit: "HL",
          cagr: 3.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Yum! Brands",
              ticker: "YUM",
              share: 8.0,
              strengths: [
                "Menu innovation pipeline",
                "Test kitchens",
              ],
            },
          ],
          features: [
            {
              title: "Limited-Time Offers",
              description: "Seasonal and promotional menu engineering",
            },
          ],
          opportunity: "Health-focused menu redesign",
          threat: "Copycat competition",
        },
        {
          name: "Quality Control",
          cr4: 28.0,
          probit: "HH",
          cagr: 4.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Chipotle",
              ticker: "CMG",
              share: 6.0,
              strengths: [
                "Fresh-only sourcing",
                "Transparency",
              ],
            },
          ],
          features: [
            {
              title: "HACCP Systems",
              description: "Hazard Analysis Critical Control Points compliance",
            },
          ],
          opportunity: "Blockchain food traceability",
          threat: "Supply contamination risks",
        },
        {
          name: "Equipment Manufacturing",
          cr4: 65.0,
          probit: "HL",
          cagr: 3.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Middleby",
              ticker: "MIDD",
              share: 25.0,
              strengths: [
                "Commercial kitchen appliances",
                "Energy efficiency",
              ],
            },
          ],
          features: [
            {
              title: "Smart Ovens",
              description: "IoT-enabled cooking equipment",
            },
          ],
          opportunity: "Kitchen automation robotics",
          threat: "Supply chain disruptions for parts",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Food Distribution",
          cr4: 52.0,
          probit: "HL",
          cagr: 3.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Sysco",
              ticker: "SYY",
              share: 28.0,
              strengths: [
                "National footprint",
                "Fresh/cold chain",
              ],
            },
            {
              name: "US Foods",
              ticker: "USFD",
              share: 15.0,
              strengths: [
                "Regional density",
                "E-commerce platform",
              ],
            },
          ],
          features: [
            {
              title: "Just-in-Time Delivery",
              description: "Daily fresh deliveries to minimize inventory",
            },
          ],
          opportunity: "Last-mile optimization tech",
          threat: "Fuel price volatility",
        },
        {
          name: "Delivery Aggregators",
          cr4: 75.0,
          probit: "LH",
          cagr: 15.2,
          classificationCodes: [],
          leaders: [
            {
              name: "DoorDash",
              ticker: "DASH",
              share: 35.0,
              strengths: [
                "Market share leader",
                "DashPass loyalty",
              ],
            },
            {
              name: "Uber Eats",
              ticker: "UBER",
              share: 25.0,
              strengths: [
                "Global scale",
                "Integrated payments",
              ],
            },
          ],
          features: [
            {
              title: "Runner Model",
              description: "Aggregator platforms dispatching independent drivers",
            },
          ],
          opportunity: "Ghost kitchen partnerships",
          threat: "Commission fee disputes",
        },
        {
          name: "Cold Chain Logistics",
          cr4: 48.0,
          probit: "LL",
          cagr: 4.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Lineage Logistics",
              ticker: "Private",
              share: 18.0,
              strengths: [
                "Refrigerated warehousing",
                "Automation",
              ],
            },
          ],
          features: [
            {
              title: "Temperature Control",
              description: "Maintaining cold chain integrity",
            },
          ],
          opportunity: "Dark store networks",
          threat: "Equipment breakdown risks",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Quick Service Restaurants",
          cr4: 45.0,
          probit: "HH",
          cagr: 5.2,
          classificationCodes: [],
          leaders: [
            {
              name: "McDonald's",
              ticker: "MCD",
              share: 22.0,
              strengths: [
                "Drive-thru dominance",
                "App ordering",
              ],
            },
            {
              name: "Starbucks",
              ticker: "SBUX",
              share: 12.0,
              strengths: [
                "Mobile ordering",
                "Loyalty program",
              ],
            },
          ],
          features: [
            {
              title: "Digital Sales",
              description: "App and kiosk ordering systems",
            },
          ],
          opportunity: "Value menu promotions",
          threat: "Wage inflation impact",
        },
        {
          name: "Fast Casual",
          cr4: 38.0,
          probit: "LH",
          cagr: 6.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Chipotle",
              ticker: "CMG",
              share: 15.0,
              strengths: [
                "Digital sales growth",
                "Chipotlane drive-thru",
              ],
            },
          ],
          features: [
            {
              title: "Customization",
              description: "Build-your-own meal platforms",
            },
          ],
          opportunity: "Pickup lanes expansion",
          threat: "Premium pricing sensitivity",
        },
        {
          name: "Full Service Dining",
          cr4: 25.0,
          probit: "LL",
          cagr: 2.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Darden Restaurants",
              ticker: "DRI",
              share: 8.0,
              strengths: [
                "Olive Garden brand",
                "ToGo expansion",
              ],
            },
          ],
          features: [
            {
              title: "Server-Mediated",
              description: "Table service experience",
            },
          ],
          opportunity: "Off-premise sales growth",
          threat: "Server labor shortages",
        },
        {
          name: "Digital Ordering",
          cr4: 82.0,
          probit: "HH",
          cagr: 18.5,
          classificationCodes: [],
          leaders: [
            {
              name: "DoorDash",
              ticker: "DASH",
              share: 40.0,
              strengths: [
                "Marketplace dominance",
                "Ads revenue",
              ],
            },
          ],
          features: [
            {
              title: "Third-Party Platforms",
              description: "Aggregators driving delivery sales",
            },
          ],
          opportunity: "First-party app development",
          threat: "Platform commission increases",
          niche: {
            name: "Toast",
            ticker: "TOST",
            share: 12.0,
            cagr: 25.3,
            margin: ">20%",
            strategy: "POS + online ordering SaaS",
            valuation: "P/E 65x",
          },
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Dining Experience",
          cr4: 18.0,
          probit: "HL",
          cagr: 3.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Darden",
              ticker: "DRI",
              share: 6.0,
              strengths: [
                "Multi-brand portfolio",
                "Guest feedback systems",
              ],
            },
          ],
          features: [
            {
              title: "Atmosphere Design",
              description: "Ambiance and service quality",
            },
          ],
          opportunity: "Experiential dining concepts",
          threat: "Post-pandemic dine-in decline",
        },
        {
          name: "Loyalty Programs",
          cr4: 55.0,
          probit: "HH",
          cagr: 7.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Starbucks Rewards",
              ticker: "SBUX",
              share: 28.0,
              strengths: [
                "Personalization",
                "Gamification",
              ],
            },
            {
              name: "McDonald's App",
              ticker: "MCD",
              share: 15.0,
              strengths: [
                "Deal stacking",
                "Frequency rewards",
              ],
            },
          ],
          features: [
            {
              title: "Data-Driven",
              description: "Customer analytics for retention",
            },
          ],
          opportunity: "AI personalized offers",
          threat: "Data privacy regulations",
        },
        {
          name: "Delivery Experience",
          cr4: 70.0,
          probit: "LH",
          cagr: 16.8,
          classificationCodes: [],
          leaders: [
            {
              name: "DoorDash",
              ticker: "DASH",
              share: 42.0,
              strengths: [
                "Real-time tracking",
                "DashMart convenience",
              ],
            },
          ],
          features: [
            {
              title: "Contactless Delivery",
              description: "Post-COVID hygiene standards",
            },
          ],
          opportunity: "Subscription models",
          threat: "Delivery time variability",
        },
        {
          name: "Feedback & Reviews",
          cr4: 62.0,
          probit: "LL",
          cagr: 4.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Yelp",
              ticker: "YELP",
              share: 35.0,
              strengths: [
                "Local search dominance",
                "Review authenticity",
              ],
            },
          ],
          features: [
            {
              title: "Social Proof",
              description: "Online ratings driving 80% of choices",
            },
          ],
          opportunity: "AI sentiment analysis",
          threat: "Fake review proliferation",
        },
      ],
    },
  ],
};
