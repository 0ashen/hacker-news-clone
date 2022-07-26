import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { GlobalInner } from '../../ui/GlobalInner';
import { Button, ButtonVariant } from '../../ui/Button';

export const ExplorerWrapper = styled.div<{ show?: boolean }>(
   ({ show }) => css`
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.15s linear;
      background-color: ${theme.palette.gray['100']};
      overflow-y: scroll;
      ${show ? `opacity: 1; pointer-events: auto;` : ''}
   `
);

export const Top = styled.div`
   background-color: ${theme.palette.orange.lighten};
   height: 85rem;
   position: sticky;
   left: 0;
   top: 0;
   z-index: 2;
`;
export const Inner = styled(GlobalInner)`
   height: 100%;
   display: flex;
   align-items: center;
`;
export const Close = styled((props) => <Button variant={ButtonVariant.Outlined} {...props} />)`
   font-size: 25rem;
`;

export const Title = styled.div`
   font-weight: 400;
   font-size: 35rem;
   padding-top: 10rem;
   padding-bottom: 15rem;
`;

export const Header = styled.div`
   font-weight: 400;
   font-size: 25rem;
   padding-top: 10rem;
   padding-bottom: 15rem;
   display: flex;
   justify-content: space-between;
`;

export const Left = styled.div``;
export const Right = styled.div`
   align-self: flex-end;
   display: flex;
   align-items: center;
   p {
      margin-right: 10rem;
   }
   & > div {
      display: flex;
      align-items: center;
   }
`;
export const Iframe = styled.iframe`
   width: calc(100% - 40rem);
   height: 900rem;
   border: 5rem solid ${theme.palette.gray['600']};
   margin-left: auto;
   margin-right: auto;
   display: block;
`;
