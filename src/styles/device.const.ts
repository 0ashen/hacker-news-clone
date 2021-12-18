export enum Screen {
   Mobile = 375
}

export const mediaSteps = {
   mobile: 1100
};

export const device = {
   mobile: `(max-width: ${mediaSteps.mobile}px)`
} as const;

export const mediaFactor = {
   mobile: `
      @media ${device.mobile} {
         font-size: calc(1vw / ${Screen.Mobile / 100});
      }
   `
};
