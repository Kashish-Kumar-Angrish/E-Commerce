import React from 'react'
import Hero from '../components/Hero'
import Latestcollection from '../components/Latestcollection'
import Bestseller from '../components/Bestseller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
    return (
        <div>
            <Hero />
            <Latestcollection />
            <Bestseller />
            <OurPolicy />
            <NewsletterBox />
        </div>
    )
}

export default Home
