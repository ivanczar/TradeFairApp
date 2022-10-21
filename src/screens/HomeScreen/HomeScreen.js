import React from 'react';
import {
  Text,
  Box,
  FlatList,
  Flex,
  HStack,
  Avatar,
  VStack,
  Spacer,
  ScrollView,
  Pressable,
} from 'native-base';
import HomeTopBar from './components/HomeTopBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { data } from './components/data';
import styles from './HomeScreenStyle';
import { ImageBackground } from 'react-native';
const HomeScreen = ({navigation}) => {
  return (
    <Box style={styles.cont}>
      <HomeTopBar navigation={navigation} />
      <Box>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ScrollView style={styles.scrollCont}>
              <Pressable
                onPress={() => {
                 navigation.navigate("Landing");
                }}
              >
                <Flex style={styles.cardCont}>
                  <Flex style={styles.cardImageCont}>
                    {/* <ImageBackground
                      source={{
                        uri: "https://reactjs.org/logo-og.png"
                      }}
                      resizeMode="cover"
                    /> */}
                    <ImageBackground
                      source={{ uri: item.avatarUrl }}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </Flex>
                  <Flex style={styles.cardBodyCont}>
                    <Text style={styles.eventTitle}>{item.fullName}</Text>
                    <Text style={styles.dateTitle}>{item.fairDate}</Text>
                    {/* <Ionicons style={styles.enterIcon} name='chevron-forward'></Ionicons> */}
                  </Flex>
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

export default HomeScreen;
