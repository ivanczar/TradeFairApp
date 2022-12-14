import React from 'react';
import { Text, Flex, Pressable } from 'native-base';
import { theme } from '../../../styles/theme';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'react-native';
const FairTopBar = ({ navigation, title }) => {
  return (
    <Flex style={styles.navCont}>
      <Flex style={styles.homeCont}>
        <Pressable
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          <Ionicons
            style={styles.homeIcon}
            size={25}
            name='home-outline'
          ></Ionicons>
        </Pressable>
        <Text style={styles.fairTitle}>{title}</Text>
      </Flex>
    </Flex>
  );
};

const styles = StyleSheet.create({
  navCont: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
  },

  homeIcon: { color: 'white', marginLeft: 5 },
  titleCont: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
  },

  homeCont: {
    alignItems: 'center',
    marginTop: StatusBar.currentHeight - 3,
    marginLeft: 5,
    flex: 1,
    flexDirection: 'row',
  },
  fairTitle: {
    fontSize: 20,
    color: 'white',
    marginLeft: 20,
    fontWeight: 'bold',
  },
});

export default FairTopBar;
