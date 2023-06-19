import React from 'react'

export const Loading = () => {
  return (
    <div className='w-full h-screen p-10'>

      <div className='mt-24 mx-auto font-head w-fit font-extrabold text-gray-400 text-7xl'>



        <div
          className="inline-block h-8 w-8 animate-spin rounded-full  text-violet-950
          border-4 border-solid border-current border-r-transparent 
          align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...
          </span>
        </div>


        <br />
      </div>
      <p className='my-5 w-fit mx-auto font-extrabold text-violet-200 text-5xl text-center'>Finding Pokemons</p>


    </div>
  )
}
