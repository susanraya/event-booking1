// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Select } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, ArrowLeft, ArrowRight, AlertCircle, CheckCircle } = Icons;

const PRODUCT = "event bookingf";

const TABS = [
  { key: "signin", label: "Sign in", wf: "i-1-0-0" },
  { key: "create", label: "Create account", wf: "i-1-0-1" },
  { key: "reset", label: "Reset password", wf: "i-1-0-2" },
];

const REGISTERED_EMAILS = [
  "meera.iyer@gmail.com",
  "arjun.nair@outlook.com",
  "raag.collective@gmail.com",
];

const DEMO_ACCOUNT = {
  email: "meera.iyer@gmail.com",
  password: "Rangoli2026",
  display_name: "Meera Iyer",
};

const CONSENT_PURPOSE = "account creation, ticket issue and order management";
const CONSENT_STAMP = "5 November 2026, 14:32 IST";
const RESET_EXPIRY = "60 minutes";

export default function Screen() {
  const navigate = useNavigate();
  const [tab, setTab] = React.useState("create");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");
  const [accountType, setAccountType] = React.useState("buyer");
  const [consent, setConsent] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [formError, setFormError] = React.useState(null);
  const [pending, setPending] = React.useState(null);
  const [status, setStatus] = React.useState(null);
  const [policyOpen, setPolicyOpen] = React.useState(false);

  const timers = React.useRef([]);
  const tabRefs = React.useRef([]);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const later = (fn, ms) => { timers.current.push(setTimeout(fn, ms)); };

  const frame = { border: `1px solid ${brand.accentColor}`, outline: `1px solid ${brand.primaryColor}`, outlineOffset: 3, borderRadius: brand.radius };
  const caps = { fontFamily: brand.fontHeading, textTransform: "uppercase", letterSpacing: "0.3em" };
  const microLabel = { color: brand.neutralColor };
  const fieldStyle = (bad) => ({ border: `1px solid ${bad ? brand.primaryColor : brand.accentColor}`, borderRadius: brand.radius, color: brand.primaryColor });
  const primaryBtn = { ...caps, backgroundColor: brand.primaryColor, color: brand.accentColor, borderRadius: brand.radius };
  const ghostBtn = { ...caps, backgroundColor: "transparent", color: brand.primaryColor, border: `1px solid ${brand.primaryColor}`, borderRadius: brand.radius };

  const rule = (
    <div aria-hidden className="flex items-center gap-3">
      <span className="h-px flex-1" style={{ backgroundColor: brand.accentColor }} />
      <span className="text-xs" style={{ color: brand.accentColor }}>◆</span>
      <span className="h-px flex-1" style={{ backgroundColor: brand.accentColor }} />
    </div>
  );

  const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
  const strongPassword = (v) => v.length >= 8 && /\d/.test(v);
  const isPending = pending !== null;

  const switchTab = (key) => {
    setTab(key);
    setErrors({});
    setFormError(null);
    if (status === "reset-sent") setStatus(null);
  };

  const onTabKey = (e, i) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length;
    switchTab(TABS[next].key);
    const el = tabRefs.current[next];
    if (el) el.focus();
  };

  const doSignIn = () => {
    const next = {};
    if (!email.trim()) next.email = "Enter the email you booked with.";
    if (!password) next.password = "Enter your password.";
    setErrors(next);
    setFormError(null);
    if (Object.keys(next).length) return;
    setPending("signin");
    later(() => {
      setPending(null);
      if (email.trim().toLowerCase() === DEMO_ACCOUNT.email && password === DEMO_ACCOUNT.password) {
        setStatus("signed-in");
        navigate("events");
      } else {
        setFormError({ kind: "generic", text: "Those details don’t match an account. Check the email and password and try again." });
      }
    }, 600);
  };

  const doCreate = () => {
    const next = {};
    if (!validEmail(email)) next.email = "Enter an address we can send tickets to, like meera.iyer@gmail.com.";
    if (!strongPassword(password)) next.password = "Use at least 8 characters including one number.";
    if (!displayName.trim()) next.displayName = accountType === "organizer"
      ? "Enter the organizer name buyers will see on your events."
      : "Enter the name to print on your tickets.";
    if (!consent) next.consent = "No account is created until you consent to this processing.";
    setErrors(next);
    setFormError(null);
    if (Object.keys(next).length) return;
    setPending("create");
    later(() => {
      setPending(null);
      if (REGISTERED_EMAILS.indexOf(email.trim().toLowerCase()) !== -1) {
        setFormError({ kind: "duplicate", text: "That email is already in use." });
      } else {
        setStatus("created");
        navigate("events");
      }
    }, 600);
  };

  const doReset = () => {
    if (!validEmail(email)) {
      setErrors({ email: "Enter the email on your account so we know where to send the link." });
      setFormError(null);
      return;
    }
    setErrors({});
    setFormError(null);
    setTab("reset");
    setPending("reset");
    later(() => { setPending(null); setStatus("reset-sent"); }, 600);
  };

  const doGoogle = () => {
    if (tab === "create" && !consent) {
      setFormError(null);
      setErrors((p) => ({ ...p, consent: "Continuing with Google creates an account too — consent is needed first." }));
      return;
    }
    setErrors({});
    setFormError(null);
    setPending("google");
    later(() => {
      setPending(null);
      setStatus(tab === "create" ? "created" : "signed-in");
      navigate("events");
    }, 700);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (tab === "signin") doSignIn();
    else if (tab === "create") doCreate();
    else doReset();
  };

  const signInClick = () => {
    if (tab !== "signin") {
      switchTab("signin");
      later(() => {
        const el = email.trim() ? passwordRef.current : emailRef.current;
        if (el) el.focus();
      }, 0);
      return;
    }
    doSignIn();
  };

  const createClick = () => {
    if (tab !== "create") {
      switchTab("create");
      later(() => { if (emailRef.current && !email.trim()) emailRef.current.focus(); }, 0);
      return;
    }
    doCreate();
  };

  const resetLinkClick = () => {
    if (tab !== "reset") {
      switchTab("reset");
      later(() => { if (emailRef.current) emailRef.current.focus(); }, 0);
      return;
    }
    doReset();
  };

  const errorNote = (id, text) => (
    <p id={id} className="flex items-start gap-2 text-[11px] leading-relaxed" style={{ color: brand.primaryColor }}>
      <AlertCircle className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden />
      <span>{text}</span>
    </p>
  );

  const styleTag = (
    <style>{`
      .ga-focus:focus-visible { outline: 2px solid ${brand.primaryColor}; outline-offset: 2px; }
      .ga-enter { animation: gaEnter 240ms ease-out both; }
      .ga-alert { animation: gaAlert 200ms ease-out both; }
      @keyframes gaEnter { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
      @keyframes gaAlert { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
      @media (prefers-reduced-motion: reduce) { .ga-enter, .ga-alert { animation: none; } }
    `}</style>
  );

  const heading = tab === "signin" ? "Sign in" : tab === "create" ? "Create account" : "Reset password";
  const showRegistrationBlocks = tab === "create";
  const resetMode = tab === "reset";

  if (status === "signed-in" || status === "created") {
    return (
      <div className="flex min-h-screen items-center justify-center px-6 py-12" style={{ color: brand.primaryColor, fontFamily: brand.fontBody, backgroundColor: brand.backgroundColor, fontVariantNumeric: "tabular-nums" }}>
        {styleTag}
        <main className="w-full max-w-xl p-8 text-center sm:p-10" style={frame}>
          <p aria-hidden className="text-sm tracking-[0.5em]" style={{ color: brand.accentColor }}>◆ ◆ ◆</p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.35em]" style={{ ...microLabel, fontFamily: brand.fontHeading }}>{PRODUCT}</p>
          <h1 className="mt-3 text-xl leading-relaxed sm:text-2xl" style={caps}>Sign in or create your account</h1>
          <div className="mt-6">{rule}</div>
          <div className="ga-enter mt-8">
            <p className="text-lg" style={caps}>Admitted</p>
            {status === "created" ? (
              <>
                <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed">
                  Your {accountType === "organizer" ? "organizer" : "buyer"} account is open, {displayName.trim() || DEMO_ACCOUNT.display_name}. A confirmation is on its way to {email.trim()}.
                </p>
                <p className="mx-auto mt-3 max-w-sm text-[11px] leading-relaxed" style={microLabel}>
                  Consent recorded {CONSENT_STAMP} for {CONSENT_PURPOSE}. You can withdraw it at any time from your privacy settings.
                </p>
              </>
            ) : (
              <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed">
                Welcome back, {DEMO_ACCOUNT.display_name}. Your tickets and orders are waiting in your account.
              </p>
            )}
            <div className="mx-auto mt-8 max-w-xs">
              <button
                type="button"
                onClick={() => navigate(accountType === "organizer" && status === "created" ? "organizer" : "events")}
                className="ga-focus h-12 w-full text-[11px]"
                style={primaryBtn}
              >
                {accountType === "organizer" && status === "created" ? "Go to my dashboard" : "Browse events"}
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12" style={{ color: brand.primaryColor, fontFamily: brand.fontBody, backgroundColor: brand.backgroundColor, fontVariantNumeric: "tabular-nums" }}>
      {styleTag}
      <main className="w-full max-w-xl p-8 sm:p-10" style={frame}>
        <header className="text-center">
          <p aria-hidden className="text-sm tracking-[0.5em]" style={{ color: brand.accentColor }}>◆ ◆ ◆</p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.35em]" style={{ ...microLabel, fontFamily: brand.fontHeading }}>{PRODUCT}</p>
          <h1 data-wf="b-0-0" className="mt-3 text-xl leading-relaxed sm:text-2xl" style={caps}>Sign in or create your account</h1>
          <div className="mt-6">{rule}</div>
        </header>

        <div data-wf="b-1-0" role="tablist" aria-label="Account actions" className="mt-7 grid grid-cols-3">
          {TABS.map((t, i) => {
            const active = t.key === tab;
            return (
              <button
                key={t.key}
                data-wf={t.wf}
                ref={(el) => { tabRefs.current[i] = el; }}
                role="tab"
                id={`ga-tab-${t.key}`}
                aria-selected={active}
                aria-controls="ga-panel"
                tabIndex={active ? 0 : -1}
                onKeyDown={(e) => onTabKey(e, i)}
                onClick={() => switchTab(t.key)}
                className="ga-focus h-11 px-2 text-[10px] transition-colors"
                style={{
                  ...caps,
                  letterSpacing: "0.18em",
                  backgroundColor: active ? brand.primaryColor : "transparent",
                  color: active ? brand.accentColor : brand.neutralColor,
                  border: `1px solid ${active ? brand.primaryColor : brand.accentColor}`,
                  borderRadius: brand.radius,
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <form
          data-wf="b-2-0"
          id="ga-panel"
          role="tabpanel"
          aria-labelledby={`ga-tab-${tab}`}
          onSubmit={onSubmit}
          className="ga-enter mt-8 text-left"
          key={tab}
        >
          <h2 className="text-center text-sm" style={caps}>{heading}</h2>
          <p className="mt-3 text-center text-[11px] leading-relaxed" style={microLabel}>
            {tab === "signin"
              ? "Your tickets, orders and QR codes live in your account."
              : tab === "create"
              ? "One account books tickets; an organizer account also publishes events."
              : "We’ll email a single-use link that expires in " + RESET_EXPIRY + "."}
          </p>

          <div className="mt-6 space-y-5">
            <div className="space-y-2">
              <label htmlFor="ga-email" className="block text-[10px] uppercase tracking-[0.25em]" style={microLabel}>Email</label>
              <input
                data-wf="i-2-0-0"
                id="ga-email"
                ref={emailRef}
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "ga-email-err" : undefined}
                className="ga-focus h-11 w-full bg-transparent px-3 text-center text-sm outline-none"
                style={fieldStyle(!!errors.email)}
              />
              {errors.email ? errorNote("ga-email-err", errors.email) : null}
            </div>

            {!resetMode ? (
              <div className="space-y-2">
                <label htmlFor="ga-password" className="block text-[10px] uppercase tracking-[0.25em]" style={microLabel}>
                  {tab === "create" ? "Password (min. 8 characters, 1 number)" : "Password"}
                </label>
                <input
                  data-wf="i-2-0-1"
                  id="ga-password"
                  ref={passwordRef}
                  type="password"
                  autoComplete={tab === "create" ? "new-password" : "current-password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-invalid={errors.password ? true : undefined}
                  aria-describedby={errors.password ? "ga-password-err" : tab === "signin" ? "ga-password-hint" : undefined}
                  className="ga-focus h-11 w-full bg-transparent px-3 text-center text-sm outline-none"
                  style={fieldStyle(!!errors.password)}
                />
                {errors.password ? errorNote("ga-password-err", errors.password) : null}
                {tab === "signin" && !errors.password ? (
                  <p id="ga-password-hint" className="text-[11px] leading-relaxed" style={microLabel}>
                    Demo account: meera.iyer@gmail.com / Rangoli2026
                  </p>
                ) : null}
              </div>
            ) : null}

            {tab === "create" ? (
              <>
                <div className="space-y-2">
                  <label htmlFor="ga-display-name" className="block text-[10px] uppercase tracking-[0.25em]" style={microLabel}>Display name</label>
                  <input
                    data-wf="i-2-0-2"
                    id="ga-display-name"
                    type="text"
                    autoComplete="name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    aria-invalid={errors.displayName ? true : undefined}
                    aria-describedby={errors.displayName ? "ga-display-name-err" : "ga-display-name-hint"}
                    className="ga-focus h-11 w-full bg-transparent px-3 text-center text-sm outline-none"
                    style={fieldStyle(!!errors.displayName)}
                  />
                  {errors.displayName
                    ? errorNote("ga-display-name-err", errors.displayName)
                    : (
                      <p id="ga-display-name-hint" className="text-[11px] leading-relaxed" style={microLabel}>
                        {accountType === "organizer" ? "Shown on every event you publish." : "Printed on each QR ticket."}
                      </p>
                    )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="ga-account-type" className="block text-[10px] uppercase tracking-[0.25em]" style={microLabel}>Account type</label>
                  <Select
                    data-wf="i-2-0-3"
                    id="ga-account-type"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="ga-focus h-11 w-full bg-transparent px-3 text-center text-sm outline-none"
                    style={fieldStyle(false)}
                  >
                    <option value="buyer">Buyer — I’m booking tickets</option>
                    <option value="organizer">Organizer — I’m running events</option>
                  </Select>
                </div>
              </>
            ) : null}

            {resetMode && status === "reset-sent" ? (
              <div className="ga-alert flex items-start gap-3 px-4 py-3" style={{ border: `1px solid ${brand.accentColor}` }}>
                <CheckCircle className="mt-px h-4 w-4 shrink-0" aria-hidden style={{ color: brand.accentColor }} />
                <p className="text-[11px] leading-relaxed">
                  If {email.trim()} is registered, a reset link is on its way. It works once and expires in {RESET_EXPIRY}.
                </p>
              </div>
            ) : null}
          </div>

          {showRegistrationBlocks ? (
            <>
              <p data-wf="b-3-0" className="mt-7 text-[11px] leading-relaxed" style={microLabel}>
                We collect your name, email and booking details to create your account, issue tickets and manage your orders. Your data is stored in India and is not used for advertising.
              </p>

              <div className="mt-5 grid grid-cols-12 items-start gap-3">
                <div data-wf="b-4-0" className="col-span-12 sm:col-span-8">
                  <div className="flex items-start gap-3">
                    <input
                      id="ga-consent"
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        if (e.target.checked) setErrors((p) => ({ ...p, consent: undefined }));
                      }}
                      aria-invalid={errors.consent ? true : undefined}
                      aria-describedby={errors.consent ? "ga-consent-err" : undefined}
                      className="ga-focus mt-1 h-4 w-4 shrink-0"
                      style={{ accentColor: brand.primaryColor, borderRadius: brand.radius }}
                    />
                    <label htmlFor="ga-consent" className="text-[11px] leading-relaxed">
                      I consent to my personal data being processed for these purposes (required)
                    </label>
                  </div>
                  {errors.consent ? <div className="mt-2">{errorNote("ga-consent-err", errors.consent)}</div> : null}
                </div>
                <div data-wf="b-4-1" className="col-span-12 sm:col-span-4 sm:text-right">
                  <button
                    type="button"
                    onClick={() => setPolicyOpen((v) => !v)}
                    aria-expanded={policyOpen}
                    aria-controls="ga-policy"
                    className="ga-focus text-[11px] underline underline-offset-4"
                    style={{ color: brand.primaryColor }}
                  >
                    Read the Privacy Policy
                  </button>
                </div>
              </div>

              {policyOpen ? (
                <div id="ga-policy" className="ga-alert mt-4 px-4 py-3 text-left" style={{ border: `1px solid ${brand.accentColor}` }}>
                  <ul className="space-y-2 text-[11px] leading-relaxed" style={microLabel}>
                    <li>Collected: name, email, password (hashed), orders and tickets.</li>
                    <li>Purpose: {CONSENT_PURPOSE}. Nothing else.</li>
                    <li>Stored in India. Withdraw consent any time from privacy settings; order records we must keep for tax are retained.</li>
                  </ul>
                </div>
              ) : null}
            </>
          ) : null}

          <div data-wf="b-5-0" role="status" aria-live="polite" className="mt-6">
            {formError ? (
              <div className="ga-alert flex items-start gap-3 px-4 py-3" style={{ border: `1px solid ${brand.primaryColor}`, backgroundColor: "rgba(18,32,28,0.05)" }}>
                <AlertCircle className="mt-px h-4 w-4 shrink-0" aria-hidden />
                <p className="text-[11px] leading-relaxed">
                  {formError.text}{" "}
                  {formError.kind === "duplicate" ? (
                    <button
                      type="button"
                      onClick={() => { switchTab("signin"); later(() => { if (passwordRef.current) passwordRef.current.focus(); }, 0); }}
                      className="ga-focus underline underline-offset-4"
                      style={{ color: brand.primaryColor }}
                    >
                      Try signing in instead.
                    </button>
                  ) : null}
                </p>
              </div>
            ) : null}
          </div>

          <div className="mt-6 grid grid-cols-12 gap-3">
            <div className="col-span-12 sm:col-span-4">
              <button
                data-wf="b-6-0"
                type="button"
                onClick={signInClick}
                disabled={isPending}
                className="ga-focus h-12 w-full px-2 text-[10px] transition-opacity disabled:opacity-60"
                style={tab === "signin" ? primaryBtn : ghostBtn}
              >
                {pending === "signin" ? "Checking…" : "Sign in"}
              </button>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <button
                data-wf="b-6-1"
                type="button"
                onClick={createClick}
                disabled={isPending}
                className="ga-focus h-12 w-full px-2 text-[10px] transition-opacity disabled:opacity-60"
                style={tab === "create" ? primaryBtn : ghostBtn}
              >
                {pending === "create" ? "Creating…" : "Create account"}
              </button>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <button
                data-wf="b-6-2"
                type="button"
                onClick={doGoogle}
                disabled={isPending}
                className="ga-focus h-12 w-full px-2 text-[10px] transition-opacity disabled:opacity-60"
                style={ghostBtn}
              >
                {pending === "google" ? "Opening Google…" : "Continue with Google"}
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-12 items-center gap-3 text-center">
            <div className="col-span-12 sm:col-span-6">
              <button
                data-wf="b-7-0"
                type="button"
                onClick={resetLinkClick}
                disabled={isPending}
                className={resetMode
                  ? "ga-focus h-12 w-full px-2 text-[10px] transition-opacity disabled:opacity-60"
                  : "ga-focus text-[11px] underline underline-offset-4 disabled:opacity-60"}
                style={resetMode ? primaryBtn : { color: brand.primaryColor }}
              >
                {pending === "reset" ? "Sending the link…" : "Forgot your password? Email me a reset link"}
              </button>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <button
                data-wf="b-7-1"
                type="button"
                onClick={() => navigate("organizer")}
                className="ga-focus text-[11px] underline underline-offset-4"
                style={{ color: brand.primaryColor }}
              >
                Organizer sign in
              </button>
            </div>
          </div>
        </form>

        <div className="mt-8">{rule}</div>
        <p className="mt-5 text-center text-[10px] uppercase tracking-[0.25em]" style={microLabel}>
          Tickets issued in India — payments by Razorpay
        </p>
      </main>
    </div>
  );
}
