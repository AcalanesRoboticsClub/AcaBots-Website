// Team-provided content, checked October 19, 2026. Refresh before each season.
// Competition dates are planned, not confirmed registrations.
export const events = [
  {
    id: "meet-1",
    date: "2026-11-01",
    shortDate: "NOV 01",
    displayDate: "Nov 1, 2026",
    name: "League meet 1",
    previewLabel: "Meet 1",
    venue: "Venue to be confirmed",
  },
  {
    id: "meet-2",
    date: "2026-12-06",
    shortDate: "DEC 06",
    displayDate: "Dec 6, 2026",
    name: "League meet 2",
    previewLabel: "Meet 2 at Acalanes",
    venue: "At Acalanes High School",
  },
  {
    id: "meet-3",
    date: "2027-01-09",
    shortDate: "JAN 09",
    displayDate: "Jan 9, 2027",
    name: "League meet 3",
    previewLabel: "Meet 3",
    venue: "Venue to be confirmed",
  },
  {
    id: "tournament",
    date: "2027-01-31",
    shortDate: "JAN 31",
    displayDate: "Jan 31, 2027",
    name: "League tournament",
    previewLabel: "Tournament",
    venue: "Venue to be confirmed",
  },
];

export const leaders = [
  { name: "Henry Rosenberg", role: "Co-president · Mechanical lead" },
  { name: "Carissa Penn", role: "Co-president · Programming lead" },
  { name: "Colin Seile", role: "Vice president · Team strategy" },
  { name: "Adrian Anderson", role: "Secretary" },
  { name: "David Penn", role: "Treasurer · Team education" },
  { name: "Mason Lansphere", role: "Social media" },
  { name: "Dillon Nagar", role: "Team logistics" },
  { name: "Jonathan Ding", role: "Outreach" },
  { name: "Fisher Bradford-Urban", role: "Team education" },
];

export const meetingDays = "Mondays, Tuesdays, and Thursdays";

// Original team photographs: only rectangular crops, downsizing and compression.
// Source attachments and crop coordinates are recorded in design/photo-sources.json.
export const photos = {
  workshop: {
    src: "/images/workshop-1200.webp",
    srcSet: "/images/workshop-720.webp 720w, /images/workshop-1200.webp 1200w",
    width: 1200,
    height: 900,
    alt: "Students working on a robot and laptops around a classroom workbench.",
    caption: "At the workbench.",
  },
  programming: {
    src: "/images/programming-1200.webp",
    srcSet:
      "/images/programming-720.webp 720w, /images/programming-1200.webp 1200w",
    width: 1200,
    height: 900,
    alt: "An AcaBots member working at a desktop computer in the robotics classroom.",
    caption: "Programming.",
  },
  community: {
    src: "/images/community-group-1600.webp",
    srcSet:
      "/images/community-group-960.webp 960w, /images/community-group-1600.webp 1600w",
    width: 1600,
    height: 1067,
    alt: "Team members gathered around a demonstration robot in a robotics workspace.",
    caption: "With the robotics community.",
  },
  demo: {
    src: "/images/vr-demo-960.webp",
    srcSet: "/images/vr-demo-640.webp 640w, /images/vr-demo-960.webp 960w",
    width: 960,
    height: 1281,
    alt: "A student wearing a VR headset and holding controllers beside a demonstration robot.",
    caption: "Trying a robot demo.",
  },
  groupDemo: {
    src: "/images/group-demo-1200.webp",
    srcSet: "/images/group-demo-720.webp 720w, /images/group-demo-1200.webp 1200w",
    width: 1200,
    height: 800,
    alt: "Team members posing beside two demonstration robots.",
    caption: "At a robotics demo.",
  },
};

export const links = {
  email: "mailto:dillon.nagar@gmail.com",
  joinEmail: "mailto:dillon.nagar@gmail.com?subject=Joining%20AcaBots",
  sponsorEmail: "mailto:dillon.nagar@gmail.com?subject=AcaBots%20sponsorship",
  instagram: "https://www.instagram.com/acalanesrobotics/",
  lpie: "https://www.lpie.org/",
  anderson: "https://www.andersonpower.com/",
  almond: "https://www.almond.bot/",
  lightberry: "https://lightberry.com/",
  scout: "https://ftcscout.org/teams/24689",
  history: "https://ftcscout.org/teams/24689?season=2024",
};

// Recognition order supplied by Dillon. These are not fundraising price tiers.
export const sponsorTiers = [
  {
    id: "lead",
    label: "Lead sponsor",
    sponsors: [
      {
        id: "lpie",
        name: "LPIE, Lafayette Partners in Education",
        website: links.lpie,
        domain: "lpie.org",
        logo: "/images/lpie-logo.png",
        width: 1500,
        height: 452,
        note: "Financial support",
      },
    ],
  },
  {
    id: "inkind",
    label: "In-kind sponsor",
    sponsors: [
      {
        id: "anderson",
        name: "Anderson Power",
        website: links.anderson,
        domain: "andersonpower.com",
        logo: "/images/anderson-power.png",
        width: 4500,
        height: 2362,
        note: "Electrical connector components",
      },
    ],
  },
  {
    id: "partners",
    label: "Community partners",
    sponsors: [
      {
        id: "almond",
        name: "Almond",
        website: links.almond,
        domain: "almond.bot",
        logo: "/images/almond.svg",
        width: 512,
        height: 512,
        wordmark: "Almond",
      },
      {
        id: "lightberry",
        name: "Lightberry",
        website: links.lightberry,
        domain: "lightberry.com",
        logo: "/images/lightberry-wordmark.svg",
        width: 475,
        height: 95,
      },
    ],
  },
];
