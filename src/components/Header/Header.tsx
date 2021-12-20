import React, { VFC } from 'react';
import { Inner, WrapperHeader } from './Header.styled';
import { Logo } from '../Logo';

type Props = {};

export const Header: VFC<Props> = (props) => {
   return (
      <WrapperHeader>
         <Inner>
            <Logo />
         </Inner>
      </WrapperHeader>
   );
};
