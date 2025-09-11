import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

export default function DELETE_API() {
  const [userId, setUserId] = useState('');

  async function handleDelete() {
    if (!userId.trim()) {
      Alert.alert('Error', 'Please enter a user ID to delete.');
      return;
    }

    try {
      await axios.delete(`http://192.168.0.107:3000/users/${userId}`);
      Alert.alert('Success', `User with ID ${userId} has been deleted.`);
      console.log(`Deleted user with id: ${userId}`);
    } catch (error) {
      Alert.alert('Error', error.message);
      console.error('Delete failed:', error);
    }

    setUserId('');
  }

  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: 24,
          padding: 5.5,
          color: '#e7f5ff',
          backgroundColor: '#339af0',
          borderColor: '#1864ab',
          borderBottomWidth: 3.5,
        }}>
        DELETE API
      </Text>

      <TextInput placeholder="Enter User ID" value={userId} onChangeText={setUserId} />

      <Button title="Delete User" onPress={handleDelete} />
    </View>
  );
}
