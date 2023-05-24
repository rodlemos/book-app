import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
  },
  category: {
    marginBottom: 16,
    paddingLeft: 16,
  },
  bookWrapper: {
    alignItems: "flex-start",
    width: 120,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 6,
    resizeMode: "stretch",
    borderRadius: 8,
  },
  infoWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  rate: {
    flexDirection: "row",
    gap: 4,
  },
});
