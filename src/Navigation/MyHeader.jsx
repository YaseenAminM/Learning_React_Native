/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';

export default function MyHeader() {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          marginTop: 20,
        }}>
        MyHeader
      </Text>
    </View>
  );
}
