# ProblemPatch — Landing

For patchwizard-ui

Public marketing site for ProblemPatch: hero, how-it-works, problem feed preview, and CTAs.

## Tech
- Next.js + React + TypeScript
- Tailwind CSS
- Deployed on Vercel

## Local Dev
```bash
pnpm i
pnpm dev

## Spinup Process

# Choose one package manager (pnpm recommended)
# If you don’t have pnpm: npm i -g pnpm

```bash
git clone https://github.com/patchwizard-ui/problempatch-landing.git
cd problempatch-landing

# Next.js (App Router) + TypeScript
pnpm create next-app@latest . --ts --eslint --app --src-dir --import-alias "@/*" --use-pnpm
```

```bash
pnpm add -D tailwindcss postcss autoprefixer
pnpm exec tailwindcss init -p
```

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};

