/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React from 'react';
import First from './First';

const Components = () => {
  return (
    <View>
      <First />
      <First />
      <First />
      <First />

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
