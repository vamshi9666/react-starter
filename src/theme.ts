/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import preset  from '@rebass/preset';
import { LIGHT_ORANGE } from './styles/colors';

type ThemeType = typeof preset;
const colors = {
  error: 'red',
  primary: LIGHT_ORANGE,
};
const theme: ThemeType = {
  ...preset,

  colors: {
    ...preset.colors,
    text: 'black',
    background: 'white',
    primary: 'orange',
  },
  shadows: {
    ...preset.shadows,

    card: '0 0 4px rgba(0, 0, 0, 0.125)',
  },
  buttons: {
    ...preset.buttons,

    primary: {
      display: 'flex',
      alignItems: 'center',
    },
    ghost: {
      backgroundColor: 'white',

      borderStyle: 'dashed',
      borderRadius: 10,
      borderWidth: 1,
      color: 'black',
    },
  },
  variants: {
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card',
      borderRadius: 2,
    },
    badge: {
      display: 'inline-block',
      p: 1,
      borderColor: 'primary',
      color: 'white',
      bg: 'primary',

      borderRadius: 12,
    },
    pill: {
      display: 'inline-block',
      p: 1,
      borderColor: 'primary',
      bg: 'white',
      borderWidth: 1,
      borderRadius: 15,
    },
  },
  forms: {
    input: {
      padding: 2,
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 8,
    },
  },
  text: {
    ...preset.text,
    inputLabel: {
      fontSize: 16,
      marginBottom: 1,
    },
    inputErrorLabel: {
      fontSize: 14,
      color: colors.error,
      marginBottom: 1,
    },
  },
};
export default theme;
