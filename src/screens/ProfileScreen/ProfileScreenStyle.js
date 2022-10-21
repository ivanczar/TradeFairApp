import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { StatusBar } from 'react-native';

export default StyleSheet.create({
    topBar: {
      backgroundColor: theme.colors.primary,
      height: 80,
      width: '100%',
      alignContent: 'center',
      justifyContent: 'center',
      paddingTop: StatusBar.currentHeight,
    },
    bodyCont: {
      height: '100%',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
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
      fontSize: 40,
      lineHeight: 40,
      fontWeight: theme.textVariants.header.fontWeight,
      marginTop: 10,
    },
    inputCont: {
      flex: 2,
      width: '80%',
      backgroundColor: theme.colors.background,
    },
  });