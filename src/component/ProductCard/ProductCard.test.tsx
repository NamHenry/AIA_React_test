import ProductCard from ".";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
const mockProps = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",

}
describe('Test ProductCard component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductCard {...mockProps} />
        </BrowserRouter>
      </Provider>
    );
  })
  test('ProductCard should display image, name, price of the product and 2 buttons ', () => {
    expect(screen.getByTestId('product-img').getAttribute('src')).toEqual(mockProps.image)
    expect(screen.getByTestId('product-name').textContent).toEqual(mockProps.title)
    expect(screen.getByTestId('product-price').textContent).toEqual(mockProps.price + ' $')
    expect(screen.getAllByTestId('button').length).toEqual(2);
    expect(screen.getAllByTestId('button')[0].textContent).toEqual('More Info');
    expect(screen.getAllByTestId('button').length).toEqual(2);
  })
})
