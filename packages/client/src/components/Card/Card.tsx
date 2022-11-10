// import { NewsItemExtended } from '../../../../server/_old/src';
import Link from 'next/link';
import React, { VFC } from 'react';
import { NewsParams } from '../NewsParams';
import {
  Counters,
  Inner,
  NewsCardWrapper,
  OpenNews,
  Title,
} from './Card.styled';

type Props = {};

//@ts-ignore
export const Card: VFC<Props> = (props) => {

  // @ts-ignore
  const { id, descendants, score, title } = props;
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
