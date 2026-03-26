import type { ValueChain } from '../../types/valueChain';

export const semiconductorsData: ValueChain = {
  code: "F2-10",
  name: "Semiconductors for PC",
  imCode: "F2-10",
  classificationCode: "F2-10",
  stages: [
    {
      id: "upstream",
      name: "Upstream Raw Materials & Components",
      subIndustries: [
        {
          name: "Silicon Wafers",
          cr4: 85.0,
          probit: "HH",
          cagr: 5.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Shin-Etsu Chemical",
              ticker: "4063.T",
              share: 32.0,
              strengths: [
                "Largest global capacity",
                "Advanced 300mm wafers",
              ],
            },
            {
              name: "SUMCO",
              ticker: "3436.T",
              share: 25.0,
              strengths: [
                "High purity silicon",
                "PC-grade specialization",
              ],
            },
          ],
          features: [
            {
              title: "High Purity Requirement",
              description: "PC semiconductors demand 99.9999% pure silicon for high-performance CPUs and GPUs",
            },
          ],
          opportunity: "Rising demand for AI-enhanced PC chips driving wafer capacity expansion",
          threat: "Geopolitical restrictions on high-purity silicon exports",
        },
        {
          name: "Photoresists & Chemicals",
          cr4: 70.0,
          probit: "HL",
          cagr: 3.8,
          classificationCodes: [],
          leaders: [
            {
              name: "JSR Corporation",
              ticker: "4185.T",
              share: 28.0,
              strengths: [
                "EUV photoresist leadership",
                "ArF immersion tech",
              ],
            },
            {
              name: "Tokyo Ohka Kogyo",
              ticker: "4186.T",
              share: 22.0,
              strengths: [
                "KrF and ArF resists",
                "Cleanroom chemicals",
              ],
            },
          ],
          features: [
            {
              title: "EUV Lithography Dependence",
              description: "Advanced PC chips require extreme ultraviolet photoresists for <7nm nodes",
            },
          ],
          opportunity: "EUV adoption in PC GPU manufacturing",
          threat: "Supply concentration in Japan vulnerable to natural disasters",
        },
        {
          name: "Semiconductor Gases",
          cr4: 65.0,
          probit: "LH",
          cagr: 6.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Linde plc",
              ticker: "LIN",
              share: 24.0,
              strengths: [
                "Global supply network",
                "Ultra-high purity gases",
              ],
            },
            {
              name: "Air Liquide",
              ticker: "AI.PA",
              share: 20.0,
              strengths: [
                "On-site generation",
                "Specialty gas mixtures",
              ],
            },
          ],
          features: [
            {
              title: "Process Gas Purity",
              description: "PPM-level purity required for wafer etching and deposition in PC chip fabs",
            },
          ],
          opportunity: "Expansion of domestic gas production for fab localization",
          threat: "Logistics disruptions for cryogenic gas delivery",
        },
        {
          name: "EDA Software",
          cr4: 90.0,
          probit: "HH",
          cagr: 7.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Synopsys",
              ticker: "SNPS",
              share: 35.0,
              strengths: [
                "AI-driven design tools",
                "Verification leadership",
              ],
            },
            {
              name: "Cadence Design Systems",
              ticker: "CDNS",
              share: 30.0,
              strengths: [
                "System-level simulation",
                "Custom IC tools",
              ],
            },
          ],
          features: [
            {
              title: "Complex PC Chip Design",
              description: "Multi-billion transistor designs for CPUs/GPUs require advanced EDA suites",
            },
          ],
          opportunity: "AI/ML integration in EDA for faster PC chip design cycles",
          threat: "Subscription pricing pressure from fabless firms",
        },
      ],
    },
    {
      id: "processing",
      name: "Processing",
      subIndustries: [
        {
          name: "IP Core Development",
          cr4: 75.0,
          probit: "HH",
          cagr: 8.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Arm Holdings",
              ticker: "ARM",
              share: 40.0,
              strengths: [
                "Architecture licensing",
                "PC CPU IP dominance",
              ],
            },
            {
              name: "RISC-V International",
              ticker: "N/A",
              share: 15.0,
              strengths: [
                "Open standard",
                "Royalty-free licensing",
              ],
            },
          ],
          features: [
            {
              title: "Processor Architecture",
              description: "x86 and ARM IP cores form basis for PC CPU and SoC designs",
            },
          ],
          opportunity: "RISC-V adoption for power-efficient PC chips",
          threat: "ARM-x86 licensing disputes",
          niche: {
            name: "AMD",
            ticker: "AMD",
            share: 12.0,
            cagr: 9.5,
            margin: ">25%",
            strategy: "Zen architecture IP reuse",
            valuation: "P/E 55x",
          },
        },
        {
          name: "Chip Design Services",
          cr4: 60.0,
          probit: "LH",
          cagr: 10.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Synopsys",
              ticker: "SNPS",
              share: 25.0,
              strengths: [
                "Reference designs",
                "Foundry PDKs",
              ],
            },
            {
              name: "Mentor Graphics (Siemens)",
              ticker: "SIE.DE",
              share: 18.0,
              strengths: [
                "PCB integration",
                "Automotive crossover",
              ],
            },
          ],
          features: [
            {
              title: "Custom PC Accelerators",
              description: "AI/NPU design services for next-gen PC platforms",
            },
          ],
          opportunity: "GPU/AI accelerator design boom",
          threat: "Talent shortage in advanced node design",
        },
        {
          name: "Lithography Equipment",
          cr4: 95.0,
          probit: "HH",
          cagr: 6.8,
          classificationCodes: [],
          leaders: [
            {
              name: "ASML Holding",
              ticker: "ASML",
              share: 85.0,
              strengths: [
                "EUV monopoly",
                "High-NA EUV ramp",
              ],
            },
          ],
          features: [
            {
              title: "Advanced Lithography",
              description: "EUV essential for sub-3nm PC processors",
            },
          ],
          opportunity: "High-NA EUV for 2nm PC chips",
          threat: "Export controls limiting China sales",
        },
        {
          name: "Deposition & Etch Equipment",
          cr4: 70.0,
          probit: "HL",
          cagr: 4.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Applied Materials",
              ticker: "AMAT",
              share: 28.0,
              strengths: [
                "Atomic layer deposition",
                "Selectivity etch",
              ],
            },
            {
              name: "Lam Research",
              ticker: "LRCX",
              share: 25.0,
              strengths: [
                "Plasma etch leadership",
                "3D NAND crossover",
              ],
            },
          ],
          features: [
            {
              title: "3D Stacking Tools",
              description: "Equipment for HBM and 3D chiplet stacking in PC GPUs",
            },
          ],
          opportunity: "Chiplet integration equipment demand",
          threat: "Capex cycles tied to foundry spending",
        },
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      subIndustries: [
        {
          name: "Wafer Fabrication (CPUs)",
          cr4: 90.0,
          probit: "HH",
          cagr: 7.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Intel",
              ticker: "INTC",
              share: 75.0,
              strengths: [
                "x86 leadership",
                "18A process tech",
              ],
            },
            {
              name: "AMD (via TSMC)",
              ticker: "AMD",
              share: 15.0,
              strengths: [
                "Zen architecture",
                "Chiplet design",
              ],
            },
          ],
          features: [
            {
              title: "Leading Edge Nodes",
              description: "Intel 18A, TSMC 3nm critical for PC performance leadership",
            },
          ],
          opportunity: "AI PC processors requiring <2nm nodes",
          threat: "TSMC capacity allocation competition",
        },
        {
          name: "GPU Wafer Fabrication",
          cr4: 85.0,
          probit: "HH",
          cagr: 12.5,
          classificationCodes: [],
          leaders: [
            {
              name: "NVIDIA (via TSMC/Samsung)",
              ticker: "NVDA",
              share: 50.0,
              strengths: [
                "Hopper architecture",
                "AI GPU dominance",
              ],
            },
            {
              name: "AMD",
              ticker: "AMD",
              share: 20.0,
              strengths: [
                "RDNA architecture",
                "Integrated graphics",
              ],
            },
          ],
          features: [
            {
              title: "High-Bandwidth Memory Integration",
              description: "CoWoS packaging essential for PC gaming/AI GPUs",
            },
          ],
          opportunity: "Gaming + AI PC GPU convergence",
          threat: "HBM memory supply constraints",
        },
        {
          name: "Advanced Packaging",
          cr4: 80.0,
          probit: "LH",
          cagr: 15.8,
          classificationCodes: [],
          leaders: [
            {
              name: "TSMC",
              ticker: "TSM",
              share: 45.0,
              strengths: [
                "CoWoS/InFO packaging",
                "3D stacking",
              ],
            },
            {
              name: "Amkor Technology",
              ticker: "AMKR",
              share: 18.0,
              strengths: [
                "Fan-out wafer-level",
                "Cost-competitive",
              ],
            },
          ],
          features: [
            {
              title: "Chiplet Integration",
              description: "Multi-die systems for heterogeneous PC computing",
            },
          ],
          opportunity: "Chiplet packaging for cost-optimized PC SoCs",
          threat: "Thermal management challenges",
          niche: {
            name: "Intel",
            ticker: "INTC",
            share: 10.0,
            cagr: 18.2,
            margin: ">30%",
            strategy: "EMIB/Foveros leadership",
            valuation: "P/E 25x",
          },
        },
        {
          name: "Assembly Test Packaging",
          cr4: 60.0,
          probit: "LL",
          cagr: 4.2,
          classificationCodes: [],
          leaders: [
            {
              name: "ASE Technology",
              ticker: "ASX",
              share: 22.0,
              strengths: [
                "System-in-package",
                "Automotive qual",
              ],
            },
            {
              name: "JCET Group",
              ticker: "600584.SS",
              share: 18.0,
              strengths: [
                "Cost leadership",
                "China capacity",
              ],
            },
          ],
          features: [
            {
              title: "Final Test Yield",
              description: "Multi-socket PC chips require extensive burn-in testing",
            },
          ],
          opportunity: "Domestic ATP capacity expansion",
          threat: "Labor cost inflation in SE Asia",
        },
      ],
    },
    {
      id: "distribution",
      name: "Distribution",
      subIndustries: [
        {
          name: "Semiconductor Distributors",
          cr4: 55.0,
          probit: "HL",
          cagr: 3.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Arrow Electronics",
              ticker: "ARW",
              share: 20.0,
              strengths: [
                "Global logistics",
                "Value-add services",
              ],
            },
            {
              name: "Avnet",
              ticker: "AVT",
              share: 18.0,
              strengths: [
                "Design chain",
                "FPGA expertise",
              ],
            },
          ],
          features: [
            {
              title: "JIT Delivery",
              description: "PC OEMs require 2-4 week lead times for component kits",
            },
          ],
          opportunity: "Excess inventory liquidation creating spot buys",
          threat: "Direct OEM-fabless relationships disintermediating",
        },
        {
          name: "Logistics & Freight",
          cr4: 40.0,
          probit: "LL",
          cagr: 2.8,
          classificationCodes: [],
          leaders: [
            {
              name: "DHL Supply Chain",
              ticker: "DHLGY",
              share: 15.0,
              strengths: [
                "ESD-safe transport",
                "Asia-Europe lanes",
              ],
            },
          ],
          features: [
            {
              title: "Temperature-Controlled Shipping",
              description: "Wafers and packaged chips require humidity/temp control",
            },
          ],
          opportunity: "Air freight recovery post-capacity crunch",
          threat: "Ocean freight volatility",
        },
        {
          name: "Inventory Management",
          cr4: 65.0,
          probit: "LH",
          cagr: 5.1,
          classificationCodes: [],
          leaders: [
            {
              name: "Future Electronics",
              ticker: "Private",
              share: 25.0,
              strengths: [
                "Component forecasting",
                "Excess mgmt",
              ],
            },
          ],
          features: [
            {
              title: "PC Platform Kits",
              description: "Pre-qualified CPU/GPU/memory combinations for OEMs",
            },
          ],
          opportunity: "AI PC bill-of-materials optimization",
          threat: "Lead time volatility",
        },
      ],
    },
    {
      id: "sales",
      name: "Sales",
      subIndustries: [
        {
          name: "Fabless Semiconductor Sales",
          cr4: 85.0,
          probit: "HH",
          cagr: 11.2,
          classificationCodes: [],
          leaders: [
            {
              name: "NVIDIA",
              ticker: "NVDA",
              share: 35.0,
              strengths: [
                "GPU franchise",
                "CUDA ecosystem",
              ],
            },
            {
              name: "AMD",
              ticker: "AMD",
              share: 25.0,
              strengths: [
                "CPU+GPU combo",
                "Ryzen platform",
              ],
            },
          ],
          features: [
            {
              title: "Reference Designs",
              description: "Complete motherboard validation reduces OEM design time",
            },
          ],
          opportunity: "AI PC processor ramp",
          threat: "Pricing pressure from hyperscalers",
        },
        {
          name: "IDM Direct Sales",
          cr4: 70.0,
          probit: "HL",
          cagr: 4.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Intel",
              ticker: "INTC",
              share: 60.0,
              strengths: [
                "OEM relationships",
                "Platform enablement",
              ],
            },
          ],
          features: [
            {
              title: "Long-term Supply Agreements",
              description: "Multi-year volume commitments for PC platforms",
            },
          ],
          opportunity: "Client CPU recovery",
          threat: "ARM PC architecture threat",
        },
        {
          name: "OEM Account Management",
          cr4: 75.0,
          probit: "LH",
          cagr: 6.3,
          classificationCodes: [],
          leaders: [
            {
              name: "Qualcomm",
              ticker: "QCOM",
              share: 20.0,
              strengths: [
                "Snapdragon X Elite",
                "ARM PC entry",
              ],
            },
          ],
          features: [
            {
              title: "Custom SoC Programs",
              description: "Co-development with Dell/HP/Lenovo for branded PCs",
            },
          ],
          opportunity: "Windows on ARM expansion",
          threat: "x86 performance gap",
          niche: {
            name: "MediaTek",
            ticker: "2454.TW",
            share: 8.0,
            cagr: 14.2,
            margin: ">18%",
            strategy: "Entry-level ARM PC",
            valuation: "P/E 22x",
          },
        },
        {
          name: "Channel Sales",
          cr4: 50.0,
          probit: "LL",
          cagr: 2.9,
          classificationCodes: [],
          leaders: [
            {
              name: "Broadcom",
              ticker: "AVGO",
              share: 15.0,
              strengths: [
                "Chipset sales",
                "Wireless connectivity",
              ],
            },
          ],
          features: [
            {
              title: "Volume Licensing",
              description: "Firmware/BIOS licensing through system integrators",
            },
          ],
          opportunity: "Commercial PC refresh cycles",
          threat: "DIY builder market erosion",
        },
      ],
    },
    {
      id: "customer",
      name: "Customer",
      subIndustries: [
        {
          name: "PC OEMs",
          cr4: 70.0,
          probit: "LH",
          cagr: 3.2,
          classificationCodes: [],
          leaders: [
            {
              name: "Lenovo",
              ticker: "0992.HK",
              share: 24.0,
              strengths: [
                "Global enterprise",
                "Commercial PC",
              ],
            },
            {
              name: "HP Inc.",
              ticker: "HPQ",
              share: 20.0,
              strengths: [
                "Workstation leadership",
                "Printing synergy",
              ],
            },
          ],
          features: [
            {
              title: "Platform Qualification",
              description: "18-month CPU/GPU validation cycles",
            },
          ],
          opportunity: "AI PC premium tier expansion",
          threat: "Inventory destocking",
        },
        {
          name: "Consumer PC Makers",
          cr4: 65.0,
          probit: "LL",
          cagr: 1.8,
          classificationCodes: [],
          leaders: [
            {
              name: "Dell Technologies",
              ticker: "DELL",
              share: 22.0,
              strengths: [
                "Gaming PCs",
                "Precision workstations",
              ],
            },
            {
              name: "ASUS",
              ticker: "2357.TW",
              share: 18.0,
              strengths: [
                "Gaming brand ROG",
                "Motherboard integration",
              ],
            },
          ],
          features: [
            {
              title: "Gaming PC Segment",
              description: "High-end discrete GPU/CPU combinations",
            },
          ],
          opportunity: "Esports and content creation growth",
          threat: "ARM PC cannibalization",
        },
        {
          name: "Commercial PC Deployers",
          cr4: 80.0,
          probit: "HL",
          cagr: 4.5,
          classificationCodes: [],
          leaders: [
            {
              name: "Apple",
              ticker: "AAPL",
              share: 15.0,
              strengths: [
                "M-series integration",
                "Premium pricing",
              ],
            },
          ],
          features: [
            {
              title: "Enterprise Refresh",
              description: "Windows 11 upgrade cycles driving volume",
            },
          ],
          opportunity: "Copilot+ PC enterprise adoption",
          threat: "Remote work decline",
        },
        {
          name: "System Integrators",
          cr4: 55.0,
          probit: "LH",
          cagr: 5.7,
          classificationCodes: [],
          leaders: [
            {
              name: "Acer",
              ticker: "2353.TW",
              share: 12.0,
              strengths: [
                "Chromebook dominance",
                "Education market",
              ],
            },
          ],
          features: [
            {
              title: "Custom Workstations",
              description: "GPU-intensive CAD/CAE workstations",
            },
          ],
          opportunity: "Edge AI workstation growth",
          threat: "Cloud computing substitution",
        },
      ],
    },
  ],
};
