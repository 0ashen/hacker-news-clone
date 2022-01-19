import React, { VFC } from 'react';
import { Body, List, NewsListWrapper, Title } from './NewsList.styled';
import { Header } from '../../Header/Header';
import { NewCard } from '../../NewCard/NewCard';
import { useGetTopStoriesQuery } from '../../../api/api';

type Props = {};

export const NewsList: VFC<Props> = (props) => {
   const { data, isLoading, isSuccess } = useGetTopStoriesQuery();
   console.log(data?.[0]);
   return (
      <NewsListWrapper>
         <Header />
         <Body>
            <Title>Top News of Today</Title>
            <List>
               {data?.map((newsItem) => (
                  <NewCard {...newsItem} key={newsItem.id} />
               ))}
            </List>
         </Body>
      </NewsListWrapper>
   );
};
