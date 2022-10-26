import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  cont: {
    backgroundColor: theme.colors.primary,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
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
    marginTop: 20,
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
    backgroundColor: theme.colors.foreground,
    borderColor: theme.colors.foreground,
    borderWidth: 1,
  },
  registerButton: {
    width: 290,
    height: 50,
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.foreground,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 100
  },
});
