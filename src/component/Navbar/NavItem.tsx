import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  icon?: (iconSize: number) => JSX.Element,
  text: string,
  iconSize?: number,
  children: JSX.Element,
  to: string
}
export default function NavItem(props: Props) {


  return (
    <div>
      <Link to={props.to} className='navItem'>
        <>
          {props.children}
        </>
        <div className='text'>{props.text}</div>
      </Link>
    </div>
  )
}
