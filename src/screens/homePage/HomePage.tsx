import ProductCard from '../../components/ProductCard'
import './homePage.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


export default function HomePage() {
    const productsData = useSelector((state: RootState) => state.products);

    return (
        <div className='home-page'>
            <div className="product-list">
                {productsData.map((p, i) => {
                    return <ProductCard
                        key={i}
                        id={p.id}
                        title={p.title}
                        price={p.price}
                        description={p.description}
                        image={p.image}
                    />
                })}
            </div>
        </div>
    )
}
