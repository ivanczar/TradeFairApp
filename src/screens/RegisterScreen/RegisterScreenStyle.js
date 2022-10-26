import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  cont: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: theme.colors.primary,
  },
  titleCont: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    color: theme.colors.foreground,
    fontWeight: theme.textVariants.header.fontWeight,
    fontSize: theme.textVariants.header.fontSize,
    lineHeight: theme.textVariants.header.fontSize,
  },
  inputCont: {
    width: '100%',
    justifyContent: 'space-around',
    flex: 0.8,
    width: '85%',
  },
  input: {
    backgroundColor: theme.colors.foreground,
    height: 40,
  },
  buttonCont: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
  },
  registerButton: {
    width: 290,
    height: 50,
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.foreground,
    borderWidth: 1,
  },
  linkedinCont: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    flex: 0.3,
  },
  linkedinText: {
    color: theme.colors.foreground,
  },
  icon: {
    color: theme.colors.foreground,
    marginRight: 10,
  },
  registerCont: { margin: 10, flexDirection: 'row' },
  registerText: {
    color: theme.colors.foreground,
  },
  registerLink: {
    fontWeight: theme.textVariants.header.fontWeight,
    color: theme.colors.foreground,
  },
  divider: {
    width: '80%',
  },
});
