import type { ValueChain } from '../../types/valueChain';

export const a2_1030Data: ValueChain = {
  code: "A2-1030",
  name: "Books",
  imCode: "A2-1030",
  classificationCode: "A2-1030",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Paper & Pulp",
          cr4: 65.0,
          probit: "LL",
          operatingMargin: 8.2,
          cagr: 1.2,
          cagrForward: 1.5,
          classificationCodes: [],
          leaders: [
            {
              name: "International Paper",
              ticker: "IP",
              share: 22.0,
              strengths: [
                "Scale in pulp production",
                "Sustainability certifications",
              ],
            },
            {
              name: "WestRock",
              ticker: "WRK",
              share: 18.0,
              strengths: [
                "Integrated operations",
                "Recycled content focus",
              ],
            },
          ],
          features: [
            {
              title: "Declining Demand",
              description: "Shift to digital reduces paper needs, pressuring volumes",
            },
          ],
          opportunity: "Sustainable pulp for eco-friendly books",
          threat: "Digital substitution erodes physical book paper demand",
        },
        {
          name: "Ink & Coatings",
          cr4: 70.0,
          probit: "HL",
          operatingMargin: 12.4,
          cagr: 2.1,
          cagrForward: 2.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Sun Chemical",
              ticker: "SIC",
              share: 28.0,
              strengths: [
                "Wide color gamut inks",
                "Digital printing solutions",
              ],
            },
          ],
          features: [
            {
              title: "Eco-Friendly Inks",
              description: "Soy-based and water-based formulations gaining traction",
            },
          ],
          opportunity: "Specialty inks for premium print quality",
          threat: "Raw material price volatility from petrochemicals",
        },
        {
          name: "Content Creation",
          cr4: 45.0,
          probit: "LH",
          operatingMargin: 5.6,
          cagr: 6.2,
          cagrForward: 7.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Freelance Platforms",
              ticker: "UPWK",
              share: 15.0,
              strengths: [
                "Global talent pool",
                "AI-assisted editing",
              ],
            },
          ],
          features: [
            {
              title: "AI Writing Tools",
              description: "Accelerating manuscript generation and editing",
            },
          ],
          opportunity: "Self-publishing boom creates demand for ghostwriters",
          threat: "AI commoditizes entry-level content",
          niche: {
            name: "Reedsy",
            ticker: "N/A",
            share: 8.0,
            cagr: 12.5,
            margin: ">20%",
            strategy: "Marketplace for vetted professionals",
            valuation: "P/S 15x",
          },
        },
        {
          name: "Editing Services",
          cr4: 55.0,
          probit: "HL",
          operatingMargin: 15.3,
          cagr: 3.4,
          cagrForward: 4.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Scholastic",
              ticker: "SCHL",
              share: 20.0,
              strengths: [
                "Educational expertise",
                "In-house teams",
              ],
            },
          ],
          features: [
            {
              title: "Developmental Editing",
              description: "Structural feedback for complex narratives",
            },
          ],
          opportunity: "Rise in genre fiction requires specialized editors",
          threat: "Outsourcing to low-cost regions",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Book Design",
          cr4: 40.0,
          probit: "LH",
          operatingMargin: 9.1,
          cagr: 5.8,
          cagrForward: 6.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Penguin Random House",
              ticker: "N/A",
              share: 18.0,
              strengths: [
                "Award-winning designers",
                "Brand consistency",
              ],
            },
          ],
          features: [
            {
              title: "Cover Design",
              description: "Critical for impulse buys in retail",
            },
          ],
          opportunity: "Digital-first designs for e-books and audiobooks",
          threat: "Template-based tools reduce custom work",
        },
        {
          name: "Typesetting",
          cr4: 60.0,
          probit: "LL",
          operatingMargin: 7.2,
          cagr: 1.8,
          cagrForward: 2.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Adobe",
              ticker: "ADBE",
              share: 25.0,
              strengths: [
                "InDesign dominance",
                "Cross-platform compatibility",
              ],
            },
          ],
          features: [
            {
              title: "Reflowable Layouts",
              description: "Essential for multi-device e-reading",
            },
          ],
          opportunity: "Interactive e-book typesetting",
          threat: "Automation displaces skilled compositors",
        },
        {
          name: "Pre-Press",
          cr4: 50.0,
          probit: "HL",
          operatingMargin: 11.5,
          cagr: 2.9,
          cagrForward: 3.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Quad/Graphics",
              ticker: "QUAD",
              share: 22.0,
              strengths: [
                "Digital workflow integration",
                "Color management",
              ],
            },
          ],
          features: [
            {
              title: "Proofing Systems",
              description: "Soft proofing reduces physical waste",
            },
          ],
          opportunity: "Variable data printing for personalized books",
          threat: "Digital-only shift bypasses print pre-press",
        },
        {
          name: "Manuscript Acquisition",
          cr4: 75.0,
          probit: "HH",
          operatingMargin: 18.7,
          cagr: 4.2,
          cagrForward: 5.0,
          classificationCodes: [],
          leaders: [
            {
              name: "HarperCollins",
              ticker: "NWSA",
              share: 30.0,
              strengths: [
                "Imprint diversity",
                "Talent scouting networks",
              ],
            },
          ],
          features: [
            {
              title: "Agent Negotiations",
              description: "Advances and rights deals shape profitability",
            },
          ],
          opportunity: "IP adaptation rights for film/TV",
          threat: "Self-publishing captures breakout authors",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Print Book Manufacturing",
          cr4: 55.0,
          probit: "LL",
          operatingMargin: 6.8,
          cagr: 0.7,
          cagrForward: 1.2,
          classificationCodes: [],
          leaders: [
            {
              name: "RR Donnelley",
              ticker: "RRD",
              share: 20.0,
              strengths: [
                "High-volume capacity",
                "Short-run flexibility",
              ],
            },
          ],
          features: [
            {
              title: "Digital Offset Hybrid",
              description: "Combines speed of digital with quality of offset",
            },
          ],
          opportunity: "Print-on-demand expansion",
          threat: "E-book cannibalization of print runs",
        },
        {
          name: "E-Book Formatting",
          cr4: 65.0,
          probit: "LH",
          operatingMargin: 8.9,
          cagr: 7.2,
          cagrForward: 8.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Draft2Digital",
              ticker: "N/A",
              share: 25.0,
              strengths: [
                "Multi-platform conversion",
                "Royalty distribution",
              ],
            },
          ],
          features: [
            {
              title: "EPUB Standards",
              description: "Ensures compatibility across readers",
            },
          ],
          opportunity: "Enhanced e-books with multimedia",
          threat: "Platform-specific proprietary formats",
        },
        {
          name: "Audiobook Production",
          cr4: 70.0,
          probit: "HH",
          operatingMargin: 16.4,
          cagr: 8.5,
          cagrForward: 9.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Audible",
              ticker: "AMZN",
              share: 35.0,
              strengths: [
                "Celebrity narrators",
                "Subscription ecosystem",
              ],
            },
          ],
          features: [
            {
              title: "AI Narration",
              description: "Cost-effective for niche titles",
            },
          ],
          opportunity: "Podcasting crossover talent",
          threat: "Voice synthesis disrupts human narrators",
          niche: {
            name: "Findaway Voices",
            ticker: "N/A",
            share: 12.0,
            cagr: 15.3,
            margin: "18%",
            strategy: "Independent author focus",
            valuation: "P/E 32x",
          },
        },
        {
          name: "Binding & Finishing",
          cr4: 60.0,
          probit: "HL",
          operatingMargin: 10.2,
          cagr: 1.5,
          cagrForward: 2.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Muller Martini",
              ticker: "N/A",
              share: 28.0,
              strengths: [
                "Automated binding lines",
                "Perfect binding expertise",
              ],
            },
          ],
          features: [
            {
              title: "Case Binding",
              description: "Premium hardcover production",
            },
          ],
          opportunity: "Custom specialty bindings",
          threat: "Trade paperback dominance",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Physical Wholesalers",
          cr4: 80.0,
          probit: "LL",
          operatingMargin: 4.1,
          cagr: 0.5,
          cagrForward: 0.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Ingram Content Group",
              ticker: "N/A",
              share: 45.0,
              strengths: [
                "Lightning Source POD",
                "Global reach",
              ],
            },
            {
              name: "Baker & Taylor",
              ticker: "N/A",
              share: 25.0,
              strengths: [
                "Library distribution",
                "Inventory management",
              ],
            },
          ],
          features: [
            {
              title: "Just-in-Time Delivery",
              description: "Reduces retailer inventory costs",
            },
          ],
          opportunity: "Hybrid POD-traditional stock model",
          threat: "E-commerce direct shipping",
        },
        {
          name: "Digital Distribution",
          cr4: 85.0,
          probit: "HH",
          operatingMargin: 22.3,
          cagr: 9.1,
          cagrForward: 10.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon KDP",
              ticker: "AMZN",
              share: 60.0,
              strengths: [
                "70% royalties",
                "Global storefronts",
              ],
            },
          ],
          features: [
            {
              title: "Algorithmic Visibility",
              description: "Drives 80% of e-book discovery",
            },
          ],
          opportunity: "Subscription channel expansion",
          threat: "Platform dependency risks",
        },
        {
          name: "Freight & Logistics",
          cr4: 50.0,
          probit: "LH",
          operatingMargin: 7.8,
          cagr: 4.5,
          cagrForward: 5.3,
          classificationCodes: [],
          leaders: [
            {
              name: "UPS",
              ticker: "UPS",
              share: 20.0,
              strengths: [
                "Reliable ground shipping",
                "Returns handling",
              ],
            },
          ],
          features: [
            {
              title: "Last-Mile Delivery",
              description: "Critical for e-commerce fulfillment",
            },
          ],
          opportunity: "Sustainable packaging mandates",
          threat: "Rising fuel and labor costs",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Online Retail",
          cr4: 75.0,
          probit: "HH",
          operatingMargin: 14.2,
          cagr: 8.6,
          cagrForward: 9.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon",
              ticker: "AMZN",
              share: 52.0,
              strengths: [
                "Prime integration",
                "Recommendation engine",
              ],
            },
            {
              name: "Apple Books",
              ticker: "AAPL",
              share: 12.0,
              strengths: [
                "iOS ecosystem lock-in",
                "High-quality audio",
              ],
            },
          ],
          features: [
            {
              title: "Personalized Recommendations",
              description: "AI-driven discovery boosts conversion 30%",
            },
          ],
          opportunity: "Bundled physical-digital sales",
          threat: "Antitrust scrutiny on market share",
        },
        {
          name: "Physical Bookstores",
          cr4: 60.0,
          probit: "LL",
          operatingMargin: 2.9,
          cagr: -1.2,
          cagrForward: -0.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Barnes & Noble",
              ticker: "BNED",
              share: 28.0,
              strengths: [
                "Experiential retail",
                "Membership programs",
              ],
            },
          ],
          features: [
            {
              title: "Event Hosting",
              description: "Author signings drive foot traffic",
            },
          ],
          opportunity: "Niche genre specialization",
          threat: "E-commerce price competition",
        },
        {
          name: "Subscription Services",
          cr4: 70.0,
          probit: "LH",
          operatingMargin: 11.7,
          cagr: 12.4,
          cagrForward: 13.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Kindle Unlimited",
              ticker: "AMZN",
              share: 40.0,
              strengths: [
                "Unlimited access model",
                "Backlist monetization",
              ],
            },
          ],
          features: [
            {
              title: "All-You-Can-Read",
              description: "Predictable revenue with high retention",
            },
          ],
          opportunity: "Curated genre bundles",
          threat: "Content licensing costs escalation",
          niche: {
            name: "Scribd",
            ticker: "SCRB",
            share: 15.0,
            cagr: 18.2,
            margin: "16%",
            strategy: "Cross-media subscriptions",
            valuation: "P/S 8x",
          },
        },
        {
          name: "Library Sales",
          cr4: 45.0,
          probit: "HL",
          operatingMargin: 9.5,
          cagr: 2.3,
          cagrForward: 3.1,
          classificationCodes: [],
          leaders: [
            {
              name: "OverDrive",
              ticker: "N/A",
              share: 22.0,
              strengths: [
                "Digital lending platform",
                "Bulk licensing",
              ],
            },
          ],
          features: [
            {
              title: "Digital Circulation",
              description: "Waitlist model creates repeat reads",
            },
          ],
          opportunity: "Institutional audiobook demand",
          threat: "Budget constraints in public libraries",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Individual Consumers",
          cr4: 0.0,
          probit: "LH",
          operatingMargin: 0.0,
          cagr: 3.1,
          cagrForward: 4.2,
          classificationCodes: [],
          leaders: [],
          features: [
            {
              title: "Genre Preferences",
              description: "Romance, mystery, fantasy dominate sales",
            },
          ],
          opportunity: "Social reading communities",
          threat: "Short-form content competition",
        },
        {
          name: "Educational Institutions",
          cr4: 35.0,
          probit: "HL",
          operatingMargin: 0.0,
          cagr: 4.8,
          cagrForward: 5.6,
          classificationCodes: [],
          leaders: [
            {
              name: "K-12 Schools",
              ticker: "N/A",
              share: 28.0,
              strengths: [
                "Bulk purchasing power",
                "Curriculum alignment",
              ],
            },
          ],
          features: [
            {
              title: "Textbook Adoption",
              description: "Multi-year contracts stabilize demand",
            },
          ],
          opportunity: "Digital learning platforms integration",
          threat: "Open educational resources",
        },
        {
          name: "Libraries",
          cr4: 25.0,
          probit: "LL",
          operatingMargin: 0.0,
          cagr: 2.1,
          cagrForward: 2.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Public Libraries",
              ticker: "N/A",
              share: 20.0,
              strengths: [
                "Community lending",
                "Digital collections growth",
              ],
            },
          ],
          features: [
            {
              title: "High Circulation Genres",
              description: "Popular fiction sees 10+ checkouts per copy",
            },
          ],
          opportunity: "Hybrid lending models",
          threat: "Municipal budget cuts",
        },
        {
          name: "Corporate Buyers",
          cr4: 40.0,
          probit: "HH",
          operatingMargin: 0.0,
          cagr: 5.7,
          cagrForward: 6.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Professional Development",
              ticker: "N/A",
              share: 18.0,
              strengths: [
                "Bulk gifting programs",
                "Leadership libraries",
              ],
            },
          ],
          features: [
            {
              title: "Custom Editions",
              description: "Branded content for employee training",
            },
          ],
          opportunity: "Diversity & inclusion reading lists",
          threat: "E-learning alternatives",
        },
      ],
    },
  ],
};
