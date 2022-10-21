import React from 'react';
import { Flex, Link, Input, Avatar } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './HomeTopBarStyle';
const HomeTopBar = ({navigation}) => {
  const imgURL =
    'https://www.medifab.co.nz/sites/default/files/Frederick%20Mascull_0.png';
  return (
    <Flex style={styles.topBar}>
      <Link
        onPress={() => {
          console.log('avatar pressed');
        }}
      >
        <Avatar
          source={{
            uri: imgURL,
          }}
          style={styles.profileIcon}
        ></Avatar>
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
            navigation.navigate("Cardholder");
          }}
        >
          <Ionicons style={styles.walletIcon} name='wallet'></Ionicons>
        </Link>
      </Flex>
    </Flex>
  );
};

export default HomeTopBar;
