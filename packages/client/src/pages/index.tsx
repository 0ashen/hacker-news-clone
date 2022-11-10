import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
// import { Dataset, Server } from 'server';
import styled from 'styled-components';
import { useGetTopStoriesQuery } from '../api/api';
import { Card } from '../components/Card/Card';
import { GeneralLayout } from '../Layout/GeneralLayout/GeneralLayout';

const List = styled.div``;

type Props = {};

const NewsList: NextPage<Props> = (props) => {
  const { data, isLoading, isSuccess } = useGetTopStoriesQuery();

  return (
    <GeneralLayout>
      <Head>
        <title>Hacker News test</title>
      </Head>
      <List>
        {data?.map((newsItem) => (
          // @ts-ignore
          <Card {...newsItem} key={newsItem.id}/>
        ))}
      </List>
    </GeneralLayout>
  );
};
export default NewsList;
