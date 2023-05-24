import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Text, View } from "react-native";
import {
  BorderlessButton,
  FlatList,
  gestureHandlerRootHOC,
} from "react-native-gesture-handler";
import { Button } from "../../components/Button";
import { SubjectItem } from "../../components/SubjectItem";
import { Globals } from "../../styles/globals";
import { styles } from "./styles";
import { genres } from "../../data";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  onChange: (subject: string) => void;
}

export default function SubjectSelectModal({
  isVisible,
  onClose,
  onChange,
}: Props) {
  const [current, setCurrent] = useState("");

  function handleClose() {
    onClose();
  }

  function handleCurrent(subject: string) {
    setCurrent(subject);
  }

  function handleConfirm() {
    onChange(current);
    onClose();
  }

  const SelectModal = gestureHandlerRootHOC(() => (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.header}>
          <Text style={[Globals.whiteText, Globals.fontXL, Globals.font700]}>
            Select a subject:
          </Text>

          <BorderlessButton onPress={handleClose}>
            <FontAwesome name="close" size={30} color="white" />
          </BorderlessButton>
        </View>

        <FlatList
          data={genres}
          renderItem={({ item }) => (
            <SubjectItem
              current={current}
              subject={item}
              onSelect={handleCurrent}
            />
          )}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 8, paddingVertical: 24 }}
        />

        <View style={styles.footer}>
          <Button title="Confirm" large onPress={handleConfirm} />
        </View>
      </View>
    </View>
  ));

  return (
    <Modal
      statusBarTranslucent
      transparent
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <SelectModal />
    </Modal>
  );
}
