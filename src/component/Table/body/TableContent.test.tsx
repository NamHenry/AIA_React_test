import { render, screen } from "@testing-library/react";
import EditNumber from "../../EditNumber";
import TableContent from "./TableContent";

const mockProps = {
  data: [
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
describe('Test TableContent', () => {
  render(
    <table>
      <TableContent {...mockProps} />
    </table>
  );

  test('TableContent should receice array of type ((JSX.Element | String)[]), and render each item (as a array) of that array in a row', () => {
    expect(screen.getAllByRole('row').length).toEqual(mockProps.data.length);
    mockProps.data.forEach((data, i) => {
      expect(screen.getAllByRole('row')[i].childNodes.length).toEqual(data.length)
    })

  })
})