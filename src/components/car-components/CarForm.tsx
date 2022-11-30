import React, { ChangeEvent, FormEvent } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { changeName, changeCost, addCar, IState } from '../../store';
import { ICarModel } from '../../store/slices/formSlice';

export const CarForm = () => {
  const { name, cost } = useSelector((state: IState )=> {
    return{
      name: state.form.name,
      cost: state.form.cost
    }
  })
  
  const dispatch = useDispatch();
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nameChangeAction: ICarModel = {
      name: event.target.value,
      cost: 0,
      id: undefined
    }
    dispatch(changeName(nameChangeAction))
  }

  const handleCostChange = (event: ChangeEvent<HTMLInputElement>) => {
    const costChangeAction: ICarModel = {
      name: undefined,
      cost: parseInt(event.target.value) || 0,
      id: undefined
    }
    dispatch(changeCost(costChangeAction))
  }

const handleSubmit = (event: FormEvent<HTMLFormElement> | undefined) => {
  event?.preventDefault();
  const addCarAction: ICarModel = {
    name,
    cost,
    id: undefined
  }
  dispatch(addCar(addCarAction));
  
}

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit} action="">
      <div className='field-group'>
        <div className='field'>
          <label className='label'>Name</label>
            <input className='input is-expanded' type="text" value={name} onChange={handleNameChange}/>
        </div>
        <div className='field'>
          <label className='label'>Cost</label>
            <input className='input is-expanded' type="number" value={cost || ''} onChange={handleCostChange}/>
        </div>
      </div>
      <button>Submit</button>
      </form>
    </div>
  )
}
