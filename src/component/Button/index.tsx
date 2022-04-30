import './index.scss'
import CSS from 'csstype';


export type ButtonProps = {
  buttonText: string,
  onClick: () => void,
  className: string,
  disable?: boolean,
  rounded?: boolean,
  size?: string,
  bgColor?: string,
  textColor?: string,
  textBold?: boolean,
}
export default function Button(props: ButtonProps) {
  const handleOnClick = () => {
    if (!props.disable) {
      props.onClick()
    }
  }
  const _style: CSS.Properties = {
  };
  if (props.rounded) {
    _style.borderRadius = '16px'
  }
  if (props.bgColor) {
    _style.backgroundColor = props.bgColor;

  }

  if (props.textColor) {
    _style.color = props.textColor;
  }
  switch (props.size) {
    case 'small': {
      _style.width = '80px';
      break;
    }
    case 'medium': {
      _style.width = '120px';
      break;
    }
    case 'large': {
      _style.width = '200px';
      break;
    }
    case 'full': {
      _style.width = '100%';
      break;
    }
  }
  if (props.textBold) {
    _style.fontWeight = 'bold'
  }
  return (
    <div data-testid='button' style={{ ..._style }} className={`_button ${props.className} ${props.disable ? 'disabled' : ''}`} onClick={handleOnClick}
    >{props.buttonText}</div >
  )
}
