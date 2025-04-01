import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import LoginPage from './screens/Login';
import RegisterPage from './screens/RegisterScreen';
import Passwordpage from './screens/CreatedPassword';
import Signature from './screens/Signature';
import Home from './screens/Home';
import VideoPlayer from './screens/VideoPlayer';
import ForgotPasswordPage from './screens/ForgotPassword';
import MinhaHandsplay from './screens/MinhaHandsplay';
import Seguranca from './screens/Seguranca';
import MyList from './screens/MyList';
import Series from './screens/Series';
import Filmes from './screens/Filmes';
import EmBreve from './screens/EmBreve';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <>
    <StatusBar style='auto' />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen  name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen  name="Register" component={RegisterPage} options={{ headerShown: false }} />
        <Stack.Screen  name="Password" component={Passwordpage} options={{ headerShown: false }} />
        <Stack.Screen  name="Signature" component={Signature} options={{ headerShown: false }} />
        <Stack.Screen  name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen  name="VideoPlayer" component={VideoPlayer} options={{ headerShown: false }} />
        <Stack.Screen  name="ForgotPassword" component={ForgotPasswordPage} options={{ headerShown: false }} />
        <Stack.Screen  name="MinhaHandsplay" component={MinhaHandsplay} options={{ headerShown: false }} />
        <Stack.Screen  name="Seguranca" component={Seguranca} options={{ headerShown: false }} />
        <Stack.Screen  name="MyList" component={MyList} options={{ headerShown: false }} />
        <Stack.Screen  name="Series" component={Series} options={{ headerShown: false }} />
        <Stack.Screen  name="Filmes" component={Filmes} options={{ headerShown: false }} />
        <Stack.Screen  name="EmBreve" component={EmBreve} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  );
}
