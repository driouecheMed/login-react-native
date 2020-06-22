import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './loginComponent';
import Signup from './signupComponent';
import Tabs from './tabsComponent';

export default function Main() {
  return (
    <Tabs />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
