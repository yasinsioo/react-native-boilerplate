# React Native Boilerplate - Instructions

## 📋 Overview

Bu boilerplate, iOS/Android uygulamalarını hızlıca üretmek için tasarlanmıştır.

- **Framework**: React Native + Expo
- **Styling**: NativeWind (Tailwind CSS)
- **Navigation**: Expo Router
- **Auth**: Firebase (Email + Google/Apple)
- **Database**: Firestore
- **State**: Redux Toolkit
- **Language**: TypeScript

---

## 🚀 Setup Instructions

### 1. Initial Project Setup

```bash
# Expo project oluştur (TypeScript)
npx create-expo-app@latest RNBoilerplate --template
cd RNBoilerplate

# NativeWind ve Expo Router kur
npx expo install nativewind
npx expo install expo-router
npx expo install react-native-safe-area-context
npx expo install react-native-screens

# Firebase kur
npm install firebase

# Redux kur
npm install @reduxjs/toolkit react-redux redux-persist @react-native-async-storage/async-storage

# Dev dependencies
npm install -D typescript tailwindcss postcss
npm install -D @types/react @types/react-native
npm install -D eslint prettier eslint-config-prettier
```
