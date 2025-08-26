import React, { createContext, useState, FC, useMemo, ReactNode } from "react";

// --- Mode ---
export type Mode = "dark" | "light";

// --- Color tokens ---
export const tokens = (mode: Mode) =>
  mode === "dark"
    ? {
        green: {
          100: "#528680",
          900: "#192826",
          500: "#30504c",
          bg: "#192727",
        },
        white: { main: "#FFFFFF" },
        black: { main: "#192826", secondary: "#101010" },
        grey: { main: "#585B5B" },
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

// --- Theme interface ---
export interface Theme {
  mode: Mode;
  colors: ReturnType<typeof tokens>;
  fonts: typeof fontConfig;
}

// --- Context props ---
interface ThemeContextProps {
  theme: Theme;
  toggleMode: () => void;
}

// --- Theme Context ---
export const ThemeContext = createContext<ThemeContextProps>({
  theme: { mode: "light", colors: tokens("light"), fonts: fontConfig },
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
    () => ({ mode, colors: tokens(mode), fonts: fontConfig }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
