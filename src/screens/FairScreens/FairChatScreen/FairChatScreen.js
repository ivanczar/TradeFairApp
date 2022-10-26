import React from 'react';
import { Text, Box, FlatList, ScrollView } from 'native-base';
import FairTopBar from '../components/FairTopBar';
import { data } from '../../HomeScreen/components/data';
import styles from './FairChatScreenStyle';
const FairChatScreen = ({ navigation }) => {
  return (
    <Box style={styles.cont}>
      <FairTopBar title={'Food Fair'} navigation={navigation} />
      <Box>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 120,
            fontSize: 15,
            fontWeight: 'bold',
          }}
        >
          No new messages, please come back later.
        </Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ScrollView style={styles.scrollCont}></ScrollView>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </Box>
  );
};

export default FairChatScreen;
