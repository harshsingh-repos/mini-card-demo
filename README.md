# Mini Card Collection

A React assignment demonstrating components, props, state, event handling, and list rendering through an interactive playing card collection. Built with React, Vite, and CSS.

## Features

- Add cards from a standard 52-card deck without displaying duplicates.
- Click a card to select it; click it again to deselect it.
- Remove the last card or the selected card.
- Shuffle the displayed cards using the Fisher–Yates algorithm.
- Clear the collection and view the current card count.
- Disable controls when their actions are unavailable.

Cards are added in deck order: hearts, spades, diamonds, then clubs, with values from Ace through King in each suit. Removed cards become available to add again.

## Run locally

Use Node.js 22.12+ or a newer supported LTS release, with npm installed.

```bash
git clone https://github.com/harshsingh-repos/mini-card-demo.git
cd mini-card-demo
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally after building. |
| `npm run lint` | Check the source code with ESLint. |

## Project structure

```text
src/
├── components/
│   └── Card.jsx     # Reusable card component receiving props
├── App.jsx          # Deck data, collection state, and card actions
├── App.css          # Collection layout and card styling
├── index.css        # Global styles
└── main.jsx         # React entry point
```

## React concepts practiced

- **Components and props:** `App` passes each card's value, suit, selection state, and click handler to `Card`.
- **State:** `useState` tracks the displayed cards and the selected card ID.
- **Immutable updates:** Spread syntax, `slice`, and `filter` update the collection without mutating state.
- **List rendering:** `map` renders cards with stable IDs as keys.
- **Events and conditional UI:** Click handlers update state, selection changes styling, and button states reflect available actions.
