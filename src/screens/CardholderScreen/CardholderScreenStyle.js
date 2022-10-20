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
      paddingTop: StatusBar.currentHeight,
    },
    qrIcon:{
        marginRight: 20,
    fontSize: 30,
    color: 'white',
  },
  backIcon:{
      fontSize: 30,
      color: 'white',
    },
    scrollCont: {
        width: '100%',
        height: 220,
        
    },
    cardCont: {
        width: '100%',
        borderRadius: 10,
        marginTop: 20,
        height: 200,
        paddingLeft: 0,
        alignItems: 'center', 
        backgroundColor: theme.colors.background,
    },
    card:{
        alignItems: 'center',
        borderWidth: 1,
        
    }
    
});
