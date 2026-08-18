"use client";

import { useState, type FormEvent } from "react";
import { calculateROAS } from "@/lib/roasCalculator";

type Result = ReturnType<typeof calculateROAS>;

export default function RoasForm() {
  const [result, setResult] = useState<Result>();

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const value = (name: string) =>
      Number((f.elements.namedItem(name) as HTMLInputElement).value);

    setResult(calculateROAS(value("revenue"), value("ads")));
  }

  return (
    <div>
      <form onSubmit={submit} className="mt-10 space-y-4">
        <input
          name="revenue"
          placeholder="Revenue From Ads"
          className="input"
        />
        <input name="ads" placeholder="Advertising Spend" className="input" />
        <button className="bg-black text-white px-6 py-3 rounded-xl">
          Calculate ROAS
        </button>
      </form>

      {result && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold text-xl">Your ROAS</h2>
          <p className="mt-3 text-2xl">{result.roas}x</p>
        </div>
      )}
    </div>
  );
}