import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useTheme } from "../../hooks/useTheme";

type HeaderCreateAlarmProps = {
  title: string;
  subtitle: string;
};

const HeaderCreateAlarm = ({ title, subtitle }: HeaderCreateAlarmProps) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.colors.white.main }]}>
        {title}
      </Text>
      <Text style={[styles.subtitle, { color: theme.colors.white[500] }]}>
        {subtitle}"
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
