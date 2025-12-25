# React Native Boilerplate 🚀

Ready-to-use template for rapid React Native app development.

## 🎯 Stack

- React Native + Expo + TypeScript
- NativeWind (Tailwind CSS)
- Expo Router (Navigation)
- Firebase Auth
- Redux Toolkit

## 📦 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Edit .env.local (Firebase credentials)
EXPO_PUBLIC_FIREBASE_API_KEY=your_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
# ... other Firebase config

# 3. Start the app
npx expo start

# For iOS: press i
# For Android: press a
```

## 📁 Folder Structure

```
app/
├── (auth)/          # Login, Register
├── (tabs)/          # Home, Profile
└── _layout.tsx      # Root layout

src/
├── components/      # UI components
├── services/        # Firebase, Auth
├── hooks/          # useAuth
└── redux/          # State management
```

## 🚀 Create New App

1. Clone this repo
2. Create Firebase project
3. Paste credentials into .env.local
4. Change bundle ID in app.config.ts
5. Start!

**Time: ~15 minutes**

## 📝 Features

- ✅ Email/Password auth
- ✅ Protected routes
- ✅ Redux state
- ✅ Tab navigation
- ✅ TypeScript
- ✅ iOS & Android
