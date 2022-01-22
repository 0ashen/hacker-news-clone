import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NewsItemExtended } from 'server';
import { HYDRATE } from 'next-redux-wrapper';

export const api = createApi({
   baseQuery: fetchBaseQuery({
      // baseUrl: 'https://hackernews.free.beeceptor.com/my/api'
      baseUrl: '/api'
   }),
   extractRehydrationInfo(action, { reducerPath }) {
      if (action.type === HYDRATE) {
         return action.payload[reducerPath];
      }
   },
   tagTypes: ['Posts'],
   endpoints: (builder) => {
      return {
         getTopStories: builder.query<NewsItemExtended[], void>({
            query: () => `/topstories`,
            providesTags: ['Posts'],
            keepUnusedDataFor: 1000 * 60,
            extraOptions: {}
         })
      };
   }
});

export const { useGetTopStoriesQuery } = api;
