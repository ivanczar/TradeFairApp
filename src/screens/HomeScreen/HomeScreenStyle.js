import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  cont: {
    backgroundColor: theme.colors.background,
  },
  scrollCont: {
    width: '100%',
    height: 100,
  },
  eventCont: {
    width: '90%',
    marginLeft: 20,
    borderRadius: 10,
    marginTop: 20,
    height: 80,
    paddingLeft: 0,
    backgroundColor: theme.colors.foreground,
    paddingVertical: 10,
  },
  eventPic: {
    marginLeft: 15,
  },
  eventTitle: {
    color: 'black',
    fontWeight: theme.textVariants.header.fontWeight,
    fontSize: 20,
  },
  dateTitle: {
    color: theme.colors.grey,
  },
  enterIcon: {
    marginTop: 10,
    fontSize: theme.textVariants.header.fontSize,
  },
});
