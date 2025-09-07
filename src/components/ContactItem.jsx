/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';

export default function ContactItem({ first_name, phone_number }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        backgroundColor: '#5f3dc4',
        marginBottom: 1,
        margin: 5,
        borderRadius: 6,
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: '#fff',
        }}>
        {first_name}
      </Text>
      <Text
        style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 22,
        }}>
        {phone_number}
      </Text>
    </View>
  );
}
