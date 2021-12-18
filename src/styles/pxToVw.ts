import { Screen } from './device.const';

const pxToVw = (screen: Screen) => (valueInPx: number) => {
   return valueInPx / (screen / 100) + 'vw';
};

export const pxToVwMob = pxToVw(Screen.Mobile);
