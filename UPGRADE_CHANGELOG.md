# Upgrade Changelog — BikerGram V2.0

## Visual system
- Applied user-supplied `DESIGN.md`.
- Monochrome surfaces and typography; removed use of lime as a dominant accent.
- Preserved lime only as a subtle hover treatment.
- Replaced legacy navigation/footer with shared responsive components.

## Product scope
- Kept current launch scope to Andhra Pradesh and Telangana.
- Added explicit AP/TG scope copy to About.
- Added notice that district fixtures are a subset pending full verification.
- Replaced Rider Assistance mutual-aid request model with the approved information-directory model.
- Removed unverified Instagram link and redirected to Contact.

## New public pages
Added district category directory, rider stories, story detail/submission, business details/listing request, global search, account access, verification notice, profile, account settings, deletion, notifications, contact, report issue, feedback and three legal pages.

## Functionality
- Added local frontend filtering/search.
- Added sample story and business details rendering from the shared dataset.
- Added district-to-category selection.
- Added demo form validation and explicit no-backend notices.
- Added cookie preference preview.
- Added reduced-motion CSS support.

## Known incomplete items
- Backend and database integration.
- Authentication, OAuth, email verification and password reset delivery.
- Actual form persistence, uploads and admin moderation.
- Complete district master data.
- Verified real directory data, map coordinates and route geometry.
- Full Telugu translation.
- Final legal policy text and consent implementation.
- WCAG 2.2 AA, cross-browser and device testing.
- Search matching/ranking refinements.
- Confirm licenses/permissions for retained template assets.

- Standardized internal state IDs to `AP` and `TG` to match the approved two-state scope.
- Removed the legacy mutual-aid request fixture group and replaced it with an empty verified-resource directory structure.
- Added district filters to Global Search and Rider Stories, story destination/date filters, notification grouping/actions, and cookie preference customization preview.

## V2.1 — Bug audit and fixes (23 November 2026)

- Fixed district deep-link initialization and category rendering.
- Added and wired the Global Search district selector; restored state, district and category from query parameters.
- Preserved district/category context when browsing from district category cards.
- Connected Rider Assistance state/district filters to filtered community and business search links.
- Removed an unsupported city filter control with no city-level fixture data.
- Removed duplicate main-content IDs and associated visible form labels with their controls.
- Added a preview-only persistence notice to Account Settings.
- Added a full static QA report. Browser interaction testing remains blocked by the local execution environment.
