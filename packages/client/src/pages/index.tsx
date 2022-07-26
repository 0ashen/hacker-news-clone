import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { Dataset, Server } from 'server';
import styled from 'styled-components';
import React from 'react';
import { useGetTopStoriesQuery } from '../api/api';
import { GeneralLayout } from '../Layout/GeneralLayout/GeneralLayout';
import { Card } from '../components/Card/Card';

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
               <Card {...newsItem} key={newsItem.id} />
            ))}
         </List>
      </GeneralLayout>
   );
};
export default NewsList;

export const getServerSideProps: GetServerSideProps = async (context) => {
   const data = await Server.getDataSet(Dataset.TopStories);
   return {
      props: {
         initialState: {
            api: {
               queries: {
                  ['getTopStories(undefined)']: {
                     data,
                     status: 'fulfilled',
                     requestId: '4f6kGXxTGtRt4SWyRbhIR',
                     startedTimeStamp: Date.now(),
                     fulfilledTimeStamp: Date.now()
                  }
               }
            }
         }
      }
   };
};
