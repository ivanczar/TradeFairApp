import React from 'react';
import { Box, FlatList, Flex, ScrollView, Pressable, Input } from 'native-base';
import { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { data } from './components/data';
import styles from './CardholderScreenStyle';
import Card from './components/Card';
import { getUsers } from '../../common/components/getUsers';
import { StatusBar } from 'react-native';
const CardholderScreen = ({navigation}) => {
  const [user, setUser] = useState({});

  //   useEffect(() => {
  //     for (let i = 0; i < 5; i++) {
  //       getUsers();
  //     }
  //   }, []);

  //   async function getUsers() {
  // let object = {
  //   picture: {},
  //   name: {},
  //   email: {},
  //   phone: {},
  // };
  // try {
  //   let response = await fetch(
  //     'https://randomuser.me/api/?inc=picture,name,email,cell'
  //   );
  //   let responseJson = await response.json();
  //   object.picture = responseJson.results[0].picture.medium;
  //   object.name = responseJson.results[0].name.first;
  //   object.email = responseJson.results[0].email;
  //   object.phone = responseJson.results[0].picture.cell;
  //   console.log(object);
  //   setUser({ ...user, object });
  //   console.log(user);
  // } catch (error) {
  //   console.error(error);
  // }
  //   }
  const test = () => {
    setUser({ ...user, getUsers });
    console.log(getUsers());
  };
  return (
    <Box style={styles.cont}>
      {/* <StatusBar hidden /> */}
      <Flex style={styles.topBar}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons style={styles.backIcon} name='chevron-back'></Ionicons>
        </Pressable>
        <Input  placeholder={'Search'} style={styles.searchInput}></Input>
        <Pressable
          onPress={() => {
            console.log('qr pressed');
          }}
        >
          <Ionicons style={styles.qrIcon} name='add-outline'></Ionicons>
        </Pressable>
      </Flex>

      <Box>
        {
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <ScrollView style={styles.scrollCont}>
                <Card
                  name={item.fullName}
                  phone={item.cell}
                  avatar={item.avatarUrl} //This isnt being passed
                />
              </ScrollView>
            )}
            keyExtractor={(item) => item.cell}
          />
        }
      </Box>
    </Box>
  );
};

export default CardholderScreen;
