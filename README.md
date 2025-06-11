# StarterPack

A modern Expo + React Native starter kit with TypeScript, Expo Router, Zustand, React Query, Tailwind (via twrnc), and a scalable atomic design system.

## Features

- **Expo Router** for file-based navigation
- **TypeScript** for type safety
- **Zustand** for state management
- **React Query** for data fetching and caching
- **Tailwind CSS** utility classes via [`twrnc`](https://github.com/jaredh159/tailwind-rn)
- **Atomic Design** folder structure: Atoms, Molecules, Organisms
- **Custom Fonts** with Expo Font and Google Fonts
- **Pre-configured ESLint** for code quality
- **Sample API integration** with Axios

## Folder Structure

```
.
├── app/                # App entry and routes (Expo Router)
│   ├── _layout.tsx
│   ├── +not-found.tsx
│   └── (tabs)/         # Tab navigation screens
├── assets/             # Fonts and images
├── components/
│   ├── atoms/          # Smallest UI elements
│   ├── molecules/      # Composed from atoms
│   └── organisms/      # Composed from molecules/atoms
├── config/             # Theme and configuration
├── constants/          # App-wide constants
├── features/           # Feature modules (e.g., home)
├── hooks/              # Custom React hooks
├── lib/                # Library utilities (e.g., tailwind, query client)
├── scripts/            # Project scripts
├── services/           # API clients
├── store/              # State management (Zustand)
├── .expo/              # Expo generated files
├── .vscode/            # VSCode settings
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run start
   ```
3. **Run on device or emulator:**
   ```sh
   npm run ios   # for iOS
   npm run android   # for Android
   npm run web   # for Web
   ```

## Scripts

- `npm run start` — Start Expo development server
- `npm run ios` — Run on iOS simulator
- `npm run android` — Run on Android emulator
- `npm run web` — Run on web
- `npm run lint` — Run ESLint
- `npm run reset-project` — Reset project to a blank state

## Customization

- **Tailwind config:** Edit [`tailwind.config.js`](tailwind.config.js)
- **Theme:** Edit [`config/theme.ts`](config/theme.ts)
- **API client:** Edit [`services/client.ts`](services/client.ts)

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router](https://expo.github.io/router/docs)
- [React Query](https://tanstack.com/query/latest)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [twrnc](https://github.com/jaredh159/tailwind-rn)

---

MIT License
