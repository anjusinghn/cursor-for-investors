# Neuralyn

An IDE for venture capital workflows. Not a chatbot, not another CRM — a workspace where investors source, evaluate, and track deals without tab-switching through six different tools.

The metaphor is literal: deals are repos, notes are files, integrations are extensions, and a command bar (`Ctrl+K`) turns intent into action.

## What's in here

This is a pnpm monorepo with three apps and a shared types package.

```
apps/
  desktop/    Tauri v2 shell wrapping a React + Vite frontend
  server/     Express API with Drizzle ORM over SQLite
  fe/         Next.js marketing landing page
packages/
  shared/     TypeScript types shared across apps
```

**Desktop app** — The actual product. A dark-themed IDE layout with:
- Pipeline view (table and kanban)
- Deal workspaces with notes, memos, timeline, and meeting history
- Company briefs and person profiles
- Thesis editor for encoding investment criteria
- Command palette for quick navigation

**Server** — REST API backing the desktop app. Routes for companies, deals, people, meetings, memos, theses, tasks, funds, pipeline summaries, search, and activity feeds. Auto-migrates and seeds on startup.

**Landing page** — Marketing site with a video hero, scroll-driven animations, feature breakdowns, and a CTA. Built with Framer Motion for page transitions.

## Tech stack

| Layer | What |
|-------|------|
| Desktop shell | Tauri v2 (Rust) |
| Desktop frontend | React 19, Vite 6, TanStack Query, Zustand, Tailwind v4, shadcn/ui |
| Server | Express, Drizzle ORM, better-sqlite3 |
| Landing page | Next.js 16, Framer Motion |
| Monorepo | pnpm workspaces, Turborepo |

## Getting started

You need [pnpm](https://pnpm.io/) (v10+), [Node.js](https://nodejs.org/) (v20+), and [Rust](https://rustup.rs/) (for the Tauri build).

```bash
# install dependencies
pnpm install

# run the server (port 3001)
pnpm --filter @vc-ide/server dev
