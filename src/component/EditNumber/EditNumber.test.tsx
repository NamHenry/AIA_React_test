import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditNumber from ".";
let testValue = 0;
let inCreaseButton: HTMLElement;
let deCreaseButton: HTMLElement;
let numberShow: HTMLElement;
beforeEach(() => {
  const mockProps = {
    num: testValue,
    onIncrease: () => { testValue++ },
    onDecrease: () => { testValue-- }
  }
  render(<EditNumber {...mockProps} />);
  deCreaseButton = screen.getByTestId('decrease-btn');
  inCreaseButton = screen.getByTestId('increase-btn');
  numberShow = screen.getByTestId('quantity');
})
test('render exactly', () => {
  expect(deCreaseButton).toBeInTheDocument();
  expect(numberShow).toBeInTheDocument();
  expect(inCreaseButton).toBeInTheDocument();
  expect(numberShow).toHaveTextContent(`${testValue}`)
})
test('Execute prop.inCrease when click inCreaseBtn', () => {
  userEvent.click(inCreaseButton);
  expect(testValue).toEqual(1)
})
test('Execute prop.deCrease when click deCreaseBtn', () => {
  userEvent.click(deCreaseButton);
  expect(testValue).toEqual(0)
})