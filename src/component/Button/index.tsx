import React from 'react'
import './index.scss'
type Props = {
  buttonText: string,
  onClick: () => void,
  className: string,
  disable?: boolean,
}
export default function Button(props: Props) {
  return (
    <div className={`_button ${props.className} ${props.disable ? 'disabled' : ''}`} onClick={props.disable ? () => { return null } : props.onClick}
    > {props.buttonText}</div >
  )
}
