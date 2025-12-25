import { View as RNView, Text as RNText } from "react-native";
import type { ViewProps, TextProps } from "react-native";

// NativeWind className support ekle
declare global {
  namespace JSX {
    interface IntrinsicElements {
      view: ViewProps & { className?: string };
      text: TextProps & { className?: string };
    }
  }
}

export const View = RNView as any;
export const Text = RNText as any;
