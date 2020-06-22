import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import Login from './loginComponent';
import Signup from './signupComponent';

const LoginRoute = () => (
  <View style={styles.scene}>
    <Login />
  </View>
);

const SignupRoute = () => (
  <View style={styles.scene}>
    <Signup/>
  </View>
);

const initialLayout = { width: Dimensions.get('window').width};

export default function Tabs() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'login', title: 'Login' },
    { key: 'signup', title: 'Sign Up' },
  ]);

  const renderScene = SceneMap({
    login: LoginRoute,
    signup: SignupRoute,
  });

  const renderTabBar =  props => (
    <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        style={styles.tabStyle}
    />
  );

  return (
    <TabView
      style={styles.tabView}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: '#636e72',

  },
  /*tabView: {
    paddingTop: 25,
    backgroundColor: '#2d3436',
  },*/
  tabStyle: {
    backgroundColor: '#2d3436',
  },
  indicator: {
    backgroundColor: '#dfe6e9',
  },
});
