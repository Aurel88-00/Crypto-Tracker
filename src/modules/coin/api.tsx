import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const coinApi = createApi({
  reducerPath: 'coinApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3/coins/' }),
  endpoints: (builder) => ({
    getCoinsByUsd: builder.query<any, string | any>({
      query: () => `markets?vs_currency=usd`,
    }),
    
  }),
})

export const { useGetCoinsByUsdQuery } = coinApi