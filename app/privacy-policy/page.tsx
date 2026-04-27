import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — findmizoram.com",
  description:
    "Privacy policy for findmizoram.com, Mizoram's local business directory.",
};

const sections = [
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    content: (
      <>
        <p>
          The only personal information we currently collect is your{" "}
          <strong className="text-white">email address</strong>, and only when
          you voluntarily submit it through the &ldquo;Notify Me&rdquo; form on
          our coming soon page.
        </p>
        <p className="mt-3">
          We do not collect names, phone numbers, addresses, or any other
          personal details at this stage.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-your-information",
    heading: "How We Use Your Information",
    content: (
      <>
        <p>Your email address is used for one purpose only:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>To notify you when findmizoram.com officially launches.</li>
        </ul>
        <p className="mt-3">
          We will not send you marketing emails, sell your address to third
          parties, or add you to unrelated mailing lists. Every notification
          email will include a clear unsubscribe link.
        </p>
      </>
    ),
  },
  {
    id: "third-party-services",
    heading: "Third-Party Services",
    content: (
      <>
        <p>
          We use the following third-party services, which may collect data
          independently under their own privacy policies:
        </p>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          <li>
            <strong className="text-white">Google Analytics</strong> — helps us
            understand how visitors interact with the site (pages visited, time
            on site, general location). Data is anonymised and aggregated.{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300"
            >
              Google Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Google AdSense</strong> — once the
            site launches, we may display ads served by Google AdSense. Google
            may use cookies to show relevant ads based on your browsing history.
            You can opt out via{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300"
            >
              Google Ad Settings
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Vercel Analytics</strong> — our
            hosting platform collects anonymised usage data to help us monitor
            performance.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies",
    content: (
      <>
        <p>
          Our site uses cookies in limited ways:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>
            <strong className="text-white">Analytics cookies</strong> set by
            Google Analytics to track anonymous page-view statistics.
          </li>
          <li>
            <strong className="text-white">Advertising cookies</strong> set by
            Google AdSense (after launch) to personalise ads.
          </li>
        </ul>
        <p className="mt-3">
          You can disable or delete cookies at any time through your browser
          settings. Disabling cookies may affect how parts of the site function.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    heading: "Data Security",
    content: (
      <p>
        We take reasonable precautions to protect your email address. It is
        stored securely and only accessible to the findmizoram.com team. We do
        not store payment information or sensitive personal data. While no
        system is completely secure, we follow standard industry practices to
        keep your data safe.
      </p>
    ),
  },
  {
    id: "your-rights",
    heading: "Your Rights",
    content: (
      <>
        <p>You have the right to:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>
            <strong className="text-white">Unsubscribe</strong> at any time by
            clicking the unsubscribe link in any email we send you.
          </li>
          <li>
            <strong className="text-white">Request deletion</strong> of your
            email address from our list by emailing us directly (see Contact
            below).
          </li>
          <li>
            <strong className="text-white">Ask what data we hold</strong> about
            you — we&rsquo;ll respond within a reasonable timeframe.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "contact",
    heading: "Contact Us",
    content: (
      <p>
        Questions about this policy or how we handle your data? Reach us at{" "}
        <a
          href="mailto:privacy@findmizoram.com"
          className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300"
        >
          privacy@findmizoram.com
        </a>
        . We aim to respond within 5 business days.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800 flex flex-col">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-3xl" />

      {/* Header */}
      <header className="relative z-10 flex justify-center px-6 pb-4 pt-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-full border border-emerald-700/50 bg-emerald-900/60 px-5 py-2.5 backdrop-blur-sm transition-colors hover:border-emerald-600/70"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-base font-semibold tracking-wide text-white">
            findmizoram.com
          </span>
        </Link>
      </header>

      {/* Content */}
      <main className="relative z-10 mx-auto w-full max-w-2xl flex-1 px-6 py-10">
        {/* Back link */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-emerald-400 transition-colors hover:text-emerald-300"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to home
        </Link>

        {/* Title block */}
        <div className="mb-10">
          <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-emerald-400">
            Effective date: April 27, 2026
          </p>
          <p className="mt-4 text-emerald-200/80">
            This policy explains what information findmizoram.com collects, how
            we use it, and what choices you have. We&rsquo;ve kept it short and
            in plain language.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map(({ id, heading, content }) => (
            <section key={id} id={id}>
              <h2 className="mb-3 text-lg font-semibold text-white">
                {heading}
              </h2>
              <div className="text-sm leading-relaxed text-emerald-200/80 sm:text-base">
                {content}
              </div>
            </section>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-emerald-800/50" />

        <p className="text-xs text-emerald-600">
          This policy may be updated from time to time. Any changes will be
          reflected on this page with a revised effective date.
        </p>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-emerald-800/50 px-6 py-6 text-center">
        <p className="text-sm text-emerald-600">
          &copy; 2026 findmizoram.com &middot; All rights reserved
        </p>
      </footer>
    </div>
  );
}
