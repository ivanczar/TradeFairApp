const palette = {
    blue: '#1f6feb',
    green: '#0ECD9D',
    red: '#CD0E61',
    black: '#0B0B0B',
    white: '#F0F2F3',
    grey: '#f3f2ef',

  }
  
  export const theme = {
    colors: {
      background: palette.grey,
      foreground: palette.white,
      primary: palette.blue,
      success: palette.green,
      danger: palette.red,
      failure: palette.red,
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
    }
  };