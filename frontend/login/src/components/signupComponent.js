import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,
  TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import SignupForm from './signupFormComponent'

export default function Signup() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <AntDesign name="login" size={64} color="#dfe6e9"/>
        </View>
          <SignupForm />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    marginBottom: 40
  }
});
