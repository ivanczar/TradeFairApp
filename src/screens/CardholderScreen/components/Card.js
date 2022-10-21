import React from 'react';
import { Text, Flex, Avatar, Pressable } from 'native-base';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../../styles/theme';
const Card = (props) => {
  return (
    <Pressable
      onPress={() => {
        console.log('Clicked', props.name);
      }}
    >
      <Flex style={styles.cardCont}>
        <Flex shadow={3} style={styles.card} h='200' w='95%'>
          <Flex style={styles.cardAvatar}>
            <Avatar borderWidth={2} source={{ uri: props.avatar }} size={20} />
            <Text style={styles.cardTitle}>{props.name}</Text>
          </Flex>
          <Flex style={styles.cardInfo}>
            <Text style={styles.cardText}>
              {props.name}@gmail.com{'  '}
              <Ionicons size={20} name='mail-outline' />
            </Text>

            <Text style={styles.cardText}>
              {props.phone} {'  '}
              <Ionicons size={20} name='call-outline' />
            </Text>

            <Text style={styles.cardText}>
              @{props.name}
              {'  '}
              <Ionicons size={20} name='logo-linkedin' />
            </Text>
          </Flex>
        </Flex>

        <Flex style={styles.cardImageCont}></Flex>
      </Flex>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardCont: {
    width: '100%',
    borderRadius: 10,
    marginTop: 20,
    height: 200,
    paddingLeft: 0,
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  card: {
    alignItems: 'center',
    backgroundColor: theme.colors.foreground,
  },
  cardAvatar: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cardInfo: {
    width: '100%',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 25,
    lineHeight: 25,
    fontWeight: 'bold',
  },
  cardText: { paddingRight: 10 },
});
