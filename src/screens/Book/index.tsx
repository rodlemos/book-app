import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Image, ImageBackground, Platform, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BookDTO } from "../../DTOs/bookDTO";
import { AuthorsDisplay } from "../../components/AuthorsDisplay";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { CategoryDisplay } from "../../components/CategoryDisplay";
import IconButton from "../../components/IconButton";
import { authors, bookData } from "../../data";
import { useBooks } from "../../hooks/useBooks";
import { Globals } from "../../styles/globals";
import { addBookData } from "../../utils/addBookData";
import { getBooks } from "../../utils/getBooks";
import { styles } from "./styles";

interface Params {
  book: BookDTO;
}

export default function Book() {
  const [related, setRelated] = useState([]);
  const [active, setActive] = useState(false);
  const { handleAddToBasket, handleSaveBookToggle, saved } = useBooks();
  const route = useRoute();
  const { book } = route.params as Params;
  const { top } = useSafeAreaInsets();
  const ref = useRef();

  function handleSave(book: BookDTO) {
    handleSaveBookToggle(book);
  }

  useEffect(() => {
    async function fetchBooks() {
      const results = await getBooks(bookData.recommended.ids);
      const booksData = addBookData(results, bookData.recommended.info);

      setRelated(booksData);
    }
    fetchBooks();
  }, []);

  useEffect(() => {
    const isSaved = saved.find((item) => item.key === book.key);
    if (isSaved) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [saved]);

  return (
    <View style={Globals.background}>
      <ImageBackground
        source={{
          uri: book.cover
            ? book.cover.medium
            : `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`,
        }}
        blurRadius={Platform.OS === "ios" ? 6 : 3}
        style={[styles.bg, { paddingTop: top }]}
        imageStyle={{ resizeMode: "cover" }}
      >
        <View style={styles.overlay} />

        <View style={styles.header}>
          <BackButton />
          <IconButton onPress={() => handleSave(book)}>
            <MaterialIcons
              name="favorite"
              size={30}
              color={active ? "#D9BDE8" : "#7b7b7b"}
            />
          </IconButton>
        </View>

        <Image
          source={{
            uri: book.cover
              ? book.cover.medium
              : `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`,
          }}
          style={styles.bookCover}
        />

        <Text
          style={[
            styles.bookTitle,
            Globals.whiteText,
            Globals.fontMedium,
            Globals.font600,
          ]}
        >
          {book.title}
        </Text>
        <Text style={[Globals.font500, Globals.lightGrayText]}>
          {book.authors[0].name}
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.info}
        >
          <View style={styles.infoItem}>
            <FontAwesome name="star" size={16} color="#F1CB61" />
            <Text style={Globals.lightPurpleText}>{book.rate}</Text>
          </View>

          {book.genres.map((genre) => (
            <View style={styles.infoItem} key={genre}>
              <Text style={Globals.lightPurpleText}>{genre}</Text>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>

      <View style={styles.description}>
        <ScrollView showsVerticalScrollIndicator={false} ref={ref}>
          <Text
            style={[
              styles.title,
              Globals.font700,
              Globals.fontLarge,
              Globals.whiteText,
            ]}
          >
            Overview
          </Text>

          {book.resume.map((paragraph, index) => (
            <Text key={index} style={[styles.details, Globals.whiteText]}>
              {paragraph}
            </Text>
          ))}

          <View style={styles.buyContainer}>
            <Text
              style={[
                Globals.fontXL,
                Globals.font700,
                Globals.mediumPurpleText,
              ]}
            >
              ${book.price}
            </Text>
            <Button
              title="Add to basket"
              icon={<Entypo name="shopping-basket" size={24} color="white" />}
              onPress={() => handleAddToBasket(book)}
            />
          </View>

          <CategoryDisplay
            category="Related books"
            books={related}
            scroll={ref}
          />

          <AuthorsDisplay authors={authors} />
        </ScrollView>
      </View>
    </View>
  );
}
