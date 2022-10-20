import React from 'react';
import {
  Text,
  Box,
  NativeBaseProvider,
  Button,
  Flex,
  Input,
  Divider,
  Pressable,
  Link,
} from 'native-base';
import styles from './LoginScreenStyle';

import Ionicons from 'react-native-vector-icons/Ionicons';
const LoginScreen = () => {
  return (
    <Flex style={styles.cont}>
      <Flex style={styles.titleCont}>
        <Text style={styles.title}>Trade Fair App</Text>
      </Flex>
      <Flex style={styles.inputCont}>
        <Input placeholder='Username or email' style={styles.input}></Input>
        <Input placeholder='Password' style={styles.input}></Input>
      </Flex>
      <Flex style={styles.buttonCont}>
        <Button
          style={styles.loginButton}
          onPress={() => console.log('Login Pressed')}
        >
          Login
        </Button>
      </Flex>
      <Divider style={styles.divider} />
      <Flex style={styles.linkedinCont}>
        <Link onPress={() => console.log('Linkedin Pressed')}>
          <Ionicons
            style={styles.icon}
            size={25}
            name={'logo-linkedin'}
          ></Ionicons>
          <Text style={styles.linkedinText}>Continue with LinkedIn</Text>
        </Link>
      </Flex>
      <Divider style={styles.divider} />
      <Flex style={styles.signupCont}>
        <Text style={styles.signupText}>Dont have an account?</Text>
        <Link onPress={() => console.log('Signup Pressed')}>
          <Text style={styles.signupLink}> Sign up</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default LoginScreen;
