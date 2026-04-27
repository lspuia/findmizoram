import Link from "next/link";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800 flex flex-col">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-800/20 blur-3xl" />

      {/* Header */}
      <header className="relative z-10 flex justify-center px-6 pb-4 pt-8">
        <div className="flex items-center gap-2.5 rounded-full border border-emerald-700/50 bg-emerald-900/60 px-5 py-2.5 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-base font-semibold tracking-wide text-white">
            findmizoram.com
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
        {/* Coming soon badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-600/40 bg-emerald-800/50 px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-sm font-medium uppercase tracking-widest text-emerald-300">
            Coming Soon
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-5 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Mizoram&rsquo;s Local Business Directory
          <span className="text-emerald-400"> — Coming Soon</span>
        </h1>

        {/* Subheadline */}
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-emerald-200 sm:text-xl">
          Discover restaurants, hotels, shops, and services across Aizawl and
          all of Mizoram
        </p>

        {/* Description */}
        <p className="mb-10 max-w-lg text-sm leading-relaxed text-emerald-300/80 sm:text-base">
          FindMizoram is the definitive local business directory for Mizoram.
          Browse verified listings across all 11 districts — from bustling
          Aizawl eateries to boutique stays in Champhai — with contact details,
          directions, and real community reviews.
        </p>

        {/* Category chips */}
        <div className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
          {(
            [
              ["🏪", "Restaurants & Cafes"],
              ["🏨", "Hotels & Homestays"],
              ["🛍️", "Shops & Services"],
            ] as const
          ).map(([icon, label]) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-emerald-700/30 bg-emerald-900/40 px-4 py-3"
            >
              <span className="text-xl" aria-hidden="true">
                {icon}
              </span>
              <span className="text-sm font-medium text-emerald-200">
                {label}
              </span>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-emerald-800/50 px-6 py-6 text-center">
        <p className="text-sm text-emerald-600">
          &copy; 2026 findmizoram.com &middot; All rights reserved &middot;{" "}
          <Link
            href="/privacy-policy"
            className="hover:text-emerald-400 transition-colors"
          >
            Privacy Policy
          </Link>
        </p>
      </footer>
    </div>
  );
}
