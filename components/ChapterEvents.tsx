"use client";

import { useState, useEffect, useRef, useId } from "react";
import { eventsData, EventItem, EventCategory } from "@/lib/data";
import { Search, Filter, Calendar, Clock, MapPin, Users, X, Info, Shield, CheckCircle2, AlertCircle } from "lucide-react";

const categories: EventCategory[] = [
  "All",
  "Technical",
  "Cultural",
  "Music & Dance",
  "Art & Creative",
  "Sports",
  "Gaming",
];

export default function ChapterEvents() {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalHeadingId = useId();

  // Filter events based on category & search query
  const filteredEvents = eventsData.filter((ev) => {
    const matchesCat = selectedCategory === "All" || ev.category === selectedCategory;
    const matchesQuery =
      ev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (ev.houseAffiliation && ev.houseAffiliation.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  // Modal Open Handler with trigger element preservation
  const handleOpenModal = (event: EventItem, triggerElem: HTMLButtonElement) => {
    triggerButtonRef.current = triggerElem;
    setActiveModalEvent(event);
  };

  // Modal Close Handler with focus restoration
  const handleCloseModal = () => {
    setActiveModalEvent(null);
    setTimeout(() => {
      if (triggerButtonRef.current) {
        triggerButtonRef.current.focus();
      }
    }, 50);
  };

  // Keyboard accessibility: ESC key to close modal & focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalEvent) return;

      if (e.key === "Escape") {
        e.preventDefault();
        handleCloseModal();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalEvent]);

  // Scroll lock when modal is open
  useEffect(() => {
    if (activeModalEvent) {
      document.body.style.overflow = "hidden";
      // Auto focus the close button inside modal
      setTimeout(() => {
        const closeBtn = modalRef.current?.querySelector<HTMLButtonElement>("[data-modal-close]");
        closeBtn?.focus();
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
      id="events"
      aria-label="Chapter 04: Enter the Events"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="halftone-dots absolute inset-0 opacity-20 pointer-events-none" />

      {/* Chapter Marker Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-4">
        <div className="flex items-center gap-3">
          <span className="bg-marvel px-2.5 py-1 font-display text-lg tracking-widest text-white font-bold">
            CHAPTER 04
          </span>
          <span className="font-display text-xl sm:text-2xl tracking-widest text-white/80">
            ENTER THE EVENTS // EXPLORER
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="border border-gold/60 bg-gold/10 px-2.5 py-0.5 text-[11px] font-display uppercase tracking-widest text-gold font-bold">
            DEMO ROSTER PREVIEW
          </span>
        </div>
      </div>

      {/* Section Headline */}
      <div className="relative z-10 mt-10 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-portal-cyan font-bold mb-2 block">
          CURATED COMIC INDEX
        </span>
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.9] text-white">
          Choose Your Arena. <br />
          <span className="text-stroke-gold">Stake Your Claim.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
          Filter through official event categories or search by keyword. Every event card contains
          guidelines, rules, and demo schedule details.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="relative z-10 mt-10 flex flex-col gap-6">
        {/* Search Input Box */}
        <div className="relative max-w-md">
          <label htmlFor="event-search" className="sr-only">
            Search Events
          </label>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
            <input
              id="event-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search hackathons, football, battle of bands..."
              className="w-full border-2 border-white/40 bg-zinc-950/90 py-2.5 pl-11 pr-4 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
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
          aria-label="Event Categories"
          className="flex flex-wrap gap-2"
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isSelected}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`border-2 px-3.5 py-1.5 font-display text-sm sm:text-base tracking-widest transition-all ${
                  isSelected
                    ? "border-white bg-marvel text-white shadow-[4px_4px_0_0_#fff]"
                    : "border-white/20 bg-zinc-950/70 text-white/70 hover:border-white/60 hover:text-white"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Event Grid: Varied Comic Panel Proportions */}
      <div className="relative z-10 mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.length === 0 ? (
          <div className="col-span-full border-2 border-dashed border-white/20 bg-zinc-950 p-12 text-center">
            <AlertCircle className="mx-auto h-10 w-10 text-marvel" />
            <p className="mt-3 font-display text-2xl text-white">No Arenas Found</p>
            <p className="mt-1 text-sm text-white/60">
              No events matched &ldquo;{searchQuery}&rdquo; in {selectedCategory}. Try resetting filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="comic-panel mt-6 bg-white px-5 py-2 font-display text-sm tracking-widest text-black hover:bg-gold"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          filteredEvents.map((ev, index) => {
            // Asymmetric visual weighting: first card in full view is featured
            const isFeatured = index === 0 && selectedCategory === "All";

            return (
              <article
                key={ev.id}
                className={`group relative flex flex-col justify-between border-2 border-white/80 bg-zinc-950 p-6 transition-all duration-300 hover:-translate-y-1.5 ${
                  isFeatured ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black" : ""
                }`}
                style={{
                  boxShadow: `6px 6px 0 0 ${ev.comicPanelAccent}`,
                }}
              >
                <div className="halftone-dots absolute inset-0 opacity-20 pointer-events-none" />

                {/* Top Card Row */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <span className="text-[10px] font-display uppercase tracking-widest text-gold">
                      {ev.codeName}
                    </span>
                    <span className="border border-white/20 bg-black/60 px-2 py-0.5 text-[10px] uppercase tracking-widest text-white/70">
                      {ev.category}
                    </span>
                  </div>

                  {/* Title & House Affiliation */}
                  <h3 className="mt-4 font-display text-2xl sm:text-3xl text-white group-hover:text-gold transition-colors leading-tight">
                    {ev.name}
                  </h3>

                  {ev.houseAffiliation && (
                    <span className="mt-1 inline-block text-xs font-display tracking-widest text-portal-cyan uppercase">
                      HOST REALM: {ev.houseAffiliation}
                    </span>
                  )}

                  <p className="mt-3 text-sm text-white/70 leading-relaxed">
                    {ev.description}
                  </p>
                </div>

                {/* Card Meta & Action Button */}
                <div className="mt-8 border-t border-white/10 pt-4">
                  <div className="mb-4 flex flex-wrap gap-y-1.5 gap-x-4 text-xs text-white/60">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-marvel" />
                      {ev.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-gold" />
                      {ev.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-portal-cyan" />
                      {ev.venue}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="border border-marvel/60 bg-marvel/10 px-2 py-0.5 text-[10px] font-display uppercase tracking-widest text-marvel">
                      DEMO CONTENT
                    </span>

                    <button
                      type="button"
                      onClick={(e) => handleOpenModal(ev, e.currentTarget)}
                      className="border border-white bg-white px-4 py-1.5 font-display text-sm tracking-widest text-black hover:bg-gold hover:border-gold transition-all"
                    >
                      VIEW PROTOCOLS →
                    </button>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>

      {/* Keyboard-Accessible Modal Dialog with Focus Trap & Screen Reader Support */}
      {activeModalEvent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalHeadingId}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop with light dismiss */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={handleCloseModal}
            aria-hidden="true"
          />

          {/* Modal Panel */}
          <div
            ref={modalRef}
            className="relative z-10 w-full max-w-2xl border-4 border-white bg-zinc-950 p-6 sm:p-8 shadow-[12px_12px_0_0_var(--marvel)] overflow-hidden my-8"
          >
            <div className="halftone-dots absolute inset-0 opacity-25 pointer-events-none" />

            {/* Modal Header Bar */}
            <div className="relative z-10 flex items-start justify-between border-b-2 border-white/20 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-marvel px-2 py-0.5 font-display text-xs tracking-widest text-white">
                    {activeModalEvent.category.toUpperCase()}
                  </span>
                  <span className="border border-white/20 bg-black px-2 py-0.5 text-[10px] font-display uppercase tracking-widest text-gold">
                    {activeModalEvent.codeName}
                  </span>
                </div>
                <h3 id={modalHeadingId} className="font-display text-3xl sm:text-4xl text-white">
                  {activeModalEvent.name}
                </h3>
              </div>

              <button
                data-modal-close
                type="button"
                onClick={handleCloseModal}
                aria-label="Close Event Modal"
                className="flex h-9 w-9 items-center justify-center border-2 border-white bg-black text-white hover:bg-marvel transition-colors focus-visible:ring-2 focus-visible:ring-gold"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="relative z-10 mt-6 space-y-6 max-h-[60vh] overflow-y-auto pr-2">
              {/* Full Description */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.25em] text-white/50 mb-1">
                  MISSION BRIEFING
                </h4>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                  {activeModalEvent.fullDescription}
                </p>
              </div>

              {/* Event Logistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 border border-white/15 bg-black/60 p-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 block">DATE</span>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">{activeModalEvent.date}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 block">TIME</span>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">{activeModalEvent.time}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 block">VENUE</span>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">{activeModalEvent.venue}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 block">TEAM SIZE</span>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">{activeModalEvent.teamSize || "TBA"}</p>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 block">HOST REALM</span>
                  <p className="text-xs sm:text-sm font-semibold text-gold mt-0.5">{activeModalEvent.houseAffiliation}</p>
                </div>
              </div>

              {/* Official Rules List */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-2 flex items-center gap-1.5">
                  <Shield className="h-4 w-4 text-gold" />
                  OFFICIAL PROTOCOLS & RULES
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-white/80">
                  {activeModalEvent.rules.map((rule: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-display text-marvel font-bold text-sm">0{idx + 1}.</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Registration Status (Truthful - No invented registration links) */}
              <div className="border border-dashed border-white/30 bg-zinc-900/60 p-4 flex items-start gap-3">
                <Info className="h-5 w-5 text-portal-cyan shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                    Registration Status
                  </span>
                  <p className="text-xs text-white/70 mt-0.5">
                    Official registration portals and department slot allocations will be published by the
                    VIT Pune Student Council prior to festival launch.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="relative z-10 mt-6 flex flex-wrap items-center justify-between gap-4 border-t-2 border-white/20 pt-4">
              <span className="border border-marvel/60 bg-marvel/10 px-2.5 py-1 text-[11px] font-display uppercase tracking-widest text-marvel">
                DEMO PREVIEW ONLY
              </span>

              <button
                type="button"
                onClick={handleCloseModal}
                className="comic-panel bg-white px-6 py-2 font-display text-base tracking-widest text-black hover:bg-gold transition-colors"
              >
                CLOSE PROTOCOL [ESC]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
