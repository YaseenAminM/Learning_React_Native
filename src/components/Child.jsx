import { View, Text } from 'react-native';
import React from 'react';

export default function Child({ count, item }) {
  return (
    <View>
      <Text style={{ fontSize: 100, textAlign: 'center' }}>{count * item}</Text>
    </View>
  );
}
