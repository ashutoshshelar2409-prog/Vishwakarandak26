"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import { Menu, X, Shield, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b-2 border-white/20 bg-black/90 backdrop-blur-md shadow-2xl py-2"
          : "border-b border-white/10 bg-black/70 backdrop-blur-sm py-3"
      }`}
    >
      <div className="comic-speed-lines absolute inset-0 opacity-15 pointer-events-none" />

      <nav
        aria-label="Main Navigation"
        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Brand / Title Lockup */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gold/70 bg-black/90 p-0.5 shadow-[0_0_12px_rgba(255,215,0,0.3)] transition-transform group-hover:scale-105">
            <Image
              src="/images/council-logo.png"
              alt="VIT Pune Student Council Emblem"
              width={40}
              height={40}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="bg-[#ff2a4b] px-1.5 py-0.2 font-display text-sm tracking-wider text-white font-bold">
                VIT PUNE
              </span>
              <span className="font-display text-xl tracking-wider text-white group-hover:text-gold transition-colors">
                VISHWAKARANDAK
              </span>
              <span className="text-[#ff2a4b] font-display text-xl font-bold">&apos;26</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#00f0ff] -mt-0.5 font-mono">
              APEX OF INFINITY // MCU EDITION
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-display text-base tracking-widest text-white/80 transition-all hover:text-gold hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="#official-events"
            className="hidden sm:inline-flex items-center gap-2 border-2 border-gold bg-gold/15 px-3.5 py-1.5 font-display text-sm tracking-widest text-white transition-all hover:bg-gold hover:text-black hover:shadow-[3px_3px_0_0_#fff]"
          >
            <Shield className="h-4 w-4 text-gold" />
            <span>60+ EVENTS</span>
          </Link>

          <button
            type="button"
            aria-label={open ? "Close Navigation Menu" : "Open Navigation Menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            className="flex h-10 w-10 items-center justify-center border border-white/20 bg-zinc-900/80 text-white transition hover:border-gold hover:text-gold lg:hidden focus-visible:ring-2 focus-visible:ring-gold"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-6 w-6 text-[#ff2a4b]" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {open && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-x-0 top-[65px] bottom-0 z-40 flex flex-col justify-between border-t border-white/15 bg-black/95 px-6 py-6 backdrop-blur-xl lg:hidden overflow-y-auto"
        >
          <div className="halftone-dots absolute inset-0 opacity-40 pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-2">
            <div className="mb-3 border-b border-white/10 pb-2">
              <span className="font-display text-xs tracking-[0.3em] text-gold uppercase">
                Multiverse Story Chapters
              </span>
            </div>

            <ul className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-white/5 py-3 font-display text-2xl tracking-widest text-white/90 hover:text-gold hover:pl-2 transition-all"
                  >
                    <span>{l.label}</span>
                    <ChevronRight className="h-5 w-5 text-white/40" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 mt-6 border-t border-white/10 pt-4">
            <Link
              href="#official-events"
              onClick={() => setOpen(false)}
              className="comic-panel flex w-full items-center justify-center gap-2 bg-[#ff2a4b] py-3 font-display text-xl tracking-widest text-white text-center"
            >
              <Shield className="h-5 w-5 text-gold" />
              <span>OFFICIAL EVENT ROSTER</span>
            </Link>
            <p className="mt-3 text-center text-[11px] uppercase tracking-widest text-white/40">
              Student Council VIT Pune · Official Theme: MCU
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
