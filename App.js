

import React from 'react';
import { NativeBaseProvider } from 'native-base';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';


export default function App() {
  return (
    <NativeBaseProvider>

      {/* <LoginScreen/> */}
      <RegisterScreen />

    </NativeBaseProvider>
  );
}
