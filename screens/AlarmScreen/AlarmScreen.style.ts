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
    marginBottom: 16,
  },
  headerBtn: {
    marginTop: 20,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  edit: {
    fontSize: 16,
    fontWeight: "500",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  delete: {
    fontSize: 16,
    fontWeight: "500",
    color: "red",
  },
  card: {
    marginBottom: 12,
    borderRadius: 12,
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
