import EditQuantity from "../components/EditQuantity";
import { ComponentMeta, ComponentStory } from '@storybook/react';
export default {
  title: 'EditQuantity',
  component: EditQuantity,
} as ComponentMeta<typeof EditQuantity>
const Template: ComponentStory<typeof EditQuantity> = (args) => <EditQuantity {...args} />;

export const NormalEditQuantity = Template.bind({});
let testValue = 0;
NormalEditQuantity.args = {
  num: testValue,
  onIncrease: () => { testValue++ },
  onDecrease: () => { if (testValue >= 1) testValue-- }
}