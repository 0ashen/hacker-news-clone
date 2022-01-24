import React, { FC } from 'react';
import { Body, GeneralLayoutWrapper, Title } from './GeneralLayout.styled';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer';
import { Explorer } from '../../components/Explorer/Explorer';

type Props = {};

export const GeneralLayout: FC<Props> = ({ children }) => {
   return (
      <GeneralLayoutWrapper>
         <Header />
         {/*todo pwa*/}
         <Body>
            <Title>Top News of Today</Title>
            {children}
         </Body>
         <Footer />
         <Explorer />
      </GeneralLayoutWrapper>
   );
};
