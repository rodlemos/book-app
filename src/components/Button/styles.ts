import { StyleSheet } from "react-native";

export const styles = (color?: string, icon?: React.ReactElement) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      paddingHorizontal: 8,
      paddingVertical: 6,
      gap: icon ? 6 : 0,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: color ? color : "#4a306d",
      borderRadius: 8,
    },
    pill: {
      backgroundColor: color ? color : "white",
      borderRadius: 80,
      paddingHorizontal: 12,
    },
    large: {
      paddingVertical: 12,
    },
    disabled: {
      opacity: 0.6,
    },
  });
