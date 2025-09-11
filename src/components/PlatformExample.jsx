import { View, Text, Platform, StyleSheet } from 'react-native';
import React from 'react';

export default function PlatformExample() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      {/* <Text>{Platform.isTV ? 'TV' : 'NOT TV'}</Text> */}
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        Welcome to {Platform.OS === 'android' ? 'Android ' : 'iOS'} User
      </Text>
      <Text style={styles.usingSentence}>
        {/* You are {Platform.OS === 'android' ? 'Android ' : 'iOS'} Device */}

        {Platform.select({
          ios: 'You are using iOS Device',
          android: 'You are using Android Device.',
          macos: 'You are using MacOS Device.',
        })}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        {/* Your OS Version {Platform.Version} */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  usingSentence: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: Platform.select({
      ios: 'blue',
      macos: 'black',
      android: 'lightgreen',
    }),
  },
});
