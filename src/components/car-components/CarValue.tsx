import {useSelector} from 'react-redux'
import { IState } from '../../store'
export const CarValue = () => {

  const carValue = useSelector((state: IState) =>{
    if (state.cars.cars){
      const searchTerm = state.cars.searchTerm;
      const cars = state.cars.cars.filter((car) => car.name?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
      if (cars.length > 0){
        return cars.reduce((acc, car) => {
          return acc + car.cost
        }, 0)
      }
    } });
  
  return (
    <div><h3>
      Car Value: {carValue}</h3>
      </div>
  )
}
