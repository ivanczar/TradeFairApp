import React from 'react';
import {
  Box,
  FlatList,
  Flex,
  ScrollView,
  Pressable,
  Input,
  Skeleton,
} from 'native-base';
import { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './CardholderScreenStyle';
import Card from './components/Card';
const CardholderScreen = ({ navigation }) => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    const getUsers = async () => {
      try {
        let response = await fetch(
          'https://randomuser.me/api/?inc=picture,name,email,cell&results=20'
        );
        let responseJson = await response.json();
        setUsers(responseJson.results);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);

  return (
    <Box style={styles.cont}>
      <Flex style={styles.topBar}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons style={styles.backIcon} name='chevron-back'></Ionicons>
        </Pressable>
        <Input placeholder={'Search'} style={styles.searchInput}></Input>
        <Pressable
          onPress={() => {
            console.log('qr pressed');
          }}
        >
          <Ionicons style={styles.qrIcon} name='add-outline'></Ionicons>
        </Pressable>
      </Flex>

      {users && console.log(users)}
      <Box>
        {users && (
          <FlatList
            data={users}
            renderItem={({ item }) => (
              <ScrollView style={styles.scrollCont}>
                <Card
                  name={item.name.first + ' ' + item.name.last}
                  phone={item.cell}
                  avatar={item.picture.large} //This isnt being passed
                />
              </ScrollView>
            )}
            keyExtractor={(item) => item.cell}
          />
        )}
      </Box>
    </Box>
  );
};

export default CardholderScreen;
