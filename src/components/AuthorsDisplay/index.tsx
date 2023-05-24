import { Entypo, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { AuthorDTO } from "../../DTOs/authorDTO";
import { Globals } from "../../styles/globals";
import { styles } from "./styles";

interface Props {
  authors: {
    id: string;
    name: string;
    books: string;
    rate: string;
  }[];
  darkText?: boolean;
}

export function AuthorsDisplay({ authors, darkText }: Props) {
  const { navigate } = useNavigation();

  function handlePress(author: AuthorDTO) {
    navigate("author", { author });
  }

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          Globals.fontLarge,
          Globals.font700,
          Globals.whiteText,
          darkText && Globals.blackText,
        ]}
      >
        Authors
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
      >
        {authors.map((author) => (
          <RectButton
            onPress={() => handlePress(author)}
            style={styles.authorWrapper}
            key={author.id}
          >
            <Image
              source={{
                uri: `https://covers.openlibrary.org/a/olid/${author.id}-M.jpg`,
              }}
              style={styles.photo}
            />

            <View style={styles.info}>
              <Text
                style={[Globals.fontMedium, Globals.font600, Globals.whiteText]}
              >
                {author.name}
              </Text>

              <View style={styles.booksWrapper}>
                <FontAwesome name="star" size={16} color="#F1CB61" />
                <Text style={[Globals.mediumGray, Globals.font500]}>
                  {author.rate}
                </Text>
              </View>

              <View style={styles.booksWrapper}>
                <Entypo name="book" size={20} color="#c7c7c7" />
                <Text style={[Globals.mediumGray, Globals.font500]}>
                  {author.books} Books
                </Text>
              </View>
            </View>
          </RectButton>
        ))}
      </ScrollView>
    </View>
  );
}
