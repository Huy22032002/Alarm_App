import React, { createContext, useState, FC, useMemo, ReactNode } from "react";
import { TextStyle } from "react-native";

// --- Mode ---
export type Mode = "dark" | "light";

// --- Color tokens ---
export const tokens = (mode: Mode) =>
  mode === "dark"
    ? {
        green: {
          100: "#558c86ff",
          900: "#1b2c2aff",
          500: "#30504c",
          thumbToggleActive: "#375551",
          bg: "#192727",
          700: "#2b4541",
        },
        white: { main: "#FFFFFF", 500: "#acacacff" },
        black: { main: "#192826", secondary: "#101010" }, //lunite
        grey: { main: "#585B5B" }, //lunite
        red: { main: "#E57373" },
        blue: { main: "#64B5F6" },
      }
    : {
        green: { main: "#2E7D32" },
        white: { main: "#FFFFFF" },
        black: { main: "#000000", secondary: "#333333" },
        grey: { main: "#B0B0B0" },
        red: { main: "#D32F2F" },
        blue: { main: "#1976D2" },
      };

// --- Font type ---
export type FontFamily =
  | "SF-Pro-Display-Bold"
  | "SF-Pro-Display-Medium"
  | "SF-Pro-Display-Regular"
  | "SF-Pro-Display-Light"
  | "SF-Pro-Display-Thin";

// --- Font config ---
export const fontConfig = {
  regular: {
    fontFamily: "SF-Pro-Display-Regular" as FontFamily,
    fontWeight: "400",
  },
  medium: {
    fontFamily: "SF-Pro-Display-Medium" as FontFamily,
    fontWeight: "500",
  },
  light: {
    fontFamily: "SF-Pro-Display-Light" as FontFamily,
    fontWeight: "300",
  },
  thin: { fontFamily: "SF-Pro-Display-Thin" as FontFamily, fontWeight: "100" },
};

// --- Typography config ---
export const createTextStyles = (colors: ReturnType<typeof tokens>) => ({
  h1: {
    // ...fonts.regular,
    fontSize: 24,
    color: colors.white.main,
    fontWeight: "700" as TextStyle["fontWeight"],
  },
  h2: {
    // ...fonts.medium,
    fontSize: 20,
    color: colors.white.main,
    fontWeight: "700" as TextStyle["fontWeight"],
  },
  title: {
    // ...fonts.regular,
    fontSize: 16,
    color: colors.red.main,
  },
  caption: {
    // ...fonts.light,
    fontSize: 12,
    color: colors.grey.main,
  },
  songName: {
    fontSize: 16,
    color: colors.white.main,
    fontWeight: "600" as TextStyle["fontWeight"],
  },
});

// --- Theme interface ---
export interface Theme {
  mode: Mode;
  colors: ReturnType<typeof tokens>;
  fonts: typeof fontConfig;
  textStyles: ReturnType<typeof createTextStyles>;
}

// --- Context props ---
interface ThemeContextProps {
  theme: Theme;
  toggleMode: () => void;
}

// --- Theme Context ---
export const ThemeContext = createContext<ThemeContextProps>({
  theme: {
    mode: "light",
    colors: tokens("light"),
    fonts: fontConfig,
    textStyles: createTextStyles(tokens("light")),
  },
  toggleMode: () => {},
});

// --- Provider props ---
interface ThemeProviderProps {
  children: ReactNode;
}

// --- Theme Provider ---
export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<Mode>("dark");

  const toggleMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  const theme = useMemo<Theme>(
    () => ({
      mode,
      colors: tokens(mode),
      fonts: fontConfig,
      textStyles: createTextStyles(tokens(mode)),
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
