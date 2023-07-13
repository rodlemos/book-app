import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { BasketItem } from "../../components/BasketItem";
import { Button } from "../../components/Button";
import { useBooks } from "../../hooks/useBooks";
import { Globals } from "../../styles/globals";
import { styles } from "./styles";

export default function Basket() {
  const [total, setTotal] = useState("$0.00");
  const [enabled, setEnabled] = useState(false);
  const { basketBooks, handleClearBasket } = useBooks();

  function handleConfirm() {
    Alert.alert("Purchase Confirmed");
  }

  useEffect(() => {
    const priceValues = basketBooks?.map((item) => Number(item.price) * 100);
    const sum = priceValues.reduce((acc, cur) => acc + cur, 0) / 100;
    const formattedTotal = sum.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    setTotal(formattedTotal);
  }, [basketBooks]);

  useEffect(() => {
    if (total === "$0.00") {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [total]);

  return (
    <View style={[styles.container, Globals.background]}>
      <Text
        style={[
          styles.title,
          Globals.fontXL,
          Globals.whiteText,
          Globals.font700,
        ]}
      >
        Your basket
      </Text>

      <View style={styles.buttonWrapper}>
        <Button
          title="Empty basket"
          icon={
            <MaterialCommunityIcons
              name="basket-unfill"
              size={24}
              color="white"
            />
          }
          onPress={handleClearBasket}
        />
      </View>

      <FlatList
        data={basketBooks}
        contentContainerStyle={{ paddingVertical: 8, gap: 8 }}
        style={styles.list}
        renderItem={({ item }) => <BasketItem book={item} />}
      />

      <View style={styles.footer}>
        <View style={styles.total}>
          <Text style={[Globals.whiteText, Globals.fontMedium]}>Total: </Text>
          <Text
            style={[
              Globals.fontMedium,
              Globals.mediumPurpleText,
              Globals.font600,
            ]}
          >
            {total}
          </Text>
        </View>
        <Button
          title="Checkout"
          color={"#a167a5"}
          large
          onPress={handleConfirm}
          enabled={enabled}
          disabled={!enabled}
        />
      </View>
    </View>
  );
}
