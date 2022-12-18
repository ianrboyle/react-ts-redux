import React from 'react'
import axios from 'axios';

interface IError {
  errorString: string | undefined;
}
const Base_Url = 'https://localhost:5001/api/';

// async login(username: string, password: string) {
//   return await axios
//     .post(API_URL + "login", {
//       username,
//       password
//     })
//     .then(response => {
//       console.log("REsponse: ", response)
//       if (response.data.token) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//         console.log("response.data")
//       }
//       console.log("RESPPOMSE: ", response)
//       return response.data
//     })
//     .catch((err) => {
//       console.log("Error", typeof(err))
//       return err;
//     });
const get400Error = async () => {
    return await axios.get(Base_Url + 'buggy/bad-request').then(response => {
      console.log(response)
    }).catch((err) => {
      console.log("Error", err)
      return err;
    });
}
const get500Error = async () => {
    return await axios.get(Base_Url + 'buggy/server-error').then(response => {
      console.log(response)
    }).catch((err) => {
      console.log("Error", err)
      return err;
    });
}
const get404Error = async () => {
    return await axios.get(Base_Url + 'buggy/not-found').then(response => {
      console.log(response)
    }).catch((err) => {
      console.log("Error", err)
      return err;
    });
}
const getAuthError = async () => {
    return await axios.get(Base_Url + 'buggy/auth').then(response => {
      console.log(response)
    }).catch((err) => {
      console.log("Error", err)
      return err;
    });
}
export const ErrorPage = () => {
  return (
    <div>
      <button onClick={(get400Error)}>400 Error</button>
      <button onClick={(get500Error)}>500 Server Error</button>
      <button onClick={(get404Error)}>Not Found</button>
      <button onClick={(getAuthError)}>Auth Error</button>
    </div>
  )
}
