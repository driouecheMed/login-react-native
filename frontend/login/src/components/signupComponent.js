import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import React from "react";
import SignupForm from "./signupFormComponent";
import { globalStyles } from "../styles/globalStyles";

export default function Signup() {
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
        <SignupForm />
      </View>
    </TouchableWithoutFeedback>
  );
}
