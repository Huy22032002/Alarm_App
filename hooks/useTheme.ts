import { useContext } from "react";
import { ThemeContext } from "../theme/theme";

export const useTheme = () => useContext(ThemeContext);
