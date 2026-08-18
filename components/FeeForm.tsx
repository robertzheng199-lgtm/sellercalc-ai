"use client";

import { useState, type FormEvent } from "react";
import { calculateTikTokFee } from "@/lib/feeCalculator";

type Result = ReturnType<typeof calculateTikTokFee>;

export default function FeeForm() {
  const [result, setResult] = useState<Result>();

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const value = (name: string) =>
      Number((f.elements.namedItem(name) as HTMLInputElement).value);

    setResult(
      calculateTikTokFee(value("price"), value("commission"), value("affiliate"))
    );
  }

  return (
    <div>
      <form onSubmit={submit} className="mt-10 space-y-4">
        <input name="price" placeholder="Product Price" className="input" />
        <input
          name="commission"
          placeholder="TikTok Platform Fee %"
          className="input"
        />
        <input
          name="affiliate"
          placeholder="Affiliate Commission %"
          className="input"
        />
        <button className="bg-black text-white px-6 py-3 rounded-xl">
          Calculate Fees
        </button>
      </form>

      {result && (
        <div className="mt-10 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold">Your Result</h2>
          <p>Platform Fee: ${result.platformFee}</p>
          <p>Affiliate Fee: ${result.affiliateFee}</p>
          <p>Total Fees: ${result.totalFee}</p>
          <p>Seller Receives: ${result.sellerReceives}</p>
        </div>
      )}
    </div>
  );
}