"use client";

import { useState, type FormEvent } from "react";
import { calculateProfit } from "@/lib/calculator";

type Result = ReturnType<typeof calculateProfit>;

export default function Calculator() {
  const [result, setResult] = useState<Result>();

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const value = (name: string) =>
      Number((f.elements.namedItem(name) as HTMLInputElement).value);

    setResult(
      calculateProfit(
        value("price"),
        value("cost"),
        value("shipping"),
        value("affiliate"),
        value("ads")
      )
    );
  }

  return (
    <div>
      <form onSubmit={submit} className="space-y-4">
        <input name="price" placeholder="Product Price" className="input" />
        <input name="cost" placeholder="Product Cost" className="input" />
        <input name="shipping" placeholder="Shipping Cost" className="input" />
        <input
          name="affiliate"
          placeholder="Affiliate Commission %"
          className="input"
        />
        <input name="ads" placeholder="Advertising Cost" className="input" />

        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Calculate Profit
        </button>
      </form>

      {result && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold">Result</h2>
          <p>Profit: ${result.profit}</p>
          <p>Margin: {result.margin}%</p>
          <p>Total Fees: ${result.fees}</p>
        </div>
      )}
    </div>
  );
}