import * as Font from "expo-font";

export const loadFonts = () =>
  Font.loadAsync({
    "sf-pro-display-bold": require("../assets/fonts/SF-Pro-Display-Bold.ttf"),
    "sf-pro-display-thin": require("../assets/fonts/SF-Pro-Display-Thin.ttf"),
    "sf-pro-display-regular": require("../assets/fonts/SF-Pro-Display-Regular.ttf"),
    "sf-pro-display-light": require("../assets/fonts/SF-Pro-Display-Light.ttf"),
    "sf-pro-display-heavy": require("../assets/fonts/SF-Pro-Display-Heavy.ttf"),
  });

export type FontFamily =
  | "sf-pro-display-bold"
  | "sf-pro-display-thin"
  | "sf-pro-display-regular"
  | "sf-pro-display-light"
  | "sf-pro-display-heavy";
