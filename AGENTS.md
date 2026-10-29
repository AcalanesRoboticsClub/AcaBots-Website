# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## AcaBots decisions, October 19, 2026

- Dillon selected the first concept, with the blue split hero, authentic club-day photo, planned-meet strip, and LPIE-first sponsor treatment. The visual starting point is `design/reference.png`; the later sponsorship revision below overrides its top sponsor band.
- Use the original segmented team mark and wordmark in `public/images/acabots-wordmark.png`, never the school block A. Original source assets take priority over image-generation approximations.
- Headline: “Acalanes High School’s robotics team.” Supporting sentence: “Competing in FIRST Tech Challenge as Team 24689, based in Lafayette, California.” Do not restore the rejected “Robotics, built at Acalanes” slogan, “We’re” opening, or repeated AcaBots/FTC eyebrow above the headline.
- Keep content factual. No invented mission, stats, robot capabilities, fundraising prices/benefits, or unconfirmed partner names. Use email links, no contact form.
- This is a standalone public website. Keep private correspondence, operational records, credentials, email automation, and backend integrations out of this repository.
- Edit dates, leadership, meetings, and contact links in `src/content.js`. Competition dates are planned. Meeting room and weekend times need direct confirmation.

## Sponsorship revision, October 19, 2026

- Keep the current site as one page, with section navigation. Rename Support to Sponsorship everywhere in navigation and section targets.
- Remove the prominent “With support from” strip below planned meets. Sponsor recognition belongs in the lower Sponsorship section.
- Dillon explicitly set three recognition tiers: LPIE first, Anderson Power second, and Almond plus Lightberry together third. Use restrained labels (Lead sponsor, In-kind sponsor, Community partners), decreasing logo size, whitespace, and fine rules. Avoid numbers, metallic badges, or invented donation thresholds.
- Display the original logos, with each logo linking to its organization's official website. Almond and Lightberry identities were verified against relevant team correspondence and their own sites. Keep both community partners equal in prominence.
- Sponsor data and links live in `src/content.js`. Logo provenance is recorded in `design/content-sources.md`.

## Published draft, October 19, 2026

- A public preview was previously deployed at `roboticsdraft.vercel.app`. Verify the current project and deployment before treating that address as current.
- This repository now contains the website at its root. When connecting or updating Vercel, use this public repository, run `npm ci` and `npm run build`, and serve `dist/client`.
- Confirm the target project and commit before releasing updates.

## Team photography, October 19, 2026

- Dillon supplied nine photographs and asked to use the strongest throughout the site. Preserve people, robots, objects and scenes as photographed. Only conventional crops, resizing/compression, and restrained photographic corrections are authorized. Do not use generative edits, content-aware fill, object removal, face editing, background replacement, or invented details.
- The current selection adds four photos: workshop and programming beside the team content, plus the community group and VR demo near the sponsors/partners. The approved club-day hero remains. Use modest captions and responsive images, with no extra gallery controls.
- The external demonstration robots must not be described as AcaBots' FTC robot or as its competition capabilities. Do not invent visit dates or identify people from their faces.
- `design/photo-sources.json` records original attachment filenames/hashes, exact crop coordinates and derivative dimensions. Original photos are kept outside this public repository. The published images use rectangular crops, downsizing and WebP compression; no color or exposure adjustments were applied.

## Sponsor visibility and group photo, October 20, 2026

- Preserve all four linked sponsor logos and the established three tiers. On phones and tablets, show the tiers before the sponsorship inquiry and its photo so sponsor recognition appears sooner.
- The approved group photo beside two demonstration robots appears with the team gallery, beside the tiers on desktop and after them on smaller screens. It uses only a rectangular crop, resizing and WebP compression. Its provenance is in `design/photo-sources.json`.
- After responsive testing, restore the browser viewport before selecting the final section. Verify that the visible section agrees with the URL fragment; resizing after navigation can leave an unrelated scroll position in the preview.

## Photo layout and filtered logos, October 20, 2026

- Dillon rejected the scattered lower photos. This supersedes the earlier placement: keep only the workshop, programming and selected two-robot group photo together in one aligned team gallery, with matching 3:2 frames. Stack that gallery on phones. Keep Sponsorship focused on the existing linked logos and inquiry, with no photographs there.
- The former `sponsor-link` class exactly matches EasyList's generic cosmetic filter and hides the entire logo/name/website link. The reported screenshot was reproduced using that rule; the earlier scroll-position explanation did not account for this separate bug. Use the descriptive `organization-*` and `recognition-*` classes for the acknowledgements, and verify all four links remain visible under the same filter. Keep the public Sponsorship label, anchor and recognition order.
