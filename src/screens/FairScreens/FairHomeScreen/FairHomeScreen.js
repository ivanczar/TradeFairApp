import React from 'react';
import { Text, Box, FlatList, Flex, ScrollView, Pressable } from 'native-base';
import { useState, useEffect } from 'react';
import FairTopBar from '../components/FairTopBar';
import styles from './FairHomeScreenStyle';
import { ImageBackground } from 'react-native';
const FairHomeScreen = ({ navigation }) => {
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
      <FairTopBar title={'Food Fair'} navigation={navigation} />
      <Box style={styles.listCont}>
        <FlatList
          numColumns={2}
          data={users}
          renderItem={({ item }) => (
            <ScrollView style={styles.scrollCont}>
              <Pressable
                onPress={() => {
                  navigation.navigate('FairHome');
                }}
              >
                <Flex style={styles.cardCont}>
                  <Flex style={styles.cardImageCont}>
                    <ImageBackground
                      source={{ uri: item.picture.large }}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </Flex>
                  <Flex style={styles.cardBodyCont}>
                    <Text style={styles.eventTitle}>
                      {item.name.first + ' ' + item.name.last}
                    </Text>
                  </Flex>
                </Flex>
              </Pressable>
            </ScrollView>
          )}
          keyExtractor={(item) => item.cell}
        />
      </Box>
    </Box>
  );
};

export default FairHomeScreen;
