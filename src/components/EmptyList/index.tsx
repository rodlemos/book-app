import React from "react";
import { Text, View } from "react-native";
import { Globals } from "../../styles/globals";
import { styles } from "./styles";

export default function EmptyList() {
  return (
    <View style={styles.container}>
      <Text style={[Globals.fontMedium, Globals.lightGrayText]}>
        No items yet
      </Text>
    </View>
  );
}
