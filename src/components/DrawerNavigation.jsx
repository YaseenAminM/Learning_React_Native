import 'react-native-gesture-handler';
import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenContainer } from 'react-native-screens';

// ////////////// HOME SCREEN //////////////
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.ScreenContainer}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Open Drawer"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};

// ////////////// PROFILE SCREEN //////////////
const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.ScreenContainer}>
      <Text style={styles.title}>Profile Screen</Text>
      <Button
        title="Open Drawer"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};

// ////////////// SETTINGS SCREEN //////////////
const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.ScreenContainer}>
      <Text style={styles.title}>Settings Screen</Text>
      <Button
        title="Open Drawer"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          drawerStyle: {
            backgroundColor: '#e6e6e6',
            width: 240,
          },

          drawerLabelStyle: {
            fontSize: 18,
            color: '#333',
          },
          headerStyle: {
            backgroundColor: '#6200EE',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
