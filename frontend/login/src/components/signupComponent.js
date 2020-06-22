import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,
  TouchableWithoutFeedback, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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
        <TextInput
          style={styles.input}
          placeholder='Username'
          value={username}
          onChangeText={(val) => setUsername(val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder='Password'
          value={password}
          onChangeText={(val) => setPassword(val)}
          />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder='Retype Password'
          value={repassword}
          onChangeText={(val) => setRepassword(val)}
        />
        <Button
          onPress={() =>
            {
              //submitHandler(text);
              setUsername('');
              setEmail('');
              setPassword('');
              setRepassword('');
            }
          }
          title='Login'
          color='#2d3436'
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    marginBottom: 50
  },
  input: {
    paddingVertical: 6,
    marginBottom: 10,
    borderBottomColor: '#dfe6e9',
    borderBottomWidth: 1
  }
});
