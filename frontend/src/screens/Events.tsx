// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Label, Select, Badge, Table, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Search, X, ChevronRight, Clock, Filter, AlertCircle, CheckCircle } = Icons;

const EVENTS = [
  { id: "evt_3341", wf: null, title: "Kavi Sammelan: Winter Verse", venue: "Alliance Française", city: "New Delhi", starts_at: "2026-11-07T18:00", day: "Sat", dateLabel: "07 Dec 2026", timeLabel: "6:00 PM", from_price: 349, remaining: 64, total_quantity: 300 },
  { id: "evt_3298", wf: null, title: "Qawwali at Sunder Nursery", venue: "Sunder Nursery Amphitheatre", city: "New Delhi", starts_at: "2026-11-08T19:30", day: "Sun", dateLabel: "08 Nov 2026", timeLabel: "7:30 PM", from_price: 1200, remaining: 95, total_quantity: 600 },
  { id: "evt_3312", wf: null, title: "Bandra Jazz Sessions", venue: "Veda Factory", city: "Mumbai", starts_at: "2026-11-14T21:00", day: "Sat", dateLabel: "14 Nov 2026", timeLabel: "9:00 PM", from_price: 750, remaining: 22, total_quantity: 180 },
  { id: "evt_3355", wf: null, title: "Ghazal Evening: Begum Akhtar Tribute", venue: "Prithvi Theatre", city: "Mumbai", starts_at: "2026-11-15T19:30", day: "Sun", dateLabel: "15 Nov 2026", timeLabel: "7:30 PM", from_price: 850, remaining: 0, total_quantity: 190 },
  { id: "evt_3370", wf: null, title: "Design Systems Meetup #14", venue: "91springboard, Sector 44", city: "Gurugram", starts_at: "2026-11-19T18:30", day: "Thu", dateLabel: "19 Nov 2026", timeLabel: "6:30 PM", from_price: 0, remaining: 48, total_quantity: 120 },
  { id: "evt_3381", wf: null, title: "TEDx Koramangala Salon", venue: "Dialogues Café", city: "Bengaluru", starts_at: "2026-11-21T10:00", day: "Sat", dateLabel: "21 Nov 2026", timeLabel: "10:00 AM", from_price: 999, remaining: 31, total_quantity: 220 },
  { id: "evt_3394", wf: null, title: "Startup Pitch Arena", venue: "T-Hub Phase 2", city: "Hyderabad", starts_at: "2026-11-26T15:00", day: "Thu", dateLabel: "26 Nov 2026", timeLabel: "3:00 PM", from_price: 499, remaining: 143, total_quantity: 400 },
  { id: "evt_3402", wf: null, title: "Rock Revival: Tribute Night", venue: "Hard Rock Cafe, Banjara Hills", city: "Hyderabad", starts_at: "2026-11-28T20:30", day: "Sat", dateLabel: "28 Nov 2026", timeLabel: "8:30 PM", from_price: 699, remaining: 210, total_quantity: 500 },
  { id: "evt_3417", wf: null, title: "Carnatic Mornings: Margazhi Preview", venue: "The Music Academy", city: "Chennai", starts_at: "2026-12-05T07:30", day: "Sat", dateLabel: "05 Dec 2026", timeLabel: "7:30 AM", from_price: 450, remaining: 288, total_quantity: 750 },
  { id: "evt_3423", wf: null, title: "Sufi Nights at Amer", venue: "Amer Fort Courtyard", city: "Jaipur", starts_at: "2026-12-06T18:45", day: "Sun", dateLabel: "06 Dec 2026", timeLabel: "6:45 PM", from_price: 1799, remaining: 76, total_quantity: 450 },
  { id: "evt_3101", wf: "i-4-0-0", title: "Sunburn Arena Night", venue: "Phoenix Marketcity", city: "Bengaluru", starts_at: "2026-12-12T19:00", day: "Sat", dateLabel: "12 Dec 2026", timeLabel: "7:00 PM", from_price: 899, remaining: 412, total_quantity: 2000 },
  { id: "evt_3438", wf: null, title: "Chef's Table: Coastal Kerala", venue: "Grand Hyatt Bolgatty", city: "Kochi", starts_at: "2026-12-13T19:00", day: "Sun", dateLabel: "13 Dec 2026", timeLabel: "7:00 PM", from_price: 3200, remaining: 9, total_quantity: 60 },
  { id: "evt_3102", wf: "i-4-0-1", title: "Indie Folk Live", venue: "Antisocial", city: "Mumbai", starts_at: "2026-12-18T18:30", day: "Fri", dateLabel: "18 Dec 2026", timeLabel: "6:30 PM", from_price: 599, remaining: 38, total_quantity: 150 },
  { id: "evt_3446", wf: null, title: "Classical Ballet: The Nutcracker", venue: "Kamani Auditorium", city: "New Delhi", starts_at: "2026-12-20T18:00", day: "Sun", dateLabel: "20 Dec 2026", timeLabel: "6:00 PM", from_price: 1250, remaining: 164, total_quantity: 620 },
  { id: "evt_3104", wf: "i-4-0-3", title: "Standup Night: Open Mic", venue: "Canvas Laugh Club", city: "Pune", starts_at: "2026-12-22T20:00", day: "Tue", dateLabel: "22 Dec 2026", timeLabel: "8:00 PM", from_price: 299, remaining: 0, total_quantity: 120 },
  { id: "evt_3457", wf: null, title: "Winter Sprint 10K", venue: "Cubbon Park Bandstand", city: "Bengaluru", starts_at: "2026-12-27T06:00", day: "Sun", dateLabel: "27 Dec 2026", timeLabel: "6:00 AM", from_price: 1100, remaining: 530, total_quantity: 1200 },
  { id: "evt_3463", wf: null, title: "Goa Sunset Sessions", venue: "Vagator Hilltop", city: "Goa", starts_at: "2026-12-31T16:00", day: "Thu", dateLabel: "31 Dec 2026", timeLabel: "4:00 PM", from_price: 2499, remaining: 27, total_quantity: 900 },
  { id: "evt_3469", wf: null, title: "New Year's Eve Gala", venue: "The Leela Palace", city: "Jaipur", starts_at: "2026-12-31T20:00", day: "Thu", dateLabel: "31 Dec 2026", timeLabel: "8:00 PM", from_price: 4999, remaining: 112, total_quantity: 350 },
  { id: "evt_3103", wf: "i-4-0-2", title: "Startup Summit 2027", venue: "HICC", city: "Hyderabad", starts_at: "2027-01-09T09:00", day: "Sat", dateLabel: "09 Jan 2027", timeLabel: "9:00 AM", from_price: 1499, remaining: 1180, total_quantity: 1500 },
  { id: "evt_3474", wf: null, title: "Marathon Expo: Mumbai 2027", venue: "Jio World Garden", city: "Mumbai", starts_at: "2027-01-15T11:00", day: "Fri", dateLabel: "15 Jan 2027", timeLabel: "11:00 AM", from_price: 0, remaining: 2400, total_quantity: 3000 },
  { id: "evt_3481", wf: null, title: "Pune Folk Fest", venue: "Shaniwar Wada Grounds", city: "Pune", starts_at: "2027-01-24T17:00", day: "Sun", dateLabel: "24 Jan 2027", timeLabel: "5:00 PM", from_price: 650, remaining: 740, total_quantity: 1800 },
  { id: "evt_3488", wf: null, title: "Book Fair Preview Night", venue: "Science City Auditorium", city: "Kolkata", starts_at: "2027-01-28T17:00", day: "Thu", dateLabel: "28 Jan 2027", timeLabel: "5:00 PM", from_price: 199, remaining: 36, total_quantity: 500 },
  { id: "evt_3493", wf: null, title: "Indie Game Dev Jam", venue: "IITM Research Park", city: "Chennai", starts_at: "2027-02-06T09:30", day: "Sat", dateLabel: "06 Feb 2027", timeLabel: "9:30 AM", from_price: 550, remaining: 88, total_quantity: 240 },
  { id: "evt_3499", wf: null, title: "Hyderabad Food Carnival", venue: "Necklace Road Lawns", city: "Hyderabad", starts_at: "2027-02-14T12:00", day: "Sun", dateLabel: "14 Feb 2027", timeLabel: "12:00 PM", from_price: 249, remaining: 1960, total_quantity: 2500 }
];

const LISTING = EVENTS.slice().sort((a, b) => (a.starts_at < b.starts_at ? -1 : 1));

const DATE_FILTERS = [
  { key: "any", label: "Any date" },
  { key: "weekend", label: "This weekend · 7–8 Nov" },
  { key: "next30", label: "Next 30 days" },
  { key: "2026-12", label: "December 2026" },
  { key: "2027-01", label: "January 2027" },
  { key: "2027-02", label: "February 2027" }
];

const CITIES = Array.from(new Set(LISTING.map((e) => e.city))).sort();

const INR = (n) => "₹" + n.toLocaleString("en-IN");

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const gold = brand.accentColor;
  const paper = brand.backgroundColor;

  const [query, setQuery] = React.useState("");
  const [dateKey, setDateKey] = React.useState("any");
  const [city, setCity] = React.useState("all");
  const [status, setStatus] = React.useState("ready");
  const [attempts, setAttempts] = React.useState(0);
  const [willFail, setWillFail] = React.useState(false);
  const [updated, setUpdated] = React.useState("09:12 IST");

  React.useEffect(() => {
    if (status !== "loading") return undefined;
    const t = setTimeout(() => {
      if (willFail) {
        setStatus("error");
      } else {
        setStatus("ready");
        setUpdated("a moment ago");
      }
    }, 700);
    return () => clearTimeout(t);
  }, [status, willFail]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return LISTING.filter((e) => {
      if (q && !(e.title.toLowerCase().includes(q) || e.venue.toLowerCase().includes(q))) return false;
      if (city !== "all" && e.city !== city) return false;
      const d = e.starts_at.slice(0, 10);
      if (dateKey === "weekend" && !(d >= "2026-11-07" && d <= "2026-11-08")) return false;
      if (dateKey === "next30" && !(d <= "2026-12-05")) return false;
      if (dateKey.length === 7 && !e.starts_at.startsWith(dateKey)) return false;
      return true;
    });
  }, [query, dateKey, city]);

  const filtersOn = query.trim() !== "" || dateKey !== "any" || city !== "all";

  const clearFilters = () => {
    setQuery("");
    setDateKey("any");
    setCity("all");
  };

  const runSearch = (e) => {
    e.preventDefault();
    const n = attempts + 1;
    setAttempts(n);
    setWillFail(n % 3 === 0);
    setStatus("loading");
  };

  const retry = () => {
    setWillFail(false);
    setStatus("loading");
  };

  const hair = ink + "26";
  const wash = ink + "08";

  const label = "text-[11px] uppercase tracking-[0.22em]";
  const headingFont = { fontFamily: brand.fontHeading, letterSpacing: "0.14em" };
  const nums = { fontVariantNumeric: "tabular-nums" };

  const diamond = (flex) => (
    <span aria-hidden="true" className={"flex items-center gap-2 " + (flex || "")}>
      <span className="h-px flex-1" style={{ backgroundColor: gold }} />
      <span className="block h-1.5 w-1.5 rotate-45" style={{ backgroundColor: ink }} />
      <span className="h-px flex-1" style={{ backgroundColor: gold }} />
    </span>
  );

  const availability = (e) => {
    if (e.remaining === 0) {
      return (
        <Badge className={label + " inline-flex items-center gap-1 px-2 py-1"} style={{ borderRadius: 0, border: "1px solid " + hair, backgroundColor: wash, color: ink }}>
          <X className="h-3 w-3" aria-hidden="true" />
          Sold out
        </Badge>
      );
    }
    if (e.remaining <= 40) {
      return (
        <Badge className={label + " inline-flex items-center gap-1 px-2 py-1"} style={{ borderRadius: 0, border: "1px solid " + ink, backgroundColor: "transparent", color: ink }}>
          <AlertCircle className="h-3 w-3" aria-hidden="true" />
          {e.remaining} left
        </Badge>
      );
    }
    return (
      <Badge className={label + " inline-flex items-center gap-1 px-2 py-1"} style={{ borderRadius: 0, border: "1px solid " + gold, backgroundColor: "transparent", color: ink }}>
        <CheckCircle className="h-3 w-3" aria-hidden="true" />
        On sale
      </Badge>
    );
  };

  const summary =
    filtered.length === LISTING.length
      ? LISTING.length + " published events"
      : filtered.length + " of " + LISTING.length + " published events";

  return (
    <div
      className="mx-auto w-full max-w-6xl px-4 pb-20 pt-8 sm:px-8 sm:pt-12"
      style={{ fontFamily: brand.fontBody, color: ink, backgroundColor: paper, "--deco-ink": ink }}
    >
      <style>{`
        .deco-card { animation: deco-rise .3s ease-out both; }
        @keyframes deco-rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .deco-skel { animation: deco-breathe 1.4s ease-in-out infinite; }
        @keyframes deco-breathe { 0%,100% { opacity: .3 } 50% { opacity: .65 } }
        .deco-tile { position: relative; outline: 1px solid transparent; outline-offset: 2px;
          transition: outline-color .2s ease, outline-offset .2s ease, background-color .2s ease; }
        .deco-tile:hover { outline-color: var(--deco-ink); outline-offset: 5px; }
        .deco-tile:has(.deco-stretch:focus-visible) { outline-color: var(--deco-ink); outline-offset: 5px; }
        .deco-stretch::after { content: ''; position: absolute; inset: 0; }
        .deco-stretch:focus-visible { outline: none; text-decoration: underline; text-underline-offset: 5px; }
        .deco-focus:focus-visible { outline: 2px solid var(--deco-ink); outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) {
          .deco-card, .deco-skel, .deco-tile { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* Row 1 — page title */}
      <header data-wf="b-0-0" className="text-center">
        <p className={label} style={{ color: ink, opacity: 0.7 }}>
          Public listing · browse without an account
        </p>
        <h1 className="mt-4 text-3xl leading-tight sm:text-[40px]" style={headingFont}>
          Events in India
        </h1>
        <div className="mx-auto mt-6 max-w-md">
          {diamond()}
          <span aria-hidden="true" className="mt-1 block h-px w-full" style={{ backgroundColor: gold, opacity: 0.55 }} />
        </div>
        <p className="mx-auto mt-5 max-w-[58ch] text-sm leading-relaxed" style={{ opacity: 0.72 }}>
          Published events only, soonest first. Drafts and dates that have already passed are never listed.
        </p>
      </header>

      {/* Framed working panel: search + filters */}
      <section
        aria-label="Find an event"
        className="mt-10 p-5 sm:p-7"
        style={{ border: "1px solid " + gold, outline: "1px solid " + ink, outlineOffset: "4px", backgroundColor: wash }}
      >
        <form onSubmit={runSearch} role="search" className="grid grid-cols-1 gap-4 sm:grid-cols-12 sm:items-end">
          {/* Row 2 — search bar */}
          <div className="sm:col-span-8">
            <Label htmlFor="event-search" className={label} style={{ color: ink }}>
              Search by event title or venue
            </Label>
            <div className="relative mt-2">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: ink, opacity: 0.6 }} aria-hidden="true" />
              <Input
                id="event-search"
                data-wf="b-1-0"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try “jazz”, “Antisocial”, “Phoenix Marketcity”"
                className="deco-focus h-12 w-full pl-10 text-base"
                style={{ borderRadius: 0, border: "1px solid " + hair, backgroundColor: paper, color: ink }}
              />
            </div>
            <p className="mt-2 text-xs" style={{ opacity: 0.7 }}>
              Results narrow as you type.
            </p>
          </div>

          {/* Row 2 — search button */}
          <div className="sm:col-span-4">
            <Button
              type="submit"
              data-wf="b-1-1"
              disabled={status === "loading"}
              className={"deco-focus h-12 w-full " + label}
              style={{
                borderRadius: 0,
                backgroundColor: ink,
                color: gold,
                border: "1px solid " + ink,
                opacity: status === "loading" ? 0.65 : 1
              }}
            >
              {status === "loading" ? "Searching…" : "Search"}
            </Button>
          </div>
        </form>

        <div className="my-6" style={{ backgroundColor: hair, height: "1px" }} />

        {/* Row 3 — filter bar */}
        <div data-wf="b-2-0" className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-center gap-2 lg:pb-3">
            <Filter className="h-4 w-4" style={{ color: gold }} aria-hidden="true" />
            <span className={label}>Filters</span>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-xl">
            <div>
              <Label htmlFor="filter-date" className={label} style={{ color: ink }}>
                Date
              </Label>
              <Select
                id="filter-date"
                data-wf="i-2-0-0"
                value={dateKey}
                onChange={(e) => setDateKey(e.target.value)}
                className="deco-focus mt-2 h-11 w-full"
                style={{ borderRadius: 0, border: "1px solid " + hair, backgroundColor: paper, color: ink }}
              >
                {DATE_FILTERS.map((d) => (
                  <option key={d.key} value={d.key}>
                    {d.label}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Label htmlFor="filter-city" className={label} style={{ color: ink }}>
                City
              </Label>
              <Select
                id="filter-city"
                data-wf="i-2-0-1"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="deco-focus mt-2 h-11 w-full"
                style={{ borderRadius: 0, border: "1px solid " + hair, backgroundColor: paper, color: ink }}
              >
                <option value="all">All cities</option>
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          <div className="lg:pb-0">
            <Button
              type="button"
              data-wf="i-2-0-2"
              onClick={clearFilters}
              disabled={!filtersOn}
              className={"deco-focus inline-flex h-11 w-full items-center justify-center gap-2 px-4 lg:w-auto " + label}
              style={{
                borderRadius: 0,
                backgroundColor: "transparent",
                border: "1px solid " + (filtersOn ? ink : hair),
                color: ink,
                opacity: filtersOn ? 1 : 0.45,
                cursor: filtersOn ? "pointer" : "not-allowed"
              }}
            >
              <X className="h-4 w-4" aria-hidden="true" />
              Clear filters
            </Button>
          </div>
        </div>
      </section>

      {/* Row 4 — count */}
      <div data-wf="b-3-0" className="mt-12 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl" style={{ ...headingFont, ...nums }}>
            {summary}
          </h2>
          <p className="mt-2 text-sm" style={{ opacity: 0.72 }}>
            {filtersOn
              ? "Filtered listing · drafts and past dates stay hidden."
              : "Sorted by start date · prices shown in INR, per ticket."}
          </p>
        </div>
        <p className="flex items-center gap-2 text-xs" style={{ opacity: 0.7, ...nums }}>
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          Listing checked {updated}
        </p>
      </div>

      <p aria-live="polite" className="sr-only">
        {status === "loading" ? "Loading events" : summary + " shown."}
      </p>

      <div className="mt-4" style={{ backgroundColor: gold, height: "1px", opacity: 0.6 }} />

      {/* Row 5 — card grid */}
      <section data-wf="b-4-0" aria-label="Published events" className="mt-8">
        {status === "loading" && (
          <div>
            <p className={label + " mb-6 text-center"} style={{ opacity: 0.75 }}>
              Gathering the evening’s listings…
            </p>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <li key={i} className="deco-skel p-6" style={{ border: "1px solid " + hair, backgroundColor: wash, animationDelay: i * 90 + "ms" }}>
                  <span className="block h-3 w-24" style={{ backgroundColor: hair }} />
                  <span className="mt-5 block h-5 w-full" style={{ backgroundColor: hair }} />
                  <span className="mt-3 block h-5 w-2/3" style={{ backgroundColor: hair }} />
                  <span className="mt-8 block h-4 w-28" style={{ backgroundColor: hair }} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="mx-auto max-w-xl p-8 text-center"
            style={{ border: "1px solid " + gold, outline: "1px solid " + ink, outlineOffset: "4px", backgroundColor: wash }}
          >
            <AlertCircle className="mx-auto h-6 w-6" style={{ color: ink }} aria-hidden="true" />
            <h3 className="mt-4 text-lg" style={headingFont}>
              The register did not answer
            </h3>
            <p className="mx-auto mt-3 max-w-[46ch] text-sm leading-relaxed" style={{ opacity: 0.75 }}>
              We could not reach the events listing just now. Your search term and filters are exactly as you left them —
              ask again and we will try the connection once more.
            </p>
            <Button
              type="button"
              onClick={retry}
              className={"deco-focus mt-6 h-11 px-6 " + label}
              style={{ borderRadius: 0, backgroundColor: ink, color: gold, border: "1px solid " + ink }}
            >
              Try the listing again
            </Button>
          </div>
        )}

        {status === "ready" && filtered.length > 0 && (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((e, i) => (
              <li key={e.id} className="deco-card" style={{ animationDelay: Math.min(i, 8) * 40 + "ms" }}>
                <article
                  className="deco-tile flex h-full flex-col p-5 sm:p-6"
                  style={{ border: "1px solid " + gold, backgroundColor: wash }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className={label} style={{ ...nums, opacity: 0.85 }}>
                      {e.day} · {e.dateLabel}
                    </p>
                    {availability(e)}
                  </div>

                  <p className="mt-1 text-sm" style={{ ...nums, opacity: 0.72 }}>
                    {e.timeLabel}
                  </p>

                  <div className="my-4">{diamond()}</div>

                  <h3 className="text-base leading-snug sm:text-lg" style={headingFont}>
                    <button
                      type="button"
                      data-wf={e.wf || undefined}
                      onClick={() => navigate("event-detail")}
                      className="deco-stretch text-left"
                      style={{ background: "none", border: "none", padding: 0, color: ink, font: "inherit", letterSpacing: "inherit", cursor: "pointer" }}
                    >
                      {e.title}
                    </button>
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed" style={{ opacity: 0.75 }}>
                    {e.venue} · {e.city}
                  </p>

                  <div className="mt-auto flex items-baseline justify-between gap-3 pt-6">
                    <p className="text-base" style={{ ...nums, fontWeight: 600 }}>
                      {e.from_price === 0 ? "Free entry" : "From " + INR(e.from_price)}
                    </p>
                    <span className={label + " inline-flex items-center gap-1"} style={{ opacity: 0.8 }} aria-hidden="true">
                      View
                      <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Row 6 — empty state */}
      {status === "ready" && filtered.length === 0 && (
        <div
          data-wf="b-5-0"
          className="mx-auto mt-8 max-w-2xl px-6 py-10 text-center"
          style={{ border: "1px solid " + gold, outline: "1px solid " + ink, outlineOffset: "4px", backgroundColor: wash }}
        >
          <div className="mx-auto mb-6 max-w-[220px]">{diamond()}</div>
          <Empty
            title="Nothing on the bill tonight"
            description="No events match your search or filters. Try another city or clear the filters."
            action={
              <Button
                type="button"
                onClick={clearFilters}
                className={"deco-focus mt-2 h-11 px-6 " + label}
                style={{ borderRadius: 0, backgroundColor: ink, color: gold, border: "1px solid " + ink }}
              >
                Clear filters
              </Button>
            }
          />
          <div className="mx-auto mt-6 max-w-[220px]">{diamond()}</div>
        </div>
      )}
    </div>
  );
}
