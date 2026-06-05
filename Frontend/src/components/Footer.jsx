import React from 'react'
import images from '../assets/assets.js'

const Footer = () => {
    return (
        <footer>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div className=''>
                    <img className='h-12 w-auto' style={{ filter: 'invert(1)', brightness: (1.2), contrast: (1.2) }} src={images.Icon} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Trendora is your destination for the latest fashion trends, offering quality products that combine style, comfort, and affordability.
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privecy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li>support@trendora.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2026@ forever.com - All Rights are Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
