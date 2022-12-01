import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {FetchBaseQueryError, SerializedError} from '../../models/errors/error.model'

export interface IAuthResponseInfo {
  username: string;
  token: string;
}

export interface IAuthRequestInfo {
  username: string | undefined,
  password: string | undefined
}
export interface ILoginState {
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  data: IAuthResponseInfo | undefined;
}
const initialState: ILoginState = {
  isLoading: false,
  error: undefined,
  data: undefined
}
const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:5001/api/'
  }),
  endpoints(builder) {
    return {
      registerUser: builder.query<IAuthResponseInfo, IAuthRequestInfo>({
        query: (body: IAuthRequestInfo) => {
          return {
            url: 'account/register',
            method: 'POST',
            body,
          };
        }
      }),
      loginUser: builder.query<IAuthResponseInfo, IAuthRequestInfo>({
        query: (body: IAuthRequestInfo) => {
          return {
            url: 'account/login',
            method: 'POST',
            body,
          };
        }
      }),
    }
  }
});

export const { useRegisterUserQuery, useLoginUserQuery } = authApi;
export {authApi};


