"use client";

import { useState, useEffect, useRef, useId } from "react";
import { galleryItems, GalleryItem } from "@/lib/data";
import { Camera, X, ChevronLeft, ChevronRight, Eye, Sparkles } from "lucide-react";

export default function ChapterArchive() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lightboxHeadingId = useId();

  const activeIndex = activeItem
    ? galleryItems.findIndex((item) => item.id === activeItem.id)
    : -1;

  const handleOpenLightbox = (item: GalleryItem, buttonElem: HTMLButtonElement) => {
    triggerRef.current = buttonElem;
    setActiveItem(item);
  };

  const handleCloseLightbox = () => {
    setActiveItem(null);
    setTimeout(() => {
      if (triggerRef.current) {
        triggerRef.current.focus();
      }
    }, 50);
  };

  const handleNext = () => {
    if (activeIndex >= 0) {
      const nextIndex = (activeIndex + 1) % galleryItems.length;
      setActiveItem(galleryItems[nextIndex]);
    }
  };

  const handlePrev = () => {
    if (activeIndex >= 0) {
      const prevIndex = (activeIndex - 1 + galleryItems.length) % galleryItems.length;
      setActiveItem(galleryItems[prevIndex]);
    }
  };

  // Keyboard navigation: ArrowLeft, ArrowRight, Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;

      if (e.key === "Escape") {
        e.preventDefault();
        handleCloseLightbox();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "Tab" && lightboxRef.current) {
        // Focus trap
        const focusable = lightboxRef.current.querySelectorAll<HTMLElement>(
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
  }, [activeItem, activeIndex]);

  // Lock body scroll and auto-focus close button
  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        const closeBtn = lightboxRef.current?.querySelector<HTMLButtonElement>("[data-lightbox-close]");
        closeBtn?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  return (
    <section
      id="archive"
      aria-label="Chapter 08: The Infinity Archive"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="halftone-dots absolute inset-0 opacity-20 pointer-events-none" />

      {/* Chapter Marker Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-4">
        <div className="flex items-center gap-3">
          <span className="bg-marvel px-2.5 py-1 font-display text-lg tracking-widest text-white font-bold">
            CHAPTER 08
          </span>
          <span className="font-display text-xl sm:text-2xl tracking-widest text-white/80">
            THE INFINITY ARCHIVE // CURATED PANELS
          </span>
        </div>
        <div className="text-right">
          <span className="font-display text-xs uppercase tracking-[0.25em] text-portal-cyan">
            KEYBOARD-ACCESSIBLE GALLERY
          </span>
        </div>
      </div>

      {/* Chapter Title */}
      <div className="relative z-10 mt-10 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-2 block">
          SEQUENTIAL MEMORIES
        </span>
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.9] text-white">
          Frames Frozen <br />
          <span className="text-stroke-marvel">In The Quantum</span> Archive.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
          Relive historic moments from past Vishwakarandak chapters. Select any comic strip to open
          the full keyboard-navigable lightbox [← / → keys].
        </p>
      </div>

      {/* Asymmetric Comic Grid */}
      <div className="relative z-10 mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {galleryItems.map((item, index) => {
          // Asymmetric tilt rotation alternating for authentic comic spread feel
          const tiltClass = index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1";

          return (
            <button
              key={item.id}
              type="button"
              onClick={(e) => handleOpenLightbox(item, e.currentTarget)}
              className={`group relative flex flex-col justify-between overflow-hidden border-2 border-white/80 bg-zinc-950 p-5 text-left transition-all duration-300 hover:scale-[1.02] ${tiltClass}`}
              style={{
                boxShadow: `6px 6px 0 0 ${item.hue}`,
              }}
              aria-label={`Open photo placeholder for ${item.title}`}
            >
              <div className="halftone-dots absolute inset-0 opacity-30 pointer-events-none" />

              {/* Graphic Frame with Comic Hue Gradient */}
              <div
                className="relative flex h-48 w-full flex-col items-center justify-center border border-white/20 p-4 transition-transform group-hover:scale-[1.03]"
                style={{
                  background: `radial-gradient(circle at 40% 30%, ${item.hue}33, #08090d 80%)`,
                }}
              >
                <Camera className="h-8 w-8 text-white/40 mb-2 group-hover:text-gold transition-colors" />
                <span className="border border-white/40 bg-black/80 px-2 py-0.5 text-[10px] font-display uppercase tracking-widest text-gold font-bold">
                  PHOTO PLACEHOLDER
                </span>
                <span className="mt-1 text-[9px] uppercase tracking-wider text-white/50">
                  add festival photography
                </span>

                <div className="absolute right-2 bottom-2 rounded bg-black/70 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Caption & Metadata */}
              <div className="mt-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                  <span className="text-[10px] font-display tracking-widest text-gold uppercase">
                    {item.issueTag}
                  </span>
                  <span className="text-[10px] uppercase text-white/50">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-white mt-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-white/70 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Accessible Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={lightboxHeadingId}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
            onClick={handleCloseLightbox}
            aria-hidden="true"
          />

          {/* Lightbox Container */}
          <div
            ref={lightboxRef}
            className="relative z-10 w-full max-w-4xl border-4 border-white bg-zinc-950 p-6 sm:p-8 shadow-[12px_12px_0_0_#fff]"
          >
            <div className="halftone-dots absolute inset-0 opacity-20 pointer-events-none" />

            {/* Top Bar with Navigation Arrows & Close Button */}
            <div className="relative z-10 flex items-center justify-between border-b-2 border-white/20 pb-4">
              <div className="flex items-center gap-2">
                <span className="bg-marvel px-2 py-0.5 font-display text-xs tracking-widest text-white">
                  ARCHIVE PANEL {activeIndex + 1} OF {galleryItems.length}
                </span>
                <span className="text-xs text-white/60 font-mono hidden sm:inline">
                  [USE ← / → KEYS TO NAVIGATE]
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous gallery image"
                  className="flex h-9 w-9 items-center justify-center border border-white/40 bg-black text-white hover:border-gold hover:text-gold transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next gallery image"
                  className="flex h-9 w-9 items-center justify-center border border-white/40 bg-black text-white hover:border-gold hover:text-gold transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <button
                  data-lightbox-close
                  type="button"
                  onClick={handleCloseLightbox}
                  aria-label="Close Lightbox"
                  className="flex h-9 w-9 items-center justify-center border-2 border-white bg-marvel text-white hover:bg-white hover:text-black transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Main Lightbox Frame */}
            <div className="relative z-10 mt-6 grid grid-cols-1 gap-6 md:grid-cols-12 items-center">
              <div
                className="md:col-span-8 flex h-64 sm:h-96 w-full flex-col items-center justify-center border-2 border-dashed border-white/30 p-6 text-center"
                style={{
                  background: `radial-gradient(circle at center, ${activeItem.hue}44, #050608 85%)`,
                }}
              >
                <Camera className="h-12 w-12 text-white/40 mb-3" />
                <span className="border-2 border-white bg-black/90 px-3 py-1 font-display text-sm uppercase tracking-widest text-gold font-bold">
                  PHOTO PLACEHOLDER
                </span>
                <p className="mt-2 text-xs uppercase tracking-widest text-white/60">
                  Awaiting official high-resolution media upload
                </p>
                <span className="mt-4 font-mono text-xs text-white/40">
                  VIT_KARANDAK_ARCHIVE_{activeItem.id.toUpperCase()}.TIF
                </span>
              </div>

              {/* Caption & Metadata Sidebar */}
              <div className="md:col-span-4 flex flex-col justify-between h-full space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold">
                    {activeItem.issueTag}
                  </span>
                  <h3 id={lightboxHeadingId} className="font-display text-3xl sm:text-4xl text-white mt-1">
                    {activeItem.title}
                  </h3>
                  <div className="mt-3 border-l-2 border-marvel pl-3">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 block">
                      SCENE CONTEXT
                    </span>
                    <p className="text-sm text-white/80 mt-1 leading-relaxed">
                      {activeItem.caption}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <span className="text-[10px] uppercase tracking-widest text-white/50 block">
                    LOCATION / STAGE
                  </span>
                  <p className="text-xs font-semibold text-portal-cyan mt-0.5">
                    {activeItem.category} · VIT Pune Campus
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Keyboard Hint */}
            <div className="relative z-10 mt-6 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-white/50 uppercase tracking-widest">
              <span>Press [ESC] to return to archive</span>
              <span>Student Council VIT Pune Media Wing</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
