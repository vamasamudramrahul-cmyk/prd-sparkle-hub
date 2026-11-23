# BikerGram Prototype — Upgrade V2.0 (Static Frontend)

**Status:** Upgraded prototype / implementation preview  
**Geographic scope:** Andhra Pradesh and Telangana only  
**Design source:** `DESIGN.md` (user-supplied measured design specification)

## What changed
- Preserved the existing visual prototype pages and image/font assets.
- Added a shared responsive navigation and footer aligned to the approved BikerGram navigation.
- Applied the supplied monochrome Message AI design tokens: black/charcoal surfaces, white text, Host Grotesk, DM Sans, 4px spacing rhythm, 1128px content container, large rounded surfaces, hairline borders, no decorative shadows, and restrained lime hover state.
- Added the missing public-facing screen pages for Rider Stories, story detail/submission, business details and listing requests, global search, account access, profile, account settings, notifications, contact/support and legal pages.
- Rebuilt Rider Assistance as an information directory, not a mutual-aid request/response or emergency-dispatch system.
- Added homepage sections for Discover → Connect → Explore Together, six community benefits, Rider Stories and business listing CTA.
- Added cookie preference preview and responsive mobile navigation.
- Extended the centralized fixture data with synthetic rider-story and policy examples.
- Added a shared frontend script for demo forms, search, story and business detail rendering, district category selection and cookie choices.

## Screens included
Existing prototype pages:
- `index.html`
- `explore.html`
- `states.html`
- `districts.html`
- `destinations.html`
- `destination-details.html`
- `clubs.html`
- `club-profile.html`
- `circuits.html`
- `circuit-details.html`
- `events.html`
- `event-details.html`
- `businesses.html`
- `rider-assistance.html`
- `about.html`

Added pages:
- `district-directory.html` (SCR-003)
- `rider-stories.html` (SCR-014)
- `trip-story.html` (SCR-015)
- `submit-trip-story.html` (SCR-016)
- `business-details.html` (SCR-018)
- `search.html` (SCR-019)
- `sign-in.html`, `sign-up.html`, `forgot-password.html`, `verify-email.html` (SCR-020 account access preview)
- `profile.html` (SCR-021)
- `contact.html` (SCR-025)
- `account-settings.html` (SCR-026)
- `notifications.html` (SCR-027)
- `privacy-policy.html`, `terms.html`, `cookie-policy.html` (SCR-034)
- `business-listing-request.html` (SCR-039)
- `report-issue.html`, `send-feedback.html` (approved public support entry points)
- `account-deletion.html` (ESS-008 / account deletion flow)

Admin Panel screens are not included. India-wide expansion is not included.

## Fixture data rules
`assets/fixture-data.json` is the human-readable dataset. `assets/bikergram-data.js` exposes the same dataset as `window.BIKERGRAM_FIXTURE` for local frontend use.
- All clubs, businesses, events, rider stories and contacts are synthetic UI fixtures.
- Only AP and Telangana are included as supported states.
- The district list is a sample subset, not the complete verified district master.
- Coordinates, route geometry, distance and road conditions are not invented.
- Public contact details and social handles are not fabricated.
- Only approved rider stories should be rendered in the public directory.

## Important limitations
This is a static frontend prototype. It does **not** include a backend, database, authentication provider, email delivery, persistent submission handling, admin moderation, notification delivery, file upload storage, or production cookie-consent management.
- Forms validate in the browser and show a demo message; they do not transmit or save submissions.
- Google OAuth and email/password authentication require backend/provider configuration.
- The language selector is present, but complete Telugu translation is still pending.
- Legal policy pages are placeholders and require legal review before publication.
- The live search page updates results while typing; detailed matching/ranking behaviour remains a product decision to refine.
- Full WCAG 2.2 AA and responsive browser testing has not been completed.
- Verify license/permission for every reused template asset before public deployment. The supplied design reference does not itself grant rights to the original template assets.

## Run locally
For best results, serve this folder with a local static HTTP server rather than opening pages directly with `file://`. For example:
`python -m http.server 8000`
Then open `http://localhost:8000`.

## Main files
- `DESIGN.md` — supplied design system
- `assets/bikergram-v2.css` — upgrade styles
- `assets/bikergram-v2.js` — upgrade interactions
- `assets/fixture-data.json` — fixture data
- `assets/bikergram-data.js` — browser-accessible fixture data
- `UPGRADE_CHANGELOG.md` — upgrade summary
- `PROTOTYPE_GAP_REGISTER.csv` — screen-level status
