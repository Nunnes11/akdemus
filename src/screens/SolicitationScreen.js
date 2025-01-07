import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from "react-native";
import { saveSolicitation, getSolicitations } from "../services/dataService";

export default function SolicitationScreen() {
  const [term, setTerm] = useState("");
  const [solicitations, setSolicitations] = useState([]);

  // Função para carregar as solicitações
  const loadSolicitations = async () => {
    try {
      const data = await getSolicitations();
      setSolicitations(data);
    } catch (error) {
      console.error("Erro ao carregar as solicitações:", error);
    }
  };

  // Carregar as solicitações ao montar a tela
  useEffect(() => {
    loadSolicitations();
  }, []);

  // Função para enviar um novo termo
  const handleSend = async () => {
    if (!term.trim()) {
      Alert.alert("Erro", "Por favor, digite um termo válido.");
      return;
    }

    try {
      const newSolicitation = {
        id: Date.now(), // Usando timestamp como ID único
        term,
        date: new Date().toISOString(),
      };

      await saveSolicitation(newSolicitation);

      Alert.alert("Sucesso", "Sua solicitação foi enviada com sucesso!");
      setTerm(""); // Limpa o campo de texto
      loadSolicitations(); // Recarrega a lista de solicitações
    } catch (error) {
      Alert.alert("Erro", "Não foi possível enviar sua solicitação. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicite um Termo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o termo desejado"
        value={term}
        onChangeText={setTerm}
      />
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Enviar Solicitação</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Termos Solicitados:</Text>
      <FlatList
        data={solicitations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.termContainer}>
            <Text style={styles.termText}>{item.term}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma solicitação encontrada.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },

  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
  },

  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 18
  }
});
