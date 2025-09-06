/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import externalStyles from '../style/style';

export default function Styling() {
  return (
    <View style={styles.styleContainer}>
      <Text
        style={{
          fontSize: 30,
          backgroundColor: '#0b7285',
          color: '#99e9f2',
          padding: 10,
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          borderRadius: 5,
          borderWidth: 5,
          borderColor: '#99e9f2',
        }}>
        Inline Styling
      </Text>
      <Text style={styles.textEl}>Internal Styling</Text>
      <Text style={[styles.textEl, externalStyles.textEl]}>External Styling Styling</Text>
    </View>
  );
}

// Internal Styling
const styles = StyleSheet.create({
  styleContainer: {
    flex: 1,
    gap: 10,
    padding: 10,
    backgroundColor: 'grey',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textEl: {
    fontSize: 30,
    backgroundColor: '#96f2d7',
    color: '#087f5b',
    padding: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#087f5b',
  },
});
