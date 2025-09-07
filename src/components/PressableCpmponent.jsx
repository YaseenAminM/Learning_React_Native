/* eslint-disable no-unused-vars */
import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

export default function PressableCpmponent() {
  function handlerPress() {
    console.log('onPress');
  }
  function handlPressIn() {
    console.log('PressIn');
  }
  function handlPressOut() {
    console.log('PressOut');
  }
  function handlOnLongPress() {
    console.log('onLongPress');
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.btn}
        // onPress={handlerPress}
        // onPressIn={handlPressIn}
        // onPressOut={handlPressOut}
        onLongPress={handlOnLongPress}
        delayLongPress={5000}>
        <Text style={styles.btnText}>Pressable</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  btn: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 100,
    backgroundColor: '#1c7ed6',

    shadowColor: '#1c7ed6',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
