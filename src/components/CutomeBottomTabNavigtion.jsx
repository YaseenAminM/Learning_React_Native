/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useTheme, useLinkBuilder } from '@react-navigation/native';

import Grid from '../components/GridScrollView';
import Login from '../components/LoginForm';
import Search from '../components/Search';
import FlatListComponent from '../components/FlatListComponent';

const Tab = createBottomTabNavigator();

// 🔹 Custom Tab Bar
function MyTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 65,

        // position: 'absolute',
        // bottom: 15,
        // left: 0,
        // right: 0,
        // borderRadius: 20,
        // marginHorizontal: 15,

        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 3.5,
      }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // Add icons here like your old code
        let iconName;
        if (route.name === 'Home') {
          iconName = isFocused ? 'home-sharp' : 'home-outline';
        } else if (route.name === 'Profile') {
          iconName = isFocused ? 'person-sharp' : 'person-outline';
        } else if (route.name === 'Setting') {
          iconName = isFocused ? 'settings-sharp' : 'settings-outline';
        } else if (route.name === 'Feed') {
          iconName = isFocused ? 'newspaper-sharp' : 'newspaper-outline';
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            activeOpacity={0.7} // 🔹 fade effect on press instead of wave
          >
            {isFocused ? (
              // 🔹 Show only text when focused
              <Text style={{ color: '#845ef7', fontSize: 14, fontWeight: '600' }}>{label}</Text>
            ) : (
              // 🔹 Show only icon when not focused
              <Icon name={iconName} size={24} color={'#868e96'} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function CutomeBottomTabNavigtion() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Grid} />
        <Tab.Screen name="Profile" component={Login} />
        <Tab.Screen name="Feed" component={Search} />
        <Tab.Screen name="Setting" component={FlatListComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
}
function FeedScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Feed Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#845ef7',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
