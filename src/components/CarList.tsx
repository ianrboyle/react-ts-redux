import React from 'react'
import { useSelector} from 'react-redux'
import { IState } from '../store'
import { ICarModel } from '../store/slices/formSlice'
export const CarList = () => {
  const carList = useSelector((state: IState) => state.cars.cars)
  return (
    <div>     {carList?.map((c: ICarModel) => {
      return (
        <ul>
        <li>
          <p>
          {c.name}, ${c.cost}
          </p>
      
        </li>
      </ul>
      )

    })}</div>
  )
}
