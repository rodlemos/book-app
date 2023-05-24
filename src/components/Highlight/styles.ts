import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  info: {
    flex: 1,
    gap: 12,
    alignItems: "flex-start",
    paddingRight: 8,
  },
  image: {
    width: 96,
    aspectRatio: 4 / 6,
    borderRadius: 8,
    resizeMode: "contain",
    marginTop: -30,
  },
});
