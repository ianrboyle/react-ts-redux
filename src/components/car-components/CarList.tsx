import {useDispatch, useSelector} from 'react-redux';
import { IState, removeCar } from '../../store/store';

export const CarList = () => {
  const carList = useSelector((state: IState) => {
    if (state.cars.cars && state.cars.searchTerm !== undefined){
      return state.cars.cars.filter((car) => car.name?.toLocaleLowerCase().includes(state.cars.searchTerm?.toLocaleLowerCase()))
    }
  
  })


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
