import React, { VFC } from 'react';
import { Body, List, NewsListWrapper, Title } from './NewsList.styled';
import axios from 'axios';
import { Header } from '../../Header/Header';
import { NewsCard } from '../../NewsCard/NewsCard';

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
            <button
               onClick={() => {
                  axios.get('api/hello').then((res) => {
                     console.log(res.data);
                  });
               }}
            >
               get data
            </button>
         </Body>
      </NewsListWrapper>
   );
};
