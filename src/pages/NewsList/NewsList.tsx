import React, { VFC } from 'react';
import { Body, List, NewsListWrapper, Title } from './NewsList.styled';
import { Header } from '../../components/Header/Header';
import { NewsCard } from '../../components/NewsCard/NewsCard';

type Props = {};

export const NewsList: VFC<Props> = (props) => {
   return (
      <NewsListWrapper>
         <Header />
         <Body>
            <Title>Latest News of Today</Title>
            <List>
               <NewsCard />
            </List>
         </Body>
      </NewsListWrapper>
   );
};
