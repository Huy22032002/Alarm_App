import { StyleSheet, View } from "react-native";
import SliderSound from "../Sound/SliderSound";
import { useTheme } from "../../hooks/useTheme";
import { Text } from "react-native-paper";
import Toggle from "react-native-toggle-element";
import { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
//navigation
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigators";

const SoundSetting = ({ sound }) => {
  //nabigation
  type RootStackNav = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<RootStackNav>();

  //theme
  const { theme } = useTheme();
  //toggle
  const [toggleValue, setToggleValue] = useState<boolean>(false);

  //SLIDER

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.green[700] }]}
    >
      {/* slider */}
      <SliderSound />
      {/* sound default */}
      <View style={[styles.soundContainer]}>
        <View style={[styles.leftSoundContainer]}>
          <Text style={[theme.textStyles.h2]}>Sound</Text>
          <Text style={[theme.textStyles.title]}>{sound || "default"}</Text>
        </View>
        <MaterialCommunityIcons
          name="chevron-right"
          size={32}
          color={theme.colors.white[500]}
          onPress={() => navigation.navigate("ListSounds")}
        />
        {/* <View style={[styles.rightContainer]}></View> */}
      </View>

      {/* vibration  */}
      <View style={[styles.vibrationContainer]}>
        <Text style={[theme.textStyles.h2]}>Vibration</Text>
        <Toggle
          value={toggleValue}
          onPress={() => setToggleValue(!!toggleValue)}
          thumbButton={{
            width: 28,
            height: 28,
            radius: 14,
            activeBackgroundColor: theme.colors.white.main,
            inActiveBackgroundColor: theme.colors.white[500],
          }}
          trackBar={{
            width: 56,
            height: 28,
            inActiveBackgroundColor: theme.colors.green[900],
            activeBackgroundColor: theme.colors.green[100],
          }}
          trackBarStyle={{ zIndex: -1 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 20,
    marginTop: 8,
  },
  vibrationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  soundContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  leftSoundContainer: {
    gap: 4,
  },
});

export default SoundSetting;
