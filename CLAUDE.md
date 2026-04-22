# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal resume website (彭斯诚的个人简历) built with React 18, TypeScript, Vite, and Less + CSS Modules.

## Commands

```bash
pnpm install     # Install dependencies
pnpm dev         # Start dev server
pnpm build       # Build for production (outputs to build/)
pnpm preview     # Preview production build
pnpm lint        # Run ESLint
pnpm gh-deploy   # Build and deploy to GitHub Pages
```

## Architecture

- **Resume data**: Stored in JSON files under `src/` (e.g., `2026-01.json`). The `types.ts` defines `ResumeData` with `zh` and `en` language versions.
- **Entry point**: `src/main.tsx` renders the `Resume` component with resume data passed as props.
- **Components**: `src/components/Resume.tsx` is the main wrapper; `Content.tsx` renders the actual content.
- **Styling**: Uses Less with CSS Modules (`*.module.less`).
- **Build config**: Vite outputs to `build/` with base path `/Resume/`. Sourcemaps are enabled.
