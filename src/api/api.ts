import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../config';

export const hackerNewsApi = createApi({
   reducerPath: 'hackerNewsApi',
   baseQuery: fetchBaseQuery({ baseUrl: config.api }),
   endpoints: (builder) => ({
      getPokemonByName: builder.query<any, any>({
         query: (name) => `pokemon/${name}`
      })
   })
});

export const { useGetPokemonByNameQuery } = hackerNewsApi;
