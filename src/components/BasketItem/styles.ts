import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 4,
    flexDirection: "row",
    borderRadius: 12,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  cover: {
    width: 56,
    aspectRatio: 4 / 6,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 12,
  },
});
