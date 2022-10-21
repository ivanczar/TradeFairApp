import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { theme } from '../../../styles/theme';

export default StyleSheet.create({
  topBar: {
    backgroundColor: theme.colors.primary,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  profileIcon: {
    fontSize: theme.textVariants.header.fontSize,
    marginLeft: 10,
    height: 35,
    width: 35,
    color: 'white',
  },
  title: {
    fontSize: theme.textVariants.body.fontSize,
    lineHeight: 25,
    fontWeight: theme.textVariants.header.fontWeight,
    color: theme.colors.foreground,
    paddingLeft: 20,
  },
  rightCont: {
    flexDirection: 'row',
    paddingRight: 10,
  },
  addIcon: {
    fontSize: 30,
    paddingLeft: 15,
    color: 'white',
  },
  walletIcon: {
    fontSize: 30,
    paddingLeft: 15,
    color: 'white',
  },
  input: {
    maxWidth: 200,
    height: 30,
    backgroundColor: theme.colors.background,
  },
});
