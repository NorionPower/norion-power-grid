import { useState } from "react";
import { base44 } from "@/api/base44Client";
import { CheckCircle, Loader2 } from "lucide-react";

const GRAPHITE    = "#111417";
const GUNMETAL    = "#242B31";
const BRASS       = "#B78A3C";
const BRASS_HOVER = "#C99A49";
const ALUMINUM    = "#D8DCE0";
const STORM       = "#5E6870";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware",
  "Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky",
  "Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi",
  "Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico",
  "New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania",
  "Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
  "Virginia","Washington","West Virginia","Wisconsin","Wyoming"
];

const INTEREST_TYPES = [
  "Homeowner","Farm / Ranch","Cabin / Off-Grid","Business",
  "Electrical Contractor","Dealer / Installer","Supplier / Partner"
];

const inputStyle = {
  width: "100%",
  background: "#F5F6F4",
  border: `1px solid ${ALUMINUM}`,
  borderRadius: "2px",
  padding: "10px 12px",
  fontSize: "0.875rem",
  color: GRAPHITE,
  outline: "none",
  fontFamily: "'Inter', system-ui, sans-serif",
};

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label style={{ fontSize: "0.625rem", color: STORM, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 600 }}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function WaitlistForm({ formType = "waitlist", buttonLabel = "Submit" }) {
  const [form, setForm]       = useState({ name: "", email: "", phone: "", state: "", interest_type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState("");
  const [honeypot, setHoneypot] = useState("");
  const loadTime = useState(() => Date.now())[0];

  // Strip HTML tags to prevent script injection
  const sanitize = (val) => val.replace(/<[^>]*>/g, "").slice(0, 1000);
  const handle = (e) => setForm({ ...form, [e.target.name]: sanitize(e.target.value) });

  const submit = async (e) => {
    e.preventDefault();
    // Honeypot: bots fill hidden fields, humans don't
    if (honeypot) return;
    // Time check: bots submit instantly, humans take at least 3 seconds
    if (Date.now() - loadTime < 3000) { setError("Please take a moment to fill out the form."); return; }
    if (!form.name || !form.email) { setError("Name and email are required."); return; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) { setError("Please enter a valid email address."); return; }
    setLoading(true);
    setError("");
    try {
      await base44.entities.WaitlistEntry.create({ ...form, form_type: formType });
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle className="w-10 h-10" style={{ color: BRASS }} />
        <h3 style={{ fontFamily: "'Manrope', system-ui, sans-serif", fontWeight: 700, color: GRAPHITE, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          You're on the list
        </h3>
        <p className="text-sm max-w-xs" style={{ color: STORM }}>
          We'll be in touch as NORION moves toward early availability.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      {/* Honeypot — hidden from humans, bots fill it */}
      <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={e => setHoneypot(e.target.value)} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name *">
          <input name="name" value={form.name} onChange={handle} required placeholder="Your name" maxLength={100} style={inputStyle} />
        </Field>
        <Field label="Email *">
          <input name="email" type="email" value={form.email} onChange={handle} required placeholder="your@email.com" maxLength={200} style={inputStyle} />
        </Field>
        <Field label="Phone">
          <input name="phone" value={form.phone} onChange={handle} placeholder="(509) 000-0000" maxLength={20} style={inputStyle} />
        </Field>
        <Field label="State">
          <select name="state" value={form.state} onChange={handle} style={inputStyle}>
            <option value="">Select state</option>
            {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Interest Type">
        <select name="interest_type" value={form.interest_type} onChange={handle} style={inputStyle}>
          <option value="">Select your situation</option>
          {INTEREST_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </Field>

      <Field label="Message">
        <textarea name="message" value={form.message} onChange={handle} rows={3}
          placeholder="Tell us about your property or project..."
          maxLength={1000} style={{ ...inputStyle, resize: "none" }} />
      </Field>

      {error && <p className="text-sm" style={{ color: "#d94f4f" }}>{error}</p>}

      <button type="submit" disabled={loading}
        className="mt-1 px-6 py-3 text-sm font-bold tracking-wide rounded-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
        style={{ backgroundColor: BRASS, color: GRAPHITE, fontFamily: "'Inter', system-ui, sans-serif" }}
        onMouseEnter={e => !loading && (e.currentTarget.style.backgroundColor = BRASS_HOVER)}
        onMouseLeave={e => !loading && (e.currentTarget.style.backgroundColor = BRASS)}>
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {buttonLabel}
      </button>
    </form>
  );
}