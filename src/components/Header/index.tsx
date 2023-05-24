import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <EvilIcons name="search" size={30} color="#808080" />
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor="#808080"
        />
      </View>
    </View>
  );
}
