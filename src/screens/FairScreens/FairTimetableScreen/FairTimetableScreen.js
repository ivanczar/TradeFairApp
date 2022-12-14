import React from 'react';
import { Text, Box, FlatList, Flex, ScrollView, Pressable } from 'native-base';
import FairTopBar from '../components/FairTopBar';
import { data } from '../components/timetableData'
import styles from './FairTimetableScreenStyle';
import { ImageBackground } from 'react-native';
const FairTimetableScreen = ({ navigation }) => {
  return (
    <Box style={styles.cont}>
      <FairTopBar title={"Food Fair"} navigation={navigation} />
      <Box>
        <FlatList
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
                    <ImageBackground
                      source={{ uri: item.avatarUrl }}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </Flex>
                  <Flex style={styles.cardBodyCont}>
                    <Text style={styles.eventTitle}>{item.fullName}</Text>
                    <Text style={styles.dateTitle}>{item.fairDate}</Text>
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

export default FairTimetableScreen;
