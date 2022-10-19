import React from 'react';
import { Text, Box, NativeBaseProvider, Button } from 'native-base';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <ProfileScreen />
    </NativeBaseProvider>
  );
}
