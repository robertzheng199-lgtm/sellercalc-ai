"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  detectLocale,
  getDictionary,
  switchLocaleTarget,
  type Locale,
} from "@/lib/i18n";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";

  const locale = detectLocale(pathname);
  const dict = getDictionary(locale);

  const other: Locale = locale === "zh" ? "en" : "zh";
  const otherPath = switchLocaleTarget(pathname, other);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          SellerCalc AI
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black">
              {dict.nav.tools}
              <span className="text-xs">▼</span>
            </button>

            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-full h-3"
            />

            <div className="invisible absolute left-0 top-full mt-3 w-64 rounded-xl border bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              <ToolLink
                href="/profit-calculator"
                title={dict.nav.profit}
                description={dict.nav.profitDesc}
                locale={locale}
              />

              <ToolLink
                href="/fee-calculator"
                title={dict.nav.fee}
                description={dict.nav.feeDesc}
                locale={locale}
              />

              <ToolLink
                href="/roas-calculator"
                title={dict.nav.roas}
                description={dict.nav.roasDesc}
                locale={locale}
              />

              <div className="my-2 border-t" />

              <Link
                href={locale === "zh" ? "/zh/tools" : "/tools"}
                className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-gray-50"
              >
                {dict.nav.viewAll} →
              </Link>
            </div>
          </div>

          <Link
            href={locale === "zh" ? "/zh/blog" : "/blog"}
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            {dict.nav.guides}
          </Link>

          <Link
            href={locale === "zh" ? "/zh/about" : "/about"}
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            {dict.nav.about}
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher
            label={dict.label}
            otherPath={otherPath}
            otherName={dict.otherName}
          />

          <Link
            href={locale === "zh" ? "/zh/profit-calculator" : "/profit-calculator"}
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
          >
            {dict.nav.getStarted}
          </Link>
        </div>

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
              href={locale === "zh" ? "/zh/tools" : "/tools"}
              onClick={() => setOpen(false)}
              className="block py-3 font-medium"
            >
              {dict.nav.tools}
            </Link>

            <Link
              href={locale === "zh" ? "/zh/profit-calculator" : "/profit-calculator"}
              onClick={() => setOpen(false)}
              className="block py-2 pl-4 text-gray-600"
            >
              {dict.nav.profit}
            </Link>

            <Link
              href={locale === "zh" ? "/zh/fee-calculator" : "/fee-calculator"}
              onClick={() => setOpen(false)}
              className="block py-2 pl-4 text-gray-600"
            >
              {dict.nav.fee}
            </Link>

            <Link
              href={locale === "zh" ? "/zh/roas-calculator" : "/roas-calculator"}
              onClick={() => setOpen(false)}
              className="block py-2 pl-4 text-gray-600"
            >
              {dict.nav.roas}
            </Link>

            <Link
              href={locale === "zh" ? "/zh/blog" : "/blog"}
              onClick={() => setOpen(false)}
              className="block py-3 font-medium"
            >
              {dict.nav.guides}
            </Link>

            <Link
              href={locale === "zh" ? "/zh/about" : "/about"}
              onClick={() => setOpen(false)}
              className="block py-3 font-medium"
            >
              {dict.nav.about}
            </Link>

            <div className="my-2 border-t" />

            <Link
              href={otherPath}
              onClick={() => setOpen(false)}
              className="block py-3 font-medium"
            >
              {dict.otherName}
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
  locale,
}: {
  href: string;
  title: string;
  description: string;
  locale: "en" | "zh";
}) {
  const target = locale === "zh" ? `/zh${href}` : href;

  return (
    <Link href={target} className="block rounded-lg px-3 py-3 hover:bg-gray-50">
      <div className="font-medium">{title}</div>
      <div className="mt-1 text-xs text-gray-500">{description}</div>
    </Link>
  );
}

function LanguageSwitcher({
  label,
  otherPath,
  otherName,
}: {
  label: string;
  otherPath: string;
  otherName: string;
}) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>

        {label}
        <span className="text-xs">▼</span>
      </button>

      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-full h-2"
      />

      <div className="invisible absolute right-0 top-full mt-2 w-40 rounded-xl border bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
        <Link
          href={otherPath}
          className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-50"
        >
          {otherName}
        </Link>
      </div>
    </div>
  );
}