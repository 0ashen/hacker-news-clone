const palette = {
   white: '#ffffff',
   background: '#000'
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
      main: "'Roboto', sans-serif"
   }
} as const;
