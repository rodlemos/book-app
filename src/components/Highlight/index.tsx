import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { Globals } from "../../styles/globals";
import { Button } from "../Button";
import { styles } from "./styles";

interface Props {
  gradient: string[];
  data: {
    id: string;
    title: string;
    subtitle: string;
    info: {
      resume: string[];
      genres: string[];
      price: string;
      rate: string;
    };
  };
  cover?: string;
  src?: ImageSourcePropType;
}

export function Highlight({ gradient, data }: Props) {
  const [book, setBook] = useState();

  useEffect(() => {}, []);

  return (
    <LinearGradient
      colors={gradient}
      start={[0, 0]}
      end={[1, 0]}
      style={styles.container}
    >
      <View style={styles.info}>
        <View>
          <Text style={[Globals.whiteText, Globals.font700, Globals.fontSmall]}>
            {data.title}
          </Text>
          <Text style={Globals.whiteText}>{data.subtitle}</Text>
        </View>

        <Button title="View now" pill />
      </View>

      <Image
        source={{
          uri: `https://covers.openlibrary.org/b/isbn/${data.id}-M.jpg`,
        }}
        style={styles.image}
      />
    </LinearGradient>
  );
}
