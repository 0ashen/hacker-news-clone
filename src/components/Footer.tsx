import React, { VFC } from 'react';
import styled from 'styled-components';

export const FooterWrapper = styled.ul`
   padding-top: 15rem;
   padding-bottom: 30rem;
   display: flex;
   justify-content: center;
   li a {
      font-size: 13rem;
      text-decoration: underline;
      &:hover {
         text-decoration: none;
      }
   }
`;

type Props = {};

const links = [
   {
      text: 'Original website',
      href: 'https://news.ycombinator.com/'
   }
];

export const Footer: VFC<Props> = (props) => {
   return (
      <FooterWrapper>
         {links.map(({ text, href }, idx) => (
            <li key={idx}>
               <a href={href} target="_blank" rel="noreferrer">
                  {text}
               </a>
            </li>
         ))}
      </FooterWrapper>
   );
};
