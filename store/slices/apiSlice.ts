// 나중에는 너무 커질 수 있으므로 도메인 별로 나누는 걸 고려
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { authenticate, setAccessToken } from './authSlice';
import { setUser } from './userSlice';
import { GetCropListResponse, GetPurchaseHistoryResponse, GetUrbaniInfoResponse, GetUrbaniListResponse, SigninResponse } from '../response';
import { GetUrbaniListRequest, PostPurchaseRequest, SigninRequest } from '../request';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CropDto, PurchaseDto, UrbaniDto } from '../types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'http://172.30.1.87:8080/v1/' ,
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        console.log('token is here')
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  tagTypes: ['Urbanis'],
  endpoints: (build) => ({
    // 인증은 mutation으로 처리
    signin: build.mutation<SigninResponse, SigninRequest>({
       // note: an optional `queryFn` may be used in place of `query`
      query: (req) => ({
        url: `/auth/sign-in`,
        method: 'POST',
        body: req,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      // transformResponse: (response: { data: Post }, meta, arg) => response.data,
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => response.status,
      invalidatesTags: ['Urbanis'],
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {
        try {
          // 로그인이 성공하면 해당 헤더에 토큰을 가져와서 사용
          const response = await queryFulfilled
          if(response.meta?.response?.status === 200) {
            const accessToken = response.meta?.response?.headers.get('Authorization')
            const data = response.data;
            // 토큰을 저장
            dispatch(setAccessToken(accessToken))
            AsyncStorage.setItem('token', accessToken!);
            AsyncStorage.setItem('user', JSON.stringify(data.member));

            // 인증 상태 저장
            dispatch(authenticate()) 
            console.log('로그인 성공')
            console.log(response.data.member)
            // dto에 저장하기

            // 사용자 정보 저장
            dispatch(setUser(data.member))
          }
          
        } catch (error) {
          console.error(error)
        }
      },
      async onCacheEntryAdded() {},
    }),
    singup: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `auth`,
        method: 'POST',
        body: patch,
      }),
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {
        try {
          // 회원 가입
          // 회원 가입이 완료되면 로그인 시도
        } catch (error) {
          console.error('Failed to fetch posts:', error)
        }
      },
    }),
    postPurchase: build.mutation<PurchaseDto, PostPurchaseRequest>({
      query: (req) => ({
        url: `purchase`,
        method: 'POST',
        body: req,
      }),
      transformResponse: (response: { data: PurchaseDto }, meta, arg) => response.data,
     
    }),
    // #region purchase
    getPurchases: build.query<PurchaseDto[], number>({
      query: (id) => ({ url: `/purchase/${id}` }),

      transformResponse: (response: { data: PurchaseDto[] }, meta, arg) => {
        console.log("[response]" + response)
        return response.data
      }
      // Pick out errors and prevent nested properties in a hook or selector
    }),
    getPurchaseDetail: build.query<GetPurchaseHistoryResponse, number>({
      query: (id) => ({ url: `/purchase/${id}` }),

      transformResponse: (response: { data: any }, meta, arg) => {
        console.log(response.data)
        return response.data
      }
      // Pick out errors and prevent nested properties in a hook or selector
    }),
    // #region crops
    getAllCrops: build.query<CropDto[], null>({
      query: () => ({ url: `/crop` }),
      transformResponse: (response: { crops: CropDto[] }, meta, arg) => {
        console.log(response)
        return response.crops
      }
    }),
    getCropDetail: build.query<CropDto, number>({
      query: (id) => ({ url: `/crop/get-info/${id}` }),
      transformResponse: (response: { crop: any }, meta, arg) => {
        console.log(response.crop)
        return response.crop
      }
    }),
    // #region urbani
    getUrbaniInfo: build.query<UrbaniDto, number>({
      query: (id) => ({ url: `/urbani/${id}` }),

      transformResponse: (response: { urbani: UrbaniDto }, meta, arg) => response.urbani,
    }),
    getUrbanis: build.query<UrbaniDto[], GetUrbaniListRequest>({
      query: ({latitude, longitude}) => ({ 
        url: `/urbani/search`, 
        params: {
          latitude: latitude,
          longitude: longitude
        }
      }),
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => response.status,

      transformResponse: (response: { result: UrbaniDto[] }, meta, arg) => {
        return response.result
      }
    }),

    // 근처에 있는 어반이 리스트
    // 근처에 있는 작물 리스트
    // 작물 상세 정보
    // 패스코드
    // 결제
  }),

});

export const { 
  useSigninMutation,
  usePostPurchaseMutation,
  useGetPurchasesQuery,
  useGetPurchaseDetailQuery,
  useGetAllCropsQuery,
  useGetUrbaniInfoQuery,
  useGetUrbanisQuery,
  useGetCropDetailQuery,
} = apiSlice;