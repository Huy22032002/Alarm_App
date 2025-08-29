import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useTheme } from "../../hooks/useTheme";
import { Text } from "react-native-paper";
import React, { useState } from "react";

//navigation
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigators";

type HeaderProps = {
  title: string;
  prevScreen: string;
  selectedSound?: string | null;
};

const Header = ({ title, prevScreen, selectedSound }: HeaderProps) => {
  //theme
  const { theme } = useTheme();
  //navigation
  type RootNav = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<RootNav>();

  return (
    <View style={[styles.container]}>
      <MaterialCommunityIcons
        onPress={() => {
          if (prevScreen === "CreateAlarm") {
            navigation.navigate("MainTabs", {
              screen: prevScreen,
              params: { sound: selectedSound },
            });
          }
        }}
        color={theme.colors.white[500]}
        name="chevron-left"
        size={44}
        style={{ position: "absolute", left: 8, top: 8 }}
      />
      <Text
        style={[
          theme.textStyles.h2,
          { marginTop: 12, textAlign: "center", flex: 1 },
        ]}
      >
        {title}
      </Text>

      {/* {icon} */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
  },
});
