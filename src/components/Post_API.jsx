import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

export default function Post_API() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
  });

  function handleInput(field, value) {
    setFormData({ ...formData, [field]: value });
  }

  async function handleSubmit() {
    console.log('Btn was clicked');
    try {
      const response = await axios.post('http://192.168.0.107:3000/users', formData);

      console.log(response.data);
      Alert.alert('Success!', 'Data Submitted Successfully');

      setFormData({
        id: '',
        name: '',
        email: '',
      });
    } catch (error) {
      Alert.alert('Error', error);
    }
  }

  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          marginBottom: 10,
        }}>
        Post_API
      </Text>

      <TextInput placeholder="Enter ID" value={formData.id} onChangeText={value => handleInput('id', value)} />
      <TextInput placeholder="Enter Name" value={formData.name} onChangeText={value => handleInput('name', value)} />
      <TextInput placeholder="Enter Email" value={formData.email} onChangeText={value => handleInput('email', value)} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
