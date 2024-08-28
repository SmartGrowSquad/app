// 나중에는 너무 커질 수 있으므로 도메인 별로 나누는 걸 고려
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    // getPosts: builder.query({
    //   query: () => 'posts',
    // }),
  }),
});

export const { } = apiSlice;