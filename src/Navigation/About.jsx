import { View, Text, Button } from 'react-native';
import React from 'react';

export default function About({
  navigation,
  route: {
    params: { email, password },
  },
}) {
  console.log('Email : ', email);
  console.log('Password : ', password);
  return (
    <View>
      <Text>About</Text>
      <Text>{email}</Text>
      <Text>{password}</Text>

      <Button title="Go to home Screen" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to back to Login Screen" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
