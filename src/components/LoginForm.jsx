import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

export default function LoginForm() {
  return (
    <View style={styles.loginScreenContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.welcomeHeading}>Welcome!</Text>
        <View style={styles.inputFieldContainer}>
          <TextInput style={styles.inputField} placeholder="Email" />
          <TextInput style={styles.inputField} placeholder="Password" />
        </View>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgetBtnContainer}>
          <Text style={styles.forgetBtnText}>Forget Password?</Text>
        </TouchableOpacity>

        <View style={styles.socialMediaContainer}>
          <TouchableOpacity style={styles.socialMediaLoginBtnContainer}>
            <Text style={styles.socialMediaLoginBtnText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialMediaLoginBtnContainer}>
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
    backgroundColor: 'green',
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
    backgroundColor: '#dee2e6',
    borderRadius: 6,
  },

  btnContainer: {
    backgroundColor: 'orangered',
    padding: 12,
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
  },
  forgetBtnText: {
    color: 'orangered',
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
