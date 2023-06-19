import React from 'react'

export const Navbar = () => {
    return (

        <div className='p-3 sm:p-10 rounded-b-2xl bg-blue-50'>

            <div className='mx-auto flex justify-between'>

                <p className='my-auto text-gray-800 text-3xl font-extrabold'>
                    Poke
                    <span className='text-violet-950'>
                    dex
                    </span>
                </p>


                <div className='sm:border rounded-xl p-5 flex justify-between space-x-3 cursor-pointer sm:hover:bg-white duration-700'>

                    <p className='hidden sm:block text-gray-800'>Bookmarks</p>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        className="w-6 h-6">
                        <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                    </svg>

                </div>

            </div>




            <div className='flex'>

                <input type="text" placeholder="Charmander..."
                    className='mt-10 bg-white h-12 text-gray-600 w-full rounded-l-xl p-5 outline-none font-extralight' />

                <div className='mt-10 h-12 p-3 bg-violet-950 text-white px-10 rounded-r-xl cursor-pointer
                    hover:bg-violet-900 hover:shadow-xl hover:shadow-violet-300 duration-700'>
                    Find
                </div>

            </div>

        </div>
    )
}
