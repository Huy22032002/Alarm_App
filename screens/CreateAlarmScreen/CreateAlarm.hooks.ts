import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

export const useCreateAlarm = () => {
  //theme
  const { theme, toggleMode } = useTheme();

  //date time
  const [date, setDate] = useState(new Date());
  const [vibrate, setVibrate] = useState(true);

  return { theme, date, setDate, vibrate, setVibrate };
};
