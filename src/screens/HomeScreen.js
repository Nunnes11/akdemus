import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CurrentDate from "../components/CurrentDate";
import SearchBar from "../components/SearchBar";
import TermsBox from "../components/TermsBox";

export default function HomeScreen() {
  const navigation = useNavigation();

  const terms = ["Ataraxia"]; // Lista inicial de termos

  const handleTermPress = (term) => {
    navigation.navigate("DetailsScreen", { term });
  };

  return (
    <View style={styles.container}>
      {/* Logo substituindo o título */}
      <Image
        source={require("../../assets/images/logo_tela_principal.png")}
        style={styles.logo}
      />
      {/* Campo de busca */}
      <SearchBar onSearch={(term) => console.log(`Termo pesquisado: ${term}`)} />
      {/* Data posicionada abaixo do campo de busca */}
      <CurrentDate />
      {/* Seção de termos pesquisados */}
      <Text style={styles.subtitle}>Termos pesquisados</Text>
      <TermsBox terms={terms} onTermPress={handleTermPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#5e8dd3",
  },
  logo: {
    width: 222,
    height: 50,
    marginBottom: 20,
    marginLeft: 10,
    alignSelf: "flex-start",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    color: "#fff",
  },
});


