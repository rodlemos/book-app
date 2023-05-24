import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bookItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
  },
  bookCover: {
    width: 90,
    aspectRatio: 4 / 6,
    borderRadius: 8,
  },
  authorPhoto: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  booksWrapper: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  bookInfo: {
    flex: 1,
    alignSelf: "flex-start",
  },
  footer: {
    marginTop: 12,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  rate: {
    flexDirection: "row",
    gap: 4,
  },
  price: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 40,
  },
});
