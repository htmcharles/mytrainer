// App.js
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";
import SignUpScreen from "./SignUpScreen.tsx"

export default function App() {
  return (
    <SafeAreaProvider>
        <SignUpScreen />
      </SafeAreaProvider>
  );
}
