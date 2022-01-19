import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NewsItemExtended } from 'server';

export const api = createApi({
   baseQuery: fetchBaseQuery({
      baseUrl: '/api/'
   }),
   endpoints: (builder) => {
      return {
         getTopStories: builder.query<NewsItemExtended[], void>({
            query: () => `topstories`
         })
      };
   }
});

export const { useGetTopStoriesQuery } = api;
