"use client";

import { useState, type FormEvent } from "react";

type Result = {
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

export default function Calculator() {
  const [result, setResult] = useState<Result | null>(null);

  function calculate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const price = Number(form.get("price")) || 0;
    const cost = Number(form.get("cost")) || 0;
    const shipping = Number(form.get("shipping")) || 0;
    const packaging = Number(form.get("packaging")) || 0;
    const affiliateRate = Number(form.get("affiliate")) || 0;
    const platformRate = Number(form.get("platformFee")) || 0;
    const ads = Number(form.get("ads")) || 0;
    const refundRate = Number(form.get("refundRate")) || 0;

    const platformFee = (price * platformRate) / 100;
    const affiliateFee = (price * affiliateRate) / 100;
    const refundLoss = (price * refundRate) / 100;

    const profit =
      price -
      platformFee -
      affiliateFee -
      cost -
      shipping -
      packaging -
      ads -
      refundLoss;

    const margin = price > 0 ? (profit / price) * 100 : 0;

    const variableRate =
      platformRate / 100 + affiliateRate / 100 + refundRate / 100;

    const fixedCosts = cost + shipping + packaging + ads;

    const breakEvenPrice =
      variableRate < 1 ? fixedCosts / (1 - variableRate) : 0;

    setResult({
      revenue: price,
      platformFee,
      affiliateFee,
      productCost: cost,
      shipping,
      ads,
      packaging,
      refundLoss,
      profit,
      margin,
      breakEvenPrice,
    });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form
        onSubmit={calculate}
        className="rounded-2xl bg-white p-6 shadow-sm"
      >
        <div className="space-y-4">
          <Field label="Selling Price" name="price" placeholder="39.99" />
          <Field label="Product Cost" name="cost" placeholder="10" />
          <Field label="Shipping Cost" name="shipping" placeholder="4" />
          <Field label="Packaging Cost" name="packaging" placeholder="0.50" />
          <Field
            label="TikTok Shop Fee %"
            name="platformFee"
            placeholder="6"
            hint="Enter the rate shown in your current Seller Center."
          />
          <Field
            label="Affiliate Commission %"
            name="affiliate"
            placeholder="10"
          />
          <Field label="Advertising Cost" name="ads" placeholder="5" />
          <Field
            label="Estimated Refund Rate %"
            name="refundRate"
            placeholder="3"
          />
        </div>

        <button
          type="submit"
          className="
            mt-6
            w-full
            rounded-xl
            bg-black
            px-6
            py-3
            font-medium
            text-white
            transition
            hover:opacity-90
          "
        >
          Calculate Profit
        </button>
      </form>

      <ResultCard result={result} />
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  hint,
}: {
  label: string;
  name: string;
  placeholder: string;
  hint?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>

      <input
        name={name}
        type="number"
        step="0.01"
        min="0"
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-gray-200
          px-4
          py-3
          outline-none
          focus:border-black
        "
      />

      {hint && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
    </div>
  );
}

function ResultCard({ result }: { result: Result | null }) {
  if (!result) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold">Your Profit</h2>

        <p className="mt-3 text-gray-500">
          Enter your product economics to calculate estimated profit.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <p className="text-sm text-gray-500">Estimated Net Profit</p>

      <div
        className={`mt-2 text-5xl font-bold ${
          result.profit >= 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        ${result.profit.toFixed(2)}
      </div>

      <p className="mt-2 text-gray-500">
        Profit Margin: {result.margin.toFixed(1)}%
      </p>

      <div className="my-8 border-t" />

      <Breakdown label="Revenue" value={result.revenue} />
      <Breakdown label="TikTok Shop Fee" value={-result.platformFee} />
      <Breakdown label="Affiliate Commission" value={-result.affiliateFee} />
      <Breakdown label="Product Cost" value={-result.productCost} />
      <Breakdown label="Shipping" value={-result.shipping} />
      <Breakdown label="Packaging" value={-result.packaging} />
      <Breakdown label="Advertising" value={-result.ads} />
      <Breakdown label="Estimated Refund Loss" value={-result.refundLoss} />

      <div className="mt-6 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-500">Estimated Break-even Price</p>

        <p className="mt-1 text-2xl font-bold">
          ${result.breakEvenPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

function Breakdown({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex justify-between py-2">
      <span className="text-gray-600">{label}</span>

      <span className="font-medium">
        {value < 0 ? "-" : ""}${Math.abs(value).toFixed(2)}
      </span>
    </div>
  );
}
