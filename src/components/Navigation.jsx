/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
import React from 'react';

import { View, Text, StyleSheet, Dimensions, StatusBar, Button, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Routes / Componentes / Screens
import Home from '../Navigation/Home';
import About from '../Navigation/About';
import Login from '../Navigation/Login';
import MyHeader from '../Navigation/MyHeader';
import MyExample from '../Navigation/Example';

const Stack = createNativeStackNavigator();

const sayHello = () => {
  Alert.alert('Hello User');
};

// const HeaderRight = () => {
//   return <Button title="Next" color="red" onPress={sayHello} />;
// };
// const HeaderLeft = () => {
//   return <Button title="Previous" color="green" onPress={sayHello} />;
// };

const Example = () => {
  return <MyExample />;
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {/* <Stack.Navigator screenOptions={styles.header}> */}
      <Stack.Navigator
        screenOptions={
          {
            // headerShown: false,
          }
        }>
        <Stack.Screen
          name="MyHeader"
          component={MyHeader}
          options={{
            title: '',
            // headerTitle: () => {
            //   return (
            //     <View style={{ alignItems: 'flex-start' }}>
            //       <Button color="red" title="Yaseen" onPress={() => alert('Clicked!')} />
            //     </View>
            //   );
            // },

            // headerRight: () => {
            //   return <Button title="Next" />;
            // },
            // headerLeft: () => {
            //   return <Button title="Previous" />;
            // },

            // headerRight: HeaderRight,
            // headerLeft: HeaderLeft,
            headerLeft: Example,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          // options={{
          //   title: 'Login Screen',
          //   headerTitleAlign: 'center',
          //   headerTintColor: 'red',
          //   headerTitleStyle: {
          //     fontSize: 30,
          //     color: '#1c7ed6',
          //   },
          //   headerStyle: {
          //     backgroundColor: 'red',
          //   },
          // }}
        />
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

  header: {
    headerShadowVisible: false, // 👈 removes shadow (Android & iOS)
    // headerShown: false,
    headerTitleAlign: 'center',
    // headerTintColor: '#1c7ed6',
    headerTitleStyle: {
      fontSize: 24,
      color: '#fff',
    },
    headerStyle: {
      backgroundColor: '#1c7ed6',
    },
  },
});
