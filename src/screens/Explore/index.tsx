import { AntDesign } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { FlatList, RectButton } from "react-native-gesture-handler";
import { ExploreCard } from "../../components/ExploreCard";
import { Header } from "../../components/Header";
import api from "../../services/api";
import { Globals } from "../../styles/globals";
import { formatGenres } from "../../utils/formatGenres";
import SubjectSelectModal from "../SubjectSelectModal";
import { styles } from "./styles";

export default function Explore() {
  const [loading, setLoading] = useState(true);
  const [subject, setSubject] = useState("adventure");
  const [books, setBooks] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const formattedGenre = formatGenres(subject);

  function handleModalToggle() {
    setOpenModal((prevState) => !prevState);
  }

  const handleSelectSubject = useCallback((subject: string) => {
    setSubject(subject);
  }, []);

  useEffect(() => {
    async function searchBooks() {
      const response = await api.get(`/subjects/${subject}.json`, {
        params: {
          limit: "6",
        },
      });
      const result = response.data;

      const books = result.works.map((item) => ({
        key: item.key,
        title: item.title,
        authors: item.authors,
        genres: item.subject.splice(0, 4),
        cover_id: item.cover_id,
        resume: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum enim provident consectetur quae, adipisci asperiores ducimus veritatis, nihil eum esse blanditiis vel earum animi explicabo, fugit neque molestias culpa deserunt dolorum quaerat eveniet autem. Labore.",
        ],
        price: "9.90",
        rate: "4.3",
      }));

      setBooks(books);
      setLoading(false);
    }

    searchBooks();
  }, [subject]);

  return (
    <View style={Globals.background}>
      <Header />

      <View style={styles.options}>
        <Text style={[Globals.whiteText, Globals.font700, Globals.fontXL]}>
          Explore
        </Text>

        <RectButton style={styles.subject} onPress={handleModalToggle}>
          <Text style={[Globals.font500, Globals.mediumPurpleText]}>
            {formattedGenre}
          </Text>

          <AntDesign name="caretdown" size={16} color="#a167a5" />
        </RectButton>
      </View>

      {loading ? (
        <ActivityIndicator
          size={"large"}
          color={"#d3bccc"}
          style={styles.loading}
        />
      ) : (
        <FlatList
          nestedScrollEnabled
          data={books}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{ gap: 8 }}
          renderItem={({ item }) => <ExploreCard book={item} />}
        />
      )}

      <SubjectSelectModal
        isVisible={openModal}
        onClose={handleModalToggle}
        onChange={handleSelectSubject}
      />
    </View>
  );
}
