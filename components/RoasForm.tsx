"use client";

import { useState, type FormEvent } from "react";
import Field from "@/components/Field";
import { calculateROAS } from "@/lib/roasCalculator";
import type { Dictionary } from "@/lib/i18n";

type Result = ReturnType<typeof calculateROAS>;

export default function RoasForm({ dict }: { dict: Dictionary["roas"] }) {
  const [result, setResult] = useState<Result>();

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    setResult(
      calculateROAS(
        Number(form.get("revenue")) || 0,
        Number(form.get("adSpend")) || 0
      )
    );
  }

  return (
    <div>
      <form onSubmit={submit} className="mt-10 space-y-4">
        <Field label={dict.revenue} name="revenue" placeholder="1000" />
        <Field label={dict.adSpend} name="adSpend" placeholder="200" />

        <button className="rounded-xl bg-black px-6 py-3 text-white">
          {dict.calculate}
        </button>
      </form>

      {result && (
        <div className="mt-8 rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold">{dict.resultTitle}</h2>
          <p className="mt-3 text-2xl">{result.roas}x</p>
        </div>
      )}
    </div>
  );
}