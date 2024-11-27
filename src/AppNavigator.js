import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Importa as telas
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen'; // Substitua pelo nome correto da tela principal

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tela inicial (SplashScreen) */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        {/* Tela principal (HomeScreen) */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
