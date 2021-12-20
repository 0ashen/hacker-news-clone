import React, { ComponentProps, VFC } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

export const WrapperButton = styled.button`
   border-radius: 500rem;
   font-weight: 400;
   font-size: 18rem;
   display: flex;
   align-items: center;
   text-align: center;
   background-color: ${theme.palette.gray['100']};
   color: ${theme.palette.gray['600']}90;
   transition: background-color 0.1s linear, color 0.1s linear;
   padding: 10rem 20rem;

   &:hover {
      background-color: ${theme.palette.orange.main};
      color: ${theme.palette.white};
   }
`;

type Props = ComponentProps<typeof WrapperButton>;

export const Button: VFC<Props> = ({ children, as, ...props }) => {
   return (
      <WrapperButton {...props} as={as}>
         {children}
      </WrapperButton>
   );
};
