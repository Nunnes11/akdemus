import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Asset } from "expo-asset";

export default function DetailsScreen() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const loadFile = async () => {
      try {
        // Carrega o arquivo como Asset
        const asset = Asset.fromModule(require("../../assets/data/ataraxia.txt"));
        await asset.downloadAsync(); // Garante que o arquivo foi baixado

        // Lê o conteúdo do arquivo como texto
        const response = await fetch(asset.localUri || asset.uri);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error("Erro ao carregar o arquivo:", error);
        setContent("Erro ao carregar o arquivo.");
      }
    };

    loadFile();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ataraxia</Text>
      <Text style={styles.content}>{content}</Text>
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