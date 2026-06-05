import React from 'react'
import { RiCustomerServiceFill, RiExchangeFundsLine } from 'react-icons/ri'
import { BsPatchCheckFill } from 'react-icons/bs'

const OurPolicy = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-sm md:text-base text-gray-700'>

            <div>
                <RiExchangeFundsLine size={40} className='w-12 m-auto mb-5' />
                <p className='font-semibold'>Easy Exchange Policy</p>
                <p className='text-gray-400'>We offer hassle free exchange policy</p>
            </div>
            <div>
                <BsPatchCheckFill size={40} className='w-12 m-auto mb-5' />
                <p className='font-semibold'>7 Days Retrun Policy</p>
                <p className='text-gray-400'>We provide 7 days free return policy</p>
            </div>
            <div>
                <RiCustomerServiceFill size={40} className='w-12 m-auto mb-5' />
                <p className='font-semibold'>Best customer support</p>
                <p className='text-gray-400'>We provide 27/7 customer support</p>
            </div>
        </div>
    )
}

export default OurPolicy
