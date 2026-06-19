# Plan: Fix Light Mode — Proper Light/Dark Theme

## Context

The `:root` (light mode) CSS variables were set to dark colors (`oklch(0.18 0 0)` background, `oklch(0.90 0 0)` foreground), making light mode look identical to dark mode. The user wants a real light mode with light backgrounds and dark text across the entire site, including the hero section.

There are also 2 hardcoded white `WebkitTextStroke` values that would be invisible on light backgrounds, and the navbar always uses `WhiteLogo` which won't show on light backgrounds.

---

## Files to Modify

1. `app/globals.css` — proper light mode CSS variables
2. `components/hero.tsx` — fix hardcoded white WebkitTextStroke
3. `components/sections/about-section.tsx` — fix hardcoded white WebkitTextStroke
4. `components/navbar.tsx` — restore logo swap for light/dark

---

## Step 1: Update `:root` CSS Variables (`app/globals.css`)

Replace the current dark `:root` values with proper light mode colors:

```css
:root {
  --radius: 0.625rem;
  --background: oklch(0.98 0.005 85);      /* warm off-white */
  --foreground: oklch(0.15 0 0);           /* near-black text */
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.15 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.15 0 0);
  --primary: oklch(0.20 0 0);
  --primary-foreground: oklch(0.98 0 0);
  --secondary: oklch(0.55 0.11 75);        /* warm gold accent */
  --secondary-foreground: oklch(0.20 0 0);
  --muted: oklch(0.96 0 0);
  --muted-foreground: oklch(0.45 0 0);
  --accent: oklch(0.55 0.11 75);
  --accent-foreground: oklch(0.20 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0 0 0 / 10%);
  --input: oklch(0 0 0 / 12%);
  --ring: oklch(0.55 0 0);
  --sidebar: oklch(0.97 0 0);
  --sidebar-foreground: oklch(0.15 0 0);
  --sidebar-primary: oklch(0.20 0 0);
  --sidebar-primary-foreground: oklch(0.98 0 0);
  --sidebar-accent: oklch(0.95 0 0);
  --sidebar-accent-foreground: oklch(0.20 0 0);
  --sidebar-border: oklch(0 0 0 / 10%);
  --sidebar-ring: oklch(0.55 0 0);
}
```

Dark mode (`.dark`) stays as-is (already correct).

---

## Step 2: Fix `hero.tsx` WebkitTextStroke

**Line 95**: Change hardcoded white stroke to use CSS variable:
```
Current:  style={{ WebkitTextStroke: "2px rgba(255,255,255,0.9)" }}
Replace:  style={{ WebkitTextStroke: "2px var(--foreground)" }}
```

This makes the outlined "Filbert" text use dark stroke in light mode and white stroke in dark mode automatically.

---

## Step 3: Fix `about-section.tsx` WebkitTextStroke

**Line 76**: Same fix:
```
Current:  style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.9)" }}
Replace:  style={{ WebkitTextStroke: "2px var(--foreground)" }}
```

---

## Step 4: Fix `navbar.tsx` Logo

**Line 7**: Re-add `BlackLogo` import:
```ts
import BlackLogo from "@/public/assets/logo/logo_black.png";
```

**Line 75**: Restore conditional logo:
```
Current:  src={WhiteLogo}
Replace:  src={resolvedTheme === "dark" ? WhiteLogo : BlackLogo}
```

---

## Verification

1. `npm run build` — no errors
2. `npm run dev` — toggle light/dark mode:
   - Light mode: warm off-white background, dark text, gold accents, black logo
   - Dark mode: near-black background, white text, gold accents, white logo
3. Hero section: Spline scene renders, "Filbert" outlined text visible in both modes
4. About section: "Profile" outlined text visible in both modes
5. Navbar: correct logo shown for each mode
6. Footer, projects, contact: proper light/dark colors
