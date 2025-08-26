import * as React from "react";
import { View, FlatList } from "react-native";
import { Card, Switch, Text } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import Toggle from "react-native-toggle-element";

//useHook
import { useAlarmScreen } from "./AlarmScreen.hooks";
//style
import { styles } from "./AlarmScreen.style";

const AlarmScreen = () => {
  const { listAlarm, theme, toggleSwitch, toggleValue, setToggleValue } =
    useAlarmScreen();

  //flast list
  const renderItem = ({ item }: { item: any }) => {
    return (
      <Card
        key={item.id}
        style={[styles.card, { backgroundColor: theme.colors.green[500] }]}
        mode="contained"
      >
        <Card.Content style={styles.cardContent}>
          <View>
            <Text style={[styles.time, { color: theme.colors.white.main }]}>
              {item.time}
            </Text>
            <Text style={[styles.repeat, { color: theme.colors.white.main }]}>
              {item.repeat}
            </Text>
          </View>
          <Toggle
            value={toggleValue}
            onPress={() => setToggleValue(!!toggleValue)}
            thumbButton={
              {
                // inActiveBackgroundColor: theme.colors.green[900],
                // activeBackgroundColor: theme.colors.green[100],
              }
            }
            trackBar={{
              width: 68,
              height: 36,
              // activeBackgroundColor: theme.colors.white.main,
              // inActiveBackgroundColor: theme.colors.grey.main,
            }}
          />
        </Card.Content>
      </Card>
    );
  };

  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={[`${theme.colors.green.bg}`, `${theme.colors.green[900]}`]} // bạn có thể thêm nhiều màu
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.safeContainer}
      >
        <SafeAreaView style={[styles.safeContainer]}>
          {/* Header */}
          <View style={styles.header}>
            <Text
              style={[
                styles.title,
                {
                  color: theme.colors.white.main,
                  fontFamily: theme.fonts.medium.fontFamily,
                },
              ]}
            >
              Sleep Alarms
            </Text>
          </View>
          {/* button */}
          <View style={styles.headerBtn}>
            <Text style={[styles.edit, { color: theme.colors.white.main }]}>
              Edit
            </Text>
            <Text style={styles.delete}>Delete</Text>
          </View>

          {/* list Alarm */}
          <FlatList
            data={listAlarm}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaProvider>
  );
};

export default AlarmScreen;
