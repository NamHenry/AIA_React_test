import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';

type Props = {
  logo: string
}
import './index.scss'
import NavItem from './NavItem';
export default function NavBar(props: Props) {
  return (
    <div className="navBar">
      <div className='logoContainer' >
        <img src={props.logo} alt="logo" className="logo-image" />
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

