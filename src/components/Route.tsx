import React, {useEffect, useState} from 'react'
import { RouteProps } from "react-router";
interface IRouteProps {
  path: string;
  children: RouteProps["children"];
}
export const Route: React.FC<IRouteProps> = ({path, children}: IRouteProps) => {
  useEffect(() => {
    const onLocationChange = () => {
      console.log("Location change")
      console.log("CHILDREN: ", children)
    }

    window.addEventListener('popstate', onLocationChange)

    return () => {
      window.removeEventListener('popstate', onLocationChange)
    };
  }, [])
  return window.location.pathname === path ? <div>{children}</div> : null
};
