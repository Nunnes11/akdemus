import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CurrentDate from '../components/CurrentDate';
import SearchBar from '../components/SearchBar';

export default function HomeScreen() {
  const handleSearch = (term) => {
    console.log(`Termo pesquisado: ${term}`);
  };

  return (
    <View style={styles.container}>
      {/* Logo substituindo o título */}
      <Image
        source={require('../../assets/images/logo_tela_principal.png')} // Altere para o caminho da logo
        style={styles.logo}
      />
      {/* Campo de busca */}
      <SearchBar onSearch={handleSearch} />
      {/* Data posicionada abaixo do campo de busca */}
      <CurrentDate />
      {/* Seção de termos pesquisados */}
      <Text style={styles.subtitle}>Termos pesquisados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#5e8dd3',
  },

  logo: {
    width: 222, // Ajuste o tamanho conforme necessário
    height: 50,
    marginBottom: 20,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },

  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#fff',
  },
});

