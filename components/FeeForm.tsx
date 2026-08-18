"use client";

import { useState, type FormEvent } from "react";
import Field from "@/components/Field";
import { calculateTikTokFee } from "@/lib/feeCalculator";
import type { Dictionary } from "@/lib/i18n";

type Result = ReturnType<typeof calculateTikTokFee>;

export default function FeeForm({ dict }: { dict: Dictionary["fee"] }) {
  const [result, setResult] = useState<Result>();

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    setResult(
      calculateTikTokFee(
        Number(form.get("price")) || 0,
        Number(form.get("platformRate")) || 0,
        Number(form.get("affiliateRate")) || 0
      )
    );
  }

  return (
    <div>
      <form onSubmit={submit} className="mt-10 space-y-4">
        <Field label={dict.price} name="price" placeholder="39.99" />
        <Field
          label={dict.platformRate}
          name="platformRate"
          placeholder="6"
        />
        <Field
          label={dict.affiliateRate}
          name="affiliateRate"
          placeholder="10"
        />

        <button className="rounded-xl bg-black px-6 py-3 text-white">
          {dict.calculate}
        </button>
      </form>

      {result && (
        <div className="mt-10 rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold">{dict.resultTitle}</h2>

          <div className="mt-4 space-y-2">
            <p>
              {dict.platformFeeLine}: ${result.platformFee.toFixed(2)}
            </p>
            <p>
              {dict.affiliateFeeLine}: ${result.affiliateFee.toFixed(2)}
            </p>
            <p>
              {dict.totalFees}: ${result.totalFee.toFixed(2)}
            </p>
            <p>
              {dict.sellerReceives}: ${result.sellerReceives.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}