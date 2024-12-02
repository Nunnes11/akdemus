import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TermsBox({ terms, onTermPress }) {
  return (
    <View style={styles.container}>
      {terms.map((term, index) => (
        <TouchableOpacity key={index} onPress={() => onTermPress(term)}>
          <Text style={styles.term}>{term}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#82aaff", // Fundo da caixa
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  term: {
    fontSize: 16,
    color: "#0000ff", // Azul para o texto do termo
    marginVertical: 5,
    textDecorationLine: "underline", // Indica link clicável
    textAlign: "center",
  },
});
