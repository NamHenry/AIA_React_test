import NavItem from "../component/Navbar/navItem/NavItem";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from "react-router-dom";
import { BsCart, BsHouseDoor } from "react-icons/bs";
export default {
  title: 'NavItem',
  component: NavItem,
} as ComponentMeta<typeof NavItem>
const Template: ComponentStory<typeof NavItem> = (args) => {
  return (
    <BrowserRouter>
      <NavItem {...args} />
    </BrowserRouter>
  );
}

export const HomeNav = Template.bind({});
HomeNav.args = {
  children: <BsHouseDoor color="black" size={40} />,
  text: 'HOME',
  to: '/home'
}

export const CartNav = Template.bind({});
CartNav.args = {
  children: <BsCart color="black" size={40} />,
  text: 'CART',
  to: '/cart'
}
