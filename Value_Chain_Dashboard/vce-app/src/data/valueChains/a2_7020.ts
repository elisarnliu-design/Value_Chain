import type { ValueChain } from '../../types/valueChain';

export const a2_7020Data: ValueChain = {
  code: "A2-7020",
  name: "Sporting Goods Stores",
  imCode: "A2-7020",
  classificationCode: "A2-7020",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Synthetic Textiles & Fabrics",
          cr4: 65.0,
          probit: "HL",
          operatingMargin: 12.4,
          cagr: 3.2,
          cagrForward: 3.8,
          classificationCodes: [],
          leaders: [
            {
              name: "DuPont de Nemours",
              ticker: "DD",
              share: 22.0,
              strengths: [
                "Advanced fiber tech",
                "Sustainability focus",
              ],
            },
            {
              name: "Indorama Ventures",
              ticker: "IVL.BK",
              share: 18.0,
              strengths: [
                "Low-cost production",
                "Global scale",
              ],
            },
          ],
          features: [
            {
              title: "High Volatility",
              description: "Commodity pricing tied to oil and petrochemicals creates margin swings.",
            },
            {
              title: "Sustainability Shift",
              description: "Demand for recycled polyester pressures virgin material suppliers.",
            },
          ],
          opportunity: "Bio-based alternatives to capture premium pricing in eco-sportswear.",
          threat: "Geopolitical tariffs on Asian imports erode cost advantages.",
        },
        {
          name: "Rubber & Foam Materials",
          cr4: 72.0,
          probit: "LH",
          operatingMargin: 8.1,
          cagr: 5.4,
          cagrForward: 6.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Bridgestone",
              ticker: "BRDCY",
              share: 25.0,
              strengths: [
                "Tire tech crossover",
                "Performance compounding",
              ],
            },
          ],
          features: [
            {
              title: "Performance Specs",
              description: "Custom formulations for footwear soles and protective gear.",
            },
          ],
          opportunity: "Lightweight EVA foams for direct-to-consumer fitness equipment.",
          threat: "Raw material shortages from supply chain shocks.",
        },
        {
          name: "Sporting Metals & Alloys",
          cr4: 58.0,
          probit: "LL",
          operatingMargin: 6.7,
          cagr: 2.1,
          cagrForward: 2.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Alcoa",
              ticker: "AA",
              share: 19.0,
              strengths: [
                "Lightweight aluminum",
                "Recycling capacity",
              ],
            },
          ],
          features: [
            {
              title: "Commodity Exposure",
              description: "Aluminum and titanium price fluctuations impact bike frame costs.",
            },
          ],
          opportunity: "Carbon fiber composites for high-end equipment.",
          threat: "Trade duties on aluminum imports.",
        },
        {
          name: "Plastics & Polymers",
          cr4: 68.0,
          probit: "HL",
          operatingMargin: 11.2,
          cagr: 3.9,
          cagrForward: 4.3,
          classificationCodes: [],
          leaders: [
            {
              name: "LyondellBasell",
              ticker: "LYB",
              share: 24.0,
              strengths: [
                "High-volume polyolefins",
                "Custom molding",
              ],
            },
          ],
          features: [
            {
              title: "Form Factor Diversity",
              description: "Handles small accessories to large fitness machines.",
            },
          ],
          opportunity: "Recycled plastics for sustainable product lines.",
          threat: "Regulatory bans on single-use plastics spillover.",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing & Component Fabrication",
      subIndustries: [
        {
          name: "Apparel & Textile Processing",
          cr4: 45.0,
          probit: "LH",
          operatingMargin: 7.8,
          cagr: 6.1,
          cagrForward: 6.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Delta Galil",
              ticker: "DELG.TA",
              share: 16.0,
              strengths: [
                "Vertical integration",
                "Fast fashion cycles",
              ],
            },
          ],
          features: [
            {
              title: "Seasonal Production",
              description: "Rapid style changes create capacity utilization challenges.",
            },
          ],
          opportunity: "On-demand manufacturing for custom team uniforms.",
          threat: "Labor cost inflation in Vietnam/Bangladesh.",
        },
        {
          name: "Footwear Assembly",
          cr4: 82.0,
          probit: "HL",
          operatingMargin: 13.5,
          cagr: 4.2,
          cagrForward: 4.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Pou Chen Group",
              ticker: "9904.TW",
              share: 35.0,
              strengths: [
                "Nike/Adidas scale",
                "Automation investments",
              ],
            },
          ],
          features: [
            {
              title: "Complex BOM",
              description: "Multi-material construction increases scrap rates.",
            },
          ],
          opportunity: "3D-printed midsoles for performance footwear.",
          threat: "Tariff exposure on Vietnam production.",
        },
        {
          name: "Equipment Component Fabrication",
          cr4: 52.0,
          probit: "LL",
          operatingMargin: 5.9,
          cagr: 2.8,
          cagrForward: 3.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Fox Factory",
              ticker: "FOXF",
              share: 14.0,
              strengths: [
                "Bike suspension",
                "MTB dominance",
              ],
            },
          ],
          features: [
            {
              title: "Precision Engineering",
              description: "Tight tolerances for bike parts and fitness machines.",
            },
          ],
          opportunity: "Modular components for customizable gym equipment.",
          threat: "Tech obsolescence in fitness trackers.",
          niche: {
            name: "SRAM",
            ticker: "Private",
            share: 12.0,
            cagr: 7.2,
            margin: ">20%",
            strategy: "Premium MTB components",
            valuation: "EBITDA 15x",
          },
        },
        {
          name: "Inflatable & Composite Processing",
          cr4: 61.0,
          probit: "LH",
          operatingMargin: 9.3,
          cagr: 5.7,
          cagrForward: 6.4,
          classificationCodes: [],
          leaders: [
            {
              name: "Intex",
              ticker: "Private",
              share: 28.0,
              strengths: [
                "Pool toy scale",
                "Low-cost molding",
              ],
            },
          ],
          features: [
            {
              title: "High Rejection Rates",
              description: "Quality control critical for safety equipment.",
            },
          ],
          opportunity: "Carbon fiber paddleboards for premium water sports.",
          threat: "Chemical regulations on PVC.",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing & Assembly",
      subIndustries: [
        {
          name: "Sporting Apparel Manufacturing",
          cr4: 38.0,
          probit: "LH",
          operatingMargin: 6.4,
          cagr: 7.3,
          cagrForward: 7.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Hanesbrands",
              ticker: "HBI",
              share: 12.0,
              strengths: [
                "Underwear dominance",
                "US manufacturing",
              ],
            },
          ],
          features: [
            {
              title: "Fashion Risk",
              description: "Rapid trend cycles create markdown exposure.",
            },
          ],
          opportunity: "Connected apparel with embedded sensors.",
          threat: "Fast fashion competition from Shein/Temu.",
        },
        {
          name: "Fitness Equipment Manufacturing",
          cr4: 67.0,
          probit: "HL",
          operatingMargin: 14.2,
          cagr: 4.5,
          cagrForward: 5.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Peloton Interactive",
              ticker: "PTON",
              share: 22.0,
              strengths: [
                "Connected fitness",
                "Brand premium",
              ],
            },
          ],
          features: [
            {
              title: "Logistical Form Factor",
              description: "Large items create high freight costs (PM02).",
            },
          ],
          opportunity: "Home gym bundles with subscription services.",
          threat: "Post-COVID demand normalization.",
        },
        {
          name: "Bicycle & Outdoor Gear Manufacturing",
          cr4: 55.0,
          probit: "HH",
          operatingMargin: 16.8,
          cagr: 8.2,
          cagrForward: 8.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Giant Manufacturing",
              ticker: "9921.TW",
              share: 19.0,
              strengths: [
                "eBike leadership",
                "Vertical integration",
              ],
            },
          ],
          features: [
            {
              title: "SKU Proliferation",
              description: "Model year changes create obsolescence risk (FR01).",
            },
          ],
          opportunity: "eBike conversion kits for urban mobility.",
          threat: "Tariff increases on China/Vietnam production.",
        },
        {
          name: "Team Sports Equipment",
          cr4: 71.0,
          probit: "LL",
          operatingMargin: 4.9,
          cagr: 1.8,
          cagrForward: 2.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Franklin Sports",
              ticker: "Private",
              share: 26.0,
              strengths: [
                "Backyard games",
                "Mass market",
              ],
            },
          ],
          features: [
            {
              title: "Seasonal Demand",
              description: "League schedules drive lumpy orders.",
            },
          ],
          opportunity: "Youth sports recovery post-COVID.",
          threat: "Participation decline in contact sports.",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution & Logistics",
      subIndustries: [
        {
          name: "Sporting Goods Wholesaling",
          cr4: 62.0,
          probit: "LL",
          operatingMargin: 5.2,
          cagr: 2.9,
          cagrForward: 3.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Acamar Partners (DICK'S)",
              ticker: "Private",
              share: 24.0,
              strengths: [
                "Vertical integration",
                "Retail-wholesale synergy",
              ],
            },
          ],
          features: [
            {
              title: "Inventory Risk",
              description: "Long-tail SKUs create obsolescence exposure (LI02).",
            },
          ],
          opportunity: "Automated micro-fulfillment centers.",
          threat: "Carrier rate hikes on oversized items.",
        },
        {
          name: "Cold Chain Logistics (Water Sports)",
          cr4: 48.0,
          probit: "LH",
          operatingMargin: 8.6,
          cagr: 5.8,
          cagrForward: 6.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Lineage Logistics",
              ticker: "Private",
              share: 18.0,
              strengths: [
                "Temperature control",
                "Global network",
              ],
            },
          ],
          features: [
            {
              title: "Fragile Goods",
              description: "Boards and boats require specialized handling.",
            },
          ],
          opportunity: "Last-mile for seasonal watersports gear.",
          threat: "Fuel surcharges volatility.",
        },
        {
          name: "Freight Forwarding (Oversized)",
          cr4: 59.0,
          probit: "HL",
          operatingMargin: 11.7,
          cagr: 4.1,
          cagrForward: 4.6,
          classificationCodes: [],
          leaders: [
            {
              name: "Expeditors Intl",
              ticker: "EXPD",
              share: 21.0,
              strengths: [
                "Air/sea expertise",
                "Customs brokerage",
              ],
            },
          ],
          features: [
            {
              title: "Logistical Friction",
              description: "Diverse product sizes create handling costs (LI01).",
            },
          ],
          opportunity: "LTL consolidation for fitness equipment.",
          threat: "Geopolitical port disruptions.",
        },
        {
          name: "Reverse Logistics",
          cr4: 44.0,
          probit: "LL",
          operatingMargin: 3.8,
          cagr: 3.4,
          cagrForward: 3.9,
          classificationCodes: [],
          leaders: [
            {
              name: "UPS Supply Chain Solutions",
              ticker: "UPS",
              share: 17.0,
              strengths: [
                "Returns processing",
                "Resale channels",
              ],
            },
          ],
          features: [
            {
              title: "High Returns",
              description: "Sizing/fit issues create substantial reverse flow (LI08).",
            },
          ],
          opportunity: "AI-driven returns prediction.",
          threat: "Legislative right-to-repair mandates.",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales & Retail Operations",
      subIndustries: [
        {
          name: "Specialty Sporting Goods Stores",
          cr4: 42.0,
          probit: "LL",
          operatingMargin: 4.6,
          cagr: 1.6,
          cagrForward: 2.1,
          classificationCodes: [],
          leaders: [
            {
              name: "DICK'S Sporting Goods",
              ticker: "DKS",
              share: 18.0,
              strengths: [
                "Market leadership",
                "Private label",
              ],
            },
            {
              name: "Academy Sports",
              ticker: "ASO",
              share: 12.0,
              strengths: [
                "Southern dominance",
                "Value pricing",
              ],
            },
          ],
          features: [
            {
              title: "Margin Pressure",
              description: "High inventory carrying costs erode profitability.",
            },
            {
              title: "Long-Tail SKUs",
              description: "Excessive floor space for low-velocity items.",
            },
          ],
          opportunity: "Experiential retail with demo zones and fittings.",
          threat: "Amazon/ Walmart eCommerce share gains.",
        },
        {
          name: "Big Box Sporting Retail",
          cr4: 76.0,
          probit: "LH",
          operatingMargin: 7.2,
          cagr: 5.3,
          cagrForward: 5.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Bass Pro Shops",
              ticker: "Private",
              share: 29.0,
              strengths: [
                "Outdoor lifestyle",
                "Destination retail",
              ],
            },
          ],
          features: [
            {
              title: "High Fixed Costs",
              description: "Large format stores create occupancy leverage risk.",
            },
          ],
          opportunity: "Omnichannel BOPIS fulfillment.",
          threat: "Consumer spending pullback on discretionary.",
        },
        {
          name: "Online Sporting Goods Retail",
          cr4: 68.0,
          probit: "HH",
          operatingMargin: 12.8,
          cagr: 9.4,
          cagrForward: 10.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Amazon (Sporting Category)",
              ticker: "AMZN",
              share: 32.0,
              strengths: [
                "Logistics moat",
                "Prime ecosystem",
              ],
            },
          ],
          features: [
            {
              title: "Returns Friction",
              description: "High return rates on apparel/footwear.",
            },
          ],
          opportunity: "Social commerce via TikTok Shop integrations.",
          threat: "Google Shopping ad costs escalation.",
          niche: {
            name: "REI Co-op",
            ticker: "Private",
            share: 8.0,
            cagr: 6.5,
            margin: "8-10%",
            strategy: "Membership loyalty",
            valuation: "Not applicable",
          },
        },
      ],
    },
    {
      id: "customer",
      name: "Customer & Aftermarket",
      subIndustries: [
        {
          name: "Fitness Subscription Services",
          cr4: 54.0,
          probit: "HH",
          operatingMargin: 22.3,
          cagr: 12.7,
          cagrForward: 13.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Peloton",
              ticker: "PTON",
              share: 21.0,
              strengths: [
                "Hardware lock-in",
                "Content library",
              ],
            },
            {
              name: "iFit (NordicTrack)",
              ticker: "Private",
              share: 16.0,
              strengths: [
                "Connected equipment",
                "Scenic workouts",
              ],
            },
          ],
          features: [
            {
              title: "High LTV",
              description: "Recurring revenue from hardware purchases.",
            },
          ],
          opportunity: "Corporate wellness program partnerships.",
          threat: "Content churn and competitive studios.",
        },
        {
          name: "Sports Maintenance & Repair",
          cr4: 39.0,
          probit: "HL",
          operatingMargin: 15.6,
          cagr: 3.7,
          cagrForward: 4.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Bike Shops (Fragmented)",
              ticker: "N/A",
              share: 14.0,
              strengths: [
                "Local expertise",
                "Community trust",
              ],
            },
          ],
          features: [
            {
              title: "Labor Intensive",
              description: "Skilled technician shortages limit capacity.",
            },
          ],
          opportunity: "Subscription maintenance packages.",
          threat: "DIY repair content proliferation.",
        },
        {
          name: "Team & Club Purchasing",
          cr4: 47.0,
          probit: "LH",
          operatingMargin: 9.1,
          cagr: 4.8,
          cagrForward: 5.4,
          classificationCodes: [],
          leaders: [
            {
              name: "DICK'S Team Sports",
              ticker: "DKS",
              share: 19.0,
              strengths: [
                "Volume discounts",
                "Customization",
              ],
            },
          ],
          features: [
            {
              title: "Lumpy Demand",
              description: "Seasonal bulk orders create cash flow swings.",
            },
          ],
          opportunity: "Youth league sponsorship bundles.",
          threat: "Budget constraints at local organizations.",
        },
        {
          name: "Rental & Resale Platforms",
          cr4: 36.0,
          probit: "LH",
          operatingMargin: 8.4,
          cagr: 11.2,
          cagrForward: 12.1,
          classificationCodes: [],
          leaders: [
            {
              name: "REI Used Gear",
              ticker: "Private",
              share: 13.0,
              strengths: [
                "Trade-in program",
                "Quality assurance",
              ],
            },
          ],
          features: [
            {
              title: "Circular Economy",
              description: "Growing consumer preference for used gear.",
            },
          ],
          opportunity: "Subscription gear closets for multi-sport families.",
          threat: "Brand protection concerns.",
        },
      ],
    },
  ],
};
