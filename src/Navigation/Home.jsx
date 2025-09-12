import { View, Text, Button } from 'react-native';
import React from 'react';

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>

      <Button title="Go to About Screen" onPress={() => navigation.navigate('About')} />
      <Button title="Go to back to Login Screen" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
