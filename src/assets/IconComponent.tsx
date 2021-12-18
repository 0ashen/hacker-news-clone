import React, { VFC } from 'react';
import { IconProps } from './Icon.types';

export const IconComponent: VFC<IconProps> = ({ fill, ...props }) => (
   <svg
      width="27rem"
      height="26rem"
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M20.0711 13.3431L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071L5.92892 13.3431C5.5384 12.9526 5.5384 12.3195 5.92892 11.9289C6.31945 11.5384 6.95261 11.5384 7.34314 11.9289L12 16.5858L12 -1.0968e-06L14 -8.34533e-07L14 16.5858L18.6568 11.9289C19.0474 11.5384 19.6805 11.5384 20.0711 11.9289C20.4616 12.3195 20.4616 12.9526 20.0711 13.3431Z"
         fill="currentColor"
      />
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M1.74846e-07 23.5L26.5 23.5L26.5 25.5L0 25.5L1.74846e-07 23.5Z"
         fill="currentColor"
      />
   </svg>
);
