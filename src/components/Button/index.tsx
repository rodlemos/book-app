import React from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Globals } from "../../styles/globals";
import { styles } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  icon?: React.ReactElement;
  pill?: boolean;
  large?: boolean;
  disabled?: boolean;
}

export function Button({
  color,
  title,
  icon,
  pill = false,
  large,
  disabled = false,
  ...rest
}: Props) {
  return (
    <RectButton
      {...rest}
      style={[
        styles(color, icon).container,
        pill && styles(color).pill,
        large && styles().large,
        disabled && styles().disabled,
      ]}
      rippleColor={"#d3bccc"}
    >
      {icon}
      <Text
        style={[
          Globals.whiteText,
          Globals.font500,
          pill && Globals.mediumPurpleText,
          large && Globals.fontSmall,
        ]}
      >
        {title}
      </Text>
    </RectButton>
  );
}
