import React from 'react';
import {
  Text,
  Box,
  FlatList,
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
const HomeScreen = () => {
  return (
    <Box style={styles.cont}>
      <HomeTopBar />
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
                <Box style={styles.eventCont}>
                  <HStack space={[5, 3]} justifyContent='space-between'>
                    <Avatar
                      style={styles.eventPic}
                      size='60px'
                      source={{
                        uri: item.avatarUrl,
                      }}
                    />
                    <VStack marginTop={2}>
                      <Text style={styles.eventTitle}>{item.fullName}</Text>
                      <Text style={styles.dateTitle}>{item.fairDate}</Text>
                    </VStack>
                    <Spacer />
                    <Ionicons style={styles.enterIcon}  name={'chevron-forward'}></Ionicons>
                  </HStack>
                </Box>
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
