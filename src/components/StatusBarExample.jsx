/* eslint-disable no-unused-vars */
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import React from 'react';

export default function StatusBarExample() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#5f3dc4'} translucent={true} />
      <Text style={styles.text}>StatusBarExample</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#845ef7',
  },

  text: {
    color: '#fff',
    fontSize: 24,
  },
});
