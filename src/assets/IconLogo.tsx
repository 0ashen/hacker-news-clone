import React, { VFC } from 'react';
import { IconProps } from './Icon.types';

export const IconLogo: VFC<IconProps> = ({ fill, ...props }) => (
   <svg
      width="35rem"
      height="35rem"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <path
         d="M24.8715 25.5707L32.0661 11.4421H36.1936L26.6891 29.0884V39.5834H23.0539V29.0884L13.5493 11.4421H17.7147L24.8715 25.5707Z"
         fill="currentColor"
      />
      <rect x="2" y="2" width="46" height="46" stroke="currentColor" strokeWidth="4" />
   </svg>
);
