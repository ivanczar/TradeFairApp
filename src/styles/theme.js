const palette = {
  blue: '#1f6feb',
  green: '#36B37E',
  red: '#CC3333',
  black: '#0B0B0B',
  white: '#F0F2F3',
  grey: '#E0E0E0',
  darkGrey: '#696969',
};

export const theme = {
  colors: {
    background: palette.grey,
    foreground: palette.white,
    primary: palette.blue,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
    grey: palette.darkGrey,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontSize: 40,
      fontWeight: 'bold',
    },
    body: {
      fontFamily: 'Merriweather',
      fontSize: 16,
    },
  },
};
