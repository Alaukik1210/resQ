import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold text-white">SafeReport</h2>
          <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
            Anonymous, secure, and trusted reporting platform. 
            Your safety is always our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="text-zinc-400 hover:text-sky-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="text-zinc-400 hover:text-sky-400">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="/report" className="text-zinc-400 hover:text-sky-400">
                Report Now
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-zinc-400 hover:text-sky-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
            Resources
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/faq" className="text-zinc-400 hover:text-sky-400">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-zinc-400 hover:text-sky-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-zinc-400 hover:text-sky-400">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
            Stay Updated
          </h3>
          <p className="mt-4 text-sm text-zinc-400">
            Subscribe to receive safety tips and platform updates.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-l-lg bg-zinc-900 border border-zinc-700 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500"
            />
            <button
              type="submit"
              className="rounded-r-lg bg-sky-500 cursor-pointer  px-4 text-sm font-medium text-white hover:bg-sky-400 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} SafeReport. All rights reserved.
      </div>
    </footer>
  );
}
