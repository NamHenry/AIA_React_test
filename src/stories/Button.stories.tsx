import Button from "../component/Button";
import { ComponentMeta, ComponentStory } from '@storybook/react';
export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Button1 = Template.bind({});
Button1.args = {
  buttonText: 'Click me',
  bgColor: 'green',
  textBold: true,
  textColor: '#fff',
  rounded: true,
  size: 'small',
  disable: false
}