import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';
import LandingScreen from './src/screens/LandingScreen/LandingScreen';
import CardholderScreen from './src/screens/CardholderScreen/CardholderScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import FairHomeScreen from './src/screens/FairScreens/FairHomeScreen/FairHomeScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen
            name='Landing'
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Register'
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Cardholder'
            component={CardholderScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Profile'
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='FairHome'
            component={FairHomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
