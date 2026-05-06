import type { ValueChain } from '../../types/valueChain';

export const a2_80Data: ValueChain = {
  code: "A2-80",
  name: "Education & Training Services industry (IM A2-80; sector A2 — Mind)",
  imCode: "A2-80",
  classificationCode: "A2-80",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Educational Content Publishers",
          cr4: 65.0,
          probit: "HH",
          operatingMargin: 22.1,
          cagr: 6.2,
          cagrForward: 7.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Pearson PLC",
              ticker: "PSO",
              share: 32.0,
              strengths: [
                "Digital textbook dominance",
                "AI content adaptation",
              ],
            },
            {
              name: "McGraw-Hill Education",
              ticker: "MHED",
              share: 18.0,
              strengths: [
                "K-12 curriculum leadership",
                "Assessment tools",
              ],
            },
          ],
          features: [
            {
              title: "Digital Transformation",
              description: "Shift to interactive e-books and adaptive learning platforms",
            },
          ],
          opportunity: "AI-generated personalized content reducing production costs",
          threat: "Open educational resources eroding proprietary sales",
        },
        {
          name: "EdTech Software Providers",
          cr4: 72.0,
          probit: "HL",
          operatingMargin: 28.4,
          cagr: 12.1,
          cagrForward: 15.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Instructure Inc",
              ticker: "INST",
              share: 25.0,
              strengths: [
                "Canvas LMS market leader",
                "Scalable SaaS model",
              ],
            },
          ],
          features: [
            {
              title: "LMS Integration",
              description: "Learning Management Systems enabling seamless content delivery",
            },
          ],
          opportunity: "Expansion into corporate training platforms",
          threat: "Data privacy regulations impacting operations",
          niche: {
            name: "Duolingo",
            ticker: "DUOL",
            share: 8.0,
            cagr: 45.2,
            margin: ">25%",
            strategy: "Gamified microlearning",
            valuation: "P/E 120x",
          },
        },
        {
          name: "Instructional Hardware Suppliers",
          cr4: 55.0,
          probit: "LH",
          operatingMargin: 12.3,
          cagr: 8.7,
          cagrForward: 9.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Lenovo Education",
              ticker: "LNVGY",
              share: 22.0,
              strengths: [
                "Affordable Chromebooks",
                "Device management software",
              ],
            },
          ],
          features: [
            {
              title: "1:1 Device Programs",
              description: "Supply of tablets and laptops for classroom deployment",
            },
          ],
          opportunity: "VR/AR hardware for immersive learning",
          threat: "Declining hardware margins due to commoditization",
        },
        {
          name: "Facilities Construction",
          cr4: 48.0,
          probit: "LL",
          operatingMargin: 8.9,
          cagr: 3.4,
          cagrForward: 4.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Jacobs Engineering",
              ticker: "J",
              share: 15.0,
              strengths: [
                "Modular campus construction",
                "Sustainable building",
              ],
            },
          ],
          features: [
            {
              title: "Smart Campuses",
              description: "IoT-enabled buildings for modern learning environments",
            },
          ],
          opportunity: "Hybrid campus retrofits for blended learning",
          threat: "Budget constraints in public education sector",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "Curriculum Development",
          cr4: 42.0,
          probit: "HH",
          operatingMargin: 19.7,
          cagr: 7.8,
          cagrForward: 9.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Curriculum Associates",
              ticker: "Private",
              share: 28.0,
              strengths: [
                "Data-driven curriculum design",
                "K-12 alignment",
              ],
            },
          ],
          features: [
            {
              title: "Standards Alignment",
              description: "Custom programs meeting Common Core and state requirements",
            },
          ],
          opportunity: "Personalized learning pathways using AI",
          threat: "Standardization limiting innovation",
        },
        {
          name: "Faculty Training & Development",
          cr4: 38.0,
          probit: "HL",
          operatingMargin: 16.2,
          cagr: 11.4,
          cagrForward: 13.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Coursera for Campus",
              ticker: "COUR",
              share: 22.0,
              strengths: [
                "University partnerships",
                "Micro-credentialing",
              ],
            },
          ],
          features: [
            {
              title: "Professional Development",
              description: "Ongoing teacher upskilling programs",
            },
          ],
          opportunity: "Remote PD delivery post-pandemic",
          threat: "Teacher burnout reducing participation",
        },
        {
          name: "Accreditation Services",
          cr4: 85.0,
          probit: "LH",
          operatingMargin: 14.5,
          cagr: 5.6,
          cagrForward: 6.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Middle States Commission",
              ticker: "Non-Profit",
              share: 35.0,
              strengths: [
                "Regional authority",
                "Quality assurance",
              ],
            },
          ],
          features: [
            {
              title: "Quality Assurance",
              description: "Standards validation for institutions",
            },
          ],
          opportunity: "Online program accreditation expansion",
          threat: "Regulatory changes disrupting processes",
        },
        {
          name: "Learning Analytics Providers",
          cr4: 62.0,
          probit: "HH",
          operatingMargin: 24.8,
          cagr: 18.2,
          cagrForward: 22.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Brightspace (D2L)",
              ticker: "Private",
              share: 29.0,
              strengths: [
                "Predictive analytics",
                "Student success tools",
              ],
            },
          ],
          features: [
            {
              title: "Data Insights",
              description: "Real-time performance tracking and intervention",
            },
          ],
          opportunity: "AI-powered early warning systems",
          threat: "FERPA compliance costs",
          niche: {
            name: "Knewton Alta",
            ticker: "Private",
            share: 12.0,
            cagr: 32.5,
            margin: "28%",
            strategy: "Adaptive learning analytics",
            valuation: "Acquired by Wiley",
          },
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "K-12 Schools & Academies",
          cr4: 12.0,
          probit: "LL",
          operatingMargin: 4.2,
          cagr: 2.1,
          cagrForward: 2.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Charter Schools USA",
              ticker: "Private",
              share: 8.0,
              strengths: [
                "Network scale",
                "Performance-based funding",
              ],
            },
          ],
          features: [
            {
              title: "Classroom Delivery",
              description: "Core instruction and student development",
            },
          ],
          opportunity: "STEM specialization programs",
          threat: "Enrollment declines in rural areas",
        },
        {
          name: "Higher Education Institutions",
          cr4: 28.0,
          probit: "LH",
          operatingMargin: 9.8,
          cagr: 4.5,
          cagrForward: 5.9,
          classificationCodes: [],
          leaders: [
            {
              name: "University of Phoenix",
              ticker: "APOL",
              share: 14.0,
              strengths: [
                "Online delivery scale",
                "Adult learner focus",
              ],
            },
          ],
          features: [
            {
              title: "Degree Programs",
              description: "Undergraduate and graduate instruction",
            },
          ],
          opportunity: "Micro-credentials and stackable degrees",
          threat: "Demographic enrollment cliff",
        },
        {
          name: "Corporate Training Providers",
          cr4: 58.0,
          probit: "HH",
          operatingMargin: 21.3,
          cagr: 14.7,
          cagrForward: 17.2,
          classificationCodes: [],
          leaders: [
            {
              name: "LinkedIn Learning",
              ticker: "MSFT",
              share: 26.0,
              strengths: [
                "Professional network integration",
                "B2B scale",
              ],
            },
          ],
          features: [
            {
              title: "Skills Development",
              description: "Workforce upskilling programs",
            },
          ],
          opportunity: "AI and digital skills training surge",
          threat: "Economic downturns cutting training budgets",
        },
        {
          name: "Vocational & Technical Training",
          cr4: 45.0,
          probit: "HL",
          operatingMargin: 15.6,
          cagr: 9.2,
          cagrForward: 11.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Universal Technical Institute",
              ticker: "UTI",
              share: 19.0,
              strengths: [
                "Trade skill focus",
                "Employer partnerships",
              ],
            },
          ],
          features: [
            {
              title: "Hands-on Training",
              description: "Practical skills for technical careers",
            },
          ],
          opportunity: "Green energy technician programs",
          threat: "Automation reducing demand for some trades",
        },
        {
          name: "Online Program Managers",
          cr4: 78.0,
          probit: "HH",
          operatingMargin: 26.7,
          cagr: 23.4,
          cagrForward: 19.8,
          classificationCodes: [],
          leaders: [
            {
              name: "2U Inc",
              ticker: "TWOU",
              share: 34.0,
              strengths: [
                "University partnerships",
                "Marketing expertise",
              ],
            },
          ],
          features: [
            {
              title: "Digital Delivery",
              description: "End-to-end online program management",
            },
          ],
          opportunity: "International student expansion",
          threat: "Revenue share model scrutiny",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Learning Management Systems",
          cr4: 68.0,
          probit: "HH",
          operatingMargin: 27.2,
          cagr: 16.8,
          cagrForward: 18.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Blackboard Inc",
              ticker: "Private",
              share: 29.0,
              strengths: [
                "Enterprise deployment",
                "Integration capabilities",
              ],
            },
          ],
          features: [
            {
              title: "Content Distribution",
              description: "Platform for course delivery and management",
            },
          ],
          opportunity: "Mobile-first LMS adoption",
          threat: "Open source alternatives",
        },
        {
          name: "Student Information Systems",
          cr4: 71.0,
          probit: "HL",
          operatingMargin: 23.4,
          cagr: 7.9,
          cagrForward: 9.2,
          classificationCodes: [],
          leaders: [
            {
              name: "PowerSchool",
              ticker: "PWSC",
              share: 31.0,
              strengths: [
                "K-12 market dominance",
                "Parent portals",
              ],
            },
          ],
          features: [
            {
              title: "Administrative Platforms",
              description: "Enrollment, grading, and attendance systems",
            },
          ],
          opportunity: "AI administrative automation",
          threat: "Legacy system migration costs",
        },
        {
          name: "Assessment & Testing Services",
          cr4: 82.0,
          probit: "LH",
          operatingMargin: 18.1,
          cagr: 6.3,
          cagrForward: 7.7,
          classificationCodes: [],
          leaders: [
            {
              name: "College Board",
              ticker: "Non-Profit",
              share: 38.0,
              strengths: [
                "SAT/ACT monopoly",
                "AP program scale",
              ],
            },
          ],
          features: [
            {
              title: "Standardized Testing",
              description: "High-stakes assessment delivery",
            },
          ],
          opportunity: "Adaptive digital testing",
          threat: "Test-optional admissions trend",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Education Marketing Agencies",
          cr4: 52.0,
          probit: "HH",
          operatingMargin: 20.5,
          cagr: 13.2,
          cagrForward: 15.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Hobsons (Naviance)",
              ticker: "Private",
              share: 24.0,
              strengths: [
                "Enrollment funnel optimization",
                "CRM integration",
              ],
            },
          ],
          features: [
            {
              title: "Lead Generation",
              description: "Student recruitment campaigns and funnels",
            },
          ],
          opportunity: "International student marketing",
          threat: "Privacy regulations limiting data use",
        },
        {
          name: "Tuition Payment Processors",
          cr4: 67.0,
          probit: "HL",
          operatingMargin: 25.8,
          cagr: 9.4,
          cagrForward: 10.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Nelnet",
              ticker: "NNI",
              share: 28.0,
              strengths: [
                "Payment plans",
                "Financial aid processing",
              ],
            },
          ],
          features: [
            {
              title: "Billing Solutions",
              description: "Installment plans and financial aid integration",
            },
          ],
          opportunity: "Buy-now-pay-later for education",
          threat: "Student debt crisis reducing enrollment",
        },
        {
          name: "Corporate L&D Procurement",
          cr4: 44.0,
          probit: "LH",
          operatingMargin: 12.9,
          cagr: 11.6,
          cagrForward: 14.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Degreed",
              ticker: "Private",
              share: 18.0,
              strengths: [
                "Skills ontology",
                "Learning experience platforms",
              ],
            },
          ],
          features: [
            {
              title: "B2B Sales",
              description: "Enterprise training solution procurement",
            },
          ],
          opportunity: "Skills-based hiring driving L&D spend",
          threat: "Budget scrutiny in economic slowdowns",
        },
        {
          name: "Government Contracts & Grants",
          cr4: 76.0,
          probit: "LL",
          operatingMargin: 7.2,
          cagr: 3.8,
          cagrForward: 4.5,
          classificationCodes: [],
          leaders: [
            {
              name: "MAXIMUS",
              ticker: "MMS",
              share: 22.0,
              strengths: [
                "Government services expertise",
                "Workforce programs",
              ],
            },
          ],
          features: [
            {
              title: "Public Funding",
              description: "Securing government education contracts",
            },
          ],
          opportunity: "Federal upskilling initiatives",
          threat: "Budget cuts and political shifts",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "Student Placement Services",
          cr4: 59.0,
          probit: "HL",
          operatingMargin: 17.4,
          cagr: 8.2,
          cagrForward: 9.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Handshake",
              ticker: "Private",
              share: 27.0,
              strengths: [
                "University career centers",
                "Employer matching",
              ],
            },
          ],
          features: [
            {
              title: "Career Services",
              description: "Job placement and internship pipelines",
            },
          ],
          opportunity: "First-destination outcomes tracking",
          threat: "Economic uncertainty delaying hiring",
        },
        {
          name: "Alumni Engagement Networks",
          cr4: 41.0,
          probit: "LH",
          operatingMargin: 11.3,
          cagr: 6.7,
          cagrForward: 8.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Alumni Ventures",
              ticker: "Private",
              share: 16.0,
              strengths: [
                "Endowment management",
                "Networking events",
              ],
            },
          ],
          features: [
            {
              title: "Lifelong Learning",
              description: "Continuing education and donor relations",
            },
          ],
          opportunity: "Alumni-funded micro-credentials",
          threat: "Declining donor participation",
        },
        {
          name: "Employer Outcome Verification",
          cr4: 63.0,
          probit: "HH",
          operatingMargin: 22.6,
          cagr: 12.9,
          cagrForward: 14.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Burning Glass Technologies",
              ticker: "Private",
              share: 24.0,
              strengths: [
                "Labor market analytics",
                "Skills validation",
              ],
            },
          ],
          features: [
            {
              title: "ROI Measurement",
              description: "Program effectiveness and graduate outcomes",
            },
          ],
          opportunity: "Skills-based hiring verification",
          threat: "Credential inflation concerns",
          niche: {
            name: "Strada Education",
            ticker: "Non-Profit",
            share: 11.0,
            cagr: 28.4,
            margin: ">20%",
            strategy: "Workforce outcomes research",
            valuation: "Mission-driven",
          },
        },
        {
          name: "Certification & Credentialing",
          cr4: 74.0,
          probit: "HH",
          operatingMargin: 29.1,
          cagr: 15.3,
          cagrForward: 17.8,
          classificationCodes: [],
          leaders: [
            {
              name: "CompTIA",
              ticker: "Non-Profit",
              share: 33.0,
              strengths: [
                "IT certification authority",
                "Global recognition",
              ],
            },
          ],
          features: [
            {
              title: "Digital Badges",
              description: "Portable, verifiable skill credentials",
            },
          ],
          opportunity: "Blockchain credential verification",
          threat: "Market saturation in popular certifications",
        },
      ],
    },
  ],
};
