import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    padding: 12,
  },
  header: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  card: {
    marginBottom: 12,
    borderRadius: 16,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  time: {
    fontSize: 22,
    fontWeight: "700",
  },
  repeat: {
    fontSize: 14,
    marginTop: 4,
  },
});
