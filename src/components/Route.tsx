import React, {useEffect, useState} from 'react'
interface IRouteProps {
  path: string;
  children: any;
}
export const Route = ({path, children}: IRouteProps) => {
  useEffect(() => {
    const onLocationChange = () => {
      console.log("Location change")
    }

    window.addEventListener('popstate', onLocationChange)

    return () => {
      window.removeEventListener('popstate', onLocationChange)
    };
  }, [])
  return window.location.pathname === path ? children : null
};
