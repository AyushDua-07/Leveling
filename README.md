# Leveling — Solo Leveling Inspired Life System

A production-ready, mobile-first gamified self-improvement app that turns your daily activities into XP, levels, stats, quests, and streaks. Inspired by the Solo Leveling manhwa's "System" interface.

## Features

### Core Experience
- **Activity Logging** — Quick-log gym, study, meditation, reading, coding, or custom activities
- **XP & Leveling** — Earn XP from activities with difficulty/duration multipliers, level up with dramatic animations
- **Rank Progression** — E → D → C → B → A → S rank tiers based on level milestones
- **Stat System** — Six stats (STR, END, INT, DIS, CHA, LUC) that grow from activities + allocatable stat points on level up
- **Daily/Weekly Quests** — Auto-generated daily quests + custom quest creation with progress tracking
- **Streak System** — Track consecutive active days with best streak records
- **Punishment System** — Optional XP penalties for missed daily quests (toggleable)
- **Title System** — Unlock titles like "Consistency Demon", "Iron Will", "Shadow Monarch"
- **Coins** — Earned through leveling and quest completion

### Pages
| Route | Description |
|-------|-------------|
| `/` | Dashboard — Hunter status window with rank badge, XP bar, stats, quests, recent logs, system feed |
| `/log` | Activity Log — Quick-add buttons, logging modal with XP preview, filterable history |
| `/quests` | Quests — Active/completed tabs, create custom quests, manual completion |
| `/stats` | Stats — Radar chart, detailed stat bars, XP over time chart, activity breakdown pie chart, quest completion rate |
| `/profile` | Profile — Name editing, title selection, punishment toggle, data export, reset |

### Design
- **Dark theme** with Solo Leveling "System Window" aesthetic
- **Neon cyan/amber accents** on deep void-black backgrounds
- **Animated UI** with framer-motion transitions, XP bar fills, level-up overlays
- **Mobile-first** responsive layout with bottom navigation bar
- **Typography**: Rajdhani (headings), Space Grotesk (body), JetBrains Mono (numbers/stats)

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS 4** (styling)
- **shadcn/ui** (component library)
- **Framer Motion** (animations)
- **Recharts** (charts & visualizations)
- **Wouter** (routing)
- **localStorage** (data persistence)

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:3000`.

## Build for Production

```bash
pnpm build
```

## Project Structure

```
client/
  src/
    components/     # Reusable UI components (SystemCard, XPBar, BottomNav, LevelUpModal)
    contexts/       # React contexts (GameContext with full state management)
    lib/            # Game engine (XP calc, leveling, ranks, stats) + asset URLs
    pages/          # Page components (Dashboard, Log, Quests, Stats, Profile)
    App.tsx         # Routes & providers
    index.css       # Global styles with Solo Leveling theme
  index.html        # Entry HTML with Google Fonts
```

## Data Persistence

All data is stored in `localStorage` under the key `leveling_game_state`. You can export your data as JSON from the Profile page and import it later.

## Customization

- **Rank thresholds** — Edit `getRankForLevel()` in `gameEngine.ts`
- **XP formula** — Edit `calculateXP()` in `gameEngine.ts`
- **Stat impacts** — Edit `getStatImpacts()` in `gameEngine.ts`
- **Title unlocks** — Edit `checkTitleUnlocks()` in `gameEngine.ts`
- **Daily quests** — Edit `generateDailyQuests()` in `gameEngine.ts`

## License

MIT
