import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseUrl} from '@src/constants/url';

export const baseQueryAcceptJson = fetchBaseQuery({
  baseUrl,
  prepareHeaders: headers => {
    headers.set('Accept', 'application/json');
    return headers;
  },
});
