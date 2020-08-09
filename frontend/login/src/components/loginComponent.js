import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import LoginForm from "./loginFormComponent";
import React from "react";
import { globalStyles } from "../styles/globalStyles";

export default function Login() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={globalStyles.container}>
        <View style={globalStyles.icon}>
          <AntDesign name="login" size={64} color="#dfe6e9" />
        </View>
        <LoginForm />
      </View>
    </TouchableWithoutFeedback>
  );
}
