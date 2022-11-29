import React, { ChangeEvent } from 'react'
import { ICarModel } from '../store/slices/formSlice'
import {useDispatch, useSelector} from 'react-redux';
import { changeSearchTerm, IState, removeCar } from '../store';
export const CarSearch = () => {

  const searchTerm = useSelector((state: IState) => state.cars.searchTerm);
  const dispatch = useDispatch();
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchTerm(event.target.value))
  }
  return (
    <div>
      <label htmlFor="">Search: </label>
      <input value={searchTerm} onChange={handleSearch} type="text" />
    </div>
  )
}
