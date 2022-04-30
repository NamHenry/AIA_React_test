import Navbar from "../component/Navbar";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.jpg'
import { BrowserRouter } from "react-router-dom";
export default {
  title: 'Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>
const Template: ComponentStory<typeof Navbar> = (args) => {
  return (
    <BrowserRouter>
      <Navbar {...args} />
    </BrowserRouter>
  );
}

export const Navbar1 = Template.bind({});
Navbar1.args = {
  logo: logo
}
export const Navbar2 = Template.bind({});
Navbar2.args = {
  logo: logo2
}