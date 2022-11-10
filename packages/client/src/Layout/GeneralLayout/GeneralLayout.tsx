import React, { FC } from 'react';
import { Body, GeneralLayoutWrapper, Title } from './GeneralLayout.styled';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer';

type Props = {};

export const GeneralLayout: FC<Props> = ({ children }) => {

  return (
      <GeneralLayoutWrapper>
         <Header />
         {/*todo pwa*/}
        {/*// @ts-ignore*/}
         <Body>
            <Title>Top News of Today</Title>
            {children}
         </Body>
         <Footer />
      </GeneralLayoutWrapper>
   );
};
