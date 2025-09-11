import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

export default function PATCH_API() {
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
      // ✅ Only include non-empty fields
      const updateData = {};
      if (formData.name.trim() !== '') {
        updateData.name = formData.name;
      }
      if (formData.email.trim() !== '') {
        updateData.email = formData.email;
      }

      if (Object.keys(updateData).length === 0) {
        Alert.alert('Error', 'Please enter at least one field to update.');
        return;
      }

      const response = await axios.patch(`http://192.168.0.107:3000/users/${formData.id}`, updateData);

      Alert.alert('Successfully', 'Data has been updated successfully.');
      console.log(response.data);
    } catch (error) {
      Alert.alert('Error', error.message);
      console.error('Update failed:', error);
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
        PATCH_API
      </Text>

      <TextInput placeholder="Enter ID" value={formData.id} onChangeText={value => handleInput('id', value)} />
      <TextInput placeholder="Enter Name" value={formData.name} onChangeText={value => handleInput('name', value)} />
      <TextInput placeholder="Enter Email" value={formData.email} onChangeText={value => handleInput('email', value)} />

      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
}
