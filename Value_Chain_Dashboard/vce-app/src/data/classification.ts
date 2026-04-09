import type { ClassificationSector, ColumnGroup } from "../types/valueChain";

/**
 * Full 3-level classification tree extracted from classification text_20260202.docx.
 *
 * Grid layout (3 rows × 4 columns):
 *   Row 1 (group A): A1 · A2 · A3 · A4
 *   Row 2 (group C): C1 · C2 · C3 · C4
 *   Row 3 (group F): F1 · F2 · F3 · F4
 */
export const classificationTree: ClassificationSector[] = [

  // ══════════════════════════════════════════════════════════════════════════
  //  ROW 1 — A  (Advanced)
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "A1", group: "A", row: 1, name: "Body",
    industries: [
      {
        code: "A1-10", name: "Drugs", parentSector: "A1",
        subIndustries: [
          { code: "A1-1010", name: "Big Pharma", parentIndustry: "A1-10" },
          { code: "A1-1020", name: "Other Drug Manufactures", parentIndustry: "A1-10" },
          { code: "A1-1030", name: "Biotech Companies", parentIndustry: "A1-10" },
          { code: "A1-1040", name: "Generic Drugs", parentIndustry: "A1-10" },
          { code: "A1-1050", name: "Pharma & Biotech Materials", parentIndustry: "A1-10" },
        ],
      },
      { code: "A1-20", name: "Medical Equipment & Devices", parentSector: "A1" },
      {
        code: "A1-30", name: "Drug Distribution & Retail", parentSector: "A1",
        subIndustries: [
          { code: "A1-3010", name: "Drug Wholesale", parentIndustry: "A1-30" },
          { code: "A1-3020", name: "Drug Stores", parentIndustry: "A1-30" },
        ],
      },
      {
        code: "A1-40", name: "Healthcare Services", parentSector: "A1",
        subIndustries: [
          { code: "A1-4010", name: "Hospitals & Care", parentIndustry: "A1-40" },
          { code: "A1-4020", name: "Healthcare Insurance", parentIndustry: "A1-40" },
          { code: "A1-4030", name: "Healthcare Management Technology & Information", parentIndustry: "A1-40" },
          { code: "A1-4031", name: "Diagnostic & Laboratory Services", parentIndustry: "A1-40" },
        ],
      },
      { code: "A1-50", name: "Personal Care Products", parentSector: "A1" },
    ],
  },

  {
    id: "A2", group: "A", row: 2, name: "Mind (Soul)",
    industries: [
      {
        code: "A2-10", name: "Print Media & Publishing", parentSector: "A2",
        subIndustries: [
          { code: "A2-1010", name: "Newspapers", parentIndustry: "A2-10" },
          { code: "A2-1020", name: "Periodicals", parentIndustry: "A2-10" },
          { code: "A2-1030", name: "Books", parentIndustry: "A2-10" },
        ],
      },
      {
        code: "A2-20", name: "Digital & E-Commerce", parentSector: "A2",
        subIndustries: [
          { code: "A2-2010", name: "Internet Contents, Information & Delivery Services", parentIndustry: "A2-20" },
          { code: "A2-2020", name: "E-Commerce & Television Shopping", parentIndustry: "A2-20" },
        ],
      },
      {
        code: "A2-30", name: "Broadcast Media", parentSector: "A2",
        subIndustries: [
          { code: "A2-3010", name: "Radio", parentIndustry: "A2-30" },
          { code: "A2-3020", name: "Television", parentIndustry: "A2-30" },
          { code: "A2-3030", name: "CATV Systems", parentIndustry: "A2-30" },
        ],
      },
      { code: "A2-40", name: "Advertising Agencies", parentSector: "A2" },
      {
        code: "A2-50", name: "Leisure & Entertainment", parentSector: "A2",
        subIndustries: [
          { code: "A2-5010", name: "Cruises & Fun", parentIndustry: "A2-50" },
          { code: "A2-5020", name: "Movie Production & Cinemas", parentIndustry: "A2-50" },
          { code: "A2-5030", name: "Music Publishing", parentIndustry: "A2-50" },
          { code: "A2-5040", name: "Music CD & Video Stores", parentIndustry: "A2-50" },
          { code: "A2-5050", name: "Theme Parks / Live Events", parentIndustry: "A2-50" },
        ],
      },
      {
        code: "A2-60", name: "Toys & Games", parentSector: "A2",
        subIndustries: [
          { code: "A2-6010", name: "Toys & Games", parentIndustry: "A2-60" },
          { code: "A2-6020", name: "Toys & Hobby Stores", parentIndustry: "A2-60" },
        ],
      },
      {
        code: "A2-70", name: "Sporting Goods & Activities", parentSector: "A2",
        subIndustries: [
          { code: "A2-7010", name: "Sporting Goods", parentIndustry: "A2-70" },
          { code: "A2-7020", name: "Sporting Goods Stores", parentIndustry: "A2-70" },
          { code: "A2-7030", name: "Sporting Activities", parentIndustry: "A2-70" },
          { code: "A2-7040", name: "Gaming Activities", parentIndustry: "A2-70" },
          { code: "A2-7050", name: "Casinos", parentIndustry: "A2-70" },
        ],
      },
      { code: "A2-80", name: "Education & Training Services", parentSector: "A2" },
      { code: "A2-90", name: "Interactive Media & Online Gaming", parentSector: "A2" },
    ],
  },

  {
    id: "A3", group: "A", row: 3, name: "Money",
    industries: [
      {
        code: "A3-10", name: "Banking", parentSector: "A3",
        subIndustries: [
          { code: "A3-1010", name: "Money Center Banks", parentIndustry: "A3-10" },
          { code: "A3-1020", name: "Regional Banks", parentIndustry: "A3-10" },
          { code: "A3-1030", name: "Lending Institutions — Savings & Loans", parentIndustry: "A3-10" },
          { code: "A3-1040", name: "Diversified Banks", parentIndustry: "A3-10" },
          { code: "A3-1050", name: "Commercial & Residential Mortgage Finance", parentIndustry: "A3-10" },
        ],
      },
      {
        code: "A3-20", name: "Credit Card & Credit Services", parentSector: "A3",
        subIndustries: [
          { code: "A3-2010", name: "Transaction & Payment Processing Services", parentIndustry: "A3-20" },
        ],
      },
      {
        code: "A3-30", name: "Investment Services", parentSector: "A3",
        subIndustries: [
          { code: "A3-3010", name: "Stockbrokers & Investment Banks", parentIndustry: "A3-30" },
          { code: "A3-3020", name: "Investment Managers", parentIndustry: "A3-30" },
          { code: "A3-3030", name: "Investment Trusts", parentIndustry: "A3-30" },
          { code: "A3-3040", name: "Exchanges", parentIndustry: "A3-30" },
          { code: "A3-3050", name: "Asset Management & Custody Banks", parentIndustry: "A3-30" },
          { code: "A3-3060", name: "Diversified Capital Markets", parentIndustry: "A3-30" },
        ],
      },
      {
        code: "A3-40", name: "Insurance", parentSector: "A3",
        subIndustries: [
          { code: "A3-4010", name: "Life Insurance", parentIndustry: "A3-40" },
          { code: "A3-4020", name: "Property & Casualty Insurance", parentIndustry: "A3-40" },
          { code: "A3-4030", name: "Accident & Health Insurance", parentIndustry: "A3-40" },
          { code: "A3-4040", name: "Insurance Brokers", parentIndustry: "A3-40" },
          { code: "A3-4050", name: "Multi-Line Insurance", parentIndustry: "A3-40" },
          { code: "A3-4060", name: "Reinsurance", parentIndustry: "A3-40" },
        ],
      },
      {
        code: "A3-50", name: "Financial Technology & Services", parentSector: "A3",
        subIndustries: [
          { code: "A3-5010", name: "Banking Technology", parentIndustry: "A3-50" },
          { code: "A3-5020", name: "Accounting Firms", parentIndustry: "A3-50" },
          { code: "A3-5030", name: "Other Services", parentIndustry: "A3-50" },
        ],
      },
      { code: "A3-60", name: "Diversified Financial Services", parentSector: "A3" },
    ],
  },

  {
    id: "A4", group: "A", row: 4, name: "Connectivity",
    industries: [
      {
        code: "A4-10", name: "Telecommunication Services", parentSector: "A4",
        subIndustries: [
          { code: "A4-1010", name: "Telco — Fixed Line", parentIndustry: "A4-10" },
          { code: "A4-1020", name: "Telco — Wireless", parentIndustry: "A4-10" },
          { code: "A4-1030", name: "Satellite Telecommunications", parentIndustry: "A4-10" },
          { code: "A4-1040", name: "Alternative Carriers", parentIndustry: "A4-10" },
        ],
      },
      {
        code: "A4-20", name: "Communication Equipment", parentSector: "A4",
        subIndustries: [
          { code: "A4-2010", name: "Communication Systems, Technology & Equipment", parentIndustry: "A4-20" },
          { code: "A4-2020", name: "Networking & Communication Devices", parentIndustry: "A4-20" },
          { code: "A4-2030", name: "Audio / Video Equipment", parentIndustry: "A4-20" },
          { code: "A4-2040", name: "Data Networking Equipment", parentIndustry: "A4-20" },
        ],
      },
      {
        code: "A4-30", name: "Semiconductors", parentSector: "A4",
        subIndustries: [
          { code: "A4-3010", name: "Communication Semiconductors", parentIndustry: "A4-30" },
          { code: "A4-3020", name: "RF Semiconductors", parentIndustry: "A4-30" },
          { code: "A4-3030", name: "Optical Communications", parentIndustry: "A4-30" },
          { code: "A4-3040", name: "Mobile Device Memory Semiconductors", parentIndustry: "A4-30" },
          { code: "A4-3050", name: "Power Management Semiconductors", parentIndustry: "A4-30" },
          { code: "A4-3060", name: "ASICs (Application-Specific Integrated Circuits)", parentIndustry: "A4-30" },
        ],
      },
      {
        code: "A4-40", name: "Mobile Devices", parentSector: "A4",
        subIndustries: [
          { code: "A4-4010", name: "Wireless Handsets", parentIndustry: "A4-40" },
          { code: "A4-4020", name: "Mobile PDAs", parentIndustry: "A4-40" },
          { code: "A4-4030", name: "Wearable Devices", parentIndustry: "A4-40" },
        ],
      },
      {
        code: "A4-50", name: "Internet & Online Services", parentSector: "A4",
        subIndustries: [
          { code: "A4-5010", name: "Internet Infrastructure", parentIndustry: "A4-50" },
          { code: "A4-5020", name: "Internet & Network Security", parentIndustry: "A4-50" },
          { code: "A4-5030", name: "Internet Information Providers", parentIndustry: "A4-50" },
          { code: "A4-5040", name: "Online Shopping", parentIndustry: "A4-50" },
          { code: "A4-5050", name: "Cloud Computing Services", parentIndustry: "A4-50" },
          { code: "A4-5060", name: "Social Media Platforms", parentIndustry: "A4-50" },
          { code: "A4-5070", name: "Data Centers", parentIndustry: "A4-50" },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  ROW 2 — C  (Core)
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "C1", group: "C", row: 1, name: "Wear",
    industries: [
      {
        code: "C1-10", name: "Apparel & Accessories", parentSector: "C1",
        subIndustries: [
          { code: "C1-1010", name: "Apparel", parentIndustry: "C1-10" },
          { code: "C1-1020", name: "Footwear", parentIndustry: "C1-10" },
          { code: "C1-1030", name: "Accessories", parentIndustry: "C1-10" },
          { code: "C1-1040", name: "Leather Goods", parentIndustry: "C1-10" },
        ],
      },
      {
        code: "C1-20", name: "Retail", parentSector: "C1",
        subIndustries: [
          { code: "C1-2010", name: "Apparel & Department Stores", parentIndustry: "C1-20" },
          { code: "C1-2020", name: "Discount & Variety Stores", parentIndustry: "C1-20" },
        ],
      },
      { code: "C1-30", name: "Textiles", parentSector: "C1" },
      {
        code: "C1-40", name: "Luxury Goods", parentSector: "C1",
        subIndustries: [
          { code: "C1-4010", name: "Watches", parentIndustry: "C1-40" },
          { code: "C1-4020", name: "Jewelry Stores", parentIndustry: "C1-40" },
          { code: "C1-4030", name: "Handbags / Luggage", parentIndustry: "C1-40" },
        ],
      },
    ],
  },

  {
    id: "C2", group: "C", row: 2, name: "Eat",
    industries: [
      {
        code: "C2-10", name: "Agriculture & Farm Equipment", parentSector: "C2",
        subIndustries: [
          { code: "C2-1010", name: "Farm & Construction Machinery", parentIndustry: "C2-10" },
          { code: "C2-1020", name: "Agricultural Chemicals", parentIndustry: "C2-10" },
        ],
      },
      {
        code: "C2-20", name: "Animal-Based Food Products", parentSector: "C2",
        subIndustries: [
          { code: "C2-2010", name: "Dairy Products", parentIndustry: "C2-20" },
          { code: "C2-2020", name: "Farm Products", parentIndustry: "C2-20" },
          { code: "C2-2030", name: "Meat Products", parentIndustry: "C2-20" },
          { code: "C2-2040", name: "Seafood & Aquaculture", parentIndustry: "C2-20" },
        ],
      },
      { code: "C2-30", name: "Processed Foods, Sauces & Condiments", parentSector: "C2" },
      {
        code: "C2-40", name: "Beverages", parentSector: "C2",
        subIndustries: [
          { code: "C2-4010", name: "Beverages — Soft Drinks", parentIndustry: "C2-40" },
          { code: "C2-4020", name: "Beverages — Beer Brewers", parentIndustry: "C2-40" },
          { code: "C2-4030", name: "Beverages — Wineries & Distillers", parentIndustry: "C2-40" },
        ],
      },
      {
        code: "C2-50", name: "Food Retail & Distribution", parentSector: "C2",
        subIndustries: [
          { code: "C2-5010", name: "Food Wholesale", parentIndustry: "C2-50" },
          { code: "C2-5020", name: "Grocery Stores", parentIndustry: "C2-50" },
          { code: "C2-5030", name: "Hypermarkets", parentIndustry: "C2-50" },
        ],
      },
      {
        code: "C2-60", name: "Dining", parentSector: "C2",
        subIndustries: [
          { code: "C2-6010", name: "Restaurants", parentIndustry: "C2-60" },
          { code: "C2-6020", name: "Specialty Eateries", parentIndustry: "C2-60" },
        ],
      },
      {
        code: "C2-70", name: "Specialty Consumables", parentSector: "C2",
        subIndustries: [
          { code: "C2-7010", name: "Tobacco Products & Cigarettes", parentIndustry: "C2-70" },
          { code: "C2-7020", name: "Confectioners", parentIndustry: "C2-70" },
        ],
      },
    ],
  },

  {
    id: "C3", group: "C", row: 3, name: "Shelter",
    industries: [
      {
        code: "C3-10", name: "Building Materials", parentSector: "C3",
        subIndustries: [
          { code: "C3-1010", name: "Cement & Building Materials", parentIndustry: "C3-10" },
          { code: "C3-1020", name: "Aggregates & Concrete", parentIndustry: "C3-10" },
          { code: "C3-1030", name: "Glass & Ceramics", parentIndustry: "C3-10" },
          { code: "C3-1040", name: "Wood & Lumber Products", parentIndustry: "C3-10" },
        ],
      },
      {
        code: "C3-20", name: "Building Systems", parentSector: "C3",
        subIndustries: [
          { code: "C3-2010", name: "Solutions & Systems", parentIndustry: "C3-20" },
          { code: "C3-2020", name: "Air Conditioning & Climate Control Systems", parentIndustry: "C3-20" },
          { code: "C3-2030", name: "Electrical Systems", parentIndustry: "C3-20" },
          { code: "C3-2040", name: "Plumbing & Piping", parentIndustry: "C3-20" },
        ],
      },
      {
        code: "C3-30", name: "Construction Tools & Housing", parentSector: "C3",
        subIndustries: [
          { code: "C3-3010", name: "Building Tools", parentIndustry: "C3-30" },
          { code: "C3-3020", name: "Manufactured Housing", parentIndustry: "C3-30" },
        ],
      },
      {
        code: "C3-40", name: "Residential Construction", parentSector: "C3",
        subIndustries: [
          { code: "C3-4010", name: "Homebuilding", parentIndustry: "C3-40" },
          { code: "C3-4020", name: "Mortgage Finance & Services", parentIndustry: "C3-40" },
        ],
      },
      {
        code: "C3-50", name: "Household Appliances & Furnishings", parentSector: "C3",
        subIndustries: [
          { code: "C3-5010", name: "Household Appliances", parentIndustry: "C3-50" },
          { code: "C3-5020", name: "Home Furnishing Stores", parentIndustry: "C3-50" },
          { code: "C3-5030", name: "Home Improvement Stores", parentIndustry: "C3-50" },
          { code: "C3-5040", name: "Floor Coverings", parentIndustry: "C3-50" },
          { code: "C3-5050", name: "Home Furnishing & Fixtures", parentIndustry: "C3-50" },
          { code: "C3-5060", name: "Houseware & Accessories", parentIndustry: "C3-50" },
        ],
      },
      {
        code: "C3-60", name: "Household Products", parentSector: "C3",
        subIndustries: [
          { code: "C3-6010", name: "Cleaning Products", parentIndustry: "C3-60" },
          { code: "C3-6020", name: "Coatings & Paints", parentIndustry: "C3-60" },
        ],
      },
      {
        code: "C3-70", name: "REITs", parentSector: "C3",
        subIndustries: [
          { code: "C3-7010", name: "Residential REITs", parentIndustry: "C3-70" },
          { code: "C3-7020", name: "Commercial REITs", parentIndustry: "C3-70" },
          { code: "C3-7030", name: "Specialized REITs", parentIndustry: "C3-70" },
        ],
      },
      {
        code: "C3-80", name: "Real Estate Services", parentSector: "C3",
        subIndustries: [
          { code: "C3-8010", name: "Property Management", parentIndustry: "C3-80" },
          { code: "C3-8020", name: "Real Estate Development", parentIndustry: "C3-80" },
        ],
      },
    ],
  },

  {
    id: "C4", group: "C", row: 4, name: "Transportation",
    industries: [
      {
        code: "C4-10", name: "Sea", parentSector: "C4",
        subIndustries: [
          { code: "C4-1010", name: "Container Shipping", parentIndustry: "C4-10" },
          { code: "C4-1020", name: "Bulk & Dry Goods Shipping", parentIndustry: "C4-10" },
          { code: "C4-1030", name: "Other Shipping", parentIndustry: "C4-10" },
          { code: "C4-1040", name: "Oil Tankers", parentIndustry: "C4-10" },
          { code: "C4-1050", name: "Marine Ports & Services", parentIndustry: "C4-10" },
          { code: "C4-1060", name: "Shipbuilding & Repair", parentIndustry: "C4-10" },
        ],
      },
      {
        code: "C4-20", name: "Land", parentSector: "C4",
        subIndustries: [
          { code: "C4-2010", name: "Auto Makers & Auto Financing", parentIndustry: "C4-20" },
          { code: "C4-2020", name: "Auto Dealerships", parentIndustry: "C4-20" },
          { code: "C4-2030", name: "Tires", parentIndustry: "C4-20" },
          { code: "C4-2040", name: "Auto Parts", parentIndustry: "C4-20" },
          { code: "C4-2050", name: "Trucking", parentIndustry: "C4-20" },
          { code: "C4-2060", name: "Heavy Vehicle Engines", parentIndustry: "C4-20" },
          { code: "C4-2070", name: "Railroads", parentIndustry: "C4-20" },
          { code: "C4-2080", name: "Recreational Vehicles", parentIndustry: "C4-20" },
          { code: "C4-2090", name: "Motorcycles & Powersports", parentIndustry: "C4-20" },
        ],
      },
      {
        code: "C4-30", name: "Air", parentSector: "C4",
        subIndustries: [
          { code: "C4-3010", name: "Airlines (Primarily Passengers)", parentIndustry: "C4-30" },
          { code: "C4-3020", name: "Parcels & Logistics", parentIndustry: "C4-30" },
          { code: "C4-3030", name: "Air Cargo", parentIndustry: "C4-30" },
          { code: "C4-3040", name: "Airports", parentIndustry: "C4-30" },
          { code: "C4-3050", name: "Aircraft Manufacturers / Aerospace", parentIndustry: "C4-30" },
          { code: "C4-3060", name: "Aerospace Parts & Defense", parentIndustry: "C4-30" },
        ],
      },
      {
        code: "C4-40", name: "Others", parentSector: "C4",
        subIndustries: [
          { code: "C4-4010", name: "Packaging & Containers", parentIndustry: "C4-40" },
          { code: "C4-4020", name: "Transportation Infrastructure", parentIndustry: "C4-40" },
          { code: "C4-4030", name: "Pipelines", parentIndustry: "C4-40" },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  ROW 3 — F  (Foundation)
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "F1", group: "F", row: 1, name: "Basic Materials & Industrials",
    industries: [
      {
        code: "F1-10", name: "Diversified Metals", parentSector: "F1",
        subIndustries: [
          { code: "F1-1010", name: "Gold", parentIndustry: "F1-10" },
          { code: "F1-1020", name: "Silver", parentIndustry: "F1-10" },
          { code: "F1-1030", name: "Steel & Iron", parentIndustry: "F1-10" },
          { code: "F1-1040", name: "Aluminum", parentIndustry: "F1-10" },
          { code: "F1-1050", name: "Copper", parentIndustry: "F1-10" },
          { code: "F1-1060", name: "Other Industrial Metals", parentIndustry: "F1-10" },
        ],
      },
      {
        code: "F1-20", name: "Metal Processing", parentSector: "F1",
        subIndustries: [
          { code: "F1-2010", name: "Metal Fabrication", parentIndustry: "F1-20" },
        ],
      },
      {
        code: "F1-30", name: "Non-Metals", parentSector: "F1",
        subIndustries: [
          { code: "F1-3010", name: "Rubber", parentIndustry: "F1-30" },
          { code: "F1-3020", name: "Wood", parentIndustry: "F1-30" },
          { code: "F1-3030", name: "Paper Products", parentIndustry: "F1-30" },
        ],
      },
      {
        code: "F1-40", name: "Chemicals & Petrochemicals", parentSector: "F1",
        subIndustries: [
          { code: "F1-4010", name: "Chemicals", parentIndustry: "F1-40" },
          { code: "F1-4020", name: "Petrochemicals", parentIndustry: "F1-40" },
          { code: "F1-4030", name: "Industrial Gases", parentIndustry: "F1-40" },
        ],
      },
      {
        code: "F1-50", name: "Diversified Machinery", parentSector: "F1",
        subIndustries: [
          { code: "F1-5010", name: "Industrial Equipment & Components", parentIndustry: "F1-50" },
          { code: "F1-5020", name: "Machine Tools & Accessories", parentIndustry: "F1-50" },
          { code: "F1-5030", name: "Small Tools & Accessories", parentIndustry: "F1-50" },
        ],
      },
      {
        code: "F1-60", name: "Construction & Building Materials", parentSector: "F1",
        subIndustries: [
          { code: "F1-6010", name: "General Contractors", parentIndustry: "F1-60" },
          { code: "F1-6020", name: "Heavy Construction", parentIndustry: "F1-60" },
          { code: "F1-6030", name: "Farm & Construction Machineries", parentIndustry: "F1-60" },
        ],
      },
      {
        code: "F1-70", name: "General Building Systems & Supplies", parentSector: "F1",
        subIndustries: [
          { code: "F1-7010", name: "Building Materials Wholesale", parentIndustry: "F1-70" },
          { code: "F1-7020", name: "Cement", parentIndustry: "F1-70" },
          { code: "F1-7030", name: "Building Products", parentIndustry: "F1-70" },
        ],
      },
    ],
  },

  {
    id: "F2", group: "F", row: 2, name: "General Technologies",
    industries: [
      {
        code: "F2-10", name: "Semiconductors for PC", parentSector: "F2",
        subIndustries: [
          { code: "F2-1010", name: "Semiconductor Materials", parentIndustry: "F2-10" },
          { code: "F2-1020", name: "Semiconductor Manufacturing", parentIndustry: "F2-10" },
          { code: "F2-1030", name: "Semiconductor Support", parentIndustry: "F2-10" },
        ],
      },
      {
        code: "F2-20", name: "Computer Hardware", parentSector: "F2",
        subIndustries: [
          { code: "F2-2010", name: "Personal Computers", parentIndustry: "F2-20" },
          { code: "F2-2020", name: "Computer Peripherals", parentIndustry: "F2-20" },
          { code: "F2-2030", name: "Computer Systems", parentIndustry: "F2-20" },
          { code: "F2-2040", name: "Data Storage Devices", parentIndustry: "F2-20" },
        ],
      },
      {
        code: "F2-30", name: "Software", parentSector: "F2",
        subIndustries: [
          { code: "F2-3010", name: "Operating Systems & Office Productivity", parentIndustry: "F2-30" },
          { code: "F2-3020", name: "Database & Data Management", parentIndustry: "F2-30" },
          { code: "F2-3030", name: "IT Management", parentIndustry: "F2-30" },
          { code: "F2-3040", name: "Enterprise Management", parentIndustry: "F2-30" },
          { code: "F2-3050", name: "Enterprise Management & Operations Software", parentIndustry: "F2-30" },
          { code: "F2-3060", name: "Customer Service & Management Software", parentIndustry: "F2-30" },
          { code: "F2-3070", name: "Industry-Specific Enterprise Software", parentIndustry: "F2-30" },
          { code: "F2-3080", name: "Security Software", parentIndustry: "F2-30" },
        ],
      },
      { code: "F2-40", name: "IT Services", parentSector: "F2" },
    ],
  },

  {
    id: "F3", group: "F", row: 3, name: "Energy",
    industries: [
      {
        code: "F3-10", name: "Oil & Gas Extraction", parentSector: "F3",
        subIndustries: [
          { code: "F3-1010", name: "Major Oil & Gas", parentIndustry: "F3-10" },
          { code: "F3-1020", name: "Independent Oil & Gas", parentIndustry: "F3-10" },
          { code: "F3-1030", name: "Exploration & Production", parentIndustry: "F3-10" },
          { code: "F3-1040", name: "Offshore Drilling", parentIndustry: "F3-10" },
        ],
      },
      {
        code: "F3-20", name: "Oil & Gas Services", parentSector: "F3",
        subIndustries: [
          { code: "F3-2010", name: "Major Oil Services Companies", parentIndustry: "F3-20" },
          { code: "F3-2020", name: "Prospecting", parentIndustry: "F3-20" },
          { code: "F3-2030", name: "Oilfield Construction", parentIndustry: "F3-20" },
          { code: "F3-2040", name: "Oil Country Tubular Goods (OCTG)", parentIndustry: "F3-20" },
          { code: "F3-2050", name: "Contract Drillers", parentIndustry: "F3-20" },
          { code: "F3-2060", name: "Oil Field Equipment", parentIndustry: "F3-20" },
          { code: "F3-2070", name: "Oil & Gas Contracting", parentIndustry: "F3-20" },
          { code: "F3-2080", name: "Seismic & Geophysical Services", parentIndustry: "F3-20" },
        ],
      },
      {
        code: "F3-30", name: "Maritime Oil & Gas Support", parentSector: "F3",
        subIndustries: [
          { code: "F3-3010", name: "Offshore Supply Vessels", parentIndustry: "F3-30" },
          { code: "F3-3020", name: "Facilities Contractors", parentIndustry: "F3-30" },
          { code: "F3-3030", name: "Subsea Equipment & Services", parentIndustry: "F3-30" },
        ],
      },
      {
        code: "F3-40", name: "Facilities & Pipelines", parentSector: "F3",
        subIndustries: [
          { code: "F3-4010", name: "Pipelines & Transportation", parentIndustry: "F3-40" },
          { code: "F3-4020", name: "Storage & Terminals", parentIndustry: "F3-40" },
        ],
      },
      {
        code: "F3-50", name: "Refiners & Marketers", parentSector: "F3",
        subIndustries: [
          { code: "F3-5010", name: "Integrated Refiners", parentIndustry: "F3-50" },
          { code: "F3-5020", name: "Independent Refiners", parentIndustry: "F3-50" },
          { code: "F3-5030", name: "Marketing & Distribution", parentIndustry: "F3-50" },
        ],
      },
      {
        code: "F3-60", name: "Other Energy Resources", parentSector: "F3",
        subIndustries: [
          { code: "F3-6010", name: "Coal", parentIndustry: "F3-60" },
          { code: "F3-6020", name: "Nuclear Energy", parentIndustry: "F3-60" },
          { code: "F3-6030", name: "Other Energy Resources", parentIndustry: "F3-60" },
        ],
      },
      {
        code: "F3-70", name: "Utilities", parentSector: "F3",
        subIndustries: [
          { code: "F3-7010", name: "Electricity Companies", parentIndustry: "F3-70" },
          { code: "F3-7020", name: "Gas Utilities", parentIndustry: "F3-70" },
          { code: "F3-7030", name: "Multi-Utilities", parentIndustry: "F3-70" },
          { code: "F3-7040", name: "Independent Power Producers", parentIndustry: "F3-70" },
        ],
      },
      {
        code: "F3-80", name: "Renewable Energy", parentSector: "F3",
        subIndustries: [
          { code: "F3-8010", name: "Solar Energy", parentIndustry: "F3-80" },
          { code: "F3-8020", name: "Wind Energy", parentIndustry: "F3-80" },
          { code: "F3-8030", name: "Hydro & Other Renewables", parentIndustry: "F3-80" },
        ],
      },
    ],
  },

  {
    id: "F4", group: "F", row: 4, name: "Public",
    industries: [
      {
        code: "F4-10", name: "Defense", parentSector: "F4",
        subIndustries: [
          { code: "F4-1010", name: "Aerospace & Defense", parentIndustry: "F4-10" },
          { code: "F4-1020", name: "Defense Electronics", parentIndustry: "F4-10" },
          { code: "F4-1030", name: "Military Vehicles & Equipment", parentIndustry: "F4-10" },
          { code: "F4-1040", name: "Government Defense Contractors", parentIndustry: "F4-10" },
        ],
      },
      {
        code: "F4-20", name: "Water Management", parentSector: "F4",
        subIndustries: [
          { code: "F4-2010", name: "Water", parentIndustry: "F4-20" },
          { code: "F4-2020", name: "Water Technology", parentIndustry: "F4-20" },
          { code: "F4-2030", name: "Water Treatment & Purification", parentIndustry: "F4-20" },
          { code: "F4-2040", name: "Desalination & Irrigation", parentIndustry: "F4-20" },
        ],
      },
      {
        code: "F4-30", name: "Environmental Services", parentSector: "F4",
        subIndustries: [
          { code: "F4-3010", name: "Waste Management & Pollution Control", parentIndustry: "F4-30" },
          { code: "F4-3020", name: "Recycling Services", parentIndustry: "F4-30" },
          { code: "F4-3030", name: "Hazardous Waste Management", parentIndustry: "F4-30" },
          { code: "F4-3040", name: "Environmental Consulting", parentIndustry: "F4-30" },
        ],
      },
      {
        code: "F4-40", name: "Public Safety & Security", parentSector: "F4",
        subIndustries: [
          { code: "F4-4010", name: "Law Enforcement Equipment", parentIndustry: "F4-40" },
          { code: "F4-4020", name: "Security Services", parentIndustry: "F4-40" },
          { code: "F4-4030", name: "Emergency Response Systems", parentIndustry: "F4-40" },
        ],
      },
      {
        code: "F4-50", name: "Government Services", parentSector: "F4",
        subIndustries: [
          { code: "F4-5010", name: "Public Administration Contracting", parentIndustry: "F4-50" },
          { code: "F4-5020", name: "Infrastructure Development", parentIndustry: "F4-50" },
        ],
      },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export const sectorById: Record<string, ClassificationSector> = Object.fromEntries(
  classificationTree.map((s) => [s.id, s])
);

/** All industries and sub-industries as a flat searchable list */
export const allIndustries = classificationTree.flatMap((sector) =>
  sector.industries.flatMap((ind) => {
    const industryRow = {
      ...ind,
      sectorId: sector.id,
      sectorName: sector.name,
      group: sector.group,
      row: sector.row,
    };
    const subRows =
      ind.subIndustries?.map((sub) => ({
        code: sub.code,
        name: sub.name,
        parentSector: sector.id,
        parentIndustry: sub.parentIndustry,
        sectorId: sector.id,
        sectorName: sector.name,
        group: sector.group,
        row: sector.row,
      })) ?? [];
    return [industryRow, ...subRows];
  })
);

export function getIndustryByCode(code: string) {
  return allIndustries.find((ind) => ind.code === code);
}

/** First letter of IM code is the matrix column group (A / C / F). */
export function getGroupFromImCode(code: string): ColumnGroup {
  const g = code.trim().charAt(0).toUpperCase();
  if (g === "A" || g === "C" || g === "F") return g;
  return "C";
}

/**
 * Returns the 3×4 grid ordered as:
 *   Row 1: A1, A2, A3, A4
 *   Row 2: C1, C2, C3, C4
 *   Row 3: F1, F2, F3, F4
 */
export const gridRows: ClassificationSector[][] = [
  classificationTree.filter((s) => s.group === "A").sort((a, b) => a.row - b.row),
  classificationTree.filter((s) => s.group === "C").sort((a, b) => a.row - b.row),
  classificationTree.filter((s) => s.group === "F").sort((a, b) => a.row - b.row),
];
