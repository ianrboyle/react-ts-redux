import { createSlice } from '@reduxjs/toolkit'

export interface IUserModel {
  username: string;
  password: string;
  isLoggedIn: boolean;
}
const initialState: IUserModel = {
  username: '',
  password: '',
  isLoggedIn: false

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
    }
  }
})

export const {changeUserName, changePassword} = authSlice.actions;

export const authFormReducer = authSlice.reducer;