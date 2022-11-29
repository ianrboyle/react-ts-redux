import { createSlice } from '@reduxjs/toolkit'
import { addCar } from './carSlice';

export interface ICarModel {
  name: string | undefined;
  cost: number;
  id: string | undefined;
}
const initialState: ICarModel = {
  name: '',
  cost: 0,
  id: undefined
}

export interface Action {
  payload: ICarModel;
  type: any;
}

const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    changeName(state: ICarModel, action: Action){
      state.name = action.payload?.name;
    },
    changeCost(state: ICarModel, action: Action){ 
      state.cost = action.payload?.cost;
    }
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state: ICarModel, action) => {
      state.name = "";
      state.cost = 0;
    })
    // addCar(state, action){
    //   state.name = "";
    //   state.cost = 0;
    // }
  }
})

export const {changeName, changeCost} = formSlice.actions;

export const formReducer = formSlice.reducer;