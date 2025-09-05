/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';

export default function JSX() {
  let name = 'Yaseen';
  return (
    <View>
      <Text style={{ fontSize: 24 }}>JSX</Text>
      <Text style={{ fontSize: 24 }}>{name}</Text>
      <Text style={{ fontSize: 24 }}>{2 + 5}</Text>
      <Text style={{ fontSize: 24 }}>{new Date().getFullYear()}</Text>
    </View>
  );
}
