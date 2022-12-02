import React, {MouseEvent} from 'react'
interface ILinkProps {
  className?: string,
  href: string,
  children: any
}
export const Link = ({className, href, children}: ILinkProps) => {

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.history.pushState({}, '', href)
  }
  return (
    <a onClick={onClick} className={className} href={href}>{children}</a>
  )
}
