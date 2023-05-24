import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(14, 39, 60, 0.25)",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  bookCover: {
    width: 110,
    aspectRatio: 4 / 6,
    borderRadius: 8,
  },
  bookTitle: {
    marginTop: 6,
    textAlign: "center",
  },
  info: {
    gap: 8,
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#a167a5",
    borderRadius: 6,
  },
  description: {
    width: "100%",
    height: "50%",
    backgroundColor: "#0e273c",
    borderTopEndRadius: 28,
    borderTopStartRadius: 28,
    marginTop: -24,
    overflow: "hidden",
  },
  details: {
    marginTop: 8,
    paddingHorizontal: 16,
  },
  title: {
    marginTop: 24,
    paddingLeft: 16,
  },
  buyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 24,
  },
});
