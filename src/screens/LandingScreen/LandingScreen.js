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
import styles from './LandingScreenStyle';
const LandingScreen = ({navigation}) => {
  return (
    <Flex style={styles.cont}>
      <Flex style={styles.titleCont}>
        <Text style={styles.title}>Trade Fair App</Text>
      </Flex>
      <Flex style={styles.buttonCont}>
        <Button
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Login</Text>
        </Button>
        <Button
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Button>
      </Flex>
    </Flex>
  );
};

export default LandingScreen;
