import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NewsItemExtended } from 'server';

export const api = createApi({
   baseQuery: fetchBaseQuery({
      baseUrl: '/api'
   }),
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
