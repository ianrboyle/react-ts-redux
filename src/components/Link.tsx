import React, {MouseEvent} from 'react'
import { RouteProps } from "react-router";
interface ILinkProps {
  className?: string,
  href: string,
  children: RouteProps["children"]
}
export const Link = ({className, href, children}: ILinkProps) => {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    console.log("CHILDREN LINK: ", children)
    event.preventDefault();
    window.history.pushState({}, '', href);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }
  return (
    <a onClick={onClick} className={className} href={href}>{children}</a>
  )
}
