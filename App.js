import React from "react";
import {
  Text,
  Box,
  NativeBaseProvider,
  Button
} from "native-base";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import LandingScreen from "./src/screens/LandingScreen/LandingScreen";

export default function App() {
  return (
    <NativeBaseProvider>
<LandingScreen/>
    </NativeBaseProvider>
  );
}


