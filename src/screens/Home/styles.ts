import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e273c",
  },
  cta: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    marginHorizontal: 16,
  },
  ctaText: {
    flex: 1,
    gap: 4,
    paddingRight: 8,
  },
  image: {
    width: 96,
    aspectRatio: 4 / 5,
    resizeMode: "contain",
    marginTop: -30,
  },
});
