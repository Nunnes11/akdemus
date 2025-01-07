import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native";
import { saveDefinition } from "../services/dataService";

export default function DefinitionScreen() {
  const [email, setEmail] = useState("");
  const [knowledgeArea, setKnowledgeArea] = useState("");
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSubmit = async () => {
    if (!email || !knowledgeArea || !term || !definition) {
      Alert.alert("Erro", "Por favor, preencha todos os campos!");
      return;
    }

    const newDefinition = { email, knowledgeArea, term, definition };

    try {
      await saveDefinition(newDefinition);
      Alert.alert("Sucesso", "Definição enviada com sucesso.");
      setEmail("");
      setKnowledgeArea("");
      setTerm("");
      setDefinition("");
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao enviar a definição.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Área de conhecimento"
        value={knowledgeArea}
        onChangeText={setKnowledgeArea}
      />
      <TextInput
        style={styles.input}
        placeholder="Termo"
        value={term}
        onChangeText={setTerm}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Defina o termo"
        value={definition}
        onChangeText={setDefinition}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dce4e2",
    padding: 20,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#98bdaa",
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
});
