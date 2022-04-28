import React, { useEffect, useState } from 'react'
import EditNumber from '../../component/EditNumber'
import Table from '../../component/Table'
import './index.scss'
import { Product } from '../../dataModels'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { decrement, increment } from '../../redux/features/cart/cartSlice'
import { AiOutlineConsoleSql } from 'react-icons/ai'
// type Props = {}

export default function CartPage() {
  const productsData = useSelector((state: RootState) => state.products);
  const cartData = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const headerTitles = [
    'Product Name',
    'Quantity',
    'Price'
  ]
  const handleIncrease = (productId: number) => {
    dispatch(increment(productId));
  }
  const handleDecrease = (productId: number) => {
    dispatch(decrement(productId))
  }
  let totalPrice = 0;
  if (cartData.length >= 1) {
    cartData.forEach((item) => {
      const productInCart: (Product | undefined) = productsData.find((p) => {
        return p.id === item.productId;
      })
      if (productInCart) totalPrice += productInCart.price * item.quantity;
    })
  }
  const TableFooter = () => {
    return <tfoot className="TableFooter">
      <tr>
        <td colSpan={2}></td>
        <td className='totalContent'>
          <div>Total</div>
          <div>{totalPrice.toFixed(2) + ' $'}</div>
        </td>
      </tr>
    </tfoot>
  }

  const createBodyData = () => {
    const arr: ((string | number | JSX.Element)[])[] = [];
    if (cartData.length === 0) {
      return [];
    }
    for (let i = 0; i < cartData.length; i++) {
      const productInCart = productsData.find((p: Product) => {
        return cartData[i].productId === p.id
      })
      if (productInCart) {
        const _arr: (string | number | JSX.Element)[] = [];
        _arr.push(productInCart.title);
        _arr.push(<EditNumber num={cartData[i].quantity} onDecrease={() => { handleDecrease(cartData[i].productId) }} onIncrease={() => { handleIncrease(cartData[i].productId) }}></EditNumber>);
        _arr.push((productInCart.price * cartData[i].quantity).toFixed(2) + ' $');
        arr.push(_arr);

      }
    }
    return arr;
  }

  return (
    <div className='CartPage'>
      <div className="title">Cart</div>
      <Table headerTitles={headerTitles} bodyData={createBodyData()} customFooter={TableFooter}></Table>
    </div>
  )
}