import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    marginBottom: 16,
    paddingLeft: 16,
  },
  buttonWrapper: {
    paddingHorizontal: 16,
    alignItems: "flex-end",
    paddingBottom: 12,
  },
  button: {
    backgroundColor: "#a167a5",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  bookItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  bookCover: {
    width: 90,
    aspectRatio: 4 / 6,
    borderRadius: 8,
  },
  bookInfo: {
    flex: 1,
  },
  price: {
    marginTop: 8,
  },
});
