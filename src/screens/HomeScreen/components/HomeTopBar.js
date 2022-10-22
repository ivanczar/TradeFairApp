import React from 'react';
import { Flex, Link, Input, Avatar } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './HomeTopBarStyle';
const HomeTopBar = ({ navigation }) => {
  const imgURL =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Paul_Circle.png/599px-Paul_Circle.png?20150912170243';
  return (
    <Flex style={styles.topBar}>
      <Link
        onPress={() => {
          navigation.navigate('Profile');
        }}
      >
        <Avatar
          
          source={{
            uri: imgURL,
          }}
          style={styles.profileIcon}
        ></Avatar>
      </Link>
      <Flex style={styles.inputCont}>

      <Input placeholder={'Search'} style={styles.input}></Input>
      </Flex>
      <Flex style={styles.rightCont}>
        <Link
          onPress={() => {
            console.log('add pressed');
          }}
        >
          <Ionicons style={styles.addIcon} name='add'></Ionicons>
        </Link>
        <Link
          onPress={() => {
            navigation.navigate('Cardholder');
          }}
        >
          <Ionicons style={styles.walletIcon} name='wallet-outline'></Ionicons>

        </Link>
      </Flex>
    </Flex>
  );
};

export default HomeTopBar;
