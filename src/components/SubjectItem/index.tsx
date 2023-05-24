import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Globals } from "../../styles/globals";
import { formatGenres } from "../../utils/formatGenres";
import { styles } from "./styles";

interface Props {
  subject: string;
  current: string;
  onSelect: (subject: string) => void;
}

export function SubjectItem({ subject, current, onSelect }: Props) {
  function handleSelect(subject: string) {
    onSelect(subject);
  }

  const formattedGenre = formatGenres(subject);

  return (
    <RectButton activeOpacity={0.6} onPress={() => handleSelect(subject)}>
      <LinearGradient
        colors={["#4a306d", "#d3bccc"]}
        start={[0, 1]}
        end={[1, 0]}
        style={[styles.container, current === subject && styles.active]}
      >
        <Text style={[Globals.whiteText, Globals.font500, Globals.fontSmall]}>
          {formattedGenre}
        </Text>
      </LinearGradient>
    </RectButton>
  );
}
