const darkThemePalette = {
  mode: 'dark',
  primary: {
    main: '#939D2D',
    light: '#E1E0CF',
    dark: '#7d8621',
    contrastText: '#fff',
  },
  secondary: {
    main: '#1B76A8',
    light: '#4ca7d8',
    dark: '#102243',
    A400: '#2283AD',
    contrastText: '#000',
  },
  text: {
    primary: '#f5f9fc',
    secondary: '#f9fbfd',
    light: '#fdfdfd',
    dark: '#bbcad5',
    disable: '#1C133C61',
  },
  info: {
    main: '#3B82F6',
    light: '#b5c4cc',
    dark: '#114395',
  },
  success: {
    main: '#34D399',
    light: '#ebfcf5',
    dark: '#19845d',
  },
  warning: {
    main: '#F59E0B',
    light: '#fef5e7',
    dark: '#95620a',
  },
  error: {
    main: '#EF4444',
    light: '#fdecec',
    dark: '#a50c0c',
  },
  inherit: {
    // main: '#fff',
  },
  action: {
    default: '#f0f0fd',
    light: '#f0f0fd',
    main: '#f50',
    dark: '#f50',
  },
  grey: {
    A50: '#fafafa',
    A100: '#44546F',
    A200: '#eeeeee',
    A300: '#e0e0e0',
    A400: '#bdbdbd',
    A500: '#9e9e9e',
    A600: '#757575',
    A700: '#616161',
    A800: '#424242',
    A900: '#212121',
  },
  background: {
    default: '#182a4e',
    paper: '#182a4e',
    base: '#172B4D',
    section: '#2C3E5D',
    step: '#435370',
    activeStep: '#2183ad',
  },
};

const lightThemePalette = {
  mode: 'light',
  primary: {
    main: '#939D2D',
    light: '#E1E0CF',
    dark: '#7d8621',
    contrastText: '#fff',
  },
  secondary: {
    main: '#1B76A8',
    light: '#4ca7d8',
    dark: '#114b6b',
    A400: '#2283AD',
    contrastText: '#000',
  },
  text: {
    primary: '#0D446B',
    secondary: '#3d6989',
    light: '#fdfdfd',
    dark: '#0d446b',
    disable: '#1C133C61',
  },
  info: {
    main: '#3B82F6',
    light: '#b5c4cc',
    dark: '#114395',
  },
  success: {
    main: '#34D399',
    light: '#ebfcf5',
    dark: '#1a5360',
  },
  warning: {
    main: '#F59E0B',
    light: '#fef5e7',
    dark: '#95620a',
  },
  error: {
    main: '#EF4444',
    light: '#fdecec',
    dark: '#492f4b',
  },
  inherit: {},
  action: {
    default: '#f0f0fd',
    light: '#f0f0fd',
    main: '#f50',
    dark: '#f50',
  },
  grey: {
    A50: '#212121',
    A100: '#F1F2F4',
    A200: '#424242',
    A300: '#616161',
    A400: '#757575',
    A500: '#9e9e9e',
    A600: '#bdbdbd',
    A700: '#e0e0e0',
    A800: '#eeeeee',
    A900: '#fafafa',
  },
  background: {
    default: '#f8f8f4',
    paper: '#fff',
    base: '#f8f8f4',
    section: '#F7F8F9',
    step: '#c9d4da',
    activeStep: '#2183ad',
  },
};

const themes = {
  dark: darkThemePalette,
  light: lightThemePalette,
};

export const getDesignTokens: any = (darkMode: 'dark' | 'light') => {
  return {
    palette: themes[darkMode],
    breakpoints: {
      values: {
        xxs: 0,
        xs: 320,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1280,
      },
    },
    typography: {
      fontFamily: 'AbarLowFaNum',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,

      h1: {
        fontSize: '4rem',
      },

      h2: {
        fontSize: '3rem',
      },

      h3: {
        fontSize: '2.5rem',
      },

      h4: {
        fontSize: '2.125rem',
        fontWeight: '600',
      },

      h5: {
        fontSize: '1.25rem',
        fontWeight: '600',
      },

      h6: {
        fontSize: '1.5rem',
        fontWeight: '600',
      },

      subtitle1: {
        fontSize: '1rem',
        fontWeight: '600',
      },

      subtitle2: {
        fontSize: '0.875rem',
      },

      caption: {
        fontSize: '0.75rem',
      },

      overline: {
        fontSize: '0.625rem',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: (props: any) => ({
            boxShadow: 'none !important',
            borderRadius: '0.75rem',
            height: '2.8rem',
            fontSize: '0.875rem',
            fontWeight: 'bold',
            padding: '0 0.75rem !important',
            minWidth: '100px',
            ...(props.disabled ? { color: '#fff !important' } : {}),

            '&:hover': {
              boxShadow: 'none !important',
            },

            '& .MuiButton-endIcon': {
              marginLeft: '0',
              marginRight: '4px',
            },

            '& .MuiButton-startIcon': {
              marginLeft: '4px',
            },
          }),

          contained: {
            color: 'white',
            fontWeight: '600',

            '&:disabled': {
              color: darkMode === 'dark' ? '#616f86' : '#dddfe3',
              backgroundColor: darkMode === 'dark' ? '#758195' : '#b3b9c4',
            },

            '&:hover': {
              boxShadow: 'none !important',
            },
          },
          secondary: {
            border: '1px solid #ddd',
          },
          outlined: {
            fontSize: '0.875rem',
            fontWeight: '700',
            border: '1px solid #1B76A8',

            '&:disabled': {
              opacity: '0.5',
              color: '#B3CDE0',
            },
          },

          text: {
            fontWeight: '600',
          },

          loading: {},
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: themes[darkMode].background.default,
            backgroundImage: 'none',
            border: '1px solid #444',
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            margin: '0.7rem auto',
            height: '2.7rem',
            padding: '0 0.5rem',
            borderRadius: '0.75rem',
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          autoComplete: 'off',
          inputProps: {
            autoComplete: 'off',
          },
        },
        styleOverrides: {
          root: {
            width: '100%',
            margin: '0.7rem auto',

            '& input': {
              color: darkMode === 'dark' ? '#F5F9FC' : '#0D446B',
              lineHeight: '0',
              padding: '0 1rem',
              height: '2.8rem !important',
              fontSize: '1rem !important',

              '&::placeholder': {
                color: darkMode === 'dark' ? '#F5F9FCCC' : '#0D446BCC',
              },
            },

            '& .MuiOutlinedInput-input ': {
              height: '1rem',
            },

            '& [class*="MuiOutlinedInput"]': {
              textAlign: 'right',
              borderRadius: '0.75rem',
            },

            '& label': {
              transformOrigin: 'right !important',
              left: 'inherit !important',
              overflow: 'unset',
              right: '1.5rem !important',
              fontSize: '0.75rem',
              fontWeight: 400,
            },

            '& legend': {
              maxWidth: '0 !important',
              visibility: 'visible !important',
              position: 'relative',
              right: '1rem',
              height: '0.5rem',
            },

            '& .MuiFormHelperText-root': {
              textAlign: 'right',
              marginRight: '0',
              marginTop: '.5rem',
            },
          },
        },
      },
    },
  };
};
