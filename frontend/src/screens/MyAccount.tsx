// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Label, Checkbox, Badge, Table, THead, TBody, TR, TH, TD, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, X, ChevronRight, Home, Clock, ArrowLeft, ArrowRight, AlertCircle, CheckCircle } = Icons;

const BUYER = { name: "Susan Raya", email: "susan.raya@quorq.ai" };

const ORDERS = [
  {
    id: "ord_8f3a",
    wf: null,
    order_reference: "ORD-2026-8F3A",
    event: "Sunburn Arena Night",
    event_when: "12 Dec 2026, 7:00 PM",
    venue: "Phoenix Marketcity, Bengaluru",
    items: "2 × General Admission",
    created_at: "02 Nov 2026",
    status: "paid",
    total_amount: 7200,
  },
  {
    id: "ord_7c19",
    order_reference: "ORD-2026-7C19",
    event: "Kala Ghoda Jazz Evening",
    event_when: "21 Nov 2026, 8:30 PM",
    venue: "Royal Opera House, Mumbai",
    items: "2 × Balcony GA",
    created_at: "30 Oct 2026",
    status: "pending",
    total_amount: 2400,
  },
  {
    id: "ord_6b44",
    order_reference: "ORD-2026-6B44",
    event: "Bengaluru Comedy Carnival",
    event_when: "08 Nov 2026, 6:00 PM",
    venue: "Jayamahal Palace Grounds, Bengaluru",
    items: "1 × General Admission",
    created_at: "27 Oct 2026",
    status: "failed",
    total_amount: 1800,
  },
  {
    id: "ord_5a07",
    order_reference: "ORD-2026-5A07",
    event: "Ziro Valley Sessions",
    event_when: "Cancelled by organizer",
    venue: "Ziro, Arunachal Pradesh",
    items: "3 × Camping GA",
    created_at: "21 Oct 2026",
    status: "refunded",
    total_amount: 5400,
  },
  {
    id: "ord_4e91",
    order_reference: "ORD-2026-4E91",
    event: "NH7 Weekender, Pune",
    event_when: "17 Oct 2026 — attended",
    venue: "Mahalaxmi Lawns, Pune",
    items: "2 × Day 2 GA",
    created_at: "12 Oct 2026",
    status: "paid",
    total_amount: 9000,
  },
  {
    id: "ord_3d58",
    order_reference: "ORD-2026-3D58",
    event: "Mahindra Blues Weekender",
    event_when: "11 Oct 2026 — attended",
    venue: "Mehboob Studio, Mumbai",
    items: "1 × General Admission",
    created_at: "28 Sep 2026",
    status: "paid",
    total_amount: 4500,
  },
];

const TICKETS = [
  {
    id: "tkt_2291",
    wf: "i-3-0-0",
    frameWf: "b-4-0",
    event: "Sunburn Arena Night",
    when: "12 Dec 2026, 7:00 PM",
    venue: "Phoenix Marketcity, Bengaluru",
    qr_identifier: "TKT-8F3A-2291",
    ticket_type: "General Admission",
    order_reference: "ORD-2026-8F3A",
    holder: "Susan Raya",
  },
  {
    id: "tkt_2292",
    wf: "i-3-0-1",
    frameWf: "b-4-1",
    event: "Sunburn Arena Night",
    when: "12 Dec 2026, 7:00 PM",
    venue: "Phoenix Marketcity, Bengaluru",
    qr_identifier: "TKT-8F3A-2292",
    ticket_type: "General Admission",
    order_reference: "ORD-2026-8F3A",
    holder: "Guest of Susan Raya",
  },
];

const INITIAL_CONSENTS = [
  {
    id: "ticketing",
    wf: "i-5-0-0",
    purpose: "Account & ticketing data",
    detail:
      "Your name, email and the orders and tickets you buy — used to run the account, issue QR tickets and answer support.",
    detailWithdrawn:
      "Processing stopped for account and ticketing purposes. Paid order records stay, as the law requires.",
    granted: true,
    granted_at: "02 Nov 2026, 10:14 IST",
    withdrawn_at: null,
  },
  {
    id: "marketing",
    wf: "i-5-0-1",
    purpose: "Marketing emails",
    detail:
      "Event recommendations and organizer newsletters sent to susan.raya@quorq.ai. Optional — tickets arrive either way.",
    detailWithdrawn:
      "No further recommendations or organizer newsletters will be sent to susan.raya@quorq.ai.",
    granted: true,
    granted_at: "02 Nov 2026, 10:14 IST",
    withdrawn_at: null,
  },
];

const TABS = [
  { key: "orders", label: "Orders", wf: "i-1-0-0" },
  { key: "tickets", label: "Tickets", wf: "i-1-0-1" },
  { key: "privacy", label: "Privacy settings", wf: "i-1-0-2" },
];

export default function Screen() {
  const navigate = useNavigate();
  const {
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    Badge,
    Table,
    THead,
    TBody,
    TR,
    TH,
    TD,
    Checkbox,
    Label,
    Empty,
    Separator,
  } = UI;
  const {
    CheckCircle,
    Clock,
    AlertCircle,
    ArrowLeft,
    ChevronRight,
    Calendar,
    Download,
    X,
    Check,
  } = Icons;

  const ink = brand.primaryColor;
  const gold = brand.accentColor;
  const ivory = brand.backgroundColor;
  const muted = ink + "b3";
  const faint = ink + "80";
  const hair = ink + "26";

  const headingFont = { fontFamily: brand.fontHeading, letterSpacing: "0.16em" };
  const nums = { fontVariantNumeric: "tabular-nums" };

  const [tab, setTab] = React.useState("orders");
  const [consents, setConsents] = React.useState(INITIAL_CONSENTS);
  const [busy, setBusy] = React.useState(false);
  const [withdrawError, setWithdrawError] = React.useState(null);
  const [result, setResult] = React.useState(null);

  const tabRefs = React.useRef([]);
  const timerRef = React.useRef(null);

  React.useEffect(() => () => clearTimeout(timerRef.current), []);

  const money = (n) =>
    "₹" +
    n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const stamp = () => {
    const d = new Date();
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const pad = (x) => String(x).padStart(2, "0");
    return `${pad(d.getDate())} ${months[d.getMonth()]} ${d.getFullYear()}, ${pad(
      d.getHours()
    )}:${pad(d.getMinutes())} IST`;
  };

  const STATUS = {
    paid: { label: "Paid", Icon: CheckCircle, filled: true },
    pending: { label: "Awaiting payment", Icon: Clock, filled: false },
    failed: { label: "Payment failed", Icon: AlertCircle, filled: false },
    refunded: { label: "Refunded", Icon: ArrowLeft, filled: false },
  };

  const pendingOrder = ORDERS.find((o) => o.status === "pending");
  const paidOrders = ORDERS.filter((o) => o.status === "paid");
  const paidTotal = paidOrders.reduce((s, o) => s + o.total_amount, 0);
  const grantedConsents = consents.filter((c) => c.granted);

  /* ---------- QR matrix ---------- */
  const qrMatrix = React.useCallback((seed) => {
    const size = 25;
    let h = 2166136261;
    for (let i = 0; i < seed.length; i++) {
      h ^= seed.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    let s = h >>> 0;
    const rand = () => {
      s = (s + 0x6d2b79f5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const m = Array.from({ length: size }, () => Array(size).fill(0));
    for (let y = 0; y < size; y++)
      for (let x = 0; x < size; x++) m[y][x] = rand() > 0.52 ? 1 : 0;
    const finder = (ox, oy) => {
      for (let y = -1; y < 8; y++)
        for (let x = -1; x < 8; x++) {
          const yy = oy + y;
          const xx = ox + x;
          if (yy < 0 || xx < 0 || yy >= size || xx >= size) continue;
          if (x === -1 || x === 7 || y === -1 || y === 7) m[yy][xx] = 0;
        }
      for (let y = 0; y < 7; y++)
        for (let x = 0; x < 7; x++) {
          const on =
            x === 0 || x === 6 || y === 0 || y === 6 || (x >= 2 && x <= 4 && y >= 2 && y <= 4);
          m[oy + y][ox + x] = on ? 1 : 0;
        }
    };
    finder(0, 0);
    finder(size - 7, 0);
    finder(0, size - 7);
    for (let i = 8; i < size - 8; i++) {
      m[6][i] = i % 2 === 0 ? 1 : 0;
      m[i][6] = i % 2 === 0 ? 1 : 0;
    }
    return m;
  }, []);

  const renderQr = (seed, label) => {
    const m = qrMatrix(seed);
    const size = m.length;
    const rects = [];
    for (let y = 0; y < size; y++)
      for (let x = 0; x < size; x++)
        if (m[y][x]) rects.push(<rect key={x + "-" + y} x={x + 2} y={y + 2} width="1" height="1" />);
    return (
      <svg
        viewBox={`0 0 ${size + 4} ${size + 4}`}
        role="img"
        aria-label={label}
        className="h-auto w-full"
        style={{ maxWidth: 208, shapeRendering: "crispEdges" }}
      >
        <rect x="0" y="0" width={size + 4} height={size + 4} fill="white" />
        <g fill={ink}>{rects}</g>
      </svg>
    );
  };

  /* ---------- ornaments ---------- */
  const DoubleRule = ({ className = "" }) => (
    <div className={"flex items-center gap-3 " + className} aria-hidden="true">
      <span className="flex-1">
        <span className="block h-px" style={{ backgroundColor: hair }} />
        <span className="mt-[3px] block h-px" style={{ backgroundColor: gold }} />
      </span>
      <span className="block h-2 w-2 rotate-45" style={{ backgroundColor: gold }} />
      <span className="flex-1">
        <span className="block h-px" style={{ backgroundColor: hair }} />
        <span className="mt-[3px] block h-px" style={{ backgroundColor: gold }} />
      </span>
    </div>
  );

  const StatusBadge = ({ status }) => {
    const meta = STATUS[status];
    const Icon = meta.Icon;
    return (
      <Badge
        className="inline-flex items-center gap-2 border px-2 py-1 text-[11px] uppercase"
        style={{
          ...headingFont,
          letterSpacing: "0.1em",
          borderRadius: 0,
          borderColor: meta.filled ? "transparent" : hair,
          backgroundColor: meta.filled ? ink : "transparent",
          color: meta.filled ? gold : ink,
        }}
      >
        <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        {meta.label}
      </Badge>
    );
  };

  /* ---------- tabs ---------- */
  const onTabKeyDown = (e) => {
    const i = TABS.findIndex((t) => t.key === tab);
    let next = null;
    if (e.key === "ArrowRight") next = (i + 1) % TABS.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TABS.length - 1;
    if (next !== null) {
      e.preventDefault();
      setTab(TABS[next].key);
      const node = tabRefs.current[next];
      if (node) node.focus();
    }
  };

  /* ---------- consent actions ---------- */
  const withdraw = (ids) => {
    clearTimeout(timerRef.current);
    setBusy(true);
    setWithdrawError(null);
    timerRef.current = window.setTimeout(() => {
      const targets = consents.filter((c) => ids.includes(c.id) && c.granted);
      const blocked = targets.filter((c) => c.id === "ticketing" && !!pendingOrder);
      const going = targets.filter((c) => !blocked.includes(c));
      if (going.length === 0) {
        setBusy(false);
        setWithdrawError(
          `Order ${pendingOrder.order_reference} for ${pendingOrder.event} is awaiting payment. We need account & ticketing consent until that order is settled — complete or cancel it, then withdraw here.`
        );
        return;
      }
      const at = stamp();
      const goingIds = going.map((c) => c.id);
      setConsents((prev) =>
        prev.map((c) =>
          goingIds.includes(c.id) ? { ...c, granted: false, withdrawn_at: at } : c
        )
      );
      setResult({
        kind: "withdrawn",
        at,
        stopped: going.map((c) => c.purpose),
        blocked: blocked.map((c) => c.purpose),
      });
      setBusy(false);
    }, 800);
  };

  const regrant = (id) => {
    const at = stamp();
    const c = consents.find((x) => x.id === id);
    setWithdrawError(null);
    setConsents((prev) =>
      prev.map((x) => (x.id === id ? { ...x, granted: true, granted_at: at, withdrawn_at: null } : x))
    );
    setResult({ kind: "granted", at, stopped: [c.purpose], blocked: [] });
  };

  const toggleConsent = (c, checked) => {
    if (checked) regrant(c.id);
    else withdraw([c.id]);
  };

  /* ---------- panels ---------- */
  const panelProps = (key) => ({
    role: "tabpanel",
    id: `panel-${key}`,
    "aria-labelledby": `tab-${key}`,
    tabIndex: 0,
    className: "gb-rise mt-10 outline-none focus-visible:outline-2",
  });

  return (
    <div
      className="min-h-full w-full"
      style={{
        backgroundColor: ivory,
        color: ink,
        fontFamily: brand.fontBody,
        "--ink": ink,
        "--gold": gold,
        "--ivory": ivory,
      }}
    >
      <style>{`
        .gb-frame { border: 1px solid var(--gold); outline: 1px solid color-mix(in srgb, var(--ink) 55%, transparent); outline-offset: 4px; background-color: color-mix(in srgb, var(--ivory) 72%, white); }
        .gb-row { transition: background-color .18s ease; }
        .gb-row:hover { background-color: color-mix(in srgb, var(--gold) 26%, transparent); }
        .gb-row:focus-within { background-color: color-mix(in srgb, var(--gold) 26%, transparent); }
        .gb-focus:focus-visible { outline: 2px solid var(--ink); outline-offset: 3px; }
        .gb-tab { transition: background-color .18s ease, color .18s ease; }
        .gb-tab:hover { background-color: color-mix(in srgb, var(--gold) 24%, transparent); }
        .gb-ink-btn { transition: background-color .18s ease, color .18s ease; }
        .gb-ink-btn:hover:not(:disabled) { background-color: color-mix(in srgb, var(--ink) 86%, var(--gold)); }
        .gb-ink-btn:disabled { opacity: .45; cursor: not-allowed; }
        .gb-quiet-btn { transition: background-color .18s ease; }
        .gb-quiet-btn:hover:not(:disabled) { background-color: color-mix(in srgb, var(--gold) 28%, transparent); }
        @keyframes gb-rise { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        @keyframes gb-fade { from { opacity: 0; } to { opacity: 1; } }
        .gb-rise { animation: gb-rise .34s cubic-bezier(.2,.7,.3,1) both; }
        .gb-fade { animation: gb-fade .22s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .gb-rise, .gb-fade { animation: none !important; }
          .gb-row, .gb-tab, .gb-ink-btn, .gb-quiet-btn { transition-duration: .001ms !important; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-8">
        {/* ── Row 1 : page title ───────────────────────────── */}
        <header className="text-center">
          <p
            className="text-[11px] uppercase"
            style={{ ...headingFont, letterSpacing: "0.3em", color: muted }}
          >
            Buyer account · {BUYER.email}
          </p>
          <h1
            data-wf="b-0-0"
            className="mt-4 text-[30px] uppercase leading-tight sm:text-[38px]"
            style={{ ...headingFont, color: ink }}
          >
            My tickets &amp; account
          </h1>
          <div className="mx-auto mt-6 max-w-xl">
            <DoubleRule />
          </div>
          <p className="mx-auto mt-5 max-w-[60ch] text-[15px] leading-relaxed" style={{ color: muted }}>
            Orders, entry tickets and the consents recorded against your account. Synced {stamp()}.
          </p>
        </header>

        {/* ── Row 2 : tabs ─────────────────────────────────── */}
        <div
          data-wf="b-1-0"
          role="tablist"
          aria-label="Account sections"
          onKeyDown={onTabKeyDown}
          className="mt-10 flex flex-wrap items-stretch justify-center"
          style={{ borderTop: `1px solid ${hair}`, borderBottom: `1px solid ${hair}` }}
        >
          {TABS.map((t, i) => {
            const active = tab === t.key;
            return (
              <button
                key={t.key}
                ref={(el) => (tabRefs.current[i] = el)}
                data-wf={t.wf}
                id={`tab-${t.key}`}
                role="tab"
                type="button"
                aria-selected={active}
                aria-controls={`panel-${t.key}`}
                tabIndex={active ? 0 : -1}
                onClick={() => setTab(t.key)}
                className="gb-tab gb-focus min-h-[44px] px-6 py-3 text-[12px] uppercase sm:px-10"
                style={{
                  ...headingFont,
                  letterSpacing: "0.22em",
                  backgroundColor: active ? ink : "transparent",
                  color: active ? gold : muted,
                  borderLeft: i === 0 ? "none" : `1px solid ${hair}`,
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* ── ORDERS ───────────────────────────────────────── */}
        {tab === "orders" && (
          <div {...panelProps("orders")}>
            <section data-wf="b-2-0" className="gb-frame m-2 px-4 py-8 sm:px-8">
              <div className="text-center">
                <h2 className="text-[17px] uppercase" style={{ ...headingFont, color: ink }}>
                  My orders
                </h2>
                <p className="mt-3 text-[13px]" style={{ color: muted }}>
                  Open any order to revisit its event page.
                </p>
              </div>
              <div className="mx-auto mt-6 max-w-sm">
                <DoubleRule />
              </div>

              {ORDERS.length === 0 ? (
                <div className="mt-8">
                  <Empty
                    title="No bookings yet"
                    description="When you pay for a ticket, the order reference, receipt and QR tickets appear here within seconds."
                    action={
                      <Button
                        type="button"
                        onClick={() => navigate("events")}
                        className="gb-ink-btn gb-focus px-6 py-3 text-[12px] uppercase"
                        style={{ ...headingFont, letterSpacing: "0.2em", backgroundColor: ink, color: gold, borderRadius: 0 }}
                      >
                        Browse events
                      </Button>
                    }
                  />
                </div>
              ) : (
                <>
                  <div className="mt-8 overflow-x-auto">
                    <Table className="w-full text-left" style={nums} aria-label="My orders">
                      <THead>
                        <TR style={{ borderBottom: `1px solid ${ink}` }}>
                          <TH
                            data-wf="i-2-0-0"
                            scope="col"
                            className="whitespace-nowrap px-3 py-3 text-[11px] uppercase"
                            style={{ ...headingFont, letterSpacing: "0.18em", color: ink }}
                          >
                            Order reference
                          </TH>
                          <TH
                            data-wf="i-2-0-1"
                            scope="col"
                            className="px-3 py-3 text-[11px] uppercase"
                            style={{ ...headingFont, letterSpacing: "0.18em", color: ink }}
                          >
                            Event
                          </TH>
                          <TH
                            data-wf="i-2-0-2"
                            scope="col"
                            className="whitespace-nowrap px-3 py-3 text-[11px] uppercase"
                            style={{ ...headingFont, letterSpacing: "0.18em", color: ink }}
                          >
                            Booked on
                          </TH>
                          <TH
                            data-wf="i-2-0-3"
                            scope="col"
                            className="px-3 py-3 text-[11px] uppercase"
                            style={{ ...headingFont, letterSpacing: "0.18em", color: ink }}
                          >
                            Status
                          </TH>
                          <TH
                            data-wf="i-2-0-4"
                            scope="col"
                            className="whitespace-nowrap px-3 py-3 text-right text-[11px] uppercase"
                            style={{ ...headingFont, letterSpacing: "0.18em", color: ink }}
                          >
                            Total amount
                          </TH>
                        </TR>
                      </THead>
                      <TBody>
                        {ORDERS.map((o) => (
                          <TR
                            key={o.id}
                            className="gb-row cursor-pointer"
                            style={{ borderBottom: `1px solid ${hair}` }}
                            onClick={() => navigate("event-detail")}
                          >
                            <TD className="px-3 py-4 align-top">
                              <button
                                type="button"
                                className="gb-focus text-left text-[13px] underline-offset-4 hover:underline"
                                style={{ ...nums, color: ink, letterSpacing: "0.04em" }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate("event-detail");
                                }}
                                aria-label={`Open event page for ${o.event}, order ${o.order_reference}`}
                              >
                                {o.order_reference}
                              </button>
                            </TD>
                            <TD className="px-3 py-4 align-top">
                              <span className="block text-[15px]" style={{ color: ink }}>
                                {o.event}
                              </span>
                              <span className="mt-1 block text-[12px]" style={{ color: muted }}>
                                {o.items} · {o.event_when}
                              </span>
                            </TD>
                            <TD
                              className="whitespace-nowrap px-3 py-4 align-top text-[13px]"
                              style={{ ...nums, color: muted }}
                            >
                              {o.created_at}
                            </TD>
                            <TD className="px-3 py-4 align-top">
                              <StatusBadge status={o.status} />
                            </TD>
                            <TD className="whitespace-nowrap px-3 py-4 align-top text-right">
                              <span className="inline-flex items-center gap-3">
                                <span className="text-[15px]" style={{ ...nums, color: ink }}>
                                  {money(o.total_amount)}
                                </span>
                                <ChevronRight className="h-4 w-4" aria-hidden="true" style={{ color: gold }} />
                              </span>
                            </TD>
                          </TR>
                        ))}
                      </TBody>
                    </Table>
                  </div>

                  <p className="mt-6 text-center text-[12px]" style={{ ...nums, color: muted }}>
                    {ORDERS.length} orders · {paidOrders.length} confirmed · {money(paidTotal)} paid.
                    Awaiting-payment and failed orders issue no tickets.
                  </p>
                </>
              )}
            </section>
          </div>
        )}

        {/* ── TICKETS ──────────────────────────────────────── */}
        {tab === "tickets" && (
          <div {...panelProps("tickets")}>
            <section data-wf="b-3-0" className="m-2">
              <div className="text-center">
                <h2 className="text-[17px] uppercase" style={{ ...headingFont, color: ink }}>
                  QR tickets (confirmed orders only)
                </h2>
                <p className="mx-auto mt-3 max-w-[58ch] text-[13px] leading-relaxed" style={{ color: muted }}>
                  Present the code at the gate. Tickets from past events stay in your order history.
                </p>
              </div>
              <div className="mx-auto mt-6 max-w-sm">
                <DoubleRule />
              </div>

              {/* stale / delayed-delivery notice */}
              <div
                className="mx-auto mt-8 flex max-w-2xl items-start gap-3 px-4 py-3"
                style={{ border: `1px solid ${hair}`, backgroundColor: gold + "2e" }}
              >
                <Clock className="mt-[2px] h-4 w-4 shrink-0" aria-hidden="true" style={{ color: ink }} />
                <p className="text-[13px] leading-relaxed" style={{ color: ink }}>
                  <span className="uppercase" style={{ ...headingFont, letterSpacing: "0.14em", fontSize: 11 }}>
                    Email delayed ·
                  </span>{" "}
                  the ticket email to {BUYER.email} is queued with our mail provider and retries at 15:05 IST.
                  Your tickets are valid and available on this page meanwhile.
                </p>
              </div>

              {TICKETS.length === 0 ? (
                <div className="mt-8">
                  <Empty
                    title="No tickets for upcoming events"
                    description="QR tickets appear the moment an order is paid. Your attended events keep their receipts in the Orders tab."
                    action={
                      <Button
                        type="button"
                        onClick={() => navigate("events")}
                        className="gb-ink-btn gb-focus px-6 py-3 text-[12px] uppercase"
                        style={{ ...headingFont, letterSpacing: "0.2em", backgroundColor: ink, color: gold, borderRadius: 0 }}
                      >
                        Browse events
                      </Button>
                    }
                  />
                </div>
              ) : (
                <ul className="mt-8 divide-y" style={{ borderTop: `1px solid ${hair}`, borderBottom: `1px solid ${hair}`, borderColor: hair }}>
                  {TICKETS.map((t) => (
                    <li
                      key={t.id}
                      data-wf={t.wf}
                      className="flex flex-wrap items-center justify-between gap-4 px-2 py-5"
                      style={{ borderColor: hair }}
                    >
                      <div className="min-w-0">
                        <p className="text-[15px]" style={{ color: ink }}>
                          <span className="uppercase" style={{ ...headingFont, letterSpacing: "0.12em" }}>
                            {t.event}
                          </span>
                        </p>
                        <p className="mt-1 text-[13px]" style={{ ...nums, color: muted }}>
                          {t.when} · {t.venue}
                        </p>
                        <p className="mt-1 text-[13px]" style={{ ...nums, color: ink }}>
                          {t.qr_identifier}
                        </p>
                      </div>
                      <Badge
                        className="inline-flex items-center gap-2 px-2 py-1 text-[11px] uppercase"
                        style={{ ...headingFont, letterSpacing: "0.1em", borderRadius: 0, backgroundColor: ink, color: gold }}
                      >
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        Valid for entry
                      </Badge>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* Row 5 : the two QR plates */}
            {TICKETS.length > 0 && (
              <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-12">
                {TICKETS.map((t, i) => (
                  <figure
                    key={t.id}
                    data-wf={t.frameWf}
                    className={
                      "gb-frame m-2 px-6 py-8 text-center sm:col-span-4 " +
                      (i === 0 ? "sm:col-start-3" : "sm:col-start-7")
                    }
                  >
                    <p className="text-[11px] uppercase" style={{ ...headingFont, letterSpacing: "0.26em", color: muted }}>
                      Admit one
                    </p>
                    <div className="mx-auto mt-4 w-full max-w-[208px]" style={{ border: `1px solid ${hair}`, padding: 8, backgroundColor: "white" }}>
                      {renderQr(t.qr_identifier, `QR code for ticket ${t.qr_identifier}, ${t.event}`)}
                    </div>
                    <figcaption className="mt-5">
                      <h3 className="text-[13px] uppercase" style={{ ...headingFont, letterSpacing: "0.16em", color: ink }}>
                        {t.qr_identifier}
                      </h3>
                      <p className="mt-2 text-[12px] leading-relaxed" style={{ ...nums, color: muted }}>
                        {t.ticket_type} · {t.holder}
                        <br />
                        {t.event}, {t.when}
                        <br />
                        {t.venue}
                        <br />
                        Order {t.order_reference}
                      </p>
                    </figcaption>
                    <div className="mx-auto mt-5 max-w-[140px]">
                      <DoubleRule />
                    </div>
                  </figure>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── PRIVACY ──────────────────────────────────────── */}
        {tab === "privacy" && (
          <div {...panelProps("privacy")}>
            <Card data-wf="b-5-0" className="gb-frame m-2 px-4 py-8 sm:px-8" style={{ borderRadius: 0 }}>
              <CardHeader className="p-0 text-center">
                <CardTitle className="text-[17px] uppercase" style={{ ...headingFont, color: ink }}>
                  Privacy settings
                </CardTitle>
                <CardDescription className="mx-auto mt-3 max-w-[60ch] text-[13px] leading-relaxed" style={{ color: muted }}>
                  Consents recorded under the DPDP Act against {BUYER.email}. Turn one off to withdraw it —
                  the same single step that granted it.
                </CardDescription>
              </CardHeader>

              <div className="mx-auto mt-6 max-w-sm">
                <DoubleRule />
              </div>

              <CardContent className="p-0">
                <ul className="mt-8" style={{ borderTop: `1px solid ${hair}` }}>
                  {consents.map((c) => (
                    <li
                      key={c.id}
                      className="flex flex-wrap items-start justify-between gap-6 px-2 py-6"
                      style={{ borderBottom: `1px solid ${hair}` }}
                    >
                      <div className="min-w-0 max-w-[62ch]">
                        <h3 className="text-[14px] uppercase" style={{ ...headingFont, letterSpacing: "0.14em", color: ink }}>
                          {c.purpose}
                        </h3>
                        <p className="mt-2 text-[13px] leading-relaxed" style={{ color: muted }}>
                          {c.granted ? c.detail : c.detailWithdrawn}
                        </p>
                        <p className="mt-3 inline-flex items-center gap-2 text-[12px]" style={{ ...nums, color: ink }}>
                          {c.granted ? (
                            <Check className="h-3.5 w-3.5" aria-hidden="true" style={{ color: ink }} />
                          ) : (
                            <X className="h-3.5 w-3.5" aria-hidden="true" style={{ color: ink }} />
                          )}
                          {c.granted
                            ? `Consent granted ${c.granted_at}`
                            : `Consent withdrawn ${c.withdrawn_at}`}
                        </p>
                      </div>
                      <div className="flex min-h-[44px] items-center gap-3">
                        <Checkbox
                          data-wf={c.wf}
                          id={`consent-${c.id}`}
                          checked={c.granted}
                          disabled={busy}
                          onChange={(e) =>
                            toggleConsent(
                              c,
                              typeof e === "boolean" ? e : !!(e && e.target && e.target.checked)
                            )
                          }
                          className="gb-focus h-5 w-5"
                          style={{ accentColor: ink, borderRadius: 0 }}
                        />
                        <Label
                          htmlFor={`consent-${c.id}`}
                          className="cursor-pointer text-[11px] uppercase"
                          style={{ ...headingFont, letterSpacing: "0.16em", color: ink }}
                        >
                          {c.granted ? "Consent on" : "Consent off"}
                        </Label>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* blocked-withdrawal error state */}
                {withdrawError && (
                  <div
                    className="gb-rise mt-8 flex items-start gap-3 px-5 py-4"
                    role="alert"
                    style={{ border: `1px solid ${ink}`, backgroundColor: gold + "2e" }}
                  >
                    <AlertCircle className="mt-[2px] h-4 w-4 shrink-0" aria-hidden="true" style={{ color: ink }} />
                    <p className="text-[13px] leading-relaxed" style={{ color: ink }}>
                      <span className="uppercase" style={{ ...headingFont, letterSpacing: "0.14em", fontSize: 11 }}>
                        Can't withdraw yet ·
                      </span>{" "}
                      {withdrawError}
                    </p>
                  </div>
                )}

                {/* result / confirmation state */}
                {result && (
                  <div
                    className="gb-rise mt-8 px-5 py-5"
                    role="status"
                    style={{ border: `1px solid ${ink}`, backgroundColor: gold + "33" }}
                  >
                    <h3 className="flex items-center gap-2 text-[12px] uppercase" style={{ ...headingFont, letterSpacing: "0.18em", color: ink }}>
                      <CheckCircle className="h-4 w-4" aria-hidden="true" />
                      {result.kind === "withdrawn"
                        ? `Consent withdrawn — ${result.at}`
                        : `Consent re-recorded — ${result.at}`}
                    </h3>
                    <dl className="mt-4 space-y-3 text-[13px] leading-relaxed" style={{ color: ink }}>
                      <div>
                        <dt className="text-[11px] uppercase" style={{ ...headingFont, letterSpacing: "0.14em", color: muted }}>
                          {result.kind === "withdrawn" ? "Stopped" : "Granted"}
                        </dt>
                        <dd className="mt-1">
                          {result.stopped.join(", ")}.{" "}
                          {result.kind === "withdrawn"
                            ? "Processing for these purposes has ended and the withdrawal is logged against your account."
                            : "Recorded with today's timestamp and purpose against your account."}
                        </dd>
                      </div>
                      {result.blocked.length > 0 && (
                        <div>
                          <dt className="text-[11px] uppercase" style={{ ...headingFont, letterSpacing: "0.14em", color: muted }}>
                            Not withdrawn
                          </dt>
                          <dd className="mt-1">
                            {result.blocked.join(", ")} — order {pendingOrder.order_reference} is awaiting
                            payment. Complete or cancel it, then withdraw.
                          </dd>
                        </div>
                      )}
                      <div>
                        <dt className="text-[11px] uppercase" style={{ ...headingFont, letterSpacing: "0.14em", color: muted }}>
                          Lawfully retained
                        </dt>
                        <dd className="mt-1" style={nums}>
                          Your paid orders (ORD-2026-8F3A, ORD-2026-4E91, ORD-2026-3D58), their tax invoices and
                          the tickets issued against them. Tax and payment rules require us to keep these; they are
                          used for nothing else.
                        </dd>
                      </div>
                    </dl>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Row 7 : notice + withdraw action */}
            <div className="mt-10 grid grid-cols-1 items-center gap-8 px-2 sm:grid-cols-12">
              <p
                data-wf="b-6-0"
                className="text-[14px] leading-relaxed sm:col-span-8"
                style={{ color: muted }}
              >
                Withdrawing consent stops processing for those purposes. Order and tax records for tickets you
                have already bought are retained as the law requires.
              </p>
              <div className="sm:col-span-4 sm:text-right">
                <Button
                  data-wf="b-6-1"
                  type="button"
                  disabled={busy || grantedConsents.length === 0}
                  onClick={() => withdraw(grantedConsents.map((c) => c.id))}
                  className="gb-ink-btn gb-focus w-full min-h-[48px] px-8 py-3 text-[12px] uppercase sm:w-auto"
                  style={{
                    ...headingFont,
                    letterSpacing: "0.22em",
                    backgroundColor: ink,
                    color: gold,
                    borderRadius: 0,
                    border: `1px solid ${ink}`,
                  }}
                >
                  {busy ? "Recording withdrawal…" : "Withdraw consent"}
                </Button>
                {busy && (
                  <p className="mt-3 text-[12px] sm:text-right" style={{ ...nums, color: muted }} role="status">
                    Writing to the consent ledger · purpose and timestamp
                  </p>
                )}
                {!busy && grantedConsents.length === 0 && (
                  <p className="mt-3 text-[12px] sm:text-right" style={{ color: muted }}>
                    Every consent is already withdrawn. Turn one back on above to re-grant it.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mx-auto mt-14 max-w-xl">
          <DoubleRule />
        </div>
        <p className="mt-5 text-center text-[12px]" style={{ color: faint }}>
          Data stored in India · Questions about your record? Write to privacy@quorq.ai
        </p>
      </div>
    </div>
  );
}
