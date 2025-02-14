import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import LoginPage from './screens/Login';
import RegisterPage from './screens/RegisterScreen';
import Passwordpage from './screens/CreatedPassword';
import Signature from './screens/Signature';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <>
    <StatusBar style='auto' />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen  name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen  name="Register" component={RegisterPage} options={{ headerShown: false }} />
        <Stack.Screen  name="Password" component={Passwordpage} options={{ headerShown: false }} />
        <Stack.Screen  name="Signature" component={Signature} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  );
}
