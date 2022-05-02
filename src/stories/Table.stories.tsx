import Table from "../components/Table";
import EditQuantity from "../components/EditQuantity";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Table',
  component: Table,
  subcomponents: { EditQuantity }
} as ComponentMeta<typeof Table>
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Table1 = Template.bind({});
Table1.args = {
  customFooter: () => {
    return <tfoot data-testid='table-footer'>
      <tr>
        <td colSpan={2} />
        <td style={{ padding: '8px', display: 'flex', justifyContent: 'space-between' }}>
          <div>Total:</div>
          <div>100.00 $</div>
        </td>
      </tr>
    </tfoot>
  },
  headerTitles: [
    'Product Name',
    'Quantity',
    'Price'
  ],
  bodyData: [
    [
      'Product 1',
      <EditQuantity key={1} num={1} onDecrease={() => null} onIncrease={() => null} />,
      '56.93 $',
    ],
    [
      'Product 2',
      <EditQuantity key={1} num={1} onDecrease={() => null} onIncrease={() => null} />,
      '20.82 $'
    ],
    [
      'Product 3',
      <EditQuantity key={1} num={1} onDecrease={() => null} onIncrease={() => null} />,
      '58.24 $'
    ],
  ]
}
export const TableNoProduct = Template.bind({});
TableNoProduct.args = {
  customFooter: () => {
    return <tfoot data-testid='table-footer'>
      <tr>
        <td colSpan={2} />
        <td style={{ padding: '8px', display: 'flex', justifyContent: 'space-between' }}>
          <div>Total:</div>
          <div>100.00 $</div>
        </td>
      </tr>
    </tfoot>
  },
  headerTitles: [
    'Product Name',
    'Quantity',
    'Price'
  ],
  bodyData: [[]]
}