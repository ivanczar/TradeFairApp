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
  Avatar,
} from 'native-base';
import { StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
const ProfileScreen = () => {
  return (
    <Flex>
      <Flex style={styles.topBar}>
        <Ionicons size={35} color={'white'} name='chevron-back'></Ionicons>
      </Flex>
      <Flex style={styles.bodyCont}>
        <Flex style={styles.photoCont}>
          <Avatar
            size='150px'
            style={styles.photo}
            source={{
              uri: 'https://www.medifab.co.nz/sites/default/files/Frederick%20Mascull_0.png',
            }}
          />
          <Text style={styles.nameTitle}>Sam Sung</Text>
        </Flex>
        <Flex style={styles.inputCont}>
          <Input
            style={styles.input}
            placeholder='Email'
            InputRightElement={
              <Ionicons size={20} name='create-outline'></Ionicons>
            }
          ></Input>
          <Input
            style={styles.input}
            placeholder='Password'
            InputRightElement={
              <Ionicons size={20} name='create-outline'></Ionicons>
            }
          ></Input>
          <Input
            style={styles.input}
            placeholder='Company'
            InputRightElement={
              <Ionicons size={20} name='create-outline'></Ionicons>
            }
          ></Input>
          <Input
            style={styles.input}
            placeholder='Interests'
            InputRightElement={
              <Ionicons size={20} name='create-outline'></Ionicons>
            }
          ></Input>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: theme.colors.primary,
    height: 80,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  bodyCont: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  photoCont: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  photo: {},
  nameTitle: {
    fontSize: 40,
    lineHeight: 40,
    fontWeight: theme.textVariants.header.fontWeight,
    marginTop: 10,
  },
  inputCont: {
    flex: 2,
    width: '80%',
  },
  input: {},
});
