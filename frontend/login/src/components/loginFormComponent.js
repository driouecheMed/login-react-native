import { Alert, Button, Text, TextInput, View } from "react-native";

import { API } from "../utils/api";
import React from "react";
import ValidationComponent from "react-native-form-validator";
import { globalStyles } from "../styles/globalStyles";

export default class LoginForm extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  _onPressButton() {
    this.validate({
      username: { minlength: 2, required: true },
      password: { minlength: 3, maxlength: 24, required: true },
    });
    if (this.isFormValid()) {
      //console.log('Form Valid ...');
      var api = API.concat("/token/obtain/");
      fetch(api, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
        }),
      })
        .then((res) => {
          console.log("res.status: ", res.status);
          switch (res.status) {
            case 200:
              console.log("success");
              this.setState({
                username: "",
                password: "",
              });
              Alert.alert(
                "Congra!",
                "Connected",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }],
                { cancelable: false }
              );
              break;
            case 401:
              Alert.alert(
                "OPS!",
                "Username or Password Incorrect",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }],
                { cancelable: false }
              );
              console.log("can't obtain token");
              break;
            case 500:
              console.log("server error, try again");
              break;
            default:
              console.log("unhandled");
              break;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  render() {
    return (
      <View>
        <TextInput
          style={globalStyles.input}
          placeholder="Username"
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          onBlur={() =>
            this.validate({ username: { minlength: 2, required: true } })
          }
        />
        <TextInput
          secureTextEntry={true}
          style={globalStyles.input}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          onBlur={() =>
            this.validate({
              password: { minlength: 3, maxlength: 24, required: true },
            })
          }
        />
        <Button
          onPress={() => this._onPressButton()}
          title="Login"
          color="#2d3436"
        />
        <Text style={globalStyles.errorText}>{this.getErrorMessages()}</Text>
      </View>
    );
  }
}
