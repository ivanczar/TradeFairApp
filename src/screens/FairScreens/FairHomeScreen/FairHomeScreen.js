import React from 'react';
import { Text, Button, Flex, Input, Divider, Link } from 'native-base';
import { theme } from '../../../styles/theme';
import FairTopBar from '../components/FairTopBar';
import { StyleSheet } from 'react-native';
const FairHome = ({navigation}) => {
  return (
    <Flex style={styles.cont}>
      <FairTopBar navigation={navigation} />
    </Flex>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.background,
  },
});

export default FairHome;
