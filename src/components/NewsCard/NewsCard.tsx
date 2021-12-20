import React, { VFC } from 'react';
import { Counters, Inner, NewsCardWrapper, OpenNews, Title } from './NewsCard.styled';

type Props = {};

export const NewsCard: VFC<Props> = (props) => {
   return (
      <NewsCardWrapper>
         <Counters>
            <div>
               <b>4153</b>
               <p>points</p>
            </div>
            <div>
               <b>4367</b>
               <p>comments</p>
            </div>
         </Counters>
         <Inner>
            <Title>Selenium alternatives for testing automation</Title>
         </Inner>
         <OpenNews>Read more</OpenNews>
      </NewsCardWrapper>
   );
};
