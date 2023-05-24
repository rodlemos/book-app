import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { FlatList, RectButton } from "react-native-gesture-handler";
import { BookDTO } from "../../DTOs/bookDTO";
import { Button } from "../../components/Button";
import EmptyList from "../../components/EmptyList";
import { Header } from "../../components/Header";
import IconButton from "../../components/IconButton";
import { useBooks } from "../../hooks/useBooks";
import { Globals } from "../../styles/globals";
import { styles } from "./styles";

export default function WishList() {
  const { saved, handleClearSaved, handleUnsaveBook } = useBooks();
  const { navigate } = useNavigation();

  function handleBookPress(book: BookDTO) {
    navigate("book", { book });
  }

  return (
    <View style={Globals.background}>
      <Header />

      <Text
        style={[
          styles.title,
          Globals.font700,
          Globals.fontXL,
          Globals.whiteText,
        ]}
      >
        Wish list
      </Text>

      <View style={styles.buttonWrapper}>
        <Button
          title="Clear list"
          icon={<Octicons name="repo-deleted" size={24} color="white" />}
          onPress={handleClearSaved}
        />
      </View>

      <FlatList
        data={saved}
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 8,
          paddingBottom: 24,
        }}
        ListEmptyComponent={<EmptyList />}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <RectButton
            onPress={() => handleBookPress(item)}
            style={styles.bookItem}
          >
            <Image
              source={
                item.cover
                  ? { uri: item.cover.medium }
                  : {
                      uri: `https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`,
                    }
              }
              style={styles.bookCover}
            />

            <View style={styles.bookInfo}>
              <Text
                style={[
                  Globals.font600,
                  Globals.fontMedium,
                  Globals.lightPurpleText,
                ]}
              >
                {item.title}
              </Text>
              <Text style={[Globals.whiteText, Globals.font500]}>
                {item.authors[0].name}
              </Text>
              <Text
                style={[
                  styles.price,
                  Globals.fontSmall,
                  Globals.font700,
                  Globals.mediumPurpleText,
                ]}
              >
                {item.price}
              </Text>
            </View>

            <IconButton onPress={() => handleUnsaveBook(item.key)}>
              <MaterialCommunityIcons
                name="heart-broken"
                size={30}
                color="#D9BDE8"
              />
            </IconButton>
          </RectButton>
        )}
      />
    </View>
  );
}
