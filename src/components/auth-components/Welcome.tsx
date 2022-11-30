import {useDispatch, useSelector} from 'react-redux';
import { IState, useRegisterUserQuery, useLoginUserQuery } from '../../store/store';
import { ErrorPage } from './ErrorPage';


export const Welcome = () => {

 // these need be fetched from a user state with useSelector, so they must be set somewhere else
  // const username = useSelector((state: IState) => state.user.username)
  // const password = useSelector((state: IState) => state.user.password)
  const { username, password } = useSelector((state: IState )=> {
    return{
      username: state.user.username,
      password: state.user.password
    }
  })
  const {data, error, isLoading} = useLoginUserQuery({username, password});


  
  

  // console.log("data: ",data)
  // console.log("error: ", error)
  // console.log("isLoading: ",isLoading)
  const handleLogin = () => {

  }

  const handleUserNameChange = () => {

  }
  const handlePasswordChange = () => {

  }
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)

      return (
        <ErrorPage errorString={"Error"} />
      )
    }
    else {
        // you can access all properties of `SerializedError` here
        <ErrorPage errorString={error.message} />
    }
  }
  if (data) {
    return (
      <div>
        <h1>Welcome</h1>
          <div key={data.token}>Name: {data.username}</div>

      </div>
    )
  }
  return null
  //   return (
  //   <div className="car-form panel">
  //   <h4 className="subtitle is-3">{props.formName}</h4>
  //   <form onSubmit={handleLogin} action="">
  //   <div className='field-group'>
  //     <div className='field'>
  //       <label className='label'>Username</label>
  //         <input className='input is-expanded' type="text" value={username} onChange={handleUserNameChange}/>
  //     </div>
  //     <div className='field'>
  //       <label className='label'>Password</label>
  //         <input className='input is-expanded' type="text" value={password} onChange={handlePasswordChange}/>
  //     </div>
  //   </div>
  //   <button>Submit</button>
  //   </form>
  // </div>
  // )
}