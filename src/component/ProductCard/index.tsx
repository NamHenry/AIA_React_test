import Button from '../Button';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../../dataModels';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { RootState } from '../../redux/store';
type Props = {
  id: number,
  title: string,
  price: number,
  description: string,
  image: string
}
export default function ProductCard(product: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartData = useSelector((state: RootState) => state.cart);
  const handleMoreInfo = () => {
    navigate('/product/' + product.id)
  }
  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, quantity: 1 }))
  }
  const productInCard = cartData.find((item: CartItem) => {
    return item.productId === product.id;
  })
  return (
    <div className='productCard'>
      <div className="imageContainer">
        <img data-testid='product-img' className='productImage' src={product.image} alt='product image' />
      </div>
      <div className="content">
        <div data-testid='product-name' className="productName">{product.title}</div>
        <div data-testid='product-price' className="price">{`${product.price} $`}</div>
      </div>
      <div className="buttons">
        <Button onClick={handleMoreInfo} buttonText='More Info' className='button' />
        <Button disable={productInCard ? true : false} onClick={handleAddToCart} buttonText={productInCard ? 'Added to Cart' : 'Add to Cart'} className='button' />
      </div>
    </div>
  )
}
