import type { ValueChain } from '../../types/valueChain';

export const a2_40Data: ValueChain = {
  code: "A2-40",
  name: "Advertising Agencies industry (IM A2-40; sector A2 — Mind)",
  imCode: "A2-40",
  classificationCode: "A2-40",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Content Creation & Production Services",
          cr4: 35.0,
          probit: "HL",
          operatingMargin: 16.2,
          cagr: 3.9,
          cagrForward: 4.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Getty Images",
              ticker: "GETY",
              share: 12.0,
              strengths: [
                "Extensive stock photography library",
                "Content licensing platform",
                "Digital rights management",
              ],
            },
            {
              name: "Shutterstock",
              ticker: "SSTK",
              share: 9.0,
              strengths: [
                "Royalty-free media subscription model",
                "AI-powered search",
                "Global contributor network",
              ],
            },
          ],
          features: [
            {
              title: "Photography & Videography",
              description: "Professional content production including photography, videography, and post-production services",
            },
            {
              title: "Asset Libraries",
              description: "Licensed stock photography, video, music, and graphic assets available for advertising campaigns",
            },
          ],
          opportunity: "Growing demand for user-generated content and AI-assisted content creation tools",
          threat: "AI-generated content reducing demand for traditional stock media and freelance creators",
        },
        {
          name: "Talent & Freelance Networks",
          cr4: 28.0,
          probit: "LH",
          operatingMargin: 8.5,
          cagr: 6.2,
          cagrForward: 7.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Fiverr International",
              ticker: "FVRR",
              share: 8.0,
              strengths: [
                "Global freelancer marketplace",
                "Gig economy platform",
                "Multi-category services",
              ],
            },
            {
              name: "Upwork",
              ticker: "UPWK",
              share: 7.0,
              strengths: [
                "Enterprise-grade freelance platform",
                "Specialized talent pools",
                "Escrow payment system",
              ],
            },
          ],
          features: [
            {
              title: "Creative Talent Sourcing",
              description: "Access to freelance copywriters, designers, illustrators, and creative specialists",
            },
            {
              title: "Flexible Resource Scaling",
              description: "On-demand access to specialized expertise without long-term employment commitments",
            },
          ],
          opportunity: "Rapid growth in flexible workforce models and specialized remote talent pools",
          threat: "Commoditization of freelance services and price compression on platforms",
        },
        {
          name: "Marketing Technology & Data Providers",
          cr4: 42.0,
          probit: "HH",
          operatingMargin: 22.1,
          cagr: 5.8,
          cagrForward: 8.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Salesforce",
              ticker: "CRM",
              share: 18.0,
              strengths: [
                "Integrated CRM and marketing cloud",
                "Enterprise-grade analytics",
                "AI-powered insights",
              ],
            },
            {
              name: "Adobe",
              ticker: "ADBE",
              share: 15.0,
              strengths: [
                "Creative suite and analytics tools",
                "Experience Cloud platform",
                "Cross-channel campaign management",
              ],
            },
            {
              name: "HubSpot",
              ticker: "HUBS",
              share: 11.0,
              strengths: [
                "All-in-one marketing platform",
                "Mid-market focus",
                "Ease of use and integration",
              ],
            },
          ],
          features: [
            {
              title: "Marketing Automation Platforms",
              description: "Software tools for email marketing, campaign management, and customer relationship management",
            },
            {
              title: "Analytics & Attribution",
              description: "Multi-channel attribution models, real-time dashboards, and audience intelligence data",
            },
            {
              title: "Data Integration Services",
              description: "First-party data collection, audience segmentation, and customer data platforms",
            },
          ],
          opportunity: "Shift toward first-party data strategies and real-time attribution modeling post-cookie deprecation",
          threat: "Intense competition from cloud giants (Google Cloud, AWS) entering marketing technology",
          niche: {
            name: "Privacy-First CDP Platforms",
            ticker: "CDPX",
            share: 5.0,
            cagr: 12.5,
            margin: ">18%",
            strategy: "Focus on cookieless data collection and compliance with GDPR/CCPA",
            valuation: "P/E 38x",
          },
        },
        {
          name: "Media Buying & Programmatic Platforms",
          cr4: 55.0,
          probit: "HH",
          operatingMargin: 19.8,
          cagr: 4.3,
          cagrForward: 6.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Google Marketing Cloud",
              ticker: "GOOGL",
              share: 28.0,
              strengths: [
                "Largest programmatic ad exchange",
                "Real-time bidding platform",
                "Integrated with Google Analytics",
              ],
            },
            {
              name: "The Trade Desk",
              ticker: "TTD",
              share: 12.0,
              strengths: [
                "Independent demand-side platform",
                "Multi-channel reach",
                "Transparent pricing model",
              ],
            },
          ],
          features: [
            {
              title: "Programmatic Ad Buying",
              description: "Automated real-time bidding and ad placement across display, video, and mobile channels",
            },
            {
              title: "Audience Targeting",
              description: "Behavioral, contextual, and first-party audience segmentation and retargeting capabilities",
            },
          ],
          opportunity: "Growth in connected TV, audio streaming, and retail media network integrations",
          threat: "Privacy regulations and browser cookie deprecation reducing targeting accuracy",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing & Strategy Development",
      subIndustries: [
        {
          name: "Strategic Consulting & Planning Services",
          cr4: 38.0,
          probit: "HH",
          operatingMargin: 24.5,
          cagr: 3.8,
          cagrForward: 4.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Accenture",
              ticker: "ACN",
              share: 14.0,
              strengths: [
                "Integrated marketing consulting",
                "Digital transformation expertise",
                "Global network",
              ],
            },
            {
              name: "Deloitte",
              ticker: "DELIX",
              share: 11.0,
              strengths: [
                "Enterprise marketing strategy",
                "Industry-specific insights",
                "Technology integration",
              ],
            },
          ],
          features: [
            {
              title: "Market Research & Analysis",
              description: "Competitive intelligence, consumer behavior analysis, and market trend identification",
            },
            {
              title: "Strategic Brand Planning",
              description: "Brand positioning, messaging frameworks, and multi-year marketing strategies",
            },
            {
              title: "Business Objectives Alignment",
              description: "Connecting marketing strategy to corporate business goals and financial outcomes",
            },
          ],
          opportunity: "Growing demand for data-driven strategic advisory and business transformation services",
          threat: "In-house marketing teams reducing reliance on external strategic consultants",
        },
        {
          name: "Creative Strategy & Ideation",
          cr4: 22.0,
          probit: "HL",
          operatingMargin: 15.8,
          cagr: 2.1,
          cagrForward: 3.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Wieden+Kennedy",
              ticker: null,
              share: 4.0,
              strengths: [
                "Award-winning creative output",
                "Brand storytelling expertise",
                "Global creative network",
              ],
            },
            {
              name: "Droga5",
              ticker: null,
              share: 3.0,
              strengths: [
                "Digital-first creative approach",
                "Innovation labs",
                "Data-informed creativity",
              ],
            },
          ],
          features: [
            {
              title: "Campaign Ideation & Concepting",
              description: "Creative brainstorming, concept development, and big-idea generation for campaigns",
            },
            {
              title: "Creative Strategy Documents",
              description: "Strategic briefs, creative platforms, and messaging guidelines for campaign execution",
            },
          ],
          opportunity: "Rise of AI-assisted creative ideation and personalization at scale",
          threat: "Commoditization of creative ideas and emergence of AI-generated creative content",
        },
        {
          name: "Insights & Analytics Services",
          cr4: 48.0,
          probit: "HH",
          operatingMargin: 21.3,
          cagr: 5.6,
          cagrForward: 7.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Nielsen Holdings",
              ticker: "NLSN",
              share: 16.0,
              strengths: [
                "Consumer insights and ratings",
                "Media measurement",
                "Cross-channel analytics",
              ],
            },
            {
              name: "Kantar",
              ticker: null,
              share: 10.0,
              strengths: [
                "Brand health tracking",
                "Consumer research",
                "Market intelligence",
              ],
            },
          ],
          features: [
            {
              title: "Audience Intelligence",
              description: "Real-world data on consumer behavior, preferences, and media consumption patterns",
            },
            {
              title: "Multi-Channel Attribution",
              description: "Analysis connecting digital activity to physical outcomes (in-store visits, calls, purchases)",
            },
            {
              title: "Campaign Performance Analytics",
              description: "Detailed reporting on impressions, engagement, conversions, and ROI by channel",
            },
          ],
          opportunity: "Shift from basic metrics to advanced attribution and predictive analytics",
          threat: "Data privacy regulations limiting collection and use of third-party consumer data",
        },
        {
          name: "Media Planning & Optimization",
          cr4: 45.0,
          probit: "HH",
          operatingMargin: 18.7,
          cagr: 4.9,
          cagrForward: 6.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Mediabrands (part of Interpublic Group)",
              ticker: "IPG",
              share: 13.0,
              strengths: [
                "Integrated media planning",
                "Technology platform access",
                "Client scale",
              ],
            },
            {
              name: "Publicis Media",
              ticker: "PUB",
              share: 11.0,
              strengths: [
                "Unified media ecosystem",
                "AI-driven optimization",
                "Global reach",
              ],
            },
          ],
          features: [
            {
              title: "Channel Mix Optimization",
              description: "Strategic allocation of budgets across digital, traditional, and emerging media channels",
            },
            {
              title: "Tactical Performance Refinement",
              description: "Continuous tweaking of campaigns to improve KPIs and maximize media efficiency",
            },
          ],
          opportunity: "Integration of performance data with strategic planning for real-time optimization",
          threat: "Programmatic platforms reducing need for human media planners",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing & Production",
      subIndustries: [
        {
          name: "Digital Content Production",
          cr4: 32.0,
          probit: "LH",
          operatingMargin: 11.4,
          cagr: 6.7,
          cagrForward: 8.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Riot Games Studio (Tencent subsidiary)",
              ticker: "TCEHY",
              share: 5.0,
              strengths: [
                "High-quality video production",
                "Esports content creation",
                "Brand partnership integration",
              ],
            },
            {
              name: "Wistia",
              ticker: null,
              share: 3.0,
              strengths: [
                "Video hosting and analytics",
                "Interactive video tools",
                "Brand safety features",
              ],
            },
          ],
          features: [
            {
              title: "Video Production & Editing",
              description: "Production of short-form and long-form video content for digital platforms and social media",
            },
            {
              title: "Animation & Motion Graphics",
              description: "2D/3D animation, motion graphics, and visual effects for advertisements and digital assets",
            },
            {
              title: "Interactive Content Development",
              description: "Quizzes, interactive videos, augmented reality experiences, and immersive digital content",
            },
          ],
          opportunity: "Explosive growth in short-form video, Reels, and TikTok content production demand",
          threat: "Rapid commoditization as creation tools become accessible to in-house teams",
          niche: {
            name: "AI-Assisted Content Generation",
            ticker: "AICC",
            share: 2.0,
            cagr: 35.2,
            margin: ">25%",
            strategy: "Leverage generative AI for rapid scalable content production at lower cost",
            valuation: "P/E 52x",
          },
        },
        {
          name: "Website & App Development",
          cr4: 29.0,
          probit: "LH",
          operatingMargin: 9.8,
          cagr: 5.2,
          cagrForward: 6.8,
          classificationCodes: [],
          leaders: [
            {
              name: "WPP plc",
              ticker: "WPP",
              share: 8.0,
              strengths: [
                "Full-service digital development",
                "Enterprise platform experience",
                "Global delivery",
              ],
            },
            {
              name: "Accenture Interactive",
              ticker: "ACN",
              share: 7.0,
              strengths: [
                "Large-scale digital transformation",
                "Technology integration",
                "Omnichannel strategy",
              ],
            },
          ],
          features: [
            {
              title: "Website Design & Development",
              description: "User experience design, responsive web development, and conversion rate optimization",
            },
            {
              title: "Mobile App Development",
              description: "Native and cross-platform mobile app development for iOS, Android, and web",
            },
            {
              title: "E-commerce Solutions",
              description: "Online store setup, payment integration, and shopping experience optimization",
            },
          ],
          opportunity: "Growing demand for headless commerce and omnichannel digital experiences",
          threat: "No-code/low-code platforms and templates reducing need for custom development",
        },
        {
          name: "Email & Direct Mail Production",
          cr4: 38.0,
          probit: "HL",
          operatingMargin: 16.2,
          cagr: 1.9,
          cagrForward: 2.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Constant Contact (Endurance International)",
              ticker: "EIGI",
              share: 6.0,
              strengths: [
                "Email marketing automation",
                "Small business focus",
                "Template library",
              ],
            },
            {
              name: "Klaviyo",
              ticker: "KVYO",
              share: 5.0,
              strengths: [
                "E-commerce email platform",
                "Segmentation capabilities",
                "Growing SMB base",
              ],
            },
          ],
          features: [
            {
              title: "Email Campaign Design & Deployment",
              description: "HTML email design, A/B testing, segmentation, and automated send scheduling",
            },
            {
              title: "Direct Mail Production",
              description: "Print collateral design, production, and fulfillment for postcards, brochures, and catalogs",
            },
          ],
          opportunity: "Integration of personalization and dynamic content in email campaigns",
          threat: "Shift to digital-first communication reducing traditional direct mail volumes",
        },
        {
          name: "Print & Promotional Materials",
          cr4: 51.0,
          probit: "HL",
          operatingMargin: 14.1,
          cagr: 0.8,
          cagrForward: 1.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Vistaprint (Cimpress)",
              ticker: "CMPR",
              share: 18.0,
              strengths: [
                "Print-on-demand platform",
                "Small business reach",
                "Customization options",
              ],
            },
            {
              name: "Shutterfly",
              ticker: "SFLY",
              share: 10.0,
              strengths: [
                "Photo product focus",
                "Seasonal demand capture",
                "Consumer brand awareness",
              ],
            },
          ],
          features: [
            {
              title: "Print Design & Production",
              description: "Business cards, letterhead, brochures, banners, and signage design and production",
            },
            {
              title: "Promotional Merchandise",
              description: "Branded merchandise, apparel, drinkware, and promotional items production",
            },
          ],
          opportunity: "Resurgence in experiential marketing and tangible branded merchandise",
          threat: "Long-term decline in print advertising and traditional promotional spending",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution & Channel Management",
      subIndustries: [
        {
          name: "Digital Advertising Networks",
          cr4: 62.0,
          probit: "HH",
          operatingMargin: 26.8,
          cagr: 4.5,
          cagrForward: 5.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Google Ads / Alphabet",
              ticker: "GOOGL",
              share: 32.0,
              strengths: [
                "Search and display dominance",
                "YouTube integration",
                "Real-time bidding",
              ],
            },
            {
              name: "Meta Platforms",
              ticker: "META",
              share: 18.0,
              strengths: [
                "Social media ad dominance",
                "Detailed targeting capabilities",
                "Instagram/WhatsApp reach",
              ],
            },
            {
              name: "Amazon Advertising",
              ticker: "AMZN",
              share: 8.0,
              strengths: [
                "High-intent shopping audience",
                "Retail media network",
                "First-party data",
              ],
            },
          ],
          features: [
            {
              title: "Search Advertising",
              description: "Pay-per-click search ads on Google, Bing, and vertical search platforms",
            },
            {
              title: "Social Media Advertising",
              description: "Native ads on Facebook, Instagram, TikTok, LinkedIn, Twitter, and YouTube",
            },
            {
              title: "Display & Programmatic",
              description: "Banner ads, video ads, and programmatic placements across publisher networks",
            },
          ],
          opportunity: "Expansion of retail media networks and shoppable social commerce integrations",
          threat: "Regulatory scrutiny on data privacy and anti-competitive practices",
        },
        {
          name: "Traditional Media Distribution",
          cr4: 58.0,
          probit: "HL",
          operatingMargin: 12.6,
          cagr: -2.3,
          cagrForward: 0.0,
          classificationCodes: [],
          leaders: [
            {
              name: "Gray Television",
              ticker: "GTN",
              share: 11.0,
              strengths: [
                "Broadcast TV network",
                "Local market penetration",
                "Sports programming",
              ],
            },
            {
              name: "iHeartMedia",
              ticker: "IHRT",
              share: 9.0,
              strengths: [
                "Radio network reach",
                "Podcast platform integration",
                "Listener data",
              ],
            },
          ],
          features: [
            {
              title: "Broadcast Television Ads",
              description: "TV commercial placements on network and cable channels during programming",
            },
            {
              title: "Radio & Podcast Advertising",
              description: "Radio spots, pre-roll/mid-roll podcast ads, and sponsored content integration",
            },
            {
              title: "Print Media Placements",
              description: "Newspaper and magazine advertisements, including digital editions",
            },
          ],
          opportunity: "Connected TV and streaming audio advertising capturing cord-cutting audiences",
          threat: "Continued audience migration to digital and decline in traditional media consumption",
        },
        {
          name: "Streaming & Connected TV Platforms",
          cr4: 45.0,
          probit: "LH",
          operatingMargin: 8.2,
          cagr: 12.8,
          cagrForward: 14.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Netflix",
              ticker: "NFLX",
              share: 14.0,
              strengths: [
                "Largest streaming audience",
                "Emerging ad-supported tier",
                "Content library",
              ],
            },
            {
              name: "Disney (Disney+, Hulu, ESPN+)",
              ticker: "DIS",
              share: 12.0,
              strengths: [
                "Multi-platform ecosystem",
                "Premium content",
                "Family demographics",
              ],
            },
            {
              name: "Amazon Prime Video",
              ticker: "AMZN",
              share: 11.0,
              strengths: [
                "Prime member integration",
                "Retail customer overlap",
                "Ad insertion capabilities",
              ],
            },
          ],
          features: [
            {
              title: "Connected TV (CTV) Ad Placement",
              description: "Programmatic ad insertion on smart TVs, streaming devices, and app-based viewing",
            },
            {
              title: "Sponsorship & Branded Content",
              description: "Branded integrations, sponsorships of shows/sports, and custom content production",
            },
          ],
          opportunity: "Explosive growth in CTV advertising as linear TV viewers migrate to streaming",
          threat: "Ad-free tier preference and consumer resistance to ad proliferation on platforms",
          niche: {
            name: "Shoppable Video Ads",
            ticker: "SHOP",
            share: 3.0,
            cagr: 28.1,
            margin: ">22%",
            strategy: "Enable direct commerce from video ads with interactive product discovery",
            valuation: "P/E 48x",
          },
        },
        {
          name: "Out-of-Home & Experiential Media",
          cr4: 42.0,
          probit: "LH",
          operatingMargin: 10.5,
          cagr: 3.2,
          cagrForward: 4.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Clear Channel Outdoor",
              ticker: "CCO",
              share: 16.0,
              strengths: [
                "Billboard network",
                "Digital display dominance",
                "National scale",
              ],
            },
            {
              name: "JCDecaux",
              ticker: "JCDX",
              share: 12.0,
              strengths: [
                "Global OOH network",
                "Transit advertising",
                "Urban market coverage",
              ],
            },
          ],
          features: [
            {
              title: "Digital Billboards & Displays",
              description: "Programmatic digital billboard placements, transit ads, and venue-based screens",
            },
            {
              title: "Event & Experiential Marketing",
              description: "Sponsorships, pop-up activations, trade shows, and immersive brand experiences",
            },
          ],
          opportunity: "Growth of dynamic digital OOH with location-based and contextual messaging",
          threat: "Shift in consumer attention to mobile devices reducing OOH effectiveness",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales & Account Management",
      subIndustries: [
        {
          name: "Full-Service Advertising Agencies",
          cr4: 28.0,
          probit: "HL",
          operatingMargin: 13.4,
          cagr: 2.1,
          cagrForward: 3.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Omnicom Group",
              ticker: "OMC",
              share: 8.0,
              strengths: [
                "Full-service offerings",
                "Global account management",
                "Integrated services",
              ],
            },
            {
              name: "Publicis Groupe",
              ticker: "PUB",
              share: 7.0,
              strengths: [
                "Marketing ecosystem",
                "Technology platform",
                "Enterprise relationships",
              ],
            },
            {
              name: "Interpublic Group",
              ticker: "IPG",
              share: 6.0,
              strengths: [
                "Diverse agency portfolio",
                "Media buying scale",
                "Creative expertise",
              ],
            },
          ],
          features: [
            {
              title: "Account Management & Client Relationships",
              description: "Dedicated account teams managing client communications, project delivery, and strategic partnerships",
            },
            {
              title: "Integrated Campaign Management",
              description: "Coordination across creative, media, digital, and PR for unified brand messaging",
            },
          ],
          opportunity: "Consolidation and acquisition of specialized boutique agencies",
          threat: "In-house agency teams and client-side consolidation reducing third-party agency spend",
        },
        {
          name: "Digital & Performance Marketing Agencies",
          cr4: 22.0,
          probit: "HH",
          operatingMargin: 17.8,
          cagr: 7.3,
          cagrForward: 8.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Merkle (Dentsu subsidiary)",
              ticker: "DNTSF",
              share: 5.0,
              strengths: [
                "Performance marketing expertise",
                "Data-driven approach",
                "Technology integration",
              ],
            },
            {
              name: "Cramer-Krasselt",
              ticker: null,
              share: 3.0,
              strengths: [
                "Digital transformation focus",
                "Agile methodology",
                "Startup mentality",
              ],
            },
          ],
          features: [
            {
              title: "Performance Optimization Services",
              description: "Ongoing campaign optimization, A/B testing, and ROI-focused management",
            },
            {
              title: "Conversion Rate Optimization",
              description: "Website and funnel optimization to improve lead generation and sales",
            },
          ],
          opportunity: "Expansion into commerce and shoppable media advisory",
          threat: "Client pressure on fees and move toward performance-based pricing models",
          niche: {
            name: "Conversion-Focused Boutiques",
            ticker: null,
            share: 2.0,
            cagr: 9.2,
            margin: ">20%",
            strategy: "Hyper-specialized in CRO and growth marketing with outcome guarantees",
            valuation: "P/E 22x",
          },
        },
        {
          name: "Specialized & Boutique Agencies",
          cr4: 18.0,
          probit: "HL",
          operatingMargin: 14.6,
          cagr: 2.8,
          cagrForward: 3.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Anomaly",
              ticker: null,
              share: 1.0,
              strengths: [
                "Award-winning creative",
                "Integrated thinking",
                "Brand-focused approach",
              ],
            },
            {
              name: "Havas (part of Vivendi)",
              ticker: "VIV",
              share: 3.0,
              strengths: [
                "Global network",
                "Specialist networks",
                "Purpose-driven marketing",
              ],
            },
          ],
          features: [
            {
              title: "Vertical-Specific Expertise",
              description: "Specialized agencies focused on healthcare, financial services, technology, or retail sectors",
            },
            {
              title: "Functional Specialization",
              description: "Boutique shops focused on PR, influencer marketing, SEO, or other specialized services",
            },
          ],
          opportunity: "Rising demand for specialized expertise in niche verticals and emerging channels",
          threat: "Acquisition by larger holding companies potentially compromising boutique culture",
        },
        {
          name: "In-House & Freelance Agency Models",
          cr4: 15.0,
          probit: "LH",
          operatingMargin: 9.2,
          cagr: 8.1,
          cagrForward: 10.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Upwork (Freelance Marketplace)",
              ticker: "UPWK",
              share: 4.0,
              strengths: [
                "On-demand talent sourcing",
                "Flexible engagement model",
                "Cost-effective",
              ],
            },
            {
              name: "Internal client teams",
              ticker: null,
              share: 6.0,
              strengths: [
                "Brand alignment",
                "Cost control",
                "Speed to execution",
              ],
            },
          ],
          features: [
            {
              title: "Freelance Agency Networks",
              description: "Flexible project-based hiring and management of freelance creatives and strategists",
            },
            {
              title: "In-House Agency Support",
              description: "Consulting and outsourced services to supplement client-side in-house teams",
            },
          ],
          opportunity: "Continued growth of flexible workforce and project-based staffing models",
          threat: "Risk of quality inconsistency and brand continuity with fragmented team models",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer & Consumer Engagement",
      subIndustries: [
        {
          name: "Brand Loyalty & Customer Retention Programs",
          cr4: 32.0,
          probit: "HH",
          operatingMargin: 19.3,
          cagr: 6.4,
          cagrForward: 7.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Epsilon (part of Alliance Data)",
              ticker: "ADS",
              share: 8.0,
              strengths: [
                "Loyalty program platform",
                "Customer data expertise",
                "Multi-industry reach",
              ],
            },
            {
              name: "Braze",
              ticker: "BRZE",
              share: 5.0,
              strengths: [
                "Customer engagement platform",
                "Real-time messaging",
                "Cross-channel orchestration",
              ],
            },
          ],
          features: [
            {
              title: "Loyalty Program Design & Management",
              description: "Points-based loyalty programs, tiered membership, and personalized rewards strategies",
            },
            {
              title: "Customer Retention Campaigns",
              description: "Win-back campaigns, churn prevention, and lifetime value optimization strategies",
            },
            {
              title: "Personalized Communication",
              description: "Triggered messages, dynamic content, and one-to-one personalization at scale",
            },
          ],
          opportunity: "Integration of AI-driven predictive retention and individualized engagement strategies",
          threat: "Privacy regulations limiting customer data usage and personalization capabilities",
        },
        {
          name: "Influencer Marketing & Partnerships",
          cr4: 28.0,
          probit: "LH",
          operatingMargin: 11.7,
          cagr: 13.2,
          cagrForward: 15.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Influee (various platforms)",
              ticker: null,
              share: 6.0,
              strengths: [
                "Creator network access",
                "Campaign management",
                "Performance tracking",
              ],
            },
            {
              name: "Grin Technologies",
              ticker: null,
              share: 3.0,
              strengths: [
                "Influencer platform",
                "Brand collaboration tools",
                "Analytics",
              ],
            },
          ],
          features: [
            {
              title: "Influencer Discovery & Vetting",
              description: "Identification of relevant influencers, audience analysis, and audience authenticity verification",
            },
            {
              title: "Partnership Management",
              description: "Negotiation, contract management, content approval, and performance tracking",
            },
            {
              title: "Micro & Nano-Influencer Campaigns",
              description: "Engagement with smaller creators for niche audiences and authentic advocacy",
            },
          ],
          opportunity: "Explosive growth in TikTok, YouTube, and Gen Z influencer marketing segments",
          threat: "Fake followers, influencer fraud, and brand safety concerns damaging campaign ROI",
          niche: {
            name: "AI-Verified Influencer Networks",
            ticker: "AINF",
            share: 2.0,
            cagr: 22.1,
            margin: ">18%",
            strategy: "Use machine learning to verify authentic followers and predict campaign performance",
            valuation: "P/E 35x",
          },
        },
        {
          name: "Social Media Management & Community Building",
          cr4: 35.0,
          probit: "HH",
          operatingMargin: 16.8,
          cagr: 8.9,
          cagrForward: 10.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Hootsuite",
              ticker: null,
              share: 8.0,
              strengths: [
                "Multi-platform social management",
                "Scheduling and analytics",
                "Enterprise reach",
              ],
            },
            {
              name: "Sprout Social",
              ticker: "SPT",
              share: 6.0,
              strengths: [
                "Enterprise social platform",
                "Customer care integration",
                "Advanced analytics",
              ],
            },
            {
              name: "Buffer",
              ticker: null,
              share: 4.0,
              strengths: [
                "Easy-to-use interface",
                "SMB focus",
                "Affordable pricing",
              ],
            },
          ],
          features: [
            {
              title: "Social Content Management",
              description: "Content calendars, scheduling, posting, and asset management across multiple platforms",
            },
            {
              title: "Community Engagement",
              description: "Monitoring, responding to comments, managing reviews, and fostering community dialogue",
            },
            {
              title: "Social Listening & Sentiment Analysis",
              description: "Brand mention tracking, competitor analysis, and audience sentiment monitoring",
            },
          ],
          opportunity: "Growth of social commerce and integrated selling directly on social platforms",
          threat: "Algorithm changes and organic reach decline forcing higher reliance on paid social",
        },
        {
          name: "Customer Service & Support Marketing",
          cr4: 38.0,
          probit: "HH",
          operatingMargin: 18.1,
          cagr: 5.2,
          cagrForward: 6.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Zendesk",
              ticker: "ZEN",
              share: 9.0,
              strengths: [
                "Cloud-based CX platform",
                "Multi-channel support",
                "AI chatbot integration",
              ],
            },
            {
              name: "Intercom",
              ticker: null,
              share: 5.0,
              strengths: [
                "Conversational customer platform",
                "Product tours",
                "In-app messaging",
              ],
            },
          ],
          features: [
            {
              title: "Omnichannel Support",
              description: "Unified customer service across email, chat, phone, social media, and messaging apps",
            },
            {
              title: "AI-Powered Chatbots",
              description: "Automated responses, FAQ deflection, and escalation to human agents when needed",
            },
            {
              title: "Customer Feedback & NPS Tracking",
              description: "Survey collection, sentiment analysis, and customer satisfaction metrics",
            },
          ],
          opportunity: "Integration of AI for predictive support and proactive customer problem resolution",
          threat: "Over-automation damaging customer experience and brand perception",
        },
        {
          name: "Marketing Measurement & ROI Reporting",
          cr4: 42.0,
          probit: "HH",
          operatingMargin: 22.6,
          cagr: 6.8,
          cagrForward: 8.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Nielsen",
              ticker: "NLSN",
              share: 10.0,
              strengths: [
                "Gold-standard measurement",
                "Cross-channel attribution",
                "Industry credibility",
              ],
            },
            {
              name: "Measured",
              ticker: null,
              share: 3.0,
              strengths: [
                "Marketing mix modeling",
                "Privacy-first approach",
                "Real-world data",
              ],
            },
          ],
          features: [
            {
              title: "Marketing Mix Modeling (MMM)",
              description: "Statistical analysis of marketing contribution to sales across all channels",
            },
            {
              title: "Cross-Channel Attribution Models",
              description: "Assigning credit to marketing touchpoints in customer journey using various models",
            },
            {
              title: "Strategic Dashboard Reporting",
              description: "Executive-level performance dashboards and business impact measurement",
            },
          ],
          opportunity: "Shift toward real-world outcome measurement and business outcome connection",
          threat: "Data privacy regulations limiting attribution data collection and cross-device tracking",
          niche: {
            name: "Privacy-First Attribution Platforms",
            ticker: "PRIV",
            share: 2.0,
            cagr: 24.3,
            margin: ">20%",
            strategy: "Cookieless attribution using aggregated data and privacy-preserving methodologies",
            valuation: "P/E 41x",
          },
        },
      ],
    },
  ],
};
