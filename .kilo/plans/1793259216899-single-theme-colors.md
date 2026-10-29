# Single Theme Colors Plan

## Goal
Apply one consistent theme across the Next.js portfolio using the specified color palette.

## Decisions (resolved)
- **Single theme only** — no light/dark theme switching for this task; keep `:root` values.
- **Base Canvas**: `#F8FAFC` → `--background: 210 40% 98%`
- **Card Surface**: `#FFFFFF` → `--card: 0 0% 100%`
- **Borders**: `#E2E8F0` → `--border` / `--input`: `214.3 31.8% 91.4%`
- **Primary Accent**: `#059669` (emerald-600) → `--primary: 160 84% 39%`, `--ring: 160 84% 39%`
- **Subtle Highlights**: emerald-50/700 → `--secondary` / `--accent`: `149 80% 96%`, `--secondary-foreground` / `--accent-foreground`: `161 94% 24%`
- Rejected `#10B981` (emerald-500) and `#475569` (slate-700) to keep one accent consistent with emerald highlight tokens.

## Current state
`src/app/globals.css:51-85` already implements all of the above values via shadcn CSS variables. `src/app/page.tsx` is empty (no rendered UI to theme yet). UI components (`button.tsx`, `card.tsx`, `badge.tsx`) consume the CSS variables already.

## Tasks for implementation agent
1. Confirm `globals.css` `:root` variables match the table above (no edits needed if they already match).
2. Optionally add content to `src/app/page.tsx` to exercise the theme (bg-background, card, border, primary buttons, emerald-50 pills).
3. Verify no other files override these CSS variables with conflicting colors.

## Validation
- Run `bun run lint` (eslint) and `bun run build` (next build) to confirm no theme-related breakage.
- Visually confirm base canvas is `#F8FAFC`, cards are `#FFFFFF`, borders `#E2E8F0`, primary accent `#059669`, highlight pills `bg-emerald-50 text-emerald-700`.

## Open questions
- None (theme values locked in; `#059669` selected as single primary accent).