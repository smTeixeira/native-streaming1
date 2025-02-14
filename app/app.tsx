import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './_layout';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#000' />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}