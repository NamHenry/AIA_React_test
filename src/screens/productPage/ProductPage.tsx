import './index.scss'
import EditQuantity from '../../components/EditQuantity'
import Button from '../../components/Button'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { addToCart, decrement, increment } from '../../redux/features/cart/cartSlice'
import { useEffect, useState } from 'react'

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const productsData = useSelector((state: RootState) => state.products);
  const cartData = useSelector((state: RootState) => state.cart);
  const productShowed = productsData.find((p) => {
    return p.id === Number(id);
  })
  const productInCart = cartData.find((item) => item.productId === Number(id));

  useEffect(() => {
    if (productInCart) {
      setQuantity(productInCart.quantity)

    }
  }, [productInCart?.quantity])
  const handleIncrease = () => {
    if (quantity <= 999) {
      setQuantity(quantity => quantity + 1);

    }
    if (productInCart) {
      dispatch(increment(Number(id)));

    }
  }
  const handleDecrease = () => {
    if (quantity >= 1) {
      setQuantity(quantity => quantity - 1);
    }
    if (productInCart) {
      dispatch(decrement(Number(id)));

    }
  }
  const handleAddToCart = () => {
    if (!productInCart) {
      dispatch(addToCart({ id: Number(id), quantity: quantity }))
    }
  }
  if (productShowed) {
    return (
      <div className='product-page'>
        <div className="image-container">
          <img className='image' src={productShowed.image} alt="product image" />
        </div>
        <div className="product-details">
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
                <EditQuantity num={productInCart?.quantity} onDecrease={handleDecrease} onIncrease={handleIncrease} />
                : <EditQuantity num={quantity} onDecrease={handleDecrease} onIncrease={handleIncrease} />
              }
            </div>
          </div>
          <Button disable={productInCart ? true : false} onClick={handleAddToCart} className='add-to-cart' buttonText={productInCart ? 'Added to Cart' : 'Add to Cart'} />
        </div>
      </div>
    )
  } else {
    return (
      <h3>Product not found</h3>
    )
  }

}
