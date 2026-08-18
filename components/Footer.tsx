import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-lg font-bold">SellerCalc AI</div>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Simple tools to help ecommerce sellers understand their numbers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Tools</h3>

            <div className="mt-4 space-y-3 text-sm">
              <Link
                href="/profit-calculator"
                className="block text-gray-500 hover:text-black"
              >
                Profit Calculator
              </Link>

              <Link
                href="/fee-calculator"
                className="block text-gray-500 hover:text-black"
              >
                Fee Calculator
              </Link>

              <Link
                href="/roas-calculator"
                className="block text-gray-500 hover:text-black"
              >
                ROAS Calculator
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Resources</h3>

            <div className="mt-4 space-y-3 text-sm">
              <Link
                href="/blog"
                className="block text-gray-500 hover:text-black"
              >
                Seller Guides
              </Link>

              <Link
                href="/tools"
                className="block text-gray-500 hover:text-black"
              >
                All Tools
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>

            <div className="mt-4 space-y-3 text-sm">
              <Link
                href="/about"
                className="block text-gray-500 hover:text-black"
              >
                About
              </Link>

              <Link
                href="/privacy"
                className="block text-gray-500 hover:text-black"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="block text-gray-500 hover:text-black"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} SellerCalc AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}