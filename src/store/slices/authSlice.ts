import { createSlice } from '@reduxjs/toolkit'
import AuthService from '../../services/auth.service';

export interface IUserModel {
  username: string | undefined;
  password: string | undefined;
  loginAttempted?: boolean;
  isRegistration?: boolean | undefined;
}
const initialState: IUserModel = {
  username: '',
  password: '',
  loginAttempted: false,
  isRegistration: undefined
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
    tryLogin(state, action: IUserAction){
      if (action.payload.username && action.payload.password){
        let login = AuthService.login(action.payload.username, action.payload.password);
        console.log("TRY LOGIN INFO: ",login)
      }
    }
  }
})

export const {changeUserName, changePassword, addLoginParams, tryLogin} = authSlice.actions;

export const authFormReducer = authSlice.reducer;