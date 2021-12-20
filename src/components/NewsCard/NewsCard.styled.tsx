import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Button } from '../../ui/Button';

export const NewsCardWrapper = styled.div`
   padding: 10rem 30rem 10rem 20rem;
   width: 100%;
   background-color: #fff;
   border: 1rem solid ${theme.palette.gray['400']};
   min-height: 100rem;
   display: flex;
`;
export const Counters = styled.div`
   display: flex;
   align-items: center;
   align-self: stretch;
   column-gap: 38rem;
   border-right: 1rem solid ${theme.palette.gray['400']};
   padding-right: 30rem;

   div {
      b {
         font-weight: 300;
         font-size: 25rem;
         color: ${theme.palette.orange.main};
         padding-bottom: 5rem;
         display: block;
      }

      p {
         text-transform: uppercase;
      }
   }
`;

export const Inner = styled.div`
   padding-left: 30rem;
`;
export const Title = styled.div`
   font-weight: 400;
   text-align: center;
   font-size: 25rem;
   padding-top: 10rem;
`;

export const OpenNews = styled(Button)`
   align-self: center;
   margin-left: auto;
`;
