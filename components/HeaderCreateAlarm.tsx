import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useTheme } from "../hooks/useTheme";

const HeaderCreateAlarm = ({ title, subtitle }) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.colors.white.main }]}>
        {title}
      </Text>
      <Text style={[styles.subtitle, { color: theme.colors.white[500] }]}>
        {subtitle} "Ex: Ring in 23 hours 15 inutes"
      </Text>
    </View>
  );
};

export default HeaderCreateAlarm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
  },
  subtitle: {
    fontSize: 12,
    marginTop: 8,
  },
});
