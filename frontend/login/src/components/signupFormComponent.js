import React, {Component}  from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import ValidationComponent from 'react-native-form-validator';

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
    // Call ValidationComponent validate method
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
            style={styles.input}
            placeholder='Username'
            value={this.state.username}
            onChangeText={(username) => this.setState({username})}
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            value={this.state.email}
            onChangeText={(val) => this.setState({val})}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder='Password'
            value={this.state.password}
            onChangeText={(email) => this.setState({email})}

            />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder='Retype Password'
            value={this.state.repassword}
            onChangeText={(repassword) => this.setState({repassword})}
          />
          <Button
            onPress={() =>
              {
                //submitHandler(text);
                this._onPressButton();
                /*this.setState('');
                setEmail('');
                setPassword('');
                setRepassword('');*/
              }
            }
            title='Sign Up'
            color='#2d3436'
            style={styles.button}
          />

          <Text style={styles.errorText}>
            {this.getErrorMessages()}
          </Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 6,
    marginBottom: 10,
    //borderBottomColor: '#dfe6e9',
    borderBottomWidth: 1,
  /*  borderWidth: 1,
   borderRadius: 10,*/
   borderColor: '#dfe6e9'
  },
  button: {
    borderRadius:10,
  },
  errorText: {
    //fontWeight: 'bold',
    color: '#d63031'
  }
});
