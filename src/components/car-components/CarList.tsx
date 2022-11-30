import React from 'react'
import { ICarModel } from '../../store/slices/formSlice'
import {useDispatch, useSelector} from 'react-redux';
import { changeName, changeCost, addCar, IState, removeCar } from '../../store';
import { carsReducer } from '../../store/slices/carSlice';

export const CarList = () => {
  const carList = useSelector((state: IState) => {
    if (state.cars.cars && state.cars.searchTerm !== undefined){
      return state.cars.cars.filter((car) => car.name?.toLocaleLowerCase().includes(state.cars.searchTerm?.toLocaleLowerCase()))
    }
  
  })

  // const carsToShow = carList?.map((car) => {
  //     if (searchTerm){
  //       if (car.name?.includes(searchTerm)){
  //         return car
  //       }
  //     } else {
  //       return car
  //     }
  // })

  const dispatch = useDispatch();
  const removeCarFromList = (carId: string | undefined) => {
    dispatch(removeCar(carId))
  }
  return (
    <div>     {carList?.map((c) => {
      return (
        <ul>
        <li>
         
          <p>
          {c?.name}, ${c?.cost} <button onClick={()=> removeCarFromList(c?.id)}>X</button>
          </p>
          
        </li>
      </ul>
      )

    })}</div>
  )
}
