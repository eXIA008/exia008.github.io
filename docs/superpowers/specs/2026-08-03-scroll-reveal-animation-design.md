# Scroll-Reveal Animation Design

**Date**: 2026-08-03
**Status**: Approved

## Goal

Replace the current load-time `animate-fade-in` animations (which fire on page load regardless of scroll position) with scroll-triggered reveal animations: elements appear only when the user scrolls them into view.

## Approach

Use **Framer Motion** (motion), as chosen by the user. Its declarative `whileInView` + `viewport={{ once: true }}` API wraps IntersectionObserver and needs no custom scroll logic.

## Components

### 1. New helper: `src/components/Reveal.jsx`

A single reusable wrapper that handles the fade+slide-in:

```jsx
import { motion } from "framer-motion"

export const Reveal = ({ children, delay = 0, className = "", ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut", delay }}
    {...rest}
  >
    {children}
  </motion.div>
)
```

- Reveal style matches the existing one: `opacity 0 → 1`, `translateY(20px) → 0`.
- `delay` preserves the existing staggered `[animation-delay:...]` feel.
- `amount: 0.2` triggers when ~20% of the element is visible.

### 2. Replace `animate-fade-in` usages in 6 components

- **HeroSection** — badge, headline lines, paragraph, CTA, orbit container
- **TechSection** — heading, paragraph, tech grid, skills column
- **ProjectSection** — heading, paragraph, each project card (staggered delay)
- **ProjectsCard** — heading, each card (staggered delay)
- **AboutSection** — heading, left text column, right card column
- **ContactSection** — heading, contact info column, form column
- **NotFoundSection** — heading, paragraph, back button

### 3. Hero behavior

Hero is above the fold. `whileInView` on a hero element fires immediately on load anyway (it's already in view), so hero sections may keep their existing load-time animation or use `amount: 0.1`. Decision deferred to implementation — the visible result is the same.

### 4. Staggered cards

For card grids, prefer Framer Motion `variants` + `staggerChildren` (idiomatic, no manual delay math). Fall back to per-card `delay` prop if it complicates markup.

## Installation

Add `framer-motion` to dependencies.

## Files touched

- `src/components/Reveal.jsx` (new)
- `src/components/HeroSection.jsx`
- `src/components/TechSection.jsx`
- `src/components/ProjectSection.jsx`
- `src/components/ProjectsCard.jsx`
- `src/components/AboutSection.jsx`
- `src/components/ContactSection.jsx`
- `src/components/NotFoundSection.jsx`
- `package.json`

## Out of scope

- No new animation styles (blur, scale) — keep the existing fade+slide.
- No nav/scrollbar-linked effects.
- `animate-fade-in` and related keyframes stay in `index.css` (still used by any remaining load-time elements).
