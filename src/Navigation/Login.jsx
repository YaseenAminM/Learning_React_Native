import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleLogin() {
    console.log(`Email : ${email}`);
    console.log(`Password : ${password}`);

    setEmail('');
    setPassword('');
  }
  return (
    <View style={styles.loginScreenContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.welcomeHeading}>Welcome!</Text>
        <View style={styles.inputFieldContainer}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.inputField}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.inputField}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={styles.btnContainer}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('About', { email, password })}>
          <Text style={styles.btnText} onPress={handleLogin}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgetBtnContainer} activeOpacity={0.5}>
          <Text style={styles.forgetBtnText}>Forget Password?</Text>
        </TouchableOpacity>

        <View style={styles.socialMediaContainer}>
          <TouchableOpacity style={styles.socialMediaLoginBtnContainer} activeOpacity={0.7}>
            <Text style={styles.socialMediaLoginBtnText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialMediaLoginBtnContainer} activeOpacity={0.7}>
            <Text style={styles.socialMediaLoginBtnText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  formContainer: {
    // flex: 0.5,
    backgroundColor: 'white',
    padding: 10,
  },

  welcomeHeading: {
    fontSize: 18,
    color: '#343a40',
    fontWeight: 'bold',
    marginBottom: 15,
  },

  inputFieldContainer: {
    gap: 10,
    marginBottom: 20,
  },
  inputField: {
    padding: 15,
    backgroundColor: '#e9ecef',
    borderRadius: 6,
  },

  btnContainer: {
    backgroundColor: '#1c7ed6',
    padding: 16,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 36,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  forgetBtnContainer: {
    alignItems: 'center',
    marginBottom: 35,

    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    marginHorizontal: 'auto',
  },
  forgetBtnText: {
    color: '#1c7ed6',
  },

  socialMediaContainer: {
    flexDirection: 'row',
    gap: 15,
  },

  socialMediaLoginBtnContainer: {
    borderWidth: 1,
    borderColor: '#e9ecef',
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
  },
  socialMediaLoginBtnText: { color: 'grey' },
});
