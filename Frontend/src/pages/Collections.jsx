import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/Shopcontext'
import { IoMdArrowDropdown } from 'react-icons/io';
import Title from '../components/Title'
import Productitem from '../components/Productitem'

const Collections = () => {

    const { products } = useContext(shopContext);
    const [showFilter, setShowFilter] = useState(false)
    const [filterProducts, setFilterProducts] = useState([])
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [sortType, setSortType] = useState('relevant')

    const normalizeValue = (value) => String(value).toLowerCase().replace(/\s+/g, '')

    const toggelCategory = (e) => {
        const value = normalizeValue(e.target.value)

        setCategory(prev =>
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        )
    }

    const toggleSubCategory = (e) => {
        const value = normalizeValue(e.target.value)

        setSubCategory(prev =>
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        )
    }

    const applyFilter = () => {
        let productsCopy = [...products]

        if (category.length > 0) {
            productsCopy = productsCopy.filter(item =>
                category.includes(normalizeValue(item.category))
            )
        }

        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item =>
                subCategory.includes(normalizeValue(item.subCategory))
            )
        }

        if (sortType === 'low-high') {
            productsCopy.sort((a, b) => a.price - b.price)
        } else if (sortType === 'high-low') {
            productsCopy.sort((a, b) => b.price - a.price)
        }

        setFilterProducts(productsCopy)
    }

    useEffect(() => {
        applyFilter()
    }, [category, subCategory, sortType, products])


    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

            {/* Filter Options */}
            <div className='min-w-60'>
                <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
                    <IoMdArrowDropdown onClick={() => { setShowFilter(!showFilter) }} size={20} className={`sm:hidden ${showFilter ? 'rotate-0' : 'rotate-270'}`} />
                </p>

                {/* Category Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-33=' type="checkbox" value={'Men'} onChange={toggelCategory} />MEN
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-33=' type="checkbox" value={'Women'} onChange={toggelCategory} />WOMEN
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-33=' type="checkbox" value={'Kids'} onChange={toggelCategory} />KIDS
                        </p>
                    </div>
                </div>

                {/*Sub CAtegory Filter */}
                <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>TYPE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-33=' type="checkbox" value={'Top Wear'} onChange={toggleSubCategory} />TOP WEAR
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-33=' type="checkbox" value={'Bottom Wear'} onChange={toggleSubCategory} />BOTTOM WEAR
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-33=' type="checkbox" value={'Winter Wear'} onChange={toggleSubCategory} />WINTER WEAR
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'ALL'} text2={'COLLECTION'} />

                    {/* PRODUCT SORT */}
                    <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2' value={sortType}>
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>

                {/* Map Products */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {
                        filterProducts.map((items, index) => (
                            <Productitem key={index} id={items.index} name={items.name} price={items.price} image={items.image} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Collections
