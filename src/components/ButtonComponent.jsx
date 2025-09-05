/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React from 'react';

export default function ButtonComponent() {
  let name = 'Yaseen';
  function getName() {
    name = 'Yaseen Amin';
    console.warn(`Name ${name}`);
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Button Component</Text>
      <Text style={{ fontSize: 30 }}>{name}</Text>
      <Button title="Press Here" onPress={getName} />
      {/* <Button title="Press Here" onPress={() => getName('Yaseen')} /> */}
    </View>
  );
}
