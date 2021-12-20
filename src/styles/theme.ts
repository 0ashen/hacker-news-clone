const GRAY = {
   100: '#F8FAFB',
   200: '#F0F1EA',
   300: '#F2F2F2',
   400: '#d7d7d7',
   500: '#A4A4A4',
   600: '#414042'
};
const palette = {
   white: '#ffffff',
   background: '#000',
   orange: {
      main: '#FB651C'
   },
   gray: GRAY
};

export const theme = {
   palette,
   transition: {
      backgroundColor: 'background-color 0.1s linear',
      border: 'border 0.1s linear'
   },
   zIndexMap: {
      popups: 7000
   },
   font: {
      main: "'Jost', sans-serif;"
   }
} as const;
