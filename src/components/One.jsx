import { View, Text, Button } from 'react-native';
import React from 'react';

import useCounterStore from '../zustand/store';

export default function One() {
  return (
    <View>
      <Text>One</Text>
      <Two />
    </View>
  );
}

function Two() {
  // 👇 Call the zustand hook here
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <View>
      <Text>counter : {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
      <Button title="Reset" onPress={reset} />
    </View>
  );
}
