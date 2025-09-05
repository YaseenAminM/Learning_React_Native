/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

export default function UseState() {
  const [name, setName] = useState('Yaseen');

  function handleName() {
    setName(name === 'Yaseen' ? 'Yaseen Amin' : 'Yaseen');
  }

  return (
    <View>
      <Text style={{ fontSize: 30 }}>UseState</Text>
      <Text style={{ fontSize: 30 }}>Name : {name}</Text>
      <Button title="Change Name" onPress={handleName} />
    </View>
  );
}
