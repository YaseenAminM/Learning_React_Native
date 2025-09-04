import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function App() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [overly, setOverlay] = useState(false);

  const [saveUserData, setSaveUserData] = useState({});

  // Function to add user data
  async function addUserData() {
    const findUser = await AsyncStorage.getItem(String(username));

    if (findUser) {
      Alert.alert('Sorry User already exists...');
      resetInputField();
      return;
    }

    if (username !== '' && email !== '' && password !== '') {
      // User Data Object
      const userData = JSON.stringify({
        username,
        email,
        password,
      });

      await AsyncStorage.setItem(String(username), userData);

      //  Reseting the input fields
      resetInputField();
      Alert.alert('user was successfully added');
    } else {
      Alert.alert('Please fill all the fields..');
    }
  }

  // Function to get user adta
  async function getUserData() {
    let savedUserData = await AsyncStorage.getItem(String(username));

    console.log(saveUserData);
    if (savedUserData) {
      const user = await JSON.parse(savedUserData); // convert back to object
      console.log('Parsed user:', user);
      // Alert.alert(`Data : ${user.email}`);
      setOverlay(true);
    } else {
      Alert.alert(`User Not Found!`);
    }
  }

  // Function to remove the user
  async function removeUserData() {
    const findUser = await AsyncStorage.getItem(String(username));

    if (!findUser) {
      Alert.alert("Sorry User doesn't ...");
      resetInputField();
      return;
    }

    await AsyncStorage.removeItem(String(username));
    Alert.alert("User's data got successfully\n removed");
    resetInputField();
  }

  // Reset the input field
  function resetInputField() {
    setUserName('');
    setEmail('');
    setPassword('');
  }

  return (
    <View style={styles.container}>
      {overly && (
        <View
          style={styles.popUpOverly}
          onPress={() => {
            setOverlay(false);
          }}
        >
          <Text
            style={{
              marginTop: 10,
              color: '#fff',
            }}
          >
            Stored Username : {username}
          </Text>
          <Text
            style={{
              marginTop: 10,
              color: '#fff',
            }}
          >
            Stored Email : {email}
          </Text>
          <Text
            style={{
              marginTop: 10,
              color: '#fff',
            }}
          >
            Stored Password : {password}
          </Text>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 40,
              top: 20,
            }}
            onPress={() => {
              setOverlay(false);
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
              }}
            >
              ❌
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <Text style={styles.signHeading}>Asyn Storage..🧑‍💻</Text>

      <View>
        <TextInput
          placeholder="Username e.g SamWilson"
          style={styles.inputField}
          value={username}
          onChangeText={setUserName}
        />
      </View>

      <View>
        <TextInput
          placeholder="Email e.g SamWilson@gmail.com"
          style={styles.inputField}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View>
        <TextInput
          placeholder="Password"
          style={styles.inputField}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Add User Btn */}
      <TouchableOpacity
        style={[
          styles.touchableBtnContainer,
          {
            backgroundColor: 'darkgreen',
          },
        ]}
        onPress={addUserData}
      >
        <Icon name="add-circle-outline" size={25} color="#fff" />
        <Text style={styles.toucableTextBtn}>Add User.</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.touchableBtnContainer,
          {
            backgroundColor: 'darkblue',
          },
        ]}
        onPress={getUserData}
      >
        <Icon name="cloud-upload-outline" size={25} color="#fff" />
        <Text style={styles.toucableTextBtn}>Get User Data</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.touchableBtnContainer,
          {
            backgroundColor: 'darkred',
          },
        ]}
        onPress={removeUserData}
      >
        <Icon name="person-remove-outline" size={25} color="#fff" />
        <Text style={styles.toucableTextBtn}>🗑️ Remove User Data</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
    // marginHorizontal: 20,
    // marginTop: 10,
    padding: 20,
    backgroundColor: 'transparent',
  },
  signHeading: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50,
    fontWeight: '800',
    color: '#52525c',
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    borderBottomWidth: 3.5,
  },
  touchableBtnContainer: {
    // backgroundColor: '#8533ff',

    padding: 18,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  toucableTextBtn: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },

  popUpOverly: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'black',
    opacity: 0.9,
    position: 'absolute',
    zIndex: 100,
    padding: 20,
  },
});
