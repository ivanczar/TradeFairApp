import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { StatusBar } from 'react-native';
import { Center } from 'native-base';

export default StyleSheet.create({
  topBar: {
    backgroundColor: theme.colors.primary,
    height: 70,
    width: '100%',
    paddingTop: StatusBar.currentHeight + 5,
    flexDirection: 'row',
    // alignItems: 'flex-start',
  },
  topbarText: {
    fontSize: 20,
    marginTop: 7,
    color: 'white',
    marginLeft: 20,
    fontWeight: 'bold',
  },

  closeIcon: {
    marginLeft: 10,
  },
  checkIcon: {
    // alignSelf:'flex-end'
    marginLeft: 160,
  },
  bodyCont: {
    height: '100%',
    alignItems: 'center',
    // backgroundColor: theme.colors.background,
  },
  photoCont: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  photo: {},
  nameTitle: {
    fontSize: 18,
    lineHeight: 40,

    color: theme.colors.primary,
  },
  inputCont: {
    flex: 2,
    width: '80%',
    // backgroundColor: theme.colors.background,
  },
});
