import React from 'react'
import { Navbar } from '../components/Navbar'
import { Listings } from '../components/Listings'
import { Footer } from '../components/Footer'

export const Home = () => {
    return (

        <div>
            <Navbar />


            <div className='px-3 sm:px-10'>




                <p className='my-5 text-gray-800 text-2xl font-light'>
                    All Pokemons
                </p>

                <Listings />





            </div>



            <Footer />
        </div>
    )
}
