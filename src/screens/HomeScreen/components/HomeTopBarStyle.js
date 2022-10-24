import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { theme } from '../../../styles/theme';

export default StyleSheet.create({
  topBar: {
    backgroundColor: theme.colors.primary,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight - 9,
  },
  profileIcon: {
    marginLeft: 10,
    height: 35,
    width: 35,
    color: 'white',
    marginTop: 5,
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
    flex: 0.9,
    justifyContent: 'flex-end'
  },
  addIcon: {
    fontSize: 27,
    color: 'white',
    marginRight: 15,
  },
  walletIcon: {
    fontSize: 27,
    marginRight: 10,
    color: 'white',
  },
  input: {
    maxWidth: '100%',
    height: 30,
    backgroundColor: theme.colors.foreground,
  },
  inputCont: {
    width: '70%',
    marginLeft: 20,
    flex: 2,
  },
});
