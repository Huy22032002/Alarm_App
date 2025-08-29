import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    padding: 12,
  },
  cardContainer: {
    borderRadius: 20,
    marginTop: 16,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardContentRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  flatListContainer: {
    backgroundColor: "red",
  },
});
