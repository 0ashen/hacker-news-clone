import styled, { css } from 'styled-components';
import { themeT } from '../../@types/theme.type';
import { GlobalInner } from '../../ui/GlobalInner';

export const WrapperHeader = styled.header(
   ({ theme }: themeT) => css`
      background-color: ${theme.palette.orange.main};
      height: 85rem;
      color: ${theme.palette.white};
      position: sticky;
      left: 0;
      top: 0;
      z-index: 0;

      &:before {
         content: '';
         display: block;
         margin-left: -10rem;
         height: 100%;
         width: 200rem;
         background-color: ${theme.palette.orange.main};
         z-index: 0;
         position: absolute;
         top: 0;
         left: 100%;
      }
   `
);
export const Inner = styled(GlobalInner)(
   ({ theme }: themeT) => css`
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;
      z-index: 1;
   `
);
