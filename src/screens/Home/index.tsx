import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import booksImage from "../../assets/books.png";
import { AuthorsDisplay } from "../../components/AuthorsDisplay";
import { CategoryDisplay } from "../../components/CategoryDisplay";
import { Header } from "../../components/Header";
import { authors, homeData } from "../../data";
import { Globals } from "../../styles/globals";
import { addBookData } from "../../utils/addBookData";
import { getBooks } from "../../utils/getBooks";
import { styles } from "./styles";

SplashScreen.preventAutoHideAsync();

export default function Home() {
  const [trends, setTrends] = useState([]);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const trendsResults = await getBooks(homeData.trends.ids);
      const trendsData = addBookData(trendsResults, homeData.trends.info);

      const recommendedResults = await getBooks(homeData.recommended.ids);
      const recommendedData = addBookData(
        recommendedResults,
        homeData.recommended.info
      );

      setTrends(trendsData);
      setRecommended(recommendedData);
      setTimeout(async () => await SplashScreen.hideAsync(), 200);
    }

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={["#c81d77", "#6710c2"]}
          start={[0, 0]}
          end={[1, 0]}
          style={styles.cta}
        >
          <View style={styles.ctaText}>
            <Text
              style={[Globals.whiteText, Globals.font700, Globals.fontSmall]}
            >
              Welcome to Book Town
            </Text>
            <Text style={Globals.lightGrayText}>
              Unlock new worlds, one page at a time. Choose your next jorney
              now!
            </Text>
          </View>

          <Image source={booksImage} style={styles.image} />
        </LinearGradient>

        <CategoryDisplay category="Trends" books={trends} />
        <CategoryDisplay category="You might like" books={recommended} />
        <AuthorsDisplay authors={authors} />
      </ScrollView>
    </View>
  );
}
