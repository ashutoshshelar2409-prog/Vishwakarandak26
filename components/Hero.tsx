"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Countdown from "./Countdown";
import { houses } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const flips = gsap.utils.toArray<HTMLElement>(".flip");
      const tl = gsap.timeline();

      // Marvel-intro style flip-book: panels flash rapidly behind the logo.
      tl.set(flips, { autoAlpha: 0 });
      for (let round = 0; round < 3; round++) {
        flips.forEach((f) => {
          tl.to(f, { autoAlpha: 1, duration: 0.001 }).to(f, { autoAlpha: 0, duration: 0.001 }, "+=0.07");
        });
      }
      tl.from(".logo-block", { scale: 1.6, autoAlpha: 0, duration: 0.6, ease: "expo.out" }, 0.15)
        .from(".hero-sub", { y: 30, autoAlpha: 0, stagger: 0.12, duration: 0.6, ease: "power3.out" });

      // Scroll out: logo zooms and fades as you scroll into the page.
      gsap.to(".hero-inner", {
        scale: 1.25,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-16">
      <div className="halftone absolute inset-0" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,36,41,0.35),transparent_65%)]"
        aria-hidden
      />

      {/* Flip-book panels */}
      <div className="absolute inset-0" aria-hidden>
        {houses.map((h, i) => (
          <div
            key={h.slug}
            className="flip invisible absolute inset-0 flex items-center justify-center"
            style={{
              background: `linear-gradient(${30 + i * 40}deg, ${h.color}, #000 70%)`,
            }}
          >
            <span className="font-display text-[40vw] leading-none text-white/10">{h.emblem}</span>
          </div>
        ))}
      </div>

      <div className="hero-inner relative z-10 flex flex-col items-center px-4 text-center">
        <p className="hero-sub mb-4 font-display text-lg tracking-[0.5em] text-white/70 md:text-xl">
          VIT Pune Student Council presents
        </p>
        <h1 className="logo-block bg-marvel px-4 py-2 font-display text-[15vw] leading-[0.85] tracking-tight text-white shadow-[0_0_80px_rgba(230,36,41,0.6)] md:px-8 md:text-[10rem]">
          VISHWAKARANDAK
        </h1>
        <p className="hero-sub mt-2 font-display text-6xl tracking-widest md:text-8xl">
          <span className="text-stroke">&apos;26</span>
        </p>
        <p className="hero-sub mt-4 max-w-xl text-lg text-white/80 md:text-2xl">
          Where Students Turn into Superheroes
        </p>
        <div className="hero-sub mt-8">
          <Countdown />
        </div>
        <p className="hero-sub mt-4 text-sm uppercase tracking-[0.3em] text-white/50">
          1 November 2026 · VIT Pune
        </p>
        <Link
          href="#houses"
          className="hero-sub panel mt-8 bg-white px-8 py-3 font-display text-2xl tracking-widest text-black transition hover:-translate-y-1 hover:shadow-[10px_10px_0_0_var(--marvel)]"
        >
          Assemble ↓
        </Link>
      </div>
    </section>
  );
}
