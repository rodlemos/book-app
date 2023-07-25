import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { BookDTO } from "../../DTOs/bookDTO";
import { Globals } from "../../styles/globals";
import { styles } from "./styles";
import { StringFormat } from "../../utils/StringFormat";

interface Props {
  category: string;
  books: BookDTO[];
  darkText?: boolean;
  scroll?: React.MutableRefObject<ScrollView>;
}

export function CategoryDisplay({ books, category, darkText, scroll }: Props) {
  const { navigate } = useNavigation();

  function handleBookPress(book: BookDTO) {
    if (scroll) {
      scroll.current.scrollTo({ y: 0, animated: true });
    }

    navigate("book", { book });
  }

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.category,
          Globals.font700,
          Globals.fontLarge,
          Globals.whiteText,
          darkText && Globals.blackText,
        ]}
      >
        {category}
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
      >
        {books?.map((book) => (
          <RectButton
            onPress={() => handleBookPress(book)}
            style={styles.bookWrapper}
            key={book.key}
          >
            <Image
              source={{
                uri: book.cover.medium,
              }}
              style={styles.image}
            />
            <Text
              style={[
                Globals.fontSmall,
                Globals.font500,
                Globals.whiteText,
                darkText && Globals.darkBlueText,
              ]}
            >
              {StringFormat.charLimit(book.title)}
            </Text>
            <View style={styles.infoWrapper}>
              <View>
                <View style={styles.rate}>
                  <FontAwesome name="star" size={16} color="#F1CB61" />
                  <Text style={Globals.whiteText}>{book.rate}</Text>
                </View>
              </View>
              <Text
                style={[
                  Globals.mediumPurpleText,
                  Globals.fontMedium,
                  Globals.font500,
                ]}
              >
                ${book.price}
              </Text>
            </View>
          </RectButton>
        ))}
      </ScrollView>
    </View>
  );
}
