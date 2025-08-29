import Slider from "@react-native-community/slider";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { useState } from "react";

const SliderSound = () => {
  //theme
  const { theme } = useTheme();
  //volum
  const [volumn, setVolumn] = useState(0.5);

  return (
    <View style={[styles.sliderContainer]}>
      <MaterialCommunityIcons
        name={volumn == 0 ? "volume-off" : "volume-high"}
        color={volumn == 0 ? theme.colors.white[500] : theme.colors.white.main}
        size={32}
      />
      <Slider
        style={{ width: "90%", height: 40 }}
        minimumValue={0}
        maximumValue={1}
        step={0.05}
        minimumTrackTintColor={theme.colors.white.main}
        maximumTrackTintColor={theme.colors.black.main}
        thumbTintColor={theme.colors.green[100]}
        value={volumn}
        onValueChange={async (value) => {
          setVolumn(value);
        }}
      />
    </View>
  );
};

export default SliderSound;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    borderRadius: 8,
  },
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
});
