import { View, Text, Button, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import React from 'react';

export default function StyleWithButton() {
  return (
    <View>
      <Button title="Basic Button" color={'red'} />

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>TouchAbleOpacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={styles.button}
        onPress={() => console.log('TouchableHighlight was press')}
        underlayColor={'#5f3dc4'}>
        <Text style={styles.buttonText}>TouchableHighlight</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 20,
    backgroundColor: '#4E31AA',
    padding: 20,
    borderRadius: 50,
    elevation: 5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
