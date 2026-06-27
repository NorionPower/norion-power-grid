import { Link } from "react-router-dom";

const GRAPHITE = "#111417";
const BRASS    = "#B78A3C";
const STORM    = "#5E6870";
const OFFWHITE = "#F5F6F4";
const GUNMETAL = "#242B31";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-sm mb-10" style={{ color: STORM }}>Last updated: June 2025</p>

        <div className="flex flex-col gap-8 text-sm leading-relaxed" style={{ color: STORM }}>
          <section>
            <h2 className="text-base font-semibold mb-2" style={{ color: GRAPHITE, fontFamily: "'Manrope', system-ui, sans-serif" }}>1. Information We Collect</h2>
            <p>When you submit the waitlist or contact form on this site, we collect your name, email address, phone number (optional), state, interest type, and any message you provide. We do not collect payment information, social security numbers, or sensitive personal data.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-2" style={{ color: GRAPHITE, fontFamily: "'Manrope', system-ui, sans-serif" }}>2. How We Use Your Information</h2>
            <p>Information collected through our waitlist and contact forms is used solely to communicate with you about NORION product development, availability updates, and partnership opportunities. We do not sell, rent, or share your information with third-party marketers.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-2" style={{ color: GRAPHITE, fontFamily: "'Manrope', system-ui, sans-serif" }}>3. Data Storage</h2>
            <p>Form submissions are stored securely in our platform database. Access is restricted to authorized NORION personnel only. We retain your information only as long as necessary to fulfill the purpose for which it was collected.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-2" style={{ color: GRAPHITE, fontFamily: "'Manrope', system-ui, sans-serif" }}>4. Cookies and Tracking</h2>
            <p>This website does not currently use advertising pixels or third-party tracking cookies. Basic analytics may be used in the future to understand site traffic. No personally identifiable information is tied to analytics data.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-2" style={{ color: GRAPHITE, fontFamily: "'Manrope', system-ui, sans-serif" }}>5. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at <a href="mailto:info@norionpower.com" style={{ color: BRASS }}>info@norionpower.com</a>. We will respond within 30 days.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-2" style={{ color: GRAPHITE, fontFamily: "'Manrope', system-ui, sans-serif" }}>6. Contact</h2>
            <p>For privacy-related questions, contact NORION Power at <a href="mailto:info@norionpower.com" style={{ color: BRASS }}>info@norionpower.com</a> or call 509.606.6711.</p>
          </section>
        </div>
      </div>

      <div className="text-center py-8 text-xs" style={{ color: "#8a9299", borderTop: `1px solid #d8dce0` }}>
        © {new Date().getFullYear()} NORION Power. NORION and Powering Independence™ are trademarks of NORION.
      </div>
    </div>
  );
}