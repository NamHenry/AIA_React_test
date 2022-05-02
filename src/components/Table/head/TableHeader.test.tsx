import { render, screen } from "@testing-library/react";
import TableHeader from "./TableHeader";
const mockProps = {
  data: [
    'Product Name',
    'Quantity',
    'Price'
  ]
}
describe('Table header test', () => {
  render(
    <table>
      <TableHeader {...mockProps} />
    </table>
  )

  test('Table header should render titles as datas prop transfered to it', () => {
    expect(screen.getAllByRole('columnheader').length).toEqual(mockProps.data.length)
    mockProps.data.forEach((data, i) => {
      expect(screen.getAllByRole('columnheader')[i].textContent).toEqual(data)
    })
  })
})