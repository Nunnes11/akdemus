import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // Define um timer para navegar para a tela principal após 3 segundos
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen'); // Troque 'HomeScreen' pelo nome da tela principal
    }, 3000);

    return () => clearTimeout(timer); // Limpa o timer para evitar problemas de memória
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/tela_de_abertura.png')} // Caminho da imagem
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5e8dd3', // Ajuste para combinar com o fundo da imagem
  },
  
  logo: {
    width: '80%',
    height: '50%',
  },
});
