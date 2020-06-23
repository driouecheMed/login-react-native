import React, { Component }  from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import { globalStyles } from '../styles/globalStyles';

export default class SignupForm extends ValidationComponent {

  constructor(props) {
    super(props);
    this.state = {
      username : '',
      email: '',
      password:'',
      repassword: '',
      matchingError: '',
    };
  }

  _onPressButton() {
    this.validate({
      username: {minlength:2, required: true},
      email: {email: true, required: true},
      password: {minlength: 3, maxlength: 24, required: true},
      repassword: {required: true},
    });
    this.state.matchingError =
      (this.state.password === this.state.repassword) ? '' : 'Password didn\'t match';
    if(this.state.matchingError === ''){
      if(this.isFormValid()){
        //console.log('Form Valid ...');
        this.setState({
          username : '',
          email: '',
          password:'',
          repassword: ''
        });
        Alert.alert(
          "Congra!",
          "Sign Up Form Valid",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
      }
    }
  }

  render() {
      return (
        <View>
          <TextInput
            style={globalStyles.input}
            placeholder='Username'
            value={this.state.username}
            onChangeText={(username) => this.setState({username})}
            onBlur={() => this.validate({username: {minlength:2, required: true}})}
          />
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
          <TextInput
            secureTextEntry={true}
            style={globalStyles.input}
            placeholder='Retype Password'
            value={this.state.repassword}
            onChangeText={(repassword) => this.setState({repassword})}
            onBlur={() =>
                {
                  this.state.matchingError =
                    (this.state.password === this.state.repassword) ? '' : 'Password didn\'t match';
                }
              }
            />
          <Button
            onPress={() => this._onPressButton()}
            title='Sign Up'
            color='#2d3436'
          />
          <Text style={globalStyles.errorText}>
            {this.getErrorMessages()}
          </Text>
          <Text style={globalStyles.errorText}>
            {this.state.matchingError}
          </Text>
        </View>
      );
  }
}
