import React from "react";
import {
  Text,
  Box,
  NativeBaseProvider,
  Button
} from "native-base";
import CardholderScreen from "./src/screens/CardholderScreen/CardholderScreen";

export default function App() {
  return (
    <NativeBaseProvider>
<CardholderScreen/>
    </NativeBaseProvider>
  );
}


