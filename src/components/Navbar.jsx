import { useState } from "react";
import { Menu, X } from "lucide-react";


const GRAPHITE    = "#111417";
const GUNMETAL    = "#242B31";
const BRASS       = "#B78A3C";
const BRASS_HOVER = "#C99A49";
const STORM       = "#5E6870";

const links = [
  { label: "Home",      href: "#top" },
  { label: "Solutions", href: "#solutions" },
  { label: "Platform",  href: "#platform" },
  { label: "About",     href: "#about" },
  { label: "Contact",   href: "#waitlist" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "rgba(17,20,23,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#top" className="flex items-start gap-0.5">
          <img src="https://media.base44.com/images/public/6a3f1f8d6e15414384333dca/f47e4008d_norion-logo-light-transparent.png" alt="NORION" className="h-10 w-auto" />
          <sup style={{ color: BRASS, fontSize: "0.6rem", fontFamily: "'Inter', system-ui, sans-serif", lineHeight: 1, marginTop: "6px" }}>™</sup>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l.label} href={l.href}
               className="text-xs font-semibold tracking-widest uppercase transition-colors"
               style={{ color: STORM, fontFamily: "'Inter', system-ui, sans-serif" }}
               onMouseEnter={e => e.currentTarget.style.color = "#ffffff"}
               onMouseLeave={e => e.currentTarget.style.color = STORM}>
              {l.label}
            </a>
          ))}
          <a href="#waitlist"
             className="ml-2 px-5 py-2.5 text-xs font-bold tracking-wide rounded-sm transition-colors"
             style={{ backgroundColor: BRASS, color: GRAPHITE, fontFamily: "'Inter', system-ui, sans-serif" }}
             onMouseEnter={e => e.currentTarget.style.backgroundColor = BRASS_HOVER}
             onMouseLeave={e => e.currentTarget.style.backgroundColor = BRASS}>
            Join Waitlist
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" style={{ color: "#c0c8d0" }} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 pt-3 flex flex-col gap-4"
             style={{ backgroundColor: GUNMETAL, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
               className="text-xs font-semibold tracking-widest uppercase transition-colors"
               style={{ color: STORM, fontFamily: "'Inter', system-ui, sans-serif" }}>
              {l.label}
            </a>
          ))}
          <a href="#waitlist" onClick={() => setOpen(false)}
             className="px-5 py-3 text-xs font-bold tracking-wide rounded-sm text-center transition-colors"
             style={{ backgroundColor: BRASS, color: GRAPHITE, fontFamily: "'Inter', system-ui, sans-serif" }}>
            Join Waitlist
          </a>
        </div>
      )}
    </nav>
  );
}