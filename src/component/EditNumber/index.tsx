import React from 'react'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { GrAddCircle } from 'react-icons/gr'
import './index.scss'
type Props = {
  num: number,
  onIncrease: () => void,
  onDecrease: () => void
}
export default function EditNumber(props: Props) {
  return (
    <>
      <div className='EditNumber'>
        <div className="container">
          <div className="button" onClick={props.onDecrease}>
            <AiOutlineMinusCircle size={30} color='black' />
            <p></p>
          </div>
          <div className='num'>
            {props.num}
          </div>
          <div className="button" onClick={props.onIncrease}>
            <GrAddCircle size={30} color='black' />
          </div>

        </div>
      </div>
    </>
  )
}
