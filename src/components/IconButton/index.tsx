import React from "react";
import {
  BorderlessButton,
  BorderlessButtonProps,
} from "react-native-gesture-handler";
import { styles } from "./styles";

interface Props extends BorderlessButtonProps {
  children: React.ReactElement;
}

export default function IconButton({ children, ...rest }: Props) {
  return (
    <BorderlessButton style={styles.container} {...rest}>
      {children}
    </BorderlessButton>
  );
}
