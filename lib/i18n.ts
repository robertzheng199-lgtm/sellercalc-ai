import { en } from "@/i18n/en";
import { zh } from "@/i18n/zh";

export type Locale = "en" | "zh";

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return locale === "zh" ? zh : en;
}

export function localize(locale: Locale, path: string): string {
  if (locale === "en") {
    return path;
  }

  if (path === "/") {
    return "/zh";
  }

  return `/zh${path}`;
}

const LOCALIZED_PATHS = [
  "/",
  "/tools",
  "/profit-calculator",
  "/fee-calculator",
  "/roas-calculator",
  "/blog",
  "/about",
];

export function switchLocaleTarget(
  pathname: string,
  target: Locale
): string {
  if (target === "zh") {
    const base = pathname.startsWith("/zh")
      ? pathname.slice(3)
      : pathname;

    if (base === "") {
      return "/zh";
    }

    return LOCALIZED_PATHS.includes(base) ? `/zh${base}` : "/zh";
  }

  if (pathname.startsWith("/zh")) {
    const base = pathname.slice(3) || "/";

    return LOCALIZED_PATHS.includes(base) ? base : "/";
  }

  return pathname;
}

export function detectLocale(pathname: string): Locale {
  return pathname.startsWith("/zh") ? "zh" : "en";
}

export const siteUrl = "https://sellercalc-ai.vercel.app";

export function alternateLanguages(path: string) {
  const enUrl = `${siteUrl}${path === "/" ? "" : path}`;
  const zhUrl = `${siteUrl}/zh${path === "/" ? "" : path}`;

  return {
    "x-default": enUrl,
    en: enUrl,
    zh: zhUrl,
  };
}