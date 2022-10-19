import React from 'react';
import { Text, Flex, Input, Pressable, Avatar } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './ProfileScreenStyle';
import ProfileInput from './components/ProfileInput';

const ProfileScreen = () => {
  const imgURL =
    'https://www.medifab.co.nz/sites/default/files/Frederick%20Mascull_0.png';
  return (
    <Flex>
      <Flex style={styles.topBar}>
        <Pressable
          onPress={() => {
            console.log('back pressed');
          }}
        >
          <Ionicons size={35} color={'white'} name='chevron-back'></Ionicons>
        </Pressable>
      </Flex>
      <Flex style={styles.bodyCont}>
        <Flex style={styles.photoCont}>
          <Avatar
            size='150px'
            style={styles.photo}
            source={{
              uri: imgURL,
            }}
          />
          <Text style={styles.nameTitle}>Sam Sung</Text>
        </Flex>
        <Flex style={styles.inputCont}>
          <ProfileInput placeholder='Email' value='samsung20@gmail.com' />
          {''}
          <ProfileInput placeholder='Password' value='*******' />
          {''}
          <ProfileInput placeholder='Company' value='MadeupCompany Inc.' />
          {''}
          <ProfileInput
            placeholder='Interests'
            value='Bitcoin    Startups      FinTech'
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileScreen;
