import ProductCard from "../component/ProductCard";
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
export default {
  title: 'ProductCard',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>
const Template: ComponentStory<typeof ProductCard> = (args) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ProductCard {...args} />
      </BrowserRouter>
    </Provider>
  );
}

export const ProductCard1 = Template.bind({});
ProductCard1.args = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
}
export const ProductCard2 = Template.bind({});
ProductCard2.args = {
  id: 2,
  title: "Mens Casual Premium Slim Fit T-Shirts ",
  price: 22.3,
  description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
}
