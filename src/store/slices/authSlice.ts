import { createSlice } from '@reduxjs/toolkit'

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
    }
  }
})

export const {changeUserName, changePassword, addLoginParams} = authSlice.actions;

export const authFormReducer = authSlice.reducer;