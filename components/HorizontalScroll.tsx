"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  children: ReactNode;
  header?: ReactNode;
  className?: string;
  id?: string;
};

/**
 * Pins the section and turns vertical scroll into horizontal movement of the
 * track. Below 768px the track becomes a native swipe row instead.
 * Children marked with `data-reveal` fade in as they enter from the right.
 */
export default function HorizontalScroll({ children, header, className = "", id }: Props) {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth;

        const tween = gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: () => "+=" + distance(),
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]", el).forEach((card) => {
          gsap.from(card, {
            opacity: 0.15,
            scale: 0.88,
            rotate: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: "left 95%",
              end: "left 55%",
              scrub: true,
            },
          });
        });
      });
      return () => mm.revert();
    },
    { scope: section }
  );

  return (
    <section
      id={id}
      ref={section}
      className={`relative flex min-h-screen flex-col justify-center overflow-hidden py-16 ${className}`}
    >
      {header && <div className="px-6 md:px-16">{header}</div>}
      <div
        ref={track}
        className="mt-10 flex w-full snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:w-max md:snap-none md:gap-10 md:overflow-visible md:px-16 md:pb-0"
      >
        {children}
      </div>
    </section>
  );
}
