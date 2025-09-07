/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import { Value } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

export default function UseRefHook() {
  const myRef = useRef();

  // function handleRef() {
  //   myRef.current.setNativeProps({
  //     text: 'Yaseen',
  //     color: '#fff',
  //     backgroundColor: '#6741d9',
  //   });
  // }

  myRef.current.focus();

  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f3f5',
      }}>
      {/* <Text>UseRefHook</Text> */}

      <TextInput
        ref={myRef}
        placeholder="Enter Your Text"
        style={{
          borderWidth: 0.5,
          borderRadius: 5,
          borderColor: '#ced4da',
          backgroundColor: '#fff',
          marginTop: 30,
          marginHorizontal: 20,
          padding: 10,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#6741d9',
          marginTop: 10,
          marginHorizontal: 20,
          padding: 10,
          borderRadius: 5,
        }}
        // onPress={handleRef}
      >
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
            textTransform: 'capitalize',
          }}>
          submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}
