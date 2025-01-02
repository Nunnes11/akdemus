import React from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function DetailsScreen() {
  const route = useRoute();
  const { term } = route.params; // Obtém o termo recebido via navegação

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{term.term}</Text>

      {term.subtitle && <Text style={styles.subtitle}>{term.subtitle}</Text>}

      {term.definition.map((paragraph, index) => (
        <Text key={index} style={styles.content}>
          {paragraph}
        </Text>
      ))}

      <View style={styles.divider} />

      {term.source && (
        <View>
          <Text style={styles.sectionTitle}>Fonte</Text>
          <Text style={styles.source}>{term.source}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ADD8E6",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },

  subtitle: {
    marginTop:-15,
    marginBottom: 10,
    fontWeight:'bold'
  },

  content: {
    fontSize: 14,
    textAlign:'justify',
    marginBottom: 8,
  },

  divider: {
    //borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 16,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },

  source: {
    fontSize: 14,
    lineHeight: 20,
  },
});
