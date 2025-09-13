/* eslint-disable react/no-unstable-nested-components */
import { View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Icon name={focused ? 'home-sharp' : 'home-outline'} size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Icon name={focused ? 'person-sharp' : 'person-outline'} size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Icon name={focused ? 'settings-sharp' : 'settings-outline'} size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
}
