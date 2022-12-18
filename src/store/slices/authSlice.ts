import { createSlice } from '@reduxjs/toolkit'
import AuthService from '../../services/auth.service';

export interface IUserModel {
  username: string | undefined;
  password: string | undefined;
  loginAttempted?: boolean;
  isRegistration?: boolean | undefined;
}

interface ILoginSuccessModel {
  username: string;
  token: string;
}
const initialState: IUserModel = {
  username: '',
  password: '',
  loginAttempted: false,
  isRegistration: undefined
}

interface ITryLoginState {
  isLoading: boolean;
  error: any;
  data: ILoginSuccessModel
}

export interface IUserAction {
  payload: IUserModel;
  type: any;
}

const authSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    changeUserName(state: IUserModel, action){
      state.username = action.payload?.username;
    },
    changePassword(state: IUserModel, action){ 
      state.password = action.payload?.password;
    },
    addLoginParams(state: IUserModel, action){
      state.username = action.payload?.username;
      state.password = action.payload?.password;
      state.loginAttempted = true;
    },
    tryLogin(state: IUserModel, action: IUserAction){
      if (action.payload.username && action.payload.password){
         AuthService.login(action.payload.username, action.payload.password).then((r ) =>{
          console.log("RESPONSE: ", r)
          return r;
         });
        console.log("TRY LOGIN INFO: ",)
      }
    }
  }
})

export const {changeUserName, changePassword, addLoginParams, tryLogin} = authSlice.actions;

export const authFormReducer = authSlice.reducer;