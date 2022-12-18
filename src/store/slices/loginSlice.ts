import { createSlice } from '@reduxjs/toolkit'
import AuthService from '../../services/auth.service';
import { IUserModel } from './authSlice';

const initialState: ITryLoginState = {
  isLoading: false,
  error: '',
  data: undefined
}
interface ILoginSuccessModel {
  username: string;
  token: string;
}
interface ITryLoginState {
  isLoading: boolean | undefined;
  error: any;
  data: ILoginSuccessModel | undefined;
}
export interface IUserAction {
  payload: IUserModel;
  type: any;
}


const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    tryLogin(state: ITryLoginState, action: IUserAction){
      state.isLoading = true;
      let loginInfo: any = {};
      if (action.payload.username && action.payload.password){
         AuthService.login(action.payload.username, action.payload.password).then((response: ILoginSuccessModel | any) =>{
          loginInfo = response
         });
      }
      state.data = loginInfo;
    }
  }
})

export const {tryLogin} = loginSlice.actions;

export const loginFormReducer = loginSlice.reducer;