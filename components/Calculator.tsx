"use client";

import { useState, type FormEvent } from "react";
import Field from "@/components/Field";
import { calculateProfit, type ProfitResult } from "@/lib/calculator";
import type { Dictionary } from "@/lib/i18n";

export default function Calculator({
  dict,
}: {
  dict: Dictionary["calculator"];
}) {
  const [result, setResult] = useState<ProfitResult | null>(null);

  function calculate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    setResult(
      calculateProfit({
        price: Number(form.get("price")) || 0,
        cost: Number(form.get("cost")) || 0,
        shipping: Number(form.get("shipping")) || 0,
        packaging: Number(form.get("packaging")) || 0,
        affiliateRate: Number(form.get("affiliate")) || 0,
        platformRate: Number(form.get("platformFee")) || 0,
        ads: Number(form.get("ads")) || 0,
        refundRate: Number(form.get("refundRate")) || 0,
      })
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form
        onSubmit={calculate}
        className="rounded-2xl bg-white p-6 shadow-sm"
      >
        <div className="space-y-4">
          <Field
            label={dict.sellingPrice}
            name="price"
            placeholder="39.99"
          />
          <Field label={dict.productCost} name="cost" placeholder="10" />
          <Field label={dict.shipping} name="shipping" placeholder="4" />
          <Field
            label={dict.packaging}
            name="packaging"
            placeholder="0.50"
          />
          <Field
            label={dict.platformFee}
            name="platformFee"
            placeholder="6"
            hint={dict.platformFeeHint}
          />
          <Field
            label={dict.affiliate}
            name="affiliate"
            placeholder="10"
          />
          <Field label={dict.advertising} name="ads" placeholder="5" />
          <Field
            label={dict.refundRate}
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
          {dict.calculate}
        </button>
      </form>

      <ResultCard dict={dict} result={result} />
    </div>
  );
}

function ResultCard({
  dict,
  result,
}: {
  dict: Dictionary["calculator"];
  result: ProfitResult | null;
}) {
  if (!result) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold">{dict.emptyTitle}</h2>

        <p className="mt-3 text-gray-500">{dict.emptyBody}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <p className="text-sm text-gray-500">{dict.resultLabel}</p>

      <div
        className={`mt-2 text-5xl font-bold ${
          result.profit >= 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        ${result.profit.toFixed(2)}
      </div>

      <p className="mt-2 text-gray-500">
        {dict.marginLabel}: {result.margin.toFixed(1)}%
      </p>

      <div className="my-8 border-t" />

      <Breakdown label={dict.revenue} value={result.revenue} />
      <Breakdown
        label={dict.platformFeeLine}
        value={-result.platformFee}
      />
      <Breakdown
        label={dict.affiliateFeeLine}
        value={-result.affiliateFee}
      />
      <Breakdown label={dict.productCostLine} value={-result.productCost} />
      <Breakdown label={dict.shippingLine} value={-result.shipping} />
      <Breakdown label={dict.packagingLine} value={-result.packaging} />
      <Breakdown label={dict.advertisingLine} value={-result.ads} />
      <Breakdown label={dict.refundLoss} value={-result.refundLoss} />

      <div className="mt-6 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-500">{dict.breakEven}</p>

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