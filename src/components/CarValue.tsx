import React from 'react'
import {useSelector} from 'react-redux'
import { IState } from '../store'
export const CarValue = () => {

  const carValue = useSelector((state: IState) =>{
    if (state.cars.cars){
      const searchTerm = state.cars.searchTerm;
      const cars = state.cars.cars.filter((car) => car.name?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
      let carSum = 0;
       cars.forEach(c => {
        if (c.cost){
          carSum += c.cost
        }
        });
        return carSum;
      }
    
  })
  return (
    <div><h3>
      Car Value: {carValue}</h3>
      </div>
  )
}
