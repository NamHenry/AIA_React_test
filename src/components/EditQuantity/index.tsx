import { useEffect, useState } from 'react'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { GrAddCircle } from 'react-icons/gr'
import './index.scss'
type Props = {
  num: number,
  onIncrease?: () => void,
  onDecrease?: () => void
}
export default function EditQuantity(props: Props) {
  const [internalNum, setInternalNum] = useState(0);
  useEffect(() => {
    setInternalNum(props.num);
  }, [props.num])
  const handleIncrease = () => {
    if (internalNum <= 1000) {
      setInternalNum((num) => num + 1);

    }
    if (props.onIncrease) {
      props.onIncrease();
    }
  }
  const handleDecrease = () => {
    if (internalNum >= 1) {
      setInternalNum((num) => num - 1);

    }
    if (props.onDecrease) {
      props.onDecrease();
    }
  }
  return (
    <>
      <div className='edit-quantity'>
        <div className="container">
          <div data-testid="decrease-btn" className="button" onClick={handleDecrease}>
            <AiOutlineMinusCircle size={30} color='black' />
          </div>
          <div data-testid="quantity" className='num'>
            {internalNum}
          </div>
          <div data-testid="increase-btn" className="button" onClick={handleIncrease}>
            <GrAddCircle size={30} color='black' />
          </div>
        </div>
      </div>
    </>
  )
}
