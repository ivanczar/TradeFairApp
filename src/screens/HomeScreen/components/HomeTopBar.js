import React from 'react';
import { Flex,Link, Input } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./HomeTopBarStyle"
const HomeTopBar = () => {
  return (
    <Flex style={styles.topBar}>
      <Link
        onPress={() => {
          console.log('avatar pressed');
        }}
      >
        <Ionicons style={styles.profileIcon} name='person-circle'></Ionicons>
      </Link>
      {/* <Text style={styles.title}>Home</Text> */}
      <Input placeholder={'Search'} style={styles.input}></Input>
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
            console.log('wallet pressed');
          }}
        >
          <Ionicons style={styles.walletIcon} name='wallet'></Ionicons>
        </Link>
      </Flex>
    </Flex>
  );
};

export default HomeTopBar;
