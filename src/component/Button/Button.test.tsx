import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button, { Props } from './index'
let testValue = 'initial value';
let button: HTMLElement;
const mockProps: Props = {
  buttonText: 'Click me',
  onClick: () => { testValue = 'Button clicked' },
  className: 'button',
}
describe('Test Button Component', () => {

  beforeEach(() => {
    button = render(<Button {...mockProps} />).container.firstChild as HTMLElement;
  })
  test('Button render exactly', () => {
    expect(button).toHaveTextContent('Click me');
    expect(button).toHaveClass('_button');
    expect(button).toHaveClass('button');
  })
  test('Button execute onClick prop when click', () => {
    userEvent.click(button);
    expect(testValue).toEqual('Button clicked');
    testValue = 'initial value';
  })

  test('Button can not clicked when disabled', () => {
    mockProps.disable = true;
    const newButton = render(<Button {...mockProps} />).container.firstChild as Element;
    userEvent.click(newButton);
    expect(testValue).toEqual('initial value')
    expect(newButton).toHaveClass('disabled')
  })

})
