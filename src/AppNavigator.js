import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Importação das telas
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SolicitationScreen from './screens/SolicitationScreen';
import DefinitionScreen from './screens/DefinitionScreen';
import ContributorsScreen from './screens/ContributorsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="SolicitationScreen" component={SolicitationScreen} />
        <Stack.Screen name="DefinitionScreen" component={DefinitionScreen} />
        <Stack.Screen name="ContributorsScreen" component={ContributorsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
