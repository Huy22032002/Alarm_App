import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";
import { useTheme } from "../../hooks/useTheme";
//constant
import { DAYS, Day } from "../../constant/day";
export default function RepeatAlarm() {
  //theme
  const { theme } = useTheme();
  //check box
  const [checked, setChecked] = useState(false);
  //days
  const [selectedDays, setSelectedDays] = useState<Day[]>([]);

  const toggleDay = (day: Day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const toggleEveryDay = () => {
    setSelectedDays(!checked ? [...DAYS] : []);
    setChecked(!checked);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.green[700] }]}
    >
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={toggleEveryDay}
          uncheckedColor={theme.colors.white.main}
          color={theme.colors.red.main}
        />
        <Text style={[styles.lblRepeat, { color: theme.colors.white.main }]}>
          Every day
        </Text>
      </View>

      <View style={styles.daysContainer}>
        {DAYS.map((day) => (
          <TouchableOpacity
            key={day}
            style={[
              styles.dayButton,
              selectedDays.includes(day)
                ? {
                    backgroundColor: theme.colors.green[100],
                    borderColor: theme.colors.white.main,
                  }
                : { borderColor: theme.colors.white[500] },
            ]}
            onPress={() => toggleDay(day)}
          >
            <Text
              style={[
                styles.dayText,
                selectedDays.includes(day)
                  ? {
                      color: theme.colors.white.main,
                    }
                  : {
                      color: theme.colors.white[500],
                    },
              ]}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 12,
    marginTop: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  lblRepeat: { fontSize: 16 },
  daysContainer: { flexDirection: "row", justifyContent: "space-between" },
  dayButton: {
    borderWidth: 2,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  dayText: { textAlign: "center" },
});
