import React from 'react';
import {
  Text,
  Button,
  Flex,
  Image,
} from 'native-base';
import styles from './LandingScreenStyle';
import logo from '../../assets/images/logo.png';
const LandingScreen = ({ navigation }) => {
  return (
    <Flex style={styles.cont}>
      <Flex style={styles.titleCont}>
        <Image h={200} w={200} source={logo} alt='logo'></Image>
      </Flex>
      <Flex style={styles.buttonCont}>
        <Button
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text>Login</Text>
        </Button>
        <Button
          style={styles.registerButton}
          onPress={() => navigation.navigate('Register')}
        >
          Register
        </Button>
      </Flex>
    </Flex>
  );
};

export default LandingScreen;
