import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { BookDTO } from "../../DTOs/bookDTO";
import { useBooks } from "../../hooks/useBooks";
import { Globals } from "../../styles/globals";
import IconButton from "../IconButton";
import { styles } from "./styles";

interface Props {
  book: BookDTO;
}

export function ExploreCard({ book }: Props) {
  const [savedBook, setSavedBook] = useState(false);
  const { navigate } = useNavigation();
  const { handleSaveBookToggle, saved } = useBooks();

  function handleRedirect(book: BookDTO) {
    navigate("book", { book });
  }

  function handleSave(book: BookDTO) {
    handleSaveBookToggle(book);
  }

  useEffect(() => {
    const isSaved = saved.find((item) => item.key === book.key);
    if (isSaved) {
      setSavedBook(true);
    } else {
      setSavedBook(false);
    }
  }, [saved]);

  return (
    <RectButton onPress={() => handleRedirect(book)} style={styles.bookItem}>
      <Image
        source={{
          uri: `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`,
        }}
        style={styles.bookCover}
      />

      <View style={styles.bookInfo}>
        <View>
          <Text
            style={[
              Globals.font600,
              Globals.fontMedium,
              Globals.lightPurpleText,
            ]}
          >
            {book.title}
          </Text>

          <Text style={[Globals.whiteText, Globals.font500]}>
            {book.authors[0].name}
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.rate}>
            <FontAwesome name="star" size={16} color="#F1CB61" />
            <Text style={Globals.whiteText}>4.6</Text>
          </View>

          <Text
            style={[
              styles.price,
              Globals.fontSmall,
              Globals.font700,
              Globals.mediumPurpleText,
            ]}
          >
            $9.90
          </Text>
        </View>
      </View>

      <IconButton onPress={() => handleSave(book)} style={{ padding: 4 }}>
        <MaterialIcons
          name="favorite"
          size={30}
          color={savedBook ? "#D9BDE8" : "#7b7b7b"}
        />
      </IconButton>
    </RectButton>
  );
}
