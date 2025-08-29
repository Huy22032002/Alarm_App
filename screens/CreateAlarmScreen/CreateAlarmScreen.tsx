import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useCreateAlarm } from "./CreateAlarm.hooks";
import { styles } from "./CreateAlarm.style";
import AlarmSpinner from "../../components/Alarm/AlarmSpinner";
import HeaderCreateAlarm from "../../components/Header/HeaderCreateAlarm";
import RepeatAlarm from "../../components/Alarm/RepeatAlarm";
import SoundSetting from "../../components/Sound/SoundSetting";
import { useRoute } from "@react-navigation/native";

const CreateAlarmScreen = () => {
  const { theme, date, setDate } = useCreateAlarm();

  //params
  const route = useRoute();
  const { sound } = route.params || {};

  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={[`${theme.colors.green.bg}`, `${theme.colors.green[100]}`]} // bạn có thể thêm nhiều màu
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.safeContainer}
      >
        <SafeAreaView style={[styles.safeContainer]}>
          {/* header */}
          <HeaderCreateAlarm
            title="New Alarm"
            subtitle="Customize your alarm here!"
          />
          {/* date time picker */}
          <AlarmSpinner />
          {/* repeat */}
          <RepeatAlarm />
          {/* sounds */}
          <SoundSetting sound={sound} />
          {/* Challenges */}
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaProvider>
  );
};

export default CreateAlarmScreen;
