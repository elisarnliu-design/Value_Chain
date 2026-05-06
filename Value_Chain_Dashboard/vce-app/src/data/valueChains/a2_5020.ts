import type { ValueChain } from '../../types/valueChain';

export const a2_5020Data: ValueChain = {
  code: "A2-5020",
  name: "Movie Production & Cinemas",
  imCode: "A2-5020",
  classificationCode: "A2-5020",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Scriptwriting & Development",
          cr4: 65.0,
          probit: "LH",
          operatingMargin: 12.3,
          cagr: -2.1,
          cagrForward: 3.5,
          classificationCodes: [],
          leaders: [
            {
              name: "WGA Agencies",
              ticker: "N/A",
              share: 45.0,
              strengths: [
                "Established talent pool",
                "IP rights expertise",
              ],
            },
            {
              name: "CAA",
              ticker: "N/A",
              share: 20.0,
              strengths: [
                "Talent packaging",
                "Deal negotiation",
              ],
            },
          ],
          features: [
            {
              title: "High Risk Spec Scripts",
              description: "Many scripts developed on speculation before financing secured",
            },
          ],
          opportunity: "Rising demand for diverse IP from streaming platforms",
          threat: "AI-generated scripts disrupting traditional writers",
        },
        {
          name: "Talent Agencies",
          cr4: 85.0,
          probit: "HH",
          operatingMargin: 22.1,
          cagr: 5.2,
          cagrForward: 6.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Creative Artists Agency",
              ticker: "N/A",
              share: 35.0,
              strengths: [
                "Star packaging",
                "Global reach",
              ],
            },
            {
              name: "WME",
              ticker: "N/A",
              share: 28.0,
              strengths: [
                "Cross-media deals",
                "Endeavor backing",
              ],
            },
            {
              name: "UTA",
              ticker: "N/A",
              share: 15.0,
              strengths: [
                "Digital talent focus",
                "TV packaging",
              ],
            },
          ],
          features: [
            {
              title: "Packaging Power",
              description: "Agencies bundle talent, director, script for studio financing",
            },
          ],
          opportunity: "Global star expansion into emerging markets",
          threat: "Talent direct-to-streaming deals bypassing agencies",
          niche: {
            name: "Endeavor Group",
            ticker: "EDR",
            share: 12.0,
            cagr: 7.2,
            margin: ">25%",
            strategy: "Sports-entertainment convergence",
            valuation: "P/E 32x",
          },
        },
        {
          name: "Film Finance",
          cr4: 70.0,
          probit: "HL",
          operatingMargin: 15.8,
          cagr: 1.8,
          cagrForward: 4.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Media Rights Capital",
              ticker: "N/A",
              share: 25.0,
              strengths: [
                "Pre-sales expertise",
                "Tax credit structuring",
              ],
            },
          ],
          features: [
            {
              title: "Pre-Sales Funding",
              description: "Territorial rights sold to secure production budget",
            },
          ],
          opportunity: "Government incentives in international co-productions",
          threat: "Rising insurance costs post-strikes",
        },
        {
          name: "Equipment Rental",
          cr4: 60.0,
          probit: "LL",
          operatingMargin: 8.4,
          cagr: -3.5,
          cagrForward: 2.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Panavision",
              ticker: "N/A",
              share: 30.0,
              strengths: [
                "Premium lenses",
                "Global inventory",
              ],
            },
          ],
          features: [
            {
              title: "Digital Transition",
              description: "Shift from film stock to digital cameras reducing costs",
            },
          ],
          opportunity: "Virtual production LED wall rentals",
          threat: "Camera-as-service models commoditizing rentals",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Pre-Production Planning",
          cr4: 55.0,
          probit: "LH",
          operatingMargin: 10.2,
          cagr: 2.3,
          cagrForward: 4.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Production Management Firms",
              ticker: "N/A",
              share: 40.0,
              strengths: [
                "Budget tracking",
                "Location scouting",
              ],
            },
          ],
          features: [
            {
              title: "Storyboard Services",
              description: "Visual planning essential for VFX-heavy films",
            },
          ],
          opportunity: "AI-assisted storyboarding tools",
          threat: "Schedule compression from streamer demands",
        },
        {
          name: "Casting Services",
          cr4: 75.0,
          probit: "HL",
          operatingMargin: 18.7,
          cagr: 3.1,
          cagrForward: 5.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Casting Society",
              ticker: "N/A",
              share: 50.0,
              strengths: [
                "Diversity casting expertise",
                "Network access",
              ],
            },
            {
              name: "Central Casting",
              ticker: "N/A",
              share: 25.0,
              strengths: [
                "Background extras",
                "Scale operations",
              ],
            },
          ],
          features: [
            {
              title: "Self-Tape Revolution",
              description: "Digital auditions reducing travel costs",
            },
          ],
          opportunity: "Global diverse talent databases",
          threat: "DEI backlash affecting casting choices",
        },
        {
          name: "Location Scouting",
          cr4: 45.0,
          probit: "LL",
          operatingMargin: 6.5,
          cagr: -1.2,
          cagrForward: 2.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Location Agencies",
              ticker: "N/A",
              share: 35.0,
              strengths: [
                "Permit negotiation",
                "International networks",
              ],
            },
          ],
          features: [
            {
              title: "Virtual Location Libraries",
              description: "Digital catalogs replacing physical scouting",
            },
          ],
          opportunity: "Tax credit optimized locations",
          threat: "Weather disruptions from climate change",
        },
        {
          name: "VFX Pre-Vis",
          cr4: 80.0,
          probit: "HH",
          operatingMargin: 20.4,
          cagr: 8.7,
          cagrForward: 9.2,
          classificationCodes: [],
          leaders: [
            {
              name: "DNEG Pre-Vis",
              ticker: "N/A",
              share: 30.0,
              strengths: [
                "Real-time rendering",
                "Studio partnerships",
              ],
            },
          ],
          features: [
            {
              title: "Game Engine Pre-Vis",
              description: "Unreal Engine integration for production planning",
            },
          ],
          opportunity: "LED volume pre-vis integration",
          threat: "Talent shortage in VFX artists",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Principal Photography",
          cr4: 70.0,
          probit: "LH",
          operatingMargin: 9.8,
          cagr: -5.4,
          cagrForward: 3.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Major Studios",
              ticker: "DIS",
              share: 40.0,
              strengths: [
                "In-house crews",
                "Soundstage ownership",
              ],
            },
          ],
          features: [
            {
              title: "Crew Unions",
              description: "SAG-AFTRA and IATSE contracts dictate labor costs",
            },
          ],
          opportunity: "Remote filming technologies",
          threat: "Production insurance volatility",
        },
        {
          name: "Post-Production Editing",
          cr4: 60.0,
          probit: "HL",
          operatingMargin: 16.2,
          cagr: 4.1,
          cagrForward: 5.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Technicolor PostWorks",
              ticker: "N/A",
              share: 25.0,
              strengths: [
                "Color grading expertise",
                "24/7 facilities",
              ],
            },
          ],
          features: [
            {
              title: "Cloud Collaboration",
              description: "Remote editing workflows post-COVID",
            },
          ],
          opportunity: "AI automated rough cuts",
          threat: "Editor talent competition from streamers",
        },
        {
          name: "Visual Effects Production",
          cr4: 85.0,
          probit: "LH",
          operatingMargin: 11.5,
          cagr: 7.8,
          cagrForward: 8.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Disney ILM",
              ticker: "DIS",
              share: 28.0,
              strengths: [
                "StageCraft tech",
                "Franchise VFX",
              ],
            },
            {
              name: "Weta Digital",
              ticker: "VMRGY",
              share: 22.0,
              strengths: [
                "Motion capture",
                "Epic integration",
              ],
            },
            {
              name: "DNEG",
              ticker: "N/A",
              share: 20.0,
              strengths: [
                "Global delivery",
                "AI tools",
              ],
            },
          ],
          features: [
            {
              title: "Real-Time Rendering",
              description: "Game engines reducing iteration time",
            },
          ],
          opportunity: "Generative AI for backgrounds",
          threat: "Offshoring to lower-cost regions",
          niche: {
            name: "Framestore",
            ticker: "N/A",
            share: 10.0,
            cagr: 9.1,
            margin: "18-22%",
            strategy: "Luxury VFX boutique",
            valuation: "Private 15x EBITDA",
          },
        },
        {
          name: "Sound Design & Music",
          cr4: 50.0,
          probit: "LL",
          operatingMargin: 7.9,
          cagr: 2.4,
          cagrForward: 3.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Skywalker Sound",
              ticker: "DIS",
              share: 30.0,
              strengths: [
                "Immersive audio",
                "Legacy IP",
              ],
            },
          ],
          features: [
            {
              title: "Dolby Atmos Mixes",
              description: "Premium cinema audio formats",
            },
          ],
          opportunity: "Spatial audio for streaming",
          threat: "Music licensing cost inflation",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Theatrical Distribution",
          cr4: 90.0,
          probit: "HL",
          operatingMargin: 19.2,
          cagr: -6.8,
          cagrForward: 4.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Disney Distribution",
              ticker: "DIS",
              share: 32.0,
              strengths: [
                "Marketing muscle",
                "Global reach",
              ],
            },
            {
              name: "Warner Bros",
              ticker: "WBD",
              share: 25.0,
              strengths: [
                "DC franchise",
                "HBO synergy",
              ],
            },
            {
              name: "Universal Pictures",
              ticker: "CMCSA",
              share: 20.0,
              strengths: [
                "Fast franchise",
                "Illumination animation",
              ],
            },
            {
              name: "Paramount",
              ticker: "PARA",
              share: 13.0,
              strengths: [
                "Transformers",
                "Mission Impossible",
              ],
            },
          ],
          features: [
            {
              title: "Day-and-Date Strategy",
              description: "Simultaneous theatrical/streaming releases",
            },
          ],
          opportunity: "IMAX premium format expansion",
          threat: "Windowing compression to 17 days",
        },
        {
          name: "Home Entertainment Distribution",
          cr4: 75.0,
          probit: "LH",
          operatingMargin: 14.6,
          cagr: -10.2,
          cagrForward: 2.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Sony Pictures Home Ent",
              ticker: "SONY",
              share: 35.0,
              strengths: [
                "4K Blu-ray leadership",
                "Physical media",
              ],
            },
          ],
          features: [
            {
              title: "PVOD Premium",
              description: "$24.99 digital rentals 17 days post-theatrical",
            },
          ],
          opportunity: "AVOD ad-supported growth",
          threat: "Physical media collapse",
        },
        {
          name: "International Distribution",
          cr4: 82.0,
          probit: "HH",
          operatingMargin: 21.8,
          cagr: 3.5,
          cagrForward: 6.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Tencent Pictures",
              ticker: "TCEHY",
              share: 28.0,
              strengths: [
                "China market access",
                "Co-production",
              ],
            },
          ],
          features: [
            {
              title: "Local Language Dubs",
              description: "Essential for emerging market penetration",
            },
          ],
          opportunity: "India box office surpassing North America",
          threat: "Geopolitical content restrictions",
        },
        {
          name: "Sales Agents",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 17.3,
          cagr: 1.9,
          cagrForward: 4.7,
          classificationCodes: [],
          leaders: [
            {
              name: "CAA Media Finance",
              ticker: "N/A",
              share: 30.0,
              strengths: [
                "Indie film sales",
                "Festival circuit",
              ],
            },
          ],
          features: [
            {
              title: "Territorial Licensing",
              description: "Selling rights region-by-region pre-financing",
            },
          ],
          opportunity: "MENA and Africa market opening",
          threat: "Piracy in developing territories",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Cinema Exhibition",
          cr4: 88.0,
          probit: "LL",
          operatingMargin: 5.6,
          cagr: -7.9,
          cagrForward: 4.3,
          classificationCodes: [],
          leaders: [
            {
              name: "AMC Entertainment",
              ticker: "AMC",
              share: 40.0,
              strengths: [
                "Premium large format",
                "Loyalty programs",
              ],
            },
            {
              name: "Cinemark",
              ticker: "CNK",
              share: 25.0,
              strengths: [
                "Latin America exposure",
                "Cost discipline",
              ],
            },
            {
              name: "Regal (Cineworld)",
              ticker: "CINE.L",
              share: 18.0,
              strengths: [
                "4DX innovation",
                "UK dominance",
              ],
            },
          ],
          features: [
            {
              title: "Concession Revenue",
              description: "70%+ gross margins on food/beverage sales",
            },
          ],
          opportunity: "Dynamic pricing models",
          threat: "High debt from pandemic",
          niche: {
            name: "Alamo Drafthouse",
            ticker: "N/A",
            share: 3.0,
            cagr: 6.2,
            margin: "8-12%",
            strategy: "Cult film programming",
            valuation: "Private turnaround",
          },
        },
        {
          name: "Streaming Licensing",
          cr4: 92.0,
          probit: "HH",
          operatingMargin: 25.4,
          cagr: 12.8,
          cagrForward: 10.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Netflix",
              ticker: "NFLX",
              share: 35.0,
              strengths: [
                "Global content spend",
                "Algorithm retention",
              ],
            },
            {
              name: "Disney+",
              ticker: "DIS",
              share: 28.0,
              strengths: [
                "Franchise library",
                "Bundle strategy",
              ],
            },
            {
              name: "Amazon Prime Video",
              ticker: "AMZN",
              share: 20.0,
              strengths: [
                "Sports rights leverage",
                "AWS delivery",
              ],
            },
          ],
          features: [
            {
              title: "Pay-One Windows",
              description: "Premium licensing post-theatrical exclusivity",
            },
          ],
          opportunity: "Live events streaming",
          threat: "Content cost inflation",
        },
        {
          name: "TV Syndication",
          cr4: 70.0,
          probit: "HL",
          operatingMargin: 18.9,
          cagr: -4.2,
          cagrForward: 1.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Warner Bros TV",
              ticker: "WBD",
              share: 30.0,
              strengths: [
                "Long-running series",
                "Off-network sales",
              ],
            },
          ],
          features: [
            {
              title: "Rerun Revenue",
              description: "Catalog shows generating perpetual income",
            },
          ],
          opportunity: "FAST channel integration",
          threat: "Linear TV cord-cutting",
        },
        {
          name: "Merchandising Licensing",
          cr4: 80.0,
          probit: "HH",
          operatingMargin: 28.7,
          cagr: 6.5,
          cagrForward: 7.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Disney Consumer Products",
              ticker: "DIS",
              share: 50.0,
              strengths: [
                "Character IP dominance",
                "Global retail",
              ],
            },
          ],
          features: [
            {
              title: "Experiential Retail",
              description: "Theme park integration boosting merchandise",
            },
          ],
          opportunity: "NFT digital collectibles",
          threat: "Consumer spending slowdown",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Millennial Moviegoers",
          cr4: 0.0,
          probit: "LH",
          operatingMargin: 0.0,
          cagr: 2.1,
          cagrForward: 3.4,
          classificationCodes: [],
          leaders: [],
          features: [
            {
              title: "Social Media Influence",
              description: "TikTok virality drives theatrical attendance",
            },
          ],
          opportunity: "Event cinema experiences",
          threat: "Home theater quality improvements",
        },
        {
          name: "Gen Z Streamers",
          cr4: 0.0,
          probit: "HH",
          operatingMargin: 0.0,
          cagr: 15.2,
          cagrForward: 12.8,
          classificationCodes: [],
          leaders: [],
          features: [
            {
              title: "Short Attention Spans",
              description: "Preference for bingeable content series",
            },
          ],
          opportunity: "Interactive streaming features",
          threat: "Password sharing crackdowns",
        },
        {
          name: "Family Audiences",
          cr4: 0.0,
          probit: "HL",
          operatingMargin: 0.0,
          cagr: 1.8,
          cagrForward: 2.9,
          classificationCodes: [],
          leaders: [],
          features: [
            {
              title: "Animation Dominance",
              description: "Family films overperform box office",
            },
          ],
          opportunity: "Cross-generational franchises",
          threat: "Declining birth rates",
        },
        {
          name: "Emerging Market Viewers",
          cr4: 0.0,
          probit: "LH",
          operatingMargin: 0.0,
          cagr: 8.7,
          cagrForward: 9.5,
          classificationCodes: [],
          leaders: [],
          features: [
            {
              title: "Mobile-First Consumption",
              description: "India/Africa smartphone video growth",
            },
          ],
          opportunity: "Local language content",
          threat: "Piracy prevalence",
        },
      ],
    },
  ],
};
