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

   &:not(:last-child) {
      border-bottom: none;
   }
`;
export const Counters = styled.div`
   display: flex;
   align-items: center;
   align-self: stretch;
   column-gap: 38rem;
   border-right: 1rem solid ${theme.palette.gray['400']};
   padding-right: 30rem;
   width: 228rem;

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
   font-size: 25rem;
   padding-top: 10rem;
   padding-bottom: 15rem;
`;

export const OpenNews = styled(Button)`
   align-self: center;
   margin-left: auto;
`;

export const Params = styled.div`
   display: flex;

   & > div,
   & > a {
      display: flex;
      align-items: center;

      &:not(:last-child) {
         padding-right: 15rem;
      }

      p {
         margin-left: 6rem;
      }

      svg {
         height: auto;
      }
   }

   & > div:nth-child(1) svg {
      width: 21rem;
   }

   & > div:nth-child(2) svg {
      width: 17rem;
   }

   & > a:nth-child(3) svg {
      width: 23rem;
   }
`;

export const ExternalLink = styled.a`
   cursor: pointer;
   p {
      max-width: 50ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
   }
   &:hover {
      text-decoration: underline;
   }
`;
