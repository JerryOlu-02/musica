import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const chartsApi = createApi({
  reducerPath: 'charts',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com',
  }),

  endpoints: (builder) => {
    return {
      fetchChart: builder.query({
        query: (chartIds) => {
          return {
            url: 'https://spotify23.p.rapidapi.com/albums/',
            params: {
              ids: [...chartIds],
            },
            headers: {
              'X-RapidAPI-Key':
                '8b95efc737msh29a8ae82fbe388dp17060fjsn0db369547368',
              'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
            },
            method: 'GET',
          };
        },
        transformResponse: (response) => response.albums,
      }),

      fetchSongsReusable: builder.query({
        query: (arrayOfSongId) => {
          return {
            url: 'https://spotify23.p.rapidapi.com/tracks/',
            params: { ids: [...arrayOfSongId] },
            headers: {
              'X-RapidAPI-Key':
                '8b95efc737msh29a8ae82fbe388dp17060fjsn0db369547368',
              'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
            },
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchChartQuery, useFetchSongsReusableQuery } = chartsApi;
