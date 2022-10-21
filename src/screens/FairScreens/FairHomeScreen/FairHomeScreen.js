import React from 'react';
import { Text, Box, FlatList, Flex, ScrollView, Pressable, HStack } from 'native-base';
// import HomeTopBar from './components/HomeTopBar';
import FairTopBar from '../components/FairTopBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {data} from '../../CardholderScreen/components/data'
import styles from './FairHomeScreenStyle';
import { ImageBackground } from 'react-native';
const FairHomeScreen = ({ navigation }) => {
  return (
    <Box style={styles.cont}>
      <FairTopBar navigation={navigation} />
      <Box style={styles.listCont}>
        <FlatList
        
        numColumns={2}
          data={data}
          renderItem={({ item }) => (
            <ScrollView style={styles.scrollCont}>
              <Pressable
                onPress={() => {
                  navigation.navigate('FairHome');
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
                    <Text style={styles.dateTitle}>{item.cell}</Text>
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

export default FairHomeScreen;
