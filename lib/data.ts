export const EVENT_DATE = "2026-11-01T09:00:00+05:30";

export type House = {
  slug: string;
  name: string;
  tagline: string;
  color: string;
  glow: string;
  emblem: string;
};

export const houses: House[] = [
  {
    slug: "fantastic-four",
    name: "Fantastic Four",
    tagline: "Four minds. One unstoppable force.",
    color: "#2563eb",
    glow: "#60a5fa",
    emblem: "4",
  },
  {
    slug: "x-men",
    name: "X-Men",
    tagline: "Gifted. Different. Unbeatable.",
    color: "#1c1917",
    glow: "#facc15",
    emblem: "X",
  },
  {
    slug: "wakandans",
    name: "Wakandans",
    tagline: "Forever, and then some.",
    color: "#6d28d9",
    glow: "#c084fc",
    emblem: "W",
  },
  {
    slug: "avengers",
    name: "Avengers",
    tagline: "Assemble. Then dominate.",
    color: "#ea580c",
    glow: "#fb923c",
    emblem: "A",
  },
  {
    slug: "spiderverse",
    name: "Spiderverse",
    tagline: "Anyone can wear the mask.",
    color: "#dc2626",
    glow: "#f87171",
    emblem: "S",
  },
  {
    slug: "thunderbolts",
    name: "Thunderbolts",
    tagline: "Underdogs with a lightning strike.",
    color: "#ca8a04",
    glow: "#fde047",
    emblem: "T",
  },
  {
    slug: "guardians",
    name: "Guardians of the Galaxy",
    tagline: "We are Groot. We are winning.",
    color: "#7c3aed",
    glow: "#e879f9",
    emblem: "G",
  },
];

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
  phase: string;
};

export const timeline: TimelineItem[] = [
  {
    date: "6 October 2025",
    phase: "Phase I",
    title: "Teaser Announced",
    description:
      "The official teaser for Karandak dropped, giving the first glimpse of a universe about to collide.",
  },
  {
    date: "14 October 2025",
    phase: "Phase II",
    title: "Theme Reveal",
    description:
      "The Marvel theme goes public. Seven houses, seven teams, one multiverse of competition.",
  },
  {
    date: "31 October 2025",
    phase: "Phase III",
    title: "Trailer Released",
    description:
      "The full trailer showcases the heroes, the houses and the battles to come.",
  },
  {
    date: "5 November 2025",
    phase: "Endgame",
    title: "Karandak Day 1",
    description:
      "First day of competitions: heroic performances, inter-house showdowns and the leaderboard chase begins.",
  },
];

export const rulebooks = [
  {
    title: "Technical",
    description:
      "Complete guide to house points, technical events, and every hero's responsibilities.",
    accent: "#38bdf8",
    icon: "⚙",
  },
  {
    title: "Sports",
    description:
      "Detailed schedule and participation guidelines for every sporting battle.",
    accent: "#E62429",
    icon: "🛡",
  },
  {
    title: "Extra-Curricular",
    description:
      "Official rules and regulations for the cultural showdowns of the tournament.",
    accent: "#facc15",
    icon: "✦",
  },
];

export const gallery = [
  "Assemble Moment",
  "Multiverse Night",
  "Heroic Celebration",
  "Infinity Gathering",
  "Quantum Realm",
  "House Unity",
  "Origin Story",
  "Epic Showdown",
  "Grand Finale",
  "Snap Back",
  "Team-Up",
  "Post-Credits Scene",
];

export const scores = [
  { house: "avengers", technical: 120, sports: 145, cultural: 98 },
  { house: "wakandans", technical: 132, sports: 110, cultural: 124 },
  { house: "x-men", technical: 118, sports: 128, cultural: 104 },
  { house: "spiderverse", technical: 96, sports: 134, cultural: 115 },
  { house: "guardians", technical: 101, sports: 99, cultural: 140 },
  { house: "fantastic-four", technical: 125, sports: 88, cultural: 92 },
  { house: "thunderbolts", technical: 90, sports: 117, cultural: 86 },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/timeline", label: "Timeline" },
  { href: "/events", label: "Rulebooks" },
  { href: "/scoreboard", label: "Scoreboard" },
];
