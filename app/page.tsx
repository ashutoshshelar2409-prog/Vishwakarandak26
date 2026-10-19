import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import StorySpiderman from "@/components/StorySpiderman";
import StoryIronMan from "@/components/StoryIronMan";
import StoryThanos from "@/components/StoryThanos";
import OfficialEventExplorer from "@/components/OfficialEventExplorer";
import VierpGuide from "@/components/VierpGuide";
import ChapterMultiverse from "@/components/ChapterMultiverse";
import ChapterCampus from "@/components/ChapterCampus";
import ChapterArchive from "@/components/ChapterArchive";
import ChapterFinale from "@/components/ChapterFinale";

export default function Home() {
  return (
    <>
      {/* Cinematic Comic Opening Hero: Doctor Strange Multiversal Rift */}
      <Hero />

      {/* House Multiverse Marquee Ribbon */}
      <MarqueeStrip />

      {/* Chapter 01: The Web Slinger — Spider-Man Queens narrative, web-shooter, creative & gaming spotlight */}
      <StorySpiderman />

      {/* Chapter 02: Stark Supersonic Flight — Iron Man HUD, target lock, arc reactor overdrive, tech events */}
      <StoryIronMan />

      {/* Chapter 03: The Infinity Gauntlet — Thanos Snap shockwave, 6 cosmic stones, sports arena */}
      <StoryThanos />

      {/* Chapter 04: Official 60+ Event Explorer — Search, code filtering, and VIERP Fee Calculator */}
      <OfficialEventExplorer />

      {/* Chapter 05: VIERP 6-Step Registration & Payment Protocol with WhatsApp coordinators */}
      <VierpGuide />

      {/* Chapter 06: The Seven House Realms of Karandak */}
      <ChapterMultiverse />

      {/* Chapter 07: Behind The Panels — Campus Venues & Student Atmosphere */}
      <ChapterCampus />

      {/* Chapter 08: The Infinity Archive — Curated Photo Placeholders & Lightbox */}
      <ChapterArchive />

      {/* Chapter 09: The Final Issue — Assembly & VIERP Registration CTA */}
      <ChapterFinale />
    </>
  );
}
