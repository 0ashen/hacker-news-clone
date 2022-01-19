import React, { VFC } from 'react';
import { Counters, Inner, Link, NewsCardWrapper, OpenNews, Params, Title } from './NewCard.styled';
import { AiOutlineClockCircle, AiOutlineLink } from 'react-icons/ai';
import { FaUserAlt } from '@react-icons/all-files/fa/FaUserAlt';
import { NewsItemExtended } from '../../../server/src';

type Props = NewsItemExtended;

export const NewCard: VFC<Props> = ({
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
   relativeTime
}) => {
   return (
      <NewsCardWrapper>
         <Counters>
            <div>
               {score && <b>{score}</b>}
               <p>points</p>
            </div>
            <div>
               {descendants && <b>{descendants}</b>}
               <p>comments</p>
            </div>
         </Counters>
         <Inner>
            <Title>{title}</Title>
            <Params>
               <div>
                  <AiOutlineClockCircle />
                  <p>{relativeTime && relativeTime}</p>
               </div>
               <div>
                  {/*todo add link to profile*/}
                  <FaUserAlt />
                  <p>{by && by}</p>
               </div>
               <Link href={url} target="_blank" title="Open in new tab">
                  <AiOutlineLink />
                  <p>{by && by}</p>
               </Link>
            </Params>
         </Inner>
         <OpenNews>Read more</OpenNews>
      </NewsCardWrapper>
   );
};
