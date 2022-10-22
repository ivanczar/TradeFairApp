import React from 'react';
import { Input, Pressable } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../../styles/theme';
const ProfileInput = (props) => {
  return (
    <Input
    variant={'underlined'}
    backgroundColor={theme.colors.foreground}
      placeholder={props.placeholder}
      value={props.value}
      InputRightElement={
        <Pressable
          onPress={() => {
            console.log(`${props.placeholder} button pressed`);
          }}
        >
          <Ionicons size={20} name='create-outline'></Ionicons>
        </Pressable>
      }
    ></Input>
  );
};

export default ProfileInput;
