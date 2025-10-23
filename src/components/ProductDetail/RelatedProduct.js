import React from 'react'
import prdData from '@/data/products.json'
import Product from '../Product'

const RelatedProduct = () => {
    const randomIndex = Math.floor(Math.random() * (prdData.length - 4))
    return (
        <div className='product_related sm:py-25 py-15'>
            <div className="container">
                <h3 className="heading3 text-center">Related Products</h3>
                <div className="product_list grid xl:grid-cols-4 grid-cols-2 sm:gap-7.5 gap-5 gap-y-10 sm:mt-10 mt-7">
                    {prdData.slice(randomIndex, randomIndex + 4).map(item => (
                        <Product key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RelatedProduct
