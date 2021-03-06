import { AiFillHome } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';

type Props = {
  logo: string
}
import './index.scss'
import NavItem from './navItem/NavItem';
export default function NavBar(props: Props) {
  return (
    <div className="nav-bar">
      <div className='logo-container' >
        <img data-testid='logo' src={props.logo} alt="logo" className="logo-image" />
      </div>
      <div className="buttons" >
        <NavItem to='/home' text='home'>
          <AiFillHome size={40} color='black' />
        </NavItem>
        <NavItem to='/cart' text='cart'>
          <BsCartFill size={40} color='black' />
        </NavItem>


      </div>
    </div>


  );
}

