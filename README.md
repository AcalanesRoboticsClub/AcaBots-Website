# AcaBots Website

Public website for AcaBots, Acalanes High School’s FIRST Tech Challenge Team 24689 in Lafayette, California. This repository contains the standalone React/Vite site and the design and content notes used to build it.

## Local preview

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4173 --strictPort
```

Open `http://127.0.0.1:4173/`.

## Build and checks

```sh
npm run build
npm run test:sites
```

The public static site is written to `dist/client`. The packaging script also prepares the Sites handoff files in `dist/`.

For a Vercel import, use this repository’s root directory, `npm ci` as the install command, `npm run build` as the build command, and `dist/client` as the output directory.

## Content and assets

- Edit leadership, planned competition dates, meeting information, sponsor recognition, and contact links in `src/content.js`.
- Edit page copy in `src/App.jsx` and visual styles in `src/styles.css`.
- Sponsor logos link to their organizations’ websites. Their sources are recorded in `design/content-sources.md`.
- Photo crops and derivatives are documented in `design/photo-sources.json`. The demonstration robots are not described as the team’s competition robot.
- Dates are plans and may change. Unconfirmed room and weekend details are intentionally omitted.
- Sponsorship is presented with LPIE as lead sponsor, Anderson Power as in-kind sponsor, and Almond and Lightberry as equal community partners. The site makes no donation or benefit promises.

The site uses direct email links and has no contact form or backend. Keep private correspondence, operational records, and credentials out of this public repository.
