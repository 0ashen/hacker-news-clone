import styled, { css } from 'styled-components';
import { themeT } from '../../@types/theme.type';
import { GlobalInner } from '../../ui/GlobalInner';

export const WrapperHeader = styled.header(
   ({ theme }: themeT) => css`
      background-color: ${theme.palette.orange.main};
      height: 85rem;
      color: ${theme.palette.white};
   `
);
export const Inner = styled(GlobalInner)(
   ({ theme }: themeT) => css`
      display: flex;
      align-items: center;
      height: 100%;
   `
);
