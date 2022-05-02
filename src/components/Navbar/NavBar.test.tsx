import NavBar from ".";
import { render, screen } from "@testing-library/react";
import logo from '../../assets/logo.png'
import { BrowserRouter } from "react-router-dom";
const mockProps = {
  logo: logo
}
describe('Test NavBar component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavBar {...mockProps} />
      </BrowserRouter>
    );
  })
  test('NavBar render well', () => {
    expect(screen.getByTestId('logo').getAttribute('src')).toEqual(logo)
    expect(screen.getAllByRole('link').length).toEqual(2)
  })
})
