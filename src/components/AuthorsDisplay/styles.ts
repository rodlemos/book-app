import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  title: {
    marginBottom: 16,
    paddingLeft: 16,
  },
  authorWrapper: {
    width: 240,
    backgroundColor: "#4a306d",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  booksWrapper: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  info: {
    flex: 1,
  },
});
