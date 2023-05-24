import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthorDTO } from "../../DTOs/authorDTO";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { CategoryDisplay } from "../../components/CategoryDisplay";
import { Highlight } from "../../components/Highlight";
import { authorData } from "../../data";
import { Globals } from "../../styles/globals";
import { addBookData } from "../../utils/addBookData";
import { getBooks } from "../../utils/getBooks";
import { styles } from "./styles";

interface Params {
  author: AuthorDTO;
}

export default function Author() {
  const [trends, setTrends] = useState([]);
  const [sale, setSale] = useState([]);
  const [active, setActive] = useState(false);
  const route = useRoute();
  const { author } = route.params as Params;
  const { top } = useSafeAreaInsets();

  function handleToggle() {
    setActive((prevState) => !prevState);
  }

  useEffect(() => {
    async function fetchBooks() {
      const trendsResult = await getBooks(authorData[author.id].trends.ids);
      const trendsData = addBookData(
        trendsResult,
        authorData[author.id].trends.info
      );

      const salesResult = await getBooks(authorData[author.id].sales.ids);
      const salesData = addBookData(
        salesResult,
        authorData[author.id].sales.info
      );

      setTrends(trendsData);
      setSale(salesData);
    }

    fetchBooks();
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: top }]}>
        <View style={{ marginBottom: 12 }}>
          <BackButton />
        </View>

        <View style={styles.headerWrapper}>
          <Image
            source={{
              uri: `https://covers.openlibrary.org/a/olid/${author.id}-M.jpg`,
            }}
            style={styles.photo}
          />

          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <Text
              style={[Globals.whiteText, Globals.font700, Globals.fontLarge]}
            >
              {author.name}
            </Text>

            <View style={styles.items}>
              <View style={styles.item}>
                <Text
                  style={[
                    Globals.mediumPurpleText,
                    Globals.font600,
                    Globals.fontMedium,
                  ]}
                >
                  {author.books}
                </Text>
                <Text style={[Globals.lightGrayText, Globals.font500]}>
                  Books
                </Text>
              </View>

              <View style={styles.item}>
                <Text
                  style={[
                    Globals.mediumPurpleText,
                    Globals.font600,
                    Globals.fontMedium,
                  ]}
                >
                  {author.rate}
                </Text>
                <Text style={[Globals.lightGrayText, Globals.font500]}>
                  Score
                </Text>
              </View>

              <Button
                title="follow"
                icon={
                  <MaterialIcons
                    name="favorite"
                    size={25}
                    color={active ? "#D9BDE8" : "#7b7b7b"}
                  />
                }
                onPress={handleToggle}
              />
            </View>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <Highlight
          gradient={authorData[author.id].highlight.gradient}
          data={authorData[author.id].highlight}
        />

        <CategoryDisplay category="Trends" books={trends} />
        <CategoryDisplay category="On Sale" books={sale} />
      </ScrollView>
    </View>
  );
}
