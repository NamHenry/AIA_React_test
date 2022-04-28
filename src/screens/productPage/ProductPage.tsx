import React from 'react'
import './index.scss'
import logo from '../../assets/logo.png'
import EditNumber from '../../component/EditNumber'
import Button from '../../component/Button'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { decrement, increment } from '../../redux/features/cart/cartSlice'

export default function ProductPage() {
  const { id } = useParams();
  const productsData = useSelector((state: RootState) => state.products);
  const productShowed = productsData.find((p, i) => {
    return p.id === Number(id)
  })
  const cartData = useSelector((state: RootState) => state.cart);
  const productInCart = cartData.find((item) => item.productId === Number(id));
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(increment(Number(id)));
  }
  const handleDecrease = () => {
    dispatch(decrement(Number(id)));
  }
  const handleAddToCart = () => {
    dispatch(increment(Number(id)))
  }
  if (productShowed) {
    return (
      <div className='ProductPage'>
        <div className="imageContainer">
          <img className='image' src={productShowed.image} alt="product image" />
        </div>
        <div className="productDetails">
          <div className="d-flex padding-8">
            <div className='flex-1'>Product name :</div>
            <div className='flex-1 title'>{productShowed.title}</div>
          </div>
          <div className="d-flex padding-8">
            <div className='flex-1'>Price :</div>
            <div className='flex-1 price'>{productShowed.price + ' $'}</div>
          </div>
          <div className="d-flex padding-8">
            <div className='flex-1'>Description :</div>
            <div className='flex-1 des'>{productShowed.description} </div>
          </div>
        </div>
        <div className="actions">
          <div className="quantity">
            <div className="flex-1 ">
              Quantity :
            </div>
            <div className="flex-1">
              {productInCart ?
                <EditNumber num={productInCart?.quantity} onDecrease={handleDecrease} onIncrease={handleIncrease}></EditNumber>
                : <EditNumber num={0} onDecrease={() => { return null }} onIncrease={handleIncrease}></EditNumber>
              }
            </div>
          </div>
          <Button disable={productInCart ? true : false} onClick={handleAddToCart} className='addToCard' buttonText='Add to Card'></Button>
        </div>
      </div>
    )
  } else {
    return (
      <h3>Product not found</h3>
    )
  }

}
