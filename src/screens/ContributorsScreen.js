import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";

export default function ContributorsScreen() {
  const [email, setEmail] = useState("");
  const [knowledgeArea, setKnowledgeArea] = useState("");
  const [contributors, setContributors] = useState([]);

  // Função para cadastrar o contribuidor
  const handleRegisterContributor = () => {
    if (!email || !knowledgeArea) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    // Verifica se o e-mail já foi cadastrado
    const existingContributor = contributors.find(
      (contributor) => contributor.email === email
    );

    if (existingContributor) {
      Alert.alert("Erro", "Este e-mail já foi cadastrado.");
      return;
    }

    // Adiciona o novo contribuidor à lista
    const newContributor = { email, knowledgeArea };
    setContributors([...contributors, newContributor]);
    setEmail("");
    setKnowledgeArea("");
    Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Contribuidores</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Área de Conhecimento"
        value={knowledgeArea}
        onChangeText={(text) => setKnowledgeArea(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegisterContributor}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Contribuidores Cadastrados:</Text>
      <FlatList
        data={contributors}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.contributorContainer}>
            <Text style={styles.contributorText}>
              {item.email} - {item.knowledgeArea}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum contribuidor cadastrado.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
  },
  contributorContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  contributorText: {
    fontSize: 16,
  },
  emptyText: {
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
    marginTop: 20,
  },
});
