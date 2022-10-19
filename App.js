import React from 'react';
import { Text, Box, NativeBaseProvider, Button } from 'native-base';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';


export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}
