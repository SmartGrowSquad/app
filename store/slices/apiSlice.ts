// 나중에는 너무 커질 수 있으므로 도메인 별로 나누는 걸 고려
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { authenticate, setAccessToken, setRefreshToken } from './authSlice';
import { setUser } from './userSlice';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (build) => ({
    // 인증은 mutation으로 처리
    signin: build.mutation({
       // note: an optional `queryFn` may be used in place of `query`
       query: ({ id, ...patch }) => ({
        url: `auth`,
        method: 'POST',
        body: patch,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      // transformResponse: (response: { data: Post }, meta, arg) => response.data,
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => response.status,
      
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {
        try {
          // 로그인이 성공하면 해당 헤더에 토큰을 가져와서 사용
          const response = await queryFulfilled
          if(response.data) {
            const accessToken = response.meta?.response?.headers.get('Authorization')
            const refreshToken = response.meta?.response?.headers.get('rft')
            const data = response.data
            
            // 토큰을 저장
            dispatch(setAccessToken(accessToken))
            dispatch(setRefreshToken(accessToken))

            // 인증 상태 저장
            dispatch(authenticate()) 
            
            // dto에 저장하기

            // 사용자 정보 저장
            dispatch(setUser(data))
          }
          
        } catch (error) {
          console.error('Failed to fetch posts:', error)
        }
      },
      async onCacheEntryAdded() {},
    }),
  }),
});

export const { useSigninMutation } = apiSlice;