# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Commission V3 is a React + TypeScript SPA for a mini-football league. It displays league standings, player statistics, match results, and manages player attendance using Firebase Realtime Database.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # TypeScript compilation + Vite production build
npm run lint       # Run ESLint
npm run preview    # Preview production build locally
```

## Architecture

**Data Flow:**
1. Static match data lives in `src/data/matches.ts` (the primary source of truth)
2. Utility functions in `src/utils/` calculate standings and scorer statistics from matches
3. Attendance component reads/writes real-time data to Firebase under `/attendance/{playerKey}`

**Main Views (Tab-based in App.tsx):**
- Clasificación (Standings) - `StandingsTable.tsx`
- Goleadores (Top Scorers) - `TopScorers.tsx`
- Calendario (Match Schedule) - `MatchesCalendar.tsx`
- Asistencia (Attendance) - `Attendance.tsx`

**Key Types:**
- `Team` enum: Red, White, Blue, Green (4 teams with 9-10 players each)
- `Player` enum: 44+ players across all teams
- `Match` interface: Contains matchDay, date, played status, teams, and goal arrays
- Team configurations with colors and rosters in `src/types/teams.ts`

## Code Conventions

- Path alias: `@/*` maps to `src/*`
- Spanish localization throughout UI (dates, labels)
- Single quotes, no semicolons (Prettier via VSCode)
- Chakra UI for all components with next-themes for dark mode

## Environment Variables

Required in `.env.development.local` or `.env.production.local`:
```
VITE_FIREBASE_API_KEY=<key>
VITE_FIREBASE_DATABASE_URL=<url>
VITE_FIREBASE_PROJECT_ID=<project-id>
```
