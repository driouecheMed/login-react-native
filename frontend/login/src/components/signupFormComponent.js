import React, {Component}  from 'react';
import {StyleSheet, View, Text, TextInput, Button, TouchableHighlight} from 'react-native';
import ValidationComponent from 'react-native-form-validator';

import { globalStyles } from '../styles/globalStyles';

export default class SignupForm extends ValidationComponent {

  constructor(props) {
    super(props);
    this.state = {
      username : '',
      email: '',
      password:'',
      repassword: ''
    };
  }

  _onPressButton() {
    this.validate({
      username: {minlength:2, required: true},
      email: {email: true, required: true},
      password: {minlength: 3, maxlength: 24, required: true},
      repassword: {required: true},
    });
  }

  render() {
      return (
        <View>
          <TextInput
            style={globalStyles.input}
            placeholder='Username'
            value={this.state.username}
            onChangeText={(username) => this.setState({username})}
          />
          <TextInput
            style={globalStyles.input}
            placeholder='Email'
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
          />
          <TextInput
            secureTextEntry={true}
            style={globalStyles.input}
            placeholder='Password'
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}

            />
          <TextInput
            secureTextEntry={true}
            style={globalStyles.input}
            placeholder='Retype Password'
            value={this.state.repassword}
            onChangeText={(repassword) => this.setState({repassword})}
          />
          <Button
            onPress={() => {this._onPressButton();
                //setEmail('');
                //setPassword('');
              }
            }
            title='Sign Up'
            color='#2d3436'
          />
          <Text style={globalStyles.errorText}>
            {this.getErrorMessages()}
          </Text>
        </View>
      );
  }
}
