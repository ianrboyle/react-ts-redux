import {configureStore} from '@reduxjs/toolkit';
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
  ICarSliceModel,
} from './slices/carSlice'

import { formReducer, changeName, changeCost, ICarModel } from './slices/formSlice';

export interface IState {
  form: ICarModel,
  cars: ICarSliceModel
}
const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer
  }
})

export {
  store,
  changeCost,
  changeName,
  addCar,
  removeCar,
  changeSearchTerm
};