import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { BookDTO } from "../../DTOs/bookDTO";
import { useBooks } from "../../hooks/useBooks";
import { Globals } from "../../styles/globals";
import IconButton from "../IconButton";
import { styles } from "./styles";

interface BasketItemProps {
  book: BookDTO;
}

export function BasketItem({ book }: BasketItemProps) {
  const { handleRemoveFromBasket } = useBooks();
  const { navigate } = useNavigation();

  function handleBookPress() {
    navigate("book", { book });
  }

  return (
    <RectButton onPress={handleBookPress} style={styles.container}>
      <Image
        source={
          book.cover
            ? { uri: book.cover.medium }
            : {
                uri: `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`,
              }
        }
        style={styles.cover}
      />

      <View style={styles.info}>
        <Text style={[Globals.whiteText, Globals.font600, Globals.fontSmall]}>
          {book.title}
        </Text>
        <Text
          style={[Globals.mediumPurpleText, Globals.font700, Globals.fontSmall]}
        >
          ${book.price}
        </Text>
      </View>

      <View>
        <IconButton onPress={() => handleRemoveFromBasket(book.key)}>
          <MaterialCommunityIcons
            name="basket-minus"
            size={30}
            color="#e8d7f1"
          />
        </IconButton>
      </View>
    </RectButton>
  );
}
