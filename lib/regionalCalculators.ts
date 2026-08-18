export type RegionalCalculator = {
  slug: string;
  country: string;
  currency: string;
  currencySymbol: string;
  title: string;
  description: string;
};

export const regionalCalculators: RegionalCalculator[] = [
  {
    slug: "tiktok-shop-profit-us",
    country: "United States",
    currency: "USD",
    currencySymbol: "$",
    title: "TikTok Shop Profit Calculator USA",
    description: "Calculate estimated TikTok Shop profit in the United States.",
  },
  {
    slug: "tiktok-shop-profit-uk",
    country: "United Kingdom",
    currency: "GBP",
    currencySymbol: "£",
    title: "TikTok Shop Profit Calculator UK",
    description: "Calculate estimated TikTok Shop profit in the United Kingdom.",
  },
  {
    slug: "tiktok-shop-profit-canada",
    country: "Canada",
    currency: "CAD",
    currencySymbol: "C$",
    title: "TikTok Shop Profit Calculator Canada",
    description: "Calculate estimated TikTok Shop profit in Canada.",
  },
  {
    slug: "tiktok-shop-profit-australia",
    country: "Australia",
    currency: "AUD",
    currencySymbol: "A$",
    title: "TikTok Shop Profit Calculator Australia",
    description: "Calculate estimated TikTok Shop profit in Australia.",
  },
];