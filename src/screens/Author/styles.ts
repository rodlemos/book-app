import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e273c",
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  headerWrapper: {
    flexDirection: "row",
    gap: 12,
  },
  photo: {
    width: 110,
    height: 110,
    borderRadius: 60,
  },
  items: {
    flexDirection: "row",
    gap: 24,
    marginVertical: 8,
  },
  item: {
    alignItems: "center",
  },
  cta: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  cover: {
    width: 88,
    aspectRatio: 5 / 6,
    borderRadius: 8,
    resizeMode: "contain",
  },
});
