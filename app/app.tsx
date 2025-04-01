import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NotificationProvider } from "@/contexts/NotificationContext";
import AppNavigator from "./_layout";

export default function App() {
  return (
    <>
        <StatusBar backgroundColor="#1C1B1B" />
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
    </>
  );
}
