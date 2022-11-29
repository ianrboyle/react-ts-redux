import React from 'react'
import {useSelector} from 'react-redux'
import { IState } from '../store'
import { carsReducer } from '../store/slices/carSlice'
export const CarValue = () => {

  const carValue = useSelector((state: IState) =>{
    if (state.cars.cars){
      const searchTerm = state.cars.searchTerm;
      const cars = state.cars.cars.filter((car) => car.name?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));

        return cars.reduce((acc, car) => {
          if (car.cost) {
            return acc + car.cost
          }
          return acc
        }, 0)
      }
    
  })
  return (
    <div><h3>
      Car Value: {carValue}</h3>
      </div>
  )
}
