# Trusync

> **Trust infrastructure for autonomous AI agents.**

Trusync is a landing page and early-access platform for a secure transaction and oversight layer built for autonomous AI systems. As AI agents become increasingly capable of acting independently, Trusync provides the infrastructure they need to transact safely, evaluate risk intelligently, and escalate to humans when needed — all with full transparency and audit logging.

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Styling & Design Tokens](#styling--design-tokens)
- [Deployment](#deployment)
  - [Render](#-deploy-on-render-primary)
  - [Vercel](#deploy-on-vercel-alternative)
  - [Push to GitHub](#-push-to-github)

---

## About

Trusync addresses a critical gap in the emerging AI agent economy: **there is no trusted infrastructure** for autonomous AI systems to transact, negotiate, and operate with confidence.

This project serves as the public-facing marketing and waitlist site for Trusync, showcasing the product's core value proposition and collecting early-access requests from developers, companies, and AI teams.

---

## Features

| Feature | Description |
|---|---|
| 🔒 **Secure Transactions** | AI agents transact with real-time safety checks and active monitoring |
| ⚖️ **Intelligent Decision Systems** | Compare pricing and evaluate risk before any action is executed |
| 👥 **Human Oversight** | Instantly escalate high-risk or ambiguous situations to a human operator |
| 👁️ **Transparency & Logging** | Complete, immutable audit trails of all agent activity |

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2.6 | React framework (App Router, Webpack bundler) |
| [React](https://react.dev) | 19.2.4 | UI library |
| [TypeScript](https://www.typescriptlang.org) | ^5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | ^4.3.0 | Utility-first styling |
| [Lucide React](https://lucide.dev) | ^0.542.0 | Icon library |
| [@fontsource/inter](https://fontsource.org/fonts/inter) | ^5.0.0 | Self-hosted Inter font (400, 500, 600, 700) |

---

## Project Structure

```
trusync/
├── app/
│   ├── favicon.ico          # Site favicon
│   ├── globals.css          # Global styles, Tailwind imports & design tokens
│   ├── layout.tsx           # Root layout with metadata & HTML shell
│   └── page.tsx             # Main landing page (Hero, Problem, Solution, How It Works, Waitlist)
├── public/
│   ├── logo.svg             # Trusync logo
│   └── trusync-hero-placeholder.png  # Hero section image
├── next.config.ts           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.mjs       # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── eslint.config.mjs        # ESLint configuration
├── render.yaml              # Render deployment blueprint
└── package.json             # Dependencies & scripts
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** — v18 or higher ([download](https://nodejs.org))
- **npm** — comes with Node.js

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd trusync
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**

   ```
   http://localhost:3000
   ```

The page hot-reloads automatically as you edit files. Start with [`app/page.tsx`](./app/page.tsx).

---

## Available Scripts

| Script | Command | Description |
|---|---|---|
| **dev** | `npm run dev` | Starts the development server at `localhost:3000` (Webpack mode) |
| **build** | `npm run build` | Builds the app for production (Webpack mode) |
| **start** | `npm run start` | Runs the production build locally |
| **lint** | `npm run lint` | Runs ESLint across the codebase |

---

## Styling & Design Tokens

Trusync uses **Tailwind CSS v4** with a custom set of design tokens and utility classes defined in [`app/globals.css`](./app/globals.css).

### Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `--dark-blue` | `#001f3f` | Primary background |
| `--pink` | `#ff4d94` | Accent color, CTAs |
| Blue accent | `#3B82F6` | Interactive elements, icons, highlights |

### Custom Utility Classes

| Class | Description |
|---|---|
| `.bg-dark-blue` | Applies the primary dark blue background |
| `.text-pink` | Applies the pink accent color to text |
| `.bg-pink` | Applies the pink accent as a background |
| `.border-pink` | Applies a pink border |
| `.btn-pink` | Styled pink CTA button with hover scale and glow effect |
| `.glow-blue` | Blue drop-shadow glow effect |
| `.glow-pink` | Pink drop-shadow glow effect |

---

## Deployment

Trusync can be deployed on **Render** (primary) or **Vercel**. The project includes a `render.yaml` blueprint for one-click Render deploys, and `next.config.ts` is configured with `output: "standalone"` for optimal Node server deployments.

---

### 🚀 Deploy on Render (Primary)

Render is configured via the [`render.yaml`](./render.yaml) blueprint in this repo.

#### Option A — Blueprint (Recommended)

1. Push this repo to GitHub (see [GitHub](#-push-to-github) section below).
2. Go to [dashboard.render.com](https://dashboard.render.com) and sign in.
3. Click **New → Blueprint**.
4. Connect your GitHub account and select the `web-nextjs` repository.
5. Render will read `render.yaml` and configure the service automatically.
6. Click **Apply** — your site will be live at `https://trusync.onrender.com` (or your custom name).

#### Option B — Manual Web Service

1. Go to [dashboard.render.com](https://dashboard.render.com) → **New → Web Service**.
2. Connect your GitHub repo (`trusync-space/web-nextjs`).
3. Fill in the settings:

   | Setting | Value |
   |---|---|
   | **Runtime** | Node |
   | **Build Command** | `npm install && npm run build` |
   | **Start Command** | `npm start` |
   | **Node Version** | `22.12.0` |
   | **Environment** | `NODE_ENV=production` |

4. Click **Create Web Service**.

> **Free tier note:** On Render's free plan, the service spins down after 15 minutes of inactivity. The first request after sleep may take ~30 seconds to wake up.

---

### Deploy on Vercel (Alternative)

1. Push your project to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel will auto-detect Next.js — click **Deploy**.

Your site will be live with automatic deployments on every push to `main`.

---

### 📦 Push to GitHub

The repository is already connected to GitHub at:
**`https://github.com/trusync-space/web-nextjs`**

To push changes:

```bash
git add .
git commit -m "your commit message"
git push origin main
```

---

© 2026 Trusync — Building trust for the agent economy.
