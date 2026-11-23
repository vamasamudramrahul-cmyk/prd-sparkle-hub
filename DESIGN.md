---
version: alpha
name: Message AI
description: "Dark monochrome interface measured from heymessage.framer.ai: Host Grotesk type with DM Sans, tonal surfaces and 48px corners."
colors:
  background: "#000000"
  surface: "#000000"
  on-surface: "#FFFFFF"
  on-background: "#FFFFFF"
  on-surface-variant: "#DEDEDE"
  on-surface-muted: "#858585"
  surface-container-low: "#0A0A0A"
  surface-container: "#121212"
  outline: "#FFFFFF33"
  primary: "#FFFFFF"
  on-primary: "#0F0F0F"
typography:
  headline-display:
    fontFamily: Host Grotesk
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Host Grotesk
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Host Grotesk
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.02em
  body-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.3
  body-lg:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.2
  label-lg:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.2
  label-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.3
  label-sm:
    fontFamily: sans-serif
    fontSize: 12px
    fontWeight: 400
  headline-display-mobile:
    fontFamily: Host Grotesk
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Host Grotesk
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.03em
rounded:
  sm: 4px
  md: 40px
  lg: 48px
spacing:
  base: 4px
  xs: 2px
  sm: 8px
  md: 12px
  lg: 24px
  xl: 40px
  gutter: 8px
  section: 96px
  margin: 16px
  container: 1128px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.lg}"
    padding: 12px
    height: 36px
  button-primary-hover:
    backgroundColor: "#E8FF9C"
  link:
    textColor: "{colors.on-surface-variant}"
---

# Message AI Design System

## Overview

Message AI describes itself as: “A sleek Framer template for AI startups, LLM tools, and generative assistants. Built to convert with bold design, flexible sections, and instant setup.” The interface is dark, built on **Near Black (#000000)** with **White (#FFFFFF)** text and almost no color: actions are carried by contrast, not hue.

Type is set in **Host Grotesk** and **DM Sans**. Headlines run large with tight negative tracking; body text is 14px. Depth comes from hairline borders and inset highlights rather than drop shadows. Corners are mostly 48px.

Measured from [heymessage.framer.ai](https://heymessage.framer.ai/) on November 23, 2026 at 1440×900 and 390×844 from 252 rendered elements. Values are computed styles from the live page, not the original source files.

## Colors

The palette has 9 roles.

- **Near Black (#000000):** Page background. Token `background`.
- **White (#FFFFFF):** Primary text and headings, seen 87 times. Token `on-surface`.
- **Silver (#DEDEDE):** Secondary text, seen 12 times. Token `on-surface-variant`.
- **Gray (#858585):** Muted text and metadata, seen 3 times. Token `on-surface-muted`.
- **Near Black (#0A0A0A):** Raised areas one step from the page, seen 1 time. Token `surface-container-low`.
- **Charcoal (#121212):** Cards and panels, seen 1 time. Token `surface-container`.
- **White 20% (#FFFFFF33):** Borders and dividers, seen 4 times. Token `outline`.
- **White (#FFFFFF):** Primary buttons and calls to action, seen 106 times. Token `primary`.
- **Charcoal (#0F0F0F):** Text and icons on primary. Token `on-primary`.

## Typography

**Host Grotesk**, **DM Sans** and **sans-serif** share the interface. Fallback stack: `Host Grotesk, Host Grotesk Placeholder, sans-serif`.

- **headline-display:** Host Grotesk 56px at weight 400, line height 1, tracking -0.03em (40px on mobile). Page title (h1).
- **headline-lg:** Host Grotesk 36px at weight 400, line height 1.1, tracking -0.03em (32px on mobile). Section headings (h2).
- **headline-md:** Host Grotesk 20px at weight 400, line height 1.2, tracking -0.02em. Sub-section headings.
- **body-md:** DM Sans 14px at weight 400, line height 1.3. Body text.
- **body-lg:** DM Sans 16px at weight 400, line height 1.2. Lead paragraphs.
- **label-lg:** DM Sans 16px at weight 500, line height 1.2. Large buttons and tabs.
- **label-md:** DM Sans 14px at weight 500, line height 1.3. Buttons, navigation and labels.
- **label-sm:** sans-serif 12px at weight 400. Small labels and badges.

## Layout

Spacing follows a 4px grid: 97% of measured gaps and paddings are multiples of 4px.

- **Scale:** xs 2px, sm 8px, md 12px, lg 24px, xl 40px.
- **Sections:** 96px vertical padding between major sections.
- **Gaps:** 8px is the most common gap in flex and grid layouts.
- **Container:** content is capped at 1128px.
- **Page margin:** 16px on each side of full-width sections.
- **Breakpoints:** 809px, 809.98px, 810px, 1199px, 1199.98px.

## Elevation & Depth

The design avoids drop shadows. Layers are separated by tonal surface steps (#0A0A0A → #121212) and hairline rings:

- `rgba(255, 255, 255, 0.2) 0px 0px 0px 0px`

## Shapes

Most elements use 48px corners. Measured radii, most used first:

- **lg (48px):** 28 elements.
- **sm (4px):** 12 elements.
- **md (40px):** 8 elements.

## Components

Measured from the rendered page. Token values reference the tokens above.

- **button-primary (“Begin Journey”):** #FFFFFF fill, #0F0F0F text, 12px/400, 48px radius, padding 12px, shadow `rgba(255, 255, 255, 0.2) 0px 0px 0px 0px`.
- **button-primary-hover:** background #E8FF9C, text #0F0F0F on hover.
- **link:** transparent fill, #DEDEDE text, padding 0px.

## Do's and Don'ts

- Do use #000000 for the page and lift surfaces in small steps: #0A0A0A, #121212.
- Do keep text in 3 levels: #FFFFFF, #DEDEDE, #858585.
- Do let contrast carry emphasis; primary actions use #FFFFFF on #000000.
- Do set headlines in Host Grotesk with tight tracking (-0.03em).
- Do keep spacing on the 4px grid.
- Do use 48px corners on most elements; larger surfaces also use 4px and 40px.
- Don't add drop shadows for depth; use hairline rings and tonal surfaces.
- Don't introduce new font families beyond Host Grotesk, DM Sans and sans-serif.
- Don't add saturated accent colors; the measured palette is almost entirely neutral.
- Don't make interface transitions slower than 0.4s.

## Motion

Interface transitions are quick: 0.4s.

- **Easing:** `cubic-bezier(0.44, 0, 0.56, 1)`.

Generated by [Sitepeel](https://sitepeel.dev/design-md/heymessage.framer.ai/), the free DESIGN.md generator (engine 2026.10.29+f0c146f7cdfd).
