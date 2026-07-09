import { usePageSEO } from "../hooks/usePageSEO";
import { motion } from "motion/react";
import { siteConfig } from "../config/site";

export const PrivacyPage = () => {
  usePageSEO({
    title: "Privacy Policy",
    description: "Privacy policy for takirami.dev — how we collect and handle your data.",
    path: "/privacy",
  });

  const lastUpdated = "June 28, 2026";

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-white/50 font-mono text-sm mb-12">Last updated: {lastUpdated}</p>

          <div className="prose prose-invert max-w-none space-y-8 text-white/70 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Overview</h2>
              <p>
                This privacy policy explains how {siteConfig.name} ("we", "I") collects, uses, and
                protects information when you visit {siteConfig.url} or submit the contact form.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white/90">Contact form:</strong> Name, email, subject,
                  message, and optional budget/timeline fields you voluntarily submit.
                </li>
                <li>
                  <strong className="text-white/90">Analytics:</strong> Anonymous usage data such as
                  pages visited, referrer, and device type (only if analytics is enabled).
                </li>
                <li>
                  <strong className="text-white/90">Technical data:</strong> IP address, browser type,
                  and cookies required for basic site functionality.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and project requests</li>
                <li>Improve website performance and user experience</li>
                <li>Understand how visitors use the site (analytics)</li>
              </ul>
              <p className="mt-4">We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Third-Party Services</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white/90">Web3Forms</strong> — processes contact form
                  submissions and delivers them by email.
                </li>
                <li>
                  <strong className="text-white/90">GitHub</strong> — public contribution data is
                  fetched to display activity on the homepage.
                </li>
                <li>
                  <strong className="text-white/90">Calendly</strong> — used to schedule meetings.
                  Any details you provide when booking are handled under Calendly's privacy policy.
                </li>
                <li>
                  <strong className="text-white/90">Analytics</strong> — optional privacy-friendly
                  analytics (Plausible or Google Analytics) when configured.
                </li>
                <li>
                  <strong className="text-white/90">Hosting</strong> — the site is hosted on Netlify or
                  similar providers that may log standard server data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Your Rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct, or delete your
                personal data. To exercise these rights, contact us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-cyan-400 hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Data Retention</h2>
              <p>
                Contact form submissions are retained only as long as needed to respond to your inquiry
                and manage potential projects, typically up to 24 months.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
              <p>
                Questions about this policy? Email{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-cyan-400 hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
