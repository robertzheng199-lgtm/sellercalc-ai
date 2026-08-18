"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          SellerCalc AI
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black">
              Tools
              <span className="text-xs">▼</span>
            </button>

            <div className="invisible absolute left-0 top-full mt-3 w-64 rounded-xl border bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              <ToolLink
                href="/profit-calculator"
                title="Profit Calculator"
                description="Calculate your real profit"
              />

              <ToolLink
                href="/fee-calculator"
                title="Fee Calculator"
                description="Estimate TikTok Shop fees"
              />

              <ToolLink
                href="/roas-calculator"
                title="ROAS Calculator"
                description="Analyze ad performance"
              />

              <div className="my-2 border-t" />

              <Link
                href="/tools"
                className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-gray-50"
              >
                View all tools →
              </Link>
            </div>
          </div>

          <Link
            href="/blog"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Guides
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            About
          </Link>
        </nav>

        <Link
          href="/profit-calculator"
          className="hidden rounded-lg bg-black px-4 py-2 text-sm font-medium text-white md:block"
        >
          Get Started
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 md:hidden"
          aria-label="Open menu"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <nav className="mx-auto max-w-6xl px-6 py-4">
            <Link
              href="/tools"
              onClick={() => setOpen(false)}
              className="block py-3 font-medium"
            >
              Tools
            </Link>

            <Link
              href="/profit-calculator"
              onClick={() => setOpen(false)}
              className="block py-2 pl-4 text-gray-600"
            >
              Profit Calculator
            </Link>

            <Link
              href="/fee-calculator"
              onClick={() => setOpen(false)}
              className="block py-2 pl-4 text-gray-600"
            >
              Fee Calculator
            </Link>

            <Link
              href="/roas-calculator"
              onClick={() => setOpen(false)}
              className="block py-2 pl-4 text-gray-600"
            >
              ROAS Calculator
            </Link>

            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="block py-3 font-medium"
            >
              Guides
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block py-3 font-medium"
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function ToolLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link href={href} className="block rounded-lg px-3 py-3 hover:bg-gray-50">
      <div className="font-medium">{title}</div>
      <div className="mt-1 text-xs text-gray-500">{description}</div>
    </Link>
  );
}