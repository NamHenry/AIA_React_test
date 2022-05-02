import NavItem from "./NavItem";
import { BsCartFill } from 'react-icons/bs';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

const mockProps = {
  text: 'Home',
  to: '/home'
}
const icon = <BsCartFill data-testid='icon' />
describe('Test NavItem component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavItem {...mockProps}>{icon}</NavItem>
      </BrowserRouter>
    )
  })
  test('NavItem should be a link, display icon and text as props transfered to it', () => {
    expect(screen.getAllByRole('link').length).toEqual(1);
    expect((screen.getAllByRole('link')[0].firstChild)).toEqual(screen.getByTestId('icon'))
    expect(screen.getAllByRole('link')[0].lastChild?.textContent).toEqual('Home')
  })
})
