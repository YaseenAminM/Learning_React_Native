import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
export default function TopTabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Call" component={CallScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={styles.screnContainer}>
      <Text style={styles.textEl}>Home Screen</Text>
    </View>
  );
}
function ChatScreen() {
  return (
    <View style={styles.screnContainer}>
      <Text style={styles.textEl}>Chat Screen</Text>
    </View>
  );
}
function CallScreen() {
  return (
    <View style={styles.screnContainer}>
      <Text style={styles.textEl}>Chat Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#228be6',
  },

  textEl: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
