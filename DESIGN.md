---
version: alpha
name: KrishiGears
version: "1.0"
description: Premium B2B agricultural machinery brand — dark editorial, lime-500 primary, equipment-focused.
colors:
  primary: "#132020"
  primary-text: "#F4F4F0"
  secondary: "#9CA3AF"
  accent: "#A3E635"
  surface: "#0F1010"
  surface-darker: "#191919"
  border: "#27272A"
  lime-primary: "#A3E635"
typography:
  heading:
    fontFamily: "'Outfit', sans-serif"
    fontWeight: 900
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Manrope', sans-serif"
    fontWeight: 400
rounded:
  sm: 4px
  md: 8px
  lg: 12px
spacing:
  section: "6rem"
  gap: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#0F1010"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#B8F035"
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.md}"
---

## Overview
KrishiGears — B2B agricultural machinery, dealer network, bulk supply, institutional procurement. Dark editorial with lime-500 accent for high-contrast, premium brand feel.

## Colors
- **Accent (#A3E635):** Lime — only high-emphasis interaction color (buttons, badges, links).
- **Surface (#0F1010 / #191919):** Deep black backgrounds for editorial depth.
- **Text (#F4F4F0):** Near-white for body/headings; #9CA3AF for secondary.

## Typography
- **Headings:** Outfit 900, tight tracking (-0.02em), no decorative slant.
- **Body:** Manrope 400–600, large line-height (1.65) for readability on dark backgrounds.

## Layout & Components
- Cards use dark surface with soft borders; hover lifts (-translate-y-1.5) with lime glow shadow.
- Section spacing is generous (6rem) to allow imagery and spec tables to breathe.
- Responsive: 12-column grid on desktop, 2-column on tablet, stacked on mobile.

## Elevation & Depth
- Shadows are lime-tinted (`rgba(163,230,53,0.25)`) rather than neutral gray — reinforces brand identity.
- Subtle float animation (`float-slow`) on key imagery for gentle life without distraction.

## Components
- `lime-btn`: Standard primary CTA with hover lift, shadow increase, and active press.
- `kg-card`: Dark card with border transition to lime on interaction.

## Do's / Don'ts
- Do use lime ONLY for primary actions; don't use for decorative borders (reserve for hover states).
- Don't add gradients to dark surfaces — flat dark with subtle shadow is premium.
