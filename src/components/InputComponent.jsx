/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function InputComponent() {
  const [name, setUsername] = useState('');
  return (
    <View>
      <Text style={{ fontSize: 30 }}>InputComponent</Text>
      <Text style={{ fontSize: 30 }}>{name}</Text>
      <TextInput
        onChangeText={data => setUsername(data)}
        placeholder="Enter Your Username"
        placeholderTextColor={'lightgreen'}
        value={name}
        style={{
          borderWidth: 1,
          marginHorizontal: 10,
          marginTop: 20,
          marginBottom: 20,

          borderColor: 'lightgreen',
          padding: 15,
        }}
      />

      <Button onPress={() => setUsername('')} title="Clear" />
    </View>
  );
}
