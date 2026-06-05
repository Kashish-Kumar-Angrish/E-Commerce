import Hero from './Hero.jpg'
import Icon from './Icon.jpeg'
import pimg1 from './pimg1.jpg'
import pimg2 from './pimg2.jpg'
import pimg3 from './pimg3.jpg'
import pimg4 from './pimg4.jpg'
import pimg5 from './pimg5.jpg'
import pimg6 from './pimg6.jpg'
import pimg7 from './pimg7.jpg'
import pimg8 from './pimg8.jpg'
import pimg9 from './pimg9.jpg'
import pimg10 from './pimg10.jpg'

const images = {
  Hero,
  Icon,
}

{/*
  Women Top Wear → 15 products (p001 - p015)
Women Bottom Wear → 8 products (p016 - p023)
Men Top Wear → 10 products (p024 - p033)
Men Bottom Wear → 8 products (p034 - p041)
Kids Wear → 6 products (p042 - p047)
Footwear → 3 products (p048 - p050)
Accessories → 3 products (p051 - p053)
*/}

export const products = [
  {
    "_id": "p001",
    "name": "Women Round Neck Cotton Top",
    "description": "A lightweight and comfortable cotton top for everyday wear.",
    "price": 2000,
    "image": pimg1,
    "category": "Women",
    "subCategory": "Top Wear",
    "sizes": ["S", "M", "L"],
    "date": 1715666201,
    "bestseller": true
  },
  {
    "_id": "p002",
    "name": "Women Floral Printed Top",
    "description": "Stylish floral printed top with a modern fit.",
    "price": 1800,
    "image": pimg2,
    "category": "Women",
    "subCategory": "Top Wear",
    "sizes": ["S", "M", "L", "XL"],
    "date": 1715666202,
    "bestseller": false
  },
  {
    "_id": "p003",
    "name": "Women Casual T-Shirt",
    "description": "Soft cotton t-shirt suitable for casual outings.",
    "price": 1200,
    "image": pimg3,
    "category": "Women",
    "subCategory": "Top Wear",
    "sizes": ["S", "M", "L"],
    "date": 1715666203,
    "bestseller": true
  },
  {
    "_id": "p004",
    "name": "Women Denim Jacket",
    "description": "Classic denim jacket with premium stitching.",
    "price": 3500,
    "image": pimg4,
    "category": "Women",
    "subCategory": "Winter Wear",
    "sizes": ["M", "L", "XL"],
    "date": 1715666204,
    "bestseller": false
  },
  {
    "_id": "p005",
    "name": "Women High Waist Jeans",
    "description": "Comfortable high waist jeans with stretch fabric.",
    "price": 2800,
    "image": pimg5,
    "category": "Women",
    "subCategory": "Bottom Wear",
    "sizes": ["28", "30", "32", "34"],
    "date": 1715666205,
    "bestseller": true
  },
  {
    "_id": "p006",
    "name": "Men Polo T-Shirt",
    "description": "Premium polo t-shirt for smart casual looks.",
    "price": 1700,
    "image": pimg6,
    "category": "Men",
    "subCategory": "Top Wear",
    "sizes": ["M", "L", "XL"],
    "date": 1715666206,
    "bestseller": false
  },
  {
    "_id": "p007",
    "name": "Men Slim Fit Shirt",
    "description": "Formal slim fit shirt with elegant design.",
    "price": 2200,
    "image": pimg7,
    "category": "Men",
    "subCategory": "Top Wear",
    "sizes": ["M", "L", "XL"],
    "date": 1715666207,
    "bestseller": true
  },
  {
    "_id": "p008",
    "name": "Men Denim Jeans",
    "description": "Durable denim jeans with modern styling.",
    "price": 2600,
    "image": pimg8,
    "category": "Men",
    "subCategory": "Bottom Wear",
    "sizes": ["30", "32", "34", "36"],
    "date": 1715666208,
    "bestseller": false
  },
  {
    "_id": "p009",
    "name": "Men Hooded Sweatshirt",
    "description": "Warm and comfortable hoodie for winter.",
    "price": 3000,
    "image": pimg9,
    "category": "Men",
    "subCategory": "Winter Wear",
    "sizes": ["M", "L", "XL"],
    "date": 1715666209,
    "bestseller": true
  },
  {
    "_id": "p010",
    "name": "Men Running Shorts",
    "description": "Lightweight running shorts with quick dry fabric.",
    "price": 1000,
    "image": pimg10,
    "category": "Men",
    "subCategory": "Sports Wear",
    "sizes": ["M", "L", "XL"],
    "date": 1715666210,
    "bestseller": false
  },
  {/*
  "_id": "p011",
  "name": "Women V-Neck Summer Dress",
  "description": "Elegant summer dress made with breathable fabric.",
  "price": 3200,
  "image": pimg11,
  "category": "Women",
  "subCategory": "Dresses",
  "sizes": ["S", "M", "L"],
  "date": 1715666211,
  "bestseller": true
},
{
  "_id": "p012",
  "name": "Women Pleated Midi Skirt",
  "description": "Stylish pleated skirt suitable for casual and formal wear.",
  "price": 2400,
  "image": pimg12,
  "category": "Women",
  "subCategory": "Bottom Wear",
  "sizes": ["S", "M", "L", "XL"],
  "date": 1715666212,
  "bestseller": false
},
{
  "_id": "p013",
  "name": "Women Oversized Graphic T-Shirt",
  "description": "Trendy oversized t-shirt with premium graphic print.",
  "price": 1500,
  "image": pimg13,
  "category": "Women",
  "subCategory": "Top Wear",
  "sizes": ["S", "M", "L", "XL"],
  "date": 1715666213,
  "bestseller": true
},
{
  "_id": "p014",
  "name": "Women Knitted Cardigan",
  "description": "Soft knitted cardigan designed for comfort and warmth.",
  "price": 2900,
  "image": pimg14,
  "category": "Women",
  "subCategory": "Winter Wear",
  "sizes": ["M", "L", "XL"],
  "date": 1715666214,
  "bestseller": false
},
{
  "_id": "p015",
  "name": "Women Wide Leg Trousers",
  "description": "Modern wide leg trousers with a relaxed fit.",
  "price": 2600,
  "image": pimg15,
  "category": "Women",
  "subCategory": "Bottom Wear",
  "sizes": ["28", "30", "32", "34"],
  "date": 1715666215,
  "bestseller": true
},
{
  "_id": "p016",
  "name": "Men Checked Casual Shirt",
  "description": "Classic checked shirt crafted from soft cotton fabric.",
  "price": 2100,
  "image": pimg16,
  "category": "Men",
  "subCategory": "Top Wear",
  "sizes": ["M", "L", "XL", "XXL"],
  "date": 1715666216,
  "bestseller": false
},
{
  "_id": "p017",
  "name": "Men Cargo Joggers",
  "description": "Comfortable cargo joggers with multiple utility pockets.",
  "price": 2700,
  "image": pimg17,
  "category": "Men",
  "subCategory": "Bottom Wear",
  "sizes": ["30", "32", "34", "36"],
  "date": 1715666217,
  "bestseller": true
},
{
  "_id": "p018",
  "name": "Men Bomber Jacket",
  "description": "Premium bomber jacket with a sleek modern design.",
  "price": 4200,
  "image": pimg18,
  "category": "Men",
  "subCategory": "Winter Wear",
  "sizes": ["M", "L", "XL"],
  "date": 1715666218,
  "bestseller": true
},
{
  "_id": "p019",
  "name": "Men Compression Gym T-Shirt",
  "description": "Performance t-shirt designed for workouts and training.",
  "price": 1800,
  "image": pimg19,
  "category": "Men",
  "subCategory": "Sports Wear",
  "sizes": ["M", "L", "XL"],
  "date": 1715666219,
  "bestseller": false
},
{
  "_id": "p020",
  "name": "Men Linen Blend Kurta",
  "description": "Traditional kurta crafted with lightweight linen blend fabric.",
  "price": 2500,
  "image": pimg20,
  "category": "Men",
  "subCategory": "Ethnic Wear",
  "sizes": ["M", "L", "XL", "XXL"],
  "date": 1715666220,
  "bestseller": true
*/}

  
]


export default images