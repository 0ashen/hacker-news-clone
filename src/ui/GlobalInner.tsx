import styled from 'styled-components';

export const innerGap = 30;
export const GlobalInner = styled('div')`
   width: 100%;
   padding-left: ${innerGap}rem;
   padding-right: ${innerGap}rem;
   max-width: calc(1440rem + ${innerGap * 2}rem);
   box-sizing: border-box;
   margin-left: auto;
   margin-right: auto;
`;
