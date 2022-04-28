import React from 'react'
import ProductCard from '../../component/ProductCard'
import './homePage.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


export default function HomePage() {
    const productsData = useSelector((state: RootState) => state.products);

    return (
        <div className='HomePage'>
            <div className="productList">
                {productsData.map((p, i) => {
                    return <ProductCard key={i} product={p}></ProductCard>
                })}
            </div>
        </div>
    )
}
