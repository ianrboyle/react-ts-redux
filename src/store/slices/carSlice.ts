import { createSlice, nanoid } from '@reduxjs/toolkit'
import { create } from 'domain'
import { createSecureServer } from 'http2';
import { ICarModel, Action } from './formSlice';


export interface ICarSliceModel {
  searchTerm: string;
  cars: ICarModel[] | undefined;
}
const initialState: ICarSliceModel = {
  searchTerm: "",
  cars: []
}
export interface ISearchTermAction {
  payload: string;
  type: any;
}
const carSlice = createSlice({
  name: 'cars',
  initialState: initialState,
  reducers: {
    changeSearchTerm(state: ICarSliceModel, action: ISearchTermAction) {
      state.searchTerm = action.payload
    },
    addCar(state: ICarSliceModel, action: Action) {

      //Assume action.payload has name and cost
      if (state.cars === undefined){
        state.cars = []
      }
      state.cars?.push({
        name: action.payload?.name,
        cost: action.payload?.cost,
        id: nanoid()
      });
    },
    removeCar(state, action){
      // Assume action.payload is the id of the car we want
      const updatedCars = state.cars?.filter((car) => {
        return car.id !== action.payload;
      })
      state.cars = updatedCars;
    }
  }
})

export const {
  changeSearchTerm, addCar, removeCar
} = carSlice.actions;

export const carsReducer = carSlice.reducer;