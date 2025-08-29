import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import ListSoundScreen from "../screens/ListSoundScreen/ListSoundsScreen";
import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabsParamList>;
  ListSounds: { sound: string | null | undefined };
};

// MainTabsParamList.ts
export type MainTabsParamList = {
  Alarm: undefined;
  CreateAlarm: { sound?: string | null };
  Setting: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="MainTabs">
      <Stack.Screen
        name="MainTabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListSounds"
        component={ListSoundScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
