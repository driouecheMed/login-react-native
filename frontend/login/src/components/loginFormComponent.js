import React, { Component }  from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import { globalStyles } from '../styles/globalStyles';

export default class LoginForm extends ValidationComponent {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
    };
  }

  _onPressButton() {
    this.validate({
      email: {email: true, required: true},
      password: {minlength: 3, maxlength: 24, required: true},
    });
    if(this.isFormValid()){
      //console.log('Form Valid ...');
      this.setState({
        email: '',
        password:'',
      });
      Alert.alert(
        "Congra!",
        "Login Form Valid",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }
  }

  render() {
      return (
        <View>
          <TextInput
            style={globalStyles.input}
            placeholder='Email'
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
            onBlur={() => this.validate({email: {email: true, required: true}})}
          />
          <TextInput
            secureTextEntry={true}
            style={globalStyles.input}
            placeholder='Password'
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
            onBlur={() =>
              this.validate({password: {minlength: 3, maxlength: 24, required: true}})}
            />
          <Button
            onPress={() => this._onPressButton()}
            title='Login'
            color='#2d3436'
          />
          <Text style={globalStyles.errorText}>
            {this.getErrorMessages()}
          </Text>
        </View>
      );
  }
}
