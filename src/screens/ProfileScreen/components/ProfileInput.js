import React from 'react';
import { Input, Pressable } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileInput = (props) => {
  return (
    <Input
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
