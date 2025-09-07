/* eslint-disable react-native/no-inline-styles */
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      {loading && (
        <View>
          <ActivityIndicator size={56} color={'red'} />
          <Text
            style={{
              textAlign: 'center',
              marginTop: 15,
              color: 'red',
            }}>
            Loading....
          </Text>
        </View>
      )}

      <TouchableOpacity
        onPress={() => setLoading(!loading)}
        style={{
          padding: 15,
          backgroundColor: 'red',
          margin: 25,
          marginHorizontal: 100,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {loading ? 'Hide Loader' : 'Show Loader'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
