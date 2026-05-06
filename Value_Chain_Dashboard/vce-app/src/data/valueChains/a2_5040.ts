import type { ValueChain } from '../../types/valueChain';

export const a2_5040Data: ValueChain = {
  code: "A2-5040",
  name: "Music CD & Video Stores",
  imCode: "A2-5040",
  classificationCode: "A2-5040",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Music Content Creation",
          cr4: 85.0,
          probit: "HH",
          operatingMargin: 22.5,
          cagr: 3.2,
          cagrForward: 6.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Universal Music Group",
              ticker: "UMG.AS",
              share: 32.0,
              strengths: [
                "Largest catalog",
                "Global artist roster",
              ],
            },
            {
              name: "Sony Music Entertainment",
              ticker: "SONY",
              share: 25.0,
              strengths: [
                "Strong IP portfolio",
                "Tech integrations",
              ],
            },
          ],
          features: [
            {
              title: "Artist Contracts",
              description: "Secures exclusive rights to recordings for physical duplication",
            },
            {
              title: "Master Rights",
              description: "Owns copyrights essential for CD/video production licensing",
            },
          ],
          opportunity: "Rising vinyl demand boosts physical content licensing",
          threat: "Streaming cannibalizes physical content value",
        },
        {
          name: "Music Publishing",
          cr4: 78.0,
          probit: "HL",
          operatingMargin: 19.8,
          cagr: 2.1,
          cagrForward: 4.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Sony Music Publishing",
              ticker: "SONY",
              share: 28.0,
              strengths: [
                "Largest publisher",
                "Sync licensing expertise",
              ],
            },
          ],
          features: [
            {
              title: "PRO Registration",
              description: "Registers compositions with rights organizations for royalties",
            },
          ],
          opportunity: "Sync deals for media increase publishing revenue",
          threat: "Digital shifts reduce mechanical royalties from physical sales",
        },
        {
          name: "Packaging Materials",
          cr4: 65.0,
          probit: "LL",
          operatingMargin: 8.2,
          cagr: -1.5,
          cagrForward: 1.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Amcor",
              ticker: "AMCR",
              share: 22.0,
              strengths: [
                "Sustainable jewel cases",
                "Scale efficiencies",
              ],
            },
          ],
          features: [
            {
              title: "Jewel Cases & Sleeves",
              description: "Plastic/polycarbonate cases and cardboard inserts for CDs",
            },
          ],
          opportunity: "Eco-friendly packaging demand from collectors",
          threat: "Declining volumes pressure margins",
          niche: {
            name: "TechNiche Packaging",
            ticker: "TNPK",
            share: 5.0,
            cagr: 7.2,
            margin: ">15%",
            strategy: "Recycled materials focus",
            valuation: "P/E 22x",
          },
        },
        {
          name: "Digital Mastering",
          cr4: 72.0,
          probit: "LH",
          operatingMargin: 12.4,
          cagr: 4.5,
          cagrForward: 5.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Sterling Sound",
              ticker: "Private",
              share: 19.0,
              strengths: [
                "Vinyl mastering leader",
                "High-end audio",
              ],
            },
          ],
          features: [
            {
              title: "Audio Optimization",
              description: "Prepares masters for CD pressing and video encoding",
            },
          ],
          opportunity: "Vinyl revival increases mastering demand",
          threat: "AI tools disrupt traditional services",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Content Licensing",
          cr4: 88.0,
          probit: "HH",
          operatingMargin: 25.1,
          cagr: 2.8,
          cagrForward: 5.5,
          classificationCodes: [],
          leaders: [
            {
              name: "RIAA",
              ticker: "N/A",
              share: 40.0,
              strengths: [
                "Industry standard agreements",
                "Legal enforcement",
              ],
            },
          ],
          features: [
            {
              title: "Mechanical Licenses",
              description: "Authorizes duplication of recordings for CDs/videos",
            },
          ],
          opportunity: "Nostalgia formats expand licensing scope",
          threat: "Piracy and free streaming erode paid licenses",
        },
        {
          name: "Artwork Design",
          cr4: 55.0,
          probit: "LH",
          operatingMargin: 14.7,
          cagr: 3.9,
          cagrForward: 4.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Pentagram",
              ticker: "Private",
              share: 15.0,
              strengths: [
                "Iconic album art",
                "Collector editions",
              ],
            },
          ],
          features: [
            {
              title: "Cover & Inlay Design",
              description: "Creates visual packaging compliant with retail standards",
            },
          ],
          opportunity: "Limited edition designs for premium pricing",
          threat: "Digital printing reduces design complexity",
        },
        {
          name: "Metadata Management",
          cr4: 82.0,
          probit: "HL",
          operatingMargin: 18.3,
          cagr: 1.8,
          cagrForward: 3.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Gracenote",
              ticker: "Private",
              share: 35.0,
              strengths: [
                "CDDB database",
                "UPC/ISRC standards",
              ],
            },
          ],
          features: [
            {
              title: "ISRC/UPC Assignment",
              description: "Embeds track identifiers for retail scanning",
            },
          ],
          opportunity: "Blockchain for provenance tracking",
          threat: "Streaming platforms bypass traditional metadata",
        },
        {
          name: "Quality Assurance",
          cr4: 68.0,
          probit: "LL",
          operatingMargin: 9.6,
          cagr: -0.8,
          cagrForward: 2.1,
          classificationCodes: [],
          leaders: [
            {
              name: "NIMH Labs",
              ticker: "Private",
              share: 20.0,
              strengths: [
                "ISO-certified testing",
                "Defect detection",
              ],
            },
          ],
          features: [
            {
              title: "Pre-Press Verification",
              description: "Ensures audio fidelity and packaging integrity",
            },
          ],
          opportunity: "Premium formats require higher QA standards",
          threat: "Volume decline cuts testing volumes",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "CD/DVD Replication",
          cr4: 76.0,
          probit: "LL",
          operatingMargin: 6.4,
          cagr: -4.2,
          cagrForward: 1.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Technicolor",
              ticker: "Private",
              share: 30.0,
              strengths: [
                "High-volume pressing",
                "Global plants",
              ],
            },
          ],
          features: [
            {
              title: "Glass Master Creation",
              description: "Laser-etched stamper for mass polycarbonate disc duplication",
            },
          ],
          opportunity: "4K Blu-ray niche growth",
          threat: "Plant closures from low utilization",
        },
        {
          name: "Vinyl Record Pressing",
          cr4: 62.0,
          probit: "LH",
          operatingMargin: 11.2,
          cagr: 12.5,
          cagrForward: 8.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Optimal Media",
              ticker: "Private",
              share: 18.0,
              strengths: [
                "Colored vinyl expertise",
                "Capacity expansion",
              ],
            },
          ],
          features: [
            {
              title: "Lacquer Cutting",
              description: "Analog groove machining for premium sound quality",
            },
          ],
          opportunity: "Collector reissues drive premium pricing",
          threat: "Supply chain resin shortages",
          niche: {
            name: "United Record Pressing",
            ticker: "Private",
            share: 12.0,
            cagr: 15.3,
            margin: ">18%",
            strategy: "US-made patriotic branding",
            valuation: "EBITDA 12x",
          },
        },
        {
          name: "Packaging Assembly",
          cr4: 59.0,
          probit: "LL",
          operatingMargin: 7.1,
          cagr: -3.1,
          cagrForward: 0.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Mondi Group",
              ticker: "MNDI.L",
              share: 16.0,
              strengths: [
                "Automated lines",
                "Sustainable materials",
              ],
            },
          ],
          features: [
            {
              title: "Shrinkwrap & Insert",
              description: "Final assembly with shrink film and promotional inserts",
            },
          ],
          opportunity: "Custom collector boxes",
          threat: "Labor automation pressures",
        },
        {
          name: "Blu-ray Authoring",
          cr4: 81.0,
          probit: "HL",
          operatingMargin: 16.8,
          cagr: 2.4,
          cagrForward: 3.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Walt Disney Studios",
              ticker: "DIS",
              share: 24.0,
              strengths: [
                "Menu design expertise",
                "4K UHD leader",
              ],
            },
          ],
          features: [
            {
              title: "Menu Encoding",
              description: "Interactive authoring for video store exclusives",
            },
          ],
          opportunity: "Physical 4K bundles with digital codes",
          threat: "Streaming exclusives reduce Blu-ray",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Music Wholesalers",
          cr4: 92.0,
          probit: "LL",
          operatingMargin: 4.9,
          cagr: -6.1,
          cagrForward: 0.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Alliance Entertainment",
              ticker: "AENT",
              share: 45.0,
              strengths: [
                "Physical media specialist",
                "Vinyl logistics",
              ],
            },
          ],
          features: [
            {
              title: "One-stop Distribution",
              description: "Supplies independent stores from major labels",
            },
          ],
          opportunity: "Direct-to-consumer fulfillment",
          threat: "Amazon warehouse dominance",
        },
        {
          name: "Freight Transportation",
          cr4: 48.0,
          probit: "LH",
          operatingMargin: 9.3,
          cagr: 5.2,
          cagrForward: 4.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Old Dominion Freight",
              ticker: "ODFL",
              share: 12.0,
              strengths: [
                "LTL specialist",
                "Reliable delivery",
              ],
            },
          ],
          features: [
            {
              title: "Temperature-controlled",
              description: "Protects vinyl from warping during transit",
            },
          ],
          opportunity: "Last-mile for collector shipments",
          threat: "Fuel costs volatility",
        },
        {
          name: "Inventory Management",
          cr4: 77.0,
          probit: "HL",
          operatingMargin: 15.6,
          cagr: 1.9,
          cagrForward: 3.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Ingram Micro",
              ticker: "INGM",
              share: 28.0,
              strengths: [
                "EDI integration",
                "Return handling",
              ],
            },
          ],
          features: [
            {
              title: "Scan-based Trading",
              description: "Vendor-managed inventory reduces store risk",
            },
          ],
          opportunity: "AI demand forecasting",
          threat: "Overstock from slow movers",
        },
        {
          name: "Export Logistics",
          cr4: 71.0,
          probit: "LL",
          operatingMargin: 5.7,
          cagr: -2.3,
          cagrForward: 1.4,
          classificationCodes: [],
          leaders: [
            {
              name: "DHL Supply Chain",
              ticker: "DHLGY",
              share: 19.0,
              strengths: [
                "Global reach",
                "Customs clearance",
              ],
            },
          ],
          features: [
            {
              title: "International Shipping",
              description: "K-pop/J-pop physical media to global fans",
            },
          ],
          opportunity: "Asia collector market growth",
          threat: "Tariffs on media imports",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Independent Record Stores",
          cr4: 22.0,
          probit: "LH",
          operatingMargin: 3.8,
          cagr: -5.5,
          cagrForward: 2.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Rough Trade",
              ticker: "Private",
              share: 4.0,
              strengths: [
                "Events programming",
                "Curated selection",
              ],
            },
          ],
          features: [
            {
              title: "In-store Performances",
              description: "Live sessions drive foot traffic and sales",
            },
          ],
          opportunity: "Record Store Day exclusives",
          threat: "E-commerce price competition",
          niche: {
            name: "Amoeba Music",
            ticker: "Private",
            share: 3.0,
            cagr: 4.1,
            margin: "8-12%",
            strategy: "Used/rare inventory",
            valuation: "Private",
          },
        },
        {
          name: "Big Box Retailers",
          cr4: 68.0,
          probit: "LL",
          operatingMargin: 2.1,
          cagr: -7.2,
          cagrForward: -1.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Walmart",
              ticker: "WMT",
              share: 25.0,
              strengths: [
                "Buying power",
                "High street traffic",
              ],
            },
          ],
          features: [
            {
              title: "Loss-leader Pricing",
              description: "Deep discounts on major releases",
            },
          ],
          opportunity: "Movie Blu-rays bundles",
          threat: "Shrinking media department space",
        },
        {
          name: "Specialty Media Chains",
          cr4: 45.0,
          probit: "LL",
          operatingMargin: 1.9,
          cagr: -8.4,
          cagrForward: -0.6,
          classificationCodes: [],
          leaders: [
            {
              name: "FYETower",
              ticker: "Private",
              share: 12.0,
              strengths: [
                "Multi-format",
                "Japan imports",
              ],
            },
          ],
          features: [
            {
              title: "Listening Stations",
              description: "Pre-purchase demo experience",
            },
          ],
          opportunity: "K-pop physical sales surge",
          threat: "Store closures accelerating",
        },
        {
          name: "Online Physical Retail",
          cr4: 89.0,
          probit: "HH",
          operatingMargin: 8.7,
          cagr: 3.6,
          cagrForward: 7.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon",
              ticker: "AMZN",
              share: 52.0,
              strengths: [
                "Prime shipping",
                "Recommendation engine",
              ],
            },
          ],
          features: [
            {
              title: "Bundled Digital Codes",
              description: "Physical + streaming access hybrid",
            },
          ],
          opportunity: "Vinyl subscription boxes",
          threat: "Return abuse on collectibles",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Music Collectors",
          cr4: 35.0,
          probit: "HL",
          operatingMargin: 0.0,
          cagr: 6.8,
          cagrForward: 8.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Vinyl Enthusiasts",
              ticker: "N/A",
              share: 18.0,
              strengths: [
                "High willingness to pay",
                "Repeat purchases",
              ],
            },
          ],
          features: [
            {
              title: "Limited Editions",
              description: "Seek numbered/rare pressings and colored variants",
            },
          ],
          opportunity: "Anniversary reissues",
          threat: "Counterfeit market growth",
        },
        {
          name: "Casual Physical Buyers",
          cr4: 28.0,
          probit: "LL",
          operatingMargin: 0.0,
          cagr: -3.7,
          cagrForward: -2.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Gift Purchasers",
              ticker: "N/A",
              share: 12.0,
              strengths: [
                "Occasional buyers",
                "Impulse purchases",
              ],
            },
          ],
          features: [
            {
              title: "Chart Albums",
              description: "Buy current hits as collectible artifacts",
            },
          ],
          opportunity: "Personalized packaging",
          threat: "Streaming eliminates ownership need",
        },
        {
          name: "Nostalgia Consumers",
          cr4: 22.0,
          probit: "LH",
          operatingMargin: 0.0,
          cagr: 4.2,
          cagrForward: 5.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Gen X/Y Buyers",
              ticker: "N/A",
              share: 10.0,
              strengths: [
                "Catalog loyalty",
                "Sound quality preference",
              ],
            },
          ],
          features: [
            {
              title: "Remastered Classics",
              description: "Higher fidelity drives repurchase behavior",
            },
          ],
          opportunity: "30th/40th anniversary editions",
          threat: "Subscription fatigue spillover",
        },
        {
          name: "Video Collectors",
          cr4: 15.0,
          probit: "LL",
          operatingMargin: 0.0,
          cagr: -1.9,
          cagrForward: 1.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Criterion Fans",
              ticker: "N/A",
              share: 6.0,
              strengths: [
                "Restoration quality",
                "Essays/booklets",
              ],
            },
          ],
          features: [
            {
              title: "Director's Cuts",
              description: "Seek extended/uncut versions unavailable digitally",
            },
          ],
          opportunity: "4K restoration wave",
          threat: "SVOD exclusivity deals",
          niche: {
            name: "Arrow Video Fans",
            ticker: "N/A",
            share: 2.0,
            cagr: 6.5,
            margin: "N/A",
            strategy: "Cult horror specialist",
            valuation: "N/A",
          },
        },
      ],
    },
  ],
};
