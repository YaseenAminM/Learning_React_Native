/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import My from './My';

export default function HideShowToggle() {
  const [status, setStatus] = useState(true);
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
        }}>
        Toggle
      </Text>
      {status ? <My /> : null}

      <Button title={`${status ? 'hide' : 'show'}`} onPress={() => setStatus(!status)} />
    </View>
  );
}
