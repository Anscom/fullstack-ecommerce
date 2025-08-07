import HomeImage from '../assets/homeimage2.jpg'
import blackpoloshirt from '../assets/blackpoloshirt.avif'
import blueplainshirt from '../assets/blueplainshirt.jpg'
import bluesweatshirt from '../assets/bluesweatshirt.jpg'
import darkblueshirt from '../assets/darkblueshirt.jpg'
import denimjacket1 from '../assets/denimjacket1.avif'
import greenshirt from '../assets/greenshirt.jpg'
import poloplainwhitet from '../assets/poloplainwhitet.jpg'
import whiteshirt1 from '../assets/whiteshirt1.avif'
import SellingPoints from '../component/SellingPoints'
import PromoCards from '../component/PromoCards'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Black Polo Shirt',
    price: 29.0,
    image: blackpoloshirt,
  },
    {
    id: 2,
    name: 'Blue Plain Shirt',
    price: 20.0,
    image: blueplainshirt,
  },
    {
    id: 3,
    name: 'Blue Sweat Shirt',
    price: 49.0,
    image: bluesweatshirt,
  },
    {
    id: 4,
    name: 'Dark Blue Shirt',
    price: 32.50,
    image: darkblueshirt,
  },
    {
    id: 5,
    name: 'Denim Jacket',
    price: 79.99,
    image: denimjacket1,
  },
      {
    id: 6,
    name: 'Green Shirt',
    price: 23.99,
    image: greenshirt,
  },
      {
    id: 7,
    name: 'Polo Plain White Shirt',
    price: 40.99,
    image: poloplainwhitet,
  },
      {
    id: 8,
    name: 'White Shirt',
    price: 26.99,
    image: whiteshirt1,
  },

]

const HomePage = () => {
  return (
    <div>
    <div className='relative w-full h-[500px]'>
      {/* Background image */}
      <img src={HomeImage} className='w-full h-full object-cover' />

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black opacity-50'></div>

      {/* Text content */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10'>
        <h2 className='text-3xl font-bold leading-tight mb-4'>
          STYLIST PICKS BEAT <br /> THE HEAT
        </h2>
        <button className='border border-white px-4 py-2 uppercase text-sm hover:bg-white hover:text-black transition'>
          Shop Now
        </button>
      </div>
    </div>
        <div>
            <h1 className='text-2xl font-bold text-center mt-5'>Discover New Arrivals</h1>
            <br />
            <p className='text-xl text-center'>Recently added shirts!</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-10'>
                {products.map((product) => (
                    <div key={product.id} className='border rounded-lg overflow-hidden shadow-md'>
                        <img 
                            src={product.image}
                            alt={product.name}
                            className='w-full h-64 object-cover'
                        />
                        <div className='p-4 text-center'>
                            <h3 className='text-lg font-semibold'>{product.name}</h3>
                            <p className='text-gray-600'>{product.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div>
            <SellingPoints />
        </div>
        <div>
            <PromoCards />
        </div>
        <div>
    <h1 className='text-2xl font-bold text-center mt-5'>Top Sellers</h1>
    <br />
    <p className='text-xl text-center'>Browse our top-selling products</p>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-10'>
        {products.slice(0, 4).map((product) => (
            <div key={product.id} className='border rounded-lg overflow-hidden shadow-md'>
                <img 
                    src={product.image}
                    alt={product.name}
                    className='w-full h-64 object-cover'
                />
                <div className='p-4 text-center'>
                    <h3 className='text-lg font-semibold'>{product.name}</h3>
                    <p className='text-gray-600'>${product.price.toFixed(2)}</p>
                </div>
            </div>
        ))}
    </div>
    <div className='text-center mb-10'>
        <a href="/shop" className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block'>
            SHOP NOW
        </a>
    </div>
        </div>
    </div>
  )
}

export default HomePage
