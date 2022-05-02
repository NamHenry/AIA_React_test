import Button from "../components/Button";
import { ComponentMeta, ComponentStory } from '@storybook/react';
export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Gray = Template.bind({});
Gray.args = {
  buttonText: 'Click me',
  bgColor: '#e0e0e0',
  textBold: true,
  textColor: '#000',
  rounded: true,
  size: 'sm',
  disable: false
}
export const Green = Template.bind({});
Green.args = {
  buttonText: 'Click me',
  bgColor: 'green',
  textBold: true,
  textColor: '#fff',
  rounded: true,
  size: 'sm',
  disable: false
}
export const Disabled = Template.bind({});
Disabled.args = {
  buttonText: 'Click me',
  bgColor: 'green',
  textBold: true,
  textColor: '#fff',
  rounded: true,
  size: 'sm',
  disable: true
}
export const Large = Template.bind({});
Large.args = {
  buttonText: 'Click me',
  bgColor: '#2196f3',
  textBold: true,
  textColor: '#fff',
  rounded: true,
  size: 'lg',
  disable: false
}
export const Small = Template.bind({});
Small.args = {
  buttonText: 'Click me',
  bgColor: '#2196f3',
  textBold: true,
  textColor: '#fff',
  rounded: true,
  size: 'sm',
  disable: false
}
export const Medium = Template.bind({});
Medium.args = {
  buttonText: 'Click me',
  bgColor: '#2196f3',
  textBold: true,
  textColor: '#fff',
  rounded: true,
  size: 'md',
  disable: false
}
export const Full = Template.bind({});
Full.args = {
  buttonText: 'Click me',
  bgColor: '#2196f3',
  textBold: true,
  textColor: '#fff',
  rounded: false,
  size: 'full',
  disable: false
}
export const NotRounded = Template.bind({});
NotRounded.args = {
  buttonText: 'Click me',
  bgColor: '#2196f3',
  textBold: true,
  textColor: '#fff',
  rounded: false,
  size: 'sm',
  disable: false
}
export const TextPurple = Template.bind({});
TextPurple.args = {
  buttonText: 'Click me',
  bgColor: '#2196f3',
  textBold: true,
  textColor: '#922656',
  rounded: true,
  size: 'sm',
  disable: false
}

