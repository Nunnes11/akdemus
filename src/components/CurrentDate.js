import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function CurrentDate() {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    weekday: undefined,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return <Text style={styles.dateText}>Hoje, {currentDate}</Text>;
}

const styles = StyleSheet.create({
  dateText: {
    fontSize: 14,
    color: '#4169E1',
    marginBottom: 10,
  },
});
