import type { GetServerSideProps, NextPage } from 'next';
import { NewsList } from '../components/pages/NewsList/NewsList';
import { Dataset, Server } from 'server';

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
