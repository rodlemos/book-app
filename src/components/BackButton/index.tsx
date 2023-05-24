import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { styles } from "./styles";

export function BackButton() {
  const { goBack } = useNavigation();

  function handleBack() {
    goBack();
  }

  return (
    <BorderlessButton style={styles.container}>
      <Entypo
        name="chevron-left"
        size={30}
        color="white"
        onPress={handleBack}
      />
    </BorderlessButton>
  );
}
