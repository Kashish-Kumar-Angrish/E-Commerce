import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/Shopcontext'
import Title from './Title';
import Productitem from './Productitem';

const Latestcollection = () => {

    const { products } = useContext(shopContext);
    const [latestProduct, setLatestProducts] = useState([])

    useEffect(() => {
        if (products?.length) {
            setLatestProducts(products.slice(0, 10))
        }
    }, [products])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Elevate your wardrobe with the Latest Collection. Suits Premium clothing brands
                </p>
            </div>

            {/* Rendering Products */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProduct.map((item) => (
                        <Productitem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default Latestcollection
