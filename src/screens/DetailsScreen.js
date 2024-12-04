import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function DetailsScreen() {
  const route = useRoute();
  const { term } = route.params; // Obtém o termo recebido via navegação

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{term.term}</Text>
      {term.definition.map((paragraph, index) => (
        <Text key={index} style={styles.content}>
          {paragraph}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
  },
});
