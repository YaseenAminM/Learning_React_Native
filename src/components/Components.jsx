import { View, Text, Button } from 'react-native';
import React from 'react';

const Components = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
        }}
      >
        <Text
          style={{
            color: '#33A1E0',
          }}
        >
          React Native
        </Text>{' '}
        App Developer
      </Text>
      <Text>
        ----------------------------------------------------------------------------------------
      </Text>
      <Text
        style={{
          fontSize: 24,
        }}
      >
        <Text
          style={{
            color: '#33A1E0',
          }}
        >
          React
        </Text>{' '}
        App Developer
      </Text>

      <Button title="Pres Here" onPress={() => console.log('Clicked')} />
    </View>
  );
};

export default Components;
