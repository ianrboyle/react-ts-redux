import { createSlice } from '@reduxjs/toolkit'


export interface ICarModel {
  name: string | undefined;
  cost: number | undefined;
  id: string | undefined;
}
const initialState: ICarModel = {
  name: '',
  cost: 0,
  id: undefined
}

export interface Action {
  payload: ICarModel | undefined;
  type: any;
}

const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    changeName(state: ICarModel, action: Action){
      state.name = action.payload?.name;
    },
    changeCost(state, action: Action){ 
      state.cost = action.payload?.cost;
    }
  }
})

export const {changeName, changeCost} = formSlice.actions;

export const formReducer = formSlice.reducer;