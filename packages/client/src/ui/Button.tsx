import React, { ComponentProps, FC } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../styles/theme';

export const ButtonWrapper = styled.button<{ variant?: ButtonVariant }>(
   ({ variant = ButtonVariant.Default }) => css`
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

      ${variant === ButtonVariant.Default
         ? css`
              &:hover {
                 background-color: ${theme.palette.orange.main};
                 color: ${theme.palette.white};
              }
           `
         : ''}

      ${variant === ButtonVariant.Outlined
         ? css`
              background: none;
              border: 1rem solid ${theme.palette.gray['600']};
              color: ${theme.palette.gray['600']};
              &:hover {
                 background-color: ${theme.palette.orange.main};
                 color: ${theme.palette.white};
                 border: 1rem solid ${theme.palette.orange.main};
              }
           `
         : ''}
   `
);

type Props = { variant?: ButtonVariant } & ComponentProps<typeof ButtonWrapper>;

export enum ButtonVariant {
   Default,
   Outlined
}

const ComponentButton: FC<Props> = ({ children, as, ...props }) => {
   return (
      <ButtonWrapper {...props} as={as}>
         {children}
      </ButtonWrapper>
   );
};

export const Button = React.forwardRef<typeof ComponentButton, Props>(({ ...props }, ref) => (
   <ComponentButton innerRef={ref} {...props} />
));
