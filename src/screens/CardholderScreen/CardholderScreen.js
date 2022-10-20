import React from 'react';
import {
  Text,
  Box,
  FlatList,
  Flex,
  Avatar,
  ScrollView,
  Pressable,
} from 'native-base';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { data } from './components/data';
import styles from './CardholderScreenStyle';

const CardholderScreen = () => {
  const [user, setUser] = useState();

  async function getUsers() {
    try {
      let response = await fetch('https://randomuser.me/api/');
      let responseJson = await response.json();
      setUser(responseJson);
      console.log(user.results[0].name.first);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Box style={styles.cont}>
      <Flex style={styles.topBar}>
        <Pressable
          onPress={() => {
            getUsers();
          }}
        >
          <Ionicons style={styles.backIcon} name='chevron-back'></Ionicons>
        </Pressable>

        <Pressable
          onPress={() => {
            console.log('qr pressed');
          }}
        >
          <Ionicons style={styles.qrIcon} name='qr-code-outline'></Ionicons>
        </Pressable>
      </Flex>
      <Box>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ScrollView style={styles.scrollCont}>
              <Pressable
                onPress={() => {
                  console.log('Opening', item.fullName);
                }}
              >
                <Flex style={styles.cardCont}>
                  <Flex style={styles.card} h='200' w='95%'>
                    <Avatar source={{ uri: item.avatarUrl }} size={20} />
                    <Text>{item.fullName}</Text>

                    <Ionicons name='mail-outline'>
                      <Text>{item.fullName}@gmail.com</Text>
                    </Ionicons>
                    <Ionicons name='call-outline'>
                      <Text>023721232</Text>
                    </Ionicons>
                    <Ionicons name='logo-linkedin'>
                      <Text>@{item.fullName}</Text>
                    </Ionicons>
                  </Flex>

                  <Flex style={styles.cardImageCont}></Flex>
                </Flex>
              </Pressable>
            </ScrollView>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </Box>
  );
};

export default CardholderScreen;
