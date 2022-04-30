import { render, screen } from '@testing-library/react';
import Table from '.';
import EditNumber from '../EditQuantity';
const mockProps = {
  customFooter: () => {
    return <tfoot data-testid='table-footer'>
      <tr>
        <td colSpan={2} />
        <td >
          <div>Total</div>
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
      <EditNumber key={1} num={1} onDecrease={() => null} onIncrease={() => null} />,
      '56.93 $'
    ],
    [
      'Product 2',
      <EditNumber key={1} num={1} onDecrease={() => null} onIncrease={() => null} />,
      '20.82 $'
    ],
    [
      'Product 3',
      <EditNumber key={1} num={1} onDecrease={() => null} onIncrease={() => null} />,
      '58.24 $'
    ],
  ]
}
describe('Table test', () => {
  render(<Table {...mockProps} />);

  test('Table should receive header titles for rendering TableHeader, receive body data for rendering TableContent and receiver a customFooter to make a footer for the table ', () => {
    expect(screen.getByTestId('table-head')).toBeInTheDocument();
    expect(screen.getByTestId('table-body')).toBeInTheDocument();
    expect(screen.getByTestId('table-footer')).toBeInTheDocument();

  })
})