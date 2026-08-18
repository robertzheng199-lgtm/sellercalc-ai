"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { detectLocale, getDictionary } from "@/lib/i18n";

export default function Footer() {
  const pathname = usePathname() ?? "/";
  const locale = detectLocale(pathname);
  const dict = getDictionary(locale);

  const z = (path: string) =>
    locale === "zh" ? (path === "/" ? "/zh" : `/zh${path}`) : path;

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-lg font-bold">SellerCalc AI</div>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              {dict.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-semibold">{dict.footer.tools}</h3>

            <div className="mt-4 space-y-3 text-sm">
              <Link
                href={z("/profit-calculator")}
                className="block text-gray-500 hover:text-black"
              >
                {dict.nav.profit}
              </Link>

              <Link
                href={z("/fee-calculator")}
                className="block text-gray-500 hover:text-black"
              >
                {dict.nav.fee}
              </Link>

              <Link
                href={z("/roas-calculator")}
                className="block text-gray-500 hover:text-black"
              >
                {dict.nav.roas}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">{dict.footer.resources}</h3>

            <div className="mt-4 space-y-3 text-sm">
              <Link
                href={z("/blog")}
                className="block text-gray-500 hover:text-black"
              >
                {dict.footer.guides}
              </Link>

              <Link
                href={z("/tools")}
                className="block text-gray-500 hover:text-black"
              >
                {dict.footer.allTools}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">{dict.footer.company}</h3>

            <div className="mt-4 space-y-3 text-sm">
              <Link
                href={z("/about")}
                className="block text-gray-500 hover:text-black"
              >
                {dict.footer.about}
              </Link>

              <Link
                href="/privacy"
                className="block text-gray-500 hover:text-black"
              >
                {dict.footer.privacy}
              </Link>

              <Link
                href="/terms"
                className="block text-gray-500 hover:text-black"
              >
                {dict.footer.terms}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} SellerCalc AI. {dict.footer.rights}
        </div>
      </div>
    </footer>
  );
}