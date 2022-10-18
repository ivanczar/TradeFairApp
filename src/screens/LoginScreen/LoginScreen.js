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
import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
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

const styles = StyleSheet.create({
  cont: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: theme.colors.primary,
  },
  titleCont: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2.5,
  },
  title: {
    color: theme.colors.foreground,
    fontWeight: 'bold',
    fontSize: 40,
    lineHeight: 51,
  },
  inputCont: {
    width: '100%',
    height: 110,
    justifyContent: 'space-around',
    flex: 1,
    width: '85%',
  },
  input: {
    backgroundColor: theme.colors.background,
    height: 50,
  },
  buttonCont: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  loginButton: {
    width: 290,
    height: 50,
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.foreground,
    borderWidth: 1,
  },
  linkedinCont: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    flex: 0.5,
  },
  linkedinText: {
    color: theme.colors.foreground,
  },
  icon: {
    color: 'white',
    marginRight: 10,
  },
  signupCont: { margin: 10, flexDirection: 'row' },
  signupText: {
    color: theme.colors.foreground,
  },
  signupLink: {
    fontWeight: 'bold',
    color: theme.colors.foreground,
  },
  divider: {
    width: '80%',
  },
});

export default LoginScreen;
