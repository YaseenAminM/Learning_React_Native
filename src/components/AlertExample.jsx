import { View, Text, Button, Alert } from 'react-native';
import React from 'react';

export default function AlertExample() {
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'Alert Message',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Ok'),
          style: 'default',
        },
        {
          text: 'Ok',
          onPress: () => console.log('Ok'),
        },
      ],
      {
        cancelable: true,
      },
    );
  };
  return (
    <View>
      <Text style={{ fontSize: 25 }}>AlertExample</Text>
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
}
