import { VuetifyThemeVariant } from 'vuetify/types/services/theme.d';

const lightTheme: Partial<VuetifyThemeVariant> = {
  primary: {
    base: '#070E27',
    darken1: '#181B32',
    darken2: '#252D4A',
    darken3: '#3F425E',
    darken4: '#37466B', 
    lighten1: '#3C5982'
  },
  primarybright: {
    base: '#6F4EF6',
    lighten1: '#a24ef6'
  },
  dark: {
    base: '#4351BC',
  },
  darknavy: {
    base: '#19B5C4',
  },
  white: '#FFFFFF',
  lightgray: {
    base: '#f9f9f9',
    darken1: '#737BA1',
    darken2: '#778EB0',
    darken3: '#afb5c4'
  },
  error: {
    base: '#EE7CA4',
  },
  success: {
    base: '#49F2D2',
    lighten1: '#F8D077',
    darken1: '#36B9CC'
  }
};

export default lightTheme;
