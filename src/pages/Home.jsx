import Navbar from "@/components/Navbar";
import { Shield, Wrench, TrendingUp, Zap, Battery, Server, Home as HomeIcon, Tractor, TreePine, Building2, HardHat, Handshake } from "lucide-react";

const LANDSCAPE    = "https://media.base44.com/images/public/6a3f1f8d6e15414384333dca/dfe93afaa_79c24bbe-8bb9-4616-bf61-793c77a10af5.png";
const INVERTER_IMG = "https://media.base44.com/images/public/6a3f1f8d6e15414384333dca/3a1cee1dc_ChatGPTImageJun26202607_08_10AM2.png";
const WALL_BATTERY = "https://media.base44.com/images/public/6a3f1f8d6e15414384333dca/cfe79d2ea_ChatGPTImageJun26202607_08_10AM3.png";
const RACK_BATTERY = "https://media.base44.com/images/public/6a3f1f8d6e15414384333dca/c39c1b69b_876df5e5-455e-46e6-9c3d-5bb1858651fb.png";

const pillars = [
  "Reliable Backup Power",
  "Built for Remote Properties",
  "Installer-Focused Systems",
  "Developed for Real-World Conditions",
];

const audience = [
  { icon: HomeIcon,  label: "Rural Homes" },
  { icon: Tractor,   label: "Farms & Ranches" },
  { icon: TreePine,  label: "Remote Cabins" },
  { icon: Building2, label: "Small Businesses" },
  { icon: HardHat,   label: "Electrical Contractors" },
  { icon: Handshake, label: "Dealer / Installer Partners" },
];

const services = [
  { icon: Zap,        title: "Energy Storage System Design",    desc: "System planning for homes, farms, cabins, and small businesses, including battery sizing, inverter selection, essential loads, solar input, and generator backup strategy." },
  { icon: Battery,    title: "Battery Storage Solutions",       desc: "Guidance on wall-mounted and rack-based battery storage options, including higher-capacity configurations and emerging sodium-ion pathways being evaluated for stationary energy storage." },
  { icon: Server,     title: "Hybrid Inverter Integration",     desc: "Integration planning for hybrid inverter systems that connect solar, battery storage, grid power, and generator support into one coordinated backup-power system." },
  { icon: Shield,     title: "Whole-Home Backup Planning",      desc: "Practical backup-power design for whole-home and whole-property applications, including evaluation of 200A pass-through inverter architectures for simpler, more complete backup solutions." },
  { icon: Wrench,     title: "Dealer & Installer Support",      desc: "Support for qualified electrical contractors, solar installers, and dealer partners through product guidance, system planning, platform updates, and future partnership development." },
  { icon: TrendingUp, title: "Testing & Validation",            desc: "Ongoing evaluation of battery platforms, inverter systems, communication compatibility, cold-weather suitability, and long-term serviceability before broader rollout." },
];

const valueProps = [
  { num: "01", label: "Remote Ready",   desc: "Designed for homes, farms, cabins, and businesses where dependable power matters." },
  { num: "02", label: "Serviceable",    desc: "Built around practical installation, maintenance access, and electrical contractor support." },
  { num: "03", label: "Scalable",       desc: "Designed to support different property sizes and backup-power needs." },
  { num: "04", label: "Future-Focused", desc: "Developed around emerging energy storage technology and long-term grid resilience." },
];

const products = [
  { num: "01", title: "Hybrid Inverter Systems", img: INVERTER_IMG, alt: "Hybrid Inverter System",
    desc: "Inverter platforms designed to coordinate solar, battery storage, grid power, and generator-supported backup strategies. Built for real field environments and practical electrical installation." },
  { num: "02", title: "Wall Battery Systems", img: WALL_BATTERY, alt: "Wall Battery System",
    desc: "Clean wall-mounted battery storage options for residential, farm, cabin, and small commercial applications. Designed for serviceability and long-term reliability." },
  { num: "03", title: "Rack Battery Systems", img: RACK_BATTERY, alt: "Rack Battery System",
    desc: "Rack-based storage configurations for larger backup-power needs and serviceable equipment-room layouts. Scalable to match the property and load requirements." },
];

// ── Reusable style tokens
const BRASS        = "#B78A3C";
const BRASS_HOVER  = "#C99A49";
const GRAPHITE     = "#111417";
const GUNMETAL     = "#242B31";
const OFFWHITE     = "#F5F6F4";
const ALUMINUM     = "#D8DCE0";
const STORM        = "#5E6870";
const DEEP_BLUE    = "#123247";

export default function Home() {
  return (
    <div id="top" className="min-h-screen" style={{ backgroundColor: OFFWHITE, color: GRAPHITE, fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative flex items-end" style={{ minHeight: 700 }}>
        <div className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${LANDSCAPE})`, backgroundPosition: "center right" }} />
        <div className="absolute inset-0" style={{ background: "rgba(17,20,23,0.42)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(17,20,23,0.72) 0%, rgba(17,20,23,0.28) 55%, transparent 100%)" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20 pt-36">
          <p className="font-mono text-xs tracking-[0.28em] uppercase mb-5" style={{ color: BRASS }}>Energy Storage Systems</p>
          <h1 style={{ fontFamily: "'Manrope', system-ui, sans-serif", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.0, color: "#ffffff", fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }} className="mb-5 max-w-2xl">
            Powering<br />Independence.
          </h1>
          <p className="text-lg max-w-xl leading-relaxed mb-10" style={{ color: "#c8cdd2" }}>
            For people tired of rising utility bills, unstable service, and having no control over the power they depend on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:info@norionpower.com?subject=Waitlist%20Request"
               className="inline-block px-7 py-3.5 text-sm font-bold tracking-wide rounded-sm transition-colors"
               style={{ backgroundColor: BRASS, color: GRAPHITE }}
               onMouseEnter={e => e.currentTarget.style.backgroundColor = BRASS_HOVER}
               onMouseLeave={e => e.currentTarget.style.backgroundColor = BRASS}>
              Join the Waitlist
            </a>
            <a href="#installer"
               className="inline-block px-7 py-3.5 text-sm font-bold tracking-wide rounded-sm transition-colors"
               style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.45)", color: "#ffffff" }}>
              Installer / Dealer Interest
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section style={{ backgroundColor: GUNMETAL, borderTop: `3px solid ${BRASS}` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4"
             style={{ borderBottom: `1px solid rgba(255,255,255,0.07)` }}>
          {pillars.map((p) => (
            <div key={p} className="py-5 px-6 flex items-center gap-3"
                 style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex-shrink-0 w-1 h-5 rounded-full" style={{ backgroundColor: BRASS }} />
              <span className="text-xs font-semibold tracking-wider uppercase leading-snug" style={{ color: ALUMINUM }}>{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── AUDIENCE ── */}
      <section id="about" className="py-24 px-6 md:px-12" style={{ backgroundColor: OFFWHITE }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="font-mono text-xs tracking-[0.25em] uppercase mb-4" style={{ color: BRASS }}>Who We Serve</p>
            <h2 className="mb-5" style={{ fontFamily: "'Manrope', system-ui, sans-serif", fontWeight: 700, letterSpacing: "-0.025em", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: GRAPHITE }}>
              Power Independence for Everyone.
            </h2>
            <p className="leading-relaxed" style={{ color: STORM }}>
              NORION provides energy storage planning, inverter integration, dealer support, and product guidance for customers and professionals looking for practical backup power, cold-weather resilience, and long-term energy independence.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {audience.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 p-5 rounded-sm text-center transition-colors"
                   style={{ background: "#ffffff", border: `1px solid ${ALUMINUM}` }}>
                <Icon className="w-6 h-6" strokeWidth={1.5} style={{ color: BRASS }} />
                <span className="text-xs font-semibold tracking-wide uppercase leading-snug" style={{ color: GUNMETAL }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="solutions" className="py-24 px-6 md:px-12" style={{ backgroundColor: GUNMETAL }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="font-mono text-xs tracking-[0.25em] uppercase mb-4" style={{ color: BRASS }}>Capabilities</p>
            <h2 className="mb-5" style={{ fontFamily: "'Manrope', system-ui, sans-serif", fontWeight: 700, letterSpacing: "-0.025em", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#ffffff" }}>
              Our Services
            </h2>
            <p className="leading-relaxed" style={{ color: "#8a9299" }}>
              NORION develops energy storage solutions designed for practical backup power, remote resilience, and long-term independence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-sm flex flex-col gap-4"
                   style={{ background: "rgba(17,20,23,0.5)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-9 h-9 rounded-sm flex items-center justify-center"
                     style={{ background: "rgba(17,20,23,0.6)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: BRASS }} />
                </div>
                <h3 className="text-sm font-semibold tracking-wide" style={{ fontFamily: "'Manrope', system-ui, sans-serif", color: "#ffffff" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6e7a82" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM ── */}
      <section id="platform" className="py-24 px-6 md:px-12" style={{ backgroundColor: OFFWHITE }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="font-mono text-xs tracking-[0.25em] uppercase mb-4" style={{ color: BRASS }}>Products</p>
            <h2 style={{ fontFamily: "'Manrope', system-ui, sans-serif", fontWeight: 700, letterSpacing: "-0.025em", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: GRAPHITE }}>
              A Practical Energy Storage Platform
            </h2>
          </div>

          <div className="flex flex-col gap-20">
            {products.map(({ num, title, img, alt, desc }, i) => (
              <div key={num} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`rounded-sm overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}
                     style={{ border: `1px solid ${ALUMINUM}`, background: "#ffffff" }}>
                  <img src={img} alt={alt} className="w-full object-cover" />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="font-mono text-xs tracking-[0.2em] uppercase mb-3" style={{ color: BRASS }}>{num}</p>
                  <h3 className="mb-4" style={{ fontFamily: "'Manrope', system-ui, sans-serif", fontWeight: 700, letterSpacing: "-0.02em", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: GRAPHITE }}>{title}</h3>
                  <div className="h-px mb-6 w-10" style={{ backgroundColor: BRASS }} />
                  <p className="leading-relaxed" style={{ color: STORM }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NORION ── */}
      <section style={{ backgroundColor: DEEP_BLUE }} className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="font-mono text-xs tracking-[0.25em] uppercase mb-4" style={{ color: BRASS }}>Why NORION</p>
            <h2 style={{ fontFamily: "'Manrope', system-ui, sans-serif", fontWeight: 700, letterSpacing: "-0.025em", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#ffffff" }}>
              Built for Independence
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valueProps.map(({ num, label, desc }) => (
              <div key={label} className="p-6 rounded-sm"
                   style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="font-mono text-3xl font-bold mb-4" style={{ color: BRASS }}>{num}</p>
                <h3 className="text-sm font-bold tracking-widest uppercase mb-3" style={{ fontFamily: "'Manrope', system-ui, sans-serif", color: "#ffffff" }}>{label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8a9fac" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVELOPMENT STATUS ── */}
      <section className="py-20 px-6 md:px-12" style={{ backgroundColor: OFFWHITE }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-sm mb-8"
               style={{ border: `1px solid ${BRASS}40` }}>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: BRASS }} />
            <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: BRASS }}>In Development</span>
          </div>
          <h2 className="mb-6" style={{ fontFamily: "'Manrope', system-ui, sans-serif", fontWeight: 700, letterSpacing: "-0.025em", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: GRAPHITE }}>
            Currently in Development and Validation
          </h2>
          <p className="leading-relaxed mb-4 max-w-2xl mx-auto" style={{ color: STORM }}>
            NORION is currently evaluating inverter platforms, battery suppliers, communication protocols, certification pathways, installation requirements, and long-term support structures before commercial rollout.
          </p>
          <p className="text-sm mb-10" style={{ color: "#8a9299" }}>
            This page is for early interest, installer conversations, supplier discussions, and development updates.
          </p>
          <a href="#waitlist"
             className="inline-block px-7 py-3.5 text-sm font-bold tracking-wide rounded-sm transition-colors"
             style={{ backgroundColor: GRAPHITE, color: "#ffffff" }}
             onMouseEnter={e => e.currentTarget.style.backgroundColor = GUNMETAL}
             onMouseLeave={e => e.currentTarget.style.backgroundColor = GRAPHITE}>
            Follow Engineering Updates
          </a>
        </div>
      </section>

      {/* ── WAITLIST ── */}
      <section id="waitlist" className="py-24 px-6 md:px-12" style={{ backgroundColor: GUNMETAL }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase mb-4" style={{ color: BRASS }}>Early Access</p>
            <h2 className="mb-5" style={{ fontFamily: "'Manrope', system-ui, sans-serif", fontWeight: 700, letterSpacing: "-0.025em", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#ffffff" }}>
              Join the NORION Waitlist
            </h2>
            <div className="h-px w-10 mb-6" style={{ backgroundColor: BRASS }} />
            <p className="leading-relaxed" style={{ color: "#8a9299" }}>
              Be notified as NORION moves through product testing, supplier validation, installer development, and early availability.
            </p>
          </div>
          <div className="rounded-sm p-8 flex flex-col items-center justify-center text-center gap-4" style={{ backgroundColor: "#ffffff", border: `1px solid ${ALUMINUM}` }}>
            <p className="text-sm" style={{ color: STORM }}>Send us an email to join the waitlist.</p>
            <a href="mailto:info@norionpower.com?subject=Waitlist%20Request"
               className="inline-block px-7 py-3.5 text-sm font-bold tracking-wide rounded-sm transition-colors"
               style={{ backgroundColor: BRASS, color: GRAPHITE }}
               onMouseEnter={e => e.currentTarget.style.backgroundColor = BRASS_HOVER}
               onMouseLeave={e => e.currentTarget.style.backgroundColor = BRASS}>
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* ── INSTALLER ── */}
      <section id="installer" className="py-24 px-6 md:px-12" style={{ backgroundColor: OFFWHITE, borderTop: `1px solid ${ALUMINUM}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase mb-4" style={{ color: BRASS }}>Trade Partners</p>
            <h2 className="mb-5" style={{ fontFamily: "'Manrope', system-ui, sans-serif", fontWeight: 700, letterSpacing: "-0.025em", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: GRAPHITE }}>
              Installer & Dealer Interest
            </h2>
            <div className="h-px w-10 mb-6" style={{ backgroundColor: BRASS }} />
            <p className="leading-relaxed mb-8" style={{ color: STORM }}>
              NORION is building toward a qualified installer and dealer network. Electrical contractors and solar professionals interested in future NORION systems can request early partnership information.
            </p>
            <a href="#waitlist"
               className="inline-block px-7 py-3.5 text-sm font-bold tracking-wide rounded-sm transition-colors"
               style={{ backgroundColor: GRAPHITE, color: "#ffffff" }}
               onMouseEnter={e => e.currentTarget.style.backgroundColor = GUNMETAL}
               onMouseLeave={e => e.currentTarget.style.backgroundColor = GRAPHITE}>
              Apply for Dealer Updates
            </a>
          </div>
          <div className="flex flex-col gap-3">
            {["Qualified electrical contractors","Licensed solar installers","Rural and agricultural specialists","Commercial electrical professionals"].map(item => (
              <div key={item} className="flex items-center gap-4 p-4 rounded-sm"
                   style={{ background: "#ffffff", border: `1px solid ${ALUMINUM}` }}>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: BRASS }} />
                <span className="text-sm" style={{ color: GUNMETAL }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-14 px-6 md:px-12" style={{ backgroundColor: GRAPHITE, borderTop: `3px solid ${BRASS}` }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: BRASS }}>NORION<sup style={{ fontSize: "0.55em", marginLeft: "2px" }}>™</sup> Power</span>
            <p className="text-sm tracking-wider uppercase font-mono" style={{ color: "#3a4048" }}>Powering Independence.</p>
            <div className="mt-2 flex flex-col gap-1.5">
              <a href="mailto:info@norionpower.com" className="text-sm transition-colors" style={{ color: STORM }}
                 onMouseEnter={e => e.currentTarget.style.color = BRASS}
                 onMouseLeave={e => e.currentTarget.style.color = STORM}>
                info@norionpower.com
              </a>
              <a href="tel:5096066711" className="text-sm transition-colors" style={{ color: STORM }}
                 onMouseEnter={e => e.currentTarget.style.color = BRASS}
                 onMouseLeave={e => e.currentTarget.style.color = STORM}>
                509.606.6711
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: "Home", href: "#top" }, { label: "Solutions", href: "#solutions" },
              { label: "Platform", href: "#platform" }, { label: "About", href: "#about" },
              { label: "Contact", href: "#waitlist" }, { label: "Waitlist", href: "#waitlist" }
            ].map(l => (
              <a key={l.label} href={l.href} className="text-sm tracking-wide uppercase transition-colors" style={{ color: "#3a4048" }}
                 onMouseEnter={e => e.currentTarget.style.color = BRASS}
                 onMouseLeave={e => e.currentTarget.style.color = "#3a4048"}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ borderTop: "1px solid #1e2327" }}>
          <p className="text-xs" style={{ color: "#2a3038" }}>
            © {new Date().getFullYear()} NORION Power. All rights reserved. NORION and Powering Independence™ are trademarks of NORION.
          </p>
          <div className="flex gap-5">
            <a href="/privacy-policy" className="text-xs transition-colors" style={{ color: "#2a3038" }}
               onMouseEnter={e => e.currentTarget.style.color = BRASS}
               onMouseLeave={e => e.currentTarget.style.color = "#2a3038"}>Privacy Policy</a>
            <a href="/terms-of-use" className="text-xs transition-colors" style={{ color: "#2a3038" }}
               onMouseEnter={e => e.currentTarget.style.color = BRASS}
               onMouseLeave={e => e.currentTarget.style.color = "#2a3038"}>Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}