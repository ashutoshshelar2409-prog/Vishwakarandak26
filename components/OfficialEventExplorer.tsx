"use client";

import { useState, useEffect, useRef, useId } from "react";
import { officialEvents, OfficialEvent, EventCategory } from "@/lib/data";
import { Search, Filter, X, Shield, Plus, Check, Copy, AlertCircle, ShoppingBag, Info, ExternalLink } from "lucide-react";

const categoryList: EventCategory[] = [
  "All",
  "Technical",
  "Sports",
  "LAN & Gaming",
  "Audi & Performing Arts",
  "Artizone & Creative",
  "LitBiz",
  "Team & Fun",
];

export default function OfficialEventExplorer() {
  const [selectedCat, setSelectedCat] = useState<EventCategory>("All");
  const [search, setSearch] = useState<string>("");
  const [activeModalEvent, setActiveModalEvent] = useState<OfficialEvent | null>(null);
  const [selectedEventCodes, setSelectedEventCodes] = useState<string[]>([]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const modalId = useId();

  // Filter events by category and search query (name, code, or description)
  const filtered = officialEvents.filter((ev) => {
    const matchesCat = selectedCat === "All" || ev.category === selectedCat;
    const q = search.toLowerCase().trim();
    const matchesSearch =
      !q ||
      ev.name.toLowerCase().includes(q) ||
      ev.code.toLowerCase().includes(q) ||
      ev.description.toLowerCase().includes(q) ||
      ev.category.toLowerCase().includes(q) ||
      ev.feeText.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  // Calculate total fee of selected events
  const selectedEventsList = officialEvents.filter((ev) =>
    selectedEventCodes.includes(ev.code)
  );
  const totalCalculatedFee = selectedEventsList.reduce((acc, ev) => acc + ev.fee, 0);

  const toggleSelectEvent = (code: string) => {
    setSelectedEventCodes((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const handleOpenModal = (event: OfficialEvent, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActiveModalEvent(event);
  };

  const handleCloseModal = () => {
    setActiveModalEvent(null);
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 50);
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Keyboard accessibility: ESC key & focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalEvent) return;
      if (e.key === "Escape") {
        e.preventDefault();
        handleCloseModal();
      } else if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalEvent]);

  // Lock body scroll on modal
  useEffect(() => {
    if (activeModalEvent) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        modalRef.current?.querySelector<HTMLButtonElement>("[data-modal-close]")?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalEvent]);

  return (
    <section
      id="official-events"
      aria-label="Official Vishwakarandak 2026 Event Catalog"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="halftone-dots absolute inset-0 opacity-20 pointer-events-none" />

      {/* Chapter Marker */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b-2 border-white/20 pb-4">
        <div className="flex items-center gap-3">
          <span className="bg-[#ff2a4b] px-3 py-1 font-display text-lg tracking-widest text-white font-bold shadow-[2px_2px_0_0_#000]">
            ACT IV // EVENT DIRECTORY
          </span>
          <span className="font-display text-xl sm:text-2xl tracking-widest text-white/90">
            OFFICIAL FESTIVAL ROSTER // VIERP PORTAL
          </span>
        </div>
        <span className="border border-gold bg-gold/15 px-3 py-1 font-display text-xs uppercase tracking-widest text-gold font-bold">
          LIMITED SLOTS · REGISTRATIONS OPEN
        </span>
      </div>

      {/* Headline & Description */}
      <div className="relative z-10 mt-10 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-[#00f0ff] font-bold mb-2 block">
          60+ VERIFIED BATTLEGROUNDS
        </span>
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.88] text-white">
          Find Your Arena. <br />
          <span className="text-stroke-marvel">Claim Your Code.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
          Explore all official sport, technical, cultural, gaming, and literary events. Select multiple
          events to calculate your exact entry fee, copy official codes, and pay directly via the VIERP portal.
        </p>
      </div>

      {/* Interactive Controls Bar: Search & Category Pills */}
      <div className="relative z-10 mt-10 flex flex-col gap-6">
        {/* Search Bar with Icon and Clear */}
        <div className="relative max-w-md">
          <label htmlFor="official-event-search" className="sr-only">
            Search Official Events
          </label>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
            <input
              id="official-event-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by code (e.g., Tech 08, S 12, EC 23) or name..."
              className="w-full border-2 border-white/40 bg-zinc-950/90 py-3 pl-11 pr-10 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div
          role="tablist"
          aria-label="Official Event Categories"
          className="flex flex-wrap gap-2"
        >
          {categoryList.map((cat) => {
            const isSelected = selectedCat === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isSelected}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`border-2 px-3.5 py-1.5 font-display text-sm sm:text-base tracking-widest transition-all ${
                  isSelected
                    ? "border-white bg-[#ff2a4b] text-white shadow-[4px_4px_0_0_#fff] scale-105"
                    : "border-white/20 bg-zinc-950/80 text-white/70 hover:border-gold hover:text-white"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Floating Sticky Fee Calculator / Selected Events Bar (When 1+ items selected) */}
      {selectedEventCodes.length > 0 && (
        <div className="relative z-20 mt-6 border-2 border-gold bg-black/95 p-4 sm:p-5 shadow-[6px_6px_0_0_#ffd700] backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-black font-bold">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div>
                <span className="font-display text-xs uppercase tracking-widest text-gold block">
                  SELECTED EVENTS CALCULATOR ({selectedEventCodes.length} CHOSEN)
                </span>
                <p className="font-display text-xl sm:text-2xl text-white">
                  Total VIERP Entry Fee: <span className="text-gold font-bold">₹{totalCalculatedFee}</span>
                </p>
                <p className="text-xs text-white/60 font-mono">
                  Codes: {selectedEventCodes.join(", ")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => handleCopyCode(selectedEventCodes.join(", "))}
                className="border border-white/40 bg-zinc-900 px-3.5 py-2 text-xs font-display tracking-widest text-white hover:bg-white hover:text-black transition-colors flex items-center gap-1.5"
              >
                <Copy className="h-4 w-4" />
                <span>{copiedCode === selectedEventCodes.join(", ") ? "CODES COPIED!" : "COPY CODES"}</span>
              </button>

              <a
                href="#vierp-guide"
                className="comic-panel-gold bg-gold px-4 py-2 text-xs font-display tracking-widest text-black hover:bg-white transition-colors"
              >
                HOW TO PAY ON VIERP →
              </a>

              <button
                type="button"
                onClick={() => setSelectedEventCodes([])}
                className="text-xs text-white/50 hover:text-white underline pl-2"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Official Events */}
      <div className="relative z-10 mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 ? (
          <div className="col-span-full border-2 border-dashed border-white/20 bg-zinc-950 p-12 text-center">
            <AlertCircle className="mx-auto h-10 w-10 text-[#ff2a4b]" />
            <p className="mt-3 font-display text-2xl text-white">No Arenas Found</p>
            <p className="mt-1 text-sm text-white/60">
              No official event matched &ldquo;{search}&rdquo;. Try another code or category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCat("All");
                setSearch("");
              }}
              className="comic-panel mt-6 bg-white px-5 py-2 font-display text-sm tracking-widest text-black hover:bg-gold"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          filtered.map((ev) => {
            const isSelected = selectedEventCodes.includes(ev.code);

            return (
              <article
                key={ev.code}
                className={`scroll-card-animated group relative flex flex-col justify-between border-2 bg-zinc-950 p-6 transition-all duration-300 hover:-translate-y-2 hover:rotate-[-0.5deg] hover:scale-[1.01] ${
                  isSelected
                    ? "border-gold shadow-[8px_8px_0_0_#ffd700]"
                    : "border-white/80 shadow-[6px_6px_0_0_#ff2a4b] hover:shadow-[10px_10px_0_0_#ff2a4b]"
                }`}
              >
                {/* Category Color Accent Edge */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all group-hover:h-1.5"
                  style={{ backgroundColor: ev.accent || "#ff2a4b" }}
                />
                <div className="halftone-dots absolute inset-0 opacity-20 pointer-events-none" />

                <div>
                  {/* Top Bar with Event Code & Category */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="border border-white/30 bg-black px-2.5 py-0.5 font-mono text-xs font-bold text-gold">
                      {ev.code}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-white/60">
                      {ev.category}
                    </span>
                  </div>

                  {/* Name & Fee */}
                  <div className="mt-4">
                    <h3 className="font-display text-2xl sm:text-3xl text-white group-hover:text-gold transition-colors leading-tight">
                      {ev.name}
                    </h3>

                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-display text-2xl text-gold font-bold">
                        {ev.feeText}
                      </span>
                      <span className="border border-white/20 bg-black/60 px-2 py-0.5 text-[10px] font-mono uppercase text-[#00f0ff]">
                        {ev.type}
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-white/70 line-clamp-2 leading-relaxed">
                      {ev.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Actions: Select & View Rules */}
                <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => toggleSelectEvent(ev.code)}
                    className={`flex items-center gap-1.5 border px-3 py-1.5 text-xs font-display tracking-widest transition-all ${
                      isSelected
                        ? "border-gold bg-gold text-black font-bold"
                        : "border-white/40 bg-zinc-900 text-white hover:border-gold hover:text-gold"
                    }`}
                  >
                    {isSelected ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    <span>{isSelected ? "ADDED" : "ADD TO FEE CALC"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleOpenModal(ev, e.currentTarget)}
                    className="border border-white bg-white px-3.5 py-1.5 font-display text-xs tracking-widest text-black hover:bg-[#ff2a4b] hover:text-white hover:border-[#ff2a4b] transition-colors"
                  >
                    DETAILS →
                  </button>
                </div>
              </article>
            );
          })
        )}
      </div>

      {/* Accessible Detail Modal */}
      {activeModalEvent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalId}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={handleCloseModal}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <div
            ref={modalRef}
            className="relative z-10 w-full max-w-2xl border-4 border-white bg-zinc-950 p-6 sm:p-8 shadow-[12px_12px_0_0_#ff2a4b] my-8"
          >
            <div className="halftone-dots absolute inset-0 opacity-20 pointer-events-none" />

            {/* Modal Header */}
            <div className="relative z-10 flex items-start justify-between border-b-2 border-white/20 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="border border-gold bg-gold px-2 py-0.5 font-mono text-xs font-bold text-black">
                    CODE: {activeModalEvent.code}
                  </span>
                  <span className="border border-white/20 bg-black px-2 py-0.5 text-[10px] font-display uppercase tracking-widest text-white/70">
                    {activeModalEvent.category}
                  </span>
                </div>
                <h3 id={modalId} className="font-display text-3xl sm:text-4xl text-white">
                  {activeModalEvent.name}
                </h3>
              </div>

              <button
                data-modal-close
                type="button"
                onClick={handleCloseModal}
                aria-label="Close Event Modal"
                className="flex h-9 w-9 items-center justify-center border-2 border-white bg-black text-white hover:bg-[#ff2a4b] transition-colors focus-visible:ring-2 focus-visible:ring-gold"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="relative z-10 mt-6 space-y-6 max-h-[60vh] overflow-y-auto pr-2">
              {/* Fee and Format */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 border border-white/20 bg-black/80 p-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">ENTRY FEE</span>
                  <p className="font-display text-2xl text-gold mt-0.5">{activeModalEvent.feeText}</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">PARTICIPATION</span>
                  <p className="text-sm font-semibold text-white mt-0.5">{activeModalEvent.type} Event</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">PAYMENT VIA</span>
                  <p className="text-sm font-semibold text-[#00f0ff] mt-0.5">VIERP Portal</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.25em] text-white/50 mb-1">EVENT DESCRIPTION</h4>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                  {activeModalEvent.description}
                </p>
              </div>

              {/* Rules List */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-2 flex items-center gap-1.5">
                  <Shield className="h-4 w-4 text-gold" /> OFFICIAL GUIDELINES
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-white/80">
                  {activeModalEvent.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-mono text-gold font-bold">0{idx + 1}.</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* VIERP Instructions Note */}
              <div className="border border-dashed border-white/30 bg-zinc-900/80 p-4">
                <span className="text-xs font-semibold text-white uppercase tracking-wider block flex items-center gap-1.5">
                  <Info className="h-4 w-4 text-[#00f0ff]" /> HOW TO PAY ON VIERP:
                </span>
                <p className="text-xs text-white/70 mt-1">
                  Login to VIERP → Events → Vishwakarandak → Event Fee → Select Code{" "}
                  <strong className="text-gold font-mono">{activeModalEvent.code}</strong> → Complete Payment.
                  After payment, WhatsApp your receipt screenshot to{" "}
                  <strong className="text-white font-mono">84461 44373</strong> or{" "}
                  <strong className="text-white font-mono">9892932711</strong>.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="relative z-10 mt-6 flex flex-wrap items-center justify-between gap-4 border-t-2 border-white/20 pt-4">
              <button
                type="button"
                onClick={() => handleCopyCode(activeModalEvent.code)}
                className="border border-gold bg-gold/15 px-4 py-2 font-display text-sm tracking-widest text-gold hover:bg-gold hover:text-black transition-colors flex items-center gap-1.5"
              >
                <Copy className="h-4 w-4" />
                <span>{copiedCode === activeModalEvent.code ? "CODE COPIED!" : `COPY CODE [${activeModalEvent.code}]`}</span>
              </button>

              <button
                type="button"
                onClick={handleCloseModal}
                className="comic-panel bg-white px-6 py-2 font-display text-base tracking-widest text-black hover:bg-gold transition-colors"
              >
                CLOSE [ESC]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
