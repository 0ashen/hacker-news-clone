import React, { VFC } from 'react';
import { Counters, Inner, NewsCardWrapper, OpenNews, Title } from './Card.styled';
import { NewsItemExtended } from '../../../../server/_old/src';
import Link from 'next/link';
import { NewsParams } from '../NewsParams';

type Props = NewsItemExtended;

export const Card: VFC<Props> = (props) => {
   const {
      type,
      id,
      dead,
      deleted,
      descendants,
      kids,
      parent,
      parts,
      poll,
      text,
      score,
      time,
      timestamp,
      url,
      title,
      by,
      relativeTime,
      hostname
   } = props;
   return (
      <NewsCardWrapper>
         <Counters>
            {/*todo fix*/}
            {score > 1 && (
               <div>
                  <b>{score}</b>
                  <p>points</p>
               </div>
            )}
            {typeof descendants === 'number' && (
               <div>
                  <b>{descendants}</b>
                  <p>comments</p>
               </div>
            )}
         </Counters>
         <Inner>
            <Title>{title}</Title>
            <NewsParams {...props} />
         </Inner>
         <Link href={'/?openedNews=' + id} shallow={true}>
            <OpenNews>Read more</OpenNews>
         </Link>
      </NewsCardWrapper>
   );
};
