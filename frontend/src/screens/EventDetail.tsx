// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Input, Label, Badge, Table, THead, TBody, TR, TH, TD, Empty } = UI;

const EVENT = {
  id: "evt_8841",
  title: "Sunburn Arena Night",
  description:
    "An eight-hour electronic music showcase with four headline acts, food trucks and an open-air main stage. Gates open at 6:00 PM; entry with a valid QR ticket only.",
  venue: "Phoenix Marketcity, Whitefield",
  city: "Bengaluru",
  starts_at: "Saturday, 12 Dec 2026, 7:00 PM",
  organizer: "Nightfall Collective",
  status: "published",
  roman: "XII · XII · MMXXVI",
};

const TICKET_TYPES = [
  {
    id: "tt_ga",
    name: "General Admission",
    short: "General Admission",
    note: "Standing, main arena. Gates 6:00 PM.",
    price: 899,
    total_quantity: 1200,
    sold_quantity: 1083,
  },
  {
    id: "tt_gold",
    name: "Gold Circle",
    short: "Gold",
    note: "Front-of-stage pit with a dedicated bar.",
    price: 2499,
    total_quantity: 300,
    sold_quantity: 296,
  },
  {
    id: "tt_early",
    name: "Early Bird",
    short: "Early Bird",
    note: "Sales closed 14 Oct 2026.",
    price: 699,
    total_quantity: 500,
    sold_quantity: 500,
  },
  {
    id: "tt_lounge",
    name: "Backstage Lounge",
    short: "Backstage Lounge",
    note: "Seated lounge, dinner and artist meet.",
    price: 6500,
    total_quantity: 60,
    sold_quantity: 41,
  },
];

const BUYER = { display_name: "Ananya Rao", email: "ananya.rao@gmail.com" };
const ORDER_REFERENCE = "ORD-2026-0481";
const COMMISSION_RATE = 0.06;
const GATEWAY_LIMIT = 25000;
const MAX_PER_TYPE = 10;

export default function Screen() {
  const navigate = useNavigate();
  const [qty, setQty] = React.useState({ tt_ga: 2 });
  const [status, setStatus] = React.useState("idle"); // idle | processing | confirmed | failed
  const [failure, setFailure] = React.useState(null);
  const timerRef = React.useRef(null);
  const payRef = React.useRef(null);
  const closeRef = React.useRef(null);

  const P = brand.primaryColor;
  const A = brand.accentColor;
  const N = brand.neutralColor;
  const BG = brand.backgroundColor;
  const mix = (c, pct) => `color-mix(in srgb, ${c} ${pct}%, ${BG})`;
  const fade = (c, pct) => `color-mix(in srgb, ${c} ${pct}%, transparent)`;
  const hair = mix(P, 18);
  const inr = (n) => "₹" + Number(n).toLocaleString("en-IN");
  const num = { fontVariantNumeric: "tabular-nums" };

  React.useEffect(() => () => clearTimeout(timerRef.current), []);

  const rows = TICKET_TYPES.map((t) => ({
    ...t,
    remaining: t.total_quantity - t.sold_quantity,
    q: qty[t.id] || 0,
  }));
  const selected = rows.filter((r) => r.q > 0);
  const over = selected.find((r) => r.q > r.remaining);
  const subtotal = selected.reduce((s, r) => s + r.q * r.price, 0);
  const ticketCount = selected.reduce((s, r) => s + r.q, 0);
  const commission = Math.round(subtotal * COMMISSION_RATE);
  const canPay = subtotal > 0 && !over && status !== "processing";

  const setQuantity = (id, value) => {
    const n = Math.max(0, Math.min(99, Number.isNaN(value) ? 0 : value));
    setQty((prev) => ({ ...prev, [id]: n }));
    if (status === "failed") setFailure(null), setStatus("idle");
  };

  const pay = () => {
    if (!canPay) return;
    setFailure(null);
    setStatus("processing");
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (subtotal > GATEWAY_LIMIT) {
        setStatus("failed");
        setFailure(
          "Razorpay declined this payment — the issuing bank flagged an amount above " +
            inr(GATEWAY_LIMIT) +
            ". Your selection is kept below; try another card or UPI."
        );
      } else {
        setStatus("confirmed");
      }
    }, 1500);
  };

  const closeModal = React.useCallback(() => {
    setStatus("idle");
    if (payRef.current) payRef.current.focus();
  }, []);

  React.useEffect(() => {
    if (status !== "confirmed") return;
    if (closeRef.current) closeRef.current.focus();
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [status, closeModal]);

  const Diamond = (
    <span
      aria-hidden="true"
      style={{
        width: 7,
        height: 7,
        transform: "rotate(45deg)",
        backgroundColor: A,
        border: `1px solid ${P}`,
        flex: "none",
      }}
    />
  );

  const rule = (
    <div className="flex items-center gap-3 py-1" aria-hidden="true">
      <span className="flex-1" style={{ height: 1, backgroundColor: A }} />
      {Diamond}
      <span className="flex-1" style={{ height: 1, backgroundColor: A }} />
    </div>
  );

  const frameOuter = { border: `1px solid ${P}`, padding: 4, borderRadius: brand.radius };
  const frameInner = { border: `1px solid ${A}` };

  const label = {
    fontFamily: brand.fontHeading,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
  };

  return (
    <div
      className="gq-root mx-auto w-full max-w-5xl px-4 pb-20 pt-6 sm:px-6"
      style={{ backgroundColor: BG, color: P, fontFamily: brand.fontBody }}
    >
      <style>{`
        .gq-root :focus-visible { outline: 2px solid ${P}; outline-offset: 2px; }
        .gq-line { animation: gq-rise .32s ease-out both; }
        .gq-panel { animation: gq-pop .28s cubic-bezier(.2,.7,.3,1) both; }
        .gq-veil { animation: gq-fade .2s ease-out both; }
        .gq-bar { position:relative; overflow:hidden; }
        .gq-bar:after { content:""; position:absolute; inset:0; width:36%;
          background: linear-gradient(90deg, transparent, ${A}, transparent);
          animation: gq-sweep 1.1s linear infinite; }
        @keyframes gq-rise { from { opacity:0; transform: translateY(6px);} to {opacity:1; transform:none;} }
        @keyframes gq-pop { from { opacity:0; transform: scale(.97);} to {opacity:1; transform:none;} }
        @keyframes gq-fade { from { opacity:0 } to { opacity:1 } }
        @keyframes gq-sweep { from { transform: translateX(-120%);} to { transform: translateX(320%);} }
        @media (prefers-reduced-motion: reduce) {
          .gq-line, .gq-panel, .gq-veil, .gq-bar:after { animation: none !important; }
        }
      `}</style>

      {/* Row 1 — back link */}
      <button
        type="button"
        data-wf="b-0-0"
        onClick={() => navigate("events")}
        className="inline-flex items-center gap-2 px-1 py-2 text-xs transition-colors"
        style={{ ...label, color: N }}
        onMouseEnter={(e) => (e.currentTarget.style.color = P)}
        onMouseLeave={(e) => (e.currentTarget.style.color = N)}
      >
        <Icons.ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to events
      </button>

      {/* Row 2 — banner */}
      <div data-wf="b-1-0" style={frameOuter} className="mt-3">
        <div style={frameInner}>
          <div
            role="img"
            aria-label="Art-deco banner for Sunburn Arena Night: a gilded sunburst rising behind the main stage"
            className="flex h-44 flex-col items-center justify-center gap-3 sm:h-56"
            style={{
              backgroundColor: P,
              backgroundImage: `repeating-conic-gradient(from 200deg at 50% 118%, ${fade(
                A,
                26
              )} 0deg 1.6deg, transparent 1.6deg 7deg)`,
            }}
          >
            <div className="flex items-center gap-3">
              <span style={{ width: 54, height: 1, backgroundColor: A }} />
              <span
                style={{
                  width: 9,
                  height: 9,
                  transform: "rotate(45deg)",
                  border: `1px solid ${A}`,
                }}
              />
              <span style={{ width: 54, height: 1, backgroundColor: A }} />
            </div>
            <p className="text-[11px] sm:text-sm" style={{ ...label, color: A, ...num }}>
              {EVENT.roman}
            </p>
            <p className="text-[10px]" style={{ ...label, color: mix(A, 70), letterSpacing: "0.3em" }}>
              Main stage · Open air
            </p>
          </div>
        </div>
      </div>

      {/* Row 3 — title */}
      <header data-wf="b-2-0" className="mt-8 text-center">
        <h1
          className="text-3xl leading-tight sm:text-4xl"
          style={{ ...label, letterSpacing: "0.12em", color: P }}
        >
          {EVENT.title}
        </h1>
        <p className="mt-3 text-xs" style={{ color: N, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Presented by {EVENT.organizer}
          <span aria-hidden="true"> · </span>
          <Badge
            className="ml-1 align-middle text-[10px]"
            style={{
              ...label,
              letterSpacing: "0.14em",
              backgroundColor: fade(A, 38),
              color: P,
              border: `1px solid ${P}`,
              borderRadius: brand.radius,
            }}
          >
            On sale
          </Badge>
        </p>
        <div className="mx-auto mt-5 max-w-sm">{rule}</div>
      </header>

      {/* Row 4 — details + description */}
      <section className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-12">
        <div data-wf="b-3-0" className="sm:col-span-5">
          <h2 className="text-xs" style={{ ...label, color: N }}>
            Event details
          </h2>
          <ul className="mt-4" style={{ borderTop: `1px solid ${hair}` }}>
            <li
              data-wf="i-3-0-0"
              className="flex items-start gap-3 py-3"
              style={{ borderBottom: `1px solid ${hair}` }}
            >
              <Icons.Calendar className="mt-0.5 h-4 w-4 flex-none" style={{ color: N }} aria-hidden="true" />
              <span className="text-sm" style={num}>
                {EVENT.starts_at}
              </span>
            </li>
            <li
              data-wf="i-3-0-1"
              className="flex items-start gap-3 py-3"
              style={{ borderBottom: `1px solid ${hair}` }}
            >
              <Icons.Home className="mt-0.5 h-4 w-4 flex-none" style={{ color: N }} aria-hidden="true" />
              <span className="text-sm">{EVENT.venue}</span>
            </li>
            <li
              data-wf="i-3-0-2"
              className="flex items-start gap-3 py-3"
              style={{ borderBottom: `1px solid ${hair}` }}
            >
              <Icons.Users className="mt-0.5 h-4 w-4 flex-none" style={{ color: N }} aria-hidden="true" />
              <span className="text-sm">{EVENT.city}</span>
            </li>
          </ul>
        </div>

        <div data-wf="b-3-1" className="sm:col-span-7">
          <h2 className="text-xs" style={{ ...label, color: N }}>
            About this event
          </h2>
          <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed" style={{ color: mix(P, 88) }}>
            {EVENT.description}
          </p>
        </div>
      </section>

      {/* Row 5 — ticket types */}
      <section data-wf="b-4-0" className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xs" style={{ ...label, color: P }}>
            Ticket types
          </h2>
          <p className="text-[11px]" style={{ color: N }}>
            Maximum {MAX_PER_TYPE} per ticket type, per order
          </p>
        </div>
        <div style={{ ...frameOuter, marginTop: 12 }}>
          <div style={frameInner}>
            <Table className="w-full" style={num}>
              <THead>
                <TR style={{ borderBottom: `1px solid ${P}`, backgroundColor: mix(P, 5) }}>
                  <TH data-wf="i-4-0-0" className="px-4 py-3 text-left text-[11px]" style={label}>
                    Ticket type
                  </TH>
                  <TH data-wf="i-4-0-1" className="px-4 py-3 text-right text-[11px]" style={label}>
                    Price
                  </TH>
                  <TH data-wf="i-4-0-2" className="px-4 py-3 text-left text-[11px]" style={label}>
                    Availability
                  </TH>
                  <TH data-wf="i-4-0-3" className="px-4 py-3 text-right text-[11px]" style={label}>
                    Quantity
                  </TH>
                </TR>
              </THead>
              <TBody>
                {rows.map((t, i) => {
                  const soldOut = t.remaining === 0;
                  const low = !soldOut && t.remaining <= 10;
                  const invalid = t.q > t.remaining;
                  return (
                    <TR
                      key={t.id}
                      style={{
                        borderBottom: i === rows.length - 1 ? "none" : `1px solid ${hair}`,
                        backgroundColor: t.q > 0 ? mix(A, 14) : "transparent",
                        transition: "background-color .25s ease",
                      }}
                    >
                      <TD className="px-4 py-4 align-top">
                        <span className="block text-sm font-semibold">{t.name}</span>
                        <span className="mt-1 block text-[12px]" style={{ color: N }}>
                          {t.note}
                        </span>
                      </TD>
                      <TD className="px-4 py-4 text-right align-top text-sm" style={num}>
                        {inr(t.price)}
                      </TD>
                      <TD className="px-4 py-4 align-top text-sm">
                        {soldOut ? (
                          <span className="inline-flex items-center gap-1.5" style={{ color: N }}>
                            <Icons.X className="h-3.5 w-3.5" aria-hidden="true" />
                            Sold out
                          </span>
                        ) : (
                          <span className="inline-flex flex-col">
                            <span style={num}>
                              {t.remaining.toLocaleString("en-IN")} of{" "}
                              {t.total_quantity.toLocaleString("en-IN")} left
                            </span>
                            {low && (
                              <span
                                className="mt-1 inline-flex w-fit items-center gap-1 px-1.5 py-0.5 text-[10px]"
                                style={{
                                  ...label,
                                  letterSpacing: "0.12em",
                                  border: `1px solid ${P}`,
                                  backgroundColor: fade(A, 45),
                                }}
                              >
                                <Icons.AlertCircle className="h-3 w-3" aria-hidden="true" />
                                Last few
                              </span>
                            )}
                          </span>
                        )}
                      </TD>
                      <TD className="px-4 py-4 text-right align-top">
                        <Label htmlFor={"qty-" + t.id} className="sr-only">
                          Quantity of {t.name} tickets
                        </Label>
                        <Input
                          id={"qty-" + t.id}
                          type="number"
                          min={0}
                          max={MAX_PER_TYPE}
                          inputMode="numeric"
                          disabled={soldOut}
                          value={soldOut ? 0 : t.q}
                          aria-invalid={invalid ? "true" : undefined}
                          aria-describedby={invalid ? "availability-note" : undefined}
                          onChange={(e) => setQuantity(t.id, parseInt(e.target.value, 10))}
                          className="ml-auto w-20 text-right text-sm"
                          style={{
                            ...num,
                            borderRadius: brand.radius,
                            border: `1px solid ${invalid ? P : hair}`,
                            backgroundColor: soldOut ? mix(N, 12) : mix(P, 3),
                            color: soldOut ? N : P,
                            minHeight: 44,
                            boxShadow: invalid ? `inset 0 -3px 0 ${A}` : "none",
                          }}
                        />
                      </TD>
                    </TR>
                  );
                })}
              </TBody>
            </Table>
          </div>
        </div>
        <p className="mt-2 text-[11px]" style={{ color: N }}>
          Availability refreshed moments ago — quantities are confirmed the instant payment completes.
        </p>
      </section>

      {/* Row 6 — order summary */}
      <Card
        data-wf="b-5-0"
        className="mt-10 border-0 bg-transparent shadow-none"
        style={{ borderRadius: 0 }}
      >
        <div style={frameOuter}>
          <div style={{ ...frameInner, backgroundColor: mix(P, 4) }}>
            <CardHeader className="px-6 pb-0 pt-6">
              <CardTitle className="text-xs" style={{ ...label, color: P }}>
                Order summary
              </CardTitle>
              <CardDescription className="mt-1 text-[12px]" style={{ color: N }}>
                Booking as {BUYER.display_name} · {BUYER.email}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-4">
              {selected.length === 0 ? (
                <Empty
                  title="No tickets chosen yet"
                  description="Set a quantity in the ticket table above and your line items, totals and Razorpay payment will appear here."
                />
              ) : (
                <>
                  <ul style={{ borderTop: `1px solid ${hair}` }}>
                    {selected.map((r) => (
                      <li
                        key={r.id}
                        className="gq-line flex items-baseline justify-between gap-4 py-3"
                        style={{ borderBottom: `1px solid ${hair}` }}
                      >
                        <span className="text-sm">
                          {r.name} <span style={num}>× {r.q}</span>{" "}
                          <span style={{ color: N, ...num }}>@ {inr(r.price)}</span>
                        </span>
                        <span className="text-sm" style={num}>
                          {inr(r.q * r.price)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[11px]" style={{ ...label, color: N }}>
                        Total · {ticketCount} ticket{ticketCount === 1 ? "" : "s"}
                      </p>
                      <p className="mt-1 text-[11px]" style={{ color: N, ...num }}>
                        Includes platform commission {inr(commission)} (6%)
                      </p>
                    </div>
                    <p className="text-3xl" style={{ ...num, fontFamily: brand.fontHeading, color: P }}>
                      {inr(subtotal)}
                    </p>
                  </div>
                </>
              )}
            </CardContent>
          </div>
        </div>
      </Card>

      {/* Row 7 — availability / hold note */}
      <p
        id="availability-note"
        data-wf="b-6-0"
        role="status"
        aria-live="polite"
        className="mt-5 flex items-start justify-center gap-2 px-4 py-3 text-center text-sm"
        style={{
          border: over ? `1px solid ${P}` : "none",
          backgroundColor: over ? fade(A, 35) : "transparent",
          color: over ? P : N,
        }}
      >
        {over ? (
          <>
            <Icons.AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />
            <span>
              <strong className="font-semibold" style={num}>
                Only {over.remaining} {over.short} tickets remain
              </strong>{" "}
              — reduce your quantity to continue.
            </span>
          </>
        ) : (
          <span>Your tickets are held for 10 minutes once Razorpay opens.</span>
        )}
      </p>

      {/* Row 8 — pay + sign in */}
      <div className="mt-6 grid grid-cols-1 items-start gap-6 sm:grid-cols-12">
        <div className="sm:col-span-6">
          {failure && (
            <div
              role="alert"
              className="mb-3 flex items-start gap-2 px-4 py-3 text-[13px] leading-relaxed"
              style={{ border: `1px solid ${P}`, backgroundColor: mix(P, 6) }}
            >
              <Icons.AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />
              <span>{failure}</span>
            </div>
          )}
          <Button
            data-wf="b-7-0"
            ref={payRef}
            type="button"
            onClick={pay}
            disabled={!canPay}
            aria-describedby="availability-note"
            className="w-full px-6 py-4 text-sm transition-opacity"
            style={{
              ...label,
              borderRadius: brand.radius,
              backgroundColor: canPay ? P : mix(P, 22),
              color: canPay ? A : mix(P, 55),
              border: `1px solid ${P}`,
              minHeight: 52,
              cursor: canPay ? "pointer" : "not-allowed",
            }}
          >
            {status === "processing"
              ? "Opening Razorpay…"
              : subtotal > 0
              ? `Pay ${inr(subtotal)} with Razorpay`
              : "Choose tickets to pay"}
          </Button>
          {status === "processing" ? (
            <div className="gq-bar mt-2 h-[3px]" style={{ backgroundColor: mix(P, 12) }} aria-hidden="true" />
          ) : (
            <p className="mt-2 text-[11px]" style={{ color: N }}>
              Card, UPI and netbanking · payment is captured by Razorpay
            </p>
          )}
        </div>

        <div className="sm:col-span-6">
          <div className="px-1 py-1 sm:px-4">
            <p className="text-[13px]" style={{ color: N }}>
              Booking for someone else, or not {BUYER.display_name.split(" ")[0]}?
            </p>
            <button
              type="button"
              data-wf="b-7-1"
              onClick={() => navigate("auth")}
              className="mt-2 inline-flex items-center gap-2 py-2 text-sm underline underline-offset-4"
              style={{ color: P, textDecorationColor: A }}
            >
              Sign in or register to book
              <Icons.ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Row 9 — confirmation */}
      {status === "confirmed" && (
        <div
          data-wf="b-8-0"
          className="gq-veil fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: fade(P, 68) }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-title"
            aria-describedby="confirm-desc"
            className="gq-panel w-full max-w-md"
            style={{ ...frameOuter, backgroundColor: BG, boxShadow: `0 24px 60px ${fade(P, 45)}` }}
          >
            <div style={{ ...frameInner, padding: 24 }}>
              <div className="flex justify-end">
                <button
                  type="button"
                  data-wf="i-8-0-1"
                  ref={closeRef}
                  onClick={closeModal}
                  aria-label="Close booking confirmation"
                  className="-mr-1 -mt-1 flex h-9 w-9 items-center justify-center"
                  style={{ border: `1px solid ${hair}`, color: P }}
                >
                  <Icons.X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center" style={{ border: `1px solid ${A}` }}>
                  <Icons.CheckCircle className="h-6 w-6" style={{ color: P }} aria-hidden="true" />
                </div>
                <h2 id="confirm-title" className="mt-5 text-lg" style={{ ...label, letterSpacing: "0.16em" }}>
                  Booking confirmed
                </h2>
                <div className="mx-auto mt-4 max-w-[14rem]">{rule}</div>
                <p className="mt-4 text-[11px]" style={{ ...label, color: N }}>
                  Order reference
                </p>
                <p className="mt-1 text-xl" style={{ ...num, fontFamily: brand.fontHeading, letterSpacing: "0.1em" }}>
                  {ORDER_REFERENCE}
                </p>
                <p id="confirm-desc" className="mt-4 text-sm leading-relaxed" style={{ color: mix(P, 85) }}>
                  A confirmation email with your QR tickets is on its way to {BUYER.email}.
                </p>

                <dl className="mt-5 text-left text-[13px]" style={{ borderTop: `1px solid ${hair}` }}>
                  <div className="flex justify-between gap-4 py-2" style={{ borderBottom: `1px solid ${hair}` }}>
                    <dt style={{ color: N }}>Event</dt>
                    <dd className="text-right">{EVENT.title}</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-2" style={{ borderBottom: `1px solid ${hair}` }}>
                    <dt style={{ color: N }}>Tickets</dt>
                    <dd className="text-right" style={num}>
                      {selected.map((r) => `${r.name} × ${r.q}`).join(", ")}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 py-2" style={{ borderBottom: `1px solid ${hair}` }}>
                    <dt style={{ color: N }}>Paid</dt>
                    <dd className="text-right" style={num}>
                      {inr(subtotal)}
                    </dd>
                  </div>
                </dl>

                <p className="mt-4 text-[11px] leading-relaxed" style={{ color: N }}>
                  If the email runs late, your QR tickets are already saved to your account.
                </p>

                <Button
                  data-wf="i-8-0-0"
                  type="button"
                  onClick={() => navigate("my-account")}
                  className="mt-6 w-full px-6 py-3 text-sm"
                  style={{
                    ...label,
                    borderRadius: brand.radius,
                    backgroundColor: P,
                    color: A,
                    border: `1px solid ${P}`,
                    minHeight: 48,
                  }}
                >
                  View my tickets
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
