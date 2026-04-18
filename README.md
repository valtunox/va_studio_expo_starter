<p align="center">
  <img src="https://img.shields.io/badge/Expo-54-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo 54" />
  <img src="https://img.shields.io/badge/React_Native-0.81-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Native 0.81" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Studio_Builder-Ready-8B5CF6?style=for-the-badge" alt="Studio Builder Ready" />
  <img src="https://img.shields.io/badge/AI-Ready-F59E0B?style=for-the-badge" alt="AI Ready" />
</p>

<h1 align="center">VA Studio Expo Starter</h1>

<p align="center">
  <strong>A production-ready cross-platform mobile starter — iOS, Android, and Web from a single codebase.</strong>
</p>

<p align="center">
  Built on Expo SDK 54, React Native 0.81, and React 19, with expo-router file-system routing,<br/>
  themed tab navigation, haptics, secure storage, and a design system aligned to the VA Studio family.
</p>

<p align="center">
  <a href="#quick-start">Quick Start</a> &bull;
  <a href="#features">Features</a> &bull;
  <a href="#studio-builder-integration">Studio Integration</a> &bull;
  <a href="#project-structure">Structure</a> &bull;
  <a href="#scripts">Scripts</a>
</p>

---

## Quick Start

```bash
# Install
npm install

# Start the dev server + Expo Go QR code
npm run start

# Platform-specific launchers
npm run ios       # iOS simulator
npm run android   # Android emulator
npm run web       # Browser
```

Scan the QR with **Expo Go** on your device, or press `i` / `a` / `w` in the terminal.

> Requires Node 20+ and the Expo CLI (installs on first `npm run start`).

## Features

- **Expo Router** — File-system based routing with typed links, layouts, and stack/tab navigators
- **React 19 + RN 0.81** — The latest runtime with concurrent rendering and the new architecture
- **TypeScript** — Strict-mode typed end-to-end with `@/*` path aliases
- **Themed Components** — Light + dark palette with automatic scheme switching
- **Tab Navigation** — `@react-navigation/bottom-tabs` wired through expo-router
- **Haptics** — `expo-haptics` for tactile feedback on iOS/Android
- **Secure Storage** — `expo-secure-store` for tokens / credentials
- **Linear Gradients** — `expo-linear-gradient` for polished UI accents
- **Symbols & Icons** — `expo-symbols` (SF Symbols on iOS) + `@expo/vector-icons`
- **Splash + Status Bar** — Configured splash screen and dynamic status bar
- **Font Loading** — `expo-font` wired to custom Google Fonts
- **Web Support** — Runs on the browser via `react-native-web`

## Studio Builder Integration

- Native-first with web parity — one codebase powers the Studio preview and the shipped mobile app
- The `app/` tree is scanned by Studio's route-aware AI copilot — new screens slot in without manual wiring
- Uses `@/*` path aliases so Studio code generators produce consistent imports
- Theme tokens and color schemes map to the Studio design-system palette
- Backend-ready: `app.json` supports `expo.extra.apiBaseUrl` for the Studio FastAPI proxy

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Expo SDK 54, React Native 0.81, React 19 |
| **Language** | TypeScript 5 |
| **Routing** | expo-router 6 (file-system based) |
| **Navigation** | @react-navigation/native 7 + bottom-tabs |
| **Storage** | expo-secure-store + @react-native-async-storage |
| **UI Primitives** | expo-image, expo-linear-gradient, expo-symbols |
| **Haptics** | expo-haptics |
| **Fonts** | expo-font + custom font loader |
| **Bundler** | Metro (Expo-managed) |

## Project Structure

```
va_studio_expo_starter/
├── app/                # Expo Router screens (file-system routing)
├── assets/             # Images, fonts, app icons, splash
├── components/         # Shared / themed UI components
├── constants/          # Theme tokens, layout constants
├── hooks/              # Reusable hooks (color scheme, theme, etc.)
├── scripts/            # Expo utility scripts (reset-project, etc.)
├── app.json            # Expo configuration (bundle ID, splash, icon, plugins)
├── tsconfig.json       # TypeScript config with @/* path aliases
└── package.json
```

## Scripts

```bash
npm run start            # Expo dev server (interactive)
npm run ios              # iOS simulator
npm run android          # Android emulator
npm run web              # Web browser
npm run lint             # Expo lint
npm run reset-project    # Reset to a blank Expo project (preserves git history)
```

## Building for production

```bash
npx expo prebuild                          # Generate native iOS/Android projects
npx eas build --platform ios --profile production
npx eas build --platform android --profile production
```

See the [EAS Build docs](https://docs.expo.dev/build/setup/) to configure app store credentials.

## License

MIT

---

<p align="center">
  Part of the <strong>VA Studio</strong> starter family · Built for rapid prototyping with an AI copilot.
</p>
