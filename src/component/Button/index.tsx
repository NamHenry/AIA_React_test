import './index.scss'
export type Props = {
  buttonText: string,
  onClick: () => void,
  className: string,
  disable?: boolean,
}
export default function Button(props: Props) {
  const handleOnClick = () => {
    if (!props.disable) {
      props.onClick()
    }
  }
  return (
    <div data-testid='button' className={`_button ${props.className} ${props.disable ? 'disabled' : ''}`} onClick={handleOnClick}
    >{props.buttonText}</div >
  )
}
