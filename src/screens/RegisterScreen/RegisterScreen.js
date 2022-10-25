import React from 'react';
import { Text, Button, Flex, Input, Divider, Link, Image } from 'native-base';
import styles from './RegisterScreenStyle';
import Logo from '../../assets/images/logo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
const RegisterScreen = ({ navigation }) => {
  return (
    <Flex style={styles.cont}>
      <Flex style={styles.titleCont}>
      <Image h={200} w={200} source={Logo} alt='logo'></Image>
      </Flex>
      <Flex style={styles.inputCont}>
        <Input placeholder='Full Name' style={styles.input}></Input>
        <Input placeholder='Email' style={styles.input}></Input>
        <Input placeholder='Password' style={styles.input}></Input>
        <Input placeholder='Confirm password' style={styles.input}></Input>
      </Flex>
      <Flex style={styles.buttonCont}>
        <Button
          style={styles.registerButton}
          onPress={() => navigation.navigate('Home')}
        >
          Register
        </Button>
      </Flex>
      <Divider style={styles.divider} />
      <Flex style={styles.linkedinCont}>
        <Link onPress={() => navigation.navigate('Home')}>
          <Ionicons
            style={styles.icon}
            size={25}
            name={'logo-linkedin'}
          ></Ionicons>
          <Text style={styles.linkedinText}>Continue with LinkedIn</Text>
        </Link>
      </Flex>
      <Divider style={styles.divider} />
      <Flex style={styles.registerCont}>
        <Text style={styles.registerText}>Already have an account?</Text>
        <Link onPress={() => navigation.navigate('Login')}>
          <Text style={styles.registerLink}> Login in</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default RegisterScreen;
