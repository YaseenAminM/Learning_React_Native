import { View, Text, Button } from 'react-native';
import React, { createContext, useState, useContext } from 'react';

// Context Api

// 1. Create Context
// 2. Provide
// 3. Use

export const CounterContext = createContext();

export default function ContextApiDemoComponent() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count => count + 1);
  };
  return (
    <CounterContext.Provider
      value={{
        count,
        incrementCount,
      }}>
      <View>
        <FirstChild />
      </View>
    </CounterContext.Provider>
  );
}

function FirstChild() {
  return (
    <View>
      <SubChild />
    </View>
  );
}
function SubChild() {
  const { count, incrementCount } = useContext(CounterContext);
  return (
    <View>
      <Text>Sub Child</Text>
      <Text>{count}</Text>
      <Button title="increment" onPress={incrementCount} />
    </View>
  );
}
