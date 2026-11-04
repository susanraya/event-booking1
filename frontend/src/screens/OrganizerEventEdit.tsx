// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Textarea, Label, Badge, Table, THead, TBody, TR, TH, TD, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, Clock, Trash, Edit, Upload, ArrowLeft, AlertCircle, CheckCircle } = Icons;

const EVENT = {
  id: 'evt_7421',
  organizer_id: 'usr_3310',
  title: 'Sunburn Arena Night',
  description:
    'One stage, one night. Anyasa opens at 8.30pm, KSHMR plays a B2B set with Zaeden from 10pm, and the food trucks stay open till 1am. Gates close at 11pm sharp. Entry is 18+ with photo ID — no re-entry once stamped.',
  venue: 'Phoenix Marketcity Grounds',
  city: 'Pune',
  starts_at: '2026-12-19T20:30',
  banner_url: 'cdn.quorq.events/banners/sunburn-arena-night-1600x900.jpg',
  status: 'draft',
  created_at: '14 Oct 2026',
  last_synced: '18:04',
};

const TICKET_TYPES = [
  { id: 'tt_8801', name: 'Early Bird GA', price: '1499', total_quantity: '400', sold_quantity: 186 },
  { id: 'tt_8802', name: 'Phase 2 GA', price: '1999', total_quantity: '600', sold_quantity: 274 },
  { id: 'tt_8803', name: 'Gold Circle Standing', price: '3499', total_quantity: '150', sold_quantity: 0 },
  { id: 'tt_8804', name: 'Student Pass (ID at gate)', price: '999', total_quantity: '250', sold_quantity: 63 },
];

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const gold = brand.accentColor;
  const paper = brand.backgroundColor;
  const mute = `color-mix(in srgb, ${ink} 60%, ${paper})`;
  const hair = `color-mix(in srgb, ${ink} 22%, ${paper})`;
  const surface = `color-mix(in srgb, ${paper} 96%, ${gold})`;
  const strip = `color-mix(in srgb, ${paper} 84%, ${gold})`;
  const notice = `color-mix(in srgb, ${paper} 88%, ${ink})`;
  const head = brand.fontHeading;
  const body = brand.fontBody;

  const [form, setForm] = React.useState({
    title: EVENT.title,
    description: EVENT.description,
    venue: EVENT.venue,
    city: EVENT.city,
    starts_at: EVENT.starts_at,
    banner_url: EVENT.banner_url,
  });
  const [types, setTypes] = React.useState(TICKET_TYPES);
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState(EVENT.status);
  const [phase, setPhase] = React.useState('idle'); // idle | saving | publishing
  const [feedback, setFeedback] = React.useState(null);
  const [dirty, setDirty] = React.useState(false);
  const [lastSaved, setLastSaved] = React.useState(EVENT.last_synced);
  const [confirmRemove, setConfirmRemove] = React.useState(null);
  const [newRowId, setNewRowId] = React.useState(null);
  const timers = React.useRef([]);

  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const later = (fn, ms) => {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
    return t;
  };

  const busy = phase !== 'idle';

  const setField = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setDirty(true);
    setErrors((e) => {
      if (!e[key]) return e;
      const next = { ...e };
      delete next[key];
      return next;
    });
    if (feedback && feedback.kind !== 'success') setFeedback(null);
  };

  const setTypeField = (id, key, value) => {
    setTypes((list) => list.map((t) => (t.id === id ? { ...t, [key]: value } : t)));
    setDirty(true);
    if (feedback && feedback.kind !== 'success') setFeedback(null);
  };

  const num = (v) => {
    const n = Number(String(v).trim());
    return String(v).trim() === '' || Number.isNaN(n) ? null : n;
  };

  const rowIssue = (t) => {
    if (!t.name.trim()) return 'Give this ticket type a name buyers will recognise.';
    const price = num(t.price);
    if (price === null) return 'Enter a price in rupees, or 0 for a free ticket type.';
    if (price < 0) return 'Price cannot be negative.';
    const qty = num(t.total_quantity);
    if (qty === null || !Number.isInteger(qty)) return 'Enter the total quantity as a whole number.';
    if (qty <= 0) return 'Total quantity must be at least 1.';
    if (qty < t.sold_quantity)
      return `Quantity cannot be set below the ${t.sold_quantity} tickets already sold for this type.`;
    return null;
  };

  const rowIssues = types.reduce((acc, t) => {
    const issue = rowIssue(t);
    if (issue) acc[t.id] = issue;
    return acc;
  }, {});
  const inventoryTripped = types.some((t) => {
    const qty = num(t.total_quantity);
    return qty !== null && t.sold_quantity > 0 && qty < t.sold_quantity;
  });

  const startsInPast = () => {
    if (!form.starts_at) return false;
    const d = new Date(form.starts_at);
    if (Number.isNaN(d.getTime())) return false;
    return d.getTime() <= Date.now();
  };

  const validateCore = () => {
    const e = {};
    if (!form.title.trim()) e.title = 'An event needs a title before it can be saved.';
    if (!form.starts_at) e.starts_at = 'Pick the date and time doors open.';
    else if (Number.isNaN(new Date(form.starts_at).getTime())) e.starts_at = 'That date and time could not be read. Use the picker.';
    else if (startsInPast()) e.starts_at = 'The start time must be in the future. Pick a later date.';
    return e;
  };

  const prettyDate = () => {
    if (!form.starts_at) return null;
    const d = new Date(form.starts_at);
    if (Number.isNaN(d.getTime())) return null;
    return d.toLocaleString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const handleSaveDraft = () => {
    const e = validateCore();
    const rowCount = Object.keys(rowIssues).length;
    if (Object.keys(e).length || rowCount) {
      setErrors(e);
      setFeedback({
        kind: 'error',
        title: 'This draft was not saved',
        body:
          rowCount && Object.keys(e).length
            ? 'Fix the highlighted event details and ticket types below. Everything you typed is still here.'
            : rowCount
            ? 'One or more ticket types need fixing before this draft can be saved. Your entries are kept as typed.'
            : 'The highlighted fields need attention. Nothing you typed has been lost.',
      });
      return;
    }
    setErrors({});
    setPhase('saving');
    setFeedback(null);
    later(() => {
      setPhase('idle');
      setDirty(false);
      setLastSaved('just now');
      setFeedback({
        kind: 'success',
        title: 'Draft saved',
        body: `“${form.title.trim()}” stays hidden from the public. Taking you back to your events…`,
      });
      later(() => navigate('organizer'), 950);
    }, 800);
  };

  const handlePublish = () => {
    const e = validateCore();
    const missing = [];
    if (!form.title.trim()) missing.push('A title for the event');
    if (!form.venue.trim()) missing.push('A venue — buyers need to know where to turn up');
    if (!form.starts_at) missing.push('A start date and time');
    else if (startsInPast()) missing.push('A start time in the future');
    if (!types.length) missing.push('At least one general-admission ticket type');
    Object.entries(rowIssues).forEach(([id, issue]) => {
      const t = types.find((x) => x.id === id);
      missing.push(`${t && t.name.trim() ? t.name.trim() : 'Untitled ticket type'} — ${issue.replace(/\.$/, '')}`);
    });
    if (missing.length) {
      setErrors(e);
      setFeedback({ kind: 'blocked', title: 'Publishing is blocked', body: 'Sunburn Arena Night stays a draft until this is settled:', list: missing });
      return;
    }
    setErrors({});
    setPhase('publishing');
    setFeedback(null);
    later(() => {
      setPhase('idle');
      setStatus('published');
      setDirty(false);
      setLastSaved('just now');
      setFeedback({
        kind: 'success',
        title: 'Event published',
        body: `“${form.title.trim()}” is now listed publicly and tickets are on sale. Taking you back to your events…`,
      });
      later(() => navigate('organizer'), 1100);
    }, 900);
  };

  const addTicketType = () => {
    const id = 'tt_' + Math.random().toString(36).slice(2, 7);
    setTypes((list) => [...list, { id, name: '', price: '', total_quantity: '', sold_quantity: 0 }]);
    setNewRowId(id);
    setDirty(true);
    if (feedback && feedback.kind !== 'success') setFeedback(null);
  };

  const removeType = (id) => {
    setTypes((list) => list.filter((t) => t.id !== id));
    setConfirmRemove(null);
    setDirty(true);
  };

  const money = (v) => {
    const n = num(v);
    return n === null ? '—' : '₹' + n.toLocaleString('en-IN');
  };
  const remaining = (t) => {
    const q = num(t.total_quantity);
    return q === null ? null : Math.max(q - t.sold_quantity, 0);
  };

  const totals = types.reduce(
    (acc, t) => {
      const q = num(t.total_quantity) || 0;
      acc.total += q;
      acc.sold += t.sold_quantity;
      acc.remaining += Math.max(q - t.sold_quantity, 0);
      return acc;
    },
    { total: 0, sold: 0, remaining: 0 }
  );

  const labelCls = 'block text-[11px] uppercase';
  const labelStyle = { color: mute, fontFamily: head, letterSpacing: '0.18em' };
  const inputStyle = {
    borderRadius: 0,
    border: `1px solid ${hair}`,
    backgroundColor: paper,
    color: ink,
    fontFamily: body,
  };
  const inputErrStyle = { ...inputStyle, border: `1px solid ${ink}`, backgroundColor: `color-mix(in srgb, ${paper} 92%, ${ink})` };

  const diamondRule = (
    <div className="flex items-center gap-3" aria-hidden="true">
      <span className="h-px flex-1" style={{ backgroundColor: gold }} />
      <span className="block h-1.5 w-1.5 rotate-45" style={{ backgroundColor: gold }} />
      <span className="h-px flex-1" style={{ backgroundColor: gold }} />
    </div>
  );

  const frame = (children, extra) => (
    <div style={{ border: `1px solid ${ink}` }} className={'p-1 ' + (extra || '')}>
      <div style={{ border: `1px solid ${gold}`, backgroundColor: surface }}>{children}</div>
    </div>
  );

  const sectionHead = (title, meta) => (
    <div className="px-6 pt-6 pb-5 sm:px-8 sm:pt-8" style={{ backgroundColor: strip }}>
      <h2
        className="text-center text-[15px] uppercase sm:text-[17px]"
        style={{ fontFamily: head, letterSpacing: '0.26em', color: ink }}
      >
        {title}
      </h2>
      {meta ? (
        <p className="mt-2 text-center text-[13px]" style={{ color: mute }}>
          {meta}
        </p>
      ) : null}
      <div className="mt-4">{diamondRule}</div>
    </div>
  );

  const renderField = ({ id, wf, label, hint, error, control, span }) => (
    <div className={span}>
      <Label htmlFor={id} className={labelCls} style={labelStyle}>
        {label}
      </Label>
      <div className="mt-2">{control}</div>
      {error ? (
        <p
          id={id + '-msg'}
          className="mt-2 flex items-start gap-1.5 text-[13px] font-semibold"
          style={{ color: ink }}
        >
          <AlertCircle className="mt-px h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </p>
      ) : hint ? (
        <p id={id + '-msg'} className="mt-2 text-[13px] leading-relaxed" style={{ color: mute }}>
          {hint}
        </p>
      ) : null}
    </div>
  );

  const spinner = (
    <span
      aria-hidden="true"
      className="gq-spin inline-block h-2.5 w-2.5 rotate-45"
      style={{ backgroundColor: gold }}
    />
  );

  return (
    <div
      className="gq min-h-full w-full"
      style={{
        backgroundColor: paper,
        fontFamily: body,
        color: ink,
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      <style>{`
        .gq button:focus-visible, .gq a:focus-visible, .gq input:focus-visible, .gq textarea:focus-visible {
          outline: 2px solid ${ink};
          outline-offset: 2px;
        }
        .gq table { font-variant-numeric: tabular-nums; }
        @keyframes gqRowIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
        @keyframes gqPanelIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: none; } }
        @keyframes gqSpin { to { transform: rotate(405deg); } }
        .gq-row-in { animation: gqRowIn .3s ease-out both; }
        .gq-panel-in { animation: gqPanelIn .3s ease-out both; }
        .gq-spin { animation: gqSpin 1.1s linear infinite; }
        .gq-ghost:hover { background-color: color-mix(in srgb, ${paper} 82%, ${gold}); }
        @media (prefers-reduced-motion: reduce) {
          .gq-row-in, .gq-panel-in, .gq-spin { animation: none !important; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Row 1 — back link */}
        <div data-wf="b-0-0">
          <button
            type="button"
            onClick={() => navigate('organizer')}
            className="gq-ghost -ml-2 inline-flex h-11 items-center gap-2 px-2 text-[12px] uppercase transition-colors"
            style={{ fontFamily: head, letterSpacing: '0.2em', color: ink }}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to my events
          </button>
        </div>

        {/* Row 2 — page title */}
        <header data-wf="b-1-0" className="mt-4 text-center">
          <div className="mx-auto max-w-2xl">
            <div className="h-px w-full" style={{ backgroundColor: ink }} aria-hidden="true" />
            <div className="mt-[3px] h-px w-full" style={{ backgroundColor: gold }} aria-hidden="true" />
            <h1
              className="mt-6 text-[26px] uppercase leading-tight sm:text-[34px]"
              style={{ fontFamily: head, letterSpacing: '0.12em', color: ink }}
            >
              Edit event — Sunburn Arena Night (Draft)
            </h1>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[12px]" style={{ color: mute }}>
              <Badge
                className="uppercase"
                style={{
                  borderRadius: 0,
                  backgroundColor: status === 'published' ? ink : 'transparent',
                  color: status === 'published' ? gold : ink,
                  border: `1px solid ${ink}`,
                  fontFamily: head,
                  letterSpacing: '0.18em',
                  padding: '2px 10px',
                }}
              >
                {status === 'published' ? 'Published' : 'Draft'}
              </Badge>
              <span aria-hidden="true">·</span>
              <span>Event {EVENT.id}</span>
              <span aria-hidden="true">·</span>
              <span>Created {EVENT.created_at}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {dirty ? `Unsaved changes · last synced ${lastSaved}` : `Saved ${lastSaved}`}
              </span>
            </div>
            <div className="mt-6 h-px w-full" style={{ backgroundColor: gold }} aria-hidden="true" />
            <div className="mt-[3px] h-px w-full" style={{ backgroundColor: ink }} aria-hidden="true" />
          </div>
        </header>

        {/* Feedback region */}
        <div aria-live="polite" className="mt-6">
          {feedback ? (
            <div
              className="gq-panel-in"
              style={{ border: `1px solid ${ink}`, backgroundColor: feedback.kind === 'success' ? ink : notice }}
              role={feedback.kind === 'success' ? 'status' : 'alert'}
            >
              <div className="flex items-start gap-3 px-5 py-4 sm:px-6">
                {feedback.kind === 'success' ? (
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" style={{ color: gold }} aria-hidden="true" />
                ) : (
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" style={{ color: paper }} aria-hidden="true" />
                )}
                <div className="min-w-0 flex-1">
                  <p
                    className="text-[12px] uppercase"
                    style={{ fontFamily: head, letterSpacing: '0.2em', color: feedback.kind === 'success' ? gold : paper }}
                  >
                    {feedback.title}
                  </p>
                  <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: paper }}>
                    {feedback.body}
                  </p>
                  {feedback.list ? (
                    <ul className="mt-3 space-y-1.5">
                      {feedback.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[14px]" style={{ color: paper }}>
                          <span className="mt-[7px] block h-1.5 w-1.5 shrink-0 rotate-45" style={{ backgroundColor: gold }} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Row 3 — event details form */}
        <section data-wf="b-2-0" className="mt-8">
          {frame(
            <>
              {sectionHead('Event details', 'Visible to buyers the moment this event is published.')}
              <div className="grid grid-cols-12 gap-x-6 gap-y-7 px-6 py-8 sm:px-8">
                {renderField({
                  id: 'field-title',
                  span: 'col-span-12',
                  label: 'Title',
                  hint: 'Shown on the listing, the ticket and the QR pass.',
                  error: errors.title,
                  control: (
                    <Input
                      id="field-title"
                      data-wf="i-2-0-0"
                      value={form.title}
                      onChange={(e) => setField('title', e.target.value)}
                      aria-invalid={errors.title ? 'true' : undefined}
                      aria-describedby="field-title-msg"
                      className="h-12 w-full px-3 text-[17px]"
                      style={{
                        ...(errors.title ? inputErrStyle : inputStyle),
                        fontFamily: head,
                        letterSpacing: '0.06em',
                      }}
                    />
                  ),
                })}

                {renderField({
                  id: 'field-description',
                  span: 'col-span-12',
                  label: 'Description',
                  hint: 'Line-up, timings, entry rules. Buyers read this before they pay.',
                  control: (
                    <Textarea
                      id="field-description"
                      data-wf="i-2-0-1"
                      rows={5}
                      value={form.description}
                      onChange={(e) => setField('description', e.target.value)}
                      aria-describedby="field-description-msg"
                      className="w-full p-3 text-[15px] leading-relaxed"
                      style={inputStyle}
                    />
                  ),
                })}

                {renderField({
                  id: 'field-venue',
                  span: 'col-span-12 sm:col-span-7',
                  label: 'Venue',
                  hint: 'Required before you can publish.',
                  control: (
                    <Input
                      id="field-venue"
                      data-wf="i-2-0-2"
                      value={form.venue}
                      onChange={(e) => setField('venue', e.target.value)}
                      aria-describedby="field-venue-msg"
                      className="h-11 w-full px-3 text-[15px]"
                      style={inputStyle}
                    />
                  ),
                })}

                {renderField({
                  id: 'field-city',
                  span: 'col-span-12 sm:col-span-5',
                  label: 'City',
                  hint: 'Used by the city filter on Browse events.',
                  control: (
                    <Input
                      id="field-city"
                      data-wf="i-2-0-3"
                      value={form.city}
                      onChange={(e) => setField('city', e.target.value)}
                      aria-describedby="field-city-msg"
                      className="h-11 w-full px-3 text-[15px]"
                      style={inputStyle}
                    />
                  ),
                })}

                {renderField({
                  id: 'field-starts-at',
                  span: 'col-span-12 sm:col-span-6',
                  label: 'Starts at (date & time)',
                  hint: prettyDate() ? `Doors: ${prettyDate()} IST` : 'Use the picker to set doors open.',
                  error: errors.starts_at,
                  control: (
                    <Input
                      id="field-starts-at"
                      data-wf="i-2-0-4"
                      type="datetime-local"
                      value={form.starts_at}
                      onChange={(e) => setField('starts_at', e.target.value)}
                      aria-invalid={errors.starts_at ? 'true' : undefined}
                      aria-describedby="field-starts-at-msg"
                      className="h-11 w-full px-3 text-[15px]"
                      style={errors.starts_at ? inputErrStyle : inputStyle}
                    />
                  ),
                })}

                {renderField({
                  id: 'field-banner',
                  span: 'col-span-12 sm:col-span-6',
                  label: 'Banner image',
                  hint: 'A 1600 × 900 JPEG reads best on the listing card.',
                  control: (
                    <div className="flex items-stretch" style={{ border: `1px solid ${hair}`, backgroundColor: paper }}>
                      <span
                        className="flex w-11 shrink-0 items-center justify-center"
                        style={{ borderRight: `1px solid ${hair}`, color: mute }}
                      >
                        <Upload className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <Input
                        id="field-banner"
                        data-wf="i-2-0-5"
                        value={form.banner_url}
                        onChange={(e) => setField('banner_url', e.target.value)}
                        aria-describedby="field-banner-msg"
                        className="h-11 w-full px-3 text-[14px]"
                        style={{ ...inputStyle, border: 'none' }}
                      />
                    </div>
                  ),
                })}
              </div>
            </>
          )}
        </section>

        {/* Row 4 — requirement note */}
        <p
          data-wf="b-3-0"
          className="mx-auto mt-5 max-w-2xl text-center text-[13px] leading-relaxed"
          style={{ color: mute }}
        >
          Title and start time are required, and the start time must be in the future.
        </p>

        {/* Row 5 — ticket types */}
        <section data-wf="b-4-0" className="mt-10">
          {frame(
            <>
              {sectionHead(
                'General-admission ticket types',
                'Reserved seating is not part of this event — every ticket here is standing admission.'
              )}
              {types.length === 0 ? (
                <div className="px-6 py-10 sm:px-8">
                  <Empty
                    title="No ticket types yet"
                    description="A published event needs at least one general-admission ticket type. Add one to set its price and how many you will sell at the gate."
                    action={
                      <Button
                        type="button"
                        onClick={addTicketType}
                        className="h-11 px-5 text-[12px] uppercase"
                        style={{
                          borderRadius: 0,
                          backgroundColor: ink,
                          color: gold,
                          fontFamily: head,
                          letterSpacing: '0.2em',
                        }}
                      >
                        Add the first ticket type
                      </Button>
                    }
                  />
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table className="w-full min-w-[760px] border-collapse text-[14px]">
                    <THead>
                      <TR style={{ borderBottom: `1px solid ${gold}` }}>
                        <TH
                          data-wf="i-4-0-0"
                          scope="col"
                          className="px-6 py-3 text-left text-[11px] uppercase"
                          style={{ ...labelStyle, color: ink }}
                        >
                          Name
                        </TH>
                        <TH
                          data-wf="i-4-0-1"
                          scope="col"
                          className="px-3 py-3 text-right text-[11px] uppercase"
                          style={{ ...labelStyle, color: ink }}
                        >
                          Price (₹)
                        </TH>
                        <TH
                          data-wf="i-4-0-2"
                          scope="col"
                          className="px-3 py-3 text-right text-[11px] uppercase"
                          style={{ ...labelStyle, color: ink }}
                        >
                          Total quantity
                        </TH>
                        <TH
                          data-wf="i-4-0-3"
                          scope="col"
                          className="px-3 py-3 text-right text-[11px] uppercase"
                          style={{ ...labelStyle, color: ink }}
                        >
                          Sold
                        </TH>
                        <TH
                          data-wf="i-4-0-4"
                          scope="col"
                          className="px-3 py-3 text-right text-[11px] uppercase"
                          style={{ ...labelStyle, color: ink }}
                        >
                          Remaining
                        </TH>
                        <TH scope="col" className="px-6 py-3 text-right">
                          <span className="sr-only">Row actions</span>
                        </TH>
                      </TR>
                    </THead>
                    <TBody>
                      {types.map((t) => {
                        const issue = rowIssues[t.id];
                        const rem = remaining(t);
                        const nameId = 'tt-name-' + t.id;
                        const priceId = 'tt-price-' + t.id;
                        const qtyId = 'tt-qty-' + t.id;
                        const msgId = 'tt-msg-' + t.id;
                        return (
                          <React.Fragment key={t.id}>
                            <TR
                              className={t.id === newRowId ? 'gq-row-in' : undefined}
                              style={{ borderBottom: issue ? 'none' : `1px solid ${hair}` }}
                            >
                              <TD className="px-6 py-3 align-middle">
                                <Label htmlFor={nameId} className="sr-only">
                                  Ticket type name
                                </Label>
                                <Input
                                  id={nameId}
                                  value={t.name}
                                  placeholder="e.g. Phase 3 GA"
                                  onChange={(e) => setTypeField(t.id, 'name', e.target.value)}
                                  aria-invalid={issue ? 'true' : undefined}
                                  aria-describedby={issue ? msgId : undefined}
                                  className="h-11 w-full min-w-[200px] px-3 text-[15px]"
                                  style={issue ? inputErrStyle : inputStyle}
                                />
                              </TD>
                              <TD className="px-3 py-3 align-middle">
                                <Label htmlFor={priceId} className="sr-only">
                                  Price in rupees for {t.name || 'this ticket type'}
                                </Label>
                                <Input
                                  id={priceId}
                                  inputMode="numeric"
                                  value={t.price}
                                  placeholder="0"
                                  onChange={(e) => setTypeField(t.id, 'price', e.target.value)}
                                  aria-invalid={issue ? 'true' : undefined}
                                  aria-describedby={issue ? msgId : undefined}
                                  className="h-11 w-24 px-3 text-right text-[15px]"
                                  style={{ ...(issue ? inputErrStyle : inputStyle), fontVariantNumeric: 'tabular-nums' }}
                                />
                              </TD>
                              <TD className="px-3 py-3 align-middle">
                                <Label htmlFor={qtyId} className="sr-only">
                                  Total quantity for {t.name || 'this ticket type'}
                                </Label>
                                <Input
                                  id={qtyId}
                                  inputMode="numeric"
                                  value={t.total_quantity}
                                  placeholder="0"
                                  onChange={(e) => setTypeField(t.id, 'total_quantity', e.target.value)}
                                  aria-invalid={issue ? 'true' : undefined}
                                  aria-describedby={issue ? msgId : undefined}
                                  className="h-11 w-24 px-3 text-right text-[15px]"
                                  style={{ ...(issue ? inputErrStyle : inputStyle), fontVariantNumeric: 'tabular-nums' }}
                                />
                              </TD>
                              <TD className="px-3 py-3 text-right align-middle" style={{ color: mute }}>
                                {t.sold_quantity.toLocaleString('en-IN')}
                              </TD>
                              <TD className="px-3 py-3 text-right align-middle">
                                <span
                                  className="text-[16px]"
                                  style={{ color: rem === 0 ? mute : ink, fontFamily: head, letterSpacing: '0.04em' }}
                                >
                                  {rem === null ? '—' : rem.toLocaleString('en-IN')}
                                </span>
                                {rem === 0 ? (
                                  <span className="ml-2 text-[11px] uppercase" style={{ color: ink, letterSpacing: '0.14em' }}>
                                    Sold out
                                  </span>
                                ) : null}
                              </TD>
                              <TD className="px-6 py-3 text-right align-middle">
                                {confirmRemove === t.id ? (
                                  <span className="inline-flex items-center gap-2">
                                    <span className="text-[12px]" style={{ color: ink }}>
                                      Remove?
                                    </span>
                                    <Button
                                      type="button"
                                      onClick={() => removeType(t.id)}
                                      className="h-9 px-3 text-[11px] uppercase"
                                      style={{
                                        borderRadius: 0,
                                        backgroundColor: ink,
                                        color: gold,
                                        fontFamily: head,
                                        letterSpacing: '0.16em',
                                      }}
                                    >
                                      Yes, remove
                                    </Button>
                                    <Button
                                      type="button"
                                      onClick={() => setConfirmRemove(null)}
                                      className="gq-ghost h-9 px-3 text-[11px] uppercase"
                                      style={{
                                        borderRadius: 0,
                                        backgroundColor: 'transparent',
                                        border: `1px solid ${hair}`,
                                        color: ink,
                                        fontFamily: head,
                                        letterSpacing: '0.16em',
                                      }}
                                    >
                                      Keep
                                    </Button>
                                  </span>
                                ) : (
                                  <button
                                    type="button"
                                    disabled={t.sold_quantity > 0}
                                    onClick={() => setConfirmRemove(t.id)}
                                    aria-label={
                                      t.sold_quantity > 0
                                        ? `${t.name || 'This ticket type'} has ${t.sold_quantity} tickets sold and cannot be removed`
                                        : `Remove ticket type ${t.name || 'untitled'}`
                                    }
                                    title={
                                      t.sold_quantity > 0
                                        ? 'Ticket types with sales cannot be removed'
                                        : 'Remove ticket type'
                                    }
                                    className="gq-ghost inline-flex h-11 w-11 items-center justify-center transition-colors disabled:cursor-not-allowed"
                                    style={{
                                      border: `1px solid ${hair}`,
                                      color: ink,
                                      opacity: t.sold_quantity > 0 ? 0.35 : 1,
                                    }}
                                  >
                                    <Trash className="h-4 w-4" aria-hidden="true" />
                                  </button>
                                )}
                              </TD>
                            </TR>
                            {issue ? (
                              <TR style={{ borderBottom: `1px solid ${hair}` }}>
                                <TD colSpan={6} className="px-6 pb-3 pt-0">
                                  <p
                                    id={msgId}
                                    role="alert"
                                    className="flex items-start gap-2 px-3 py-2 text-[13px] font-semibold"
                                    style={{ backgroundColor: `color-mix(in srgb, ${paper} 90%, ${ink})`, color: ink }}
                                  >
                                    <AlertCircle className="mt-px h-4 w-4 shrink-0" aria-hidden="true" />
                                    <span>{issue}</span>
                                  </p>
                                </TD>
                              </TR>
                            ) : null}
                          </React.Fragment>
                        );
                      })}
                      <TR style={{ borderTop: `1px solid ${gold}` }}>
                        <TD className="px-6 py-4 text-[11px] uppercase" style={{ ...labelStyle, color: ink }}>
                          {types.length} ticket types
                        </TD>
                        <TD className="px-3 py-4 text-right text-[13px]" style={{ color: mute }}>
                          from {money(types.reduce((m, t) => Math.min(m, num(t.price) === null ? m : num(t.price)), Infinity) === Infinity ? '' : types.reduce((m, t) => Math.min(m, num(t.price) === null ? m : num(t.price)), Infinity))}
                        </TD>
                        <TD className="px-3 py-4 text-right text-[15px]" style={{ fontFamily: head, color: ink }}>
                          {totals.total.toLocaleString('en-IN')}
                        </TD>
                        <TD className="px-3 py-4 text-right text-[15px]" style={{ fontFamily: head, color: ink }}>
                          {totals.sold.toLocaleString('en-IN')}
                        </TD>
                        <TD className="px-3 py-4 text-right text-[15px]" style={{ fontFamily: head, color: ink }}>
                          {totals.remaining.toLocaleString('en-IN')}
                        </TD>
                        <TD className="px-6 py-4" />
                      </TR>
                    </TBody>
                  </Table>
                </div>
              )}
            </>
          )}
        </section>

        {/* Row 6 — add ticket type + inventory rule */}
        <div className="mt-6 grid grid-cols-12 items-center gap-4">
          <div className="col-span-12 sm:col-span-5">
            <Button
              data-wf="b-5-0"
              type="button"
              onClick={addTicketType}
              className="gq-ghost inline-flex h-11 w-full items-center justify-center gap-2 px-5 text-[12px] uppercase transition-colors sm:w-auto"
              style={{
                borderRadius: 0,
                backgroundColor: 'transparent',
                border: `1px solid ${ink}`,
                color: ink,
                fontFamily: head,
                letterSpacing: '0.2em',
              }}
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              Add ticket type
            </Button>
          </div>
          <p
            data-wf="b-5-1"
            className="col-span-12 flex items-start gap-2 text-[13px] leading-relaxed sm:col-span-7"
            style={{
              color: inventoryTripped ? ink : mute,
              fontWeight: inventoryTripped ? 600 : 400,
              backgroundColor: inventoryTripped ? `color-mix(in srgb, ${paper} 90%, ${ink})` : 'transparent',
              padding: inventoryTripped ? '8px 12px' : 0,
            }}
          >
            {inventoryTripped ? <AlertCircle className="mt-px h-4 w-4 shrink-0" aria-hidden="true" /> : null}
            <span>Quantity cannot be set below the 186 tickets already sold for this type.</span>
          </p>
        </div>

        {/* Row 7 — save / publish */}
        <div className="mt-10">
          <div className="h-px w-full" style={{ backgroundColor: ink }} aria-hidden="true" />
          <div className="mt-[3px] h-px w-full" style={{ backgroundColor: gold }} aria-hidden="true" />
          <div className="mt-8 grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-6">
              <Button
                data-wf="b-6-0"
                type="button"
                onClick={handleSaveDraft}
                disabled={busy}
                className="gq-ghost inline-flex h-12 w-full items-center justify-center gap-2 text-[12px] uppercase transition-colors disabled:cursor-not-allowed"
                style={{
                  borderRadius: 0,
                  backgroundColor: 'transparent',
                  border: `1px solid ${ink}`,
                  color: ink,
                  fontFamily: head,
                  letterSpacing: '0.22em',
                  opacity: busy ? 0.5 : 1,
                }}
              >
                {phase === 'saving' ? (
                  <>
                    <span className="gq-spin inline-block h-2.5 w-2.5 rotate-45" style={{ backgroundColor: ink }} aria-hidden="true" />
                    Saving draft…
                  </>
                ) : (
                  'Save draft'
                )}
              </Button>
              <p className="mt-2 text-center text-[12px]" style={{ color: mute }}>
                Stays hidden from Browse events.
              </p>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <div style={{ border: `1px solid ${gold}` }} className="p-[3px]">
                <Button
                  data-wf="b-6-1"
                  type="button"
                  onClick={handlePublish}
                  disabled={busy}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 text-[12px] uppercase transition-opacity disabled:cursor-not-allowed"
                  style={{
                    borderRadius: 0,
                    backgroundColor: ink,
                    color: gold,
                    border: 'none',
                    fontFamily: head,
                    letterSpacing: '0.22em',
                    opacity: busy ? 0.7 : 1,
                  }}
                >
                  {phase === 'publishing' ? (
                    <>
                      {spinner}
                      Publishing…
                    </>
                  ) : (
                    'Publish event'
                  )}
                </Button>
              </div>
              <p className="mt-2 text-center text-[12px]" style={{ color: mute }}>
                Lists it publicly and opens ticket sales.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-px w-16" style={{ backgroundColor: gold }} />
          <span className="block h-1.5 w-1.5 rotate-45" style={{ backgroundColor: gold }} />
          <span className="h-px w-16" style={{ backgroundColor: gold }} />
        </div>
      </div>
    </div>
  );
}
