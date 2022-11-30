import React from 'react'


interface IError {
  errorString: string | undefined;
}
export const ErrorPage = (props: IError) => {
  return (
    <div><h1>{props.errorString} </h1></div>
  )
}
