# AcaBots implementation review

final result: passed

Reviewed October 19, 2026, America/Los_Angeles. No actionable P0, P1, or P2 findings remain.

October 20 correction: the later screenshot shows a separate missing-logo bug, beyond the scroll-position issue discussed below. The old `.sponsor-link` class matches EasyList's generic cosmetic rule. Applying `.sponsor-link { display: none !important; }` reproduced all four missing logo/domain links; the renamed `.organization-link` elements remain visible under that same rule. The latest layout also consolidates three photos into the team gallery and removes all photos from Sponsorship. Earlier placement notes describe superseded layouts.

## Sponsor visibility and selected group photo, October 20, 2026

- Reproduced the reported missing-sponsor view: the live tab had `#sponsorship` in its address but was showing the season calendar after the earlier viewport reset. The live sponsor markup and all four logos were intact. Selecting Sponsorship again reached the correct section. Restore viewport settings before the final navigation during handoff.
- Moved sponsor tiers before the inquiry in mobile/tablet reading order. On desktop, the inquiry remains in the left column and all three sponsor tiers remain in the right column. Original logos, hierarchy and official company links are preserved.
- Added Dillon's explicitly selected group photograph beside two demonstration robots, using only a rectangular crop, resizing and WebP compression. It appears below the inquiry, alongside the logos on desktop and after them on smaller screens. Its two responsive assets and exact provenance are recorded in `design/photo-sources.json`.
- Browser checks passed at 320, 390, 768 and 1374px. Document scroll width matched client width at each size. All four sponsor images and the new photo loaded; all four company destinations matched the existing verified URLs. On smaller screens, sponsor tiers ended before the inquiry began. Mobile Menu -> Sponsorship reached the section and closed the menu. Console warning/error logs were empty.
- `npm run build`, all four `npm run test:sites` tests, `node --check src/content.js` and `git diff --check` passed. No new dependencies, hooks, effects or backend changes were introduced. Source changes are confined to the public website.
- Additional desktop and mobile comparison captures from this review are kept outside this repository. The committed examples are under `design/qa/`.

## Team photograph revision

The flow under test is: navigate to Team -> see the classroom photos and captions -> continue to Sponsorship -> see the community and demo photos -> narrow the viewport and confirm the photos stack without losing content.

- Added four original supplied photos below the team and sponsor content, using the existing square edges, spacing, typography and blue/white palette. The club-day hero and all existing copy, event dates, leadership and sponsor tiers remain. The original reference predates these explicitly requested photo placements.
- Reviewed the source contact sheet and processed derivatives. Processing used only two ordinary rectangular crops, resizing and WebP compression, with no generated pixels, content reconstruction, object removal or face edits. All source hashes and crop coordinates are recorded in `design/photo-sources.json`.
- Desktop figures preserve the intended photo aspect ratios. Team photos are equal columns; the community group and portrait demo use a 2:1 column split with aligned image heights. At mobile widths, both pairs become a single column. All faces and the photographic context remain visible in the selected crops.
- Browser checks passed at 320, 390, 768 and 1374px. Document width matched the available width; no photo/caption overflow was found. All four images loaded, with actual responsive source selection. The 390px Menu -> Team path reached the section and closed the menu. No framework overlay or console warnings/errors appeared.
- Source files include two responsive sizes per photo, lazy loading, asynchronous decoding and declared dimensions. No dependency or backend changes were needed. React review found no new hooks or state and no interactive controls added to the figures.
- The local build and all four existing Sites tests passed. `node --check src/content.js` and `git diff --check` passed. Desktop, community, and mobile photo captures were reviewed; committed responsive examples are under `design/qa/`.
- Temporary viewport and reduced-motion settings were restored after testing. Cross-browser checks beyond the in-app browser remain unperformed.

## Published draft verification

On October 19, Dillon requested creation and deployment of the Vercel project **roboticsdraft**. At the time of this review, https://roboticsdraft.vercel.app/ served the public draft, and its build completed successfully. That deployment used the earlier combined repository layout. Verify the current project and deployment before relying on the address.

- Anonymous HTTPS requests returned 200 for the homepage, current JavaScript/CSS bundles, original team wordmark, and all four sponsor logos. Each downloaded logo hash matches its source file, and the served bundle contains the three current sponsor tier labels.
- The live in-app browser displayed the correct headline and team number. Sponsorship navigation reached the correct section, and all sponsor images finished loading. No console warnings or errors appeared during this check.
- The original Vercel project settings built the `website` subdirectory with `npm ci` and `npm run build`, serving `dist/client`. For this standalone repository, use its root as described in `AGENTS.md`. Build logs contained non-blocking npm configuration/install-script warnings; the application build completed successfully.
- Prior notes below saying hosting was outside the draft describe the earlier implementation stage and are superseded by this deployment record.

## Latest sponsorship revision

The flow under test is: home -> Sponsorship navigation -> three tiers with loaded logos and working company links. This follow-up intentionally replaces the top supporter band in `design/reference.png`, following Dillon's newer direct instruction. The original comparison record below describes the first implementation.

- Removed the top “With support from” band and its unused styles. Home now flows from planned meets directly into the team section. Both navigation and the hero link use `#sponsorship`; there is no old `#support` target or broken same-page link.
- The lower section uses the original logos in three ordered groups: LPIE (Lead sponsor, largest), Anderson Power (In-kind sponsor), Almond and Lightberry (Community partners, equal placement). Fine rules and size communicate hierarchy. No numeric badges, donation prices, or benefit promises were added. Sponsor identities and logo sources are recorded in `design/content-sources.md`.
- In-app browser identity and meaningful page content passed. No framework overlay or warning/error console entries appeared. All four sponsor images loaded, their alt/link labels identify the organization, and all four outbound destinations match the verified official sites. Clicking Lightberry opened its real site in a new tab; the test tab was then closed.
- Desktop Sponsorship navigation worked. At 390px, Menu -> Sponsorship reached the section and closed the menu. Escape behavior was rechecked. Sponsor email retains its mailto destination and subject; no message was sent.
- Layout checks passed at 320, 390, 768, 1024, and 1374px. There was no document or sponsor-content horizontal overflow, and the heading stayed below the sticky header. The two community logos share the third group and stack at the narrowest breakpoint. Temporary viewport and reduced-motion overrides were reset after testing.
- Reviewed desktop and mobile Sponsorship captures. The committed responsive examples and measurements are under `design/qa/`.
- `npm run build` passed; all four `npm run test:sites` tests passed; `node --check src/content.js` and `git diff --check` passed. React review found stable data keys, no new effects or runtime dependencies, lazy logo images with declared dimensions, semantic headings/lists, and accessible external-link labels. The public site remains self-contained.
- At the sponsorship revision stage, public hosting was outside the draft; the deployment record above supersedes that status. Cross-browser testing beyond the in-app browser was not performed for this revision.

## Comparison target and evidence

- Source visual truth: `design/reference.png`, the revised first concept incorporating Dillon's headline and logo correction. Source pixels: 1374 × 1145, no browser chrome.
- Implementation: `http://127.0.0.1:4173/`, browser-rendered in the Codex in-app browser.
- Desktop state: home, menu closed, all fonts and images loaded, 1374 × 1145 CSS viewport, devicePixelRatio 1. The browser reserves 15px for its vertical scrollbar. The source is an unframed mockup without that scrollbar.
- Implementation evidence: `design/qa/desktop-final.png`, exactly 1374 × 1145 pixels. CDP capture was used through the in-app browser to preserve the requested full viewport. An initial native capture clipped the viewport and was replaced before comparison.
- Full-view comparison: `design/qa/comparison-final.png`, source on the left and implementation on the right at the same pixel dimensions. Opened and inspected as one combined image.
- Focused typography/action comparison: `design/qa/hero-type-comparison.png`, equal 520 × 600 crops from each source. Opened and inspected as one combined image.
- Additional evidence: `desktop-full-page.png` and `below-fold.png` for leadership, calendar, sponsorship and contact. `mobile-390.png`, `mobile-menu.png`, and `responsive-320.png`, `responsive-768.png`, `responsive-1024.png` for breakpoint checks. All are under `design/qa/`.

## Required fidelity surfaces

### Fonts and typography

The implementation uses self-hosted Inter Variable, with a strong three-line headline and lighter supporting copy. The generated mock does not provide a reliable font identity. Inter reproduces its broad sans-serif character and paragraph wrapping more closely than the initial Source Sans 3 implementation. Fluid heading sizing keeps the longer approved copy inside the blue column. The exact headline, supporting sentence, button label, and removal of the repeated hero eyebrow match the requested correction. Body text remains readable on mobile.

### Spacing and layout rhythm

The desktop keeps the 110px white header, approximately 42.5% / 57.5% hero split, 696px hero at the comparison width, 150px meet strip, and 189px supporter band. Alignment, square buttons, fine dividers and generous whitespace follow the selected design. The page stacks on narrower screens and uses a collapsible mobile menu. The added lower sections provide real destinations for the mock's navigation using the same flat, restrained visual system.

### Colors and tokens

The solid hero token is `#01469d`, sampled from the reference's blue area. White surfaces, navy text, muted blue-gray secondary text and LPIE cyan preserve the source palette. Native browser captures show minor display-color variation, so DOM token values were also checked. The implementation intentionally uses a solid fill. There are no gradients, decorative patterns or glass panels. Focus indicators use a distinct gold outline, and reduced motion disables smooth scrolling and transitions.

### Images, logos and icons

The header uses the original segmented AcaBots A and complete wordmark from the provided deck. It does not use the school block A or a generated approximation. The original logo's proportions take priority over the mock's distorted lockup. The hero uses the original supplied photo, compressed into responsive WebP assets, with a tighter desktop crop centered on the students and robot. The source image's real people, objects and perspective take priority over differences introduced by image generation. LPIE uses the original linked symbol, with rounded clipping to remove its white square corners on the tinted band. Anderson Power appears as plain text. Arrow and menu icons are from Phosphor, with no handcrafted substitutes.

### Copy and content

The hero says “Acalanes High School’s robotics team.” and “Competing in FIRST Tech Challenge as Team 24689, based in Lafayette, California.” It has no extra AcaBots/FTC eyebrow and no rejected slogan. LPIE is first and most prominent. Calendar dates are explicitly planned. Uncertain room/weekend details, sponsorship prices/benefits, unconfirmed partner names, and private robot capabilities are absent. Mason Lansphere replaces Dillon in the social-media role. Content sources and review notes are in `design/content-sources.md`.

## Comparison and fix history

1. **P2, photo framing and typography.** `desktop-initial.png` and `comparison-initial.png` showed excessive ceiling/floor around a small booth, a narrower font, and the hero copy sitting too high. Fixed with the original photo at 1.35 desktop scale, a 70% / 50% focal origin, Inter, and adjusted vertical padding. Post-fix evidence: `desktop-final.png` and `comparison-final.png`.
2. **P2, headline overflow after font change.** The intermediate `desktop-revised.png` and browser measurements showed the heading extending to x=598.6 while its column ended at x=577.6. Fixed with a smaller fluid size, deliberate line spacing, and `min-width: 0`. The post-fix heading ended at x=550 within the same column. The final focused comparison also verifies the requested wording and clear CTA spacing.
3. **P2, smallest viewport overflow.** At a 320px browser viewport the 15px scrollbar left a 305px content area, while the inherited 320px body minimum forced a 320px document. Fixed the body minimum, capped button widths, kept icon widths stable, and used a compact small-screen sponsor treatment. Post-fix browser measurements: client width 305px, document scroll width 305px, no overflowing text/control rectangles. Evidence: `responsive-320.png` and `responsive-results.json`.

## Interaction and responsive verification

- Desktop Team, Season, Support and Contact navigation reaches the expected section and shows its heading. Hero “Meet the team” and both planned-meet links have real section targets. No broken same-page anchors.
- Mobile menu opens and closes, closes after choosing Contact, and closes with Escape while returning focus to the menu button. Open-state evidence: `mobile-menu.png`.
- Keyboard Shift+Tab from the home logo reaches the skip link. Its focused transform is visible rather than off-screen. Focus outlines and semantic navigation/heading structure are present.
- At 320, 390, 768, 1024, 1374 and 1920px viewport widths, the layout remains usable. Narrow-screen overflow was fixed and rechecked. Recorded DOM measurements and representative captures are included in `design/qa/`.
- All three visible source images loaded successfully. Contact, joining and sponsor mailto destinations were verified, including their subjects. No email was sent or external mail application opened. There is no form.
- Reduced-motion emulation was used for deterministic navigation checks. It and the temporary viewport override are reset before handoff.
- In-app browser warning/error logs were empty after the final navigation and responsive checks.

## Project checks

- `npm run build`: passed, with static files under `dist/client` and the supplied Sites packaging outputs.
- `npm run test:sites`: 4 tests passed, including static-file serving, app-route fallback, missing API/write handling, and packaging output.
- `node --check src/content.js`: passed.
- In the earlier combined repository, the repository-root `npm run check` passed.
- `git diff --check`: passed.

## Open questions and follow-up polish

No implementation blocker remains. Before public publication, the team should verify leadership spellings, planned meet dates/venues, and meeting room/weekend details. Exact photo composition and logo proportions differ from the generated mock because the site correctly uses the originals. More current robot/team photographs can replace the club-day image in a later content pass.

## Implementation checklist

- [x] Selected design and requested copy/logo corrections implemented.
- [x] Core links, navigation, mobile menu and contact paths verified.
- [x] Source and implementation compared together, including focused typography evidence.
- [x] P0/P1/P2 findings fixed and recaptured.
- [x] Desktop, tablet, mobile and narrow-screen behavior checked.
- [x] Build and existing checks completed.
- [x] Preview ready for review. Public deployment is a separate follow-up.
