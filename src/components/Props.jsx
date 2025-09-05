/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import Child from './Child';

export default function Props({ name }) {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(1);
  function handleCount() {
    setCount(count => count + 1);
    console.log(count);
  }
  function handleitem() {
    setItem(item => item + 1);
    console.log(count);
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Props</Text>
      <Child count={count} item={item} />
      <Button title="counter" onPress={handleCount} />
      <Button title={`item ${item}`} onPress={handleitem} />
    </View>
  );
}
