export enum DesignLayoutSize {
   Desktop = 1440
}

export const mediaSteps = {
   mobile: 1100,
   desktopMid: 1440,
   desktopBig: 1920
};

export const device = {
   mobile: `(max-width: ${mediaSteps.mobile}px)`,
   desktopMid: `(max-width: ${mediaSteps.desktopMid}px)`,
   desktopBig: `(max-width: ${mediaSteps.desktopBig}px)`
} as const;

export const mediaFactor = {
   desktopMid: `
      @media ${device.desktopMid} {
         font-size: calc(1vw / ${DesignLayoutSize.Desktop / 100});
      }
   `,
   desktopBig: `
      @media ${device.desktopBig} {
         font-size: calc(0.9px);
      }
   `
};
