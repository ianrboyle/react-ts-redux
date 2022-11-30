import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query'
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
  ICarSliceModel,
} from './slices/carSlice';
import {authApi} from './apis/authApi';

import { formReducer, changeName, changeCost, ICarModel } from './slices/formSlice';

export interface IState {
  form: ICarModel,
  cars: ICarSliceModel
}
const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
    .concat(authApi.middleware);
  }
});

setupListeners(store.dispatch);

export {
  store,
  changeCost,
  changeName,
  addCar,
  removeCar,
  changeSearchTerm
};
export {useRegisterUserQuery} from './apis/authApi';