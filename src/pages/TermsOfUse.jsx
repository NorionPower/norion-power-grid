import { Link } from "react-router-dom";

const GRAPHITE = "#111417";
const BRASS    = "#B78A3C";
const STORM    = "#5E6870";
const OFFWHITE = "#F5F6F4";
const GUNMETAL = "#242B31";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: OFFWHITE, color: GRAPHITE, fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Minimal header */}
      <div style={{ backgroundColor: GUNMETAL, borderBottom: `3px solid ${BRASS}` }}>
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: BRASS }}>
            ← NORION Power
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <h1 className="mb-3" style={{ fontFamily: "'Manrope', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: GRAPHITE }}>
          Terms of Use
        </h1>
        <p className="text-sm mb-10" style={{ color: STORM }}>Last updated: June 2025</p>

        <div className="flex flex-col gap-8 text-sm leading-relaxed" style={{ color: STORM }}>
          <section>
            <h2 className="text-base font-semibold mb-2" style={{ color: GRAPHITE, fontFamily: "'Manrope', system-ui, sans-serif" }}>1. Acceptance of Terms</h2>
            <p>By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree, please do not use this site.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-2" style={{ color: GRAPHITE, fontFamily: "'Manrope', system-ui, sans-serif" }}>2. Site Purpose</h2>
            <p>This website is published for informational and early-interest purposes only. NORION Power is currently in product development and validation. Nothing on this site constitutes a binding offer, contract, warranty, or guarantee of product availability, specifications, pricing, or timeline.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-2" style={{ color: GRAPHITE, fontFamily: "'Manrope', system-ui, sans-serif" }}>3. No Product Claims</h2>
            <p>All product descriptions, system configurations, and capability statements are developmental and subject to change. No certifications, safety ratings, warranty terms, or performance specifications are implied or guaranteed unless explicitly stated in a signed agreement.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-2" style={{ color: GRAPHITE, fontFamily: "'Manrope', system-ui, sans-serif" }}>4. Intellectual Property</h2>
            <p>All content on this site, including text, images, logos, and branding, is the property of NORION Power. NORION and Powering Independence™ are trademarks of NORION. Unauthorized reproduction or use is prohibited.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-2" style={{ color: GRAPHITE, fontFamily: "'Manrope', system-ui, sans-serif" }}>5. Limitation of Liability</h2>
            <p>NORION Power is not liable for any damages arising from use of or reliance on information provided on this website. Use of this site is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-2" style={{ color: GRAPHITE, fontFamily: "'Manrope', system-ui, sans-serif" }}>6. Changes to Terms</h2>
            <p>These Terms of Use may be updated at any time without prior notice. Continued use of the site after changes constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-2" style={{ color: GRAPHITE, fontFamily: "'Manrope', system-ui, sans-serif" }}>7. Contact</h2>
            <p>For questions about these terms, contact NORION Power at <a href="mailto:info@norionpower.com" style={{ color: BRASS }}>info@norionpower.com</a> or call 509.606.6711.</p>
          </section>
        </div>
      </div>

      <div className="text-center py-8 text-xs" style={{ color: "#8a9299", borderTop: `1px solid #d8dce0` }}>
        © {new Date().getFullYear()} NORION Power. NORION and Powering Independence™ are trademarks of NORION.
      </div>
    </div>
  );
}