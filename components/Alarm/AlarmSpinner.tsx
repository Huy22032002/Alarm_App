import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { useTheme } from "../../hooks/useTheme";

const AlarmPicker = () => {
  const [hour, setHour] = useState(7);
  const [minute, setMinute] = useState(30);
  const [ampm, setAmPm] = useState("AM");

  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.green[700] }]}
    >
      {/* Hour Picker */}
      <WheelPickerExpo
        backgroundColor={theme.colors.green[700]}
        height={200}
        width={100}
        initialSelectedIndex={hour - 1}
        items={Array.from({ length: 12 }, (_, i) => ({
          label: (i + 1).toString(),
          value: i + 1,
        }))}
        selectedStyle={{
          borderWidth: 0.2,
          borderColor: theme.colors.black.secondary,
        }}
        onChange={({ item }) => setHour(item.value)}
        renderItem={({ label }) => (
          <Text
            style={[
              styles.spinnerTypography,
              { color: theme.colors.white.main },
            ]}
          >
            {label}
          </Text>
        )}
      />

      {/* Minute Picker */}
      <WheelPickerExpo
        backgroundColor={theme.colors.green[700]}
        height={200}
        width={100}
        initialSelectedIndex={minute}
        items={Array.from({ length: 60 }, (_, i) => ({
          label: i.toString().padStart(2, "0"),
          value: i,
        }))}
        selectedStyle={{
          borderWidth: 0.2,
          borderColor: theme.colors.black.secondary,
        }}
        onChange={({ item }) => setMinute(item.value)}
        renderItem={({ label }) => (
          <Text
            style={[
              styles.spinnerTypography,
              { color: theme.colors.white.main },
            ]}
          >
            {label}
          </Text>
        )}
      />

      {/* AM/PM Picker */}
      <WheelPickerExpo
        backgroundColor={theme.colors.green[700]}
        height={200}
        width={100}
        initialSelectedIndex={ampm === "AM" ? 0 : 1}
        items={[
          { label: "AM", value: "AM" },
          { label: "PM", value: "PM" },
        ]}
        selectedStyle={{
          borderWidth: 0.2,
          borderColor: theme.colors.black.secondary,
        }}
        onChange={({ item }) => setAmPm(item.value)}
        renderItem={({ label }) => (
          <Text
            style={[
              styles.spinnerTypography,
              { color: theme.colors.white.main },
            ]}
          >
            {label}
          </Text>
        )}
      />
    </View>
  );
};

export default AlarmPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 12,
    marginTop: 20,
  },
  spinnerTypography: {
    fontWeight: "bold",
    fontSize: 28,
  },
});
