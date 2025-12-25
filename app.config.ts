import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "RN Boilerplate",
  slug: "rn-boilerplate",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.example.rnboilerplate",
    scheme: "rnboilerplate",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.example.rnboilerplate",
    scheme: "rnboilerplate",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
};

export default config;
