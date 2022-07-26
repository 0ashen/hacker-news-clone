import { FaUserAlt } from '@react-icons/all-files/fa/FaUserAlt';
import React, { VFC } from 'react';
import { AiOutlineClockCircle, AiOutlineLink } from 'react-icons/ai';
import styled from 'styled-components';
import { ExternalLink } from './Card/Card.styled';
// import { NewsItemExtended } from '../../../server/_old/src';

export const NewsParamsWrapper = styled.div`
  display: flex;

  & > div,
  & > a {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      padding-right: 15rem;
    }

    p {
      margin-left: 6rem;
    }

    svg {
      height: auto;
    }
  }

  & > div:nth-child(1) svg {
    width: 21rem;
  }

  & > div:nth-child(2) svg {
    width: 17rem;
  }

  & > a:nth-child(3) svg {
    width: 23rem;
  }
`;

type Props = {};

export const NewsParams: VFC<Props> = ({ relativeTime, by, hostname, url }) => {
  return (
    <NewsParamsWrapper>
      <div>
        <AiOutlineClockCircle/>
        <p>{relativeTime}</p>
      </div>
      <div>
        {/*todo add link to profile*/}
        <FaUserAlt/>
        <p>{by}</p>
      </div>
      <ExternalLink href={url} target="_blank" title="Open in new tab">
        <AiOutlineLink/>
        <p>{hostname ?? url}</p>
      </ExternalLink>
    </NewsParamsWrapper>
  );
};
