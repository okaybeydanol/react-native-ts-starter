import {createApi} from '@reduxjs/toolkit/query/react';

// Middleware
import {baseQueryAcceptJson} from '@src/store/api/middleware';

// Type
import {ProductApiResponse} from '@src/store/api/types';

export const commonApi = createApi({
  reducerPath: 'commonApi',
  baseQuery: baseQueryAcceptJson,
  endpoints: builder => ({
    getById: builder.query<ProductApiResponse, {id: string}>({
      query: ({id}) => ({
        url: `https://dummyjson.com/products/${id}`,
        method: 'GET',
      }),
    }),
  }),
});
export const {useLazyGetByIdQuery} = commonApi;
