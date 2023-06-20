import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'









export const Notfound = () => {









    return (
        <div className='w-full h-96'>

            <Navbar />



            <p className='mt-40 mb-60 mx-auto w-fit font-bold text-3xl sm:text-5xl text-violet-400 animate-pulse text-center'>
                Pokemon Not Found

                <span className='text-xl font-extralight text-gray-800 block'>Check the spelling...</span>
            </p>




            <Footer/>




        </div>
    )
}
