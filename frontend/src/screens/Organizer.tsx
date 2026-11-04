// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Select, Badge, Table, THead, TBody, TR, TH, TD, Avatar, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, Check, X, Users, Calendar, Edit, AlertCircle, CheckCircle } = Icons;

const SURFACE = 'rgba(255,255,255,0.62)';

const hexToRgb = (hex) => {
  const h = hex.replace('#', '');
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
};
const mix = (a, b, t) => {
  const A = hexToRgb(a);
  const B = hexToRgb(b);
  const c = A.map((v, i) => Math.round(v + (B[i] - v) * t));
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
};
const alpha = (hex, a) => {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const MUTED = mix(brand.neutralColor, brand.primaryColor, 0.55);
const HAIR = alpha(brand.primaryColor, 0.14);
const WASH = alpha(brand.accentColor, 0.26);
const HOVER = alpha(brand.accentColor, 0.13);

const rupees = (n) => {
  try {
    return '₹' + Number(n).toLocaleString('en-IN');
  } catch (e) {
    return '₹' + Number(n).toLocaleString();
  }
};

const EVENTS = [
  {
    id: 'evt_8821',
    title: 'Sunburn Arena Night',
    venue: 'Phoenix Marketcity Grounds',
    city: 'Mumbai',
    startsDisplay: 'Sat 21 Nov 2026 · 7:30 PM',
    status: 'published',
    ticketTypes: 3,
    sold: 212,
    remaining: 88,
    revenue: 201400,
  },
  {
    id: 'evt_8834',
    title: 'The Gatsby Supper Club',
    venue: 'The Grand Ballroom, Taj Lands End',
    city: 'Mumbai',
    startsDisplay: 'Sat 28 Nov 2026 · 8:00 PM',
    status: 'published',
    ticketTypes: 2,
    sold: 96,
    remaining: 24,
    revenue: 144000,
  },
  {
    id: 'evt_8847',
    title: 'Kaapi & Comedy: Bengaluru Set 2',
    venue: 'Ranga Shankara',
    city: 'Bengaluru',
    startsDisplay: 'Sat 12 Dec 2026 · 6:00 PM',
    status: 'published',
    ticketTypes: 2,
    sold: 108,
    remaining: 42,
    revenue: 54000,
  },
  {
    id: 'evt_8851',
    title: 'Raga at Dawn',
    venue: 'Chowdiah Memorial Hall',
    city: 'Bengaluru',
    startsDisplay: 'Sun 06 Dec 2026 · 5:30 AM',
    status: 'unpublished',
    ticketTypes: 2,
    sold: 70,
    remaining: 0,
    revenue: 37414,
  },
  {
    id: 'evt_8860',
    title: 'Monsoon Qawwali Evening',
    venue: 'Bandra Fort Amphitheatre',
    city: 'Mumbai',
    startsDisplay: 'Sat 09 Jan 2027 · 7:00 PM',
    status: 'draft',
    ticketTypes: 1,
    sold: 0,
    remaining: 60,
    revenue: 0,
  },
  {
    id: 'evt_8872',
    title: 'Indie Ink Zine Fair',
    venue: '',
    city: 'Pune',
    startsDisplay: 'Sun 24 Jan 2027 · 11:00 AM',
    status: 'draft',
    ticketTypes: 0,
    sold: 0,
    remaining: 0,
    revenue: 0,
  },
];

const ATTENDEES = {
  evt_8821: [
    { name: 'Ananya Kulkarni', email: 'ananya.kulkarni@gmail.com', type: 'Early Bird GA', qty: 2, ids: ['SBN-26-0441', 'SBN-26-0442'] },
    { name: 'Rohit Menon', email: 'r.menon@outlook.com', type: 'GA Standing', qty: 4, ids: ['SBN-26-0503', 'SBN-26-0504', 'SBN-26-0505', 'SBN-26-0506'] },
    { name: 'Farah Qureshi', email: 'farah.q@zohomail.in', type: 'VIP Deck', qty: 1, ids: ['SBN-26-0608'] },
    { name: 'Dev Raghunathan', email: 'dev.raghu@proton.me', type: 'GA Standing', qty: 3, ids: ['SBN-26-0671', 'SBN-26-0672', 'SBN-26-0673'] },
    { name: 'Meera Iyer', email: 'meera.iyer@hotmail.com', type: 'Early Bird GA', qty: 2, ids: ['SBN-26-0718', 'SBN-26-0719'] },
    { name: 'Sandeep Bhatia', email: 'sandeep@bhatiacollective.in', type: 'VIP Deck', qty: 2, ids: ['SBN-26-0802', 'SBN-26-0803'] },
  ],
  evt_8834: [
    { name: 'Nikhil Dsouza', email: 'nikhil.dsouza@gmail.com', type: 'Supper & Show', qty: 2, ids: ['GSC-26-0117', 'GSC-26-0118'] },
    { name: 'Priya Varghese', email: 'priya.v@rediffmail.com', type: 'Supper & Show', qty: 2, ids: ['GSC-26-0133', 'GSC-26-0134'] },
    { name: 'Aarav Shah', email: 'aarav.shah@quorq.ai', type: 'Balcony GA', qty: 1, ids: ['GSC-26-0190'] },
    { name: 'Tanvi Deshmukh', email: 'tanvi.deshmukh@gmail.com', type: 'Balcony GA', qty: 2, ids: ['GSC-26-0206', 'GSC-26-0207'] },
  ],
  evt_8847: [
    { name: 'Harsha Gowda', email: 'harsha.gowda@gmail.com', type: 'GA Seating', qty: 2, ids: ['KAC-26-0312', 'KAC-26-0313'] },
    { name: 'Lakshmi Narayan', email: 'l.narayan@yahoo.in', type: 'Front Rows', qty: 1, ids: ['KAC-26-0355'] },
    { name: 'Zoya Sheikh', email: 'zoya.sheikh@outlook.com', type: 'GA Seating', qty: 3, ids: ['KAC-26-0401', 'KAC-26-0402', 'KAC-26-0403'] },
  ],
  evt_8851: [
    { name: 'Vikram Rao', email: 'vikram.rao@gmail.com', type: 'Dawn Pass', qty: 2, ids: ['RAD-26-0048', 'RAD-26-0049'] },
    { name: 'Sheetal Pande', email: 'sheetal.pande@zohomail.in', type: 'Patron Row', qty: 1, ids: ['RAD-26-0091'] },
  ],
  evt_8860: [],
  evt_8872: [],
};

const STATUS_COPY = {
  published: 'Published',
  draft: 'Draft',
  unpublished: 'Unpublished',
};

const Rule = ({ className = '' }) => (
  <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
    <span className="flex-1 h-[3px]" style={{ borderTop: `1px solid ${brand.accentColor}`, borderBottom: `1px solid ${brand.accentColor}` }} />
    <span className="h-[7px] w-[7px] rotate-45" style={{ backgroundColor: brand.primaryColor }} />
    <span className="flex-1 h-[3px]" style={{ borderTop: `1px solid ${brand.accentColor}`, borderBottom: `1px solid ${brand.accentColor}` }} />
  </div>
);

const Frame = ({ children, className = '', bodyClass = '' }) => (
  <div className={`p-[3px] ${className}`} style={{ border: `1px solid ${brand.primaryColor}`, borderRadius: 0 }}>
    <div
      className={`h-full ${bodyClass}`}
      style={{ border: `1px solid ${brand.accentColor}`, backgroundColor: SURFACE, borderRadius: 0 }}
    >
      {children}
    </div>
  </div>
);

export default function Screen() {
  const navigate = useNavigate();
  const [events, setEvents] = React.useState(EVENTS);
  const [selectedId, setSelectedId] = React.useState('evt_8821');
  const [attendeeFor, setAttendeeFor] = React.useState('evt_8821');
  const [loadingAttendees, setLoadingAttendees] = React.useState(false);
  const [notice, setNotice] = React.useState(null);

  React.useEffect(() => {
    if (!loadingAttendees) return undefined;
    const t = setTimeout(() => setLoadingAttendees(false), 520);
    return () => clearTimeout(t);
  }, [loadingAttendees, attendeeFor]);

  const selected = events.find((e) => e.id === selectedId) || events[0];
  const shownEvent = events.find((e) => e.id === attendeeFor) || events[0];
  const attendees = ATTENDEES[attendeeFor] || [];
  const ticketCount = attendees.reduce((s, a) => s + a.qty, 0);

  const totals = events.reduce(
    (acc, e) => ({
      sold: acc.sold + e.sold,
      remaining: acc.remaining + e.remaining,
      revenue: acc.revenue + e.revenue,
    }),
    { sold: 0, remaining: 0, revenue: 0 }
  );
  const sellingEvents = events.filter((e) => e.sold > 0).length;
  const commission = Math.round(totals.revenue * 0.05);

  const publish = () => {
    const missing = [];
    if (!selected.venue) missing.push('a venue');
    if (!selected.startsDisplay) missing.push('a date and time');
    if (selected.ticketTypes === 0) missing.push('at least one ticket type');
    if (missing.length) {
      setNotice({
        kind: 'error',
        title: 'Publishing is blocked',
        body: `${selected.title} still needs ${missing.join(' and ')}. Add that on the event page, then publish.`,
      });
      return;
    }
    setEvents((prev) => prev.map((e) => (e.id === selected.id ? { ...e, status: 'published' } : e)));
    setNotice({
      kind: 'success',
      title: 'Event published',
      body: `${selected.title} is now listed publicly and its ${selected.remaining} remaining tickets are on sale.`,
    });
  };

  const unpublish = () => {
    setEvents((prev) => prev.map((e) => (e.id === selected.id ? { ...e, status: 'unpublished' } : e)));
    setNotice({
      kind: 'success',
      title: 'Event unpublished',
      body: `${selected.title} is off public browsing and new bookings are stopped. The ${selected.sold} tickets already booked stay valid.`,
    });
  };

  const viewAttendees = () => {
    setAttendeeFor(selected.id);
    setLoadingAttendees(true);
  };

  const btnBase =
    'gat-focus inline-flex items-center justify-center gap-2 px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition-colors duration-150 min-h-[48px]';

  const secondaryStyle = (disabled) => ({
    backgroundColor: disabled ? 'transparent' : SURFACE,
    color: brand.primaryColor,
    border: `1px solid ${brand.primaryColor}`,
    borderRadius: 0,
    fontFamily: brand.fontHeading,
    opacity: disabled ? 0.42 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
  });

  const statCards = [
    { wf: 'b-1-0', label: 'Tickets sold', value: String(totals.sold), hint: `Confirmed, paid orders across ${sellingEvents} events` },
    { wf: 'b-1-1', label: 'Remaining', value: String(totals.remaining), hint: 'Inventory still on sale right now' },
    { wf: 'b-1-2', label: 'Gross revenue', value: rupees(totals.revenue), hint: `Before ${rupees(commission)} platform commission` },
  ];

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: brand.backgroundColor,
        color: brand.primaryColor,
        fontFamily: brand.fontBody,
        '--gat-primary': brand.primaryColor,
        '--gat-accent': brand.accentColor,
        '--gat-wash': WASH,
        '--gat-hover': HOVER,
      }}
    >
      <style>{`
        .gat-focus:focus-visible { outline: 2px solid var(--gat-primary); outline-offset: 3px; }
        .gat-row { transition: background-color .18s ease; }
        .gat-row:hover { background-color: var(--gat-hover); }
        .gat-row-sel, .gat-row-sel:hover { background-color: var(--gat-wash); }
        .gat-radio { accent-color: var(--gat-primary); width: 18px; height: 18px; }
        .gat-ghost:hover { background-color: var(--gat-hover); }
        .gat-solid:hover { background-color: #1d322c; }
        @keyframes gat-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
        .gat-in { animation: gat-in .3s ease-out both; }
        @keyframes gat-pulse { 0%, 100% { opacity: .3; } 50% { opacity: .7; } }
        .gat-skel { animation: gat-pulse 1.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .gat-in, .gat-skel { animation: none !important; }
          .gat-row, .gat-ghost, .gat-solid { transition: none !important; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Row 1 — title + primary action */}
        <div className="grid grid-cols-12 gap-6 items-end">
          <div data-wf="b-0-0" className="col-span-12 md:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.38em]" style={{ color: MUTED, fontFamily: brand.fontHeading }}>
              Quorq Live · Organizer
            </p>
            <h1
              className="mt-3 text-[32px] sm:text-[40px] leading-[1.15] uppercase tracking-[0.16em]"
              style={{ fontFamily: brand.fontHeading }}
            >
              My events
            </h1>
            <p className="mt-3 text-sm leading-relaxed max-w-[60ch]" style={{ color: MUTED }}>
              Susan Raya · {events.length} events you own. Sales figures count confirmed, paid orders only, as of 09:42 IST today.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex md:justify-end">
            <button
              type="button"
              data-wf="b-0-1"
              onClick={() => navigate('organizer-event-edit')}
              className={`${btnBase} gat-solid w-full md:w-auto`}
              style={{
                backgroundColor: brand.primaryColor,
                color: brand.accentColor,
                border: `1px solid ${brand.primaryColor}`,
                borderRadius: 0,
                fontFamily: brand.fontHeading,
                boxShadow: `inset 0 0 0 1px ${alpha(brand.accentColor, 0.45)}`,
              }}
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              Create event
            </button>
          </div>
        </div>

        <Rule className="mt-6" />

        {/* Row 2 — figures */}
        <h2 className="sr-only">Sales summary across my events</h2>
        <div className="mt-8 grid grid-cols-12 gap-4 sm:gap-6">
          {statCards.map((s) => (
            <div key={s.wf} data-wf={s.wf} className="col-span-12 sm:col-span-4">
              <Frame className="h-full">
                <div className="px-6 py-6 text-center">
                  <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: MUTED, fontFamily: brand.fontHeading }}>
                    {s.label}
                  </p>
                  <p
                    className="mt-3 text-[34px] leading-none"
                    style={{ fontFamily: brand.fontHeading, fontVariantNumeric: 'tabular-nums', letterSpacing: '0.04em' }}
                  >
                    {s.value}
                  </p>
                  <div className="mt-4 flex justify-center" aria-hidden="true">
                    <span className="h-[5px] w-[5px] rotate-45" style={{ backgroundColor: brand.accentColor }} />
                  </div>
                  <p className="mt-3 text-xs leading-relaxed" style={{ color: MUTED }}>
                    {s.hint}
                  </p>
                </div>
              </Frame>
            </div>
          ))}
        </div>

        {/* Row 3 — events table */}
        <section data-wf="b-2-0" aria-labelledby="events-heading" className="mt-10">
          <Frame>
            <div className="px-5 sm:px-8 pt-7 pb-4 text-center">
              <h2
                id="events-heading"
                className="text-[18px] uppercase tracking-[0.3em]"
                style={{ fontFamily: brand.fontHeading }}
              >
                Events I own
              </h2>
              <p className="mt-2 text-xs" style={{ color: MUTED }}>
                susan.raya@quorq.ai · select a row to act on it below, or open the title to edit
              </p>
              <Rule className="mt-5" />
            </div>

            <div className="overflow-x-auto">
              <Table className="w-full text-sm" style={{ fontVariantNumeric: 'tabular-nums', borderCollapse: 'collapse' }}>
                <THead>
                  <TR style={{ borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${brand.accentColor}` }}>
                    <TH
                      data-wf="i-2-0-0"
                      scope="col"
                      className="text-left px-5 sm:px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-normal"
                      style={{ color: MUTED, fontFamily: brand.fontHeading }}
                    >
                      Title
                    </TH>
                    <TH
                      data-wf="i-2-0-1"
                      scope="col"
                      className="text-left px-4 py-3 text-[10px] uppercase tracking-[0.2em] font-normal whitespace-nowrap"
                      style={{ color: MUTED, fontFamily: brand.fontHeading }}
                    >
                      Starts at
                    </TH>
                    <TH
                      data-wf="i-2-0-2"
                      scope="col"
                      className="text-left px-4 py-3 text-[10px] uppercase tracking-[0.2em] font-normal"
                      style={{ color: MUTED, fontFamily: brand.fontHeading }}
                    >
                      Venue
                    </TH>
                    <TH
                      data-wf="i-2-0-3"
                      scope="col"
                      className="text-left px-4 py-3 text-[10px] uppercase tracking-[0.2em] font-normal"
                      style={{ color: MUTED, fontFamily: brand.fontHeading }}
                    >
                      Status
                    </TH>
                    <TH
                      data-wf="i-2-0-4"
                      scope="col"
                      className="text-right px-4 py-3 text-[10px] uppercase tracking-[0.2em] font-normal whitespace-nowrap"
                      style={{ color: MUTED, fontFamily: brand.fontHeading }}
                    >
                      Tickets sold
                    </TH>
                    <TH
                      data-wf="i-2-0-5"
                      scope="col"
                      className="text-right px-4 py-3 text-[10px] uppercase tracking-[0.2em] font-normal"
                      style={{ color: MUTED, fontFamily: brand.fontHeading }}
                    >
                      Remaining
                    </TH>
                    <TH
                      data-wf="i-2-0-6"
                      scope="col"
                      className="text-right px-5 sm:px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-normal whitespace-nowrap"
                      style={{ color: MUTED, fontFamily: brand.fontHeading }}
                    >
                      Gross revenue
                    </TH>
                  </TR>
                </THead>
                <TBody>
                  {events.map((e) => {
                    const isSel = e.id === selectedId;
                    return (
                      <TR
                        key={e.id}
                        onClick={() => navigate('organizer-event-edit')}
                        className={`gat-row cursor-pointer ${isSel ? 'gat-row-sel' : ''}`}
                        style={{ borderBottom: `1px solid ${HAIR}` }}
                      >
                        <TD className="px-5 sm:px-8 py-4 align-top">
                          <div className="flex items-start gap-3">
                            <input
                              type="radio"
                              name="selected-event"
                              id={`sel-${e.id}`}
                              className="gat-radio gat-focus mt-[3px] shrink-0"
                              checked={isSel}
                              onChange={() => setSelectedId(e.id)}
                              onClick={(ev) => ev.stopPropagation()}
                            />
                            <div className="min-w-0">
                              <label htmlFor={`sel-${e.id}`} className="sr-only">
                                Select {e.title} for the event actions below
                              </label>
                              <button
                                type="button"
                                aria-label={`Edit ${e.title}`}
                                onClick={(ev) => {
                                  ev.stopPropagation();
                                  navigate('organizer-event-edit');
                                }}
                                className="gat-focus text-left text-[15px] leading-snug underline-offset-4 hover:underline"
                                style={{ fontFamily: brand.fontHeading, letterSpacing: '0.04em' }}
                              >
                                {e.title}
                              </button>
                              <p className="mt-1 text-xs" style={{ color: MUTED }}>
                                {e.ticketTypes === 0 ? 'No ticket types yet' : `${e.ticketTypes} general-admission ticket types`}
                              </p>
                            </div>
                          </div>
                        </TD>
                        <TD className="px-4 py-4 align-top whitespace-nowrap text-[13px]">{e.startsDisplay}</TD>
                        <TD className="px-4 py-4 align-top text-[13px]">
                          {e.venue ? (
                            <>
                              {e.venue}
                              <span className="block text-xs" style={{ color: MUTED }}>
                                {e.city}
                              </span>
                            </>
                          ) : (
                            <span style={{ color: MUTED }}>Not set yet</span>
                          )}
                        </TD>
                        <TD className="px-4 py-4 align-top">
                          <Badge
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] whitespace-nowrap"
                            style={{
                              borderRadius: 0,
                              border: `1px solid ${e.status === 'published' ? brand.primaryColor : HAIR}`,
                              backgroundColor: e.status === 'published' ? WASH : 'transparent',
                              color: brand.primaryColor,
                              fontFamily: brand.fontHeading,
                            }}
                          >
                            {e.status === 'published' ? (
                              <Check className="h-3 w-3" aria-hidden="true" />
                            ) : e.status === 'draft' ? (
                              <Edit className="h-3 w-3" aria-hidden="true" />
                            ) : (
                              <X className="h-3 w-3" aria-hidden="true" />
                            )}
                            {STATUS_COPY[e.status]}
                          </Badge>
                        </TD>
                        <TD className="px-4 py-4 align-top text-right text-[15px]">{e.sold}</TD>
                        <TD className="px-4 py-4 align-top text-right text-[15px]">
                          {e.remaining === 0 && e.sold > 0 ? (
                            <span className="whitespace-nowrap">0 · Sold out</span>
                          ) : (
                            e.remaining
                          )}
                        </TD>
                        <TD className="px-5 sm:px-8 py-4 align-top text-right text-[15px] whitespace-nowrap">{rupees(e.revenue)}</TD>
                      </TR>
                    );
                  })}
                </TBody>
              </Table>
            </div>

            <div className="px-5 sm:px-8 py-4 text-center text-xs" style={{ borderTop: `1px solid ${HAIR}`, color: MUTED }}>
              Totals: {totals.sold} sold · {totals.remaining} remaining · {rupees(totals.revenue)} gross. Unconfirmed and failed orders are
              excluded.
            </div>
          </Frame>
        </section>

        {/* Row 4 — actions on the selected event */}
        <section aria-labelledby="actions-heading" className="mt-10">
          <Frame>
            <div className="px-5 sm:px-8 py-7">
              <div className="text-center">
                <h2 className="text-[13px] uppercase tracking-[0.3em]" id="actions-heading" style={{ fontFamily: brand.fontHeading }}>
                  Actions · {selected.title}
                </h2>
                <p className="mt-2 text-xs" style={{ color: MUTED }}>
                  Currently {STATUS_COPY[selected.status].toLowerCase()} · {selected.sold} sold · {selected.remaining} remaining
                </p>
              </div>

              <div className="mt-6 grid grid-cols-12 gap-3 sm:gap-4">
                <div className="col-span-12 sm:col-span-4">
                  <button
                    type="button"
                    data-wf="b-3-0"
                    onClick={publish}
                    disabled={selected.status === 'published'}
                    className={`${btnBase} gat-ghost w-full`}
                    style={secondaryStyle(selected.status === 'published')}
                  >
                    <CheckCircle className="h-4 w-4" aria-hidden="true" />
                    Publish event
                  </button>
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <button
                    type="button"
                    data-wf="b-3-1"
                    onClick={unpublish}
                    disabled={selected.status !== 'published'}
                    className={`${btnBase} gat-ghost w-full`}
                    style={secondaryStyle(selected.status !== 'published')}
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                    Unpublish event
                  </button>
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <button
                    type="button"
                    data-wf="b-3-2"
                    onClick={viewAttendees}
                    disabled={loadingAttendees}
                    className={`${btnBase} gat-ghost w-full`}
                    style={secondaryStyle(loadingAttendees)}
                  >
                    <Users className="h-4 w-4" aria-hidden="true" />
                    {loadingAttendees ? 'Loading…' : 'View attendees'}
                  </button>
                </div>
              </div>

              {selected.id !== attendeeFor && !loadingAttendees ? (
                <p className="mt-4 text-center text-xs" style={{ color: MUTED }}>
                  The list below still shows {shownEvent.title}. Choose “View attendees” to load {selected.title}.
                </p>
              ) : null}

              {notice ? (
                <div
                  className="gat-in mt-6 flex items-start gap-3 px-4 py-4"
                  role={notice.kind === 'error' ? 'alert' : 'status'}
                  style={{
                    border: `1px solid ${brand.primaryColor}`,
                    backgroundColor: notice.kind === 'error' ? 'transparent' : WASH,
                  }}
                >
                  {notice.kind === 'error' ? (
                    <AlertCircle className="h-4 w-4 mt-[2px] shrink-0" aria-hidden="true" />
                  ) : (
                    <CheckCircle className="h-4 w-4 mt-[2px] shrink-0" aria-hidden="true" />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] uppercase tracking-[0.22em]" style={{ fontFamily: brand.fontHeading }}>
                      {notice.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed">{notice.body}</p>
                  </div>
                </div>
              ) : null}
            </div>
          </Frame>
        </section>

        {/* Row 5 / Row 6 — attendees or empty state */}
        {loadingAttendees || attendees.length > 0 ? (
          <section data-wf="b-4-0" aria-labelledby="attendees-heading" className="mt-10">
            <Frame>
              <div className="px-5 sm:px-8 pt-7 pb-4 text-center">
                <h2 id="attendees-heading" className="text-[18px] uppercase tracking-[0.28em]" style={{ fontFamily: brand.fontHeading }}>
                  Attendees — {shownEvent.title}
                </h2>
                <p className="mt-2 text-xs" style={{ color: MUTED }}>
                  {loadingAttendees
                    ? 'Fetching confirmed orders…'
                    : `${attendees.length} buyers · ${ticketCount} tickets issued · ${shownEvent.startsDisplay}`}
                </p>
                <Rule className="mt-5" />
              </div>

              {loadingAttendees ? (
                <div className="px-5 sm:px-8 pb-8" aria-live="polite">
                  <p className="sr-only">Loading the attendee list.</p>
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="gat-skel flex items-center gap-4 py-4"
                      style={{ borderBottom: `1px solid ${HAIR}`, animationDelay: `${i * 0.12}s` }}
                      aria-hidden="true"
                    >
                      <span className="h-8 w-8" style={{ backgroundColor: WASH }} />
                      <span className="h-3 flex-1" style={{ backgroundColor: WASH }} />
                      <span className="h-3 w-20" style={{ backgroundColor: WASH }} />
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <Table className="w-full text-sm" style={{ fontVariantNumeric: 'tabular-nums', borderCollapse: 'collapse' }}>
                      <THead>
                        <TR style={{ borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${brand.accentColor}` }}>
                          <TH
                            data-wf="i-4-0-0"
                            scope="col"
                            className="text-left px-5 sm:px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-normal"
                            style={{ color: MUTED, fontFamily: brand.fontHeading }}
                          >
                            Attendee
                          </TH>
                          <TH
                            data-wf="i-4-0-1"
                            scope="col"
                            className="text-left px-4 py-3 text-[10px] uppercase tracking-[0.2em] font-normal"
                            style={{ color: MUTED, fontFamily: brand.fontHeading }}
                          >
                            Email
                          </TH>
                          <TH
                            data-wf="i-4-0-2"
                            scope="col"
                            className="text-left px-4 py-3 text-[10px] uppercase tracking-[0.2em] font-normal whitespace-nowrap"
                            style={{ color: MUTED, fontFamily: brand.fontHeading }}
                          >
                            Ticket type
                          </TH>
                          <TH
                            data-wf="i-4-0-3"
                            scope="col"
                            className="text-right px-4 py-3 text-[10px] uppercase tracking-[0.2em] font-normal"
                            style={{ color: MUTED, fontFamily: brand.fontHeading }}
                          >
                            Quantity
                          </TH>
                          <TH
                            data-wf="i-4-0-4"
                            scope="col"
                            className="text-left px-5 sm:px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-normal whitespace-nowrap"
                            style={{ color: MUTED, fontFamily: brand.fontHeading }}
                          >
                            Ticket identifiers
                          </TH>
                        </TR>
                      </THead>
                      <TBody>
                        {attendees.map((a, i) => (
                          <TR
                            key={a.email}
                            className="gat-in"
                            style={{ borderBottom: `1px solid ${HAIR}`, animationDelay: `${i * 0.04}s` }}
                          >
                            <TD className="px-5 sm:px-8 py-4 align-top">
                              <div className="flex items-center gap-3">
                                <Avatar name={a.name} className="h-8 w-8 shrink-0" />
                                <span className="text-[14px]">{a.name}</span>
                              </div>
                            </TD>
                            <TD className="px-4 py-4 align-top text-[13px]" style={{ color: MUTED }}>
                              {a.email}
                            </TD>
                            <TD className="px-4 py-4 align-top text-[13px] whitespace-nowrap">{a.type}</TD>
                            <TD className="px-4 py-4 align-top text-right text-[15px]">{a.qty}</TD>
                            <TD className="px-5 sm:px-8 py-4 align-top">
                              <ul className="space-y-1">
                                {a.ids.map((id) => (
                                  <li key={id} className="text-xs" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
                                    {id}
                                  </li>
                                ))}
                              </ul>
                            </TD>
                          </TR>
                        ))}
                      </TBody>
                    </Table>
                  </div>
                  <div className="px-5 sm:px-8 py-4 text-center text-xs" style={{ borderTop: `1px solid ${HAIR}`, color: MUTED }}>
                    Confirmed, paid orders only. Attendee lists are visible to the organizer who owns the event.
                  </div>
                </>
              )}
            </Frame>
          </section>
        ) : (
          <div data-wf="b-5-0" className="mt-10">
            <Frame>
              <div className="px-5 sm:px-8 pt-7 text-center">
                <h2 className="text-[18px] uppercase tracking-[0.28em]" style={{ fontFamily: brand.fontHeading }}>
                  Attendees — {shownEvent.title}
                </h2>
                <Rule className="mt-5" />
              </div>
              <div className="px-5 sm:px-8 pb-10 pt-6">
                <Empty
                  title="No confirmed bookings yet"
                  description="No confirmed bookings yet for this event. Attendees appear here once orders are paid."
                  action={
                    <button
                      type="button"
                      onClick={() => navigate('event-detail')}
                      className={`${btnBase} gat-ghost`}
                      style={secondaryStyle(false)}
                    >
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      Preview event page
                    </button>
                  }
                  className="text-center"
                />
              </div>
            </Frame>
          </div>
        )}
      </div>
    </div>
  );
}
