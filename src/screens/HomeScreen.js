import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CurrentDate from "../components/CurrentDate";
import SearchBar from "../components/SearchBar";
import TermsBox from "../components/TermsBox";
import termsData from "../../assets/data/terms.json"; // Importa o JSON

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleTermPress = (term) => {
    // Navega para a tela de detalhes, passando os dados do termo
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
      <Text style={styles.subtitle}>Últimas pesquisas</Text>
      <TermsBox terms={termsData} onTermPress={handleTermPress} />

      <Text style={styles.title}>Não encontrou o que buscava?</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SolicitationScreen')}
      >
        <Text style={styles.buttonText}>Solicite um termo</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Deseja contribuir conosco?</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("DefinitionScreen")}
      >
        <Text style={styles.buttonText}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#B0E0E6",
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
    color: "#4682B4",
  },

  title: {
    fontSize:17,
    fontWeight:'bold',
    color:'#4682B4',
    marginTop:30
  },

  button: {
    backgroundColor:'#87CEEB',
    marginRight:120,
    marginTop:10,
    borderRadius:5
  },

  buttonText: {
    color:'#4682B4',
    padding:5,
    textAlign:'center'
  }
});



