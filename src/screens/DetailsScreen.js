import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as FileSystem from "expo-file-system";

export default function DetailsScreen() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const loadFile = async () => {
      try {
        // Caminho correto para acessar o arquivo
        const fileUri = FileSystem.documentDirectory + "assets/data/ataraxia.txt";

        // Verifica se o arquivo existe
        const fileInfo = await FileSystem.getInfoAsync(fileUri);
        if (!fileInfo.exists) {
          throw new Error("Arquivo não encontrado.");
        }

        // Lê o conteúdo do arquivo
        const fileContent = await FileSystem.readAsStringAsync(fileUri);
        setContent(fileContent);
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
    lineHeight: 24,
  },
});






