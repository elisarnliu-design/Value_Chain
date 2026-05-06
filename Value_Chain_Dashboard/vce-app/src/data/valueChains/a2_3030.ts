import type { ValueChain } from '../../types/valueChain';

export const a2_3030Data: ValueChain = {
  code: "A2-3030",
  name: "CATV Systems",
  imCode: "A2-3030",
  classificationCode: "A2-3030",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Fiber Optic Cable & Infrastructure",
          cr4: 68.0,
          probit: "HH",
          operatingMargin: 16.2,
          cagr: 5.8,
          cagrForward: 7.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Corning Incorporated",
              ticker: "GLW",
              share: 22.0,
              strengths: [
                "Dominant fiber optic technology",
                "FTTH deployment expertise",
                "Established supply chain",
              ],
            },
            {
              name: "Prysmian Group",
              ticker: "PRY",
              share: 18.0,
              strengths: [
                "Global cable manufacturing",
                "Diversified product portfolio",
                "Infrastructure contracts",
              ],
            },
          ],
          features: [
            {
              title: "FTTH Expansion",
              description: "Fiber to the home technology deployment driving high-bandwidth connectivity infrastructure",
            },
            {
              title: "5G Network Integration",
              description: "Fiber optic backbone supporting next-generation mobile network architecture",
            },
          ],
          opportunity: "Accelerating deployment of fiber-optic infrastructure for broadband expansion in emerging markets and rural areas",
          threat: "Supply chain disruptions and raw material cost volatility affecting cable manufacturing",
        },
        {
          name: "Signal Amplifiers & RF Components",
          cr4: 55.0,
          probit: "HH",
          operatingMargin: 18.8,
          cagr: 4.3,
          cagrForward: 5.2,
          classificationCodes: [],
          leaders: [
            {
              name: "CommScope Holding Company",
              ticker: "COMM",
              share: 16.0,
              strengths: [
                "Comprehensive RF component portfolio",
                "Signal amplification technology",
                "Cable operator relationships",
              ],
            },
            {
              name: "ARRIS (acquired by CommScope)",
              ticker: "COMM",
              share: 14.0,
              strengths: [
                "Legacy amplifier expertise",
                "Video delivery systems",
                "Integrated solutions",
              ],
            },
          ],
          features: [
            {
              title: "High-Quality Video Signal Enhancement",
              description: "Signal amplifiers ensuring uninterrupted video streaming and high-definition content delivery",
            },
            {
              title: "VOD & OTT Optimization",
              description: "Components supporting video-on-demand and over-the-top streaming service requirements",
            },
          ],
          opportunity: "Growing demand for signal amplifiers driven by streaming services and high-quality video content consumption",
          threat: "Component commoditization and competition from integrated semiconductor solutions",
        },
        {
          name: "Set-Top Boxes & Receivers",
          cr4: 72.0,
          probit: "HL",
          operatingMargin: 14.3,
          cagr: 2.1,
          cagrForward: 1.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Technicolor",
              ticker: "TCH",
              share: 24.0,
              strengths: [
                "Hardware manufacturing legacy",
                "Software integration",
                "Established OEM relationships",
              ],
            },
            {
              name: "Cisco Systems",
              ticker: "CSCO",
              share: 19.0,
              strengths: [
                "Broadband equipment portfolio",
                "Cloud integration capabilities",
                "Enterprise partnerships",
              ],
            },
          ],
          features: [
            {
              title: "Interactive Services Support",
              description: "Set-top boxes enabling interactive and on-demand content delivery",
            },
            {
              title: "Cloud-Enabled Architecture",
              description: "Next-generation receivers supporting virtualized broadcast chains and remote management",
            },
          ],
          opportunity: "Integration with cloud broadcasting systems and AI-driven content curation capabilities",
          threat: "Market saturation and shift toward software-defined solutions reducing hardware demand",
        },
        {
          name: "Video Servers & Encoding Equipment",
          cr4: 64.0,
          probit: "HH",
          operatingMargin: 19.5,
          cagr: 6.2,
          cagrForward: 6.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Grass Valley",
              ticker: "THC",
              share: 18.0,
              strengths: [
                "End-to-end broadcasting ecosystems",
                "Cloud integration",
                "AI analytics capabilities",
              ],
            },
            {
              name: "Harmonic Inc.",
              ticker: "HLIT",
              share: 15.0,
              strengths: [
                "Video delivery infrastructure",
                "Cloud video platforms",
                "Content encoding expertise",
              ],
            },
          ],
          features: [
            {
              title: "Adaptive Bitrate Streaming",
              description: "Encoding technology supporting multi-quality video delivery across devices",
            },
            {
              title: "Content Management Integration",
              description: "Centralized management of broadcast content across multiple channels and platforms",
            },
          ],
          opportunity: "Rising demand for ultra-high-definition content and multi-platform content delivery",
          threat: "Increasing competition from cloud-native streaming platform providers",
        },
        {
          name: "Antenna & Transmission Equipment",
          cr4: 58.0,
          probit: "HL",
          operatingMargin: 15.7,
          cagr: 3.4,
          cagrForward: 2.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Andrew Corporation (CommScope subsidiary)",
              ticker: "COMM",
              share: 17.0,
              strengths: [
                "Antenna design expertise",
                "Transmission equipment manufacturing",
                "Global distribution",
              ],
            },
            {
              name: "Anixter (now Tech Data subsidiary)",
              ticker: "TECD",
              share: 12.0,
              strengths: [
                "Component distribution",
                "System integration",
                "Installer network",
              ],
            },
          ],
          features: [
            {
              title: "Dish Antenna Technology",
              description: "Reception equipment for DTH systems serving remote and underserved markets",
            },
            {
              title: "Transmission Infrastructure",
              description: "Equipment supporting broadcast signal transmission to cable network endpoints",
            },
          ],
          opportunity: "DTH system expansion in emerging markets with limited cabling infrastructure",
          threat: "Shift from traditional broadcast infrastructure to IP-based content delivery",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing & Signal Processing",
      subIndustries: [
        {
          name: "Content Encoding & Transcoding Services",
          cr4: 62.0,
          probit: "HH",
          operatingMargin: 21.3,
          cagr: 7.8,
          cagrForward: 8.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Harmonic Inc.",
              ticker: "HLIT",
              share: 19.0,
              strengths: [
                "Adaptive bitrate encoding",
                "Cloud-based transcoding",
                "Scalable infrastructure",
              ],
            },
            {
              name: "Elemental Technologies (AWS subsidiary)",
              ticker: "AMZN",
              share: 16.0,
              strengths: [
                "AWS media services integration",
                "Cloud-native architecture",
                "Enterprise adoption",
              ],
            },
          ],
          features: [
            {
              title: "Multi-Format Encoding",
              description: "Processing video content for delivery across diverse devices and network conditions",
            },
            {
              title: "Real-Time Optimization",
              description: "Dynamic bitrate adjustment for seamless streaming experiences",
            },
          ],
          opportunity: "Explosive growth in streaming service adoption driving demand for efficient encoding infrastructure",
          threat: "Competition from open-source encoding solutions and edge computing alternatives",
        },
        {
          name: "Digital Signal Processing & Modulation",
          cr4: 71.0,
          probit: "HL",
          operatingMargin: 17.2,
          cagr: 3.6,
          cagrForward: 3.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Cisco Systems",
              ticker: "CSCO",
              share: 21.0,
              strengths: [
                "QAM modulation technology",
                "Signal processing expertise",
                "Network integration",
              ],
            },
            {
              name: "Casa Systems",
              ticker: "CASA",
              share: 14.0,
              strengths: [
                "Cable network software",
                "DOCSIS technology",
                "Operator partnerships",
              ],
            },
          ],
          features: [
            {
              title: "QAM Modulation",
              description: "Digital modulation enabling high-capacity channel utilization",
            },
            {
              title: "DOCSIS Technology",
              description: "Standard protocol for data-over-cable service interface supporting broadband delivery",
            },
          ],
          opportunity: "Network capacity optimization supporting high-quality video and broadband expansion",
          threat: "Maturation of modulation standards limiting technological differentiation",
        },
        {
          name: "Content Aggregation & Packaging",
          cr4: 58.0,
          probit: "LH",
          operatingMargin: 12.4,
          cagr: 8.9,
          cagrForward: 9.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Verizon Communications",
              ticker: "VZ",
              share: 13.0,
              strengths: [
                "Fios content platform",
                "Streaming partnerships",
                "Subscriber base",
              ],
            },
            {
              name: "Charter Communications",
              ticker: "CHTR",
              share: 11.0,
              strengths: [
                "Spectrum content platform",
                "Original programming partnerships",
                "Diverse channel portfolio",
              ],
            },
          ],
          features: [
            {
              title: "Channel Curation",
              description: "Content aggregation and packaging for diverse subscriber preferences",
            },
            {
              title: "OTT Integration",
              description: "Bundling of streaming platforms with traditional cable services",
            },
          ],
          opportunity: "Expansion of content offerings and exclusive partnerships driving subscriber growth",
          threat: "Direct-to-consumer streaming platforms reducing dependence on cable aggregation",
        },
        {
          name: "Network Monitoring & Analytics",
          cr4: 65.0,
          probit: "HH",
          operatingMargin: 20.8,
          cagr: 9.3,
          cagrForward: 10.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Cisco Systems",
              ticker: "CSCO",
              share: 17.0,
              strengths: [
                "Network analytics platform",
                "AI-driven insights",
                "Security integration",
              ],
            },
            {
              name: "NETSCOUT SYSTEMS",
              ticker: "NTCT",
              share: 13.0,
              strengths: [
                "Network performance monitoring",
                "Real-time visibility",
                "Operator tools",
              ],
            },
          ],
          features: [
            {
              title: "Audience Behavior Analytics",
              description: "Data-driven insights into subscriber viewing patterns and preferences",
            },
            {
              title: "Network Health Monitoring",
              description: "Real-time detection and resolution of network performance issues",
            },
          ],
          opportunity: "Growing importance of data analytics for customer retention and personalized service delivery",
          threat: "Privacy regulations limiting data collection and analytics capabilities",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing & Systems Integration",
      subIndustries: [
        {
          name: "Headend & Hub Manufacturing",
          cr4: 61.0,
          probit: "HL",
          operatingMargin: 15.9,
          cagr: 2.8,
          cagrForward: 2.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Cisco Systems",
              ticker: "CSCO",
              share: 20.0,
              strengths: [
                "End-to-end headend solutions",
                "Cloud integration",
                "Scalability",
              ],
            },
            {
              name: "Casa Systems",
              ticker: "CASA",
              share: 15.0,
              strengths: [
                "Cable network architecture",
                "DOCSIS expertise",
                "Software-defined infrastructure",
              ],
            },
          ],
          features: [
            {
              title: "Centralized Content Management",
              description: "Headend systems managing broadcast chains and content distribution across network",
            },
            {
              title: "Software-Defined Architecture",
              description: "Virtualized headend operations supporting cloud-enabled broadcast management",
            },
          ],
          opportunity: "Migration to virtualized and cloud-based headend systems reducing operational complexity",
          threat: "Increasing focus on IP-based delivery reducing traditional headend requirements",
        },
        {
          name: "Cabling System Manufacturing",
          cr4: 72.0,
          probit: "HL",
          operatingMargin: 14.1,
          cagr: 3.2,
          cagrForward: 2.7,
          classificationCodes: [],
          leaders: [
            {
              name: "CommScope Holding Company",
              ticker: "COMM",
              share: 19.0,
              strengths: [
                "Extensive cable infrastructure",
                "Coaxial and fiber expertise",
                "Installer relationships",
              ],
            },
            {
              name: "Corning Incorporated",
              ticker: "GLW",
              share: 16.0,
              strengths: [
                "Advanced cabling solutions",
                "FTTH deployment",
                "Technology innovation",
              ],
            },
          ],
          features: [
            {
              title: "Hybrid Fiber-Coax Architecture",
              description: "Traditional cable systems combining fiber backbone with coaxial last-mile distribution",
            },
            {
              title: "High-Capacity Network Design",
              description: "Infrastructure supporting increased bandwidth demand for video and broadband services",
            },
          ],
          opportunity: "Continued infrastructure upgrades supporting higher bandwidth and network reliability",
          threat: "Market saturation in developed regions with declining legacy cable infrastructure investment",
        },
        {
          name: "DTH & Satellite System Manufacturing",
          cr4: 68.0,
          probit: "LH",
          operatingMargin: 11.2,
          cagr: 6.4,
          cagrForward: 7.1,
          classificationCodes: [],
          leaders: [
            {
              name: "DIRECTV (AT&T subsidiary)",
              ticker: "T",
              share: 18.0,
              strengths: [
                "Satellite network operator",
                "DTH system deployment",
                "Rural market access",
              ],
            },
            {
              name: "Dish Network",
              ticker: "DISH",
              share: 15.0,
              strengths: [
                "DTH subscriber base",
                "Flexible packaging",
                "Remote area coverage",
              ],
            },
          ],
          features: [
            {
              title: "Direct-to-Home Satellite Distribution",
              description: "Bypass cable infrastructure enabling service delivery to underserved and remote areas",
            },
            {
              title: "Flexible Channel Packaging",
              description: "Diverse content packages without extensive physical infrastructure installation",
            },
          ],
          opportunity: "Significant growth opportunity in emerging markets with limited cabling infrastructure",
          threat: "Streaming services and terrestrial broadband reducing DTH system adoption potential",
        },
        {
          name: "Network Equipment Assembly & Integration",
          cr4: 59.0,
          probit: "HL",
          operatingMargin: 16.4,
          cagr: 4.1,
          cagrForward: 3.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Flex Ltd.",
              ticker: "FLEX",
              share: 14.0,
              strengths: [
                "Electronics manufacturing services",
                "System integration",
                "Scale operations",
              ],
            },
            {
              name: "Sanmina Corporation",
              ticker: "SANM",
              share: 12.0,
              strengths: [
                "Cable equipment assembly",
                "Network device manufacturing",
                "Supply chain management",
              ],
            },
          ],
          features: [
            {
              title: "Complex System Integration",
              description: "Assembly and testing of multi-component broadcast and network systems",
            },
            {
              title: "Supply Chain Optimization",
              description: "Efficient production and logistics supporting cable operator deployment schedules",
            },
          ],
          opportunity: "Increasing demand for cloud-based and software-defined equipment requiring specialized integration",
          threat: "Production cost pressures and labor market constraints affecting assembly economics",
        },
        {
          name: "Software & Firmware Development",
          cr4: 54.0,
          probit: "HH",
          operatingMargin: 23.6,
          cagr: 10.2,
          cagrForward: 11.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Cisco Systems",
              ticker: "CSCO",
              share: 16.0,
              strengths: [
                "Enterprise software portfolio",
                "Cloud platform capabilities",
                "Security integration",
              ],
            },
            {
              name: "Harmonic Inc.",
              ticker: "HLIT",
              share: 12.0,
              strengths: [
                "Media software expertise",
                "Cloud video platforms",
                "Video delivery optimization",
              ],
            },
          ],
          features: [
            {
              title: "Cloud-Native Software Architecture",
              description: "Virtualized broadcast and content delivery systems enabling remote management",
            },
            {
              title: "AI & Audience Analytics Integration",
              description: "Machine learning-driven content recommendations and network optimization",
            },
          ],
          opportunity: "Rapid growth in software-defined systems and AI-driven optimization driving software value creation",
          threat: "Open-source alternatives and commoditization pressures reducing premium software positioning",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution & Network Operations",
      subIndustries: [
        {
          name: "Cable Network Operators",
          cr4: 51.0,
          probit: "HH",
          operatingMargin: 22.4,
          cagr: 2.3,
          cagrForward: 2.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Charter Communications",
              ticker: "CHTR",
              share: 14.0,
              strengths: [
                "Spectrum brand recognition",
                "Broad geographic coverage",
                "Triple-play services",
              ],
            },
            {
              name: "Comcast Corporation",
              ticker: "CMCSA",
              share: 12.0,
              strengths: [
                "National infrastructure",
                "Content ownership",
                "Advanced technologies adoption",
              ],
            },
          ],
          features: [
            {
              title: "Multi-Service Delivery Platform",
              description: "Integration of video, broadband, and voice services over cable infrastructure",
            },
            {
              title: "Network Modernization",
              description: "Ongoing investment in fiber-to-home and next-generation broadband capabilities",
            },
          ],
          opportunity: "Expansion of broadband penetration and upgrade to higher-speed services in existing markets",
          threat: "Cord-cutting trends and fiber-based competition from telecom and fiber-to-home providers",
          niche: {
            name: "Regional Cable Operators",
            ticker: "LBRDA",
            share: 8.0,
            cagr: 1.5,
            margin: "18-20%",
            strategy: "Community-focused service offerings and local content partnerships",
            valuation: "P/E 12-14x",
          },
        },
        {
          name: "Satellite Broadcasting Operators",
          cr4: 68.0,
          probit: "LH",
          operatingMargin: 14.8,
          cagr: 3.2,
          cagrForward: 1.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Dish Network",
              ticker: "DISH",
              share: 22.0,
              strengths: [
                "Rural market leadership",
                "Flexible packaging",
                "Competitive pricing",
              ],
            },
            {
              name: "DIRECTV (AT&T subsidiary)",
              ticker: "T",
              share: 18.0,
              strengths: [
                "Established subscriber base",
                "Technology integration",
                "Bundled services",
              ],
            },
          ],
          features: [
            {
              title: "DTH Service Delivery",
              description: "Satellite-based content distribution bypassing terrestrial cable infrastructure",
            },
            {
              title: "Remote Area Coverage",
              description: "Unmatched geographic reach serving underserved and rural markets",
            },
          ],
          opportunity: "Market expansion in emerging economies with limited terrestrial infrastructure investment",
          threat: "Streaming services and broadband-based IPTV reducing DTH service relevance",
        },
        {
          name: "IPTV & Telecom-Based Video Operators",
          cr4: 62.0,
          probit: "LH",
          operatingMargin: 13.9,
          cagr: 5.8,
          cagrForward: 6.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Verizon Communications",
              ticker: "VZ",
              share: 16.0,
              strengths: [
                "Fios fiber infrastructure",
                "Broadband platform",
                "Network quality",
              ],
            },
            {
              name: "AT&T",
              ticker: "T",
              share: 13.0,
              strengths: [
                "AT&T TV platform",
                "Streaming integration",
                "Bundled services",
              ],
            },
          ],
          features: [
            {
              title: "IP-Based Video Delivery",
              description: "Over-the-top service delivery leveraging broadband connectivity",
            },
            {
              title: "Unified Communications Platform",
              description: "Integration of video with broadband and mobile services",
            },
          ],
          opportunity: "Rapid growth potential as fiber deployment expands and broadband quality improves",
          threat: "Competition from standalone streaming platforms with lower cost structures",
        },
        {
          name: "Content Delivery Network (CDN) Operators",
          cr4: 71.0,
          probit: "HH",
          operatingMargin: 21.7,
          cagr: 8.4,
          cagrForward: 9.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Akamai Technologies",
              ticker: "AKAM",
              share: 21.0,
              strengths: [
                "Global edge network",
                "Performance optimization",
                "Security services",
              ],
            },
            {
              name: "Cloudflare",
              ticker: "NET",
              share: 12.0,
              strengths: [
                "Edge computing platform",
                "Developer-friendly",
                "Rapid growth",
              ],
            },
          ],
          features: [
            {
              title: "Edge-Based Content Distribution",
              description: "Distributed network ensuring low-latency video delivery globally",
            },
            {
              title: "Origin Offload",
              description: "Reduced demand on broadcaster origin servers through edge caching",
            },
          ],
          opportunity: "Explosive growth in streaming video and OTT service delivery driving CDN demand",
          threat: "Vertical integration by major cloud providers (AWS, Google Cloud, Azure) reducing CDN utilization",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales & Marketing",
      subIndustries: [
        {
          name: "Direct-to-Consumer Sales & Customer Acquisition",
          cr4: 48.0,
          probit: "LH",
          operatingMargin: 8.2,
          cagr: 6.9,
          cagrForward: 7.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Charter Communications",
              ticker: "CHTR",
              share: 13.0,
              strengths: [
                "Spectrum brand presence",
                "Multi-channel sales",
                "Installer network",
              ],
            },
            {
              name: "Comcast Corporation",
              ticker: "CMCSA",
              share: 11.0,
              strengths: [
                "National footprint",
                "Retail presence",
                "Digital marketing",
              ],
            },
          ],
          features: [
            {
              title: "Multi-Channel Sales",
              description: "Integration of online, retail, and field sales channels for subscriber acquisition",
            },
            {
              title: "Digital Marketing & Personalization",
              description: "Targeted promotional campaigns leveraging customer data analytics",
            },
          ],
          opportunity: "Enhanced digital customer acquisition leveraging streaming service bundling and family connectivity",
          threat: "Rising customer acquisition costs amid intense competition and declining cord-cutting market",
        },
        {
          name: "Wholesale & B2B Distribution",
          cr4: 64.0,
          probit: "HL",
          operatingMargin: 16.1,
          cagr: 2.6,
          cagrForward: 2.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Tech Data Corporation",
              ticker: "TECD",
              share: 17.0,
              strengths: [
                "Distribution network",
                "Systems integration",
                "Installer relationships",
              ],
            },
            {
              name: "Anixter (Tech Data subsidiary)",
              ticker: "TECD",
              share: 14.0,
              strengths: [
                "Cable equipment distribution",
                "Technical training",
                "Installer support",
              ],
            },
          ],
          features: [
            {
              title: "Equipment Distribution",
              description: "Wholesale supply of CATV equipment and components to operators and installers",
            },
            {
              title: "Technical Support & Training",
              description: "Installation and field support services for complex equipment deployment",
            },
          ],
          opportunity: "Growth in emerging market infrastructure deployment and network modernization projects",
          threat: "Direct operator relationships reducing wholesale distributor margin opportunities",
        },
        {
          name: "Content Licensing & Rights Acquisition",
          cr4: 52.0,
          probit: "LH",
          operatingMargin: 11.4,
          cagr: 7.2,
          cagrForward: 8.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Comcast Corporation",
              ticker: "CMCSA",
              share: 14.0,
              strengths: [
                "Content ownership",
                "Integrated rights management",
                "Premium channel negotiation",
              ],
            },
            {
              name: "Charter Communications",
              ticker: "CHTR",
              share: 10.0,
              strengths: [
                "Content partnerships",
                "Exclusive programming",
                "Bundled offerings",
              ],
            },
          ],
          features: [
            {
              title: "Premium Channel Acquisition",
              description: "Licensing of premium and exclusive content to differentiate service offerings",
            },
            {
              title: "Original Programming Investment",
              description: "Production and acquisition of exclusive content driving subscriber differentiation",
            },
          ],
          opportunity: "Content expansion driving subscriber growth and premium service tier adoption",
          threat: "Rising content costs and fragmentation as studios launch direct-to-consumer platforms",
        },
        {
          name: "Advertising Sales & Marketing Services",
          cr4: 59.0,
          probit: "LH",
          operatingMargin: 13.8,
          cagr: 5.3,
          cagrForward: 6.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Comcast Advertising",
              ticker: "CMCSA",
              share: 16.0,
              strengths: [
                "Addressable advertising platform",
                "Data analytics",
                "Programmatic capabilities",
              ],
            },
            {
              name: "Charter Spectrum Reach",
              ticker: "CHTR",
              share: 12.0,
              strengths: [
                "Targeted local advertising",
                "Addressable insertion",
                "Automated platforms",
              ],
            },
          ],
          features: [
            {
              title: "Addressable Advertising",
              description: "Targeted ad insertion based on household-level viewer data and preferences",
            },
            {
              title: "Programmatic Ad Platform",
              description: "Automated buying and selling of advertising inventory using real-time analytics",
            },
          ],
          opportunity: "Rapid growth in addressable advertising converting linear TV to programmable channels",
          threat: "Lower CPMs compared to digital platforms and advertiser preference for direct streaming channels",
        },
        {
          name: "Technology & Solution Sales",
          cr4: 61.0,
          probit: "HH",
          operatingMargin: 19.3,
          cagr: 9.1,
          cagrForward: 10.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Cisco Systems",
              ticker: "CSCO",
              share: 18.0,
              strengths: [
                "Integrated platform sales",
                "Enterprise relationships",
                "Cloud solutions",
              ],
            },
            {
              name: "Harmonic Inc.",
              ticker: "HLIT",
              share: 13.0,
              strengths: [
                "Cloud video platform sales",
                "Encoding solutions",
                "Operator partnerships",
              ],
            },
          ],
          features: [
            {
              title: "End-to-End Solution Sales",
              description: "Integrated technology platform sales and implementation for network modernization",
            },
            {
              title: "Cloud Platform Adoption",
              description: "Sales and migration services for virtualized and cloud-based broadcast systems",
            },
          ],
          opportunity: "Accelerating operator migration to cloud and software-defined platforms driving enterprise sales",
          threat: "Competitive pricing pressure from multiple platform vendors and open-source alternatives",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer & End-User Services",
      subIndustries: [
        {
          name: "Video Subscription Services (B2C)",
          cr4: 45.0,
          probit: "LH",
          operatingMargin: 9.6,
          cagr: 0.8,
          cagrForward: 1.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Charter Communications",
              ticker: "CHTR",
              share: 12.0,
              strengths: [
                "Spectrum brand",
                "Bundled services",
                "Subscriber base",
              ],
            },
            {
              name: "Comcast Corporation",
              ticker: "CMCSA",
              share: 11.0,
              strengths: [
                "Xfinity video platform",
                "Content integration",
                "Technology innovations",
              ],
            },
          ],
          features: [
            {
              title: "Multi-Tiered Service Plans",
              description: "Flexible subscription packages with diverse content offerings and price points",
            },
            {
              title: "On-Demand & Interactive Services",
              description: "Expanded content consumption options including VOD and interactive programming",
            },
          ],
          opportunity: "Premium service tier adoption driven by exclusive content and enhanced viewing experiences",
          threat: "Cord-cutting acceleration and subscriber migration to standalone streaming platforms",
        },
        {
          name: "Broadband Internet Services",
          cr4: 52.0,
          probit: "HH",
          operatingMargin: 18.9,
          cagr: 8.2,
          cagrForward: 9.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Charter Communications",
              ticker: "CHTR",
              share: 13.0,
              strengths: [
                "Spectrum Internet brand",
                "Network speeds",
                "Nationwide coverage",
              ],
            },
            {
              name: "Comcast Corporation",
              ticker: "CMCSA",
              share: 12.0,
              strengths: [
                "Xfinity Internet",
                "gigabit speeds",
                "Home WiFi solutions",
              ],
            },
          ],
          features: [
            {
              title: "High-Speed Connectivity",
              description: "Broadband services delivering speeds meeting consumer and enterprise requirements",
            },
            {
              title: "Bundled Service Offerings",
              description: "Integration with video and voice services creating comprehensive connectivity solutions",
            },
          ],
          opportunity: "Continued subscriber growth driven by increasing broadband adoption and speed tier upgrades",
          threat: "Fiber-to-home competition from telecom operators and dedicated broadband providers",
        },
        {
          name: "Voice over IP (VoIP) Services",
          cr4: 68.0,
          probit: "HL",
          operatingMargin: 14.2,
          cagr: 1.4,
          cagrForward: 0.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Charter Communications",
              ticker: "CHTR",
              share: 15.0,
              strengths: [
                "Spectrum Voice brand",
                "Triple-play bundling",
                "Customer retention",
              ],
            },
            {
              name: "Comcast Corporation",
              ticker: "CMCSA",
              share: 13.0,
              strengths: [
                "Xfinity Voice",
                "Bundled services",
                "Feature-rich platform",
              ],
            },
          ],
          features: [
            {
              title: "VoIP Service Delivery",
              description: "Voice communications over broadband infrastructure with advanced calling features",
            },
            {
              title: "Unified Communications",
              description: "Integration with video and broadband services for comprehensive household connectivity",
            },
          ],
          opportunity: "Potential growth in small business VoIP adoption and unified communications integration",
          threat: "Mobile substitution and declining wireline voice service value",
        },
        {
          name: "Customer Support & Technical Services",
          cr4: 42.0,
          probit: "LH",
          operatingMargin: 10.3,
          cagr: 3.6,
          cagrForward: 4.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Charter Communications",
              ticker: "CHTR",
              share: 11.0,
              strengths: [
                "Self-service support options",
                "Multi-channel support",
                "Service quality standards",
              ],
            },
            {
              name: "Comcast Corporation",
              ticker: "CMCSA",
              share: 10.0,
              strengths: [
                "Digital support innovation",
                "AI-powered tools",
                "Customer satisfaction focus",
              ],
            },
          ],
          features: [
            {
              title: "Omnichannel Support",
              description: "Integration of phone, chat, email, and in-home support for comprehensive customer service",
            },
            {
              title: "Proactive Network Management",
              description: "AI-driven monitoring and issue resolution improving service reliability",
            },
          ],
          opportunity: "Efficiency gains through AI and automation improving customer satisfaction and retention",
          threat: "Customer expectations for superior support increasing operational complexity and costs",
        },
        {
          name: "Streaming & OTT Platform Services",
          cr4: 38.0,
          probit: "LH",
          operatingMargin: 7.8,
          cagr: 12.4,
          cagrForward: 13.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Comcast (Peacock)",
              ticker: "CMCSA",
              share: 9.0,
              strengths: [
                "Peacock streaming service",
                "Content library",
                "Bundling strategy",
              ],
            },
            {
              name: "Charter Communications (partnerships)",
              ticker: "CHTR",
              share: 6.0,
              strengths: [
                "Streaming partnerships",
                "Content integration",
                "Service bundling",
              ],
            },
          ],
          features: [
            {
              title: "OTT Streaming Integration",
              description: "Native streaming platform integration within traditional cable service offerings",
            },
            {
              title: "Content Curation & Bundling",
              description: "Aggregation of multiple streaming services with cable video into single platform",
            },
          ],
          opportunity: "Fastest-growing segment as consumer preference shifts toward IP-based content delivery",
          threat: "Intense competition from Netflix, Disney+, and other standalone platforms with lower bundling appeal",
          niche: {
            name: "Independent SVOD Platforms",
            ticker: "NFLX",
            share: 5.0,
            cagr: 18.2,
            margin: "8-12%",
            strategy: "Original content production and global market expansion",
            valuation: "P/E 35-45x",
          },
        },
      ],
    },
  ],
};
