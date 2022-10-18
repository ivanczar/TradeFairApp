import React from "react";
import {
  Text,
  Box,
  NativeBaseProvider,
  Button
} from "native-base";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";

export default function App() {
  return (
    <NativeBaseProvider>
<LoginScreen/>
    </NativeBaseProvider>
  );
}


