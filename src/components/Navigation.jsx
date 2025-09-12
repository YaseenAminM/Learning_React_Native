/* eslint-disable no-unused-vars */
import React from 'react';

import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Routes / Componentes / Screens
import Home from '../Navigation/Home';
import About from '../Navigation/About';
import Login from '../Navigation/Login';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false, // 👈 removes shadow (Android & iOS)
          // headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navigtionContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
});
