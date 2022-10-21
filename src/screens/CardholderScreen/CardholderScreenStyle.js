import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { StatusBar } from 'react-native';


export default StyleSheet.create({
  cont: {
    backgroundColor: theme.colors.background,
  },
  topBar: {
    backgroundColor: theme.colors.primary,
    height: 80,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    
  },
  qrIcon: {
    marginRight: 20,
    fontSize: 30,
    color: 'white',
  },
  backIcon: {
    fontSize: 30,
    color: 'white',
  },
  searchInput:{
    maxWidth: 200,
    height: 30,
    backgroundColor: theme.colors.foreground,
  },
  scrollCont: {
    width: '100%',
    height: 220,
    display: 'flex',
    backgroundColor: theme.colors.background,
  },
});
