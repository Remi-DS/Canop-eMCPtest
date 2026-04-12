import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  
  // Branding
  brandTitle: 'Canopée B2C Test',
  brandUrl: 'https://www.axa.fr',
  brandImage: 'http://localhost:3845/assets/920161dc35fa02bb87b1d6de0209f43a1c01cde7.svg',
  brandTarget: '_self',

  // UI colors
  colorPrimary: '#00008f', // AXA Blue
  colorSecondary: '#00008f',

  // UI elements
  appBg: '#ffffff',
  appContentBg: '#f5f5fb', // Light gray background
  appPreviewBg: '#ffffff',
  appBorderColor: '#ebebf6',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Source Sans Pro", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#1a1a1a',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#00008f',
  barHoverColor: '#00008f',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#ebebf6',
  inputTextColor: '#1a1a1a',
  inputBorderRadius: 2,
});
