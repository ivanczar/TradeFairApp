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
    flex: 2.5,
  },
  title: {
    color: theme.colors.foreground,
    fontWeight: 'bold',
    fontSize: 40,
    lineHeight: 51,
  },
  inputCont: {
    width: '100%',
    height: 110,
    justifyContent: 'space-around',
    flex: 1,
    width: '85%',
  },
  input: {
    backgroundColor: theme.colors.background,
    height: 50,
  },
  buttonCont: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  loginButton: {
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
    flex: 0.5,
  },
  linkedinText: {
    color: theme.colors.foreground,
  },
  icon: {
    color: 'white',
    marginRight: 10,
  },
  signupCont: { margin: 10, flexDirection: 'row' },
  signupText: {
    color: theme.colors.foreground,
  },
  signupLink: {
    fontWeight: 'bold',
    color: theme.colors.foreground,
  },
  divider: {
    width: '80%',
  },
});
