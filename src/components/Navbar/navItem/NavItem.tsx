import { Link } from 'react-router-dom'
import './NavItem.scss'
interface Props {
  text: string,
  children?: JSX.Element,
  to: string
}
export default function NavItem(props: Props) {
  return (
    <div>
      <Link to={props.to} className='nav-item'>
        {props.children}
        <div className='text'>{props.text}</div>
      </Link>
    </div>
  )
}
