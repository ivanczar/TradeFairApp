import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  cont: {
    backgroundColor: theme.colors.background,
  },
  scrollCont: {
    width: '100%',
    height: 220,
  },
  cardCont: {
    width: '90%',
    marginLeft: 20,
    borderRadius: 10,
    marginTop: 20,
    height: 200,
    paddingLeft: 0,
    backgroundColor: theme.colors.foreground,
  },
  cardImageCont: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flex: 2,
  },
  cardBodyCont: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 5,
  },
  eventPic: {
    marginLeft: 15,
  },
  eventTitle: {
    color: 'black',
    fontWeight: theme.textVariants.header.fontWeight,
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  dateTitle: {
    color: theme.colors.grey,
    marginLeft: 10,
  },
  enterIcon: {
    marginTop: 10,
    fontSize: 20,
    alignSelf: 'flex-end',
    
  },
});
