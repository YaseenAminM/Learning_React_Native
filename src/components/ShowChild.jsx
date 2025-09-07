import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

export default function ShowChild() {
  useEffect(() => {
    // console.log("I'm a Child Component");

    return () => {
      console.log('Child Component Unmounted');
    };
  }, []);
  return (
    <View>
      <Text>ShowChild</Text>
    </View>
  );
}
