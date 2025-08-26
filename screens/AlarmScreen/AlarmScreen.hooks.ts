import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

export const useAlarmScreen = () => {
  const alarms = [
    { id: 1, time: "1:02 AM", repeat: "Ring once", active: false },
    { id: 2, time: "2:30 AM", repeat: "Ring once", active: false },
    { id: 3, time: "5:09 AM", repeat: "Ring once", active: true },
    { id: 4, time: "1:30 PM", repeat: "Ring once", active: false },
    { id: 5, time: "4:10 PM", repeat: "Ring once", active: false },
    { id: 6, time: "7:02 AM", repeat: "Ring once", active: true },
    { id: 7, time: "9:02 AM", repeat: "Ring once", active: true },
  ];
  const [listAlarm, setListAlarm] = useState(alarms);

  //theme
  const { theme, toggleMode } = useTheme();
  //toggle
  const [toggleValue, setToggleValue] = useState<boolean>(false);

  const toggleSwitch = (id: number) => {
    setListAlarm((prev) =>
      prev.map((a) => (a.id === id ? { ...a, active: !a.active } : a))
    );
  };

  return {
    listAlarm,
    toggleSwitch,
    theme,
    toggleValue,
    setToggleValue,
  };
};
