import React from 'react';
import { Text, Flex, Input, Pressable, Avatar } from 'native-base';
import Ionicons from 'react-native-vector-icons/AntDesign';
import styles from './ProfileScreenStyle';
import ProfileInput from './components/ProfileInput';

const ProfileScreen = ({ navigation }) => {
  const imgURL =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Paul_Circle.png/599px-Paul_Circle.png?20150912170243';
  return (
    <Flex>
      <Flex style={styles.topBar}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            size={30}
            style={styles.closeIcon}
            color={'white'}
            name='close'
          ></Ionicons>
        </Pressable>
        <Text style={styles.topbarText}>Edit profile</Text>
          <Ionicons
            size={30}
            style={styles.checkIcon}
            color={'white'}
            name='check'
          ></Ionicons>
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
          <Text style={styles.nameTitle}>Change profile photo</Text>
        </Flex>
        <Flex style={styles.inputCont}>
          <ProfileInput placeholder='Name' value='Sam Sung' />
          {''}
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
