import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TermsBox({ terms, onTermPress }) {
  return (
    <View style={styles.box}>
      {terms.map((term) => (
        <TouchableOpacity
          key={term.id}
          onPress={() => onTermPress(term)}
          style={styles.termButton}
        >
          <Text style={styles.termText}>{term.term}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },

  termButton: {
    backgroundColor: "#87CEEB",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: "45%",
  },

  termText: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    color: "#4682B4",
  },
});

