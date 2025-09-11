import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

export default function PUT_API() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
  });
  function handleInput(field, value) {
    setFormData({ ...formData, [field]: value });
  }
  async function handleUpdate() {
    try {
      const response = await axios.put(`http://192.168.0.107:3000/users/${formData.id}`, {
        id: formData.id,
        name: formData.name,
        email: formData.email,
      });

      Alert.alert('Succesfully', 'Data has been updated successfully.');

      console.log(response.data);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
    setFormData({
      id: '',
      name: '',
      email: '',
    });
  }

  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
        }}>
        PUT_API
      </Text>

      <TextInput placeholder="Enter ID" value={formData.id} onChangeText={value => handleInput('id', value)} />
      <TextInput placeholder="Enter Name" value={formData.name} onChangeText={value => handleInput('name', value)} />
      <TextInput placeholder="Enter Email" value={formData.email} onChangeText={value => handleInput('email', value)} />

      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
}
