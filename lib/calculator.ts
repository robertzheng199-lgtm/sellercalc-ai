export type ProfitInput = {
  price: number;
  cost: number;
  shipping: number;
  packaging: number;
  platformRate: number;
  affiliateRate: number;
  ads: number;
  refundRate: number;
};

export type ProfitResult = {
  revenue: number;
  platformFee: number;
  affiliateFee: number;
  productCost: number;
  shipping: number;
  ads: number;
  packaging: number;
  refundLoss: number;
  profit: number;
  margin: number;
  breakEvenPrice: number;
};

export function calculateProfit(input: ProfitInput): ProfitResult {
  const platformFee = (input.price * input.platformRate) / 100;
  const affiliateFee = (input.price * input.affiliateRate) / 100;
  const refundLoss = (input.price * input.refundRate) / 100;

  const profit =
    input.price -
    platformFee -
    affiliateFee -
    input.cost -
    input.shipping -
    input.packaging -
    input.ads -
    refundLoss;

  const margin = input.price > 0 ? (profit / input.price) * 100 : 0;

  const variableRate =
    input.platformRate / 100 + input.affiliateRate / 100 + input.refundRate / 100;

  const fixedCosts = input.cost + input.shipping + input.packaging + input.ads;

  const breakEvenPrice = variableRate < 1 ? fixedCosts / (1 - variableRate) : 0;

  return {
    revenue: input.price,
    platformFee,
    affiliateFee,
    productCost: input.cost,
    shipping: input.shipping,
    ads: input.ads,
    packaging: input.packaging,
    refundLoss,
    profit,
    margin,
    breakEvenPrice,
  };
}