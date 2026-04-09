<div align="center">

<img src="https://img.shields.io/badge/Expo-54-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo 54" />
<img src="https://img.shields.io/badge/React_Native-0.81-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Native" />
<img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Expo_Router-6-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo Router" />
<img src="https://img.shields.io/badge/License-Apache_2.0-D22128?style=for-the-badge" alt="Apache 2.0" />

<br /><br />

# 🥗 VA Studio Expo Starter

### Production-ready mobile app template for the VA Studio ecosystem

**A beautiful, fully-themed nutrition tracker app built with Expo 54, React Native, and TypeScript — ready to be customized by AI or by hand.**

<br />

[Quick Start](#-quick-start) · [Screens](#-screens) · [Tech Stack](#%EF%B8%8F-tech-stack) · [Ecosystem](#-the-va-studio-ecosystem) · [Contributing](#-contributing)

---

</div>

<br />

## ✨ What Is This?

VA Studio Expo Starter is the **mobile app template** in the [VA Studio](https://github.com/valtunox) open-source ecosystem — a vibe coding platform where you build full-stack applications through natural language and AI.

This starter ships a **complete NutriLife nutrition tracking app** with 5 polished screens, dark/light mode, custom theming, animated splash screen, and mock data — all zero-config and ready to run on iOS, Android, and Web.

> **🎯 Designed for AI-first development.** Every screen, component, and data structure is built to be easily understood, modified, and extended by AI agents — or by you.

<br />

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/valtunox/va_studio_expo_starter.git
cd va_studio_expo_starter

# Install dependencies
npm install

# Start the Expo dev server
npx expo start
```

Then press:
- **`i`** — Open iOS Simulator
- **`a`** — Open Android Emulator
- **`w`** — Open in web browser

> **Prerequisites:** Node.js 18+, and optionally [Expo Go](https://expo.dev/go) on your phone for device testing.

<br />

## 📱 Screens

The starter includes **5 production-quality screens**, each demonstrating different UI patterns:

| Screen | Description |
|:-------|:------------|
| **🏠 Dashboard** | Calorie progress ring, macro bars (protein/carbs/fat/fiber), water tracker, today's meals with color-coded meal types |
| **🍽️ Recipes** | Searchable recipe browser with category filtering, featured carousel, macro pills, ratings & cook times |
| **📅 Meal Plan** | Weekly day selector, daily meal summary with calorie totals, meal cards with color-coded type stripes |
| **📈 Tracker** | Weight progress chart, weekly calorie chart, goal progress bar, achievement badges |
| **👤 Profile** | BMI calculator, nutrition goals, settings with toggles, diet type badge, stats overview |

### Key UI Features

- 🌗 **Dark & Light Mode** — Automatic theme based on device settings, with a comprehensive color token system
- 🎨 **Custom Theme Engine** — 30+ semantic color tokens (`useAppTheme` hook) for consistent theming
- ✨ **Animated Splash Screen** — Spring animation with fade, scale, and slide effects
- 📊 **Progress Ring Component** — CSS conic-gradient on web, native fallback on mobile
- 🧩 **Reusable Components** — `ThemedText`, `ThemedView`, `ProgressRing` — composable and themed

<br />

## 🏗️ Project Structure

```
va_studio_expo_starter/
├── app/
│   ├── _layout.tsx              # Root layout + animated splash screen
│   ├── +not-found.tsx           # 404 screen
│   └── (tabs)/
│       ├── _layout.tsx          # Tab navigator (5 tabs with icons)
│       ├── index.tsx            # Dashboard — calories, macros, water, meals
│       ├── recipes.tsx          # Recipe browser with search & categories
│       ├── plan.tsx             # Weekly meal planner
│       ├── tracker.tsx          # Weight & calorie charts, achievements
│       └── profile.tsx          # User profile, goals, settings
├── components/
│   ├── ProgressRing.tsx         # Circular progress indicator (web + native)
│   ├── ThemedText.tsx           # Theme-aware text component
│   └── ThemedView.tsx           # Theme-aware view component
├── constants/
│   ├── Colors.ts                # Light/dark color token definitions
│   └── MockData.ts              # Complete mock data for all screens
├── hooks/
│   └── useAppTheme.ts           # Theme hook (colors, isDark flag)
├── app.json                     # Expo config (VA Studio Mobile)
├── package.json                 # Dependencies & scripts
└── tsconfig.json                # TypeScript configuration
```

<br />

## ⚙️ Tech Stack

| Layer | Technology |
|:------|:-----------|
| **Framework** | [Expo](https://expo.dev) 54 (SDK 54) |
| **UI** | React Native 0.81 + React 19 |
| **Navigation** | [Expo Router](https://docs.expo.dev/router/introduction/) 6 (file-based routing) |
| **Language** | TypeScript 5.9 |
| **Animations** | React Native Reanimated 4 + Animated API |
| **Icons** | [@expo/vector-icons](https://icons.expo.fyi/) (Ionicons) |
| **Gradients** | expo-linear-gradient |
| **Storage** | expo-secure-store + @react-native-async-storage |
| **Gestures** | react-native-gesture-handler |
| **Platforms** | iOS · Android · Web |

<br />

## 🌐 The VA Studio Ecosystem

VA Studio is an open-source **vibe coding** platform — build full-stack apps through AI and natural language. This Expo starter is one of three starter templates:

<table>
<tr>
<td width="33%" align="center">

### 📱 Mobile Starter
**[va_studio_expo_starter](https://github.com/valtunox/va_studio_expo_starter)**

*You are here*

Expo 54 · React Native · TypeScript
5 screens · Dark mode · Themed components

</td>
<td width="33%" align="center">

### 🖥️ Frontend Starter
**[va_studio_frontend_starter](https://github.com/valtunox/va_studio_frontend_starter)**

React 18 · Vite 6 · Tailwind CSS
**20 production templates** — SaaS, Dashboard, CRM, ERP, E-Commerce, Blog, Portfolio & more

</td>
<td width="33%" align="center">

### ⚡ Backend Starter
**[va_studio_backend_starter](https://github.com/valtunox/va_studio_backend_starter)**

FastAPI · PostgreSQL · Redis · Celery
**10+ use-cases** — Auth, Billing, Blog, AI Agents, Notifications, Analytics & more

</td>
</tr>
</table>

### How They Work Together

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Expo Mobile    │────▶│  FastAPI Backend │◀────│  React Frontend │
│  (This Repo)     │     │  PostgreSQL      │     │  Vite + Tailwind│
│  iOS / Android   │     │  Redis · Celery  │     │  20 Templates   │
└─────────────────┘     └─────────────────┘     └─────────────────┘
         │                       │                        │
         └───────────────────────┴────────────────────────┘
                    AI-first · Vibe Coded · Open Source
```

> **Mix & match** — Use any combination of starters. The mobile app works standalone with mock data, or plug it into the backend for a full-stack experience.

<br />

## 📜 Scripts

```bash
npx expo start          # Start the Expo dev server
npx expo start --ios    # Start on iOS simulator
npx expo start --android # Start on Android emulator
npx expo start --web    # Start in web browser
npm run lint            # Run ESLint
```

<br />

## 🤝 Contributing

Contributions are welcome! Whether it's a new screen, a bug fix, or a design improvement — we'd love your help.

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feat/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feat/amazing-feature`)
5. **Open** a Pull Request

### 💡 Contribution Ideas

- New app templates (fitness tracker, expense tracker, chat app, social feed, etc.)
- Additional reusable components
- Accessibility improvements
- Animation enhancements
- Backend API integration with the [VA Studio Backend](https://github.com/valtunox/va_studio_backend_starter)
- Expo EAS Build & Submit configuration

<br />

## 📄 License

This project is open source and available under the [Apache License 2.0](LICENSE).

<br />

---

<p align="center">
  Built with 💚 by the <a href="https://github.com/valtunox">VA Studio</a> team and contributors
  <br /><br />
  <a href="https://github.com/valtunox/va_studio_frontend_starter">Frontend Starter</a> · <a href="https://github.com/valtunox/va_studio_backend_starter">Backend Starter</a> · <a href="https://github.com/valtunox/va_studio_expo_starter">Mobile Starter</a>
</p>
